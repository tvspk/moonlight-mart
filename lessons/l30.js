/* ---- src/l30/cards_L30.js ---- */
/* cards_L30.js — Loyalty Cards for Lesson 30 (Word Builder 실). Vocabulary cards come from the game vocab automatically;
   these are the building-block and sentence cards (front Korean, back English). All from the book. */
MM.cards[30] = [
  { id: 'k1', ko: '실 (室)', en: 'related to “room”', src: 'Textbook' },
  { id: 'k2', ko: '화장 + 실 = 화장실', en: 'makeup + room = toilet; bathroom', src: 'Textbook' },
  { id: 'k3', ko: '분장 + 실 = 분장실', en: 'stage makeup + room = dressing room; backstage powder room', src: 'Textbook' },
  { id: 'k4', ko: '교 + 실 = 교실', en: 'school, teach + room = classroom', src: 'Textbook' },
  { id: 'k5', ko: '대기 + 실 = 대기실', en: 'wait + room = waiting room', src: 'Textbook' },
  { id: 'k6', ko: '회 + 의 + 실 = 회의실', en: 'meet + discuss + room = meeting room, conference room', src: 'Textbook' },
  { id: 'k7', ko: '사 + 무 + 실 = 사무실', en: 'work + work, task + room = office', src: 'Textbook' },
  { id: 'k8', ko: '실 + 장 = 실장', en: 'room + head, leader = head of the office', src: 'Textbook' },
  { id: 'k9', ko: '실 + 내 = 실내 · 실 + 외 = 실외', en: 'indoors · outdoors', src: 'Textbook' },
  { id: 'k10', ko: '면접은 어디에서 봐요?', en: 'Where do I have an interview?', src: 'Textbook dialogue' },
  { id: 'k11', ko: '회의실에서 봐요. 대기실에서 기다려 주세요.', en: 'You will have it in the meeting room. Please wait in the waiting room.', src: 'Textbook dialogue' },
  { id: 'k12', ko: '네, 알겠습니다.', en: 'Okay, I will.', src: 'Textbook dialogue' },
  { id: 'k13', ko: '지금 화장실에 누구 있어요?', en: 'Is there anyone in the bathroom now?', src: 'Workbook dictation' },
  { id: 'k14', ko: '침실에 거울이 두 개 있어요.', en: 'There are two mirrors in the bedroom.', src: 'Workbook dictation' },
  { id: 'k15', ko: '사무실에서 이상한 냄새가 나요.', en: 'It smells weird/bad in the office.', src: 'Workbook dictation' },
  { id: 'k16', ko: '학교: 교실 · 강의실 · 양호실 · 교무실 · 교장실', en: 'school: classroom · lecture room · infirmary · teachers’ office · principal’s office', src: 'Workbook web' },
  { id: 'k17', ko: '병원: 수술실 · 병실 · 응급실 / 집: 거실 · 침실 / 회사: 사무실 · 회의실', en: 'hospital · home · company', src: 'Workbook web' },
];

/* ---- src/l30/game_L30.js ---- */
/* game_L30.js — Moonlight Mart, Lesson 30 (Word Builder 2: 실 (室) = room). Lines: [castId, korean, english].
   q.opts: correct option first (engine shuffles). odd: opts[0] is the WRONG / odd one the player must find.
   No conjugation in this lesson (gen_forms.py 30 exits on purpose): Rush Hour mixes vocabulary with the pool (rushPool).
   Skills: l30.root (실 + the building blocks: 화장, 교, 연습, 대기, 회의, 병, 미용, 사무, 교무, 침, 거, 응급, 휴게, 흡연, 오락…),
   l30.where (which room belongs where: 학교 / 병원 / 집 / 회사 — the Workbook web — and which room for what), l30.inout (실 in front:
   실내, 실외, 실장).
   Who speaks how (from Lesson 27): Minji ↔ player 반말; Mr. Kim and Grandma → player 반말, player → them 존댓말; Sua → player 존댓말,
   player → Sua 반말 allowed (both accepted); everybody else 존댓말. Game words not in the book: 열쇠, 면접 (book dialogue), 소파, 파라솔,
   아르바이트, 피우다, 다치다 — glossed where they appear. Native-speaker check: written and read through in the 2026-10-16 review. */
