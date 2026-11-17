/* textbook_L14.js — Korean 3, Lesson 14 (textbook p.94–100, answers p.197). Romanization removed.
   The PDF text layer garbles the conjugation line (“Verb stem + -ח”); restored as -는 from the examples.
   Track 27: intro (0–4.4 s), then the example words 가다 → 가는 … 좋아하다 → 좋아하는 (one block 5.0–22.6 s; ASR clear),
   then the 8 sample sentences (each twice, clipped by silence detection + ASR 26.2–63.0 s).
   The 좋은 사람 / 재미있는 게임 / 노래하는 사람 / 좋아하는 책 examples and the 민지가 / 민지를 examples are marked Track 27
   in the book but are not on it. Track 28 = dialogue. */
MM.lessons[14] = {
  n: 14, ko: '-는 + 명사', en: 'Making Adjectives (Part 2)',
  pages: { tb: '94–100', tbKey: '197', wb: '60–62', wbKey: '130' },
};
MM.textbook[14] = {
  blocks: [
    { t: 'h', text: 'Lesson 14 · Making Adjectives (Part 2)', ko: '-는 + 명사' },
    { t: 'meaning', label: 'Pattern', ko: '동사 + -는 + 명사', text: 'action verbs + -는 + noun' },
    { t: 'p', text: 'You are now familiar with the fact that Korean and English have different systems when it comes to using adjectives. In the previous lesson, you learned how to create adjectives from adjectives in their infinitive form (also known as “descriptive verb form”). You will now boost your knowledge of Korean adjectives with this lesson on making adjectives from action verbs.' },
    { t: 'p', text: 'Adjectives are a part of speech which modify a noun or pronoun. In both Korean and English, the adjective is placed before the noun/pronoun, just as the “nice” in “nice person” or “fun” in “fun game”.' },
    { t: 'p', text: 'In Korean, not only can adjectives in their infinitive form be used as adjectives, but action verbs can be conjugated to be used as adjectives, too!' },

    { t: 'h2', text: 'Example of adjectives in infinitive form used as adjectives' },
    { t: 'ex', items: [
      { id: 'a1', ko: '좋다 + 사람 = 좋은 사람', en: ['Nice person (nice + person)'] },
      { id: 'a2', ko: '재미있다 + 게임 = 재미있는 게임', en: ['Fun game (fun + game)'] },
    ] },
    { t: 'h2', text: 'Examples of action verbs used as adjectives' },
    { t: 'ex', items: [
      { id: 'a3', ko: '노래하는 사람', en: ['(the/a) person who sings'] },
      { id: 'a4', arrow: true, ko: '노래하다 (to sing) + 사람 (person)', en: ['노래하다 = to sing, 사람 = person'] },
    ] },
    { t: 'ex', items: [
      { id: 'a5', ko: '좋아하는 책', en: ['(the/a) book that I like'] },
      { id: 'a6', arrow: true, ko: '좋아하다 (to like) + 책 (book)', en: ['→ book who likes ( x )'] },
    ] },
    { t: 'p', text: 'As can be seen from the examples above, when verbs are changed into adjectives, the meaning can differ depending on the context. Just remember that the adjective is somehow modifying the noun, and judging from the overall context, the meaning of the adjective should be clear.' },

    { t: 'h2', text: 'Conjugation' },
    { t: 'meaning', label: 'Rule', ko: '동사 어간 + -는', text: 'verb stem + -는' },
    { t: 'track', id: '27', from: 5.0, to: 22.6, label: 'Track 27 · the example words (가다 … 좋아하다)' },
    { t: 'ex', items: [
      { id: 'c1', ko: '가다', en: ['to go'] },
      { id: 'c2', arrow: true, ko: '가는', en: ['adjective form'] },
    ] },
    { t: 'ex', items: [
      { id: 'c3', ko: '자다', en: ['to sleep'] },
      { id: 'c4', arrow: true, ko: '자는', en: ['adjective form'] },
    ] },
    { t: 'p', text: 'For verb stems ending with «ㄹ», drop «ㄹ» and add «-는».' },
    { t: 'ex', items: [
      { id: 'c5', ko: '열다', en: ['to open'] },
      { id: 'c6', arrow: true, ko: '여는', en: ['adjective form'] },
    ] },
    { t: 'ex', items: [
      { id: 'c7', ko: '불다', en: ['to blow'] },
      { id: 'c8', arrow: true, ko: '부는', en: ['adjective form'] },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: 'Compare Lesson 13: descriptive verbs take -(으)ㄴ (좋은, 큰), action verbs take -는 (가는, 먹는). And 있다/없다 words already took -는 there (재미있는 게임). A ㄹ-stem drops its ㄹ in both: 달다 → 단, 열다 → 여는.' },

    { t: 'p', text: 'The adjective in certain sentences can actually be an adjective clause (a clause which modifies a noun/pronoun).' },
    { t: 'ex', items: [
      { id: 'k1', ko: '좋아하다', en: ['to like; to love'] },
      { id: 'k2', arrow: true, ko: '좋아하는', en: ['adjective form'] },
      { id: 'k3', ko: '좋아하는 책', en: ['a book that I/you/they/someone like(s)'] },
      { id: 'k4', ko: '내가/제가 좋아하는 책', en: ['a book which I like (내가/제가 좋아하는 (which I like) is the adjective clause here.)'] },
      { id: 'k5', ko: '내가/제가 안 좋아하는 책', en: ['a book that I don’t like (내가/제가 안 좋아하는 is the adjective clause here.)'] },
    ] },
    { t: 'p', text: '«좋아하는» is the adjective form of «좋아하다», and it means “which I like” or “that someone likes”. Depending on the context and the use of particles, the meaning of the sentence can change.' },
    { t: 'ex', items: [
      { id: 'k6', ko: '좋아하는 사람', en: ['someone who someone likes', 'someone I like'] },
      { id: 'k7', ko: '민지가 좋아하는 사람', en: ['someone who Minji likes'] },
      { id: 'k8', ko: '민지를 좋아하는 사람', en: ['someone who likes Minji'] },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '-가 marks who does the liking (민지가 좋아하는 = that Minji likes). -를 marks who is liked (민지를 좋아하는 = who likes Minji). The noun at the end is the other person.' },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '27', from: 26.2, to: 63.0, label: 'Track 27 · these 8 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['27', 26.2, 30.95], ko: '이 노래는 제가 좋아하는 노래예요.', en: ['This song is a song that I like.'] },
    { t: 'sent', id: 's2', clip: ['27', 31.0, 35.2], ko: '자주 먹는 한국 음식 있어요?', en: ['Is there a Korean food that you eat often?'] },
    { t: 'sent', id: 's3', clip: ['27', 35.25, 38.8], ko: '자주 가는 카페 있어요?', en: ['Is there a cafe that you go to often?'] },
    { t: 'sent', id: 's4', clip: ['27', 38.85, 43.6], ko: '요즘 좋아하는 가수는 누구예요?', en: ['Which singer do you like these days?'] },
    { t: 'sent', id: 's5', clip: ['27', 43.65, 50.1], ko: '요즘 공부하고 있는 외국어는 일본어예요.', en: ['The foreign language I am studying these days is Japanese.'] },
    { t: 'sent', id: 's6', clip: ['27', 50.15, 55.1], ko: '눈이 오는 날에는 영화 보고 싶어요.', en: ['On a day when it snows, I want to see a movie.'] },
    { t: 'sent', id: 's7', clip: ['27', 55.25, 59.8], ko: '저기 있는 사람, 아는 사람이에요?', en: ['That person who is over there, is it someone that you know?'] },
    { t: 'sent', id: 's8', clip: ['27', 59.85, 63.0], ko: '배고픈 사람 (있어요)?', en: ['Anybody (who is) hungry?'] },
    { t: 'note', label: 'App note (not from the book)', text: '아는 = 알다 → drop ㄹ + 는. 공부하고 있는 = -고 있다 (“be -ing”) + 는. 배고픈 is from the descriptive verb 배고프다 (Lesson 13 rule: vowel stem + ㄴ).' },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '28', lines: [
      { id: 'd1', sp: 'A', ko: '경은 씨 옷은 다 예쁜 것 같아요.', en: 'I think your clothes are all pretty, Kyeong-eun.' },
      { id: 'd2', sp: 'B', ko: '고마워요.', en: 'Thank you.' },
      { id: 'd3', sp: 'A', ko: '자주 가는 옷 가게가 있어요?', en: 'Do you have a clothing store that you often visit?' },
      { id: 'd4', sp: 'B', ko: '네, 저희 집 앞에 있어요.', en: 'Yes. It is in front of my house.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '예쁜 것 같아요 = Lesson 9 (I think it is pretty). 자주 가는 옷 가게 = a clothing store that (you) often go to. 저희 = humble 우리.' },

    { t: 'exercises', title: 'Exercises for Lesson 14', items: [
      { id: 'x1', q: 'Match the English phrase with the Korean equivalent: someone I like', choices: ['민지를 좋아하는 사람', '좋아하는 사람', '민지가 좋아하는 사람'], right: '좋아하는 사람', choicesKo: true, ans: ['좋아하는 사람'], skill: 'l14.clause', why: '= someone I like.',
        wrongNote: 'No name here: just 좋아하는 사람 (someone I like).' },
      { id: 'x2', q: 'Match: someone who Minji likes', choices: ['민지를 좋아하는 사람', '좋아하는 사람', '민지가 좋아하는 사람'], right: '민지가 좋아하는 사람', choicesKo: true, ans: ['민지가 좋아하는 사람'], skill: 'l14.clause', why: '= someone who Minji likes (민지가 = Minji does the liking).',
        wrongNote: 'Minji does the liking → 민지가 (subject): 민지가 좋아하는 사람.' },
      { id: 'x3', q: 'Match: someone who likes Minji', choices: ['민지를 좋아하는 사람', '좋아하는 사람', '민지가 좋아하는 사람'], right: '민지를 좋아하는 사람', choicesKo: true, ans: ['민지를 좋아하는 사람'], skill: 'l14.clause', why: '= someone who likes Minji (민지를 = Minji is liked).',
        wrongNote: 'Minji is the one who is liked → 민지를 (object): 민지를 좋아하는 사람.' },
      { id: 'x4', q: 'Translate to Korean: “Is there a Korean food that you eat often?”', hint: '먹다 = to eat · 자주 = often',
        ans: ['자주 먹는 한국 음식 있어요?'], full: '자주 먹는 한국 음식 있어요?', skill: 'l14.form', lenient: false,
        soft: [{ p: '자주 먹는 한국 음식(이|) 있어요', note: 'Accepted.' }, { p: '자주 먹는 한국 음식(이|) 있으세요', note: 'Accepted: 있으세요 is more polite.' }],
        diag: [{ p: '자주 먹은 한국 음식(이|) 있어요', note: '먹은 is the past (food you ate). Something you eat often, now: 먹는.' }, { p: '자주 멍는 한국 음식(이|) 있어요', note: 'It sounds like 멍는, but it is written 먹는.' }, { p: '자주 먹을 한국 음식(이|) 있어요', note: '먹을 is the future. Now / usually: 먹는.' }, { p: '한국 음식(을|) 자주 먹어요', note: 'That is “I eat Korean food often.” The book wants a noun phrase: 자주 먹는 한국 음식 + 있어요?' }] },
      { id: 'x5', q: 'Translate to Korean: “Which singer do you like these days?”', hint: '좋아하다 = to like; to love · 요즘 = these days',
        ans: ['요즘 좋아하는 가수는 누구예요?'], full: '요즘 좋아하는 가수는 누구예요?', skill: 'l14.form', lenient: false,
        soft: [{ p: '요즘 좋아하는 가수(는|가) 누구예요', note: 'Accepted.' }, { p: '요즘 (어떤|무슨) 가수(를|) 좋아해요', note: 'Accepted: a natural way to ask, but practise the lesson’s form: 좋아하는 가수.' }],
        diag: [{ p: '요즘 좋아한 가수(는|가) 누구예요', note: '좋아한 is the past. These days: 좋아하는.' }, { p: '요즘 좋아해는 가수(는|가) 누구예요', note: 'Verb stem + 는: 좋아하 + 는 = 좋아하는.' }, { p: '요즘 좋아하는 가수(는|가) 누구이에요', note: '누구 ends in a vowel: 누구예요.' }] },
    ] },
  ],
};
