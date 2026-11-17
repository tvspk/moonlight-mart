/* reads_L10.js — Staff Group Chat + Neighborhood Notice Board for Lesson 10.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[10] = [
  {
    id: 'l10.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l10.sticker', ko: '초콜릿 하트 스티커', en: 'Chocolate heart sticker', desc: 'Half of it has been eaten. By the cat, according to Minji.' },
    lines: [
      { who: 'minji', ko: '사장님, 현우 씨 내일 {데이트해요|데이트하다}!', en: 'Mr. Park, Hyunwoo has a date tomorrow!' },
      { who: 'boss', ko: '정말요? 몰랐어요.', en: 'Really? I didn’t know that.' },
      { who: 'minji', ko: '데이트하기 전에 우리 가게에서 {초콜릿|초콜릿}을 살 거예요.', en: 'He’s going to buy chocolate at our store before the date.' },
      { who: 'boss', ko: '그럼 현우 씨 오기 전에 초콜릿을 계산대 앞에 놓을게요.', en: 'Then before Hyunwoo comes, I’ll put the chocolate in front of the counter.' },
      { who: 'minji', ko: 'ㅋㅋ 근데 사장님, {계산하기|계산하다} 전에 {할인해|할인하다} 주세요!', en: 'lol But Mr. Park, give him a discount before he pays!' },
      { who: 'boss', ko: '음… {생각해 볼게요|생각해 보다}.', en: 'Hmm… I’ll think about it.' },
    ],
    gloss: { '데이트하다': 'to go on a date', '초콜릿': 'chocolate', '계산하다': 'to pay (at the counter); to calculate', '할인하다': 'to give a discount', '생각해 보다': 'to think about it: 생각해 볼게요 = I’ll think about it (Lesson 6)' },
    qs: [
      { id: 'r10c.q1', type: 'enOpts', prompt: 'When will Hyunwoo buy chocolate?', opts: ['Before his date.', 'After his date.', 'During his date.', 'Next week.'], explain: '데이트하기 전에 = before the date (before going on a date).' },
      { id: 'r10c.q2', type: 'enOpts', prompt: 'What will Mr. Park do before Hyunwoo comes?', opts: ['Put the chocolate in front of the counter.', 'Eat the chocolate.', 'Give Hyunwoo a day off.', 'Close the store.'], explain: '현우 씨 오기 전에 초콜릿을 계산대 앞에 놓을게요 (앞에, Lesson 3; 놓을게요, Lesson 6).' },
      { id: 'r10c.q3', type: 'enOpts', prompt: 'What does Minji ask Mr. Park to do?', opts: ['Give Hyunwoo a discount before he pays.', 'Pay before the date.', 'Go on a date.', 'Buy flowers.'], explain: '계산하기 전에 할인해 주세요 = please give (him) a discount before he pays.' },
    ],
  },
  {
    id: 'l10.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l10.notice', ko: '중고 자전거 벨', en: 'Second-hand bicycle bell', desc: 'It goes “ring” once, then thinks about it, then goes “ring” again.' },
    heading: '이사 가기 전에 다 팔아요!',
    lines: [
      { ko: '다음 주에 {이사|이사} 가요.', en: 'I’m moving next week.' },
      { ko: '이사 가기 전에 {책상|책상}, 의자, {자전거|자전거}를 팔 거예요.', en: 'Before I move, I’m going to sell a desk, a chair and a bicycle.' },
      { ko: '자전거는 {작년|작년}에 샀어요. 아주 좋아요.', en: 'I bought the bicycle last year. It’s very good.' },
      { ko: '사기 전에 와서 보세요.', en: 'Come and look before you buy.' },
      { ko: '일요일 전에 {연락|연락} 주세요. – 305호', en: 'Please contact me before Sunday. – (Flat) 305' },
    ],
    gloss: { '이사': 'moving house; 이사 가다 = to move (out)', '책상': 'desk', '자전거': 'bicycle', '작년': 'last year', '연락': 'contact; 연락 주세요 = please get in touch' },
    qs: [
      { id: 'r10b.q1', type: 'enOpts', prompt: 'Why is the writer selling things?', opts: ['They are moving next week.', 'They bought new things.', 'They need money for a trip.', 'They are opening a store.'], explain: '다음 주에 이사 가요. 이사 가기 전에 … 팔 거예요.' },
      { id: 'r10b.q2', type: 'enOpts', prompt: 'What should you do before buying?', opts: ['Come and look.', 'Call first.', 'Pay online.', 'Read the notice again.'], explain: '사기 전에 와서 보세요 = come and look before you buy (와서, Lesson 7).' },
      { id: 'r10b.q3', type: 'enOpts', prompt: 'By when should you get in touch?', opts: ['Before Sunday.', 'After Sunday.', 'On Sunday.', 'Next month.'], explain: '일요일 전에 = before Sunday (noun + 전에).' },
    ],
  },
];
