/* textbook_L30.js — Korean 3, Lesson 30 (textbook p.185–188, answers p.199). Word Builder 2: 실 (室). Romanization removed.
   The PDF text layer garbles the keyword on p.185 (“प”) → restored as 실 from the page.
   Track 59 = the keyword and the word list, each read twice (4.9–30.8 s); per-word clips found by silence detection + ASR
   (sherpa-onnx Whisper base; several words unclear on ASR, boundaries follow the regular two-readings pattern). It does not read the parts.
   Track 60 = dialogue. Block type 'words' (tb.js wordsHtml, from Lesson 23). */
(() => {
  MM.lessons[30] = {
    n: 30, ko: '실 (室)', en: 'Word Builder 2',
    pages: { tb: '185–188', tbKey: '199', wb: '116–119', wbKey: '142' },
  };
  const W = (ko, hanja, parts, en, from, to) => ({ ko, hanja, parts, en, clip: from != null ? ['59', from, to] : null });
  MM.textbook[30] = {
    blocks: [
      { t: 'h', text: 'Lesson 30 · Word Builder 2', ko: '실 (室)' },
      { t: 'p', text: 'Word Builder lessons are designed to help you understand how to more efficiently expand your vocabulary by learning/understanding some common and basic building blocks of Korean words. Many (not all) of the words and letters introduced through Word Builder lessons are based on Chinese characters, or 한자, but the meanings can differ from modern-day Chinese. Your goal, through these lessons, is to understand how words are formed and remember the keywords in Korean in order to expand your Korean vocabulary from there. You certainly do not have to memorize the Hanja characters, but if you want to, feel free!' },
      { t: 'track', id: '59', from: 4.9, to: 6.5, label: 'Track 59 · 실' },
      { t: 'meaning', label: 'Today’s keyword', ko: '실 (室)', text: 'The keyword in this lesson is 실. The Chinese character for 실 is 室. The word 실 is related to “room”.' },

      { t: 'h2', text: 'Sample Expressions' },
      { t: 'track', id: '59', from: 6.5, to: 30.8, label: 'Track 59 · all the words (each read twice)' },
      { t: 'words', items: [
        W('화장실', '化粧室', '화장 (makeup) + 실 (room)', 'toilet; bathroom', 6.5, 8.7),
        W('분장실', '扮裝室', '분장 (stage makeup) + 실', 'dressing room; backstage powder room', 8.7, 10.85),
        W('교실', '敎室', '교 (school, teach) + 실 (room)', 'classroom', 10.85, 12.5),
        W('연습실', '練習室', '연습 (practice) + 실 (room)', 'practice room, practice place', 12.5, 14.45),
        W('대기실', '待機室', '대기 (wait) + 실 (room)', 'waiting room', 14.45, 16.35),
        W('회의실', '會議室', '회 (meet) + 의 (discuss) + 실 (room)', 'meeting room, conference room', 16.35, 18.2),
        W('병실', '病室', '병 (disease) + 실 (room)', 'hospital room, patient’s room', 18.2, 19.95),
        W('미용실', '美容室', '미용 (beauty treatment) + 실 (room)', 'beauty parlor; hair salon', 19.95, 21.8),
        W('사무실', '事務室', '사 (work) + 무 (work, task) + 실 (room)', 'office', 21.8, 23.6),
        W('교무실', '敎務室', '교 (school, teach) + 무 (work) + 실 (room)', 'teacher’s office', 23.6, 25.5),
        W('실장', '室長', '실 (room) + 장 (head, leader)', 'head of the office', 25.5, 27.25),
        W('실내', '室內', '실 (room) + 내 (inside)', 'indoors', 27.25, 28.95),
        W('실외', '室外', '실 (room) + 외 (outside)', 'outdoors, outside', 28.95, 30.8),
      ] },
      { t: 'p', text: '* 분장 (扮裝) also means “makeup”, but is specific to stage/theater makeup. Therefore, 분장실 (扮裝室) = dressing room; backstage powder room.' },
      { t: 'note', label: 'App note (not from the book)', text: 'How they sound (the book shows this in romanization; here in hangul): 연습실 [연습씰], 실장 [실짱], 실내 [실래], 실외 [시뢰], 회의실 [회이실]. 실 can stand at the end (화장실, 교실) or at the front (실장, 실내, 실외). 실내 and 실외 are opposites: 내 = inside, 외 = outside.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '60', lines: [
        { id: 'd1', sp: 'A', ko: '면접은 어디에서 봐요?', en: 'Where do I have an interview?' },
        { id: 'd2', sp: 'B', ko: '회의실에서 봐요. 대기실에서 기다려 주세요.', en: 'You will have it in the meeting room. Please wait in the waiting room.' },
        { id: 'd3', sp: 'A', ko: '네, 알겠습니다.', en: 'Okay, I will.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '면접 = (job) interview; 면접을 보다 = to have an interview (like 시험을 보다). 알겠습니다 = I understand / Okay (formal, Lesson 27 type 1).' },

      { t: 'exercises', title: 'Exercises for Lesson 30', items: [
        { id: 'x1', q: 'The word (  ) is related to “room”.', ans: ['실'], full: '실 (室)', skill: 'l30.root',
          soft: [{ p: '실 室', note: 'Accepted. The key: 실 (室).' }],
          diag: [{ p: '방', note: '방 also means room, but the Word Builder keyword of this lesson is the Sino-Korean 실 (室).' }, { p: '교실', note: '교실 = classroom. The keyword itself is one syllable: 실.' }, { p: '학', note: '학 (學) was the keyword of Lesson 23 (learning). Room = 실.' }] },
        { id: 'x2', q: 'Write in Korean (Sino-Korean): Toilet; bathroom', hint: '화장 (化粧) = make-up', ans: ['화장실'], full: '화장실 (化粧室)', skill: 'l30.root',
          diag: [{ p: '분장실', note: '분장실 = dressing room (stage makeup). Toilet = 화장 + 실 = 화장실.' }, { p: '화장', note: 'Add 실 (room): 화장실.' }] },
        { id: 'x3', q: 'Write in Korean (Sino-Korean): Classroom', hint: '교 (敎) = school; teach', ans: ['교실'], full: '교실 (敎室)', skill: 'l30.root',
          soft: [{ p: '강의실', note: 'Also a classroom — usually a lecture room at a university (Workbook 18). The key: 교실.' }],
          diag: [{ p: '교무실', note: '교무실 = teachers’ office (교 + 무 + 실). Classroom = 교실.' }, { p: '학교', note: '학교 = school (Lesson 23). Classroom = 교 + 실 = 교실.' }] },
        { id: 'x4', q: 'Write in Korean (Sino-Korean): Hospital room; patient’s room', hint: '병 (病) = disease', ans: ['병실'], full: '병실 (病室)', skill: 'l30.root',
          diag: [{ p: '병원', note: '병원 = hospital. The room for a patient = 병 + 실 = 병실.' }, { p: '응급실', note: '응급실 = emergency room (Workbook 15). Patient’s room = 병실.' }] },
        { id: 'x5', q: 'Write in Korean (Sino-Korean): Indoors', hint: '내 (內) = inside', ans: ['실내'], full: '실내 (室內)', skill: 'l30.inout',
          diag: [{ p: '내실', note: 'Here 실 comes first: 실 + 내 = 실내.' }, { p: '실외', note: '실외 = outdoors (외 = outside). Indoors = 실내.' }, { p: '실래', note: 'Pronounced [실래], written 실내.' }] },
      ] },
    ],
  };
})();
