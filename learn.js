/* =========================================================
   학습 화면 로직 (index.html · index_no_login.html 공용)
   window.GUEST_MODE = true 이면 로그인 없이 연습 모드(기록은 이 브라우저에만 저장)
   ========================================================= */
(() => {
  const GUEST = !!window.GUEST_MODE;
  const RUN_TIMEOUT_MS = 15000;

  /* ---------------- 상태 ---------------- */
  let user = null;                       // { studentName, studentId }
  const questions = {};                  // topic -> [question]
  let questionsLoaded = false;
  let progress = { score: 0, solved: 0, streak: 0, bestStreak: 0, level: 1, solvedIds: {} };
  let cur = { topic: 'datatypes', index: 0 };
  let editor = null;
  let runner = null;
  let attempted = false;                 // 현재 문제에서 실행했는지
  let busy = false;

  /* ---------------- 화면 틀 ---------------- */
  function renderShell() {
    document.getElementById('app').innerHTML = `
      <header class="topbar">
        <div class="topbar-inner">
          <a class="brand" href="index.html">
            <span class="brand-logo"><span>🐍</span></span>
            <span>Python 학습<small>우송대 AI경영학과</small></span>
          </a>
          <nav class="nav-links collapsible">
            <a href="${GUEST ? 'index_no_login.html' : 'index.html'}" class="active">학습</a>
            <a href="dashboard.html" target="_blank" rel="noopener">🏆 리더보드</a>
          </nav>
          <div class="spacer"></div>
          <span class="status-pill" id="py-status" title="Python 실행 환경 상태"><span class="spinner"></span><span class="label">Python 준비 중</span></span>
          <a class="icon-btn only-mobile" href="dashboard.html" target="_blank" rel="noopener" aria-label="리더보드">🏆</a>
          <button class="icon-btn" data-theme-toggle aria-label="테마 전환"></button>
          <div style="position:relative" id="user-area"></div>
        </div>
      </header>

      <main class="wrap">
        ${GUEST ? `<div class="guest-banner">🧪 연습 모드입니다. 기록은 이 브라우저에만 저장되고 리더보드에는 올라가지 않아요. <a href="index.html" style="font-weight:800">로그인하고 점수 기록하기 →</a></div>` : ''}

        <section class="summary">
          <div class="card level-card">
            <div class="eyebrow" id="greet-eyebrow">오늘도 한 문제씩</div>
            <h1 id="greet">안녕하세요 👋</h1>
            <div class="level-row">
              <div class="level-badge"><div><small>LEVEL</small><b id="level">1</b></div></div>
              <div class="grow">
                <div class="xp-text"><span>다음 레벨까지</span><span class="tnum" id="xp-text">0 / 500 XP</span></div>
                <div class="bar accent"><i id="xp-bar"></i></div>
              </div>
            </div>
          </div>
          <div class="kpis">
            <div class="card kpi"><span class="kpi-label">⭐ 점수</span><span class="kpi-value" id="score">0</span><span class="kpi-sub">첫 정답에만 점수 지급</span></div>
            <div class="card kpi"><span class="kpi-label">✅ 해결한 문제</span><span class="kpi-value" id="solved">0</span><span class="kpi-sub" id="solved-sub">전체 0문제</span></div>
            <div class="card kpi" id="streak-card"><span class="kpi-label"><span class="streak-fire">🔥</span> 연속 정답</span><span class="kpi-value" id="streak">0</span><span class="kpi-sub" id="best-streak">최고 기록 0</span></div>
            <div class="card kpi"><span class="kpi-label">📈 전체 진도</span><span class="kpi-value" id="progress-pct">0%</span><div class="bar success" style="margin-top:6px"><i id="progress-bar"></i></div></div>
          </div>
        </section>

        <nav class="topics" id="topics" aria-label="학습 주제"></nav>

        <section class="workspace">
          <article class="card q-card" id="q-card">
            <div class="q-meta" id="q-meta"><span class="skeleton" style="width:120px;height:22px"></span></div>
            <div class="q-text" id="q-text"><div class="skeleton" style="height:18px;margin-bottom:8px"></div><div class="skeleton" style="height:18px;width:70%"></div></div>
            <div class="q-example-label"><span>💡 예시</span></div>
            <div class="q-example" id="q-example">…</div>
            <details class="hint" id="hint"><summary>🔑 힌트 보기</summary><p id="hint-text"></p></details>
            <div class="q-nav">
              <button class="btn btn-ghost" id="prev-btn">← 이전</button>
              <button class="btn btn-primary" id="next-btn">다음 문제 →</button>
            </div>
            <div class="dots" id="dots" aria-label="문제 목록"></div>
          </article>

          <article class="card editor-card">
            <div class="editor-head">
              <span class="tab">main.py</span>
              <span class="spacer"></span>
              <button class="icon-btn" id="clear-btn" title="코드 지우기">🗑️</button>
            </div>
            <div id="editor-host"></div>
            <div class="run-bar">
              <button class="btn btn-success btn-lg" id="run-btn">▶ 실행하고 채점하기</button>
              <span class="hint-keys"><kbd style="background:var(--surface-2);border-color:var(--border)">Ctrl</kbd> + <kbd style="background:var(--surface-2);border-color:var(--border)">Enter</kbd> 로 바로 실행</span>
            </div>
            <div class="result" id="result">
              <div id="feedback"></div>
              <div class="outputs" id="outputs">
                <div>
                  <div class="out-label">🖥️ 내 출력</div>
                  <div class="console placeholder" id="output">코드를 실행하면 여기에 결과가 표시됩니다.</div>
                </div>
                <div id="expected-wrap" class="hidden">
                  <div class="out-label">🎯 예상 출력</div>
                  <div class="console" id="expected"></div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>`;
  }

  /* ---------------- 로그인 ---------------- */
  function showLogin() {
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.id = 'login-overlay';
    ov.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
        <div class="login-hero">
          <div class="brand-logo"><span>🐍</span></div>
          <h2 id="login-title">Python 학습 시작하기</h2>
          <p>이름과 학번으로 입장하면 점수가 리더보드에 기록돼요</p>
        </div>
        <form class="login-form" id="login-form" novalidate>
          <div class="field">
            <label for="student-name">이름</label>
            <input class="input" id="student-name" autocomplete="name" placeholder="예) 홍길동" required>
          </div>
          <div class="field">
            <label for="student-id">학번</label>
            <input class="input" id="student-id" inputmode="numeric" autocomplete="off" placeholder="예) 2025123456" required>
          </div>
          <div class="input-error hidden" id="login-error"></div>
          <button class="btn btn-primary btn-lg btn-block" type="submit" id="login-btn">학습 시작하기 🚀</button>
        </form>
        <div class="login-alt">로그인 없이 둘러보고 싶다면 <a href="index_no_login.html">연습 모드</a></div>
      </div>`;
    document.body.appendChild(ov);
    setTimeout(() => $('#student-name').focus(), 50);
    $('#login-form').addEventListener('submit', handleLogin);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const name = $('#student-name').value.trim();
    const sid = $('#student-id').value.trim().replace(/\s+/g, '');
    const err = $('#login-error');
    const fail = m => { err.textContent = m; err.classList.remove('hidden'); };
    if (name.length < 2) return fail('이름을 2글자 이상 입력해 주세요.');
    if (!/^[A-Za-z0-9-]{4,20}$/.test(sid)) return fail('학번은 4~20자리 숫자/영문으로 입력해 주세요.');
    err.classList.add('hidden');

    const btn = $('#login-btn');
    btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> 확인 중…';
    try {
      const snap = await database.ref('students/' + sid).once('value');
      const existing = snap.val();
      if (existing && existing.studentName && existing.studentName.trim() !== name) {
        const ok = confirm(`학번 ${sid}은(는) "${existing.studentName}" 이름으로 이미 기록이 있어요.\n본인이 맞다면 [확인]을 눌러 이어서 학습하세요.\n(오타라면 [취소] 후 학번을 다시 확인해 주세요)`);
        if (!ok) { btn.disabled = false; btn.textContent = '학습 시작하기 🚀'; return; }
      }
      user = { studentName: name, studentId: sid, loginTime: new Date().toISOString() };
      store.set('currentUser', user);
      $('#login-overlay').remove();
      afterLogin(existing);
    } catch (ex) {
      fail('서버에 연결하지 못했어요. 인터넷 연결을 확인해 주세요. (' + ex.message + ')');
      btn.disabled = false; btn.textContent = '학습 시작하기 🚀';
    }
  }

  function logout() {
    if (!confirm('로그아웃할까요? 진행 상황은 이미 저장되어 있어요.')) return;
    store.del('currentUser');
    location.reload();
  }

  function renderUser() {
    const area = $('#user-area');
    if (GUEST) {
      area.innerHTML = `<a class="btn btn-primary btn-sm" href="index.html">로그인</a>`;
      return;
    }
    if (!user) { area.innerHTML = ''; return; }
    area.innerHTML = `
      <button class="user-chip" id="user-chip" aria-haspopup="true">
        <span class="avatar">${escapeHtml(initial(user.studentName))}</span>
        <span class="who"><b>${escapeHtml(user.studentName)}</b><span>${escapeHtml(user.studentId)}</span></span>
      </button>
      <div class="card menu hidden" id="user-menu">
        <a href="dashboard.html" target="_blank" rel="noopener">🏆 리더보드 보기</a>
        <button id="logout-btn">🚪 로그아웃</button>
      </div>`;
    $('#user-chip').addEventListener('click', ev => { ev.stopPropagation(); $('#user-menu').classList.toggle('hidden'); });
    document.addEventListener('click', () => $('#user-menu') && $('#user-menu').classList.add('hidden'));
    $('#logout-btn').addEventListener('click', logout);
  }

  /* ---------------- 진행 상황 저장/불러오기 ---------------- */
  function normalizeProgress(d) {
    d = d || {};
    return {
      score: d.score || 0,
      solved: d.solved || 0,
      streak: d.streak || 0,
      bestStreak: Math.max(d.bestStreak || 0, d.streak || 0),
      level: Math.max(d.level || 1, levelFromScore(d.score || 0)),
      solvedIds: d.solvedIds || {}
    };
  }

  function afterLogin(existingData) {
    renderUser();
    progress = normalizeProgress(existingData);
    if (existingData) toast(`다시 오신 걸 환영해요, ${user.studentName}님!`, 'success');
    updateStats();
    if (questionsLoaded) renderAll();
  }

  function saveProgress(extra = {}) {
    if (GUEST) { store.set('guestProgress', progress); return Promise.resolve(); }
    if (!user || !database) return Promise.resolve();
    const data = {
      studentName: user.studentName,
      studentId: user.studentId,
      score: progress.score,
      solved: progress.solved,
      streak: progress.streak,
      bestStreak: progress.bestStreak,
      level: progress.level,
      lastUpdated: new Date().toISOString(),
      ...extra
    };
    return database.ref('students/' + user.studentId).update(data)
      .catch(err => { console.error(err); toast('기록 저장에 실패했어요. 인터넷 연결을 확인해 주세요.', 'error'); });
  }

  /* ---------------- 문제 불러오기 ---------------- */
  async function loadQuestions() {
    try {
      const snap = await database.ref('questions').once('value');
      const data = snap.val() || {};
      for (const t of TOPICS) questions[t.key] = [];
      for (const cat in data) {
        if (!questions[cat]) questions[cat] = [];
        for (const key in data[cat]) {
          const q = data[cat][key];
          if (!q || q.enabled === false) continue;
          questions[cat].push({
            key, topic: cat,
            uid: `${cat}__${key}`,
            id: q.id || key,
            question: q.question || '',
            example: q.example || '',
            hint: q.hint || '힌트가 없습니다.',
            expectedOutput: q.expectedOutput ?? '',
            difficulty: DIFF[q.difficulty] ? q.difficulty : 'easy',
            order: Number(q.order) || 999
          });
        }
        questions[cat].sort((a, b) => a.order - b.order || a.key.localeCompare(b.key));
      }
      questionsLoaded = true;
      const saved = store.get('lastPosition');
      if (saved && questions[saved.topic] && questions[saved.topic].length) cur = { topic: saved.topic, index: Math.min(saved.index || 0, questions[saved.topic].length - 1) };
      else cur = { topic: (TOPICS.find(t => questions[t.key]?.length) || TOPICS[0]).key, index: 0 };
      renderAll();
    } catch (err) {
      console.error(err);
      $('#q-text').innerHTML = `<div class="empty"><div class="big">⚠️</div>문제를 불러오지 못했어요.<br><small>${escapeHtml(err.message)}</small></div>`;
    }
  }

  const totalQuestions = () => Object.values(questions).reduce((s, a) => s + a.length, 0);
  const topicSolved = t => (questions[t] || []).filter(q => progress.solvedIds[q.uid]).length;
  const currentQ = () => (questions[cur.topic] || [])[cur.index];

  /* ---------------- 렌더링 ---------------- */
  function renderAll() { renderTopics(); renderQuestion(); updateStats(); }

  function renderTopics() {
    const topicKeys = [...TOPICS.map(t => t.key), ...Object.keys(questions).filter(k => !TOPIC_MAP[k])];
    $('#topics').innerHTML = topicKeys.filter(k => questions[k]).map(k => {
      const meta = TOPIC_MAP[k] || { label: k, icon: '📘' };
      const total = questions[k].length, done = topicSolved(k);
      const p = total ? Math.round(done / total * 100) : 0;
      return `<button class="chip ${k === cur.topic ? 'active' : ''}" data-topic="${escapeHtml(k)}">
        <span class="ring" style="--p:${p}"></span>${meta.icon} ${escapeHtml(meta.label)} <span class="count">${done}/${total}</span></button>`;
    }).join('');
    $$('#topics .chip').forEach(b => b.addEventListener('click', () => goTo(b.dataset.topic, 0)));
  }

  function renderQuestion() {
    const list = questions[cur.topic] || [];
    const q = currentQ();
    if (!q) {
      $('#q-meta').innerHTML = '';
      $('#q-text').innerHTML = `<div class="empty"><div class="big">📭</div>이 주제에는 아직 문제가 없어요.</div>`;
      $('#q-example').textContent = ''; $('#dots').innerHTML = '';
      return;
    }
    const d = DIFF[q.difficulty];
    const solved = !!progress.solvedIds[q.uid];
    $('#q-meta').innerHTML = `
      <span class="q-num">Q${cur.index + 1} / ${list.length}</span>
      <span class="badge ${d.cls}">${d.label}</span>
      <span class="badge badge-primary">+${d.points}점</span>
      ${solved ? '<span class="badge badge-easy">✔ 해결함</span>' : ''}`;
    $('#q-text').textContent = q.question;
    $('#q-example').textContent = q.example || '(예시 없음)';
    $('#hint-text').textContent = q.hint;
    $('#hint').open = false;
    $('#prev-btn').disabled = cur.index === 0;
    $('#next-btn').textContent = cur.index >= list.length - 1 ? '처음 문제로 ↺' : '다음 문제 →';
    $('#dots').innerHTML = list.map((x, i) =>
      `<button class="${progress.solvedIds[x.uid] ? 'done' : ''} ${i === cur.index ? 'current' : ''}" data-i="${i}" title="Q${i + 1}${progress.solvedIds[x.uid] ? ' (해결)' : ''}">${i + 1}</button>`).join('');
    $$('#dots button').forEach(b => b.addEventListener('click', () => goTo(cur.topic, +b.dataset.i)));

    // 에디터: 저장된 초안 복원
    setCode(store.get(draftKey(q), ''));
    resetResult();
    store.set('lastPosition', cur);
  }

  function updateStats() {
    const total = totalQuestions();
    progress.level = Math.max(progress.level, levelFromScore(progress.score));
    $('#score').textContent = fmt(progress.score);
    $('#solved').textContent = fmt(progress.solved);
    $('#solved-sub').textContent = `전체 ${total}문제`;
    $('#streak').textContent = progress.streak;
    $('#best-streak').textContent = `최고 기록 ${progress.bestStreak}`;
    $('#streak-card').classList.toggle('hot', progress.streak >= 3);
    $('#level').textContent = progress.level;
    const xpIn = progress.score - (progress.level - 1) * XP_PER_LEVEL;
    const xpClamped = Math.max(0, Math.min(XP_PER_LEVEL, xpIn));
    $('#xp-text').textContent = `${fmt(xpClamped)} / ${XP_PER_LEVEL} XP`;
    $('#xp-bar').style.width = (xpClamped / XP_PER_LEVEL * 100) + '%';
    const solvedNow = Object.keys(progress.solvedIds).length;
    const pct = total ? Math.min(100, Math.round(Math.max(solvedNow, 0) / total * 100)) : 0;
    $('#progress-pct').textContent = pct + '%';
    $('#progress-bar').style.width = pct + '%';
    const name = GUEST ? '연습생' : (user ? user.studentName : '');
    $('#greet').textContent = name ? `${name}님, 안녕하세요 👋` : '안녕하세요 👋';
    $('#greet-eyebrow').textContent = progress.streak >= 3 ? `🔥 ${progress.streak}문제 연속 정답 중!` : '오늘도 한 문제씩';
  }

  function goTo(topic, index) {
    if (!questions[topic]) return;
    saveDraft();
    cur = { topic, index };
    renderTopics();
    renderQuestion();
    if (innerWidth < 1024) $('#q-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function next() { const n = (questions[cur.topic] || []).length; goTo(cur.topic, n ? (cur.index + 1) % n : 0); }
  function prev() { if (cur.index > 0) goTo(cur.topic, cur.index - 1); }

  /* ---------------- 에디터 ---------------- */
  function initEditor() {
    const host = $('#editor-host');
    if (window.CodeMirror) {
      editor = CodeMirror(host, {
        mode: 'python', lineNumbers: true, indentUnit: 4, tabSize: 4, indentWithTabs: false,
        autoCloseBrackets: true, matchBrackets: true, styleActiveLine: true, lineWrapping: false,
        placeholder: '# 여기에 Python 코드를 작성하세요\nprint("Hello, Python!")',
        extraKeys: {
          'Tab': cm => cm.somethingSelected() ? cm.indentSelection('add') : cm.replaceSelection('    ', 'end'),
          'Shift-Tab': cm => cm.indentSelection('subtract'),
          'Ctrl-Enter': () => runCode(), 'Cmd-Enter': () => runCode(),
          'Ctrl-/': 'toggleComment', 'Cmd-/': 'toggleComment'
        }
      });
      let t;
      editor.on('change', () => { clearTimeout(t); t = setTimeout(saveDraft, 400); });
    } else {
      host.innerHTML = '<textarea id="code-fallback" spellcheck="false" placeholder="# 여기에 Python 코드를 작성하세요"></textarea>';
      $('#code-fallback').addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runCode(); }
        if (e.key === 'Tab') { e.preventDefault(); document.execCommand('insertText', false, '    '); }
      });
      $('#code-fallback').addEventListener('input', saveDraft);
    }
  }
  const getCode = () => editor ? editor.getValue() : ($('#code-fallback')?.value || '');
  function setCode(v) {
    if (editor) { editor.setValue(v || ''); editor.clearHistory(); }
    else if ($('#code-fallback')) $('#code-fallback').value = v || '';
  }
  const draftKey = q => `draft:${GUEST ? 'guest' : (user?.studentId || 'anon')}:${q.uid}`;
  function saveDraft() { const q = currentQ(); if (q) store.set(draftKey(q), getCode()); }

  /* ---------------- Python 실행기 (Web Worker) ---------------- */
  class PyRunner {
    constructor() { this.seq = 0; this.pending = new Map(); this.start(); }
    start() {
      this.ready = false;
      setPyStatus('loading');
      this.readyPromise = new Promise((res, rej) => { this._res = res; this._rej = rej; });
      try { this.worker = new Worker('py-worker.js'); }
      catch (e) { setPyStatus('error'); this._rej(e); return; }
      this.worker.onmessage = e => {
        const m = e.data;
        if (m.type === 'ready') { this.ready = true; setPyStatus('ready'); this._res(); }
        else if (m.type === 'init-error') { setPyStatus('error'); this._rej(new Error(m.error)); }
        else if (m.type === 'result') { const p = this.pending.get(m.id); if (p) { clearTimeout(p.timer); this.pending.delete(m.id); p.resolve(m); } }
      };
      this.worker.onerror = e => { console.error(e); setPyStatus('error'); this._rej(new Error(e.message || 'worker error')); };
      this.worker.postMessage({ type: 'init' });
    }
    restart() {
      try { this.worker.terminate(); } catch {}
      this.pending.forEach(p => clearTimeout(p.timer)); this.pending.clear();
      this.start();
    }
    async run(code) {
      await this.readyPromise;
      const id = ++this.seq;
      return new Promise(resolve => {
        const timer = setTimeout(() => {
          this.pending.delete(id);
          this.restart();
          resolve({ ok: false, timeout: true, output: '', error: `⏱️ 실행 시간이 ${RUN_TIMEOUT_MS / 1000}초를 넘어서 중단했어요.\n무한 반복(while True 등)이 없는지 확인해 보세요.` });
        }, RUN_TIMEOUT_MS);
        this.pending.set(id, { resolve, timer });
        this.worker.postMessage({ type: 'run', id, code });
      });
    }
  }
  function setPyStatus(s) {
    const el = $('#py-status'); if (!el) return;
    el.className = 'status-pill ' + (s === 'ready' ? 'ready' : s === 'error' ? 'error' : '');
    el.innerHTML = s === 'ready' ? '<span class="dot live"></span><span class="label">Python 준비 완료</span>'
      : s === 'error' ? '⚠️<span class="label">Python 로드 실패 · 새로고침</span>'
      : '<span class="spinner"></span><span class="label">Python 준비 중</span>';
  }

  /* ---------------- 실행 & 채점 ---------------- */
  const normalize = s => String(s ?? '').replace(/\r\n?/g, '\n').split('\n').map(l => l.trimEnd()).join('\n').trim();
  const collapse = s => normalize(s).replace(/\s+/g, ' ');

  async function runCode() {
    if (busy) return;
    const q = currentQ();
    const code = getCode();
    if (!code.trim()) { toast('먼저 코드를 작성해 주세요!', 'error'); editor && editor.focus(); return; }
    if (!GUEST && !user) { toast('로그인 후 이용해 주세요.', 'error'); return; }
    saveDraft();

    busy = true;
    const btn = $('#run-btn');
    btn.disabled = true;
    btn.innerHTML = runner.ready ? '<span class="spinner"></span> 실행 중…' : '<span class="spinner"></span> Python 준비 중…';
    $('#output').className = 'console placeholder';
    $('#output').textContent = '실행 중…';

    let res;
    try { res = await runner.run(code); }
    catch (err) { res = { ok: false, output: '', error: 'Python 실행 환경을 불러오지 못했어요. 페이지를 새로고침해 주세요.\n' + err.message }; }

    busy = false;
    btn.disabled = false;
    btn.innerHTML = '▶ 실행하고 채점하기';
    attempted = true;
    const r = $('#result').getBoundingClientRect();
    if (r.top > innerHeight - 160) $('#result').scrollIntoView({ behavior: 'smooth', block: 'center' });

    const out = normalize(res.output);
    if (!res.ok) {
      $('#output').className = 'console err';
      $('#output').textContent = (out ? out + '\n\n' : '') + res.error;
      showFeedback('error', res.timeout ? '⏱️' : '🐞', res.timeout ? '시간 초과' : '실행 중 오류가 발생했어요',
        res.timeout ? '반복문 종료 조건을 확인해 보세요.' : '빨간 글씨의 마지막 줄(오류 종류)을 먼저 읽어 보세요.');
      breakStreak();
      return;
    }
    if (!q) { renderOutput(out); return; }
    grade(q, out);
  }

  function renderOutput(out, expected) {
    const el = $('#output');
    el.className = 'console' + (out ? '' : ' placeholder');
    if (!out) { el.textContent = '(출력 없음 — print()로 결과를 출력했는지 확인하세요)'; return; }
    if (expected == null) { el.textContent = out; return; }
    const exp = normalize(expected).split('\n');
    el.innerHTML = out.split('\n').map((l, i) =>
      `<span class="ln ${collapse(l) === collapse(exp[i] ?? '\u0000') ? 'good' : 'bad'}">${escapeHtml(l) || ' '}</span>`).join('');
  }

  function grade(q, out) {
    const expected = normalize(q.expectedOutput);
    const correct = collapse(out) === collapse(expected);
    renderOutput(out, correct ? null : expected);
    $('#expected-wrap').classList.remove('hidden');
    $('#outputs').classList.add('compare');
    $('#expected').textContent = expected || '(빈 출력)';

    if (!correct) {
      breakStreak();
      showFeedback('error', '🤔', '아쉬워요, 출력이 달라요', '빨간 줄이 예상 출력과 다른 부분이에요. 힌트도 참고해 보세요.');
      return;
    }

    const first = !progress.solvedIds[q.uid];
    if (first) {   // 복습(이미 푼 문제)은 점수·연속 기록에 반영하지 않음
      progress.streak += 1;
      progress.bestStreak = Math.max(progress.bestStreak, progress.streak);
    }
    const extra = {};
    let gained = 0;
    const prevLevel = progress.level;
    if (first) {
      gained = DIFF[q.difficulty].points;
      progress.score += gained;
      progress.solved += 1;
      progress.solvedIds[q.uid] = true;
      extra['solvedIds/' + q.uid] = true;
      progress.level = Math.max(progress.level, levelFromScore(progress.score));
    }
    if (first) saveProgress(extra);
    updateStats();
    renderTopics();
    // 문제 카드 상단 배지/점 갱신
    const list = questions[cur.topic];
    $$('#dots button').forEach((b, i) => b.classList.toggle('done', !!progress.solvedIds[list[i].uid]));

    if (first) {
      scorePop(`+${gained}`);
      confetti(progress.streak >= 3 ? 140 : 80);
      showFeedback('success', '🎉', `정답이에요! +${gained}점`, progress.streak >= 2 ? `${progress.streak}문제 연속 정답 🔥` : '이 기세로 다음 문제도 도전해 볼까요?', true);
      if (progress.level > prevLevel) setTimeout(() => levelUp(progress.level), 900);
    } else {
      showFeedback('success', '✅', '정답이에요! (복습)', '이미 해결한 문제라 점수는 추가되지 않아요.', true);
    }
  }

  function breakStreak() {
    if (progress.streak !== 0) { progress.streak = 0; updateStats(); saveProgress(); }
  }

  function showFeedback(type, icon, title, desc, withNext = false) {
    $('#feedback').innerHTML = `
      <div class="feedback ${type}" role="status">
        <span class="fb-icon">${icon}</span>
        <div><div class="fb-title">${escapeHtml(title)}</div><div class="fb-desc">${escapeHtml(desc)}</div></div>
        ${withNext ? '<div class="fb-actions"><button class="btn btn-success btn-sm" id="fb-next">다음 문제 →</button></div>' : ''}
      </div>`;
    if (withNext) $('#fb-next').addEventListener('click', next);
  }

  function resetResult() {
    attempted = false;
    $('#feedback').innerHTML = '';
    $('#output').className = 'console placeholder';
    $('#output').textContent = '코드를 실행하면 여기에 결과가 표시됩니다.';
    $('#expected-wrap').classList.add('hidden');
    $('#outputs').classList.remove('compare');
  }

  function scorePop(text) {
    const el = document.createElement('div');
    el.className = 'score-pop'; el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  function levelUp(lv) {
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.innerHTML = `<div class="modal levelup"><div class="big">🏅</div><h2 style="font-size:1.6rem;font-weight:800;margin:8px 0 4px">레벨 업! Lv.${lv}</h2>
      <p class="muted">꾸준함이 실력이 됩니다. 계속 가 볼까요?</p>
      <div class="modal-foot" style="justify-content:center"><button class="btn btn-primary btn-lg">계속하기</button></div></div>`;
    document.body.appendChild(ov);
    confetti(160);
    const close = () => ov.remove();
    ov.querySelector('button').addEventListener('click', close);
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
  }

  /* ---------------- 이벤트 바인딩 ---------------- */
  function bind() {
    $('#run-btn').addEventListener('click', runCode);
    $('#next-btn').addEventListener('click', next);
    $('#prev-btn').addEventListener('click', prev);
    $('#clear-btn').addEventListener('click', () => {
      if (!getCode().trim() || confirm('작성한 코드를 모두 지울까요?')) { setCode(''); saveDraft(); editor && editor.focus(); }
    });
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runCode(); }
    });
    window.addEventListener('beforeunload', saveDraft);
  }

  /* ---------------- 시작 ---------------- */
  function boot() {
    renderShell();
    initEditor();
    bind();
    runner = new PyRunner();           // 로그인과 동시에 백그라운드로 Python 로드
    loadQuestions();

    if (GUEST) {
      progress = normalizeProgress(store.get('guestProgress'));
      renderUser(); updateStats();
      return;
    }
    const saved = store.get('currentUser');
    if (saved && saved.studentId && saved.studentName) {
      user = saved;
      renderUser();
      database.ref('students/' + user.studentId).once('value')
        .then(s => { progress = normalizeProgress(s.val()); updateStats(); if (questionsLoaded) renderAll(); })
        .catch(err => { console.error(err); toast('기록을 불러오지 못했어요.', 'error'); });
    } else {
      store.del('currentUser');
      renderUser();
      showLogin();
    }
    updateStats();
  }

  // syncThemeIcon 등 공통 초기화가 끝난 뒤 실행
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { boot(); syncThemeIcon(); $$('[data-theme-toggle]').forEach(b => b.onclick = toggleTheme); });
  else { boot(); syncThemeIcon(); $$('[data-theme-toggle]').forEach(b => b.onclick = toggleTheme); }
})();
