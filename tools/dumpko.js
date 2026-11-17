// node dumpko.js N... : dump app-written Korean (scene lines, narration words, right answers, after-lines, reads, examples) for native review
const vm = require('vm'), fs = require('fs'), path = require('path'), D = path.join(__dirname, '..', 'src') + '/';
const ctx = { window: {}, document: { addEventListener() {} }, localStorage: { getItem() { return null; }, setItem() {} }, console };
ctx.window = ctx; vm.createContext(ctx);
for (const f of ['core.js', 'cast.js']) vm.runInContext(fs.readFileSync(D + f, 'utf8'), ctx, { filename: f });
const all = fs.readdirSync(D).filter(d => /^l\d+$/.test(d)).map(d => +d.slice(1)).sort((a, b) => a - b);
for (const n of all) for (const f of ['forms', 'game', 'textbook', 'workbook', 'cards', 'reads'].map(k => `${D}l${n}/${k}_L${n}.js`)) if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
vm.runInContext("var __MM = MM", ctx); const MM = ctx.__MM;
const ko = s => /[가-힣]/.test(s || '');
for (const n of process.argv.slice(2).map(Number)) {
  const G = MM.game[n]; const out = [];
  for (const [k, sh] of Object.entries(G.shifts)) {
    if (sh.note) out.push(`${k} NOTE ${sh.note.text}`);
    for (const s of sh.scenes) {
      (s.lines || []).forEach(l => out.push(`${s.id} [${l[0]}] ${l[1]}  | ${l[2]}`));
      const q = s.q || {};
      if (q.ko) out.push(`${s.id} Q.ko ${q.ko}`);
      if (q.ans) out.push(`${s.id} ANS ${q.ans[0]}  | ${q.en || ''}  (${q.prompt})`);
      else if (q.type === 'mc' && ko(q.opts[0])) out.push(`${s.id} MC ${q.opts[0]}  | ${q.en || ''}  (${q.prompt})`);
      else if (q.type === 'odd') out.push(`${s.id} ODD-ok ${q.opts.slice(1).join(' / ')}`);
      (s.after || []).forEach(l => out.push(`${s.id} after [${l[0]}] ${l[1]}  | ${l[2]}`));
    }
    sh.cctv.forEach(q => { if (q.ans) out.push(`${q.id} ANS ${q.ans[0]} | ${q.en}`); else if (q.type === 'odd') out.push(`${q.id} ODD-ok ${q.opts.slice(1).join(' / ')}`); else if (ko(q.prompt)) out.push(`${q.id} PROMPT ${q.prompt}`); });
  }
  G.pool.forEach(q => { if (q.ans) out.push(`${q.id} ANS ${q.ans[0]}`); else if (q.type === 'odd') out.push(`${q.id} ODD-ok ${q.opts.slice(1).join(' / ')}`); else if (q.ko) out.push(`${q.id} KO ${q.ko} [${q.opts[0]}]`); else if (ko(q.prompt)) out.push(`${q.id} PROMPT ${q.prompt} [${q.opts[0]}]`); });
  Object.entries(G.examples || {}).forEach(([k, v]) => out.push(`EX ${k}: ${v[0]} | ${v[1]}`));
  (MM.reads[n] || []).forEach(r => { if (r.heading) out.push(`${r.id} HEAD ${r.heading}`); r.lines.forEach(l => out.push(`${r.id} [${l.who || ''}] ${l.ko} | ${l.en}`)); });
  fs.writeFileSync(`/home/claude/scratch/ko_L${n}.txt`, out.join('\n') + '\n');
  console.log(n, out.length);
}
