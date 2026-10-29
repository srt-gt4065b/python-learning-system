/* =========================================================
   다국어 지원 (한국어 · English · 中文)
   - common.js 다음, 페이지 스크립트 전에 불러옵니다.
   - 문제 번역: Firebase 문제의 question_en / example_en / hint_en (zh 동일)이 있으면 우선,
     없으면 questions-i18n.js 의 번역, 그것도 없으면 한국어 원문을 보여줍니다.
   ========================================================= */
const LANGS = [
  { code: 'ko', label: '한국어', html: 'ko' },
  { code: 'en', label: 'English', html: 'en' },
  { code: 'zh', label: '中文', html: 'zh-CN' }
];

const I18N = {
  ko: {
    'brand.title': 'Python 학습', 'brand.sub': '우송대 AI경영학과',
    'nav.learn': '학습', 'nav.board': '🏆 리더보드', 'aria.board': '리더보드', 'aria.theme': '테마 전환', 'aria.lang': '언어',
    'py.loading': 'Python 준비 중', 'py.ready': 'Python 준비 완료', 'py.error': 'Python 로드 실패 · 새로고침', 'py.title': 'Python 실행 환경 상태',
    'guest.banner': '🧪 연습 모드입니다. 기록은 이 브라우저에만 저장되고 리더보드에는 올라가지 않아요.', 'guest.login': '로그인하고 점수 기록하기 →', 'guest.name': '연습생',
    'greet.default': '오늘도 한 문제씩', 'greet.streak': '🔥 {n}문제 연속 정답 중!', 'greet.hello': '안녕하세요 👋', 'greet.helloName': '{name}님, 안녕하세요 👋',
    'xp.next': '다음 레벨까지',
    'kpi.score': '⭐ 점수', 'kpi.scoreSub': '첫 정답에만 점수 지급', 'kpi.solved': '✅ 해결한 문제', 'kpi.solvedSub': '전체 {n}문제',
    'kpi.streak': '연속 정답', 'kpi.best': '최고 기록 {n}', 'kpi.progress': '📈 전체 진도',
    'aria.topics': '학습 주제', 'q.example': '💡 예시', 'q.hint': '🔑 힌트 보기', 'q.prev': '← 이전', 'q.next': '다음 문제 →', 'q.first': '처음 문제로 ↺',
    'q.list': '문제 목록', 'q.points': '+{n}점', 'q.solved': '✔ 해결함', 'q.solvedShort': '해결', 'q.noExample': '(예시 없음)', 'q.noHint': '힌트가 없습니다.',
    'q.empty': '이 주제에는 아직 문제가 없어요.', 'q.loadFail': '문제를 불러오지 못했어요.', 'q.origNote': '번역이 아직 없어 원문(한국어)으로 표시해요.',
    'ed.clear': '코드 지우기', 'ed.placeholder': '# 여기에 Python 코드를 작성하세요\nprint("Hello, Python!")',
    'run.btn': '▶ 실행하고 채점하기', 'run.keys': '로 바로 실행', 'run.running': '실행 중…', 'run.preparing': 'Python 준비 중…',
    'out.mine': '🖥️ 내 출력', 'out.expected': '🎯 예상 출력', 'out.placeholder': '코드를 실행하면 여기에 결과가 표시됩니다.',
    'out.none': '(출력 없음 — print()로 결과를 출력했는지 확인하세요)', 'out.emptyExpected': '(빈 출력)',
    'err.noCode': '먼저 코드를 작성해 주세요!', 'err.needLogin': '로그인 후 이용해 주세요.', 'err.pyLoad': 'Python 실행 환경을 불러오지 못했어요. 페이지를 새로고침해 주세요.',
    'err.timeout': '⏱️ 실행 시간이 {s}초를 넘어서 중단했어요.\n무한 반복(while True 등)이 없는지 확인해 보세요.',
    'fb.timeout': '시간 초과', 'fb.timeoutDesc': '반복문 종료 조건을 확인해 보세요.',
    'fb.error': '실행 중 오류가 발생했어요', 'fb.errorDesc': '빨간 글씨의 마지막 줄(오류 종류)을 먼저 읽어 보세요.',
    'fb.wrong': '아쉬워요, 출력이 달라요', 'fb.wrongDesc': '빨간 줄이 예상 출력과 다른 부분이에요. 힌트도 참고해 보세요.',
    'fb.correct': '정답이에요! +{n}점', 'fb.streak': '{n}문제 연속 정답 🔥', 'fb.keepGoing': '이 기세로 다음 문제도 도전해 볼까요?',
    'fb.review': '정답이에요! (복습)', 'fb.reviewDesc': '이미 해결한 문제라 점수는 추가되지 않아요.', 'fb.next': '다음 문제 →',
    'lv.title': '레벨 업! Lv.{n}', 'lv.desc': '꾸준함이 실력이 됩니다. 계속 가 볼까요?', 'lv.btn': '계속하기',
    'clear.confirm': '작성한 코드를 모두 지울까요?',
    'login.title': 'Python 학습 시작하기', 'login.desc': '이름과 학번으로 입장하면 점수가 리더보드에 기록돼요',
    'login.name': '이름', 'login.namePh': '예) 홍길동', 'login.id': '학번', 'login.idPh': '예) 2025123456', 'login.btn': '학습 시작하기 🚀',
    'login.checking': '확인 중…', 'login.guest': '로그인 없이 둘러보고 싶다면', 'login.guestLink': '연습 모드',
    'login.errName': '이름을 2글자 이상 입력해 주세요.', 'login.errId': '학번은 4~20자리 숫자/영문으로 입력해 주세요.',
    'login.dup': '학번 {id}은(는) "{name}" 이름으로 이미 기록이 있어요.\n본인이 맞다면 [확인]을 눌러 이어서 학습하세요.\n(오타라면 [취소] 후 학번을 다시 확인해 주세요)',
    'login.net': '서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요.', 'login.welcome': '다시 오신 걸 환영해요, {name}님!', 'login.btnShort': '로그인',
    'menu.board': '🏆 리더보드 보기', 'menu.logout': '🚪 로그아웃', 'logout.confirm': '로그아웃할까요? 진행 상황은 이미 저장되어 있어요.',
    'save.fail': '기록 저장에 실패했어요. 인터넷 연결을 확인해 주세요.', 'load.fail': '기록을 불러오지 못했어요.',
    'diff.easy': '쉬움', 'diff.medium': '보통', 'diff.hard': '어려움',
    // 리더보드
    'lb.title': '🏆 우리 반 Python 랭킹', 'lb.desc': '문제를 풀면 순위가 실시간으로 바뀌어요. 상위 15명이 표시됩니다.',
    'lb.live': '실시간', 'lb.connecting': '실시간 연결 중', 'lb.offline': '연결 끊김',
    'lb.kTotal': '👥 참여 학생', 'lb.kAvg': '⭐ 평균 점수', 'lb.kSolved': '✅ 함께 푼 문제', 'lb.kToday': '🟢 오늘 학습한 학생',
    'lb.loadFail': '순위를 불러오지 못했어요', 'lb.empty': '아직 순위가 없어요.<br>학습 화면에서 첫 문제를 풀어 보세요!', 'lb.go': '학습하러 가기',
    'lb.myRank': '내 순위', 'lb.pts': '{n}점', 'lb.gap': '한 단계 위까지 {n}점 남았어요', 'lb.first': '현재 1등이에요! 👑', 'lb.rankUnit': '위',
    'lb.me': '나', 'lb.meParen': ' (나)', 'lb.problems': '{n}문제', 'lb.level': '레벨', 'lb.solved': '해결', 'lb.score': '점수',
    'lb.note': '상위 {max}명 표시 중 · 전체 {n}명 참여'
  },
  en: {
    'brand.title': 'Python Lab', 'brand.sub': 'Woosong Univ. AI Business',
    'nav.learn': 'Learn', 'nav.board': '🏆 Leaderboard', 'aria.board': 'Leaderboard', 'aria.theme': 'Toggle theme', 'aria.lang': 'Language',
    'py.loading': 'Loading Python', 'py.ready': 'Python ready', 'py.error': 'Python failed to load · Refresh', 'py.title': 'Python runtime status',
    'guest.banner': '🧪 Practice mode. Your progress is saved only in this browser and does not appear on the leaderboard.', 'guest.login': 'Log in to record your score →', 'guest.name': 'Guest',
    'greet.default': 'One problem at a time', 'greet.streak': '🔥 {n} correct in a row!', 'greet.hello': 'Hello 👋', 'greet.helloName': 'Hello, {name} 👋',
    'xp.next': 'To next level',
    'kpi.score': '⭐ Score', 'kpi.scoreSub': 'Points only for first correct answer', 'kpi.solved': '✅ Solved', 'kpi.solvedSub': 'of {n} problems',
    'kpi.streak': 'Streak', 'kpi.best': 'Best {n}', 'kpi.progress': '📈 Progress',
    'aria.topics': 'Topics', 'q.example': '💡 Example', 'q.hint': '🔑 Show hint', 'q.prev': '← Prev', 'q.next': 'Next →', 'q.first': 'Back to first ↺',
    'q.list': 'Problem list', 'q.points': '+{n} pts', 'q.solved': '✔ Solved', 'q.solvedShort': 'solved', 'q.noExample': '(No example)', 'q.noHint': 'No hint available.',
    'q.empty': 'No problems in this topic yet.', 'q.loadFail': 'Could not load the problems.', 'q.origNote': 'No translation yet — showing the original (Korean).',
    'ed.clear': 'Clear code', 'ed.placeholder': '# Write your Python code here\nprint("Hello, Python!")',
    'run.btn': '▶ Run & Check', 'run.keys': 'to run', 'run.running': 'Running…', 'run.preparing': 'Loading Python…',
    'out.mine': '🖥️ Your output', 'out.expected': '🎯 Expected output', 'out.placeholder': 'Run your code to see the result here.',
    'out.none': '(No output — did you use print() to show the result?)', 'out.emptyExpected': '(empty output)',
    'err.noCode': 'Please write some code first!', 'err.needLogin': 'Please log in first.', 'err.pyLoad': 'Could not load the Python runtime. Please refresh the page.',
    'err.timeout': '⏱️ Stopped because it ran longer than {s} seconds.\nCheck for an infinite loop (e.g. while True).',
    'fb.timeout': 'Time limit exceeded', 'fb.timeoutDesc': 'Check the exit condition of your loop.',
    'fb.error': 'An error occurred while running', 'fb.errorDesc': 'Read the last red line (the error type) first.',
    'fb.wrong': 'Not quite — the output is different', 'fb.wrongDesc': 'Red lines differ from the expected output. Try the hint, too.',
    'fb.correct': 'Correct! +{n} pts', 'fb.streak': '{n} correct in a row 🔥', 'fb.keepGoing': 'Keep the momentum — try the next one!',
    'fb.review': 'Correct! (review)', 'fb.reviewDesc': 'You already solved this one, so no extra points.', 'fb.next': 'Next →',
    'lv.title': 'Level up! Lv.{n}', 'lv.desc': 'Consistency builds skill. Shall we keep going?', 'lv.btn': 'Continue',
    'clear.confirm': 'Clear all the code you wrote?',
    'login.title': 'Start learning Python', 'login.desc': 'Enter your name and student ID to record your score on the leaderboard',
    'login.name': 'Name', 'login.namePh': 'e.g. Gildong Hong', 'login.id': 'Student ID', 'login.idPh': 'e.g. 2025123456', 'login.btn': 'Start learning 🚀',
    'login.checking': 'Checking…', 'login.guest': 'Just want to look around?', 'login.guestLink': 'Practice mode',
    'login.errName': 'Please enter at least 2 characters for your name.', 'login.errId': 'Student ID must be 4–20 letters or digits.',
    'login.dup': 'Student ID {id} already has records under the name "{name}".\nIf this is you, press [OK] to continue.\n(If it is a typo, press [Cancel] and check your ID.)',
    'login.net': 'Could not connect to the server. Please check your internet connection.', 'login.welcome': 'Welcome back, {name}!', 'login.btnShort': 'Log in',
    'menu.board': '🏆 View leaderboard', 'menu.logout': '🚪 Log out', 'logout.confirm': 'Log out? Your progress is already saved.',
    'save.fail': 'Could not save your progress. Please check your internet connection.', 'load.fail': 'Could not load your progress.',
    'diff.easy': 'Easy', 'diff.medium': 'Medium', 'diff.hard': 'Hard',
    'lb.title': '🏆 Class Python Ranking', 'lb.desc': 'Rankings update live as you solve problems. Top 15 are shown.',
    'lb.live': 'Live', 'lb.connecting': 'Connecting', 'lb.offline': 'Offline',
    'lb.kTotal': '👥 Students', 'lb.kAvg': '⭐ Average score', 'lb.kSolved': '✅ Problems solved', 'lb.kToday': '🟢 Active today',
    'lb.loadFail': 'Could not load the rankings', 'lb.empty': 'No rankings yet.<br>Solve your first problem on the learning page!', 'lb.go': 'Start learning',
    'lb.myRank': 'My rank', 'lb.pts': '{n} pts', 'lb.gap': '{n} pts to move up one place', 'lb.first': 'You are #1! 👑', 'lb.rankUnit': '',
    'lb.me': 'Me', 'lb.meParen': ' (me)', 'lb.problems': '{n} solved', 'lb.level': 'Level', 'lb.solved': 'Solved', 'lb.score': 'Score',
    'lb.note': 'Showing top {max} · {n} students in total'
  },
  zh: {
    'brand.title': 'Python 学习', 'brand.sub': '又松大学 AI经营学科',
    'nav.learn': '学习', 'nav.board': '🏆 排行榜', 'aria.board': '排行榜', 'aria.theme': '切换主题', 'aria.lang': '语言',
    'py.loading': 'Python 加载中', 'py.ready': 'Python 已就绪', 'py.error': 'Python 加载失败 · 请刷新', 'py.title': 'Python 运行环境状态',
    'guest.banner': '🧪 练习模式。记录只保存在此浏览器中，不会显示在排行榜上。', 'guest.login': '登录并记录分数 →', 'guest.name': '练习生',
    'greet.default': '今天也一题一题来', 'greet.streak': '🔥 已连续答对 {n} 题！', 'greet.hello': '你好 👋', 'greet.helloName': '{name}，你好 👋',
    'xp.next': '距离下一级',
    'kpi.score': '⭐ 分数', 'kpi.scoreSub': '仅首次答对得分', 'kpi.solved': '✅ 已解决', 'kpi.solvedSub': '共 {n} 题',
    'kpi.streak': '连续答对', 'kpi.best': '最高纪录 {n}', 'kpi.progress': '📈 总进度',
    'aria.topics': '学习主题', 'q.example': '💡 示例', 'q.hint': '🔑 查看提示', 'q.prev': '← 上一题', 'q.next': '下一题 →', 'q.first': '回到第一题 ↺',
    'q.list': '题目列表', 'q.points': '+{n} 分', 'q.solved': '✔ 已解决', 'q.solvedShort': '已解决', 'q.noExample': '（无示例）', 'q.noHint': '暂无提示。',
    'q.empty': '这个主题还没有题目。', 'q.loadFail': '无法加载题目。', 'q.origNote': '暂无翻译，显示原文（韩语）。',
    'ed.clear': '清空代码', 'ed.placeholder': '# 在这里编写 Python 代码\nprint("Hello, Python!")',
    'run.btn': '▶ 运行并判题', 'run.keys': '直接运行', 'run.running': '运行中…', 'run.preparing': 'Python 加载中…',
    'out.mine': '🖥️ 我的输出', 'out.expected': '🎯 预期输出', 'out.placeholder': '运行代码后，结果会显示在这里。',
    'out.none': '（无输出 — 请确认是否用 print() 输出了结果）', 'out.emptyExpected': '（空输出）',
    'err.noCode': '请先编写代码！', 'err.needLogin': '请先登录。', 'err.pyLoad': '无法加载 Python 运行环境，请刷新页面。',
    'err.timeout': '⏱️ 运行时间超过 {s} 秒，已停止。\n请检查是否有无限循环（如 while True）。',
    'fb.timeout': '运行超时', 'fb.timeoutDesc': '请检查循环的结束条件。',
    'fb.error': '运行时发生错误', 'fb.errorDesc': '先看红色文字的最后一行（错误类型）。',
    'fb.wrong': '差一点，输出不一样', 'fb.wrongDesc': '红色的行与预期输出不同，也可以参考提示。',
    'fb.correct': '回答正确！+{n} 分', 'fb.streak': '连续答对 {n} 题 🔥', 'fb.keepGoing': '保持状态，挑战下一题吧！',
    'fb.review': '回答正确！（复习）', 'fb.reviewDesc': '这道题已经解决过，不再加分。', 'fb.next': '下一题 →',
    'lv.title': '升级了！Lv.{n}', 'lv.desc': '坚持就是实力，继续加油吧？', 'lv.btn': '继续',
    'clear.confirm': '要清空所写的全部代码吗？',
    'login.title': '开始学习 Python', 'login.desc': '输入姓名和学号进入，分数会记录到排行榜上',
    'login.name': '姓名', 'login.namePh': '例）王小明', 'login.id': '学号', 'login.idPh': '例）2025123456', 'login.btn': '开始学习 🚀',
    'login.checking': '确认中…', 'login.guest': '不登录先看看？', 'login.guestLink': '练习模式',
    'login.errName': '姓名请至少输入 2 个字。', 'login.errId': '学号须为 4~20 位数字或英文字母。',
    'login.dup': '学号 {id} 已有以 "{name}" 为名的记录。\n如果是本人，请按【确定】继续学习。\n（如果输错了，请按【取消】并重新确认学号）',
    'login.net': '无法连接服务器，请检查网络连接。', 'login.welcome': '欢迎回来，{name}！', 'login.btnShort': '登录',
    'menu.board': '🏆 查看排行榜', 'menu.logout': '🚪 退出登录', 'logout.confirm': '要退出登录吗？学习进度已经保存。',
    'save.fail': '保存记录失败，请检查网络连接。', 'load.fail': '无法加载学习记录。',
    'diff.easy': '简单', 'diff.medium': '中等', 'diff.hard': '困难',
    'lb.title': '🏆 本班 Python 排行榜', 'lb.desc': '解题后排名会实时变化，显示前 15 名。',
    'lb.live': '实时', 'lb.connecting': '正在连接', 'lb.offline': '连接已断开',
    'lb.kTotal': '👥 参与学生', 'lb.kAvg': '⭐ 平均分', 'lb.kSolved': '✅ 共同解题数', 'lb.kToday': '🟢 今日学习人数',
    'lb.loadFail': '无法加载排名', 'lb.empty': '还没有排名。<br>去学习页面解第一道题吧！', 'lb.go': '去学习',
    'lb.myRank': '我的排名', 'lb.pts': '{n} 分', 'lb.gap': '再得 {n} 分即可前进一名', 'lb.first': '你现在是第一名！👑', 'lb.rankUnit': '名',
    'lb.me': '我', 'lb.meParen': '（我）', 'lb.problems': '{n} 题', 'lb.level': '等级', 'lb.solved': '已解决', 'lb.score': '分数',
    'lb.note': '显示前 {max} 名 · 共 {n} 人参与'
  }
};

