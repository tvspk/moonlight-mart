// node tools/voice_extract.js [out.tsv] : every app-written Korean string of the game part that gets a ▶
// (scene lines + after-lines, Loyalty Cards word + example, staff chat, notice board heading + lines).
// Output TSV: id, voice (M/F), lesson, kind, text (vNorm, = what the id hashes), speak (what the TTS reads).
// Skipped strings (blanks ___, building-block cards with + / → / =, no Hangul) go to <out>.skipped.txt.
const vm = require('vm'), fs = require('fs'), path = require('path'), D = path.join(__dirname, '..', 'src') + '/';
const ctx = { window: {}, document: { addEventListener() {}, querySelector() { return null; }, querySelectorAll() { return []; } }, localStorage: { getItem() { return null; }, setItem() {} }, console, TextEncoder };
ctx.window = ctx; vm.createContext(ctx);
for (const f of ['core.js', 'cast.js']) vm.runInContext(fs.readFileSync(D + f, 'utf8'), ctx, { filename: f });
const all = fs.readdirSync(D).filter(d => /^l\d+$/.test(d)).map(d => +d.slice(1)).sort((a, b) => a - b);
for (const n of all) for (const f of ['forms', 'game', 'textbook', 'workbook', 'cards', 'reads'].map(k => `${D}l${n}/${k}_L${n}.js`)) if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
vm.runInContext(fs.readFileSync(D + 'qview.js', 'utf8'), ctx, { filename: 'qview.js' });
vm.runInContext("var __MM = MM", ctx); const MM = ctx.__MM;
const out = process.argv[2] || 'voice_jobs.tsv';
const rows = new Map(), skipped = [];
// speak = text the TTS reads: chat laughter/crying jamo (ㅋㅋ, ㅎㅎ, ㅠㅠ), emoji and ~ removed
const speakOf = t => t.replace(/[ㄱ-ㅎㅏ-ㅣ]{2,}/g, '').replace(/[\u{1F300}-\u{1FAFF}☀-➿️]/gu, '').replace(/~/g, '').replace(/\s+/g, ' ').trim();
function add(voice, n, kind, raw, opts = {}) {
  const text = MM.vNorm(raw);
  if (!/[가-힣]/.test(text)) return skipped.push(`${n}\t${kind}\tno hangul\t${text}`);
  if (text.includes('___')) return skipped.push(`${n}\t${kind}\tblank\t${text}`);
  if (/[+→=]/.test(text)) return skipped.push(`${n}\t${kind}\tbuilding block\t${text}`);
  let speak = speakOf(text).replace(/\s*\([^)]*\)/g, '').trim();   // 학 (學) → 학, 바쁜데(요) → 바쁜데
  if (/^-|[ㄱ-ㅎㅏ-ㅣ]/.test(speak)) return skipped.push(`${n}\t${kind}\tgrammar pattern\t${text}`);
  if (/(^|[^A-Za-z])[A-Z]([^A-Za-z.]|$)/.test(speak)) return skipped.push(`${n}\t${kind}\tplaceholder letter\t${text}`);
  if (!/[가-힣]/.test(speak)) return skipped.push(`${n}\t${kind}\tnothing to say\t${text}`);
  const id = MM.voiceId(voice, text);
  if (!rows.has(id)) rows.set(id, { id, voice, n, kind, text, speak });
}
const voicesFor = who => who === 'you' ? ['M', 'F'] : MM.VOICE_OF[who] ? [MM.VOICE_OF[who]] : [];
const unknown = new Set();
for (const n of all) {
  const G = MM.game[n]; if (!G) continue;
  for (const sh of Object.values(G.shifts)) for (const s of sh.scenes) {
    for (const [arr, kind] of [[s.lines, 'line'], [s.after, 'after']]) (arr || []).forEach(l => {
      const v = voicesFor(l[0]); if (!v.length) { unknown.add(l[0]); return; }
      v.forEach(x => add(x, n, kind, l[1]));
    });
  }
  // Loyalty Cards: same deck as game.js deck()
  const exs = G.examples || {};
  for (const v of MM.Q.vocabList(n)) { add('F', n, 'card', v.ko, { card: true }); if (exs[v.ko]) add('F', n, 'cardex', exs[v.ko][0]); }
  for (const c of MM.cards[n] || []) { add('F', n, 'card', c.ko, { card: true }); if (c.ex) add('F', n, 'cardex', c.ex[0]); }
  for (const r of MM.reads[n] || []) {
    if (r.heading) add('F', n, 'head', r.heading);
    r.lines.forEach(l => {
      const v = r.kind === 'chat' ? voicesFor(l.who || '') : ['F'];
      if (!v.length) { unknown.add('chat:' + l.who); return; }
      v.forEach(x => add(x, n, r.kind, l.ko));
    });
  }
}
const list = [...rows.values()];
fs.writeFileSync(out, list.map(r => [r.id, r.voice, r.n, r.kind, r.text, r.speak].join('\t')).join('\n') + '\n');
fs.writeFileSync(out + '.skipped.txt', skipped.join('\n') + '\n');
const syl = list.reduce((a, r) => a + (r.speak.match(/[가-힣]/g) || []).length, 0);
console.log(`${list.length} files (M ${list.filter(r => r.voice === 'M').length}, F ${list.filter(r => r.voice === 'F').length}), ${syl} syllables, skipped ${skipped.length}, no voice for: ${[...unknown].join(', ') || '-'}`);
