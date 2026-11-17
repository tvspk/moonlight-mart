/* ---- src/l31/cards_L31.js ---- */
/* cards_L31.js — Loyalty Cards for the final chapter. The 68 review words come from the game vocab automatically
   (with an example from the lesson where each word appeared); these are the review's grammar ladder and dialogue lines (Korean 3). */
MM.cards[31] = [
  { id: 'g1', ko: '너무 비싸고 맛없어요.', en: 'It’s too expensive and not tasty. (L1 + L2)', src: 'Review · Grammar' },
  { id: 'g2', ko: '그러면 다른 데 갈까요?', en: 'Then shall we go somewhere else? (L15 + L4)', src: 'Review · Grammar' },
  { id: 'g3', ko: '그러면 다른 데 가요.', en: 'Then let’s go somewhere else. (L16)', src: 'Review · Grammar' },
  { id: 'g4', ko: '여섯 시쯤 병원 앞에서 기다릴게요.', en: 'I will wait in front of the hospital around 6 o’clock. (L5 + L3 + L6)', src: 'Review · Grammar' },
  { id: 'g5', ko: '좋은 사람 같아요.', en: 'He seems to be a good person. (L8)', src: 'Review · Grammar' },
  { id: 'g6', ko: '좋은 사람일 수도 있어요.', en: 'He might be a good person. (L22)', src: 'Review · Grammar' },
  { id: 'g7', ko: '피곤해서 못 갈 것 같아요.', en: 'I am tired, so it seems like I can’t go. (L7 + L9)', src: 'Review · Grammar' },
  { id: 'g8', ko: '그래도 열두 시 전에 와야 돼요.', en: 'But still, you have to come before 12 o’clock. (L12 + L10)', src: 'Review · Grammar' },
  { id: 'g9', ko: '춤추는 사람 제 친구예요.', en: 'The person who is dancing is my friend. (L14)', src: 'Review · Grammar' },
  { id: 'g10', ko: '한국어 조금밖에 못해도 괜찮아요.', en: 'Even if you can only speak a little bit of Korean, it’s okay. (L18 + L20)', src: 'Review · Grammar' },
  { id: 'g11', ko: '1시간밖에 못 잤어도 안 피곤해요.', en: 'Even though I slept only an hour, I’m not tired. (L18 + L20)', src: 'Review · Grammar' },
  { id: 'g12', ko: '아침 먹은 다음에 뭐 할 거예요?', en: 'What will you do after having breakfast? (L19)', src: 'Review · Grammar' },
  { id: 'g13', ko: '아침 먹은 다음에 축구하자.', en: 'Let’s play soccer after having breakfast. (L28)', src: 'Review · Grammar' },
  { id: 'g14', ko: '도와요 · 매워요', en: 'I help · It’s spicy (ㅂ irregular, L11)', src: 'Review · Grammar' },
  { id: 'g15', ko: '몰라요 · 빨라요', en: 'I don’t know · It’s fast (르 irregular, L24)', src: 'Review · Grammar' },
  { id: 'g16', ko: '실어요 · 지어요', en: 'I load (ㄷ, L26) · I build (ㅅ, L29)', src: 'Review · Grammar' },
  { id: 'd1', ko: '요즘 날씨가 너무 좋네요.', en: 'The weather is so good these days. (L25)', src: 'Review · Dialogue' },
  { id: 'd2', ko: '저 내일 지민 씨하고 배드민턴 치는데, 같이 해요.', en: 'I’m playing badminton with Jimin tomorrow. Join us. (L21 + L16)', src: 'Review · Dialogue' },
  { id: 'd3', ko: '학교 끝난 다음에 전화할게요.', en: 'I will call you after I finish school. (L19 + L6)', src: 'Review · Dialogue' },
  { id: 'd4', ko: '그러면 저는 갈게요.', en: 'Then, I’m leaving. (L15 + L6)', src: 'Review · Dialogue' },
  { id: 'd5', ko: '뭔가 제가 모르는 일이 있었어요?', en: 'Did something happen that I don’t know about? (L14)', src: 'Review · Dialogue' },
  { id: 'd6', ko: '더 다치기 전에 포기해.', en: 'Give up before you get hurt even more. (L10, 반말 L27)', src: 'Review · Dialogue' },
];

/* ---- src/l31/game_L31.js ---- */
/* game_L31.js — Moonlight Mart, the final chapter (after Lesson 30): inventory night, the head-office inspection, the last night shift.
   Lines: [castId, korean, english]. q.opts: correct option first (engine shuffles). odd: opts[0] is the WRONG one.
   Every scene question is tagged with the skill of the lesson it reviews (l7.form, l18.neg …), so the answers feed the
   original lessons' expiry dates. Own skills: l31.speech (who speaks how), l31.irr (the four irregulars together),
   l31.mix (the review's grammar ladder), l31.vocab (the review word list).
   Who speaks how (from Lesson 27): Minji ↔ player 반말; Mr. Kim and Grandma → player 반말, player → them 존댓말;
   Sua → player 존댓말, player → Sua 반말 allowed; Mr. Park, Mr. Lee, the courier, the officer: 존댓말; the inspector: -ㅂ니다.
   Sua works the day shift (since L30 C); the player is 야간 실장 (L30 C, made official here).
   Words outside Level 3, glossed where they appear: 재고 조사, 건전지, 상품, 방금, 할인, 카트, 움직이다, 자정, 해가 뜨다, 배드민턴.
   App-written Korean: not checked by a native speaker (⚠ list in HANDOFF.md). */