/* 주제 이름 번역 (TOPICS의 한국어 label은 common.js에 있음) */
const TOPIC_I18N = {
  en: { datatypes: 'Data Types', operations: 'Operators', io: 'Print & Format', strings: 'String Methods', collections: 'Lists & Dicts',
        conditionals: 'Conditionals', loops: 'Loops', functions: 'Functions', exceptions: 'Exceptions', modules: 'Modules',
        classes: 'Classes & Objects', files: 'File I/O', numpy: 'NumPy', pandas: 'Pandas', data_loading: 'Loading Data' },
  zh: { datatypes: '数据类型', operations: '运算', io: '输出与格式化', strings: '字符串方法', collections: '列表与字典',
        conditionals: '条件语句', loops: '循环', functions: '函数', exceptions: '异常处理', modules: '模块与库',
        classes: '类与对象', files: '文件读写', numpy: 'NumPy', pandas: 'Pandas', data_loading: '读取数据' }
};

function detectLang() {
  const saved = store.get('lang');
  if (I18N[saved]) return saved;
  const nav = (navigator.languages || [navigator.language || 'ko']).map(l => String(l).toLowerCase());
  for (const l of nav) {
    if (l.startsWith('ko')) return 'ko';
    if (l.startsWith('zh')) return 'zh';
    if (l.startsWith('en')) return 'en';
  }
  return 'ko';
}
let LANG = detectLang();

