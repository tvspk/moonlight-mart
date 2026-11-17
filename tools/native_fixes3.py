#!/usr/bin/env python3
"""Native-speaker review of L23–L28 app-written Korean (2026-10-16). Each entry: (file, old, new, count).
Fails if old is not found `count` times (already-applied entries are skipped)."""
import sys, os
os.chdir(os.path.join(os.path.dirname(__file__), '..'))
FIX = [
 ('src/l23/game_L23.js', "['boss', '책상 고쳤어요? 고마워요! 현우가 여기에서 독학할 거예요… 아마.', 'You fixed the desk? Thank you! Hyunwoo will study by himself here… probably.']",
  "['boss', '책상 고쳤어요? 고마워요! 현우가 여기에서 영어를 독학할 거예요… 아마.', 'You fixed the desk? Thank you! Hyunwoo will teach himself English here… probably.']", 1),
 ('src/l23/game_L23.js', "en: 'Hyunwoo will study by himself here… probably.'", "en: 'Hyunwoo will teach himself English here… probably.'", 1),
 ('src/l23/game_L23.js', "'고등학생들이요? 그래서 과자가 다 없어요… 그래도 괜찮아요!', 'High-school students? That’s why all the snacks are gone… still, that’s fine!'",
  "'고등학생들이요? 그래서 과자가 다 팔렸어요… 그래도 괜찮아요!', 'High-school students? That’s why all the snacks are sold out… still, that’s fine!'", 1),
 ('src/l24/game_L24.js', "'아, 저 지금 너무 배불러요… 아니요, 한 조각 주세요!', 'Ah, I’m really full now… no, give me one piece!'",
  "'아, 저 지금 너무 배불러요… 그래도 한 조각 주세요!', 'Ah, I’m really full now… but give me one piece anyway!'", 1),
 ('src/l24/game_L24.js', "'사장님이 요즘 좀 말랐어요. 케이크 많이 드세요!', 'Mr. Park has gotten a bit thin lately. He should eat lots of cake!'",
  "'사장님이 요즘 좀 말랐어요. 케이크 많이 드셔야 돼요!', 'Mr. Park has gotten a bit thin lately. He should eat lots of cake!'", 1),
 ('src/l25/game_L25.js', "['boss', '할머니가 줬어요. 다 같이 먹어요!'", "['boss', '할머니가 주셨어요. 다 같이 먹어요!'", 1),
 ('src/l25/reads_L25.js', "ko: '여러분, 밖에 보세요! {첫눈|첫눈}이 와요!'", "ko: '여러분, 밖을 보세요! {첫눈|첫눈}이 와요!'", 1),
 ('src/l26/game_L26.js', "'지금 음악 듣고 있어요. 시험 공부할 때 꼭 들어요.'", "'지금 음악 듣고 있어요. 시험 공부할 때 항상 들어요.'", 1),
 ('src/l26/game_L26.js', "['manager', '오늘 회사에서 여기까지 걸었어요. 한 시간 걸었어요!', 'Today I walked from the office to here. I walked for an hour!']",
  "['manager', '오늘 회사에서 여기까지 걸어왔어요. 한 시간 걸었어요!', 'Today I walked here from the office. I walked for an hour!']", 1),
 ('src/l26/game_L26.js', "['police', '이 이야기를 믿어요? 이 건물에 밤마다 귀신이 걸어요.', 'Do you believe this story? A ghost walks in this building every night.']",
  "['police', '이 이야기를 믿어요? 밤마다 이 건물에서 귀신이 걸어 다녀요.', 'Do you believe this story? Every night a ghost walks around in this building.']", 1),
 ('src/l26/reads_L26.js', "밤{마다|마다} 창고에서 걷고, 박스 위에서 울어요.", "밤{마다|마다} 창고에서 걸어 다니고, 박스 위에서 울어요.", 1),
 ('src/l26/reads_L26.js', "explain: '라면이었어요. 밤마다 창고에서 걷고, 박스 위에서 울어요.'", "explain: '라면이었어요. 밤마다 창고에서 걸어 다니고, 박스 위에서 울어요.'", 1),
 ('src/l26/reads_L26.js', "{ ko: '걷는 것을 좋아하는 사람은 {누구나|누구나} 괜찮아요.', en: 'Anyone who likes walking is welcome.' }",
  "{ ko: '걷는 것을 좋아하는 사람은 {누구나|누구나} 오세요.', en: 'Anyone who likes walking, please come.' }", 1),
 ('src/l26/reads_L26.js', "explain: '걷는 것을 좋아하는 사람은 누구나 괜찮아요.'", "explain: '걷는 것을 좋아하는 사람은 누구나 오세요.'", 1),
 ('src/l28/game_L28.js', "['minji', '그럼 내일 아침에 같이 아침 먹자.', 'Then let’s have breakfast together tomorrow morning.']",
  "['minji', '그럼 내일 같이 아침 먹자.', 'Then let’s have breakfast together tomorrow.']", 1),
 ('src/l28/reads_L28.js', "ko: '현우가 {처음|처음} 월급 받았어!", "ko: '현우가 {첫|첫} 월급 받았어!", 1),
 ('src/l28/reads_L28.js', "explain: '현우가 처음 월급 받았어! 같이 밥 먹자.'", "explain: '현우가 첫 월급 받았어! 같이 밥 먹자.'", 1),
 ('src/l28/reads_L28.js', "gloss: { '처음': 'the first time; first',", "gloss: { '첫': 'first (첫 월급 = first salary)',", 1),
]
bad = 0
for f, old, new, cnt in FIX:
    s = open(f, encoding='utf8').read()
    if new in s and old not in s:
        continue
    if s.count(old) != cnt:
        print('NOT FOUND', f, old[:60], s.count(old)); bad += 1; continue
    open(f, 'w', encoding='utf8').write(s.replace(old, new))
print('done, problems:', bad); sys.exit(1 if bad else 0)
