/* textbook_L17.js — Korean 3, Lesson 17 (textbook p.110–114, answers p.198). Romanization removed.
   The PDF text layer garbles “위해/서” (“ਤ೧/ࢲ”) and the particles “-을/를”, “-기” (“-ܳ”, “-ӝ”); restored from the examples.
   Track 33: intro (0–4.4 s), 위하다 / 위해 / 위해서 … (one block 5.2–10.9 s; ASR unclear), then the 4 sample sentences (each twice,
   clipped by silence detection + ASR 12.3–36.0 s). The 건강을 위해서 / 회사를 위해서 / 한국에 가기 위해서 / 일본어를 배우기 위해서
   examples are marked Track 33 in the book but are not on it. Track 34 = dialogue. */
MM.lessons[17] = {
  n: 17, ko: '위해, 위해서', en: 'In order to, For the sake of',
  pages: { tb: '110–114', tbKey: '198', wb: '70–72', wbKey: '132' },
};
MM.textbook[17] = {
  blocks: [
    { t: 'h', text: 'Lesson 17 · In order to, For the sake of', ko: '위해, 위해서' },
    { t: 'p', text: 'In this lesson, you will learn an expression that means “in order to”, “for”, or “for the sake of”. The keyword in the expression is «위하다».' },
    { t: 'p', text: '«위하다» means “to put forth the effort for something/someone” or “to do something to benefit someone”, but it is rarely used as is without being changed to another form.' },
    { t: 'meaning', label: 'Word', ko: '위해(서)', text: 'in order to / for' },
    { t: 'track', id: '33', from: 5.2, to: 10.9, label: 'Track 33 · 위하다, 위해, 위해서' },
    { t: 'p', text: '«위하다» is rarely used in its dictionary form, and it is changed to forms such as “위해” or “위해서” to mean “in order to”, “in order for”, or “for the sake of”.' },
    { t: 'ex', items: [
      { id: 'w1', ko: '위해 = 위하여', en: ['the short form = the original conjugation'] },
      { id: 'w2', ko: '위해서 = 위하여서', en: ['the short form = the original conjugation'] },
    ] },
    { t: 'p', text: 'There will be times when you encounter «위하여» rather than «위해». «위하여» is the original conjugation, but in everyday language, «위하여» is shortened to «위해» (both in written and spoken languages) for the ease of pronunciation.' },

    { t: 'h2', text: 'Using 위해/서 with nouns' },
    { t: 'meaning', label: 'Pattern', ko: '명사 + -을/를 위해/서', text: 'noun + -을/를 위해/서 = in order for + noun = for the sake of + noun' },
    { t: 'ex', items: [
      { id: 'n1', ko: '건강을 위해서', en: ['for health; for the sake of health; in order to be healthy'] },
      { id: 'n2', ko: '회사를 위해서', en: ['for the company; for the good of the company'] },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '-을 after a consonant (건강을, 부모님을), -를 after a vowel (회사를, 친구를) — the same object particle as always.' },

    { t: 'h2', text: 'Using 위해/서 with verbs' },
    { t: 'meaning', label: 'Pattern', ko: '동사 어간 + -기 위해/서', text: 'verb stem + -기 위해/서' },
    { t: 'ex', items: [
      { id: 'v1', ko: '한국에 가기 위해서', en: ['in order to go to Korea'] },
      { id: 'v2', ko: '일본어를 배우기 위해서', en: ['in order to learn Japanese'] },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: 'The same -기 as in -기 전에 (Lesson 10): stem + 기, no tense inside. The tense goes on the last verb: 한국에 가기 위해서 공부했어요 (not 갔기).' },
    { t: 'p', text: '* Please note that using «위해/위해서» in a sentence makes it sound very formal. You will hear/see this a lot in song lyrics, books, and news articles, but not in casual, spoken conversations.' },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '33', from: 12.3, to: 36.0, label: 'Track 33 · these 4 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['33', 12.3, 18.2], ko: '슈퍼맨은 세계 평화를 위해서 일해요.', en: ['Superman works for world peace.'] },
    { t: 'sent', id: 's2', clip: ['33', 18.2, 25.5], ko: '저는 한국에 가기 위해서 열심히 공부했어요.', en: ['I studied hard in order to go to Korea.'] },
    { t: 'sent', id: 's3', clip: ['33', 25.5, 30.3], ko: '부모님을 위해서 돈을 모았어요.', en: ['I saved up money for my parents.'] },
    { t: 'sent', id: 's4', clip: ['33', 30.3, 36.0], ko: '건강을 위해서 매일 운동하고 있어요.', en: ['I am exercising every day for my health.'] },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '34', lines: [
      { id: 'd1', sp: 'A', ko: '유럽으로 배낭여행을 가기 위해서 돈을 모으고 있어요.', en: 'I am saving up money to go backpacking in Europe.' },
      { id: 'd2', sp: 'B', ko: '우와! 언제 갈 거예요?', en: 'Wow! When are you going to go?' },
      { id: 'd3', sp: 'A', ko: '이번 여름 방학 때 갈 거예요.', en: 'I am going to go during this summer vacation.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '모으고 있어요 = I am saving up (-고 있다, present progressive). 모으다 = to gather, to collect, to save up. 방학 때 = during the vacation.' },

    { t: 'exercises', title: 'Exercises for Lesson 17', items: [
      { id: 'x1', q: 'How do you say “in order to”, “for”, or “for the sake of” in Korean?',
        ans: ['위해서'], full: '위해; 위해서', skill: 'l17.usage', lenient: false,
        soft: [{ p: '위해', note: 'Accepted: 위해 = 위해서 (the key gives both).' }, { p: '(위하여|위하여서)', note: 'Accepted: the original conjugation. Everyday Korean shortens it to 위해 / 위해서.' }, { p: '위해(서|) 위해(서|)', note: 'Accepted: the key gives both, 위해 and 위해서.' }],
        diag: [{ p: '위하다', note: 'That is the dictionary form, which is rarely used as is. “In order to / for” = 위해 or 위해서.' }, { p: '위에서', note: '위에서 = on top / from above (Lesson 3). “For the sake of” = 위해서 (해, not 에).' }, { p: '(위해요|위했어요)', note: 'A sentence ending. The connecting form: 위해서.' }] },
      { id: 'x2', q: 'How do you write “for health”, “for the sake of health”, or “in order to be healthy”?', hint: 'health = 건강',
        ans: ['건강을 위해서'], full: '건강을 위해서', skill: 'l17.noun', lenient: false,
        soft: [{ p: '건강을 위해', note: 'Accepted: 위해 = 위해서.' }, { p: '건강 위해(서|)', note: 'Accepted: in speech the particle is often dropped. The book: 건강을 위해서.' }],
        diag: [{ p: '건강를 위해(서|)', note: '건강 ends in a consonant (ㅇ): 을 → 건강을.' }, { p: '건강(이|에|의) 위해(서|)', note: 'Noun + object particle 을/를: 건강을 위해서.' }, { p: '건강하기 위해(서|)', note: 'Correct Korean (in order to be healthy, verb + 기). The book wants the noun pattern here: 건강을 위해서.' }] },
      { id: 'x3', q: 'Write “in order to go to Korea” in Korean.', hint: 'to go = 가다',
        ans: ['한국에 가기 위해서'], full: '한국에 가기 위해서', skill: 'l17.verb', lenient: false,
        soft: [{ p: '한국에 가기 위해', note: 'Accepted: 위해 = 위해서.' }],
        diag: [{ p: '한국에 (가는|간|갈) 위해(서|)', note: 'Verbs take -기: 가기 위해서.' }, { p: '한국에 갔기 위해(서|)', note: 'No tense before 기: 가기 위해서.' }, { p: '한국에 가고 위해(서|)', note: '-고 = and. In order to = stem + 기 위해서.' }, { p: '한국(을|를|에서) 가기 위해(서|)', note: 'Going TO a place: 한국에.' }] },
      { id: 'x4', q: 'Translate “I studied hard in order to go to Korea” to Korean.', hint: 'to study = 공부하다',
        ans: ['저는 한국에 가기 위해서 열심히 공부했어요.'], full: '(저는) 한국에 가기 위해서 열심히 공부했어요.', skill: 'l17.verb', lenient: false,
        soft: [{ p: '(저는 |제가 |)한국에 가기 위해(서|) 열심히 공부했어요', note: 'Accepted.' }, { p: '(저는 |)한국에 가기 위해(서|) 공부(를|) 열심히 했어요', note: 'Accepted.' }],
        diag: [{ p: '(저는 |)한국에 갔기 위해(서|) 열심히 공부했어요', note: 'The past goes on the last verb only (공부했어요): 가기 위해서.' }, { p: '(저는 |)한국에 가는 위해(서|) 열심히 공부했어요', note: 'Verbs take -기: 가기 위해서.' }, { p: '(저는 |)한국에 가기 위해(서|) 열심히 공부해요', note: 'Studied = past: 공부했어요.' }] },
      { id: 'x5', q: 'Write the following sentence in Korean: “I am exercising everyday for my health.”', hint: 'to exercise = 운동하다',
        ans: ['저는 건강을 위해서 매일 운동하고 있어요.'], full: '(저는) 건강을 위해서 매일 운동하고 있어요.', skill: 'l17.noun', lenient: false,
        soft: [{ p: '(저는 |제가 |)건강을 위해(서|) 매일 운동(을 |)하고 있어요', note: 'Accepted.' }, { p: '(저는 |)매일 건강을 위해(서|) 운동(을 |)하고 있어요', note: 'Accepted.' }, { p: '(저는 |)건강을 위해(서|) 매일 운동(을 |)해요', note: 'Accepted: 운동해요 = I exercise (simple present). The key uses the progressive: 운동하고 있어요.' }],
        diag: [{ p: '(저는 |)건강를 위해(서|) 매일 운동하고 있어요', note: '건강 ends in a consonant: 건강을.' }, { p: '(저는 |)건강(이|에) 위해(서|) 매일 운동하고 있어요', note: 'Noun + 을/를 위해서: 건강을.' }, { p: '(저는 |)건강을 위해(서|) 매일 운동했어요', note: 'I am exercising = present progressive: 운동하고 있어요.' }] },
    ] },
  ],
};
