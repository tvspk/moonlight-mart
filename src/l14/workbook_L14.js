/* workbook_L14.js — Korean 3 Workbook, Lesson 14 (p.60–62, answer key p.130).
   Section I True/False (+ correction; item 3's correction is a rule, so the app asks for an example form: fixTask / keyFix).
   Section II complete the dialogue (write with dialogue lines; ___ = the blank, cue = the book's English phrase). Item 7 has two
   blanks → 7a / 7b. Section III dictation = WB Track 33, 34 (whole sentences). lenient off: 먹는 / 먹은, 가는 / 간. */
(() => {
  const F = MM.forms[14], row = d => F.find(f => f.dict === d);
  const whyW = MM.l14why; /* defined in game_L14.js (loads before this file) */
  /* wrong verb forms inside the same answer phrase → diag */
  const dg = (ans, d) => { const f = row(d); return f.wrong.map(w => ({ p: ans.replace(f.neun, w), note: whyW(d, w) })); };
  MM.workbook[14] = {
    sections: [
      {
        id: 'I', title: 'Section I – Comprehension',
        task: 'True/False. Decide if the statement is true or false. If it is false, correct the underlined term or statement so that the statement is true.',
        type: 'tf', skill: 'l14.form',
        items: [
          { n: 1, s: 'The meaning of a verb that has been changed into an adjective depends on the context of the sentence.', truth: true },
          { n: 2, s: 'In order to conjugate a verb into an adjective, you add ㄴ to the verb stem, such as in [좋아한].', u: '좋아한', truth: false,
            ans: ['좋아하는'], keyFix: 'you add 는 to the verb stem, such as in 좋아하는', lenient: false,
            diag: [{ p: '좋아한', note: 'That is the false version. Verb stem + 는: 좋아하 + 는.' }, { p: '좋아해는', note: 'Start from the stem 좋아하 (not 좋아해요): 좋아하는.' }, { p: '좋아할', note: '좋아할 is the future form. Verb stem + 는: 좋아하는.' }] },
          { n: 3, s: 'When the verb stem of a verb ends with ㄹ, [you change the ㄹ to ㄴ] to make it into an adjective.', u: 'you change the ㄹ to ㄴ', truth: false,
            fixTask: 'Correct it with an example: what is the adjective form of 열다 (to open)?', ans: ['여는'], keyFix: 'you drop the ㄹ and add 는 (열다 → 여는)', lenient: false,
            diag: [{ p: '연', note: 'That is exactly the false rule (ㄹ → ㄴ). Drop the ㄹ and add 는: 여는.' }, { p: '열는', note: 'Drop the ㄹ first: 여 + 는 = 여는.' }, { p: '열은', note: 'Action verbs take 는, and the ㄹ drops: 여는.' }] },
          { n: 4, s: '[경화가] 좋아하는 가수가 여기 있어요. = The singer who likes Kyung-hwa is here.', u: '경화가', truth: false,
            fixTask: 'Correct the underlined part so that the sentence means “The singer who likes Kyung-hwa”.', ans: ['경화를'], keyFix: '경화를 좋아하는 가수가 여기 있어요.', skill: 'l14.clause',
            soft: [{ p: '경화를 좋아하는 가수가 여기 있어요', note: 'Accepted (the whole sentence).' }, { p: '경화 씨를', note: 'Accepted.' }],
            diag: [{ p: '경화가', note: '경화가 좋아하는 가수 = the singer Kyung-hwa likes. Kyung-hwa is the one liked → object particle 를.' }, { p: '경화는', note: 'Kyung-hwa is the one liked → object particle: 경화를.' }, { p: '경화을', note: '경화 ends in a vowel: 를 → 경화를.' }] },
        ],
      },
      {
        id: 'II', title: 'Section II – Complete the dialogue',
        task: 'Fill in the blanks by translating the given English phrase in parentheses to Korean.',
        type: 'write', skill: 'l14.form', placeholder: '…는 …',
        items: [
          { n: 5, lines: [['A', '이 노래 좋아해요?'], ['B', '네. ___예요.']], cue: 'a song that I like', ans: ['제가 좋아하는 노래'], lenient: false, skill: 'l14.clause',
            soft: [{ p: '(제가|내가) 좋아하는 노래(예요|)', note: 'Accepted. (내가 is casual; to a stranger say 제가.)' }, { p: '좋아하는 노래(예요|)', note: 'Accepted: the key adds 제가 (that I like).' }],
            diag: dg('제가 좋아하는 노래', '좋아하다').concat([{ p: '저를 좋아하는 노래', note: '저를 좋아하는 = that likes me. “That I like”: 제가 좋아하는.' }, { p: '제가 좋아해요 노래', note: '좋아해요 ends a sentence. Before a noun: 좋아하는.' }]),
            en: 'A: Do you like this song? B: Yes. It’s a song that I like.' },
          { n: 6, lines: [['A', '___ 있어요?'], ['B', '아니요. 없어요.']], cue: 'a cafe that you go to often', ans: ['자주 가는 카페'], lenient: false,
            soft: [{ p: '자주 가는 카페(가|)( 있어요|)', note: 'Accepted.' }],
            diag: dg('자주 가는 카페', '가다').concat([{ p: '가는 카페', note: 'Almost: “often” = 자주 → 자주 가는 카페.' }]),
            en: 'A: Is there a cafe that you go to often? B: No. There isn’t.' },
          { n: '7a', lines: [['A', '저 사람, ___이에요?'], ['B', '아니요. (…)이에요.']], cue: 'a person that you know', ans: ['아는 사람'], lenient: false, skill: 'l14.rieul',
            soft: [{ p: '아는 사람(이에요|)', note: 'Accepted.' }],
            diag: dg('아는 사람', '알다').concat([{ p: '알아요 사람', note: '알아요 ends a sentence. Before a noun: 아는.' }]),
            en: 'A: That person, is it someone you know?' },
          { n: '7b', lines: [['A', '저 사람, 아는 사람이에요?'], ['B', '아니요. ___이에요.']], cue: 'a person that you don’t know', ans: ['모르는 사람'], lenient: false,
            soft: [{ p: '모르는 사람(이에요|)', note: 'Accepted.' }, { p: '안 아는 사람', note: 'Understandable, but Koreans say 모르는 사람 (모르다 = to not know).' }],
            diag: dg('모르는 사람', '모르다').concat([{ p: '몰라요 사람', note: '몰라요 ends a sentence. Before a noun: 모르는.' }]),
            en: 'B: No. It’s a person I don’t know.' },
          { n: 8, lines: [['A', '지금 도서관에서 ___ 많아요?'], ['B', '네. 정말 많아요.']], cue: 'students who are studying', ans: ['공부하고 있는 학생들'], lenient: false,
            soft: [{ p: '공부하고 있는 학생(들|)(이|)', note: 'Accepted.' }, { p: '공부하는 학생(들|)(이|)', note: 'Accepted: 공부하는 = who study. The key uses -고 있는 (who are studying right now).' }],
            diag: [{ p: '공부하고 있은 학생(들|)(이|)', note: '있다 takes 는: 있는.' }, { p: '공부한 학생(들|)(이|)', note: '공부한 is the past (who studied). Right now: 공부하고 있는.' }, { p: '공부해고 있는 학생(들|)(이|)', note: 'Stem + 고: 공부하고.' }],
            en: 'A: Are there many students who are studying in the library now? B: Yes. There are really many.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then write it down. Each word/phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 9, track: 'wb33', label: 'Track 33', ans: ['눈이 오는 날에는 영화 보고 싶어요.'], lenient: false, en: 'On a day when it snows, I want to see a movie.' },
          { n: 10, track: 'wb34', label: 'Track 34', ans: ['저 소파 위에서 자고 있는 사람 누구예요?'], lenient: false, en: 'Who is the person sleeping on the couch over there?' },
        ],
      },
    ],
  };
})();
