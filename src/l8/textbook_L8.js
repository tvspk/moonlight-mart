/* textbook_L8.js — Korean 3, Lesson 8 (textbook p.54–59, answers p.196). Romanization removed.
   Track 15: intro, 비슷하다 (twice) and 같다 (twice) in one block, then the 5 sample sentences (each twice, clipped).
   The explanation examples (A랑 비슷해요, 도쿄는 서울하고…, 커피 같아요…) are marked Track 15 in the book
   but are not on the recording: no play buttons. Track 16 = dialogue.
   Exercise answers: key p.196 (1–2) and p.197 (3–5). */
MM.lessons[8] = {
  n: 8, ko: '같다', en: 'To look like, To seem like (used with nouns)',
  pages: { tb: '54–59', tbKey: '196–197', wb: '37–40', wbKey: '125' },
};
MM.textbook[8] = {
  blocks: [
    { t: 'h', text: 'Lesson 8 · To look like, To seem like', ko: '같다' },
    { t: 'p', text: 'By the end of this lesson, you will be able to say and write sentences such as “You are like an angel”, “This looks like coffee”, or “You are similar to my teacher”.' },
    { t: 'track', id: '15', from: 4.5, to: 9.7, label: 'Track 15 · 비슷하다, 같다' },
    { t: 'p', text: 'First, take a look at how to express that something is similar to something else.' },
    { t: 'meaning', label: 'Word', ko: '비슷하다', text: 'to be similar' },
    { t: 'p', text: '- Present tense: «비슷해요» = it is similar' },
    { t: 'p', text: 'To say “A is similar to B” in Korean, the particle which means “with” or “together with” is needed. Do you remember which particle that is? It’s «-(이)랑» or «-하고». (Go back to Level 2 Lesson 4 to review if you have forgotten!)' },
    { t: 'ex', items: [
      { id: 'b1', ko: 'A랑 비슷해요.', en: ['It’s similar to A.'] },
      { id: 'b2', ko: 'B하고 비슷해요.', en: ['It’s similar to B.'] },
      { id: 'b3', ko: '도쿄는 서울하고 비슷해요?', en: ['Is Tokyo similar to Seoul?'] },
      { id: 'b4', ko: '참외는 멜론하고 비슷해요.', en: ['Chamoe (Korean melon) is similar to melon.'] },
    ] },
    { t: 'p', text: 'Now look at the word for “to be the same” in Korean.' },
    { t: 'meaning', label: 'Word', ko: '같다', text: 'to be the same' },
    { t: 'p', text: '- Present tense: «같아요» = it’s the same, they are the same' },
    { t: 'p', text: 'In English, when saying “A is the same as B”, the word “as” is needed. In Korean, «-(이)랑» or «-하고» is used here as well.' },
    { t: 'ex', items: [
      { id: 'g1', ko: 'A랑 같아요.', en: ['It’s the same as A.'] },
      { id: 'g2', ko: 'A하고 B는 같아요.', en: ['A and B are the same.'] },
      { id: 'g3', ko: '이거랑 이거랑 같아요?', en: ['Is this the same as this?', 'Are these two things the same?'] },
      { id: 'g4', ko: '우리는 나이가 같아요.', en: ['We have the same age.', '(lit. For us, the age is the same.)'] },
    ] },
    { t: 'p', text: 'So, «-(이)랑/하고 비슷하다» and «-(이)랑/하고 같다» are used to express that something is similar to, or the same as something else, in Korean!' },
    { t: 'h2', text: 'Noun + 같다 (without -(이)랑 / -하고)' },
    { t: 'p', text: 'However, the word «같다», which means “to be the same”, without the particle «-(이)랑» or «-하고», has a different meaning.' },
    { t: 'meaning', label: 'Conjugation', ko: 'Noun + 같다', text: 'to be like + Noun / to look like + Noun / to seem to be + Noun' },
    { t: 'ex', items: [
      { id: 'n1', ko: '커피 같아요.', en: ['It’s like coffee.', 'It seems to be coffee.', 'It looks like coffee.'] },
      { id: 'n2', ko: '거짓말 같아요.', en: ['It seems to be a lie.', 'It sounds like a lie.'] },
      { id: 'n3', ko: '로봇 같아요.', en: ['It’s like a robot.', 'It seems to be a robot.', 'It looks like a robot.'] },
    ] },
    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '15', from: 13.5, to: 34.5, label: 'Track 15 · these 5 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['15', 13.55, 17.6], ko: '저 사람은 로봇 같아요.', en: ['That person is like a robot.'] },
    { t: 'sent', id: 's2', clip: ['15', 17.55, 21.45], ko: '경은 씨는 천사 같아요.', en: ['Kyeong-eun is like an angel.'] },
    { t: 'sent', id: 's3', clip: ['15', 21.5, 25.15], ko: '현우 씨는 천재 같아요.', en: ['Hyunwoo seems to be a genius.'] },
    { t: 'sent', id: 's4', clip: ['15', 25.2, 29.85], ko: '그 이야기는 거짓말 같아요.', en: ['That story sounds like a lie.'] },
    { t: 'sent', id: 's5', clip: ['15', 29.85, 34.5], ko: '이 강아지는 고양이 같아요.', en: ['This puppy is like a cat.'] },
    { t: 'p', text: 'Although this lesson only covered how to use «같아요» with nouns, in the next lesson, you will build upon that knowledge and learn to use «같아요» with verbs so you can say more things in Korean!' },
    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '16', lines: [
      { id: 'd1', sp: 'A', ko: '이 원숭이는 너무 똑똑해서 사람 같아요.', en: 'This monkey is so smart that it looks like a person.' },
      { id: 'd2', sp: 'B', ko: '맞아요.', en: 'That’s right.' },
      { id: 'd3', sp: 'A', ko: '그래서 좀 무섭기도 해요.', en: 'It also makes me a little scared.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: 'The dialogue reuses Lesson 7: «똑똑해서» = smart, so… «무섭기도 해요» (it is also scary) is a pattern you have not learned yet; just read it as a whole.' },
    { t: 'exercises', title: 'Exercises for Lesson 8', items: [
      { id: 'x1', q: 'What is “to be similar” in Korean?',
        ans: ['비슷하다'], full: '비슷하다', soft: [{ p: '비슷해요', note: 'Accepted: 비슷해요 is the present tense. The dictionary form is 비슷하다.' }],
        diag: [{ p: '같다', note: '같다 = to be the same. “To be similar” = 비슷하다.' }, { p: '비스타다', note: 'That is how it sounds; it is written 비슷하다.' }] },
      { id: 'x2', q: 'Write “We are the same age” in Korean.', hint: '같다 = to be the same',
        ans: ['우리는 나이가 같아요.'], soft: [{ p: '우리(는|) 나이가 같아요', note: 'Accepted. The book: 우리는 나이가 같아요.' }, { p: '우리(는|) 나이 같아요', note: 'Accepted: in speech the 가 is often dropped. The book writes it: 우리는 나이가 같아요.' }, { p: '저희는 나이가 같아요', note: 'Accepted: 저희 is the humble “we”.' }],
        diag: [{ p: '우리는 나이가 비슷해요', note: '비슷해요 = similar. The same age = 같아요.' }, { p: '우리는 나이가 같아', note: 'Add 요 to be polite: 같아요.' }] },
      { id: 'x3', q: 'Translate the following sentence to Korean: “Is this the same as this?”',
        ans: ['이거랑 이거랑 같아요?'], soft: [{ p: '이거(랑|하고) 이거(랑|하고|는|) 같아요', note: 'Accepted. The book: 이거랑 이거랑 같아요?' }, { p: '이것(이랑|하고) 이것(이랑|하고|은|) 같아요', note: 'Accepted: 이것 is the full form of 이거.' }],
        diag: [{ p: '이거 같아요', note: 'Without -랑/-하고, 이거 같아요 means “it seems to be this”. The same AS → 이거랑 … 같아요?' }, { p: '이거랑 이거랑 비슷해요', note: '비슷해요 = similar. The same = 같아요.' }] },
      { id: 'x4', q: 'Write “It’s like coffee / It seems to be coffee / It looks like coffee” in Korean.',
        ans: ['커피 같아요.'], soft: [{ p: '(이거|이것|그거) 커피 같아요', note: 'Accepted.' }],
        diag: [{ p: '커피랑 같아요', note: '커피랑 같아요 = it is the same as coffee. “Like / looks like” → no particle: 커피 같아요.' }, { p: '커피하고 같아요', note: '커피하고 같아요 = the same as coffee. “Looks like” → 커피 같아요.' }, { p: '커피가 같아요', note: 'No 가 here: noun + 같아요 = 커피 같아요.' }, { p: '커피 같애요', note: 'People sometimes say 같애요, but it is written 같아요.' }] },
      { id: 'x5', q: 'Write “That story sounds like a lie” in Korean.', hint: '거짓말 = a lie',
        ans: ['그 이야기는 거짓말 같아요.'], soft: [{ p: '그 이야기(는|) 거짓말 같아요', note: 'Accepted.' }, { p: '그 얘기는 거짓말 같아요', note: 'Accepted: 얘기 is the short form of 이야기.' }],
        diag: [{ p: '그 이야기는 거짓말이랑 같아요', note: '이랑 같아요 = the same as. “Sounds like” → 거짓말 같아요.' }, { p: '그 이야기는 거짓말 같애요', note: 'It is written 같아요.' }, { p: '저 이야기는 거짓말 같아요', note: 'Accepted in meaning, but “that story” (one you heard) is 그 이야기.' }] },
    ] },
  ],
};
