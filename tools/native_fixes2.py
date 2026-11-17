#!/usr/bin/env python3
"""Native-speaker review of L12–L22 app-written Korean (2026-10-16). Each entry: (file, old, new, count).
Fails if old is not found `count` times (already-applied entries are skipped)."""
import sys
FIX = [
 ('src/l12/game_L12.js', "['minji', '고마워요! 수고해요!', 'Thanks! Good luck tonight!']", "['minji', '고마워요! 수고하세요!', 'Thanks! Good luck tonight!']", 1),
 ('src/l13/game_L13.js', "['minji', '고마워요! 내일 줄게요.', 'Thanks! I’ll give it back tomorrow.']", "['minji', '고마워요! 내일 돌려줄게요.', 'Thanks! I’ll give it back tomorrow.']", 1),
 ('src/l13/game_L13.js', "['grandma', '학생, 제 우산 봤어요? 하얀 우산이에요.'", "['grandma', '학생, 내 우산 봤어요? 하얀 우산이에요.'", 1),
 ('src/l13/game_L13.js', "['police', '이상한 사람 못 봤어요?', 'You didn’t see a strange person?']", "['police', '혹시 이상한 사람 봤어요?', 'Did you see a strange person, by any chance?']", 1),
 ('src/l15/game_L15.js', "'이거 다 혼자 옮겨요? 그럼 너무 힘들어요.', 'You’re moving all this alone? Then it’s too hard.'", "'이거 다 혼자 옮겨요? 그럼 너무 힘들 거예요.', 'You’re moving all this alone? Then it’ll be too hard.'", 1),
 ('src/l15/game_L15.js', "en: 'You’re moving all this alone? Then it’s too hard.'", "en: 'You’re moving all this alone? Then it’ll be too hard.'", 1),
 ('src/l16/game_L16.js', "['grandma', '학생들 둘이 뭐 해요?', 'What are the two students doing?']", "['grandma', '저 학생 둘은 뭐 해요?', 'What are those two students doing?']", 1),
 ('src/l16/game_L16.js', "['taxi', '저 지금 좀 쉬어요.', 'I’m taking a little break now.']", "['taxi', '저 지금 잠깐 쉬어요.', 'I’m taking a little break now.']", 1),
 ('src/l16/reads_L16.js', "ko: '다 달리고 같이 아침 먹어요. 김밥은 제가 살게요!'", "ko: '달리기가 끝나고 같이 아침 먹어요. 김밥은 제가 살게요!'", 1),
 ('src/l17/reads_L17.js', "{ ko: '맛있는 떡도 팔아요. 같이 와요!', en: 'We’re selling delicious rice cakes, too. Let’s come together!' }", "{ ko: '맛있는 떡도 팔아요. 가족이랑 같이 오세요!', en: 'We’re selling delicious rice cakes, too. Come with your family!' }", 1),
 ('src/l18/game_L18.js', "'학생, 저 외국인 손님이 영어 해요. 학생은 영어 잘해요?'", "'학생, 저 외국인 손님이 영어로 말해요. 학생은 영어 잘해요?'", 1),
 ('src/l19/game_L19.js', "'학생 지금 전화 쓰고 있어요? 그럼 학생 쓴 다음에 제가 쓸게요.'", "'학생 지금 전화 쓰고 있어요? 그럼 학생이 다 쓴 다음에 제가 쓸게요.'", 1),
 ('src/l19/game_L19.js', "['minji', '좋아요! 근데 컵이 없어요. 다 싱크대에 있어요.', 'Okay! But there are no cups. They’re all in the sink.']", "['minji', '좋아요! 근데 깨끗한 컵이 없어요. 다 싱크대에 있어요.', 'Okay! But there are no clean cups. They’re all in the sink.']", 1),
 ('src/l20/game_L20.js', "['minji', '창고가 너무 더워요. 제습기가 고장 났어요.', 'The stockroom is too hot. The dehumidifier broke.']", "['minji', '창고가 너무 덥고 습해요. 제습기가 고장 났어요.', 'The stockroom is too hot and humid (습하다). The dehumidifier broke.']", 1),
 ('src/l21/game_L21.js', "이거 가격이 없는데, 얼마예요?", "이거 가격표가 없는데, 얼마예요?", 2),
 ('src/l21/game_L21.js', "There’s no price on this. How much is it?", "There’s no price tag on this. How much is it?", 3),
 ('src/l21/game_L21.js', "Why does Sua start with 가격이 없는데?", "Why does Sua start with 가격표가 없는데?", 1),
 ('src/l21/game_L21.js', "(가격 = price)", "(가격표 = price tag)", 1),
 ('src/l21/game_L21.js', "학생도 먹어요", "학생도 좀 먹어요", 3),
 ('src/l22/reads_L22.js', "내일 저녁에 {회의|회의} 할 수도 있어요.", "내일 저녁에 {회의|회의}를 할 수도 있어요.", 1),
]
bad = 0
for f, o, n, k in FIX:
    s = open(f, encoding='utf8').read()
    c = s.count(o)
    if c != k:
        if c == 0 and s.count(n) >= 1: continue  # already applied
        print('FOUND x%d (want %d): %s :: %s' % (c, k, f, o)); bad += 1; continue
    open(f, 'w', encoding='utf8').write(s.replace(o, n))
print('ok' if not bad else 'errors: %d' % bad); sys.exit(1 if bad else 0)
