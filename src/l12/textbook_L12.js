/* textbook_L12.js — Korean 3, Lesson 12 (textbook p.83–87, answers p.197). Romanization removed.
   Track 23: intro (0–4 s), 그래도 twice (block 4.6–9.4 s), then the 5 sample sentences, each twice (clipped by ASR +
   silence detection: 9.4–43.8 s). The 비가 와요 example and 그래도요 / 그래두요 are marked Track 23 but are not on it.
   Track 24 = dialogue. */
MM.lessons[12] = {
  n: 12, ko: '그래도', en: 'But still, Nevertheless',
  pages: { tb: '83–87', tbKey: '197', wb: '53–56', wbKey: '128–129' },
};
MM.textbook[12] = {
  blocks: [
    { t: 'h', text: 'Lesson 12 · But still, Nevertheless', ko: '그래도' },
    { t: 'p', text: 'Are you ready to learn more Korean conjunctions? Yes! Good answer! You will learn how to connect two sentences with the word «그래도» in this lesson, so put your thinking cap on and let’s get started!' },
    { t: 'p', text: 'In Level 2, Lesson 3, you learned how to use «그래서», which means “so” or “therefore”. The only difference in spelling of «그래서» and «그래도» is the final syllable, but that one little «도» gives the word an entirely different meaning.' },
    { t: 'meaning', label: 'Meaning', ko: '그래도', text: '“but still”, “however”, “nonetheless”, or “nevertheless”' },
    { t: 'track', id: '23', from: 4.6, to: 9.4, label: 'Track 23 · 그래도' },
    { t: 'ex', items: [
      { id: 'e1', ko: '비가 와요. 그래도 갈 거예요?', en: ['It’s raining. Are you still going?'] },
    ] },

    { t: 'h2', text: 'Let’s break it down' },
    { t: 'meaning', label: 'Parts', ko: '그래도 = 그래 + 도', text: '“do that” + “even, too”' },
    { t: 'meaning', label: '그래', ko: '그렇게 해 / 그렇게 하여', text: 'to do it in such a way, to do that' },
    { t: 'meaning', label: '-도', ko: '-도', text: 'also, too, even' },
    { t: 'p', text: 'The literal meaning of «그래 + 도» is “even if you do that”, “even if that happens”, or “if you do that, too” with the meaning of “still” added to the context.' },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '23', from: 9.4, to: 43.8, label: 'Track 23 · these 5 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['23', 9.4, 15.8], ko: '한국어는 어려워요. 그래도 재미있어요.', en: ['Korean is difficult. But still, it is interesting.'] },
    { t: 'sent', id: 's2', clip: ['23', 15.9, 22.8], ko: '어제는 비가 왔어요. 그래도 축구를 했어요.', en: ['Yesterday, it rained. Nevertheless, we played soccer.'] },
    { t: 'sent', id: 's3', clip: ['23', 22.8, 29.55], ko: '저도 돈이 없어요. 그래도 걱정하지 마세요.', en: ['I don’t have money, either. But still, don’t worry.'] },
    { t: 'sent', id: 's4', clip: ['23', 29.6, 35.9], ko: '노래방에 가야 돼요. 그래도 노래 안 할 거예요.', en: ['I have to go to a noraebang (singing room). However, I’m not going to sing.'] },
    { t: 'sent', id: 's5', clip: ['23', 36.0, 43.8], ko: '요즘 바빠요. 그래도 한국어를 공부하고 있어요.', en: ['I’m busy these days. But I’m still studying Korean.'] },
    { t: 'p', text: '«그래도» can also be used as an interjection when speaking with friends and you just want to say, “But still…” or “Come on…”.' },
    { t: 'p', text: 'If you feel the need to be more polite, or if you want to make 100% sure you are not being rude, add «-요» to the end and say, «그래도요». The «도요» combination takes a bit of work to pronounce, so you may find that other people, especially women in Seoul, end up saying «그래두요» rather than «그래도요» (like the change in pronunciation of «-고» to «구» as mentioned in Lesson 2 of this book).' },
    { t: 'note', label: 'App note (not from the book)', text: '«가야 돼요» (s4) = I have to go. You will learn -아/어야 되다 (have to) later; here just remember the whole phrase.' },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '24', lines: [
      { id: 'd1', sp: 'A', ko: '주연 씨, 화장 안 했어요?', en: 'You have no makeup on, Jooyeon?' },
      { id: 'd2', sp: 'B', ko: '네. 늦게 일어나서 화장 안 하고 왔어요.', en: 'No. Since I got up late, I didn’t put on any makeup.' },
      { id: 'd3', sp: 'A', ko: '그래도 너무 예뻐요.', en: 'But you are still so pretty.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: 'The book translates B’s «네» as “No”: in Korean, «네» agrees with the question (“Right, I didn’t”). «화장 안 하고 왔어요» = I came without putting on makeup (-고, Lesson 2); «늦게 일어나서» = because I got up late (-아서, Lesson 7).' },

    { t: 'exercises', title: 'Exercises for Lesson 12', items: [
      { id: 'x1', q: 'How do you say “but still”, “however”, or “nonetheless” in Korean?',
        ans: ['그래도'], full: '그래도', skill: 'l12.form',
        diag: [{ p: '그래서', note: '그래서 = so, therefore (Level 2). “But still” = 그래도: one syllable different.' }, { p: '그렇지만', note: '그렇지만 = but. The book wants “but still / nevertheless”: 그래도.' }, { p: '그래두', note: 'That is how some people pronounce it. It is written 그래도.' }] },
      { id: 'x2', q: 'Fill in the blank: “I have to go to a noraebang (singing room). But still, I’m not going to sing.”', ko: '노래방에 가야 돼요. ___ 노래 안 할 거예요.',
        ans: ['그래도'], full: '노래방에 가야 돼요. 그래도 노래 안 할 거예요.', skill: 'l12.usage',
        diag: [{ p: '그래서', note: '그래서 = so: “I have to go, SO I won’t sing” makes no sense. But still → 그래도.' }] },
      { id: 'x3', q: 'Fill in both blanks: “Yesterday, it rained. But still, we played soccer.”', ko: '어제는 ___. ___ 축구를 했어요.', hint: 'To play soccer = 축구를 하다. Type both blanks, in order.',
        ans: ['비가 왔어요. 그래도'], full: '어제는 비가 왔어요. 그래도 축구를 했어요.', skill: 'l12.usage', lenient: false,
        soft: [{ p: '비 왔어요 그래도', note: 'Accepted. Written Korean keeps the 가: 비가 왔어요.' }],
        diag: [{ p: '비가 와요 그래도', note: 'Yesterday → past: 비가 왔어요.' }, { p: '비가 왔어요 그래서', note: '그래서 = so. It rained, but we STILL played → 그래도.' }, { p: '비가 왔어요', note: 'Now the second blank too: 그래도.' }] },
      { id: 'x4', q: 'Fill in both blanks: “Korean is difficult. But still, it’s interesting.”', ko: '한국어는 ___. ___ 재미있어요.', hint: 'To be interesting = 재미있다. 어렵다 = to be difficult (Lesson 11). Type both blanks, in order.',
        ans: ['어려워요. 그래도'], full: '한국어는 어려워요. 그래도 재미있어요.', skill: 'l12.usage', lenient: false,
        diag: [{ p: '어렵어요 그래도', note: '어렵다 is a ㅂ-irregular (Lesson 11): 어려워요.' }, { p: '어려워요 그래서', note: '그래서 = so. Difficult, but STILL interesting → 그래도.' }, { p: '어려워요', note: 'Now the second blank too: 그래도.' }] },
    ] },
  ],
};
