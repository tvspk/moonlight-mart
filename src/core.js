/* core.js — namespace, utilities, grading, state, saving, rewards, SRS.
   No Korean sentences live here: all language content is in the lesson data files. */
'use strict';
const MM = window.MM = {
  lessons: {}, forms: {}, textbook: {}, workbook: {}, game: {}, cards: {}, reads: {}, mnemo: {}, mnRoots: {},
  audio: {}, cast: {}, world: {}, upgrades: [],
};
MM.INTERVALS = [1, 2, 4, 7, 14, 30, 60];
MM.DAILY_GOAL = 10;

/* ---------- small utilities ---------- */
const U = MM.U = {
  esc(s) { return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); },
  shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
  pick(a) { return a[Math.floor(Math.random() * a.length)]; },
  today(d = new Date()) { const z = n => String(n).padStart(2, '0'); return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()); },
  addDays(iso, n) { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return U.today(d); },
  daysBetween(a, b) { return Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 864e5); },
  won(n) { return '₩' + Math.round(n).toLocaleString('en-US'); },
  fmtTime(s) { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); },
  $(sel, root = document) { return root.querySelector(sel); },
  $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); },
  uid() { return Math.random().toString(36).slice(2, 9); },
  isHangul(ch) { const c = ch.charCodeAt(0); return (c >= 0xAC00 && c <= 0xD7A3) || (c >= 0x3131 && c <= 0x318E); },
};

/* ---------- voices (game part): file id = FNV-1a 32 of UTF-8 "voice|text" → MM.voiceMap (clip of audio/voice/l<N>.mp3) ----------
   vNorm: NFC, {form|lemma} → form, trim. tools/voice_extract.js uses these same functions. */
