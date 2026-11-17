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
