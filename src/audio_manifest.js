/* audio_manifest.js — audio file → published path. Files are published next to the page
   (mono 64 kb/s MP3, see HANDOFF.md). */
MM.audio[1] = {
  lesson: { src: 'audio/l1/lesson.mp3', title: 'Lesson 1 – Too much (full lesson audio)' },
  tb: { '01': 'audio/l1/tb01.mp3', '02': 'audio/l1/tb02.mp3' },
  wb: { wb01: 'audio/l1/wb01.mp3', wb02: 'audio/l1/wb02.mp3' },
};
/* L2: textbook Track 03 = "Track 03_ver2" (each sentence twice, then in parts), Track 04 = dialogue.
   Workbook dictation = WB Track 3 and Track 4. */
MM.audio[2] = {
  lesson: { src: 'audio/l2/lesson.mp3', title: 'Lesson 2 – Linking verbs -고 (full lesson audio)' },
  tb: { '03': 'audio/l2/tb03.mp3', '04': 'audio/l2/tb04.mp3' },
  wb: { wb03: 'audio/l2/wb03.mp3', wb04: 'audio/l2/wb04.mp3' },
};
/* L3: textbook Track 05 = the five position words + 4 sample sentences (each twice), Track 06 = dialogue.
   Workbook dictation = WB Track 5, 6, 7 (fill in the missing word). */
MM.audio[3] = {
  lesson: { src: 'audio/l3/lesson.mp3', title: 'Lesson 3 – In front of, Behind, Next to… (full lesson audio)' },
  tb: { '05': 'audio/l3/tb05.mp3', '06': 'audio/l3/tb06.mp3' },
  wb: { wb05: 'audio/l3/wb05.mp3', wb06: 'audio/l3/wb06.mp3', wb07: 'audio/l3/wb07.mp3' },
};
/* L4: textbook Track 07 = "Track 07_ver2" (sample + past sentences, each twice), Track 08 = dialogue.
   Workbook dictation = WB Track 8, 9 and "Track 10_ver2" (coffee/tea, as in the key; plain Track 10 says juice). */
MM.audio[4] = {
  lesson: { src: 'audio/l4/lesson.mp3', title: 'Lesson 4 – Shall we…? I wonder… (full lesson audio)' },
  tb: { '07': 'audio/l4/tb07.mp3', '08': 'audio/l4/tb08.mp3' },
  wb: { wb08: 'audio/l4/wb08.mp3', wb09: 'audio/l4/wb09.mp3', wb10: 'audio/l4/wb10.mp3' },
};
/* L5: textbook Track 09 = 쯤 / 정도 / 약 (each twice), then 5 sample sentences (each twice), Track 10 = dialogue.
   Workbook dictation = WB Track 11, 12. */
MM.audio[5] = {
  lesson: { src: 'audio/l5/lesson.mp3', title: 'Lesson 5 – Approximately, About (full lesson audio)' },
  tb: { '09': 'audio/l5/tb09.mp3', '10': 'audio/l5/tb10.mp3' },
  wb: { wb11: 'audio/l5/wb11.mp3', wb12: 'audio/l5/wb12.mp3' },
};
/* L6: textbook Track 11 = the two endings, then 4 sample sentences (each twice). Track 12 = "Track 12_ver2" (dialogue;
   plain "Track 12" is an unrelated recording). Workbook dictation = WB Track 13, 14, 15. */
MM.audio[6] = {
  lesson: { src: 'audio/l6/lesson.mp3', title: 'Lesson 6 – Future Tense: -(으)ㄹ 거예요 vs -(으)ㄹ게요 (full lesson audio)' },
  tb: { '11': 'audio/l6/tb11.mp3', '12': 'audio/l6/tb12.mp3' },
  wb: { wb13: 'audio/l6/wb13.mp3', wb14: 'audio/l6/wb14.mp3', wb15: 'audio/l6/wb15.mp3' },
};
/* L7: textbook Track 13 = "Track 13_ver2" (the endings, then 7 sample sentences, each twice; plain "Track 13" has a different
   3rd sentence). Track 14 = dialogue. Workbook dictation = WB "Track 16_ver2" (as printed) and Track 17. */
MM.audio[7] = {
  lesson: { src: 'audio/l7/lesson.mp3', title: 'Lesson 7 – Linking verbs -아/어/여서 (full lesson audio)' },
  tb: { '13': 'audio/l7/tb13.mp3', '14': 'audio/l7/tb14.mp3' },
  wb: { wb16: 'audio/l7/wb16.mp3', wb17: 'audio/l7/wb17.mp3' },
};
/* L8: textbook Track 15 = 비슷하다 / 같다 (each twice), then 5 sample sentences (each twice). Track 16 = dialogue.
   Workbook dictation = WB Track 18, 19. */
