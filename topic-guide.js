/* =========================================================
   주제(문제 유형) 안내 — 그룹 · 정의 · 필요성 · 연습 전략 (한국어 · English · 中文)
   새 주제를 추가하면 TOPIC_GROUPS 와 TOPIC_GUIDE 에 함께 넣어 주세요.
   (가이드가 없는 주제도 '기타' 그룹으로 표시됩니다)
   ========================================================= */
const TOPIC_GROUPS = [
  { key: 'basics', icon: '🧱', topics: ['datatypes', 'operations', 'io', 'strings', 'collections'],
    label: { ko: '1단계 · 파이썬 기초 문법', en: 'Step 1 · Python Basics', zh: '第 1 步 · Python 基础语法' },
    desc:  { ko: '값을 담고, 계산하고, 보여 주는 가장 기본기입니다.', en: 'The essentials: storing values, calculating, and showing results.', zh: '最基本的功夫：存储数值、计算并显示结果。' } },
  { key: 'flow', icon: '🔀', topics: ['conditionals', 'loops'],
    label: { ko: '2단계 · 흐름 제어', en: 'Step 2 · Control Flow', zh: '第 2 步 · 流程控制' },
    desc:  { ko: '상황에 따라 다르게, 필요한 만큼 반복하도록 프로그램의 흐름을 다룹니다.', en: 'Make programs decide and repeat — the logic behind every app.', zh: '让程序根据情况做判断、按需要重复执行。' } },
  { key: 'structure', icon: '🧩', topics: ['functions', 'exceptions', 'modules', 'classes', 'files'],
    label: { ko: '3단계 · 코드 구조화', en: 'Step 3 · Structuring Code', zh: '第 3 步 · 代码结构化' },
    desc:  { ko: '코드를 나누고, 재사용하고, 오류와 파일까지 다루는 실전 단계입니다.', en: 'Split, reuse and protect your code, and work with files — real-world skills.', zh: '拆分、复用代码，处理错误和文件，进入实战阶段。' } },
  { key: 'data', icon: '📊', topics: ['numpy', 'pandas', 'data_loading'],
    label: { ko: '4단계 · 데이터 분석', en: 'Step 4 · Data Analysis', zh: '第 4 步 · 数据分析' },
    desc:  { ko: '경영 데이터를 다루는 데 꼭 필요한 NumPy·Pandas를 익힙니다.', en: 'NumPy and Pandas — the core tools for business data.', zh: '掌握处理经营数据必备的 NumPy 与 Pandas。' } }
];
const OTHER_GROUP = { key: 'other', icon: '📘', label: { ko: '기타 주제', en: 'Other Topics', zh: '其他主题' }, desc: { ko: '', en: '', zh: '' } };

