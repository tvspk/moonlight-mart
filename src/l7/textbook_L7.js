/* textbook_L7.js — Korean 3, Lesson 7 (textbook p.46–53, answers p.196). Romanization removed.
   Track 13 = "Track 13_ver2": intro, the three endings (one block, unclear on ASR), then the 7 sample sentences
   (each twice, clipped). Plain "Track 13" has a different 3rd sentence (술을 너무 많이 마셔서…), not the book's.
   The conjugation and usage examples (먹어서, 비가 와서 못 가요…, 계획에 따라서…) are marked Track 13 in the book
   but are not on the recording: no play buttons. Track 14 = dialogue.
   Exercises 4–5 are a/b/c choices (Korean options). */
MM.lessons[7] = {
  n: 7, ko: '-아/어/여서', en: 'Linking Verbs',
  pages: { tb: '46–53', tbKey: '196', wb: '34–36', wbKey: '124–125' },
};
MM.textbook[7] = {
  blocks: [
    { t: 'h', text: 'Lesson 7 · Linking Verbs', ko: '-아/어/여서' },
    { t: 'p', text: 'Back in Lesson 2 of this level, you learned about the verb ending «-고», which is used to connect independent clauses or actions together to form one sentence, even though the two clauses may not necessarily have a strong logical relation to each other. In this lesson, you will learn the verb ending «-아/어/여 + 서» which connects two or more verbs in one sentence and can show a logical relationship between the verbs.' },
    { t: 'p', text: 'Do you remember the two conjunctions «그리고» and «그래서» from Level 2, Lesson 3? «그리고» means “and”, and «그래서» means “therefore” or “so”.' },
    { t: 'meaning', label: 'Compare', ko: '-고 = 그리고', text: '“and”' },
    { t: 'meaning', label: 'Compare', ko: '-아/어/여서 ≈ 그래서', text: '“therefore, so”' },
    { t: 'p', text: 'The verb ending «-고» has the same meaning as «그리고», and the verb ending «-아/어/여 + 서» is similar in meaning to «그래서».' },
    { t: 'track', id: '13', from: 5.5, to: 11.6, label: 'Track 13 · the endings' },
    { t: 'h2', text: 'Conjugation' },
    { t: 'p', text: 'Take a look at the construction and usages of «-아/어/여 + 서» in more detail:' },
    { t: 'meaning', label: '1', ko: '-아서', text: 'verb stems ending in vowels ㅏ or ㅗ + «-아서»' },
    { t: 'meaning', label: '2', ko: '-어서', text: 'verb stems ending in other vowels + «-어서»' },
    { t: 'meaning', label: '3', ko: '-여서', text: '«하» + «-여서» (→ «해서»)' },
    { t: 'ex', items: [
      { id: 'v1', ko: '먹다 → 먹 + -어서 = 먹어서', en: ['to eat'] },
      { id: 'v2', ko: '만들다 → 만들 + -어서 = 만들어서', en: ['to make'] },
      { id: 'v3', ko: '하다 → 하 + -여서 = 해서', en: ['to do'] },
      { id: 'v4', ko: '오다 → 오 + -아서 = 와서', en: ['to come'] },
    ] },
    { t: 'h2', text: 'Usages' },
    { t: 'meaning', label: 'Usage 1', ko: '-아/어/여서', text: 'Reason + «-아/어/여서» + result' },
    { t: 'meaning', label: 'Usage 2', ko: '-아/어/여서', text: 'An action + «-아/어/여서» + another action which takes place after the first action' },
    { t: 'meaning', label: 'Usage 3', ko: '-아/어/여서', text: 'An action + «-아/어/여서» + the purpose of or the plan after the action' },
    { t: 'meaning', label: 'Usage 4', ko: '-에 따라서 · 예를 들어서', text: 'Fixed expressions' },

    { t: 'h2', text: 'Usage #1 · Reason + -아/어/여서 + result' },
    { t: 'sent', id: 'u1a', ko: '비가 오다 + 못 가다', en: ['it rains + can’t go'] },
    { t: 'sent', id: 'u1b', arrow: true, ko: '비가 와서 못 가요.', en: ['It’s raining, so I can’t go.'] },
    { t: 'sent', id: 'u1c', arrow: true, ko: '비가 와서 못 갔어요.', en: ['It rained, so I couldn’t go.'] },
    { t: 'note', label: 'Book', text: 'Note that the tense was expressed only through the final verb.' },
    { t: 'sent', id: 'u1d', ko: '오늘은 바빠요. + 영화를 못 봐요.', en: ['Today, I’m busy. + I can’t see the movie.'] },
    { t: 'sent', id: 'u1e', arrow: true, ko: '오늘은 바빠서 영화를 못 봐요.', en: ['I’m busy today, so I can’t see the movie.'] },
    { t: 'sent', id: 'u1f', ko: '만나다 + 반갑다', en: ['to meet + to be glad to see someone'] },
    { t: 'sent', id: 'u1g', arrow: true, ko: '만나서 반갑습니다.', en: ['I met you, so I’m glad.', 'It’s nice to meet you.'] },
    { t: 'sent', id: 'u1h', arrow: true, ko: '만나서 반가워요.', en: ['I’m pleased to meet you. (Less formal than the sentence above)'] },

    { t: 'h2', text: 'Usage #2 · An action + -아/어/여서 + another action' },
    { t: 'sent', id: 'u2a', ko: '공원에 가다 + 책을 읽다', en: ['to go to the park + to read a book'] },
    { t: 'sent', id: 'u2b', arrow: true, ko: '공원에 가서 책을 읽을 거예요.', en: ['I’m going to go to the park and read a book.'] },
    { t: 'note', label: 'Book', text: 'This does NOT mean “I’m going to the park, so I’m going to read a book.” Also note that the tense is only used with the final verb here as well.' },
    { t: 'sent', id: 'u2c', ko: '친구를 만나다 + 밥을 먹다', en: ['to meet a friend + to eat'] },
    { t: 'sent', id: 'u2d', arrow: true, ko: '친구를 만나서 밥을 먹었어요.', en: ['I met a friend, and (we) ate together.'] },
    { t: 'note', label: 'Book', text: 'This sentence COULD mean that you met a friend, so you ate together. In most cases, however, it means that you met a friend THEN ate together after you met up with him/her.' },
    { t: 'sent', id: 'u2e', arrow: true, ko: '친구를 만나서 밥을 먹을 거예요.', en: ['I’m going to meet a friend, and (we will) eat together.'] },

    { t: 'h2', text: 'Usage #3 · An action + -아/어/여서 + purpose / plan' },
    { t: 'sent', id: 'u3a', ko: '돈을 모으다 + 뭐 하다', en: ['to save up, to save money + to do what'] },
    { t: 'sent', id: 'u3b', arrow: true, ko: '돈을 모아서 뭐 할 거예요?', en: ['What are you going to do with the money you save up?', '(lit. You save up money and what will you do?)'] },
    { t: 'sent', id: 'u3c', ko: '케이크를 사다 + 친구한테 주다', en: ['to buy a cake + to give to a friend'] },
    { t: 'sent', id: 'u3d', arrow: true, ko: '케이크를 사서 친구한테 줄 거예요.', en: ['I’m going to buy a cake to/and give it to a friend.'] },
    { t: 'note', label: 'Book', text: 'Usage 3 is similar to Usage 2 because the events are happening one after the other, so it could be a linear action, and it could also be a purpose.' },

    { t: 'h2', text: 'Usage #4 · Fixed expressions' },
    { t: 'p', text: 'There are a couple of fixed expressions which basically use the same «-아/어/여서» structure but are not often used in other forms.' },
    { t: 'meaning', label: 'Fixed', ko: '-에 따라서', text: 'according to ~' },
    { t: 'ex', items: [
      { id: 'f1', ko: '계획에 따라서 진행하겠습니다.', en: ['I’ll proceed according to the plan.'] },
    ] },
    { t: 'meaning', label: 'Fixed', ko: '예를 들어서', text: 'for example' },
    { t: 'ex', items: [
      { id: 'f2', ko: '예를 들어서, 이렇게 할 수 있어요.', en: ['For example, you can do it like this.'] },
    ] },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '13', from: 15.4, to: 51.2, label: 'Track 13 · these 7 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['13', 15.45, 19.5], ko: '한국에 가서 뭐 할 거예요?', en: ['After you go to Korea, what are you going to do?'] },
    { t: 'sent', id: 's2', clip: ['13', 19.5, 22.6], ko: '서울에 와서 좋아요.', en: ['Since I came to Seoul, I’m glad.', 'I’m glad to have come to Seoul.'] },
    { t: 'sent', id: 's3', clip: ['13', 22.65, 29.05], ko: '잠을 많이 자서 전혀 피곤하지 않아요.', en: ['I slept a lot, so I am not tired at all.'] },
    { t: 'sent', id: 's4', clip: ['13', 29.1, 33.2], ko: '비가 와서 집에 있었어요.', en: ['It rained, so I stayed at home.'] },
    { t: 'sent', id: 's5', clip: ['13', 33.25, 38.4], ko: '요즘에 바빠서 친구들을 못 만나요.', en: ['These days I’m busy, so I can’t meet my friends.'] },
    { t: 'sent', id: 's6', clip: ['13', 38.4, 44.35], ko: '열심히 공부해서 장학금을 받을 거예요.', en: ['I’m going to study hard so I can get (and I will get) a scholarship.'] },
    { t: 'sent', id: 's7', clip: ['13', 44.35, 51.2], ko: '한국어가 너무 재미있어서 매일 공부하고 있어요.', en: ['Korean is so much fun that I’m studying it everyday.'] },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '14', lines: [
      { id: 'd1', sp: 'A', ko: '한국어보다 중국어가 더 쉬워요?', en: 'Is Chinese easier than Korean?' },
      { id: 'd2', sp: 'B', ko: '네, 중국어가 더 쉬워요.', en: 'Yes. Chinese is easier.' },
      { id: 'd3', sp: 'A', ko: '왜요?', en: 'Why?' },
      { id: 'd4', sp: 'B', ko: '영어랑 비슷해서요.', en: 'That is because it is similar to English.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: 'In the dialogue, «비슷해서요» is the -아/어/여서 form with «요» added: a short answer to «왜요?» (“Because …”). The result part is left out.' },

    { t: 'exercises', title: 'Exercises for Lesson 7', items: [
      { id: 'x1', q: 'Please answer in Korean: 하다 = to do. 하 (verb stem) + 여서 = ?', ko: '하 + 여서 = ___',
        ans: ['해서'], full: '해서', soft: [{ p: '하여서', note: 'Accepted: 하여서 is the full (written, formal) form. In everyday Korean it becomes 해서.' }],
        diag: [{ p: '하서', note: '하 + 여서 contracts to 해서.' }, { p: '했어서', note: 'No past tense here: 해서.' }, { p: '해요', note: 'That is the 해요 form. Add 서 to the stem: 해서.' }] },
      { id: 'x2', q: 'Please answer in Korean: 먹다 = to eat. 먹 (verb stem) + 어서 = ?', ko: '먹 + 어서 = ___',
        ans: ['먹어서'], full: '먹어서',
        diag: [{ p: '머거서', note: 'That is how it sounds; it is written 먹어서.' }, { p: '먹아서', note: '먹 has the vowel ㅓ (not ㅏ/ㅗ): 먹어서.' }, { p: '먹서', note: 'Keep the 어: 먹어서.' }] },
      { id: 'x3', q: 'Please answer in Korean: 오다 = to come. 오 (verb stem) + 아서 = ?', ko: '오 + 아서 = ___',
        ans: ['와서'], full: '와서',
        diag: [{ p: '오아서', note: '오 + 아 contracts to 와: 와서.' }, { p: '오서', note: '오 + 아서 = 와서.' }, { p: '왔어서', note: 'No past tense here: 와서.' }] },
      { id: 'x4', q: 'Match the English with its Korean equivalent: according to ~',
        choices: ['예를 들어서', '재미있어서', '-에 따라서'], right: '-에 따라서', choicesKo: true, ans: ['-에 따라서'], skill: 'l7.fixed',
        wrongNote: 'Not that one. “According to ~” attaches to a noun with -에.' },
      { id: 'x5', q: 'Match the English with its Korean equivalent: for example',
        choices: ['예를 들어서', '재미있어서', '-에 따라서'], right: '예를 들어서', choicesKo: true, ans: ['예를 들어서'], skill: 'l7.fixed',
        wrongNote: 'Not that one. 재미있어서 = because it is fun.' },
    ] },
  ],
};
