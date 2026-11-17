# Moonlight Mart

A night-shift convenience-store game for learning Korean with the Korean 3 textbook and workbook
(all 31 lessons): textbook and workbook exercises, game shifts, readings, Mnemo Hooks cards (hooks in Czech), voiced lines.

- **Web:** https://tvspk.github.io/moonlight-mart/
- **Android:** https://github.com/tvspk/moonlight-mart/releases/latest/download/moonlight-mart.apk
  (installs over the previous version; progress stays)

## Sync between devices

Extras → *Sync between devices*. Progress moves between phone, tablet and computer, **encrypted on the device**
(AES-256-GCM, key from an 8-word pairing code), through your own **private** GitHub repository (`moonlight-mart-sync`).
No server; the app talks only to `api.github.com`. The token and the pairing code stay on the device and are never
in a transfer code. Details: `HANDOFF.md`, section *Sync between devices*.

## Building

```sh
python3 -I scripts/build_web.py        # dist/ + the web version in the root (index.html, lessons/, sw.js): commit it
bash tools/build_apk.sh                # dist/MoonlightMart-<version>.apk (version in android/verze.txt)
python3 testy/test_sync.py             # sync through a fake GitHub (~3 min)
python3 testy/test_qr.py               # pairing by QR with a fake camera
python3 testy/test_apk.py dist/MoonlightMart-<version>.apk
```

Push to `main` → GitHub Actions checks the repository, builds the APK and, for a new version in `android/verze.txt`,
publishes release `v<version>` signed with the key from Secrets.
