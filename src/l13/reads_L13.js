/* reads_L13.js — Staff Group Chat + Neighborhood Notice Board for Lesson 13.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (reviewed for natural Korean in the native-speaker pass, 2026-10-15). */
MM.reads[13] = [
  {
    id: 'l13.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l13.sticker', ko: '하얀 발자국 스티커', en: 'White paw-print sticker', desc: 'Ramyeon’s signature, in fresh paint.' },
    lines: [
      { who: 'boss', ko: '여러분, 새 {벽|벽} 봤어요? 하얀 벽이에요!', en: 'Everyone, have you seen the new wall? It’s a white wall!' },
      { who: 'minji', ko: '네! 정말 {깨끗해요|깨끗하다}. 좋은 아이디어예요.', en: 'Yes! It’s really clean. Good idea.' },
      { who: 'boss', ko: '그런데 벽에 작은 {발자국|발자국}이 있어요. ㅋㅋ', en: 'But there are small footprints on the wall. lol' },
      { who: 'minji', ko: '작은 발자국이요? 큰 고양이 발자국 같아요. ㅋㅋ', en: 'Small footprints? They look like a big cat’s footprints. lol' },
      { who: 'boss', ko: '맞아요. 이상한 고양이예요. 그래도 귀여워요.', en: 'Right. He’s a strange cat. But still, he’s cute.' },
      { who: 'minji', ko: '오늘 밤에는 차가운 우유 줄까요? 라면이 좋아해요.', en: 'Shall I give him cold milk tonight? Ramyeon likes it.' },
    ],
    gloss: { '벽': 'wall', '깨끗하다': 'to be clean', '발자국': 'footprint, paw print' },
    qs: [
      { id: 'r13c.q1', type: 'enOpts', prompt: 'What color is the new wall?', opts: ['White.', 'Yellow.', 'Black.', 'It is not painted yet.'], explain: '하얀 벽이에요 (하얗다 → 하얀).' },
      { id: 'r13c.q2', type: 'enOpts', prompt: 'What is on the wall?', opts: ['Small footprints.', 'A big picture.', 'A strange sign.', 'Nothing.'], explain: '벽에 작은 발자국이 있어요.' },
      { id: 'r13c.q3', type: 'enOpts', prompt: 'What does Mr. Park think of Ramyeon?', opts: ['A strange cat, but still cute.', 'A bad cat.', 'A small, quiet cat.', 'He doesn’t like him.'], explain: '이상한 고양이예요. 그래도 귀여워요. (그래도, Lesson 12)' },
    ],
  },
  {
    id: 'l13.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l13.notice', ko: '피아노 건반 책갈피', en: 'Piano-key bookmark', desc: 'Black and white. Mostly white.' },
    heading: '하얀 피아노 팝니다',
    lines: [
      { ko: '하얀 피아노를 {팔아요|팔다}.', en: 'I’m selling a white piano.' },
      { ko: '조금 {오래된|오래되다} 피아노예요. 그래도 소리가 정말 좋아요.', en: 'It’s a slightly old piano. But still, it sounds really good.' },
      { ko: '비싼 피아노가 아니에요. 아주 {싸게|싸다} 팔 거예요.', en: 'It isn’t an expensive piano. I’ll sell it very cheaply.' },
      { ko: '작은 방에도 {들어가요|들어가다}.', en: 'It fits even in a small room.' },
      { ko: '조용한 사람에게 팔고 싶어요. 밤에는 {치지 마세요|치다}! ㅎㅎ', en: 'I want to sell it to a quiet person. Please don’t play it at night! hehe' },
      { ko: '– 301호 (할머니 집 위층)', en: '– Flat 301 (upstairs from Grandma)' },
    ],
    gloss: { '팔다': 'to sell', '싸다': 'to be cheap; 싸게 = cheaply', '들어가다': 'to go in, to fit in', '오래되다': 'to be old (of things): 오래된 = old (Lesson 14 explains this form)', '치다': 'to play (piano); -지 마세요 = please don’t' },
    qs: [
      { id: 'r13b.q1', type: 'enOpts', prompt: 'What is for sale?', opts: ['A white piano.', 'A small room.', 'An expensive piano.', 'A quiet flat.'], explain: '하얀 피아노를 팔아요.' },
      { id: 'r13b.q2', type: 'enOpts', prompt: 'What is the piano like?', opts: ['A bit old, but it sounds really good.', 'New and very expensive.', 'Big; it doesn’t fit in a small room.', 'Old and broken.'], explain: '조금 오래된 피아노예요. 그래도 소리가 정말 좋아요.' },
      { id: 'r13b.q3', type: 'enOpts', prompt: 'What kind of buyer does the seller hope for?', opts: ['A quiet person.', 'A famous pianist.', 'A rich person.', 'Someone with a big room.'], explain: '조용한 사람에게 팔고 싶어요.' },
    ],
  },
];
