/* workbook_L24.js — Korean 3 Workbook, Lesson 24 (p.95–97, answer key p.137–138).
   Section I = chart with a meaning field + 3 cells (-아/어/여요, -아/어/여서, -았/었/였어요); the book's example row is 다르다.
   Forms come from forms_L24.js (generated, checked against the key). Wrong forms get MM.l24why (game_L24.js).
   Section II = write (givenEn; the book's prompts in parentheses are kept: 벨, -고 …). Every answer uses a 르 verb with an ending from
   an earlier lesson: -고 (L2, 르 stays), -아서 (L7), -아도 (L20, built like -아서 → 불러도), -기 전에 (L10, stays), -는데 (L21, stays),
   -기 위해서 (L17, stays). Section III dictation = WB Track 58, 59 (whole sentences; ASR matches the key). lenient off: 골라요 / 고라요. */
(() => {
  const F = MM.forms[24], row = d => F.find(f => f.dict === d), why = MM.l24why;
  const cell = (d, k, wk) => { const f = row(d); return { ans: [f[k]], lenient: false, diag: f[wk].map(w => ({ p: w, note: why(d, w) })) }; };
  const L3 = ['-아/어/여요', '-아/어/여서', '-았/었/였어요'];
  const cross = r => { r.cells.forEach((c, i) => r.cells.forEach((o, j) => { if (i !== j) c.diag.push({ p: o.ans[0], note: `${o.ans[0]} is the ${L3[j]} form. This column wants ${L3[i]}.` }); })); return r; };
  const chartRow = (n, d, en) => cross({ n, dict: d, en, cells: [cell(d, 'hae', 'wrong'), cell(d, 'seo', 'wrongSeo'), cell(d, 'past', 'wrongPast')] });
  /* a wrong form w of verb d inside a sentence s (where the right form is f[k]) */
  const dg = (s, d, k, wk) => { const f = row(d); return f[wk].map(w => ({ p: s.replace(f[k], w), note: why(d, w) })); };
  MM.workbook[24] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary and Comprehension',
        task: 'Fill in the chart as the example demonstrates: the English definition, then the three forms.',
        example: { given: '다르다', ko: '달라요 · 달라서 · 달랐어요', en: 'to be different' },
        type: 'chart', skill: 'l24.form', cellPh: '…',
        cols: L3,
        items: [
          chartRow(1, '기르다', 'to raise'),
          chartRow(2, '고르다', 'to choose'),
          chartRow(3, '누르다', 'to press, to push'),
          chartRow(4, '마르다', 'to dry (up); to be skinny'),
          chartRow(5, '모르다', 'to not know'),
          chartRow(6, '바르다', 'to rub, to put on'),
          chartRow(7, '부르다', 'to call, to address; to sing'),
          chartRow(8, '빠르다', 'to be fast'),
          chartRow(9, '서두르다', 'to hurry'),
          chartRow(10, '찌르다', 'to stab; to stick'),
        ],
      },
      {
        id: 'II', title: 'Section II – Comprehension',
        task: 'Translate the following sentences to Korean using one of the words in Section I and the prompts in parentheses.',
        type: 'write', givenEn: true, skill: 'l24.usage',
        items: [
          { n: 11, given: 'Push the bell and wait. (벨, -고)', ans: ['벨을 누르고 기다리세요.'], lenient: false, skill: 'l24.keep',
            soft: [{ p: '벨(을|) 누르고 (좀 |)기다리세요', note: 'Accepted.' }, { p: '벨(을|) 누르고 기다려 주세요', note: 'Accepted (기다려 주세요 = please wait, a little softer).' }],
            diag: dg('벨을 누르고 기다리세요', '누르다', 'go', 'wrongGo').concat([{ p: '벨(을|) 눌러서 기다리세요', note: 'The prompt asks for -고 (and then). 르 stays before -고: 누르고.' }]), en: 'Push the bell and wait.' },
          { n: 12, given: 'It was too fast so I couldn’t see it. (못, -아/어/여서)', ans: ['너무 빨라서 못 봤어요.'], lenient: false, skill: 'l24.form',
            soft: [{ p: '(그게 |그거 |)너무 빨라서 (그거 |)못 봤어요', note: 'Accepted.' }],
            diag: dg('너무 빨라서 못 봤어요', '빠르다', 'seo', 'wrongSeo').concat([{ p: '너무 빨랐어서 못 봤어요', note: 'No past tense before -아서 (Lesson 7): 빨라서. The tense goes on the last verb: 못 봤어요.' }, { p: '너무 빨라서 안 봤어요', note: '안 봤어요 = I didn’t look (by choice). Couldn’t = 못 봤어요.' }]), en: 'It was too fast so I couldn’t see it.' },
          { n: 13, given: 'Even though I call (him), there is no answer. (대답, -아/어/여도)', ans: ['불러도 대답이 없어요.'], lenient: false, skill: 'l24.form',
            soft: [{ p: '(제가 |)(그 사람을 |)불러도 대답(이|) 없어요', note: 'Accepted.' }, { p: '(제가 |)(그 사람을 |)불러도 (대답을 |)대답 안 해요', note: 'Accepted (he doesn’t answer). The key: 대답이 없어요.' }],
            diag: dg('불러도 대답이 없어요', '부르다', 'do', 'wrongDo').concat([{ p: '불러서 대답이 없어요', note: '-아서 = so / because. Even though = -아도 (Lesson 20): 불러도.' }, { p: '부르도 대답이 없어요', note: '-아/어도 is built like -아/어서: 부르 → 불러 → 불러도.' }]), en: 'Even though I call (him), there is no answer.' },
          { n: 14, given: 'I went out of my house before my hair was dry. (나오다, -기 전에)', ans: ['머리가 마르기 전에 집을 나왔어요.'], lenient: false, skill: 'l24.keep',
            soft: [{ p: '머리(가|) (다 |)마르기 전에 (집을|집에서) 나왔어요', note: 'Accepted.' }],
            diag: dg('머리가 마르기 전에 집을 나왔어요', '마르다', 'gi', 'wrongGi').concat([{ p: '머리(가|) 말랐기 전에 (집을|집에서) 나왔어요', note: 'No past before -기 전에 (Lesson 10): 마르기 전에.' }]), en: 'I went out of my house before my hair was dry.' },
          { n: 15, given: 'I don’t know (about it) well, but why? (잘, -(으)ㄴ/는데)', ans: ['저는 잘 모르는데, 왜요?'], lenient: false, skill: 'l24.keep',
            soft: [{ p: '(저는 |저도 |제가 |)잘 모르는데 왜요', note: 'Accepted.' }],
            diag: dg('저는 잘 모르는데 왜요', '모르다', 'nde', 'wrongNde').concat([{ p: '(저는 |)잘 모른데 왜요', note: '모르다 is an action verb: -는데 (Lesson 21) → 모르는데.' }, { p: '(저는 |)잘 몰라요 왜요', note: 'Join the two parts with -는데: 모르는데, 왜요?' }]), en: 'I don’t know (about it) well, but why?' },
          { n: 16, given: 'I asked many people in order to choose a good car. (많은, -기 위해서)', ans: ['좋은 차를 고르기 위해서 많은 사람들한테 물어봤어요.'], lenient: false, skill: 'l24.keep',
            soft: [{ p: '좋은 차(를|) 고르기 위해(서|) 많은 (사람들|사람)(한테|에게) 물어봤어요', note: 'Accepted.' }, { p: '많은 (사람들|사람)(한테|에게) 좋은 차(를|) 고르기 위해(서|) 물어봤어요', note: 'Accepted.' }],
            diag: dg('좋은 차를 고르기 위해서 많은 사람들한테 물어봤어요', '고르다', 'gi', 'wrongGi').concat([{ p: '좋은 차(를|) 골라서 많은 (사람들|사람)(한테|에게) 물어봤어요', note: '골라서 = I chose and then. In order to = -기 위해서 (Lesson 17): 고르기 위해서.' }]), en: 'I asked many people in order to choose a good car.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 17, track: 'wb58', label: 'Track 58', ans: ['저희 가족은 강아지 두 마리를 기르고 있어요.'], lenient: false, en: 'My family is raising two puppies.' },
          { n: 18, track: 'wb59', label: 'Track 59', ans: ['너무 서두르지 마세요.'], lenient: false, en: 'Don’t rush too much.' },
        ],
      },
    ],
  };
})();
