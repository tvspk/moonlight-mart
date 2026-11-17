/* workbook_L29.js — Korean 3 Workbook, Lesson 29 (p.112–115, answer key p.141–142).
   Section I = match (9, letters a–i in the book). Section II = conjugation chart (Present / Past / Future / Present Progressive; no meaning
   column in the book → noMean). Section III = the steamed-rice passage with 12 underlined parts → one tf item per underlined part
   (sec.tfLabels: “Correct” / “Wrong”; a wrong one is then corrected by typing). The key also changes 끝나요 → 끝이에요 (not underlined; both
   are fine — shown as a note). Section IV dictation = WB Track 70, 71, 72 (sentence, then in parts; ASR matches the key).
   Forms come from forms_L29.js (generated, checked against the key). lenient off: 지어요 / 져요. */
(() => {
  const F = MM.forms[29], row = d => F.find(f => f.dict === d), why = MM.l29why;
  const C4 = ['Present', 'Past', 'Future', 'Present Progressive'];
  const cell = (d, k, wk) => { const f = row(d); return { ans: [f[k]], lenient: false, diag: f[wk].map(w => ({ p: w, note: why(d, w) })) }; };
  const cross = r => { r.cells.forEach((c, i) => r.cells.forEach((o, j) => { if (i !== j && o.ans[0] !== c.ans[0]) c.diag.push({ p: o.ans[0], note: `${o.ans[0]} is the ${C4[j]} form. This column wants the ${C4[i]}.` }); })); return r; };
  const chartRow = (n, d) => { const f = row(d);
    return cross({ n, dict: d, en: f.en, skill: f.irr === 'ㅅ' ? 'l29.form' : 'l29.reg',
      cells: [cell(d, 'hae', 'wrong'), cell(d, 'past', 'wrongPast'), cell(d, 'fut', 'wrongFut'), cell(d, 'prog', 'wrongProg')] }); };
  const ok = (n, s, u, skill) => ({ n, s, u, truth: true, skill });
  const bad = (n, s, u, right, extra, skill) => ({ n, s, u, truth: false, ans: [right], lenient: false, skill: skill || 'l29.form',
    fixTask: `Write the correct form of “${u}”.`, keyFix: right, diag: [{ p: u, note: 'That is the version in the passage — it is conjugated incorrectly.' }].concat(extra || []) });
  MM.workbook[29] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary',
        task: 'Match each Korean word (in its infinitive form) to its common English translation.',
        type: 'match', skill: 'l29.vocab',
        items: [
          { n: 1, ko: '웃다', en: 'to smile; to laugh' },
          { n: 2, ko: '씻다', en: 'to wash' },
          { n: 3, ko: '벗다', en: 'to take (clothes) off' },
          { n: 4, ko: '짓다', en: 'to make, to build, to compose' },
          { n: 5, ko: '긋다', en: 'to draw (a line)' },
          { n: 6, ko: '잇다', en: 'to connect, to link' },
          { n: 7, ko: '낫다', en: 'to heal, to recover; to be better (in comparison)' },
          { n: 8, ko: '붓다', en: 'to pour' },
          { n: 9, ko: '젓다', en: 'to stir (liquid)' },
        ],
      },
      {
        id: 'II', title: 'Section II – Conjugation Chart',
        task: 'Conjugate the following verbs into each tense.',
        type: 'chart', skill: 'l29.form', noMean: true, cellPh: '…',
        cols: C4,
        items: [
          chartRow(10, '웃다'), chartRow(11, '씻다'), chartRow(12, '벗다'), chartRow(13, '짓다'), chartRow(14, '긋다'),
          chartRow(15, '잇다'), chartRow(16, '낫다'), chartRow(17, '붓다'), chartRow(18, '젓다'),
        ],
      },
      {
        id: 'III', title: 'Section III – Comprehension',
        task: 'Read the following passage about how to make steamed rice. If the underlined phrases or words are conjugated incorrectly, correct them. (Here: one underlined part at a time — judge only the underlined part.)',
        type: 'tf', skill: 'l29.form', tfLabels: ['Correct', 'Wrong'], passageU: true,
        passage: ['* 밥 = steamed rice · 쌀 = rice · 손 = hand · 깨끗하다 = to be clean · 밥솥 = rice cooker · 넣다 = to put in · 취사 버튼 = “cook” button',
          '19. 밥 [짓는] 것은 전혀 [어렵지 않아요]. 오늘 아침에 저도 밥을 [짓었어요]. 먼저 쌀을 [씻어야 돼요]. 쌀을 [씻기 위해서] 물을 [붓으세요]. 물을 [붓은 다음에] 손으로 [젓으세요]. 쌀을 다 [씻었으면] 그 물만 버리세요. 쌀에 다시 깨끗한 물을 [붓어서] 밥솥에 넣으세요. 그리고 취사 버튼을 [눌르세요]. 그러면 끝나요. [쉽지 않아요]?'],
        passageNote: 'The answer key also writes 그러면 끝이에요 (“then it’s done”) instead of 끝나요 — that part is not underlined, and both are fine.',
        items: [
          ok('19a', '밥 [짓는] 것은 전혀 어렵지 않아요.', '짓는', 'l29.keep'),
          ok('19b', '밥 짓는 것은 전혀 [어렵지 않아요].', '어렵지 않아요'),
          bad('19c', '오늘 아침에 저도 밥을 [짓었어요].', '짓었어요', '지었어요', [{ p: '졌어요', note: why('짓다', '졌어요') }]),
          ok('19d', '먼저 쌀을 [씻어야 돼요].', '씻어야 돼요', 'l29.reg'),
          ok('19e', '쌀을 [씻기 위해서] 물을 붓으세요.', '씻기 위해서', 'l29.reg'),
          bad('19f', '쌀을 씻기 위해서 물을 [붓으세요].', '붓으세요', '부으세요', [{ p: '부세요', note: why('붓다', '부세요') }]),
          { ...bad('19g', '물을 [붓은 다음에] 손으로 젓으세요.', '붓은 다음에', '부은 다음에', [{ p: '분 다음에', note: why('붓다', '분') }, { p: '붓은', note: why('붓다', '붓은') }]),
            soft: [{ p: '부은', note: 'Accepted: 부은 다음에.' }] },
          bad('19h', '물을 붓은 다음에 손으로 [젓으세요].', '젓으세요', '저으세요', [{ p: '저세요', note: why('젓다', '저세요') }]),
          ok('19i', '쌀을 다 [씻었으면] 그 물만 버리세요.', '씻었으면', 'l29.reg'),
          bad('19j', '쌀에 다시 깨끗한 물을 [붓어서] 밥솥에 넣으세요.', '붓어서', '부어서', [{ p: '붜서', note: why('붓다', '붜서') }]),
          bad('19k', '그리고 취사 버튼을 [눌르세요].', '눌르세요', '누르세요', [{ p: '눌러세요', note: '누르다 is a 르 irregular (Lesson 24), but before -세요 the 르 stays: 누르세요.' }], 'l29.usage'),
          ok('19l', '그러면 끝나요. [쉽지 않아요]?', '쉽지 않아요'),
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 20, track: 'wb70', label: 'Track 70', ans: ['감기 다 나았어요?'], lenient: false, en: 'Did you recover completely from your cold?' },
          { n: 21, track: 'wb71', label: 'Track 71', ans: ['신발을 벗어 주세요.'], lenient: false, en: 'Please take your shoes off.' },
          { n: 22, track: 'wb72', label: 'Track 72', ans: ['그 문장에 밑줄 그었어요.'], lenient: false, en: 'I underlined the sentence.',
            soft: [{ p: '그 문장에 밑줄을 그었어요', note: 'Accepted. The recording and the key: 밑줄 그었어요.' }] },
        ],
      },
    ],
  };
})();