MM.audio[8] = {
  lesson: { src: 'audio/l8/lesson.mp3', title: 'Lesson 8 – To look like, To seem like (full lesson audio)' },
  tb: { '15': 'audio/l8/tb15.mp3', '16': 'audio/l8/tb16.mp3' },
  wb: { wb18: 'audio/l8/wb18.mp3', wb19: 'audio/l8/wb19.mp3' },
};
/* L9: textbook Track 17 = the three endings (one block, ASR unclear), then 5 sample sentences (each twice, clipped).
   Track 18 = dialogue. Workbook dictation = WB Track 20, 21, 22 (fill in the missing part). */
MM.audio[9] = {
  lesson: { src: 'audio/l9/lesson.mp3', title: 'Lesson 9 – To look like, To seem like (verbs) (full lesson audio)' },
  tb: { '17': 'audio/l9/tb17.mp3', '18': 'audio/l9/tb18.mp3' },
  wb: { wb20: 'audio/l9/wb20.mp3', wb21: 'audio/l9/wb21.mp3', wb22: 'audio/l9/wb22.mp3' },
};
/* L10: textbook Track 19 = "Track 19_ver2" (전에 / -기 block, then 5 sample sentences, each twice; plain "Track 19" has
   집에 가기 전에 술을 마실 거예요 instead of the book's 친구들하고 놀기 전에…). Track 20 = dialogue.
   Workbook dictation = WB Track 23, 24. */
MM.audio[10] = {
  lesson: { src: 'audio/l10/lesson.mp3', title: 'Lesson 10 – Before -ing (full lesson audio)' },
  tb: { '19': 'audio/l10/tb19.mp3', '20': 'audio/l10/tb20.mp3' },
  wb: { wb23: 'audio/l10/wb23.mp3', wb24: 'audio/l10/wb24.mp3' },
};
/* L11: textbook Track 21 = 돕다/어렵다/춥다 (5.3–16.7 s), the other irregular verbs (17.7–48.0 s), then the 4 sample
   sentences (each twice, clipped 51.9–70.3). Track 22 = dialogue. Workbook dictation = WB Track 25, 26, 27 (whole sentences). */
MM.audio[11] = {
  lesson: { src: 'audio/l11/lesson.mp3', title: 'Lesson 11 – Irregulars: ㅂ (full lesson audio)' },
  tb: { '21': 'audio/l11/tb21.mp3', '22': 'audio/l11/tb22.mp3' },
  wb: { wb25: 'audio/l11/wb25.mp3', wb26: 'audio/l11/wb26.mp3', wb27: 'audio/l11/wb27.mp3' },
};
/* L12: textbook Track 23 = 그래도 (twice), then the 5 sample sentences (each twice, clipped). Track 24 = dialogue.
   Workbook dictation = WB Track 28, 29 (whole sentences). */
MM.audio[12] = {
  lesson: { src: 'audio/l12/lesson.mp3', title: 'Lesson 12 – Nevertheless, But still: 그래도 (full lesson audio)' },
  tb: { '23': 'audio/l12/tb23.mp3', '24': 'audio/l12/tb24.mp3' },
  wb: { wb28: 'audio/l12/wb28.mp3', wb29: 'audio/l12/wb29.mp3' },
};
/* L13: textbook Track 25 = the example words (작다 → 작은 … 달다 → 단, one block), then 5 sample sentences (each twice, clipped).
   Track 26 = dialogue. Workbook dictation = WB Track 30, 31, 32 (whole sentences). */
MM.audio[13] = {
  lesson: { src: 'audio/l13/lesson.mp3', title: 'Lesson 13 – Making Adjectives, Part 1 (full lesson audio)' },
  tb: { '25': 'audio/l13/tb25.mp3', '26': 'audio/l13/tb26.mp3' },
  wb: { wb30: 'audio/l13/wb30.mp3', wb31: 'audio/l13/wb31.mp3', wb32: 'audio/l13/wb32.mp3' },
};
/* L14: textbook Track 27 = the example words (가다 → 가는 … 좋아하다 → 좋아하는, one block 5.0–22.6 s), then 8 sample sentences
   (each twice, clipped 26.2–63.0). Track 28 = dialogue. Workbook dictation = WB Track 33, 34 (whole sentences). */