MM.game[30] = {
  skills: {
    'l30.root':  { en: '실 and its building blocks', desc: '실 (室) = room. 화장 (makeup) + 실 = 화장실, 교 (teach) + 실 = 교실, 대기 (wait) + 실 = 대기실, 회의 (meet + discuss) + 실 = 회의실, 병 (disease) + 실 = 병실, 미용 + 실 = 미용실, 사무 + 실 = 사무실.' },
    'l30.where': { en: 'Which room, where?', desc: 'School: 교실, 강의실, 교무실, 교장실, 양호실 · hospital: 병실, 수술실, 응급실 · home: 거실, 침실 · company: 사무실, 회의실 · and what you do there (면접은 회의실에서, 대기실에서 기다려요).' },
    'l30.inout': { en: '실 in front: 실내, 실외, 실장', desc: '실 + 내 (inside) = 실내 indoors [실래] · 실 + 외 (outside) = 실외 outdoors [시뢰] · 실 + 장 (head) = 실장 head of the office [실짱].' },
    'l30.vocab': { en: 'Lesson 30 vocabulary', desc: 'The words of the lesson.' },
  },
  fixSkills: { restkey: 'l30.root', sofa: 'l30.where', parasol: 'l30.inout' },
  rushPool: true,
  intro: 'Word Builder 2: 실 (室) means “room”. Put a job in front of it and you get the room for that job: 화장 (makeup) + 실 = 화장실, 교 (teach) + 실 = 교실, 대기 (wait) + 실 = 대기실, 회의 (meeting) + 실 = 회의실. Put it in front, and 실내 is indoors, 실외 outdoors, 실장 the head of the office. Tonight, the thirtieth: a lost restroom key, an interview in a stockroom that has become a “meeting room”, and a parasol that wants to fly away.',

  shifts: {
    A: {
      title: 'Where’s the Restroom?', sub: 'Recognize · choose', kind: 'recognize', fix: 'restkey',
      snack: { id: 'l30.snackA', ko: '화장실 열쇠 사탕', en: 'Restroom-Key Lollipop', desc: 'Shaped like a key on a giant wooden stick. Nobody will ever walk off with it.' },
      scenes: [
        { id: 'A1', time: '22:00', place: 'Counter', narr: 'Thirtieth night. The key board by the counter is broken: the hooks fell off, and all the keys are in a box. Mr. Lee rushes in. (급하다 = to be urgent)',
          lines: [['manager', '화장실 어디예요? 급해요!', 'Where is the restroom? It’s urgent!']],
          q: { type: 'enOpts', prompt: 'What is Mr. Lee looking for?', opts: ['The toilet.', 'The office.', 'The meeting room.', 'The waiting room.'], skill: 'l30.root',
            explain: '화장 (makeup) + 실 (room) = 화장실, toilet; bathroom.', en: 'Where is the restroom? It’s urgent!' } },
        { id: 'A2', time: '22:05', place: 'Counter', narr: 'Like many convenience stores, the restroom is outside, in the building, and it is locked. (열쇠 = key)',
          q: { type: 'mc', prompt: 'Answer: “The restroom is outside. Here’s the key.”', opts: ['화장실은 밖에 있어요. 여기 열쇠요.', '사무실은 밖에 있어요. 여기 열쇠요.', '교실은 밖에 있어요. 여기 열쇠요.', '병실은 밖에 있어요. 여기 열쇠요.'], skill: 'l30.root',
            explain: '화장실 = toilet; bathroom. 사무실 = office, 교실 = classroom, 병실 = hospital room.', en: 'The restroom is outside. Here’s the key.' } },
        { id: 'A3', time: '22:30', place: 'Eat-in table', narr: 'Sua drops into a chair and puts her head on the table.',
          lines: [['sua', '오늘 강의실에서 시험 봤어요. 너무 어려웠어요.', 'Today I took an exam in the lecture room. It was so difficult.']],
          q: { type: 'enOpts', prompt: 'Where did Sua take her exam?', opts: ['In a lecture room at the university.', 'In a hospital room.', 'In a waiting room.', 'In a teachers’ office.'], skill: 'l30.where',
            explain: '강의실 = classroom, lecture room (usually at a university; Workbook 18).', en: 'Today I took an exam in the lecture room.' } },
        { id: 'A4', time: '23:00', place: 'Counter', narr: 'Minji texts you. (면접 = job interview)',
          lines: [['minji', '현우 내일 면접 봐! 큰 회사 회의실에서.', 'Hyunwoo has a job interview tomorrow! In the meeting room of a big company.']],
          q: { type: 'enOpts', prompt: 'Where is Hyunwoo’s interview?', opts: ['In a company’s meeting room.', 'In a classroom.', 'In the store’s stockroom.', 'In a hospital waiting room.'], skill: 'l30.where',
            explain: '회 (meet) + 의 (discuss) + 실 (room) = 회의실, meeting room. Textbook dialogue: 면접은 … 회의실에서 봐요.', en: 'Hyunwoo has a job interview tomorrow! In the meeting room of a big company.' } },
        { id: 'A5', time: '23:30', place: 'Memo board', narr: 'Minji’s vocabulary list on the memo board. One line is wrong.',
          q: { type: 'odd', prompt: 'Which line is WRONG?', opts: ['병실 = office', '병실 = hospital room', '교실 = classroom', '실내 = indoors'], skill: 'l30.root',
            explain: '병 (disease) + 실 = 병실, a hospital room. Office = 사무실.', en: '' } },
        { id: 'A6', time: '00:30', place: 'Counter', narr: 'Grandma buys a box of fruit juice.',
          lines: [['grandma', '내 친구가 병원에 있어. 내일 친구 병실에 갈 거야.', 'My friend is in the hospital. Tomorrow I’ll go to my friend’s hospital room.']],
          q: { type: 'enOpts', prompt: 'Where is Grandma going tomorrow?', opts: ['To her friend’s hospital room.', 'To a hair salon.', 'To an office.', 'To a classroom.'], skill: 'l30.where',
            explain: '병실 = hospital room, patient’s room.', en: 'Tomorrow I’ll go to my friend’s hospital room.' } },
        { id: 'A7', time: '02:00', place: 'Coffee machine', narr: 'Mr. Kim rubs his messy grey hair.',
          lines: [['taxi', '이 동네 미용실 어디가 좋아?', 'Which hair salon around here is good?']],
          q: { type: 'mc', prompt: 'Answer politely: “The hair salon in front of the school is good.”', opts: ['학교 앞 미용실이 좋아요.', '학교 앞 미용실이 좋아.', '학교 앞 화장실이 좋아요.', '학교 앞 교무실이 좋아요.'], skill: 'l30.root',
            explain: '미용 (beauty treatment) + 실 = 미용실, hair salon. Mr. Kim speaks 반말 to you; you keep 존댓말 (좋아요).', en: 'The hair salon in front of the school is good.' },
          after: [['taxi', '고마워. 내일 거기에서 머리 자를 거야.', 'Thanks. Tomorrow I’ll get my hair cut there.']] },
        { id: 'A8', time: '03:00', place: 'Front door', narr: 'The officer stamps his feet in the cold.',
          lines: [['police', '밖이 너무 추워요. 오늘은 실내에서 바나나 우유 마실게요.', 'It’s too cold outside. Tonight I’ll drink my banana milk indoors.']],
          q: { type: 'enOpts', prompt: 'Where will the officer drink his banana milk?', opts: ['Indoors.', 'Outdoors.', 'In the office.', 'In the waiting room.'], skill: 'l30.inout',
            explain: '실 (room) + 내 (inside) = 실내, indoors. Here 실 comes first.', en: 'Tonight I’ll drink my banana milk indoors.' } },
        { id: 'A9', time: '04:00', place: 'Counter', narr: 'You screw the hooks back onto the key board and label them.',
          q: { type: 'mc', prompt: 'Label for the first hook: “toilet key”', ko: '___ 열쇠', opts: ['화장실', '분장실', '회의실', '연습실'], skill: 'l30.root',
            explain: '화장실 (化粧室). 분장실 = a dressing room backstage (stage makeup), not a toilet.', en: 'toilet key' } },
        { id: 'A10', time: '05:30', place: 'Counter', narr: 'Mr. Park comes down and looks at the new key board.',
          lines: [['boss', '고쳤네요! 고마워요. 근데 화장실 열쇠는 어디 있어요?', 'You fixed it! Thank you. But where is the restroom key?']],
          q: { type: 'enOpts', prompt: 'What is missing?', opts: ['The restroom key.', 'The office key.', 'The front-door key.', 'The meeting-room key.'], skill: 'l30.root',
            explain: '화장실 열쇠 = the restroom key.', en: 'But where is the restroom key?' },
          afterNarr: 'You find it twenty minutes later: under Ramyeon, on the ramen shelf. He has been keeping it warm.' },
      ],
      cctv: [
        { id: 'A.c1', type: 'enOpts', prompt: 'The word 실 (室) is related to…', opts: ['room', 'learning', 'school', 'work'], skill: 'l30.root', explain: 'Textbook p.185.', en: '' },
        { id: 'A.c2', type: 'mc', prompt: '“waiting room”', opts: ['대기실', '회의실', '대기', '교무실'], skill: 'l30.root', explain: '대기 (wait) + 실 = 대기실.', en: '' },
        { id: 'A.c3', type: 'enOpts', prompt: '사무실', opts: ['office', 'teacher’s office', 'head of the office', 'meeting room'], skill: 'l30.root', explain: '사 (work) + 무 (work, task) + 실 = 사무실, office.', en: '' },
        { id: 'A.c4', type: 'enOpts', prompt: '실외', opts: ['outdoors, outside', 'indoors', 'head of the office', 'dressing room'], skill: 'l30.inout', explain: '실 + 외 (outside) = 실외.', en: '' },
        { id: 'A.c5', type: 'enOpts', prompt: '“대기실에서 기다려 주세요.”', opts: ['Please wait in the waiting room.', 'Please wait in the meeting room.', 'Please wait outside.', 'Please wait in the office.'], skill: 'l30.where', explain: 'Textbook dialogue.', en: 'Please wait in the waiting room.' },
        { id: 'A.c6', type: 'enOpts', prompt: '교무실', opts: ['teacher’s office', 'classroom', 'principal’s office', 'school infirmary'], skill: 'l30.root', explain: '교 (school, teach) + 무 (work) + 실 = 교무실.', en: '' },
      ],
    },

    B: {
      title: 'The Interview', sub: 'Build · write', kind: 'produce', fix: 'sofa',
      note: { by: 'boss', text: 'Night shift rule #30: at 6 a.m. I interview a new part-timer (Hyunwoo is busy with university). We have no meeting room, so the stockroom is the “meeting room” and the old sofa is the “waiting room”. The sofa is broken. Please do something. — Park' },
      snack: { id: 'l30.snackB', ko: '대기실 쿠키', en: 'Waiting-Room Cookies', desc: 'One cookie per minute of waiting. Most candidates eat four.' },
      scenes: [
        { id: 'B1', time: '22:00', place: 'Stockroom', narr: 'Mr. Park hands you two blank signs. The first one goes on the stockroom door.',
          q: { type: 'fill', prompt: 'Write the sign: “Meeting room”', ko: '___', ans: ['회의실'], units: ['회', '의', '실'], extra: ['사', '무', '대'], skill: 'l30.root',
            diag: [{ p: '사무실', note: '사무실 = office. Meeting room = 회 (meet) + 의 (discuss) + 실 = 회의실.' }, { p: '대기실', note: '대기실 = waiting room — that is the second sign.' }, { p: '회이실', note: 'Pronounced [회이실], written 회의실.' }],
            explain: '회 (meet) + 의 (discuss) + 실 (room) = 회의실.', en: 'Meeting room' } },
        { id: 'B2', time: '22:20', place: 'Stockroom', narr: 'The second sign goes over the old sofa.',
          q: { type: 'fill', prompt: 'Write the sign: “Waiting room”', ko: '___', ans: ['대기실'], units: ['대', '기', '실'], extra: ['회', '교', '병'], skill: 'l30.root',
            diag: [{ p: '회의실', note: '회의실 = meeting room (the first sign). Waiting room = 대기 (wait) + 실 = 대기실.' }, { p: '대기', note: 'Add 실 (room): 대기실.' }],
            explain: '대기 (wait) + 실 (room) = 대기실.', en: 'Waiting room' } },
        { id: 'B3', time: '23:00', place: 'Stockroom door', narr: 'Sua reads the sign on the stockroom door. (반말 to her is fine — she gave permission — and so is 존댓말.)',
          lines: [['sua', '창고가 회의실이에요? 진짜요?', 'The stockroom is a meeting room? Really?']],
          q: { type: 'write', prompt: 'Answer: “Yes. Tomorrow there is an interview in the meeting room.” (응/네, 회의실, 면접, 있다)', ans: ['응. 내일 회의실에서 면접이 있어.'], soft: [{ p: '(응|어|네|예) (내일 |)(아침에 |)회의실에서 면접(이|) 있어(요|)', note: 'Accepted.' }, { p: '(응|어|네|예) (내일 |)(아침에 |)회의실에서 면접(을|) 봐(요|)', note: 'Accepted (면접을 보다 = to have an interview).' }], skill: 'l30.where',
            diag: [{ p: '(응|네) (내일 |)사무실에서 면접(이|) 있어(요|)', note: '사무실 = office. The sign says 회의실 (meeting room).' }, { p: '(응|네) (내일 |)대기실에서 면접(이|) 있어(요|)', note: '대기실 = waiting room: you wait there. The interview is in the 회의실.' }],
            explain: 'An event takes place 에서: 회의실에서 면접이 있어요.', en: 'Yes. Tomorrow there is an interview in the meeting room.' },
          after: [['sua', '면접이요? 저도 아르바이트하고 싶어요!', 'An interview? I want a part-time job too!']] },
        { id: 'B4', time: '23:30', place: 'Counter', narr: 'Mr. Lee yawns so widely his jaw clicks. There is a small staff break room behind the counter.',
          lines: [['manager', '저 너무 피곤해요. 여기서 좀 쉬어도 돼요?', 'I’m so tired. May I rest here a bit?']],
          q: { type: 'write', prompt: 'Answer: “Please rest in the break room.” (휴게실, 쉬다, -(으)세요)', ans: ['휴게실에서 쉬세요.'], soft: [{ p: '(네 |그럼 |)휴게실에서 (좀 |잠깐 |)쉬세요', note: 'Accepted.' }, { p: '(네 |그럼 |)휴게실에서 (좀 |잠깐 |)쉬어도 돼요', note: 'Accepted.' }], skill: 'l30.where',
            diag: [{ p: '(네 |그럼 |)휴게실에 (좀 |잠깐 |)쉬세요', note: 'An action (resting) happens 에서 (Lesson 3): 휴게실에서.' }, { p: '(네 |그럼 |)대기실에서 (좀 |잠깐 |)쉬세요', note: '대기실 = waiting room (tonight: the interview sofa). Break room = 휴게실 (Workbook 19).' }],
            explain: '휴게실 = break room, lounge (Workbook 19).', en: 'Please rest in the break room.' } },
        { id: 'B5', time: '00:30', place: 'Counter', narr: 'The courier puts a box on the counter. It is addressed to the store office.',
          lines: [['courier', '이거 사무실 택배예요. 사무실 어디예요?', 'This is a delivery for the office. Where is the office?']],
          q: { type: 'write', prompt: 'Answer: “The office is next to the stockroom.” (사무실, 창고, 옆에)', ans: ['사무실은 창고 옆에 있어요.'], soft: [{ p: '(사무실은 |사무실이 |)창고 옆에 있어요', note: 'Accepted.' }], skill: 'l30.root',
            diag: [{ p: '(교무실|회의실|대기실)(은|이) 창고 옆에 있어요', note: 'Office = 사 (work) + 무 (task) + 실 = 사무실.' }, { p: '(사무실은 |)창고 옆에서 있어요', note: '있다 takes -에 (Lesson 3): 창고 옆에 있어요.' }],
            explain: '사무실 = office. 옆에 있어요 (Lesson 3).', en: 'The office is next to the stockroom.' },
          after: [['courier', '감사합니다! 바빠서 이만!', 'Thanks! Busy — bye!']] },
        { id: 'B6', time: '02:00', place: 'Stockroom', narr: 'Mr. Kim peeks into the stockroom with his coffee.',
          lines: [['taxi', '대기실이 어디야?', 'Where is the waiting room?']],
          q: { type: 'write', prompt: 'Answer politely: “The sofa over there is the waiting room.” (저기, 소파, 대기실, 이에요)', ans: ['저기 소파가 대기실이에요.'], soft: [{ p: '(저기 |저기 있는 |저 |)소파가 대기실이에요', note: 'Accepted.' }, { p: '대기실은 (저기 |)(저 |)소파예요', note: 'Accepted.' }], skill: 'l30.where',
            diag: [{ p: '(저기 |저 |)소파가 대기실이야', note: 'Right word, but to Mr. Kim you keep 존댓말 (Lesson 27): 대기실이에요.' }, { p: '(저기 |저 |)소파가 회의실이에요', note: '회의실 = meeting room. The sofa is where you wait: 대기실.' }],
            explain: '대기실 = waiting room.', en: 'The sofa over there is the waiting room.' },
          after: [['taxi', '하하, 대기실이 너무 작네!', 'Haha, the waiting room is really small!']] },
        { id: 'B7', time: '03:00', place: 'Front door', narr: 'The officer looks at the sofa and smiles.',
          lines: [['police', '저는 학교 다닐 때 양호실에서 많이 잤어요.', 'When I was at school, I slept a lot in the school infirmary.']],
          q: { type: 'enOpts', prompt: 'Where did the officer sleep a lot as a student?', opts: ['In the school infirmary.', 'In the classroom.', 'In the principal’s office.', 'In the teachers’ office.'], skill: 'l30.where',
            explain: '양호실 = school infirmary (Workbook 20). 교장실 = principal’s office, 교무실 = teachers’ office.', en: 'I slept a lot in the school infirmary.' } },
        { id: 'B8', time: '04:00', place: 'Stockroom', narr: 'Grandma comes down the stairs, followed by you and Mr. Park carrying her old sofa: it used to be in her living room. The broken one goes out. (거실 = living room)',
          lines: [['grandma', '이 소파 우리 집 거실에 있었어. 이제 가게 거야.', 'This sofa was in my living room. Now it belongs to the store.']],
          q: { type: 'write', prompt: 'Answer: “Thank you! Now it is in the waiting room.” (감사하다, 이제, 대기실, 있다)', ans: ['감사합니다! 이제 대기실에 있어요.'], soft: [{ p: '(감사합니다|고맙습니다|고마워요|감사해요) (할머니 |)(이제 |지금은 |)대기실에 있어요', note: 'Accepted.' }], skill: 'l30.where',
            diag: [{ p: '(감사합니다|고맙습니다|고마워요) (이제 |)대기실에서 있어요', note: '있다 (to be somewhere) takes -에 (Lesson 3): 대기실에 있어요.' }, { p: '(고마워) (이제 |)대기실에 있어', note: 'To Grandma you keep 존댓말 (Lesson 27).' }],
            explain: '대기실에 있어요 = it is in the waiting room.', en: 'Thank you! Now it is in the waiting room.' } },
        { id: 'B9', time: '05:40', place: 'Front door', narr: 'Twenty minutes before six. The candidate arrives in a suit, very nervous: it is Sua. (B3 was not a joke.)',
          lines: [['sua', '안녕하세요! 면접은 어디에서 봐요?', 'Hello! Where do I have the interview?']],
          q: { type: 'tiles', prompt: 'Answer (the book’s line): “You have it in the meeting room.”', ans: ['회의실에서 봐요.'], soft: [{ p: '(면접은 |)회의실에서 봐(요|)', note: 'Accepted.' }], extra: ['사무실에서', '대기실에', '교실에서'], skill: 'l30.where',
            diag: [{ p: '(면접은 |)대기실에 봐요', note: '대기실 is the waiting room — and an action takes -에서. The interview: 회의실에서.' }, { p: '(면접은 |)사무실에서 봐요', note: '사무실 = office. The book: 회의실에서 봐요.' }],
            explain: 'Textbook dialogue: 회의실에서 봐요.', en: 'You have it in the meeting room.' } },
        { id: 'B10', time: '05:45', place: 'Front door', narr: 'Mr. Park is not down yet.',
          q: { type: 'write', prompt: 'Tell her (the book’s line): “Please wait in the waiting room.”', ans: ['대기실에서 기다려 주세요.'], soft: [{ p: '(그럼 |잠깐 |)대기실에서 (잠깐 |조금만 |)기다려 주세요', note: 'Accepted.' }, { p: '(그럼 |)대기실에서 (잠깐 |조금만 |)기다리세요', note: 'Accepted (-(으)세요).' }, { p: '(그럼 |)대기실에서 (잠깐 |조금만 |)기다려', note: 'Accepted (반말 — Sua gave you permission). In a job interview, 존댓말 sounds more serious.' }], skill: 'l30.where',
            diag: [{ p: '(그럼 |)대기실에 (잠깐 |)기다려 주세요', note: 'Waiting is an action: 대기실에서 (Lesson 3).' }, { p: '(그럼 |)회의실에서 (잠깐 |)기다려 주세요', note: 'The 회의실 is where the interview is. You wait in the 대기실.' }],
            explain: 'Textbook dialogue: 대기실에서 기다려 주세요.', en: 'Please wait in the waiting room.' },
          after: [['sua', '네, 알겠습니다!', 'Okay, I will!']],
          afterNarr: 'Sua sits down on the waiting-room sofa. Ramyeon is already there. He has been waiting for the interview for an hour, and he looks very qualified.' },
      ],
      cctv: [
        { id: 'B.c1', type: 'write', prompt: 'Write in Korean: toilet; bathroom', ans: ['화장실'], skill: 'l30.root', diag: [{ p: '분장실', note: '분장실 = dressing room. Toilet = 화장실.' }], explain: 'Textbook exercise 2.', en: 'toilet; bathroom' },
        { id: 'B.c2', type: 'write', prompt: 'Write in Korean: classroom', ans: ['교실'], soft: [{ p: '강의실', note: 'Also right (a lecture room, usually at a university). The book’s word: 교실.' }], skill: 'l30.root', diag: [{ p: '교무실', note: '교무실 = teachers’ office.' }], explain: 'Textbook exercise 3.', en: 'classroom' },
        { id: 'B.c3', type: 'write', prompt: 'Write in Korean: hospital room; patient’s room', ans: ['병실'], skill: 'l30.root', diag: [{ p: '병원', note: '병원 = hospital. The room = 병실.' }], explain: 'Textbook exercise 4.', en: 'hospital room' },
        { id: 'B.c4', type: 'write', prompt: 'Write in Korean: indoors', ans: ['실내'], skill: 'l30.inout', diag: [{ p: '실외', note: '실외 = outdoors.' }, { p: '실래', note: 'Pronounced [실래], written 실내.' }], explain: 'Textbook exercise 5.', en: 'indoors' },
        { id: 'B.c5', type: 'write', prompt: 'Translate: Where do I have an interview?', ans: ['면접은 어디에서 봐요?'], soft: [{ p: '면접(은|을) (어디에서|어디서) 봐요', note: 'Accepted.' }], skill: 'l30.where', explain: 'Textbook dialogue.', en: 'Where do I have an interview?' },
        { id: 'B.c6', type: 'write', prompt: 'Translate: Please wait in the waiting room.', ans: ['대기실에서 기다려 주세요.'], soft: [{ p: '대기실에서 기다리세요', note: 'Accepted.' }], skill: 'l30.where', diag: [{ p: '대기실에 기다려 주세요', note: 'Waiting is an action: 대기실에서.' }], explain: 'Textbook dialogue.', en: 'Please wait in the waiting room.' },
      ],
    },

    C: {
      title: 'Indoors, Outdoors', sub: 'Mixed · optional', kind: 'mixed', fix: 'parasol', optional: true,
      snack: { id: 'l30.snackC', ko: '실내용 아이스크림', en: 'Indoor-Only Ice Cream', desc: 'For winter. Melts politely, and only indoors.' },
      scenes: [
        { id: 'C1', time: '22:30', place: 'Front door', narr: 'Next night. The wind is strong, and the big parasol over the outdoor table is broken and flapping. (파라솔 = parasol)',
          lines: [['minji', '밖에 파라솔이 고장 났어. 오늘은 손님들이 실내에서 먹어야 돼.', 'The parasol outside is broken. Tonight the customers have to eat indoors.']],
          q: { type: 'enOpts', prompt: 'Where do the customers have to eat tonight?', opts: ['Indoors.', 'Outdoors.', 'In the office.', 'In the waiting room.'], skill: 'l30.inout',
            explain: '실내 = indoors (실 + 내 inside).', en: 'Tonight the customers have to eat indoors.' } },
        { id: 'C2', time: '23:00', place: 'Counter', narr: 'Mr. Lee pats his pockets for his cigarettes. (흡연 = smoking)',
          lines: [['manager', '여기 흡연실 있어요?', 'Is there a smoking room here?']],
          q: { type: 'mc', prompt: 'Answer: “No, there is no smoking room.”', opts: ['아니요, 흡연실은 없어요.', '아니요, 휴게실은 없어요.', '아니요, 화장실은 없어요.', '아니요, 오락실은 없어요.'], skill: 'l30.root',
            explain: '흡연 (smoking) + 실 = 흡연실 (Workbook 23). 휴게실 = break room, 오락실 = video arcade.', en: 'No, there is no smoking room.' },
          after: [['manager', '그럼 실외에서 피울게요.', 'Then I’ll smoke outdoors.']] },
        { id: 'C3', time: '23:30', place: 'Eat-in table', narr: 'Sua closes her laptop. She got the job, by the way: she starts next week, on the day shift.',
          lines: [['sua', '오늘 공부 다 했어요! 이제 오락실에 갈 거예요.', 'I finished studying for today! Now I’m going to the arcade.']],
          q: { type: 'enOpts', prompt: 'Where is Sua going?', opts: ['To a video arcade.', 'To a smoking room.', 'To a lecture room.', 'To an operating room.'], skill: 'l30.root',
            explain: '오락 (games, entertainment) + 실 = 오락실, video arcade (Workbook 22).', en: 'Now I’m going to the arcade.' } },
        { id: 'C4', time: '00:30', place: 'Memo board', narr: 'Minji’s quiz for the new part-timer. One sentence makes no sense.',
          q: { type: 'odd', prompt: 'Which sentence does NOT make sense?', opts: ['우리 집에 수술실이 있어요.', '병원에 수술실이 있어요.', '학교에 교무실이 있어요.', '회사에 회의실이 있어요.'], skill: 'l30.where',
            explain: '수술실 (operating room) is in a hospital (Workbook web). At home: 거실, 침실.', en: '' } },
        { id: 'C5', time: '01:00', place: 'Outdoor table', narr: 'Mr. Kim tries to hold the flapping parasol and cuts his hand on the broken frame. (다치다 = to get hurt)',
          lines: [['taxi', '아이고, 손을 다쳤어.', 'Ouch, I hurt my hand.']],
          q: { type: 'mc', prompt: 'Ask him politely: “Shall we go to the emergency room?”', opts: ['응급실에 갈까요?', '수술실에 갈까요?', '교실에 갈까요?', '응급실에 갈까?'], skill: 'l30.root',
            explain: '응급 (emergency) + 실 = 응급실 (Workbook 15). To Mr. Kim: 존댓말 (갈까요?, Lesson 4).', en: 'Shall we go to the emergency room?' },
          after: [['taxi', '아니야, 괜찮아. 조금 다쳤어.', 'No, it’s fine. I only hurt it a little.']] },
        { id: 'C6', time: '02:00', place: 'Counter', narr: 'Grandma brings Mr. Kim a bandage.',
          lines: [['grandma', '나도 옛날에 학교 조리실에서 일했어. 다치면 바로 양호실에 갔어.', 'Long ago I worked in a school kitchen too. When I got hurt, I went straight to the infirmary.']],
          q: { type: 'enOpts', prompt: 'Where did Grandma work long ago?', opts: ['In a school kitchen.', 'In the principal’s office.', 'In a hospital room.', 'In a living room.'], skill: 'l30.where',
            explain: '조리실 = kitchen (not the one at home; Workbook 16). 양호실 = school infirmary.', en: 'Long ago I worked in a school kitchen.' } },
        { id: 'C7', time: '03:00', place: 'Front door', narr: 'The officer rubs his hands.',
          lines: [['police', '오늘은 실외가 정말 춥네요.', 'It’s really cold outdoors today.']],
          q: { type: 'write', prompt: 'Answer: “Then drink your banana milk indoors.” (그럼, 실내, -(으)세요)', ans: ['그럼 바나나 우유는 실내에서 드세요.'], soft: [{ p: '(그럼 |)(바나나 우유(는|를|) |)실내에서 (드세요|마시세요)', note: 'Accepted.' }], skill: 'l30.inout',
            diag: [{ p: '(그럼 |)(바나나 우유(는|를|) |)실외에서 (드세요|마시세요)', note: '실외 = outdoors — where it is cold. Indoors = 실내.' }, { p: '(그럼 |)(바나나 우유(는|를|) |)실래에서 (드세요|마시세요)', note: 'Pronounced [실래], written 실내.' }],
            explain: '실내 = indoors. 드세요 = the polite “please eat/drink”.', en: 'Then drink your banana milk indoors.' } },
        { id: 'C8', time: '04:00', place: 'Outdoor table', narr: 'You fix the parasol frame with new screws and tie it down.',
          q: { type: 'tiles', prompt: 'Write in the work log: “I fixed the outdoor parasol.”', ans: ['실외 파라솔을 고쳤어요.'], soft: [{ p: '(제가 |)실외 파라솔(을|) 고쳤어요', note: 'Accepted.' }], extra: ['실내', '실장', '파라솔이'], skill: 'l30.inout',
            diag: [{ p: '(제가 |)실내 파라솔(을|) 고쳤어요', note: 'The parasol is outside: 실외.' }],
            explain: '실 + 외 (outside) = 실외.', en: 'I fixed the outdoor parasol.' } },
        { id: 'C9', time: '05:00', place: 'Counter', narr: 'Mr. Park comes down early, looking solemn. He pins a new name badge on your vest. (야간 = night)',
          lines: [['boss', '오늘부터 학생이 우리 가게 야간 실장이에요!', 'From today you are our store’s night-shift head!']],
          q: { type: 'enOpts', prompt: 'What does Mr. Park make you?', opts: ['The head of the night shift.', 'The owner of the store.', 'A delivery driver.', 'A teacher.'], skill: 'l30.inout',
            explain: '실 (room) + 장 (head, leader) = 실장 [실짱], head of the office. 야간 실장 = night-shift head (a joke title — the store has one night shift: you).', en: 'From today you are our store’s night-shift head!' } },
        { id: 'C10', time: '05:40', place: 'Break room', narr: 'Mr. Park looks around the store you have fixed, room by room.',
          lines: [['boss', '실장님, 이 가게에서 제일 좋은 방은 어디예요?', 'Mr./Ms. Head, which is the best room in this store?']],
          q: { type: 'write', prompt: 'Answer: “The break room!”', ans: ['휴게실이요!'], soft: [{ p: '휴게실(이에요|이요|)', note: 'Accepted.' }, { p: '(제일 좋은 방은 |)휴게실이에요', note: 'Accepted.' }], skill: 'l30.root',
            diag: [{ p: '대기실(이에요|이요|)', note: '대기실 = waiting room. Break room = 휴게실 (Workbook 19).' }, { p: '휴계실(이에요|이요|)', note: 'Spelling: 휴게실 (게, not 계).' }],
            explain: '휴게 (rest) + 실 = 휴게실, break room, lounge.', en: 'The break room!' },
          after: [['boss', '하하, 맞아요. 라면도 그렇게 생각해요.', 'Haha, right. Ramyeon thinks so too.']],
          afterNarr: 'On Grandma’s old sofa, under the “대기실” sign, Ramyeon is asleep on his back. He has not waited for anything in his life. He is simply where the best room is.' },
      ],
      cctv: [
        { id: 'C.c1', type: 'enOpts', prompt: '실장', opts: ['head of the office', 'indoors', 'outdoors', 'meeting room'], skill: 'l30.inout', explain: '실 + 장 (head, leader) = 실장.', en: '' },
        { id: 'C.c2', type: 'enOpts', prompt: '응급실', opts: ['emergency room', 'operating room', 'hospital room', 'break room'], skill: 'l30.root', explain: 'Workbook 15.', en: '' },
        { id: 'C.c3', type: 'mc', prompt: 'At home (집): which two rooms? (Workbook web)', opts: ['거실, 침실', '병실, 수술실', '사무실, 회의실', '교실, 교무실'], skill: 'l30.where', explain: 'Workbook 24: 집 → 거실 (living room), 침실 (bedroom).', en: '' },
        { id: 'C.c4', type: 'enOpts', prompt: '“사무실에서 이상한 냄새가 나요.”', opts: ['It smells weird in the office.', 'It smells good in the office.', 'The office is very strange.', 'There is a strange person in the office.'], skill: 'l30.root', explain: 'Workbook dictation 27.', en: 'It smells weird/bad in the office.' },
        { id: 'C.c5', type: 'mc', prompt: '“outdoors”', opts: ['실외', '실내', '외실', '실장'], skill: 'l30.inout', explain: '실 + 외 (outside) = 실외 [시뢰].', en: '' },
        { id: 'C.c6', type: 'enOpts', prompt: '“침실에 거울이 두 개 있어요.”', opts: ['There are two mirrors in the bedroom.', 'There are two mirrors in the living room.', 'There are two beds in the room.', 'There is a mirror in the bathroom.'], skill: 'l30.where', explain: 'Workbook dictation 26. 침실 = bedroom.', en: 'There are two mirrors in the bedroom.' },
      ],
    },
  },

  /* extra questions by skill: returned mistakes, Dawn Restock, store repairs, Rush Hour (rushPool: mc/enOpts only) */
  pool: [
    { id: 'p30.r1', type: 'enOpts', prompt: 'In 화장실, 화장 means…', opts: ['makeup', 'disease', 'work', 'wait'], skill: 'l30.root', explain: 'Textbook: 화장 (makeup) + 실 (room).', en: '' },
    { id: 'p30.r2', type: 'enOpts', prompt: 'In 병실, 병 means…', opts: ['disease', 'school, teach', 'beauty treatment', 'inside'], skill: 'l30.root', explain: 'Textbook: 병 (disease) + 실.', en: '' },
    { id: 'p30.r3', type: 'enOpts', prompt: 'In 대기실, 대기 means…', opts: ['wait', 'meet', 'practice', 'work'], skill: 'l30.root', explain: 'Textbook: 대기 (wait) + 실.', en: '' },
    { id: 'p30.r4', type: 'mc', prompt: 'Which word is 연습 (practice) + 실?', opts: ['연습실', '교실', '대기실', '미용실'], skill: 'l30.root', explain: 'Textbook: 연습실 = practice room, practice place [연습씰].', en: '' },
    { id: 'p30.r5', type: 'enOpts', prompt: '분장실', opts: ['dressing room; backstage powder room', 'toilet; bathroom', 'beauty parlor', 'waiting room'], skill: 'l30.root', explain: 'Textbook: 분장 (stage makeup) + 실.', en: '' },
    { id: 'p30.r6', type: 'enOpts', prompt: '미용실', opts: ['beauty parlor; hair salon', 'hospital room', 'practice room', 'office'], skill: 'l30.root', explain: 'Textbook: 미용 (beauty treatment) + 실.', en: '' },
    { id: 'p30.r7', type: 'odd', prompt: 'Which pair is WRONG?', opts: ['회의실 = waiting room', '회의실 = meeting room', '대기실 = waiting room', '사무실 = office'], skill: 'l30.root', explain: '회 (meet) + 의 (discuss) + 실 = meeting room.', en: '' },
    { id: 'p30.w1', type: 'mc', prompt: 'At a hospital (병원): which three rooms? (Workbook web)', opts: ['수술실, 병실, 응급실', '교실, 강의실, 양호실', '거실, 침실, 사무실', '회의실, 사무실, 교무실'], skill: 'l30.where', explain: 'Workbook 24.', en: '' },
    { id: 'p30.w2', type: 'mc', prompt: 'At a company (회사): which two rooms? (Workbook web)', opts: ['사무실, 회의실', '거실, 침실', '교장실, 교무실', '병실, 응급실'], skill: 'l30.where', explain: 'Workbook 24.', en: '' },
    { id: 'p30.w3', type: 'enOpts', prompt: 'Where is a 교장실?', opts: ['At a school.', 'At a hospital.', 'At home.', 'At a company.'], skill: 'l30.where', explain: '교장실 = principal’s office (Workbook 21).', en: '' },
    { id: 'p30.w4', type: 'enOpts', prompt: 'Where is a 양호실?', opts: ['At a school.', 'At a hospital.', 'At home.', 'At a company.'], skill: 'l30.where', explain: '양호실 = school infirmary (Workbook 20).', en: '' },
    { id: 'p30.w5', type: 'odd', prompt: 'Which sentence does NOT make sense?', opts: ['회사 거실에서 회의해요.', '회사 회의실에서 회의해요.', '집 거실에서 TV를 봐요.', '병원 병실에서 쉬어요.'], skill: 'l30.where', explain: '거실 (living room) is at home. Meetings: 회의실.', en: '' },
    { id: 'p30.w6', type: 'enOpts', prompt: '“지금 화장실에 누구 있어요?”', opts: ['Is there anyone in the bathroom now?', 'Where is the bathroom now?', 'Who cleaned the bathroom?', 'Is the bathroom open now?'], skill: 'l30.where', explain: 'Workbook dictation 25.', en: '' },
    { id: 'p30.w7', type: 'enOpts', prompt: 'Where do you wait before an interview (the book)?', opts: ['In the 대기실.', 'In the 회의실.', 'In the 사무실.', 'In the 교무실.'], skill: 'l30.where', explain: 'Textbook dialogue: 회의실에서 봐요. 대기실에서 기다려 주세요.', en: '' },
    { id: 'p30.i1', type: 'mc', prompt: '“indoors”', opts: ['실내', '실외', '내실', '실장'], skill: 'l30.inout', explain: '실 + 내 (inside) = 실내.', en: '' },
    { id: 'p30.i2', type: 'enOpts', prompt: 'In 실내, 실외 and 실장, where is 실?', opts: ['At the front of the word.', 'At the end of the word.', 'In the middle.', 'It is not there.'], skill: 'l30.inout', explain: '화장실, 교실: 실 at the end. 실내, 실외, 실장: 실 at the front.', en: '' },
    { id: 'p30.i3', type: 'enOpts', prompt: 'How is 실내 pronounced?', opts: ['[실래]', '[신내]', '[시래]', '[실내] exactly as written'], skill: 'l30.inout', explain: 'ㄹ + ㄴ sounds [ㄹㄹ]: [실래] (the book: sil-lae).', en: '' },
    { id: 'p30.i4', type: 'enOpts', prompt: 'In 실장, 장 means…', opts: ['head, leader', 'inside', 'outside', 'work'], skill: 'l30.inout', explain: 'Textbook: 실 (room) + 장 (head, leader).', en: '' },
    { id: 'p30.i5', type: 'odd', prompt: 'Which pair is WRONG?', opts: ['실외 = indoors', '실외 = outdoors', '실내 = indoors', '실장 = head of the office'], skill: 'l30.inout', explain: '외 = outside → 실외 = outdoors.', en: '' },
    { id: 'p30.i6', type: 'mc', prompt: '“head of the office”', opts: ['실장', '사장', '실내', '교장'], skill: 'l30.inout', explain: '실 + 장 = 실장. (사장 = company owner; 교장 = principal.)', en: '' },
    { id: 'p30.i7', type: 'enOpts', prompt: '“밖이 너무 추워요. 실내에서 기다려요.”', opts: ['It’s too cold outside. Let’s wait indoors.', 'It’s too cold inside. Let’s wait outdoors.', 'It’s too cold in the office.', 'It’s too cold in the waiting room.'], skill: 'l30.inout', explain: '실내 = indoors. (기다려요 can be “let’s wait”, Lesson 16.)', en: '' },
  ],

  vocab: [
    { ko: '화장실', en: 'toilet; bathroom' }, { ko: '분장실', en: 'dressing room (backstage)' }, { ko: '교실', en: 'classroom' },
    { ko: '연습실', en: 'practice room' }, { ko: '대기실', en: 'waiting room' }, { ko: '회의실', en: 'meeting room' },
    { ko: '병실', en: 'hospital room, patient’s room' }, { ko: '미용실', en: 'beauty parlor; hair salon' }, { ko: '사무실', en: 'office' },
    { ko: '교무실', en: 'teacher’s office' }, { ko: '실장', en: 'head of the office' }, { ko: '실내', en: 'indoors' }, { ko: '실외', en: 'outdoors, outside' },
    { ko: '침실', en: 'bedroom' }, { ko: '거실', en: 'living room' }, { ko: '응급실', en: 'emergency room' }, { ko: '조리실', en: 'kitchen (not at home)' },
    { ko: '수술실', en: 'operating room' }, { ko: '강의실', en: 'lecture room (usually at a university)' }, { ko: '휴게실', en: 'break room, lounge' },
    { ko: '양호실', en: 'school infirmary' }, { ko: '교장실', en: 'principal’s office' }, { ko: '오락실', en: 'video arcade' }, { ko: '흡연실', en: 'smoking room' },
  ],
  grp: { '교실': 'class', '강의실': 'class' },
  examples: {
    '화장실': ['지금 화장실에 누구 있어요?', 'Is there anyone in the bathroom now? (WB dictation)'],
    '분장실': ['분장 (stage makeup) + 실 = 분장실', 'dressing room; backstage powder room (Textbook)'],
    '교실': ['교 (school, teach) + 실 (room) = 교실', 'classroom (Textbook)'],
    '연습실': ['연습 (practice) + 실 (room) = 연습실', 'practice room, practice place (Textbook)'],
    '대기실': ['대기실에서 기다려 주세요.', 'Please wait in the waiting room. (Textbook dialogue)'],
    '회의실': ['회의실에서 봐요.', 'You will have it (the interview) in the meeting room. (Textbook dialogue)'],
    '병실': ['병 (disease) + 실 (room) = 병실', 'hospital room, patient’s room (Textbook)'],
    '미용실': ['미용 (beauty treatment) + 실 (room) = 미용실', 'beauty parlor; hair salon (Textbook)'],
    '사무실': ['사무실에서 이상한 냄새가 나요.', 'It smells weird/bad in the office. (WB dictation)'],
    '교무실': ['교 (school, teach) + 무 (work) + 실 (room) = 교무실', 'teacher’s office (Textbook)'],
    '실장': ['실 (room) + 장 (head, leader) = 실장', 'head of the office (Textbook)'],
    '실내': ['실 (room) + 내 (inside) = 실내', 'indoors (Textbook)'],
    '실외': ['실 (room) + 외 (outside) = 실외', 'outdoors, outside (Textbook)'],
    '침실': ['침실에 거울이 두 개 있어요.', 'There are two mirrors in the bedroom. (WB dictation)'],
    '거실': ['집: 거실, 침실', 'home: living room, bedroom (WB web)'],
    '응급실': ['병원: 수술실, 병실, 응급실', 'hospital: operating room, patient’s room, emergency room (WB web)'],
    '조리실': ['조리실 (調理室)', 'kitchen (except for the one at home) (WB 16)'],
    '수술실': ['병원: 수술실, 병실, 응급실', 'hospital: operating room, patient’s room, emergency room (WB web)'],
    '강의실': ['학교: 교실, 강의실, 양호실, 교무실, 교장실', 'school: classroom, lecture room, infirmary, teachers’ office, principal’s office (WB web)'],
    '휴게실': ['휴게실 (休憩室)', 'break room, resting room, lounge (WB 19)'],
    '양호실': ['학교: 교실, 강의실, 양호실, 교무실, 교장실', 'school: … school infirmary … (WB web)'],
    '교장실': ['학교: 교실, 강의실, 양호실, 교무실, 교장실', 'school: … principal’s office (WB web)'],
    '오락실': ['오락실 (娛樂室)', 'video arcade (WB 22)'],
    '흡연실': ['흡연실 (吸煙室)', 'smoking room (WB 23)'],
  },
};
/* word answers: a one-jamo slip can be another word (실내 / 실래…): switch the typo leniency off for word answers */
(() => {
  const G = MM.game[30], off = q => { if (q && q.ans && q.lenient === undefined) q.lenient = false; };
  Object.values(G.shifts).forEach(sh => { sh.scenes.forEach(s => off(s.q)); sh.cctv.forEach(off); });
  G.pool.forEach(off);
})();

