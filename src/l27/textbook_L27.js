/* textbook_L27.js — Korean 3, Lesson 27 (textbook p.167–174, answers p.199). Politeness levels: 반말 and 존댓말. Romanization removed.
   The PDF text layer garbles “반말” in four headings (݈߈) and the conversion lines on p.170–171 (-ই/য/ৈਃ → …); restored from the
   page layout and the examples: -아/어/여요 → -아/어/여, -이에요/-예요 → -이야/-야, -았/었/였어요 → -았/었/였어, -(으)ㄹ 거예요 → -(으)ㄹ 거야.
   Track 53 (48 s): intro, two words (5.5–9.0 s, ASR unclear: probably 반말 · 존댓말), then each phrase twice, clipped by silence detection + ASR:
   말 놔도 돼요? · 말 편하게 해도 돼요? · 말 놓으셔도 돼요. · 말 편하게 하셔도 돼요. · 우리 말 놓을까요? · 말 편하게 해도 되죠? ·
   이거 뭐예요? / 이거 뭐야? · 내일 일할 거예요. / 내일 일할 거야. · 어제 친구 만났어요. / 어제 친구 만났어. (future BEFORE past on the
   recording). 경은아 / 현우야 / 석진이가 했어 are not on it. Track 54 = dialogue.
   Forms come from forms_L27.js (generated, book-checked). */
