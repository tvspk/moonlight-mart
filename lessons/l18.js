/* ---- src/l18/cards_L18.js ---- */
/* cards_L18.js — Loyalty Cards for Lesson 18. Vocabulary cards come from the game vocab automatically;
   these are the sentence cards (front Korean, back English). */
MM.cards[18] = [
  { id: 'k1', ko: '-밖에 + 부정형', en: 'noun + 밖에 + negative verb = only / nothing but', src: 'Textbook' },
  { id: 'k2', ko: '콜라밖에 안 마시다', en: 'to only drink cola', src: 'Textbook' },
  { id: 'k3', ko: '돈밖에 없다', en: 'to have nothing but money, to only have money', src: 'Textbook' },
  { id: 'k4', ko: '이것만 주세요.', en: 'Give me this one only. (requests take 만, not 밖에)', src: 'Textbook' },
  { id: 'k5', ko: '저는 닭고기만 싫어해요.', en: 'I only hate chicken. (a verb with a negative meaning → 만)', src: 'Textbook' },
  { id: 'k6', ko: '한국인 친구가 한 명밖에 없어요.', en: 'I only have one Korean friend.', src: 'Textbook' },
  { id: 'k7', ko: '한국인 친구는 한 명밖에 없어요.', en: 'As for Korean friends, I only have one.', src: 'Textbook' },
  { id: 'k8', ko: '한국어 조금밖에 못 해요.', en: 'I can only speak a little bit of Korean.', src: 'Textbook' },
  { id: 'k9', ko: '이것밖에 없어요?', en: 'This is it? / You only have this?', src: 'Textbook' },
  { id: 'k10', ko: '우리 고양이는 참치밖에 안 먹어요.', en: 'My cat only eats tuna.', src: 'Textbook' },
  { id: 'k11', ko: '왜 공부밖에 안 해요?', en: 'Why do you only study? / Why do you do nothing but study?', src: 'Textbook' },
  { id: 'k12', ko: '백 명밖에 안 왔어요.', en: 'Only 100 people came.', src: 'Textbook dialogue' },
  { id: 'k13', ko: '지금 4,000원밖에 없어요.', en: 'I only have 4,000 won now.', src: 'Workbook' },
  { id: 'k14', ko: '저는 다 잘 먹어요. 그런데 돼지고기만 못 먹어요.', en: 'I eat everything well. But pork is the one thing I can’t eat.', src: 'Workbook' },
  { id: 'k15', ko: '저희는 현금만 받아요. 카드는 안 받아요.', en: 'We only accept cash. We don’t accept cards.', src: 'Workbook' },
  { id: 'k16', ko: '현우 씨는 일밖에 모르는 사람이에요.', en: 'Hyunwoo is the person who only thinks/cares/knows about work.', src: 'Workbook dictation' },
  { id: 'k17', ko: '그거 저밖에 몰라요.', en: 'Only I know that.', src: 'Workbook dictation' },
];

/* ---- src/l18/game_L18.js ---- */
/* game_L18.js — Moonlight Mart, Lesson 18 (-밖에 + negative = only / nothing but; vs. -만: requests, verbs with a negative
   meaning, positive verbs). Lines: [castId, korean, english]. q.opts: correct option first (engine shuffles).
   odd: opts[0] is the WRONG sentence the player must find.
   No forms table in this lesson (no conjugation): Rush Hour mixes vocabulary with the pool (rushPool).
   Game words not in the book: 창고, 택배 (L5), 카드 리더기, 현금 (WB), 지갑 (L12), 펜, 오이, 그릇, 마리 (L5), 외국인 —
   glossed where they appear. The negative part uses only what the learner knows: 안, 못, 없다, 모르다.
   App-written sentences are NOT yet checked by a native speaker (⚠ list in HANDOFF.md). lenient off at the end: 밖에 / 만. */