/* ---- src/l30/mnemo_L30.js ---- */
/* GENERATED by tools/mnemo_build.js from mnemo/korean3-mnemo.json. Do not edit by hand. */
MM.mnemo[30] = {"cards":[{"id":"ko-k3-0485","w":"화장실","cs":"toaleta, záchod","en":"toilet; bathroom","p":"n","o":"s","ex":"지금 화장실에 누구 있어요?","exc":"Je teď někdo na záchodě?","m":"化粧 líčení + 室 místnost = místnost na upravení se. V Koreji bývá záchod v koupelně.","r":["hwa-化","jang-粧","sil-室"]},{"id":"ko-k3-0486","w":"분장실","cs":"divadelní šatna; maskérna (v zákulisí)","en":"dressing room (backstage)","p":"n","o":"s","rz":["분장 + 실 = 분장실","분장 (jevištní líčení, maskování) + 실 (místnost) = maskérna, šatna v zákulisí"],"m":"扮 přestrojit se, líčit se + 粧 líčit se, zdobit + 室 místnost = místnost pro líčení herců v zákulisí, tedy maskérna nebo divadelní šatna.","r":["bun-扮","jang-粧","sil-室"]},{"id":"ko-k3-0487","w":"교실","cs":"třída; učebna","en":"classroom","p":"n","o":"s","rz":["교 + 실 = 교실","교 (učit, škola) + 실 (místnost) = třída, učebna"],"m":"敎 učit + 室 místnost = místnost, kde se učí, tedy třída nebo učebna. Kořen 室 (místnost) najdeš ve všech názvech místností této lekce.","r":["gyo-敎","sil-室"]},{"id":"ko-k3-0488","w":"연습실","cs":"zkušebna; cvičební místnost","en":"practice room","p":"n","o":"s","rz":["연습 + 실 = 연습실","연습 (cvičení, trénink) + 실 (místnost) = zkušebna"],"m":"練 trénovat + 習 cvičit + 室 místnost = místnost na trénování a zkoušení (třeba hudby nebo tance), tedy zkušebna. Samotné 연습 znamená ‚cvičení, zkouška‘.","r":["yeon-練","seup-習","sil-室"]},{"id":"ko-k3-0489","w":"대기실","cs":"čekárna","en":"waiting room","p":"n","o":"s","ex":"대기실에서 기다려 주세요.","exc":"Počkejte prosím v čekárně. (에서 → kde)","m":"待 čekat + 機 příležitost, chvíle + 室 místnost = místnost, kde se čeká na svou chvíli, tedy čekárna. Samotné 대기 znamená ‚čekání, pohotovost‘.","r":["dae-待","gi-機","sil-室"]},{"id":"ko-k3-0490","w":"회의실","cs":"zasedací místnost; zasedačka; jednací místnost","en":"meeting room","p":"n","o":"s","ex":"회의실에서 봐요.","exc":"Uvidíme se v zasedačce. (에서 → kde)","m":"會 setkání + 議 projednávat, rada + 室 místnost = místnost pro schůze a porady, tedy zasedačka. Samotné 회의 znamená ‚schůze, porada‘.","r":["hoe-會","ui-議","sil-室"]},{"id":"ko-k3-0491","w":"병실","cs":"nemocniční pokoj","en":"hospital room, patient’s room","p":"n","o":"s","rz":["병 + 실 = 병실","병 (nemoc) + 실 (místnost) = nemocniční pokoj"],"m":"病 nemoc + 室 místnost = pokoj pro nemocné v nemocnici. Stejné 病 najdeš i ve slově 병원 (nemocnice) nebo 병가 (nemocenská dovolená).","r":["byeong-病","sil-室"]},{"id":"ko-k3-0492","w":"미용실","cs":"kadeřnictví; kosmetický salon","en":"beauty parlor; hair salon","p":"n","o":"s","rz":["미용 + 실 = 미용실","미용 (péče o krásu, kosmetika) + 실 (místnost) = kadeřnictví, kosmetický salon"],"m":"美 krása + 容 vzhled, podoba + 室 místnost = salon krásy (v Koreji se tak běžně říká kadeřnictví). Stejné 美 je i ve slově 미술 (výtvarné umění).","r":["mi-美","yong-容","sil-室"]},{"id":"ko-k3-0493","w":"교무실","cs":"sborovna; kabinet učitelů","en":"teacher’s office","p":"n","o":"s","rz":["교 + 무 + 실 = 교무실","교 (učit, škola) + 무 (povinnost, agenda) + 실 (místnost) = sborovna"],"m":"敎 učit + 務 povinnost, agenda + 室 místnost = místnost pro školní agendu a učitele, tedy sborovna (podobně jako 사무실 je kancelář).","r":["gyo-敎","mu-務","sil-室"]},{"id":"ko-k3-0494","w":"실장","cs":"vedoucí oddělení; vedoucí kanceláře / provozu","en":"head of the office","p":"n","o":"s","rz":["실 + 장 = 실장","실 (místnost, oddělení) + 장 (vedoucí) = vedoucí oddělení"],"m":"室 místnost, oddělení + 長 vedoucí, hlava = vedoucí oddělení nebo kanceláře (s uctivou koncovkou 실장님 se tak oslovuje i vedoucí provozovny či manažer).","r":["sil-室","jang-長"]},{"id":"ko-k3-0495","w":"실내","cs":"vnitřek; interiér; uvnitř (budovy)","en":"indoors","p":"n","o":"s","rz":["실 + 내 = 실내","실 (místnost) + 내 (uvnitř) = vnitřek, uvnitř"],"m":"室 místnost + 內 uvnitř = vnitřní prostor, interiér (např. 실내 수영장 = krytý bazén). Opak: 실외 (室 místnost + 外 venek = venku, exteriér).","r":["sil-室","nae-內"]},{"id":"ko-k3-0496","w":"실외","cs":"venku, venkovní prostor","en":"outdoors, outside","p":"n","o":"s","rz":["실 + 외 = 실외","místnost + venek = venku"],"m":"室 místnost + 外 venek. Opak 실내 (uvnitř). 실외 수영장 = venkovní bazén.","r":["sil-室","oe-外"]},{"id":"ko-k3-0497","w":"침실","cs":"ložnice","en":"bedroom","p":"n","o":"s","ex":"침실에 거울이 두 개 있어요.","exc":"V ložnici jsou dvě zrcadla. (에 → kde; 이 → 1. pád)","m":"寢 spát + 室 místnost = místnost na spaní, tedy ložnice. Stejný kořen 寢 je i ve slově 침대 (postel).","r":["chim-寢","sil-室"]},{"id":"ko-k3-0498","w":"거실","cs":"obývací pokoj; obývák","en":"living room","p":"n","o":"s","ex":"집: 거실, 침실","exc":"domov: obývací pokoj, ložnice","m":"居 bydlet, pobývat + 室 místnost = hlavní místnost, kde se doma pobývá, tedy obývací pokoj. Stejné 居 najdeš i ve slově 주거 (bydlení).","r":["geo-居","sil-室"]},{"id":"ko-k3-0499","w":"응급실","cs":"pohotovost; urgentní příjem","en":"emergency room","p":"n","o":"s","ex":"병원: 수술실, 병실, 응급실","exc":"nemocnice: operační sál, nemocniční pokoj, pohotovost","m":"應 reagovat + 急 naléhavý + 室 místnost = místnost pro naléhavé případy, tedy lékařská pohotovost (urgentní příjem). Samotné 응급 znamená ‚naléhavý, první pomoc‘.","r":["eung-應","geup-急","sil-室"]},{"id":"ko-k3-0500","w":"조리실","cs":"kuchyňka; přípravna jídel (ve škole, restauraci, nemocnici)","en":"kitchen (not at home)","p":"n","o":"s","ex":"조리실 (調理室)","exc":"조리실 (přípravna jídel, kuchyňka)","m":"調 připravovat, ladit + 理 upravit + 室 místnost = místnost pro přípravu pokrmů mimo domácnost (např. ve škole nebo firmě; domácí kuchyně je 부엌 nebo 주방).","r":["jo-調","ri-理","sil-室"]},{"id":"ko-k3-0501","w":"수술실","cs":"operační sál","en":"operating room","p":"n","o":"s","ex":"병원: 수술실, 병실, 응급실","exc":"nemocnice: operační sál, nemocniční pokoj, pohotovost","m":"手 ruka + 術 technika, zákrok (수술 = operace) + 室 místnost = místnost pro chirurgické zákroky, tedy operační sál. Vazba: 수술을 받다 = podstoupit operaci.","r":["su-手","sul-術","sil-室"]},{"id":"ko-k3-0502","w":"강의실","cs":"posluchárna; přednáškový sál (na vysoké škole)","en":"lecture room (usually at a university)","p":"n","o":"s","ex":"학교: 교실, 강의실, 양호실, 교무실, 교장실","exc":"škola: třída, posluchárna, ošetřovna, sborovna, ředitelna","m":"講 přednášet + 義 význam (강의 = přednáška) + 室 místnost = místnost pro vysokoškolské přednášky, tedy posluchárna (na rozdíl od školní třídy 교실).","r":["gang-講","ui-義","sil-室"]},{"id":"ko-k3-0503","w":"휴게실","cs":"odpočívárna, místnost pro odpočinek","en":"break room, lounge","p":"n","o":"s","ex":"휴게실 (休憩室)","exc":"odpočívárna","m":"休 odpočinek + 憩 oddech + 室 místnost. Pozor na pravopis: 휴게실, ne 휴계실.","r":["hyu-休","ge-憩","sil-室"]},{"id":"ko-k3-0504","w":"양호실","cs":"školní ošetřovna; marodka","en":"school infirmary","p":"n","o":"s","ex":"학교: 교실, 강의실, 양호실, 교무실, 교장실","exc":"škola: … školní ošetřovna …","m":"養 pečovat + 護 chránit, opatrovat + 室 místnost = místnost, kde se pečuje o zraněné nebo nemocné žáky, tedy školní ošetřovna (dnes se jí říká i 보건실).","r":["yang-養","ho-護","sil-室"]},{"id":"ko-k3-0505","w":"교장실","cs":"ředitelna (ve škole)","en":"principal’s office","p":"n","o":"s","ex":"학교: 교실, 강의실, 양호실, 교무실, 교장실","exc":"škola: … ředitelna","m":"校 škola + 長 vedoucí, hlava (교장 = ředitel školy) + 室 místnost = kancelář ředitele školy, tedy ředitelna.","r":["gyo-校","jang-長","sil-室"]},{"id":"ko-k3-0506","w":"오락실","cs":"videoherna; herna s automaty","en":"video arcade","p":"n","o":"s","ex":"오락실 (娛樂室)","exc":"오락실 (videoherna)","m":"娛 bavit se + 樂 radost, zábava (오락 = zábava) + 室 místnost = místnost pro zábavu, tedy herna s videohrami a arkádovými automaty.","r":["o-娛","rak-樂","sil-室"]},{"id":"ko-k3-0507","w":"흡연실","cs":"kuřárna; místnost pro kuřáky","en":"smoking room","p":"n","o":"s","ex":"흡연실 (吸煙室)","exc":"흡연실 (kuřárna)","m":"吸 vdechovat, nasávat + 煙 kouř, dým + 室 místnost = místnost pro vdechování kouře, tedy kuřárna. Vyslovuje se [흐변실]. Opak: 금연실 (nekuřácká místnost).","r":["heup-吸","yeon-煙","sil-室"]}],"gram":{"id":"ko-k3-g30","w":"실 (室)","en":"Word Builder 2","cs":"slovotvorný kořen 실 (室) – místnost, pokoj, sál","vy":"Sinokorejský kořen 실 (室) znamená ‚místnost, pokoj, sál‘ nebo ‚kancelář‘. Nejčastěji stojí na konci složených podstatných jmen a určuje konkrétní účelové místnosti ve škole, nemocnici, firmě nebo doma (např. 교실, 화장실, 회의실, 거실). Na začátku slova se objevuje například ve výrazech 실내 (interiér, uvnitř) nebo 실장 (vedoucí oddělení či kanceláře).","m":"Slabika 실 (室) tvoří oficiálnější či účelové názvy místností (화장실 = toaleta, 거실 = obývák, 수술실 = operační sál), zatímco 방 (房) se používá spíš pro běžné obytné pokoje nebo podniky (내 방 = můj pokoj, PC방 = internetová herna).","s":[["실 (室)","kořen 실 (室) souvisí s ‚místností‘ nebo ‚pokojem‘"],["화장 + 실 = 화장실","líčení/úprava + místnost = toaleta, koupelna"],["분장 + 실 = 분장실","divadelní líčení + místnost = šatna (v divadle, zákulisí)"],["교 + 실 = 교실","učit/škola + místnost = učebna, třída"],["대기 + 실 = 대기실","čekání + místnost = čekárna"],["회 + 의 + 실 = 회의실","setkání + jednání + místnost = zasedací místnost, konferenční sál"],["사 + 무 + 실 = 사무실","věc/práce + úkol + místnost = kancelář"],["실 + 장 = 실장","místnost/oddělení + vedoucí = vedoucí oddělení / šéf kanceláře"],["실 + 내 = 실내 · 실 + 외 = 실외","vnitřek (interiér) · venek (exteriér)"],["면접은 어디에서 봐요?","Kde probíhá ten pohovor?"],["회의실에서 봐요. 대기실에서 기다려 주세요.","V zasedací místnosti. Počkejte prosím v čekárně."],["네, 알겠습니다.","Dobře, rozumím."],["지금 화장실에 누구 있어요?","Je teď někdo na záchodě?"],["침실에 거울이 두 개 있어요.","V ložnici jsou dvě zrcadla."],["사무실에서 이상한 냄새가 나요.","V kanceláři je cítit nějaký divný zápach."],["학교: 교실 · 강의실 · 양호실 · 교무실 · 교장실","škola: učebna · přednáškový sál · ošetřovna · sborovna · ředitelna"],["병원: 수술실 · 병실 · 응급실 / 집: 거실 · 침실 / 회사: 사무실 · 회의실","nemocnice: operační sál · nemocniční pokoj · pohotovost / domov: obývák · ložnice / firma: kancelář · zasedačka"]]}};
Object.assign(MM.mnRoots, {"hwa-化":["화","化","změnit, proměnit"],"jang-粧":["장","粧","líčit se, zdobit"],"sil-室":["실","室","místnost"],"bun-扮":["분","扮","přestrojit se, líčit se"],"gyo-敎":["교","敎","učit"],"yeon-練":["연","練","cvičit, trénovat"],"seup-習":["습","習","cvičit, učit se"],"dae-待":["대","待","čekat, hostit"],"gi-機":["기","機","stroj; příležitost"],"hoe-會":["회","會","setkání, spolek"],"ui-議":["의","議","projednávat, rada"],"byeong-病":["병","病","nemoc, choroba"],"mi-美":["미","美","krásný, krása"],"yong-容":["용","容","pojmout, obsah"],"mu-務":["무","務","povinnost, úkol"],"jang-長":["장","長","dlouhý"],"nae-內":["내","內","uvnitř"],"oe-外":["외","外","venek, cizí"],"chim-寢":["침","寢","spát"],"geo-居":["거","居","pobývat, bydlet"],"eung-應":["응","應","odpovídat, reagovat"],"geup-急":["급","急","naléhavý"],"jo-調":["조","調","zkoumat, ladit"],"ri-理":["리","理","uspořádat, princip"],"su-手":["수","手","ruka"],"sul-術":["술","術","umění, technika"],"gang-講":["강","講","přednášet, vysvětlovat"],"ui-義":["의","義","význam, smysl, spravedlnost"],"hyu-休":["휴","休","odpočinek, přestávka"],"ge-憩":["게","憩","oddech"],"yang-養":["양","養","živit, pěstovat"],"ho-護":["호","護","chránit, opatrovat"],"gyo-校":["교","校","škola"],"o-娛":["오","娛","bavit se, radovat se"],"rak-樂":["락","樂","zábava, radost (čtení 락)"],"heup-吸":["흡","吸","vdechovat, nasávat"],"yeon-煙":["연","煙","kouř, dým"]});

