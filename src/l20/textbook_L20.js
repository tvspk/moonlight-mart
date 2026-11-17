/* textbook_L20.js — Korean 3, Lesson 20 (textbook p.125–129, answers p.198). Romanization removed.
   The PDF text layer garbles the heading “-아/어/여도” (“-ই/য/ب”) and the three conjugation lines (“Verb stems ending with the vowel
   ƌ or Ƅ + -ب …”); restored from the examples as ㅏ / ㅗ + -아도, other vowels + -어도, 하 + -여도 (→ 해도).
   Track 39: intro (0–4.4 s), the three endings (block 5.0–9.9 s; ASR unclear), a short word at 11 s (not clipped), then the 5 sample
   sentences (clipped by silence detection + ASR 13.2–37.25 s, each twice). The 보다 / 울다 / 공부하다 examples and the 바빠도 example are not
   on it. Track 40 = dialogue. */
MM.lessons[20] = {
  n: 20, ko: '-아/어/여도', en: 'Even if, Even though',
  pages: { tb: '125–129', tbKey: '198', wb: '80–83', wbKey: '134–135' },
};
MM.textbook[20] = {
  blocks: [
    { t: 'h', text: 'Lesson 20 · Even if, Even though', ko: '-아/어/여도' },
    { t: 'p', text: 'In Level 3, Lesson 12, you were introduced to the conjunction «그래도», which means “but still” or “nevertheless” and is generally used to begin a sentence. The verb ending in this lesson has the same meaning as «그래도», but it is used as a subordinating conjunction (joins the main clause to the dependent clause) to combine two sentences without having to end one sentence and begin another.' },
    { t: 'meaning', label: 'Ending', ko: '-아/어/여도', text: 'even if, even though' },

    { t: 'h2', text: 'Conjugation' },
    { t: 'meaning', label: 'Rule 1', ko: 'ㅏ, ㅗ + -아도', text: 'Verb stems ending with the vowel ㅏ or ㅗ + -아도' },
    { t: 'meaning', label: 'Rule 2', ko: 'other vowels + -어도', text: 'Verb stems ending with other vowels + -어도' },
    { t: 'meaning', label: 'Rule 3', ko: '하 + -여도', text: 'Verb stems ending with 하 + -여도' },
    { t: 'track', id: '39', from: 5.0, to: 9.9, label: 'Track 39 · 아도, 어도, 여도' },
    { t: 'note', label: 'App note (not from the book)', text: 'It is the 해요 form without 요, plus 도: 봐요 → 봐도, 울어요 → 울어도, 공부해요 → 공부해도. Irregular verbs change the same way as in the 해요 form: 바빠요 → 바빠도, 쉬워요 → 쉬워도 (Lesson 11). The PDF prints these three lines garbled; restored from the examples.' },
    { t: 'p', text: 'Ex)' },
    { t: 'ex', items: [
      { id: 'e1', ko: '보다', en: ['to see'] },
      { id: 'e2', ko: '보아도 = 봐도', en: ['even if you see; even if you look'], arrow: true },
    ] },
    { t: 'ex', items: [
      { id: 'e3', ko: '울다', en: ['to cry'] },
      { id: 'e4', ko: '울어도', en: ['even if you cry; even though you cry'], arrow: true },
    ] },
    { t: 'ex', items: [
      { id: 'e5', ko: '공부하다', en: ['to study'] },
      { id: 'e6', ko: '공부해도 (= 공부하여도)', en: ['even if you study; even though you study'], arrow: true },
    ] },

    { t: 'h2', text: 'Combining two sentences together' },
    { t: 'ex', items: [
      { id: 'm1', ko: '요즘에 바빠요. + 그래도 운동은 하고 있어요.', en: ['I’m busy these days. But still, I’m doing some exercise.'] },
      { id: 'm2', ko: '요즘에 바빠도, 운동은 하고 있어요.', en: ['Even though I’m busy these days, I’m still doing some exercise.'], arrow: true },
    ] },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '39', from: 13.2, to: 37.25, label: 'Track 39 · these 5 sentences' },
    { t: 'sent', id: 's1', clip: ['39', 13.2, 17.4], ko: '집에 가도, 밥이 없어요.', en: ['Even if I go home, there is no food.'] },
    { t: 'sent', id: 's2', clip: ['39', 17.4, 22.3], ko: '택시를 타도, 시간이 오래 걸려요.', en: ['It takes a long time even if I take a taxi.'] },
    { t: 'sent', id: 's3', clip: ['39', 22.3, 28.0], ko: '석진 씨는 제가 전화를 해도 안 받아요.', en: ['Even if I call him, Seokjin doesn’t answer.'] },
    { t: 'sent', id: 's4', clip: ['39', 28.0, 32.8], ko: '냄새는 이상해도 맛있어요.', en: ['It is tasty even though it smells weird.'] },
    { t: 'sent', id: 's5', clip: ['39', 32.8, 37.25], ko: '바빠도 한국에 갈 거예요.', en: ['Even if I’m busy, I will go to Korea.'] },
    { t: 'note', label: 'App note (not from the book)', text: '밥 = (cooked) rice; food, a meal. 시간이 오래 걸리다 = to take a long time. 전화를 받다 = to answer the phone. 냄새 = smell. The tense goes on the last verb: 바빠도 … 갈 거예요.' },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '40', lines: [
      { id: 'd1', sp: 'A', ko: '경화 씨한테 계속 전화를 해도 안 받아요.', en: 'Kyung-hwa is not answering even though I keep calling her.' },
      { id: 'd2', sp: 'B', ko: '자고 있는 거 아닐까요?', en: 'Maybe she is still in bed?' },
      { id: 'd3', sp: 'A', ko: '아직도요?', en: 'Still?' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '계속 = continuously, keep (doing). 자고 있는 거 아닐까요? = Isn’t she (maybe) sleeping? (-(으)ㄹ까요, Lesson 4). 아직도 = still.' },

    { t: 'exercises', title: 'Exercises for Lesson 20', items: [
      { id: 'x1', q: 'Write in Korean: “Even if you cry; even though you cry”', hint: '울다 = to cry',
        ans: ['울어도'], full: '울어도', skill: 'l20.form', lenient: false,
        diag: [{ p: '울아도', note: 'The vowel of 울 is ㅜ, not ㅏ/ㅗ → -어도: 울어도.' }, { p: '우러도', note: 'Pronounced [우러도], written 울어도.' }, { p: '울도', note: 'Add 어: 울어도 (the 해요 form 울어요 minus 요, plus 도).' }, { p: '울어서', note: '-아/어서 = so, because (Lesson 7). Even if = 울어도.' }] },
      { id: 'x2', q: 'Write in Korean: “Even if you study; even though you study”', hint: '공부하다 = to study',
        ans: ['공부해도'], full: '공부해도 (= 공부하여도)', skill: 'l20.form', lenient: false,
        soft: [{ p: '공부하여도', note: 'Accepted: 공부하여도 is the full form (the book prints it). Everyday Korean says 공부해도.' }],
        diag: [{ p: '공부하도', note: '하 + 여도 = 해도: 공부해도.' }, { p: '공부하아도', note: '하 takes -여도 (→ 해도), not -아도: 공부해도.' }, { p: '공부해서', note: '-해서 = so, because (Lesson 7). Even if = 공부해도.' }] },
      { id: 'x3', q: 'Write in Korean: “Even if you see; even if you look”', hint: '보다 = to see',
        ans: ['봐도'], full: '봐도 (= 보아도)', skill: 'l20.form', lenient: false,
        soft: [{ p: '보아도', note: 'Accepted: 보아도 is the full form (the book prints it). The key: 봐도.' }],
        diag: [{ p: '보도', note: '보 ends in ㅗ → -아도: 보아도 = 봐도.' }, { p: '보어도', note: 'ㅗ takes -아도, not -어도: 봐도.' }, { p: '봐서', note: '-아서 = so, because (Lesson 7). Even if = 봐도.' }] },
      { id: 'x4', q: 'Write in Korean: “It takes a long time even if I take a taxi.”', hint: '택시를 타다 = to take a taxi',
        ans: ['택시를 타도, 시간이 오래 걸려요.'], full: '택시를 타도, 시간이 오래 걸려요.', skill: 'l20.usage', lenient: false,
        soft: [{ p: '택시(를|) 타도 시간이 (오래|많이) 걸려요', note: 'Accepted.' }, { p: '택시(를|) 타도 오래 걸려요', note: 'Accepted. The key: 시간이 오래 걸려요.' }],
        diag: [{ p: '택시(를|) (타아도|타어도) 시간이 오래 걸려요', note: '타 + 아도 contracts: 타도.' }, { p: '택시(를|) 타서 시간이 오래 걸려요', note: '타서 = I take a taxi, SO it takes long. Even if = 타도.' }, { p: '택시(를|) 탔어도 시간이 오래 걸려요', note: 'Possible Korean (“even if I had taken a taxi”), but the key keeps it simple: 타도.' }, { p: '택시(를|) 타도 시간이 오래 (걸리어요|걸러요)', note: '걸리다 → 걸려요.' }] },
      { id: 'x5', q: 'Write in Korean: “Even if I go home, there is no food.”', hint: '집에 가다 = to go home',
        ans: ['집에 가도, 밥이 없어요.'], full: '집에 가도, 밥이 없어요.', skill: 'l20.usage', lenient: false,
        soft: [{ p: '집에 가도 (밥이|먹을 게|음식이) 없어요', note: 'Accepted (밥 = food/meal is what the book uses).' }],
        diag: [{ p: '집에 가아도 (밥이|음식이) 없어요', note: '가 + 아도 contracts: 가도.' }, { p: '집에 가서 (밥이|음식이) 없어요', note: '가서 = and then / so. Even if = 가도.' }, { p: '집에 가도 (밥이|음식이) 있어요', note: 'No food = 없어요.' }] },
    ] },
  ],
};