MM.game[18] = {
  skills: {
    'l18.form':  { en: 'Noun + 밖에 + negative', desc: '밖에 sticks to the noun (돈밖에, 한 명밖에, 조금밖에) and is followed by a negative: 없어요, 안 …, 못 …, 몰라요. Together = only / nothing but.' },
    'l18.neg':   { en: '밖에 needs a negative', desc: '돈밖에 없어요 (not 있어요). 콜라밖에 안 마셔요. 조금밖에 못 해요 (cannot). Without the negative, 밖에 does not work.' },
    'l18.vs':    { en: '밖에 or 만?', desc: '만 works with positive verbs (현금만 받아요), requests (이것만 주세요) and verbs that already mean something negative (닭고기만 싫어해요). 만 + negative = “only this one is NOT”: 돼지고기만 못 먹어요.' },
    'l18.vocab': { en: 'Lesson 18 vocabulary', desc: 'The words of the lesson.' },
  },
  fixSkills: { stockshelf: 'l18.form', cardreader: 'l18.vs', catbowl: 'l18.neg' },
  rushPool: true,
  intro: '밖에 = “other than”. Put it after a noun and add a NEGATIVE verb, and you get “only / nothing but”: 돈밖에 없어요 = I have nothing but money. With a positive verb, a request (주세요) or a verb like 싫어하다, use 만 instead. Tonight the delivery is late, the card reader is broken, and the cat has opinions about food. Your stockroom is now part of the floor plan, too.',

  shifts: {
    A: {
      title: 'Only This?', sub: 'Recognize · choose', kind: 'recognize', fix: 'stockshelf',
      snack: { id: 'l18.snackA', ko: '이것밖에 없어요 젤리', en: 'Is-This-It? Jelly', desc: 'One (1) jelly per bag. The bag is very large. The jelly is not.' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Stockroom', narr: 'Eighteenth night. Minji opens the door to the stockroom at the back. (창고 = stockroom, 택배 = delivery)',
          lines: [['minji', '오늘 택배가 아직 안 왔어요. 그래서 창고에 라면밖에 없어요.', 'Today’s delivery hasn’t come yet. So there’s nothing but ramen in the stockroom.']],
          q: { type: 'enOpts', prompt: 'What is in the stockroom?', opts: ['Only ramen.', 'No ramen at all.', 'Everything except ramen.', 'Ramen and the delivery boxes.'], skill: 'l18.form',
            explain: '라면밖에 없어요 = there is nothing but ramen (밖에 + 없어요). Not “there is no ramen”: that would be 라면이 없어요.', en: 'So there’s nothing but ramen in the stockroom.' },
          after: [['minji', '그리고 창고 선반이 좀 이상해요. 조심하세요!', 'And the stockroom shelf is a bit strange. Be careful!']] },
        { id: 'A2', time: '22:30', place: 'Kimbap shelf', narr: 'Sua stands in front of the kimbap shelf. There is one small kimbap left.',
          lines: [['sua', '이것밖에 없어요?', 'You only have this?']],
          q: { type: 'enOpts', prompt: 'What does Sua mean?', opts: ['“Is this all you have?”', '“Is this outside?”', '“Don’t you have this?”', '“Is this one free?”'], skill: 'l18.form',
            explain: 'Textbook sample sentence: 이것밖에 없어요? = This is it? / You only have this?', en: 'You only have this?' },
          after: [['sua', '그럼 이거 주세요. 오늘은 조금만 먹을게요.', 'Then give me this one. I’ll just eat a little today.']] },
        { id: 'A3', time: '23:00', place: 'Coffee machine', narr: 'Mr. Lee, red eyes, third coffee.',
          lines: [['manager', '요즘 잠을 네 시간밖에 못 자요.', 'These days I can only sleep four hours.']],
          q: { type: 'enOpts', prompt: 'What does Mr. Lee say about his sleep?', opts: ['He can only sleep four hours.', 'He sleeps more than four hours.', 'He can’t sleep at all.', 'He slept for four days.'], skill: 'l18.form',
            explain: '네 시간밖에 못 자요 = I can’t sleep more than four hours → I can only sleep four hours. (못 = cannot.)', en: 'These days I can only sleep four hours.' } },
        { id: 'A4', time: '23:30', place: 'Coffee machine', narr: 'He adds something about his diet.',
          lines: [['manager', '그리고 저는 커피___ 안 마셔요.', 'And I only drink coffee.']],
          q: { type: 'mc', prompt: '“I only drink coffee.” Which goes in the blank?', ko: '저는 커피___ 안 마셔요.', opts: ['밖에', '만', '도', '를'], skill: 'l18.vs',
            explain: 'Only + a negative verb = 밖에: 커피밖에 안 마셔요. (커피만 안 마셔요 would mean “coffee is the one thing I don’t drink”.)', en: 'I only drink coffee.' } },
        { id: 'A5', time: '00:30', place: 'Memo board', narr: 'Hyunwoo wrote four sentences with 밖에 for his Korean-learner friend. One is wrong.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['돈밖에 있어요.', '돈밖에 없어요.', '콜라밖에 안 마셔요.', '한국어 조금밖에 못 해요.'], skill: 'l18.neg',
            explain: '밖에 always comes with a negative verb: 돈밖에 없어요 (I have nothing but money). 밖에 + 있어요 does not work.', en: '' } },
        { id: 'A6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim, the taxi driver, counts his receipts.',
          lines: [['taxi', '오늘은 손님이 두 명밖에 안 탔어요.', 'Today only two passengers got in.']],
          q: { type: 'enOpts', prompt: 'How was Mr. Kim’s night?', opts: ['Only two passengers so far.', 'He had more than two passengers.', 'Two passengers didn’t pay.', 'He had no passengers at all.'], skill: 'l18.form',
            explain: '두 명밖에 안 탔어요 = only two people rode (like 백 명밖에 안 왔어요 in the textbook dialogue).', en: 'Today only two passengers got in.' },
          after: [['taxi', '그래도 커피는 마셔요. 커피 한 잔 주세요.', 'Still, I drink coffee. One coffee, please.']] },
        { id: 'A7', time: '02:30', place: 'Front door', narr: 'The courier, finally. You look at his trolley. One box.',
          lines: [['courier', '죄송해요! 오늘은 박스가 하나밖에 없어요. 나머지는 내일 올 거예요.', 'Sorry! Today there’s only one box. The rest will come tomorrow.']],
          q: { type: 'enOpts', prompt: 'Why will the stockroom stay empty tonight?', opts: ['The courier only has one box for the store.', 'The courier has no boxes.', 'The courier brought one box too many.', 'The boxes are outside.'], skill: 'l18.form',
            explain: '하나밖에 없어요 = there is only one. (나머지 = the rest.)', en: 'Today there’s only one box.' } },
        { id: 'A8', time: '03:30', place: 'Drinks fridge', narr: 'The officer opens the fridge door.',
          lines: [['police', '바나나 우유가 하나밖에 없어요? 그럼 그거 주세요.', 'There’s only one banana milk? Then give me that one.']],
          q: { type: 'enOpts', prompt: 'What does the officer find?', opts: ['There is only one banana milk left.', 'There is no banana milk.', 'There is only strawberry milk.', 'There is one banana milk too many.'], skill: 'l18.form',
            explain: '하나밖에 없어요 = there is only one. 그럼 = then (Lesson 15).', en: 'There’s only one banana milk? Then give me that one.' } },
        { id: 'A9', time: '04:30', place: 'Stockroom', narr: 'You write a note for Mr. Park and tape it to the wobbly stockroom shelf.',
          q: { type: 'mc', prompt: 'Which sentence means “There is nothing but ramen”?', opts: ['라면밖에 없어요.', '라면만 없어요.', '라면밖에 있어요.', '라면이 없어요.'], skill: 'l18.form',
            explain: 'Noun + 밖에 + 없어요. 라면만 없어요 = only the ramen is missing; 라면이 없어요 = there is no ramen.', en: 'There is nothing but ramen.' } },
        { id: 'A10', time: '05:30', place: 'Counter', narr: 'Mr. Park comes in early and sees the note.',
          lines: [['boss', '창고에 라면밖에 없었어요? 미안해요. 내일은 택배가 많이 올 거예요.', 'There was nothing but ramen in the stockroom? Sorry. Tomorrow a lot of deliveries will come.']],
          q: { type: 'enOpts', prompt: 'Why does Mr. Park apologize?', opts: ['The stockroom had nothing but ramen.', 'There was no ramen in the stockroom.', 'He forgot to pay you.', 'The courier came too early.'], skill: 'l18.form',
            explain: '라면밖에 없었어요 = there was nothing but ramen (past: 없었어요).', en: 'There was nothing but ramen in the stockroom?' },
          afterNarr: 'Ramyeon, who is not ramen but sleeps on it, hears his name twice and decides that the stockroom is now his.' },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: 'Noun + 밖에 + a negative verb means…', opts: ['only …; nothing but …', 'outside of …', 'not even …', 'also …'], skill: 'l18.form', explain: 'Textbook: -밖에 + negative verb conjugation = ONLY + verb. (밖 alone = outside.)', en: '' },
        { id: 'A.c2', type: 'mc', prompt: '“to only drink cola”', opts: ['콜라밖에 안 마시다', '콜라밖에 마시다', '콜라만 안 마시다', '콜라 밖에서 마시다'], skill: 'l18.neg', explain: 'Textbook: 콜라밖에 안 마시다. Without 안 it doesn’t work; 콜라만 안 마시다 = to not drink only cola.', en: '' },
        { id: 'A.c3', type: 'enOpts', prompt: '“이것밖에 없어요?”', opts: ['This is it? / You only have this?', 'Isn’t this outside?', 'Don’t you have this?', 'Is there anything else?'], skill: 'l18.form', explain: 'Textbook sample sentence.', en: 'This is it? / You only have this?' },
        { id: 'A.c4', type: 'enOpts', prompt: '“우리 고양이는 참치밖에 안 먹어요.”', opts: ['My cat only eats tuna.', 'My cat doesn’t eat tuna.', 'My cat eats tuna outside.', 'My cat eats everything but tuna.'], skill: 'l18.form', explain: 'Textbook sample sentence.', en: 'My cat only eats tuna.' },
        { id: 'A.c5', type: 'enOpts', prompt: 'Why is “이것밖에 주세요” wrong?', opts: ['밖에 can’t be used in requests like -주세요; say 이것만 주세요.', '주세요 is too polite.', '이것 needs 을: 이것을밖에.', 'It isn’t wrong.'], skill: 'l18.vs', explain: 'Textbook: -밖에 cannot be used with imperative sentences (requests, instructions), so -만 is used: 이것만 주세요.', en: '' },
        { id: 'A.c6', type: 'enOpts', prompt: '“백 명밖에 안 왔어요.”', opts: ['Only 100 people came.', 'More than 100 people came.', '100 people didn’t come.', '100 people came outside.'], skill: 'l18.form', explain: 'Textbook dialogue (a joke: “only” 100).', en: 'Only 100 people came.' },
      ],
    },

    B: {
      title: 'Cash Only', sub: 'Build · write', kind: 'produce', fix: 'cardreader',
      note: { by: 'boss', text: 'Night shift rule #18: the card reader is broken (카드 리더기 = card reader). Tonight we only take cash (현금). Please write a sign and say sorry nicely. — Park' },
      snack: { id: 'l18.snackB', ko: '현금 사탕', en: 'Cash Candy', desc: 'A gold-wrapped coin. Accepted nowhere. Tastes of honey.' },
      scenes: [
        { id: 'B1', time: '22:00', place: 'Counter', narr: 'You write a sign for the counter.',
          q: { type: 'tiles', prompt: 'Write the sign: “We only take cash.” (with 밖에)', ans: ['현금밖에 안 받아요.'], soft: [{ p: '(오늘은 |)현금밖에 안 받아요', note: 'Accepted.' }, { p: '(오늘은 |)현금만 받아요', note: 'Correct Korean too (만 + a positive verb). Practise the lesson pattern: 현금밖에 안 받아요.' }], extra: ['받아요.', '만', '못'], skill: 'l18.neg',
            diag: [{ p: '현금밖에 받아요', note: '밖에 needs a negative verb: 현금밖에 안 받아요.' }, { p: '현금만 안 받아요', note: 'That says cash is the one thing you DON’T take. Only cash = 현금밖에 안 받아요 (or 현금만 받아요).' }],
            explain: 'Workbook 20 says it with 만: 저희는 현금만 받아요. With a negative verb you use 밖에: 현금밖에 안 받아요.', en: 'We only take cash.' } },
        { id: 'B2', time: '22:30', place: 'Counter', narr: 'Sua holds out her card for the kimbap.',
          lines: [['sua', '카드 돼요?', 'Can I use a card?']],
          q: { type: 'write', prompt: 'Say: “Sorry. Today we only take cash.”', ans: ['죄송해요. 오늘은 현금밖에 안 받아요.'], soft: [{ p: '(죄송해요 |미안해요 |)(손님 |)(오늘은 |)현금밖에 안 받아요', note: 'Accepted.' }, { p: '(죄송해요 |미안해요 |)(손님 |)(오늘은 |)현금만 받아요', note: 'Correct Korean (만 + positive verb). The lesson pattern: 현금밖에 안 받아요.' }], skill: 'l18.neg',
            diag: [{ p: '(죄송해요 |)(오늘은 |)현금밖에 받아요', note: '밖에 needs a negative: 현금밖에 안 받아요.' }, { p: '(죄송해요 |)(오늘은 |)현금만 안 받아요', note: 'That says you don’t take cash! Only cash = 현금밖에 안 받아요.' }, { p: '(죄송해요 |)(오늘은 |)현금밖에 못 받아요', note: 'Understandable (you can’t take anything else), but a shop rule sounds more natural with 안: 현금밖에 안 받아요.' }],
            explain: '현금 + 밖에 + 안 받아요.', en: 'Sorry. Today we only take cash.' },
          after: [['sua', '아, 진짜요? 잠깐만요…', 'Oh, really? Just a moment…']] },
        { id: 'B3', time: '23:00', place: 'Counter', narr: 'Sua opens her wallet. (지갑 = wallet)',
          lines: [['sua', '지갑에 천 원___ 없어요.', 'I only have 1,000 won in my wallet.']],
          q: { type: 'fill', prompt: '“I only have 1,000 won in my wallet.”', ko: '지갑에 천 원___ 없어요.', ans: ['밖에'], units: ['밖', '에'], extra: ['만', '도', '바'], skill: 'l18.form',
            diag: [{ p: '만', note: '천 원만 없어요 would mean “only 1,000 won is missing”. Only + 없어요 = 밖에.' }, { p: '도', note: '천 원도 없어요 = I don’t even have 1,000 won. She has 1,000 won — and nothing more: 밖에.' }, { p: '바께', note: 'Pronounced [바께], written 밖에.' }],
            explain: 'Like Workbook 12: 지금 4,000원밖에 없어요.', en: 'I only have 1,000 won in my wallet.' },
          after: [['sua', '김밥은 천오백 원이에요… 그럼 내일 올게요.', 'The kimbap is 1,500 won… Then I’ll come tomorrow.']] },
        { id: 'B4', time: '23:30', place: 'Coffee machine', narr: 'Mr. Lee talks about his week: Monday office, Tuesday office, Saturday office.',
          lines: [['manager', '어제도 회사, 오늘도 회사, 내일도 회사…', 'Yesterday the office, today the office, tomorrow the office…']],
          q: { type: 'write', prompt: 'Ask him: “Why do you only work?”', ans: ['왜 일밖에 안 해요?'], soft: [{ p: '(과장님 |)왜 일밖에 안 해요', note: 'Accepted.' }, { p: '(과장님 |)왜 일만 해요', note: 'Correct Korean too (만 + positive verb). The lesson pattern: 왜 일밖에 안 해요?' }], skill: 'l18.neg',
            diag: [{ p: '(과장님 |)왜 일밖에 해요', note: '밖에 needs a negative: 일밖에 안 해요.' }, { p: '(과장님 |)왜 일만 안 해요', note: 'That asks why work is the only thing he doesn’t do. “Only work” = 일밖에 안 해요.' }, { p: '(과장님 |)왜 일밖에 못 해요', note: '못 = cannot. He chooses it: 안 해요.' }],
            explain: 'Like the textbook: 왜 공부밖에 안 해요? → 왜 일밖에 안 해요?', en: 'Why do you only work?' },
          after: [['manager', '회사가 일밖에 안 줘요!', 'The company gives me nothing but work!']] },
        { id: 'B5', time: '00:30', place: 'Counter', narr: 'A tourist asks something in English. Grandma, buying tofu, turns to you. (외국인 = foreigner)',
          lines: [['grandma', '학생, 저 외국인 손님이 영어로 말해요. 학생은 영어 잘해요?', 'Dear, that foreign customer speaks English. Are you good at English?']],
          q: { type: 'write', prompt: 'Answer modestly: “I can only speak a little bit of English.”', ans: ['영어 조금밖에 못 해요.'], soft: [{ p: '(저는 |)(영어(는|를|) |)조금밖에 못 해요', note: 'Accepted.' }], skill: 'l18.neg',
            diag: [{ p: '(저는 |)(영어(는|를|) |)조금만 할 수 있어요', note: 'Understandable, but the book says it sounds less natural. Say: 조금밖에 못 해요.' }, { p: '(저는 |)(영어(는|를|) |)조금밖에 안 해요', note: '안 해요 = you choose not to. You CAN’T speak more: 못 해요.' }, { p: '(저는 |)(영어(는|를|) |)조금밖에 (해요|할 수 있어요)', note: '밖에 needs a negative: 조금밖에 못 해요.' }],
            explain: 'Textbook: 한국어 조금밖에 못 해요 → 영어 조금밖에 못 해요.', en: 'I can only speak a little bit of English.' },
          after: [['grandma', '괜찮아요. 저는 영어 “땡큐”밖에 몰라요.', 'That’s fine. The only English I know is “thank you”.']] },
        { id: 'B6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim wants two coffees. The coffee beans are almost gone.',
          q: { type: 'tiles', prompt: 'Say: “There is only one coffee left.” (= there is only one coffee)', ans: ['커피가 한 잔밖에 없어요.'], soft: [{ p: '(기사님 |)커피(가|는|) 한 잔밖에 없어요', note: 'Accepted.' }], extra: ['있어요.', '한 잔만', '하나'], skill: 'l18.form',
            diag: [{ p: '커피가 한 잔밖에 있어요', note: '밖에 + 없어요 (not 있어요).' }, { p: '커피가 한 잔만 없어요', note: 'That says one cup is missing. Only one = 한 잔밖에 없어요.' }],
            explain: 'Number + counter + 밖에 없어요, like 한 명밖에 없어요.', en: 'There is only one coffee left.' },
          after: [['taxi', '그럼 그거 저 주세요! 하하.', 'Then give that one to me! Haha.']] },
        { id: 'B7', time: '02:30', place: 'Counter', narr: 'The courier needs a pen for his form. All you have is a tiny pencil from the lottery stand. (펜 = pen)',
          lines: [['courier', '펜 있어요? 빨리요!', 'Do you have a pen? Quickly!']],
          q: { type: 'write', prompt: 'Say: “This is all we have.” (= there is nothing but this)', ans: ['이것밖에 없어요.'], soft: [{ p: '(죄송해요 |)(이것|이거)밖에 없어요', note: 'Accepted.' }, { p: '(죄송해요 |)(이것|이거)만 있어요', note: 'Correct Korean too (만 + 있어요). The lesson pattern: 이것밖에 없어요.' }], skill: 'l18.neg',
            diag: [{ p: '(이것|이거)밖에 있어요', note: '밖에 needs a negative: 이것밖에 없어요.' }, { p: '(이것|이거)만 없어요', note: 'That says only this one is missing. All we have = 이것밖에 없어요.' }],
            explain: 'The textbook question 이것밖에 없어요? as a statement.', en: 'This is all we have.' },
          after: [['courier', '괜찮아요! 고마워요!', 'That’s fine! Thanks!']] },
        { id: 'B8', time: '03:00', place: 'Front door', narr: 'He comes back with ten boxes. Only one of them is for Moonlight Mart. You point at it.',
          q: { type: 'write', prompt: 'Say: “Just give me this one only.” (a request — 밖에 or 만?)', ans: ['이것만 주세요.'], soft: [{ p: '(기사님 |)(이것|이거|이 박스)( 하나|)만 주세요', note: 'Accepted.' }], skill: 'l18.vs',
            diag: [{ p: '(기사님 |)(이것|이거|이 박스)( 하나|)밖에 주세요', note: '밖에 can’t be used in requests (-주세요). Use 만: 이것만 주세요.' }, { p: '(기사님 |)(이것|이거|이 박스)( 하나|)밖에 안 주세요', note: 'A request with 주세요 takes 만, not 밖에 + negative: 이것만 주세요.' }],
            explain: 'Textbook: 밖에 cannot be used with imperative sentences, so 만 must be used — 이것만 주세요.', en: 'Just give me this one only.' } },
        { id: 'B9', time: '04:30', place: 'Counter', narr: 'Minji texts: 손님 많았어요?',
          q: { type: 'write', prompt: 'Text back: “No, only three people came.”', ans: ['아니요, 세 명밖에 안 왔어요.'], soft: [{ p: '(아니요 |)(손님이 |)(세 명|3명)밖에 안 왔어요', note: 'Accepted.' }], skill: 'l18.form',
            diag: [{ p: '(아니요 |)(손님이 |)(세 명|3명)밖에 왔어요', note: '밖에 needs a negative: 세 명밖에 안 왔어요.' }, { p: '(아니요 |)(손님이 |)삼 명밖에 안 왔어요', note: 'With 명 use the native number: 세 명.' }, { p: '(아니요 |)(손님이 |)(세 명|3명)만 안 왔어요', note: 'That says only three people did NOT come. Only three came = 세 명밖에 안 왔어요.' }],
            explain: 'Like the textbook dialogue: 백 명밖에 안 왔어요.', en: 'No, only three people came.' },
          after: [['minji', 'ㅋㅋ 카드가 안 돼서요. 내일은 괜찮을 거예요!', 'lol because cards don’t work. Tomorrow will be fine!']] },
        { id: 'B10', time: '05:40', place: 'Counter', narr: 'You finally fix the card reader. Mr. Park checks the cash drawer.',
          lines: [['boss', '오늘 현금 많이 받았어요?', 'Did you take a lot of cash today?']],
          q: { type: 'write', prompt: 'Answer: “No, I only took a little.”', ans: ['아니요, 조금밖에 못 받았어요.'], soft: [{ p: '(아니요 |)(사장님 |)조금밖에 (못|안) 받았어요', note: 'Accepted.' }], skill: 'l18.neg',
            diag: [{ p: '(아니요 |)조금밖에 받았어요', note: '밖에 needs a negative: 조금밖에 못 받았어요.' }, { p: '(아니요 |)조금만 (못|안) 받았어요', note: 'Only + negative = 밖에: 조금밖에 못 받았어요.' }],
            explain: '조금밖에 + 못 받았어요 (past).', en: 'No, I only took a little.' },
          after: [['boss', '괜찮아요. 카드 리더기 고쳤어요? 와, 고마워요!', 'That’s okay. You fixed the card reader? Wow, thank you!']],
          afterNarr: 'Ramyeon sleeps on the cash drawer. It is the only warm thing in the store.' },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'Write: “to have nothing but money; to only have money”', ans: ['돈밖에 없다'], soft: [{ p: '돈밖에 없(다|어요)', note: 'Accepted.' }], skill: 'l18.neg', diag: [{ p: '돈밖에 있(다|어요)', note: '밖에 + 없다: 돈밖에 없다.' }, { p: '돈만 없(다|어요)', note: 'That says only money is missing. 돈밖에 없다.' }], explain: 'Textbook exercise 1.', en: 'to have nothing but money' },
        { id: 'B.c2', type: 'write', prompt: 'Write in Korean: “As for Korean friends, I only have one.”', ans: ['한국인 친구는 한 명밖에 없어요.'], soft: [{ p: '한국인 친구(는|가) 한 명밖에 없어요', note: 'Accepted.' }], skill: 'l18.form', diag: [{ p: '한국인 친구(는|가) 한 명밖에 있어요', note: '밖에 + 없어요.' }], explain: 'Textbook exercise 4.', en: 'As for Korean friends, I only have one.' },
        { id: 'B.c3', type: 'write', prompt: 'Write in Korean: “I can only speak a little bit of Korean.”', ans: ['한국어 조금밖에 못 해요.'], soft: [{ p: '(저는 |)한국어(를|) 조금밖에 못 해요', note: 'Accepted.' }], skill: 'l18.neg', diag: [{ p: '(저는 |)한국어(를|) 조금만 할 수 있어요', note: 'Understood, but less natural (the book): 조금밖에 못 해요.' }, { p: '(저는 |)한국어(를|) 조금밖에 안 해요', note: 'Can’t = 못: 조금밖에 못 해요.' }], explain: 'Textbook exercise 5.', en: 'I can only speak a little bit of Korean.' },
        { id: 'B.c4', type: 'write', prompt: 'Write in Korean: “My cat only eats tuna.”', ans: ['우리 고양이는 참치밖에 안 먹어요.'], soft: [{ p: '(우리 |제 |)고양이(는|가) 참치밖에 안 먹어요', note: 'Accepted.' }], skill: 'l18.neg', diag: [{ p: '(우리 |제 |)고양이(는|가) 참치밖에 먹어요', note: '밖에 needs a negative: 안 먹어요.' }, { p: '(우리 |제 |)고양이(는|가) 참치만 안 먹어요', note: 'That says tuna is the one thing it doesn’t eat. 참치밖에 안 먹어요.' }], explain: 'Textbook sample sentence.', en: 'My cat only eats tuna.' },
        { id: 'B.c5', type: 'write', prompt: 'Write in Korean: “Why do you only study?”', ans: ['왜 공부밖에 안 해요?'], soft: [{ p: '왜 공부밖에 안 해요', note: 'Accepted.' }], skill: 'l18.neg', diag: [{ p: '왜 공부밖에 해요', note: '밖에 needs a negative: 공부밖에 안 해요.' }], explain: 'Textbook sample sentence.', en: 'Why do you only study?' },
        { id: 'B.c6', type: 'write', prompt: 'Write in Korean: “Only 100 people came.”', ans: ['백 명밖에 안 왔어요.'], soft: [{ p: '(백 명|100명|100 명)밖에 안 왔어요', note: 'Accepted.' }], skill: 'l18.form', diag: [{ p: '(백 명|100명)밖에 왔어요', note: '밖에 needs a negative: 안 왔어요.' }], explain: 'Textbook dialogue.', en: 'Only 100 people came.' },
      ],
    },

    C: {
      title: 'Nothing but Tuna', sub: 'Mixed · optional', kind: 'mixed', fix: 'catbowl', optional: true,
      snack: { id: 'l18.snackC', ko: '참치 김밥 칩', en: 'Tuna Kimbap Chips', desc: 'Approved by one (1) cat. He ate nothing else.' },
      scenes: [
        { id: 'C1', time: '22:30', place: 'Ramen shelf', narr: 'Grandma brings a new bag of cat food. Ramyeon sniffs it and turns away. His food bowl is cracked, too. (그릇 = bowl)',
          lines: [['grandma', '라면이 이거 안 먹어요. 참치밖에 안 먹어요.', 'Ramyeon doesn’t eat this. He eats nothing but tuna.']],
          q: { type: 'enOpts', prompt: 'What does Ramyeon eat?', opts: ['Only tuna.', 'Everything except tuna.', 'No tuna.', 'Ramen.'], skill: 'l18.form',
            explain: '참치밖에 안 먹어요 = eats nothing but tuna (textbook: 우리 고양이는 참치밖에 안 먹어요).', en: 'He eats nothing but tuna.' } },
        { id: 'C2', time: '23:00', place: 'Window seats', narr: 'Sua is making flashcards. She shows you four.',
          q: { type: 'mc', prompt: 'Which card says “My cat only eats tuna”?', opts: ['우리 고양이는 참치밖에 안 먹어요.', '우리 고양이는 참치만 안 먹어요.', '우리 고양이는 참치밖에 먹어요.', '우리 고양이는 참치를 안 먹어요.'], skill: 'l18.neg',
            explain: 'Noun + 밖에 + negative. 참치만 안 먹어요 = only tuna it doesn’t eat; 참치를 안 먹어요 = it doesn’t eat tuna.', en: 'My cat only eats tuna.' } },
        { id: 'C3', time: '23:30', place: 'Counter', narr: 'Sua orders a kimbap and looks at the ingredients. (오이 = cucumber)',
          lines: [['sua', '저는 다 잘 먹어요. 그런데 오이만 못 먹어요.', 'I eat everything. But cucumber is the one thing I can’t eat.']],
          q: { type: 'enOpts', prompt: 'What can’t Sua eat?', opts: ['Only cucumber — she eats everything else.', 'Anything but cucumber.', 'Kimbap.', 'Nothing — she eats everything.'], skill: 'l18.vs',
            explain: '만 + 못 먹어요 = the only thing I can’t eat. (Workbook 17: 돼지고기만 못 먹어요.) 오이밖에 못 먹어요 would mean she eats nothing but cucumber.', en: 'But cucumber is the one thing I can’t eat.' } },
        { id: 'C4', time: '00:30', place: 'Ramen shelf', narr: 'You report to Grandma what Ramyeon drank tonight.',
          q: { type: 'tiles', prompt: 'Say: “Ramyeon only drinks water.”', ans: ['라면은 물밖에 안 마셔요.'], soft: [{ p: '(할머니 |)라면(은|이) 물밖에 안 마셔요', note: 'Accepted.' }], extra: ['마셔요.', '물만', '못'], skill: 'l18.neg',
            diag: [{ p: '라면은 물밖에 마셔요', note: '밖에 needs a negative: 물밖에 안 마셔요.' }, { p: '라면은 물만 안 마셔요', note: 'That says water is the one thing he doesn’t drink. 물밖에 안 마셔요.' }],
            explain: 'Like 콜라밖에 안 마시다 (textbook).', en: 'Ramyeon only drinks water.' },
          after: [['grandma', '고양이가 커피 안 마셔서 다행이에요.', 'Good thing the cat doesn’t drink coffee.']] },
        { id: 'C5', time: '01:30', place: 'Memo board', narr: 'Hyunwoo again. Four sentences, one mistake.',
          q: { type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['이것밖에 주세요.', '이것만 주세요.', '저는 닭고기만 싫어해요.', '현금만 받아요.'], skill: 'l18.vs',
            explain: '밖에 can’t be used in requests (주세요): 이것만 주세요. The others are from the book: 만 with a negative-meaning verb (싫어하다) and with a positive verb (받아요).', en: '' } },
        { id: 'C6', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim does not believe it.',
          lines: [['taxi', '라면이 정말 참치밖에 안 먹어요? 우리 집 고양이는 다 먹어요.', 'Does Ramyeon really eat nothing but tuna? My cat at home eats everything.']],
          q: { type: 'enOpts', prompt: 'What is Mr. Kim’s cat like?', opts: ['It eats everything.', 'It only eats tuna too.', 'It doesn’t eat at all.', 'It only drinks water.'], skill: 'l18.form',
            explain: '다 먹어요 = it eats everything (no 밖에).', en: 'My cat at home eats everything.' } },
        { id: 'C7', time: '03:00', place: 'Front door', narr: 'The officer asks about the cat for his patrol notes. (마리 = counter for animals, Lesson 5)',
          lines: [['police', '이 가게 고양이는 몇 마리예요?', 'How many cats does this store have?']],
          q: { type: 'write', prompt: 'Answer: “There is only one.” (counter 마리)', ans: ['한 마리밖에 없어요.'], soft: [{ p: '(경찰관님 |)(라면 |)한 마리밖에 없어요', note: 'Accepted.' }], skill: 'l18.neg',
            diag: [{ p: '(라면 |)한 마리밖에 있어요', note: '밖에 + 없어요.' }, { p: '(라면 |)(하나|일) 마리밖에 없어요', note: 'With 마리 use 한: 한 마리.' }, { p: '(라면 |)한 마리만 없어요', note: 'That says one cat is missing. Only one = 한 마리밖에 없어요.' }],
            explain: 'Like 한 명밖에 없어요 (textbook).', en: 'There is only one.' },
          after: [['police', '한 마리… 근데 정말 커요.', 'One… but a really big one.']] },
        { id: 'C8', time: '04:00', place: 'Counter', narr: 'Minji texts about Hyunwoo, who has worked every day this week.',
          lines: [['minji', '현우 씨는 일___ 모르는 사람이에요.', 'Hyunwoo is someone who only knows work.']],
          q: { type: 'fill', prompt: '“Hyunwoo is a person who only knows (cares about) work.”', ko: '현우 씨는 일___ 모르는 사람이에요.', ans: ['밖에'], units: ['밖', '에'], extra: ['만', '도', '을'], skill: 'l18.form',
            diag: [{ p: '만', note: '모르다 is the negative here (= doesn’t know). Only + 모르다 = 밖에: 일밖에 모르는.' }, { p: '도', note: '일도 모르는 = doesn’t even know work. Only work = 일밖에.' }],
            explain: 'Workbook dictation 23. 모르다 counts as the negative verb (= not know). 모르는 사람 = a person who doesn’t know (Lesson 14).', en: 'Hyunwoo is someone who only knows work.' } },
        { id: 'C9', time: '05:00', place: 'Ramen shelf', narr: 'You fix Ramyeon’s bowl with tape. Grandma asks where the tuna cans are hidden.',
          q: { type: 'enOpts', prompt: 'You answer “그거 저밖에 몰라요.” What did you say?', opts: ['“Only I know that.”', '“I don’t know that.”', '“I know it outside.”', '“Everybody knows that.”'], skill: 'l18.form',
            explain: 'Workbook dictation 24: 저밖에 몰라요 = nobody but me knows → only I know that.', en: 'Only I know that.' } },
        { id: 'C10', time: '05:30', place: 'Counter', narr: 'Mr. Park sees the new bowl.',
          lines: [['boss', '그릇 고쳤어요? 라면이 오늘 뭐 먹었어요?', 'You fixed the bowl? What did Ramyeon eat today?']],
          q: { type: 'write', prompt: 'Answer: “He only ate tuna.”', ans: ['참치밖에 안 먹었어요.'], soft: [{ p: '(라면은 |라면이 |)참치밖에 안 먹었어요', note: 'Accepted.' }, { p: '(라면은 |라면이 |)참치만 먹었어요', note: 'Correct Korean too (만 + positive verb). The lesson pattern: 참치밖에 안 먹었어요.' }], skill: 'l18.neg',
            diag: [{ p: '(라면은 |라면이 |)참치밖에 먹었어요', note: '밖에 needs a negative: 참치밖에 안 먹었어요.' }, { p: '(라면은 |라면이 |)참치만 안 먹었어요', note: 'That says tuna is the one thing he didn’t eat. 참치밖에 안 먹었어요.' }, { p: '(라면은 |라면이 |)참치밖에 안 먹어요', note: 'He ate it today (past): 안 먹었어요.' }],
            explain: '참치밖에 + 안 먹었어요 (past).', en: 'He only ate tuna.' },
          after: [['boss', '그럼 내일도 참치 사야 돼요… 우리 가게에서 제일 비싼 손님이에요.', 'Then I have to buy tuna tomorrow too… He’s the most expensive customer in our store.']],
          afterNarr: 'The most expensive customer purrs, eats nothing but tuna, and pays nothing but attention to himself.' },
      ],
      cctv: [
        { id: 'C.c1', type: 'enOpts', prompt: '“저는 다 잘 먹어요. 그런데 돼지고기만 못 먹어요.”', opts: ['I eat everything, but pork is the only thing I can’t eat.', 'I only eat pork.', 'I can’t eat anything but pork.', 'I don’t eat anything.'], skill: 'l18.vs', explain: 'Workbook 17: 만 + 못 먹어요.', en: 'I eat everything well. But I just can’t eat pork.' },
        { id: 'C.c2', type: 'mc', prompt: '“We only accept cash.” (with a positive verb)', opts: ['현금만 받아요.', '현금밖에 받아요.', '현금만 안 받아요.', '현금 밖에서 받아요.'], skill: 'l18.vs', explain: 'Workbook 20: 저희는 현금만 받아요. (With 밖에: 현금밖에 안 받아요.)', en: 'We only accept cash.' },
        { id: 'C.c3', type: 'enOpts', prompt: 'When is 만 used rather than 밖에 (the book)?', opts: ['In requests/instructions (주세요) and with verbs that already have a negative meaning (싫어하다).', 'With all negative verbs.', 'Only with numbers.', 'Only in questions.'], skill: 'l18.vs', explain: 'Textbook Q&A: 이것만 주세요, 저는 닭고기만 싫어해요.', en: '' },
        { id: 'C.c4', type: 'mc', prompt: '“I can only speak a little bit of Korean.” The most natural:', opts: ['한국어 조금밖에 못 해요.', '한국어 조금만 할 수 있어요.', '한국어 조금밖에 해요.', '한국어 조금만 못 해요.'], skill: 'l18.neg', explain: 'Textbook note: 조금만 할 수 있어요 is understood but sounds less natural than 조금밖에 못 해요.', en: '' },
        { id: 'C.c5', type: 'enOpts', prompt: '“지금 집에 동생밖에 없어요.”', opts: ['Only my younger brother/sister is at home now.', 'My younger sibling is not at home now.', 'My younger sibling is outside now.', 'Nobody is at home now.'], skill: 'l18.form', explain: 'Workbook 14.', en: 'Only my younger brother/sister is at home now.' },
        { id: 'C.c6', type: 'enOpts', prompt: '밖 (without 에) means…', opts: ['outside; outdoors', 'only', 'other than', 'inside'], skill: 'l18.form', explain: 'Textbook: 밖 = outside; outdoors. 밖에 = outside something; other than something.', en: '' },
      ],
    },
  },

  /* extra questions by skill: returned mistakes, Dawn Restock, store repairs, Rush Hour (rushPool: mc/enOpts only) */
  pool: [
    { id: 'p18.f1', type: 'mc', prompt: '“I only have one Korean friend.”', opts: ['한국인 친구가 한 명밖에 없어요.', '한국인 친구가 한 명밖에 있어요.', '한국인 친구가 한 명만 없어요.', '한국인 친구가 하나 명밖에 없어요.'], skill: 'l18.form', explain: 'Textbook sample sentence.', en: '' },
    { id: 'p18.f2', type: 'enOpts', prompt: '“지금 4,000원밖에 없어요.”', opts: ['I only have 4,000 won now.', 'I don’t have 4,000 won now.', 'It costs 4,000 won outside.', 'I need 4,000 won more.'], skill: 'l18.form', explain: 'Workbook 12.', en: 'I only have 4,000 won now.' },
    { id: 'p18.f3', type: 'enOpts', prompt: '“미안해요. 저는 영어밖에 못 해요.”', opts: ['Sorry. I only speak English.', 'Sorry. I can’t speak English.', 'Sorry. I speak English outside.', 'Sorry. I speak a little English.'], skill: 'l18.form', explain: 'Workbook 13.', en: 'Sorry. I only speak English.' },
    { id: 'p18.f4', type: 'mc', prompt: 'Where does 밖에 go?', opts: ['Right after the noun: 돈밖에', 'Before the noun: 밖에 돈', 'After the verb: 없어요밖에', 'Anywhere in the sentence'], skill: 'l18.form', explain: 'Noun + 밖에 + negative verb.', en: '' },
    { id: 'p18.f5', type: 'enOpts', prompt: '“그거 저밖에 몰라요.”', opts: ['Only I know that.', 'I don’t know that.', 'I only know that.', 'Nobody knows that.'], skill: 'l18.form', explain: 'Workbook dictation 24. 모르다 is the negative verb here.', en: 'Only I know that.' },
    { id: 'p18.n1', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['참치밖에 먹어요.', '참치밖에 안 먹어요.', '참치만 먹어요.', '참치밖에 없어요.'], skill: 'l18.neg', explain: '밖에 needs a negative verb: 참치밖에 안 먹어요. (참치만 먹어요 is fine.)', en: '' },
    { id: 'p18.n2', type: 'mc', prompt: '돈밖에 ___ (= to have nothing but money)', opts: ['없다', '있다', '안 있다', '못 있다'], skill: 'l18.neg', explain: 'The negative of 있다 is 없다: 돈밖에 없다.', en: '' },
    { id: 'p18.n3', type: 'enOpts', prompt: '조금밖에 못 해요 or 조금밖에 안 해요 for “I can only speak a little Korean”?', opts: ['못 해요 — you can’t do more.', '안 해요 — you choose not to do more.', 'Both mean the same.', 'Neither: 밖에 doesn’t take 못/안.'], skill: 'l18.neg', explain: '못 = cannot, 안 = do not (by choice).', en: '' },
    { id: 'p18.n4', type: 'mc', prompt: '“I only drink cola.”', opts: ['콜라밖에 안 마셔요.', '콜라밖에 마셔요.', '콜라만 안 마셔요.', '콜라밖에 없어요 마셔요.'], skill: 'l18.neg', explain: 'Textbook: 콜라밖에 안 마시다.', en: '' },
    { id: 'p18.v1', type: 'mc', prompt: '“Give me this one only.”', opts: ['이것만 주세요.', '이것밖에 주세요.', '이것밖에 안 주세요.', '이것만 안 주세요.'], skill: 'l18.vs', explain: 'Requests take 만 (textbook).', en: '' },
    { id: 'p18.v2', type: 'enOpts', prompt: '“저는 닭고기만 싫어해요.”', opts: ['I only hate chicken.', 'I only like chicken.', 'I hate everything but chicken.', 'I don’t eat chicken outside.'], skill: 'l18.vs', explain: 'Textbook: 싫어하다 already has a negative meaning, so 만 is more common.', en: 'I only hate chicken.' },
    { id: 'p18.v4', type: 'enOpts', prompt: 'Are 만 and 밖에 interchangeable (the book)?', opts: ['Yes and no: sometimes, but with 밖에 the verb must be negative.', 'Always.', 'Never.', 'Only in the past tense.'], skill: 'l18.vs', explain: 'Textbook Q&A. 밖에 is generally used more than 만.', en: '' },
  ],

  /* Shelf Stocking: no forms table → these words */
  vocab: [
    { ko: '밖', en: 'outside; outdoors' },
    { ko: '밖에', en: 'other than something (+ negative = only)' },
    { ko: '참치', en: 'tuna' },
    { ko: '한국인', en: 'Korean [person]' },
    { ko: '고양이', en: 'cat' },
    { ko: '있다', en: 'to be, to exist; to have' },
    { ko: '없다', en: 'to not exist; to not have' },
    { ko: '못하다', en: 'to be poor at' },
    { ko: '조금', en: 'a little bit; some' },
    { ko: '돈', en: 'money' },
    { ko: '콜라', en: 'cola' },
    { ko: '현금', en: 'cash' },
    { ko: '동생', en: 'younger brother/sister' },
    { ko: '영어', en: 'English (language)' },
    { ko: '돼지고기', en: 'pork' },
    { ko: '닭고기', en: 'chicken (meat)' },
    { ko: '아침', en: 'breakfast; morning' },
    { ko: '싫어하다', en: 'to hate, to dislike' },
    { ko: '생일 파티', en: 'birthday party' },
    { ko: '별로', en: '(+ negative) not very, not many' },
  ],
  grp: { '밖': 'outside', '밖에': 'outside', '돼지고기': 'meat', '닭고기': 'meat' },
  examples: {
    '밖': ['밖 = outside; outdoors', 'textbook: 밖에 = outside something; other than something'],
    '밖에': ['돈밖에 없다', 'to have nothing but money, to only have money'],
    '참치': ['우리 고양이는 참치밖에 안 먹어요.', 'My cat only eats tuna.'],
    '한국인': ['한국인 친구가 한 명밖에 없어요.', 'I only have one Korean friend.'],
    '고양이': ['우리 고양이는 참치밖에 안 먹어요.', 'My cat only eats tuna.'],
    '있다': ['돈(이) 있다', 'to have money'],
    '없다': ['돈밖에 없다', 'to have nothing but money'],
    '못하다': ['한국어 조금밖에 못해요.', 'I can only speak a little bit of Korean. (key spelling)'],
    '조금': ['한국어 조금밖에 못 해요.', 'I can only speak a little bit of Korean.'],
    '돈': ['돈밖에 없다', 'to have nothing but money'],
    '콜라': ['콜라밖에 안 마시다', 'to only drink cola'],
    '현금': ['저희는 현금만 받아요. 카드는 안 받아요.', 'We only accept cash. We don’t accept cards. (WB 20)'],
    '동생': ['지금 집에 동생밖에 없어요.', 'Only my younger brother/sister is at home now. (WB 14)'],
    '영어': ['미안해요. 저는 영어밖에 못 해요.', 'Sorry. I only speak English. (WB 13)'],
    '돼지고기': ['저는 다 잘 먹어요. 그런데 돼지고기만 못 먹어요.', 'I eat everything well. But I just can’t eat pork. (WB 17)'],
    '닭고기': ['저는 닭고기만 싫어해요.', 'I only hate chicken.'],
    '아침': ['오늘 아침밖에 못 먹어서 너무 배고파요.', 'I could only eat breakfast today, so I’m really hungry. (WB 19)'],
    '싫어하다': ['저는 닭고기만 싫어해요.', 'I only hate chicken.'],
    '생일 파티': ['민석 씨, 어제 생일 파티에 몇 명 왔어요?', 'Minseok, how many people came to your birthday party yesterday?'],
    '별로': ['별로 안 왔어요.', 'Not many people came.'],
  },
};
/* 밖에 / 만 (and 안 / 못) change the meaning: no “typo” leniency */
(() => {
  const G = MM.game[18], off = q => { if (q && q.ans && q.lenient === undefined) q.lenient = false; };
  Object.values(G.shifts).forEach(sh => { sh.scenes.forEach(s => off(s.q)); sh.cctv.forEach(off); });
  G.pool.forEach(off);
})();

