/* workbook_L27.js — Korean 3 Workbook, Lesson 27 (p.104–107, answer key p.140).
   Section I = mc (5, options in book order). Section II = situational expressions → write with the English situation as the prompt
   (givenEn); 9 asks two things (존댓말 or 반말? + the address): typed as one answer (교수님 alone is accepted, the level is in the key note).
   Section III = conjugation practice (write, Korean sentence given). Section IV dictation = WB Track 64, 65, 66 (whole sentences; ASR matches
   the key — the part-by-part reading of 64 sounds like “할게요” on ASR, the key prints 할게). lenient off (만났어 / 만났어요 is the point). */
(() => {
  const F = MM.forms[27], row = d => F.find(f => f.dict === d && f.kind === 'verb');
  const POL = { re: '요$', note: 'Still 존댓말: the -요 makes it polite. In 반말, drop -요.' };
  MM.workbook[27] = {
    sections: [
      {
        id: 'I', title: 'Section I – Comprehension',
        task: 'Choose the correct answer.',
        type: 'mc', skill: 'l27.when',
        items: [
          { n: 1, q: 'The ending most associated with 반말 is:', opts: ['-ㅂ니다', '-ㅂ니까', '-아/어/여', '-(아/어/여)요'], right: 2, skill: 'l27.form',
            note: 'Type 3: -아/어/여 = the casual, informal, and intimate ending.', wrongNote: '-ㅂ니다 / -ㅂ니까 are Type 1 and -(아/어/여)요 is Type 2: both 존댓말.' },
          { n: 2, q: 'In which of the following situations should you NOT use 반말?', opts: ['You don’t know the other person. You just met him/her.', 'You are talking to a large group of people or filming a video blog.', 'You know the other person only through work, and not personally.', 'all of the above'], right: 3,
            note: 'All three are on the book’s list of cases in which NOT to use 반말.', wrongNote: 'That one is right — but so are the other two.' },
          { n: 3, q: 'Up until now, all the sentence endings introduced in the Korean 3 lessons have been in the (      ) politeness level.', opts: ['존댓말', '반말', 'casual language', 'crude language'], right: 0,
            note: 'Everything so far has been 존댓말 (polite/formal language).', wrongNote: '반말 = casual language: that starts in this lesson.' },
          { n: 4, q: 'You can use 반말 when you are talking to:', opts: ['your classmates in high school', 'yourself', 'your boss', 'both A and B'], right: 3,
            note: 'Classmates of the same age at school (case 4) and yourself / a diary (case 5).', wrongNote: 'Your boss: never 반말, even if you are older (case 7). Look for the option with both of the others.' },
          { n: 5, q: 'When addressing someone in (      ), it is polite to add the word “씨” after his/her name.', opts: ['반말', '잔말', '존댓말', '빈말'], right: 2, skill: 'l27.addr',
            note: '존댓말: 경은 씨, 현우 씨. In 반말 the name takes 아/야 instead.', wrongNote: '잔말 (idle talk) and 빈말 (empty words) are real words, but not politeness levels. In 반말 you drop 씨.' },
        ],
      },
      {
        id: 'II', title: 'Section II – Situational Expressions',
        task: 'Write the appropriate word or phrase to use in each situation.',
        type: 'write', givenEn: true, skill: 'l27.ask',
        items: [
          { n: 6, given: 'You have just met someone for the first time and you have discovered that he/she is the same age as you. How can you politely ask if you can speak in 반말 with each other?',
            ans: ['우리 말 놓을까요?', '말 편하게 해도 되죠?'], lenient: false, keyNote: 'or 말 편하게 해도 되죠?',
            soft: [{ p: '(우리 |)(말 |)(편하게 |)말 놓을까요', note: 'Accepted.' }, { p: '우리 말 편하게 할까요', note: 'Accepted (shall we speak comfortably?). The key: 우리 말 놓을까요? or 말 편하게 해도 되죠?' }, { p: '말 놔도 돼요', note: 'Understood — but the book gives 말 놔도 돼요? to the OLDER person. Between people of the same age: 우리 말 놓을까요?' }],
            diag: [{ p: '말 놓으셔도 돼요', note: 'That is what the YOUNGER one says to give permission (you can speak casually with me). To ask, same age: 우리 말 놓을까요?' }, { p: '우리 말 놓을까', note: 'Asking in 반말 before you have agreed on it! Ask politely: 우리 말 놓을까요?' }, { p: '말 놔도 돼', note: 'Asking in 반말 before you have agreed on it is rude. Ask in 존댓말.' }],
            en: 'Shall we speak in 반말 to each other? / I can talk in 반말 with you, right?' },
          { n: 7, given: 'You go to your friend’s house for a visit, and his/her parents are there. How do you greet your friend’s parents when you see them?',
            ans: ['안녕하세요.'], lenient: false, skill: 'l27.when',
            soft: [{ p: '안녕하십니까', note: 'Accepted (Type 1, very formal). The key: 안녕하세요.' }],
            diag: [{ p: '안녕', note: '안녕 is 반말: fine for your friend, never for his/her parents. 안녕하세요.' }, { p: '안녕히 계세요', note: 'That is “goodbye” (to someone who stays). Hello = 안녕하세요.' }],
            en: 'Hello.' },
          { n: 8, given: 'Your younger brother, whose given name is 승훈, is playing video games and you want him to help you clean up the house. In order to get his attention, you call out his name. How do you address him?',
            ans: ['승훈아!'], lenient: false, skill: 'l27.addr',
            diag: [{ p: '승훈야', note: '승훈 ends with a consonant (ㄴ): + 아 → 승훈아. (야 is for names that end in a vowel: 현우야.)' }, { p: '승훈 씨', note: '씨 is for 존댓말. To your younger brother, in 반말: 승훈아!' }, { p: '승훈이', note: '이 is for talking ABOUT him (third person: 승훈이가 했어). Calling him: 승훈아!' }, { p: '승훈이야', note: '승훈이야 = “it’s Seunghun”. Calling him: 승훈아!' }],
            en: 'Seunghun!' },
          { n: 9, given: 'You are in class at Seoul University listening to your professor give a lecture on Beethoven. You have a question. Would you use 존댓말 or 반말? How would you address the professor? (write both, e.g. “level, address”)',
            ans: ['존댓말, 교수님'], lenient: false, skill: 'l27.addr', keyNote: '존댓말 + 교수님',
            soft: [{ p: '교수님', note: 'Accepted: and of course 존댓말 (official environment: a lesson). The key: 존댓말, 교수님.' }, { p: '존댓말 교수님(이요|)', note: 'Accepted.' }, { p: '(존댓말 |)선생님', note: 'Understood, but at a university the usual title is 교수님 (professor). The key: 존댓말, 교수님.' }],
            diag: [{ p: '반말(,|) 교수님', note: 'Never 반말 to a professor, in class or anywhere: 존댓말.' }, { p: '(존댓말 |)교수 씨', note: 'A job title takes 님, not 씨: 교수님.' }, { re: '^반말', note: 'A lecture is an official environment, and the professor is older: 존댓말.' }],
            en: 'Polite language; “Professor” (교수님).' },
        ],
      },
      {
        id: 'III', title: 'Section III – Conjugation practice',
        task: 'Conjugate the following sentences into 반말.',
        type: 'write', skill: 'l27.form', placeholder: '반말…',
        items: [
          { n: 10, given: '이거 뭐예요?', ans: ['이거 뭐야?'], lenient: false, skill: 'l27.noun',
            diag: [{ p: '이거 뭐이야', note: '뭐 ends in a vowel: -예요 → -야 (이야 after a consonant).' }, { p: '이거 뭐예', note: 'Not just “drop 요”: -이에요/-예요 → -이야/-야 → 뭐야.' }, POL], en: 'What is this?' },
          { n: 11, given: '어제 친구 만났어요.', ans: ['어제 친구 만났어.'], lenient: false,
            soft: [{ p: '어제 친구(를|) 만났어', note: 'Accepted.' }],
            diag: row('만나다').wrongPast.filter(w => !/요$/.test(w)).map(w => ({ p: '어제 친구(를|) ' + w, note: w.endsWith('다') ? '만났다 is the plain written style, not this 반말. Drop -요: 만났어.' : 'Drop only -요: 만났어요 → 만났어.' })).concat([POL]), en: 'I met a friend yesterday.' },
          { n: 12, given: '우리 내일 쇼핑 갈까요?', ans: ['우리 내일 쇼핑 갈까?'], lenient: false,
            soft: [{ p: '(우리 |)내일 쇼핑(하러|) 갈까', note: 'Accepted.' }],
            diag: [{ p: '우리 내일 쇼핑 갈까야', note: '-(으)ㄹ까요 → -(으)ㄹ까: just drop -요. (-야 is only for -이에요/-예요.)' }, { p: '우리 내일 쇼핑 가자', note: 'Good 반말 — “let’s go” (-자, Lesson 28)! Here keep the question: 갈까요? → 갈까?' }, POL], en: 'Shall we go shopping tomorrow?' },
          { n: 13, given: '너무 걱정하지 마세요.', ans: ['너무 걱정하지 마.'], lenient: false,
            diag: row('걱정하다').wrongJima.filter(w => !/요$/.test(w)).map(w => ({ p: '너무 ' + w, note: '하지 마세요 → 하지 마 (마세요 is the polite form of 마).' })).concat([{ p: '너무 걱정하지 말아', note: '말아 is heard in speech, but the standard casual form (and the key) is 마: 걱정하지 마.' }, { p: '너무 걱정하지 마세', note: 'Drop the whole polite ending -세요: 마세요 → 마.' }, POL]), en: 'Don’t worry too much.' },
          { n: 14, given: '저 강남에서 친구 만날 거예요.', ans: ['나 강남에서 친구 만날 거야.'], lenient: false, skill: 'l27.form',
            soft: [{ p: '나(는|) 강남에서 친구(를|) 만날 거야', note: 'Accepted.' }],
            diag: [{ p: '저(는|) 강남에서 친구(를|) 만날 거야', note: 'The verb is casual now, but 저 is the humble (존댓말) “I”. In 반말 say 나 (the key: 나 강남에서 친구 만날 거야; 저 → 나 is listed in Lesson 28).' }].concat(row('만나다').wrongFut.filter(w => !/요$/.test(w)).map(w => ({ p: '나 강남에서 친구 ' + w, note: '-(으)ㄹ 거예요 → -(으)ㄹ 거야 (거 + 이에요 → 거 + 야).' })), [POL]), en: 'I will meet a friend in Gangnam.' },
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 15, track: 'wb64', label: 'Track 64', ans: ['그거는 내가 할게.'], lenient: false, en: 'As for that, I will do it.' },
          { n: 16, track: 'wb65', label: 'Track 65', ans: ['그럼 한국에는 언제 와?'], lenient: false, en: 'Well then, when are you coming to Korea?' },
          { n: 17, track: 'wb66', label: 'Track 66', ans: ['내일 늦지 마!'], lenient: false, en: 'Don’t be late tomorrow!' },
        ],
      },
    ],
  };
})();
