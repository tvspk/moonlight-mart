/* workbook_L31.js — tab 2 “Final Exam” of the final chapter (no Korean 3 workbook exists for the review).
   Sections I–VI: type 'exam' (wb.js): 10 questions from five lessons each, drawn from the app's own question bank
   (MM.Q.allQs: pool, CCTV, generated forms, vocabulary): a returned mistake first, then expired / weak skills, then the rest.
   70 % passes the section; it can be taken again (best score kept). Section VII: dictation from the review dialogue
   (clips of dialogue.mp3, the same times as the Review tab). */
(() => {
  const group = (id, a, b) => ({
    id, title: `Section ${id} – Lessons ${a}–${b}`, type: 'exam', count: 10, lessons: Array.from({ length: b - a + 1 }, (_, i) => a + i),
    task: `10 questions from Lessons ${a}–${b}, two per lesson. Your old mistakes and expired skills come first. 7 correct pass the section; take it again any time.`,
    items: [{ n: 1 }],
  });
  MM.workbook[31] = {
    sections: [
      group('I', 1, 5), group('II', 6, 10), group('III', 11, 15), group('IV', 16, 20), group('V', 21, 25), group('VI', 26, 30),
      {
        id: 'VII', title: 'Section VII – Dictation', type: 'dictation',
        task: 'Lines from the review dialogue. Listen (each line once; replay as often as you like), then write what you hear, or fill in the missing part.',
        items: [
          { n: 1, track: 'dlg', clip: [3.1, 5.6], label: 'Minho', ko: '요즘 날씨가 너무 (___).', ans: ['좋네요'], full: '요즘 날씨가 너무 좋네요.', lenient: false, en: 'The weather is so good these days.',
            soft: [{ p: '요즘 날씨가 너무 좋네요', note: 'Accepted (the whole sentence).' }], diag: [{ p: '좋아요', note: 'Listen to the ending: 좋네요 (-네요, Lesson 25).' }] },
          { n: 2, track: 'dlg', clip: [16.2, 18.85], label: 'Minho', ans: ['제 사무실 앞에 공원이 있어요'], lenient: false, en: 'There is a park in front of my office.' },
          { n: 3, track: 'dlg', clip: [22.0, 27.55], label: 'Su-ah', ko: '아... 아침에 잠깐 학교에 가야 돼요. 학교 (___) 전화할게요.', ans: ['끝난 다음에'], full: '아... 아침에 잠깐 학교에 가야 돼요. 학교 끝난 다음에 전화할게요.', lenient: false, en: 'Oh... I have to go to school for a little while in the morning. I will call you after I finish school.',
            diag: [{ p: '끝나는 다음에', note: '다음에 takes the past form: 끝난 다음에 (Lesson 19).' }, { p: '끝난', note: 'One more word: 끝난 다음에 (after it finishes).' }] },
          { n: 4, track: 'dlg', clip: [49.3, 52.3], label: 'Su-ah', ans: ['저 지금 학교 끝났어요 (11|열한) 시쯤 갈게요'], full: '저 지금 학교 끝났어요. 11시쯤 갈게요.', lenient: false, en: 'I just finished school. I will be there around 11.',
            soft: [{ p: '지금 학교 끝났어요 (11|열한) 시쯤 갈게요', note: 'Accepted. The script starts with 저.' }] },
          { n: 5, track: 'dlg', clip: [56.1, 58.3], label: 'Minho', ans: ['수아 씨예요 여기로 올 거예요'], full: '수아 씨예요. 여기로 올 거예요.', lenient: false, en: 'It’s Su-ah. She’ll come here.',
            soft: [{ p: '수아 씨예요 여기 올 거예요', note: 'Accepted. The script says 여기로 (to here).' }] },
          { n: 6, track: 'dlg', clip: [89.2, 94.45], label: 'Jimin', ko: '더 (___) 포기해. 만약 지금 포기하면, 용서해 줄게.', ans: ['다치기 전에'], full: '더 다치기 전에 포기해. 만약 지금 포기하면, 용서해 줄게.', lenient: false, en: 'Give up before you get hurt even more. If you give up now, I will forgive you.',
            note: 'Two words (다치다 = to get hurt).', diag: [{ p: '다치기', note: 'One more word: 다치기 전에 (before…, Lesson 10).' }] },
        ],
      },
    ],
  };
})();