MM.game[31] = {
  skills: {
    'l31.speech': { en: 'Who speaks how (반말 · 존댓말 · -ㅂ니다)', desc: 'Minji ↔ you: 반말. Mr. Kim and Grandma speak 반말 to you; you answer in 존댓말. Sua: you may use 반말. Mr. Park, customers, the officer: 존댓말. The inspector: -ㅂ니다; you answer in polite 존댓말.' },
    'l31.irr':    { en: 'The four irregulars: ㅂ · 르 · ㄷ · ㅅ', desc: '돕다 → 도와요, 맵다 → 매워요 (L11) · 모르다 → 몰라요, 빠르다 → 빨라요 (L24) · 싣다 → 실어요, 듣다 → 들어요 (L26) · 짓다 → 지어요, 낫다 → 나아요 (L29).' },
    'l31.mix':    { en: 'Level 3 grammar ladder', desc: 'The review sentences: 비싸고 맛없어요, 그러면 다른 데 갈까요?, 좋은 사람일 수도 있어요, 피곤해서 못 갈 것 같아요, 한국어 조금밖에 못해도 괜찮아요…' },
    'l31.vocab':  { en: 'Level 3 review vocabulary', desc: 'The 68 words of the Korean 3 review list.' },
  },
  fixSkills: { invscanner: 'l31.vocab', hqframe: 'l31.irr', roofmoon: 'l31.speech' },
  rushPool: true,
  intro: 'The final chapter. Head office announces an inspection, so tonight everything in Moonlight Mart gets counted. Tomorrow the inspector watches your shift. And then there is a party, a box nobody may open, and an old neon moon on the roof.',
  finale: {
    certTitle: 'Level 3 Certificate', rank: '야간 실장', rankEn: 'Night manager · Moonlight Mart · Level 3',
    stampKo: '수료', stampEn: 'completed',
    letter: [
      ['처음에는 라면 하나도 못 찾았어요.', 'At first you couldn’t even find one pack of ramen.'],
      ['그래도 매일 밤 열심히 일했어요.', 'But still, you worked hard every night.'],
      ['이제 김 기사님도, 할머니도 매일 밤 우리 가게에 와요.', 'Now Mr. Kim and Grandma come to our store every night.'],
      ['Level 4에서도 같이 일할까요?', 'Shall we work together in Level 4 too?'],
    ],
    sig: '— 박 사장',
  },

  shifts: {
    A: {
      title: 'Inventory Night', sub: 'Recognize · choose', kind: 'recognize', fix: 'invscanner',
      note: { text: 'Inventory tonight! Count everything twice. Do NOT count the cat. — Park' },
      snack: { id: 'l31.snackA', ko: '재고 조사 젤리', en: 'Stock-Count Gummies', desc: 'Every bag prints a different number of gummies on the back. None of them is right.' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Counter', narr: 'The night after Lesson 30. Mr. Park puts a handheld scanner on the counter. It does not turn on. (재고 조사 = stock count, inventory)',
          lines: [['boss', '내일 본사에서 사람이 와요. 그래서 오늘 밤에 재고 조사를 해야 돼요.', 'Someone from head office is coming tomorrow. So tonight we have to do the inventory.']],
          q: { type: 'enOpts', prompt: 'Why is there an inventory tonight?', opts: ['Someone from head office is coming tomorrow.', 'The store is closing tomorrow.', 'Mr. Park bought a new scanner.', 'Minji asked for it.'], skill: 'l12.vs',
            explain: '그래서 = so (it gives the result). 그래도 would be “but still” (Lesson 12).', en: 'Someone from head office is coming tomorrow. So tonight we have to do the inventory.' } },
        { id: 'A2', time: '22:20', place: 'Ramen shelf', narr: 'You start with the ramen shelf. Ramyeon is asleep on it, as always. Minji is still here, counting the drinks.',
          lines: [['minji', '라면 몇 개 있어? 라면 밑에도 봐!', 'How many packs of ramen are there? Look under Ramyeon too!']],
          q: { type: 'mc', prompt: 'Answer Minji (you two speak 반말): “There are about thirty.”', opts: ['서른 개쯤 있어.', '서른 개쯤 있어요.', '서른 개쯤에 있어.', '서른 개밖에 있어.'], skill: 'l5.count',
            explain: 'Things: native number + 개, and 쯤 right after the counter: 서른 개쯤 (Lesson 5). Minji and you speak 반말, so 있어 (Lesson 27). 밖에 would need a negative (Lesson 18).', en: 'There are about thirty.' } },
        { id: 'A3', time: '22:40', place: 'Drinks fridge', narr: 'The courier bursts in with a box.',
          lines: [['courier', '이 박스는 냉장고 옆에 놓을게요. 빨리 가야 돼요!', 'I’ll put this box next to the fridge. I have to go quickly!']],
          q: { type: 'enOpts', prompt: 'Where does the courier put the box?', opts: ['Next to the fridge.', 'On top of the fridge.', 'Behind the counter.', 'In front of the door.'], skill: 'l3.word',
            explain: '옆에 = next to (Lesson 3). 놓을게요: he tells you what he is going to do (Lesson 6).', en: 'I’ll put this box next to the fridge.' } },
        { id: 'A4', time: '23:10', place: 'Snack aisle', narr: 'You count the new snacks. Minji holds up a small shiny packet.',
          lines: [['minji', '이거 과자야? 사탕 같은데.', 'Is this a snack? It looks like candy, though.']],
          q: { type: 'enOpts', prompt: 'What does Minji think?', opts: ['It looks like candy.', 'It is definitely a snack.', 'It is too expensive.', 'It tastes like ramen.'], skill: 'l8.like',
            explain: 'Noun + 같다 = to look like (Lesson 8); 같은데 adds “…though” (-ㄴ데, Lesson 21).', en: 'Is this a snack? It looks like candy, though.' } },
        { id: 'A5', time: '23:40', place: 'Counter', narr: 'Sua, now on the day shift, has left you a note about the stock. One line has a mistake.',
          q: { type: 'odd', prompt: 'Which line on Sua’s note is WRONG?', opts: ['우유가 다섯 개밖에 있어요.', '우유가 다섯 개밖에 없어요.', '빵은 많이 있어요.', '김밥은 다 팔렸어요.'], skill: 'l18.neg',
            explain: '밖에 always needs a negative: 다섯 개밖에 없어요 (Lesson 18). With a positive verb: 다섯 개만 있어요.', en: '' } },
        { id: 'A6', time: '00:30', place: 'Counter', narr: 'Grandma comes down in her slippers and looks at your clipboard.',
          lines: [['grandma', '아이고, 숫자가 너무 많네. 학생, 안 졸려?', 'Oh my, so many numbers. Aren’t you sleepy, dear?']],
          q: { type: 'mc', prompt: 'Answer Grandma: “I’m sleepy, but it’s okay.”', opts: ['졸린데 괜찮아요.', '졸린데 괜찮아.', '졸려서 괜찮아요.', '졸리고 괜찮아요.'], skill: 'l21.usage',
            explain: '-ㄴ데 sets up a contrast: 졸린데 괜찮아요 (Lesson 21). Grandma speaks 반말 to you; you keep 존댓말 (Lesson 27). 졸려서 = because I’m sleepy (Lesson 7) does not fit.', en: 'I’m sleepy, but it’s okay.' } },
        { id: 'A7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim, 2 a.m., coffee. He sees the dead scanner. (건전지 = battery)',
          lines: [['taxi', '그거 고장 났어? 내 택시에 건전지 있어. 가져올까?', 'Is that broken? I have batteries in my taxi. Shall I bring them?']],
          q: { type: 'enOpts', prompt: 'What does Mr. Kim offer?', opts: ['To bring batteries from his taxi.', 'To drive you home.', 'To buy a new scanner.', 'To count the coffee cups.'], skill: 'l4.usage',
            explain: '가져올까? = shall I bring it? (-(으)ㄹ까 in 반말, Lessons 4 and 27).', en: 'Is that broken? I have batteries in my taxi. Shall I bring them?' },
          after: [['taxi', '잠깐만 기다려. 금방 올게.', 'Wait a moment. I’ll be right back.']] },
        { id: 'A8', time: '03:00', place: 'Front door', narr: 'The officer drinks his banana milk and watches you count.',
          lines: [['police', '몇 시쯤 끝날 것 같아요?', 'Around what time do you think you’ll finish?']],
          q: { type: 'mc', prompt: 'Answer: “I think I’ll finish around five.”', opts: ['다섯 시쯤 끝날 것 같아요.', '다섯 시쯤 끝난 것 같아요.', '오 시쯤 끝날 것 같아요.', '쯤 다섯 시 끝날 것 같아요.'], skill: 'l9.tense',
            explain: 'A guess about the future: 끝날 것 같아요 (Lesson 9). 끝난 것 같아요 = it seems it has finished. Hours: native numbers, 다섯 시 (Lesson 5).', en: 'I think I’ll finish around five.' } },
        { id: 'A9', time: '04:30', place: 'Stockroom', narr: 'Mr. Kim’s batteries work. The scanner beeps: 삑! The last box is a pile of yellow price labels: 싸요!',
          q: { type: 'mc', prompt: 'Which word means the opposite of 싸다?', opts: ['비싸다', '달다', '좁다', '차갑다'], skill: 'l31.vocab',
            explain: '싸다 = to be cheap ↔ 비싸다 = to be expensive. 달다 = sweet, 좁다 = narrow, 차갑다 = cold to the touch.', en: '' } },
        { id: 'A10', time: '05:30', place: 'Counter', narr: 'Mr. Park comes down. The clipboard is full, the scanner works, and Ramyeon has not moved.',
          lines: [['boss', '수고했어요! 이제 집에 가서 푹 자요. 오늘 저녁에 본사 직원이 오기 전에 다시 와요.', 'Good work! Now go home and get some proper sleep. Come back this evening before the head-office person comes.']],
          q: { type: 'enOpts', prompt: 'When should you come back?', opts: ['This evening, before the inspector comes.', 'This evening, after the inspector leaves.', 'Next week.', 'In one hour.'], skill: 'l10.usage',
            explain: '오기 전에 = before (she) comes (Lesson 10). 가서 = go and then (Lesson 7).', en: 'Come back this evening before the head-office person comes.' } },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: '“…그래서 오늘 밤에 재고 조사를 해야 돼요.” Here 그래서 means…', opts: ['so', 'but still', 'then, in that case', 'before'], skill: 'l12.vs', explain: '그래서 = so · 그래도 = but still (L12) · 그러면 = then (L15).', en: '' },
        { id: 'A.c2', type: 'mc', prompt: 'Which sentence counts the milk correctly? (“There are about ten.”)', opts: ['우유가 열 개쯤 있어요.', '우유가 열 개쯤에 있어요.', '우유가 열쯤 개 있어요.', '우유가 열 개를 쯤 있어요.'], skill: 'l5.count', explain: 'Number + counter + 쯤: 열 개쯤 (Lesson 5).', en: 'There are about ten bottles of milk.' },
        { id: 'A.c3', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['과자가 세 개밖에 있어요.', '과자가 세 개밖에 없어요.', '과자가 세 개만 있어요.', '과자가 세 개 있어요.'], skill: 'l18.neg', explain: '밖에 + negative (없어요), or 만 + positive (있어요) (Lesson 18).', en: '' },
        { id: 'A.c4', type: 'enOpts', prompt: '“사탕 같은데.” What does Minji mean?', opts: ['It looks like candy, though.', 'It is the same as candy.', 'I like candy, but…', 'Shall we buy candy?'], skill: 'l8.like', explain: 'Noun + 같다 = looks like (L8) + -ㄴ데 (L21).', en: '' },
        { id: 'A.c5', type: 'mc', prompt: 'Grandma asks you 안 졸려? (반말). You answer:', opts: ['네, 좀 졸려요.', '응, 좀 졸려.', '어, 좀 졸려.', '졸려, 할머니.'], skill: 'l31.speech', explain: 'Grandma may speak 반말 to you; you keep 존댓말 with her (Lesson 27).', en: 'Yes, I’m a little sleepy.' },
        { id: 'A.c6', type: 'mc', prompt: '“I think I’ll finish around five.”', opts: ['다섯 시쯤 끝날 것 같아요.', '다섯 시쯤 끝난 것 같아요.', '쯤 다섯 시 끝날 것 같아요.', '다섯 시쯤 끝낼게요 같아요.'], skill: 'l9.tense', explain: 'Future guess: -(으)ㄹ 것 같아요 (Lesson 9).', en: '' },
      ],
    },

    B: {
      title: 'Head Office', sub: 'Create · write', kind: 'create', fix: 'hqframe',
      note: { text: 'She is here at 21:50. Smile. Vest ON. Speak nicely. Don’t let the cat do anything. — Park' },
      snack: { id: 'l31.snackB', ko: '본사 비스킷', en: 'Head-Office Biscuits', desc: 'Square, beige and individually stamped. They taste exactly as exciting as a report.' },
      scenes: [
        { id: 'B1', time: '21:50', place: 'Front door', narr: 'The inspector from head office arrives early, before you have even put on your vest.',
          lines: [['hq', '안녕하십니까. 본사에서 왔습니다. 오늘 야간 근무를 확인합니다.', 'Good evening. I am from head office. Today I am checking the night shift.']],
          q: { type: 'write', prompt: 'Say: “I’ll put on my vest quickly.” (입다)', ans: ['빨리 조끼를 입을게요', '조끼를 빨리 입을게요', '빨리 조끼 입을게요', '조끼 빨리 입을게요'], skill: 'l6.usage',
            units: ['조끼를', '빨리', '입을게요'], extra: ['입울게요', '입을까요', '입어서'],
            soft: [{ p: '(빨리 조끼를|조끼를 빨리) 입을 거예요', note: 'Correct Korean. In reply to her, -(으)ㄹ게요 fits better: you tell her what you will do (Lesson 6).' }],
            diag: [{ p: '(빨리 조끼를|조끼를 빨리) 입울게요', note: '입다 keeps its ㅂ (one of the book’s exceptions, Lesson 11): 입을게요.' }],
            explain: '-(으)ㄹ게요 (Lesson 6); 입다 is a regular verb: 입을게요 (Lesson 11).', en: 'I’ll put on my vest quickly.' } },
        { id: 'B2', time: '22:10', place: 'Counter', narr: 'She opens her laptop on the counter.',
          lines: [['hq', '밤에는 손님이 많습니까?', 'Are there many customers at night?']],
          q: { type: 'write', prompt: 'Answer: “At night we’re busy, but it’s fun.”', ans: ['밤에는 바쁜데 재미있어요', '밤에는 바쁜데 재밌어요', '밤에 바쁜데 재미있어요'], skill: 'l21.form',
            units: ['밤에는', '바쁜데', '재미있어요'], extra: ['바쁘는데', '바빠데', '바빠서'],
            diag: [{ p: '밤에는 바쁘는데 재미있어요', note: '바쁘다 is a descriptive verb: 바쁜데 (Lesson 21).' }, { p: '밤에는 바빠서 재미있어요', note: '-아서 = because: “we’re busy, so it’s fun”. For “but”: 바쁜데 (Lesson 21).' }],
            explain: 'Descriptive verb + -(으)ㄴ데: 바쁜데 (Lesson 21).', en: 'At night we’re busy, but it’s fun.' } },
        { id: 'B3', time: '22:40', place: 'Ramen shelf', narr: 'The inspector points at the cat on the ramen shelf. (상품 = goods, merchandise)',
          lines: [['hq', '이 고양이는 무엇입니까? 상품입니까?', 'What is this cat? Is it merchandise?']],
          q: { type: 'write', prompt: 'Answer: “It’s our store’s cat.”', ans: ['(저희|우리) 가게 고양이예요'], skill: 'l31.speech',
            units: ['저희', '가게', '고양이예요'], extra: ['고양이이에요', '고양이야', '나의'],
            diag: [{ p: '(저희|우리) 가게 고양이이에요', note: '고양이 ends in a vowel: 고양이예요.' }, { p: '(저희|우리) 가게 고양이야', note: 'That is 반말 (Lesson 27). To the inspector: 고양이예요.' }],
            explain: 'Noun + 예요 after a vowel. 저희 (humble “our”) sounds even politer to someone from outside than 우리.', en: 'It’s our store’s cat.' },
          after: [['hq', '…귀엽네요.', '…Cute.']], afterNarr: 'For one second she almost smiles. Then she writes something down.' },
        { id: 'B4', time: '23:30', place: 'Drinks fridge', narr: 'She touches the new bottles from tonight’s delivery. (방금 = just now)',
          lines: [['hq', '음료가 차갑지 않습니다.', 'The drinks are not cold.']],
          q: { type: 'fill', prompt: 'Explain: “The courier just brought them, so they aren’t cold yet.” (가져오다)', ko: '택배 기사님이 방금 ___ 아직 안 차가워요.', ans: ['가져와서'], skill: 'l7.form',
            extra: ['왔', '오', '어'],
            diag: [{ p: '가져왔어서', note: 'No past tense before -아서; the tense goes on the last verb (Lesson 7).' }, { p: '가져오서', note: '오 + 아서 → 와서: 가져와서 (Lesson 7).' }, { p: '가져오고', note: '-고 = and (Lesson 2). The reason: 가져와서 (Lesson 7).' }],
            explain: '가져오다 → 가져와서 (Lesson 7). 차갑다 → 차가워요 (ㅂ irregular, Lesson 11).', en: 'The courier just brought them, so they aren’t cold yet.' } },
        { id: 'B5', time: '00:20', place: 'Counter', narr: 'She asks about the staff.',
          lines: [['hq', '낮에는 누가 일합니까?', 'Who works during the day?']],
          q: { type: 'write', prompt: 'Answer: “The person who works during the day is Sua.”', ans: ['낮에 일하는 사람은 수아 씨예요', '낮에 일하는 사람이 수아 씨예요', '낮에는 일하는 사람이 수아 씨예요'], skill: 'l14.form',
            units: ['낮에', '일하는', '사람은', '수아', '씨예요'], extra: ['일한', '일할', '수아야'],
            diag: [{ p: '낮에 일한 사람(은|이) 수아 씨예요', note: '일한 사람 = the person who worked. Works (now, regularly) = 일하는 사람 (Lesson 14).' }, { re: '수아(야|예요)$', note: 'Talking about Sua to the inspector: 수아 씨 (Lesson 27).' }],
            explain: 'Verb + 는 + noun: 일하는 사람 (Lesson 14). To someone from outside: 수아 씨.', en: 'The person who works during the day is Sua.' } },
        { id: 'B6', time: '01:30', place: 'Stockroom', narr: 'A heavy box of water bottles has to go onto the hand cart. (싣다 = to load, 카트 = cart)',
          lines: [['hq', '이 박스는 누가 카트에 싣습니까?', 'Who is loading this box onto the cart?']],
          q: { type: 'write', prompt: 'Answer: “I’ll load it.” (싣다)', ans: ['제가 실을게요'], skill: 'l26.form',
            units: ['제가', '실을게요'], extra: ['싣을게요', '실를게요', '내가'],
            soft: [{ p: '제가 실을 거예요', note: 'Correct Korean; offering to do it: 실을게요 (Lesson 6).' }],
            diag: [{ p: '제가 싣을게요', note: 'ㄷ irregular: ㄷ → ㄹ before a vowel: 실을게요 (Lesson 26).' }, { p: '내가 실을게요', note: '나/내가 is 반말 (Lesson 27). To the inspector: 제가.' }],
            explain: '싣다 → 실어요, 실을게요 (Lesson 26).', en: 'I’ll load it.' } },
        { id: 'B7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim comes in, sees the inspector, and whispers to you, in 반말 as usual.',
          lines: [['taxi', '저 사람 누구야? 좀 무서운 것 같아.', 'Who’s that? She seems a bit scary.']],
          q: { type: 'write', prompt: 'Whisper back (you keep 존댓말 with Mr. Kim): “She’s from head office.” → “She is a person who came from head office.”', ans: ['본사에서 온 사람이에요', '본사에서 온 분이에요'], skill: 'l31.speech',
            units: ['본사에서', '온', '사람이에요'], extra: ['오는', '사람이야', '올'],
            soft: [{ p: '본사 (사람|직원)이에요', note: 'Accepted: “She’s a head-office person.” The sentence asked for: 본사에서 온 사람이에요 (Lesson 14).' }],
            diag: [{ re: '야$', note: 'Mr. Kim speaks 반말 to you, but you keep 존댓말 with him (Lesson 27): …이에요.' }, { p: '본사에서 오는 사람이에요', note: 'She has already come: 온 사람 (past, Lesson 14).' }],
            explain: 'Past + noun: 온 사람 = the person who came (Lesson 14); 존댓말 to Mr. Kim.', en: 'She is a person who came from head office.' } },
        { id: 'B8', time: '03:00', place: 'Counter', narr: 'The inspector checks the price tags and frowns at one. (할인 = discount)',
          lines: [['hq', '이 가격이 맞습니까? 너무 쌉니다.', 'Is this price right? It is too cheap.']],
          q: { type: 'fill', prompt: 'Guess: “Maybe it might be a discounted item.”', ko: '아마 할인 상품___ 있어요.', ans: ['일 수도'], skill: 'l22.form',
            extra: ['을', '이', '할'],
            diag: [{ p: '수도', note: 'After a noun: noun + 일 수도 있어요 (Lesson 22).' }, { p: '이 수도', note: 'Noun + 일 수도 (이다 → 일): 상품일 수도 있어요 (Lesson 22).' }],
            explain: 'Noun + 일 수도 있어요 = might be (Lesson 22).', en: 'Maybe it might be a discounted item.' } },
        { id: 'B9', time: '04:00', place: 'Counter', narr: 'Mr. Park arrives early, nervous, with a tray of coffee. He looks at you for help.',
          lines: [['boss', '커피 드세요! 방금 만들었어요.', 'Please have some coffee! I just made it.']],
          q: { type: 'write', prompt: 'Suggest to everyone (the polite “let’s”): “Let’s drink coffee together.”', ans: ['같이 커피 마셔요', '커피 같이 마셔요'], skill: 'l28.who',
            units: ['같이', '커피', '마셔요'], extra: ['마시자', '마셔자', '마실게요'],
            diag: [{ re: '자$', note: '-자 is 반말 (Lesson 28). With Mr. Park and the inspector: -아/어요 (Lesson 16).' }],
            explain: 'The polite “let’s”: 마셔요 (Lesson 16). -자 only where 반말 is fine (Lesson 28).', en: 'Let’s drink coffee together.' } },
        { id: 'B10', time: '05:20', place: 'Front door', narr: 'The inspector closes her laptop.',
          lines: [['hq', '오늘 근무는 아주 좋았습니다. 고양이도 문제없습니다.', 'Tonight’s shift was very good. The cat is no problem either.']],
          q: { type: 'write', prompt: 'Thank her and say: “Please come again.”', ans: ['(감사합니다|고맙습니다) (또|다시) (오세요|와 주세요)'], skill: 'l31.speech',
            units: ['감사합니다', '또', '오세요'], extra: ['고마워', '와', '오자'],
            diag: [{ re: '(고마워|와|오자)$', note: '반말 (Lessons 27–28). To the inspector: 감사합니다. 또 오세요.' }],
            explain: 'The most formal thank-you, 감사합니다, then the polite request -(으)세요.', en: 'Thank you. Please come again.' },
          afterNarr: 'Mr. Park stares at you as if you had said something dangerous. The inspector nods once, and leaves.' },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'To the inspector: “I’ll load it.” (싣다)', ans: ['제가 실을게요'], units: ['제가', '실을게요'], extra: ['싣을게요', '실를게요'], skill: 'l26.form', diag: [{ p: '제가 싣을게요', note: 'ㄷ → ㄹ before a vowel (Lesson 26).' }], explain: '싣다 → 실을게요.', en: 'I’ll load it.' },
        { id: 'B.c2', type: 'write', prompt: '“At night we’re busy, but it’s fun.”', ans: ['밤에는 바쁜데 재미있어요', '밤에는 바쁜데 재밌어요'], units: ['밤에는', '바쁜데', '재미있어요'], extra: ['바쁘는데', '바빠서'], skill: 'l21.form', diag: [{ p: '밤에는 바쁘는데 재미있어요', note: 'Descriptive verb: 바쁜데 (Lesson 21).' }], explain: '바쁘다 → 바쁜데.', en: 'At night we’re busy, but it’s fun.' },
        { id: 'B.c3', type: 'fill', prompt: '“The courier just brought them, so they aren’t cold yet.” (가져오다)', ko: '택배 기사님이 방금 ___ 아직 안 차가워요.', ans: ['가져와서'], extra: ['왔', '오'], skill: 'l7.form', diag: [{ p: '가져왔어서', note: 'No past before -아서 (Lesson 7).' }], explain: '가져오다 → 가져와서.', en: '' },
        { id: 'B.c4', type: 'write', prompt: '“The person who works during the day is Sua.”', ans: ['낮에 일하는 사람은 수아 씨예요', '낮에 일하는 사람이 수아 씨예요'], units: ['낮에', '일하는', '사람은', '수아', '씨예요'], extra: ['일한', '일할'], skill: 'l14.form', diag: [{ p: '낮에 일한 사람(은|이) 수아 씨예요', note: 'Works = 일하는 (Lesson 14).' }], explain: 'Verb + 는 + noun.', en: '' },
        { id: 'B.c5', type: 'fill', prompt: '“Maybe it might be a discounted item.”', ko: '아마 할인 상품___ 있어요.', ans: ['일 수도'], extra: ['을', '이'], skill: 'l22.form', diag: [{ p: '수도', note: 'Noun + 일 수도 있어요 (Lesson 22).' }], explain: 'Noun + 일 수도 있어요.', en: '' },
        { id: 'B.c6', type: 'write', prompt: 'To Mr. Park and the inspector: “Let’s drink coffee together.”', ans: ['같이 커피 마셔요', '커피 같이 마셔요'], units: ['같이', '커피', '마셔요'], extra: ['마시자', '마셔자'], skill: 'l28.who', diag: [{ re: '자$', note: '-자 is 반말 (Lesson 28).' }], explain: 'Polite “let’s” (Lesson 16).', en: '' },
      ],
    },

    C: {
      title: 'The Last Night Shift', sub: 'Mixed · optional', kind: 'mixed', fix: 'roofmoon', optional: true,
      note: { text: 'Head office: PASSED. Party tonight around midnight. The box on the counter is NOT for opening. — Park' },
      snack: { id: 'l31.snackC', ko: '달빛 네온 사탕', en: 'Neon Moon Candy', desc: 'Glows faintly blue in the dark. Ramyeon is not impressed. Ramyeon is asleep.' },
      scenes: [
        { id: 'C1', time: '22:00', place: 'Counter', narr: 'The report has come: Moonlight Mart passed. Mr. Park has put a box on the counter and won’t say what is inside. (자정 = midnight)',
          lines: [['boss', '오늘 밤에 다 같이 파티해요! 자정쯤 다들 올 거예요.', 'Let’s all have a party tonight! Everyone will come around midnight.']],
          q: { type: 'enOpts', prompt: 'What is happening tonight?', opts: ['A party: everyone comes around midnight.', 'Another inspection at midnight.', 'The store closes at midnight.', 'Mr. Park goes on holiday.'], skill: 'l16.ctx',
            explain: '파티해요 here = let’s have a party (Lesson 16). 자정쯤 = around midnight (쯤, Lesson 5). 올 거예요 = will come (Lesson 6).', en: 'Let’s all have a party tonight! Everyone will come around midnight.' } },
        { id: 'C2', time: '23:00', place: 'Eat-in table', narr: 'Sua comes in after her day shift with her books. She speaks 존댓말 to you; you may use 반말 with her (Lesson 27).',
          lines: [['sua', '저도 같이 해도 돼요?', 'Can I join too?']],
          q: { type: 'mc', prompt: 'Answer Sua in 반말: “Of course! Let’s eat together.”', opts: ['그럼! 같이 먹자.', '그럼요! 같이 먹자요.', '그럼! 같이 먹어자.', '그럼! 같이 먹을까야.'], skill: 'l28.form',
            explain: '그럼 = of course (Lesson 15). “Let’s” in 반말: stem + 자 = 먹자, never 먹어자 or 먹자요 (Lesson 28).', en: 'Of course! Let’s eat together.' } },
        { id: 'C3', time: '23:30', place: 'Counter', narr: 'The store TV is showing a late-night drama. Two women glare at each other in a windy field. The name on the screen: 이수아. Sua chokes on her banana milk. (배드민턴을 치다 = to play badminton)',
          lines: [['sua', '저 아니에요! 저는 배드민턴도 못 쳐요!', 'That’s not me! I can’t even play badminton!']],
          q: { type: 'enOpts', prompt: 'Why does Sua protest?', opts: ['The woman in the drama has the same name as her.', 'She is on TV.', 'She hates badminton.', 'The drama is too loud.'], skill: 'l31.mix',
            explain: 'The drama is the Level 3 review dialogue: 이수아 and 지민 both want 민호. Same name, different Su-ah.', en: 'That’s not me! I can’t even play badminton!' },
          afterNarr: 'On the screen, the other Su-ah shouts: 나 포기 안 할 거야! (I’m not giving up!) Minji changes the channel.' },
        { id: 'C4', time: '00:10', place: 'Counter', narr: 'Everyone arrives at once. Minji pulls you aside.',
          lines: [['minji', '야, 사장님이 상자 안에 뭐 넣었어? 너 알아?', 'Hey, what did the boss put in the box? Do you know?']],
          q: { type: 'mc', prompt: 'Answer Minji (반말): “I don’t know. It might be a cake.”', opts: ['몰라. 케이크일 수도 있어.', '몰라요. 케이크일 수도 있어요.', '모르아. 케이크일 수도 있어.', '몰라. 케이크 수도 있어.'], skill: 'l24.form',
            explain: '모르다 → 몰라 (르 irregular, Lesson 24); 반말 drops 요 (Lesson 27); noun + 일 수도 있어 = might be (Lesson 22).', en: 'I don’t know. It might be a cake.' } },
        { id: 'C5', time: '00:40', place: 'Window seats', narr: 'Mr. Kim raises his paper cup of coffee.',
          lines: [['taxi', '학생, 항상 고마워. 매일 맛있는 커피 줘서.', 'Thanks as always, kid. For giving me good coffee every day.']],
          q: { type: 'mc', prompt: 'Answer Mr. Kim: “Thank you too. Please come tomorrow too.”', opts: ['저도 감사해요. 내일도 오세요.', '나도 고마워. 내일도 와.', '저도 감사해요. 내일도 오자.', '저도 감사해요. 내일도 오지 마세요.'], skill: 'l31.speech',
            explain: 'He speaks 반말 to you; you answer in 존댓말 (Lesson 27). -(으)세요 = please do. 오자 is a 반말 “let’s” (Lesson 28).', en: 'Thank you too. Please come tomorrow too.' } },
        { id: 'C6', time: '01:30', place: 'Window seats', narr: 'Grandma brings rice cakes she made herself. You eat far too many.',
          lines: [['grandma', '내가 만들었어. 많이 먹어!', 'I made them. Eat a lot!']],
          q: { type: 'mc', prompt: 'Tell Grandma: “It’s delicious, but I’m too full.”', opts: ['맛있는데 너무 배불러요.', '맛있는데 너무 배부러요.', '맛있는데 너무 배부르어요.', '맛있어서 너무 배불러.'], skill: 'l24.form',
            explain: '배부르다 → 배불러요 (르 irregular, Lesson 24). 맛있는데: contrast (Lesson 21). You keep 존댓말 with Grandma.', en: 'It’s delicious, but I’m too full.' } },
        { id: 'C7', time: '02:30', place: 'Counter', narr: 'Mr. Lee arrives in his suit, complaining, of course.',
          lines: [['manager', '오늘도 회사에서 열 시간 일했어요. 그래도 파티에는 왔어요!', 'I worked ten hours at the company again today. But still, I came to the party!']],
          q: { type: 'enOpts', prompt: 'What does Mr. Lee say?', opts: ['He worked ten hours, but he still came.', 'He worked ten hours, so he can’t stay.', 'He didn’t work today.', 'He will come after work.'], skill: 'l12.usage',
            explain: '그래도 = but still, nevertheless (Lesson 12).', en: 'I worked ten hours at the company again today. But still, I came to the party!' } },
        { id: 'C8', time: '03:30', place: 'Ramen shelf', narr: 'Mr. Park opens the box: a fluffy new cushion for the ramen shelf. And then it happens. Ramyeon stands up, stretches, walks past the cushion to the break-room sofa, and lies down there. (움직이다 = to move)',
          lines: [['minji', '라면이 움직였어! 처음이야!', 'Ramyeon moved! That’s a first!']],
          q: { type: 'mc', prompt: 'Mr. Park can’t believe it. Which sentence shows his surprise correctly?', opts: ['와, 고양이가 움직이네요!', '와, 고양이가 움직여네요!', '와, 고양이가 움직이는네요!', '와, 고양이가 움직인네요!'], skill: 'l25.form',
            explain: '-네요 goes straight on the stem: 움직이 + 네요 = 움직이네요 (Lesson 25).', en: 'Wow, the cat is moving!' } },
        { id: 'C9', time: '04:30', place: 'Roof', narr: 'Mr. Park takes you up to the roof. The old neon moon above the sign has been dark for years. (해가 뜨다 = the sun rises)',
          lines: [['boss', '이 달은 제 아버지가 만들었어요. 같이 고칠까요?', 'My father made this moon. Shall we fix it together?']],
          q: { type: 'write', prompt: 'Answer: “Yes, let’s fix it before the sun rises.” (polite “let’s”)', ans: ['네 해가 뜨기 전에 고쳐요', '네 해가 뜨기 전에 같이 고쳐요', '네 같이 해가 뜨기 전에 고쳐요'], skill: 'l10.form',
            units: ['네', '해가', '뜨기', '전에', '고쳐요'], extra: ['뜨는', '고치자', '다음에'],
            diag: [{ re: '고치자$', note: '-자 is 반말 (Lesson 28). To Mr. Park: 고쳐요 (Lesson 16).' }, { p: '네 해가 뜨는 전에 고쳐요', note: 'Verb + 기 전에: 뜨기 전에 (Lesson 10).' }, { p: '네 해가 뜬 다음에 고쳐요', note: '다음에 = after (Lesson 19). Before = 뜨기 전에 (Lesson 10).' }],
            explain: 'Verb stem + 기 전에 (Lesson 10); polite “let’s”: 고쳐요 (Lesson 16).', en: 'Yes, let’s fix it before the sun rises.' } },
        { id: 'C10', time: '05:50', place: 'In front of the store', narr: 'The moon lights up. The whole street turns blue. Mr. Park hands you a new name badge.',
          lines: [['boss', '오늘부터 정말 야간 실장님이에요. 축하해요!', 'From today you really are the night manager. Congratulations!']],
          q: { type: 'mc', prompt: 'Answer your boss: “Thank you. I’ll work hard.”', opts: ['감사합니다. 열심히 할게요.', '감사합니다. 열심히 할까요?', '고마워. 열심히 할게.', '감사합니다. 열심히 하자.'], skill: 'l6.usage',
            explain: '열심히 할게요: a promise to the person in front of you (Lesson 6). 고마워, 할게, 하자 are 반말 (Lessons 27–28).', en: 'Thank you. I’ll work hard.' },
          afterNarr: 'Ramyeon sleeps on the sofa. The neon moon hums. Level 3: done.' },
      ],
      cctv: [
        { id: 'C.c1', type: 'mc', prompt: 'Which “let’s” is 반말?', opts: ['같이 먹자.', '같이 먹어요.', '같이 드세요.', '같이 먹을까요?'], skill: 'l28.who', explain: 'Stem + 자 (Lesson 28). 먹어요 can be the polite “let’s” (Lesson 16).', en: '' },
        { id: 'C.c2', type: 'enOpts', prompt: '“케이크일 수도 있어.”', opts: ['It might be a cake.', 'It can be made into a cake.', 'It is a cake.', 'It was a cake.'], skill: 'l22.vs', explain: 'Noun + 일 수도 있어 = might be (Lesson 22).', en: '' },
        { id: 'C.c3', type: 'mc', prompt: '배부르다 + -아/어요', opts: ['배불러요', '배부러요', '배부르어요', '배불어요'], skill: 'l24.form', explain: '르 irregular: 배부르 → 배불 + 러요 (Lesson 24).', en: '' },
        { id: 'C.c4', type: 'mc', prompt: 'To Mr. Kim (he speaks 반말 to you): “Please come tomorrow too.”', opts: ['내일도 오세요.', '내일도 와.', '내일도 오자.', '내일도 오지 마.'], skill: 'l31.speech', explain: 'You keep 존댓말 with Mr. Kim (Lesson 27).', en: '' },
        { id: 'C.c5', type: 'mc', prompt: '움직이다 + -네요', opts: ['움직이네요', '움직여네요', '움직이는네요', '움직인네요'], skill: 'l25.form', explain: 'Stem + 네요 (Lesson 25).', en: '' },
        { id: 'C.c6', type: 'enOpts', prompt: '“해가 뜨기 전에 고쳐요.”', opts: ['Let’s fix it before the sun rises.', 'Let’s fix it after the sun rises.', 'We fixed it before sunrise.', 'Fix it because the sun is rising.'], skill: 'l10.usage', explain: '-기 전에 = before (Lesson 10).', en: '' },
      ],
    },
  },

  pool: [
    /* who speaks how */
    { id: 'p31.s1', type: 'mc', prompt: 'The inspector from head office arrives. Which greeting fits best?', opts: ['안녕하십니까.', '안녕!', '안녕, 잘 지냈어?', '잘 가.'], skill: 'l31.speech', explain: 'The inspector uses -ㅂ니다; the formal greeting 안녕하십니까 (or 안녕하세요) fits.', en: '' },
    { id: 'p31.s2', type: 'mc', prompt: 'Minji (same age, 반말 both ways): “Where are you?”', opts: ['어디야?', '어디예요?', '어디십니까?', '어디야요?'], skill: 'l31.speech', explain: 'Noun + 야 in 반말 (Lesson 27): 어디야?', en: '' },
    { id: 'p31.s3', type: 'mc', prompt: 'Grandma asks you 밥 먹었어? (반말). You answer:', opts: ['네, 먹었어요.', '응, 먹었어.', '어, 먹었어.', '먹었어, 할머니.'], skill: 'l31.speech', explain: 'She may use 반말 with you; you keep 존댓말 (Lesson 27).', en: '' },
    { id: 'p31.s4', type: 'enOpts', prompt: 'Sua speaks 존댓말 to you. What may you use with her?', opts: ['반말 (she said 말 놓으셔도 돼요).', 'Only -ㅂ니다.', 'Only 존댓말.', 'Nothing: she must start.'], skill: 'l31.speech', explain: 'Lesson 27 B: Sua is younger and gave permission.', en: '' },
    { id: 'p31.s5', type: 'odd', prompt: 'Which line breaks Mr. Park’s rule (customers get 존댓말)?', opts: ['손님, 이거 뭐야?', '손님, 이거 뭐예요?', '손님, 봉투 필요하세요?', '손님, 안녕히 가세요.'], skill: 'l31.speech', explain: '뭐야 is 반말 (Lesson 27). To customers: 뭐예요?', en: '' },
    { id: 'p31.s6', type: 'mc', prompt: 'To Mr. Kim (he speaks 반말 to you): “Let’s wait together.”', opts: ['같이 기다려요.', '같이 기다리자.', '같이 기다려.', '같이 기다릴까?'], skill: 'l31.speech', explain: 'With Mr. Kim you use the polite “let’s” -아/어요, never -자 (Lessons 16, 28).', en: '' },
    /* the four irregulars */
    { id: 'p31.i1', type: 'mc', prompt: '돕다 → present (해요 form)', opts: ['도와요', '돕아요', '도워요', '도요'], skill: 'l31.irr', explain: 'ㅂ irregular; 돕다 takes 와 (Lesson 11).', en: '' },
    { id: 'p31.i2', type: 'mc', prompt: '빠르다 → present (해요 form)', opts: ['빨라요', '빠라요', '빨러요', '빠르어요'], skill: 'l31.irr', explain: '르 irregular (Lesson 24).', en: '' },
    { id: 'p31.i3', type: 'mc', prompt: '싣다 → present (해요 form)', opts: ['실어요', '싣어요', '시러요', '실러요'], skill: 'l31.irr', explain: 'ㄷ irregular: ㄷ → ㄹ before a vowel (Lesson 26).', en: '' },
    { id: 'p31.i4', type: 'mc', prompt: '짓다 → present (해요 form)', opts: ['지어요', '짓어요', '져요', '지서요'], skill: 'l31.irr', explain: 'ㅅ irregular: ㅅ drops, the vowels stay apart (Lesson 29).', en: '' },
    { id: 'p31.i5', type: 'mc', prompt: '맵다 → present (해요 form)', opts: ['매워요', '맵아요', '매와요', '매어요'], skill: 'l31.irr', explain: 'ㅂ irregular (Lesson 11).', en: '' },
    { id: 'p31.i6', type: 'mc', prompt: '듣다 → present (해요 form)', opts: ['들어요', '듣어요', '드러요', '들러요'], skill: 'l31.irr', explain: 'ㄷ irregular (Lesson 26).', en: '' },
    { id: 'p31.i7', type: 'odd', prompt: 'Which form is WRONG?', opts: ['낫다 → 낫아요', '낫다 → 나아요', '모르다 → 몰라요', '걷다 → 걸어요'], skill: 'l31.irr', explain: '낫다 is ㅅ irregular: 나아요 (Lesson 29).', en: '' },
    { id: 'p31.i8', type: 'mc', prompt: 'Which verb is regular (keeps its last consonant)?', opts: ['씻다 → 씻어요', '짓다 → 지어요', '묻다 → 물어요', '눕다 → 누워요'], skill: 'l31.irr', explain: '씻다 is regular (Lesson 29). 짓다 ㅅ, 묻다 ㄷ, 눕다 ㅂ are irregular.', en: '' },
    /* the review's grammar ladder */
    { id: 'p31.m1', type: 'mc', prompt: '“It’s too expensive and not tasty.”', opts: ['너무 비싸고 맛없어요.', '너무 비싸서 맛없어요.', '너무 비싸도 맛없어요.', '너무 비싸기 전에 맛없어요.'], skill: 'l31.mix', explain: '-고 = and (Lesson 2); 너무 = too (Lesson 1).', en: '' },
    { id: 'p31.m2', type: 'mc', prompt: '“He might be a good person.”', opts: ['좋은 사람일 수도 있어요.', '좋은 사람 같아요.', '좋은 사람이에요.', '좋은 사람은 수도 있어요.'], skill: 'l31.mix', explain: 'Noun + 일 수도 있어요 (Lesson 22). 같아요 = seems (Lesson 8).', en: '' },
    { id: 'p31.m3', type: 'mc', prompt: '“I can only speak a little Korean.”', opts: ['한국어 조금밖에 못해요.', '한국어 조금밖에 해요.', '한국어 밖에 조금 못해요.', '한국어 조금밖에 못해도요.'], skill: 'l31.mix', explain: '밖에 + negative (Lesson 18).', en: '' },
    { id: 'p31.m4', type: 'mc', prompt: '“What will you do after having breakfast?”', opts: ['아침 먹은 다음에 뭐 할 거예요?', '아침 먹는 다음에 뭐 할 거예요?', '아침 먹기 전에 뭐 할 거예요?', '아침 먹은 다음에 뭐 할게요?'], skill: 'l31.mix', explain: '-(으)ㄴ 다음에 (Lesson 19); asking about plans: 할 거예요 (Lesson 6).', en: '' },
    { id: 'p31.m5', type: 'enOpts', prompt: '“피곤해서 못 갈 것 같아요.”', opts: ['I’m tired, so it seems I can’t go.', 'I’m tired, but I’ll go.', 'I was tired, so I didn’t go.', 'Even if I’m tired, I’ll go.'], skill: 'l31.mix', explain: '-아서 (Lesson 7) + -(으)ㄹ 것 같아요 (Lesson 9).', en: '' },
    { id: 'p31.m6', type: 'enOpts', prompt: '“한국어 조금밖에 못해도 괜찮아요.”', opts: ['Even if you can only speak a little Korean, it’s okay.', 'You can only speak a little Korean, so it’s okay.', 'It’s okay to speak only Korean.', 'You speak a little Korean, but it’s not okay.'], skill: 'l31.mix', explain: '밖에 (Lesson 18) + -아/어도 (Lesson 20).', en: '' },
    { id: 'p31.m7', type: 'odd', prompt: 'Which sentence is WRONG?', opts: ['피곤했어서 못 가요.', '피곤해서 못 가요.', '그래도 와야 돼요.', '춤추는 사람 제 친구예요.'], skill: 'l31.mix', explain: 'No past tense before -아서 (Lesson 7).', en: '' },
    { id: 'p31.m8', type: 'mc', prompt: '“Then let’s go somewhere else.”', opts: ['그러면 다른 데 가요.', '그러면 다른 데 갈까요?', '그래도 다른 데 가요.', '그래서 다른 데 갔어요.'], skill: 'l31.mix', explain: '그러면 (Lesson 15) + the polite “let’s” 가요 (Lesson 16).', en: '' },
    { id: 'p31.m9', type: 'enOpts', prompt: '“여섯 시쯤 병원 앞에서 기다릴게요.”', opts: ['I’ll wait in front of the hospital around six.', 'I waited behind the hospital at six.', 'Shall I wait next to the hospital at six?', 'I’ll wait in the hospital for six hours.'], skill: 'l31.mix', explain: '쯤 (L5) · 앞에서 (L3) · -(으)ㄹ게요 (L6).', en: '' },
    /* the review dialogue */
    { id: 'p31.d1', type: 'enOpts', prompt: '“제 사무실 앞에 공원이 있어요.”', opts: ['There is a park in front of my office.', 'There is an office behind the park.', 'My office is in the park.', 'There is a park next to my house.'], skill: 'l31.mix', explain: 'Review dialogue (앞에, Lesson 3).', en: '' },
    { id: 'p31.d2', type: 'enOpts', prompt: '“학교 끝난 다음에 전화할게요.”', opts: ['I’ll call you after school finishes.', 'I’ll call you before school.', 'Call me after school.', 'I called you after school.'], skill: 'l31.mix', explain: 'Review dialogue (-(으)ㄴ 다음에, Lesson 19; -(으)ㄹ게요, Lesson 6).', en: '' },
    { id: 'p31.d3', type: 'enOpts', prompt: '“더 다치기 전에 포기해.” (다치다 = to get hurt, 포기하다 = to give up)', opts: ['Give up before you get hurt more.', 'Don’t give up, even if you get hurt.', 'You got hurt, so give up.', 'Give up after you get hurt.'], skill: 'l31.mix', explain: 'Review dialogue (-기 전에, Lesson 10).', en: '' },
  ],

  vocab: [
    { ko: '공원', en: 'park' }, { ko: '회사', en: 'company' }, { ko: '도서관', en: 'library' }, { ko: '서점', en: 'bookstore' }, { ko: '신발', en: 'shoes' },
    { ko: '자동차', en: 'car' }, { ko: '문', en: 'door' }, { ko: '비', en: 'rain' }, { ko: '우리', en: 'we, us, our' }, { ko: '강아지', en: 'puppy' },
    { ko: '겨울', en: 'winter' }, { ko: '축구', en: 'soccer, football' }, { ko: '부모님', en: 'parents' }, { ko: '편지', en: 'letter' }, { ko: '점심', en: 'lunch' },
    { ko: '냄새', en: 'smell' }, { ko: '선물', en: 'present, gift' }, { ko: '감기', en: 'a cold (illness)' },
    { ko: '걷다', en: 'to walk' }, { ko: '묻다', en: 'to ask' }, { ko: '씻다', en: 'to wash' }, { ko: '벗다', en: 'to take off' }, { ko: '들어오다', en: 'to come in' },
    { ko: '나가다', en: 'to go out' }, { ko: '모으다', en: 'to collect' }, { ko: '받다', en: 'to receive, to get' }, { ko: '들다', en: 'to pick up, to hold' }, { ko: '눕다', en: 'to lie down' },
    { ko: '열다', en: 'to open' }, { ko: '울다', en: 'to cry' }, { ko: '타다', en: 'to ride (a vehicle)' }, { ko: '자르다', en: 'to cut' },
    { ko: '귀엽다', en: 'to be cute' }, { ko: '아름답다', en: 'to be beautiful' }, { ko: '조용하다', en: 'to be quiet' }, { ko: '차갑다', en: 'to be cold (to the touch)' },
    { ko: '싸다', en: 'to be cheap' }, { ko: '배부르다', en: 'to be full (after eating)' }, { ko: '달다', en: 'to be sweet' }, { ko: '괜찮다', en: 'to be okay' },
    { ko: '졸리다', en: 'to be sleepy' }, { ko: '쉽다', en: 'to be easy' }, { ko: '넓다', en: 'to be wide' }, { ko: '좁다', en: 'to be narrow' },
    { ko: '다르다', en: 'to be different' }, { ko: '비슷하다', en: 'to be similar' },
    { ko: '너무', en: 'too (much)' }, { ko: '아마', en: 'maybe' }, { ko: '다시', en: 'again' }, { ko: '열심히', en: 'hard, diligently' }, { ko: '이제', en: 'now (from now on)' }, { ko: '오래', en: 'for a long time' },
    { ko: '앞에', en: 'in front of' }, { ko: '뒤에', en: 'behind' }, { ko: '옆에', en: 'beside, next to' }, { ko: '위에', en: 'over, on top of' }, { ko: '밑에', en: 'under, below' },
    { ko: '학원', en: 'cram school' }, { ko: '학년', en: 'school year' }, { ko: '학기', en: 'semester' }, { ko: '방학', en: 'school vacation' }, { ko: '독학', en: 'self-study' },
    { ko: '화장실', en: 'bathroom' }, { ko: '교실', en: 'classroom' }, { ko: '병실', en: 'hospital room' }, { ko: '미용실', en: 'hair salon' }, { ko: '실내', en: 'indoors' }, { ko: '실외', en: 'outdoors' },
  ],
  /* words never offered as each other's wrong option (opposites are fine; near-synonyms are not) */
  grp: { '들다': 'hold', '받다': 'hold', '아마': 'maybe', '이제': 'now', '다시': 'again', '앞에': 'pos', '뒤에': 'pos', '옆에': 'pos', '위에': 'pos', '밑에': 'pos' },
  /* review sentences first; the rest is filled from the lessons where the word appeared (below) */
  examples: {
    '공원': ['제 사무실 앞에 공원이 있어요.', 'There is a park in front of my office. (Review dialogue)'],
    '축구': ['아침 먹은 다음에 축구하자.', 'Let’s play soccer after having breakfast. (Review grammar)'],
    '앞에': ['여섯 시쯤 병원 앞에서 기다릴게요.', 'I will wait in front of the hospital around 6. (Review grammar)'],
    '뒤에': ['나무 뒤에 숨어 있었어요.', 'I have been hiding behind the tree. (Lesson 3)'],
    '옆에': ['이 박스는 냉장고 옆에 놓을게요.', 'I’ll put this box next to the fridge. (Shift A)'],
    '위에': ['컴퓨터는 책상 위에 있어요.', 'The computer is on top of the desk. (Lesson 3)'],
    '밑에': ['휴대폰은 의자 밑에 있어요.', 'The phone is under the chair. (Lesson 3)'],
    '이제': ['이제 집에 가서 푹 자요.', 'Now go home and get some proper sleep. (Shift A)'],
    '오래': ['오래 기다렸어요?', 'Did you wait long? (app sentence)'],
    '괜찮다': ['한국어 조금밖에 못해도 괜찮아요.', 'Even if you can only speak a little Korean, it’s okay. (Review grammar)'],
    '싸다': ['이 가격이 맞습니까? 너무 쌉니다.', 'Is this price right? It is too cheap. (Shift B)'],
  },
};
/* examples for the remaining review words: the first example the earlier lessons have for the same word */
(() => {
  const G = MM.game[31];
  for (const v of G.vocab) {
    if (G.examples[v.ko]) continue;
    for (let k = 30; k >= 1; k--) { const ex = MM.game[k] && MM.game[k].examples && MM.game[k].examples[v.ko]; if (ex) { G.examples[v.ko] = [ex[0], ex[1].replace(/\s*\(([^)]*)\)\s*$/, '') + ` (Lesson ${k})`]; break; } }
  }
  /* one jamo can be the whole point in a review (갈/간, 실어요/싣어요): no typo leniency in the final chapter */
  for (const sh of Object.values(G.shifts)) { sh.scenes.forEach(s => { s.q.lenient = false; }); sh.cctv.forEach(q => { q.lenient = false; }); }
  G.pool.forEach(q => { q.lenient = false; });
})();