/* ---- src/l18/mnemo_L18.js ---- */
/* GENERATED by tools/mnemo_build.js from mnemo/korean3-mnemo.json. Do not edit by hand. */
MM.mnemo[18] = {"cards":[{"id":"ko-k3-0321","w":"밖","cs":"venek; vnějšek; venku","en":"outside; outdoors","p":"n","o":"k","rz":["","밖 = venek; venku"],"m":"Vyslovuje se [박] (zdvojené ㄲ se na konci slabiky zjednodušuje, před samohláskou se ale vrací: 밖에 [바께]). Vazba: 밖에 나가다 = jít ven. Opak: 안 (vnitřek)."},{"id":"ko-k3-0322","w":"밖에","cs":"jen; pouze; kromě (vždy se záporem)","en":"other than something (+ negative = only)","p":"o","o":"k","ex":"돈밖에 없다","exc":"mít jen peníze / nemít nic kromě peněz","m":"Doslova ‚mimo/kromě toho‘ (밖 venek + 에) a vždy po ní následuje zápor (없다, 안, 못): ‚nemám nic kromě peněz‘ = ‚mám jen peníze‘. Vyslovuje se [바께]."},{"id":"ko-k3-0323","w":"참치","cs":"tuňák","en":"tuna","p":"n","o":"k","ex":"우리 고양이는 참치밖에 안 먹어요.","exc":"Naše kočka jí jenom tuňáka. (는 → téma)","m":"Předpona 참- znamená ‚pravý, opravdový‘ (jako v 참기름 = sezamový olej) a koncovka -치 označuje druhy ryb (např. 멸치 = ančovička). Vazba: 참치 캔 = konzerva tuňáka."},{"id":"ko-k3-0324","w":"한국인","cs":"Korejec; Korejka","en":"Korean [person]","p":"n","o":"s","ex":"한국인 친구가 한 명밖에 없어요.","exc":"Mám jen jednoho korejského kamaráda. (가 → 1. pád)","m":"韓 Korea + 國 země, stát + 人 člověk = člověk z Koreje, tedy Korejec nebo Korejka. Formálnější a kratší obdoba spojení 한국 사람.","r":["han-韓","guk-國","in-人"]},{"id":"ko-k3-0326","w":"못하다","cs":"neumět; nebýt v něčem dobrý; nemoci","en":"to be poor at","p":"v","o":"k","ex":"한국어 조금밖에 못해요.","exc":"Umím korejsky jen trochu.","m":"Psáno dohromady (못하다) znamená ‚neumět, nebýt v něčem dobrý‘ (opak: 잘하다 = umět dobře). Psáno zvlášť (못 하다) znamená ‚nemoci něco udělat‘ kvůli okolnostem.","tv":["못해요"]},{"id":"ko-k3-0328","w":"콜라","cs":"kola; coca-cola","en":"cola","p":"n","o":"e","ex":"콜라밖에 안 마시다","exc":"pít jenom kolu","m":"Výpůjčka z anglického ‚cola‘. Časté spojení v korejských restauracích a fastfoodech: 콜라 한 잔 (sklenice koly) nebo 콜라 한 캔 (plechovka koly)."},{"id":"ko-k3-0331","w":"돼지고기","cs":"vepřové maso","en":"pork","p":"n","o":"k","ex":"저는 다 잘 먹어요. 그런데 돼지고기만 못 먹어요.","exc":"Jím všechno v pohodě. Ale jen vepřové maso jíst nemůžu. (는 → téma; 만 → jen)","m":"돼지 (prase) + 고기 (maso) = vepřové maso. Stejným způsobem se tvoří i ostatní druhy masa: 소고기 (hovězí), 닭고기 (kuřecí)."},{"id":"ko-k3-0332","w":"닭고기","cs":"kuřecí maso","en":"chicken (meat)","p":"n","o":"k","ex":"저는 닭고기만 싫어해요.","exc":"Nemám rád jenom kuřecí maso. (는 → téma; 만 → jen)","m":"닭 (slepice, kuře) + 고기 (maso) = kuřecí maso. Pozor na výslovnost složené koncovky ㄺ: samotné 닭 se čte [닥], ve slově 닭고기 se vyslovuje [닥꼬기]."}],"gram":{"id":"ko-k3-g18","w":"-밖에 + 부정형","en":"Nothing but, Only","cs":"jen, pouze, nic jiného než… (se záporem)","vy":"Částice -밖에 se připojuje přímo za podstatné jméno (bez mezery) a vyžaduje, aby sloveso na konci věty bylo v záporu (např. 없다, 안…, 못…, 모르다). Doslova znamená ‚mimo X ne…‘, tedy ‚jen, pouze, nic jiného než X‘, a často nese odstín, že je něčeho málo nebo míň, než bychom čekali. V rozkazovacích větách a u sloves s kladným tvarem se místo -밖에 používá částice -만.","m":"Podstatné jméno 밖 znamená ‚venek, mimo‘ — věta ‚콜라밖에 안 마셔요‘ tedy doslova říká ‚mimo kolu nic nepiju‘. Důležité pravidlo: po -밖에 musí vždy následovat záporné sloveso, jinak použij -만.","s":[["-밖에 + 부정형","podstatné jméno + -밖에 + záporné sloveso = jen / pouze / nic jiného než"],["콜라밖에 안 마시다","pít jen kolu / nepít nic jiného než kolu"],["돈밖에 없다","mít jen peníze / nemít nic než peníze"],["이것만 주세요.","Dejte mi prosím jen tohle. (u žádostí a rozkazů se používá -만, ne -밖에)"],["저는 닭고기만 싫어해요.","Nesnáším jen kuřecí maso. (sloveso má záporný význam, ale kladný tvar → používá se -만)"],["한국인 친구가 한 명밖에 없어요.","Mám jen jednoho korejského kamaráda."],["한국인 친구는 한 명밖에 없어요.","Co se týče korejských kamarádů, mám jen jednoho."],["한국어 조금밖에 못 해요.","Umím korejsky jen trochu."],["이것밖에 없어요?","To je všechno? / Máte jen tohle?"],["우리 고양이는 참치밖에 안 먹어요.","Naše kočka jí jen tuňáka."],["왜 공부밖에 안 해요?","Proč se jenom učíš? / Proč neděláš nic jiného než učení?"],["백 명밖에 안 왔어요.","Přišlo jen sto lidí."],["지금 4,000원밖에 없어요.","Teď mám u sebe jen čtyři tisíce wonů."],["저는 다 잘 먹어요. 그런데 돼지고기만 못 먹어요.","Jím všechno s chutí. Jediné, co nemůžu jíst, je vepřové."],["저희는 현금만 받아요. 카드는 안 받아요.","Přijímáme pouze hotovost. Karty nebereme."],["현우 씨는 일밖에 모르는 사람이에요.","Hjonu je člověk, který nezná nic jiného než práci."],["그거 저밖에 몰라요.","To vím jenom já."]]}};
Object.assign(MM.mnRoots, {"han-韓":["한","韓","Korea"],"guk-國":["국","國","země, stát"],"in-人":["인","人","člověk"]});

