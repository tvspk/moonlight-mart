/* workbook_L21.js — Korean 3 Workbook, Lesson 21 (p.84–87, answer key p.135).
   Section I 'mc': circle the correct spelling (options in book order). Section II 'explain' (short answer → compare with the key →
   self-judge). Section III 'pick': underline the correct conjugation (three options, one right). Section IV dictation = WB Track 50, 51,
   52 (whole sentences; ASR matches the key). The workbook’s heading prints “-(으)ㄴ/는데”; kept. */
MM.workbook[21] = {
  sections: [
    {
      id: 'I', title: 'Section I – Vocabulary',
      task: 'Based on the given English translation, choose the correct spelling of the Korean word.',
      example: { given: 'To worry: 거그장하다 · 컥창하다 · 걱정하다', ko: '걱정하다', en: 'to worry' },
      type: 'mc', skill: 'l21.vocab',
      items: [
        { n: 1, q: 'To take a shower', opts: ['셔우와하다', '샤워하다', '샤월하다'], right: 1 },
        { n: 2, q: 'To be big', opts: ['쿠다', '그다', '크다'], right: 2 },
        { n: 3, q: 'To open', opts: ['열다', '여울다', '욜다'], right: 0 },
        { n: 4, q: 'To be happy', opts: ['행보가다', '행복하다', '헹복하다'], right: 1 },
        { n: 5, q: 'To be sleepy', opts: ['졸리다', '줄리다', '절리다'], right: 0 },
        { n: 6, q: 'To dance', opts: ['줌주다', '춤츠다', '춤추다'], right: 2 },
        { n: 7, q: 'To speak; to say; to talk', opts: ['말라다', '말하다', '마라다'], right: 1 },
        { n: 8, q: 'To be hungry', opts: ['베고프다', '패고브다', '배고프다'], right: 2 },
        { n: 9, q: 'To practice', opts: ['연습하다', '연스바다', '야느습하다'], right: 0 },
        { n: 10, q: 'To read', opts: ['읽타', '읽다', '일그다'], right: 1 },
      ],
    },
    {
      id: 'II', title: 'Section II – Comprehension',
      task: 'Short answer. Write your answer (English or your own language), then compare it with the key.',
      type: 'explain', skill: 'l21.form',
      items: [
        { n: 11, q: 'Explain the type of verb each of these linking verbs is attached to and how to conjugate: -는데, -은데, -ㄴ데.',
          key: '-는데 is used after verbs, after 있다 and 없다, and after -았 or -겠. -은데 is used after adjectives that have any final consonant, except ㄹ, in the infinitive form. -ㄴ데 is used after adjectives that end in a vowel or the consonant ㄹ (in this case, ㄹ is dropped), and after 이다 and 아니다.' },
        { n: 12, q: 'List the 6 main types of usages for this set of linking verbs.', skill: 'l21.usage',
          key: 'Usage 1: Explaining the background or the situation before making a suggestion, a request, or a question. Usage 2: Explaining the situation before explaining what happened. Usage 3: Showing a result or situation that is contrasted from the previous action or situation. Usage 4: Showing surprise or exclamation. Usage 5: Asking a question (expecting some explanation about a situation or behavior). Usage 6: Expecting an answer or a response.' },
      ],
    },
    {
      id: 'III', title: 'Section III – Conjugation',
      task: 'Choose (underline) the correct conjugation.',
      type: 'pick', skill: 'l21.form',
      items: [
        { n: 13, lines: [['', '내일 {일요일인데|일요일은데|일요일는데}, 뭐 할 거예요?']], ans: [['일요일인데']], skill: 'l21.noun',
          en: 'It’s Sunday tomorrow. What are you going to do?', why: 'Noun + 이다 → 인데 (rule 3: after 이다 and 아니다).' },
        { n: 14, lines: [['', '어제 자고 {있었인데|있었은데|있었는데}, 한국에서 전화가 왔어요.']], ans: [['있었는데']], skill: 'l21.past',
          en: 'I was sleeping yesterday, and I got a phone call from Korea.', why: 'After the past -았/었 → -는데 (rule 1).' },
        { n: 15, lines: [['', '아직 {9시인데|9시은데|9시는데} 벌써 졸려요.']], ans: [['9시인데']], skill: 'l21.noun',
          en: 'It’s still 9 o’clock but I am already sleepy.', why: '9시 is a noun: + 이다 → 9시인데.' },
        { n: 16, lines: [['', '준비 많이 {했인데요|했은데요|했는데요}.']], ans: [['했는데요']], skill: 'l21.past',
          en: 'I prepared a lot, but…', why: '했 = past → -는데요.' },
        { n: 17, lines: [['', '{멋있인데요|멋있은데요|멋있는데요}!']], ans: [['멋있는데요']], skill: 'l21.form',
          en: 'Oh, that’s cool!', why: '멋있다 ends in 있다 → -는데 (rule 1: after 있다 and 없다).' },
        { n: 18, lines: [['', '지금 어디에 {있인데요|있은데요|있는데요}?']], ans: [['있는데요']], skill: 'l21.form',
          en: 'So where are you now?', why: '있다 → 있는데 (rule 1).' },
        { n: 19, lines: [['', '지금요? 지금 {바쁜데요|바쁘은데요|바쁘는데요}.']], ans: [['바쁜데요']], skill: 'l21.form',
          en: 'Now? I’m busy now, so…', why: '바쁘다 is descriptive and ends in a vowel → -ㄴ데: 바쁜데요 (rule 3).' },
      ],
    },
    {
      id: 'IV', title: 'Section IV – Dictation',
      task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
      type: 'dictation',
      items: [
        { n: 20, track: 'wb50', label: 'Track 50', ans: ['내일 친구 생일인데, 선물을 아직 못 샀어요.'], lenient: false, en: 'It’s my friend’s birthday tomorrow, but I haven’t been able to buy a present yet.' },
        { n: 21, track: 'wb51', label: 'Track 51', ans: ['오늘 뉴스에서 봤는데, 그거 진짜예요?'], lenient: false, en: 'I saw it in the news today. Is that for real?' },
        { n: 22, track: 'wb52', label: 'Track 52', ans: ['저는 지금 학생인데, 일도 하고 있어요.'], lenient: false, en: 'I am a student now, but I’m also working.' },
      ],
    },
  ],
};
