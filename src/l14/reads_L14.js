/* reads_L14.js — Staff Group Chat + Neighborhood Notice Board for Lesson 14.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[14] = [
  {
    id: 'l14.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l14.sticker', ko: '음표 스티커', en: 'Music-note sticker', desc: 'For the speaker. It works now. Mostly.' },
    lines: [
      { who: 'boss', ko: '여러분, 가게에서 {트는|틀다} 노래 {리스트|리스트}를 만들 거예요.', en: 'Everyone, I’m going to make a list of the songs we play in the store.' },
      { who: 'boss', ko: '좋아하는 노래 있어요?', en: 'Do you have songs you like?' },
      { who: 'minji', ko: '제가 요즘 자주 {듣는|듣다} 노래는 이거예요! 🎵', en: 'The song I listen to a lot these days is this one! 🎵' },
      { who: 'boss', ko: '아, 이거 저도 아는 노래예요.', en: 'Oh, I know this song too.' },
      { who: 'minji', ko: '사장님이 좋아하는 가수는 누구예요?', en: 'Mr. Park, which singer do you like?' },
      { who: 'boss', ko: '저는 옛날 가수를 좋아해요. 민지 씨는 모르는 가수예요. ㅋㅋ', en: 'I like old singers. Singers you don’t know, Minji. lol' },
      { who: 'minji', ko: '그리고 라면이 좋아하는 노래도 넣어요. 고양이 노래요! ㅋㅋ', en: 'And let’s add a song Ramyeon likes too. A cat song! lol' },
    ],
    gloss: { '틀다': 'to play (music), to turn on: 트는 = that (we) play (ㄹ drops)', '리스트': 'list', '듣다': 'to listen: 듣는 = that (I) listen to' },
    qs: [
      { id: 'r14c.q1', type: 'enOpts', prompt: 'What is Mr. Park going to make?', opts: ['A list of songs to play in the store.', 'A new speaker.', 'A song for Ramyeon.', 'A list of singers he doesn’t know.'], explain: '가게에서 트는 노래 리스트를 만들 거예요.' },
      { id: 'r14c.q2', type: 'enOpts', prompt: 'What does Mr. Park say about Minji’s song?', opts: ['He knows it too.', 'He doesn’t know it.', 'He doesn’t like it.', 'He wrote it.'], explain: '이거 저도 아는 노래예요. (알다 → 아는)' },
      { id: 'r14c.q3', type: 'enOpts', prompt: 'What kind of singers does Mr. Park like?', opts: ['Old singers Minji doesn’t know.', 'Singers Minji likes.', 'Young singers.', 'Singers who sing about cats.'], explain: '저는 옛날 가수를 좋아해요. 민지 씨는 모르는 가수예요.' },
    ],
  },
  {
    id: 'l14.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l14.notice', ko: '합창단 악보 한 장', en: 'One page of choir sheet music', desc: 'Alto part. Someone has drawn a cat on it.' },
    heading: '노래하는 사람을 찾아요!',
    lines: [
      { ko: '우리 동네 {합창단|합창단}이에요.', en: 'We are our neighborhood choir.' },
      { ko: '노래를 좋아하는 사람, 같이 노래해요!', en: 'People who like singing, let’s sing together!' },
      { ko: '이 동네에 사는 사람은 다 괜찮아요.', en: 'Anyone who lives in this neighborhood is welcome.' },
      { ko: '노래를 잘 못하는 사람도 괜찮아요.', en: 'People who can’t sing well are okay too.' },
      { ko: '매주 토요일 오후 3시, 우체국 옆에 있는 {교회|교회}에서 만나요.', en: 'We meet every Saturday at 3 p.m. at the church next to the post office.' },
      { ko: '– 2층에 사는 {합창단|합창단} {단장|단장} 드림', en: '– From the choir leader who lives on the second floor' },
    ],
    gloss: { '합창단': 'choir', '교회': 'church', '단장': 'leader (of a group)' },
    qs: [
      { id: 'r14b.q1', type: 'enOpts', prompt: 'Who is the notice looking for?', opts: ['People who like singing.', 'A singer who sings well.', 'Someone who sells songs.', 'A church in the neighborhood.'], explain: '노래하는 사람을 찾아요! 노래를 좋아하는 사람, 같이 노래해요!' },
      { id: 'r14b.q2', type: 'enOpts', prompt: 'Can you join if you can’t sing well?', opts: ['Yes.', 'No.', 'Only on Saturdays.', 'Only if you live on the second floor.'], explain: '노래를 잘 못하는 사람도 괜찮아요.' },
      { id: 'r14b.q3', type: 'enOpts', prompt: 'Where do they meet?', opts: ['At the church next to the post office.', 'At the post office.', 'At Moonlight Mart.', 'On the second floor.'], explain: '우체국 옆에 있는 교회에서 만나요.' },
    ],
  },
];
