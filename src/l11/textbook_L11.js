/* textbook_L11.js — Korean 3, Lesson 11 (textbook p.77–82, answers p.197). Romanization removed.
   Track 21: intro (0–5 s), then 돕다/어렵다/춥다 with their 해요 forms (one block 5.3–16.7 s), the other irregular verbs
   (one block 17.7–48.0 s; ASR clear for most pairs, not for 눕다), then the 4 sample sentences (each twice, clipped 51.9–70.3).
   The past/future forms, -는 것 and the exception verbs (입다, 좁다…) are marked Track 21 in the book but are not on it.
   Track 22 = dialogue. */
MM.lessons[11] = {
  n: 11, ko: 'ㅂ 불규칙', en: 'Irregulars: ㅂ',
  pages: { tb: '77–82', tbKey: '197', wb: '49–52', wbKey: '127–128' },
};
MM.textbook[11] = {
  blocks: [
    { t: 'h', text: 'Lesson 11 · Irregulars: ㅂ', ko: 'ㅂ 불규칙' },
    { t: 'p', text: 'If you have been studying with this book series from Level 1, you have learned so much about the different conjugations, rules, and usages for Korean verbs. In fact, you may have expanded your vocabulary with a number of verbs too! Yay! Congratulations! However, there is always more to learn, so keep up the good work! Just as in many other languages, Korean has some irregularities which, over the course of time, were used more and more, and eventually, became a fixed rule.' },
    { t: 'p', text: 'Korean has much fewer verb irregularities than some other languages, but you will encounter these irregularities everywhere as you learn more and start speaking more Korean. One irregularity in Korean is conjugating verb stems which end in «ㅂ».' },
    { t: 'meaning', label: 'Irregular', ko: 'ㅂ → 오 / 우', text: 'before a suffix that starts with a vowel' },
    { t: 'p', text: 'This means that if a verb has «ㅂ» at the end of the verb stem, and it is followed by a suffix which starts with a vowel, the «ㅂ» will change to «오» or «우».' },

    { t: 'h2', text: 'Conjugation' },
    { t: 'p', text: 'If the vowel before «ㅂ» is «오», change «ㅂ» to «오». If the vowel before «ㅂ» is not «오», change «ㅂ» to «우».' },
    { t: 'track', id: '21', from: 5.3, to: 16.7, label: 'Track 21 · 돕다, 어렵다, 춥다' },
    { t: 'ex', items: [
      { id: 'c1', ko: '돕다', en: ['to help'] },
      { id: 'c2', arrow: true, ko: '도 + ㅂ + 다 → 도 + 오 + 아요 = 도와요', en: ['* Note that it is NOT 돕아요.'] },
      { id: 'c3', ko: '도와요 · 도왔어요 · 도울 거예요', en: ['present tense · past tense · future tense'] },
    ] },
    { t: 'ex', items: [
      { id: 'c4', ko: '어렵다', en: ['to be difficult'] },
      { id: 'c5', arrow: true, ko: '어려 + ㅂ + 다 → 어려 + 우 + 어요 = 어려워요', en: ['ㅂ → 우'] },
      { id: 'c6', ko: '어려워요 · 어려웠어요 · 어려울 거예요', en: ['present tense · past tense · future tense'] },
    ] },
    { t: 'ex', items: [
      { id: 'c7', ko: '춥다', en: ['to be cold'] },
      { id: 'c8', arrow: true, ko: '추 + 우 + 어요 = 추워요', en: ['ㅂ → 우'] },
      { id: 'c9', ko: '추워요 · 추웠어요 · 추울 거예요', en: ['present tense · past tense · future tense'] },
    ] },

    { t: 'h2', text: 'Some other irregular words' },
    { t: 'track', id: '21', from: 17.7, to: 48.0, label: 'Track 21 · the other irregular words' },
    { t: 'ex', items: [
      { id: 'o1', ko: '눕다 → 누워요.', en: ['to lie down'] },
      { id: 'o2', ko: '굽다 → 구워요.', en: ['to bake'] },
      { id: 'o3', ko: '덥다 → 더워요.', en: ['to be hot (weather)'] },
      { id: 'o4', ko: '쉽다 → 쉬워요.', en: ['to be easy'] },
      { id: 'o5', ko: '맵다 → 매워요.', en: ['to be spicy'] },
      { id: 'o6', ko: '귀엽다 → 귀여워요.', en: ['to be cute'] },
      { id: 'o7', ko: '밉다 → 미워요.', en: ['to hate; to be dislikeable'] },
      { id: 'o8', ko: '아름답다 → 아름다워요.', en: ['to be beautiful'] },
    ] },
    { t: 'p', text: 'Remember that these verbs have irregular forms ONLY WHEN the suffix following the verb stem starts with a VOWEL. Therefore, with suffixes such as «-는» or «-고», «ㅂ» does not change.' },
    { t: 'ex', items: [
      { id: 'n1', ko: '돕다 → 돕 + -는 것 = 돕는 것', en: ['to help → helping'] },
    ] },

    { t: 'h2', text: 'Irregularities in irregular verbs' },
    { t: 'p', text: 'Although the «ㅂ» irregular rule is applied to most verbs which contain «ㅂ» as a 받침 (final consonant) in the verb stem, there are a handful of verbs which do not follow this rule.' },
    { t: 'meaning', label: 'Action verbs', ko: '입다 · 잡다 · 씹다', text: 'to wear · to catch · to bite' },
    { t: 'meaning', label: 'Descriptive verbs', ko: '좁다 · 넓다', text: 'to be narrow · to be wide' },
    { t: 'p', text: 'The «ㅂ» in these words does not change when in front of a vowel.' },
    { t: 'ex', items: [
      { id: 'k1', ko: '입다 → 입어요 (Not 이워요)', en: ['to wear'] },
      { id: 'k2', ko: '좁다 → 좁아요 (Not 조아요)', en: ['to be narrow'] },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: 'The book prints “Not 조아요”. The form you would get by wrongly applying the rule is 조와요 (ㅗ before ㅂ → 오 + 아요).' },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '21', from: 51.9, to: 70.3, label: 'Track 21 · these 4 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['21', 51.9, 55.2], ko: '이 문제는 어려워요.', en: ['This problem is difficult.'] },
    { t: 'sent', id: 's2', clip: ['21', 55.5, 58.3], ko: '이거 너무 귀여워요.', en: ['This is so cute.'] },
    { t: 'sent', id: 's3', clip: ['21', 58.65, 62.8], ko: '서울은 겨울에 정말 추워요.', en: ['In Seoul, it’s really cold in the winter.'] },
    { t: 'sent', id: 's4', clip: ['21', 63.0, 70.3], ko: 'TTMIK으로 공부하면, 한국어 공부가 쉬워요.', en: ['If you study with TTMIK, studying Korean is easy.'] },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '22', lines: [
      { id: 'd1', sp: 'A', ko: '석진 씨, 추워요? 에어컨 끌까요?', en: 'Seokjin, are you cold? Do you want me to turn off the air conditioner?' },
      { id: 'd2', sp: 'B', ko: '네, 꺼 주세요.', en: 'Yes, please.' },
      { id: 'd3', sp: 'A', ko: '껐어요. 너무 더우면 말하세요.', en: 'I’ve turned it off. Please let me know if it gets too hot.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '«끌까요?» = shall I turn it off? (끄다, Lesson 4). «더우면» = if it is hot: 덥다 + -(으)면 → 더우 + 면, because -으면 starts with a vowel.' },

    { t: 'exercises', title: 'Exercises for Lesson 11', items: [
      { id: 'x1', q: 'Since the ㅂ in the verb 돕다 (to help) is irregular, it changes to 도와요. Not all verbs have an irregular ㅂ. Please choose the verb from the list below which does not have an irregular ㅂ.',
        choices: ['입다 = to wear', '눕다 = to lie down', '춥다 = to be cold', '쉽다 = to be easy'], right: '입다 = to wear', choicesKo: true, ans: ['입다'], skill: 'l11.keep',
        why: '입다 → 입어요 (not 이워요).', wrongNote: 'Not that one: this verb follows the ㅂ rule (누워요, 추워요, 쉬워요). Look for the one that keeps its ㅂ.' },
      { id: 'x2', q: '“To be difficult” is 어렵다 in Korean. Present tense for 어렵다 is 어려워요. What is the past tense form?',
        choices: ['어려울 거예요', '어려웠어요'], right: '어려웠어요', choicesKo: true, ans: ['어려웠어요'], skill: 'l11.form',
        why: '어려워요 → 어려웠어요.', wrongNote: 'Not that one: 어려울 거예요 is the future tense.' },
      { id: 'x3', q: 'Write the following sentence in Korean: “This is so cute!”', hint: '귀엽다 = to be cute',
        ans: ['이거 너무 귀여워요.'], full: '이거 너무 귀여워요.', skill: 'l11.form', lenient: false,
        soft: [{ p: '(이거|이것은|이건) (너무|정말|진짜) 귀여워요', note: 'Accepted. The key: 이거 너무 귀여워요.' }],
        diag: [{ p: '이거 너무 귀엽어요', note: 'ㅂ + vowel ending: ㅂ → 우. 귀여 + 우 + 어요 = 귀여워요.' }, { p: '이거 너무 귀여와요', note: '와 is only for 돕다 (the vowel before ㅂ is ㅗ). 귀엽다 → 귀여워요.' }, { p: '이거 너무 귀여어요', note: 'ㅂ becomes 우, it does not just disappear: 귀여 + 우 + 어요 = 귀여워요.' }, { p: '이거 너무 귀엽다', note: 'Conjugate it: 귀여워요.' }] },
      { id: 'x4', q: 'Write the following sentence in Korean: “This problem is difficult.”', hint: '어렵다 = to be difficult',
        ans: ['이 문제는 어려워요.'], full: '이 문제는 어려워요.', skill: 'l11.form', lenient: false,
        soft: [{ p: '이 문제(가|) (너무 |정말 |)어려워요', note: 'Accepted. The key: 이 문제는 어려워요.' }],
        diag: [{ p: '이 문제(는|가) 어렵어요', note: 'ㅂ + vowel ending: ㅂ → 우. 어려 + 우 + 어요 = 어려워요.' }, { p: '이 문제(는|가) 어려와요', note: 'Only 돕다 (ㅗ before ㅂ) takes 와. 어렵다 → 어려워요.' }, { p: '이 문제(는|가) 어려어요', note: 'ㅂ becomes 우: 어려워요.' }] },
      { id: 'x5', q: 'Write the following sentence in Korean: “In Seoul, it’s really cold in the winter.”', hint: '춥다 = to be cold',
        ans: ['서울은 겨울에 정말 추워요.'], full: '서울은 겨울에 정말 추워요.', skill: 'l11.form', lenient: false,
        soft: [{ p: '(서울은 겨울에|겨울에 서울은) (정말|진짜|너무) 추워요', note: 'Accepted. The key: 서울은 겨울에 정말 추워요.' }],
        diag: [{ p: '서울은 겨울에 정말 춥어요', note: 'ㅂ + vowel ending: ㅂ → 우. 추 + 우 + 어요 = 추워요.' }, { p: '서울은 겨울에 정말 추와요', note: '와 is only for 돕다. 춥다 → 추워요.' }, { p: '서울은 겨울에 정말 추어요', note: 'ㅂ becomes 우: 추워요.' }, { p: '서울은 겨울에 정말 더워요', note: '더워요 = it’s hot. Cold = 춥다 → 추워요.' }, { p: '서울에서 겨울에 정말 추워요', note: 'Close, but the book says 서울은 (as for Seoul).' }] },
    ] },
  ],
};