/* ---- src/l18/reads_L18.js ---- */
/* reads_L18.js — Staff Group Chat + Neighborhood Notice Board for Lesson 18.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[18] = [
  {
    id: 'l18.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l18.sticker', ko: '참치캔 스티커', en: 'Tuna-can sticker', desc: 'A can of tuna with a crown. Ramyeon’s only true love.' },
    lines: [
      { who: 'boss', ko: '오늘 {창고|창고}에 뭐 있어요?', en: 'What is in the stockroom today?' },
      { who: 'minji', ko: '라면하고 콜라밖에 없어요. 택배가 안 왔어요.', en: 'Nothing but ramen and cola. The delivery didn’t come.' },
      { who: 'boss', ko: '아… 그럼 김밥은요?', en: 'Ah… then what about kimbap?' },
      { who: 'minji', ko: '김밥은 두 개밖에 안 남았어요.', en: 'There are only two kimbap left.' },
      { who: 'boss', ko: '고양이 밥은 있어요?', en: 'Is there cat food?' },
      { who: 'minji', ko: '고양이 밥은 많아요. 근데 라면이 참치밖에 안 먹어요. ㅋㅋ', en: 'There’s lots of cat food. But Ramyeon eats nothing but tuna. lol' },
      { who: 'boss', ko: '그 고양이는 자기밖에 몰라요.', en: 'That cat only cares about himself.' },
    ],
    gloss: { '창고': 'stockroom, storeroom', '남다': 'to be left (over)', '자기': 'oneself, himself' },
    qs: [
      { id: 'r18c.q1', type: 'enOpts', prompt: 'What is in the stockroom?', opts: ['Only ramen and cola.', 'Everything except ramen and cola.', 'Nothing at all.', 'Lots of kimbap.'], explain: '라면하고 콜라밖에 없어요.' },
      { id: 'r18c.q2', type: 'enOpts', prompt: 'How many kimbap are left?', opts: ['Only two.', 'None.', 'More than two.', 'Twelve.'], explain: '김밥은 두 개밖에 안 남았어요.' },
      { id: 'r18c.q3', type: 'enOpts', prompt: 'What does Mr. Park say about Ramyeon?', opts: ['He only cares about himself.', 'He doesn’t know himself.', 'He only eats cat food.', 'He knows everything.'], explain: '자기밖에 몰라요 = knows nothing but himself (like 일밖에 모르는 사람, Workbook 23).' },
    ],
  },
  {
    id: 'l18.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l18.notice', ko: '마지막 붕어빵', en: 'The last fish-shaped bun', desc: 'There was only one left. Now there are none.' },
    heading: '{붕어빵|붕어빵} 아저씨가 왔어요!',
    lines: [
      { ko: '이번 주부터 공원 앞에서 붕어빵을 팔아요.', en: 'Starting this week, we sell fish-shaped buns in front of the park.' },
      { ko: '밤 열 시까지 해요. 근데 하루에 백 개밖에 안 만들어요.', en: 'We’re open until 10 p.m. But we only make 100 a day.' },
      { ko: '그래서 빨리 오세요!', en: 'So come quickly!' },
      { ko: '그리고 죄송해요. 현금밖에 안 받아요.', en: 'And sorry. We only take cash.' },
      { ko: '카드는 다음 달부터 받을 거예요.', en: 'We will take cards from next month.' },
    ],
    gloss: { '붕어빵': 'fish-shaped bun (a winter street snack with red-bean filling)' },
    qs: [
      { id: 'r18b.q1', type: 'enOpts', prompt: 'How many buns are made each day?', opts: ['Only 100.', 'More than 100.', 'None.', '10.'], explain: '하루에 백 개밖에 안 만들어요.' },
      { id: 'r18b.q2', type: 'enOpts', prompt: 'How can you pay?', opts: ['Only in cash.', 'Only by card.', 'Cash or card.', 'It’s free.'], explain: '현금밖에 안 받아요.' },
      { id: 'r18b.q3', type: 'enOpts', prompt: 'Where is the bun stand?', opts: ['In front of the park.', 'Behind the park.', 'Next to Moonlight Mart.', 'Outside the station.'], explain: '공원 앞에서 붕어빵을 팔아요.' },
    ],
  },
];

/* ---- src/l18/textbook_L18.js ---- */
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

