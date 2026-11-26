/* ---- src/l15/cards_L15.js ---- */
/* cards_L15.js — Loyalty Cards for Lesson 15. Vocabulary cards come from the game vocab automatically;
   these are the sentence cards (front Korean, back English). */
MM.cards[15] = [
  { id: 'k1', ko: '그러면', en: 'in that case; if so; then (그렇다 + -면)', src: 'Textbook' },
  { id: 'k2', ko: '그럼', en: 'the spoken short form of 그러면 (don’t confuse it with 그런 = such)', src: 'Textbook' },
  { id: 'k3', ko: '그럼요!', en: 'Of course! / Naturally! (interjection, polite)', src: 'Textbook' },
  { id: 'k4', ko: '그러면 이거는 뭐예요?', en: 'Then, what is THIS?', src: 'Textbook' },
  { id: 'k5', ko: '지금 바빠요? 그러면 언제 안 바빠요?', en: 'You’re busy now? Then WHEN are you not busy?', src: 'Textbook' },
  { id: 'k6', ko: '한국 음식 좋아해요? 그럼 김밥도 좋아해요?', en: 'Do you like Korean food? Then do you like kimbap, too?', src: 'Textbook' },
  { id: 'k7', ko: '진짜요? 그럼 이제 어떻게 해요?', en: 'Really? If so, what do we do now?', src: 'Textbook' },
  { id: 'k8', ko: '그럼 이거는 어때요?', en: 'Then how about this one?', src: 'Textbook' },
  { id: 'k9', ko: '우체국 옆에 냉면 맛있는 집 있는 거 알아요?', en: 'Do you know that there is a good cold noodle restaurant next to the post office?', src: 'Textbook dialogue' },
  { id: 'k10', ko: '그럼 오늘 점심 거기서 먹을까요?', en: 'Then, shall we have lunch there today?', src: 'Textbook dialogue' },
  { id: 'k11', ko: '그러면 택시 타세요.', en: 'Then take a taxi.', src: 'Workbook' },
  { id: 'k12', ko: '그러면 창문 여세요.', en: 'Then open the window.', src: 'Workbook' },
  { id: 'k13', ko: '그러면 혼자 먹고 올게요.', en: 'Then I will eat alone and come.', src: 'Workbook' },
  { id: 'k14', ko: '그럼 저는 이제 갈게요.', en: 'Well then, I will get going now.', src: 'Workbook dictation' },
  { id: 'k15', ko: '그러면 저 주세요.', en: 'If so, please give it to me.', src: 'Workbook dictation' },
];

/* ---- src/l15/game_L15.js ---- */
/* game_L15.js — Moonlight Mart, Lesson 15 (그러면 / 그럼 = well then, in that case, if so; 그렇다 + -면; 그럼 ≠ 그런 (such);
   the interjection 그럼요 = of course!).
   Lines: [castId, korean, english]. q.opts: correct option first (engine shuffles).
   odd: opts[0] is the WRONG sentence the player must find.
   No forms table in this lesson (no conjugation): Rush Hour mixes vocabulary with the pool (rushPool).
   Game words not in the book: 영수증, 프린터, 그냥, 사인, 펜, 간판, 넘어지다, 일찍, 쉬다, 모레, 딸기 (L12), 트럭, 녹차, 바로, 옮기다,
   힘들다, 카트, 바퀴, 할인 (L10 reads) — glossed where they appear.
   App-written sentences are NOT yet checked by a native speaker (⚠ list in HANDOFF.md). */