/* def: 정의 · need: 왜 필요한가 · tip: 연습 전략 */
const TOPIC_GUIDE = {
  datatypes: {
    ko: { def: '숫자(int·float), 문자열(str), 리스트·튜플·딕셔너리·집합처럼 값의 “종류”를 다룹니다.',
          need: '자료형에 따라 할 수 있는 연산이 달라집니다. 대부분의 초보 오류(TypeError)가 자료형 혼동에서 생겨요.',
          tip: 'type()으로 값의 종류를 직접 확인하고, 인덱스는 0부터라는 점을 손으로 세며 연습하세요.' },
    en: { def: 'The “kinds” of values: numbers (int, float), strings (str), lists, tuples, dictionaries and sets.',
          need: 'What you can do with a value depends on its type. Most beginner errors (TypeError) come from mixing types.',
          tip: 'Check values with type(), and count indexes by hand — remember they start at 0.' },
    zh: { def: '处理数值的“种类”：数字（int、float）、字符串（str）、列表、元组、字典和集合。',
          need: '不同的数据类型能做的运算不同。大多数新手错误（TypeError）都来自类型混淆。',
          tip: '用 type() 亲自查看值的类型，并动手数一数索引——记住索引从 0 开始。' } },
  operations: {
    ko: { def: '+ − * / // % ** 같은 산술 연산과 비교(>, ==), 논리(and·or·not) 연산입니다.',
          need: '매출 합계, 할인율, 조건 판단 등 모든 계산과 판단의 바탕이 됩니다.',
          tip: '/ 와 //, % 의 차이를 직접 실행해 비교하고, 헷갈리면 괄호로 우선순위를 명확히 하세요.' },
    en: { def: 'Arithmetic (+ − * / // % **), comparison (>, ==) and logical (and, or, not) operators.',
          need: 'They are the basis of every calculation and decision — totals, discount rates, conditions.',
          tip: 'Run / vs // vs % side by side to see the difference, and use parentheses whenever precedence is unclear.' },
    zh: { def: '+ − * / // % ** 等算术运算，以及比较（>、==）和逻辑（and、or、not）运算。',
          need: '销售总额、折扣率、条件判断等一切计算与判断都以此为基础。',
          tip: '亲自运行比较 /、// 与 % 的区别；拿不准优先级时就加括号。' } },
  io: {
    ko: { def: 'print()와 f-string으로 결과를 원하는 모양(소수점, 쉼표, 정렬)으로 보여 주는 방법입니다.',
          need: '계산이 맞아도 출력 형식이 다르면 오답이 됩니다. 보고서·리포트의 숫자 표현도 같은 원리예요.',
          tip: '예상 출력과 공백·쉼표 하나까지 비교하는 습관을 들이고, f\'{값:.2f}\' 같은 서식 코드를 직접 바꿔 보세요.' },
    en: { def: 'Showing results the way you want with print() and f-strings — decimals, commas, alignment.',
          need: 'Even a correct calculation is marked wrong if the format differs. Reports use the same formatting ideas.',
          tip: 'Compare your output with the expected one down to every space and comma, and experiment with codes like f\'{x:.2f}\'.' },
    zh: { def: '用 print() 和 f-string 按想要的格式（小数位、千位分隔符、对齐）显示结果。',
          need: '即使计算正确，输出格式不同也会判错。报告中的数字表达也是同样的原理。',
          tip: '养成逐个空格、逗号对比预期输出的习惯，并亲手修改 f\'{值:.2f}\' 这类格式代码试试。' } },
  strings: {
    ko: { def: 'upper·split·join·replace·find 같은 메서드로 글자를 자르고, 바꾸고, 찾는 방법입니다.',
          need: '이름·이메일·상품명처럼 실제 데이터의 상당 부분이 텍스트이고, 정리(전처리)가 꼭 필요합니다.',
          tip: '메서드 하나씩 결과를 print로 확인한 뒤 strip().lower()처럼 이어 붙이세요. 문자열은 원본이 바뀌지 않는다는 점을 기억하세요.' },
    en: { def: 'Cutting, changing and searching text with methods like upper, split, join, replace and find.',
          need: 'Much real data — names, emails, product names — is text and needs cleaning before analysis.',
          tip: 'Print the result of one method at a time, then chain them like strip().lower(). Remember strings never change in place.' },
    zh: { def: '用 upper、split、join、replace、find 等方法切分、替换和查找文本。',
          need: '姓名、邮箱、商品名等大量真实数据都是文本，需要先清洗（预处理）。',
          tip: '先逐个方法用 print 查看结果，再像 strip().lower() 一样串联起来。记住字符串本身不会被修改。' } },
  collections: {
    ko: { def: '여러 값을 묶어 다루는 리스트·딕셔너리·집합과 컴프리헨션입니다.',
          need: '고객 목록, 상품별 가격표처럼 데이터는 대부분 “여러 개”로 존재합니다. Pandas의 기초이기도 해요.',
          tip: '추가·삭제·조회를 각각 해 보고, 매번 print로 상태 변화를 확인하세요. 익숙해지면 for문을 컴프리헨션으로 바꿔 보세요.' },
    en: { def: 'Lists, dictionaries, sets and comprehensions for handling many values together.',
          need: 'Data almost always comes in groups — customer lists, price tables. It is also the foundation of Pandas.',
          tip: 'Practise add, remove and look-up separately, printing the state each time. Then rewrite loops as comprehensions.' },
    zh: { def: '用列表、字典、集合和推导式成组地处理多个值。',
          need: '客户名单、商品价目表等数据几乎都是“成组”存在的，这也是 Pandas 的基础。',
          tip: '分别练习添加、删除和查询，每次都用 print 查看变化。熟练后试着把 for 循环改写成推导式。' } },
  conditionals: {
    ko: { def: 'if·elif·else로 조건에 따라 서로 다른 코드를 실행합니다.',
          need: '합격/불합격, 회원 등급, 할인 적용처럼 비즈니스 규칙은 대부분 조건문으로 표현됩니다.',
          tip: '조건을 말로 먼저 적어 보고 코드로 옮기세요. 범위 조건은 큰 값부터 elif로 차례로, 들여쓰기 4칸을 지키세요.' },
    en: { def: 'Running different code depending on conditions, with if, elif and else.',
          need: 'Business rules — pass/fail, membership levels, discounts — are mostly written as conditionals.',
          tip: 'Write the rule in words first, then translate it. For ranges, check from the largest value down with elif, and keep 4-space indentation.' },
    zh: { def: '用 if、elif、else 根据条件执行不同的代码。',
          need: '合格/不合格、会员等级、折扣规则等业务规则大多用条件语句表达。',
          tip: '先用文字写出条件再转成代码。范围条件从大到小用 elif 依次判断，并保持 4 个空格的缩进。' } },
  loops: {
    ko: { def: 'for·while로 같은 작업을 여러 번 반복합니다. range, enumerate, zip, break/continue를 포함해요.',
          need: '1,000건의 주문을 하나씩 처리하는 것처럼, 반복은 사람이 하기 힘든 일을 컴퓨터에 맡기는 핵심입니다.',
          tip: '반복 안에서 변수 값을 print해 한 바퀴씩 따라가 보세요. while문은 종료 조건(증가/감소)을 먼저 작성하세요.' },
    en: { def: 'Repeating work with for and while, including range, enumerate, zip and break/continue.',
          need: 'Processing 1,000 orders one by one — loops are how you hand repetitive work to the computer.',
          tip: 'Print variables inside the loop to trace each pass. With while, write the exit condition (increase/decrease) first.' },
    zh: { def: '用 for 和 while 重复执行相同的工作，包括 range、enumerate、zip 和 break/continue。',
          need: '比如逐条处理 1,000 个订单——循环是把重复劳动交给电脑的关键。',
          tip: '在循环内 print 变量值，一圈一圈跟踪执行过程。写 while 时先写好结束条件（递增/递减）。' } },
  functions: {
    ko: { def: 'def로 코드를 묶어 이름을 붙이고, 매개변수로 값을 받아 return으로 돌려줍니다. lambda·map·filter도 다룹니다.',
          need: '같은 계산을 여러 곳에서 다시 쓰고, 긴 프로그램을 읽기 쉬운 단위로 나눌 수 있습니다.',
          tip: '입력과 출력을 먼저 정한 뒤 작성하세요. print와 return의 차이를 꼭 비교해 보고, 작은 함수 여러 개로 나누는 연습을 하세요.' },
    en: { def: 'Grouping code under a name with def, taking parameters and giving results back with return. Also lambda, map and filter.',
          need: 'Reuse the same calculation in many places and split long programs into readable pieces.',
          tip: 'Decide the input and output first. Compare print vs return carefully, and practise splitting work into small functions.' },
    zh: { def: '用 def 把代码打包并命名，通过参数接收值、用 return 返回结果；也包括 lambda、map、filter。',
          need: '同样的计算可以在多处复用，长程序也能拆分成易读的单元。',
          tip: '先确定输入和输出再编写。一定要比较 print 与 return 的区别，并练习拆分成多个小函数。' } },
  exceptions: {
    ko: { def: 'try·except·else·finally로 오류가 나도 프로그램이 멈추지 않게 처리하고, raise로 직접 오류를 알립니다.',
          need: '잘못된 입력, 없는 파일처럼 현실의 데이터는 늘 예외가 있습니다. 안정적인 서비스의 필수 조건이에요.',
          tip: '먼저 일부러 오류를 내서 오류 이름(ValueError 등)을 확인한 뒤, 그 오류만 정확히 잡는 except를 쓰세요.' },
    en: { def: 'Handling errors with try, except, else and finally so the program keeps running, and raising your own with raise.',
          need: 'Real data always has surprises — bad input, missing files. Handling them is essential for reliable services.',
          tip: 'Trigger the error on purpose first to see its name (ValueError, etc.), then catch exactly that error.' },
    zh: { def: '用 try、except、else、finally 处理错误，让程序不中断；用 raise 主动抛出错误。',
          need: '真实数据总有例外——错误输入、文件不存在。处理好异常是稳定服务的必备条件。',
          tip: '先故意制造错误，看清错误名称（如 ValueError），再写只捕获该错误的 except。' } },
  modules: {
    ko: { def: 'import로 math, random, datetime, collections, statistics 같은 이미 만들어진 도구를 불러 씁니다.',
          need: '바퀴를 다시 만들 필요 없이, 검증된 기능을 가져와 빠르고 정확하게 문제를 풉니다.',
          tip: 'import 방식 3가지(import, from-import, as)를 비교해 보고, 모르는 기능은 dir()이나 help()로 찾아보세요.' },
    en: { def: 'Using ready-made tools such as math, random, datetime, collections and statistics with import.',
          need: 'No need to reinvent the wheel — use tested features to solve problems quickly and correctly.',
          tip: 'Compare the three import styles (import, from-import, as), and explore unknown features with dir() or help().' },
    zh: { def: '用 import 调用 math、random、datetime、collections、statistics 等现成的工具。',
          need: '无需重复造轮子，借助经过验证的功能快速而准确地解决问题。',
          tip: '比较三种导入方式（import、from-import、as），不熟悉的功能用 dir() 或 help() 查找。' } },
  classes: {
    ko: { def: 'class로 데이터(속성)와 동작(메서드)을 하나로 묶은 “설계도”를 만들고, 객체를 생성합니다. 상속도 다룹니다.',
          need: '계좌, 고객, 장바구니처럼 현실의 대상을 코드로 표현할 수 있고, 큰 프로그램을 체계적으로 만들 수 있습니다.',
          tip: '“무엇을 가지고(속성) 무엇을 하는가(메서드)”를 먼저 적어 보세요. self는 “이 객체 자신”이라고 읽으면 쉽습니다.' },
    en: { def: 'Making a “blueprint” with class that bundles data (attributes) and behaviour (methods), then creating objects. Includes inheritance.',
          need: 'Represent real things — accounts, customers, carts — in code and build larger programs in an organised way.',
          tip: 'First write down “what it has (attributes) and what it does (methods)”. Read self as “this object itself”.' },
    zh: { def: '用 class 创建把数据（属性）和行为（方法）结合在一起的“设计图”，再生成对象；也包括继承。',
          need: '可以用代码表示账户、客户、购物车等现实对象，并系统地构建大型程序。',
          tip: '先写下“它拥有什么（属性）、能做什么（方法）”。把 self 理解为“这个对象自己”就容易了。' } },
  files: {
    ko: { def: 'open과 with로 텍스트·CSV·JSON 파일을 읽고 씁니다(r·w·a 모드, csv·json 모듈).',
          need: '업무 데이터는 대부분 파일로 주고받습니다. 결과를 저장해야 다음 분석과 보고에 쓸 수 있어요.',
          tip: '쓰기 → 다시 읽어 확인하는 순서로 연습하세요. with 문을 습관화하고, 한글은 encoding=\'utf-8\'을 꼭 지정하세요.' },
    en: { def: 'Reading and writing text, CSV and JSON files with open and with (r, w, a modes; csv and json modules).',
          need: 'Business data is mostly exchanged as files, and saved results feed the next analysis or report.',
          tip: 'Practise “write, then read back to check”. Make with a habit, and always set encoding=\'utf-8\' for non-English text.' },
    zh: { def: '用 open 和 with 读写文本、CSV、JSON 文件（r、w、a 模式，csv 与 json 模块）。',
          need: '业务数据大多以文件形式交换，保存结果才能用于后续分析和报告。',
          tip: '按“写入 → 再读出确认”的顺序练习。养成使用 with 的习惯，处理中文/韩文时一定指定 encoding=\'utf-8\'。' } },
  numpy: {
    ko: { def: '숫자 배열(ndarray)을 빠르게 계산하는 라이브러리입니다. 합계·평균·정렬·슬라이싱·불리언 인덱싱을 다룹니다.',
          need: '반복문 없이 수천~수백만 개의 숫자를 한 번에 계산할 수 있고, Pandas와 머신러닝의 기반입니다.',
          tip: 'shape를 자주 출력해 배열 모양을 확인하세요. axis=0(세로), axis=1(가로)을 그림으로 그려 보며 익히세요.' },
    en: { def: 'A library for fast calculations on number arrays (ndarray): sums, means, sorting, slicing and boolean indexing.',
          need: 'Compute thousands to millions of numbers at once without loops — the basis of Pandas and machine learning.',
          tip: 'Print shape often to see the array’s form. Sketch axis=0 (down) and axis=1 (across) to make them stick.' },
    zh: { def: '对数字数组（ndarray）进行快速计算的库：求和、平均、排序、切片和布尔索引。',
          need: '无需循环即可一次计算成千上万个数字，是 Pandas 和机器学习的基础。',
          tip: '经常输出 shape 确认数组形状。画图理解 axis=0（纵向）和 axis=1（横向）。' } },
  pandas: {
    ko: { def: '표 형태의 데이터(DataFrame)를 만들고, 열 선택·필터링·정렬·결측치 처리·groupby 집계를 합니다.',
          need: '엑셀로 하던 데이터 정리와 집계를 코드로 자동화합니다. 경영 데이터 분석의 핵심 도구예요.',
          tip: '작업마다 df.head()로 결과를 확인하세요. “행을 고르는지, 열을 고르는지”를 먼저 말로 정하면 코드가 쉬워집니다.' },
    en: { def: 'Creating table data (DataFrame) and selecting columns, filtering, sorting, filling missing values and aggregating with groupby.',
          need: 'Automates the cleaning and summarising you would do in Excel — the key tool for business data analysis.',
          tip: 'Check every step with df.head(). Decide in words whether you are picking rows or columns before coding.' },
    zh: { def: '创建表格数据（DataFrame），进行列选择、筛选、排序、缺失值处理和 groupby 汇总。',
          need: '把原本在 Excel 中做的整理与汇总用代码自动化，是经营数据分析的核心工具。',
          tip: '每一步都用 df.head() 查看结果。先用文字确定是“选行”还是“选列”，代码就容易写了。' } },
  data_loading: {
    ko: { def: 'read_csv·read_excel·read_json으로 파일을 DataFrame으로 불러오고, 구분자·인코딩·결측값 등 옵션을 지정합니다.',
          need: '분석은 데이터를 제대로 불러오는 것에서 시작합니다. 옵션 하나로 한글 깨짐이나 열 밀림이 해결돼요.',
          tip: '먼저 옵션 없이 읽어 보고 결과가 이상하면 sep, encoding, header 같은 옵션을 하나씩 추가해 차이를 비교하세요.' },
    en: { def: 'Loading files into a DataFrame with read_csv, read_excel and read_json, using options for delimiters, encoding and missing values.',
          need: 'Every analysis starts with loading the data correctly. One option can fix broken characters or shifted columns.',
          tip: 'Read the file without options first; if it looks wrong, add sep, encoding or header one at a time and compare.' },
    zh: { def: '用 read_csv、read_excel、read_json 把文件读成 DataFrame，并指定分隔符、编码、缺失值等选项。',
          need: '分析从正确读取数据开始。一个选项就能解决乱码或列错位的问题。',
          tip: '先不加选项读取，结果不对时再逐个添加 sep、encoding、header 等选项并比较差异。' } }
};