/* ---- src/l31/mnemo_L31.js ---- */
/* GENERATED by tools/mnemo_build.js from mnemo/korean3-mnemo.json. Do not edit by hand. */
MM.mnemo[31] = {"cards":[{"id":"ko-k3-0508","w":"오래","cs":"dlouho; dlouhou dobu","en":"for a long time","p":"o","o":"k","ex":"오래 기다렸어요?","exc":"Čekal jsi dlouho?","m":"Časté pozdravy při shledání: 오래간만이에요 / 오랜만이에요 = Dlouho jsme se neviděli! Používá se také ve vazbě 오래 걸리다 = trvat dlouho."}],"gram":{"id":"ko-k3-g31","w":"복습","en":"Level 3 Review · Final Night","cs":"opakování gramatiky 3. úrovně (Korean 3)","vy":"Souhrnné opakování klíčové gramatiky z celé 3. úrovně učebnice Korean 3. Propojuje spojovací koncovky (-고, -아서/어서, -는데/-(으)ㄴ데, -아/어/여도), vyjadřování budoucnosti a odhadu (-(으)ㄹ 거예요, -(으)ㄹ게요, -(으)ㄹ까요?, -(으)ㄴ/는/(으)ㄹ 것 같아요, -(으)ㄹ 수도 있어요) i přívlastkové tvary sloves a přídavných jmen. Součástí je také procvičení nepravidelných sloves (ㅂ, 르, ㄷ, ㅅ) a přechod mezi zdvořilým stylem 존댓말 a tykáním 반말.","m":"Při opakování sleduj hlavně rozdíly mezi příbuznými vazbami: -고 (neutrální ‚a‘) vs. -아서/어서 (příčina nebo těsná návaznost), -(으)ㄹ 거예요 (pevný plán) vs. -(으)ㄹ게요 (reakce nebo slib posluchači), a -(으)ㄴ데 (pozadí/kontrast) vs. -아/어/여도 (i když).","s":[["너무 비싸고 맛없어요.","Je to moc drahé a nechutná to dobře."],["그러면 다른 데 갈까요?","Tak půjdeme jinam?"],["그러면 다른 데 가요.","Tak pojďme jinam."],["여섯 시쯤 병원 앞에서 기다릴게요.","Počkám před nemocnicí kolem šesté."],["좋은 사람 같아요.","Vypadá to, že je to hodný člověk."],["좋은 사람일 수도 있어요.","Možná je to hodný člověk."],["피곤해서 못 갈 것 같아요.","Jsem unavený, takže myslím, že nebudu moct jít."],["그래도 열두 시 전에 와야 돼요.","Ale stejně musíš přijít před dvanáctou."],["춤추는 사람 제 친구예요.","Ten člověk, co tancuje, je můj kamarád."],["한국어 조금밖에 못해도 괜찮아요.","Nevadí, i když umíš korejsky jen trochu."],["1시간밖에 못 잤어도 안 피곤해요.","I když jsem spal jen hodinu, nejsem unavený."],["아침 먹은 다음에 뭐 할 거예요?","Co budeš dělat po snídani?"],["아침 먹은 다음에 축구하자.","Po snídani si pojďme zahrát fotbal."],["도와요 · 매워요","pomáhám · je to pálivé (nepravidelná slovesa na ㅂ)"],["몰라요 · 빨라요","nevím · je to rychlé (nepravidelná slovesa na 르)"],["실어요 · 지어요","nakládám (nepravidelné ㄷ) · stavím (nepravidelné ㅅ)"],["요즘 날씨가 너무 좋네요.","V poslední době je fakt krásné počasí!"],["저 내일 지민 씨하고 배드민턴 치는데, 같이 해요.","Zítra hraju badminton s Džimin, přidej se k nám."],["학교 끝난 다음에 전화할게요.","Zavolám ti, až mi skončí škola."],["그러면 저는 갈게요.","Tak já už tedy půjdu."],["뭔가 제가 모르는 일이 있었어요?","Stalo se něco, o čem nevím?"],["더 다치기 전에 포기해.","Vzdej to, než se zraníš ještě víc."]]}};
Object.assign(MM.mnRoots, {});