MM.game[15] = {
  skills: {
    'l15.form':  { en: '그러면: the word', desc: '그러면 = in that case / if so / well then. It is 그렇다 (to be so) + -면 (if).' },
    'l15.short': { en: '그럼 · 그럼요 · 그런', desc: '그럼 = spoken short form of 그러면. 그럼요! = of course! Don’t confuse them with 그런 (such, before a noun).' },
    'l15.usage': { en: 'Reacting with 그럼', desc: 'Someone tells you something → 그럼 + your question, suggestion or decision: 바빠요? 그럼 언제 안 바빠요?' },
    'l15.vs':    { en: '그럼, 그래도 or 그래서?', desc: '그럼 = in that case (reacting to what was said). 그래도 = but still. 그래서 = so (a result of your own first sentence).' },
    'l15.vocab': { en: 'Lesson 15 vocabulary', desc: 'The words of the lesson.' },
  },
  fixSkills: { printer: 'l15.form', aboard: 'l15.usage', cart: 'l15.short' },
  rushPool: true,
  intro: '그러면 = 그렇다 (to be so) + -면 (if): “if so”, “in that case”, “well then”. In speech it shrinks to 그럼. Someone tells you something, you react: 지금 바빠요? 그럼 언제 안 바빠요? Careful: 그런 (such) is a different word, and 그럼요! means “of course!”. Tonight the receipt printer prints only blank paper.',

  shifts: {
    A: {
      title: 'Then What?', sub: 'Recognize · choose', kind: 'recognize', fix: 'printer',
      snack: { id: 'l15.snackA', ko: '그럼 껌', en: 'Then-Gum', desc: 'For when you don’t know what to say next. Chew. Say “그럼…”. Continue.' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Counter', narr: 'Fifteenth night. The receipt printer hums and pushes out a long strip of blank paper. (영수증 = receipt, 프린터 = printer)',
          lines: [['minji', '프린터가 고장 났어요. 영수증이 안 나와요.', 'The printer is broken. The receipts don’t come out.']],
          q: { type: 'mc', prompt: 'React: “Really? If so, what do we do now?”', ko: '진짜요? ___ 이제 어떻게 해요?', opts: ['그럼', '그래도', '그런', '그래서'], skill: 'l15.form',
            explain: 'Textbook: 진짜요? 그럼 이제 어떻게 해요? You react to what Minji just said: 그럼 (= 그러면).', en: 'Really? If so, what do we do now?' },
          after: [['minji', '손으로 써요. 하하.', 'We write them by hand. Ha ha.']] },
        { id: 'A2', time: '22:30', place: 'Counter', narr: 'Sua buys her kimbap. You apologise: no receipt tonight. (그냥 = just)',
          lines: [['sua', '영수증 없어요? 그럼 그냥 주세요.', 'No receipt? Then just give it to me.']],
          q: { type: 'enOpts', prompt: 'What does Sua say?', opts: ['No receipt? Then just give me the kimbap.', 'No receipt? Then she won’t buy it.', 'She wants a receipt anyway.', 'She will come back tomorrow.'], skill: 'l15.usage',
            explain: '그럼 = in that case: she reacts to “no receipt”.', en: 'No receipt? Then just give it to me.' } },
        { id: 'A3', time: '23:00', place: 'Counter', narr: 'Mr. Lee wants to complain about his day. You are restocking and say you are a bit busy.',
          lines: [['manager', '지금 바빠요? 그러면 언제 안 바빠요?', 'You’re busy now? Then when are you not busy?']],
          q: { type: 'enOpts', prompt: 'What does Mr. Lee ask?', opts: ['You’re busy now? Then when are you not busy?', 'Why are you always busy?', 'Were you busy yesterday?', 'Are you busy because of him?'], skill: 'l15.usage',
            explain: 'Textbook sample sentence. 그러면 = then / in that case.', en: 'You’re busy now? Then when are you not busy?' } },
        { id: 'A4', time: '23:30', place: 'Snack display', narr: 'Grandma points at a new snack.',
          lines: [['grandma', '학생, 이 과자 맛있어요?', 'Dear, is this snack good?'], ['you', '네, 정말 맛있어요.', 'Yes, it’s really good.'], ['grandma', '그럼 두 개 주세요.', 'Then give me two.']],
          q: { type: 'enOpts', prompt: 'Why does Grandma take two?', opts: ['Because you said it is really good.', 'Because it is cheap.', 'Because she has two grandchildren.', 'Because the printer is broken.'], skill: 'l15.usage',
            explain: '그럼 = in that case: she reacts to your answer (맛있어요).', en: 'Then give me two.' } },
        { id: 'A5', time: '00:30', place: 'Counter', narr: 'Hyunwoo left notes for the morning shift. One of them is wrong.',
          q: { type: 'odd', prompt: 'Which note is WRONG?', opts: ['프린터가 고장 났어요. 그런 이제 어떻게 해요?', '프린터가 고장 났어요. 그럼 이제 어떻게 해요?', '프린터가 고장 났어요. 그러면 이제 어떻게 해요?', '그런 이야기 많이 들었어요.'], skill: 'l15.short',
            explain: 'Textbook: don’t confuse 그럼 (then) with 그런 (such). 그런 goes before a noun: 그런 이야기 (Lesson 13).', en: 'The printer is broken. Then what do we do now?' } },
        { id: 'A6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim is curious about the new night-shift worker.',
          lines: [['taxi', '한국 음식 좋아해요? 그럼 김밥도 좋아해요?', 'Do you like Korean food? Then do you like kimbap, too?']],
          q: { type: 'enOpts', prompt: 'What does Mr. Kim ask?', opts: ['If you like Korean food, then do you like kimbap too?', 'Whether you can make kimbap.', 'Which Korean food you don’t like.', 'Whether you ate kimbap today.'], skill: 'l15.usage',
            explain: 'Textbook sample sentence. 그럼 = then (if so).', en: 'Do you like Korean food? Then do you like kimbap, too?' },
          after: [['you', '네! 김밥은 매일 먹어요.', 'Yes! I eat kimbap every day.']] },
        { id: 'A7', time: '02:30', place: 'Front door', narr: 'The courier holds out his tablet for a signature. You look for a pen. (사인 = signature, 펜 = pen)',
          lines: [['you', '펜이 없어요.', 'I don’t have a pen.'], ['courier', '그럼 이거 쓰세요.', 'Then use this.']],
          q: { type: 'enOpts', prompt: 'What does the courier do?', opts: ['He gives you his pen to use.', 'He leaves without a signature.', 'He asks you to buy a pen.', 'He signs it himself.'], skill: 'l15.usage',
            explain: '그럼 이거 쓰세요 = Then use this (쓰다 = to use / to write).', en: 'Then use this.' } },
        { id: 'A8', time: '03:30', place: 'Drinks fridge', narr: 'You tell the officer the banana milk is sold out. He opens the fridge and pulls one out from the back row.',
          lines: [['police', '그러면 이거는 뭐예요?', 'Then, what is THIS?']],
          q: { type: 'enOpts', prompt: 'What does the officer mean?', opts: ['“If it is sold out, then what is this?”', '“What is this drink called?”', '“Is this banana milk?”', '“Can I have this?”'], skill: 'l15.usage',
            explain: 'Textbook: 그러면 이거는 뭐예요? = Then, what is THIS? He reacts to what you said.', en: 'Then, what is THIS?' } },
        { id: 'A9', time: '04:30', place: 'Receipt printer', narr: 'You open the printer. A ball of orange cat fur is stuck on the roller. You clean it out and print a test receipt.',
          q: { type: 'mc', prompt: 'Test receipt: “그러면 = 그렇다 + ___”', opts: ['-면', '-도', '-서', '-고'], skill: 'l15.form',
            explain: 'Textbook: 그러면 is a combination of 그렇다 (to be so) and -면 (if). (그래도 = … + 도, 그래서 = … + 서.)', en: '' } },
        { id: 'A10', time: '05:30', place: 'Counter', narr: 'Receipts come out again, crisp and black. Mr. Park arrives with an idea.',
          lines: [['boss', '그럼 이거는 어때요? 영수증에 라면 사진!', 'Then how about this? Ramyeon’s picture on the receipts!']],
          q: { type: 'enOpts', prompt: 'What does Mr. Park suggest?', opts: ['Printing Ramyeon’s picture on the receipts.', 'Selling Ramyeon ramen.', 'Buying a new printer.', 'Writing receipts by hand.'], skill: 'l15.usage',
            explain: 'Textbook: 그럼 이거는 어때요? = Then how about this one?', en: 'Then how about this? Ramyeon’s picture on the receipts!' },
          afterNarr: 'Ramyeon refuses to pose. The first receipt shows only a blurry tail.' },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: '“그러면” means…', opts: ['in that case / if so / well then', 'but still', 'so, therefore', 'such'], skill: 'l15.form', explain: 'Textbook. (그래도 = but still, 그래서 = so, 그런 = such.)', en: '' },
        { id: 'A.c2', type: 'mc', prompt: 'The spoken short form of 그러면', opts: ['그럼', '그런', '그래', '그러'], skill: 'l15.short', explain: 'Textbook: in spoken Korean people often say 그럼.', en: '' },
        { id: 'A.c3', type: 'enOpts', prompt: '“지금 바빠요? 그러면 언제 안 바빠요?”', opts: ['You’re busy now? Then when are you not busy?', 'You’re busy now, but still you came?', 'You’re busy, so you can’t come?', 'When were you busy?'], skill: 'l15.usage', explain: 'Textbook sample sentence.', en: 'You’re busy now? Then when are you not busy?' },
        { id: 'A.c4', type: 'enOpts', prompt: '“그럼 이거는 어때요?”', opts: ['Then how about this one?', 'Of course, this one!', 'How is this one, really?', 'Such a thing, how is it?'], skill: 'l15.usage', explain: 'Textbook sample sentence.', en: 'Then how about this one?' },
        { id: 'A.c5', type: 'enOpts', prompt: 'The textbook says: try not to confuse 그럼 with…', opts: ['그런 (such)', '그래도 (but still)', '그리고 (and)', '근데 (but)'], skill: 'l15.short', explain: '그럼 = then; 그런 = such. One letter (ㅁ / ㄴ) apart.', en: '' },
        { id: 'A.c6', type: 'mc', prompt: '“Really? If so, what do we do now?”', ko: '진짜요? ___ 이제 어떻게 해요?', opts: ['그럼', '그래도', '그래서', '그런'], skill: 'l15.vs', explain: 'Textbook sample sentence: 그럼.', en: 'Really? If so, what do we do now?' },
      ],
    },

    B: {
      title: 'In That Case', sub: 'Build · write', kind: 'produce', fix: 'aboard',
      note: { by: 'boss', text: 'Night shift rule #15: customer has a problem? Say 그럼 and offer something: 그럼 이거는 어때요? Never just “no”. Also: the sign board outside fell over AGAIN. — Park' },
      snack: { id: 'l15.snackB', ko: '그러면 초코', en: 'In-That-Case Chocolate', desc: 'Out of your usual snack? In that case, this one.' },
      scenes: [
        { id: 'B1', time: '22:00', place: 'Front door', narr: 'The wind knocked over the sign board in front of the store. (간판 = sign board, 넘어지다 = to fall over)',
          lines: [['minji', '밖에 있는 간판이 또 넘어졌어요.', 'The sign board outside fell over again.']],
          q: { type: 'tiles', prompt: 'React: “Then shall I fix it?”', ans: ['그럼 제가 고칠까요?'], soft: [{ p: '(그럼|그러면) (제가 |)고칠까요', note: 'Accepted.' }], extra: ['그런', '그래도', '고쳤어요'], skill: 'l15.usage',
            diag: [{ p: '그런 제가 고칠까요', note: '그런 = such. “Then” = 그럼.' }, { p: '그래도 제가 고칠까요', note: '그래도 = but still. You react to Minji’s news: 그럼.' }],
            explain: '그럼 + offer (-(으)ㄹ까요?, Lesson 4).', en: 'Then shall I fix it?' },
          after: [['minji', '네, 부탁해요!', 'Yes, please!']] },
        { id: 'B2', time: '22:30', place: 'Window seats', narr: 'Sua yawns over her notes. (일찍 = early)',
          lines: [['sua', '오늘 너무 피곤해요.', 'I’m so tired today.']],
          q: { type: 'write', prompt: 'Say: “Then go home early.”', ans: ['그럼 일찍 집에 가세요.'], soft: [{ p: '(손님 |)(그럼|그러면) (오늘은 |)(일찍 집에|집에 일찍) 가세요', note: 'Accepted.' }], skill: 'l15.usage',
            diag: [{ p: '(그래도|그래서) (일찍 집에|집에 일찍) 가세요', note: 'You react to what Sua said → 그럼 / 그러면 (in that case).' }, { p: '그런 (일찍 집에|집에 일찍) 가세요', note: '그런 = such. “Then” = 그럼.' }],
            explain: '그럼 + advice (-(으)세요): workbook 6–7 (그러면 택시 타세요).', en: 'Then go home early.' } },
        { id: 'B3', time: '23:00', place: 'Kimbap shelf', narr: 'The kimbap shelf is empty. Only sandwiches are left.',
          lines: [['manager', '김밥 다 팔렸어요?', 'Is the kimbap all sold out?']],
          q: { type: 'write', prompt: 'Answer, holding up a sandwich: “Yes. Then how about this one?”', ans: ['네. 그럼 이거는 어때요?'], soft: [{ p: '(네 |)(과장님 |)(그럼|그러면) (이거는|이건|이거|이것은) 어때요', note: 'Accepted.' }], skill: 'l15.usage',
            diag: [{ p: '(네 |)(그래도|그래서) (이거는|이건|이거) 어때요', note: 'You react to the problem (no kimbap) → 그럼.' }, { p: '(네 |)(그럼|그러면) (이거는|이건|이거) 어때요요', note: 'Just one 요: 어때요.' }],
            explain: 'Textbook: 그럼 이거는 어때요?', en: 'Yes. Then how about this one?' },
          after: [['manager', '음… 그래요. 이거 주세요.', 'Hmm… okay. Give me this.']] },
        { id: 'B4', time: '23:30', place: 'Sign board', narr: 'You write the night specials on the board with chalk. Minji reads over your shoulder.',
          lines: [['minji', '커피 좋아해요? ___ 이거 마셔요.', 'Do you like coffee? Then drink this.']],
          q: { type: 'fill', prompt: 'The first line of the board: “Do you like coffee? Then drink this.”', ko: '커피 좋아해요? ___ 이거 마셔요.', ans: ['그럼'], units: ['그', '럼'], extra: ['런', '래', '도'], skill: 'l15.short',
            diag: [{ p: '그런', note: '그런 = such. “Then” = 그럼 (ㅁ, not ㄴ).' }, { p: '그래도', note: '그래도 = but still. “Then” = 그럼.' }],
            explain: '그럼 = short for 그러면. Like the textbook: 한국 음식 좋아해요? 그럼 김밥도 좋아해요?', en: 'Do you like coffee? Then drink this.' } },
        { id: 'B5', time: '00:30', place: 'By the stairs', narr: 'Grandma comes down in her coat. The window by the stairs is open.',
          lines: [['grandma', '학생, 저 너무 추워요.', 'Dear, I’m so cold.']],
          q: { type: 'write', prompt: 'Say: “Then shall I close the window?” (닫다 = to close)', ans: ['그럼 창문 닫을까요?'], soft: [{ p: '(할머니 |)(그럼|그러면) (제가 |)창문(을|) 닫을까요', note: 'Accepted.' }, { p: '(할머니 |)(그럼|그러면) (제가 |)창문(을|) 닫을게요', note: 'Accepted: “Then I’ll close the window” (Lesson 6).' }], skill: 'l15.usage',
            diag: [{ p: '(그럼|그러면) (제가 |)창문(을|) 닫을까요요', note: 'Just one 요.' }, { p: '(그래도|그래서) (제가 |)창문(을|) 닫을까요', note: 'You react to Grandma’s words → 그럼.' }, { p: '(그럼|그러면) (제가 |)창문(을|) 닫까요', note: '닫 ends in a consonant: 닫 + 을까요 → 닫을까요.' }],
            explain: '그럼 + offer: 그럼 창문 닫을까요?', en: 'Then shall I close the window?' },
          after: [['grandma', '네, 고마워요.', 'Yes, thank you.']] },
        { id: 'B6', time: '01:00', place: 'Sign board', narr: 'The second line of the board, for the cold night.',
          q: { type: 'tiles', prompt: 'Write: “Are you cold? Then drink hot coffee!”', ans: ['추워요? 그럼 따뜻한 커피 마시세요!'], soft: [{ p: '추워요 (그럼|그러면) 따뜻한 커피(를|) 마시세요', note: 'Accepted.' }], extra: ['그래도', '그런', '차가운'], skill: 'l15.usage',
            diag: [{ p: '추워요 그래도 따뜻한 커피 마시세요', note: '그래도 = but still. “Then” = 그럼.' }, { p: '추워요 그럼 차가운 커피 마시세요', note: 'Cold customers want 따뜻한 (warm) coffee. 차가운 = cold.' }],
            explain: '추워요? 그럼 … -세요 (Lesson 11: 춥다 → 추워요; Lesson 13: 따뜻한 커피).', en: 'Are you cold? Then drink hot coffee!' } },
        { id: 'B7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim has news. (쉬다 = to rest, to take a day off)',
          lines: [['taxi', '저 내일 쉬어요.', 'I’m taking tomorrow off.']],
          q: { type: 'write', prompt: 'Ask: “Then when are you coming?”', ans: ['그럼 언제 와요?'], soft: [{ p: '(기사님 |)(그럼|그러면) (언제|언제 또) (와요|오세요)', note: 'Accepted.' }], skill: 'l15.usage',
            diag: [{ p: '(그래도|그래서) 언제 (와요|오세요)', note: 'You react to his news → 그럼 / 그러면.' }, { p: '(그럼|그러면) 언제 (갔어요|왔어요)', note: 'Ask about the future (when is he coming): 와요.' }],
            explain: '그럼 + question, like 그러면 언제 안 바빠요?', en: 'Then when are you coming?' },
          after: [['taxi', '모레요! 하하.', 'The day after tomorrow! Ha ha.']] },
        { id: 'B8', time: '03:30', place: 'Drinks fridge', narr: 'This time the banana milk really is sold out. (딸기 = strawberry)',
          lines: [['police', '바나나 우유 다 팔렸어요?', 'Is the banana milk all sold out?']],
          q: { type: 'write', prompt: 'Answer: “Yes. Then how about strawberry milk?”', ans: ['네. 그럼 딸기 우유는 어때요?'], soft: [{ p: '(네 |)(경찰관님 |)(그럼|그러면) 딸기 우유(는|) 어때요', note: 'Accepted.' }], skill: 'l15.usage',
            diag: [{ p: '(네 |)(그래도|그래서) 딸기 우유(는|) 어때요', note: 'You react to his problem → 그럼.' }, { p: '(네 |)그런 딸기 우유(는|) 어때요', note: '그런 딸기 우유 = such strawberry milk. “Then” = 그럼.' }],
            explain: 'Textbook: 그럼 이거는 어때요? → 그럼 딸기 우유는 어때요?', en: 'Yes. Then how about strawberry milk?' },
          after: [['police', '음… 오늘만요.', 'Hmm… just for today.']] },
        { id: 'B9', time: '04:30', place: 'Front door', narr: 'You tighten the sign board’s hinge. It stands again. The courier runs past it, out of breath. (트럭 = truck)',
          lines: [['courier', '트럭이 고장 났어요! 저 늦었어요!', 'My truck broke down! I’m late!']],
          q: { type: 'write', prompt: 'Say: “Then take a taxi.” (workbook 6)', ans: ['그러면 택시 타세요.'], soft: [{ p: '(기사님 |)(그럼|그러면) 택시(를|) 타세요', note: 'Accepted.' }], skill: 'l15.usage',
            diag: [{ p: '(그럼|그러면) 택시(를|) 탈게요', note: '탈게요 = I will take one. You tell HIM to: 타세요.' }, { p: '(그럼|그러면) 택시(를|) 타으세요', note: '타 ends in a vowel: 타세요.' }, { p: '(그래도|그래서) 택시(를|) 타세요', note: 'You react to his problem → 그럼 / 그러면.' }],
            explain: 'Workbook 6: 그러면 택시 타세요.', en: 'Then take a taxi.' },
          after: [['courier', '택시요? 박스가 백 개예요!', 'A taxi? There are a hundred boxes!']] },
        { id: 'B10', time: '05:40', place: 'Counter', narr: 'Minji arrives and admires the board.',
          lines: [['minji', '간판 고쳤어요? 고마워요! 저 오늘 점심 시간 있어요.', 'You fixed the sign board? Thanks! I have time for lunch today.']],
          q: { type: 'write', prompt: 'Say: “Then shall we have lunch together?”', ans: ['그럼 같이 점심 먹을까요?'], soft: [{ p: '(그럼|그러면) (오늘 |)(같이 |)점심(을|) (같이 |)먹을까요', note: 'Accepted.' }], skill: 'l15.usage',
            diag: [{ p: '(그래도|그래서) (같이 |)점심(을|) (같이 |)먹을까요', note: 'You react to what Minji said → 그럼.' }, { p: '(그럼|그러면) (같이 |)점심(을|) (같이 |)먹까요', note: '먹 ends in a consonant: 먹을까요.' }],
            explain: 'Textbook dialogue: 그럼 오늘 점심 거기서 먹을까요?', en: 'Then shall we have lunch together?' },
          after: [['minji', '네, 좋아요! 우체국 옆에 냉면 맛있는 집 있어요.', 'Okay, sounds good! There’s a good cold noodle place next to the post office.']] },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'Write in Korean: “Then, what is THIS?”', ans: ['그러면 이거는 뭐예요?'], soft: [{ p: '(그러면|그럼) (이거는|이건|이것은|이거) 뭐예요', note: 'Accepted.' }], skill: 'l15.form', diag: [{ p: '(그러면|그럼) (이거는|이건|이거) 뭐이에요', note: '뭐 ends in a vowel: 뭐예요.' }, { p: '그런 (이거는|이건|이거) 뭐예요', note: '그런 = such. Then = 그러면 / 그럼.' }], explain: 'Textbook exercise 3.', en: 'Then, what is THIS?' },
        { id: 'B.c2', type: 'write', prompt: 'Write in Korean: “Do you like Korean food? Then do you like kimbap, too?”', ans: ['한국 음식 좋아해요? 그럼 김밥도 좋아해요?'], soft: [{ p: '한국 음식(을|) 좋아해요 (그럼|그러면) 김밥도 좋아해요', note: 'Accepted.' }], skill: 'l15.usage', diag: [{ p: '한국 음식(을|) 좋아해요 (그럼|그러면) 김밥(을|) 좋아해요', note: 'Kimbap TOO: 김밥도.' }], explain: 'Textbook sample sentence.', en: 'Do you like Korean food? Then do you like kimbap, too?' },
        { id: 'B.c3', type: 'write', prompt: 'Write in Korean: “Really? If so, what do we do now?”', ans: ['진짜요? 그럼 이제 어떻게 해요?'], soft: [{ p: '(진짜요|정말요) (그럼|그러면) 이제 어떻게 해요', note: 'Accepted.' }], skill: 'l15.usage', diag: [{ p: '(진짜요|정말요) (그래도|그래서) 이제 어떻게 해요', note: 'If so = 그럼.' }, { p: '(진짜요|정말요) (그럼|그러면) 이제 어떻해요', note: 'Spelling: 어떻게 해요.' }], explain: 'Textbook sample sentence / workbook dictation 11.', en: 'Really? If so, what do we do now?' },
        { id: 'B.c4', type: 'write', prompt: 'A: 너무 더워요. — B: “Then open the window.” (workbook 7, imperative)', ans: ['그러면 창문 여세요.'], soft: [{ p: '(그러면|그럼) 창문(을|) 여세요', note: 'Accepted.' }], skill: 'l15.usage', diag: [{ p: '(그러면|그럼) 창문(을|) 열으세요', note: 'ㄹ-stem: the ㄹ drops before -세요, no 으: 여세요.' }, { p: '(그러면|그럼) 창문(을|) 열세요', note: 'ㄹ-stem: the ㄹ drops before -세요: 여세요.' }], explain: 'Workbook 7: 그러면 창문(을) 여세요.', en: 'Then open the window.' },
        { id: 'B.c5', type: 'fill', prompt: 'A: 가방이 너무 큰 것 같아요. — B: “Then shall I buy this one?” (workbook 9)', ko: '___ 이거 살까요?', ans: ['그러면'], units: ['그', '러', '면'], extra: ['렇', '런', '도'], skill: 'l15.form', diag: [{ p: '그렇면', note: 'The ㅎ drops: 그러면.' }, { p: '그런', note: '그런 = such.' }], explain: 'Workbook 9: 그러면 이거 살까요?', en: 'Then shall I buy this one?' },
        { id: 'B.c6', type: 'write', prompt: 'A: 오늘은 바빠요. — B: “Then when do you have time?” (workbook 5)', ans: ['그러면 언제 시간 있어요?'], soft: [{ p: '(그러면|그럼) 언제 시간(이|) (있어요|있으세요)', note: 'Accepted.' }], skill: 'l15.usage', diag: [{ p: '(그러면|그럼) 언제 시간(이|) 없어요', note: 'Ask when they HAVE time: 있어요.' }], explain: 'Workbook 5.', en: 'Then when do you have time?' },
      ],
    },

    C: {
      title: 'Of Course!', sub: 'Mixed · optional', kind: 'mixed', fix: 'cart', optional: true,
      snack: { id: 'l15.snackC', ko: '그럼요 사탕', en: 'Of-Course Candy', desc: 'Every wrapper says the same thing. It is always the right answer.' },
      scenes: [
        { id: 'C1', time: '22:30', place: 'Counter', narr: 'Mr. Park calls from home.',
          lines: [['boss', '오늘 밤에 혼자 괜찮아요?', 'Are you okay alone tonight?'], ['you', '그럼요!', 'Of course!']],
          q: { type: 'enOpts', prompt: 'What does your answer 그럼요! mean here?', opts: ['Of course!', 'Then what?', 'In that case, no.', 'Such a thing!'], skill: 'l15.short',
            explain: 'Textbook: the interjection 그럼 (polite: 그럼요) means ‘of course!’ / ‘naturally!’. Context tells you which 그럼 it is.', en: 'Of course!' } },
        { id: 'C2', time: '23:00', place: 'Window seats', narr: 'Sua slides her notebook across the table.',
          lines: [['sua', '이 문제 좀 도와줄 수 있어요?', 'Can you help me with this problem?']],
          q: { type: 'mc', prompt: 'Answer politely: “Of course!”', opts: ['그럼요!', '그런요!', '그래도요!', '그래서요!'], skill: 'l15.short',
            explain: 'Textbook: 그럼요 = of course! (그런 = such; 그래도요 = but still.)', en: 'Of course!' } },
        { id: 'C3', time: '23:30', place: 'Dairy fridge', narr: 'Mr. Lee checks a carton of milk. (할인 = discount)',
          lines: [['manager', '이 우유 오늘까지예요? 그럼 할인해 주세요.', 'This milk is good until today? Then give me a discount.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Lee want?', opts: ['A discount, because the milk expires today.', 'A new carton of milk.', 'His money back.', 'Milk for tomorrow.'], skill: 'l15.usage',
            explain: '그럼 = in that case: since it expires today, give me a discount.', en: 'This milk is good until today? Then give me a discount.' } },
        { id: 'C4', time: '00:30', place: 'Back room', narr: 'Twenty boxes wait by the back door. The hand cart has a broken wheel. Grandma looks at you and the boxes. (옮기다 = to move, 힘들다 = to be hard)',
          lines: [['grandma', '이거 다 혼자 옮겨요? 그럼 너무 힘들 거예요.', 'You’re moving all this alone? Then it’ll be too hard.']],
          q: { type: 'enOpts', prompt: 'What does Grandma say?', opts: ['If you move it all alone, it will be too hard.', 'She will move the boxes.', 'The boxes are too heavy for her.', 'You should go home.'], skill: 'l15.usage',
            explain: '그럼 = if so: “if you do it alone, (then) it’s too hard.”', en: 'You’re moving all this alone? Then it’ll be too hard.' } },
        { id: 'C5', time: '01:30', place: 'Counter', narr: 'Hyunwoo is practising his conversation skills in the staff chat. One line makes no sense.',
          q: { type: 'odd', prompt: 'Which one is WRONG?', opts: ['바빠요? 그래도 언제 안 바빠요?', '바빠요? 그럼 언제 안 바빠요?', '바빠요? 그러면 언제 안 바빠요?', '바빠요. 그래도 와요.'], skill: 'l15.vs',
            explain: 'Reacting to “you’re busy?” and asking about another time needs 그럼 / 그러면 (in that case). 그래도 = but still (바빠요. 그래도 와요. = I’m busy, but I’ll still come).', en: 'You’re busy? Then when are you not busy?' } },
        { id: 'C6', time: '02:00', place: 'Coffee machine', narr: 'Tonight’s coffee beans are all gone. You tell Mr. Kim. (녹차 = green tea)',
          lines: [['you', '오늘은 커피가 다 팔렸어요.', 'The coffee is all sold out today.'], ['taxi', '___ 녹차 주세요.', '___ green tea, please.']],
          q: { type: 'mc', prompt: '“Then give me green tea.”', ko: '___ 녹차 주세요.', opts: ['그럼', '그래도', '그래서', '그런'], skill: 'l15.vs',
            explain: 'He reacts to your news → 그럼 (in that case).', en: 'Then green tea, please.' } },
        { id: 'C7', time: '03:00', place: 'Front door', narr: 'The officer gives you his card. (바로 = right away)',
          lines: [['police', '이상한 사람이 와요? 그러면 바로 전화하세요.', 'A strange person comes? Then call right away.']],
          q: { type: 'enOpts', prompt: 'What does the officer tell you?', opts: ['If a strange person comes, call him right away.', 'A strange person is coming tonight.', 'Call him every hour.', 'Strange people never come here.'], skill: 'l15.usage',
            explain: '그러면 = if so / in that case.', en: 'If a strange person comes, then call right away.' } },
        { id: 'C8', time: '04:00', place: 'Back room', narr: 'You fix the cart’s wheel. The courier looks at the boxes. (카트 = cart)',
          lines: [['courier', '이 박스들 안으로 옮길 수 있어요?', 'Can you move these boxes inside?']],
          q: { type: 'tiles', prompt: 'Answer: “Of course! I’ll move them.”', ans: ['그럼요! 제가 옮길게요.'], soft: [{ p: '그럼요 (제가 |)옮길게요', note: 'Accepted.' }], extra: ['그런요!', '그래도', '옮길까요?'], skill: 'l15.short',
            diag: [{ p: '그런요 제가 옮길게요', note: 'Of course = 그럼요 (ㅁ). 그런 = such.' }],
            explain: '그럼요! = of course! + -(으)ㄹ게요 (I will, Lesson 6).', en: 'Of course! I’ll move them.' },
          afterNarr: 'Twenty boxes, one trip. Ramyeon rides on top of the last box like a king.' },
        { id: 'C9', time: '05:00', place: 'Back room', narr: 'Ramyeon has fallen asleep on the cart.',
          lines: [['minji', '라면이 카트 위에서 자요. 그럼 카트는 어떻게 해요?', 'Ramyeon is sleeping on the cart. Then what do we do with the cart?']],
          q: { type: 'enOpts', prompt: 'What does Minji ask?', opts: ['Since Ramyeon is asleep on it, what do we do with the cart?', 'Whether Ramyeon likes the cart.', 'Who fixed the cart.', 'Where the cart is.'], skill: 'l15.usage',
            explain: '그럼 = in that case. (어떻게 해요? = what do we do?)', en: 'Ramyeon is sleeping on the cart. Then what do we do with the cart?' },
          afterNarr: 'Nothing. You do nothing with the cart. It is Ramyeon’s cart now.' },
        { id: 'C10', time: '05:30', place: 'Counter', narr: 'Mr. Park looks at the fixed printer, the standing sign board and the working cart.',
          lines: [['boss', '다음 주에도 밤에 일할 수 있어요?', 'Can you work nights next week too?']],
          q: { type: 'write', prompt: 'Answer your boss: “Of course!” (polite)', ans: ['그럼요!'], soft: [{ p: '(네 |)그럼요 (일할 수 있어요|할 수 있어요|)', note: 'Accepted.' }], skill: 'l15.short',
            diag: [{ p: '그럼', note: 'Without 요 it is casual (반말: Lesson 27). To your boss: 그럼요!' }, { p: '그런요', note: 'Of course = 그럼요 (ㅁ, not ㄴ).' }, { p: '그러면요', note: 'The interjection is only the short form: 그럼요!' }],
            explain: 'Textbook: 그럼요 = of course! (polite).', en: 'Of course!' } },
      ],
      cctv: [
        { id: 'C.c1', type: 'enOpts', prompt: '“그럼요!” (as an answer)', opts: ['Of course!', 'Then!', 'Such!', 'But still!'], skill: 'l15.short', explain: 'Textbook: the interjection 그럼요 = of course! / naturally!', en: 'Of course!' },
        { id: 'C.c2', type: 'enOpts', prompt: '“우체국 옆에 냉면 맛있는 집 있는 거 알아요?”', opts: ['Do you know that there is a good cold noodle restaurant next to the post office?', 'Is the post office next to the noodle restaurant?', 'Do you like cold noodles?', 'Shall we eat cold noodles at the post office?'], skill: 'l15.vocab', explain: 'Textbook dialogue.', en: 'Do you know that there is a good cold noodle restaurant next to the post office?' },
        { id: 'C.c3', type: 'enOpts', prompt: '“그럼 오늘 점심 거기서 먹을까요?”', opts: ['Then, shall we have lunch there today?', 'Did you have lunch there today?', 'Of course, let’s eat lunch!', 'Is lunch there today?'], skill: 'l15.usage', explain: 'Textbook dialogue.', en: 'Then, shall we have lunch there today?' },
        { id: 'C.c4', type: 'mc', prompt: '그러면 = ___ + -면 (workbook 3)', opts: ['그렇다', '그런', '그럼', '그래도'], skill: 'l15.form', explain: 'Workbook 3: 그렇다 and -면.', en: '' },
        { id: 'C.c5', type: 'enOpts', prompt: '그럼 instead of 그러면 is used most often when…', opts: ['speaking casually', 'writing', 'dancing', 'none of these'], skill: 'l15.short', explain: 'Workbook 2: speaking casually (and casual writing).', en: '' },
        { id: 'C.c6', type: 'write', prompt: 'Write in Korean: “Well then, I will get going now.” (workbook dictation)', ans: ['그럼 저는 이제 갈게요.'], soft: [{ p: '(그럼|그러면) (저는 |저 |)이제 갈게요', note: 'Accepted.' }], skill: 'l15.usage', diag: [{ p: '(그럼|그러면) (저는 |저 |)이제 갈께요', note: 'Spelling: 갈게요 (pronounced 갈께요).' }, { p: '(그럼|그러면) (저는 |저 |)이제 갈 거예요', note: 'Correct Korean, but leaving right now = 갈게요 (Lesson 6).' }], explain: 'Workbook 10.', en: 'Well then, I will get going now.' },
      ],
    },
  },

  /* extra questions by skill: returned mistakes, Dawn Restock, store repairs, Rush Hour (rushPool) */
  pool: [
    { id: 'p15.f1', type: 'enOpts', prompt: 'Where does 그러면 come from?', opts: ['그렇다 (to be so) + -면 (if)', '그런 (such) + -면', '그래 + -도', '그리고 + -면'], skill: 'l15.form', explain: 'Textbook.', en: '' },
    { id: 'p15.f2', type: 'mc', prompt: '“in that case; if so; then”', opts: ['그러면', '그런', '그래도', '그래서'], skill: 'l15.form', explain: 'Textbook exercise 1: 그러면.', en: '' },
    { id: 'p15.f3', type: 'enOpts', prompt: '“그러면 저 주세요.” (workbook dictation)', opts: ['If so, please give it to me.', 'Then I will give it to you.', 'But still, give it to me.', 'Such a thing, give it to me.'], skill: 'l15.form', explain: 'Workbook 12.', en: 'If so, please give it to me.' },
    { id: 'p15.f4', type: 'enOpts', prompt: '그러면 is a…', opts: ['conjunction', 'pronoun', 'predicate noun', 'antecedent'], skill: 'l15.form', explain: 'Workbook 1: a conjunction, which links words, phrases, and clauses together.', en: '' },
    { id: 'p15.s1', type: 'mc', prompt: 'Short form of 그러면', opts: ['그럼', '그런', '그렘', '그러'], skill: 'l15.short', explain: 'Textbook exercise 1-1: 그럼.', en: '' },
    { id: 'p15.s2', type: 'enOpts', prompt: '“그런” means…', opts: ['such (before a noun)', 'then', 'of course', 'but still'], skill: 'l15.short', explain: 'Textbook: try not to confuse 그럼 with 그런 (such). 그런 이야기 = such a story (Lesson 13).', en: '' },
    { id: 'p15.s3', type: 'enOpts', prompt: 'A: 내일 와요? — B: 그럼요!', opts: ['Of course (I’m coming)!', 'Then (when)?', 'In that case, no.', 'Such a day!'], skill: 'l15.short', explain: 'Textbook: 그럼요 = of course!', en: '' },
    { id: 'p15.s4', type: 'odd', prompt: 'Which one is WRONG?', opts: ['그런 언제 와요?', '그럼 언제 와요?', '그러면 언제 와요?', '그런 이야기 많이 들었어요.'], skill: 'l15.short', explain: '그런 = such (before a noun). “Then” = 그럼 / 그러면.', en: 'Then when are you coming?' },
    { id: 'p15.u1', type: 'enOpts', prompt: 'When do you say 그럼 / 그러면?', opts: ['When you react to what was just said (if so → …).', 'To add one more thing (and).', 'To say something goes against expectation.', 'To give a reason.'], skill: 'l15.usage', explain: '그러면 = if (that is) so → your question, suggestion or decision.', en: '' },
    { id: 'p15.u2', type: 'mc', prompt: 'A: 배고파요. — B: “Then shall we eat kimbap?”', ko: '___ 김밥 먹을까요?', opts: ['그럼', '그래도', '그런', '그래서'], skill: 'l15.usage', explain: 'B reacts to A: 그럼.', en: 'Then shall we eat kimbap?' },
    { id: 'p15.u3', type: 'mc', prompt: 'A: 너무 더워요. — B: 그러면 창문 ___. (imperative)', opts: ['여세요', '열으세요', '열세요', '열어요'], skill: 'l15.usage', explain: 'Workbook 7: 그러면 창문(을) 여세요. (ㄹ drops before -세요.)', en: 'Then open the window.' },
    { id: 'p15.u4', type: 'enOpts', prompt: '“그럼 이제 어떻게 해요?”', opts: ['If so, what do we do now?', 'Of course, what do we do now?', 'But still, what now?', 'How did you do that?'], skill: 'l15.usage', explain: 'Textbook sample sentence / workbook 11.', en: 'If so, what do we do now?' },
    { id: 'p15.v1', type: 'mc', prompt: '“It’s difficult. But still, it’s fun.”', ko: '어려워요. ___ 재미있어요.', opts: ['그래도', '그럼', '그러면', '그런'], skill: 'l15.vs', explain: 'Against expectation → 그래도 (Lesson 12).', en: 'It’s difficult. But still, it’s fun.' },
    { id: 'p15.v2', type: 'mc', prompt: 'A: 오늘 바빠요. — B: “Then shall we meet tomorrow?”', ko: '___ 내일 만날까요?', opts: ['그럼', '그래도', '그래서', '그런데'], skill: 'l15.vs', explain: 'Reacting to A’s news → 그럼.', en: 'Then shall we meet tomorrow?' },
    { id: 'p15.v3', type: 'mc', prompt: '“I was sick. So I didn’t come.”', ko: '아팠어요. ___ 안 왔어요.', opts: ['그래서', '그럼', '그래도', '그런'], skill: 'l15.vs', explain: 'A result of your own first sentence → 그래서 (so).', en: 'I was sick. So I didn’t come.' },
  ],

  /* Shelf Stocking (no forms table: all words here) */
  vocab: [
    { ko: '그러면', en: 'in that case, if so, then' },
    { ko: '그럼', en: 'then (short for 그러면)' },
    { ko: '그럼요', en: 'of course!' },
    { ko: '그렇다', en: 'to be so' },
    { ko: '만약', en: 'if, in case' },
    { ko: '이거', en: 'this (thing)' },
    { ko: '언제', en: 'when' },
    { ko: '진짜', en: 'really' },
    { ko: '이제', en: 'now (from now on)' },
    { ko: '어떻게', en: 'how' },
    { ko: '김밥', en: 'kimbap' },
    { ko: '우체국', en: 'post office' },
    { ko: '냉면', en: 'cold noodles' },
    { ko: '점심', en: 'lunch' },
    { ko: '거기', en: 'there' },
    { ko: '바쁘다', en: 'to be busy' },
    { ko: '시간', en: 'time' },
    { ko: '택시', en: 'taxi' },
    { ko: '창문', en: 'window' },
    { ko: '혼자', en: 'alone' },
  ],
  grp: { '그러면': 'then', '그럼': 'then', '만약': 'if' },
  examples: {
    '그러면': ['그러면 이거는 뭐예요?', 'Then, what is THIS?'],
    '그럼': ['그럼 이거는 어때요?', 'Then how about this one?'],
    '그럼요': ['그럼요!', 'Of course! (interjection, polite)'],
    '그렇다': ['그렇다 + -면 → 그러면', 'to be so + if → in that case'],
    '만약': ['만약 -(으)면', 'if … (Level 2, Lesson 23)'],
    '이거': ['그럼 이거는 어때요?', 'Then how about this one?'],
    '언제': ['지금 바빠요? 그러면 언제 안 바빠요?', 'You’re busy now? Then WHEN are you not busy?'],
    '진짜': ['진짜요? 그럼 이제 어떻게 해요?', 'Really? If so, what do we do now?'],
    '이제': ['그럼 저는 이제 갈게요.', 'Well then, I will get going now. (WB 10)'],
    '어떻게': ['그럼 이제 어떻게 해요?', 'If so, what do we do now? (WB 11)'],
    '김밥': ['한국 음식 좋아해요? 그럼 김밥도 좋아해요?', 'Do you like Korean food? Then do you like kimbap, too?'],
    '우체국': ['우체국 옆에 냉면 맛있는 집 있는 거 알아요?', 'Do you know that there is a good cold noodle restaurant next to the post office?'],
    '냉면': ['우체국 옆에 냉면 맛있는 집 있는 거 알아요?', 'Do you know that there is a good cold noodle restaurant next to the post office?'],
    '점심': ['그럼 오늘 점심 거기서 먹을까요?', 'Then, shall we have lunch there today?'],
    '거기': ['그럼 오늘 점심 거기서 먹을까요?', 'Then, shall we have lunch there today?'],
    '바쁘다': ['지금 바빠요? 그러면 언제 안 바빠요?', 'You’re busy now? Then WHEN are you not busy?'],
    '시간': ['그러면 언제 시간 있어요?', 'Then when do you have time? (WB 5)'],
    '택시': ['그러면 택시 타세요.', 'Then take a taxi. (WB 6)'],
    '창문': ['그러면 창문 여세요.', 'Then open the window. (WB 7)'],
    '혼자': ['그러면 혼자 먹고 올게요.', 'Then I will eat alone and come. (WB 8)'],
  },
};
/* every graded write in this lesson is short; 그럼 / 그런 differ by one jamo: no “typo” leniency */
(() => {
  const G = MM.game[15], off = q => { if (q && q.ans && q.lenient === undefined) q.lenient = false; };
  Object.values(G.shifts).forEach(sh => { sh.scenes.forEach(s => off(s.q)); sh.cctv.forEach(off); });
  G.pool.forEach(off);
})();

