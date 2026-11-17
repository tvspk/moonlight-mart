/* reads_L20.js — Staff Group Chat + Neighborhood Notice Board for Lesson 20.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[20] = [
  {
    id: 'l20.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l20.sticker', ko: '우산 스티커', en: 'Umbrella sticker', desc: 'A tiny yellow umbrella. Works even if it rains. Only on paper.' },
    lines: [
      { who: 'minji', ko: '현우 씨, 내일 출근해요? 전화를 해도 안 받아요!', en: 'Hyunwoo, are you coming to work tomorrow? Even when I call, you don’t answer!' },
      { who: 'boss', ko: '현우 씨는 요즘 {녹음실|녹음실}에 있어요. 거기는 전화가 안 돼요.', en: 'Hyunwoo is in the recording room these days. Phones don’t work there.' },
      { who: 'minji', ko: '아, 그래요? 근데 내일 비가 많이 올 거예요.', en: 'Oh, really? But it’s going to rain a lot tomorrow.' },
      { who: 'boss', ko: '비가 와도 가게는 열어요. 현우 씨도 와야 돼요.', en: 'Even if it rains, the store opens. Hyunwoo has to come, too.' },
      { who: 'minji', ko: '알겠어요. 제가 {문자|문자}도 보낼게요. {문자|문자}는 늦게 봐도 괜찮아요.', en: 'Got it. I’ll send him a text message, too. It’s okay even if he reads a text late.' },
      { who: 'boss', ko: '좋아요. 그리고 민지 씨, 바빠도 밥 꼭 먹어요!', en: 'Good. And Minji, even if you’re busy, make sure you eat!' },
    ],
    gloss: { '녹음실': 'recording room', '문자': 'text message' },
    qs: [
      { id: 'r20c.q1', type: 'enOpts', prompt: 'What is Minji’s problem?', opts: ['Hyunwoo doesn’t answer even when she calls.', 'Hyunwoo calls her too often.', 'The store phone is broken.', 'She can’t come to work.'], explain: '전화를 해도 안 받아요.' },
      { id: 'r20c.q2', type: 'enOpts', prompt: 'What happens to the store if it rains?', opts: ['It still opens.', 'It closes.', 'It opens late.', 'Only Hyunwoo works.'], explain: '비가 와도 가게는 열어요.' },
      { id: 'r20c.q3', type: 'enOpts', prompt: 'What does Mr. Park tell Minji at the end?', opts: ['To eat, even if she is busy.', 'To go home early.', 'To call Hyunwoo again.', 'To buy an umbrella.'], explain: '바빠도 밥 꼭 먹어요!' },
    ],
  },
  {
    id: 'l20.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l20.notice', ko: '플리마켓 쿠폰', en: 'Flea-market coupon', desc: '₩500 off anything. Valid even if it rains. Especially if it rains.' },
    heading: '토요일 {플리마켓|플리마켓}',
    lines: [
      { ko: '이번 주 토요일에 공원에서 플리마켓을 해요.', en: 'This Saturday there is a flea market in the park.' },
      { ko: '비가 와도 해요! 공원 옆 학교 {체육관|체육관}에서 할 거예요.', en: 'It happens even if it rains! We’ll do it in the school gym next to the park.' },
      { ko: '옷, 책, {장난감|장난감}… 조금 {오래됐어도|오래되다} {깨끗하면|깨끗하다} 괜찮아요.', en: 'Clothes, books, toys… it’s fine even if they’re a little old, if they’re clean.' },
      { ko: '{물건|물건}이 없어도 오세요. {구경|구경하다}만 해도 재미있어요.', en: 'Come even if you have nothing to sell. Just looking around is fun, too.' },
      { ko: '바빠도 잠깐 {들러|들르다} 주세요!', en: 'Even if you’re busy, please drop by for a moment!' },
    ],
    gloss: { '플리마켓': 'flea market', '체육관': 'gym', '장난감': 'toy', '오래되다': 'to be old (of things; 오래됐어도 = even if it is old)', '깨끗하다': 'to be clean', '물건': 'thing, item', '구경하다': 'to look around, sightsee', '들르다': 'to drop by (들러 주세요 = please drop by)' },
    qs: [
      { id: 'r20b.q1', type: 'enOpts', prompt: 'What happens if it rains?', opts: ['The market moves to the school gym.', 'The market is cancelled.', 'The market moves to Sunday.', 'Only books are sold.'], explain: '비가 와도 해요! … 체육관에서 할 거예요.' },
      { id: 'r20b.q2', type: 'enOpts', prompt: 'Can you bring old things?', opts: ['Yes, even if they are a little old, if they are clean.', 'No, only new things.', 'Only old books.', 'Only toys.'], explain: '조금 오래됐어도 깨끗하면 괜찮아요.' },
      { id: 'r20b.q3', type: 'enOpts', prompt: 'Should you come if you have nothing to sell?', opts: ['Yes: just looking around is fun.', 'No, sellers only.', 'Only if you are busy.', 'Only if it rains.'], explain: '{물건|물건}이 없어도 오세요. {구경|구경하다}만 해도 재미있어요.' },
    ],
  },
];