/* ---- src/l31/reads_L31.js ---- */
/* reads_L31.js — Staff Group Chat + Neighborhood Notice Board for the final chapter.
   {form|lemma} marks a word outside Level 3; tapping it shows gloss[lemma]. App-written (⚠ native check in HANDOFF.md).
   Staff group chat: the boss is present → Minji uses 존댓말 (as in L27–L30). */
MM.reads[31] = [
  {
    id: 'l31.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l31.sticker', ko: '“합격!” 스티커', en: '“Passed!” sticker', desc: 'A stamp with a cat’s paw print in the middle. Nobody asked the cat.' },
    lines: [
      { who: 'boss', ko: '여러분! 본사에서 {연락|연락}이 왔어요. 우리 가게 {점검|점검}, {통과했어요|통과하다}!', en: 'Everyone! Head office got in touch. Our store passed the inspection!' },
      { who: 'minji', ko: '와! 축하해요! 다 라면 {덕분이에요|덕분} ㅋㅋ', en: 'Wow! Congratulations! It’s all thanks to Ramyeon lol' },
      { who: 'sua', ko: '저도 기뻐요. 낮에 일하는 것도 정말 재미있어요!', en: 'I’m happy too. Working during the day is really fun too!' },
      { who: 'boss', ko: '그리고 오늘부터 우리 가게에 야간 실장님이 있어요. 다 같이 {박수|박수}!', en: 'And from today our store has a night manager. Everybody, a round of applause!' },
      { who: 'you', ko: '감사합니다! 오늘 밤에도 라면은 제가 볼게요.', en: 'Thank you! I’ll look after Ramyeon tonight too.' },
      { who: 'boss', ko: '파티는 오늘 밤 열두 시쯤이에요. 늦지 마세요!', en: 'The party is tonight around twelve. Don’t be late!' },
    ],
    gloss: { '연락': 'contact, message (연락이 오다 = to hear from someone)', '점검': 'inspection', '통과하다': 'to pass (a test, an inspection)', '덕분': 'thanks to (…덕분이에요 = it’s thanks to…)', '박수': 'applause, clapping' },
    qs: [
      { id: 'r31c.q1', type: 'enOpts', prompt: 'What did head office say?', opts: ['The store passed the inspection.', 'The store has to close.', 'The inspector is coming again.', 'The cat has to leave.'], explain: '우리 가게 점검, 통과했어요!' },
      { id: 'r31c.q2', type: 'enOpts', prompt: 'When is the party?', opts: ['Tonight, around twelve.', 'On Saturday morning.', 'Tomorrow at six.', 'Next month.'], explain: '파티는 오늘 밤 열두 시쯤이에요.' },
      { id: 'r31c.q3', type: 'enOpts', prompt: 'What will you do tonight too?', opts: ['Look after Ramyeon.', 'Go to head office.', 'Clean the roof.', 'Study in the lecture room.'], explain: '오늘 밤에도 라면은 제가 볼게요.' },
    ],
  },
  {
    id: 'l31.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l31.notice', ko: '달빛마트 사진 엽서', en: 'Moonlight Mart postcard', desc: 'The store at dawn under the blue neon moon. A tiny cat is visible on the sofa by the window.' },
    heading: '달빛마트의 달이 다시 {켜졌어요|켜지다}!',
    lines: [
      { ko: '어젯밤에 달빛마트 {지붕|지붕} 위의 달이 다시 {켜졌어요|켜지다}.', en: 'Last night the moon on the roof of Moonlight Mart came on again.' },
      { ko: '이 달은 30년 전에 박 사장님 아버지가 만들었어요.', en: 'Mr. Park’s father made this moon 30 years ago.' },
      { ko: '{오래전에|오래전} 고장 났는데, 사장님하고 야간 직원이 같이 고쳤어요.', en: 'It broke a long time ago, but Mr. Park and the night staff member fixed it together.' },
      { ko: '이제 밤에도 길이 {밝아서|밝다} 좋아요.', en: 'Now the street is bright at night too, which is nice.' },
      { ko: '위층 할머니가 말했어요. “{옛날|옛날} 같네!”', en: 'Grandma upstairs said: “It’s like the old days!”' },
      { ko: '이번 주 토요일 저녁에 마트 앞에서 작은 동네 파티를 해요. 누구나 오세요!', en: 'This Saturday evening there is a small neighborhood party in front of the store. Everyone is welcome!' },
      { ko: '고양이 라면도 올 수도 있어요. 그런데 아마 소파에서 잘 거예요.', en: 'Ramyeon the cat might come too. But he will probably sleep on the sofa.' },
    ],
    gloss: { '오래전': 'a long time ago (오래 + 전)', '켜지다': 'to come on, to light up (a lamp, a sign)', '지붕': 'roof', '밝다': 'to be bright', '옛날': 'the old days, long ago' },
    qs: [
      { id: 'r31b.q1', type: 'enOpts', prompt: 'Who made the moon?', opts: ['Mr. Park’s father, 30 years ago.', 'Mr. Park, last year.', 'The night staff, yesterday.', 'Grandma upstairs.'], explain: '이 달은 30년 전에 박 사장님 아버지가 만들었어요.' },
      { id: 'r31b.q2', type: 'enOpts', prompt: 'Who fixed it?', opts: ['Mr. Park and the night staff member.', 'Head office.', 'Mr. Kim.', 'The neighborhood.'], explain: '사장님하고 야간 직원이 같이 고쳤어요.' },
      { id: 'r31b.q3', type: 'enOpts', prompt: 'Where will Ramyeon probably be during the party?', opts: ['Asleep on the sofa.', 'At the party, dancing.', 'On the roof.', 'At head office.'], explain: '아마 소파에서 잘 거예요. (아마, -(으)ㄹ 거예요)' },
    ],
  },
];

