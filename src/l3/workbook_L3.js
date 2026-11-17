/* workbook_L3.js — Korean 3 Workbook, Lesson 3 (p.19–21, answer key p.122).
   Section I: match the word to a picture (pic = drawing id in wb.js; the book draws a ball and a pyramid).
   Section II: 'bank' = dialogue with blanks {} filled from the word bank (ans in blank order).
   Section III: dictation with one missing word (ko with ___; full = the whole sentence from the key). */
MM.workbook[3] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary',
      task: 'Choose the image which best represents the Korean postposition.',
      type: 'match', pics: true,
      items: [
        { n: 1, ko: '뒤에', en: 'behind', pic: 'behind' },
        { n: 2, ko: '앞에', en: 'in front of', pic: 'front' },
        { n: 3, ko: '위에', en: 'on top of', pic: 'top' },
        { n: 4, ko: '밑에', en: 'under', pic: 'under' },
        { n: 5, ko: '옆에', en: 'next to', pic: 'side' },
      ],
    },
    {
      id: 'II', title: 'Section II – Complete the dialogue',
      task: 'Choose the word which best completes each dialogue. Not all words are used, and some of the words can be used more than once.',
      type: 'bank', bank: ['뒤에', '위에', '옆에', '앞에', '밑에'],
      items: [
        { n: 6, lines: [
            ['경화', '우리 어디에서 만날 거예요?', 'Where are we going to meet?'],
            ['효진', '은행 {}서요.', 'In front of the bank.'],
            ['경화', '왜요? 카페에서 안 만날 거예요?', 'Why? We are not going to meet at the cafe?']],
          ans: ['앞에'] },
        { n: 7, lines: [
            ['재석', '저 강아지 보여요?', 'Do you see that dog?'],
            ['광수', '어디요?', 'Where?'],
            ['재석', '저기요. 자동차 {} 있어요.', 'Over there. It’s on top of the car.'],
            ['광수', '안 보여요.', 'I can’t see it.'],
            ['재석', '아, 지금은 차 {} 있어요.', 'Oh, now it’s under the car.']],
          ans: ['위에', '밑에'] },
        { n: 8, lines: [
            ['경은', '반지를 잃어버렸어요.', 'I’ve lost my ring.'],
            ['현정', '소파 {} 보세요.', 'Look under the couch.'],
            ['경은', '소파 {} 없었어요.', 'It wasn’t under the couch.'],
            ['현정', '소파 {}도 보세요.', 'Look behind the couch as well.']],
          ans: ['밑에', '밑에', '뒤에'] },
      ],
    },
    {
      id: 'III', title: 'Section III – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then fill in the blank with the missing word. Each phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 9, track: 'wb05', label: 'Track 5', ko: '은행은 학교 (___) 있어요.', ans: ['뒤에'], full: '은행은 학교 뒤에 있어요.', en: 'The bank is behind the school.' },
        { n: 10, track: 'wb06', label: 'Track 6', ko: '강아지는 자동차 (___) 있어요.', ans: ['옆에'], full: '강아지는 자동차 옆에 있어요.', en: 'The dog is next to the car.' },
        { n: 11, track: 'wb07', label: 'Track 7', ko: '컴퓨터는 책상 (___) 있어요.', ans: ['위에'], full: '컴퓨터는 책상 위에 있어요.', en: 'The computer is on top of the desk.' },
      ],
    },
  ],
};
