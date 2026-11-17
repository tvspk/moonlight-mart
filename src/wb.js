/* wb.js — Workbook part: sections in book order (match incl. pictures, mc (+ dialogue lines), write incl. dialogue blanks, explain, bank, pick, tf, conj, chart, sentence, pyramid (L23), web (L30), dictation), summary. */
'use strict';
MM.WB = (() => {
  const { esc, $, $$, shuffle } = MM.U;

  function items(n) { return MM.workbook[n].sections.flatMap(s => s.items.map(i => ({ s, i, key: s.id + '.' + i.n }))); }
  function status(n) {
    const st = MM.LS(n).wb.i, all = items(n), done = all.filter(x => st[x.key]).length;
    return done === all.length ? 'done' : done ? 'wip' : 'none';
  }
  const formSkill = (n, given) => { const f = (MM.forms[n] || []).find(f => given.startsWith(f.dict)); return f && f.irr !== 'reg' ? `l${n}.irr` : `l${n}.form`; };

  function render(main, n) {
    const W = MM.workbook[n], st = MM.LS(n).wb.i;
    let h = `<header class="tb-h"><p class="eyebrow">${MM.lessons[n].wbEyebrow ? esc(MM.lessons[n].wbEyebrow) : `Workbook · Lesson ${n} · p.${esc(MM.lessons[n].pages.wb)}`}</p><h1 class="tb-title"><span class="ko">${esc(MM.lessons[n].ko)}</span><span class="tb-sub">${esc(MM.lessons[n].en)}</span></h1></header>`;
    for (const sec of W.sections) {
      h += `<section class="wb-sec" id="sec-${sec.id}"><h2 class="tb-h2">${esc(sec.title)}</h2><p class="wb-task">${esc(sec.task)}</p>`;
      if (sec.passage) h += `<div class="wb-passage">${sec.passage.map(t => `<p class="ko">${sec.passageU ? esc(t).replace(/\[([^\]]+)\]/g, '<u class="wavy">$1</u>') : esc(t)}</p>`).join('')}${sec.passageNote ? `<p class="keynote">${esc(sec.passageNote)}</p>` : ''}</div>`;
      if (sec.box) h += `<div class="wb-bank"><span class="lbl">Box</span> ${sec.box.map(w => `<span class="ko bank-w">${esc(w)}</span>`).join(' ')}</div>`;
      if (sec.example) h += `<div class="wb-example"><span class="lbl">Example</span> <span class="ko">${esc(sec.example.given)}</span> → <span class="ko">${esc(sec.example.ko)}</span> = ${esc(sec.example.en)}</div>`;
      if (sec.type === 'match') h += matchHtml(n, sec, st);
      else if (sec.type === 'bank') h += `<div class="wb-bank"><span class="lbl">Word bank</span> ${sec.bank.map(w => `<span class="ko bank-w">${esc(w)}</span>`).join(' ')}</div>` + sec.items.map(it => itemHtml(n, sec, it, st[sec.id + '.' + it.n])).join('');
      else h += sec.items.map(it => itemHtml(n, sec, it, st[sec.id + '.' + it.n])).join('');
      h += '</section>';
    }
    h += summaryHtml(n);
    main.innerHTML = `<section class="wb">${h}</section>`;
    MM.ui.barcodes(main);
    bind(main.firstElementChild, n);
  }

  /* --- Section I: match, in rounds of 6 --- */
  function matchHtml(n, sec, st) {
    const per = roundSize(sec), rounds = []; for (let i = 0; i < sec.items.length; i += per) rounds.push(sec.items.slice(i, i + per));
    const cur = rounds.findIndex(r => r.some(it => !st[sec.id + '.' + it.n]));
    const done = sec.items.filter(it => st[sec.id + '.' + it.n]);
    let h = '';
    if (done.length) h += `<ul class="vocab-done">${done.map(it => `<li><span class="num">${it.n}.</span> <span class="ko">${esc(it.ko)}</span> ${it.pic ? `<span class="pic-sm">${pic(it.pic)}</span>` : ''}<span class="en">${esc(it.en)}</span>${st[sec.id + '.' + it.n] === 'ok' ? '' : ' <span class="chip chip-rev">2nd try</span>'}${it.keyNote ? ` <span class="keynote">(${esc(it.keyNote)})</span>` : ''}</li>`).join('')}</ul>`;
    if (cur >= 0) h += `<p class="round-lbl">${rounds.length > 1 ? `Round ${cur + 1} of ${rounds.length}. ` : ''}Tap a Korean word, then its ${sec.pics ? 'picture' : 'meaning'}.</p><div class="match" id="wbMatch" data-round="${cur}"></div>`;
    return h;
  }
  /* rounds of at most 6, balanced (7 items → 4 + 3, not 6 + 1) */
  function roundSize(sec) { const r = Math.ceil(sec.items.length / 6); return Math.ceil(sec.items.length / r); }
  function bindMatch(sec0, n) {
    const el = $('#wbMatch', sec0); if (!el) return;
    const sec = MM.workbook[n].sections.find(s => s.type === 'match'), st = MM.LS(n).wb.i;
    const per = roundSize(sec), round = sec.items.slice(+el.dataset.round * per, +el.dataset.round * per + per).filter(it => !st[sec.id + '.' + it.n]);
    const missed = new Set();
    const L = shuffle(round), R = shuffle(round);
    el.innerHTML = `<div class="match-col">${L.map(it => `<button type="button" class="mt ko" data-s="L" data-n="${it.n}">${esc(it.ko)}</button>`).join('')}</div>
      <div class="match-col">${R.map(it => `<button type="button" class="mt ${it.pic ? 'mt-pic' : ''}" data-s="R" data-n="${it.n}" ${it.pic ? `aria-label="picture ${esc(it.pic)}"` : ''}>${it.pic ? pic(it.pic) : esc(it.en)}</button>`).join('')}</div>`;
    let sel = null;
    el.addEventListener('click', e => {
      const b = e.target.closest('.mt'); if (!b || b.disabled) return;
      if (!sel || sel.dataset.s === b.dataset.s) { if (sel) sel.classList.remove('sel'); sel = b; b.classList.add('sel'); return; }
      const a = sel; sel = null;
      const kn = a.dataset.s === 'L' ? a.dataset.n : b.dataset.n;
      if (a.dataset.n === b.dataset.n) {
        [a, b].forEach(x => { x.classList.remove('sel'); x.classList.add('is-ok'); x.disabled = true; });
        st[sec.id + '.' + kn] = missed.has(kn) ? 'late' : 'ok';
        MM.record({ id: `wb${n}.I.${kn}`, skill: `l${n}.vocab`, lesson: n }, !missed.has(kn), { base: 30, noMistake: true });
        MM.ui.sound(true); MM.save(); MM.ui.refreshWon();
        if (round.every(it => st[sec.id + '.' + it.n])) setTimeout(() => { const y = window.scrollY; render($('#main'), n); window.scrollTo(0, y); MM.app.refreshTabs(); }, 500);
      } else {
        if (!missed.has(kn)) { missed.add(kn); MM.record({ id: `wb${n}.I.${kn}`, skill: `l${n}.vocab`, lesson: n }, false, {}); }
        [a, b].forEach(x => x.classList.add('is-bad')); MM.ui.sound(false);
        setTimeout(() => [a, b].forEach(x => x.classList.remove('is-bad', 'sel')), 450);
      }
    });
  }

  /* --- pictures for the position words: a pyramid and a ball (Workbook L3, Section I) --- */
  function pic(kind) {
    const pyr = `<polygon class="pz-f" points="32,92 60,34 78,98"/><polygon class="pz-s" points="78,98 60,34 94,84"/>`;
    const ball = (x, y) => `<circle class="pz-b" cx="${x}" cy="${y}" r="13"/><circle class="pz-hl" cx="${x - 4}" cy="${y - 5}" r="3.5"/>`;
    const body = { top: pyr + ball(60, 20), front: pyr + ball(50, 90), behind: ball(84, 50) + pyr, side: pyr + ball(112, 86), under: ball(62, 104) + pyr }[kind] || pyr;
    return `<svg class="pz" viewBox="0 0 130 120" aria-hidden="true">${body}</svg>`;
  }
  function itemHtml(n, sec, it, st) {
    if (sec.type === 'dictation') return dictHtml(n, sec, it, st);
    if (sec.type === 'explain') return explainHtml(n, sec, it, st);
    if (sec.type === 'bank') return bankHtml(sec, it, st);
    if (sec.type === 'tf') return tfHtml(sec, it, st);
    if (sec.type === 'conj') return conjHtml(n, sec, it, st);
    if (sec.type === 'chart') return chartHtml(n, sec, it, st);
    if (sec.type === 'sentence') return sentenceHtml(n, sec, it, st);
    if (sec.type === 'mc') return mcHtml(sec, it, st);
    if (sec.type === 'pick') return pickHtml(sec, it, st);
    if (sec.type === 'pyramid') return pyramidHtml(n, sec, it, st);
    if (sec.type === 'web') return webHtml(n, sec, it, st);
    if (sec.type === 'exam') return examHtml(n, sec, it, st);
    return writeHtml(sec, it, st, n);
  }
  const doneChip = st => st === 'ok' ? '<span class="chip chip-ok">✓</span>' : st === 'self' ? '<span class="chip chip-ok">✓ your version</span>' : st === 'late' ? '<span class="chip chip-rev">2nd try</span>' : '<span class="chip chip-rev">answer shown</span>';
  const okCls = st => st === 'ok' || st === 'self' ? 'ok' : 'rev';
  const inputRow = (key, ph, label) => `<div class="type-row"><input class="kin ko wb-in" id="w-${esc(key.replace('.', '_'))}" data-key="${key}" autocomplete="off" spellcheck="false" placeholder="${esc(ph || '')}" aria-label="${esc(label)}"><button type="button" class="btn btn-sm wb-check" data-key="${key}">Check</button></div><div class="ex-fb" aria-live="polite"></div>`;

  /* dialogue with blanks from a word bank */
  function bankHtml(sec, it, st) {
    const key = sec.id + '.' + it.n; let k = 0;
    const lines = it.lines.map(l => {
      const ko = esc(l[1]).replace(/\{\}/g, () => { const i = k++; return st ? `<mark class="gap-done ${okCls(st)}">${esc(it.ans[i])}</mark>` : `<select class="bank-sel ko" data-i="${i}" aria-label="Blank ${i + 1}"><option value="">(　　)</option>${sec.bank.map(w => `<option>${esc(w)}</option>`).join('')}</select>`; });
      return `<p class="bank-line"><span class="sp ko">${esc(l[0])}</span> <span class="ko">${ko}</span> <span class="bank-en">= ${esc(l[2])}</span></p>`;
    }).join('');
    return `<div class="wbq wb-bankq" data-key="${key}"><p class="wbq-q"><span class="num">${esc(it.n)}.</span></p>${lines}
      ${st ? `<p class="exq-done ${okCls(st)}">${doneChip(st)}</p>` : `<div class="xp-row"><button type="button" class="btn btn-sm bank-check" data-key="${key}">Check</button></div><div class="ex-fb" aria-live="polite"></div>`}</div>`;
  }
  /* true / false (+ correction for false statements) */
  function tfHtml(sec, it, st) {
    const key = sec.id + '.' + it.n;
    const s = it.u ? esc(it.s).replace(esc('[' + it.u + ']'), `<u class="ko">${esc(it.u)}</u>`) : esc(it.s);
    const [lt, lf] = sec.tfLabels || ['True', 'False']; /* L29: tfLabels = ['Correct', 'Wrong'] (judge a conjugation) */
    const ans = it.truth ? lt : it.keyFix ? `${lf} → ${it.keyFix}` : `${lf} → ${MM.expand(it.ans[0])[0]}?`; /* L14: keyFix = the key's correction in words, fixTask = own correction prompt */
    return `<div class="wbq wb-tf" data-key="${key}"><p class="wbq-q"><span class="num">${esc(it.n)}.</span> ${s}</p>
      ${st ? `<p class="exq-done ${okCls(st)}"><b>${esc(ans)}</b> ${doneChip(st)}</p>`
        : `<div class="tf-row"><button type="button" class="opt tf-b" data-key="${key}" data-v="1">${esc(lt)}</button><button type="button" class="opt tf-b" data-key="${key}" data-v="0">${esc(lf)}</button></div><div class="tf-fix" hidden><p class="wb-task">${it.fixTask ? esc(it.fixTask) : `Correct: write the right form of <span class="ko">${esc(it.u || '')}</span>`}</p>${it.fixOpts ? `<div class="tf-row">${it.fixOpts.map((o, i) => `<button type="button" class="opt tf-o" data-key="${key}" data-i="${i}">${esc(o)}</button>`).join('')}</div>` : inputRow(key, '', 'Correction')}</div><div class="tf-fb ex-fb" aria-live="polite"></div>`}</div>`;
  }
  /* English meaning + conjugated form */
  function conjHtml(n, sec, it, st) {
    const key = sec.id + '.' + it.n, mine = (MM.LS(n).wb.txt || {})[key];
    return `<div class="wbq wb-conj" data-key="${key}"><p class="wbq-q"><span class="num">${esc(it.n)}.</span> <span class="ko">${esc(it.dict)}</span></p>
      ${st ? `<p class="exq-done ${okCls(st)}"><span class="ko">${esc(MM.expand(it.ans[0])[0])}${sec.noQ ? '' : '?'}</span> = ${esc(it.en)} ${doneChip(st)}${it.keyNote ? ` <span class="keynote">(${esc(it.keyNote)})</span>` : ''}${mine ? ` <span class="keynote">(you wrote: ${esc(mine)})</span>` : ''}</p>`
        : `${sec.koFirst ? inputRow(key, sec.placeholder || '…까요?', (sec.formLabel || '-(으)ㄹ까요 form of ') + it.dict) : ''}<div class="type-row"><input class="en-in" data-key="${key}" autocomplete="off" placeholder="${esc(sec.enPlaceholder || 'English definition')}" aria-label="${esc(sec.enPlaceholder || 'English definition')} of ${esc(it.dict)}"></div>${sec.koFirst ? '' : inputRow(key, sec.placeholder || '…까요?', (sec.formLabel || '-(으)ㄹ까요 form of ') + it.dict)}`}</div>`;
  }
  /* conjugation chart (L9): English meaning + one cell per sentence ending (sec.cols); the row is checked as a whole.
     L11: sec.noMean (no meaning field: the book's chart has none), sec.cellPh (cell placeholder). */
  function chartHtml(n, sec, it, st) {
    const key = sec.id + '.' + it.n, mine = (MM.LS(n).wb.txt || {})[key];
    const head = `<p class="wbq-q"><span class="num">${esc(it.n)}.</span> <span class="ko">${esc(it.dict)}</span></p>`;
    if (st) return `<div class="wbq wb-chart" data-key="${key}">${head}${sec.noMean ? '' : `<p class="chart-mean">= ${esc(it.en)}${mine ? ` <span class="keynote">(you wrote: ${esc(mine)})</span>` : ''}</p>`}
      <ul class="chart-done">${it.cells.map((c, i) => `<li><span class="chart-lbl">${esc(sec.cols[i])}</span> <span class="ko">${esc(MM.expand(c.ans[0])[0])}</span></li>`).join('')}</ul>
      <p class="exq-done ${okCls(st)}">${doneChip(st)}</p></div>`;
    return `<div class="wbq wb-chart" data-key="${key}">${head}
      ${sec.noMean ? '' : `<div class="type-row"><input class="en-in" data-key="${key}" autocomplete="off" placeholder="Meaning (English)" aria-label="Meaning of ${esc(it.dict)}"></div>`}
      ${it.cells.map((c, i) => `<label class="chart-cell"><span class="chart-lbl">${esc(sec.cols[i])}</span><input class="kin ko wb-cin" id="c-${esc(key.replace('.', '_'))}-${i}" data-key="${key}" data-c="${i}" autocomplete="off" spellcheck="false" placeholder="${esc(sec.cellPh || '… 것 같아요')}" aria-label="${esc(it.dict)} ${esc(sec.cols[i])}"></label>`).join('')}
      <div class="xp-row"><button type="button" class="btn btn-sm chart-check" data-key="${key}">Check row</button></div><div class="ex-fb" aria-live="polite"></div></div>`;
  }
  /* fill the verb, then translate the sentence */
  function sentenceHtml(n, sec, it, st) {
    const key = sec.id + '.' + it.n, mine = (MM.LS(n).wb.txt || {})[key];
    const q = `<p class="wbq-q"><span class="num">${esc(it.n)}.</span> <span class="ko">${esc(it.ko).replace('(___)', '<span class="blank">(　　　)</span>')}</span> ${sec.box ? '' : `<span class="ko verb-tag">(${esc(it.verb)})</span>`}</p>`;
    if (!st) return `<div class="wbq wb-sent" data-key="${key}">${q}${inputRow(key, sec.placeholder || '…까요', sec.box ? 'Answer ' + it.n : 'Conjugated ' + it.verb)}</div>`;
    const tr = mine !== undefined
      ? `<div class="xp-key"><span class="lbl">Key translation</span>${esc(it.en)}</div>${mine ? `<p class="xp-mine">You wrote: ${esc(mine)}</p>` : ''}`
      : `<textarea class="xp-in tr-in" data-key="${key}" aria-label="Your translation" placeholder="Translate it: English or your own language"></textarea><div class="xp-row"><button type="button" class="btn btn-sm tr-show" data-key="${key}">Compare with the key</button></div>`;
    return `<div class="wbq wb-sent" data-key="${key}">${q}<p class="exq-done ${okCls(st)}"><span class="ko">${esc(it.full)}</span> ${sec.box ? `<span class="ko verb-tag">(${esc(it.verb)})</span> ` : ''}${doneChip(st)}</p>${tr}</div>`;
  }

  /* multiple choice: it.opts in book order (letters a–f), it.right = index of the answer */
  function mcHtml(sec, it, st) {
    const key = sec.id + '.' + it.n, L = 'abcdefgh';
    const opt = (o, k) => `<span class="ch-l">${L[k]}.</span> <span class="${/[가-힣]/.test(o) ? 'ko' : ''}">${esc(o)}</span>`;
    const lines = it.lines ? it.lines.map(l => `<p class="bank-line"><span class="sp ko">${esc(l[0])}</span> <span class="ko">${esc(l[1]).replace('(___)', '<span class="blank">(　　　)</span>')}</span></p>`).join('') : '';
    return `<div class="wbq wb-mc" data-key="${key}"><p class="wbq-q"><span class="num">${esc(it.n)}.</span> ${esc(it.q || '')}</p>${lines}
      ${st ? `<p class="exq-done ${okCls(st)}">${opt(it.opts[it.right], it.right)} ${doneChip(st)}${it.note ? ` <span class="keynote">${esc(it.note)}</span>` : ''}</p>`
        : `<div class="ex-choices">${it.opts.map((o, k) => `<button type="button" class="opt mc-b" data-key="${key}" data-v="${k}">${opt(o, k)}</button>`).join('')}</div><div class="ex-fb" aria-live="polite"></div>`}</div>`;
  }
  /* underline the correct answer (one or both) in each {a|b} group of a short dialogue; it.ans = list of right options per group */
  function pickHtml(sec, it, st) {
    const key = sec.id + '.' + it.n; let g = 0;
    const lines = it.lines.map(l => {
      const ko = esc(l[1]).replace(/\{([^}]*)\}/g, (m, body) => {
        const i = g++, opts = body.split('|');
        if (st) return opts.map(o => it.ans[i].includes(o) ? `<mark class="gap-done ${okCls(st)}">${o}</mark>` : `<s class="pk-no">${o}</s>`).join(' ');
        return `<span class="pk-grp" data-i="${i}">${opts.map(o => `<button type="button" class="opt pk-b ko" data-v="${o}" aria-pressed="false">${o}</button>`).join('')}</span>`;
      });
      return `<p class="bank-line">${l[0] ? `<span class="sp ko">${esc(l[0])}</span> ` : ''}<span class="ko">${ko}</span></p>`;
    }).join('');
    return `<div class="wbq wb-pick" data-key="${key}"><p class="wbq-q"><span class="num">${esc(it.n)}.</span>${it.note ? ` <span class="muted">${esc(it.note)}</span>` : ''}</p>${lines}
      ${st ? `<p class="exq-done ${okCls(st)}">${it.en ? esc(it.en) + ' ' : ''}${doneChip(st)}${it.keyNote ? ` <span class="keynote">(${esc(it.keyNote)})</span>` : ''}${it.why ? `<br><span class="keynote">${esc(it.why)}</span>` : ''}</p>` : `<div class="xp-row"><button type="button" class="btn btn-sm pick-check" data-key="${key}">Check</button></div><div class="ex-fb" aria-live="polite"></div>`}</div>`;
  }

  /* L23 Word Builder pyramids: level 1 = 학 (printed), then levels of 2, 3, 4 syllables with two words each, any order within a level.
     it.levels = [[w, w], …] (top → bottom, without 학), it.given = words printed in the book (shown, not asked). Checked as a whole. */
  function pyramidHtml(n, sec, it, st) {
    const key = sec.id + '.' + it.n, giv = new Set(it.given || []);
    const mean = w => { const v = MM.workbook[n].sections.flatMap(s => s.type === 'match' ? s.items : []).find(x => x.ko === w); return v ? v.en : ''; };
    const top = `<div class="pyr-lv" data-lv="0"><span class="pyr-c pyr-top ko">학</span></div>`;
    const rows = it.levels.map((lv, li) => `<p class="pyr-lbl">Level ${li + 2} · ${li + 2} syllables</p><div class="pyr-lv" data-lv="${li + 1}">${lv.map((w, wi) => st || giv.has(w)
      ? `<span class="pyr-c ko ${giv.has(w) ? 'pyr-giv' : st ? 'is-ok' : ''}">${esc(w)}</span>`
      : `<input class="kin ko pyr-c pyr-in" id="p-${esc(key.replace('.', '_'))}-${li}-${wi}" data-key="${key}" data-lv="${li}" autocomplete="off" spellcheck="false" aria-label="${esc(it.title)}, level ${li + 2}, word ${wi + 1}">`).join('')}</div>`).join('');
    const head = `<p class="wbq-q"><span class="num">${esc(it.n)}.</span> ${esc(it.title)}</p>`;
    if (st) return `<div class="wbq wb-pyr" data-key="${key}">${head}<div class="pyr">${top}${rows}</div>
      <p class="pyr-mean">${it.levels.flat().map(w => `<span class="ko">${esc(w)}</span> = ${esc(mean(w))}`).join(' · ')}</p>
      ${it.keyNote ? `<p class="keynote">${esc(it.keyNote)}</p>` : ''}<p class="exq-done ${okCls(st)}">${doneChip(st)}</p></div>`;
    return `<div class="wbq wb-pyr" data-key="${key}">${head}<div class="pyr">${top}${rows}</div>
      <div class="xp-row"><button type="button" class="btn btn-sm pyr-check" data-key="${key}">Check pyramid</button></div><div class="ex-fb" aria-live="polite"></div></div>`;
  }

  /* L30 Word Builder vocabulary web: it.center (실 (室)), it.cats = [{ko, en, words}], it.bank = words in the book's order.
     Each bank word gets one category button per hub (tap = choose; tap another = change); the hubs fill live; checked as a whole. */
  function webHtml(n, sec, it, st) {
    const key = sec.id + '.' + it.n;
    const mean = w => { const v = MM.workbook[n].sections.flatMap(s => s.type === 'match' ? s.items : []).find(x => x.ko === w); return v ? v.en : ''; };
    const hub = (c, ci, words) => `<div class="web-cat" data-c="${ci}"><p class="web-h"><span class="ko">${esc(c.ko)}</span> <span class="muted">${esc(c.en)} · ${c.words.length}</span></p>
      <div class="web-slots">${words ? words.map(w => `<span class="web-chip ko">${esc(w)}${st ? ` <small>${esc(mean(w))}</small>` : ''}</span>`).join('') : c.words.map(() => '<span class="web-slot"></span>').join('')}</div></div>`;
    const head = `<p class="wbq-q"><span class="num">${esc(it.n)}.</span> Vocabulary web</p>`;
    const center = `<div class="web-center ko">${esc(it.center)}</div>`;
    if (st) return `<div class="wbq wb-web" data-key="${key}">${head}${center}<div class="web">${it.cats.map((c, ci) => hub(c, ci, c.words)).join('')}</div>
      ${it.keyNote ? `<p class="keynote">${esc(it.keyNote)}</p>` : ''}<p class="exq-done ${okCls(st)}">${doneChip(st)}</p></div>`;
    const rows = it.bank.map(w => `<div class="web-row" data-w="${esc(w)}"><span class="web-w ko">${esc(w)}</span><span class="web-opts">${it.cats.map((c, ci) => `<button type="button" class="web-b ko" data-key="${key}" data-c="${ci}" aria-pressed="false" aria-label="${esc(w)}: ${esc(c.ko)}">${esc(c.ko)}</button>`).join('')}</span></div>`).join('');
    return `<div class="wbq wb-web" data-key="${key}">${head}${center}<div class="web">${it.cats.map((c, ci) => hub(c, ci)).join('')}</div>
      <p class="pyr-lbl">Word bank · tap the place each room belongs to</p><div class="web-bank">${rows}</div>
      <div class="xp-row"><button type="button" class="btn btn-sm web-check" data-key="${key}">Check web</button></div><div class="ex-fb" aria-live="polite"></div></div>`;
  }

  /* --- Section II: write --- */
  /* L12: sec.free = {start, need} — open writing (the key only prints example answers). The answer must start with
     sec.free.start; an exact key match is graded ✓, anything else shows the key's example and the learner judges it. */
  function writeHtml(sec, it, st, n) {
    const key = sec.id + '.' + it.n;
    const mineF = sec.free && n ? (MM.LS(n).wb.txt || {})[key] : '';
    const ans = MM.expand(it.ans[0])[0];
    const given = it.given || '', long = given.length > 12;
    const head = it.lines
      ? `<p class="wbq-q"><span class="num">${esc(it.n)}.</span></p>${it.lines.map(l => `<p class="bank-line"><span class="sp ko">${esc(l[0])}</span> ${l[1] && l[1].includes('___') ? `<span class="ko">${esc(l[1]).replace('___', `<span class="blank">(　　　　　)</span>`)}</span> <span class="muted">(${esc(it.cue)})</span>` : l[1] ? `<span class="ko">${esc(l[1])}</span>` : `<span class="blank">(　　　　　)</span> <span class="muted">(${esc(it.cue)})</span>`}</p>`).join('')}`
      : sec.givenEn ? `<p class="wbq-q"><span class="num">${esc(it.n)}.</span> ${esc(given)}</p>`
      : long ? `<p class="wbq-q"><span class="num">${esc(it.n)}.</span></p><p class="wbq-given ko">${esc(given)}</p>` : `<p class="wbq-q"><span class="num">${esc(it.n)}</span> <span class="ko">${esc(given)}</span></p>`;
    return `<div class="wbq" data-key="${key}">${head}
      ${st ? `<p class="exq-done ${st === 'ok' || st === 'self' ? 'ok' : 'rev'}"><span class="ko">${esc(ans)}</span> = ${esc(it.en)} ${st === 'ok' ? '<span class="chip chip-ok">✓</span>' : st === 'self' ? '<span class="chip chip-ok">✓ your version</span>' : '<span class="chip chip-rev">answer shown</span>'}${it.keyNote ? ` <span class="keynote">(${esc(it.keyNote)})</span>` : ''}${sec.free ? `<br><span class="keynote">${mineF ? `You wrote: <span class="ko">${esc(mineF)}</span> · ` : ''}the line above is the key’s example answer.</span>` : ''}</p>`
        : `<div class="type-row"><input class="kin ko wb-in" id="w-${esc(key.replace('.', '_'))}" data-key="${key}" autocomplete="off" spellcheck="false" placeholder="${esc(sec.placeholder || '')}" aria-label="Answer ${esc(it.n)}"><button type="button" class="btn btn-sm wb-check" data-key="${key}">Check</button></div><div class="ex-fb" aria-live="polite"></div>`}
    </div>`;
  }

  /* --- comprehension in English (or any language): write, compare with the key, judge yourself --- */
  function explainHtml(n, sec, it, st) {
    const key = sec.id + '.' + it.n, mine = (MM.LS(n).wb.txt || {})[key] || '';
    const qtxt = it.ko ? `<span class="ko wbq-given">${esc(it.ko)}</span>` : esc(it.q);
    const keyBox = `<div class="xp-key"><span class="lbl">Answer key${it.keyNote ? ' · ' + esc(it.keyNote) : ''}</span>${esc(it.key)}</div>`;
    if (st) return `<div class="wbq wb-explain" data-key="${key}"><p class="wbq-q"><span class="num">${esc(it.n)}.</span> ${qtxt}</p>
      ${keyBox}${mine ? `<p class="xp-mine">You wrote: ${esc(mine)}</p>` : ''}<p class="exq-done ${st === 'self' ? 'ok' : 'rev'}">${st === 'self' ? '<span class="chip chip-ok">✓ you had it</span>' : '<span class="chip chip-rev">key read</span>'}</p></div>`;
    return `<div class="wbq wb-explain" data-key="${key}"><p class="wbq-q"><span class="num">${esc(it.n)}.</span> ${qtxt}</p>
      <textarea class="xp-in" data-key="${key}" aria-label="Your answer ${esc(it.n)}" placeholder="Your answer, in English or your own language">${esc(mine)}</textarea>
      <div class="xp-row"><button type="button" class="btn btn-sm xp-show" data-key="${key}">Compare with the key</button></div><div class="xp-out"></div></div>`;
  }

  /* --- Section III: dictation --- */
  function dictHtml(n, sec, it, st) {
    const key = sec.id + '.' + it.n, src = MM.audio[n].wb[it.track], ans = MM.expand(it.ans[0])[0];
    return `<div class="wbq dict" data-key="${key}"><p class="wbq-q"><span class="num">${it.n}.</span> ${esc(it.label)}</p>
      <div class="dict-ctl"><button type="button" class="trk" data-trk="${esc(src)}" data-rate="1"${it.clip ? ` data-from="${it.clip[0]}" data-to="${it.clip[1]}"` : ''}><span class="trk-ic">▶</span> Play</button>
        <button type="button" class="trk trk-slow" data-trk="${esc(src)}" data-rate="0.75"${it.clip ? ` data-from="${it.clip[0]}" data-to="${it.clip[1]}"` : ''}><span class="trk-ic">▶</span> 0.75×</button></div>
      ${it.ko && !st ? `<p class="exq-ko ko">${esc(it.ko).replace(/\(___\)/g, '<span class="blank">(　　　)</span>')}</p>${it.note ? `<p class="keynote">${esc(it.note)}</p>` : ''}` : ''}
      ${st ? `<p class="exq-done ${st === 'ok' ? 'ok' : 'rev'}"><span class="ko">${esc(it.full || ans)}</span> = ${esc(it.en)} ${st === 'ok' ? '<span class="chip chip-ok">✓</span>' : '<span class="chip chip-rev">checked</span>'}${it.keyNote ? ` <span class="keynote">(${esc(it.keyNote)})</span>` : ''}</p>`
        : `<div class="type-row"><input class="kin ko wb-in" id="w-${esc(key.replace('.', '_'))}" data-key="${key}" autocomplete="off" spellcheck="false" aria-label="${it.ko ? 'The missing word' : 'What you heard'}"><button type="button" class="btn btn-sm wb-check" data-key="${key}">Check</button></div><div class="ex-fb" aria-live="polite"></div>`}
    </div>`;
  }

  const playBtn = b => MM.AM.playTrack(b.dataset.trk, b, +b.dataset.rate || 1, b.dataset.from != null ? +b.dataset.from : null, b.dataset.to != null ? +b.dataset.to : null);

  /* L31 Final Exam: a section of type 'exam' = one round of sec.count questions drawn from the lessons in sec.lessons
     (MM.Q.allQs: pool, CCTV, generated forms + vocabulary). Per lesson: a returned mistake first (same skill, another question),
     then expired / weak skills, then the rest; different skills preferred. Mounted inline with MM.Q (typed, base ₩60).
     State: wb.i[key] = 'ok' (≥ 70 %) or 'late' (done, below 70 %); wb.exam[sec.id] = {best, last, runs, by: {lesson: [correct, total]}}. */
  const EXAM_TYPES = ['mc', 'enOpts', 'odd', 'fill', 'write', 'tiles'];
  function examPick(sec) {
    const per = Math.ceil(sec.count / sec.lessons.length), used = new Set(), out = [], due = MM.dueSkills();
    for (const k of shuffle(sec.lessons)) {
      const src = shuffle(MM.Q.allQs(k).filter(q => EXAM_TYPES.includes(q.type)));
      const take = [], skills = new Set();
      const add = q => { if (!q || used.has(q.id) || take.length >= per) return; used.add(q.id); skills.add(q.skill); take.push(q); };
      const m = MM.S.mistakes.filter(m => m.lesson === k).sort((a, b) => b.n - a.n)[0];
      if (m) { const c = src.find(q => q.skill === m.skill && q.id !== m.qid); if (c) add(Object.assign({}, c, { _review: true })); }
      for (const q of src) if (take.length < per && (due.includes(q.skill) || MM.isWeak(q.skill)) && !skills.has(q.skill)) add(q);
      for (const q of src) if (take.length < per && !skills.has(q.skill)) add(q);
      for (const q of src) if (take.length < per) add(q);
      out.push(...take);
    }
    return shuffle(out).slice(0, sec.count);
  }
  function examHtml(n, sec, it, st) {
    const key = sec.id + '.' + it.n, E = (MM.LS(n).wb.exam || {})[sec.id];
    return `<div class="wbq wb-exam" data-key="${key}">
      <ul class="exam-ls">${sec.lessons.map(k => { const r = E && E.by && E.by[k]; return `<li><span class="ltag">L${k}</span> <span class="ko">${esc((MM.lessons[k] || {}).ko || '')}</span>${r ? ` <span class="exam-r ${r[0] === r[1] ? 'ok' : r[0] ? '' : 'bad'}">${r[0]}/${r[1]}</span>` : ''}</li>`; }).join('')}</ul>
      ${E ? `<p class="exq-done ${okCls(st)}">Best <b>${E.best}%</b> · last ${E.last}% · ${E.runs} run${E.runs > 1 ? 's' : ''} ${st === 'ok' ? '<span class="chip chip-ok">✓ passed</span>' : '<span class="chip chip-rev">below 70%: try again</span>'}</p>` : ''}
      <div class="exam-host"></div>
      <button type="button" class="btn btn-go exam-go" data-key="${key}">${E ? 'Take it again' : 'Start'} · ${sec.count} questions ▸</button></div>`;
  }
  function runExam(sec0, n, key, redraw) {
    const [sid] = key.split('.'), sec = MM.workbook[n].sections.find(s => s.id === sid), box = sec0.querySelector(`.wbq[data-key="${key}"]`);
    const host = box.querySelector('.exam-host'), items = examPick(sec), by = {};
    if (!items.length) { MM.ui.toast('No questions found for these lessons.'); return; }
    let i = 0, ok = 0;
    const skillName = id => { for (const G of Object.values(MM.game)) if (G.skills && G.skills[id]) return G.skills[id].en; return ''; };
    box.querySelector('.exam-go').hidden = true; box.classList.add('running');
    const draw = () => {
      const q = items[i];
      host.innerHTML = `<div class="round-head"><span class="round-t">${esc((sec.title.split(' – ')[1] || sec.title).trim())}</span><span class="round-p">${i + 1} / ${items.length}</span></div>
        <div class="round-bar"><span style="width:${i / items.length * 100}%"></span></div>
        <p class="round-sub">${q._review ? 'Returned mistake: same rule, different sentence. · ' : ''}Lesson ${q.lesson}${skillName(q.skill) ? ' · ' + esc(skillName(q.skill)) : ''}</p><div class="qhost"></div>`;
      MM.Q.mount(host.querySelector('.qhost'), q, {
        lesson: q.lesson, review: q._review, base: 60, tilesDefault: false, nextLabel: i + 1 < items.length ? 'Next ▸' : 'See the result ▸',
        onResult(res) { const r = by[q.lesson] = by[q.lesson] || [0, 0]; r[1]++; if (res.ok) { r[0]++; ok++; } },
        onNext() { i++; if (i < items.length) { draw(); box.scrollIntoView({ block: 'start' }); } else end(); },
      });
    };
    const end = () => {
      const W = MM.LS(n).wb, pct = Math.round(ok / items.length * 100), prev = (W.exam = W.exam || {})[sid] || {};
      W.exam[sid] = { best: Math.max(prev.best || 0, pct), last: pct, runs: (prev.runs || 0) + 1, by };
      W.i[key] = W.exam[sid].best >= 70 ? 'ok' : 'late';
      MM.tallyFlush(); MM.save(); MM.ui.toast(`${ok} / ${items.length} correct (${pct}%)`);
      redraw(key); box.scrollIntoView && sec0.querySelector(`.wbq[data-key="${key}"]`).scrollIntoView({ block: 'start' });
    };
    draw();
  }
  function summaryHtml(n) {
    const st = MM.LS(n).wb.i;
    const rows = MM.workbook[n].sections.map(sec => {
      const tot = sec.items.length, ok = sec.items.filter(it => ['ok', 'self'].includes(st[sec.id + '.' + it.n])).length, done = sec.items.filter(it => st[sec.id + '.' + it.n]).length;
      if (sec.type === 'exam') { const E = (MM.LS(n).wb.exam || {})[sec.id]; return `<p><span>${esc(sec.title.split(' – ')[0].trim())} · ${esc(sec.title.split(' – ')[1] || '')}</span><b>${E ? `best ${E.best}%` : '—'}</b></p>`; }
      return `<p><span>${esc(sec.title.split('–')[0].trim())} · ${esc(sec.title.split('–')[1] || '')}</span><b>${ok} / ${tot}${done > ok ? ` <small>(${done - ok} shown)</small>` : ''}</b></p>`;
    }).join('');
    return `<div class="rcpt summary"><div class="rcpt-head"><span class="rcpt-mark">${esc(((MM.lessons[n].tabs || [])[1] || 'Workbook').toUpperCase())} · L${n}</span><span>${status(n) === 'done' ? 'COMPLETE' : 'IN PROGRESS'}</span></div>
      <div class="rcpt-rows">${rows}</div><p class="src-note">${MM.lessons[n].wbSrc ? esc(MM.lessons[n].wbSrc) : `Answer key: workbook p.${esc(MM.lessons[n].pages.wbKey)}`}</p><div class="barcode" aria-hidden="true"></div></div>
      <button type="button" class="btn btn-go" id="toGame">Start your shift ▸</button>`;
  }

  function bind(sec0, n) {
    const st = MM.LS(n).wb.i;
    bindMatch(sec0, n);
    $$('.trk', sec0).forEach(b => b.addEventListener('click', () => playBtn(b)));
    $('#toGame', sec0).addEventListener('click', () => MM.app.go('game'));
    const find = key => { const [sid, num] = key.split('.'); const sec = MM.workbook[n].sections.find(s => s.id === sid); return { sec, it: sec.items.find(i => String(i.n) === num) }; };
    const redraw = key => {
      const el = sec0.querySelector(`.wbq[data-key="${key}"]`), { sec, it } = find(key);
      el.outerHTML = itemHtml(n, sec, it, st[key]);
      sec0.querySelectorAll(`.wbq[data-key="${key}"] .trk`).forEach(b => b.addEventListener('click', () => playBtn(b)));
      const sm = sec0.querySelector('.summary'), tmp = document.createElement('div'); tmp.innerHTML = summaryHtml(n);
      sm.replaceWith(tmp.querySelector('.summary')); MM.ui.barcodes(sec0); MM.app.refreshTabs(); MM.kbd.applyMode();
    };
    const check = key => {
      const { sec, it } = find(key), inp = sec0.querySelector(`input.wb-in[data-key="${key}"]`), fb = inp.closest('.wbq').querySelector('.ex-fb');
      const res = MM.grade(inp.value, it);
      if (res.kind === 'empty' || res.kind === 'latin') { fb.textContent = res.note; return; }
      const dict = sec.type === 'dictation';
      if (sec.free) {
        const g = MM.norm(it.given || ''), v0 = MM.norm(inp.value), v = g && v0.startsWith(g) ? v0.slice(g.length).trim() : v0;
        const r2 = MM.grade(v, it);
        if (!r2.ok) {
          if (!v.replace(/\s+/g, '').startsWith(sec.free.start)) { const alt = (sec.free.alt || []).find(a => v.startsWith(a[0])); fb.textContent = alt ? alt[1] : sec.free.need; return; }
          if (r2.kind === 'diag') { inp.closest('.wbq').dataset.missed = '1'; MM.ui.sound(false); fb.innerHTML = `${esc(r2.note)} <button type="button" class="link wb-rev" data-key="${key}">Show answer</button>`; return; }
          const W = MM.LS(n).wb; W.txt = W.txt || {}; W.txt[key] = inp.value.trim(); MM.save(); MM.kbd.hide();
          fb.innerHTML = `Key’s example: <b class="ko">${esc(MM.expand(it.ans[0])[0])}</b> = ${esc(it.en)}<br>Any correct sentence with ${esc(sec.free.start)} counts. Is yours correct Korean, and does it fit? <button type="button" class="link wb-self" data-key="${key}" data-v="self" data-rec="1">Yes, mine works</button> · <button type="button" class="link wb-self" data-key="${key}" data-v="rev" data-rec="1">I was wrong</button>`;
          return;
        }
        inp.value = v;
      }
      const skill = dict ? null : it.skill || sec.skill || (it.given && !sec.givenEn ? formSkill(n, it.given) : `l${n}.form`);
      const box = inp.closest('.wbq'), first = !box.dataset.missed;
      MM.record({ id: `wb${n}.${key}`, skill, lesson: n }, res.ok, { base: 60, noMistake: dict || !first });
      MM.ui.refreshWon(); MM.kbd.hide();
      if (res.ok) {
        if (sec.type === 'conj') {
          const e = box.querySelector('.en-in'), mine = e ? e.value.trim() : '';
          const W = MM.LS(n).wb; W.txt = W.txt || {}; W.txt[key] = mine;
          const low = x => x.toLowerCase().replace(/[^a-z ,]/g, '').trim();
          const enOk = mine && [it.en].concat(it.enAlt || []).some(a => low(a) === low(mine) || low(it.en).split(',').map(x => x.trim()).includes(low(mine)));
          MM.ui.toast(enOk ? 'Meaning matches the key too.' : `Key meaning: ${it.en}${mine ? ' (compare with yours)' : ''}`);
        }
        st[key] = sec.type === 'tf' || !first ? 'late' : 'ok';
        if (sec.type === 'tf' && first && !box.dataset.tfmiss) st[key] = 'ok';
        MM.save(); MM.ui.sound(true); if (res.note) MM.ui.toast(res.note); redraw(key); return;
      }
      box.dataset.missed = '1';
      MM.ui.sound(false);
      if (dict) {
        fb.innerHTML = `<p class="diff ko">${MM.diffHtml(inp.value, res.expected)}</p><p class="diff-legend"><ins>green</ins> = missing, <del>red</del> = extra. ${esc(it.en)}</p>
          <button type="button" class="link wb-done" data-key="${key}">Mark as checked</button> <button type="button" class="link wb-retry">Try again</button>`;
      } else {
        fb.innerHTML = `${esc(res.note || 'Not quite.')} <button type="button" class="link wb-rev" data-key="${key}">Show answer</button>`;
      }
    };
    const checkChart = key => {
      const { sec, it } = find(key), box = sec0.querySelector(`.wbq[data-key="${key}"]`), fb = box.querySelector('.ex-fb');
      const ins = $$('.wb-cin', box);
      if (ins.some(x => !x.value.trim())) { fb.textContent = ins.length === 3 ? 'Fill in all three forms first.' : 'Fill in every cell first.'; return; }
      const res = ins.map((x, i) => MM.grade(x.value, it.cells[i]));
      const lat = res.find(r => r.kind === 'latin'); if (lat) { fb.textContent = lat.note; return; }
      const first = !box.dataset.missed, allOk = res.every(r => r.ok);
      MM.record({ id: `wb${n}.${key}`, skill: it.skill || sec.skill || `l${n}.form`, lesson: n }, allOk, { base: 90, noMistake: !first });
      MM.ui.refreshWon(); MM.kbd.hide(); MM.ui.sound(allOk);
      ins.forEach((x, i) => x.classList.toggle('is-bad', !res[i].ok));
      if (allOk) {
        const e = box.querySelector('.en-in'), mine = e ? e.value.trim() : '', W = MM.LS(n).wb; W.txt = W.txt || {}; W.txt[key] = mine;
        st[key] = first ? 'ok' : 'late'; MM.save();
        const notes = res.map(r => r.note).filter(Boolean);
        MM.ui.toast(notes.length ? notes[0] : sec.noMean ? 'Whole row correct.' : `Key meaning: ${it.en}`); redraw(key); return;
      }
      box.dataset.missed = '1';
      fb.innerHTML = res.map((r, i) => r.ok ? '' : `<p><b>${esc(sec.cols[i])}:</b> ${esc(r.note || 'not this form yet.')}</p>`).join('') + `<button type="button" class="link chart-rev" data-key="${key}">Show answers</button>`;
    };
    const checkPyr = key => {
      const { sec, it } = find(key), box = sec0.querySelector(`.wbq[data-key="${key}"]`), fb = box.querySelector('.ex-fb');
      const ins = $$('.pyr-in', box), clean = v => MM.norm(v).replace(/[\s.,!?]/g, '');
      if (ins.some(x => !clean(x.value))) { fb.textContent = 'Fill in every empty block first.'; return; }
      if (ins.some(x => /[A-Za-z]/.test(x.value))) { fb.textContent = 'Write the words in Korean (hangul).'; return; }
      const giv = new Set(it.given || []), notes = [];
      const others = MM.workbook[n].sections.filter(s => s.type === 'pyramid').flatMap(s => s.items).filter(o => o !== it);
      const vocab = MM.workbook[n].sections.flatMap(s => s.type === 'match' ? s.items : []).map(x => x.ko);
      const used = new Set();
      ins.forEach(x => {
        const v = clean(x.value), lv = +x.dataset.lv, need = it.levels[lv].filter(w => !giv.has(w) && !used.has(w));
        const ok = need.includes(v); x.classList.toggle('is-bad', !ok); x.classList.toggle('is-ok', ok);
        if (ok) { used.add(v); return; }
        const other = others.find(o => o.levels.flat().includes(v)), lvOwn = it.levels.findIndex(l => l.includes(v));
        if (giv.has(v)) notes.push(`${v} is already printed in the pyramid.`);
        else if (used.has(v)) notes.push(`${v} is there twice.`);
        else if (lvOwn >= 0) notes.push(`${v} fits this pyramid, but it has ${lvOwn + 2} syllables: level ${lvOwn + 2}.`);
        else if (other) notes.push(`${v} is a word for “${other.title}” (number ${other.n}).`);
        else if (vocab.includes(v)) notes.push(`${v} is a Section I word, but not one for “${it.title}”.`);
        else notes.push(`${v}: use the words from Section I (1–24).`);
      });
      const allOk = !notes.length, first = !box.dataset.missed;
      MM.record({ id: `wb${n}.${key}`, skill: it.skill || sec.skill || `l${n}.vocab`, lesson: n }, allOk, { base: 90, noMistake: !first });
      MM.ui.refreshWon(); MM.kbd.hide(); MM.ui.sound(allOk);
      if (allOk) { st[key] = first ? 'ok' : 'late'; MM.save(); redraw(key); return; }
      box.dataset.missed = '1';
      fb.innerHTML = notes.map(t => `<p class="ko">${esc(t)}</p>`).join('') + `<button type="button" class="link chart-rev" data-key="${key}">Show answers</button>`;
    };
    /* L30 vocabulary web */
    const webFill = box => {
      const { it } = find(box.dataset.key), pick = {};
      $$('.web-row', box).forEach(r => { const b = r.querySelector('.web-b[aria-pressed="true"]'); if (b) (pick[b.dataset.c] = pick[b.dataset.c] || []).push(r.dataset.w); });
      $$('.web-cat', box).forEach(c => { const ws = pick[c.dataset.c] || [], need = it.cats[+c.dataset.c].words.length;
        c.querySelector('.web-slots').innerHTML = ws.map(w => `<span class="web-chip ko">${esc(w)}</span>`).join('') + Array.from({ length: Math.max(0, need - ws.length) }, () => '<span class="web-slot"></span>').join(''); });
    };
    const checkWeb = key => {
      const { sec, it } = find(key), box = sec0.querySelector(`.wbq[data-key="${key}"]`), fb = box.querySelector('.ex-fb'), rows = $$('.web-row', box);
      const mean = w => { const v = MM.workbook[n].sections.flatMap(s => s.type === 'match' ? s.items : []).find(x => x.ko === w); return v ? v.en : ''; };
      const sel = rows.map(r => { const b = r.querySelector('.web-b[aria-pressed="true"]'); return b ? +b.dataset.c : -1; });
      if (sel.some(c => c < 0)) { fb.textContent = 'Choose a place for every word first.'; return; }
      const notes = [];
      rows.forEach((r, i) => { const w = r.dataset.w, right = it.cats.findIndex(c => c.words.includes(w)), ok = sel[i] === right;
        r.classList.toggle('is-bad', !ok); r.classList.toggle('is-ok', ok);
        if (!ok) notes.push(`${w} (${mean(w)}) is not a ${it.cats[sel[i]].ko} (${it.cats[sel[i]].en}) room.`); });
      const allOk = !notes.length, first = !box.dataset.missed;
      MM.record({ id: `wb${n}.${key}`, skill: it.skill || sec.skill || `l${n}.vocab`, lesson: n }, allOk, { base: 90, noMistake: !first });
      MM.ui.refreshWon(); MM.ui.sound(allOk);
      if (allOk) { st[key] = first ? 'ok' : 'late'; MM.save(); redraw(key); return; }
      box.dataset.missed = '1';
      fb.innerHTML = notes.map(t => `<p>${esc(t)}</p>`).join('') + `<button type="button" class="link chart-rev" data-key="${key}">Show answers</button>`;
    };
    sec0.addEventListener('click', e => {
      const pk = e.target.closest('.pyr-check'); if (pk) return checkPyr(pk.dataset.key);
      const eg = e.target.closest('.exam-go'); if (eg) return runExam(sec0, n, eg.dataset.key, redraw);
      const wbb = e.target.closest('.web-b');
      if (wbb) { const r = wbb.closest('.web-row'); $$('.web-b', r).forEach(x => { const on = x === wbb; x.setAttribute('aria-pressed', String(on)); x.classList.toggle('sel', on); }); r.classList.remove('is-bad', 'is-ok'); webFill(wbb.closest('.wbq')); return; }
      const wc = e.target.closest('.web-check'); if (wc) return checkWeb(wc.dataset.key);
      const c = e.target.closest('.wb-check'); if (c) return check(c.dataset.key);
      const cc = e.target.closest('.chart-check'); if (cc) return checkChart(cc.dataset.key);
      const cr = e.target.closest('.chart-rev'); if (cr) { st[cr.dataset.key] = 'rev'; MM.save(); redraw(cr.dataset.key); return; }
      const bc = e.target.closest('.bank-check');
      if (bc) {
        const k = bc.dataset.key, { it } = find(k), box = bc.closest('.wbq'), sels = $$('.bank-sel', box), fb = box.querySelector('.ex-fb');
        if (sels.some(x => !x.value)) { fb.textContent = 'Fill every blank first.'; return; }
        const bad = sels.filter((x, i) => x.value !== it.ans[i]), first = !box.dataset.missed;
        sels.forEach((x, i) => x.classList.toggle('is-bad', x.value !== it.ans[i]));
        if (first) MM.record({ id: `wb${n}.${k}`, skill: `l${n}.place`, lesson: n }, !bad.length, { base: 60 });
        MM.ui.refreshWon(); MM.ui.sound(!bad.length);
        if (!bad.length) { st[k] = first ? 'ok' : 'late'; MM.save(); redraw(k); return; }
        box.dataset.missed = '1';
        fb.innerHTML = `${bad.length} blank${bad.length > 1 ? 's' : ''} not right yet: check the English line. <button type="button" class="link bank-rev" data-key="${k}">Show answer</button>`;
        return;
      }
      const mb = e.target.closest('.mc-b');
      if (mb && !mb.disabled) {
        const k = mb.dataset.key, { sec, it } = find(k), box = mb.closest('.wbq'), ok = +mb.dataset.v === it.right, first = !box.dataset.missed;
        if (first) MM.record({ id: `wb${n}.${k}`, skill: it.skill || sec.skill || `l${n}.usage`, lesson: n }, ok, { base: 40 });
        MM.ui.sound(ok); MM.ui.refreshWon();
        if (ok) { st[k] = first ? 'ok' : 'late'; MM.save(); redraw(k); return; }
        box.dataset.missed = '1'; mb.classList.add('is-bad'); mb.disabled = true;
        box.querySelector('.ex-fb').textContent = it.wrongNote || 'Not that one. Try another.';
        return;
      }
      const pb = e.target.closest('.pk-b');
      if (pb) { const on = pb.getAttribute('aria-pressed') !== 'true'; pb.setAttribute('aria-pressed', String(on)); pb.classList.toggle('sel', on); return; }
      const pc = e.target.closest('.pick-check');
      if (pc) {
        const k = pc.dataset.key, { sec, it } = find(k), box = pc.closest('.wbq'), fb = box.querySelector('.ex-fb'), grps = $$('.pk-grp', box);
        const picked = grps.map(gr => $$('.pk-b', gr).filter(b => b.getAttribute('aria-pressed') === 'true').map(b => b.dataset.v));
        if (picked.some(p => !p.length)) { fb.textContent = 'Pick at least one option in every choice.'; return; }
        const bad = picked.map((p, i) => p.length !== it.ans[i].length || p.some(x => !it.ans[i].includes(x))), nb = bad.filter(Boolean).length, first = !box.dataset.missed;
        grps.forEach((gr, i) => gr.classList.toggle('is-bad', bad[i]));
        if (first) MM.record({ id: `wb${n}.${k}`, skill: it.skill || sec.skill || `l${n}.usage`, lesson: n }, !nb, { base: 60 });
        MM.ui.refreshWon(); MM.ui.sound(!nb);
        if (!nb) { st[k] = first ? 'ok' : 'late'; MM.save(); redraw(k); return; }
        box.dataset.missed = '1';
        fb.innerHTML = `${nb} choice${nb > 1 ? 's' : ''} not right yet${it.hintBad ? ': ' + esc(it.hintBad) : ''}. <button type="button" class="link bank-rev" data-key="${k}">Show answer</button>`;
        return;
      }
      const br = e.target.closest('.bank-rev'); if (br) { st[br.dataset.key] = 'rev'; MM.save(); redraw(br.dataset.key); return; }
      const tb = e.target.closest('.tf-b');
      if (tb && !tb.disabled) {
        const k = tb.dataset.key, { it } = find(k), box = tb.closest('.wbq'), said = tb.dataset.v === '1', ok = said === it.truth;
        const first = !box.dataset.tfmiss;
        MM.ui.sound(ok);
        if (!ok) { box.dataset.tfmiss = '1'; tb.classList.add('is-bad'); tb.disabled = true; if (first) MM.record({ id: `wb${n}.${k}`, skill: `l${n}.usage`, lesson: n }, false, {}); box.querySelector('.tf-fb').textContent = it.truth ? (find(k).sec.tfLabels ? 'It is conjugated correctly as it is.' : 'It is true: the textbook says exactly this.') : 'Look again at the underlined part.'; MM.ui.refreshWon(); return; }
        $$('.tf-b', box).forEach(x => x.disabled = true); tb.classList.add('is-ok');
        if (it.truth) { if (first) MM.record({ id: `wb${n}.${k}`, skill: `l${n}.usage`, lesson: n }, true, { base: 40 }); st[k] = first ? 'ok' : 'late'; MM.save(); MM.ui.refreshWon(); redraw(k); return; }
        box.querySelector('.tf-fb').textContent = it.fixOpts ? 'Right, it is false. Now choose the correct version.' : find(k).sec.tfLabels ? 'Right, it is wrong. Now write the correct form.' : 'Right, it is false. Now write the correct form.';
        box.querySelector('.tf-fix').hidden = false; const fi = box.querySelector('.tf-fix input'); if (fi) fi.focus();
        return;
      }
      /* L22: a false statement corrected by choosing (English correction: fixOpts + fixRight index) */
      const to = e.target.closest('.tf-o');
      if (to && !to.disabled) {
        const k = to.dataset.key, { it, sec } = find(k), box = to.closest('.wbq'), ok = +to.dataset.i === (it.fixRight || 0);
        MM.ui.sound(ok);
        if (!ok) { to.disabled = true; to.classList.add('is-bad'); if (!box.dataset.tfmiss) MM.record({ id: `wb${n}.${k}`, skill: it.skill || sec.skill || `l${n}.usage`, lesson: n }, false, {}); box.dataset.tfmiss = '1'; box.querySelector('.tf-fb').textContent = it.fixWhy || 'Not that one.'; MM.ui.refreshWon(); return; }
        if (!box.dataset.tfmiss) MM.record({ id: `wb${n}.${k}`, skill: it.skill || sec.skill || `l${n}.usage`, lesson: n }, true, { base: 60 });
        st[k] = box.dataset.tfmiss ? 'late' : 'ok'; MM.save(); MM.ui.refreshWon(); redraw(k); return;
      }
      const ts = e.target.closest('.tr-show');
      if (ts) { const k = ts.dataset.key, txt = ts.closest('.wbq').querySelector('.tr-in').value.trim(), W = MM.LS(n).wb; W.txt = W.txt || {}; W.txt[k] = txt; MM.save(); redraw(k); return; }
      const r = e.target.closest('.wb-rev');
      if (r) {
        const { it } = find(r.dataset.key), fb = r.closest('.ex-fb');
        fb.innerHTML = `Key: <b class="ko">${esc(it.full || MM.expand(it.ans[0])[0])}</b>${it.en ? ' = ' + esc(it.en) : ''}<br>Was yours also correct? <button type="button" class="link wb-self" data-key="${r.dataset.key}" data-v="self">Mine matches</button> · <button type="button" class="link wb-self" data-key="${r.dataset.key}" data-v="rev">I was wrong</button>`;
        return;
      }
      const xs = e.target.closest('.xp-show');
      if (xs) {
        const k = xs.dataset.key, { it } = find(k), box = xs.closest('.wbq'), txt = box.querySelector('.xp-in').value.trim();
        const W = MM.LS(n).wb; W.txt = W.txt || {}; if (txt) W.txt[k] = txt; MM.save();
        box.querySelector('.xp-out').innerHTML = `<div class="xp-key"><span class="lbl">Answer key${it.keyNote ? ' · ' + esc(it.keyNote) : ''}</span>${esc(it.key)}</div>
          <div class="xp-row">${txt ? `Did yours say the same thing? <button type="button" class="link xp-judge" data-key="${k}" data-v="self">Yes, more or less</button> · <button type="button" class="link xp-judge" data-key="${k}" data-v="rev">No, I missed it</button>` : `<button type="button" class="link xp-judge" data-key="${k}" data-v="rev">Got it</button>`}</div>`;
        xs.hidden = true; return;
      }
      const xj = e.target.closest('.xp-judge');
      if (xj) { const k = xj.dataset.key; st[k] = xj.dataset.v; MM.record({ id: `wb${n}.${k}`, skill: `l${n}.usage`, lesson: n }, xj.dataset.v === 'self', { base: 40, noMistake: true }); MM.ui.refreshWon(); MM.save(); redraw(k); return; }
      const s = e.target.closest('.wb-self');
      if (s) {
        if (s.dataset.rec) { const { sec, it } = find(s.dataset.key); MM.record({ id: `wb${n}.${s.dataset.key}`, skill: it.skill || sec.skill || `l${n}.usage`, lesson: n }, s.dataset.v === 'self', { base: 60, noMistake: true }); MM.ui.refreshWon(); MM.ui.sound(s.dataset.v === 'self'); }
        st[s.dataset.key] = s.dataset.v; MM.save(); redraw(s.dataset.key); return;
      }
      const d = e.target.closest('.wb-done'); if (d) { st[d.dataset.key] = 'rev'; MM.save(); redraw(d.dataset.key); return; }
      const t = e.target.closest('.wb-retry'); if (t) { const fb = t.closest('.ex-fb'); fb.innerHTML = ''; fb.closest('.wbq').querySelector('input').focus(); }
    });
    const next = el => { const i = +el.dataset.c, nx = el.closest('.wbq').querySelector(`.wb-cin[data-c="${i + 1}"]`); if (nx) nx.focus(); else checkChart(el.dataset.key); };
    const nextPyr = el => { const all = $$('.pyr-in', el.closest('.wbq')), i = all.indexOf(el); if (all[i + 1]) all[i + 1].focus(); else checkPyr(el.dataset.key); };
    sec0.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing && e.target.matches('.pyr-in')) { e.preventDefault(); nextPyr(e.target); } });
    sec0.addEventListener('kb-enter', e => { if (e.target.matches('.pyr-in')) nextPyr(e.target); });
    sec0.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.isComposing && e.target.matches('.wb-in')) { e.preventDefault(); check(e.target.dataset.key); } if (e.key === 'Enter' && !e.isComposing && e.target.matches('.wb-cin')) { e.preventDefault(); next(e.target); } });
    sec0.addEventListener('kb-enter', e => { if (e.target.matches('.wb-in')) check(e.target.dataset.key); if (e.target.matches('.wb-cin')) next(e.target); });
  }
  return { render, status };
})();
