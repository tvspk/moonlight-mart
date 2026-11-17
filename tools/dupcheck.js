const vm = require('vm'), fs = require('fs'), D = require('path').join(__dirname, '..', 'src') + '/';
const ctx = { window: {}, document: { addEventListener() {} }, localStorage: { getItem() { return null; }, setItem() {} }, console };
ctx.window = ctx; vm.createContext(ctx);
for (const f of ['core.js', 'cast.js']) vm.runInContext(fs.readFileSync(D + f, 'utf8'), ctx);
const all = fs.readdirSync(D).filter(d => /^l\d+$/.test(d)).map(d => +d.slice(1)).sort((a, b) => a - b);
for (const n of all) for (const k of ['forms', 'game', 'textbook', 'workbook', 'cards', 'reads']) { const f = `${D}l${n}/${k}_L${n}.js`; if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx); }
vm.runInContext(fs.readFileSync(D + 'qview.js', 'utf8'), ctx);
vm.runInContext('var M = MM', ctx); const MM = ctx.M;
let probs = 0;
const norm = s => String(s).trim().toLowerCase().replace(/^to /, '');
for (const n of all) {
  const list = MM.Q.vocabList(n);
  // same meaning / same Korean between two items that are NOT in the same grp -> can be offered together
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const a = list[i], b = list[j]; if (a.grp && a.grp === b.grp) continue;
    if (a.ko === b.ko) { probs++; console.log(`L${n} same Korean twice: ${a.ko} (${a.en} / ${b.en})`); }
    else if (norm(a.en) === norm(b.en)) { probs++; console.log(`L${n} same meaning: ${a.ko} / ${b.ko} = ${a.en}`); }
  }
  // every question with options: options unique, at least 2
  for (const q of MM.Q.allQs(n)) if (q.opts) {
    const o = q.opts.map(x => String(x).trim());
    if (new Set(o).size !== o.length) { probs++; console.log(`L${n} ${q.id} duplicate options: ${o.join(' | ')}`); }
    if (o.length < 2) { probs++; console.log(`L${n} ${q.id} < 2 options`); }
  }
  // scenes too
  for (const sh of Object.values(MM.game[n].shifts)) for (const s of sh.scenes) if (s.q.opts) { const o = s.q.opts; if (new Set(o).size !== o.length) { probs++; console.log(`L${n} ${s.id} duplicate options`); } }
}
console.log('problems:', probs);
let mp = 0;
for (const n of all) {
  const qs = MM.Q.allQs(n).concat(...Object.values(MM.game[n].shifts).map(sh => sh.scenes.map(s => s.q)));
  for (const q of qs) if (q.pairs) { for (const side of [0, 1]) { const v = q.pairs.map(p => p[side]); if (new Set(v).size !== v.length) { mp++; console.log(`L${n} ${q.id} match duplicate side ${side}: ${v.join(' | ')}`); } } }
  const W = MM.workbook[n]; if (W && W.sections) for (const sec of W.sections) if (sec.type === 'match' && sec.items) {
    const en = sec.items.map(it => it.en), ko = sec.items.map(it => it.ko);
    for (const [nm, v] of [['en', en], ['ko', ko]]) { const d = v.filter((x, i) => x && v.indexOf(x) !== i); if (d.length) { mp++; console.log(`L${n} WB ${sec.id || sec.title} match duplicate ${nm}: ${d.join(', ')}`); } }
  }
}
console.log('match problems:', mp);
