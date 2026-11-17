/* textbook_L23.js — Korean 3, Lesson 23 (textbook p.146–150, answers p.198–199). Word Builder 1: 학 (學). Romanization removed.
   The PDF text layer garbles the keyword on p.146 (“೟”) → restored as 학 from the page.
   Track 45 = the keyword and the word list, each read twice (5.5–46.8 s); per-word clips found by silence detection + ASR
   (sherpa-onnx Whisper base). It does not read the parts (학 + 생 …), only the words. Track 46 = dialogue.
   New block type 'words' (tb.js wordsHtml): parts · word + hanja · English, shown openly (the book prints them). */
(() => {
  MM.lessons[23] = {
    n: 23, ko: '학 (學)', en: 'Word Builder 1',
    pages: { tb: '146–150', tbKey: '198–199', wb: '91–94', wbKey: '136–137' },
  };
  const W = (ko, hanja, parts, en, from, to) => ({ ko, hanja, parts, en, clip: from != null ? ['45', from, to] : null });
  MM.textbook[23] = {
    blocks: [
      { t: 'h', text: 'Lesson 23 · Word Builder 1', ko: '학 (學)' },
      { t: 'p', text: 'Welcome to the first Word Builder lesson of Korean 3! Word Builder lessons are designed to help you understand how to more efficiently expand your vocabulary by learning/understanding some common and basic building blocks of Korean words. Many (not all) of the words and letters introduced through Word Builder lessons are based on Chinese characters, or 한자, but the meanings can differ from modern-day Chinese. Your goal, through these lessons, is to understand how words are formed and remember the keywords in Korean in order to expand your Korean vocabulary from there. You certainly don’t have to memorize the Hanja characters, but if you want to, feel free!' },
      { t: 'track', id: '45', from: 5.5, to: 7.7, label: 'Track 45 · 학' },
      { t: 'meaning', label: 'Today’s keyword', ko: '학 (學)', text: 'The Chinese character for this word is 學. The word 학 is related to “learning”, “studying”, and “school”.' },

      { t: 'h2', text: 'Sample Expressions' },
      { t: 'track', id: '45', from: 7.7, to: 46.84, label: 'Track 45 · all the words (each read twice)' },
      { t: 'words', items: [
        W('학생', '學生', '학 + 생 (person, member, participant)', 'student', 7.7, 9.55),
        W('학교', '學校', '학 + 교 (school)', 'school', 9.55, 11.25),
        W('학원', '學院', '학 + 원 (house; garden)', 'private academy', 11.25, 12.85),
        W('수학', '數學', '수 (numbers) + 학', 'mathematics', 12.85, 14.45),
        W('과학', '科學', '과 (subject; class; species) + 학', 'science', 14.45, 16.0),
        W('어학', '語學', '어 (word) + 학', 'language learning', 16.0, 17.5),
        W('언어학', '言語學', '언어 (word + word) + 학', 'linguistics', 17.5, 19.2),
        W('경제학', '經濟學', '경제 (economy) + 학', 'economics', 19.2, 21.12),
        W('학자', '學者', '학 + 자 (person)', 'scholar', 21.12, 22.82),
        W('유학', '留學', '유 (to stay) + 학', 'studying abroad; staying abroad to study', 22.82, 24.2),
        W('유학생', '留學生', '유학 (studying abroad) + 생', 'student studying abroad', 24.2, 26.07),
        W('전학', '轉學', '전 (to roll, move) + 학', 'to change schools', 26.07, 27.6),
        W('전학생', '轉學生', '전학 (to change schools) + 생', 'student who moved to another school', 27.6, 29.68),
        W('학년', '學年', '학 + 년 (year)', 'school year', 29.68, 31.36),
        W('학기', '學期', '학 + 기 (period)', 'semester', 31.36, 33.0),
        W('방학', '放學', '방 (to release, let go) + 학', 'school vacation', 33.0, 34.75),
        W('장학금', '奬學金', '장 (recommending) + 학 + 금 (money)', 'scholarship', 34.75, 36.9),
        W('장학생', '奬學生', '장 + 학 + 생', 'student on a scholarship', 36.9, 38.9),
        W('복학생', '復學生', '복 (return) + 학 + 생', 'student who has returned to school (usually) after a long break', 38.9, 40.95),
        W('학습', '學習', '학 + 습 (acquire)', '(formal) learning, studies', 40.95, 42.6),
        W('한국어 학습', '韓國語 學習', '', '(formal) Korean learning', 42.6, 45.25),
        W('독학', '獨學', '독 (alone) + 학', 'self-study, studying by oneself', 45.25, 46.84),
      ] },
      { t: 'note', label: 'App note (not from the book)', text: 'How they sound (the book shows this in romanization; here in hangul): 학생 [학쌩], 학교 [학꾜], 학원 [하권], 학년 [항년], 학기 [학끼], 학자 [학짜], 장학금 [장학끔], 전학 [저낙], 복학생 [보칵쌩], 독학 [도칵], 학습 [학씁]. A ㄱ at the end of 학 makes the next ㄱ/ㄷ/ㅂ/ㅅ/ㅈ tense, and before ㄴ it sounds like ㅇ.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '46', lines: [
        { id: 'd1', sp: 'A', ko: '저 드라마 저희 학교에서 찍고 있어요.', en: 'That drama is set in my school. (They are filming it at my school.)' },
        { id: 'd2', sp: 'B', ko: '진짜요? 언제 찍어요?', en: 'Really? When do they film?' },
        { id: 'd3', sp: 'A', ko: '학생들 없는 일요일에 찍어요.', en: 'They film on Sundays when there are no students.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '찍다 = to film, to take (a photo). 저희 학교 = my (our) school, humble. 학생들 없는 일요일 = Sunday(s) without students: 없는 is the Lesson 13/14 form of 없다 before a noun.' },

      { t: 'exercises', title: 'Exercises for Lesson 23', items: [
        { id: 'x1', q: 'The word (  ) is related to “learning”, “studying”, and “school”.', ans: ['학'], full: '학 (學)', skill: 'l23.root',
          soft: [{ p: '학 學', note: 'Accepted. The key: 학 (學).' }],
          diag: [{ p: '학생', note: '학생 = student. The keyword itself is one syllable: 학.' }, { p: '학교', note: '학교 = school. The keyword is 학.' }, { p: '공부', note: '공부 = study, but the Word Builder keyword of this lesson is 학 (學).' }] },
        { id: 'x2', q: 'Write in Korean (Sino-Korean): Changing schools', hint: '전 (轉) = to move; to roll', ans: ['전학'], full: '전학 (轉學)', skill: 'l23.study',
          diag: [{ p: '전학생', note: '전학생 = a student who moved to another school. Changing schools itself = 전학.' }, { p: '유학', note: '유학 = studying abroad. 전 (move) + 학 = 전학.' }, { p: '저낙', note: 'Pronounced [저낙], written 전학.' }] },
        { id: 'x3', q: 'Write in Korean (Sino-Korean): Scholarship', hint: '장 (奬) = recommend', ans: ['장학금'], full: '장학금 (奬學金)', skill: 'l23.study',
          diag: [{ p: '장학생', note: '장학생 = a student on a scholarship. The money (금) = 장학금.' }, { p: '장학', note: 'Add 금 (money): 장학금.' }, { p: '장학끔', note: 'Pronounced [장학끔], written 장학금.' }] },
        { id: 'x4', q: 'Write in Korean (Sino-Korean): Mathematics', hint: '수 (數) = numbers', ans: ['수학'], full: '수학 (數學)', skill: 'l23.study',
          diag: [{ p: '과학', note: '과학 = science. Numbers (수) + 학 = 수학.' }, { p: '수학여행', note: '수학여행 = school trip (a different 수: 修). Mathematics = 수학.' }] },
        { id: 'x5', q: 'Write in Korean (Sino-Korean): School year', hint: '년 (年) = year', ans: ['학년'], full: '학년 (學年)', skill: 'l23.study',
          diag: [{ p: '학기', note: '학기 = semester (기 = period). Year (년) → 학년.' }, { p: '항년', note: 'Pronounced [항년], written 학년.' }, { p: '년학', note: '학 comes first: 학 + 년 = 학년.' }] },
      ] },
    ],
  };
})();