MM.audio[14] = {
  lesson: { src: 'audio/l14/lesson.mp3', title: 'Lesson 14 – Making Adjectives, Part 2 (full lesson audio)' },
  tb: { '27': 'audio/l14/tb27.mp3', '28': 'audio/l14/tb28.mp3' },
  wb: { wb33: 'audio/l14/wb33.mp3', wb34: 'audio/l14/wb34.mp3' },
};
/* L15: textbook Track 29 = 그러면, 그럼 (block 4.6–9.0 s), then 5 sample sentences (each twice, clipped 9.6–36.5). Track 30 = dialogue.
   Workbook dictation = WB Track 35, 36, 37 (whole sentences). */
MM.audio[15] = {
  lesson: { src: 'audio/l15/lesson.mp3', title: 'Lesson 15 – Well then, In that case, If so (full lesson audio)' },
  tb: { '29': 'audio/l15/tb29.mp3', '30': 'audio/l15/tb30.mp3' },
  wb: { wb35: 'audio/l15/wb35.mp3', wb36: 'audio/l15/wb36.mp3', wb37: 'audio/l15/wb37.mp3' },
};
/* L16: textbook Track 31 = the endings -아요/-어요/-여요 (each twice, block 5.0–9.6 s), then the 5 sample sentences (each twice,
   clipped 12.6–43.4). Track 32 = dialogue. Workbook dictation = WB Track 38, 39 (whole sentences). */
MM.audio[16] = {
  lesson: { src: 'audio/l16/lesson.mp3', title: 'Lesson 16 – Let’s (full lesson audio)' },
  tb: { '31': 'audio/l16/tb31.mp3', '32': 'audio/l16/tb32.mp3' },
  wb: { wb38: 'audio/l16/wb38.mp3', wb39: 'audio/l16/wb39.mp3' },
};
/* L17: textbook Track 33 = 위하다 / 위해 / 위해서 (block 5.2–10.9 s; ASR unclear), then the 4 sample sentences (each twice, clipped
   12.5–36.0). Track 34 = dialogue. Workbook dictation = WB Track 40, 41, 42 (whole sentences). */
MM.audio[17] = {
  lesson: { src: 'audio/l17/lesson.mp3', title: 'Lesson 17 – In order to, For the sake of (full lesson audio)' },
  tb: { '33': 'audio/l17/tb33.mp3', '34': 'audio/l17/tb34.mp3' },
  wb: { wb40: 'audio/l17/wb40.mp3', wb41: 'audio/l17/wb41.mp3', wb42: 'audio/l17/wb42.mp3' },
};
/* L18: textbook Track 35 = 밖에 ×2 (block 5.0–6.6 s) + 6 sample sentences (each twice, clipped 10.3–36.6 s); the 콜라/돈 examples
   are not on it. Track 36 = "Track 36_ver2" (plain Track 36 is an unrelated 술/소주 dialogue). Workbook dictation = WB Track 43, 44. */
MM.audio[18] = {
  lesson: { src: 'audio/l18/lesson.mp3', title: 'Lesson 18 – Nothing but, Only (full lesson audio)' },
  tb: { '35': 'audio/l18/tb35.mp3', '36': 'audio/l18/tb36.mp3' },
  wb: { wb43: 'audio/l18/wb43.mp3', wb44: 'audio/l18/wb44.mp3' },
};
/* L19: textbook Track 37 = -(으)ㄴ 다음에 / 후에 / 뒤에 (block 5.0–12.8 s, ASR unclear) + 5 sample sentences (clipped 16.5–39.6 s);
   the 편지를 받은 / 집에 간 / 책을 읽은 examples are not on it. Track 38 = dialogue. Workbook dictation = WB Track 45, 46, 47. */
MM.audio[19] = {
  lesson: { src: 'audio/l19/lesson.mp3', title: 'Lesson 19 – After -ing (full lesson audio)' },
  tb: { '37': 'audio/l19/tb37.mp3', '38': 'audio/l19/tb38.mp3' },
  wb: { wb45: 'audio/l19/wb45.mp3', wb46: 'audio/l19/wb46.mp3', wb47: 'audio/l19/wb47.mp3' },
};
/* L20: textbook Track 39 = -아도 / -어도 / -여도 (block 5.0–9.9 s, ASR unclear) + 5 sample sentences (each twice, clipped 13.2–37.25 s);
   the 보다 / 울다 / 공부하다 examples and 바빠도 운동은… are not on it. Track 40 = dialogue. Workbook dictation = WB Track 48, 49. */
