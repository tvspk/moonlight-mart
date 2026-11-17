/* workbook_L12.js — Korean 3 Workbook, Lesson 12 (p.53–56, answer key p.128–129).
   Section I = multiple choice (10). Section II = open writing (sec.free): the learner writes a second sentence that starts
   with 그래도; the key only prints example answers, so a different sentence is judged by the learner after seeing the key.
   Section III dictation = WB Track 28, 29 (whole sentences). */
MM.workbook[12] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary',
      task: 'Multiple choice. Choose the best answer.',
      type: 'mc', skill: 'l12.vocab',
      items: [
        { n: 1, q: 'The Korean word for “to be difficult” is:', opts: ['노래방', '쉽다', '어렵다', '공부하다'], right: 2, note: '어렵다 = to be difficult (쉽다 = to be easy).' },
        { n: 2, q: '“요즘” means:', opts: ['these days', 'dog', 'cat', 'yesterday'], right: 0, note: '요즘 바빠요. 그래도 한국어를 공부하고 있어요.' },
        { n: 3, q: 'How do you say “money” in Korean?', opts: ['머니', '캐시', '저녁', '돈'], right: 3, note: '저도 돈이 없어요. 그래도 걱정하지 마세요.' },
        { n: 4, q: 'The literal translation for this Korean word is “singing room”:', opts: ['노래방', '플스방', '게임방', 'PC방'], right: 0, note: '노래 (song) + 방 (room). 플스방 = PlayStation room, 게임방 / PC방 = game room / internet café.' },
        { n: 5, q: 'How do you say “soccer” in Korean?', opts: ['수영', '농구', '축구', '야구'], right: 2, note: '축구 = soccer (수영 = swimming, 농구 = basketball, 야구 = baseball).' },
        { n: 6, q: '“노래하다” means:', opts: ['to worry', 'to be late', 'to open', 'to sing'], right: 3, note: '노래 = song, 노래하다 = to sing.' },
        { n: 7, q: '“그래” comes from the Korean word:', opts: ['그런데', '그렇게 해', '그렇지만', 'none of these'], right: 1, skill: 'l12.form', note: '그래 = 그렇게 해 / 그렇게 하여 (to do that); 그래 + 도 = even if you do that → but still.' },
        { n: 8, q: 'The Korean word for “to worry” in the infinitive form is:', opts: ['노래하다', '이상하다', '가다', '걱정하다'], right: 3, note: '걱정하다 = to worry; 걱정하지 마세요 = don’t worry.' },
        { n: 9, q: '“-도” means:', opts: ['also', 'too', 'even', 'all of the above'], right: 3, skill: 'l12.form', note: '-도 = also, too, even.' },
        { n: 10, q: 'To say “but still”, “however”, or “nonetheless” in Korean, you use the word:', opts: ['근데', '그래도', '그래서', '그렇지만'], right: 1, skill: 'l12.form', note: '그래도. (그래서 = so; 근데 / 그렇지만 = but.)' },
      ],
    },
    {
      id: 'II', title: 'Section II – Writing practice',
      task: 'Write a second sentence starting with 그래도. Example answers are in the answer key, but any correct sentence counts: after you check, compare yours with the key’s example.',
      example: { given: '비가 와요.', ko: '그래도 갈 거예요?', en: 'It’s raining. Are you still going?' },
      type: 'write', skill: 'l12.usage', placeholder: '그래도 …',
      free: { start: '그래도', need: 'Start your sentence with 그래도.', alt: [['그래서', '그래서 = so (a result). Here you need the opposite: 그래도 (but still).'], ['그래두', 'Many people say 그래두, but it is written 그래도.']] },
      items: [
        { n: 11, given: '너무 더워요.', ans: ['그래도 저는 겨울보다 여름이 더 좋아요.'], en: 'It’s too hot. But still, I like summer more than winter.', keyNote: 'example answer' },
        { n: 12, given: '너무 배불러요.', ans: ['그래도 더 먹을 수 있어요.'], en: 'I’m too full. But still, I can eat more.', keyNote: 'example answer' },
        { n: 13, given: '요즘 정말 바빠요.', ans: ['그래도 행복해요.'], en: 'I’m really busy these days. But still, I’m happy.', keyNote: 'example answer' },
        { n: 14, given: '집에서 회사까지 진짜 멀어요.', ans: ['그래도 힘들지 않아요.'], en: 'It’s really far from my home to the office. But still, it’s not hard.', keyNote: 'example answer' },
        { n: 15, given: '윤아 씨가 화장을 전혀 안 했어요.', ans: ['그래도 너무 예뻤어요.'], en: 'Yoona didn’t put on any makeup at all. But still, she was very pretty.', keyNote: 'example answer · 화장 = makeup' },
      ],
    },
    {
      id: 'III', title: 'Section III – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 16, track: 'wb28', label: 'Track 28', ans: ['한국어는 어려워요. 그래도 재미있어요.'], en: 'Korean is difficult. But still, it is interesting.' },
        { n: 17, track: 'wb29', label: 'Track 29', ans: ['일이 늦게 끝날 거예요. 그래도 기다려 줄 수 있어요?'], en: 'I will get off work late. Nevertheless, can you still wait for me?' },
      ],
    },
  ],
};
