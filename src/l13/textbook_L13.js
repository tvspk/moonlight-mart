/* textbook_L13.js — Korean 3, Lesson 13 (textbook p.88–93, answers p.197). Romanization removed.
   The PDF text layer garbles the conjugation lines (“+ -ũ”, “+ -਷”); restored as -ㄴ / -은 from the examples.
   Track 25: intro (0–4.5 s), then the example words 작다 → 작은 … 달다 → 단 (one block 4.9–31.3 s; ASR clear for most words),
   then the 5 sample sentences (each twice, clipped by silence detection 34.6–50.6 s). The 싸다 / 바쁘다 / 맛있다 examples,
   the -이에요 mistakes and 예뻐요 / 비싸요 are marked Track 25 in the book but are not on it. Track 26 = dialogue. */
MM.lessons[13] = {
  n: 13, ko: '-(으)ㄴ + 명사', en: 'Making Adjectives (Part 1)',
  pages: { tb: '88–93', tbKey: '197', wb: '57–59', wbKey: '129–130' },
};
MM.textbook[13] = {
  blocks: [
    { t: 'h', text: 'Lesson 13 · Making Adjectives (Part 1)', ko: '-(으)ㄴ + 명사' },
    { t: 'meaning', label: 'Pattern', ko: '형용사 + -(으)ㄴ + 명사', text: 'adjectives in infinitive form + -(으)ㄴ + noun' },
    { t: 'p', text: 'Korean and English are different in many ways – one key difference being “adjectives”. For example, in English, “beautiful” is an adjective and can be looked up in the dictionary just as it is. Translated directly to Korean as an adjective, “beautiful” is «예쁜», which cannot be found in the dictionary. The “descriptive verb” form, or the “adjective in infinitive form”, of «예쁜», which is «예쁘다» (to be beautiful), however, can be found in the dictionary.' },
    { t: 'p', text: '“To be + adjective” is known as “infinitive form” in English, but when studying Korean, often at times it is referred to as “descriptive verb form”. Both terms essentially mean the same thing, so do not worry too much about the terminology!' },
    { t: 'ex', items: [
      { id: 'e1', ko: '싸다', en: ['It does NOT mean “cheap”. It means “to be cheap”.'] },
      { id: 'e2', ko: '바쁘다', en: ['It does NOT mean “busy”. It means “to be busy”.'] },
      { id: 'e3', ko: '맛있다', en: ['It does NOT mean “delicious”. It means “to be delicious”.'] },
    ] },
    { t: 'p', text: 'By the end of this lesson, you will be well acquainted with recognizing the difference between an “adjective” and an “adjective in infinitive form” in Korean, as well as being able to use each form correctly.' },
    { t: 'p', text: '“Adjectives in infinitive form” have the ability to be conjugated just as any “action verb” (the main reason why they are commonly referred to as “descriptive verbs”). The actual “adjective”, on the other hand, never changes form.' },
    { t: 'p', text: 'For example, the word “fun” in English is always “fun” no matter what the tense is: “It is fun” (present tense), “It was fun” (past tense), or “It will be fun” (future tense). In Korean, since “adjectives in the infinitive form” can be conjugated, «재미있다» (to be fun) is conjugated to «재미있어요» (present tense), «재미있었어요» (past tense), and «재미있을 거예요» (future tense).' },
    { t: 'p', text: 'What if I want to use “adjectives in the infinitive form” as actual adjectives? Good question! Simply drop the «-다», and add either «-ㄴ» or «-은».' },

    { t: 'h2', text: 'Conjugation' },
    { t: 'meaning', label: 'Vowel', ko: '받침 X + -ㄴ', text: 'verb stems ending with a vowel' },
    { t: 'meaning', label: 'Consonant', ko: '받침 O + -은', text: 'verb stems ending with a consonant' },
    { t: 'track', id: '25', from: 4.9, to: 31.3, label: 'Track 25 · the example words (작다 … 달다)' },
    { t: 'ex', items: [
      { id: 'c1', ko: '작다', en: ['to be small'] },
      { id: 'c2', arrow: true, ko: '작 + -은 = 작은', en: ['small'] },
      { id: 'c3', arrow: true, ko: '작은 집', en: ['a small house'] },
    ] },
    { t: 'ex', items: [
      { id: 'c4', ko: '빠르다', en: ['to be fast'] },
      { id: 'c5', arrow: true, ko: '빠르 + -ㄴ = 빠른', en: ['fast'] },
      { id: 'c6', arrow: true, ko: '빠른 차', en: ['a fast car'] },
    ] },
    { t: 'ex', items: [
      { id: 'c7', ko: '조용하다', en: ['to be quiet'] },
      { id: 'c8', arrow: true, ko: '조용하 + -ㄴ = 조용한', en: ['quiet'] },
      { id: 'c9', arrow: true, ko: '조용한 방', en: ['a quiet room'] },
    ] },
    { t: 'ex', items: [
      { id: 'c10', ko: '비싸다', en: ['to be expensive'] },
      { id: 'c11', arrow: true, ko: '비싸 + -ㄴ = 비싼', en: ['expensive'] },
      { id: 'c12', arrow: true, ko: '비싼 컴퓨터', en: ['an expensive computer'] },
    ] },

    { t: 'h2', text: 'Exceptions' },
    { t: 'ex', items: [
      { id: 'x1', ko: '하얗다 → 하얀 [NOT 하얗은]', en: ['white'] },
      { id: 'x2', ko: '그렇다 → 그런 [NOT 그렇은]', en: ['such'] },
      { id: 'x3', ko: '달다 → 단 [NOT 달은]', en: ['sweet'] },
    ] },
    { t: 'p', text: '* The descriptive verbs «있다» and «없다» are also an exception because they are combined with «-는»; this includes verbs that end in «-있다» and «-없다», such as «재미있다», «맛있다», «재미없다», etc.' },
    { t: 'note', label: 'App note (not from the book)', text: 'So: 재미있는 영화 (a fun movie), 맛있는 것 (something delicious, WB 19), 재미없는 책 (a boring book). And you already know the ㅂ verbs from Lesson 11: before -은 the ㅂ becomes 우 → 차가운, 귀여운, 더운.' },

    { t: 'h2', text: 'Common Mistake' },
    { t: 'p', text: 'In Level 1, Lesson 5, you learned that the ending «-이에요» has a similar function to “to be” in English. When it comes to using adjectives in Korean, because all adjectives are in the infinitive form already, it is INCORRECT to conjugate them with «-이에요».' },
    { t: 'ex', items: [
      { id: 'm1', ko: '예쁜이에요 ( x )', en: ['wrong'] },
      { id: 'm2', ko: '비싼이에요 ( x )', en: ['wrong'] },
    ] },
    { t: 'p', text: 'Adjectives in the infinitive form need to be conjugated just like action verbs.' },
    { t: 'ex', items: [
      { id: 'm3', ko: '예쁘다 → 예뻐요 ( o )', en: ['(it) is pretty'] },
      { id: 'm4', ko: '비싸다 → 비싸요 ( o )', en: ['(it) is expensive'] },
    ] },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '25', from: 34.6, to: 50.6, label: 'Track 25 · these 5 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['25', 34.6, 37.4], ko: '좋은 아이디어예요.', en: ['It’s a good idea.'] },
    { t: 'sent', id: 's2', clip: ['25', 37.5, 40.4], ko: '이상한 사람이에요.', en: ['He’s a strange person.'] },
    { t: 'sent', id: 's3', clip: ['25', 40.45, 43.7], ko: '더 작은 가방 있어요?', en: ['Do you have a smaller bag?'] },
    { t: 'sent', id: 's4', clip: ['25', 43.8, 47.8], ko: '차가운 커피 마시고 싶어요.', en: ['I want to drink some cold coffee.'] },
    { t: 'sent', id: 's5', clip: ['25', 47.9, 50.6], ko: '나쁜 사람이에요.', en: ['He is a bad person.'] },
    { t: 'note', label: 'App note (not from the book)', text: 'In «좋은 아이디어예요» the -이에요 / -예요 belongs to the NOUN (아이디어), not to the adjective: [좋은 아이디어] + 예요. That is fine. What is wrong is putting it right after the adjective: 좋은이에요 ( x ).' },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '26', lines: [
      { id: 'd1', sp: 'A', ko: '주연 씨, 큰 우산 있어요?', en: 'Jooyeon, do you have a big umbrella?' },
      { id: 'd2', sp: 'B', ko: '아니요. 지금 비 와요?', en: 'No. Is it raining now?' },
      { id: 'd3', sp: 'A', ko: '네, 많이 와요.', en: 'Yes. It is raining hard.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '«큰» = big: 크다 → 크 + ㄴ = 큰. «비 와요» is the spoken short form of «비가 와요».' },

    { t: 'exercises', title: 'Exercises for Lesson 13', items: [
      { id: 'x1', q: 'Change the adjective in infinitive form to an adjective with -(으)ㄴ: 작다 = to be small → ( ) = small', ans: ['작은'], full: '작다 → 작은', skill: 'l13.form', lenient: false,
        diag: [{ p: '작인', note: 'Consonant stem + 은: 작은.' }, { p: '작는', note: '-는 is for action verbs and 있다/없다. 작다 is descriptive: 작은.' }, { p: '자근', note: 'It sounds like 자근, but it is written 작은.' }, { p: '작아요', note: 'That is the 해요 form. Before a noun: 작은.' }] },
      { id: 'x2', q: '비싸다 = to be expensive → ( ) = expensive', ans: ['비싼'], full: '비싸다 → 비싼', skill: 'l13.form', lenient: false,
        diag: [{ p: '비싸은', note: '비싸 ends in a vowel: just add ㄴ → 비싼.' }, { p: '비싸는', note: '-는 is for action verbs. Descriptive: 비싼.' }, { p: '비싸요', note: 'That is the 해요 form. Before a noun: 비싼.' }] },
      { id: 'x3', q: '하얗다 = to be white → ( ) = white', ans: ['하얀'], full: '하얗다 → 하얀', skill: 'l13.irr', lenient: false,
        diag: [{ p: '하얗은', note: 'An exception: the ㅎ drops → 하얀 (NOT 하얗은).' }, { p: '하야은', note: 'The ㅎ drops and ㄴ goes straight on: 하얀.' }] },
      { id: 'x4', q: '달다 = to be sweet → ( ) = sweet', ans: ['단'], full: '달다 → 단', skill: 'l13.irr', lenient: false,
        diag: [{ p: '달은', note: 'An exception: the ㄹ drops → 단 (NOT 달은).' }, { p: '다는', note: '-는 is for action verbs. 달다 → 단.' }] },
      { id: 'x5', q: '“To be big” is 크다 in Korean. How do you say “Do you have a bigger bag?”', hint: '더 = more (Sample Sentences: 더 작은 가방 있어요?)',
        ans: ['더 큰 가방 있어요?'], full: '더 큰 가방 있어요?', skill: 'l13.form', lenient: false,
        soft: [{ p: '더 큰 가방(이|) 있어요', note: 'Accepted.' }, { p: '더 큰 가방(이|) 있으세요', note: 'Accepted: 있으세요 is more polite to a customer.' }],
        diag: [{ p: '더 크은 가방 있어요', note: '크 ends in a vowel: just add ㄴ → 큰.' }, { p: '더 크는 가방 있어요', note: '-는 is for action verbs. 크다 → 큰.' }, { p: '큰 가방 있어요', note: 'That is “Do you have a big bag?”. Bigger = 더 큰.' }, { p: '더 커요 가방 있어요', note: '커요 ends a sentence. Before a noun: 큰.' }] },
    ] },
  ],
};
