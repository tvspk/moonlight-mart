/* textbook_L9.js — Korean 3, Lesson 9 (textbook p.60–66, answers p.197). Romanization removed.
   Track 17: intro, the three endings (one block 4.9–13.6 s, unclear on ASR), then the 5 sample sentences (each twice, clipped).
   The explanation examples (커피 같아요, 예쁜 것, 이상한 것 같아요, 눈이 오는 것 같아요…) are marked Track 17 in the book
   but are not on the recording: no play buttons. Track 18 = dialogue.
   Exercises 1–3 = match (Korean options a–c, as printed). */
MM.lessons[9] = {
  n: 9, ko: '-(으)ㄴ/는/(으)ㄹ 것 같아요', en: 'To look like, To seem like (used with verbs)',
  pages: { tb: '60–66', tbKey: '197', wb: '41–44', wbKey: '125–126' },
};
MM.textbook[9] = {
  blocks: [
    { t: 'h', text: 'Lesson 9 · To look like, To seem like (used with verbs)', ko: '-(으)ㄴ/는/(으)ㄹ 것 같아요' },
    { t: 'p', text: 'In the previous lesson, you learned how to use «같아요» with nouns to mean “it looks like” or “it seems to be”.' },
    { t: 'ex', items: [
      { id: 'r1', ko: '커피 같아요.', en: ['It looks like coffee.', 'I think it’s coffee.'] },
      { id: 'r2', ko: '저 사람 소연 씨 같아요.', en: ['That person looks like So-yeon.', 'I think that person is So-yeon.'] },
    ] },
    { t: 'p', text: 'In the examples above, both «커피» and «소연 씨» are nouns. The usage of «같아요» is fairly simple and straightforward: just add «같아요» after the noun.' },
    { t: 'p', text: 'When using «같아요» with verbs, however, the verb needs to be changed into its noun form. There are a few different ways to change a verb into a noun, but here, the «-는 것» form will be used. (If you studied with the Level 2 book, you learned how to use «-는 것» in Lesson 19!)' },
    { t: 'track', id: '17', from: 4.9, to: 13.6, label: 'Track 17 · the endings' },

    { t: 'h2', text: '1. Descriptive verbs' },
    { t: 'meaning', label: 'Form', ko: 'Verb stem + -(으)ㄴ 것', text: 'descriptive verbs' },
    { t: 'ex', items: [
      { id: 'f1', ko: '예쁘다', en: ['to be pretty'] },
      { id: 'f2', ko: '예쁜 것', en: ['being pretty; something pretty; the thing that is pretty'] },
    ] },
    { t: 'h2', text: '2. Action verbs' },
    { t: 'meaning', label: 'Present tense', ko: 'Verb stem + -는 것', text: 'action verbs, present' },
    { t: 'ex', items: [
      { id: 'f3', ko: '말하다', en: ['to talk, to speak; to say'] },
      { id: 'f4', ko: '말하는 것', en: ['talking; what one is saying; the act of talking'] },
    ] },
    { t: 'meaning', label: 'Past tense', ko: 'Verb stem + -(으)ㄴ 것', text: 'action verbs, past' },
    { t: 'ex', items: [
      { id: 'f5', ko: '말한 것', en: ['what one said; the fact that one talked'] },
    ] },
    { t: 'meaning', label: 'Future tense', ko: 'Verb stem + -(으)ㄹ 것', text: 'future' },
    { t: 'ex', items: [
      { id: 'f6', ko: '말할 것', en: ['what one will say; the fact that one will talk'] },
    ] },

    { t: 'h2', text: 'How to use 같아요 with verbs' },
    { t: 'p', text: 'Okay! Now that you know how to change verbs into the «-(으)ㄴ/는 것» noun form, you are ready to take the next step. After changing a verb into its noun form, add «같아요» after «것». It is exactly the same as using «같아요» with nouns.' },
    { t: 'meaning', label: '1', ko: '-(으)ㄴ 것 같아요', text: 'present tense for descriptive verbs / past tense for action verbs' },
    { t: 'meaning', label: '2', ko: '-는 것 같아요', text: 'present tense for action verbs' },
    { t: 'meaning', label: '3', ko: '-(으)ㄹ 것 같아요', text: 'future tense for action / descriptive verbs' },

    { t: 'h2', text: 'What does -것 같아요 mean?' },
    { t: 'p', text: 'Even when «같아요» is combined with a verb, since «-것» makes the verb a noun, the basic meaning and usage is the same as “Noun + 같아요”.' },
    { t: 'p', text: '1. “It looks like…” 2. “It seems to be…” 3. “To me it looks like…” 4. “I think it is…” 5. “I think it will…” 6. “I think it was…”' },
    { t: 'ex', items: [
      { id: 'e1', ko: '이상하다', en: ['to be strange'] },
      { id: 'e2', ko: '이상하 + ㄴ 것 같아요 = 이상한 것 같아요.', en: ['It seems to be strange.', 'I think it is strange.'] },
      { id: 'e3', ko: '눈이 오다', en: ['to snow'] },
      { id: 'e4', ko: '눈이 오 + 는 것 같아요 = 눈이 오는 것 같아요.', en: ['It seems to be snowing.', 'I think it is snowing.'] },
      { id: 'e5', ko: '눈이 오 + ㄹ 것 같아요 = 눈이 올 것 같아요.', en: ['I think it will snow.', 'It seems like it will snow.'] },
      { id: 'e6', ko: '이야기하다', en: ['to tell; to talk'] },
      { id: 'e7', ko: '이야기하 + ㄴ 것 같아요 = 이야기한 것 같아요.', en: ['I think they told them.', 'It looks like they talked.'] },
      { id: 'e8', ko: '이야기하 + ㄹ 것 같아요 = 이야기할 것 같아요.', en: ['I think they will talk.', 'It seems like they will talk.'] },
      { id: 'e9', ko: '이야기하 + 는 것 같아요 = 이야기하는 것 같아요.', en: ['I think they are talking.', 'They seem to talk to each other.'] },
    ] },
    { t: 'p', text: 'As seen in the examples above, «-것 같아요» can also be used to mean “I think” in Korean. In fact, this phrase is used so often in Korean that it is almost guaranteed you will come across it when interacting with native speakers.' },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '17', from: 17.3, to: 37.17, label: 'Track 17 · these 5 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['17', 17.3, 20.75], ko: '여기 비싼 것 같아요.', en: ['I think this place is expensive.', 'This place looks expensive.', 'This place seems to be expensive.'] },
    { t: 'sent', id: 's2', clip: ['17', 20.8, 23.2], ko: '그런 것 같아요.', en: ['I think so.', 'It seems to be so.', 'It looks like it.'] },
    { t: 'note', label: 'Book', text: 'Verb = «그렇다» (irregular) = to be so; to be that way.' },
    { t: 'sent', id: 's3', clip: ['17', 23.55, 27.7], ko: '이 영화 재미있을 것 같아요.', en: ['I think this movie will be interesting.', 'This movie looks like it will be interesting (to watch).'] },
    { t: 'sent', id: 's4', clip: ['17', 27.8, 33.15], ko: '이 가방, 여기에서 산 것 같아요.', en: ['This bag seems like we bought it here.', 'I think I bought this bag here.'] },
    { t: 'sent', id: 's5', clip: ['17', 33.35, 37.17], ko: '아마 안 할 것 같아요.', en: ['I think I probably won’t do it.', 'It looks like we are probably not going to do it.'] },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '18', lines: [
      { id: 'd1', sp: 'A', ko: '여기 맛있을 것 같아요.', en: 'I think the food here will be good.' },
      { id: 'd2', sp: 'B', ko: '맞아요.', en: 'I think so, too.' },
      { id: 'd3', sp: 'A', ko: '근데 좀 비쌀 것 같아요.', en: 'But, I think it will be a little pricey.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '«맞아요» literally means “that’s right”; the book translates it “I think so, too.” «근데» is the spoken short form of «그런데» (but).' },

    { t: 'exercises', title: 'Exercises for Lesson 9', items: [
      { id: 'x1', q: 'Match the English sentence to its Korean equivalent: “I think they told them. / It looks like they talked.”', hint: '“To tell” or “to talk” is 이야기하다 in Korean.',
        choices: ['이야기할 것 같아요.', '이야기한 것 같아요.', '이야기하는 것 같아요.'], right: '이야기한 것 같아요.', choicesKo: true, ans: ['이야기한 것 같아요.'], skill: 'l9.tense',
        wrongNote: 'Not that one. Past tense for an action verb: stem + ㄴ 것 같아요.' },
      { id: 'x2', q: 'Match: “I think they are talking. / They seem to talk to each other.”',
        choices: ['이야기할 것 같아요.', '이야기한 것 같아요.', '이야기하는 것 같아요.'], right: '이야기하는 것 같아요.', choicesKo: true, ans: ['이야기하는 것 같아요.'], skill: 'l9.tense',
        wrongNote: 'Not that one. Present tense for an action verb: stem + 는 것 같아요.' },
      { id: 'x3', q: 'Match: “I think they will talk. / It seems like they will talk.”',
        choices: ['이야기할 것 같아요.', '이야기한 것 같아요.', '이야기하는 것 같아요.'], right: '이야기할 것 같아요.', choicesKo: true, ans: ['이야기할 것 같아요.'], skill: 'l9.tense',
        wrongNote: 'Not that one. Future: stem + ㄹ 것 같아요.' },
      { id: 'x4', q: 'Write “I think this place is expensive / It looks expensive / This place seems to be expensive” in Korean.', hint: 'To be expensive = 비싸다',
        ans: ['여기 비싼 것 같아요.'], lenient: false, soft: [{ p: '(여기(는|가|) |이 (곳|가게)(은|이|) |)비싼 것 같아요', note: 'Accepted. The book: 여기 비싼 것 같아요.' }],
        diag: [{ p: '(여기 |)비싸는 것 같아요', note: '비싸다 is a descriptive verb: present = stem + ㄴ → 비싼 것 같아요. (-는 is for action verbs.)' },
          { p: '(여기 |)비싸은 것 같아요', note: '비싸 ends in a vowel: just add ㄴ → 비싼.' },
          { p: '(여기 |)비쌀 것 같아요', note: '비쌀 것 같아요 = I think it WILL be expensive. Present for a descriptive verb: 비싼 것 같아요.' },
          { p: '(여기 |)비쌌 것 같아요', note: 'No 았/었 before 것: present = 비싼 것 같아요.' },
          { p: '(여기 |)비싸 같아요', note: 'A verb needs the noun form first: 비싼 것 + 같아요.' }] },
      { id: 'x5', q: 'Translate the following to Korean: “I think so / It seems to be so / It looks like it.”', hint: 'To be so; to be that way = 그렇다',
        ans: ['그런 것 같아요.'], lenient: false, soft: [{ p: '(저도 |)그런 것 같아요', note: 'Accepted.' }],
        diag: [{ p: '그렇은 것 같아요', note: '그렇다 is irregular: the ㅎ drops → 그런 것 같아요.' },
          { p: '그렇는 것 같아요', note: '그렇다 is a descriptive verb and irregular: 그런 것 같아요.' },
          { p: '그럴 것 같아요', note: '그럴 것 같아요 = I think it will be so. “I think so” (now): 그런 것 같아요.' },
          { p: '그래 것 같아요', note: '그렇다 → 그런 것 같아요.' }] },
    ] },
  ],
};