MM.audio[20] = {
  lesson: { src: 'audio/l20/lesson.mp3', title: 'Lesson 20 – Even if, Even though (full lesson audio)' },
  tb: { '39': 'audio/l20/tb39.mp3', '40': 'audio/l20/tb40.mp3' },
  wb: { wb48: 'audio/l20/wb48.mp3', wb49: 'audio/l20/wb49.mp3' },
};
/* L21: textbook Track 41 = the 7 example verbs with -는데 / -은데 / -ㄴ데 (block 5.3–29.6 s) + 8 sample sentences (each twice, clipped
   33.2–73.5 s); the Usage examples are not on it. Track 42 = dialogue. Workbook dictation = WB Track 50, 51, 52. */
MM.audio[21] = {
  lesson: { src: 'audio/l21/lesson.mp3', title: 'Lesson 21 – Linking Verbs: -는데 (full lesson audio)' },
  tb: { '41': 'audio/l21/tb41.mp3', '42': 'audio/l21/tb42.mp3' },
  wb: { wb50: 'audio/l21/wb50.mp3', wb51: 'audio/l21/wb51.mp3', wb52: 'audio/l21/wb52.mp3' },
};
/* L22: textbook Track 43 = -(으)ㄹ 수 있다 · -(으)ㄹ 수도 있다 · -도 (block 5.0–10.0 s, ASR unclear) + 5 sample sentences (each twice,
   clipped 11.0–29.78 s); the Ex) sentences are not on it. Track 44 = dialogue. Workbook dictation = WB Track 53, 54, 55. */
MM.audio[22] = {
  lesson: { src: 'audio/l22/lesson.mp3', title: 'Lesson 22 – Maybe I might… (full lesson audio)' },
  tb: { '43': 'audio/l22/tb43.mp3', '44': 'audio/l22/tb44.mp3' },
  wb: { wb53: 'audio/l22/wb53.mp3', wb54: 'audio/l22/wb54.mp3', wb55: 'audio/l22/wb55.mp3' },
};
/* L23: textbook Track 45 = 학 + the word list, each word read twice (5.5–46.84 s; per-word clips by silence detection + ASR).
   Track 46 = dialogue. Workbook dictation = WB Track 56, 57. */
MM.audio[23] = {
  lesson: { src: 'audio/l23/lesson.mp3', title: 'Lesson 23 – Word Builder 1: 학 (full lesson audio)' },
  tb: { '45': 'audio/l23/tb45.mp3', '46': 'audio/l23/tb46.mp3' },
  wb: { wb56: 'audio/l23/wb56.mp3', wb57: 'audio/l23/wb57.mp3' },
};
/* L24: textbook Track 47 = the five example verbs with their 해요 forms (block 5.2–23.2 s, ASR unclear) + 5 sample sentences
   (each twice, clipped 26.6–42.47 s); the -아서 / past forms of p.152 are not read. Track 48 = dialogue. Workbook dictation = WB Track 58, 59. */
MM.audio[24] = {
  lesson: { src: 'audio/l24/lesson.mp3', title: 'Lesson 24 – Irregulars: 르 (full lesson audio)' },
  tb: { '47': 'audio/l24/tb47.mp3', '48': 'audio/l24/tb48.mp3' },
  wb: { wb58: 'audio/l24/wb58.mp3', wb59: 'audio/l24/wb59.mp3' },
};
/* L25: textbook Track 49 = -네요 · 맛있어요 · 맛있네요 (block 4.8–9.3 s, ASR unclear) + 5 sample sentences (each twice, clipped
   9.3–24.11 s); the Ex) lines are not on it. Track 50 = dialogue. Workbook dictation = WB Track 60, 61. */
MM.audio[25] = {
  lesson: { src: 'audio/l25/lesson.mp3', title: 'Lesson 25 – Verb ending -네요 (full lesson audio)' },
  tb: { '49': 'audio/l25/tb49.mp3', '50': 'audio/l25/tb50.mp3' },
  wb: { wb60: 'audio/l25/wb60.mp3', wb61: 'audio/l25/wb61.mp3' },
};
/* L26: textbook Track 51 = 듣다 · 걷다 · 묻다 · 싣다 · 깨닫다 (block 4.6–12.95 s, ASR unclear), the five conversions 들어서 … 깨달았어요
   (block 13.0–22.4 s), then the 4 sample sentences (each twice, clipped 25.9–40.67 s). The regular verbs (받다, 묻다, 닫다, 믿다) and the
   usage examples are not on it. Track 52 = dialogue. Workbook dictation = WB Track 62, 63. */
