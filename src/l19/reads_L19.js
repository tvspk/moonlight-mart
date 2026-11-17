/* reads_L19.js — Staff Group Chat + Neighborhood Notice Board for Lesson 19.
   {form|lemma} marks a word outside the lesson; tapping it shows gloss[lemma].
   App-written texts (NOT yet checked by a native speaker). */
MM.reads[19] = [
  {
    id: 'l19.chat', kind: 'chat', title: 'Staff group chat', titleKo: '달빛마트 직원방',
    reward: { id: 'l19.sticker', ko: '마이크 스티커', en: 'Microphone sticker', desc: 'A tiny microphone with headphones. For people who sing after work.' },
    lines: [
      { who: 'minji', ko: '현우 씨, 일 끝난 다음에 뭐 해요?', en: 'Hyunwoo, what do you do after work?' },
      { who: 'boss', ko: '현우 씨는 요즘 퇴근한 후에 {녹음실|녹음실}에 가요.', en: 'These days Hyunwoo goes to a recording room after he gets off work.' },
      { who: 'minji', ko: '녹음실이요? 노래해요?', en: 'A recording room? Does he sing?' },
      { who: 'boss', ko: '네. 노래 다 만든 다음에 우리한테 들려줄 거예요.', en: 'Yes. After he finishes making the song, he will let us hear it.' },
      { who: 'minji', ko: '와! 그럼 노래 나온 다음에 같이 노래방 가요!', en: 'Wow! Then after the song comes out, let’s all go to noraebang!' },
      { who: 'boss', ko: '좋아요. 근데 가게 문 닫은 뒤에 가요.', en: 'Okay. But let’s go after we close the store.' },
    ],
    gloss: { '녹음실': 'recording room', '들려주다': 'to let someone hear, to play for someone' },
    qs: [
      { id: 'r19c.q1', type: 'enOpts', prompt: 'Where does Hyunwoo go after work?', opts: ['To a recording room.', 'To noraebang.', 'Home to sleep.', 'To the library.'], explain: '퇴근한 후에 녹음실에 가요.' },
      { id: 'r19c.q2', type: 'enOpts', prompt: 'When will he let everyone hear the song?', opts: ['After he finishes making it.', 'Before he makes it.', 'Tonight at the store.', 'Never.'], explain: '노래 다 만든 다음에 우리한테 들려줄 거예요.' },
      { id: 'r19c.q3', type: 'enOpts', prompt: 'When does Mr. Park want to go to noraebang?', opts: ['After closing the store.', 'Before opening the store.', 'During the night shift.', 'Next week.'], explain: '가게 문 닫은 뒤에 가요.' },
    ],
  },
  {
    id: 'l19.board', kind: 'board', title: 'Neighborhood notice board', titleKo: '동네 게시판',
    reward: { id: 'l19.notice', ko: '분리수거 장갑', en: 'Recycling gloves', desc: 'Yellow rubber gloves. Put them on BEFORE, take them off AFTER.' },
    heading: '{분리수거|분리수거} 날 안내',
    lines: [
      { ko: '우리 동네 분리수거 날은 목요일이에요.', en: 'Recycling day in our neighborhood is Thursday.' },
      { ko: '병은 물로 씻은 다음에 버리세요.', en: 'Please throw away bottles after washing them with water.' },
      { ko: '박스는 테이프를 뗀 후에 접어 주세요.', en: 'Please fold boxes after removing the tape.' },
      { ko: '밤 열 시 후에 버리세요. 낮에는 안 돼요.', en: 'Please throw things away after 10 p.m. Not during the day.' },
      { ko: '모르는 거 있어요? 그럼 달빛마트 사장님한테 물어보세요.', en: 'Is there something you don’t know? Then ask the owner of Moonlight Mart.' },
    ],
    gloss: { '분리수거': 'separating trash for recycling', '테이프': 'tape', '떼다': 'to take off, to remove (뗀 = after removing)', '접다': 'to fold', '물어보다': 'to ask' },
    qs: [
      { id: 'r19b.q1', type: 'enOpts', prompt: 'What should you do before throwing away bottles?', opts: ['Wash them with water.', 'Fold them.', 'Take them to Moonlight Mart.', 'Remove the tape.'], explain: '병은 물로 씻은 다음에 버리세요.' },
      { id: 'r19b.q2', type: 'enOpts', prompt: 'When can you throw things away?', opts: ['After 10 p.m.', 'Before 10 p.m.', 'During the day.', 'Any time on Thursday.'], explain: '밤 열 시 후에 버리세요. 낮에는 안 돼요.' },
      { id: 'r19b.q3', type: 'enOpts', prompt: 'Who should you ask if you don’t know something?', opts: ['The owner of Moonlight Mart.', 'The police.', 'The neighbors upstairs.', 'Hyunwoo.'], explain: '달빛마트 사장님한테 물어보세요.' },
    ],
  },
];