/* ---- src/l15/mnemo_L15.js ---- */
/* GENERATED by tools/mnemo_build.js from mnemo/korean3-mnemo.json. Do not edit by hand. */
MM.mnemo[15] = {"cards":[{"id":"ko-k3-0277","w":"그러면","cs":"v tom případě; tedy; pak","en":"in that case, if so, then","p":"o","o":"k","ex":"그러면 이거는 뭐예요?","exc":"Co je v tom případě tohle? (는 → téma)","h":"KŮ-RO-MJON ≈ KUŘE: „Kuře? V tom případě beru.“","m":"Spojka vzniklá ze slovesa 그렇다 (být takový) + koncovka -(으)면 (když, jestli) = ‚když je to tak, v tom případě‘. V hovoru se často zkracuje na 그럼."},{"id":"ko-k3-0278","w":"그럼","cs":"tedy; pak; tak (zkratka z 그러면)","en":"then (short for 그러면)","p":"o","o":"k","ex":"그럼 이거는 어때요?","exc":"Tak co říkáš na tohle? (는 → téma)","h":"Zkráceně z 그러면: KŮ-ROM ≈ KUŘE: „Tak tedy kuře.“","m":"Běžná hovorová zkratka spojky 그러면 (v tom případě, tedy). Stojí na začátku věty jako reakce na předchozí situaci."},{"id":"ko-k3-0279","w":"그럼요","cs":"samozřejmě; ovšem; jistě","en":"of course!","p":"f","o":"k","ex":"그럼요!","exc":"Samozřejmě!","h":"그럼 = tak tedy, ale 그럼요 = samozřejmě. „Kuře? Samozřejmě!“","m":"Zdvořilé citoslovce pro silný souhlas (vzniklo ze spojky 그럼 + zdvořilostní 요). V hovoru bez 요 zní 그럼 (Ovšem!)."},{"id":"ko-k3-0280","w":"만약","cs":"kdyby; jestliže; v případě, že","en":"if, in case","p":"o","o":"s","ex":"만약 -(으)면","exc":"kdyby…; jestliže… (-(으)면 → když, jestli)","h":"MAN-JAK ≈ MANIAK: „Kdyby přišel ten maniak…“ Často s -면: 만약 비가 오면.","m":"萬 deset tisíc (všechny možnosti) + 若 jako, kdyby = ‚kdyby náhodou, v případě, že‘. Stojí na začátku podmínkové věty a ladí s koncovkou -(으)면 na konci.","r":["man-萬","yak-若"]},{"id":"ko-k3-0281","w":"이제","cs":"teď; nyní; odteď","en":"now (from now on)","p":"o","o":"k","ex":"그럼 저는 이제 갈게요.","exc":"Tak já už teď půjdu. (는 → téma; -ㄹ게요 → udělám)","h":"I-DŽE ≈ „I JDE!“: teď už jde!","m":"Vyjadřuje ‚teď‘ s důrazem na změnu situace nebo přechod k novému ději (‚odteď, už‘). Tím se liší od 지금 (právě teď v tuto chvíli)."},{"id":"ko-k3-0282","w":"어떻게","cs":"jak; jakým způsobem","en":"how","p":"o","o":"k","ex":"그럼 이제 어떻게 해요?","exc":"Co teď tedy budeme dělat? (doslova ‚Jak to teď uděláme?‘)","h":"OTO-KE ≈ „OTO, JAK?“: „Oto, jak to?“","m":"Výslovnost [어떠케]. Příslovce od 어떻다 (jaký). Pozor na záměnu se stejným zvukem 어떡해 (zkratka z 어떻게 해 = ‚Co mám dělat?!‘)."},{"id":"ko-k3-0283","w":"김밥","cs":"kimbap (korejská rýžová rolka v mořské řase)","en":"kimbap","p":"n","o":"k","ex":"한국 음식 좋아해요? 그럼 김밥도 좋아해요?","exc":"Máš rád korejské jídlo? A máš tedy rád i kimbap? (도 → také, i)","h":"김 = mořská řasa + 밥 = rýže (PAP ≈ PAPÁNÍ): papání zabalené v řase.","m":"Složené z 김 (sušená mořská řasa) + 밥 (vařená rýže) = rýže se zeleninou, vejcem či masem zabalená v řase. Výslovnost [김밥] i [김빱], obojí je správně."},{"id":"ko-k3-0284","w":"우체국","cs":"pošta (poštovní úřad)","en":"post office","p":"n","o":"s","ex":"우체국 옆에 냉면 맛있는 집 있는 거 알아요?","exc":"Víš, že vedle pošty je dobrá restaurace na studené nudle? (에 → kde; -는 → přívlastek)","h":"U-ČE-GUK ≈ U ČERTA KUK: na poště čekáš u čerta dlouho.","m":"郵 pošta + 遞 doručovat + 局 úřad = úřad pro doručování pošty, tedy pošta. 局 jako v 방송국 (vysílací stanice) nebo 약국 (lékárna).","r":["u-郵","che-遞","guk-局"]},{"id":"ko-k3-0285","w":"냉면","cs":"studené nudle (tradiční korejské jídlo)","en":"cold noodles","p":"n","o":"s","ex":"우체국 옆에 냉면 맛있는 집 있는 거 알아요?","exc":"Víš, že vedle pošty je dobrá restaurace na studené nudle? (에 → kde; -는 → přívlastek)","h":"냉 ≈ NENG jako v 냉장고 (lednička) = studené + 면 ≈ nudle.","m":"冷 studený + 麵 nudle = studené pohankové nudle podávané v ledovém vývaru nebo s pikantní omáčkou. 冷 jako v 냉장고 (lednička).","r":["naeng-冷","myeon-麵"]},{"id":"ko-k3-0287","w":"택시","cs":"taxík; taxi","en":"taxi","p":"n","o":"e","ex":"그러면 택시 타세요.","exc":"V tom případě si vezměte taxík.","h":"Z angličtiny taxi.","m":"Výpůjčka z anglického taxi. Jet taxíkem se korejsky řekne 택시를 타다 (doslova ‚nastoupit na taxi‘), zavolat si ho pak 택시를 부르다."},{"id":"ko-k3-0288","w":"혼자","cs":"sám; o samotě","en":"alone","p":"o","o":"k","ex":"그러면 혼자 먹고 올게요.","exc":"V tom případě se najím sám a přijdu. (-고 → a pak; -ㄹ게요 → udělám)","h":"HON-DŽA ≈ HONZA: Honza je sám doma.","m":"Používá se samostatně jako příslovce (혼자 먹다 = jíst sám, 혼자 살다 = bydlet sám). Dnes oblíbené zkratky: 혼밥 (jíst sám) a 혼술 (pít alkohol sám)."}],"gram":{"id":"ko-k3-g15","w":"그러면, 그럼","en":"Well then, In that case, If so","cs":"tak teda, v tom případě, jestli je to tak","vy":"Spojka 그러면 (v běžné mluvené řeči zkráceně 그럼) stojí na začátku věty a navazuje na to, co právě řekl druhý člověk nebo co vyplynulo ze situace (‚tak teda…, v tom případě…, jestli je to tak…‘). Vznikla ze slovesa 그렇다 (být takový) a podmínkové koncovky -면 (když). Samostatné zvolání 그럼요! znamená nadšený souhlas ‚samozřejmě!, no ovšem!‘.","m":"Neplést zkrácené 그럼 (tak teda, v tom případě) s přívlastkem 그런 (takový, např. 그런 사람 = takový člověk). Jako samostatná odpověď 그럼요! znamená ‚Samozřejmě!‘.","s":[["그러면","v tom případě; jestli je to tak; tak teda (그렇다 + -면)"],["그럼","hovorová zkrácená podoba výrazu 그러면 (neplést s 그런 = takový)"],["그럼요!","Samozřejmě! / No ovšem! (zdvořilé zvolání)"],["그러면 이거는 뭐예요?","A co je teda tohle?"],["지금 바빠요? 그러면 언제 안 바빠요?","Máš teď napilno? Tak kdy nemáš napilno?"],["한국 음식 좋아해요? 그럼 김밥도 좋아해요?","Máš rád korejské jídlo? Tak to máš rád i kimbap?"],["진짜요? 그럼 이제 어떻게 해요?","Vážně? Tak co budeme dělat teď?"],["그럼 이거는 어때요?","Tak co říkáš na tohle?"],["우체국 옆에 냉면 맛있는 집 있는 거 알아요?","Víš, že vedle pošty je dobrá restaurace se studenými nudlemi?"],["그럼 오늘 점심 거기서 먹을까요?","Tak si tam dneska dáme oběd?"],["그러면 택시 타세요.","V tom případě si vezměte taxík."],["그러면 창문 여세요.","Tak otevřete okno."],["그러면 혼자 먹고 올게요.","Tak se najím sám a pak přijdu."],["그럼 저는 이제 갈게요.","Tak já už teď půjdu."],["그러면 저 주세요.","V tom případě to dejte mně."]]}};
Object.assign(MM.mnRoots, {"man-萬":["만","萬","deset tisíc; veškerý"],"yak-若":["약","若","jako, kdyby"],"u-郵":["우","郵","pošta"],"che-遞":["체","遞","doručovat, předávat"],"guk-局":["국","局","úřad, oddělení"],"naeng-冷":["냉","冷","studený, chladný"],"myeon-麵":["면","麵","nudle"]});

