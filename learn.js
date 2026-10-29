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
            <span><span data-i18n="brand.title"></span><small data-i18n="brand.sub"></small></span>
          </a>
          <nav class="nav-links collapsible">
            <a href="${GUEST ? 'index_no_login.html' : 'index.html'}" class="active" data-i18n="nav.learn"></a>
            <a href="dashboard.html" target="_blank" rel="noopener" data-i18n="nav.board"></a>
          </nav>
          <div class="spacer"></div>
          <span class="status-pill" id="py-status" data-i18n-attr="title:py.title"></span>
          ${langSelectHTML()}
          <a class="icon-btn only-mobile" href="dashboard.html" target="_blank" rel="noopener" data-i18n-attr="aria-label:aria.board">🏆</a>
          <button class="icon-btn" data-theme-toggle data-i18n-attr="aria-label:aria.theme"></button>
          <div style="position:relative" id="user-area"></div>
        </div>
      </header>

      <main class="wrap">
        ${GUEST ? `<div class="guest-banner"><span data-i18n="guest.banner"></span> <a href="index.html" style="font-weight:800" data-i18n="guest.login"></a></div>` : ''}

        <div id="hub-view">
        <section class="summary">
          <div class="card level-card">
            <div class="eyebrow" id="greet-eyebrow"></div>
            <h1 id="greet"></h1>
            <div class="level-row">
              <div class="level-badge"><div><small>LEVEL</small><b id="level">1</b></div></div>
              <div class="grow">
                <div class="xp-text"><span data-i18n="xp.next"></span><span class="tnum" id="xp-text">0 / 500 XP</span></div>
                <div class="bar accent"><i id="xp-bar"></i></div>
              </div>
            </div>
          </div>
          <div class="kpis">
            <div class="card kpi"><span class="kpi-label" data-i18n="kpi.score"></span><span class="kpi-value" id="score">0</span><span class="kpi-sub" data-i18n="kpi.scoreSub"></span></div>
            <div class="card kpi"><span class="kpi-label" data-i18n="kpi.solved"></span><span class="kpi-value" id="solved">0</span><span class="kpi-sub" id="solved-sub"></span></div>
            <div class="card kpi" id="streak-card"><span class="kpi-label"><span class="streak-fire">🔥</span> <span data-i18n="kpi.streak"></span></span><span class="kpi-value" id="streak">0</span><span class="kpi-sub" id="best-streak"></span></div>
            <div class="card kpi"><span class="kpi-label" data-i18n="kpi.progress"></span><span class="kpi-value" id="progress-pct">0%</span><div class="bar success" style="margin-top:6px"><i id="progress-bar"></i></div></div>
          </div>
        </section>

        <section class="hub-head">
          <h2 id="hub-title"></h2>
          <p id="hub-desc"></p>
        </section>
        <div id="hub-continue"></div>
        <div id="hub-groups">
          <div class="skeleton" style="height:180px;border-radius:16px;margin-bottom:12px"></div>
          <div class="skeleton" style="height:180px;border-radius:16px"></div>
        </div>
        </div>

        <div id="practice-view" class="hidden">
        <section class="card topic-bar" id="topic-bar"></section>

        <section class="workspace">
          <article class="card q-card" id="q-card">
            <div class="q-meta" id="q-meta"><span class="skeleton" style="width:120px;height:22px"></span></div>
            <div class="q-text" id="q-text"><div class="skeleton" style="height:18px;margin-bottom:8px"></div><div class="skeleton" style="height:18px;width:70%"></div></div>
            <div class="q-example-label"><span data-i18n="q.example"></span></div>
            <div class="q-example" id="q-example">…</div>
            <div class="orig-note hidden" id="orig-note" data-i18n="q.origNote"></div>
            <details class="hint" id="hint"><summary data-i18n="q.hint"></summary><p id="hint-text"></p></details>
            <div class="q-nav">
              <button class="btn btn-ghost" id="prev-btn" data-i18n="q.prev"></button>
              <button class="btn btn-primary" id="next-btn"></button>
            </div>
            <div class="dots" id="dots" data-i18n-attr="aria-label:q.list"></div>
          </article>

          <article class="card editor-card">
            <div class="editor-head">
              <span class="tab">main.py</span>
              <span class="spacer"></span>
              <button class="icon-btn" id="clear-btn" data-i18n-attr="title:ed.clear;aria-label:ed.clear">🗑️</button>
            </div>
            <div id="editor-host"></div>
            <div class="run-bar">
              <button class="btn btn-success btn-lg" id="run-btn" data-i18n="run.btn"></button>
              <span class="hint-keys"><kbd style="background:var(--surface-2);border-color:var(--border)">Ctrl</kbd> + <kbd style="background:var(--surface-2);border-color:var(--border)">Enter</kbd> <span data-i18n="run.keys"></span></span>
            </div>
            <div class="result" id="result">
              <div id="feedback"></div>
              <div class="outputs" id="outputs">
                <div>
                  <div class="out-label" data-i18n="out.mine"></div>
                  <div class="console placeholder" id="output"></div>
                </div>
                <div id="expected-wrap" class="hidden">
                  <div class="out-label" data-i18n="out.expected"></div>
                  <div class="console" id="expected"></div>
                </div>
              </div>
            </div>
          </article>
        </section>
        </div>
      </main>`;
    applyI18n();
  }

  /* ---------------- 로그인 ---------------- */
  function showLogin() {
    const ov = document.createElement('div');
    ov.className = 'overlay';
    ov.id = 'login-overlay';
    ov.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="login-title" style="position:relative">
        <div class="login-hero">
          <div class="brand-logo"><span>🐍</span></div>
          <div style="position:absolute;right:20px;top:20px">${langSelectHTML()}</div>
          <h2 id="login-title" data-i18n="login.title"></h2>
          <p data-i18n="login.desc"></p>
        </div>
        <form class="login-form" id="login-form" novalidate>
          <div class="field">
            <label for="student-name" data-i18n="login.name"></label>
            <input class="input" id="student-name" autocomplete="name" data-i18n-attr="placeholder:login.namePh" required>
          </div>
          <div class="field">
            <label for="student-id" data-i18n="login.id"></label>
            <input class="input" id="student-id" inputmode="numeric" autocomplete="off" data-i18n-attr="placeholder:login.idPh" required>
          </div>
          <div class="input-error hidden" id="login-error"></div>
          <button class="btn btn-primary btn-lg btn-block" type="submit" id="login-btn" data-i18n="login.btn"></button>
        </form>
        <div class="login-alt"><span data-i18n="login.guest"></span> <a href="index_no_login.html" data-i18n="login.guestLink"></a></div>
      </div>`;
    document.body.appendChild(ov);
    applyI18n(ov);
    setTimeout(() => $('#student-name').focus(), 50);
    $('#login-form').addEventListener('submit', handleLogin);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const name = $('#student-name').value.trim();
    const sid = $('#student-id').value.trim().replace(/\s+/g, '');
    const err = $('#login-error');
    const fail = m => { err.textContent = m; err.classList.remove('hidden'); };
    if (name.length < 2) return fail(t('login.errName'));
    if (!/^[A-Za-z0-9-]{4,20}$/.test(sid)) return fail(t('login.errId'));
    err.classList.add('hidden');

    const btn = $('#login-btn');
    btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> ' + escapeHtml(t('login.checking'));
    try {
      const snap = await database.ref('students/' + sid).once('value');
      const existing = snap.val();
      if (existing && existing.studentName && existing.studentName.trim() !== name) {
        const ok = confirm(t('login.dup', { id: sid, name: existing.studentName }));
        if (!ok) { btn.disabled = false; btn.textContent = t('login.btn'); return; }
      }
      user = { studentName: name, studentId: sid, loginTime: new Date().toISOString() };
      store.set('currentUser', user);
      $('#login-overlay').remove();
      afterLogin(existing);
    } catch (ex) {
      fail(t('login.net') + ' (' + ex.message + ')');
      btn.disabled = false; btn.textContent = t('login.btn');
    }
  }

  function logout() {
    if (!confirm(t('logout.confirm'))) return;
    store.del('currentUser');
    location.reload();
  }

  function renderUser() {
    const area = $('#user-area');
    if (GUEST) {
      area.innerHTML = `<a class="btn btn-primary btn-sm" href="index.html">${escapeHtml(t('login.btnShort'))}</a>`;
      return;
    }
    if (!user) { area.innerHTML = ''; return; }
    area.innerHTML = `
      <button class="user-chip" id="user-chip" aria-haspopup="true">
        <span class="avatar">${escapeHtml(initial(user.studentName))}</span>
        <span class="who"><b>${escapeHtml(user.studentName)}</b><span>${escapeHtml(user.studentId)}</span></span>
      </button>
      <div class="card menu hidden" id="user-menu">
        <a href="dashboard.html" target="_blank" rel="noopener">${escapeHtml(t('menu.board'))}</a>
        <button id="logout-btn">${escapeHtml(t('menu.logout'))}</button>
      </div>`;
    $('#user-chip').addEventListener('click', ev => { ev.stopPropagation(); $('#user-menu').classList.toggle('hidden'); });
    if (!renderUser._bound) { document.addEventListener('click', () => $('#user-menu') && $('#user-menu').classList.add('hidden')); renderUser._bound = true; }
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
    if (existingData) toast(t('login.welcome', { name: user.studentName }), 'success');
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
      .catch(err => { console.error(err); toast(t('save.fail'), 'error'); });
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
            hint: q.hint || '',
            question_en: q.question_en, example_en: q.example_en, hint_en: q.hint_en,
            question_zh: q.question_zh, example_zh: q.example_zh, hint_zh: q.hint_zh,
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
      route();
    } catch (err) {
      console.error(err);
      $('#q-text').innerHTML = `<div class="empty"><div class="big">⚠️</div>${escapeHtml(t('q.loadFail'))}<br><small>${escapeHtml(err.message)}</small></div>`;
    }
  }

  const totalQuestions = () => Object.values(questions).reduce((s, a) => s + a.length, 0);
  const topicSolved = t => (questions[t] || []).filter(q => progress.solvedIds[q.uid]).length;
  const currentQ = () => (questions[cur.topic] || [])[cur.index];

  /* ---------------- 렌더링 ---------------- */
  function renderAll() { refreshTopicUI(); if (view === 'practice') renderQuestion(); updateStats(); }
  function refreshTopicUI() { if (view === 'hub') renderHub(); else renderTopicBar(); }

  /* ---------------- 화면 전환: 주제 선택(hub) ↔ 문제 풀이(practice) ---------------- */
  let view = 'hub';
  const allTopicKeys = () => [...TOPICS.map(x => x.key), ...Object.keys(questions).filter(k => !TOPIC_MAP[k])].filter(k => questions[k] && questions[k].length);
  const topicPos = () => store.get('topicPos', {});

  function route() {
    const m = location.hash.match(/^#\/t\/([\w-]+)/);
    if (m && questions[m[1]] && questions[m[1]].length) openTopic(m[1], null, false);
    else showHub(false);
  }
  function showHub(push = true) {
    if (view === 'practice') saveDraft();
    view = 'hub';
    if (push && location.hash !== '#/') history.pushState(null, '', '#/');
    $('#practice-view').classList.add('hidden');
    $('#hub-view').classList.remove('hidden');
    renderHub(); updateStats();
    scrollTo({ top: 0 });
  }
  function openTopic(topic, index = null, push = true) {
    if (!questions[topic]) return;
    if (view === 'practice') saveDraft();
    const n = questions[topic].length;
    if (index == null) {
      const saved = topicPos()[topic];
      index = saved != null ? Math.min(saved, n - 1) : Math.max(0, questions[topic].findIndex(q => !progress.solvedIds[q.uid]));
    }
    view = 'practice';
    cur = { topic, index };
    if (push) history.pushState(null, '', '#/t/' + topic);
    $('#hub-view').classList.add('hidden');
    $('#practice-view').classList.remove('hidden');
    renderTopicBar();
    renderQuestion();
    scrollTo({ top: 0 });
    if (editor) setTimeout(() => editor.refresh(), 0);
  }

  function topicStats(k) {
    const total = (questions[k] || []).length, done = topicSolved(k);
    return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
  }

  function renderHub() {
    $('#hub-title').textContent = gt('hubTitle');
    $('#hub-desc').textContent = gt('hubDesc');
    if (!questionsLoaded) return;
    const keys = allTopicKeys();
    const recommended = keys.find(k => topicStats(k).done < topicStats(k).total);

    // 이어서 학습하기
    const last = store.get('lastPosition');
    if (last && questions[last.topic] && questions[last.topic].length) {
      const st = topicStats(last.topic), meta = TOPIC_MAP[last.topic] || {};
      $('#hub-continue').innerHTML = `
        <button class="card continue-card" id="continue-btn">
          <span class="cc-icon">${meta.icon || '📘'}</span>
          <span class="cc-body"><span class="eyebrow">${escapeHtml(gt('continueTitle'))}</span>
            <b>${escapeHtml(topicLabel(last.topic))}</b> · Q${Math.min(last.index, st.total - 1) + 1}
            <span class="bar success" style="margin-top:8px"><i style="width:${st.pct}%"></i></span></span>
          <span class="btn btn-primary">${escapeHtml(gt('continueBtn'))}</span>
        </button>`;
      $('#continue-btn').onclick = () => openTopic(last.topic, last.index);
    } else $('#hub-continue').innerHTML = '';

    const grouped = new Set(TOPIC_GROUPS.flatMap(g => g.topics));
    const groups = [...TOPIC_GROUPS.map(g => ({ ...g, topics: g.topics.filter(k => keys.includes(k)) })),
                    { ...OTHER_GROUP, topics: keys.filter(k => !grouped.has(k)) }].filter(g => g.topics.length);

    $('#hub-groups').innerHTML = groups.map(g => {
      const gDone = g.topics.reduce((a, k) => a + topicStats(k).done, 0), gTotal = g.topics.reduce((a, k) => a + topicStats(k).total, 0);
      return `<section class="topic-group">
        <div class="group-head">
          <div><h3>${g.icon} ${escapeHtml(g.label[LANG] || g.label.ko)}</h3><p>${escapeHtml(g.desc[LANG] || g.desc.ko || '')}</p></div>
          <span class="group-prog tnum">${gDone} / ${gTotal}</span>
        </div>
        <div class="topic-grid">${g.topics.map(k => topicCard(k, k === recommended)).join('')}</div>
      </section>`;
    }).join('');
    $$('#hub-groups [data-open]').forEach(b => b.addEventListener('click', () => openTopic(b.dataset.open)));
  }

  function topicCard(k, recommended) {
    const meta = TOPIC_MAP[k] || { icon: '📘' };
    const st = topicStats(k), g = topicGuide(k);
    const complete = st.total > 0 && st.done === st.total;
    const action = complete ? gt('review') : st.done > 0 ? gt('cont') : gt('start');
    return `<article class="card topic-card ${complete ? 'complete' : ''} ${recommended ? 'recommended' : ''}">
      <div class="tc-head">
        <span class="tc-icon">${meta.icon || '📘'}</span>
        <div class="tc-title">
          <h4>${escapeHtml(topicLabel(k))}</h4>
          <span class="muted">${escapeHtml(gt('problems', { n: st.total }))}${complete ? ` · ✔ ${escapeHtml(gt('done'))}` : ''}</span>
        </div>
        ${recommended ? `<span class="badge badge-primary">⭐ ${escapeHtml(gt('recommend'))}</span>` : ''}
        <span class="tc-ring" style="--p:${st.pct}"><span>${st.pct}%</span></span>
      </div>
      ${g ? `<dl class="tc-guide">
        <div><dt>📘 ${escapeHtml(gt('def'))}</dt><dd>${escapeHtml(g.def)}</dd></div>
      </dl>
      <details class="tc-more" ${innerWidth >= 760 ? 'open' : ''}><summary>${escapeHtml(gt('need'))} · ${escapeHtml(gt('tip'))}</summary>
        <dl class="tc-guide">
          <div class="need"><dt>🎯 ${escapeHtml(gt('need'))}</dt><dd>${escapeHtml(g.need)}</dd></div>
          <div class="tip"><dt>🧭 ${escapeHtml(gt('tip'))}</dt><dd>${escapeHtml(g.tip)}</dd></div>
        </dl></details>` : `<p class="muted tc-noguide">${escapeHtml(gt('noGuide'))}</p>`}
      <div class="tc-foot">
        <div class="bar success"><i style="width:${st.pct}%"></i></div>
        <span class="tnum muted">${st.done}/${st.total}</span>
        <button class="btn ${complete ? 'btn-ghost' : 'btn-primary'} btn-sm" data-open="${escapeHtml(k)}">${escapeHtml(action)} →</button>
      </div>
    </article>`;
  }

  function renderTopicBar() {
    const k = cur.topic, meta = TOPIC_MAP[k] || { icon: '📘' }, st = topicStats(k), g = topicGuide(k);
    const wasOpen = $('#topic-guide') && $('#topic-guide').open;
    $('#topic-bar').innerHTML = `
      <div class="tb-row">
        <button class="btn btn-ghost btn-sm" id="back-btn">${escapeHtml(gt('back'))}</button>
        <span class="tb-icon">${meta.icon || '📘'}</span>
        <div class="tb-title"><b>${escapeHtml(topicLabel(k))}</b>
          <span class="muted tnum">${st.done}/${st.total} · ⭐ ${fmt(progress.score)} · 🔥 ${progress.streak} · Lv.${progress.level}</span></div>
        <div class="bar success tb-bar"><i style="width:${st.pct}%"></i></div>
      </div>
      ${g ? `<details class="tb-guide" id="topic-guide" ${wasOpen ? 'open' : ''}><summary>${escapeHtml(gt('guide'))}</summary>
        <dl class="tc-guide">
          <div><dt>📘 ${escapeHtml(gt('def'))}</dt><dd>${escapeHtml(g.def)}</dd></div>
          <div><dt>🎯 ${escapeHtml(gt('need'))}</dt><dd>${escapeHtml(g.need)}</dd></div>
          <div><dt>🧭 ${escapeHtml(gt('tip'))}</dt><dd>${escapeHtml(g.tip)}</dd></div>
        </dl></details>` : ''}`;
    $('#back-btn').onclick = () => showHub();
  }

  function renderQuestion() {
    const list = questions[cur.topic] || [];
    const q = currentQ();
    if (!q) {
      $('#q-meta').innerHTML = '';
      $('#q-text').innerHTML = `<div class="empty"><div class="big">📭</div>${escapeHtml(t('q.empty'))}</div>`;
      $('#q-example').textContent = ''; $('#dots').innerHTML = '';
      return;
    }
    const d = DIFF[q.difficulty];
    const solved = !!progress.solvedIds[q.uid];
    $('#q-meta').innerHTML = `
      <span class="q-num">Q${cur.index + 1} / ${list.length}</span>
      <span class="badge ${d.cls}">${escapeHtml(diffLabel(q.difficulty))}</span>
      <span class="badge badge-primary">${escapeHtml(t('q.points', { n: d.points }))}</span>
      ${solved ? `<span class="badge badge-easy">${escapeHtml(t('q.solved'))}</span>` : ''}`;
    renderQuestionText(q);
    $('#hint').open = false;
    $('#prev-btn').disabled = cur.index === 0;
    $('#next-btn').textContent = cur.index >= list.length - 1 ? t('q.first') : t('q.next');
    $('#dots').innerHTML = list.map((x, i) =>
      `<button class="${progress.solvedIds[x.uid] ? 'done' : ''} ${i === cur.index ? 'current' : ''}" data-i="${i}" title="Q${i + 1}${progress.solvedIds[x.uid] ? ' (' + escapeHtml(t('q.solvedShort')) + ')' : ''}">${i + 1}</button>`).join('');
    $$('#dots button').forEach(b => b.addEventListener('click', () => goTo(cur.topic, +b.dataset.i)));

    // 에디터: 저장된 초안 복원
    setCode(store.get(draftKey(q), ''));
    resetResult();
    store.set('lastPosition', cur);
    const tp = topicPos(); tp[cur.topic] = cur.index; store.set('topicPos', tp);
  }

  /** 문제·예시·힌트를 현재 언어로 표시 (번역 없으면 원문 + 안내) */
  function renderQuestionText(q) {
    const qq = qText(q, 'question'), ex = qText(q, 'example'), hi = qText(q, 'hint');
    $('#q-text').textContent = qq.text;
    $('#q-example').textContent = ex.text || t('q.noExample');
    $('#q-example').classList.toggle('code', !!ex.text && ex.text.includes('\n') && !/[가-힣\u4e00-\u9fff]/.test(ex.text.split('\n')[0]));
    $('#hint-text').textContent = hi.text || t('q.noHint');
    $('#orig-note').classList.toggle('hidden', LANG === 'ko' || (qq.translated && hi.translated));
  }

  function updateStats() {
    const total = totalQuestions();
    progress.level = Math.max(progress.level, levelFromScore(progress.score));
    $('#score').textContent = fmt(progress.score);
    $('#solved').textContent = fmt(progress.solved);
    $('#solved-sub').textContent = t('kpi.solvedSub', { n: total });
    $('#streak').textContent = progress.streak;
    $('#best-streak').textContent = t('kpi.best', { n: progress.bestStreak });
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
    const name = GUEST ? t('guest.name') : (user ? user.studentName : '');
    $('#greet').textContent = name ? t('greet.helloName', { name }) : t('greet.hello');
    $('#greet-eyebrow').textContent = progress.streak >= 3 ? t('greet.streak', { n: progress.streak }) : t('greet.default');
    if (view === 'practice' && questionsLoaded) renderTopicBar();
  }

  function goTo(topic, index) {
    if (!questions[topic]) return;
    saveDraft();
    cur = { topic, index };
    renderTopicBar();
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
        placeholder: t('ed.placeholder'),
        extraKeys: {
          'Tab': cm => cm.somethingSelected() ? cm.indentSelection('add') : cm.replaceSelection('    ', 'end'),
          'Shift-Tab': cm => cm.indentSelection('subtract'),
          'Ctrl-Enter': () => runCode(), 'Cmd-Enter': () => runCode(),
          'Ctrl-/': 'toggleComment', 'Cmd-/': 'toggleComment'
        }
      });
      let draftTimer;
      editor.on('change', () => { clearTimeout(draftTimer); draftTimer = setTimeout(saveDraft, 400); });
    } else {
      host.innerHTML = `<textarea id="code-fallback" spellcheck="false" placeholder="${escapeHtml(t('ed.placeholder'))}"></textarea>`;
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
          resolve({ ok: false, timeout: true, output: '', error: t('err.timeout', { s: RUN_TIMEOUT_MS / 1000 }) });
        }, RUN_TIMEOUT_MS);
        this.pending.set(id, { resolve, timer });
        this.worker.postMessage({ type: 'run', id, code, lang: LANG });
      });
    }
  }
  let pyState = 'loading';
  function setPyStatus(s) {
    pyState = s;
    const el = $('#py-status'); if (!el) return;
    el.className = 'status-pill ' + (s === 'ready' ? 'ready' : s === 'error' ? 'error' : '');
    el.innerHTML = s === 'ready' ? `<span class="dot live"></span><span class="label">${escapeHtml(t('py.ready'))}</span>`
      : s === 'error' ? `⚠️<span class="label">${escapeHtml(t('py.error'))}</span>`
      : `<span class="spinner"></span><span class="label">${escapeHtml(t('py.loading'))}</span>`;
  }

  /* ---------------- 실행 & 채점 ---------------- */
  const normalize = s => String(s ?? '').replace(/\r\n?/g, '\n').split('\n').map(l => l.trimEnd()).join('\n').trim();
  const collapse = s => normalize(s).replace(/\s+/g, ' ');

  async function runCode() {
    if (busy) return;
    const q = currentQ();
    const code = getCode();
    if (!code.trim()) { toast(t('err.noCode'), 'error'); editor && editor.focus(); return; }
    if (!GUEST && !user) { toast(t('err.needLogin'), 'error'); return; }
    saveDraft();

    busy = true;
    const btn = $('#run-btn');
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span> ' + escapeHtml(runner.ready ? t('run.running') : t('run.preparing'));
    $('#output').className = 'console placeholder';
    $('#output').textContent = t('run.running');

    let res;
    try { res = await runner.run(code); }
    catch (err) { res = { ok: false, output: '', error: t('err.pyLoad') + '\n' + err.message }; }

    busy = false;
    btn.disabled = false;
    btn.textContent = t('run.btn');
    attempted = true;
    const r = $('#result').getBoundingClientRect();
    if (r.top > innerHeight - 160) $('#result').scrollIntoView({ behavior: 'smooth', block: 'center' });

    const out = normalize(res.output);
    if (!res.ok) {
      $('#output').className = 'console err';
      $('#output').textContent = (out ? out + '\n\n' : '') + res.error;
      showFeedback('error', res.timeout ? '⏱️' : '🐞', res.timeout ? t('fb.timeout') : t('fb.error'),
        res.timeout ? t('fb.timeoutDesc') : t('fb.errorDesc'));
      breakStreak();
      return;
    }
    if (!q) { renderOutput(out); return; }
    grade(q, out);
  }

  function renderOutput(out, expected) {
    const el = $('#output');
    el.className = 'console' + (out ? '' : ' placeholder');
    if (!out) { el.textContent = t('out.none'); return; }
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
    $('#expected').textContent = expected || t('out.emptyExpected');

    if (!correct) {
      breakStreak();
      showFeedback('error', '🤔', t('fb.wrong'), t('fb.wrongDesc'));
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
    refreshTopicUI();
    // 문제 카드 상단 배지/점 갱신
    const list = questions[cur.topic];
    $$('#dots button').forEach((b, i) => b.classList.toggle('done', !!progress.solvedIds[list[i].uid]));

    if (first) {
      scorePop(`+${gained}`);
      confetti(progress.streak >= 3 ? 140 : 80);
      showFeedback('success', '🎉', t('fb.correct', { n: gained }), progress.streak >= 2 ? t('fb.streak', { n: progress.streak }) : t('fb.keepGoing'), true);
      if (progress.level > prevLevel) setTimeout(() => levelUp(progress.level), 900);
    } else {
      showFeedback('success', '✅', t('fb.review'), t('fb.reviewDesc'), true);
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
        ${withNext ? `<div class="fb-actions"><button class="btn btn-success btn-sm" id="fb-next">${escapeHtml(t('fb.next'))}</button></div>` : ''}
      </div>`;
    if (withNext) $('#fb-next').addEventListener('click', next);
  }

  function resetResult() {
    attempted = false;
    $('#feedback').innerHTML = '';
    $('#output').className = 'console placeholder';
    $('#output').textContent = t('out.placeholder');
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
    ov.innerHTML = `<div class="modal levelup"><div class="big">🏅</div><h2 style="font-size:1.6rem;font-weight:800;margin:8px 0 4px">${escapeHtml(t('lv.title', { n: lv }))}</h2>
      <p class="muted">${escapeHtml(t('lv.desc'))}</p>
      <div class="modal-foot" style="justify-content:center"><button class="btn btn-primary btn-lg">${escapeHtml(t('lv.btn'))}</button></div></div>`;
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
      if (!getCode().trim() || confirm(t('clear.confirm'))) { setCode(''); saveDraft(); editor && editor.focus(); }
    });
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runCode(); }
    });
    window.addEventListener('beforeunload', saveDraft);
    window.addEventListener('langchange', onLangChange);
    window.addEventListener('popstate', () => { if (questionsLoaded) route(); });
  }

  /** 언어가 바뀌면 화면 글자만 다시 그림 (에디터 코드·Python 실행 환경은 유지) */
  function onLangChange() {
    setPyStatus(pyState);
    renderUser();
    updateStats();
    if (editor) editor.setOption('placeholder', t('ed.placeholder'));
    if (busy) $('#run-btn').innerHTML = '<span class="spinner"></span> ' + escapeHtml(t('run.running'));
    if (!questionsLoaded) return;
    refreshTopicUI();
    const list = questions[cur.topic] || [];
    const q = currentQ();
    if (!q) return;
    // 문제 영역만 갱신 (에디터 내용과 채점 결과는 그대로)
    const d = DIFF[q.difficulty];
    $('#q-meta').innerHTML = `
      <span class="q-num">Q${cur.index + 1} / ${list.length}</span>
      <span class="badge ${d.cls}">${escapeHtml(diffLabel(q.difficulty))}</span>
      <span class="badge badge-primary">${escapeHtml(t('q.points', { n: d.points }))}</span>
      ${progress.solvedIds[q.uid] ? `<span class="badge badge-easy">${escapeHtml(t('q.solved'))}</span>` : ''}`;
    renderQuestionText(q);
    $('#next-btn').textContent = cur.index >= list.length - 1 ? t('q.first') : t('q.next');
    if (!attempted) { $('#output').textContent = t('out.placeholder'); }
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
        .catch(err => { console.error(err); toast(t('load.fail'), 'error'); });
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