/* ---- src/l31/textbook_L31.js ---- */
/* textbook_L31.js — Level 3 Review (“Review What You’ve Learned in Level 3”, Korean 3 website: Dialogue / Vocabulary / Grammar)
   = the final chapter. Tab 1 “Review”: three recordings in one pinned player (switcher), each part as an exercise block.
   Source: the saved Korean 3 review page (Korean script + English translation, vocabulary list, grammar exercises with answers and
   lesson numbers). Romanization: none on the page. Clips measured with silence detection + offline ASR (sherpa-onnx Whisper base,
   Korean and English passes):
   - dialogue.mp3 (1:38): every line has its own clip; the first three lines and the last four were split at energy dips
     (one long run of speech with music under it) and checked by ASR.
   - vocab.mp3 (12:42): English prompt (“How do you say…”), then the Korean word read 3 times; a clip = the three readings.
     강아지, 병실, 미용실: only two readings were found (the third is quiet or merged); 공원 starts after a short English “Korean”.
   - grammar.mp3 (11:45): English prompt, a pause to answer, then the Korean answer read 2–3 times; a clip = the readings.
   The page prints 좋은 사람일수도 있어요 (no space) and 춤추는 사람 제 친구예요 (no particle): both accepted, with notes.
   Vocabulary tags (“L6”) = the first app lesson whose vocabulary has the word (positions: L3); 오래 is in no lesson list. */
