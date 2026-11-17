/* textbook_L19.js — Korean 3, Lesson 19 (textbook p.120–124, answers p.198). Romanization removed.
   The PDF text layer garbles “-(으)ㄴ + 다음에 / 후에 / 뒤에” (“-(ਵ)ũ + ਺ী / റী / ী”) and the conjugation line; restored from
   the examples. Track 37: intro (0–4.5 s), -(으)ㄴ 다음에 / 후에 / 뒤에 (block 5.0–12.8 s, each twice; ASR unclear), a short word at
   14 s (not clipped), then the 5 sample sentences (clipped by silence detection + ASR 16.5–39.6 s; the last one seems to be read
   only once). The 다음 / 후 / 뒤 words and the 편지를 받은 / 집에 간 / 책을 읽은 examples are not on it. Track 38 = dialogue. */
MM.lessons[19] = {
  n: 19, ko: '다음에, 후에, 뒤에', en: 'After -ing',
  pages: { tb: '120–124', tbKey: '198', wb: '76–79', wbKey: '133–134' },
};
(() => {
  /* exercise patterns: any of the three nouns, object particle optional */
  const N = '(다음에|후에|뒤에)';
  MM.textbook[19] = {
    blocks: [
      { t: 'h', text: 'Lesson 19 · After -ing', ko: '다음에, 후에, 뒤에' },
      { t: 'p', text: 'There are a few different ways to say “after -ing” in Korean, and through this lesson, you will learn the three most common ways to say it. These three expressions all share a common structure:' },
      { t: 'ex', items: [
        { id: 'p1', ko: '-(으)ㄴ + 다음에', en: ['after -ing'] },
        { id: 'p2', ko: '-(으)ㄴ + 후에', en: ['after -ing'] },
        { id: 'p3', ko: '-(으)ㄴ + 뒤에', en: ['after -ing'] },
      ] },
      { t: 'track', id: '37', from: 5.0, to: 12.8, label: 'Track 37 · 은 다음에, 은 후에, 은 뒤에' },
      { t: 'p', text: 'These three mean “after -ing”, but each of the key nouns have a different meaning.' },
      { t: 'ex', items: [
        { id: 'n1', ko: '다음', en: ['next time; next (i.e. 다음 주 = next week)'] },
        { id: 'n2', ko: '후', en: ['after (i.e. 오후 = afternoon)'] },
        { id: 'n3', ko: '뒤', en: ['behind; back (i.e. 등 뒤 = behind the back)'] },
      ] },
      { t: 'p', text: 'As standalone words, the meanings are quite different, right? However, you can use any of these three words to create a sentence which means “After -ing”. These three expressions are interchangeable, and the meaning does not change no matter which noun is used.' },

      { t: 'h2', text: 'Conjugation' },
      { t: 'meaning', label: 'Pattern', ko: '동사 어간 + -(으)ㄴ + 다음(or 후/뒤)에', text: 'verb stem + -(으)ㄴ + 다음(or 후/뒤)에 = after -ing' },
      { t: 'p', text: 'In Lessons 13 and 14, you learned how to conjugate verbs into adjectives using «-(으)ㄴ». Here, «-(으)ㄴ» indicates that the verb was done in the past, which makes the adjective clause “after -ing” past tense.' },
      { t: 'note', label: 'App note (not from the book)', text: 'Vowel stem + ㄴ (가다 → 간, 보다 → 본, 하다 → 한), consonant stem + 은 (받다 → 받은, 읽다 → 읽은, 먹다 → 먹은). The same form as the past in -(으)ㄴ 것 같아요 (Lesson 9). The tense of the whole sentence goes on the last verb.' },
      { t: 'ex', items: [
        { id: 'e1', ko: '편지를 받다', en: ['to receive a letter'] },
        { id: 'e2', ko: '편지를 받은 다음에', en: ['after receiving a letter'], arrow: true },
        { id: 'e3', ko: '편지를 받은 후에', en: ['after receiving a letter'], arrow: true },
        { id: 'e4', ko: '편지를 받은 뒤에', en: ['after receiving a letter'], arrow: true },
      ] },
      { t: 'ex', items: [
        { id: 'e5', ko: '집에 가다', en: ['to go home'] },
        { id: 'e6', ko: '집에 간 다음에', en: ['after going home'], arrow: true },
        { id: 'e7', ko: '집에 간 후에', en: ['after going home'], arrow: true },
        { id: 'e8', ko: '집에 간 뒤에', en: ['after going home'], arrow: true },
      ] },
      { t: 'ex', items: [
        { id: 'e9', ko: '책을 읽다', en: ['to read a book'] },
        { id: 'e10', ko: '책을 읽은 다음에', en: ['after reading a book'], arrow: true },
        { id: 'e11', ko: '책을 읽은 후에', en: ['after reading a book'], arrow: true },
        { id: 'e12', ko: '책을 읽은 뒤에', en: ['after reading a book'], arrow: true },
      ] },

      { t: 'h2', text: 'Sample Sentences' },
      { t: 'track', id: '37', from: 16.5, to: 39.6, label: 'Track 37 · these 5 sentences' },
      { t: 'sent', id: 's1', clip: ['37', 16.5, 21.5], ko: '영화 본 다음에 우리 커피 마셔요.', en: ['After watching the movie, let’s drink coffee.'] },
      { t: 'sent', id: 's2', clip: ['37', 21.5, 26.8], ko: '점심을 먹은 다음에, 도서관에 갔어요.', en: ['After having lunch, I went to the library.'] },
      { t: 'sent', id: 's3', clip: ['37', 26.8, 30.95], ko: '이거 한 다음에 뭐 할 거예요?', en: ['After doing this, what are you going to do?'] },
      { t: 'sent', id: 's4', clip: ['37', 30.95, 35.55], ko: '그거요? 이거 한 뒤에 할게요.', en: ['That one? I’ll do it after I do this.'] },
      { t: 'sent', id: 's5', clip: ['37', 35.55, 39.6], ko: '결정한 후에 연락 주세요.', en: ['Contact me after you decide.'] },
      { t: 'note', label: 'App note (not from the book)', text: '마셔요 in the first sentence = let’s drink (Lesson 16). 할게요 = I’ll do it (Lesson 6). 연락 주세요 = please contact me.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '38', lines: [
        { id: 'd1', sp: 'A', ko: '현우 씨가 지금 녹음실 쓰고 있어요?', en: 'Is Hyunwoo using the recording room now?' },
        { id: 'd2', sp: 'B', ko: '네.', en: 'Yes.' },
        { id: 'd3', sp: 'A', ko: '그럼 현우 씨 쓴 다음에 제가 쓸게요.', en: 'Then I will use it after he is finished.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '녹음실 = recording room. 쓰다 = to use → 쓴 다음에 = after (he) uses it. 현우 씨 쓴 다음에: the particle after 현우 씨 (가) is dropped in speech.' },

      { t: 'exercises', title: 'Exercises for Lesson 19', items: [
        { id: 'x1', q: 'Translate to Korean: “After receiving a letter”', hint: 'to receive a letter = 편지를 받다',
          ans: ['편지를 받은 다음에'], full: '편지를 받은 다음에 / 후에 / 뒤에', skill: 'l19.form', lenient: false,
          soft: [{ p: '편지(를|) 받은 ' + N, note: 'Accepted: 다음에, 후에 and 뒤에 are interchangeable (the key gives all three).' }],
          diag: [{ p: '편지(를|) (받는|받을) ' + N, note: 'After -ing = the past form -(으)ㄴ: 받은 다음에. (받는 = present, 받을 = future.)' }, { p: '편지(를|) 받았은 ' + N, note: 'No 았/었: the -(으)ㄴ itself already shows the past → 받은.' }, { p: '편지(를|) 받기 ' + N, note: '-기 is for -기 전에 (before, Lesson 10). After = -(으)ㄴ 다음에: 받은.' }, { p: '편지(를|) 바든 ' + N, note: 'Pronounced [바든], written 받은.' }, { p: '편지(를|) 받은 (다음|후|뒤)', note: 'Add 에: 받은 다음에 / 후에 / 뒤에.' }] },
        { id: 'x2', q: 'Translate to Korean: “After reading a book”', hint: 'to read a book = 책을 읽다',
          ans: ['책을 읽은 다음에'], full: '책을 읽은 다음에 / 후에 / 뒤에', skill: 'l19.form', lenient: false,
          soft: [{ p: '책(을|) 읽은 ' + N, note: 'Accepted: 다음에, 후에 and 뒤에 are interchangeable.' }],
          diag: [{ p: '책(을|) (읽는|읽을) ' + N, note: 'After -ing = -(으)ㄴ: 읽은 다음에.' }, { p: '책(을|) 읽었은 ' + N, note: 'No 었: 읽은.' }, { p: '책(을|) 읽기 ' + N, note: '-기 goes with 전에 (before). After = 읽은 다음에.' }, { p: '책(을|) (일근|읽인) ' + N, note: 'Consonant stem + 은: 읽은.' }, { p: '책(을|) 읽은 (다음|후|뒤)', note: 'Add 에: 읽은 다음에.' }] },
        { id: 'x3', q: 'Translate to Korean: “After watching the movie, let’s drink coffee.”', hint: 'to watch a movie = 영화 보다 · to drink coffee = 커피 마시다',
          ans: ['영화 본 다음에 우리 커피 마셔요.'], full: '영화 본 다음에 우리 커피 마셔요.', skill: 'l19.order', lenient: false, order: false,
          soft: [{ p: '영화(를|) 본 ' + N + ' (우리 |같이 |우리 같이 |)커피(를|) 마셔요', note: 'Accepted. “Let’s” = 마셔요 (Lesson 16); 우리 / 같이 can be added.' }, { p: '영화(를|) 본 ' + N + ' (우리 |같이 |)커피(를|) 마실래요', note: 'Accepted as a suggestion (-(으)ㄹ래요?, Lesson 16). The key: 마셔요.' }, { p: '영화(를|) 본 ' + N + ' (우리 |같이 |)커피(를|) 마실까요', note: 'Accepted as a suggestion (Shall we…? Lesson 4). The key: 마셔요.' }],
          diag: [{ p: '영화(를|) (보는|볼) ' + N + ' (우리 |)커피(를|) 마셔요', note: 'After -ing = -(으)ㄴ: 보다 → 본 다음에.' }, { p: '영화(를|) 봤은 ' + N + ' (우리 |)커피(를|) 마셔요', note: 'No 았: 보 + ㄴ = 본.' }, { p: '영화(를|) 보은 ' + N + ' (우리 |)커피(를|) 마셔요', note: 'Vowel stem: just add ㄴ → 본.' }, { p: '커피(를|) 마신 ' + N + ' (우리 |)영화(를|) 봐요', note: 'The order is swapped: that means “after coffee, let’s watch the movie”. The movie comes first: 영화 본 다음에 커피 마셔요.' }, { p: '영화(를|) 보기 전에 (우리 |)커피(를|) 마셔요', note: 'That is “before watching the movie” (Lesson 10). After = 본 다음에.' }] },
        { id: 'x4', q: 'Translate to Korean: “Contact me after you decide.”', hint: 'to decide = 결정하다',
          ans: ['결정한 후에 연락 주세요.'], full: '결정한 후에 연락 주세요.', skill: 'l19.form', lenient: false,
          soft: [{ p: '결정한 ' + N + ' (저한테 |제게 |)연락(해|을|) 주세요', note: 'Accepted (다음에 / 후에 / 뒤에 all work).' }, { p: '결정한 ' + N + ' 연락하세요', note: 'Accepted: 연락하세요 = please contact (me). The key: 연락 주세요.' }],
          diag: [{ p: '(결정하는|결정할) ' + N + ' 연락(해|) 주세요', note: 'After -ing = -(으)ㄴ: 결정한 후에.' }, { p: '결정했은 ' + N + ' 연락(해|) 주세요', note: 'No 했: 결정하 + ㄴ = 결정한.' }, { p: '결정하기 ' + N + ' 연락(해|) 주세요', note: '-기 goes with 전에 (before). After = 결정한 후에.' }, { p: '결정하기 전에 연락(해|) 주세요', note: 'That is “contact me before you decide”. After = 결정한 후에.' }] },
        { id: 'x5', q: 'Translate to Korean: “After doing this, what are you going to do?”',
          ans: ['이거 한 다음에 뭐 할 거예요?'], full: '이거 한 다음에 뭐 할 거예요?', skill: 'l19.order', lenient: false, order: false,
          soft: [{ p: '(이거|이것을|이걸|이것) 한 ' + N + ' 뭐(를|) 할 거예요', note: 'Accepted.' }, { p: '(이거|이것을|이걸|이것) 한 ' + N + ' 뭐 해요', note: 'Accepted: the present can talk about the near future. The key: 뭐 할 거예요?' }],
          diag: [{ p: '(이거|이것을) (하는|할) ' + N + ' 뭐 할 거예요', note: 'After -ing = -(으)ㄴ: 하다 → 한 다음에.' }, { p: '(이거|이것을) 했은 ' + N + ' 뭐 할 거예요', note: 'No 했: 하 + ㄴ = 한.' }, { p: '(이거|이것을) 하은 ' + N + ' 뭐 할 거예요', note: 'Vowel stem + ㄴ: 한.' }, { p: '(이거|이것을) 한 ' + N + ' 뭐 했어요', note: 'You ask about the future: 뭐 할 거예요?' }] },
      ] },
    ],
  };
})();
