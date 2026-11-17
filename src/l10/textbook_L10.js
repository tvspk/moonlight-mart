/* textbook_L10.js — Korean 3, Lesson 10 (textbook p.67–71, answers p.197). Romanization removed.
   Track 19 = "Track 19_ver2": intro, 전에 / -기 (one block 4.7–9.9 s, unclear on ASR), then the 5 sample sentences
   (each twice, clipped). Plain "Track 19" has 집에 가기 전에 술을 마실 거예요 instead of the book's 2nd sentence.
   The explanation examples (수업 전에, 가기, 집에 가기 전에…) are marked Track 19 in the book but are not on the recording.
   Track 20 = dialogue. */
MM.lessons[10] = {
  n: 10, ko: '-기 전에', en: 'Before -ing',
  pages: { tb: '67–71', tbKey: '197', wb: '45–48', wbKey: '126–127' },
};
MM.textbook[10] = {
  blocks: [
    { t: 'h', text: 'Lesson 10 · Before -ing', ko: '-기 전에' },
    { t: 'p', text: 'In this lesson, you will learn how to say and use «-기 전에» in sentences to express “before -ing” in Korean. As with many Korean expressions and prepositions, the order is the opposite of English. In English, the word “before” comes before the clause or word, but in Korean, it comes after.' },
    { t: 'p', text: 'The key syllable here is «전». The Chinese character for «전» is 前, and it means “before”, “front”, or “earlier”. To this, add the particle «-에» to make it a preposition (a word which shows the relationship between the noun or pronoun and other words in the sentence).' },
    { t: 'track', id: '19', from: 4.7, to: 9.9, label: 'Track 19 · 전에' },
    { t: 'meaning', label: 'Word', ko: '전에', text: 'before (+ noun)' },
    { t: 'ex', items: [
      { id: 'n1', ko: '수업 전에', en: ['before class'] },
      { id: 'n2', ko: '일요일 전에', en: ['before Sunday'] },
      { id: 'n3', ko: '1시 전에', en: ['before 1 o’clock'] },
    ] },
    { t: 'p', text: 'Since «전에» is used after nouns, in order to use it with verbs such as “going” or “leaving”, the verbs need to be changed into nouns.' },
    { t: 'p', text: 'In the previous lesson, to use verbs before «같다», the verbs were changed into their noun forms by using «-(으)ㄴ/는 것». In this case, however, «-기» is used to change the verbs into nouns. (Do you remember this? If not, take a minute to go back and review Level 2, Lesson 14!)' },
    { t: 'meaning', label: 'Form', ko: 'Verb stem + -기 + 전에', text: 'before -ing' },
    { t: 'ex', items: [
      { id: 'v1', ko: '가다 → 가기 (going)', en: ['→ 가기 전에 = before going'] },
      { id: 'v2', ko: '사다 → 사기 (buying)', en: ['→ 사기 전에 = before buying'] },
      { id: 'v3', ko: '먹다 → 먹기 (eating)', en: ['→ 먹기 전에 = before eating'] },
    ] },
    { t: 'ex', items: [
      { id: 'e1', ko: '집에 가다', en: ['to go home'] },
      { id: 'e2', arrow: true, ko: '집에 가기 전에', en: ['before going home', 'before you go home'] },
      { id: 'e3', ko: '공부하다', en: ['to study'] },
      { id: 'e4', arrow: true, ko: '공부하기 전에', en: ['before studying', 'before you study'] },
      { id: 'e5', ko: '돈을 내다', en: ['to pay money'] },
      { id: 'e6', arrow: true, ko: '돈을 내기 전에', en: ['before paying money', 'before you pay money'] },
    ] },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '19', from: 10.0, to: 31.4, label: 'Track 19 · these 5 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['19', 10.0, 13.85], ko: '여기 오기 전에 뭐 했어요?', en: ['What were you doing before you came here?'] },
    { t: 'sent', id: 's2', clip: ['19', 14.05, 19.75], ko: '친구들하고 놀기 전에 숙제할 거예요.', en: ['I’m going to do homework before I hang out with (my) friends.'] },
    { t: 'note', label: 'Book', text: '«친구들하고 놀다» = to hang out with one’s friends.' },
    { t: 'sent', id: 's3', clip: ['19', 20.0, 23.55], ko: '들어오기 전에 노크하세요.', en: ['Knock before you come in.'] },
    { t: 'note', label: 'Book', text: '«들어오다» = to come in.' },
    { t: 'sent', id: 's4', clip: ['19', 23.65, 27.9], ko: '사기 전에 잘 생각하세요.', en: ['Think well before you buy it.'] },
    { t: 'note', label: 'Book', text: '«사다» = to buy.' },
    { t: 'sent', id: 's5', clip: ['19', 28.1, 31.4], ko: '도망가기 전에 잡으세요.', en: ['Catch him before he runs away.'] },
    { t: 'note', label: 'Book', text: '«도망가다» = to run away.' },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '20', lines: [
      { id: 'd1', sp: 'A', ko: '밥 먹고 운동할 거예요.', en: 'I will work out after I eat.' },
      { id: 'd2', sp: 'B', ko: '밥 먹기 전에 운동하는 것이 더 좋아요.', en: 'It is better to work out before you have a meal.' },
      { id: 'd3', sp: 'A', ko: '정말요? 몰랐어요.', en: 'Really? I didn’t know that.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '«밥 먹고» is Lesson 2 (-고: eat, and then). «운동하는 것» is the «-는 것» noun form from Lesson 9 (working out), here followed by «이 더 좋아요» = is better.' },

    { t: 'exercises', title: 'Exercises for Lesson 10', items: [
      { id: 'x1', q: 'How do you write “before (+noun)” in Korean?',
        ans: ['전에'], full: '전에', skill: 'l10.noun',
        diag: [{ p: '전', note: 'Add the particle -에: 전에.' }, { p: '기 전에', note: '-기 is only for verbs. After a noun: 전에.' }, { p: '앞에', note: '앞에 = in front of (a place, Lesson 3). Before (time): 전에.' }] },
      { id: 'x2', q: 'Write “before studying / before you study” in Korean.',
        ans: ['공부하기 전에'], full: '공부하기 전에', lenient: false,
        diag: [{ p: '공부했기 전에', note: 'No past before 기: 공부하기 전에.' }, { p: '공부하는 전에', note: '-는 is Lesson 9 (것 같아요). Before 전에, use -기: 공부하기 전에.' }, { p: '공부 전에', note: 'Good Korean (공부 = study, a noun), but the exercise wants the verb: 공부하기 전에.' }, { p: '전에 공부하기', note: '전에 comes AFTER the verb in Korean: 공부하기 전에.' }] },
      { id: 'x3', q: 'Write “before paying money / before you pay money” in Korean.', hint: 'To pay money = 돈을 내다',
        ans: ['돈을 내기 전에'], full: '돈을 내기 전에', lenient: false, soft: [{ p: '돈 내기 전에', note: 'Accepted: in speech 을 is often dropped. The book: 돈을 내기 전에.' }],
        diag: [{ p: '돈을 냈기 전에', note: 'No past before 기: 내기 전에.' }, { p: '돈을 내는 전에', note: 'Before 전에, use -기: 내기 전에.' }, { p: '돈을 내다 전에', note: 'Take off 다 and add 기: 내기 전에.' }] },
      { id: 'x4', q: 'Translate the following sentence to Korean: “Knock before you come in.”', hint: '들어오다 = to come in',
        ans: ['들어오기 전에 노크하세요.'], lenient: false, soft: [{ p: '들어오기 전에 노크(를|) (해 주세요|하세요)', note: 'Accepted. The book: 들어오기 전에 노크하세요.' }],
        diag: [{ p: '노크하세요 들어오기 전에', note: 'In Korean, the “before” part comes first and the verb stays at the end: 들어오기 전에 노크하세요.' }, { p: '들어왔기 전에 노크하세요', note: 'No past before 기: 들어오기.' }, { p: '들어오는 전에 노크하세요', note: 'Use -기 before 전에: 들어오기 전에.' }, { p: '들어오기 전에 노크해요', note: '노크해요 just says “you knock”. A request: 노크하세요.' }] },
      { id: 'x5', q: 'Write “Think well before you buy” in Korean.', hint: 'To buy = 사다',
        ans: ['사기 전에 잘 생각하세요.'], lenient: false, soft: [{ p: '사기 전에 (잘 |)생각(을 |)(잘 |)(해 주세요|하세요)', note: 'Accepted. The book: 사기 전에 잘 생각하세요.' }],
        diag: [{ p: '샀기 전에 잘 생각하세요', note: 'No past before 기: 사기 전에.' }, { p: '살기 전에 잘 생각하세요', note: '살기 = living (살다). To buy = 사다 → 사기 전에.' }, { p: '사는 전에 잘 생각하세요', note: 'Use -기 before 전에: 사기.' }] },
    ] },
  ],
};