function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key]) ?? I18N.ko[key] ?? key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));
  return s;
}
function topicLabel(key) {
  return (TOPIC_I18N[LANG] && TOPIC_I18N[LANG][key]) || (TOPIC_MAP[key] && TOPIC_MAP[key].label) || key;
}
function diffLabel(d) { return t('diff.' + d); }

/** 문제 텍스트: Firebase 번역 필드 → 번역 파일 → 한국어 원문 */
function qText(q, field) {
  if (LANG === 'ko') return { text: q[field] || '', translated: true };
  const own = q[field + '_' + LANG];
  if (own && String(own).trim()) return { text: own, translated: true };
  const tr = window.QUESTION_I18N && window.QUESTION_I18N[q.uid] && window.QUESTION_I18N[q.uid][LANG];
  if (tr && tr[field]) return { text: tr[field], translated: true };
  return { text: q[field] || '', translated: !q[field] };
}

/** data-i18n="키" → textContent, data-i18n-html → innerHTML, data-i18n-attr="placeholder:키;title:키" */
function applyI18n(root = document) {
  document.documentElement.lang = (LANGS.find(l => l.code === LANG) || LANGS[0]).html;
  root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  root.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => { const [attr, key] = pair.split(':'); if (attr && key) el.setAttribute(attr.trim(), t(key.trim())); });
  });
  root.querySelectorAll('select.lang-select').forEach(s => { s.value = LANG; });
}

function setLang(code) {
  if (!I18N[code] || code === LANG) return;
  LANG = code;
  store.set('lang', code);
  applyI18n();
  window.dispatchEvent(new CustomEvent('langchange', { detail: code }));
}

/** 언어 선택 드롭다운 HTML */
function langSelectHTML() {
  return `<label class="lang-wrap" title="Language / 언어 / 语言"><span aria-hidden="true">🌐</span>
    <select class="lang-select" aria-label="Language">${LANGS.map(l => `<option value="${l.code}" ${l.code === LANG ? 'selected' : ''}>${l.label}</option>`).join('')}</select></label>`;
}
document.addEventListener('change', e => { if (e.target.matches && e.target.matches('select.lang-select')) setLang(e.target.value); });
document.documentElement.lang = (LANGS.find(l => l.code === LANG) || LANGS[0]).html;
