/* workbook_L30.js — Korean 3 Workbook, Lesson 30 (p.116–119, answer key p.142). Word Builder 실 (室).
   Section I (Vocabulary, Part 1): 23 words → match (4 rounds: 6 + 6 + 6 + 5) with the key's English; the book's hanja is shown as keyNote.
   Section II (Vocabulary, Part 2): the vocabulary web (24) → NEW wb.js type 'web': 실 in the middle, hubs 학교 (5), 병원 (3), 집 (2),
   회사 (2), the 12 words of the book's word bank; each word is sent to a hub; checked as a whole (the key's web; any order in a hub).
   Section III dictation = WB Track 73, 74, 75 (fill the missing words; 74 has two blanks typed in order; ASR matches the key). */
(() => {
  MM.workbook[30] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary, Part 1',
        task: 'Define/translate each word to English using what you know or a dictionary. Here: match each word to its meaning (the key’s English).',
        type: 'match', skill: 'l30.vocab',
        items: [
          { n: 1, ko: '화장실', en: 'toilet; bathroom', keyNote: '化粧室' },
          { n: 2, ko: '실외', en: 'outdoors, outside', keyNote: '室外' },
          { n: 3, ko: '실내', en: 'indoors', keyNote: '室內' },
          { n: 4, ko: '실장', en: 'head of the office', keyNote: '室長' },
          { n: 5, ko: '교무실', en: 'teacher’s office', keyNote: '敎務室' },
          { n: 6, ko: '사무실', en: 'office', keyNote: '事務室' },
          { n: 7, ko: '미용실', en: 'beauty parlor; hairdresser’s place', keyNote: '美容室' },
          { n: 8, ko: '병실', en: 'hospital room, patient’s room', keyNote: '病室' },
          { n: 9, ko: '회의실', en: 'meeting room, conference room', keyNote: '會議室' },
          { n: 10, ko: '대기실', en: 'waiting room', keyNote: '待機室' },
          { n: 11, ko: '연습실', en: 'practice room, practice place', keyNote: '練習室' },
          { n: 12, ko: '교실', en: 'classroom', keyNote: '敎室' },
          { n: 13, ko: '침실', en: 'bedroom', keyNote: '寢室' },
          { n: 14, ko: '거실', en: 'living room', keyNote: '居室' },
          { n: 15, ko: '응급실', en: 'emergency room', keyNote: '應急室' },
          { n: 16, ko: '조리실', en: 'kitchen (except for the one at home)', keyNote: '調理室' },
          { n: 17, ko: '수술실', en: 'operating room, operating theater', keyNote: '手術室' },
          { n: 18, ko: '강의실', en: 'classroom, lecture room (usually in university)', keyNote: '講義室' },
          { n: 19, ko: '휴게실', en: 'break room, resting room, lounge', keyNote: '休憩室' },
          { n: 20, ko: '양호실', en: 'school infirmary', keyNote: '養護室' },
          { n: 21, ko: '교장실', en: 'principal’s office; head teacher’s office', keyNote: '校長室' },
          { n: 22, ko: '오락실', en: 'video arcade', keyNote: '娛樂室' },
          { n: 23, ko: '흡연실', en: 'smoking room', keyNote: '吸煙室' },
        ],
      },
      {
        id: 'II', title: 'Section II – Vocabulary, Part 2',
        task: 'Complete the vocabulary web by filling in the blanks with words from the Word Bank most commonly associated with each of the categories. All words were defined in Section I.',
        type: 'web', skill: 'l30.where',
        items: [
          { n: 24, center: '실 (室)', skill: 'l30.where',
            cats: [
              { ko: '학교', en: 'school', words: ['강의실', '교실', '양호실', '교무실', '교장실'] },
              { ko: '병원', en: 'hospital', words: ['수술실', '병실', '응급실'] },
              { ko: '집', en: 'home', words: ['거실', '침실'] },
              { ko: '회사', en: 'company', words: ['사무실', '회의실'] },
            ],
            bank: ['교실', '거실', '강의실', '침실', '수술실', '병실', '양호실', '응급실', '사무실', '교장실', '회의실', '교무실'],
            keyNote: 'App note: 강의실 (lecture room) is usually at a university — in the key’s web it goes with 학교 (대학교 is a 학교 too).' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then fill in the blanks with the missing word. Each phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 25, track: 'wb73', label: 'Track 73', ko: '지금 (___) 누구 있어요?', ans: ['화장실에'], full: '지금 화장실에 누구 있어요?', lenient: false, en: 'Is there anyone in the bathroom now?',
            soft: [{ p: '지금 화장실에 누구 있어요', note: 'Accepted (the whole sentence).' }], diag: [{ p: '화장실', note: 'Listen to the end: 화장실에 (in the bathroom).' }] },
          { n: 26, track: 'wb74', label: 'Track 74', ko: '(___) 거울이 (___).', note: 'Two blanks: type both missing parts, in order.', ans: ['침실에 두 개 있어요'], full: '침실에 거울이 두 개 있어요.', lenient: false, en: 'There are two mirrors in the bedroom.',
            soft: [{ p: '침실에 거울이 두 개 있어요', note: 'Accepted (the whole sentence).' }, { p: '침실에 2개 있어요', note: 'Accepted. The key writes 두 개.' }], diag: [{ p: '침실에', note: 'That is the first blank. The second one is after 거울이: 두 개 있어요.' }] },
          { n: 27, track: 'wb75', label: 'Track 75', ko: '(___) 냄새가 나요.', ans: ['사무실에서 이상한'], full: '사무실에서 이상한 냄새가 나요.', lenient: false, en: 'It smells weird/bad in the office.',
            soft: [{ p: '사무실에서 이상한 냄새가 나요', note: 'Accepted (the whole sentence).' }], diag: [{ p: '사무실에서', note: 'One more word before 냄새: 이상한 (strange).' }] },
        ],
      },
    ],
  };
})();