/* ---- src/l15/reads_L15.js ---- */
/* reads_L15.js — Staff Group Chat + Neighborhood Notice Board for Lesson 15.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[15] = [
  {
    id: 'l15.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l15.sticker', ko: '고양이 영수증', en: 'Cat receipt', desc: 'The first receipt from the fixed printer. A blurry orange tail. Framed.' },
    lines: [
      { who: 'boss', ko: '{프린터|프린터} 고쳤어요? 정말 고마워요!', en: 'You fixed the printer? Thank you so much!' },
      { who: 'minji', ko: '사장님, 내일 비가 많이 올 거예요.', en: 'Mr. Park, it’s going to rain a lot tomorrow.' },
      { who: 'boss', ko: '그래요? 그럼 우산을 문 앞에 놓으세요. 많이 팔 거예요.', en: 'Really? Then put the umbrellas in front of the door. We’ll sell a lot.' },
      { who: 'minji', ko: '그런데 저 내일 {병원|병원}에 가요. 그래서 조금 늦게 와요. 괜찮아요?', en: 'By the way, I’m going to the hospital tomorrow. So I’ll come a little late. Is that okay?' },
      { who: 'boss', ko: '그럼요! 천천히 오세요.', en: 'Of course! Come slowly (take your time).' },
      { who: 'minji', ko: '그럼 라면 밥은 누가 줘요?', en: 'Then who feeds Ramyeon?' },
      { who: 'boss', ko: '라면은 걱정하지 마세요. 할머니가 줄 거예요. ㅋㅋ', en: 'Don’t worry about Ramyeon. Grandma will feed him. lol' },
    ],
    gloss: { '프린터': 'printer', '병원': 'hospital' },
    qs: [
      { id: 'r15c.q1', type: 'enOpts', prompt: 'Why does Mr. Park want the umbrellas by the door?', opts: ['Because it will rain a lot tomorrow.', 'Because the umbrella stand is broken.', 'Because Minji is late.', 'Because Grandma wants one.'], explain: '내일 비가 많이 올 거예요. — 그럼 우산을 문 앞에 놓으세요.' },
      { id: 'r15c.q2', type: 'enOpts', prompt: 'What does Mr. Park answer when Minji asks to come late?', opts: ['Of course, take your time.', 'No, come early.', 'Then don’t come.', 'Then go to the hospital at night.'], explain: '그럼요! = of course! 천천히 오세요 = take your time.' },
      { id: 'r15c.q3', type: 'enOpts', prompt: 'Who will feed Ramyeon?', opts: ['Grandma.', 'Minji.', 'Mr. Park.', 'Nobody.'], explain: '할머니가 줄 거예요.' },
    ],
  },
  {
    id: 'l15.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l15.notice', ko: '냉면 쿠폰', en: 'Cold noodle coupon', desc: 'One free bowl. Expires before you will have a free lunch.' },
    heading: '우체국 옆 냉면 집',
    lines: [
      { ko: '우체국 옆에 새 냉면 집이 {생겼어요|생기다}!', en: 'A new cold noodle restaurant opened next to the post office!' },
      { ko: '더워요? 그럼 차가운 냉면 어때요?', en: 'Is it hot? Then how about cold noodles?' },
      { ko: '점심 시간에 바빠요? 그러면 {배달|배달}도 해요.', en: 'Busy at lunchtime? Then we also deliver.' },
      { ko: '혼자 오는 손님도 괜찮아요.', en: 'Customers who come alone are welcome too.' },
      { ko: '이 종이를 가져오세요. 그럼 천 원 {할인|할인}해 드려요!', en: 'Bring this paper. Then we’ll give you a 1,000-won discount!' },
    ],
    gloss: { '생기다': 'to come into being, to open (a new place)', '배달': 'delivery', '할인': 'discount; 할인해 드려요 = we give (you) a discount (humble)' },
    qs: [
      { id: 'r15b.q1', type: 'enOpts', prompt: 'Where is the new restaurant?', opts: ['Next to the post office.', 'Behind Moonlight Mart.', 'Upstairs from Grandma.', 'At the university.'], explain: '우체국 옆에 새 냉면 집이 생겼어요.' },
      { id: 'r15b.q2', type: 'enOpts', prompt: 'What if you are busy at lunchtime?', opts: ['They deliver.', 'They open early.', 'You can come alone.', 'You get a discount.'], explain: '점심 시간에 바빠요? 그러면 배달도 해요.' },
      { id: 'r15b.q3', type: 'enOpts', prompt: 'How do you get a discount?', opts: ['Bring the notice (this paper).', 'Come alone.', 'Come at lunchtime.', 'Order delivery.'], explain: '이 종이를 가져오세요. 그럼 천 원 할인해 드려요!' },
    ],
  },
];

/* ---- src/l15/textbook_L15.js ---- */
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

