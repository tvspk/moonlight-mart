/* workbook_L22.js — Korean 3 Workbook, Lesson 22 (p.88–90, answer key p.135–136).
   Section I True/False (+ correction). Item 1's correction is English (“way”, “method”, or “idea”): the app shows choices (fixOpts, new
   in wb.js for this lesson; the grader refuses Latin letters in typed answers). Item 3's correction is the expression -(으)ㄹ 수 있다:
   the app asks for it with 하다 (할 수 있다), like L14 item 3.
   Section II writing: each book item has two parts (the phrase, then the sentence) → items 5a/5b … 9a/9b (write, givenEn).
   WB 8 prints the hint “비가 온다” (plain form); the key: 비가 올 수도 있다. Section III dictation = WB Track 53, 54, 55 (whole sentences;
   ASR matches the key). lenient off: 올 / 울, 갈 / 길. */
(() => {
  const F = MM.forms[22], row = d => F.find(f => f.dict === d), why = MM.l22why;
  const dg = (ans, d) => { const f = row(d); return f.wrongL.map(w => ({ p: ans.replace(f.l + ' ', w + ' '), note: why(d, w) })); };
  const noDo = (p, note) => ({ p, note });
  MM.workbook[22] = {
    sections: [
      {
        id: 'I', title: 'Section I – Comprehension',
        task: 'True/False. Decide if the statement is true or false. If it is false, correct the underlined term or statement so that the statement is true.',
        type: 'tf', skill: 'l22.vs',
        items: [
          { n: 1, s: 'The word 수 means [“can” or “able”].', u: '“can” or “able”', truth: false,
            fixTask: 'Choose the correct meaning of 수 in this structure.', fixOpts: ['“way”, “method”, or “idea”', '“also” or “too”', '“might” or “perhaps”', '“thing” or “fact”'], fixRight: 0,
            fixWhy: 'Textbook: 수 is a noun which, in this structure, means “way”, “method”, or “idea”. (-도 = also; the whole -(으)ㄹ 수도 있다 = might.)',
            keyFix: '“way”, “method”, or “idea”' },
          { n: 2, s: '-도 means “too” or “also”.', truth: true },
          { n: 3, s: '[-(으)ㄹ 수도 있다] can take on various meanings depending on the context of the sentence, but some of the most common English translations are, “there is a way to do…”, “there is an idea for doing…”, or “there is a possibility for doing…”.', u: '-(으)ㄹ 수도 있다', truth: false,
            fixTask: 'Which expression has these meanings? Write it with 하다 (to do): “there is a way to do…”', ans: ['할 수 있다'], keyFix: '-(으)ㄹ 수 있다 (할 수 있다)', lenient: false,
            soft: [{ p: '할 수 있어요', note: 'Accepted (dictionary form: 할 수 있다).' }],
            diag: [{ p: '할 수도 (있다|있어요)', note: 'That is the false version. Without 도: -(으)ㄹ 수 있다 = there is a way to do (can). 수도 adds “also” → might.' }, { p: '하는 수 (있다|있어요)', note: 'Before 수 always -(으)ㄹ: 할 수 있다.' }] },
          { n: 4, s: 'Although -(으)ㄹ 수도 있다 could mean “to also be able to do something”, it usually means “it might”, “it could” or “perhaps”.', truth: true },
        ],
      },
      {
        id: 'II', title: 'Section II – Writing',
        task: 'Conjugate the given word with -(으)ㄹ 수도 있다 to create a correct Korean translation for the given statement.',
        type: 'write', givenEn: true, skill: 'l22.form', placeholder: '… 수도 있다',
        items: [
          { n: '5a', given: 'might know (something/someone) · to know = 알다', ans: ['알 수도 있다'], lenient: false,
            soft: [{ p: '알 수도 있어요', note: 'Accepted. The key: 알 수도 있다.' }],
            diag: dg('알 수도 있다', '알다').concat([noDo('알 수 (있다|있어요)', '알 수 있다 = can know. Might = 알 수도 있다.')]), en: 'might know (something/someone)' },
          { n: '5b', given: 'My friend might know (the person/the thing).', ans: ['제 친구가 알 수도 있어요.'], lenient: false,
            soft: [{ p: '(제|내) 친구(가|는|) 알 수도 있어요', note: 'Accepted (내 친구 is casual; say 제 친구 in 해요 speech).' }],
            diag: dg('제 친구가 알 수도 있어요', '알다').concat([noDo('(제|내) 친구(가|는|) 알 수 있어요', 'Without 도 it means “can know”. Might = 알 수도 있어요.'), noDo('(제|내) 친구(가|는|) 알 것 같아요', '알 것 같아요 = seems to know (Lesson 9). Might = 알 수도 있어요.')]), en: 'My friend might know (the person/the thing).' },
          { n: '6a', given: 'might meet · to meet = 만나다', ans: ['만날 수도 있다'], lenient: false,
            soft: [{ p: '만날 수도 있어요', note: 'Accepted. The key: 만날 수도 있다.' }],
            diag: dg('만날 수도 있다', '만나다').concat([noDo('만날 수 (있다|있어요)', '만날 수 있다 = can meet. Might = 만날 수도 있다.')]), en: 'might meet' },
          { n: '6b', given: 'We might meet again next week.', ans: ['우리 다음 주에 다시 만날 수도 있어요.'], lenient: false,
            soft: [{ p: '(우리 |우리는 |저희 |저희는 |)(다음 주에|다음주에) (또 |다시 |)만날 수도 있어요', note: 'Accepted.' }, { p: '(우리 |우리는 |)다시 (다음 주에|다음주에) 만날 수도 있어요', note: 'Accepted.' }],
            diag: dg('우리 다음 주에 다시 만날 수도 있어요', '만나다').concat([noDo('(우리 |)(다음 주에|다음주에) (다시 |)만날 수 있어요', 'Without 도 it means “we can meet”. Might = 만날 수도 있어요.'), noDo('(우리 |)(다음 주에|다음주에) (다시 |)만날 거예요', '만날 거예요 = we will meet (sure). Might = 만날 수도 있어요.')]), en: 'We might meet again next week.' },
          { n: '7a', given: 'might be small · to be small = 작다', ans: ['작을 수도 있다'], lenient: false,
            soft: [{ p: '작을 수도 있어요', note: 'Accepted. The key: 작을 수도 있다.' }],
            diag: dg('작을 수도 있다', '작다').concat([noDo('작을 수 (있다|있어요)', 'Without 도 it sounds like “can be small”. Might = 작을 수도 있다.')]), en: 'might be small' },
          { n: '7b', given: 'The hat could be small.', ans: ['모자가 작을 수도 있어요.'], lenient: false,
            soft: [{ p: '(그 |이 |)모자(가|는|) (조금 |좀 |)작을 수도 있어요', note: 'Accepted.' }],
            diag: dg('모자가 작을 수도 있어요', '작다').concat([noDo('(그 |)모자(가|는|) 작을 수 있어요', 'Without 도 it sounds like “the hat is able to be small”. Could be = 작을 수도 있어요.')]), en: 'The hat could be small.' },
          { n: '8a', given: 'might rain · to rain = 비가 온다', ans: ['비가 올 수도 있다'], lenient: false,
            soft: [{ p: '비(가|) 올 수도 (있다|있어요)', note: 'Accepted. The key: 비가 올 수도 있다.' }],
            diag: dg('비가 올 수도 있다', '오다').concat([noDo('비(가|) 올 수 (있다|있어요)', 'Without 도 it sounds like “rain can come”. Might rain = 비가 올 수도 있다.'), noDo('비(가|) 온다 수도 (있다|있어요)', '온다 is the plain sentence form. Start from the stem 오: 올 수도 있다.')]), en: 'might rain' },
          { n: '8b', given: 'It might rain this evening.', ans: ['오늘 저녁에 비가 올 수도 있어요.'], lenient: false,
            soft: [{ p: '오늘 (저녁에|저녁|밤에) 비(가|) 올 수도 있어요', note: 'Accepted.' }],
            diag: dg('오늘 저녁에 비가 올 수도 있어요', '오다').concat([noDo('오늘 (저녁에|저녁) 비(가|) 올 수 있어요', 'Without 도 it means “rain can come”. Might rain = 올 수도 있어요.'), noDo('오늘 (저녁에|저녁) 비(가|) 올 것 같아요', '올 것 같아요 = it looks like it will rain (Lesson 9). Might = 올 수도 있어요.')]), en: 'It might rain this evening.' },
          { n: '9a', given: 'might use · to use = 쓰다', ans: ['쓸 수도 있다'], lenient: false,
            soft: [{ p: '쓸 수도 있어요', note: 'Accepted. The key: 쓸 수도 있다.' }, { p: '사용할 수도 (있다|있어요)', note: 'Accepted: 사용하다 = to use, too. The workbook gives 쓰다.' }],
            diag: dg('쓸 수도 있다', '쓰다').concat([noDo('쓸 수 (있다|있어요)', '쓸 수 있다 = can use. Might = 쓸 수도 있다.'), noDo('써 수도 (있다|있어요)', '써 comes from 써요. Before 수: stem 쓰 + ㄹ = 쓸.')]), en: 'might use' },
          { n: '9b', given: 'I might use it later.', ans: ['그거 나중에 쓸 수도 있어요.'], lenient: false,
            soft: [{ p: '(저 |저는 |제가 |)(그거|그것|그걸|그것을) (나중에|이따가) 쓸 수도 있어요', note: 'Accepted.' }, { p: '(저 |저는 |제가 |)(나중에|이따가) (그거|그것|그걸|그것을|)쓸 수도 있어요', note: 'Accepted.' }, { p: '(저 |저는 |제가 |)(그거|그걸|그것을|)(나중에|이따가) 사용할 수도 있어요', note: 'Accepted (사용하다 = to use).' }],
            diag: dg('그거 나중에 쓸 수도 있어요', '쓰다').concat([noDo('(그거|그걸|그것을) 나중에 쓸 수 있어요', 'Without 도 it means “I can use it later”. Might = 쓸 수도 있어요.')]), en: 'I might use it later.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 10, track: 'wb53', label: 'Track 53', ans: ['이거 가짜일 수도 있어요.'], lenient: false, en: 'This might be fake.' },
          { n: 11, track: 'wb54', label: 'Track 54', ans: ['정말 그럴 수도 있어요.'], lenient: false, en: 'It might really be so.' },
          { n: 12, track: 'wb55', label: 'Track 55', ans: ['저 내일 못 올 수도 있어요.'], lenient: false, en: 'I might not be able to come here tomorrow.' },
        ],
      },
    ],
  };
})();
