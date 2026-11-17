/* workbook_L17.js — Korean 3 Workbook, Lesson 17 (p.70–72, answer key p.132).
   Section I vocabulary (the book: translate each word) → match (10 words, 2 rounds of 5).
   Section II writing practice: a complete sentence from two prompts + tense, with -을/를 위해서 (11–13) and -기 위해서 (14–16).
   The key gives example answers: other correct word orders are accepted (soft); the key's English is shown afterwards.
   Section III dictation = WB Track 40, 41, 42 (whole sentences). lenient off: 가기 / 가는, 을 / 를. */
(() => {
  const NOUN = 'Noun + 을/를 위해서: 을 after a consonant, 를 after a vowel.';
  MM.workbook[17] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary',
        task: 'Translate each word to English, then write it in your preferred language (if not English). Here: match each word to its meaning.',
        type: 'match',
        items: [
          { n: 1, ko: '회사', en: 'company' },
          { n: 2, ko: '건강', en: 'health' },
          { n: 3, ko: '슈퍼맨', en: 'Superman' },
          { n: 4, ko: '세계', en: 'world' },
          { n: 5, ko: '평화', en: 'peace' },
          { n: 6, ko: '열심히', en: '(adverb) hard, diligently' },
          { n: 7, ko: '부모님', en: 'parents' },
          { n: 8, ko: '모으다', en: 'to gather, to collect; to save up' },
          { n: 9, ko: '운동', en: 'exercise; sports' },
          { n: 10, ko: '매일', en: 'every day' },
        ],
      },
      {
        id: 'II', title: 'Section II – Writing practice',
        task: 'Write a complete sentence using the two given prompts and -을/를 위해서 (11–13) or -기 위해서 (14–16), in the tense given in brackets. Then translate it in your head and compare with the key’s translation.',
        example: { given: '[Present Progressive] 운동을 하다, 건강', ko: '건강을 위해서 운동을 하고 있어요.', en: 'I am exercising for my health.' },
        type: 'write', skill: 'l17.noun', placeholder: '… 위해서 …',
        items: [
          { n: 11, given: '[Past] 선물을 준비하다, 친구', ans: ['친구를 위해서 선물을 준비했어요.'],
            soft: [{ p: '(저는 |)친구(를|) 위해(서|) 선물(을|) 준비했어요', note: 'Accepted.' }, { p: '(저는 |)선물(을|) 친구(를|) 위해(서|) 준비했어요', note: 'Accepted (another word order).' }],
            diag: [{ p: '(저는 |)친구을 위해(서|) 선물(을|) 준비했어요', note: '친구 ends in a vowel: 를 → 친구를. ' + NOUN }, { p: '(저는 |)친구(가|에|에게) 위해(서|) 선물(을|) 준비했어요', note: NOUN }, { p: '(저는 |)친구(를|) 위해(서|) 선물(을|) 준비해요', note: '[Past] → 준비했어요.' }, { p: '(저는 |)친구(를|) 위해(서|) 선물(을|) 준비할 거예요', note: '[Past] → 준비했어요.' }],
            en: 'I prepared a present for my friend.' },
          { n: 12, given: '[Future] 요리를 하다, 부모님', ans: ['부모님을 위해서 요리를 할 거예요.'],
            soft: [{ p: '(저는 |제가 |)부모님(을|) 위해(서|) 요리(를 |)할 거예요', note: 'Accepted.' }, { p: '(저는 |제가 |)부모님(을|) 위해(서|) 요리(를 |)할게요', note: 'Accepted: -(으)ㄹ게요 (Lesson 6) is also future (a promise).' }],
            diag: [{ p: '(저는 |)부모님를 위해(서|) 요리(를 |)할 거예요', note: '부모님 ends in a consonant: 을 → 부모님을. ' + NOUN }, { p: '(저는 |)부모님(을|) 위해(서|) 요리(를 |)(했어요|해요)', note: '[Future] → 할 거예요.' }, { p: '(저는 |)부모님(이|께|에게) 위해(서|) 요리(를 |)할 거예요', note: NOUN }],
            en: 'I will cook for my parents.' },
          { n: 13, given: '[Present Progressive] 돈을 모으다, 미래', ans: ['미래를 위해서 돈을 모으고 있어요.'],
            soft: [{ p: '(저는 |)미래(를|) 위해(서|) 돈(을|) 모으고 있어요', note: 'Accepted.' }, { p: '(저는 |)돈(을|) 미래(를|) 위해(서|) 모으고 있어요', note: 'Accepted (another word order).' }],
            diag: [{ p: '(저는 |)미래을 위해(서|) 돈(을|) 모으고 있어요', note: '미래 ends in a vowel: 를 → 미래를. ' + NOUN }, { p: '(저는 |)미래(를|) 위해(서|) 돈(을|) (모아요|모았어요|모을 거예요)', note: '[Present Progressive] → 모으고 있어요 (-고 있다).' }, { p: '(저는 |)미래(를|) 위해(서|) 돈(을|) 모어고 있어요', note: '-고 goes straight onto the stem: 모으고.' }],
            en: 'I am saving up money for the future.' },
          { n: 14, given: '[Past] 창문을 열다, 청소를 하다', skill: 'l17.verb', ans: ['청소를 하기 위해서 창문을 열었어요.'],
            soft: [{ p: '(저는 |)청소(를 |)하기 위해(서|) 창문(을|) 열었어요', note: 'Accepted.' }],
            diag: [{ p: '(저는 |)청소(를 |)했기 위해(서|) 창문(을|) 열었어요', note: 'No tense before 기: the past goes on the last verb (열었어요): 하기 위해서.' }, { p: '(저는 |)청소(를 |)하는 위해(서|) 창문(을|) 열었어요', note: 'Verb stem + 기 위해서: 하기.' }, { p: '(저는 |)창문(을|) 열기 위해(서|) 청소(를 |)했어요', note: 'That says you cleaned in order to open the window. The purpose is the cleaning: 청소를 하기 위해서 창문을 열었어요.' }, { p: '(저는 |)청소(를 |)하기 위해(서|) 창문(을|) 열어요', note: '[Past] → 열었어요.' }],
            en: 'I opened the window in order to clean up.' },
          { n: 15, given: '[Present Progressive] 열심히 공부하다, 대학에 가다', skill: 'l17.verb', ans: ['대학에 가기 위해서 열심히 공부하고 있어요.'],
            soft: [{ p: '(저는 |)대학(에|교에) 가기 위해(서|) 열심히 공부(를 |)하고 있어요', note: 'Accepted.' }, { p: '(저는 |)대학(에|교에) 가기 위해(서|) 공부(를|) 열심히 하고 있어요', note: 'Accepted.' }],
            diag: [{ p: '(저는 |)대학(에|교에) (가는|간|갔기) 위해(서|) 열심히 공부하고 있어요', note: 'Verb stem + 기 (no tense): 가기 위해서.' }, { p: '(저는 |)대학(을|를|에서) 가기 위해(서|) 열심히 공부하고 있어요', note: 'Going TO college: 대학에.' }, { p: '(저는 |)대학(에|교에) 가기 위해(서|) 열심히 공부해요', note: '[Present Progressive] → 공부하고 있어요.' }],
            en: 'I am studying hard in order to go to college.' },
          { n: 16, given: '[Future] 지금 자다, 내일 일찍 일어나다', skill: 'l17.verb', ans: ['내일 일찍 일어나기 위해서 지금 잘 거예요.'],
            soft: [{ p: '(저는 |)내일 일찍 일어나기 위해(서|) 지금 잘 거예요', note: 'Accepted.' }, { p: '(저는 |)지금 잘 거예요 내일 일찍 일어나기 위해(서|)', note: 'Accepted, though Korean normally puts the 위해서 part first.' }, { p: '(저는 |)내일 일찍 일어나기 위해(서|) 지금 잘게요', note: 'Accepted: -(으)ㄹ게요 (Lesson 6), deciding right now.' }],
            diag: [{ p: '(저는 |)내일 일찍 (일어나는|일어날|일어났기) 위해(서|) 지금 잘 거예요', note: 'Verb stem + 기 (no tense): 일어나기 위해서.' }, { p: '(저는 |)지금 자기 위해(서|) 내일 일찍 일어날 거예요', note: 'That says you will get up early in order to sleep now. Purpose = getting up early: 일어나기 위해서 지금 잘 거예요.' }, { p: '(저는 |)내일 일찍 일어나기 위해(서|) 지금 (자요|잤어요)', note: '[Future] → 잘 거예요.' }],
            en: 'I am going to bed now in order to get up early tomorrow.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 17, track: 'wb40', label: 'Track 40', ans: ['빨리 가기 위해서 택시를 탔어요.'], lenient: false, en: 'I took a taxi in order to get there fast.' },
          { n: 18, track: 'wb41', label: 'Track 41', ans: ['저는 피부를 위해서 물을 많이 마셔요.'], lenient: false, en: 'I drink a lot of water for my skin.' },
          { n: 19, track: 'wb42', label: 'Track 42', ans: ['가족들한테 보내기 위해서 편지를 썼어요.'], lenient: false, en: 'I wrote a letter in order to send to my family.' },
        ],
      },
    ],
  };
})();