MM.audio[26] = {
  lesson: { src: 'audio/l26/lesson.mp3', title: 'Lesson 26 – Irregulars: ㄷ (full lesson audio)' },
  tb: { '51': 'audio/l26/tb51.mp3', '52': 'audio/l26/tb52.mp3' },
  wb: { wb62: 'audio/l26/wb62.mp3', wb63: 'audio/l26/wb63.mp3' },
};
/* L27: textbook Track 53 = two words (5.5–9.0 s, ASR unclear: 반말 · 존댓말?), then the six permission phrases and the 존댓말/반말 pairs,
   each twice (clipped 10.9–48.2 s; the future pair comes before the past pair). Track 54 = dialogue. Workbook dictation = WB Track 64, 65, 66. */
MM.audio[27] = {
  lesson: { src: 'audio/l27/lesson.mp3', title: 'Lesson 27 – Politeness levels: 반말 and 존댓말 (full lesson audio)' },
  tb: { '53': 'audio/l27/tb53.mp3', '54': 'audio/l27/tb54.mp3' },
  wb: { wb64: 'audio/l27/wb64.mp3', wb65: 'audio/l27/wb65.mp3', wb66: 'audio/l27/wb66.mp3' },
};
/* L28: textbook Track 55 = a short block (5.3–8.6 s, ASR unclear), then the 5 sample sentences, each twice (clipped 9.7–20.98 s).
   Track 56 = dialogue. Workbook dictation = WB Track 67, 68, 69 (fill the missing words). */
MM.audio[28] = {
  lesson: { src: 'audio/l28/lesson.mp3', title: 'Lesson 28 – “Let’s” in casual language: -자 (full lesson audio)' },
  tb: { '55': 'audio/l28/tb55.mp3', '56': 'audio/l28/tb56.mp3' },
  wb: { wb67: 'audio/l28/wb67.mp3', wb68: 'audio/l28/wb68.mp3', wb69: 'audio/l28/wb69.mp3' },
};
/* L29: textbook Track 57 = 낫다 · 나아요 · 젓다 · 저어요 · 잇다 · 이었어요 · 짓다 · 지었어요 (block 5.4–19.25 s, ASR unclear), then the 5 sample
   sentences, each twice (clipped 24.0–40.41 s). The exceptions (웃어요, 씻을 거예요, 벗어 주세요) are not on it. Track 58 = dialogue.
   Workbook dictation = WB Track 70, 71, 72. */
MM.audio[29] = {
  lesson: { src: 'audio/l29/lesson.mp3', title: 'Lesson 29 – Irregulars: ㅅ (full lesson audio)' },
  tb: { '57': 'audio/l29/tb57.mp3', '58': 'audio/l29/tb58.mp3' },
  wb: { wb70: 'audio/l29/wb70.mp3', wb71: 'audio/l29/wb71.mp3', wb72: 'audio/l29/wb72.mp3' },
};
/* L30: textbook Track 59 = 실 and the 13 words, each read twice (per-word clips 4.9–30.8 s). Track 60 = dialogue.
   Workbook dictation = WB Track 73, 74, 75 (fill the missing words). */
MM.audio[30] = {
  lesson: { src: 'audio/l30/lesson.mp3', title: 'Lesson 30 – Word Builder 2: 실 (室) (full lesson audio)' },
  tb: { '59': 'audio/l30/tb59.mp3', '60': 'audio/l30/tb60.mp3' },
  wb: { wb73: 'audio/l30/wb73.mp3', wb74: 'audio/l30/wb74.mp3', wb75: 'audio/l30/wb75.mp3' },
};
/* L31 (final chapter, Level 3 Review): three long recordings in one player (switcher). The same files serve the clips:
   tb.dlg = dialogue (per-line clips), tb.voc = vocabulary (per word: three readings), tb.gram = grammar (per answer);
   wb.dlg = dialogue for the Final Exam dictation. */
MM.audio[31] = {
  lesson: { src: 'audio/l31/dialogue.mp3', title: 'Level 3 Review – Dialogue (1:38)', short: 'Dialogue' },
  lessons: [
    { src: 'audio/l31/dialogue.mp3', title: 'Level 3 Review – Dialogue (1:38)', short: 'Dialogue' },
    { src: 'audio/l31/vocab.mp3', title: 'Level 3 Review – Vocabulary (12:42)', short: 'Vocabulary' },
    { src: 'audio/l31/grammar.mp3', title: 'Level 3 Review – Grammar (11:45)', short: 'Grammar' },
  ],
  tb: { dlg: 'audio/l31/dialogue.mp3', voc: 'audio/l31/vocab.mp3', gram: 'audio/l31/grammar.mp3' },
  wb: { dlg: 'audio/l31/dialogue.mp3' },
};
