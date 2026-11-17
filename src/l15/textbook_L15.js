/* textbook_L15.js — Korean 3, Lesson 15 (textbook p.101–104, answers p.197). Romanization removed.
   The PDF text layer garbles the headings “ݶ۞” = 그러면 (restored from the book's own text: “그러면 is a combination of…”).
   Track 29: intro (0–4 s), 그러면 ×2 + 그럼 (one block 4.6–9.0 s; ASR unclear for 그럼), then the 5 sample sentences
   (each twice, clipped by silence detection + ASR 9.6–36.5 s). Track 30 = dialogue. */
MM.lessons[15] = {
  n: 15, ko: '그러면, 그럼', en: 'Well then, In that case, If so',
  pages: { tb: '101–104', tbKey: '197', wb: '63–65', wbKey: '130–131' },
};
MM.textbook[15] = {
  blocks: [
    { t: 'h', text: 'Lesson 15 · Well then, In that case, If so', ko: '그러면, 그럼' },
    { t: 'p', text: '«안녕하세요»! Welcome back to another lesson on conjunctions! Hooray! By the end of this lesson, you will learn how to use a Korean conjunction which means “well then”, “in that case”, or “if so”.' },
    { t: 'meaning', label: 'Word', ko: '그러면', text: 'in that case; if so; then' },
    { t: 'p', text: 'Do you remember «-(으)면»? Yes, that’s right. It was introduced in Level 2, Lesson 23! «만약 -(으)면» or «-(으)면» means “if” or “in case”. «그러면» is a combination of «그렇다», which means “to be so”, and «-면».' },
    { t: 'meaning', label: 'Short form', ko: '그럼', text: 'a shorter version of 그러면' },
    { t: 'p', text: 'In spoken Korean (and often in casual written Korean), instead of saying «그러면», sometimes people use the shortened form, «그럼». Try not to confuse it with «그런», which means “such”.' },
    { t: 'track', id: '29', from: 4.6, to: 9.0, label: 'Track 29 · 그러면, 그럼' },
    { t: 'note', label: 'App note (not from the book)', text: '그렇다 + 면 → 그러면 (the ㅎ drops, like 그렇다 → 그런 in Lesson 13). 그런 (such) goes before a noun: 그런 이야기. 그럼 (then) starts a sentence: 그럼 언제 와요?' },

    { t: 'h2', text: 'Sample Sentences' },
    { t: 'track', id: '29', from: 9.6, to: 36.5, label: 'Track 29 · these 5 sentences (each twice)' },
    { t: 'sent', id: 's1', clip: ['29', 9.6, 13.25], ko: '그러면 이거는 뭐예요?', en: ['Then, what is THIS?'] },
    { t: 'sent', id: 's2', clip: ['29', 13.3, 20.0], ko: '지금 바빠요? 그러면 언제 안 바빠요?', en: ['You’re busy now? Then WHEN are you not busy?'] },
    { t: 'sent', id: 's3', clip: ['29', 20.4, 27.45], ko: '한국 음식 좋아해요? 그럼 김밥도 좋아해요?', en: ['Do you like Korean food? Then do you like kimbap, too?'] },
    { t: 'sent', id: 's4', clip: ['29', 27.75, 33.1], ko: '진짜요? 그럼 이제 어떻게 해요?', en: ['Really? If so, what do we do now?'] },
    { t: 'sent', id: 's5', clip: ['29', 33.2, 36.5], ko: '그럼 이거는 어때요?', en: ['Then how about this one?'] },
    { t: 'p', text: '* As an adverb, «그럼» (shortening of «그러면») indeed means ‘then’ or ‘in that case’. However, the interjection «그럼» (or «그럼요» in polite form) means ‘of course!’ or ‘naturally!’ Depending on the context you can distinguish the difference between the two.' },
    { t: 'note', label: 'App note (not from the book)', text: 'On Track 29 the second reading of the last sentence is the short spoken form «그럼 이건 어때요?» (이건 = 이거는).' },

    { t: 'h2', text: 'Sample Dialogue' },
    { t: 'dialogue', track: '30', lines: [
      { id: 'd1', sp: 'A', ko: '우체국 옆에 냉면 맛있는 집 있는 거 알아요?', en: 'Do you know that there is a good cold noodle restaurant next to the post office?' },
      { id: 'd2', sp: 'B', ko: '아니요, 몰랐어요.', en: 'No. I didn’t know that.' },
      { id: 'd3', sp: 'A', ko: '그럼 오늘 점심 거기서 먹을까요?', en: 'Then, shall we have lunch there today?' },
      { id: 'd4', sp: 'B', ko: '네, 좋아요.', en: 'Okay. Sounds good.' },
    ] },
    { t: 'note', label: 'App note (not from the book)', text: '맛있는 집 = a restaurant that is good (Lesson 13: 있다 words + 는). 있는 거 알아요? = do you know (the fact) that there is…? (Lesson 14: 있다 + 는 + 거). 먹을까요? = Lesson 4.' },

    { t: 'exercises', title: 'Exercises for Lesson 15', items: [
      { id: 'x1', q: 'How do you say “in that case”, “if so”, or “well then” in Korean?',
        ans: ['그러면'], full: '그러면', skill: 'l15.form',
        soft: [{ p: '그럼', note: 'Accepted: 그럼 is the short form (exercise 1-1). The key wants the full word here: 그러면.' }],
        diag: [{ p: '그런', note: '그런 = such (before a noun, Lesson 13). “In that case” = 그러면.' }, { p: '그래도', note: '그래도 = but still (Lesson 12). “In that case” = 그러면.' }, { p: '그래서', note: '그래서 = so, therefore. “In that case / if so” = 그러면.' }, { p: '그렇면', note: 'The ㅎ drops: 그렇다 + 면 → 그러면.' }] },
      { id: 'x1b', q: '1-1. Often used in spoken Korean (and in casual written Korean), what is the shortened form of the previous answer?',
        ans: ['그럼'], full: '그럼', skill: 'l15.form',
        diag: [{ p: '그러면', note: 'That is the full form. The short one: 그럼.' }, { p: '그런', note: '그런 = such. Don’t confuse them: the short form of 그러면 is 그럼 (ㅁ, not ㄴ).' }, { p: '그름', note: 'The short form is 그럼.' }] },
      { id: 'x2', q: 'Write in Korean: “You’re busy now? Then when are you not busy?”', hint: 'To be busy = 바쁘다',
        ans: ['지금 바빠요? 그럼 언제 안 바빠요?'], full: '지금 바빠요? 그럼 언제 안 바빠요?', skill: 'l15.usage', lenient: false,
        soft: [{ p: '지금 바빠요 (그럼|그러면) 언제 안 바빠요', note: 'Accepted: 그럼 and 그러면 both work.' }],
        diag: [{ p: '지금 바빠요 (그럼|그러면) 언제 바쁘지 않아요', note: 'Correct Korean (바쁘지 않아요 = not busy, long negation). The book uses the short negation: 안 바빠요.' }, { p: '지금 바빠요 (그래도|그래서) 언제 안 바빠요', note: '“Then / in that case” = 그럼 or 그러면.' }, { p: '지금 바뻐요 (그럼|그러면) 언제 안 바뻐요', note: '바쁘다: the stem vowel before ㅡ is ㅏ → 바빠요 (not 바뻐요).' }] },
      { id: 'x3', q: 'Write in Korean: “Then, what is THIS?”',
        ans: ['그러면 이거는 뭐예요?'], full: '그러면 이거는 뭐예요?', skill: 'l15.usage', lenient: false,
        soft: [{ p: '(그러면|그럼) (이거는|이건|이것은|이거) 뭐예요', note: 'Accepted.' }],
        diag: [{ p: '(그러면|그럼) (이거는|이건|이것은|이거) 뭐이에요', note: '뭐 ends in a vowel: 뭐예요.' }, { p: '(그런|그래도) (이거는|이건|이것은|이거) 뭐예요', note: '“Then” = 그러면 or 그럼.' }] },
    ] },
  ],
};
