/* workbook_L10.js — Korean 3 Workbook, Lesson 10 (p.45–48, answer key p.126–127).
   Section I 'conj' (English translation, then the -기 전에 form + Check; English is compared loosely, never failed).
   The book's Section I has two parts (verbs 1–10, nouns 11–15): shown as two blocks, I and I (nouns).
   Section II reading (sec.passage) + mc. Section III dictation: WB Track 23, 24 (whole sentences).
   lenient is off: 갔기 / 가기 differ by one jamo. */
(() => {
  const V = (n, dict, ko, en, enAlt, diag) => ({ n, dict, en, enAlt: enAlt || [], ans: [ko], lenient: false,
    diag: (diag || []).concat([{ p: ko.replace('기 전에', '는 전에'), note: 'Use -기 before 전에 (-는 is for 것 같아요, Lesson 9).' }]) });
  const past = (wrong, right) => ({ p: wrong, note: `No past before 기: ${right}.` });
  MM.workbook[10] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary and Comprehension',
        task: 'Change each of the following verbs to nouns, add 전에, and write an English translation.',
        example: { given: '사다', ko: '사기 전에', en: 'before buying' },
        type: 'conj', noQ: true, skill: 'l10.form',
        placeholder: '…기 전에', formLabel: '-기 전에 form of ', enPlaceholder: 'English translation',
        items: [
          V(1, '오다', '오기 전에', 'before coming', ['before you come', 'before i come', 'before he comes', 'before she comes'], [past('왔기 전에', '오기 전에')]),
          V(2, '마시다', '마시기 전에', 'before drinking', ['before you drink', 'before i drink'], [past('마셨기 전에', '마시기 전에'), { p: '마셔기 전에', note: 'Just the stem + 기: 마시기 전에.' }]),
          V(3, '연습하다', '연습하기 전에', 'before practicing', ['before practising', 'before you practice', 'before you practise'], [past('연습했기 전에', '연습하기 전에')]),
          V(4, '주다', '주기 전에', 'before giving', ['before you give', 'before i give'], [past('줬기 전에', '주기 전에')]),
          V(5, '씻다', '씻기 전에', 'before washing', ['before you wash', 'before i wash', 'before washing up'], [past('씻었기 전에', '씻기 전에'), { p: '씻으기 전에', note: '-기 attaches straight to the stem, even after a consonant: 씻기 전에.' }]),
          V(6, '쓰다', '쓰기 전에', 'before writing; before using', ['before writing', 'before using', 'before you write', 'before you use'], [past('썼기 전에', '쓰기 전에')]),
          V(7, '보내다', '보내기 전에', 'before sending', ['before you send', 'before i send'], [past('보냈기 전에', '보내기 전에')]),
          V(8, '들어오다', '들어오기 전에', 'before coming in', ['before you come in', 'before entering', 'before you enter'], [past('들어왔기 전에', '들어오기 전에')]),
          V(9, '열다', '열기 전에', 'before opening', ['before you open', 'before i open'], [past('열었기 전에', '열기 전에'), { p: '여기 전에', note: 'Keep the ㄹ: 열 + 기 = 열기 전에. (여기 = here!)' }]),
          V(10, '팔다', '팔기 전에', 'before selling', ['before you sell', 'before i sell'], [past('팔았기 전에', '팔기 전에'), { p: '파기 전에', note: 'Keep the ㄹ: 팔 + 기 = 팔기 전에.' }]),
        ],
      },
      {
        id: 'Ib', title: 'Section I – Nouns + 전에',
        task: 'Add 전에 to each of the following nouns and write an English translation.',
        type: 'conj', noQ: true, skill: 'l10.noun',
        placeholder: '… 전에', formLabel: '전에 with ', enPlaceholder: 'English translation',
        items: [
          { n: 11, dict: '여섯 시', ans: ['여섯 시 전에'], en: 'before 6 o’clock', enAlt: ['before six', 'before 6', 'before six o’clock', 'before 6:00'], lenient: false, diag: [{ p: '여섯 시기 전에', note: '-기 is only for verbs. A noun takes 전에 directly: 여섯 시 전에.' }, { p: '여섯 시 앞에', note: '앞에 = in front of (a place). Before a time: 전에.' }] },
          { n: 12, dict: '수업', ans: ['수업 전에'], en: 'before class', enAlt: ['before the class', 'before the lesson', 'before lesson'], lenient: false, diag: [{ p: '수업기 전에', note: '-기 is only for verbs: 수업 전에.' }, { p: '수업하기 전에', note: 'Good Korean (before having class), but here add 전에 to the noun: 수업 전에.' }] },
          { n: 13, dict: '일요일', ans: ['일요일 전에'], en: 'before Sunday', lenient: false, diag: [{ p: '일요일기 전에', note: '-기 is only for verbs: 일요일 전에.' }] },
          { n: 14, dict: '여름 휴가', ans: ['여름 휴가 전에'], en: 'before summer vacation/holiday/break', enAlt: ['before summer vacation', 'before the summer vacation', 'before summer holiday', 'before the summer holidays', 'before summer holidays', 'before summer break'], lenient: false, diag: [{ p: '여름 휴가기 전에', note: '-기 is only for verbs: 여름 휴가 전에.' }] },
          { n: 15, dict: '시험', ans: ['시험 전에'], en: 'before the exam', enAlt: ['before exam', 'before the test', 'before test', 'before an exam'], lenient: false, diag: [{ p: '시험기 전에', note: '-기 is only for verbs: 시험 전에.' }, { p: '시험 보기 전에', note: 'Good Korean (before taking the exam), but here add 전에 to the noun: 시험 전에.' }] },
        ],
      },
      {
        id: 'II', title: 'Section II – Reading comprehension',
        task: 'Read the following dialogue and answer the questions.',
        passage: [
          '수영: 우리 내일 몇 시에 만날까요?',
          '태연: 3시쯤에 볼까요?',
          '서현: 3시 전에 만나요. 저 4시에 어디 가야 돼요.',
          '수영: 1시 전에 만나서 점심 먹을까요?',
          '서현: 좋아요.',
          '태연: 저도 좋아요. 저는 아침에 학교 가서 12시 전에 끝나요.',
          '수영: 좋아요. 내일 12시 반까지 다 여기로 오세요.',
          '서현: 내일 유리 씨도 와요?',
          '수영: 유리 씨는 바빠서 못 올 것 같아요. 제가 오늘 자기 전에 유리 씨한테 전화해서 다시 물어볼게요.',
        ],
        passageNote: 'App notes (not in the workbook): 가야 돼요 = I have to go; 끝나다 = to end, finish; 반 = half (12시 반 = 12:30); -까지 = by, until; 물어보다 = to ask. 쯤 (L5), 만나서 / 가서 / 바빠서 / 전화해서 (L7), 올 것 같아요 (L9).',
        type: 'mc', skill: 'l10.usage',
        items: [
          { n: 16, q: 'When did 태연 originally suggest to meet tomorrow?', opts: ['before 3 o’clock', 'at 3 o’clock', 'by 3 o’clock', 'around 3 o’clock'], right: 3, skill: 'l10.noun', note: '3시쯤에 볼까요? = Shall we meet around 3? (쯤 = around, Lesson 5). “Before 3” was 서현’s idea: 3시 전에.', wrongNote: 'Not that one. Look at 태연’s first line: 3시쯤에.' },
          { n: 17, q: 'Where does 서현 have to go at 4 o’clock tomorrow?', opts: ['church', 'meeting', 'somewhere (she didn’t say exactly where)', 'school'], right: 2, note: '저 4시에 어디 가야 돼요: 어디 here = somewhere.', wrongNote: 'Not that one. 서현 only says 어디 (somewhere).' },
          { n: 18, q: 'Why did 태연 agree to meet before 1 o’clock tomorrow?', opts: ['Because she will be busy by 12 o’clock tomorrow.', 'Because she will not go to school tomorrow.', 'Because her school will finish before 12 o’clock tomorrow.', 'none of the above'], right: 2, note: '12시 전에 끝나요 = it finishes before 12.', wrongNote: 'Not that one. 태연: 아침에 학교 가서 12시 전에 끝나요.' },
          { n: 19, q: 'When did 수영 say that she would call 유리?', opts: ['Before 4 o’clock.', 'Before she goes to bed tonight.', 'She didn’t say that she would call 유리.', 'Before 12:30 tomorrow.'], right: 1, note: '오늘 자기 전에 = tonight before going to bed (자다 → 자기 전에).', wrongNote: 'Not that one. Find 자기 전에 in 수영’s last line.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 20, track: 'wb23', label: 'Track 23', ans: ['들어오기 전에 노크하세요.'], en: 'Knock before you come in.' },
          { n: 21, track: 'wb24', label: 'Track 24', ans: ['사기 전에 잘 생각하세요.'], en: 'Think well before you buy it.' },
        ],
      },
    ],
  };
})();
