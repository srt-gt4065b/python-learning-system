/* =========================================================
   Python 실행 워커 (Pyodide)
   - 메인 화면과 분리된 스레드에서 실행 → 무한 루프가 있어도 화면이 멈추지 않음
   - 실행 시간 초과 시 메인 스레드가 워커를 종료하고 다시 만듭니다
   ========================================================= */
const PYODIDE_VERSION = '0.27.2';
importScripts(`https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/pyodide.js`);

let pyodide = null;

const SETUP_PY = String.raw`
import os, gzip, json, builtins
os.makedirs('/data', exist_ok=True)
os.chdir('/data')

def _w(name, text):
    with open(name, 'w', encoding='utf-8') as f:
        f.write(text)

people = """name,age,city,salary
Alice,25,Seoul,3000000
Bob,30,Busan,4000000
Charlie,35,Incheon,5000000
David,28,Daegu,3500000
Eve,32,Gwangju,4500000
Frank,27,Seoul,3200000
Grace,29,Busan,3800000
Henry,31,Incheon,4200000
"""
_w('file.csv', people)
_w('data.csv', people)
_w('any.csv', people)
_w('utf8.csv', "이름,학과,점수\n김철수,AI경영,88\n이영희,AI경영,92\n박민수,경영,79\n")
_w('sales.csv', """product,quantity,price,date
Laptop,5,1200000,2024-01-01
Mouse,20,25000,2024-01-02
Keyboard,15,80000,2024-01-03
Monitor,8,350000,2024-01-04
Laptop,3,1200000,2024-01-05
""")
_w('students.csv', """student_id,name,math,english,science
1,김철수,85,90,88
2,이영희,92,88,95
3,박민수,78,85,80
4,최지은,95,92,97
5,정하늘,88,86,90
""")
_w('raw.csv', "1,Kim,80\n2,Lee,90\n3,Park,85\n")
_w('semi.csv', "name;score;grade\nKim;80;B\nLee;90;A\nPark;85;B\n")
_w('cols.csv', "A,B,C,D\n1,2,3,4\n5,6,7,8\n9,10,11,12\n")
_w('big.csv', "id,value\n" + "".join(f"{i},{i*i}\n" for i in range(1, 101)))
_w('large.csv', "id,value,group\n" + "".join(f"{i},{(i*37)%101},{'ABC'[i%3]}\n" for i in range(1, 5001)))
_w('data.json', json.dumps([{"name":"Kim","score":80},{"name":"Lee","score":90},{"name":"Park","score":85}]))
_w('data.tsv', "name\tscore\nKim\t80\nLee\t90\nPark\t85\n")
_w('with_index.csv', "id,name,score\n101,Kim,80\n102,Lee,90\n103,Park,85\n")
_w('space.csv', "name, score, city\nKim, 80, Seoul\nLee, 90, Busan\n")
_w('na.csv', "name,score\nKim,80\nLee,NA\nPark,-\nChoi,95\n")
_w('date.csv', "date,sales\n2024-01-01,100\n2024-01-02,120\n2024-01-03,90\n")
_w('error.csv', "name,score\nKim,80\nLee,90\n")
_w('skip.csv', "# 이 줄은 설명입니다\nname,score\nKim,80\nLee,90\n")
_w('complex.csv', "name|score|city\nKim|80|Seoul\nLee|90|Busan\n")
with gzip.open('data.csv.gz', 'wt', encoding='utf-8') as f:
    f.write(people)

def _no_input(prompt=''):
    raise RuntimeError("이 학습 환경에서는 input()을 사용할 수 없어요. 값을 변수에 직접 넣어 주세요.")
builtins.input = _no_input
`;

const EXCEL_PY = String.raw`
import os
if not os.path.exists('/data/sample.xlsx'):
    import pandas as pd
    pd.DataFrame({'name':['Kim','Lee','Park'],'score':[80,90,85]}).to_excel('/data/sample.xlsx', index=False)
`;

async function init() {
  pyodide = await loadPyodide();
  await pyodide.loadPackage(['numpy', 'pandas']);
  await pyodide.runPythonAsync(SETUP_PY);
  // 자주 쓰는 모듈 미리 import (첫 실행 지연 감소)
  await pyodide.runPythonAsync('import numpy, pandas');
}
const ready = init();

self.onmessage = async (e) => {
  const { type, id, code } = e.data || {};
  if (type === 'init') {
    try { await ready; self.postMessage({ type: 'ready', version: PYODIDE_VERSION }); }
    catch (err) { self.postMessage({ type: 'init-error', error: String(err && err.message || err) }); }
    return;
  }
  if (type !== 'run') return;

  let out = '';
  try {
    await ready;
    pyodide.setStdout({ batched: s => { out += s + '\n'; } });
    pyodide.setStderr({ batched: s => { out += s + '\n'; } });

    // import 문에 맞춰 필요한 패키지 자동 로드 (matplotlib, scipy 등)
    try { await pyodide.loadPackagesFromImports(code); } catch {}
    if (/read_excel|to_excel|\.xlsx/.test(code)) {
      if (!self._excelReady) {
        await pyodide.loadPackage('micropip');
        try { await pyodide.pyimport('micropip').install('openpyxl'); }
        catch (e) { throw new Error('엑셀 파일을 읽는 모듈(openpyxl)을 내려받지 못했어요. 인터넷 연결을 확인한 뒤 다시 실행해 주세요.'); }
        await pyodide.runPythonAsync(EXCEL_PY);
        self._excelReady = true;
      }
    }

    // 매 실행마다 깨끗한 변수 공간 사용 (이전 실행 변수가 남지 않도록)
    const ns = pyodide.globals.get('dict')();
    try {
      pyodide.runPython("import os; os.chdir('/data')");
      await pyodide.runPythonAsync(code, { globals: ns });
    } finally { ns.destroy(); }
    self.postMessage({ type: 'result', id, ok: true, output: out });
  } catch (err) {
    let msg = String(err && err.message || err);
    // Pyodide 내부 스택 줄 제거 → 학생 코드 관련 부분만 표시
    const lines = msg.split('\n');
    const idx = lines.findIndex(l => l.includes('File "<exec>"'));
    if (idx > 0) msg = 'Traceback (most recent call last):\n' + lines.slice(idx).join('\n');
    self.postMessage({ type: 'result', id, ok: false, output: out, error: msg.trim() });
  }
};