(() => {
  MM.lessons[31] = {
    n: 31, ko: '복습', en: 'Level 3 Review · Final Night', review: true,
    tabs: ['Review', 'Final Exam', 'Moonlight Mart'],
    pages: { tb: 'online', tbKey: '—', wb: '—', wbKey: '—' },
    wbEyebrow: 'Final Exam · Lessons 1–30',
    wbSrc: 'Questions: the app’s Lessons 1–30 · dictation: Essential Review – Dialogue',
  };
  const V = (id, en, ans, tag, from, to, more = {}) => Object.assign({ id, q: en, ans: [].concat(ans), tag: tag ? 'L' + tag : null, clip: from != null ? ['voc', from, to] : null, skill: 'l31.vocab', ph: 'Korean word' }, more);
  const dictForm = { re: '요$', note: 'Write the dictionary form (…다), as in the list.' };
  const Gr = (id, en, ans, tag, skill, from, to, more = {}) => Object.assign({ id, q: en, ans: [].concat(ans), tag: tag ? 'L' + tag : null, clip: from != null ? ['gram', from, to] : null, skill, lenient: false, ph: 'Korean' }, more);
  const D = (id, sp, ko, en, from, to) => ({ id, sp, ko, en, clip: ['dlg', from, to] });

  MM.textbook[31] = {
    blocks: [
      { t: 'h', eyebrow: 'Level 3 · Review', text: 'Review · What you’ve learned in Level 3', ko: '복습' },
      { t: 'p', text: 'The last part of Level 3 is the review lesson of Korean 3: a dialogue, a vocabulary list and grammar exercises, each with its own recording. Switch between the three recordings at the top of the page.' },
      { t: 'note', label: 'How this page works', text: 'Dialogue: listen first, answer the four questions, then the script opens. Vocabulary and Grammar: read the English, type the Korean, and only then press ▶ to hear it (or tap “Show answer”). The small tag (L7) tells you which lesson to go back to.' },

      /* ---------- Dialogue ---------- */
      { t: 'h2', text: 'Dialogue · Test your Korean' },
      { t: 'p', text: 'This dialogue is based on the grammar points introduced in the Korean 3 lessons. First listen to the dialogue without looking at the Korean transcript, and then check how much you could understand by comparing your understanding with the original text as well as the translation.' },
      { t: 'track', id: 'dlg', label: 'Dialogue · whole recording (1:38)' },
      { t: 'exercises', id: 'dq', title: 'Listening check', help: 'Answer from what you heard. (App questions, not from Korean 3.)', src: 'Questions: app-written, about the Korean 3 review dialogue.', items: [
        { id: 'dq1', q: 'Where does Minho want to play badminton?', choices: ['Next to the library.', 'In the park in front of his office.', 'At Su-ah’s school.', 'In a park behind the hospital.'], right: 'In the park in front of his office.', choicesEn: true, ans: ['-'], skill: 'l3.word', why: '제 사무실 앞에 공원이 있어요. (앞에, Lesson 3)' },
        { id: 'dq2', q: 'Why can’t Su-ah come at 10?', choices: ['She is too tired.', 'She has a cold.', 'She has to go to school for a while in the morning.', 'She doesn’t like badminton.'], right: 'She has to go to school for a while in the morning.', choicesEn: true, ans: ['-'], skill: 'l19.form', why: '아침에 잠깐 학교에 가야 돼요. 학교 끝난 다음에 전화할게요. (다음에, Lesson 19)' },
        { id: 'dq3', q: 'What does Jimin do when she hears Su-ah is coming?', choices: ['She says she is leaving.', 'She calls Su-ah.', 'She invites more friends.', 'She buys drinks for everyone.'], right: 'She says she is leaving.', choicesEn: true, ans: ['-'], skill: 'l15.usage', why: '그러면 저는 갈게요. (그러면, Lesson 15 · -(으)ㄹ게요, Lesson 6)' },
        { id: 'dq4', q: 'What are Jimin and Su-ah about to fight over?', choices: ['The badminton court.', 'A phone.', 'Minho.', 'The time of the game.'], right: 'Minho.', choicesEn: true, ans: ['-'], skill: 'l27.when', why: '김민호는 내 거야. 건드리지 마! — and the two switch to 반말 (Lesson 27).' },
      ] },
      { t: 'dialogue', id: 'dlg', gate: 'dq', track: 'dlg', trackLabel: 'Dialogue · whole recording', title: 'Korean script + English translation', lines: [
        { dir: '(At a park, Minho and Su-ah are walking.)' },
        D('d1', '민호', '요즘 날씨가 너무 좋네요.', 'The weather is so good these days.', 3.1, 5.6),
        D('d2', '수아', '네, 날씨가 정말 좋은 것 같아요.', 'Yes, I think the weather is really good.', 5.5, 8.3),
        D('d3', '민호', '내일 바빠요? 저 내일 지민 씨하고 배드민턴 치는데, 같이 해요.', 'Are you busy tomorrow? I’m playing badminton with Jimin tomorrow. Join us.', 8.4, 14.25),
        D('d4', '수아', '내일요? 어디에서요?', 'Tomorrow? Where?', 14.2, 16.25),
        D('d5', '민호', '제 사무실 앞에 공원이 있어요.', 'There is a park in front of my office.', 16.2, 18.85),
        D('d6', '수아', '몇 시에요?', 'At what time?', 18.8, 20.05),
        D('d7', '민호', '아침 10시 괜찮아요?', 'Is 10 in the morning okay?', 20.0, 22.05),
        D('d8', '수아', '아... 아침에 잠깐 학교에 가야 돼요. 학교 끝난 다음에 전화할게요.', 'Oh... I have to go to school for a little while in the morning. I will call you after I finish school.', 22.0, 27.55),
        D('d9', '민호', '좋아요. 그러면 내일 봐요!', 'Good. Then I will see you tomorrow!', 27.6, 31.15),
        { dir: '(Next day, they are playing badminton together, when the phone rings.)' },
        D('d10', '민호', '(따르릉) 여보세요?', 'Hello?', 36.3, 40.1),
        D('d11', '수아', '민호 씨, 저 수아예요. 지금 배드민턴 치고 있어요?', 'Minho, this is Su-ah. Are you playing badminton now?', 40.3, 44.5),
        D('d12', '민호', '네, 지민 씨하고 배드민턴 치고 있는데, 수아 씨는 언제 와요?', 'Yes, I’m playing badminton with Jimin now. When are you coming, Su-ah?', 44.8, 48.95),
        D('d13', '수아', '저 지금 학교 끝났어요. 11시쯤 갈게요.', 'I just finished school. I will be there around 11.', 49.3, 52.3),
        D('d14', '민호', '좋아요. 11시쯤에 봐요.', 'Good. I will see you around 11.', 52.35, 54.25),
        { dir: '(After Minho hangs up)' },
        D('d15', '지민', '누구예요?', 'Who is that?', 54.6, 55.6),
        D('d16', '민호', '수아 씨예요. 여기로 올 거예요.', 'It’s Su-ah. She’ll come here.', 56.1, 58.3),
        D('d17', '지민', '수아 씨요? 여기에 왜 와요?', 'Su-ah? Why will she come here?', 58.6, 61.05),
        D('d18', '민호', '아... 제가 초대했어요.', 'Oh... I invited her.', 61.5, 64.05),
        D('d19', '지민', '뭐예요? 그러면 저는 갈게요. 재밌었어요.', 'What? Then, I’m leaving. It was fun.', 64.5, 68.8),
        D('d20', '민호', '지민 씨, 왜요? 뭔가 제가 모르는 일이 있었어요?', 'Jimin, why? Did something happen that I don’t know about?', 69.1, 73.25),
        D('d21', '지민', '물어보지 마세요.', 'Don’t ask me.', 73.7, 75.1),
        { dir: '(Jimin runs away from Minho. A couple of hours later, in a windy field, Jimin and Su-ah are staring at each other, getting ready to engage in a fist fight.)' },
        D('d22', '지민', '이수아, 김민호는 내 거야. 건드리지 마!', 'Su-ah Lee. Minho Kim is mine. Don’t touch him!', 78.7, 84.15),
        D('d23', '수아', '그건 내가 결정할 거야.', 'I will decide that myself!', 84.1, 89.25),
        D('d24', '지민', '더 다치기 전에 포기해. 만약 지금 포기하면, 용서해 줄게.', 'Give up before you get hurt even more. If you give up now, I will forgive you.', 89.2, 94.45),
        D('d25', '수아', '나 포기 안 할 거야!', 'I’m not giving up!', 94.4, 96.4),
      ] },
      { t: 'note', label: 'Level 3 in this dialogue', text: '좋네요 -네요 (L25) · 좋은 것 같아요 (L9) · 치는데 / 치고 있는데 -는데 (L21) · 사무실 앞에 (L3) · 끝난 다음에 (L19) · 전화할게요, 갈게요 -(으)ㄹ게요 (L6) · 그러면 (L15) · 11시쯤 (L5) · 올 거예요, 결정할 거야 (L6) · 다치기 전에 (L10) · the switch to 반말 at the end (L27).' },
      { t: 'note', label: 'App note: words from outside Level 3', text: '배드민턴(을) 치다 = to play badminton · 가야 돼요 = I have to go (-아/어야 되다, Level 2) · 잠깐 = for a moment · 따르릉 = ring-ring · 여보세요 = hello (on the phone) · 초대하다 = to invite · 재밌었어요 = short for 재미있었어요 · 뭔가 = something · 물어보다 = to ask · 내 거 = mine · 건드리다 = to touch, to mess with · 결정하다 = to decide · 다치다 = to get hurt · 포기하다 = to give up · 만약 = if · 용서하다 = to forgive · 해 줄게 = I will (do it for you). 몇 시에요? here = 몇 시 + 에 + 요: “At what time?”' },

      /* ---------- Vocabulary ---------- */
      { t: 'h2', text: 'Vocabulary' },
      { t: 'p', text: 'This vocabulary list consists of key vocabulary words from the Korean 3 lessons. First check how much you can remember without looking at the Korean words below, and review the vocabulary list while listening to the audio.' },
      { t: 'track', id: 'voc', from: 23.6, to: 34.5, label: 'Vocabulary · start of the recording' },
      { t: 'exercises', id: 'vn', title: 'Nouns', reveal: true, help: 'Type the Korean word. ▶ after you answer plays it (read three times).', src: 'Word list: Korean 3 Essential Review – Vocabulary.', items: [
        V('vn1', 'park', '공원', 6, 40.5, 44.2),
        V('vn2', 'company', '회사', 12, 48.9, 52.5),
        V('vn3', 'library', '도서관', 5, 58.1, 62.4),
        V('vn4', 'bookstore', '서점', 2, 66.85, 70.4, { soft: [{ p: '책방', note: 'Accepted: 책방 is also a bookstore (a cosier, more everyday word). The list: 서점.' }] }),
        V('vn5', 'shoes', '신발', 1, 77.0, 81.8),
        V('vn6', 'car', '자동차', 3, 87.7, 91.7, { soft: [{ p: '차', note: 'Accepted: 차 is the everyday short word. The list: 자동차.' }] }),
        V('vn7', 'door', '문', 3, 95.2, 98.25),
        V('vn8', 'rain', '비', 4, 102.9, 106.05),
        V('vn9', 'we, us, our', '우리', 4, 112.4, 115.5, { soft: [{ p: '저희', note: 'Accepted: 저희 is the humble “we/our”. The list: 우리.' }] }),
        V('vn10', 'puppy', '강아지', 3, 121.1, 124.8, { diag: [{ p: '개', note: '개 = dog. A puppy (or any cute small dog) = 강아지.' }] }),
        V('vn11', 'winter', '겨울', 11, 130.15, 133.2),
        V('vn12', 'soccer, football', '축구', 12, 139.85, 143.65),
        V('vn13', 'parents', '부모님', 17, 149.65, 154.35, { soft: [{ p: '부모', note: 'Accepted. With 님 it is the polite way to talk about parents: 부모님.' }] }),
        V('vn14', 'letter', '편지', 17, 160.8, 164.2),
        V('vn15', 'lunch', '점심', 1, 168.65, 172.2, { soft: [{ p: '점심밥', note: 'Accepted (lunch meal). The list: 점심.' }] }),
        V('vn16', 'smell', '냄새', 20, 179.2, 182.7),
        V('vn17', 'present, gift', '선물', 17, 188.35, 191.6),
        V('vn18', 'cold (the illness)', '감기', 29, 200.55, 204.1, { diag: [{ p: '(춥다|추워요|차갑다)', note: 'That is cold weather / cold to the touch. Catching a cold = 감기.' }] }),
      ] },
      { t: 'exercises', id: 'vv', title: 'Verbs', reveal: true, help: 'Dictionary form (…다).', src: 'Word list: Korean 3 Essential Review – Vocabulary.', items: [
        V('vv1', 'to walk', '걷다', 26, 224.3, 227.75, { diag: [dictForm] }),
        V('vv2', 'to ask', '묻다', 26, 232.95, 236.2, { soft: [{ p: '물어보다', note: 'Accepted (to ask, used in the review dialogue). The list: 묻다.' }], diag: [dictForm] }),
        V('vv3', 'to wash', '씻다', 2, 240.05, 243.5, { diag: [dictForm] }),
        V('vv4', 'to take off (clothes, shoes)', '벗다', 29, 250.75, 253.85, { diag: [dictForm] }),
        V('vv5', 'to come in', '들어오다', 10, 259.5, 262.9, { diag: [{ p: '들어가다', note: '들어가다 = to go in (away from the speaker). To come in = 들어오다.' }, dictForm] }),
        V('vv6', 'to go out', '나가다', 6, 267.05, 270.6, { diag: [{ p: '나오다', note: '나오다 = to come out. To go out = 나가다.' }, dictForm] }),
        V('vv7', 'to collect', '모으다', 7, 277.7, 281.2, { diag: [dictForm] }),
        V('vv8', 'to receive, to get', '받다', 17, 286.2, 289.65, { diag: [dictForm] }),
        V('vv9', 'to pick up, to hold', '들다', 16, 294.25, 297.6, { diag: [dictForm] }),
        V('vv10', 'to lie down', '눕다', 11, 303.3, 306.75, { diag: [dictForm] }),
        V('vv11', 'to open', '열다', 10, 311.4, 314.7, { diag: [dictForm] }),
        V('vv12', 'to cry', '울다', 20, 319.25, 322.95, { diag: [dictForm] }),
        V('vv13', 'to ride (a vehicle), to get in (an elevator)', '타다', 19, 330.1, 333.2, { diag: [dictForm] }),
        V('vv14', 'to cut', '자르다', 24, 338.1, 341.9, { diag: [dictForm] }),
      ] },
      { t: 'exercises', id: 'vd', title: 'Descriptive verbs', reveal: true, help: 'Dictionary form (…다).', src: 'Word list: Korean 3 Essential Review – Vocabulary.', items: [
        V('vd1', 'to be cute', '귀엽다', 11, 351.0, 354.75, { diag: [dictForm] }),
        V('vd2', 'to be beautiful', '아름답다', 1, 361.5, 365.85, { soft: [{ p: '예쁘다', note: 'Accepted: 예쁘다 = to be pretty. The list: 아름답다 (beautiful).' }], diag: [dictForm] }),
        V('vd3', 'to be quiet', '조용하다', 13, 370.65, 375.0, { diag: [dictForm] }),
        V('vd4', 'to be cold (to the touch, not the weather)', '차갑다', 13, 379.9, 383.65, { diag: [{ p: '춥다', note: '춥다 = cold weather (I feel cold). Cold to the touch (water, a drink) = 차갑다.' }, dictForm] }),
        V('vd5', 'to be cheap', '싸다', 2, 395.15, 398.3, { diag: [dictForm] }),
        V('vd6', 'to be full (after eating)', '배부르다', 2, 405.9, 409.65, { diag: [dictForm] }),
        V('vd7', 'to be sweet', '달다', 13, 414.65, 417.9, { diag: [dictForm] }),
        V('vd8', 'to be okay', '괜찮다', 9, 423.35, 427.25, { diag: [dictForm] }),
        V('vd9', 'to be sleepy', '졸리다', 1, 432.8, 436.7, { diag: [dictForm] }),
        V('vd10', 'to be easy', '쉽다', 1, 441.2, 444.9, { diag: [dictForm] }),
        V('vd11', 'to be wide', '넓다', 11, 450.0, 453.8, { diag: [dictForm] }),
        V('vd12', 'to be narrow', '좁다', 11, 458.85, 462.4, { diag: [dictForm] }),
        V('vd13', 'to be different', '다르다', 24, 468.4, 471.8, { diag: [dictForm] }),
        V('vd14', 'to be similar', '비슷하다', 7, 476.7, 480.7, { diag: [{ p: '같다', note: '같다 = to be the same. Similar = 비슷하다 (Lesson 8).' }, dictForm] }),
      ] },
      { t: 'exercises', id: 'va', title: 'Adverbs', reveal: true, src: 'Word list: Korean 3 Essential Review – Vocabulary.', items: [
        V('va1', 'too (excessively)', '너무', 1, 493.0, 496.55),
        V('va2', 'maybe', '아마', 9, 502.3, 505.65, { soft: [{ p: '아마도', note: 'Accepted: the recording says 아마도 is the same thing.' }] }),
        V('va3', 'again', '다시', 4, 514.65, 518.1, { soft: [{ p: '또', note: 'Accepted: 또 = again, once more. The list: 다시.' }] }),
        V('va4', 'hard (diligently, as in working hard)', '열심히', 7, 527.0, 530.75, { diag: [{ p: '(어렵다|어려워요)', note: '어렵다 = hard as in difficult. Working hard (diligently) = 열심히.' }] }),
        V('va5', 'now (showing a change: from now on)', '이제', 15, 538.5, 542.45, { soft: [{ p: '지금', note: 'Accepted: 지금 = now, at this moment. The recording means 이제: now (from now on, a change).' }] }),
        V('va6', 'for a long time', '오래', null, 547.2, 550.3),
      ] },
      { t: 'exercises', id: 'vp', title: 'Position', reveal: true, help: 'The noun + position + -에 (Lesson 3).', src: 'Word list: Korean 3 Essential Review – Vocabulary.', items: [
        V('vp1', 'in front of', '앞에', 3, 563.0, 566.75, { soft: [{ p: '앞', note: 'Accepted. The list writes it with -에: 앞에.' }] }),
        V('vp2', 'behind', '뒤에', 3, 570.7, 573.7, { soft: [{ p: '뒤', note: 'Accepted. The list: 뒤에.' }] }),
        V('vp3', 'beside, next to', '옆에', 3, 578.9, 582.1, { soft: [{ p: '옆', note: 'Accepted. The list: 옆에.' }] }),
        V('vp4', 'over, on top of', '위에', 3, 588.05, 591.0, { soft: [{ p: '위', note: 'Accepted. The list: 위에.' }] }),
        V('vp5', 'under, below', '밑에', 3, 595.45, 598.95, { soft: [{ p: '(밑|아래에|아래)', note: 'Accepted: 아래(에) also means below. The list: 밑에.' }] }),
      ] },
      { t: 'exercises', id: 'vw', title: 'Word Builder: 학 (學) and 실 (室)', reveal: true, src: 'Word list: Korean 3 Essential Review – Vocabulary.', items: [
        V('vw1', '학 · cram school', '학원', 23, 625.1, 628.3),
        V('vw2', '학 · school year', '학년', 23, 635.1, 638.5),
        V('vw3', '학 · semester', '학기', 23, 642.7, 646.0),
        V('vw4', '학 · school vacation', '방학', 23, 650.1, 653.5),
        V('vw5', '학 · self-study', '독학', 23, 657.8, 661.0),
        V('vw6', '실 · bathroom', '화장실', 30, 691.5, 694.8),
        V('vw7', '실 · classroom', '교실', 30, 703.7, 707.25, { soft: [{ p: '강의실', note: 'Accepted: a lecture room (university). The list: 교실.' }] }),
        V('vw8', '실 · hospital room', '병실', 30, 709.6, 714.3, { diag: [{ p: '병원', note: '병원 = hospital. The patient’s room = 병 + 실 = 병실.' }] }),
        V('vw9', '실 · hair salon', '미용실', 30, 718.8, 721.95),
        V('vw10', '실 · indoors', '실내', 30, 727.05, 730.6, { diag: [{ p: '실외', note: '실외 = outdoors. Indoors = 실내 (내 = inside).' }] }),
        V('vw11', '실 · outdoors', '실외', 30, 734.1, 737.65, { diag: [{ p: '실내', note: '실내 = indoors. Outdoors = 실외 (외 = outside).' }] }),
      ] },

      /* ---------- Grammar ---------- */
      { t: 'h2', text: 'Grammar' },
      { t: 'p', text: 'These phrases and sentences are made with the Korean 3 grammar points. Check how much of the main grammar points from Level 3 you can remember and try to answer the questions in the audio track.' },
      { t: 'track', id: 'gram', from: 34.4, to: 41.1, label: 'Grammar · how the recording starts' },
      { t: 'exercises', id: 'gr', title: 'Grammar ladder', reveal: true, help: 'Each sentence builds on the one before. Type it, then ▶ to hear the answer.', src: 'Answers: Korean 3 Essential Review – Grammar (with the lesson numbers it prints).', items: [
        Gr('g1', 'It’s expensive.', '비싸요', null, 'l31.mix', 44.0, 48.0),
        Gr('g2', 'It’s not tasty.', '맛(|이 )없어요', null, 'l31.mix', 52.9, 57.3),
        Gr('g3', 'It’s expensive and not tasty.', '비싸고 맛(|이 )없어요', 2, 'l2.form', 69.5, 76.1,
          { diag: [{ p: '비싸서 맛(|이 )없어요', note: '-아서 = so, because (L7). Just “and” = -고 (L2): 비싸고 맛없어요.' }] }),
        Gr('g4', 'It’s too expensive and not tasty.', '너무 비싸고 맛(|이 )없어요', 1, 'l1.form', 87.0, 92.45),
        Gr('g5', 'Then shall we go somewhere else?', ['(그러면|그럼) 다른 데 갈까요', '(그러면|그럼) 다른 (데에|곳에) 갈까요'], 15, 'l15.form', 104.5, 111.65,
          { diag: [{ p: '(그러면|그럼) 다른 데 가요', note: 'That is “let’s go” (L16). “Shall we…?” = -(으)ㄹ까요 (L4): 갈까요?' }, { p: '그래도 다른 데 갈까요', note: '그래도 = but still (L12). “Then, in that case” = 그러면 / 그럼 (L15).' }], after: 'Lesson 4 (-(으)ㄹ까요) + Lesson 15 (그러면).' }),
        Gr('g6', 'Then let’s go somewhere else.', ['(그러면|그럼) 다른 데 가요', '(그러면|그럼) 다른 (데에|곳에) 가요'], 16, 'l16.form', 121.6, 128.65,
          { soft: [{ p: '(그러면|그럼) 다른 데 가자', note: 'Correct in 반말 (L28). The key uses the polite “let’s”: 가요 (L16).' }], diag: [{ p: '(그러면|그럼) 다른 데 갈까요', note: 'That asks “shall we?”. “Let’s” = 가요 (L16).' }] }),
        Gr('g7', 'in front of the hospital', '병원 앞에서', 3, 'l3.word', 150.2, 155.35,
          { hint: 'hospital = «병원»', soft: [{ p: '병원 앞(에|)', note: 'Accepted. The key writes 병원 앞에서, because the next sentence is about waiting (an action): -에서 (L3).' }] }),
        Gr('g8', 'I will wait.', '기다릴게요', 6, 'l6.form', 161.0, 165.5,
          { soft: [{ p: '기다릴 거예요', note: 'Correct Korean, but the key uses -(으)ㄹ게요: you are telling the other person, reacting to them (the recording explains this, L6).' }], diag: [{ p: '기다릴께요', note: 'Spelled 게, not 께 (L6): 기다릴게요.' }] }),
        Gr('g9', 'I will wait in front of the hospital.', '병원 앞에서 기다릴게요', 6, 'l6.form', 174.2, 179.15,
          { soft: [{ p: '병원 앞에서 기다릴 거예요', note: 'Correct, but the key uses 기다릴게요 (L6).' }], diag: [{ p: '병원 앞에 기다릴게요', note: 'Waiting is an action, so 앞에서 (L3).' }] }),
        Gr('g10', 'I will wait in front of the hospital around 6 o’clock.', ['(여섯|6) 시쯤 병원 앞에서 기다릴게요', '병원 앞에서 (여섯|6) 시쯤 기다릴게요', '(여섯|6) 시쯤에 병원 앞에서 기다릴게요', '병원 앞에서 (여섯|6) 시쯤에 기다릴게요'], 5, 'l5.form', 207.4, 214.75,
          { diag: [{ re: '육 ?시', note: 'Hours use native numbers: 여섯 시 (L5).' }, { p: '쯤 여섯 시 병원 앞에서 기다릴게요', note: '쯤 goes after the number: 여섯 시쯤 (L5).' }] }),
        Gr('g11', 'He is a good person.', '좋은 사람이에요', 13, 'l13.form', 235.7, 238.9,
          { hint: 'A good person = «좋은 사람» (Lesson 13)', soft: [{ p: '(그 사람은|그 사람이|그는) 좋은 사람이에요', note: 'Accepted. Korean usually leaves “he” out: 좋은 사람이에요.' }], diag: [{ p: '좋은 사람예요', note: '사람 ends in a consonant: 사람이에요.' }, { p: '좋는 사람이에요', note: '좋다 is a descriptive verb: 좋은 (L13).' }] }),
        Gr('g12', 'He seems to be a good person.', '좋은 사람 같아요', 8, 'l8.like', 252.7, 258.6,
          { soft: [{ p: '(그 사람은|그는) 좋은 사람 같아요', note: 'Accepted. Korean usually leaves “he” out: 좋은 사람 같아요.' }, { p: '좋은 사람인 것 같아요', note: 'Also right (-ㄴ 것 같아요, L9). The key: 좋은 사람 같아요 (L8).' }] }),
        Gr('g13', 'He might be a good person.', '좋은 사람일 수도 있어요', 22, 'l22.form', 267.7, 274.4,
          { soft: [{ p: '(그 사람은|그는) 좋은 사람일 수도 있어요', note: 'Accepted. Korean usually leaves “he” out: 좋은 사람일 수도 있어요.' }], diag: [{ p: '좋은 사람 수도 있어요', note: 'After a noun: noun + 일 수도 있어요 (L22).' }], after: 'The Korean 3 page prints 좋은 사람일수도 있어요 without the space; Lesson 22 writes 일 수도. Both are accepted.' }),
        Gr('g14', 'I am tired, so I can’t go.', '피곤해서 못 가요', 7, 'l7.form', 317.65, 323.5,
          { hint: 'I am tired. So I can’t go. = «피곤해요. 그래서 못 가요.»', diag: [{ p: '피곤했어서 못 가요', note: 'No past tense before -아서; the tense goes on the last verb (L7).' }, { p: '피곤하고 못 가요', note: '-고 just says “and” (L2). “So” = 피곤해서 (L7).' }, { p: '피곤해요 그래서 못 가요', note: 'Make it one sentence with -아/어서 (L7): 피곤해서 못 가요.' }] }),
        Gr('g15', 'I am tired, so it seems like I can’t go.', '피곤해서 못 갈 것 같아요', 9, 'l9.tense', 332.6, 340.6,
          { diag: [{ p: '피곤해서 못 가는 것 같아요', note: 'A guess about what will happen: 갈 것 같아요 (L9). 가는 것 같아요 = it seems I’m (not) going now.' }, { p: '피곤해서 못 간 것 같아요', note: '간 것 같아요 = it seems I didn’t go (past). The future guess: 갈 것 같아요 (L9).' }] }),
        Gr('g16', 'But still, you have to come.', '그래도 와야 (돼요|해요)', 12, 'l12.form', 356.6, 362.0,
          { diag: [{ p: '그래서 와야 (돼요|해요)', note: '그래서 = so. “But still” = 그래도 (L12).' }] }),
        Gr('g17', 'But still, you have to come before 12 o’clock.', '그래도 (열두|12) 시 전에 와야 (돼요|해요)', 10, 'l10.noun', 373.3, 381.1,
          { diag: [{ re: '십이 ?시', note: 'Hours use native numbers: 열두 시 (L5).' }, { p: '그래도 (열두|12) 시 전 와야 (돼요|해요)', note: 'Noun + 전에 (L10): 열두 시 전에.' }] }),
        Gr('g18', '(the/a) person who dances', '춤추는 사람', 14, 'l14.form', 403.65, 407.1,
          { hint: 'to dance = «춤추다»', diag: [{ p: '춤춘 사람', note: '춤춘 사람 = the person who danced. Now: 춤추는 (L14).' }, { p: '춤출 사람', note: '춤출 사람 = the person who will dance. Now: 춤추는 (L14).' }] }),
        Gr('g19', 'The person who is dancing is my friend.', ['춤추는 사람(이|은|) 제 친구예요', '지금 춤추는 사람(이|은|) 제 친구예요'], 14, 'l14.form', 418.45, 426.85,
          { diag: [{ p: '춤추는 사람(이|은|) 제 친구이에요', note: '친구 ends in a vowel: 친구예요.' }, { p: '춤춘 사람(이|은|) 제 친구예요', note: 'Is dancing (now) = 춤추는 (L14).' }], after: 'The key leaves out the particle (춤추는 사람 제 친구예요), as people often do when speaking; 춤추는 사람이 / 춤추는 사람은 is also right.' }),
        Gr('g20', 'I can only speak a little bit of Korean.', '(한국어|한국말)(를|) 조금밖에 못해요', 18, 'l18.form', 443.8, 451.65,
          { soft: [{ p: '(한국어|한국말)(를|) 조금만 할 수 있어요', note: 'Also right: 만 + a positive verb. The lesson pair here is 밖에 + negative (L18): 조금밖에 못해요.' }], diag: [{ re: '밖에 (해요|할 수 있어요)$', note: '밖에 needs a negative (L18): 조금밖에 못해요.' }] }),
        Gr('g21', 'Even if you can only speak a little bit of Korean, it’s okay.', '(한국어|한국말)(를|) 조금밖에 못해도 괜찮아요', 20, 'l20.form', 470.3, 477.35,
          { diag: [{ p: '(한국어|한국말)(를|) 조금밖에 못해서 괜찮아요', note: '-아서 = so. Even if = -아/어/여도 (L20): 못해도.' }] }),
        Gr('g22', 'I slept only an hour.', '(1|한) 시간밖에 못 잤어요', 18, 'l18.form', 487.5, 492.15,
          { soft: [{ p: '(1|한) 시간밖에 안 잤어요', note: 'Correct: 안 = I chose not to sleep more. The key: 못 잤어요 (I couldn’t).' }], diag: [{ p: '(1|한) 시간밖에 잤어요', note: '밖에 needs a negative (L18): 못 잤어요.' }] }),
        Gr('g23', 'Even though I slept only an hour, I’m not tired.', ['(1|한) 시간밖에 못 잤어도 안 피곤해요', '(1|한) 시간밖에 못 잤어도 피곤하지 않아요'], 20, 'l20.form', 505.1, 511.85,
          { soft: [{ p: '(1|한) 시간밖에 못 자도 안 피곤해요', note: 'Also natural. For a finished past fact the key uses 잤어도 (L20).' }] }),
        Gr('g24', 'What will you do?', '뭐 할 거예요', 6, 'l6.usage', 526.8, 531.6,
          { diag: [{ p: '뭐 할게요', note: '-(으)ㄹ게요 is only for your own promise, never for asking someone (L6).' }, { p: '뭐 할 거에요', note: 'Spelled 거예요 (L6).' }] }),
        Gr('g25', 'What will you do after having breakfast?', '아침(을|) 먹은 다음에 뭐 할 거예요', 19, 'l19.form', 545.3, 551.3,
          { soft: [{ p: '아침(을|) 먹은 후에 뭐 할 거예요', note: 'Also right (후에, L19). The key: 먹은 다음에.' }], diag: [{ p: '아침(을|) 먹는 다음에 뭐 할 거예요', note: '다음에 takes the past form: 먹은 다음에 (L19).' }] }),
        Gr('g26', 'Let’s play soccer after having breakfast.', ['아침(을|) 먹은 다음에 축구하자', '아침(을|) 먹은 다음에 축구(를|) 하자'], 28, 'l28.form', 562.3, 567.75,
          { soft: [{ p: '아침(을|) 먹은 다음에 축구(를|) 해요', note: 'Right in 존댓말 (L16). The key uses 반말: 축구하자 (L28).' }], diag: [{ p: '아침(을|) 먹은 다음에 축구해자', note: '-자 goes straight on the stem: 하 + 자 = 하자 (L28).' }] }),
        Gr('g27', 'I help.', '도와요', 11, 'l11.form', 590.5, 593.1,
          { hint: 'to help = «돕다» (present tense)', diag: [{ p: '돕아요', note: 'ㅂ irregular (L11): ㅂ → 우, and 돕다 takes 와: 도와요.' }, { p: '도워요', note: '돕다 (and 곱다) take 와, not 워: 도와요 (L11).' }] }),
        Gr('g28', 'It’s spicy.', '매워요', 11, 'l11.form', 607.0, 609.45,
          { hint: 'to be spicy = «맵다»', diag: [{ p: '맵아요', note: 'ㅂ irregular (L11): 맵 → 매우 + 어요 = 매워요.' }, { p: '매와요', note: 'Only 돕다 and 곱다 take 와. 맵다 → 매워요 (L11).' }] }),
        Gr('g29', 'I don’t know.', '몰라요', 24, 'l24.form', 620.1, 623.85,
          { hint: 'to not know = «모르다»', diag: [{ p: '(모라요|모르어요|몰러요)', note: '르 irregular (L24): 모르 → 몰 + 라요 = 몰라요.' }] }),
        Gr('g30', 'It’s fast.', '빨라요', 24, 'l24.form', 632.6, 636.15,
          { hint: 'to be fast = «빠르다»', diag: [{ p: '(빠라요|빨러요|빠르어요)', note: '르 irregular (L24): 빠르 → 빨 + 라요 = 빨라요.' }] }),
        Gr('g31', 'I load.', '실어요', 26, 'l26.form', 650.5, 654.5,
          { hint: 'to load = «싣다»', diag: [{ p: '싣어요', note: 'ㄷ irregular (L26): ㄷ → ㄹ before a vowel: 실어요.' }, { p: '실러요', note: 'Only the ㄷ changes: 싣 + 어요 → 실어요 (L26).' }] }),
        Gr('g32', 'I build.', '지어요', 29, 'l29.form', 666.9, 670.4,
          { hint: 'to build = «짓다»', diag: [{ p: '짓어요', note: 'ㅅ irregular (L29): the ㅅ drops before a vowel: 지어요.' }, { p: '져요', note: 'After the ㅅ drops, the vowels stay apart: 지어요, not 져요 (L29).' }] }),
      ] },
    ],
  };
})();

