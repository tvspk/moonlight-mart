/* workbook_L23.js — Korean 3 Workbook, Lesson 23 (p.91–94, answer key p.136–137). Word Builder 학 (學).
   Section I (Vocabulary, Part 1): 24 words → match (4 rounds of 6) with the key's English; the book's hanja is shown as keyNote.
   Section II (Vocabulary, Part 2): four pyramids (25 People, 26 Places, 27 Subjects of study, 28 Related words) → NEW wb.js
   type 'pyramid': 학 on top, then two words of 2, 3 and 4 syllables; any order within a level; 25 has one word per level printed.
   Section III dictation = WB Track 56, 57 (each said twice, then in parts; ASR matches the key). */
(() => {
  MM.workbook[23] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary, Part 1',
        task: 'Define/translate each word to English using what you know or a dictionary. Here: match each word to its meaning (the key’s English).',
        type: 'match',
        items: [
          { n: 1, ko: '대학교수', en: 'university professor', keyNote: '大學敎授' },
          { n: 2, ko: '초등학교', en: 'elementary school', keyNote: '初等學校' },
          { n: 3, ko: '생명과학', en: 'life science', keyNote: '生命科學' },
          { n: 4, ko: '수학', en: 'mathematics', keyNote: '數學' },
          { n: 5, ko: '학자', en: 'scholar', keyNote: '學者' },
          { n: 6, ko: '장학금', en: 'scholarship', keyNote: '奬學金' },
          { n: 7, ko: '경제학', en: 'economics', keyNote: '經濟學' },
          { n: 8, ko: '수학여행', en: 'school trip', keyNote: '修學旅行 — a different 수 from 수학 (數學), mathematics' },
          { n: 9, ko: '지구과학', en: 'earth science', keyNote: '地球科學' },
          { n: 10, ko: '학교', en: 'school', keyNote: '學校' },
          { n: 11, ko: '전학', en: 'to change schools', keyNote: '轉學' },
          { n: 12, ko: '유학생', en: 'student studying abroad', keyNote: '留學生' },
          { n: 13, ko: '대학교', en: 'university, college', keyNote: '大學校' },
          { n: 14, ko: '어학', en: 'language learning', keyNote: '語學' },
          { n: 15, ko: '학생', en: 'student', keyNote: '學生' },
          { n: 16, ko: '복학생', en: 'student who has returned to school (usually) after a long break', keyNote: '復學生' },
          { n: 17, ko: '물리학', en: 'physics', keyNote: '物理學' },
          { n: 18, ko: '학원', en: 'private institute', keyNote: '學院' },
          { n: 19, ko: '방학', en: 'school vacation', keyNote: '放學' },
          { n: 20, ko: '대학원생', en: 'graduate student', keyNote: '大學院生' },
          { n: 21, ko: '학교생활', en: 'school life', keyNote: '學校生活' },
          { n: 22, ko: '고등학교', en: 'high school; senior high school', keyNote: '高等學校' },
          { n: 23, ko: '학용품', en: 'school supplies; stationery', keyNote: '學用品' },
          { n: 24, ko: '중학교', en: 'middle school; junior high school', keyNote: '中學校' },
        ],
      },
      {
        id: 'II', title: 'Section II – Vocabulary, Part 2',
        task: 'Pyramids – Based on 학, build a pyramid with words from Section I. Each level reflects the number of syllables in each word to be written. Two words go on each level of the pyramid. One answer for each level in number 25 has been done for you as an example. Please finish number 25.',
        type: 'pyramid',
        items: [
          { n: 25, title: 'People', skill: 'l23.people', given: ['학생', '유학생', '대학원생'], levels: [['학생', '학자'], ['유학생', '복학생'], ['대학원생', '대학교수']] },
          { n: 26, title: 'Places', skill: 'l23.places', levels: [['학교', '학원'], ['대학교', '중학교'], ['고등학교', '초등학교']] },
          { n: 27, title: 'Subjects of study', skill: 'l23.study', levels: [['수학', '어학'], ['경제학', '물리학'], ['생명과학', '지구과학']] },
          { n: 28, title: 'Related words', skill: 'l23.root', levels: [['전학', '방학'], ['장학금', '학용품'], ['학교생활', '수학여행']],
            keyNote: 'App note: 학교 / 대학교 are places, so they are in 26; 학교생활 (school life) and 수학여행 (school trip) are “related words”.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 29, track: 'wb56', label: 'Track 56', ans: ['오늘 학교에 전학생이 왔어요.'], en: 'Today a new student came (from another school) to our school.' },
          { n: 30, track: 'wb57', label: 'Track 57', ans: ['수학여행은 언제 가요?'], en: 'When do you go on a school trip? / When are we going on a school trip?',
            soft: [{ p: '수학 여행은 언제 가요', note: 'Accepted. The key writes it as one word: 수학여행.' }] },
        ],
      },
    ],
  };
})();
