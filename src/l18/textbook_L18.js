/* textbook_L18.js — Korean 3, Lesson 18 (textbook p.115–119, answers p.198). Romanization removed.
   The PDF text layer garbles “-밖에” (“-ী”) and “-만” (“-݅”) in the explanation and the Q/A box; restored from the examples.
   Track 35: intro (0–4.5 s), 밖에 ×2 (block 5.0–6.6 s), a short word at 7.8 s (ASR unclear, not clipped), then the 6 sample
   sentences (each twice, clipped by silence detection + ASR 10.3–36.6 s). The 콜라 / 돈 examples and 이것만 주세요 /
   닭고기만 싫어해요 are not on it. Track 36 = “Track 36_ver2” (dialogue; plain Track 36 is an unrelated recording). */
MM.lessons[18] = {
  n: 18, ko: '-밖에 + 부정형', en: 'Nothing but, Only',
  pages: { tb: '115–119', tbKey: '198', wb: '73–75', wbKey: '132–133' },
};
MM.textbook[18] = {
  blocks: [
    { t: 'h', text: 'Lesson 18 · Nothing but, Only', ko: '-밖에 + 부정형' },
    { t: 'p', text: 'In Level 2, Lesson 15, you learned how to use «-만» with nouns, pronouns, or noun forms of verbs. The expression introduced in this lesson can only be used with negative verb conjugations and consists of two parts: «-밖에» + negative verb conjugation.' },
    { t: 'p', text: 'The way this works is similar to saying “nothing else but” or “do not do anything other than” in English.' },
    { t: 'ex', items: [
      { id: 'w1', ko: '밖', en: ['outside; outdoors'] },
      { id: 'w2', ko: '밖에', en: ['outside something; other than something; out of the range of something'] },
    ] },
    { t: 'meaning', label: 'Pattern', ko: '-밖에 + 부정형', text: '-밖에 + negative verb conjugation = ONLY + verb' },
    { t: 'track', id: '35', from: 5.0, to: 6.6, label: 'Track 35 · 밖에' },

    { t: 'h2', text: 'Conjugation' },
    { t: 'meaning', label: 'Pattern', ko: '명사 + -밖에 + 부정형', text: 'Noun + -밖에 + negative conjugation' },
    { t: 'ex', items: [
      { id: 'e1', ko: '콜라(를) 마시다', en: ['to drink cola'] },
      { id: 'e2', ko: '콜라밖에 안 마시다', en: ['to only drink cola'], arrow: true },
      { id: 'e3', ko: '돈(이) 있다', en: ['to have money'] },
      { id: 'e4', ko: '돈(이) 없다', en: ['to not have money'] },
      { id: 'e5', ko: '돈밖에 없다', en: ['to have nothing but money, to only have money'], arrow: true },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: 'The negative part is one of the negatives you already know: 안 + verb, 못 + verb, 없다, 모르다. Notice that 돈밖에 없다 uses 없다 (not 있다), even though in English you “have” the money.' },

    { t: 'h2', text: 'Q & A' },
    { t: 'p', text: 'Q: Are «-만» and «-밖에» interchangeable?' },
    { t: 'p', text: 'A: The answer is yes and no. Sometimes they are interchangeable, but you have to change the verb to a negative form when using «밖에». «밖에» is generally used more than «-만».' },
    { t: 'p', text: '«-밖에» cannot be used with imperative sentences (sentences which request something or give instructions) including «-아/어/여 주세요» (“do something for me”), so «-만» must be used instead.' },
    { t: 'ex', items: [
      { id: 'q1', ko: '이것만 주세요.', en: ['Give me this one only.'] },
    ] },
    { t: 'p', text: 'In addition, when the verb itself has a negative meaning, «-만» is more commonly used than «-밖에».' },
    { t: 'ex', items: [
      { id: 'q2', ko: '저는 닭고기만 싫어해요.', en: ['I only hate chicken.'] },
    ] },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '35', from: 10.3, to: 36.6, label: 'Track 35 · these 6 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['35', 10.3, 15.45], ko: '한국인 친구가 한 명밖에 없어요.', en: ['I only have one Korean friend.'] },
    { t: 'sent', id: 's2', clip: ['35', 15.45, 20.7], ko: '한국인 친구는 한 명밖에 없어요.', en: ['As for Korean friends, I only have one.'] },
    { t: 'sent', id: 's3', clip: ['35', 20.7, 24.95], ko: '한국어 조금밖에 못 해요.', en: ['I can only speak a little bit of Korean.'] },
    { t: 'p', text: '* Please note that this is not “한국어 조금만 할 수 있어요. (I can speak a little bit of Korean.)” Although you will be understood if you say this, to sound more natural, please say “한국어 조금밖에 못 해요.”' },
    { t: 'sent', id: 's4', clip: ['35', 24.95, 27.75], ko: '이것밖에 없어요?', en: ['This is it?', 'You only have this?'] },
    { t: 'sent', id: 's5', clip: ['35', 27.75, 33.2], ko: '우리 고양이는 참치밖에 안 먹어요.', en: ['My cat only eats tuna.'] },
    { t: 'sent', id: 's6', clip: ['35', 33.2, 36.6], ko: '왜 공부밖에 안 해요?', en: ['Why do you only study?', 'Why do you do nothing but study?'] },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '36', lines: [
      { id: 'd1', sp: 'A', ko: '민석 씨, 어제 생일 파티에 몇 명 왔어요?', en: 'Minseok, how many people came to your birthday party yesterday?' },
      { id: 'd2', sp: 'B', ko: '별로 안 왔어요.', en: 'Not many people came.' },
      { id: 'd3', sp: 'A', ko: '몇 명 정도 왔어요?', en: 'About how many people came?' },
      { id: 'd4', sp: 'B', ko: '백 명밖에 안 왔어요.', en: 'Only 100 people came.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '별로 + negative = not very / not many. 정도 = about (Lesson 5). The joke: “only” 100 people — 밖에 shows that the speaker thinks it is a small number.' },

    { t: 'exercises', title: 'Exercises for Lesson 18', items: [
      { id: 'x1', q: 'Match the English phrase with its Korean equivalent: “To have nothing but money; to only have money”',
        choices: ['돈(이) 없다', '돈밖에 없다', '돈(이) 있다'], right: '돈밖에 없다', choicesKo: true, ans: ['돈밖에 없다'], skill: 'l18.form',
        why: '돈 + 밖에 + 없다 (negative) = nothing but money.', wrongNote: 'Look for 밖에 (only) + a negative verb.' },
      { id: 'x2', q: 'Match the English phrase with its Korean equivalent: “To have money”',
        choices: ['돈(이) 없다', '돈밖에 없다', '돈(이) 있다'], right: '돈(이) 있다', choicesKo: true, ans: ['돈(이) 있다'], skill: 'l18.vocab',
        why: '있다 = to have / to exist.', wrongNote: '없다 = to not have. “To have” is 있다.' },
      { id: 'x3', q: 'Match the English phrase with its Korean equivalent: “To not have money”',
        choices: ['돈(이) 없다', '돈밖에 없다', '돈(이) 있다'], right: '돈(이) 없다', choicesKo: true, ans: ['돈(이) 없다'], skill: 'l18.vocab',
        why: '없다 = to not have / to not exist.', wrongNote: '돈밖에 없다 = to have ONLY money. “To not have money” is plain 돈(이) 없다.' },
      { id: 'x4', q: 'Write the following sentence in Korean: “As for Korean friends, I only have one.”', hint: '한국인 친구 = Korean friend',
        ans: ['한국인 친구는 한 명밖에 없어요.'], full: '한국인 친구는 한 명밖에 없어요.', skill: 'l18.form', lenient: false,
        soft: [{ p: '(저는 |)한국인 친구(는|가) 한 명밖에 없어요', note: 'Accepted. (The key writes 한 명 밖에 with a space; 밖에 is normally attached: 한 명밖에.) 친구가 = “I only have one Korean friend”; 친구는 = “as for Korean friends”.' }],
        diag: [{ p: '한국인 친구(는|가) 한 명밖에 있어요', note: '밖에 always needs a negative verb: 밖에 없어요 (not 있어요).' }, { p: '한국인 친구(는|가) 한 명만 있어요', note: 'Understandable (만 + 있어요), but this lesson’s pattern is 밖에 + negative: 한 명밖에 없어요.' }, { p: '한국인 친구(는|가) 한 명밖에 안 있어요', note: 'The negative of 있다 is 없다: 한 명밖에 없어요.' }, { p: '한국인 친구(는|가) (하나|일) 명밖에 없어요', note: 'With the counter 명, use the native number 한: 한 명.' }] },
      { id: 'x5', q: 'Write the following sentence in Korean: “I can only speak a little bit of Korean.”',
        ans: ['한국어 조금밖에 못 해요.'], full: '한국어 조금밖에 못해요.', skill: 'l18.neg', lenient: false,
        soft: [{ p: '(저는 |)한국어(를|) 조금밖에 못 해요', note: 'Accepted. (못 해요 / 못해요: both spellings are used; the key writes 못해요.)' }, { p: '(저는 |)한국말(을|) 조금밖에 못 해요', note: 'Accepted: 한국말 = 한국어 (spoken word).' }],
        diag: [{ p: '(저는 |)한국어(를|) 조금만 할 수 있어요', note: 'You will be understood, but the book says this sounds less natural. Say: 한국어 조금밖에 못 해요.' }, { p: '(저는 |)한국어(를|) 조금밖에 (해요|할 수 있어요)', note: '밖에 needs a negative verb: 조금밖에 못 해요 (못 = cannot).' }, { p: '(저는 |)한국어(를|) 조금밖에 안 해요', note: '안 해요 = I don’t (choose to) speak. “Can only” = 못 해요 (cannot).' }, { p: '(저는 |)한국어(를|) 조금만 못 해요', note: '조금만 못 해요 would mean “only a little bit, I can’t”. Only + negative = 조금밖에 못 해요.' }] },
    ] },
  ],
};