/* ---- src/l30/reads_L30.js ---- */
/* reads_L30.js — Staff Group Chat + Neighborhood Notice Board for Lesson 30 (Word Builder 실).
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (read through in the 2026-10-16 native-speaker review). Staff group chat: the boss is present → Minji uses 존댓말. */
MM.reads[30] = [
  {
    id: 'l30.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l30.sticker', ko: '“환영해요!” 스티커', en: '“Welcome!” sticker', desc: 'A sofa with a cat on it and the word 대기실.' },
    lines: [
      { who: 'boss', ko: '여러분, 새 직원이 와요. 수아 씨예요! 다음 주부터 일해요.', en: 'Everyone, a new staff member is coming. It’s Sua! She starts next week.' },
      { who: 'minji', ko: '와! 면접 어땠어요? 회의실이 창고였어요? ㅋㅋ', en: 'Wow! How was the interview? Was the meeting room the stockroom? lol' },
      { who: 'sua', ko: '네 ㅋㅋ 대기실은 소파였어요. 라면이 {저보다|보다} 먼저 기다리고 있었어요.', en: 'Yes lol. The waiting room was a sofa. Ramyeon was waiting there before me.' },
      { who: 'boss', ko: '수아 씨는 낮에 일하고, 저녁에는 강의실에서 공부할 거예요.', en: 'Sua will work during the day, and study in the lecture room in the evening.' },
      { who: 'minji', ko: '그럼 휴게실에서 같이 {점심|점심} 먹어요!', en: 'Then let’s have lunch together in the break room!' },
      { who: 'you', ko: '휴게실 소파는 라면 거예요. 조심하세요! ㅋㅋ', en: 'The break-room sofa belongs to Ramyeon. Be careful! lol' },
    ],
    gloss: { '보다': 'than (저보다 = than me)', '점심': 'lunch' },
    qs: [
      { id: 'r30c.q1', type: 'enOpts', prompt: 'Who is the new staff member?', opts: ['Sua.', 'Hyunwoo.', 'Mr. Lee.', 'Grandma.'], explain: '새 직원이 와요. 수아 씨예요!' },
      { id: 'r30c.q2', type: 'enOpts', prompt: 'What was the waiting room at the interview?', opts: ['A sofa.', 'The stockroom.', 'The restroom.', 'Mr. Park’s office.'], explain: '대기실은 소파였어요. (The meeting room was the stockroom.)' },
      { id: 'r30c.q3', type: 'enOpts', prompt: 'Where will Sua study in the evening?', opts: ['In a lecture room (at university).', 'In the break room.', 'In the stockroom.', 'In a hospital room.'], explain: '저녁에는 강의실에서 공부할 거예요.' },
    ],
  },
  {
    id: 'l30.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l30.notice', ko: '새 도서관 안내도', en: 'New-library floor plan', desc: 'Every room ends in 실. Someone has drawn a cat in the 휴게실.' },
    heading: '새 도서관이 문을 열어요!',
    lines: [
      { ko: '다음 주 월요일에 달빛마트 옆 새 도서관이 문을 열어요.', en: 'Next Monday the new library next to Moonlight Mart opens.' },
      { ko: '1층에는 큰 {열람실|열람실}과 화장실이 있어요.', en: 'On the first floor there is a big reading room and restrooms.' },
      { ko: '2층에는 회의실과 연습실이 있어요. 회의실은 동네 주민들이 {무료|무료}로 쓸 수 있어요.', en: 'On the second floor there are a meeting room and a practice room. Residents can use the meeting room for free.' },
      { ko: '3층에는 아이들을 {위한|위한} 작은 교실과 휴게실이 있어요.', en: 'On the third floor there are a small classroom for children and a lounge.' },
      { ko: '도서관 실내에서는 음식을 먹지 마세요. 실외 {테이블|테이블}은 괜찮아요.', en: 'Please don’t eat food inside the library. The outdoor tables are fine.' },
      { ko: '도서관 이름은 “달빛 도서관”이에요. 동네 주민들이 지었어요. 감사합니다!', en: 'The library’s name is “Moonlight Library”. The residents named it. Thank you!' },
    ],
    gloss: { '위한': 'for (위하다 + -(으)ㄴ: the noun form of 위해, Lesson 17)', '열람실': 'reading room (열람 = reading, browsing + 실)', '무료': 'free (of charge)', '테이블': 'table' },
    qs: [
      { id: 'r30b.q1', type: 'enOpts', prompt: 'What is on the second floor?', opts: ['A meeting room and a practice room.', 'A reading room and restrooms.', 'A classroom and a lounge.', 'An office and a waiting room.'], explain: '2층에는 회의실과 연습실이 있어요.' },
      { id: 'r30b.q2', type: 'enOpts', prompt: 'Where can you eat?', opts: ['At the outdoor tables.', 'Anywhere inside.', 'In the reading room.', 'In the meeting room.'], explain: '실내에서는 음식을 먹지 마세요. 실외 테이블은 괜찮아요.' },
      { id: 'r30b.q3', type: 'enOpts', prompt: 'What is the library called?', opts: ['Moonlight Library (달빛 도서관).', 'Ramyeon Library.', 'Neighborhood Library.', 'It has no name yet.'], explain: '도서관 이름은 “달빛 도서관”이에요. (Lesson 29: the residents named it.)' },
    ],
  },
];

