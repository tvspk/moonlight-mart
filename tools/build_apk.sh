#!/bin/bash
# Builds the Android APK (WebView around assets/www/index.html) without Android Studio:  bash tools/build_apk.sh
# Before: python3 -I scripts/build_web.py (or ./build.sh) so dist/ is current; audio/l1 … l31 + audio/voice present.
# Version: android/verze.txt ("versionCode versionName"); versionCode must be higher with every build.
# Tools: aapt2, android.jar, d8, apksigner from npm (@drxiaozhi/minapk 0.4.0, aaptjs3 2.0.2; same checked copies as tvspk/gorsaf),
#        javac (JDK 17+), ffmpeg (audio → Opus .ogg), python3.
# Key (always the same one, else the update does not install over the old app and progress on the phone is lost):
#   GitHub Actions: secrets MM_KEYSTORE (base64 of moonlightmart.jks) + MM_KEYSTORE_PASSWORD
#   locally: android/moonlightmart.jks (never in the repository) + MM_KEYSTORE_PASSWORD (in the owner's handoff notes)
#   neither: a throwaway test key (dist/release = no: such an APK must never be given out)
# Result: dist/MoonlightMart-<versionName>.apk, dist/version, dist/release
set -euo pipefail
cd "$(dirname "$0")/.."
read VC VN < android/verze.txt
T=tools/android-sdk
if [ ! -f $T/android.jar ]; then
  mkdir -p $T/.dl && (cd $T/.dl && npm pack @drxiaozhi/minapk@0.4.0 aaptjs3@2.0.2 >/dev/null)
  mkdir -p $T/.x1 $T/.x2
  tar xzf $T/.dl/drxiaozhi-minapk-0.4.0.tgz -C $T/.x1
  tar xzf $T/.dl/aaptjs3-2.0.2.tgz -C $T/.x2
  cp $T/.x1/package/tools/android.jar $T/.x1/package/tools/d8.jar $T/.x1/package/tools/apksigner.jar $T/
  cp $T/.x2/package/bin/x64/linux/aapt2 $T/ && chmod +x $T/aapt2
  rm -rf $T/.dl $T/.x1 $T/.x2
fi
# third-party tools, and apksigner receives the key: refuse anything that differs from the checked copies
(cd $T && sha256sum -c --quiet - <<'SUMS'
6cea1df3efb77103ac3e2beb9bf4718964b0e0869ab16d39d29d5cbae1c147ad  android.jar
d43c8a94c9b1f1da1a7cc49c32b81e8cee1708b37ee8b530a81a0688222b42c0  d8.jar
eefdd6aed9db9fb849e4c98a50d8741e19d1b674ba6547220bcb9c3ed152123a  apksigner.jar
SUMS
) || { echo "Android tools differ from the checked copies" >&2; exit 1; }

