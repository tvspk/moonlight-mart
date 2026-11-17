/* reads_L22.js — Staff Group Chat + Neighborhood Notice Board for Lesson 22.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (native-speaker read-through in the L22 session). */
MM.reads[22] = [
  {
    id: 'l22.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l22.sticker', ko: '물음표 스티커', en: 'Question-mark sticker', desc: 'Maybe it means “why?”. Maybe it means “who?”. Maybe it’s just a hook.' },
    lines: [
      { who: 'boss', ko: '내일 저녁에 {회의|회의}를 할 수도 있어요. 다들 올 수 있어요?', en: 'We might have a meeting tomorrow evening. Can everyone come?' },
      { who: 'minji', ko: '저는 갈 수 있어요. 근데 조금 늦을 수도 있어요.', en: 'I can come. But I might be a little late.' },
      { who: 'you', ko: '저는 못 갈 수도 있어요. 내일 시험이 있어요.', en: 'I might not be able to come. I have an exam tomorrow.' },
      { who: 'boss', ko: '괜찮아요. 회의는 짧을 수도 있어요. 아니, 짧을 거예요!', en: 'That’s okay. The meeting might be short. No — it will be short!' },
      { who: 'minji', ko: '사장님 회의는 항상 길어요. ㅋㅋ', en: 'Your meetings are always long. lol' },
      { who: 'boss', ko: '그럴 수도 있어요… 내일은 {치킨|치킨}도 살게요!', en: 'That might be true… Tomorrow I’ll buy chicken too!' },
    ],
    gloss: { '회의': 'meeting', '치킨': '(fried) chicken' },
    qs: [
      { id: 'r22c.q1', type: 'enOpts', prompt: 'What might happen tomorrow evening?', opts: ['A staff meeting.', 'A party.', 'A delivery.', 'An inspection from head office.'], explain: '내일 저녁에 회의 할 수도 있어요.' },
      { id: 'r22c.q2', type: 'enOpts', prompt: 'Why might Hyunwoo not be able to come?', opts: ['He has an exam tomorrow.', 'He is sick.', 'He is going to Japan.', 'He works at another store.'], explain: '저는 못 갈 수도 있어요. 내일 시험이 있어요.' },
      { id: 'r22c.q3', type: 'enOpts', prompt: 'What does Minji say about Mr. Park’s meetings?', opts: ['They are always long.', 'They are always short.', 'They are always fun.', 'They always have chicken.'], explain: '사장님 회의는 항상 길어요.' },
    ],
  },
  {
    id: 'l22.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l22.notice', ko: '정전 안내문', en: 'Power-cut notice', desc: 'Printed in big letters. Somebody drew a candle on it. And a cat.' },
    heading: '{정전|정전} 안내',
    lines: [
      { ko: '이번 주 토요일 오전 열 시부터 열두 시까지 {정전|정전}이 될 수도 있어요.', en: 'This Saturday from 10 a.m. to 12 p.m. there might be a power cut.' },
      { ko: '{엘리베이터|엘리베이터}를 못 쓸 수도 있어요. {계단|계단}을 {이용해|이용하다} 주세요.', en: 'You might not be able to use the elevator. Please use the stairs.' },
      { ko: '{냉장고|냉장고} 음식이 {상할|상하다} 수도 있어요. 조심하세요.', en: 'The food in your fridge might go bad. Please be careful.' },
      { ko: '비가 많이 오면 {날짜|날짜}가 {바뀔|바뀌다} 수도 있어요.', en: 'If it rains a lot, the date might change.' },
      { ko: '{궁금한|궁금하다} 것은 {관리사무소|관리사무소}에 {물어보세요|물어보다}.', en: 'If you have questions, please ask the building management office.' },
    ],
    gloss: { '정전': 'power cut, blackout', '엘리베이터': 'elevator', '계단': 'stairs', '냉장고': 'refrigerator', '상하다': 'to go bad (food)', '궁금하다': 'to be curious, to wonder', '관리사무소': 'building management office', '이용하다': 'to use', '날짜': 'date', '바뀌다': 'to change, to be changed', '물어보다': 'to ask' },
    qs: [
      { id: 'r22b.q1', type: 'enOpts', prompt: 'When might there be a power cut?', opts: ['This Saturday, 10 a.m. to 12 p.m.', 'Every night at 10.', 'This Sunday afternoon.', 'Next month.'], explain: '이번 주 토요일 오전 열 시부터 열두 시까지…' },
      { id: 'r22b.q2', type: 'enOpts', prompt: 'What should people use instead of the elevator?', opts: ['The stairs.', 'A taxi.', 'The back door.', 'Nothing — stay home.'], explain: '계단을 이용해 주세요.' },
      { id: 'r22b.q3', type: 'enOpts', prompt: 'What might change the date?', opts: ['A lot of rain.', 'The elevator.', 'The food in the fridge.', 'Nobody knows.'], explain: '비가 많이 오면 {날짜|날짜}가 {바뀔|바뀌다} 수도 있어요.' },
    ],
  },
];
