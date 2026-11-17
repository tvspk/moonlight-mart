/* textbook_L21.js — Korean 3, Lesson 21 (textbook p.134–140, answers p.198). Romanization removed.
   The PDF text layer garbles the three conjugation rules (“-ؘח is used after action verbs, after ׮ and ׮ and after -ও or -ѷ …”);
   restored as -는데 / -은데 / -ㄴ데, 있다 / 없다, -았/었 / -겠, ㄹ, 이다 / 아니다 from the examples and the Workbook key p.135 (which prints
   the same rules readably: “after -았 or -겠”).
   Track 41: intro (0–4.7 s), the 7 example verbs (block 5.3–29.6 s, each twice), then the 8 sample sentences (clipped by silence detection
   + ASR 33.2–73.5 s, each twice). The Usage examples are not on it. Track 42 = dialogue. */
MM.lessons[21] = {
  n: 21, ko: '-는데 / -은데 / -ㄴ데', en: 'Linking Verbs (-는데)',
  pages: { tb: '134–140', tbKey: '198', wb: '84–87', wbKey: '135' },
};
MM.textbook[21] = {
  blocks: [
    { t: 'h', text: 'Lesson 21 · Linking Verbs', ko: '는/은/ㄴ데' },
    { t: 'p', text: 'The verb ending in this lesson has an incredibly versatile meaning. While the basic structure ends in -데, the words or phrases which come right before -데 change a bit.' },

    { t: 'h2', text: 'Conjugation' },
    { t: 'meaning', label: 'Rule 1', ko: '-는데', text: 'is used after action verbs, after 있다 and 없다, and after -았/었 or -겠.' },
    { t: 'meaning', label: 'Rule 2', ko: '-은데', text: 'is used after descriptive verbs which have a final consonant in the verb stem, except for the consonant ㄹ.' },
    { t: 'meaning', label: 'Rule 3', ko: '-ㄴ데', text: 'is used after descriptive verbs which end in a vowel or the consonant ㄹ (in this case, ㄹ is dropped), and after 이다 and 아니다.' },
    { t: 'note', label: 'App note (not from the book)', text: 'The PDF prints these three lines garbled; restored with the Workbook key (p.135). So: 먹는데, 있는데, 먹었는데 (past) · 작은데 · 예쁜데, 먼데, 학생인데 (이다), 아닌데. The same split as -는 / -(으)ㄴ before a noun (Lessons 13 and 14). ㅂ-irregular descriptive verbs change as in Lesson 11/13: 춥다 → 추운데 (but 좁다 keeps its ㅂ: 좁은데).' },
    { t: 'p', text: 'Ex)' },
    { t: 'track', id: '41', from: 5.3, to: 29.6, label: 'Track 41 · 하다 하는데 … 멀다 먼데' },
    { t: 'ex', items: [
      { id: 'e1', ko: '하다 → 하는데', en: ['to do'] },
      { id: 'e2', ko: '있다 → 있는데', en: ['to be, to have'] },
      { id: 'e3', ko: '먹다 → 먹는데', en: ['to eat'] },
      { id: 'e4', ko: '작다 → 작은데', en: ['to be small'] },
      { id: 'e5', ko: '좁다 → 좁은데', en: ['to be narrow'] },
      { id: 'e6', ko: '예쁘다 → 예쁜데', en: ['to be pretty'] },
      { id: 'e7', ko: '멀다 → 먼데', en: ['to be far'] },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: 'The English meanings of the 7 verbs are ours; the book lists only the Korean.' },

    { t: 'h2', text: 'Variety of Usage' },
    { t: 'p', text: 'The way this ending can be used is very diverse.' },
    { t: 'meaning', label: 'Usage 1', ko: '-는데', text: 'Explaining the background or the situation before making a suggestion, a request, or a question.' },
    { t: 'ex', items: [
      { id: 'u1', ko: '내일 일요일인데, 뭐 할 거예요?', en: ['It’s Sunday tomorrow + (-ㄴ데) + what are you going to do?'] },
    ] },
    { t: 'meaning', label: 'Usage 2', ko: '-는데', text: 'Explaining the situation first before explaining what happened.' },
    { t: 'ex', items: [
      { id: 'u2', ko: '어제 자고 있었는데, 한국에서 전화가 왔어요.', en: ['I was sleeping yesterday + (-는데) + I got a phone call from Korea.'] },
    ] },
    { t: 'meaning', label: 'Usage 3', ko: '-는데', text: 'Showing a result or situation which is contrasting to the previous action or situation.' },
    { t: 'ex', items: [
      { id: 'u3', ko: '아직 9시인데 벌써 졸려요.', en: ['It’s still 9 o’clock but I am already sleepy.'] },
    ] },
    { t: 'p', text: 'The second part (after -는데) can be omitted when the meaning is easily implied.' },
    { t: 'ex', items: [
      { id: 'u3b', ko: '준비 많이 했는데(요)…', en: ['I prepared a lot, but…'] },
    ] },
    { t: 'meaning', label: 'Usage 4', ko: '-는데', text: 'Showing surprise or exclamation.' },
    { t: 'ex', items: [
      { id: 'u4', ko: '멋있는데(요)!', en: ['Oh, that’s cool!'] },
    ] },
    { t: 'meaning', label: 'Usage 5', ko: '-는데', text: 'Asking a question (expecting some explanation about a situation or behavior).' },
    { t: 'ex', items: [
      { id: 'u5', ko: '지금 어디에 있는데(요)?', en: ['So where are you now?'] },
    ] },
    { t: 'meaning', label: 'Usage 6', ko: '-는데', text: 'Expecting an answer or a response.' },
    { t: 'ex', items: [
      { id: 'u6', ko: '지금(요)? 지금 바쁜데(요).', en: ['Now? I’m busy now, so…'] },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '벌써 = already. 준비 = preparation. -는데요 at the end of a sentence is the polite (해요) way to stop after -는데: 바쁜데요, 좋은데요.' },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '41', from: 33.2, to: 73.5, label: 'Track 41 · these 8 sentences' },
    { t: 'sent', id: 's1', clip: ['41', 33.2, 39.6], ko: '내일 친구 생일인데, 선물을 아직 못 샀어요.', en: ['It’s my friend’s birthday tomorrow, but I haven’t been able to buy a present.'] },
    { t: 'sent', id: 's2', clip: ['41', 39.6, 45.6], ko: '이거 일본에서 샀는데, 선물이에요.', en: ['I bought this in Japan, and it’s a present for you.'] },
    { t: 'sent', id: 's3', clip: ['41', 45.6, 51.6], ko: '오늘 뉴스에서 봤는데, 그거 진짜예요?', en: ['I saw it in the news today. Is that for real?'] },
    { t: 'sent', id: 's4', clip: ['41', 51.6, 54.1], ko: '이거 좋은데요!', en: ['I like this! / This is good!'] },
    { t: 'sent', id: 's5', clip: ['41', 54.1, 57.6], ko: '어? 여기 있었는데.', en: ['Huh? It was here…'] },
    { t: 'sent', id: 's6', clip: ['41', 57.6, 63.6], ko: '영화 재미있었는데, 무서웠어요.', en: ['The movie was interesting, but it was scary.'] },
    { t: 'sent', id: 's7', clip: ['41', 63.6, 67.9], ko: '영화 봤는데, 무서웠어요.', en: ['I saw a movie, and it was scary.'] },
    { t: 'sent', id: 's8', clip: ['41', 67.9, 73.5], ko: '저 지금 학생인데, 일도 하고 있어요.', en: ['I am a student now, but I’m working, too.'] },
    { t: 'note', label: 'App note (not from the book)', text: 'One ending, many English words: “but” (s1, s6, s8), “and” (s2, s7), a full stop (s3), “…” (s5). It sets the scene; what comes after it depends on the situation. 무섭다 = to be scary (무서웠어요, ㅂ-irregular).' },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '42', lines: [
      { id: 'd1', sp: 'A', ko: '이 가방 너무 사고 싶어요.', en: 'I want to buy this bag so bad.' },
      { id: 'd2', sp: 'B', ko: '사세요. 지금 세일하지 않아요?', en: 'Buy it. Isn’t it on sale now?' },
      { id: 'd3', sp: 'A', ko: '맞아요. 지금 세일하고 있는데, 세일해도 너무 비싸요.', en: 'Right. It is on sale now, but it is still too expensive.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '세일하다 = to be on sale. 세일하고 있는데 (-는데, this lesson) + 세일해도 (-아/어/여도, Lesson 20) in one line.' },

    { t: 'exercises', title: 'Exercises for Lesson 21', items: [
      { id: 'x1', q: '“Sunday” is “일요일” in Korean. How do you say “It’s Sunday tomorrow + (-ㄴ데) + what are you going to do?” (explaining the background before a question)',
        ans: ['내일 일요일인데, 뭐 할 거예요?'], full: '내일 일요일인데, 뭐 할 거예요?', skill: 'l21.noun', lenient: false,
        soft: [{ p: '내일(은|) 일요일인데 뭐(를|) 할 거예요', note: 'Accepted.' }, { p: '내일(은|) 일요일인데 뭐(를|) 해요', note: 'Accepted: the present can talk about tomorrow. The key: 뭐 할 거예요?' }],
        diag: [{ p: '내일(은|) (일요일은데|일요일는데|일요일데) 뭐(를|) 할 거예요', note: 'Noun + 이다 → 인데: 일요일인데.' }, { p: '내일(은|) 일요일이라서 뭐(를|) 할 거예요', note: '-이라서 = because (Lesson 7). The background before a question = 일요일인데.' }, { p: '내일(은|) 일요일이에요 뭐(를|) 할 거예요', note: 'Join the two parts with -ㄴ데: 일요일인데, 뭐 할 거예요?' }] },
      { id: 'x2', q: '“To get a phone call” is “전화가 오다”. How do you write “I was sleeping yesterday + (-는데) + I got a phone call from Korea.”?',
        ans: ['어제 자고 있었는데, 한국에서 전화가 왔어요.'], full: '어제 자고 있었는데, 한국에서 전화가 왔어요.', skill: 'l21.past', lenient: false,
        soft: [{ p: '어제 (제가 |저는 |)자고 있었는데 한국에서 전화(가|) 왔어요', note: 'Accepted.' }, { p: '어제 (제가 |저는 |)자고 있는데 한국에서 전화(가|) 왔어요', note: 'Accepted: Koreans often say 자고 있는데 here, because the last verb (왔어요) already shows the past. The key: 자고 있었는데.' }],
        diag: [{ p: '어제 (제가 |)자고 (있었은데|있었인데) 한국에서 전화(가|) 왔어요', note: 'After -았/었 always -는데: 있었는데.' }, { p: '어제 (제가 |)잤는데 한국에서 전화(가|) 왔어요', note: '잤는데 = I slept (and it was over). “I was sleeping” = 자고 있었는데.' }, { p: '어제 (제가 |)자고 있었는데 한국에서 전화(가|) (와요|올 거예요)', note: 'The call came yesterday: 왔어요.' }] },
      { id: 'x3', q: '“To be scary” is “무섭다”. How do you say “I saw a movie, and it was scary”?',
        ans: ['영화 봤는데, 무서웠어요.'], full: '영화 봤는데, 무서웠어요.', skill: 'l21.past', lenient: false,
        soft: [{ p: '(어제 |)영화(를|) 봤는데 (너무 |정말 |)무서웠어요', note: 'Accepted.' }, { p: '영화(를|) 보는데 (너무 |)무서웠어요', note: 'Accepted: 보는데 = while I was watching. The key: 봤는데.' }],
        diag: [{ p: '영화(를|) (봤은데|봤인데|본데) 무서웠어요', note: 'After the past 았/었 → -는데: 봤는데.' }, { p: '영화(를|) 봤는데 (무섭었어요|무서왔어요)', note: '무섭다 is ㅂ-irregular (Lesson 11): 무서워요 → 무서웠어요.' }, { p: '영화(를|) 봤는데 무서워요', note: 'It was scary (past): 무서웠어요.' }, { p: '영화(를|) 봐서 무서웠어요', note: '봐서 = because I saw it. The book’s answer only sets the scene: 봤는데.' }] },
      { id: 'x4', q: '“The news” is “뉴스”. How do you write “I saw it in the news today. Is that for real?”',
        ans: ['오늘 뉴스에서 봤는데, 그거 진짜예요?'], full: '오늘 뉴스에서 봤는데, 그거 진짜예요?', skill: 'l21.past', lenient: false,
        soft: [{ p: '오늘 뉴스에서 봤는데 (그거|그게|그것이) (진짜|정말|사실)(예요|이에요)', note: 'Accepted.' }],
        diag: [{ p: '오늘 뉴스에서 (봤은데|봤인데|본데|보는데) (그거|그게) 진짜예요', note: 'You saw it (past) → 봤는데.' }, { p: '오늘 뉴스에서 봤는데 (그거|그게) 진짜에요', note: 'Spelling: 진짜 ends in a vowel → 진짜예요 (not 에요).' }] },
      { id: 'x5', q: 'How do you say “I like this! / This is good!” (showing surprise or exclamation)?',
        ans: ['이거 좋은데요!'], full: '이거 좋은데요!', skill: 'l21.usage', lenient: false,
        soft: [{ p: '(이거|이것|이게|와 이거) 좋은데요', note: 'Accepted.' }, { p: '(이거|이것|이게) (정말|진짜) 좋은데요', note: 'Accepted.' }],
        diag: [{ p: '(이거|이게) (좋는데요|좋인데요|조은데요)', note: '좋다 is descriptive with a final consonant → 좋은데요.' }, { p: '(이거|이게) 좋은데', note: 'Add 요 to stay polite: 좋은데요! (Without 요 it is casual speech, Lesson 27.)' }, { p: '(이거|이게) 좋아요', note: 'Correct Korean, but this lesson’s exclamation is 좋은데요!' }] },
    ] },
  ],
};