MM.vNorm = s => String(s ?? '').normalize('NFC').replace(/\{([^|}]+)\|[^}]+\}/g, '$1').trim();
MM.voiceId = (voice, text) => {
  const b = new TextEncoder().encode(voice + '|' + MM.vNorm(text)); let h = 0x811c9dc5;
  for (const x of b) { h ^= x; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
};
/* who speaks with which voice: M = male, F = female. The player ('you') alternates by story: shifts A/B/C (and the staff chat)
   take turns with the lesson number, so neighbouring stories differ; MM.YOU_FIX pins a story where the text implies a gender. */
MM.YOU_FIX = { '8.A': 'M' };   // L8 A6: Mr. Kim says 학생은 우리 손자 같아요 (“you’re like my grandson”)
MM.youVoice = (n, key) => MM.YOU_FIX[n + '.' + key] || (((+n) + ({ A: 0, B: 1, C: 2, chat: 3 }[key] || 0)) % 2 ? 'F' : 'M');
MM.VOICE_OF = { boss: 'M', taxi: 'M', manager: 'M', courier: 'M', police: 'M', minji: 'F', sua: 'F', grandma: 'F', hq: 'F', board: 'F', card: 'F' };

/* ---------- Hangul helpers ---------- */
const HG = MM.HG = (() => {
  const L = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'.split('');
  const V = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'.split('');
  const T = [''].concat('ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'.split(''));
  function jamo(str) {
    let out = '';
    for (const ch of str) {
      const c = ch.charCodeAt(0) - 0xAC00;
      if (c >= 0 && c < 11172) out += L[Math.floor(c / 588)] + V[Math.floor((c % 588) / 28)] + T[c % 28];
      else out += ch;
    }
    return out;
  }
  return { L, V, T, jamo, syllables: s => Array.from(s.replace(/\s+/g, '')) };
})();

/* ---------- answer patterns & grading ---------- */
// "(a|b|)c" -> ["ac","bc","c"]; nested groups are not supported (keep data flat).
MM.expand = function expand(p) {
  const m = p.match(/\(([^()]*)\)/);
  if (!m) return [p];
  const out = [];
  for (const alt of m[1].split('|')) for (const rest of expand(p.slice(0, m.index) + alt + p.slice(m.index + m[0].length))) out.push(rest);
  return out;
};
MM.norm = s => String(s || '').normalize('NFC')
  .replace(/[“”"'‘’`]/g, '')
  .replace(/[.!?~…,·]+/g, ' ')
  .replace(/\s+/g, ' ').trim();
const nospace = s => s.replace(/\s+/g, '');
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
MM.lev = lev;
/* q: {ans:[patterns], soft:[{p, note}], diag:[{p, note}], order:false, lenient:false}
   returns {ok, kind, note, expected} */
MM.grade = function grade(input, q) {
  const expected = MM.expand(q.ans[0])[0];
  const raw = String(input || '');
  const s = MM.norm(raw);
  if (!s) return { ok: false, kind: 'empty', note: 'Type an answer first.', expected };
  if (/[A-Za-z]/.test(s)) return { ok: false, kind: 'latin', note: 'Write it in Hangul. Romanization is not accepted here.', expected };
  const acc = q.ans.flatMap(MM.expand).map(MM.norm);
  if (acc.includes(s)) return { ok: true, kind: 'exact', expected };
  if (acc.some(a => nospace(a) === nospace(s))) return { ok: true, kind: 'space', note: 'Accepted. Watch the spacing (띄어쓰기): ' + acc.find(a => nospace(a) === nospace(s)), expected };
  for (const so of (q.soft || [])) if (MM.expand(so.p).map(MM.norm).some(a => nospace(a) === nospace(s))) return { ok: true, kind: 'soft', note: so.note, expected };
  if (q.order !== false) {
    const key = x => x.split(' ').sort().join(' ');
    const last = x => x.split(' ').pop();
    // the predicate must stay at the end; only the words before it may move
    const hit = acc.find(a => a.includes(' ') && key(a) === key(s) && last(a) === last(s));
    if (hit) return { ok: true, kind: 'order', note: 'Accepted with a different word order. The book has: ' + hit, expected };
  }
  for (const d of (q.diag || [])) {
    const hit = (d.p && MM.expand(d.p).map(MM.norm).some(a => nospace(a) === nospace(s))) || (d.re && new RegExp(d.re).test(s)); // L27: a diag may be a regex only
    if (hit) return { ok: false, kind: 'diag', note: d.note, expected };
  }
  if (q.lenient !== false) {
    // one jamo off, but never inside the last two syllables (that is where the grammar lives)
    for (const a of acc) {
      const A = nospace(a), S = nospace(s);
      if (A.length < 4 || Math.abs(A.length - S.length) > 1) continue;
      const tailA = A.slice(-2), tailS = S.slice(-2);
      if (tailA !== tailS) continue;
      if (lev(HG.jamo(A), HG.jamo(S)) === 1) return { ok: true, kind: 'lenient', note: 'Accepted as a typo. Correct spelling: ' + a, expected };
    }
  }
  return { ok: false, kind: 'wrong', expected };
};

/* syllable diff for dictation: returns html marking missing/extra syllables */
MM.diffHtml = function diffHtml(user, target) {
  const a = Array.from(MM.norm(user)), b = Array.from(MM.norm(target));
  const m = a.length, n = b.length, dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  let i = 0, j = 0, out = '';
  while (i < m || j < n) {
    if (i < m && j < n && a[i] === b[j]) { out += U.esc(b[j]); i++; j++; }
    else if (j < n && (i >= m || dp[i][j + 1] >= dp[i + 1][j])) { out += '<ins>' + (b[j] === ' ' ? '␣' : U.esc(b[j])) + '</ins>'; j++; }
    else { out += '<del>' + (a[i] === ' ' ? '␣' : U.esc(a[i])) + '</del>'; i++; }
  }
  return out;
};

/* ---------- state ---------- */
MM.defaultState = () => ({
  v: 1, t: 0, theme: null, kbd: 'screen', won: 0,
  cur: { lesson: 1, tab: 'tb', closed: true },   // a new visitor sees every lesson collapsed
  L: {},            // per lesson: {tb:{g:{},ex:{},mode}, wb:{i:{}}, game:{shifts:{}, reads:{}}}
  skills: {},       // id -> {lvl, due, c, w}
  mistakes: [],     // {skill, qid, lesson, n}
  days: {},         // iso -> answers that day, right or wrong (only correct ones before 1.30)
  coll: [],         // collected item ids
  cards: {},        // (old Loyalty Cards, replaced by Mnemo Hooks on 2026-11-15; kept so old codes still load)
  mh: { c: {} },    // Mnemo Hooks SRS: key -> [due day, interval, ease×100, reps, lapses]; keys <card id>:r|p|l, R:<root id>
  fixed: [],        // store upgrades done
  vq: {},           // vocab rotation queue per lesson
});
MM.S = MM.defaultState();
MM.LS = (n) => { const S = MM.S; S.L[n] = S.L[n] || {}; const L = S.L[n]; L.tb = L.tb || { g: {}, ex: {} }; L.wb = L.wb || { i: {} }; L.game = L.game || { shifts: {}, reads: {} }; return L; };

const LS_KEY = 'moonlight-mart-v1';
let dbDoc = null, saveTimer = null, dbWarned = false;
/* S.t = time of the last real change. saveNow() is only called when something changed (MM.save() pending, import,
   erase), so an older state on another device can never get a newer stamp just by being opened and closed. */
MM.saveNow = function () {
  clearTimeout(saveTimer); saveTimer = null;
  MM.S.t = Date.now();
  const json = JSON.stringify(MM.S);
  try { localStorage.setItem(LS_KEY, json); } catch (e) { /* storage blocked: db only */ }
  if (dbDoc) dbWrite(JSON.parse(json), 0);
  if (MM.sync) MM.sync.changed();   // sync.js: note what changed, upload soon
};
/* sync.js after a merge: write the merged progress without counting it as a change of this device */
MM.writeLocal = function () { MM.S.t = Date.now(); localStorage.setItem(LS_KEY, JSON.stringify(MM.S)); };
/* account save: one retry for a transient error; anything else (document too large, quota) is shown once */
function dbWrite(obj, tries) {
  const doc = dbDoc;
  doc.set(obj).then(() => { dbWarned = false; }).catch(err => {
    const code = err && err.code;
    if (code === 'unavailable' && tries < 1) return setTimeout(() => { if (dbDoc === doc) dbWrite(obj, tries + 1); }, 800 + Math.random() * 1200);
    console.warn('save failed', code);
    if (!dbWarned && MM.ui && MM.ui.toast) { dbWarned = true; MM.ui.toast(code === 'invalid_argument' || code === 'quota_exceeded' ? 'Your account is full: progress is saved in this browser only. Get a transfer code to keep it safe.' : 'Could not save to your account just now. Progress is kept in this browser.'); }
  });
}
MM.save = function () { if (saveTimer) clearTimeout(saveTimer); saveTimer = setTimeout(MM.saveNow, 900); };
MM.savePending = () => !!saveTimer;
/* Mnemo Hooks card ids were renamed on 2026-11-17 (old prefix → ko-k3-, same numbers): progress saved before keeps its cards */
MM.oldCardId = k => typeof k === 'string' && /^ko-[a-z]+3-/.test(k) && !k.startsWith('ko-k3-') ? 'ko-k3-' + k.replace(/^ko-[a-z]+3-/, '') : k;
MM.fixIds = function (S) {
  const c = S && S.mh && S.mh.c;
  if (c && typeof c === 'object') for (const k of Object.keys(c)) { const n = MM.oldCardId(k); if (n !== k) { if (!(n in c)) c[n] = c[k]; delete c[k]; } }
  return S;
};
MM.loadLocal = function () {
  try { const raw = localStorage.getItem(LS_KEY); if (raw) MM.S = MM.fixIds(Object.assign(MM.defaultState(), JSON.parse(raw))); } catch (e) { }
  MM.bootT = MM.S.t || 0;
};
/* account vs this browser: the newer LAST CHANGE wins. Compared with the stamp this browser had when the page opened
   (MM.bootT), so changes made while the account was still loading do not make an old state look new. */
MM.connectDb = async function (onRemote) {
  if (!window.claude || !window.claude.use) return;
  try {
    const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
    if (!db || !user) return;
    const id = await user.id();
    if (!id) return;
    const doc = db.doc('data/users/' + id + '/moonlight-mart');
    const snap = await doc.get();
    dbDoc = doc;
    if (snap.exists) {
      const remote = snap.data(), rt = remote.t || 0;
      if (rt > (MM.bootT || 0)) { clearTimeout(saveTimer); saveTimer = null; MM.S = MM.fixIds(Object.assign(MM.defaultState(), JSON.parse(JSON.stringify(remote)))); try { localStorage.setItem(LS_KEY, JSON.stringify(MM.S)); } catch (e) { } onRemote && onRemote(); }
      else if (rt < (MM.S.t || 0)) MM.saveNow();
    } else if (MM.S.t) MM.saveNow();
    MM.dbOk = true;
  } catch (e) { console.warn('db unavailable', e && e.code); }
};
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && saveTimer) MM.saveNow(); });

