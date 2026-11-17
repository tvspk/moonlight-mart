# Rules for working on Moonlight Mart

- **Public repository:** no personal data (real names, ages, family), no signing key (`*.jks`), no keystore password, no
  tokens, no pairing codes. In examples and tests use generic names (Jana, Rozárka).
- Game content: English + Korean, no romanisation; only Mnemo Hooks are in Czech. Korean comes from the book / game data
  and is not changed; verb forms are pre-generated and checked (`tools/gen_forms.py`), never guessed. Details in `HANDOFF.md`.
- Source: `src/` (+ `src/lN/` per lesson, `mnemo/`). **After every change run `python3 -I scripts/build_web.py`** and commit
  `index.html`, `lessons/`, `sw.js`; the workflow fails with "out of date" otherwise.
- New APK: raise `android/verze.txt` ("versionCode versionName", versionCode always +1). Push to `main` → Actions builds and
  releases `v<version>` (`moonlight-mart.apk`). Key: Secrets `MM_KEYSTORE` (base64 of moonlightmart.jks, alias `mm`) and
  `MM_KEYSTORE_PASSWORD`. Certificate SHA-256 must stay `8E:9F:BC:D4 … 85:28:6A` (the workflow checks it): another key =
  the update does not install and progress on the phone is lost.
- The page in the APK must stay at `file:///android_asset/www/index.html` (its localStorage holds the progress).
- **Sync** (`src/sync.js`, protocol as in tvspk/gorsaf, tvspk/zelvi-sudoku, tvspk/memochat):
  - counters (`syCount`/`sySetCount`, `SY_RE_CNT`): `won` (also spent), `days` per day, shift `runs`. Each device uploads
    only its own contribution (`own = state − sum of the others`, `SY.dev`), so `MM.S` and `localStorage['moonlight-mart-sync']`
    are always written together (`syPersist` → `MM.writeLocal`).
  - union / max (`sySets`/`syUnion`): `coll`, `fixed`, shift `done` (OR) and `best` (max).
  - last changed wins per item (`syItems`/`syNorm`/`syPut`): `skills`, `mh.c`, `mistakes` (by qid), every entry of
    `L[n].tb|wb|game` except shifts, `theme`. A new field in `MM.S`: decide its rule and add it here, or it stays on the device.
  - only on the device: `kbd`, `cur`, `extrasOpen`, `vq`, old `cards`.
  - Transfer code loaded or progress erased with sync on → sync is turned off on that device only (`MM.sync.reset`).
  - Mailbox format `v:1`; raise it for an incompatible change. Not active in a claude.ai artifact (the account syncs there).
- Tests: `testy/test_sync.py`, `testy/test_qr.py`, `testy/test_apk.py <apk>`; game tests in `tools/run_*.py`
  (`python3 tools/rangeserver.py dist 8765 &` first). Never test against the real GitHub API.
- The APK cannot be run here: say so and let the owner check sync and the camera on a phone.
