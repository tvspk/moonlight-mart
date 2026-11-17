/* textbook_L16.js — Korean 3, Lesson 16 (textbook p.105–109, answers p.198). Romanization removed.
   The PDF text layer garbles the heading “-ই/য/ৈਃ” = -아/어/여요 (restored). The book says the first ending is “the most heard and
   used way to say ‘yes’” — an obvious slip for “let’s”; printed here as “let’s” with an app note.
   Track 31: intro (0–4.5 s), the endings -아요 / -어요 / -여요 (each twice, one block 5.0–9.6 s), then the 5 sample sentences
   (each twice, clipped by silence detection + ASR 12.6–43.4 s). The 시작하다 example forms are not on it. Track 32 = dialogue. */
MM.lessons[16] = {
  n: 16, ko: '-아/어/여요 (청유형)', en: 'Let’s',
  pages: { tb: '105–109', tbKey: '198', wb: '67–69', wbKey: '131–132' },
};
MM.textbook[16] = {
  blocks: [
    { t: 'h', text: 'Lesson 16 · Let’s', ko: '-아/어/여요 (청유형)' },
    { t: 'p', text: '«안녕하세요»! “Let’s” get right into this lesson! When asking other people to do something with you, in English, you would most likely say something such as “Let’s go”, “Let’s do it”, or “Let’s start”.' },
    { t: 'p', text: 'There are a few different ways to say “let’s” in Korean:' },
    { t: 'ex', items: [
      { id: 'e1', ko: '1. -아/어/여요', en: ['polite/plain'] },
      { id: 'e2', ko: '2. -(으)시죠', en: ['honorific'] },
      { id: 'e3', ko: '3. -자', en: ['informal'] },
      { id: 'e4', ko: '4. -(으)ㄹ래요?', en: ['polite/casual'] },
      { id: 'e5', ko: '5. -(으)실래요?', en: ['polite/formal'] },
    ] },
    { t: 'h2', text: 'Ex) 시작하다 = to start; to begin' },
    { t: 'ex', items: [
      { id: 'f1', ko: '1. 시작해요.', en: ['Let’s start. (plain)'] },
      { id: 'f2', ko: '2. 시작하시죠.', en: ['Let’s start. (honorific)'] },
      { id: 'f3', ko: '3. 시작하자.', en: ['Let’s start. (informal)'] },
      { id: 'f4', ko: '4. 시작할래요?', en: ['Shall we start? (polite/casual)'] },
      { id: 'f5', ko: '5. 시작하실래요?', en: ['Shall we start? (polite/formal)'] },
    ] },
    { t: 'p', text: 'The most frequently used form is the first example above, «-아/어/여요». As the most heard and used way to say “let’s”, this lesson will focus only on this ending. The other forms will be covered through future lessons.' },
    { t: 'note', label: 'App note (not from the book)', text: 'The book prints “the most heard and used way to say ‘yes’” here: clearly a slip for “let’s”.' },

    { t: 'h2', text: '-아/어/여요' },
    { t: 'track', id: '31', from: 5.0, to: 9.6, label: 'Track 31 · -아요, -어요, -여요' },
    { t: 'p', text: 'If you are looking at this verb ending and wondering why it looks the same as the plain present tense ending, that is because it is! Although it is the exact same ending, you generally tell the difference through context. Take a look at a few sample sentences to see how easily the meaning can be determined.' },
    { t: 'note', label: 'App note (not from the book)', text: 'So the forms are the 해요 forms you know from Level 2 and Lesson 1: 가요, 먹어요, 시작해요, and for ㅂ-irregular verbs 누워요 (Lesson 11). Clues for “let’s”: 우리 (we), 같이 (together), a time or place you propose, or an answer to “shall we…?” (-(으)ㄹ까요?, Lesson 4).' },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '31', from: 12.4, to: 43.4, label: 'Track 31 · these 5 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['31', 12.4, 17.5], ko: '저도 서점에 갈 거예요. 같이 가요!', en: ['I’m going to the bookstore, too. Let’s go together!'] },
    { t: 'sent', id: 's2', clip: ['31', 17.5, 23.0], ko: '배 안 고파요? 우리 햄버거 먹어요.', en: ['Aren’t you hungry? Let’s eat hamburgers.'] },
    { t: 'sent', id: 's3', clip: ['31', 23.0, 30.1], ko: '지금 두 시예요. 세 시에 여기에서 만나요.', en: ['It is two o’clock now. Let’s meet here at three o’clock.'] },
    { t: 'sent', id: 's4', clip: ['31', 30.1, 37.9], ko: '저 금요일까지 바빠요. 토요일에 시작해요. 어때요?', en: ['I will be busy until Friday. Let’s start on Saturday. What do you think?'] },
    { t: 'sent', id: 's5', clip: ['31', 37.9, 43.4], ko: '다른 데 가요. 여기 안 좋은 것 같아요.', en: ['Let’s go somewhere else. I think this place is not so good.'] },
    { t: 'p', text: '* Most Korean phrase books out there will teach learners the ending «-(으)ㅂ시다». There are some situations where the use of «-(으)ㅂ시다» would be natural, but not in everyday situations. For example, when talking with close friends, «-(으)ㅂ시다» should never be used. The appropriate usage of «-(으)ㅂ시다» will be introduced in a future lesson, but for now, please use «-아/어/여요».' },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '32', lines: [
      { id: 'd1', sp: 'A', ko: '경화 씨, 일 시작하기 전에 저랑 잠깐 이야기 좀 해요.', en: 'Kyung-hwa, let’s have a chat for a moment before you start working.' },
      { id: 'd2', sp: 'B', ko: '네, 지금 해요.', en: 'Sure. Let’s talk now.' },
      { id: 'd3', sp: 'A', ko: '좋아요. 그럼 잠깐 나갈까요?', en: 'Good. Then shall we go out for a second?' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '시작하기 전에 = before starting (Lesson 10). 저랑 = with me. 그럼 = then (Lesson 15). 나갈까요? = shall we go out? (Lesson 4).' },

    { t: 'exercises', title: 'Exercises for Lesson 16', items: [
      { id: 'x1', q: 'There are a few different ways to say “let us” or “let’s” in Korean. What is the most frequently used way of saying “let’s” in Korean?',
        choices: ['-아/어/여요', '-(으)시죠', '-자', '-(으)ㄹ래요?', '-(으)실래요?'], right: '-아/어/여요', choicesKo: true, ans: ['-아/어/여요'], skill: 'l16.endings',
        why: 'the same ending as the plain present tense; context tells you it means “let’s”.', wrongNote: 'That one exists too, but the most frequently used is the plain one: -아/어/여요.' },
      { id: 'x2', q: 'Circle the form which is NOT translated as “Let’s …” in Korean:',
        choices: ['-아/어/여요', '-(으)시죠', '-자', '-(으)ㄴ'], right: '-(으)ㄴ', choicesKo: true, ans: ['-(으)ㄴ'], skill: 'l16.endings',
        why: '-(으)ㄴ makes adjectives (Lesson 13: 좋은 사람). The other three are ways to say “let’s”.', wrongNote: 'That one IS a way to say “let’s”. Look for the ending from Lesson 13.' },
      { id: 'x3', q: 'Circle the sentence which does NOT mean “Let’s start” in Korean:', hint: '시작하다 = to start; to begin',
        choices: ['시작해요.', '시작하자.', '시작하고 싶어요.', '시작할래요?'], right: '시작하고 싶어요.', choicesKo: true, ans: ['시작하고 싶어요.'], skill: 'l16.endings',
        why: '시작하고 싶어요 = I want to start.', wrongNote: 'That one is a way to say “let’s start” (or “shall we start?”).' },
      { id: 'x4', q: 'Fill in the blank: “I’m going to the bookstore, too. Let’s go together!”', hint: 'bookstore = 서점', ko: '저도 서점에 갈 거예요. ___',
        ans: ['같이 가요!'], full: '저도 서점에 갈 거예요. 같이 가요!', skill: 'l16.form', lenient: false,
        soft: [{ p: '(우리 |)같이 가요', note: 'Accepted.' }, { p: '(우리 |)같이 갈래요', note: 'Accepted: -(으)ㄹ래요? = shall we go? (polite/casual). The book’s key: 같이 가요!' }],
        diag: [{ p: '같이 갑시다', note: 'The book: -(으)ㅂ시다 is not natural in everyday situations. Use -아/어/여요: 같이 가요!' }, { p: '같이 가자', note: '-자 is informal (반말). Polite “let’s”: 같이 가요!' }, { p: '같이 갈 거예요', note: 'That is “we will go together” (a plan, not a suggestion). Let’s go: 같이 가요!' }, { p: '같이 가세요', note: '가세요 = please go (you, not us). Let’s go: 같이 가요!' }, { p: '같이 가아요', note: '가 + 아요 contracts: 가요.' }] },
      { id: 'x5', q: 'Fill in the blank: “Aren’t you hungry? Let’s eat hamburgers.”', hint: 'hamburger = 햄버거', ko: '배 안 고파요? ___',
        ans: ['우리 햄버거 먹어요.'], full: '배 안 고파요? 우리 햄버거 먹어요.', skill: 'l16.form', lenient: false,
        soft: [{ p: '(우리 |)(같이 |)햄버거(를|) (같이 |)먹어요', note: 'Accepted.' }, { p: '(우리 |)(같이 |)햄버거(를|) (같이 |)먹을래요', note: 'Accepted: shall we eat…? (polite/casual). The key: 우리 햄버거 먹어요.' }],
        diag: [{ p: '(우리 |)햄버거(를|) 먹읍시다', note: 'The book: avoid -(으)ㅂ시다 in everyday talk. Use -아/어/여요: 먹어요.' }, { p: '(우리 |)햄버거(를|) 먹자', note: '-자 is informal (반말). Polite: 먹어요.' }, { p: '(우리 |)햄버거(를|) 먹으세요', note: '먹으세요 = please eat (you). Let’s eat: 먹어요.' }, { p: '(우리 |)햄버거(를|) (먹아요|머거요)', note: '먹 has ㅓ: 먹어요.' }, { p: '(우리 |)햄버거(를|) 먹었어요', note: 'That is the past (we ate). Let’s eat: 먹어요.' }] },
    ] },
  ],
};