/* ---------- transfer code: MM3- + base64url(deflate-raw(JSON)) ---------- */
MM.exportCode = async function () {
  const bytes = new TextEncoder().encode(JSON.stringify(MM.S));
  const cs = new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate-raw'));
  const buf = new Uint8Array(await new Response(cs).arrayBuffer());
  let bin = ''; for (const b of buf) bin += String.fromCharCode(b);
  return 'MM3-' + btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
MM.importCode = async function (code) {
  code = String(code || '').trim();
  if (!code.startsWith('MM3-')) throw new Error('The code should start with MM3-.');
  let b64 = code.slice(4).replace(/\s+/g, '').replace(/-/g, '+').replace(/_/g, '/');
  while (b64.length % 4) b64 += '=';
  let obj;
  try {
    const bin = atob(b64), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const ds = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
    obj = JSON.parse(await new Response(ds).text());
  } catch (e) { throw new Error('The code is incomplete or damaged. Copy the whole code again (it is long).'); }
  if (!obj || obj.v !== 1) throw new Error('This code is from a different app version.');
  return MM.fixIds(Object.assign(MM.defaultState(), obj));
};

/* ---------- Korean date (header) ---------- */
/* Sino-Korean number 1–9999 in Hangul: 일 is dropped before 십/백/천 (십, 백, 천; 2026 → 이천이십육) */
MM.sinoKo = function (n) {
  const D = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'], U = [[1000, '천'], [100, '백'], [10, '십']];
  let out = '';
  for (const [v, u] of U) { const k = Math.floor(n / v) % 10; if (k) out += (k === 1 ? '' : D[k]) + u; }
  return out + D[n % 10];
};
MM.KO_WD = ['일', '월', '화', '수', '목', '금', '토'];
/* short: 10월 23일 (금) · full (spoken, in words): 이천이십육 년 시월 이십삼 일 금요일 (6월 유월, 10월 시월) */
MM.koDate = function (d = new Date()) {
  const y = d.getFullYear(), m = d.getMonth() + 1, day = d.getDate(), wd = MM.KO_WD[d.getDay()];
  const mon = m === 6 ? '유' : m === 10 ? '시' : MM.sinoKo(m);
  return { short: `${m}월 ${day}일 (${wd})`, full: `${MM.sinoKo(y)} 년 ${mon}월 ${MM.sinoKo(day)} 일 ${wd}요일` };
};

/* ---------- skills, rewards, SRS, attendance ---------- */
MM.skill = id => (MM.S.skills[id] = MM.S.skills[id] || { lvl: 0, due: null, c: 0, w: 0 });
MM.isWeak = id => { const s = MM.S.skills[id]; return !!s && s.w >= 2 && s.c / (s.c + s.w) < 0.7; };
MM.bonusPct = () => MM.upgrades.filter(u => MM.S.fixed.includes(u.id) && u.bonus === 'won10').length * 10;
MM.hasPerk = perk => MM.upgrades.some(u => MM.S.fixed.includes(u.id) && u.bonus === perk);
MM.perkCount = perk => MM.upgrades.filter(u => MM.S.fixed.includes(u.id) && u.bonus === perk).length;
/* call once per answered question; returns ₩ earned. Every answered question counts for the time card, right or wrong
   (user, 1.30); opts.noDay = not a new answer (a retry of the same item, or an answer only shown). */
MM.record = function (q, ok, opts = {}) {
  const S = MM.S, day = U.today();
  let earned = 0;
  if (q.skill && MM.tallyAdd) MM.tallyAdd(q.skill, ok);
  if (q.skill) {
    const sk = MM.skill(q.skill);
    if (ok) sk.c++; else sk.w++;
  }
  if (!opts.noDay) S.days[day] = (S.days[day] || 0) + 1;
  if (ok) {
    let base = opts.base ?? 100;
    if (q.skill && MM.isWeak(q.skill)) base *= 2;
    if (opts.typed) base *= 1.5;
    base *= 1 + MM.bonusPct() / 100;
    earned = Math.round(base / 10) * 10;
    S.won += earned;
    // answered a returned mistake correctly -> retire one entry for that skill
    if (opts.review) { const i = S.mistakes.findIndex(m => m.skill === q.skill); if (i >= 0) S.mistakes.splice(i, 1); }
  } else if (q.skill && !opts.noMistake) {
    const m = S.mistakes.find(m => m.qid === q.id);
    if (m) m.n++; else S.mistakes.push({ skill: q.skill, qid: q.id, lesson: q.lesson || S.cur.lesson, n: 1 });
    if (S.mistakes.length > 80) S.mistakes.shift();
  }
  MM.save();
  return earned;
};
/* at the end of a round: tally {skill:{c,w}} -> move the skill along the interval ladder */
MM.srsUpdate = function (tally) {
  const day = U.today();
  for (const [id, t] of Object.entries(tally)) {
    const sk = MM.skill(id);
    const acc = t.c / Math.max(1, t.c + t.w);
    if (acc >= 0.8) { if (!sk.due || sk.due <= day) sk.lvl = Math.min(sk.lvl + 1, MM.INTERVALS.length - 1); }
    else sk.lvl = Math.max(0, sk.lvl - 1);
    sk.due = U.addDays(day, acc >= 0.8 ? MM.INTERVALS[sk.lvl] : 1);
  }
  MM.save();
};
MM.dueSkills = () => { const d = U.today(); return Object.entries(MM.S.skills).filter(([, s]) => s.due && s.due <= d).map(([id]) => id); };
MM.streak = function () {
  let n = 0, d = U.today();
  if ((MM.S.days[d] || 0) < MM.DAILY_GOAL) d = U.addDays(d, -1);
  while ((MM.S.days[d] || 0) >= MM.DAILY_GOAL) { n++; d = U.addDays(d, -1); }
  return n;
};