/* ---- src/l30/textbook_L30.js ---- */
/* textbook_L30.js — Korean 3, Lesson 30 (textbook p.185–188, answers p.199). Word Builder 2: 실 (室). Romanization removed.
   The PDF text layer garbles the keyword on p.185 (“प”) → restored as 실 from the page.
   Track 59 = the keyword and the word list, each read twice (4.9–30.8 s); per-word clips found by silence detection + ASR
   (sherpa-onnx Whisper base; several words unclear on ASR, boundaries follow the regular two-readings pattern). It does not read the parts.
   Track 60 = dialogue. Block type 'words' (tb.js wordsHtml, from Lesson 23). */
(() => {
  MM.lessons[30] = {
    n: 30, ko: '실 (室)', en: 'Word Builder 2',
    pages: { tb: '185–188', tbKey: '199', wb: '116–119', wbKey: '142' },
  };
  const W = (ko, hanja, parts, en, from, to) => ({ ko, hanja, parts, en, clip: from != null ? ['59', from, to] : null });
  MM.textbook[30] = {
    blocks: [
      { t: 'h', text: 'Lesson 30 · Word Builder 2', ko: '실 (室)' },
      { t: 'p', text: 'Word Builder lessons are designed to help you understand how to more efficiently expand your vocabulary by learning/understanding some common and basic building blocks of Korean words. Many (not all) of the words and letters introduced through Word Builder lessons are based on Chinese characters, or 한자, but the meanings can differ from modern-day Chinese. Your goal, through these lessons, is to understand how words are formed and remember the keywords in Korean in order to expand your Korean vocabulary from there. You certainly do not have to memorize the Hanja characters, but if you want to, feel free!' },
      { t: 'track', id: '59', from: 4.9, to: 6.5, label: 'Track 59 · 실' },
      { t: 'meaning', label: 'Today’s keyword', ko: '실 (室)', text: 'The keyword in this lesson is 실. The Chinese character for 실 is 室. The word 실 is related to “room”.' },

      { t: 'h2', text: 'Sample Expressions' },
      { t: 'track', id: '59', from: 6.5, to: 30.8, label: 'Track 59 · all the words (each read twice)' },
      { t: 'words', items: [
        W('화장실', '化粧室', '화장 (makeup) + 실 (room)', 'toilet; bathroom', 6.5, 8.7),
        W('분장실', '扮裝室', '분장 (stage makeup) + 실', 'dressing room; backstage powder room', 8.7, 10.85),
        W('교실', '敎室', '교 (school, teach) + 실 (room)', 'classroom', 10.85, 12.5),
        W('연습실', '練習室', '연습 (practice) + 실 (room)', 'practice room, practice place', 12.5, 14.45),
        W('대기실', '待機室', '대기 (wait) + 실 (room)', 'waiting room', 14.45, 16.35),
        W('회의실', '會議室', '회 (meet) + 의 (discuss) + 실 (room)', 'meeting room, conference room', 16.35, 18.2),
        W('병실', '病室', '병 (disease) + 실 (room)', 'hospital room, patient’s room', 18.2, 19.95),
        W('미용실', '美容室', '미용 (beauty treatment) + 실 (room)', 'beauty parlor; hair salon', 19.95, 21.8),
        W('사무실', '事務室', '사 (work) + 무 (work, task) + 실 (room)', 'office', 21.8, 23.6),
        W('교무실', '敎務室', '교 (school, teach) + 무 (work) + 실 (room)', 'teacher’s office', 23.6, 25.5),
        W('실장', '室長', '실 (room) + 장 (head, leader)', 'head of the office', 25.5, 27.25),
        W('실내', '室內', '실 (room) + 내 (inside)', 'indoors', 27.25, 28.95),
        W('실외', '室外', '실 (room) + 외 (outside)', 'outdoors, outside', 28.95, 30.8),
      ] },
      { t: 'p', text: '* 분장 (扮裝) also means “makeup”, but is specific to stage/theater makeup. Therefore, 분장실 (扮裝室) = dressing room; backstage powder room.' },
      { t: 'note', label: 'App note (not from the book)', text: 'How they sound (the book shows this in romanization; here in hangul): 연습실 [연습씰], 실장 [실짱], 실내 [실래], 실외 [시뢰], 회의실 [회이실]. 실 can stand at the end (화장실, 교실) or at the front (실장, 실내, 실외). 실내 and 실외 are opposites: 내 = inside, 외 = outside.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '60', lines: [
        { id: 'd1', sp: 'A', ko: '면접은 어디에서 봐요?', en: 'Where do I have an interview?' },
        { id: 'd2', sp: 'B', ko: '회의실에서 봐요. 대기실에서 기다려 주세요.', en: 'You will have it in the meeting room. Please wait in the waiting room.' },
        { id: 'd3', sp: 'A', ko: '네, 알겠습니다.', en: 'Okay, I will.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '면접 = (job) interview; 면접을 보다 = to have an interview (like 시험을 보다). 알겠습니다 = I understand / Okay (formal, Lesson 27 type 1).' },

      { t: 'exercises', title: 'Exercises for Lesson 30', items: [
        { id: 'x1', q: 'The word (  ) is related to “room”.', ans: ['실'], full: '실 (室)', skill: 'l30.root',
          soft: [{ p: '실 室', note: 'Accepted. The key: 실 (室).' }],
          diag: [{ p: '방', note: '방 also means room, but the Word Builder keyword of this lesson is the Sino-Korean 실 (室).' }, { p: '교실', note: '교실 = classroom. The keyword itself is one syllable: 실.' }, { p: '학', note: '학 (學) was the keyword of Lesson 23 (learning). Room = 실.' }] },
        { id: 'x2', q: 'Write in Korean (Sino-Korean): Toilet; bathroom', hint: '화장 (化粧) = make-up', ans: ['화장실'], full: '화장실 (化粧室)', skill: 'l30.root',
          diag: [{ p: '분장실', note: '분장실 = dressing room (stage makeup). Toilet = 화장 + 실 = 화장실.' }, { p: '화장', note: 'Add 실 (room): 화장실.' }] },
        { id: 'x3', q: 'Write in Korean (Sino-Korean): Classroom', hint: '교 (敎) = school; teach', ans: ['교실'], full: '교실 (敎室)', skill: 'l30.root',
          soft: [{ p: '강의실', note: 'Also a classroom — usually a lecture room at a university (Workbook 18). The key: 교실.' }],
          diag: [{ p: '교무실', note: '교무실 = teachers’ office (교 + 무 + 실). Classroom = 교실.' }, { p: '학교', note: '학교 = school (Lesson 23). Classroom = 교 + 실 = 교실.' }] },
        { id: 'x4', q: 'Write in Korean (Sino-Korean): Hospital room; patient’s room', hint: '병 (病) = disease', ans: ['병실'], full: '병실 (病室)', skill: 'l30.root',
          diag: [{ p: '병원', note: '병원 = hospital. The room for a patient = 병 + 실 = 병실.' }, { p: '응급실', note: '응급실 = emergency room (Workbook 15). Patient’s room = 병실.' }] },
        { id: 'x5', q: 'Write in Korean (Sino-Korean): Indoors', hint: '내 (內) = inside', ans: ['실내'], full: '실내 (室內)', skill: 'l30.inout',
          diag: [{ p: '내실', note: 'Here 실 comes first: 실 + 내 = 실내.' }, { p: '실외', note: '실외 = outdoors (외 = outside). Indoors = 실내.' }, { p: '실래', note: 'Pronounced [실래], written 실내.' }] },
      ] },
    ],
  };
})();

/* ---- src/l30/workbook_L30.js ---- */
/* workbook_L30.js — Korean 3 Workbook, Lesson 30 (p.116–119, answer key p.142). Word Builder 실 (室).
   Section I (Vocabulary, Part 1): 23 words → match (4 rounds: 6 + 6 + 6 + 5) with the key's English; the book's hanja is shown as keyNote.
   Section II (Vocabulary, Part 2): the vocabulary web (24) → NEW wb.js type 'web': 실 in the middle, hubs 학교 (5), 병원 (3), 집 (2),
   회사 (2), the 12 words of the book's word bank; each word is sent to a hub; checked as a whole (the key's web; any order in a hub).
   Section III dictation = WB Track 73, 74, 75 (fill the missing words; 74 has two blanks typed in order; ASR matches the key). */
(() => {
  MM.workbook[30] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary, Part 1',
        task: 'Define/translate each word to English using what you know or a dictionary. Here: match each word to its meaning (the key’s English).',
        type: 'match', skill: 'l30.vocab',
        items: [
          { n: 1, ko: '화장실', en: 'toilet; bathroom', keyNote: '化粧室' },
          { n: 2, ko: '실외', en: 'outdoors, outside', keyNote: '室外' },
          { n: 3, ko: '실내', en: 'indoors', keyNote: '室內' },
          { n: 4, ko: '실장', en: 'head of the office', keyNote: '室長' },
          { n: 5, ko: '교무실', en: 'teacher’s office', keyNote: '敎務室' },
          { n: 6, ko: '사무실', en: 'office', keyNote: '事務室' },
          { n: 7, ko: '미용실', en: 'beauty parlor; hairdresser’s place', keyNote: '美容室' },
          { n: 8, ko: '병실', en: 'hospital room, patient’s room', keyNote: '病室' },
          { n: 9, ko: '회의실', en: 'meeting room, conference room', keyNote: '會議室' },
          { n: 10, ko: '대기실', en: 'waiting room', keyNote: '待機室' },
          { n: 11, ko: '연습실', en: 'practice room, practice place', keyNote: '練習室' },
          { n: 12, ko: '교실', en: 'classroom', keyNote: '敎室' },
          { n: 13, ko: '침실', en: 'bedroom', keyNote: '寢室' },
          { n: 14, ko: '거실', en: 'living room', keyNote: '居室' },
          { n: 15, ko: '응급실', en: 'emergency room', keyNote: '應急室' },
          { n: 16, ko: '조리실', en: 'kitchen (except for the one at home)', keyNote: '調理室' },
          { n: 17, ko: '수술실', en: 'operating room, operating theater', keyNote: '手術室' },
          { n: 18, ko: '강의실', en: 'classroom, lecture room (usually in university)', keyNote: '講義室' },
          { n: 19, ko: '휴게실', en: 'break room, resting room, lounge', keyNote: '休憩室' },
          { n: 20, ko: '양호실', en: 'school infirmary', keyNote: '養護室' },
          { n: 21, ko: '교장실', en: 'principal’s office; head teacher’s office', keyNote: '校長室' },
          { n: 22, ko: '오락실', en: 'video arcade', keyNote: '娛樂室' },
          { n: 23, ko: '흡연실', en: 'smoking room', keyNote: '吸煙室' },
        ],
      },
      {
        id: 'II', title: 'Section II – Vocabulary, Part 2',
        task: 'Complete the vocabulary web by filling in the blanks with words from the Word Bank most commonly associated with each of the categories. All words were defined in Section I.',
        type: 'web', skill: 'l30.where',
        items: [
          { n: 24, center: '실 (室)', skill: 'l30.where',
            cats: [
              { ko: '학교', en: 'school', words: ['강의실', '교실', '양호실', '교무실', '교장실'] },
              { ko: '병원', en: 'hospital', words: ['수술실', '병실', '응급실'] },
              { ko: '집', en: 'home', words: ['거실', '침실'] },
              { ko: '회사', en: 'company', words: ['사무실', '회의실'] },
            ],
            bank: ['교실', '거실', '강의실', '침실', '수술실', '병실', '양호실', '응급실', '사무실', '교장실', '회의실', '교무실'],
            keyNote: 'App note: 강의실 (lecture room) is usually at a university — in the key’s web it goes with 학교 (대학교 is a 학교 too).' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then fill in the blanks with the missing word. Each phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 25, track: 'wb73', label: 'Track 73', ko: '지금 (___) 누구 있어요?', ans: ['화장실에'], full: '지금 화장실에 누구 있어요?', lenient: false, en: 'Is there anyone in the bathroom now?',
            soft: [{ p: '지금 화장실에 누구 있어요', note: 'Accepted (the whole sentence).' }], diag: [{ p: '화장실', note: 'Listen to the end: 화장실에 (in the bathroom).' }] },
          { n: 26, track: 'wb74', label: 'Track 74', ko: '(___) 거울이 (___).', note: 'Two blanks: type both missing parts, in order.', ans: ['침실에 두 개 있어요'], full: '침실에 거울이 두 개 있어요.', lenient: false, en: 'There are two mirrors in the bedroom.',
            soft: [{ p: '침실에 거울이 두 개 있어요', note: 'Accepted (the whole sentence).' }, { p: '침실에 2개 있어요', note: 'Accepted. The key writes 두 개.' }], diag: [{ p: '침실에', note: 'That is the first blank. The second one is after 거울이: 두 개 있어요.' }] },
          { n: 27, track: 'wb75', label: 'Track 75', ko: '(___) 냄새가 나요.', ans: ['사무실에서 이상한'], full: '사무실에서 이상한 냄새가 나요.', lenient: false, en: 'It smells weird/bad in the office.',
            soft: [{ p: '사무실에서 이상한 냄새가 나요', note: 'Accepted (the whole sentence).' }], diag: [{ p: '사무실에서', note: 'One more word before 냄새: 이상한 (strange).' }] },
        ],
      },
    ],
  };
})();

