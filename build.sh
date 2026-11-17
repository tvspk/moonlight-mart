#!/usr/bin/env bash
# Build Moonlight Mart: a small page (dist/moonlight-mart.html: style, engine, UI) + one data file per lesson
# (dist/lessons/lN.js, loaded by <script src> in order, before the UI scripts) + audio under dist/audio/.
# Publish the page with files {"lessons/lN.js": "dist/lessons/lN.js", "audio/lN/…": …}; only new/changed lessons need passing.
# BUILD_VER (default: date+time) is appended as ?v= so browsers do not keep an old lesson file after a republish.
set -euo pipefail
cd "$(dirname "$0")"
OUT=dist/moonlight-mart.html
mkdir -p dist
LESSONS=$(ls -d src/l*/ | sort -V)
{
cat <<'HEAD'
<title>Moonlight Mart</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Caveat:wght@500;700&family=IBM+Plex+Mono:wght@400;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Sans+KR:wght@400;500;600;700;900&display=swap">
<style>
HEAD
cat src/style.css
echo '</style>'
cat <<'BODY'
<header id="hdr"></header>
<div id="lbar"></div>
<main id="main"></main>
<div id="ltail"></div>
<div id="xtail"></div>
BODY
for f in src/core.js src/keyboard.js src/cast.js; do echo "<script>"; cat "$f"; echo "</script>"; done
VER=${BUILD_VER:-$(date +%Y%m%d%H%M)}
for d in $LESSONS; do n=$(basename "$d"); echo "<script src=\"lessons/$n.js?v=$VER\"></script>"; done
echo "<script src=\"lessons/voice_ids.js?v=$VER\"></script>"
for f in src/audio_manifest.js src/qview.js src/tb.js src/wb.js src/game.js src/mnemo.js src/qr.js src/sync.js src/app.js; do echo "<script>"; cat "$f"; echo "</script>"; done
} > "$OUT"
rm -rf dist/lessons && mkdir -p dist/lessons
for d in $LESSONS; do n=$(basename "$d"); for f in "$d"*.js; do echo "/* ---- $f ---- */"; cat "$f"; echo; done > "dist/lessons/$n.js"; done
cp src/voice_ids.js dist/lessons/voice_ids.js
mkdir -p dist/audio && cp -r audio/. dist/audio/
for f in src/*.js src/l*/*.js; do node --check "$f" >/dev/null || { echo "syntax error in $f"; exit 1; }; done
echo "built $OUT ($(wc -c < "$OUT") bytes)"