(() => {
  const F = MM.forms[27], row = d => F.find(f => f.dict === d && f.kind === 'verb');
  const POL = { re: '요$', note: 'Still 존댓말: the -요 at the end makes it polite. In 반말, drop -요 (and -이에요/-예요 → -이야/-야).' };
  MM.lessons[27] = {
    n: 27, ko: '반말과 존댓말', en: 'Politeness levels: 반말 and 존댓말',
    pages: { tb: '167–174', tbKey: '199', wb: '104–107', wbKey: '140' },
  };
  MM.textbook[27] = {
    blocks: [
      { t: 'h', text: 'Lesson 27 · Politeness Levels', ko: '반말 and 존댓말' },
      { t: 'p', text: 'In Level 1, Lesson 1, you learned the basics of the two main categories of honorifics used in Korean. All of what you have learned so far in this series has been in 존댓말 (polite/formal language). In this lesson, you will learn about the casual/informal/intimate way of speaking, 반말.' },
      { t: 'track', id: '53', from: 5.5, to: 9.0, label: 'Track 53 · 반말 · 존댓말' },
      { t: 'p', text: 'Politeness levels are determined by the verb ending. There are three basic verb endings used to express different politeness levels:' },
      { t: 'meaning', label: 'Type 1', ko: '-ㅂ니다', text: 'the most polite and most formal ending' },
      { t: 'meaning', label: 'Type 2', ko: '-(아/어/여)요', text: 'the polite, natural, and slightly formal ending' },
      { t: 'meaning', label: 'Type 3', ko: '-아/어/여', text: 'the casual, informal, and intimate ending' },
      { t: 'p', text: 'Types 1 and 2 fall under the 존댓말 category, and Type 3 goes into the 반말 category.' },
      { t: 'note', label: 'App note (not from the book)', text: 'You have met Type 1 already: the head-office inspector speaks with -ㅂ니다 / -습니다 (필요합니다, 없습니다). Everybody else at Moonlight Mart has used Type 2 — until tonight.' },

      { t: 'h2', text: 'When do you use 반말?' },
      { t: 'p', text: 'Generally, 반말 is considered to be the most intimate and casual way of speaking with others in Korean; it has no formality at all. You can only use 반말 to someone who is younger than you, someone of the same age as you, or (if the other person is older than you) someone with whom you agreed to mutually use 반말.' },
      { t: 'p', text: 'If the other person’s age or social status is not known, do not use 반말 in any circumstance. Once you know the other person’s age and find out if he or she is younger than you, you can use 반말. However, it is safer, as well as a nice gesture, to ask the person with whom you are speaking to whether you can use 반말 with him/her.' },
      { t: 'h2', text: 'Common cases where 반말 is appropriate' },
      { t: 'p', text: '1. You are much older than the other person and you know for sure that the other person will not be offended if you use 반말.' },
      { t: 'p', text: '2. You are older than the other person, and you got his or her permission to use 반말.' },
      { t: 'p', text: '3. You are of the same age as the other person, and you got his or her permission to use 반말.' },
      { t: 'p', text: '4. You are in elementary school, middle school, or high school, and you know that all your classmates are of the same age as you.' },
      { t: 'p', text: '5. You are talking to yourself or writing in a diary/journal.' },
      { t: 'p', text: '* Remember in Korean, unlike some other cultures, it is standard etiquette to establish a speaker’s position by asking one’s age on first encounter. So don’t be too surprised if you are asked how old you are, and use this as a tool to gauge which form of language to use. When in doubt, ALWAYS use 존댓말.' },
      { t: 'h2', text: 'Common cases in which NOT to use 반말' },
      { t: 'p', text: '1. You know the other person only through work and not personally.' },
      { t: 'p', text: '2. You are older than the other person, but he or she is your business client or customer.' },
      { t: 'p', text: '3. You are older than the other person, but you are talking to the person in an official environment such as business meetings, seminars, lessons, etc.' },
      { t: 'p', text: '4. You do not know the other person. You just met him/her.' },
      { t: 'p', text: '5. You are younger than the other person, and you never got permission from him/her that you can use 반말 to him/her.' },
      { t: 'p', text: '6. You are the same age as the other person, but you are both adults, and you do not know each other that well.' },
      { t: 'p', text: '7. You are older than the other person, but he/she is your boss.' },
      { t: 'p', text: '8. You are older than the other person, but he or she is the spouse of your older sibling.' },
      { t: 'p', text: '9. You are talking to a large group of people or filming a video blog.' },

      { t: 'h2', text: 'How do you ask for and give permission to speak in 반말?' },
      { t: 'p', text: 'There are certain expressions which people say to get permission from the other person to use 반말.' },
      { t: 'p', text: 'If you are the older one:' },
      { t: 'sent', id: 'a1', clip: ['53', 10.9, 13.6], ko: '1. 말 놔도 돼요?', en: ['May I speak in 반말 with you?'] },
      { t: 'p', text: '* 말을 놓다 literally means to “put down the language” or “lower the language”.' },
      { t: 'sent', id: 'a2', clip: ['53', 14.3, 17.5], ko: '2. 말 편하게 해도 돼요?', en: ['May I speak comfortably with you?'] },
      { t: 'p', text: 'If you are the younger one:' },
      { t: 'sent', id: 'a3', clip: ['53', 17.7, 20.6], ko: '1. 말 놓으셔도 돼요.', en: ['You can speak casually with me.'] },
      { t: 'sent', id: 'a4', clip: ['53', 20.6, 24.0], ko: '2. 말 편하게 하셔도 돼요.', en: ['You can speak comfortably with me. / You can speak 반말 with me.'] },
      { t: 'p', text: 'If you are of the same age as the other person:' },
      { t: 'sent', id: 'a5', clip: ['53', 24.0, 27.2], ko: '1. 우리 말 놓을까요?', en: ['Shall we speak in 반말 to each other?'] },
      { t: 'sent', id: 'a6', clip: ['53', 27.3, 30.6], ko: '2. 말 편하게 해도 되죠?', en: ['I can talk in 반말 with you, right?'] },
      { t: 'note', label: 'App note (not from the book)', text: '놔도 = 놓아도 (놓다 + -아도, Lesson 20) — “even if (I) put it down”, i.e. “may I…?”. 편하게 = comfortably (편하다 = to be comfortable). 놓으셔도 / 하셔도 have the honorific -시-: the younger person is talking to the older one. 되죠 = 되지요 (“…, right?”).' },

      { t: 'h2', text: 'How to change 존댓말 to 반말' },
      { t: 'p', text: 'Present tense' },
      { t: 'meaning', label: '→', ko: '-아/어/여요 → -아/어/여', text: 'drop -요' },
      { t: 'meaning', label: '→', ko: '-이에요 / -예요 → -이야 / -야', text: 'after a noun: 이야 after a consonant, 야 after a vowel' },
      { t: 'p', text: 'Ex) What is this?' },
      { t: 'ex', items: [
        { id: 'e1', clip: ['53', 31.8, 34.4], ko: '존댓말: 이거 뭐예요?', en: ['What is this? (polite)'] },
        { id: 'e2', clip: ['53', 34.4, 36.5], ko: '반말: 이거 뭐야?', en: ['What is this? (casual)'] },
      ] },
      { t: 'p', text: 'Past tense' },
      { t: 'meaning', label: '→', ko: '-았/었/였어요 → -았/었/였어', text: 'drop -요' },
      { t: 'p', text: 'Ex) I met a friend yesterday.' },
      { t: 'ex', items: [
        { id: 'e3', clip: ['53', 42.0, 45.25], ko: '존댓말: 어제 친구 만났어요.', en: ['I met a friend yesterday. (polite)'] },
        { id: 'e4', clip: ['53', 45.25, 48.2], ko: '반말: 어제 친구 만났어.', en: ['I met a friend yesterday. (casual)'] },
      ] },
      { t: 'p', text: 'Future tense' },
      { t: 'meaning', label: '→', ko: '-(으)ㄹ 거예요 → -(으)ㄹ 거야', text: '거예요 → 거야' },
      { t: 'p', text: 'Ex) I’m going to work tomorrow.' },
      { t: 'ex', items: [
        { id: 'e5', clip: ['53', 36.5, 39.45], ko: '존댓말: 내일 일할 거예요.', en: ['I’m going to work tomorrow. (polite)'] },
        { id: 'e6', clip: ['53', 39.45, 42.0], ko: '반말: 내일 일할 거야.', en: ['I’m going to work tomorrow. (casual)'] },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: 'The same “drop -요” rule works for the other endings you know: 갈까요? → 갈까?, 할게요 → 할게, 하지 마세요 → 하지 마 (Workbook 12, 13, 15). 거야 is 거예요 with -이에요 → -이야 (거 = 것 is a noun). On Track 53 the future pair comes before the past pair.' },

      { t: 'h2', text: 'Addressing people' },
      { t: 'p', text: 'When politely addressing someone using 존댓말, add the word 씨, as in 경은 씨, 현우 씨, 석진 씨, 소연 씨, and 현정 씨. If in a business or school setting, add the title of the person’s job or status after his/her name, such as 경은 선생님, 현우 회장님, etc., to show more formality toward the addressee.' },
      { t: 'p', text: 'When speaking in 반말, however, you can just say the name of the person without 씨. In order to make the name sound more natural when addressing the other person, add 아 or 야 to the end of the name. Names which end WITHOUT a consonant are followed by 야, and names which end WITH a consonant are followed by 아.' },
      { t: 'p', text: 'Ex)' },
      { t: 'ex', items: [
        { id: 'e7', ko: '경은 → 경은아!', en: ['Hey Kyeong-eun!'] },
        { id: 'e8', ko: '현우 → 현우야!', en: ['Hey Hyunwoo!'] },
      ] },
      { t: 'h2', text: 'Speaking in Third Person' },
      { t: 'p', text: 'When using a person’s name while speaking or writing in third person, 이 is added after names which end with a consonant. Therefore, names such as 경은 and 석진 are followed by 이.' },
      { t: 'p', text: 'If 현우 wants to talk about Seokjin in a sentence, he says Seokjin’s name as “석진이”.' },
      { t: 'p', text: 'Ex)' },
      { t: 'ex', items: [
        { id: 'e9', ko: '석진이가 했어.', en: ['Seokjin did it.'] },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: '선생님 = teacher, 회장님 = chairman. A name that ends in a vowel takes nothing extra in the third person: 현우가 했어. The 이 is only for consonant names: 석진이가, 경은이가.' },

      { t: 'h2', text: 'Sample Dialogue' },
      { t: 'dialogue', track: '54', lines: [
        { id: 'd1', sp: 'A', ko: '냉장고에 아이스크림 있어, 석진아.', en: 'Seokjin, there is ice cream in the refrigerator.' },
        { id: 'd2', sp: 'B', ko: '방금 밥 먹어서 배불러요.', en: 'I am full because I just had a meal.' },
        { id: 'd3', sp: 'A', ko: '그럼 이따가 먹어.', en: 'Then, eat it later.' },
        { id: 'd4', sp: 'B', ko: '네.', en: 'Okay.' },
      ] },
      { t: 'note', label: 'App note (not from the book)', text: 'A speaks 반말 (있어, 먹어, 석진아) and B answers in 존댓말 (배불러요, 네): A is older. 먹어 here is a casual “eat it” (-아/어 also works as a casual request). 이따가 = later (today).' },

      { t: 'exercises', title: 'Exercises for Lesson 27', items: [
        { id: 'x1', q: 'Change the statement from 존댓말 to 반말 (casual language): 안녕하세요.', ans: ['안녕'], full: '안녕. (Hello.)', skill: 'l27.form', lenient: false,
          diag: [{ p: '안녕하세', note: 'Greetings are fixed phrases: the casual “hello” is just 안녕.' }, { p: '안녕해', note: 'Greetings are fixed phrases: the casual “hello” is just 안녕.' }, POL] },
        { id: 'x2', q: 'Change the statement from 존댓말 to 반말 (casual language): 이거 뭐예요?', ans: ['이거 뭐야?'], full: '이거 뭐야? (What is this?)', skill: 'l27.noun', lenient: false,
          diag: F.find(f => f.id === '뭐.n').wrong.map(w => ({ p: '이거 ' + w, note: w === '뭐이야' ? '뭐 ends in a vowel: -예요 → -야 (이야 is for consonants): 뭐야.' : w === '뭐예' ? 'Not just “drop 요”: -이에요/-예요 become -이야/-야 → 뭐야.' : 'Still 존댓말.' })).concat([POL]) },
        { id: 'x3', q: 'Change the statement from 존댓말 to 반말 (casual language): 어제 친구 만났어요.', ans: ['어제 친구 만났어.'], full: '어제 친구 만났어. (I met a friend yesterday.)', skill: 'l27.form', lenient: false,
          soft: [{ p: '어제 친구(를|) 만났어', note: 'Accepted. The key: 어제 친구 만났어.' }],
          diag: [{ p: '어제 친구(를|) 만났', note: 'Drop only -요: 만났어요 → 만났어.' }, { p: '어제 친구(를|) 만났다', note: '만났다 is the plain written style (books, diaries, news), not this lesson’s 반말. Drop -요: 만났어.' }, POL] },
        { id: 'x4', q: 'True or false: If you want to use 반말 (casual language) to people, you usually have to get permission.', choices: ['True', 'False'], right: 'True', choicesKo: true, ans: ['True'], skill: 'l27.when',
          why: 'Key: a. True. It is safer, and a nice gesture, to ask first.', wrongNote: 'The book: it is safer, as well as a nice gesture, to ask whether you can use 반말.' },
        { id: 'x5', q: 'True or false: If you are older than the other person, you can use 반말 (casual language) even though you just met him/her.', choices: ['True', 'False'], right: 'False', choicesKo: true, ans: ['False'], skill: 'l27.when',
          why: 'Key: b. False. “You do not know the other person. You just met him/her.” is a case NOT to use 반말.', wrongNote: 'Being older is not enough: you just met — use 존댓말.' },
      ] },
    ],
  };
})();
