/* tb.js — Textbook part: pinned lesson-audio player, lesson text (read only), end-of-lesson exercises, summary.
   The sentence-gap code is kept but unused (fill = false). */
'use strict';
MM.TB = (() => {
  const { esc, $, $$ } = MM.U;
  const inl = s => esc(s).replace(/«(.+?)»/g, '<span class="ko-in">$1</span>');

  function gapsOf(n) {
    const out = [];
    for (const b of MM.textbook[n].blocks) {
      if (b.t === 'sent' && b.gap) out.push(b);
      if (b.t === 'ex') b.items.forEach(i => i.gap && out.push(i));
      if (b.t === 'dialogue') b.lines.forEach(l => l.gap && out.push(l));
    }
    return out;
  }
  /* L31 (review): several exercise blocks per page (comprehension, vocabulary groups, grammar ladder) */
  function exBlocks(n) { return MM.textbook[n].blocks.filter(b => b.t === 'exercises'); }
  function exOf(n) { return exBlocks(n).flatMap(b => b.items); }
  const blockOf = (n, id) => exBlocks(n).find(b => b.items.some(i => i.id === id));
  const secId = b => 'exs' + (b.id ? '-' + b.id : '');
  function status(n) {
    // only the end-of-lesson exercises count (sentence gaps were removed at the user's request)
    const L = MM.LS(n).tb, x = exOf(n);
    const xd = x.filter(i => L.ex[i.id]).length;
    if (xd === x.length) return 'done';
    return xd || L.played ? 'wip' : 'none';
  }

  /* ---------- player ---------- */
  /* L31: MM.audio[n].lessons = several long recordings (review: dialogue / vocabulary / grammar) → a switcher in the player */
  function curLong(n) { const A = MM.audio[n]; if (!A.lessons) return A.lesson; const L = MM.LS(n).tb; return A.lessons[Math.min(L.pl || 0, A.lessons.length - 1)]; }
  function playerHtml(n) {
    const a = curLong(n), A = MM.audio[n], k = MM.LS(n).tb.pl || 0;
    return `<div class="player" id="lp" aria-label="Lesson audio">${A.lessons ? `<div class="pl-switch" role="group" aria-label="Recording">${A.lessons.map((x, i) => `<button type="button" data-pl="${i}" class="${i === k ? 'on' : ''}">${esc(x.short)}</button>`).join('')}</div>` : ''}
      <button type="button" class="pl-play" id="plPlay" aria-label="Play">▶</button>
      <div class="pl-mid">
        <div class="pl-title">${esc(a.title)}</div>
        <input type="range" id="plSeek" min="0" max="1000" value="0" aria-label="Position">
        <div class="pl-row"><span class="pl-time" id="plTime">0:00 / –:––</span>
          <span class="pl-btns"><button type="button" data-skip="-10">−10 s</button><button type="button" data-skip="10">+10 s</button>
          <span class="pl-rate">${[0.75, 1, 1.25].map(r => `<button type="button" data-rate="${r}" class="${r === 1 ? 'on' : ''}">${r}×</button>`).join('')}</span></span></div>
      </div></div>`;
  }
  function bindPlayer(n) {
    const a = MM.AM.lesson, src = curLong(n).src;
    if (!a.src.endsWith(src)) { a.src = src; a.preload = 'metadata'; }
    const play = $('#plPlay'), seek = $('#plSeek'), time = $('#plTime');
    const upd = () => {
      if (!document.body.contains(play)) return;
      play.textContent = a.paused ? '▶' : '❚❚'; play.setAttribute('aria-label', a.paused ? 'Play' : 'Pause');
      const d = isFinite(a.duration) ? a.duration : 0;
      time.textContent = MM.U.fmtTime(a.currentTime) + ' / ' + (d ? MM.U.fmtTime(d) : '–:––');
      if (!seek.matches(':active')) seek.value = d ? Math.round(a.currentTime / d * 1000) : 0;
    };
    /* one listener set on the shared audio element (re-rendering the textbook used to add a new set every time) */
    if (!a._mmUpd) { a._mmUpd = () => a._mmCur && a._mmCur(); ['timeupdate', 'play', 'pause', 'loadedmetadata', 'ended'].forEach(ev => a.addEventListener(ev, a._mmUpd)); }
    a._mmCur = upd;
    play.addEventListener('click', () => {
      if (a.paused) { a.play().catch(err => { if (!err || err.name !== 'AbortError') MM.ui.toast('The audio could not start.'); }); const L = MM.LS(n).tb; if (!L.played) { L.played = 1; MM.save(); MM.app.refreshTabs(); } } else a.pause();
    });
    seek.addEventListener('input', () => { if (isFinite(a.duration)) a.currentTime = seek.value / 1000 * a.duration; });
    $$('#lp [data-skip]').forEach(b => b.addEventListener('click', () => { a.currentTime = Math.max(0, a.currentTime + +b.dataset.skip); }));
    $$('#lp [data-rate]').forEach(b => b.addEventListener('click', () => { a.playbackRate = +b.dataset.rate; $$('#lp [data-rate]').forEach(x => x.classList.toggle('on', x === b)); }));
    $$('#lp [data-rate]').forEach(x => x.classList.toggle('on', +x.dataset.rate === a.playbackRate));
    $$('#lp [data-pl]').forEach(b => b.addEventListener('click', () => {
      const L = MM.LS(n).tb; if ((L.pl || 0) === +b.dataset.pl) return;
      a.pause(); L.pl = +b.dataset.pl; MM.save();
      const lp = $('#lp'), tmp = document.createElement('div'); tmp.innerHTML = playerHtml(n); lp.replaceWith(tmp.firstElementChild); bindPlayer(n);
    }));
    upd();
  }

  /* ---------- sentences with gaps ---------- */
  function sentHtml(s, fill, st) {
    if (s.dir) return `<p class="dlg-dir">${esc(s.dir)}</p>`; /* L31: stage direction inside a dialogue */
    const en = Array.isArray(s.en) ? s.en : [s.en];
    let ko;
    if (fill && s.gap) {
      const i = s.ko.indexOf(s.gap);
      const before = s.ko.slice(0, i), after = s.ko.slice(i + s.gap.length);
      if (st === 'ok' || st === 'rev') ko = `${esc(before)}<mark class="gap-done ${st}">${esc(s.gap)}</mark>${esc(after)}`;
      else ko = `${esc(before)}<input class="kin gap ko" id="g-${s.id}" data-gid="${s.id}" autocomplete="off" spellcheck="false" style="width:${Math.max(3, Array.from(s.gap).length * 1.25 + 1)}em" aria-label="Missing part">${esc(after)}`;
    } else ko = esc(s.ko);
    const showEn = fill && s.gap;
    const clip = s.clip ? `<button type="button" class="trk trk-mini" data-trk="${esc(MM.audio[MM.S.cur.lesson].tb[s.clip[0]])}" data-from="${s.clip[1]}" data-to="${s.clip[2]}" aria-label="Play this sentence"><span class="trk-ic">▶</span></button>` : '';
    return `<div class="sent ${fill && s.gap ? 'is-fill' : ''}" data-sid="${s.id}">
      ${s.sp ? `<span class="sp">${esc(s.sp)}</span>` : ''}
      <div class="sent-body"><p class="ko sent-ko">${s.arrow ? '<span class="arrow" aria-label="becomes">→</span> ' : ''}${ko}</p>
      ${showEn ? `<p class="sent-hint">${en.map(esc).join('<br>')}</p>` : `<button type="button" class="link tr" aria-expanded="false">EN</button><p class="sent-en" hidden>${en.map(esc).join('<br>')}</p>`}
      ${fill && s.gap && st !== 'ok' && st !== 'rev' ? `<div class="gap-tools"><button type="button" class="btn btn-sm gap-check" data-gid="${s.id}">Check</button><button type="button" class="link gap-rev" data-gid="${s.id}">Show answer</button><span class="gap-fb" aria-live="polite"></span></div>` : ''}
      ${fill && st === 'rev' ? '<span class="chip chip-rev">revealed</span>' : ''}${st === 'ok' && fill ? '<span class="chip chip-ok">✓</span>' : ''}
      </div>${clip}</div>`;
  }

  /* Word Builder lessons (L23, L30): word list — parts (“학 + 생 (person)”), the word + hanja, English; the English is
     printed in the book, so it is shown (not hidden behind EN). it.clip = [track, from, to] (each word is read twice). */
  function wordsHtml(b, n) {
    return `<div class="wbld">${b.items.map(w => {
      const clip = w.clip ? `<button type="button" class="trk trk-mini" data-trk="${esc(MM.audio[n].tb[w.clip[0]])}" data-from="${w.clip[1]}" data-to="${w.clip[2]}" aria-label="Play ${esc(w.ko)}"><span class="trk-ic">▶</span></button>` : '';
      return `<div class="wbld-row"><div class="wbld-body">${w.parts ? `<p class="wbld-parts ko">${esc(w.parts)}</p>` : ''}<p class="wbld-word"><span class="ko">${esc(w.ko)}</span>${w.hanja ? ` <span class="hanja">${esc(w.hanja)}</span>` : ''}</p><p class="wbld-en">= ${esc(w.en)}</p></div>${clip}</div>`;
    }).join('')}</div>`;
  }

  function render(main, n) {
    const T = MM.textbook[n], L = MM.LS(n).tb, fill = false;
    let h = playerHtml(n);
    h += '<article class="tb-text">';
    for (const b of T.blocks) {
      if (b.t === 'h') h += `<header class="tb-h"><p class="eyebrow">${esc(b.eyebrow || 'Lesson ' + n)}</p><h1 class="tb-title"><span class="ko">${esc(b.ko)}</span><span class="tb-sub">${esc(b.text.split('·')[1] || '')}</span></h1></header>`;
      else if (b.t === 'h2') h += `<h2 class="tb-h2">${esc(b.text)}</h2>`;
      else if (b.t === 'p') h += `<p class="tb-p">${inl(b.text)}</p>`;
      else if (b.t === 'note') h += `<aside class="sticky-note"><b>${esc(b.label)}:</b> ${inl(b.text)}</aside>`;
      else if (b.t === 'meaning') h += `<div class="meaning"><span class="lbl">${esc(b.label)}</span><span class="ko meaning-ko">${esc(b.ko)}</span><span class="meaning-en">= ${inl(b.text)}</span></div>`;
      else if (b.t === 'track') h += `<button type="button" class="trk" data-trk="${esc(MM.audio[n].tb[b.id])}"${b.from != null ? ` data-from="${b.from}" data-to="${b.to}"` : ''}><span class="trk-ic">▶</span> ${esc(b.label)}</button>`;
      else if (b.t === 'sent') h += sentHtml(b, fill, L.g[b.id]);
      else if (b.t === 'words') h += wordsHtml(b, n);
      else if (b.t === 'ex') h +=`<div class="ex"><span class="lbl">Ex)</span>${b.items.map(i => sentHtml(i, fill, L.g[i.id])).join('')}</div>`;
      else if (b.t === 'dialogue' && b.gate && !gateOpen(n, b)) h += `<div class="dialogue dlg-locked"><p class="dlg-lock-t">🔒 Transcript hidden</p><p class="dlg-lock-d">${esc(b.gateText || 'Listen first, then answer the questions above. The Korean script and the translation open after that.')}</p><button type="button" class="link dlg-open" data-dlg="${esc(b.id)}">Show the transcript now</button></div>`;
      else if (b.t === 'dialogue') h += `<div class="dialogue">${b.title ? `<p class="dlg-title">${esc(b.title)}</p>` : ''}<button type="button" class="trk" data-trk="${esc(MM.audio[n].tb[b.track])}"><span class="trk-ic">▶</span> ${esc(b.trackLabel || 'Track ' + b.track + ' · dialogue')}</button>${b.lines.map(l => sentHtml(l, fill, L.g[l.id])).join('')}</div>`;
      else if (b.t === 'exercises') h += exercisesHtml(b, L);
    }
    h += '</article>';
    h += summaryHtml(n);
    main.innerHTML = `<section class="tb">${h}</section>`;
    bindPlayer(n);
    bind(main.firstElementChild, n);
  }

  /* L31 extras: item tag (“L7”: the lesson it reviews), clip [track, from, to] (▶ after it is answered), block.reveal (Show answer
     at any time), block.help (one line under the title), block.src (source line), choicesEn (English buttons, done line shows x.right) */
  function exercisesHtml(b, L) {
    const n = MM.S.cur.lesson;
    const clipBtn = x => x.clip ? `<button type="button" class="trk trk-mini" data-trk="${esc(MM.audio[n].tb[x.clip[0]])}" data-from="${x.clip[1]}" data-to="${x.clip[2]}" aria-label="Play the answer"><span class="trk-ic">▶</span></button>` : '';
    const tag = x => x.tag ? ` <span class="ltag">${esc(x.tag)}</span>` : '';
    const done = b.items.filter(x => L.ex[x.id]).length;
    return `<section class="exs" id="${secId(b)}"><h2 class="tb-h2">${esc(b.title)}${b.items.length > 6 ? ` <span class="exs-count">${done}/${b.items.length}</span>` : ''}</h2>${b.help ? `<p class="exs-help">${inl(b.help)}</p>` : ''}
      ${b.items.map((x, i) => {
        const st = L.ex[x.id];
        if (st && x.choicesEn) return `<div class="exq" data-xid="${x.id}"><p class="exq-q"><span class="num">${x.num || i + 1}.</span> ${esc(x.q)}</p><p class="exq-done ${st === 'ok' ? 'ok' : 'rev'}">${esc(x.right)} ${st === 'ok' ? '<span class="chip chip-ok">✓</span>' : '<span class="chip chip-rev">2nd try</span>'}</p>${x.why ? `<p class="exq-hint">${inl(x.why)}</p>` : ''}</div>`;
        return `<div class="exq ${st ? 'is-done' : ''}" data-xid="${x.id}"><p class="exq-q"><span class="num">${x.num || i + 1}.</span> ${esc(x.q)}${tag(x)}</p>
          ${x.hint ? `<p class="exq-hint">${inl(x.hint)}</p>` : ''}${x.ko ? `<p class="exq-ko ko">${esc(x.ko).replace(/___/g, '<span class="blank">　　　</span>')}</p>` : ''}
          ${st && x.choices ? `<p class="exq-done ${st === 'ok' ? 'ok' : 'rev'}">${x.choicesKo ? `<span class="ko">${esc(x.right)}</span>${x.why ? ' ' + esc(x.why) : ''}` : `<span class="ko">${esc(x.ans[0])}</span> = ${esc(x.right)}`} ${st === 'ok' ? '<span class="chip chip-ok">✓</span>' : '<span class="chip chip-rev">2nd try</span>'}</p>`
            : st ? `<p class="exq-done ${st === 'ok' ? 'ok' : 'rev'}"><span class="ko">${esc(x.full || (st === 'ok' ? (L.exv && L.exv[x.id]) || MM.expand(x.ans[0])[0] : MM.expand(x.ans[0])[0]))}</span> ${st === 'ok' ? '<span class="chip chip-ok">✓</span>' : '<span class="chip chip-rev">answer shown</span>'}${clipBtn(x)}</p>${st === 'ok' && x.full && L.exv && L.exv[x.id] && MM.norm(L.exv[x.id]) !== MM.norm(x.full) ? `<p class="exq-hint">You wrote: <span class="ko">${esc(L.exv[x.id])}</span></p>` : ''}${x.after ? `<p class="exq-hint">${inl(x.after)}</p>` : ''}`
            : x.choices ? `<div class="ex-choices">${x.choices.map((c, k) => `<button type="button" class="opt ex-ch" data-xid="${x.id}" data-v="${esc(c)}"><span class="ch-l">${'abcdefg'[k]}.</span> ${x.choicesKo ? `<span class="ko">${esc(c)}</span>` : esc(c)}</button>`).join('')}</div><div class="ex-fb" aria-live="polite"></div>`
            : `<div class="type-row"><input class="kin ko ex-in" id="x-${x.id}" data-xid="${x.id}" autocomplete="off" spellcheck="false" aria-label="Answer ${i + 1}"${x.ph ? ` placeholder="${esc(x.ph)}"` : ''}><button type="button" class="btn btn-sm ex-check" data-xid="${x.id}">Check</button></div>
               <div class="ex-fb" aria-live="polite">${b.reveal ? `<button type="button" class="link ex-rev" data-xid="${x.id}">Show answer</button>` : ''}</div>`}
        </div>`;
      }).join('')}<p class="src-note">${b.src ? esc(b.src) : `Answers: textbook p.${esc(MM.lessons[MM.S.cur.lesson].pages.tbKey)}`}</p></section>`;
  }

  function summaryHtml(n) {
    const L = MM.LS(n).tb, x = exOf(n);
    const xok = x.filter(i => L.ex[i.id] === 'ok').length, xrev = x.filter(i => L.ex[i.id] === 'rev').length;
    return `<div class="rcpt summary"><div class="rcpt-head"><span class="rcpt-mark">${esc(((MM.lessons[n].tabs || [])[0] || 'Textbook').toUpperCase())} · L${n}</span><span>${status(n) === 'done' ? 'COMPLETE' : 'IN PROGRESS'}</span></div>
      <div class="rcpt-rows">
        <p><span>Exercises correct</span><b>${xok} / ${x.length}</b></p>
        <p><span>Exercises shown</span><b>${xrev}</b></p>
      </div><div class="barcode" aria-hidden="true"></div></div>
      <button type="button" class="btn btn-go" id="toWb">Continue to ${esc((MM.lessons[n].tabs || [])[1] || 'Workbook')} ▸</button>`;
  }

  function bind(main, n) {
    const L = MM.LS(n).tb;
    MM.ui.barcodes(main);
    $$('[data-mode]', main).forEach(b => b.addEventListener('click', () => { L.mode = b.dataset.mode; MM.save(); const y = window.scrollY; render($('#main'), n); if (b.closest('.mode-bar')) window.scrollTo(0, y); else $('.mode-bar').scrollIntoView(); }));
    $$('.tr', main).forEach(b => b.addEventListener('click', () => { const p = b.nextElementSibling; p.hidden = !p.hidden; b.setAttribute('aria-expanded', String(!p.hidden)); b.textContent = p.hidden ? 'EN' : 'hide'; }));
    $('#toWb').addEventListener('click', () => MM.app.go('wb'));
    const allItems = gapsOf(n);
    const checkGap = id => {
      const s = allItems.find(i => i.id === id), inp = $('#g-' + id); if (!inp) return;
      const res = MM.grade(inp.value, { ans: [s.gap], lenient: false });
      const fb = inp.closest('.sent').querySelector('.gap-fb');
      if (res.kind === 'empty' || res.kind === 'latin') { fb.textContent = res.note; return; }
      MM.record({ id: `tb${n}.${id}`, skill: /\s/.test(s.gap) ? `l${n}.form` : `l${n}.irr`, lesson: n }, res.ok, { base: 50, noDay: !!inp.dataset.tried }); inp.dataset.tried = '1';
      if (res.ok) { L.g[id] = 'ok'; MM.save(); MM.ui.sound(true); MM.kbd.hide(); rerenderSent(id); }
      else { inp.classList.remove('shake'); void inp.offsetWidth; inp.classList.add('shake'); fb.textContent = res.note || 'Not quite. Try again or show the answer.'; MM.ui.sound(false); }
      MM.ui.refreshWon();
    };
    const rerenderSent = id => {
      const el = main.querySelector(`.sent[data-sid="${id}"]`), s = allItems.find(i => i.id === id);
      el.outerHTML = sentHtml(s, true, L.g[id]);
      const y = main.querySelector('.mode-count'); const g = gapsOf(n); if (y) y.textContent = g.filter(i => L.g[i.id]).length + '/' + g.length + ' gaps';
      const sm = main.querySelector('.summary'); if (sm) { sm.nextElementSibling && sm.nextElementSibling.matches('.btn-ghost') && sm.nextElementSibling.remove(); }
      refreshSummary(main, n);
      MM.app.refreshTabs();
    };
    main.addEventListener('click', e => {
      const tk = e.target.closest('.trk');
      if (tk) { const f = tk.dataset.from, t = tk.dataset.to; return MM.AM.playTrack(tk.dataset.trk, tk, 1, f != null ? +f : null, t != null ? +t : null); }
      const c = e.target.closest('.gap-check'); if (c) return checkGap(c.dataset.gid);
      const r = e.target.closest('.gap-rev'); if (r) { L.g[r.dataset.gid] = 'rev'; MM.record({ id: `tb${n}.${r.dataset.gid}`, lesson: n }, false, { noMistake: true, noDay: true }); MM.save(); rerenderSent(r.dataset.gid); return; }
      const xc = e.target.closest('.ex-check'); if (xc) return checkEx(xc.dataset.xid);
      const ch = e.target.closest('.ex-ch');
      if (ch && !ch.disabled) {
        const x = exOf(n).find(i => i.id === ch.dataset.xid), ok = ch.dataset.v === x.right, box = ch.closest('.exq');
        const first = !box.dataset.missed;
        if (first) MM.record({ id: `tbx${n}.${x.id}`, skill: x.skill || `l${n}.vocab`, lesson: n }, ok, { base: 40 });
        MM.ui.sound(ok); MM.ui.refreshWon();
        if (ok) { L.ex[x.id] = first ? 'ok' : 'rev'; MM.save(); redrawEx(x.id); return; }
        box.dataset.missed = '1'; ch.classList.add('is-bad'); ch.disabled = true;
        box.querySelector('.ex-fb').textContent = x.wrongNote || `Not “${ch.dataset.v}”. Try another one.`;
        return;
      }
      const xr = e.target.closest('.ex-rev'); if (xr) { L.ex[xr.dataset.xid] = 'rev'; MM.save(); redrawEx(xr.dataset.xid); return; }
      const dl = e.target.closest('.dlg-open'); if (dl) { L.open = L.open || {}; L.open[dl.dataset.dlg] = 1; MM.save(); const y = window.scrollY; render($('#main'), n); window.scrollTo(0, y); }
    });
    main.addEventListener('keydown', e => {
      if (e.key !== 'Enter' || e.isComposing) return;
      if (e.target.matches('input.gap')) { e.preventDefault(); checkGap(e.target.dataset.gid); }
      if (e.target.matches('input.ex-in')) { e.preventDefault(); checkEx(e.target.dataset.xid); }
    });
    main.addEventListener('kb-enter', e => {
      if (e.target.matches('input.gap')) checkGap(e.target.dataset.gid);
      if (e.target.matches('input.ex-in')) checkEx(e.target.dataset.xid);
    });
    const checkEx = id => {
      const x = exOf(n).find(i => i.id === id), inp = $('#x-' + id), fb = inp.closest('.exq').querySelector('.ex-fb');
      const res = MM.grade(inp.value, x);
      if (res.kind === 'empty' || res.kind === 'latin') { fb.textContent = res.note; return; }
      MM.record({ id: `tbx${n}.${id}`, skill: (MM.lessons[n].review && x.skill) || `l${n}.form`, lesson: n }, res.ok, { base: 50, noDay: !!inp.dataset.tried }); inp.dataset.tried = '1';
      if (res.ok) { L.ex[id] = 'ok'; L.exv = L.exv || {}; L.exv[id] = MM.norm(inp.value); MM.save(); MM.ui.sound(true); MM.kbd.hide(); if (res.note) MM.ui.toast(res.note); redrawEx(id); }
      else { fb.innerHTML = `${esc(res.note || 'Not quite.')} <button type="button" class="link ex-rev" data-xid="${id}">Show answer</button>`; MM.ui.sound(false); }
      MM.ui.refreshWon();
    };
    const redrawEx = id => {
      const b = blockOf(n, id), sec = $('#' + secId(b));
      // a gated dialogue opens when its question block is finished: redraw the whole page then
      const gated = MM.textbook[n].blocks.some(d => d.t === 'dialogue' && d.gate === b.id) && b.items.every(i => L.ex[i.id]);
      if (gated) { const y = window.scrollY; render($('#main'), n); window.scrollTo(0, y); MM.app.refreshTabs(); return; }
      const tmp = document.createElement('div'); tmp.innerHTML = exercisesHtml(b, L); sec.replaceWith(tmp.firstElementChild); MM.kbd.applyMode(); refreshSummary(main, n); MM.app.refreshTabs();
    };
  }
  function gateOpen(n, d) { const L = MM.LS(n).tb, g = exBlocks(n).find(b => b.id === d.gate); return (L.open && L.open[d.id]) || (g && g.items.every(i => L.ex[i.id])); }
  function refreshSummary(main, n) {
    const sm = main.querySelector('.summary'); if (!sm) return;
    const tmp = document.createElement('div'); tmp.innerHTML = summaryHtml(n);
    sm.replaceWith(tmp.querySelector('.summary')); MM.ui.barcodes(main);
  }
  return { render, status, gapsOf };
})();
