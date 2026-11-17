/* workbook_L11.js — Korean 3 Workbook, Lesson 11 (p.49–52, answer key p.127–128).
   Section I match (10 words, 2 rounds of 5). Section II 'chart' without a meaning field (sec.noMean): present / past / future,
   row 1a is the book's example. Section III 'conj': noun form -(으)ㄴ/는 것 + English (compared loosely, never failed).
   Section IV 'chart': -(으)면 / -고 / -아/어/여서 for three ㅂ-irregular and three regular verbs. Section V dictation:
   WB Track 25, 26, 27 (whole sentences). Forms come from the key and match tools/gen_forms.py 11.
   lenient (one-jamo typo) is off: 어렵어요 / 어려워요 is exactly the point of the lesson. */
(() => {
  const F = MM.forms[11], row = d => F.find(f => f.dict === d);
  const cell = (ans, wrong, note) => ({ ans: [ans], lenient: false, diag: wrong.filter(w => w !== ans).map(w => ({ p: w, note: note(w, ans) })) });
  /* Section II: present / past / future */
  const tense = (n, d) => {
    const f = row(d), wa = '와 is only for 돕다 (ㅗ before ㅂ); everything else takes 워';
    const notes = [
      [a => `ㅂ + vowel ending: ㅂ → 우 → ${a}.`, a => `${wa}: ${a}.`, a => `ㅂ becomes 우, it does not just disappear: ${a}.`],
      [a => `ㅂ + 았/었: ㅂ → 우 → ${a}.`, a => `${wa}: ${a}.`, a => `Past = the 해요 form + ㅆ: ${a}.`],
      [a => `-을 starts with a vowel: ㅂ → 우 → ${a}.`, a => `ㅂ becomes 우: ${a}.`, a => `ㅂ becomes 우, then ㄹ: ${a}.`],
    ];
    const c = (k, wk, i) => ({ ans: [f[k]], lenient: false, diag: f[wk].map((w, j) => ({ p: w, note: notes[i][j](f[k]) })) });
    return { n: n + 'a', dict: d, en: f.en, cells: [c('hae', 'wrong', 0), c('past', 'wrongPast', 1), c('fut', 'wrongFut', 2)] };
  };
  /* Section IV: -(으)면 / -고 / -아/어/여서 */
  const link = (n, d) => {
    const f = row(d), keep = f.irr === 'keep';
    const why = col => (w, a) => col === 'go' ? `-고 starts with a consonant and goes straight onto the stem; ㅂ stays: ${a}.`
      : keep ? `${d} is one of the exceptions: its ㅂ never changes → ${a}.`
      : col === 'go' ? `-고 starts with a consonant, so ㅂ stays: ${a}.` : `-${col === 'myeon' ? '으면' : '어서'} starts with a vowel: ㅂ → 우 → ${a}.`;
    return { n, dict: d, en: f.en, cells: [cell(f.myeon, f.wrongMyeon, why('myeon')), cell(f.go, f.wrongGo, why('go')), cell(f.seo, f.wrongSeo, why('seo'))] };
  };
  /* Section III: noun form */
  const noun = (n, d, en, enAlt) => {
    const f = row(d), act = f.kind === 'act';
    return { n, dict: d, ans: [f.geot], en, enAlt: enAlt || [], lenient: false,
      diag: f.wrongGeot.map(w => ({ p: w, note: act ? `${d} is an action verb: stem + 는 것, and -는 starts with a consonant, so ㅂ stays → ${f.geot}.` : `${d} is a descriptive verb: stem + (으)ㄴ 것. -은 starts with a vowel: ㅂ → 우 + ㄴ → ${f.geot}.` })) };
  };
  /* a form from another column of the same row gets “that is the … form” */
  const cross = (r, labels) => { r.cells.forEach((c, i) => r.cells.forEach((o, j) => { if (i !== j) c.diag.push({ p: o.ans[0], note: `${o.ans[0]} is the ${labels[j]} form. This column wants the ${labels[i]} form.` }); })); return r; };
  const T3 = ['present tense', 'past tense', 'future tense'], L3 = ['-(으)면', '-고', '-아/어/여서'];
  MM.workbook[11] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary',
        task: 'Translate each word to English, then write it in your preferred language (if not English). Here: match each word to its meaning.',
        type: 'match',
        items: [
          { n: 1, ko: '돕다', en: 'to help' },
          { n: 2, ko: '어렵다', en: 'to be difficult' },
          { n: 3, ko: '아름답다', en: 'to be beautiful' },
          { n: 4, ko: '귀엽다', en: 'to be cute' },
          { n: 5, ko: '맵다', en: 'to be spicy' },
          { n: 6, ko: '쉽다', en: 'to be easy' },
          { n: 7, ko: '덥다', en: 'to be hot (weather)' },
          { n: 8, ko: '굽다', en: 'to bake' },
          { n: 9, ko: '눕다', en: 'to lie down' },
          { n: 10, ko: '밉다', en: 'to hate; to be dislikeable' },
        ],
      },
      {
        id: 'II', title: 'Section II – Fill in the chart',
        task: 'Using the verbs from Section I, fill in the chart. The first one has been done for you as an example.',
        example: { given: '돕다', ko: '도와요 · 도왔어요 · 도울 거예요', en: 'present · past · future' },
        type: 'chart', skill: 'l11.form', noMean: true, cellPh: '…',
        cols: ['Present tense', 'Past tense', 'Future tense'],
        items: [[2, '어렵다'], [3, '아름답다'], [4, '귀엽다'], [5, '맵다'], [6, '쉽다'], [7, '덥다'], [8, '굽다'], [9, '눕다'], [10, '밉다']].map(([n, d]) => cross(tense(n, d), T3)),
      },
      {
        id: 'III', title: 'Section III – Comprehension',
        task: 'Change the verbs or adjectives into the noun form by adding -(으)ㄴ/는 것 and write an English translation.',
        type: 'conj', noQ: true, skill: 'l11.usage',
        placeholder: '… 것', formLabel: 'Noun form of ', enPlaceholder: 'English translation',
        items: [
          noun(11, '돕다', 'helping; the act of helping', ['helping', 'the act of helping', 'to help']),
          noun(12, '어렵다', 'being difficult; something difficult; the thing that is difficult', ['being difficult', 'something difficult', 'the thing that is difficult', 'difficult thing', 'a difficult thing']),
          noun(13, '아름답다', 'being beautiful; something beautiful; the thing that is beautiful', ['being beautiful', 'something beautiful', 'the thing that is beautiful', 'a beautiful thing']),
          noun(14, '귀엽다', 'being cute; something cute; the thing that is cute', ['being cute', 'something cute', 'the thing that is cute', 'a cute thing']),
          noun(15, '맵다', 'being spicy; something spicy; the thing that is spicy', ['being spicy', 'something spicy', 'the thing that is spicy', 'spicy food', 'a spicy thing']),
          noun(16, '쉽다', 'being easy; something easy; the thing that is easy', ['being easy', 'something easy', 'the thing that is easy', 'an easy thing']),
          noun(17, '덥다', 'being hot (weather)', ['being hot', 'the heat', 'hot weather']),
          noun(18, '굽다', 'baking; the act of baking; the thing that you bake; what you bake', ['baking', 'the act of baking', 'what you bake', 'the thing that you bake']),
          noun(19, '눕다', 'lying down; the act of lying down', ['lying down', 'the act of lying down']),
          noun(20, '밉다', 'something dislikeable; the thing that you hate', ['something dislikeable', 'the thing that you hate', 'something hateful', 'what you hate']),
        ],
      },
      {
        id: 'IV', title: 'Section IV – Conjugation chart',
        task: 'Conjugate the verbs with the following verb endings, all of which have been covered in previous lessons.',
        type: 'chart', skill: 'l11.usage', noMean: true, cellPh: '…',
        cols: ['+ -(으)면', '+ -고', '+ -아/어/여서'],
        items: [[21, '돕다'], [22, '입다'], [23, '굽다'], [24, '잡다'], [25, '눕다'], [26, '씹다']].map(([n, d]) => cross(link(n, d), L3)),
      },
      {
        id: 'V', title: 'Section V – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 27, track: 'wb25', label: 'Track 25', ans: ['어제는 정말 추웠어요.'], lenient: false, en: 'It was really cold yesterday. / As for yesterday, it was really cold.' },
          { n: 28, track: 'wb26', label: 'Track 26', ans: ['이거 너무 귀여워요.'], lenient: false, en: 'This is so cute.' },
          { n: 29, track: 'wb27', label: 'Track 27', ans: ['이번 시험은 어려울 거예요.'], lenient: false, en: 'This (upcoming) exam will be difficult. / This (upcoming) exam is going to be difficult.' },
        ],
      },
    ],
  };
})();