/* ---- src/l18/workbook_L18.js ---- */
/* workbook_L18.js — Korean 3 Workbook, Lesson 18 (p.73–75, answer key p.132–133).
   Section I vocabulary match (11, rounds 6 + 5). Section II translation into English (explain: compare with the key, judge yourself).
   Section III reading comprehension = pick (underline 밖에, 만, or both; key p.133). The PDF prints item 18 as “8.” — restored.
   Section IV dictation = WB Track 43, 44 (whole sentences; ASR matches the key). lenient off: 밖에 / 만 decide the meaning. */
MM.workbook[18] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary',
      task: 'Match each Korean word to its English translation.',
      type: 'match',
      items: [
        { n: 1, ko: '참치', en: 'tuna' },
        { n: 2, ko: '한국인', en: 'Korean [person]' },
        { n: 3, ko: '고양이', en: 'cat' },
        { n: 4, ko: '밖', en: 'outside' },
        { n: 5, ko: '밖에', en: 'outside something; other than something' },
        { n: 6, ko: '있다', en: 'to be, to exist' },
        { n: 7, ko: '없다', en: 'to not exist, to not be' },
        { n: 8, ko: '못하다', en: 'to be poor at' },
        { n: 9, ko: '조금', en: 'a little bit; some' },
        { n: 10, ko: '돈', en: 'money' },
        { n: 11, ko: '콜라', en: 'cola' },
      ],
    },
    {
      id: 'II', title: 'Section II – Translation practice',
      task: 'Translate the following statements to English and your preferred language (if not English). Then compare with the key.',
      type: 'explain',
      items: [
        { n: 12, ko: '지금 4,000원밖에 없어요.', key: 'I only have 4,000 won now.' },
        { n: 13, ko: '미안해요. 저는 영어밖에 못 해요.', key: 'Sorry. I only speak English.' },
        { n: 14, ko: '지금 집에 동생밖에 없어요.', key: 'Only my younger brother/sister is at home now.' },
        { n: 15, ko: '우리 고양이는 참치밖에 안 먹어요.', key: 'My cat only eats tuna.' },
        { n: 16, ko: '왜 공부밖에 안 해요?', key: 'Why do you only study?' },
      ],
    },
    {
      id: 'III', title: 'Section III – Reading Comprehension',
      task: 'Of the two options in parentheses, choose the most correct or likely answer. If both answers are possible, choose both.',
      type: 'pick', skill: 'l18.vs',
      items: [
        { n: 17, note: '(돼지고기 = pork)', lines: [['', '저는 다 잘 먹어요. 그런데 돼지고기{밖에|만} 못 먹어요.']], ans: [['만']],
          en: 'I eat everything well. But I just can’t eat pork.', why: '돼지고기밖에 못 먹어요 would mean “I can eat nothing but pork” — the opposite of 다 잘 먹어요. The only thing you can’t eat = 만 + 못.', keyNote: 'English is ours' },
        { n: 18, lines: [['A', 'TTMIK Level 3 워크북 몇 권 있어요?'], ['B', '한 권{밖에|만} 없어요.']], ans: [['밖에']],
          en: 'A: How many TTMIK Level 3 workbooks do you have? B: I only have one.', why: 'Only one = 한 권밖에 없어요. (한 권만 없어요 would mean “just one book is missing”.)', keyNote: 'English is ours' },
        { n: 19, note: '(아침 = breakfast)', lines: [['', '오늘 아침{밖에|만} 못 먹어서 너무 배고파요.']], ans: [['밖에']],
          en: 'I could only eat breakfast today, so I’m really hungry.', why: 'Nothing but breakfast = 아침밖에 못 먹어서. (아침만 못 먹어서 = “I only missed breakfast”, which would not make you very hungry.)', keyNote: 'English is ours' },
        { n: 20, note: '(받다 = to accept, to take)', lines: [['', '저희는 현금{밖에|만} 받아요. 카드는 안 받아요.']], ans: [['만']],
          en: 'We only accept cash. We don’t accept cards.', why: '받아요 is positive, so 밖에 can’t be used: 현금만 받아요. (With a negative verb: 현금밖에 안 받아요.)', keyNote: 'English is ours' },
        { n: 21, lines: [['', '지금 집에 저{밖에|만} 없어요.']], ans: [['밖에', '만']],
          en: 'Only I am at home now.', why: 'The key accepts both here. 저밖에 없어요 = there is nobody but me.', keyNote: 'English is ours' },
        { n: 22, lines: [['', '오늘 저녁에 파티 가는 사람 저{밖에|만} 없어요?']], ans: [['밖에']],
          en: 'Am I the only one going to the party this evening?', why: 'Nobody but me = 저밖에 없어요? (파티 가는 사람 = people who are going to the party, Lesson 14.)', keyNote: 'English is ours' },
      ],
    },
    {
      id: 'IV', title: 'Section IV – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 23, track: 'wb43', label: 'Track 43', ans: ['현우 씨는 일밖에 모르는 사람이에요.'], lenient: false, en: 'Hyunwoo is the person who only thinks/cares/knows about work.' },
        { n: 24, track: 'wb44', label: 'Track 44', ans: ['그거 저밖에 몰라요.'], lenient: false, en: 'Only I know that.' },
      ],
    },
  ],
};

