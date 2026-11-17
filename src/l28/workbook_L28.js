/* workbook_L28.js — Korean 3 Workbook, Lesson 28 (p.108–111, answer key p.140–141).
   Section I = match (10 → 5 + 5). Section II = fill in the blank: each dialogue has two blanks → items 11a/11b … (write with lines and an inline
   ___; the word comes from Section I + -자; 12a accepts 산책하자 or 놀자 like the key). Section III = make the sentence negative (-지 말자,
   write with the Korean sentence given; the key's English is shown after). Section IV dictation = WB Track 67, 68, 69 (fill the missing
   word(s); ASR matches the key). The key heads the dictation “Section III” by mistake (it is Section IV). lenient off: 가자 / 가쟈. */
(() => {
  const F = MM.forms[28], row = d => F.find(f => f.dict === d), why = MM.l28why;
  const dg = (frame, d, k, wk) => { const f = row(d); return f[wk].map(w => ({ p: frame.replace(f[k], w), note: why(d, w) })); };
  const POLJ = { re: '(아|어|여|해)요$', note: 'That is the polite “let’s” (Lesson 16). The dialogue is in 반말: -자.' };
  MM.workbook[28] = {
    sections: [
      {
        id: 'I', title: 'Section I – Vocabulary',
        task: 'Define / translate each word to English. (Here: match each word with its meaning.)',
        type: 'match', skill: 'l28.vocab',
        items: [
          { n: 1, ko: '공부하다', en: 'to study' },
          { n: 2, ko: '기다리다', en: 'to wait' },
          { n: 3, ko: '놀다', en: 'to hang out, to play' },
          { n: 4, ko: '(transportation) 타다', en: 'to take (a ride); to get on/in' },
          { n: 5, ko: '물어보다', en: 'to ask' },
          { n: 6, ko: '쉬다', en: 'to get rest' },
          { n: 7, ko: '청소하다', en: 'to clean (up)' },
          { n: 8, ko: '가다', en: 'to go' },
          { n: 9, ko: '먹다', en: 'to eat' },
          { n: 10, ko: '산책하다', en: 'to take a walk' },
        ],
      },
      {
        id: 'II', title: 'Section II – Fill in the blank',
        task: 'Complete each conversation by filling in the blank with the most appropriate word from Section I + -자.',
        type: 'write', skill: 'l28.form', placeholder: '…자',
        items: [
          { n: '11a', lines: [['A', '벌써 한 시네! 점심 ___.'], ['B', '뭐 먹을까?'], ['A', '성민이한테 (…). 성민아, 뭐 먹고 싶어?']], cue: 'Section I + -자', ans: ['먹자'], lenient: false,
            diag: dg('먹자', '먹다', 'ja', 'wrong').concat([POLJ, { p: '점심 먹자', note: 'Only the blank: 먹자.' }]), en: 'A: It’s already one o’clock! Let’s eat lunch.' },
          { n: '11b', lines: [['A', '벌써 한 시네! 점심 먹자.'], ['B', '뭐 먹을까?'], ['A', '성민이한테 ___. 성민아, 뭐 먹고 싶어?']], cue: 'Section I + -자', ans: ['물어보자'], lenient: false,
            diag: dg('물어보자', '물어보다', 'ja', 'wrong').concat([POLJ, { p: '물어봐', note: '물어봐 = ask (him) — an order. Let’s ask = 물어보자.' }]), en: 'A: Let’s ask Seongmin. Seongmin, what do you want to eat?' },
          { n: '12a', lines: [['A', '우와! 오늘 날씨 진짜 좋네! 우리 나가서 ___.'], ['B', '나는 피곤한데. 우리 그냥 집에서 (…).']], cue: 'Section I + -자', ans: ['산책하자', '놀자'], lenient: false, keyNote: '산책하자 or 놀자',
            diag: dg('산책하자', '산책하다', 'ja', 'wrong').concat(dg('놀자', '놀다', 'ja', 'wrong'), [POLJ]), en: 'A: Wow! The weather is really nice today! Let’s go out and take a walk (hang out).' },
          { n: '12b', lines: [['A', '우와! 오늘 날씨 진짜 좋네! 우리 나가서 산책하자.'], ['B', '나는 피곤한데. 우리 그냥 집에서 ___.']], cue: 'Section I + -자', ans: ['쉬자'], lenient: false,
            diag: dg('쉬자', '쉬다', 'ja', 'wrong').concat([POLJ]), en: 'B: I’m tired. Let’s just rest at home.' },
          { n: '13a', lines: [['A', '집이 너무 더러운 것 같아. 우리 ___. 창문 좀 열어 줘.'], ['B', '희철이랑 같이 하자. 곧 올 거야. 조금만 (…).']], cue: 'Section I + -자', ans: ['청소하자'], lenient: false,
            diag: dg('청소하자', '청소하다', 'ja', 'wrong').concat([POLJ]), en: 'A: The house seems too dirty. Let’s clean up. Open the window, please.' },
          { n: '13b', lines: [['A', '집이 너무 더러운 것 같아. 우리 청소하자. 창문 좀 열어 줘.'], ['B', '희철이랑 같이 하자. 곧 올 거야. 조금만 ___.']], cue: 'Section I + -자', ans: ['기다리자'], lenient: false,
            diag: dg('기다리자', '기다리다', 'ja', 'wrong').concat([POLJ]), en: 'B: Let’s do it with Heecheol. He will come soon. Let’s wait a little.' },
        ],
      },
      {
        id: 'III', title: 'Section III – Comprehension',
        task: 'Change the positive sentences to negative sentences. (The key’s English translation is shown after.)',
        type: 'write', skill: 'l28.neg', placeholder: '…지 말자',
        items: [
          { n: 14, given: '이거 사자.', ans: ['이거 사지 말자.'], lenient: false, diag: dg('이거 사지 말자', '사다', 'jiMalja', 'wrongJiMalja'), en: 'Let’s not buy this.' },
          { n: 15, given: '지금 들어가자. (들어가다 = to go inside)', ans: ['지금 들어가지 말자.'], lenient: false, diag: dg('지금 들어가지 말자', '들어가다', 'jiMalja', 'wrongJiMalja'), en: 'Let’s not go inside now.' },
          { n: 16, given: '점심시간에 영화 보자.', ans: ['점심시간에 영화 보지 말자.'], lenient: false,
            soft: [{ p: '점심 시간에 영화(를|) 보지 말자', note: 'Accepted (점심시간 is one word).' }, { p: '점심시간에 영화를 보지 말자', note: 'Accepted.' }],
            diag: dg('점심시간에 영화 보지 말자', '보다', 'jiMalja', 'wrongJiMalja').concat([{ p: '점심시간에 영화 안 보자', note: MM.l28why('보다', '안 보자') }]), en: 'Let’s not see a movie during lunch break.' },
          { n: 17, given: '오늘은 일찍 문 닫자.', ans: ['오늘은 일찍 문 닫지 말자.'], lenient: false,
            soft: [{ p: '오늘은 일찍 문(을|) 닫지 말자', note: 'Accepted.' }, { p: '오늘은 문(을|) 일찍 닫지 말자', note: 'Accepted.' }],
            diag: dg('오늘은 일찍 문 닫지 말자', '닫다', 'jiMalja', 'wrongJiMalja'), en: 'Today, let’s not close the door early.' },
          { n: 18, given: '카페에서 공부하자.', ans: ['카페에서 공부하지 말자.'], lenient: false,
            diag: dg('카페에서 공부하지 말자', '공부하다', 'jiMalja', 'wrongJiMalja'), en: 'Let’s not study at a cafe.' },
          { n: 19, given: '우리 서두르자.', ans: ['우리 서두르지 말자.'], lenient: false,
            diag: dg('우리 서두르지 말자', '서두르다', 'jiMalja', 'wrongJiMalja').concat([{ p: '우리 서둘러지 말자', note: '-지 begins with a consonant: 르 does not change (Lesson 24) → 서두르지 말자.' }]), en: 'Let’s not rush.' },
        ],
      },
      {
        id: 'IV', title: 'Section IV – Dictation',
        task: 'Listen to the MP3. Repeat what you hear out loud, then fill in the blank with the missing word. Each phrase is said twice.',
        type: 'dictation',
        items: [
          { n: 20, track: 'wb67', label: 'Track 67', ko: '우리 역까지 (___).', ans: ['걸어가자'], full: '우리 역까지 걸어가자.', lenient: false, en: 'Let’s walk to the subway station.' },
          { n: 21, track: 'wb68', label: 'Track 68', ko: '잠깐만! (___).', ans: ['같이 나가자'], full: '잠깐만! 같이 나가자.', lenient: false, en: 'Wait! Let’s go out together.' },
          { n: 22, track: 'wb69', label: 'Track 69', ko: '(___) 만나자.', ans: ['우리 내일은 좀 일찍'], full: '우리 내일은 좀 일찍 만나자.', lenient: false, en: 'Let’s meet a little early tomorrow.' },
        ],
      },
    ],
  };
})();
