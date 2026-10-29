/* =========================================================
   공통 스크립트 — Firebase 설정 · 테마 · 토스트 · 유틸
   (모든 페이지에서 firebase SDK 다음에 불러옵니다)
   ========================================================= */
const firebaseConfig = {
  apiKey:            "AIzaSyBHOBXMqpBDsDIMONQqWZ83qxIxhU0VyG8",
  authDomain:        "python-learning-system.firebaseapp.com",
  databaseURL:       "https://python-learning-system-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "python-learning-system",
  storageBucket:     "python-learning-system.firebasestorage.app",
  messagingSenderId: "844754646343",
  appId:             "1:844754646343:web:da76658dae2e91d6468862",
  measurementId:     "G-9Q0JVVT0QB"
};
if (window.firebase && !firebase.apps.length) firebase.initializeApp(firebaseConfig);
const database = window.firebase ? firebase.database() : null;

/* 주제(카테고리) 메타데이터 — 순서/이름/아이콘 */
const TOPICS = [
  { key: 'datatypes',    label: '자료형',          icon: '🔤' },
  { key: 'operations',   label: '연산',            icon: '➗' },
  { key: 'numpy',        label: 'NumPy',           icon: '🔢' },
  { key: 'pandas',       label: 'Pandas',          icon: '🐼' },
  { key: 'data_loading', label: '데이터 불러오기', icon: '📂' }
];
const TOPIC_MAP = Object.fromEntries(TOPICS.map(t => [t.key, t]));
const DIFF = {
  easy:   { label: '쉬움',   points: 100, cls: 'badge-easy' },
  medium: { label: '보통',   points: 150, cls: 'badge-medium' },
  hard:   { label: '어려움', points: 200, cls: 'badge-hard' }
};
const XP_PER_LEVEL = 500;

/* ---------- 안전한 localStorage ---------- */
const store = {
  get(k, fallback = null) { try { const v = localStorage.getItem(k); return v === null ? fallback : JSON.parse(v); } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} }
};

/* ---------- DOM 유틸 ---------- */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
function escapeHtml(v) {
  return String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function initial(name) { return (String(name || '?').trim()[0] || '?').toUpperCase(); }
function fmt(n) { return Number(n || 0).toLocaleString('ko-KR'); }
function maskId(id) {
  const s = String(id || '');
  if (s.length <= 4) return s;
  return s.slice(0, 2) + '•'.repeat(Math.max(2, s.length - 4)) + s.slice(-2);
}
function timeAgo(iso) {
  if (!iso) return '기록 없음';
  const t = new Date(iso).getTime();
  if (isNaN(t)) return '기록 없음';
  const d = Date.now() - t;
  if (d < 60e3) return '방금 전';
  if (d < 3600e3) return Math.floor(d / 60e3) + '분 전';
  if (d < 86400e3) return Math.floor(d / 3600e3) + '시간 전';
  if (d < 7 * 86400e3) return Math.floor(d / 86400e3) + '일 전';
  return new Date(t).toLocaleDateString('ko-KR');
}
function levelFromScore(score) { return Math.floor((score || 0) / XP_PER_LEVEL) + 1; }
function isValidStudent(s) {
  return s && typeof s.studentName === 'string' && s.studentName.trim().length >= 2 &&
         s.studentId != null && String(s.studentId).trim().length >= 4;
}
function rankSort(a, b) {
  return (b.score || 0) - (a.score || 0) || (b.solved || 0) - (a.solved || 0) || (b.level || 1) - (a.level || 1);
}

/* ---------- 토스트 ---------- */
function toast(msg, type = '', ms = 2800) {
  let root = document.getElementById('toast-root');
  if (!root) { root = document.createElement('div'); root.id = 'toast-root'; root.setAttribute('aria-live', 'polite'); document.body.appendChild(root); }
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  root.appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 260); }, ms);
}

/* ---------- 테마(라이트/다크) ---------- */
(function initTheme() {
  const saved = store.get('theme');
  if (saved === 'light' || saved === 'dark') document.documentElement.dataset.theme = saved;
})();
function currentTheme() {
  const t = document.documentElement.dataset.theme;
  if (t) return t;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function toggleTheme() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  store.set('theme', next);
  syncThemeIcon();
}
function syncThemeIcon() {
  $$('[data-theme-toggle]').forEach(b => {
    b.textContent = currentTheme() === 'dark' ? '☀️' : '🌙';
    b.title = currentTheme() === 'dark' ? '라이트 모드' : '다크 모드';
  });
}
document.addEventListener('DOMContentLoaded', () => {
  $$('[data-theme-toggle]').forEach(b => b.addEventListener('click', toggleTheme));
  syncThemeIcon();
});

/* ---------- 간단 컨페티 ---------- */
function confetti(count = 90) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.createElement('canvas');
  c.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:3000';
  c.width = innerWidth * devicePixelRatio; c.height = innerHeight * devicePixelRatio;
  document.body.appendChild(c);
  const ctx = c.getContext('2d'); ctx.scale(devicePixelRatio, devicePixelRatio);
  const colors = ['#3776ab', '#ffd43b', '#12a150', '#7c5cff', '#ff6b70', '#2f6fde'];
  const ps = Array.from({ length: count }, () => ({
    x: innerWidth / 2 + (Math.random() - .5) * 120, y: innerHeight * .55,
    vx: (Math.random() - .5) * 14, vy: -Math.random() * 15 - 6,
    r: Math.random() * 6 + 4, c: colors[(Math.random() * colors.length) | 0],
    rot: Math.random() * 6, vr: (Math.random() - .5) * .4
  }));
  let frame = 0;
  (function tick() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ps.forEach(p => {
      p.vy += .45; p.vx *= .99; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.c; ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6); ctx.restore();
    });
    if (++frame < 120) requestAnimationFrame(tick); else c.remove();
  })();
}