/* ---- src/l15/workbook_L15.js ---- */
/* workbook_L15.js — Korean 3 Workbook, Lesson 15 (p.63–65, answer key p.130–131).
   Section I multiple choice (4). Section II complete the dialogue with 그러면 + the prompts (write with dialogue lines; the null line is
   the one to write); the book also asks to translate the dialogue: the key's translation is shown after the answer (5 has no English
   for the last line in the key: ours, marked). Section III dictation = WB Track 35, 36, 37 (whole sentences).
   Every 그러면 answer also accepts 그럼 (the lesson’s short form). */
(() => {
  const G = '(그러면|그럼)';
  const wrongWord = ans => [
    { p: ans.replace(/^\(그러면\|그럼\)/, '(그래도|그래서)'), note: '그래도 = but still, 그래서 = so. “Then / in that case” = 그러면 (or 그럼).' },
    { p: ans.replace(/^\(그러면\|그럼\)/, '그런'), note: '그런 = such (before a noun). “Then” = 그러면 or 그럼.' },
  ];
  const item = (n, lines, cue, ans, soft, diag, en, keyNote, skill) => ({ n, lines, cue, ans: [ans], soft, diag: wrongWord(soft[0].p).concat(diag || []), en, keyNote, skill, lenient: false });
  MM.workbook[15] = {
    sections: [
      {
        id: 'I', title: 'Section I – Comprehension',
        task: 'Multiple choice. Choose the best answer.',
        type: 'mc', skill: 'l15.form',
        items: [
          { n: 1, q: '그러면 is a _________, which links words, phrases, and clauses together.', opts: ['pronoun', 'conjunction', 'predicate noun', 'antecedent'], right: 1, note: '그러면 (like 그래도, 그래서, 그리고) is a conjunction.' },
          { n: 2, q: 'Using 그럼 instead of 그러면 is used most often when:', opts: ['speaking casually', 'writing', 'dancing', 'none of these'], right: 0, skill: 'l15.short', note: 'Textbook: 그럼 is used in spoken Korean (and often in casual written Korean).' },
          { n: 3, q: 'The word 그러면 is a combination of:', opts: ['그런 and -면', '그럼 and -면', '그렇다 and -면', '그래도 and -면'], right: 2, note: '그렇다 (to be so) + -면 (if) → 그러면.' },
          { n: 4, q: '그럼 means:', opts: ['the same thing as 그러면', 'the name of a character on the children’s TV show “뽀로로”', '“in that case”, “well then”, or “if so”', 'both A and C'], right: 3, skill: 'l15.short', note: '그럼 = the short form of 그러면 = in that case, well then, if so.' },
        ],
      },
      {
        id: 'II', title: 'Section II – Complete the dialogue',
        task: 'Fill in the blank using 그러면 and the prompts in parentheses. Use the correct sentence endings/conjugations. Then translate the whole conversation in your head and compare with the key’s translation.',
        type: 'write', skill: 'l15.usage', placeholder: '그러면 …',
        items: [
          item(5, [['A', '오늘 시간 있어요?'], ['B', '미안해요. 오늘은 바빠요.'], ['A', null]], '시간, 있다, 언제', '그러면 언제 시간 있어요?',
            [{ p: `${G} 언제 시간(이|) 있어요`, note: 'Accepted.' }, { p: `${G} 언제 시간(이|) 있으세요`, note: 'Accepted: 있으세요 is more polite.' }],
            [{ p: `${G} 언제 시간(이|) 없어요`, note: 'B is busy today; A asks when B HAS time: 시간 있어요.' }],
            'A: Do you have time today? B: Sorry. I’m busy today. A: Then when do you have time?', 'English of the last line not printed in the key'),
          item(6, [['A', '저 늦었어요!'], ['B', null]], '*imperative (타다, 택시)', '그러면 택시 타세요.',
            [{ p: `${G} 택시(를|) 타세요`, note: 'Accepted.' }],
            [{ p: `${G} 택시(를|) 타요`, note: '타요 is a statement (or a casual suggestion). The book asks for the imperative: 타세요.' }, { p: `${G} 택시(를|) 탈게요`, note: '탈게요 = I will take one. The book asks for the imperative (you take one): 타세요.' }, { p: `${G} 택시(를|) 타으세요`, note: '타 ends in a vowel: + 세요 → 타세요.' }],
            'A: I’m late! B: Then take a taxi.'),
          item(7, [['A', '너무 더워요.'], ['B', null]], '*imperative (창문, 열다)', '그러면 창문(을) 여세요.',
            [{ p: `${G} 창문(을|) 여세요`, note: 'Accepted.' }],
            [{ p: `${G} 창문(을|) 열으세요`, note: 'ㄹ-stem: the ㄹ drops before -세요 and there is no 으: 여세요.' }, { p: `${G} 창문(을|) 열세요`, note: 'ㄹ-stem: the ㄹ drops before -세요: 여세요.' }, { p: `${G} 창문(을|) 열어요`, note: '열어요 is a statement. The book asks for the imperative: 여세요.' }],
            'A: It’s too hot. B: Then open the window.'),
          item(8, [['A', '같이 나가서 밥 먹을까요?'], ['B', '아, 저는 밥 먹고 왔어요.'], ['A', null]], '먹고 오다, 혼자', '그러면 혼자 먹고 올게요.',
            [{ p: `${G} (저 |제가 |저는 |)혼자 (밥 |)먹고 올게요`, note: 'Accepted.' }],
            [{ p: `${G} (저 |제가 |저는 |)혼자 (밥 |)먹고 올 거예요`, note: 'Correct Korean. The key uses 올게요 (I’ll do it, reacting to your answer, Lesson 6).' }, { p: `${G} (저 |제가 |저는 |)혼자 (밥 |)먹고 왔어요`, note: '왔어요 = came (past). A hasn’t eaten yet: 먹고 올게요.' }, { p: `${G} (저 |제가 |저는 |)혼자 (밥 |)먹고 올께요`, note: 'Spelling: 올게요 (pronounced 올께요).' }],
            'A: Shall we go out together and have a meal? B: Oh, I [already] had a meal and came [here]. A: Then I will eat alone and come.'),
          item(9, [['A', '저 이 가방 살까요?'], ['B', '가방이 너무 큰 것 같아요.'], ['A', null]], '이거, 사다', '그러면 이거 살까요?',
            [{ p: `${G} (이거|이것|이걸|이거를|이것을) 살까요`, note: 'Accepted.' }],
            [{ p: `${G} (이거|이것|이걸|이거를|이것을) 사을까요`, note: '사 ends in a vowel: + ㄹ까요 → 살까요.' }, { p: `${G} (이거|이것|이걸|이거를|이것을) 살게요`, note: 'Correct Korean (then I’ll buy this one), but the key keeps asking: 살까요?' }],
            'A: Shall I buy this bag? B: I think the bag is too big. A: Then shall I buy this one?'),
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 10, track: 'wb35', label: 'Track 35', ans: ['그럼 저는 이제 갈게요.'], lenient: false, en: 'Well then, I will get going now. / Well then, I will leave now.' },
          { n: 11, track: 'wb36', label: 'Track 36', ans: ['그럼 이제 어떻게 해요?'], lenient: false, en: 'If so, what do we do now?' },
          { n: 12, track: 'wb37', label: 'Track 37', ans: ['그러면 저 주세요.'], lenient: false, en: 'If so, please give it to me.' },
        ],
      },
    ],
  };
})();

