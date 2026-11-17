/* reads_L9.js — Staff Group Chat + Neighborhood Notice Board for Lesson 9.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   ⚠ App-written texts: please have them checked by a native speaker. */
MM.reads[9] = [
  {
    id: 'l9.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l9.sticker', ko: '꽃다발 스티커', en: 'Bouquet sticker', desc: 'A cartoon bunch of roses with sunglasses. Nobody knows who sent it first.' },
    lines: [
      { who: 'minji', ko: '사장님, 내일 눈이 많이 올 것 같아요.', en: 'Mr. Park, I think it will snow a lot tomorrow.' },
      { who: 'boss', ko: '그래요? 그럼 손님이 별로 없을 것 같아요.', en: 'Really? Then I don’t think there will be many customers.' },
      { who: 'minji', ko: '근데 사장님, 현우 씨 요즘 좀 이상한 것 같아요.', en: 'By the way, Mr. Park, I think Hyunwoo is a bit strange these days.' },
      { who: 'boss', ko: '왜요?', en: 'Why?' },
      { who: 'minji', ko: '매일 {웃어요|웃다}. {여자 친구|여자 친구}가 {생긴|생기다} 것 같아요.', en: 'He smiles every day. I think he got a girlfriend.' },
      { who: 'boss', ko: 'ㅋㅋ 그런 것 같아요. 어제 {꽃|꽃}도 산 것 같아요.', en: 'lol I think so. I think he bought flowers yesterday, too.' },
      { who: 'minji', ko: '와! 내일 {물어볼게요|물어보다}!', en: 'Wow! I’ll ask him tomorrow!' },
    ],
    gloss: { '웃다': 'to smile, to laugh', '여자 친구': 'girlfriend', '생기다': 'to come to have, to get (a girlfriend, a problem…)', '꽃': 'flower(s)', '물어보다': 'to ask: 물어볼게요 = I’ll ask (Lesson 6)' },
    qs: [
      { id: 'r9c.q1', type: 'enOpts', prompt: 'What does Minji think about tomorrow?', opts: ['It will snow a lot.', 'It is snowing now.', 'It snowed a lot yesterday.', 'There will be many customers.'], explain: '눈이 많이 올 것 같아요 = I think it will snow a lot (future).' },
      { id: 'r9c.q2', type: 'enOpts', prompt: 'Why does Minji think Hyunwoo has a girlfriend?', opts: ['He smiles every day.', 'He bought a cake.', 'He is busy these days.', 'He told her.'], explain: '매일 웃어요 = he smiles every day. 생긴 것 같아요 = I think he got (one): past.' },
      { id: 'r9c.q3', type: 'enOpts', prompt: 'What does Mr. Park think Hyunwoo did yesterday?', opts: ['He bought flowers.', 'He will buy flowers.', 'He is buying flowers.', 'He sold flowers.'], explain: '꽃도 산 것 같아요: 산 = 사 + ㄴ, past.' },
    ],
  },
  {
    id: 'l9.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l9.notice', ko: '달빛 귀마개', en: 'Moonlight earmuffs', desc: 'Navy blue, very fluffy. They block 80% of all strange noises.' },
    heading: '밤에 이상한 소리가 나요',
    lines: [
      { ko: '요즘 {새벽|새벽} 3시쯤에 이상한 {소리|소리}가 {나요|나다}.', en: 'These days there is a strange noise at around 3 a.m.' },
      { ko: '처음에는 {쥐|쥐} 같았어요. 근데 쥐는 아닌 것 같아요.', en: 'At first it seemed like a mouse. But I don’t think it’s a mouse.' },
      { ko: '{위층|위층} 할머니가 밤에 {춤추는|춤추다} 것 같아요.', en: 'I think the grandma upstairs is dancing at night.' },
      { ko: '아니면 달빛마트 고양이가 {뛰는|뛰다} 것 같아요.', en: 'Or I think the Moonlight Mart cat is running around.' },
      { ko: '알아요? 그럼 201호에 {연락|연락} 주세요.', en: 'Do you know? Then please contact (flat) 201.' },
    ],
    gloss: { '새벽': 'the small hours, early morning (새벽 3시 = 3 a.m.)', '소리': 'sound, noise', '나다': '(of a sound) to be made: 소리가 나요 = there is a noise', '쥐': 'mouse, rat', '위층': 'upstairs, the floor above', '춤추다': 'to dance', '뛰다': 'to run, to jump', '연락': 'contact; 연락 주세요 = please get in touch' },
    qs: [
      { id: 'r9b.q1', type: 'enOpts', prompt: 'When is the strange noise?', opts: ['At around 3 a.m.', 'At around 3 p.m.', 'Every morning.', 'Only on Sundays.'], explain: '새벽 3시쯤에 = at around 3 a.m. (쯤, Lesson 5).' },
      { id: 'r9b.q2', type: 'enOpts', prompt: 'What does the writer think Grandma is doing?', opts: ['Dancing at night.', 'Sleeping at night.', 'Running a store.', 'Catching mice.'], explain: '춤추는 것 같아요: 는 = happening (now / these nights).' },
      { id: 'r9b.q3', type: 'enOpts', prompt: 'What does the writer NOT think the noise is anymore?', opts: ['A mouse.', 'The cat.', 'Grandma.', 'Someone dancing.'], explain: '쥐는 아닌 것 같아요 = I don’t think it’s a mouse. (아니다 → 아닌, like 이다 → 인.)' },
    ],
  },
];
