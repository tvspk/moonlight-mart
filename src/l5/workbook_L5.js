/* workbook_L5.js — Korean 3 Workbook, Lesson 5 (p.26–30, answer key p.123).
   Section I 'mc': multiple choice (opts in book order, right = index).
   Section II 'write' with dialogue lines: the null line is the one to write, cue = the English prompt.
   Section III dictation = WB Track 11, 12 (whole sentence).  The key has no English for 12–13; ours (marked). */
MM.workbook[5] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary and Comprehension',
      task: 'Multiple choice. Choose the best answer.',
      type: 'mc', skill: 'l5.usage',
      items: [
        { n: 1, q: 'The Korean word for “Germany” is:', opts: ['한국', '미국', '영국', '독일'], right: 3, skill: 'l5.vocab', note: '독일에서 2년쯤 살았어요 (textbook).' },
        { n: 2, q: 'What is the Korean counter used for animals?', opts: ['명', '병', '마리', '개'], right: 2, skill: 'l5.count', note: '명 = people, 병 = bottles, 개 = things.' },
        { n: 3, q: 'When telling time in Korean, how do you count the hours?', opts: ['with Sino-Korean numbers (일, 이, 삼…) + 시', 'with Sino-Korean numbers + 분', 'with Native Korean numbers (하나, 둘, 셋…) + 시', 'with Native Korean numbers + 분'], right: 2, skill: 'l5.count', note: '한 시, 두 시, 다섯 시: hours are native Korean.' },
        { n: 4, q: '“2월” translates to English as:', opts: ['January', 'February', 'March', 'April'], right: 1, skill: 'l5.count', note: '월 = month of the year: 이월 = February.' },
        { n: 5, q: 'Written in 한글, 6,000 won is:', opts: ['천 원', '백 원', '오백 원', '육천 원'], right: 3, skill: 'l5.count', note: 'Money uses Sino-Korean numbers: 육천 원.' },
        { n: 6, q: '쯤 means:', opts: ['near', 'on top', 'approximately, about', '4 o’clock'], right: 2 },
        { n: 7, q: '-(으)ㄹ 거예요 is used when forming what verb tense?', opts: ['future tense', 'past tense', 'present tense', 'past progressive tense'], right: 0, note: '언제쯤 갈 거예요? = About when are you going to go?' },
        { n: 8, q: 'Where is 쯤 placed in a sentence?', opts: ['before nouns', 'before verbs', 'after nouns', 'after verbs'], right: 2, skill: 'l5.form' },
        { n: 9, q: 'What is the most common way to say “approximately” or “about” in Korean?', opts: ['약', '정도', '킬로미터', '쯤'], right: 3 },
        { n: 10, q: 'Which two Korean words are sometimes used together to express “approximately” or “about”?', opts: ['약 and 정도', '쯤 and 정도', '약 and 쯤', 'both A and C', 'both A and B', 'none of these'], right: 3, skill: 'l5.form', note: '약 한 달쯤, 약 한 달 정도.' },
        { n: 11, q: 'The word “약” can mean “approximately” or “about”, but also (     ) depending on the context.', opts: ['medicine', 'cup', 'EXO', 'yarn'], right: 0, skill: 'l5.vocab' },
      ],
    },
    {
      id: 'II', title: 'Section II – Complete the dialogue',
      task: 'Using the word 쯤 and the prompts in parentheses, complete each dialogue in Korean.',
      type: 'write', skill: 'l5.form', placeholder: '… 쯤 …',
      items: [
        { n: 12, lines: [['A', '도서관에 학생이 몇 명 있어요?'], ['B', null]], cue: 'about 100 people',
          ans: ['100명쯤 있어요.'], soft: [{ p: '(백|100) 명쯤 있어요', note: 'Accepted.' }, { p: '(학생이 |)(백|100)명쯤 있어요', note: 'Accepted.' }, { p: '(백|100)명 정도 있어요', note: 'Accepted, but the task asks for 쯤: 100명쯤.' }, { p: '약 (백|100)명(쯤|) 있어요', note: 'Accepted; the task asks for 쯤.' }],
          diag: [{ p: '쯤 (백|100)명 있어요', note: '쯤 comes after the noun: 100명쯤.' }, { p: '(백|100)명쯤 왔어요', note: '왔어요 = came. The question is how many ARE there: 있어요.' }, { p: '(백|100)명쯤 있어', note: 'Keep 요: 있어요.' }],
          en: 'There are about 100 people.', keyNote: 'English is ours; the key has none' },
        { n: 13, lines: [['A', '지금 현금 얼마 있어요?'], ['B', null]], cue: 'about 20,000 won',
          ans: ['20,000원쯤 있어요.'], soft: [{ p: '(20000|2만|이만) 원쯤 있어요', note: 'Accepted.' }, { p: '(20000|2만|이만|20,000) 원 정도 있어요', note: 'Accepted, but the task asks for 쯤.' }, { p: '약 (20000|2만|이만|20,000) 원(쯤|) 있어요', note: 'Accepted; the task asks for 쯤.' }, { p: '(20000|2만|이만|20,000)원쯤', note: 'Accepted. The key adds 있어요.' }],
          diag: [{ p: '(이십천|20천) 원쯤 있어요', note: 'Korean counts in 만 (10,000): 20,000 = 이만 (2만).' }, { p: '쯤 (20000|2만|이만) 원 있어요', note: '쯤 comes after the noun: 2만 원쯤.' }],
          en: 'I have about 20,000 won.', keyNote: 'English is ours; the key has none. 현금 = cash' },
        { n: 14, lines: [['A', null], ['B', '두 시쯤 갈 거예요.']], cue: 'About what time are you going to go?',
          ans: ['몇 시쯤 갈 거예요?'], soft: [{ p: '언제쯤 갈 거예요', note: 'Accepted: 언제쯤 = about when. “What time” is 몇 시: the key has 몇 시쯤.' }, { p: '몇 시 정도(에|) 갈 거예요', note: 'Accepted; the task asks for 쯤.' }, { p: '몇 시쯤에 갈 거예요', note: 'Accepted: 쯤에 is used too.' }],
          diag: [{ p: '몇 시쯤 갈 거에요', note: 'Written 거예요, with 예.' }, { p: '쯤 몇 시 갈 거예요', note: '쯤 comes after 몇 시.' }, { p: '몇 시쯤 갈까요', note: '갈까요 = shall we go? B answers about a plan: 갈 거예요?' }],
          en: 'About what time are you going to go?' },
        { n: 15, lines: [['A', null], ['B', '일곱 시쯤 만날까요?']], cue: 'Around what time shall we meet tomorrow?',
          ans: ['내일 몇 시쯤 만날까요?'], soft: [{ p: '(우리 |)내일 (우리 |)몇 시쯤(에|) 만날까요', note: 'Accepted.' }, { p: '내일 몇 시 정도(에|) 만날까요', note: 'Accepted; the task asks for 쯤.' }],
          diag: [{ p: '내일 몇 시쯤 만나을까요', note: 'Vowel stem: 만날까요 (Lesson 4).' }, { p: '내일 몇 시쯤 만날 거예요', note: '“Shall we…?” = 만날까요?' }],
          en: 'Around what time shall we meet tomorrow?' },
      ],
    },
    {
      id: 'III', title: 'Section III – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 16, track: 'wb11', label: 'Track 11', ans: ['독일에서 2년 정도 살았어요.', '독일에서 이 년 정도 살았어요.'], en: 'I lived in Germany for about 2 years.' },
        { n: 17, track: 'wb12', label: 'Track 12', ans: ['집이 어디쯤이에요?'], en: 'Whereabouts is your house?' },
      ],
    },
  ],
};
