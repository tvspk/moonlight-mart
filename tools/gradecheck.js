// node gradecheck.js N... : every ans / soft pattern must grade ok; no diag pattern may grade ok (and each diag must show its note)
const vm = require('vm'), fs = require('fs'), path = require('path'), D = path.join(__dirname, '..', 'src') + '/';
const ctx = { window: {}, document: { addEventListener() {} }, localStorage: { getItem() { return null; }, setItem() {} }, console };
ctx.window = ctx; vm.createContext(ctx);
for (const f of ['core.js', 'cast.js']) vm.runInContext(fs.readFileSync(D + f, 'utf8'), ctx, { filename: f });
const lessons = process.argv.slice(2).map(Number);
const all = fs.readdirSync(D).filter(d => /^l\d+$/.test(d)).map(d => +d.slice(1)).sort((a, b) => a - b);
for (const n of all) for (const f of ['forms', 'game', 'textbook', 'workbook', 'cards', 'reads'].map(k => `${D}l${n}/${k}_L${n}.js`)) if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
vm.runInContext("var __MM = MM", ctx); const MM = ctx.__MM;
let bad = 0, count = 0;
const check = (q, where) => {
  if (!q || !q.ans || q.choices) return; count++; // choice exercises are graded by button, not by ans
  const pats = [q.ans[0]].concat((q.soft || []).map(s => s.p));
  for (const p of pats) for (const v of MM.expand(p)) { const r = MM.grade(v, q); if (!r.ok) { bad++; console.log('NOT OK', where, JSON.stringify(v), r.kind, r.note); } }
  for (const d of (q.diag || []).filter(d => d.p)) for (const v of MM.expand(d.p).slice(0, 40)) { const r = MM.grade(v, q); if (r.ok) { bad++; console.log('DIAG OK?!', where, JSON.stringify(v), r.kind); } }
};
for (const n of lessons) {
  const G = MM.game[n];
  for (const [k, sh] of Object.entries(G.shifts)) { sh.scenes.forEach(s => check(s.q, `${n}.${s.id}`)); sh.cctv.forEach(q => check(q, `${n}.${q.id}`)); }
  G.pool.forEach(q => check(q, `${n}.${q.id}`));
  MM.textbook[n].blocks.filter(b => b.t === 'exercises').forEach(b => b.items.forEach(x => check(x, `${n}.tb.${x.id}`)));
  MM.workbook[n].sections.filter(s => s.type !== 'pick').forEach(s => s.items.forEach(it => { if (it.cells) it.cells.forEach((c, i) => check(c, `${n}.wb.${s.id}.${it.n}.${i}`)); else check(it, `${n}.wb.${s.id}.${it.n}`); }));
  // opts sanity: mc options unique
  const qs = [].concat(...Object.values(G.shifts).map(sh => sh.scenes.map(s => s.q).concat(sh.cctv)), G.pool, MM.Q ? [] : []);
  qs.forEach(q => { if (q.opts && new Set(q.opts).size !== q.opts.length) { bad++; console.log('DUP OPTS', q.id || q.prompt); } });
  console.log(`L${n}: vocab ${G.vocab.length}, examples missing:`, (MM.forms[n] || []).filter(f => !f.noVocab).map(f => f.dict).concat(G.vocab.map(v => v.ko)).filter(k => !G.examples[k]));
}
console.log('checked', count, 'items; problems:', bad);
