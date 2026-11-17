const vm = require('vm'), fs = require('fs'), cp = require('child_process'), R = require('path').join(__dirname, '..') + '/', D = R + 'src/';
const ctx = { window: {}, document: { addEventListener() {} }, localStorage: { getItem() { return null; }, setItem() {} }, console };
ctx.window = ctx; vm.createContext(ctx);
for (const f of ['core.js', 'cast.js']) vm.runInContext(fs.readFileSync(D + f, 'utf8'), ctx);
const all = fs.readdirSync(D).filter(d => /^l\d+$/.test(d)).map(d => +d.slice(1)).sort((a, b) => a - b);
for (const n of all) for (const k of ['forms', 'game', 'textbook', 'workbook', 'cards', 'reads']) { const f = `${D}l${n}/${k}_L${n}.js`; if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx); }
vm.runInContext(fs.readFileSync(D + 'voice_ids.js', 'utf8'), ctx);
vm.runInContext(fs.readFileSync(D + 'audio_manifest.js', 'utf8'), ctx);
vm.runInContext('var M = MM', ctx); const MM = ctx.M;
const durC = {}; const dur = src => { if (src in durC) return durC[src]; const p = R + src; if (!fs.existsSync(p)) return durC[src] = null; return durC[src] = +cp.execSync(`ffprobe -v error -show_entries format=duration -of csv=p=0 "${p}"`).toString().trim(); };
let probs = 0, clips = 0; const bad = m => { probs++; if (probs < 60) console.log(m); };
const clip = (src, from, to, where) => { clips++; const d = dur(src); if (d == null) return bad(`MISSING ${src} (${where})`); if (from != null && (from < 0 || from >= d)) bad(`${where}: from ${from} beyond ${src} (${d.toFixed(2)} s)`); if (to != null && to > d + 0.05) bad(`${where}: to ${to} beyond ${src} (${d.toFixed(2)} s)`); if (from != null && to != null && to <= from) bad(`${where}: to <= from`); };
for (const n of all) {
  const A = MM.audio[n]; if (!A) { bad(`L${n}: no audio manifest`); continue; }
  for (const L of (A.lessons || [A.lesson]).filter(Boolean)) clip(L.src, null, null, `L${n} lesson`);
  for (const [k, s] of Object.entries(A.tb || {})) clip(s, null, null, `L${n} tb ${k}`);
  for (const [k, s] of Object.entries(A.wb || {})) clip(s, null, null, `L${n} wb ${k}`);
  const T = MM.textbook[n];
  const walk = (o, where) => { if (!o || typeof o !== 'object') return; if (Array.isArray(o)) return o.forEach((x, i) => walk(x, where)); 
    if (o.clip && Array.isArray(o.clip) && o.clip.length === 3 && A.tb) { const s = A.tb[o.clip[0]]; if (!s) bad(`L${n} ${where} ${o.id || ''}: track ${o.clip[0]} not in manifest`); else clip(s, o.clip[1], o.clip[2], `L${n} tb ${o.id || ''}`); }
    if (o.t === 'track' && A.tb) { const s = A.tb[o.id]; if (!s) bad(`L${n} track block ${o.id} not in manifest`); else clip(s, o.from, o.to, `L${n} track ${o.id}`); }
    if (o.t === 'dialogue' && A.tb && !A.tb[o.track]) bad(`L${n} dialogue track ${o.track} not in manifest`);
    for (const v of Object.values(o)) if (v && typeof v === 'object') walk(v, where); };
  walk(T.blocks, 'tb');
  const W = MM.workbook[n];
  for (const sec of W.sections) if (sec.type === 'dictation') for (const it of sec.items) { const s = (A.wb || {})[it.track]; if (!s) bad(`L${n} WB dict ${it.n}: track ${it.track} not in manifest`); else if (it.clip) clip(s, it.clip[0], it.clip[1], `L${n} WB ${it.n}`); }
}
for (const [id, c] of Object.entries(MM.voiceMap)) clip(`audio/voice/l${c[0]}.mp3`, c[1], c[2], `voice ${id}`);
console.log('clips/files checked:', clips, 'problems:', probs);