W=$(mktemp -d); trap 'rm -rf "$W"' EXIT
mkdir -p "$W/assets/www" "$W/classes" "$W/dex" "$W/key"
# Page + lesson files (?v= query removed: plain file paths inside the APK)
{ printf '<!doctype html>\n<html lang="en"><head><meta charset="utf-8">\n'; sed -E 's#(lessons/(l[0-9]+|voice_ids)\.js)\?v=[0-9a-z]+#\1#' dist/moonlight-mart.html; } > "$W/assets/www/index.html"
cp -r dist/lessons "$W/assets/www/"
grep -oE 'lessons/(l[0-9]+|voice_ids)\.js' "$W/assets/www/index.html" | while read f; do [ -f "$W/assets/www/$f" ] || { echo "MISSING $f"; exit 1; }; done
# Audio → Opus 24 kbps mono .ogg; paths in index.html .mp3 → .ogg
(cd audio && for d in */; do mkdir -p "$W/assets/www/audio/$d"; done
 ls */*.mp3 | xargs -P "$(nproc)" -I{} sh -c 'f="{}"; ffmpeg -nostdin -loglevel error -i "$f" -vn -map_metadata -1 -ac 1 -c:a libopus -b:a 24k -application voip "$0/${f%.mp3}.ogg"' "$W/assets/www/audio")
[ "$(find "$W/assets/www/audio" -name '*.ogg' | wc -l)" = "$(ls audio/*/*.mp3 | wc -l)" ] || { echo "audio conversion incomplete"; exit 1; }
python3 -I -c "import re,sys;p=sys.argv[1];s=open(p,encoding='utf-8').read();s=re.sub(r\"'(audio/l\\d+/[a-z0-9_]+)\\.mp3'\",r\"'\\1.ogg'\",s);n=s.count('audio/voice/l\${c[0]}.mp3');s=s.replace('audio/voice/l\${c[0]}.mp3','audio/voice/l\${c[0]}.ogg');assert n>=2,n;open(p,'w',encoding='utf-8').write(s)" "$W/assets/www/index.html"
for p in $(grep -o "'audio/[^']*'" "$W/assets/www/index.html" | tr -d "'" | sort -u); do [ -f "$W/assets/www/$p" ] || { echo "MISSING $p"; exit 1; }; done
for k in $(seq 1 31); do [ -f "$W/assets/www/audio/voice/l$k.ogg" ] || { echo "MISSING voice l$k"; exit 1; }; done

# Key
if [ -n "${MM_KEYSTORE:-}" ] && [ -n "${MM_KEYSTORE_PASSWORD:-}" ]; then
  printf %s "$MM_KEYSTORE" | tr -d ' \r\n' | base64 -d > "$W/key/ks.jks"; KS="$W/key/ks.jks"; PW="$MM_KEYSTORE_PASSWORD"; REL=yes
elif [ -f android/moonlightmart.jks ]; then
  KS=android/moonlightmart.jks; PW="${MM_KEYSTORE_PASSWORD:?set MM_KEYSTORE_PASSWORD (the owner has it)}"; REL=yes
else
  KS="$W/key/test.jks"; PW=test-only; REL=no
  keytool -genkeypair -keystore "$KS" -alias mm -keyalg RSA -keysize 2048 -validity 30 -storepass $PW -keypass $PW -dname "CN=test" >/dev/null 2>&1
fi

$T/aapt2 compile --dir android/res -o "$W/res.zip"
$T/aapt2 link -o "$W/base.apk" -I $T/android.jar --manifest android/AndroidManifest.xml -A "$W/assets" "$W/res.zip" \
  --min-sdk-version 23 --target-sdk-version 34 --version-code "$VC" --version-name "$VN" -0 ogg -0 mp3
javac -nowarn -source 8 -target 8 -bootclasspath $T/android.jar -cp $T/android.jar -d "$W/classes" $(find android/src -name '*.java') 2>&1 | grep -v -e '^warning' -e '^Note' -e '^Picked' || true
java -cp $T/d8.jar com.android.tools.r8.D8 --lib $T/android.jar --min-api 23 --release --output "$W/dex" $(find "$W/classes" -name '*.class') 2>&1 | grep -v '^Picked' || true
python3 -I android/align.py "$W/base.apk" "$W/dex/classes.dex" "$W/aligned.apk"
mkdir -p dist; OUT="dist/MoonlightMart-$VN.apk"
java -jar $T/apksigner.jar sign --ks "$KS" --ks-key-alias mm --ks-pass "pass:$PW" --key-pass "pass:$PW" --min-sdk-version 23 --out "$OUT" "$W/aligned.apk" 2>&1 | grep -v '^Picked' || true
rm -f "$OUT.idsig"
java -jar $T/apksigner.jar verify --print-certs "$OUT" 2>&1 | grep -E 'SHA-256|DN' | grep -v '^Picked'
echo "$VN" > dist/version; echo "$REL" > dist/release
echo "BUILT $OUT (versionCode $VC, release key: $REL)"