const GUIDE_UI = {
  ko: { def: '무엇을 배우나요?', need: '왜 필요할까요?', tip: '연습 전략', start: '연습 시작', cont: '이어서 하기', review: '복습하기', done: '완료',
        recommend: '추천', hubTitle: '어떤 주제를 연습할까요?', hubDesc: '1단계부터 차례로 진행하는 것을 추천해요. 각 주제의 설명과 연습 전략을 먼저 읽어 보세요.',
        continueTitle: '이어서 학습하기', continueBtn: '이어서 풀기 →', back: '← 주제 선택', guide: '📖 이 주제 가이드', problems: '{n}문제',
        allTopics: '전체 주제', noGuide: '이 주제의 설명은 준비 중이에요.' },
  en: { def: 'What will you learn?', need: 'Why does it matter?', tip: 'Practice strategy', start: 'Start practice', cont: 'Continue', review: 'Review', done: 'Done',
        recommend: 'Next up', hubTitle: 'Which topic will you practise?', hubDesc: 'We recommend going in order from Step 1. Read each topic’s guide and strategy first.',
        continueTitle: 'Pick up where you left off', continueBtn: 'Continue →', back: '← Topics', guide: '📖 Topic guide', problems: '{n} problems',
        allTopics: 'All topics', noGuide: 'A guide for this topic is coming soon.' },
  zh: { def: '学习什么？', need: '为什么需要？', tip: '练习策略', start: '开始练习', cont: '继续练习', review: '复习', done: '已完成',
        recommend: '推荐', hubTitle: '要练习哪个主题？', hubDesc: '建议从第 1 步开始按顺序学习。请先阅读各主题的说明和练习策略。',
        continueTitle: '继续上次的学习', continueBtn: '继续做题 →', back: '← 选择主题', guide: '📖 主题指南', problems: '{n} 题',
        allTopics: '全部主题', noGuide: '该主题的说明正在准备中。' }
};
function gt(key, vars) {
  let s = (GUIDE_UI[LANG] || GUIDE_UI.ko)[key] ?? GUIDE_UI.ko[key] ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));
  return s;
}
function topicGuide(key) { const g = TOPIC_GUIDE[key]; return g ? (g[LANG] || g.ko) : null; }
