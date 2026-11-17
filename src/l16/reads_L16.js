/* reads_L16.js — Staff Group Chat + Neighborhood Notice Board for Lesson 16.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[16] = [
  {
    id: 'l16.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l16.sticker', ko: '같이 스티커', en: '“Together” sticker', desc: 'Two hands holding one cup of ramen. Mr. Park bought a hundred of them.' },
    lines: [
      { who: 'boss', ko: '이번 주 토요일에 다 같이 저녁 먹어요!', en: 'Let’s all have dinner together this Saturday!' },
      { who: 'minji', ko: '좋아요! 뭐 먹을까요?', en: 'Great! What shall we eat?' },
      { who: 'boss', ko: '{고기|고기} 먹어요. 학교 앞에 맛있는 집 있어요.', en: 'Let’s eat meat. There’s a good place in front of the university.' },
      { who: 'minji', ko: '음… 거기 너무 비싼 것 같아요. 다른 데 가요.', en: 'Hmm… I think that place is too expensive. Let’s go somewhere else.' },
      { who: 'boss', ko: '그럼 우체국 옆 냉면 집 가요. 일곱 시에 가게 앞에서 만나요.', en: 'Then let’s go to the cold noodle place next to the post office. Let’s meet in front of the store at seven.' },
      { who: 'minji', ko: '네! 현우 씨도 같이 가요?', en: 'Okay! Is Hyunwoo coming with us too?' },
      { who: 'boss', ko: '현우 씨는 토요일에 일해요. ㅋㅋ', en: 'Hyunwoo works on Saturday. lol' },
    ],
    gloss: { '고기': 'meat' },
    qs: [
      { id: 'r16c.q1', type: 'enOpts', prompt: 'What does Mr. Park suggest first?', opts: ['Having dinner together on Saturday.', 'Working together on Saturday.', 'Cleaning the store on Saturday.', 'Going hiking on Saturday.'], explain: '이번 주 토요일에 다 같이 저녁 먹어요! = let’s all have dinner.' },
      { id: 'r16c.q2', type: 'enOpts', prompt: 'Why does Minji want to go somewhere else?', opts: ['She thinks the meat place is too expensive.', 'She doesn’t eat meat.', 'It is too far.', 'It is closed on Saturday.'], explain: '거기 너무 비싼 것 같아요. 다른 데 가요.' },
      { id: 'r16c.q3', type: 'enOpts', prompt: 'Is Hyunwoo going? (Careful: 일해요 is plain present here.)', opts: ['No, he works on Saturday.', 'Yes, he is coming.', 'Yes, they will work together.', 'He will come at seven.'], explain: '현우 씨는 토요일에 일해요. = Hyunwoo works on Saturday (a description, not “let’s”).' },
    ],
  },
  {
    id: 'l16.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l16.notice', ko: '달리기 모임 수건', en: 'Running club towel', desc: 'Says “같이 달려요!” on one side. The other side is for your face.' },
    heading: '달빛 달리기 모임',
    lines: [
      { ko: '혼자 운동해요? 재미없어요. 우리 같이 달려요!', en: 'Do you exercise alone? That’s boring. Let’s run together!' },
      { ko: '매주 일요일 아침 일곱 시에 {공원|공원} 앞에서 만나요.', en: 'Let’s meet in front of the park every Sunday at seven in the morning.' },
      { ko: '빨리 못 달려요? 괜찮아요. {천천히|천천히} 달려요.', en: 'You can’t run fast? That’s okay. Let’s run slowly.' },
      { ko: '달리기가 끝나고 같이 아침 먹어요. 김밥은 제가 살게요!', en: 'After running, let’s have breakfast together. The kimbap is on me!' },
      { ko: '{궁금해요|궁금하다}? 그럼 전화 주세요. — 위층 할머니', en: 'Curious? Then call me. — Grandma upstairs' },
    ],
    gloss: { '공원': 'park', '천천히': 'slowly', '궁금하다': 'to be curious, to wonder' },
    qs: [
      { id: 'r16b.q1', type: 'enOpts', prompt: 'When does the running club meet?', opts: ['Every Sunday at 7 a.m.', 'Every Saturday at 7 p.m.', 'Every day at 7 a.m.', 'Every Sunday at 2 a.m.'], explain: '매주 일요일 아침 일곱 시에 공원 앞에서 만나요.' },
      { id: 'r16b.q2', type: 'enOpts', prompt: 'What if you can’t run fast?', opts: ['It’s fine: they run slowly together.', 'You can’t join.', 'You walk instead.', 'You buy the kimbap.'], explain: '괜찮아요. 천천히 달려요. = let’s run slowly.' },
      { id: 'r16b.q3', type: 'enOpts', prompt: 'Who wrote the notice?', opts: ['Grandma upstairs.', 'Mr. Park.', 'Minji.', 'The officer.'], explain: '— 위층 할머니 (Grandma upstairs, above Moonlight Mart)' },
    ],
  },
];
