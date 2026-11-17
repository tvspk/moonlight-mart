/* qview.js — one question on screen: mc, enOpts, odd, fill, write, tiles, match.
   MM.Q.mount(root, q, {lesson, tilesDefault, onResult(res), onNext(), review, nextLabel})
   res = {ok, kind, note, expected, earned, typed} */
'use strict';
MM.Q = (() => {
  const { esc, shuffle } = MM.U;

  /* ---------- question sources ---------- */
  function formsOf(n) { return MM.forms[n] || []; }
  function wrongFor(word, n) {
    for (let k = n; k >= 1; k--) { const f = formsOf(k).find(f => (f.main || f.hae) === word || (f.words && f.words[word])); if (f) return (f.main || f.hae) === word ? f.wrong : f.words[word]; }
    return [];
  }
  function canon(q) { return MM.expand(q.ans[0])[0]; }
  function autoWordExtra(ans, n) {
    const ex = [];
    for (const w of ans.split(' ')) { const clean = w.replace(/[,.!?]/g, ''); for (const x of wrongFor(clean, n).slice(0, 2)) ex.push(x); }
    return ex;
  }
  function autoUnitExtra(ans, n) {
    const have = new Set(Array.from(ans));
    const ex = [];
    for (const w of wrongFor(ans, n)) for (const ch of Array.from(w)) if (!have.has(ch) && !ex.includes(ch)) ex.push(ch);
    return ex.slice(0, 3);
  }
  /* generated questions from the forms table + vocabulary */
  function genForms(n) {
    const fs = formsOf(n);
    /* formTpl.key picks the form being asked (default 해요); formTpl.skill fixes the skill;
       formTpl.irrNote explains irregular verbs ({hae} = their 해요 form). */
    const T = (MM.game[n] || {}).formTpl || { prompt: 'Polite 해요 form of {dict} ({en})', ko: '___' };
    /* formTpl.skillBy: skill per irr value (L11: 'ㅂ' / 'keep'). formTpl.variants: several questions per row ({key, wrongKey, prompt, ko, explain, skill, from}); rows without that key are skipped.
       L27: V.from = a column of the row shown in the prompt/explain as {from} (e.g. the polite form being turned into 반말). */
    const vars = T.variants || [{ key: T.key || 'hae' }];
    return vars.flatMap(V => {
      const key = V.key, rows = fs.filter(f => f[key]);
      return rows.map((f, i) => {
        const right = f[key];
        let wrong = (f[V.wrongKey || 'wrong'] || []).slice(0, 3);
        for (let k = 1; wrong.length < 3 && k < rows.length; k++) { const o = rows[(i + k) % rows.length][key]; if (!wrong.includes(o) && o !== right) wrong.push(o); }
        const irrTxt = f.irr === 'reg' ? '' : T.irrNotes ? (T.irrNotes[f.irr] ? ` (${T.irrNotes[f.irr]})` : '') : T.irrNote ? ` (${T.irrNote.replace('{hae}', f.hae)})` : ` (${f.irr}-irregular)`;
        const pr = V.prompt || T.prompt, ex = V.explain || T.explain;
        return {
          id: vars.length > 1 ? `g${n}.${f.id || f.dict}.${key}` : `g${n}.${f.id || f.dict}`, lesson: n, type: 'mc', gen: true,
          prompt: pr.replace('{dict}', f.dict).replace('{en}', f.en.split(';')[0]).replace('{from}', V.from ? f[V.from] || '' : ''), ko: V.ko || T.ko,
          opts: [right].concat(wrong), skill: V.skill || (T.skillBy && T.skillBy[f.irr]) || T.skill || (f.irr === 'reg' ? `l${n}.form` : `l${n}.irr`),
          explain: (ex ? ex.replace('{dict}', f.dict).replace('{form}', right).replace('{from}', V.from ? f[V.from] || '' : '') : `${f.dict} → ${right}`) + irrTxt, en: '',
        };
      });
    });
  }
  function vocabList(n) {
    const G = MM.game[n] || {};
    const grp = G.grp || {};
    const list = formsOf(n).filter(f => !f.noVocab).map(f => ({ ko: f.dict, en: f.en.split(';')[0], grp: grp[f.dict] })).concat((G.vocab || []).map(v => ({ ko: v.ko, en: v.en, grp: grp[v.ko] })));
    return list;
  }
  function genVocab(n, item, dir) {
    const list = vocabList(n).filter(v => v.ko !== item.ko && !(item.grp && v.grp === item.grp));
    const wrong = shuffle(list).slice(0, 3);
    if (dir === 'en') return { id: `v${n}.${item.ko}.en`, lesson: n, type: 'enOpts', gen: true, prompt: `What does ${item.ko} mean?`, opts: [item.en].concat(wrong.map(w => w.en)), skill: `l${n}.vocab`, explain: `${item.ko} = ${item.en}`, en: '' };
    return { id: `v${n}.${item.ko}.ko`, lesson: n, type: 'mc', gen: true, prompt: `Which word means “${item.en}”?`, opts: [item.ko].concat(wrong.map(w => w.ko)), skill: `l${n}.vocab`, explain: `${item.ko} = ${item.en}`, en: '' };
  }
  function allQs(n) {
    const G = MM.game[n]; if (!G) return [];
    const tag = q => Object.assign({ lesson: n }, q);
    const cctv = Object.values(G.shifts).flatMap(s => s.cctv);
    return G.pool.map(tag).concat(cctv.map(tag), genForms(n), vocabList(n).map((v, i) => genVocab(n, v, i % 2 ? 'en' : 'ko')));
  }

  /* ---------- rendering helpers ---------- */
  function koLine(ko) {
    if (!ko) return '';
    return `<p class="q-ko ko">${esc(ko).replace('___', '<span class="blank">　　</span>')}</p>`;
  }
  function receipt(res, q, o) {
    const W = MM.world;
    const quip = MM.U.pick(res.ok ? MM.quips.ok : MM.quips.bad);
    const showAns = !res.ok || res.kind !== 'exact';
    return `<div class="rcpt ${res.ok ? 'ok' : 'bad'}" role="status">
      <div class="rcpt-head"><span class="rcpt-mark">${res.ok ? esc(W.beep || '') + ' ✓' : 'ITEM NOT FOUND'}</span>${res.ok && res.earned ? `<span class="rcpt-won">+${MM.U.won(res.earned)}</span>` : ''}</div>
      <p class="rcpt-quip">${esc(quip)}</p>
      ${res.note ? `<p class="rcpt-note">${esc(res.note)}</p>` : ''}
      ${showAns && res.expected ? `<p class="rcpt-line"><span class="lbl">Answer</span> <b class="ko">${esc(res.expected)}</b></p>` : ''}
      ${q.en ? `<p class="rcpt-line"><span class="lbl">EN</span> ${esc(q.en)}</p>` : ''}
      ${q.explain ? `<p class="rcpt-explain">${esc(q.explain)}</p>` : ''}
      <div class="barcode" aria-hidden="true"></div>
    </div>
    <button type="button" class="btn btn-go q-next">${esc(o.nextLabel || 'Next')}</button>`;
  }

  /* ---------- mount ---------- */
  function mount(root, q, o = {}) {
    const n = q.lesson || o.lesson || 1;
    let answered = false;
    const type = q.type;
    const isText = type === 'fill' || type === 'write' || type === 'tiles';
    let mode = isText ? (type === 'tiles' || o.tilesDefault !== false ? 'tiles' : 'type') : null;
    let hintUsed = false;

    function finish(res, typed) {
      if (answered) return; answered = true;
      res.typed = !!typed;
      res.earned = MM.record(Object.assign({ lesson: n }, q), res.ok, { typed, review: o.review, base: o.base });
      if (o.onResult) o.onResult(res);
      const fb = root.querySelector('.q-fb');
      fb.innerHTML = receipt(res, q, o);
      fb.hidden = false;
      MM.ui.barcodes(fb);
      MM.ui.sound(res.ok);
      root.querySelectorAll('.q-opts button, .q-check, .tile, .q-input, .q-mode, .q-hint').forEach(b => { b.disabled = true; });
      const nb = fb.querySelector('.q-next');
      nb.addEventListener('click', () => o.onNext && o.onNext());
      setTimeout(() => { nb.focus({ preventScroll: true }); fb.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }, 40);
      MM.ui.refreshWon();
    }

    let body = '';
    if (type === 'mc' || type === 'enOpts' || type === 'odd') {
      const opts = shuffle(q.opts.map((t, i) => ({ t, i })));
      body = `${koLine(q.ko)}<div class="q-opts ${type === 'enOpts' ? 'en-opts' : 'ko-opts'}">${opts.map(x => `<button type="button" class="opt ${type === 'enOpts' ? '' : 'ko'}" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>`;
    } else if (isText) {
      body = `${type === 'fill' ? koLine(q.ko) : ''}<div class="q-work"></div>
        <div class="q-tools">
          <button type="button" class="link q-mode"></button>
          ${o.noHint ? '' : `<button type="button" class="link q-hint">${MM.hasPerk('hints') ? 'Hint (free)' : 'Hint (₩50)'}</button>`}
        </div><p class="q-hinttext" hidden></p>`;
    } else if (type === 'match') {
      body = `<div class="match"></div>`;
    }
    root.innerHTML = `<div class="q q-${type}">
      <p class="q-prompt">${type === 'odd' ? '<span class="tag tag-red">Find the mistake</span> ' : ''}${esc(q.prompt || '')}</p>
      ${body}<div class="q-fb" hidden></div></div>`;

    if (type === 'mc' || type === 'enOpts' || type === 'odd') {
      root.querySelectorAll('.q-opts .opt').forEach(b => b.addEventListener('click', () => {
        const ok = b.dataset.i === '0';
        b.classList.add(ok ? 'is-ok' : 'is-bad');
        const right = root.querySelector('.q-opts .opt[data-i="0"]'); right.classList.add('is-ok');
        finish({ ok, kind: ok ? 'exact' : 'wrong', expected: type === 'enOpts' ? '' : (type === 'odd' ? q.opts[0] + ' ✗' : q.opts[0]) }, false);
      }));
    }

    if (isText) {
      const ans = canon(q);
      const unitsMode = type === 'fill';
      const units = q.units || (unitsMode ? Array.from(ans.replace(/\s+/g, '')) : ans.split(' '));
      const extra = q.extra || (unitsMode ? autoUnitExtra(ans, n) : autoWordExtra(ans, n));
      const bank = shuffle(units.concat(extra).map((t, i) => ({ t, k: i })));
      const work = root.querySelector('.q-work');
      const modeBtn = root.querySelector('.q-mode');
      let placed = [];
      /* the bank buttons stay in the DOM (only the tray is redrawn), so a fast second tap never
         lands on a button that was just replaced; taps register on pointerup without waiting for click */
      function drawTiles() {
        work.innerHTML = `<div class="tray ${unitsMode ? 'tray-units' : ''}" aria-label="Your answer"></div>
          <div class="bank">${bank.map(b => `<button type="button" class="tile ko" data-k="${b.k}">${esc(b.t)}</button>`).join('')}</div>
          <button type="button" class="btn btn-go q-check" disabled>Scan ▸</button>`;
        const tray = work.querySelector('.tray'), chk = work.querySelector('.q-check');
        const upd = () => {
          tray.innerHTML = placed.length ? placed.map((p, i) => `<button type="button" class="tile placed ko" data-p="${i}">${esc(p.t)}</button>`).join('') : '<span class="tray-empty">Tap the tiles below</span>';
          work.querySelectorAll('.bank .tile').forEach(t => { t.disabled = answered || placed.some(p => String(p.k) === t.dataset.k); });
          chk.disabled = answered || !placed.length;
        };
        const tap = (el, fn) => { let downAt = 0; el.addEventListener('pointerdown', () => { downAt = Date.now(); }); el.addEventListener('pointerup', e => { const b = e.target.closest('.tile'); if (b && !b.disabled && !answered) { e.preventDefault(); fn(b); } }); el.addEventListener('click', e => { if (e.detail === 0) { const b = e.target.closest('.tile'); if (b && !b.disabled && !answered) fn(b); } }); };
        tap(work.querySelector('.bank'), t => { const b = bank.find(b => String(b.k) === t.dataset.k); if (!placed.includes(b)) { placed.push(b); upd(); } });
        tap(tray, t => { placed.splice(+t.dataset.p, 1); upd(); });
        chk.addEventListener('click', () => check(placed.map(p => p.t).join(unitsMode ? '' : ' '), false));
        upd();
      }
      function drawType() {
        work.innerHTML = `<div class="type-row"><input class="kin q-input ko" id="qi-${esc(q.id || 'x')}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer" placeholder="${unitsMode ? 'type the missing part' : 'type the sentence'}">
          <button type="button" class="btn btn-go q-check">Scan ▸</button></div>`;
        const inp = work.querySelector('.q-input');
        MM.kbd.applyMode();
        const go = () => check(inp.value, true);
        work.querySelector('.q-check').addEventListener('click', go);
        inp.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing) { e.preventDefault(); go(); } });
        inp.addEventListener('kb-enter', go);
        setTimeout(() => inp.focus(), 30);
      }
      function check(val, typed) {
        const res = MM.grade(val, q);
        if (res.kind === 'empty' || res.kind === 'latin') { const h = root.querySelector('.q-hinttext'); h.hidden = false; h.textContent = res.note; return; }
        MM.kbd.hide();
        finish(res, typed);
      }
      function draw() {
        if (mode === 'tiles') drawTiles(); else drawType();
        modeBtn.textContent = mode === 'tiles' ? 'Type it yourself (+50% ₩)' : 'Use tiles';
      }
      modeBtn.addEventListener('click', () => { mode = mode === 'tiles' ? 'type' : 'tiles'; placed = []; draw(); });
      const hb = root.querySelector('.q-hint');
      if (hb) hb.addEventListener('click', () => {
        if (hintUsed) return; hintUsed = true;
        if (!MM.hasPerk('hints')) { MM.S.won = Math.max(0, MM.S.won - 50); MM.save(); MM.ui.refreshWon(); }
        const h = root.querySelector('.q-hinttext'); h.hidden = false;
        h.innerHTML = 'Starts with: <b class="ko">' + esc(unitsMode ? Array.from(ans)[0] : ans.split(' ')[0]) + '</b>…';
        hb.disabled = true;
      });
      draw();
    }

    if (type === 'match') mountMatch(root.querySelector('.match'), q, (ok) => finish({ ok, kind: ok ? 'exact' : 'wrong', expected: '' }, false));
    return { get answered() { return answered; } };
  }

  /* match: q.pairs [[ko,en],...] — first-try success for all pairs = ok */
  function mountMatch(el, q, done) {
    let miss = 0, sel = null, left = q.pairs.length;
    const L = shuffle(q.pairs.map((p, i) => ({ t: p[0], i }))), R = shuffle(q.pairs.map((p, i) => ({ t: p[1], i })));
    el.innerHTML = `<div class="match-col">${L.map(x => `<button type="button" class="mt ko" data-s="L" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>
      <div class="match-col">${R.map(x => `<button type="button" class="mt" data-s="R" data-i="${x.i}">${esc(x.t)}</button>`).join('')}</div>`;
    el.addEventListener('click', e => {
      const b = e.target.closest('.mt'); if (!b || b.disabled) return;
      if (!sel || sel.dataset.s === b.dataset.s) { if (sel) sel.classList.remove('sel'); sel = b; b.classList.add('sel'); return; }
      if (sel.dataset.i === b.dataset.i) { [sel, b].forEach(x => { x.classList.remove('sel'); x.classList.add('is-ok'); x.disabled = true; }); left--; sel = null; if (!left) done(miss === 0); }
      else { miss++; const s = sel; [s, b].forEach(x => x.classList.add('is-bad')); setTimeout(() => [s, b].forEach(x => x.classList.remove('is-bad', 'sel')), 450); sel = null; }
    });
  }

  return { mount, mountMatch, genForms, genVocab, vocabList, allQs, canon };
})();