/* ---- src/l31/workbook_L31.js ---- */
/* workbook_L31.js — tab 2 “Final Exam” of the final chapter (no Korean 3 workbook exists for the review).
   Sections I–VI: type 'exam' (wb.js): 10 questions from five lessons each, drawn from the app's own question bank
   (MM.Q.allQs: pool, CCTV, generated forms, vocabulary): a returned mistake first, then expired / weak skills, then the rest.
   70 % passes the section; it can be taken again (best score kept). Section VII: dictation from the review dialogue
   (clips of dialogue.mp3, the same times as the Review tab). */
(() => {
  const group = (id, a, b) => ({
    id, title: `Section ${id} – Lessons ${a}–${b}`, type: 'exam', count: 10, lessons: Array.from({ length: b - a + 1 }, (_, i) => a + i),
    task: `10 questions from Lessons ${a}–${b}, two per lesson. Your old mistakes and expired skills come first. 7 correct pass the section; take it again any time.`,
    items: [{ n: 1 }],
  });
  MM.workbook[31] = {
    sections: [
      group('I', 1, 5), group('II', 6, 10), group('III', 11, 15), group('IV', 16, 20), group('V', 21, 25), group('VI', 26, 30),
      {
        id: 'VII', title: 'Section VII – Dictation', type: 'dictation',
        task: 'Lines from the review dialogue. Listen (each line once; replay as often as you like), then write what you hear, or fill in the missing part.',
        items: [
          { n: 1, track: 'dlg', clip: [3.1, 5.6], label: 'Minho', ko: '요즘 날씨가 너무 (___).', ans: ['좋네요'], full: '요즘 날씨가 너무 좋네요.', lenient: false, en: 'The weather is so good these days.',
            soft: [{ p: '요즘 날씨가 너무 좋네요', note: 'Accepted (the whole sentence).' }], diag: [{ p: '좋아요', note: 'Listen to the ending: 좋네요 (-네요, Lesson 25).' }] },
          { n: 2, track: 'dlg', clip: [16.2, 18.85], label: 'Minho', ans: ['제 사무실 앞에 공원이 있어요'], lenient: false, en: 'There is a park in front of my office.' },
          { n: 3, track: 'dlg', clip: [22.0, 27.55], label: 'Su-ah', ko: '아... 아침에 잠깐 학교에 가야 돼요. 학교 (___) 전화할게요.', ans: ['끝난 다음에'], full: '아... 아침에 잠깐 학교에 가야 돼요. 학교 끝난 다음에 전화할게요.', lenient: false, en: 'Oh... I have to go to school for a little while in the morning. I will call you after I finish school.',
            diag: [{ p: '끝나는 다음에', note: '다음에 takes the past form: 끝난 다음에 (Lesson 19).' }, { p: '끝난', note: 'One more word: 끝난 다음에 (after it finishes).' }] },
          { n: 4, track: 'dlg', clip: [49.3, 52.3], label: 'Su-ah', ans: ['저 지금 학교 끝났어요 (11|열한) 시쯤 갈게요'], full: '저 지금 학교 끝났어요. 11시쯤 갈게요.', lenient: false, en: 'I just finished school. I will be there around 11.',
            soft: [{ p: '지금 학교 끝났어요 (11|열한) 시쯤 갈게요', note: 'Accepted. The script starts with 저.' }] },
          { n: 5, track: 'dlg', clip: [56.1, 58.3], label: 'Minho', ans: ['수아 씨예요 여기로 올 거예요'], full: '수아 씨예요. 여기로 올 거예요.', lenient: false, en: 'It’s Su-ah. She’ll come here.',
            soft: [{ p: '수아 씨예요 여기 올 거예요', note: 'Accepted. The script says 여기로 (to here).' }] },
          { n: 6, track: 'dlg', clip: [89.2, 94.45], label: 'Jimin', ko: '더 (___) 포기해. 만약 지금 포기하면, 용서해 줄게.', ans: ['다치기 전에'], full: '더 다치기 전에 포기해. 만약 지금 포기하면, 용서해 줄게.', lenient: false, en: 'Give up before you get hurt even more. If you give up now, I will forgive you.',
            note: 'Two words (다치다 = to get hurt).', diag: [{ p: '다치기', note: 'One more word: 다치기 전에 (before…, Lesson 10).' }] },
        ],
      },
    ],
  };
})();

