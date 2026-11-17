/* sync.js — progress moves between phone, tablet and computer, encrypted, through a PRIVATE GitHub repository.
   Same protocol as MemoChat, Želví sudoku and Gorsaf (tvspk/gorsaf sync/sync.js, from which this file was adapted).
   Active only where progress lives in localStorage of this device (APK, the web on GitHub Pages, a local copy);
   in a claude.ai artifact the account keeps the progress (core.js connectDb) and nothing here runs.
   Mailbox = private repository (default moonlight-mart-sync). In main only SY_META ({app, sync:1, created, check}); check
   proves the pairing code. Each device has its own branch mm-<12 hex> with one file "state" (a commit without parents,
   force-pushed, history does not grow). "state" = [IV 12 B][AES-256-GCM(gzip(JSON))], AAD 'state', key HKDF-SHA-256 from the
   8 words (salt 'Moonlight Mart sync v1', info 'state').
   Merging (syMerge), binding rules (HANDOFF.md, "Sync"):
   - COUNTERS are summed: ₩ (S.won, earned AND spent: a device's contribution can be negative), correct answers per day
     (S.days: the streak and the time card follow from them), runs of every shift. Each device uploads only its own
     contribution own = state − sum of the others' contributions at the last merge (SY.dev); state = own + new sum of the others.
     MM.S and SY are therefore always written together (syPersist).
   - UNION: collected snacks (coll), store repairs (fixed), shift done (OR) and best % (maximum).
   - LAST CHANGED WINS, per item: every skill (skills), every Mnemo Hooks card direction (mh.c), every weak spot
     (mistakes, by question), every textbook / workbook / game entry of every lesson (L, except shifts), the theme.
     The time of a change is taken when saveNow() sees it (syTouch), on GitHub's clock (skew) and always later than
     anything this device has already seen for that item (logical clock). Items never filled in have weight 0.
   - ONLY ON THIS DEVICE: keyboard (kbd), open lesson / tab (cur), Extras open, vocabulary rotation (vq), old S.cards.
   Merges change MM.S in place (open screens keep valid references); the screen is redrawn only on the game's home screen.
   Token and the 8 words are only in localStorage 'moonlight-mart-sync' of this device, never in a transfer code. */
'use strict';
(function () {
const ON = !(window.claude && window.claude.use);
var SY = null, syKey = null, syBusy = false, syAgain = false, sySoonT = null, sySoonAt = 0, syFp = '', syResetNote = false;
const SY_KEY = 'moonlight-mart-sync', SY_API = 'https://api.github.com', SY_META = 'moonlight-mart-sync.json', SY_APP = 'MoonlightMart', SY_DEFREPO = 'moonlight-mart-sync';
const SY_RE_REPO = /^[A-Za-z0-9-]{1,39}\/[A-Za-z0-9._-]{1,100}$/, SY_RE_BR = /^mm-[a-f0-9]{12}$/, SY_SHA = /^[a-f0-9]{40}$/, SY_PFX = 'mm-';
const SY_POLL = 60000, SY_SOON = 15000, SY_DESK = 3000, SY_BACK = 20000, SY_ERRWAIT = 5 * 60000, SY_RETRY = 30 * 60000, SY_HARD = ['token', 'notfound', 'forbidden', 'public', 'meta'];
const SY_WORDS='abandon ability able about above absent absorb abstract absurd abuse access accident account accuse achieve acid acoustic acquire across act action actor actress actual adapt add addict address adjust admit adult advance advice aerobic affair afford afraid again age agent agree ahead aim air airport aisle alarm album alcohol alert alien all alley allow almost alone alpha already also alter always amateur amazing among amount amused analyst anchor ancient anger angle angry animal ankle announce annual another answer antenna antique anxiety any apart apology appear apple approve april arch arctic area arena argue arm armed armor army around arrange arrest arrive arrow art artefact artist artwork ask aspect assault asset assist assume asthma athlete atom attack attend attitude attract auction audit august aunt author auto autumn average avocado avoid awake aware away awesome awful awkward axis baby bachelor bacon badge bag balance balcony ball bamboo banana banner bar barely bargain barrel base basic basket battle beach bean beauty because become beef before begin behave behind believe below belt bench benefit best betray better between beyond bicycle bid bike bind biology bird birth bitter black blade blame blanket blast bleak bless blind blood blossom blouse blue blur blush board boat body boil bomb bone bonus book boost border boring borrow boss bottom bounce box boy bracket brain brand brass brave bread breeze brick bridge brief bright bring brisk broccoli broken bronze broom brother brown brush bubble buddy budget buffalo build bulb bulk bullet bundle bunker burden burger burst bus business busy butter buyer buzz cabbage cabin cable cactus cage cake call calm camera camp can canal cancel candy cannon canoe canvas canyon capable capital captain car carbon card cargo carpet carry cart case cash casino castle casual cat catalog catch category cattle caught cause caution cave ceiling celery cement census century cereal certain chair chalk champion change chaos chapter charge chase chat cheap check cheese chef cherry chest chicken chief child chimney choice choose chronic chuckle chunk churn cigar cinnamon circle citizen city civil claim clap clarify claw clay clean clerk clever click client cliff climb clinic clip clock clog close cloth cloud clown club clump cluster clutch coach coast coconut code coffee coil coin collect color column combine come comfort comic common company concert conduct confirm congress connect consider control convince cook cool copper copy coral core corn correct cost cotton couch country couple course cousin cover coyote crack cradle craft cram crane crash crater crawl crazy cream credit creek crew cricket crime crisp critic crop cross crouch crowd crucial cruel cruise crumble crunch crush cry crystal cube culture cup cupboard curious current curtain curve cushion custom cute cycle dad damage damp dance danger daring dash daughter dawn day deal debate debris decade december decide decline decorate decrease deer defense define defy degree delay deliver demand demise denial dentist deny depart depend deposit depth deputy derive describe desert design desk despair destroy detail detect develop device devote diagram dial diamond diary dice diesel diet differ digital dignity dilemma dinner dinosaur direct dirt disagree discover disease dish dismiss disorder display distance divert divide divorce dizzy doctor document dog doll dolphin domain donate donkey donor door dose double dove draft dragon drama drastic draw dream dress drift drill drink drip drive drop drum dry duck dumb dune during dust dutch duty dwarf dynamic eager eagle early earn earth easily east easy echo ecology economy edge edit educate effort egg eight either elbow elder electric elegant element elephant elevator elite else embark embody embrace emerge emotion employ empower empty enable enact end endless endorse enemy energy enforce engage engine enhance enjoy enlist enough enrich enroll ensure enter entire entry envelope episode equal equip era erase erode erosion error erupt escape essay essence estate eternal ethics evidence evil evoke evolve exact example excess exchange excite exclude excuse execute exercise exhaust exhibit exile exist exit exotic expand expect expire explain expose express extend extra eye eyebrow fabric face faculty fade faint faith fall false fame family famous fan fancy fantasy farm fashion fat fatal father fatigue fault favorite feature february federal fee feed feel female fence festival fetch fever few fiber fiction field figure file film filter final find fine finger finish fire firm first fiscal fish fit fitness fix flag flame flash flat flavor flee flight flip float flock floor flower fluid flush fly foam focus fog foil fold follow food foot force forest forget fork fortune forum forward fossil foster found fox fragile frame frequent fresh friend fringe frog front frost frown frozen fruit fuel fun funny furnace fury future gadget gain galaxy gallery game gap garage garbage garden garlic garment gas gasp gate gather gauge gaze general genius genre gentle genuine gesture ghost giant gift giggle ginger giraffe girl give glad glance glare glass glide glimpse globe gloom glory glove glow glue goat goddess gold good goose gorilla gospel gossip govern gown grab grace grain grant grape grass gravity great green grid grief grit grocery group grow grunt guard guess guide guilt guitar gun gym habit hair half hammer hamster hand happy harbor hard harsh harvest hat have hawk hazard head health heart heavy hedgehog height hello helmet help hen hero hidden high hill hint hip hire history hobby hockey hold hole holiday hollow home honey hood hope horn horror horse hospital host hotel hour hover hub huge human humble humor hundred hungry hunt hurdle hurry hurt husband hybrid ice icon idea identify idle ignore ill illegal illness image imitate immense immune impact impose improve impulse inch include income increase index indicate indoor industry infant inflict inform inhale inherit initial inject injury inmate inner innocent input inquiry insane insect inside inspire install intact interest into invest invite involve iron island isolate issue item ivory jacket jaguar jar jazz jealous jeans jelly jewel job join joke journey joy judge juice jump jungle junior junk just kangaroo keen keep ketchup key kick kid kidney kind kingdom kiss kit kitchen kite kitten kiwi knee knife knock know lab label labor ladder lady lake lamp language laptop large later latin laugh laundry lava law lawn lawsuit layer lazy leader leaf learn leave lecture left leg legal legend leisure lemon lend length lens leopard lesson letter level liar liberty library license life lift light like limb limit link lion liquid list little live lizard load loan lobster local lock logic lonely long loop lottery loud lounge love loyal lucky luggage lumber lunar lunch luxury lyrics machine mad magic magnet maid mail main major make mammal man manage mandate mango mansion manual maple marble march margin marine market marriage mask mass master match material math matrix matter maximum maze meadow mean measure meat mechanic medal media melody melt member memory mention menu mercy merge merit merry mesh message metal method middle midnight milk million mimic mind minimum minor minute miracle mirror misery miss mistake mix mixed mixture mobile model modify mom moment monitor monkey monster month moon moral more morning mosquito mother motion motor mountain mouse move movie much muffin mule multiply muscle museum mushroom music must mutual myself mystery myth naive name napkin narrow nasty nation nature near neck need negative neglect neither nephew nerve nest net network neutral never news next nice night noble noise nominee noodle normal north nose notable note nothing notice novel now nuclear number nurse nut oak obey object oblige obscure observe obtain obvious occur ocean october odor off offer office often oil okay old olive olympic omit once one onion online only open opera opinion oppose option orange orbit orchard order ordinary organ orient original orphan ostrich other outdoor outer output outside oval oven over own owner oxygen oyster ozone pact paddle page pair palace palm panda panel panic panther paper parade parent park parrot party pass patch path patient patrol pattern pause pave payment peace peanut pear peasant pelican pen penalty pencil people pepper perfect permit person pet phone photo phrase physical piano picnic picture piece pig pigeon pill pilot pink pioneer pipe pistol pitch pizza place planet plastic plate play please pledge pluck plug plunge poem poet point polar pole police pond pony pool popular portion position possible post potato pottery poverty powder power practice praise predict prefer prepare present pretty prevent price pride primary print priority prison private prize problem process produce profit program project promote proof property prosper protect proud provide public pudding pull pulp pulse pumpkin punch pupil puppy purchase purity purpose purse push put puzzle pyramid quality quantum quarter question quick quit quiz quote rabbit raccoon race rack radar radio rail rain raise rally ramp ranch random range rapid rare rate rather raven raw razor ready real reason rebel rebuild recall receive recipe record recycle reduce reflect reform refuse region regret regular reject relax release relief rely remain remember remind remove render renew rent reopen repair repeat replace report require rescue resemble resist resource response result retire retreat return reunion reveal review reward rhythm rib ribbon rice rich ride ridge rifle right rigid ring riot ripple risk ritual rival river road roast robot robust rocket romance roof rookie room rose rotate rough round route royal rubber rude rug rule run runway rural sad saddle sadness safe sail salad salmon salon salt salute same sample sand satisfy satoshi sauce sausage save say scale scan scare scatter scene scheme school science scissors scorpion scout scrap screen script scrub sea search season seat second secret section security seed seek segment select sell seminar senior sense sentence series service session settle setup seven shadow shaft shallow share shed shell sheriff shield shift shine ship shiver shock shoe shoot shop short shoulder shove shrimp shrug shuffle shy sibling sick side siege sight sign silent silk silly silver similar simple since sing siren sister situate six size skate sketch ski skill skin skirt skull slab slam sleep slender slice slide slight slim slogan slot slow slush small smart smile smoke smooth snack snake snap sniff snow soap soccer social sock soda soft solar soldier solid solution solve someone song soon sorry sort soul sound soup source south space spare spatial spawn speak special speed spell spend sphere spice spider spike spin spirit split spoil sponsor spoon sport spot spray spread spring spy square squeeze squirrel stable stadium staff stage stairs stamp stand start state stay steak steel stem step stereo stick still sting stock stomach stone stool story stove strategy street strike strong struggle student stuff stumble style subject submit subway success such sudden suffer sugar suggest suit summer sun sunny sunset super supply supreme sure surface surge surprise surround survey suspect sustain swallow swamp swap swarm swear sweet swift swim swing switch sword symbol symptom syrup system table tackle tag tail talent talk tank tape target task taste tattoo taxi teach team tell ten tenant tennis tent term test text thank that theme then theory there they thing this thought three thrive throw thumb thunder ticket tide tiger tilt timber time tiny tip tired tissue title toast tobacco today toddler toe together toilet token tomato tomorrow tone tongue tonight tool tooth top topic topple torch tornado tortoise toss total tourist toward tower town toy track trade traffic tragic train transfer trap trash travel tray treat tree trend trial tribe trick trigger trim trip trophy trouble truck true truly trumpet trust truth try tube tuition tumble tuna tunnel turkey turn turtle twelve twenty twice twin twist two type typical ugly umbrella unable unaware uncle uncover under undo unfair unfold unhappy uniform unique unit universe unknown unlock until unusual unveil update upgrade uphold upon upper upset urban urge usage use used useful useless usual utility vacant vacuum vague valid valley valve van vanish vapor various vast vault vehicle velvet vendor venture venue verb verify version very vessel veteran viable vibrant vicious victory video view village vintage violin virtual virus visa visit visual vital vivid vocal voice void volcano volume vote voyage wage wagon wait walk wall walnut want warfare warm warrior wash wasp waste water wave way wealth weapon wear weasel weather web wedding weekend weird welcome west wet whale what wheat wheel when where whip whisper wide width wife wild will win window wine wing wink winner winter wire wisdom wise wish witness wolf woman wonder wood wool word work world worry worth wrap wreck wrestle wrist write wrong yard year yellow you young youth zebra zero zone zoo'.split(' ');
const SYT = {
  title: 'Sync between devices', intro: 'Your progress moves between phone, tablet and computer, encrypted, through your own private repository on GitHub. Each device is set up once.',
  setup: 'Set up sync', now: 'Sync now', code: 'Pairing code', tokenNew: 'Enter a new token', off: 'Turn off on this device', close: 'Close', link: 'Sync between devices',
  last: d => 'Last sync: ' + d, never: 'Not synced yet.', busy: 'Syncing…', devs: n => 'Paired devices: ' + n, offState: 'Off: progress is saved only on this device.',
  footOn: 'Progress is saved on this device and synced, encrypted, through GitHub. Transfer codes still work as before.',
  footOff: 'Without sync, progress is saved only on this device.',
  setupP: 'Paste the token for the mailbox (it starts with github_pat_) and the name of the private repository.', tokenL: 'Token', repoL: 'Repository',
  connect: 'Connect', checking: 'Checking…', cancel: 'Cancel', ok: 'Continue',
  newCodeP: 'This is the pairing code for all your devices. Write these 8 words down (ideally in a password manager). You will enter them on the other devices.', saved: 'I have written them down',
  askCodeP: 'The mailbox is already set up. Enter the 8 words of the pairing code from your first device, or scan it as a QR code. The first 4 letters of each word are enough.', codeL: '8 words', codeBad: 'The code doesn’t match. Check all 8 words.',
  showCodeP: 'Enter this code on another device when you set up sync there. Don’t send it to anyone.',
  joinT: 'This device already has progress', joinP: w => `Here: ${w} earned, plus lessons and cards. Your other devices have their own progress. What should happen?`,
  joinAdopt: 'Take the progress from my other devices', joinAdoptS: 'Progress on this device is replaced. Best if it got here from a transfer code: otherwise the ₩ and the correct answers would be counted twice.',
  joinAdd: 'Add this device’s progress', joinAddS: 'Lessons, cards, ₩ and correct answers from here are merged with the others.',
  first: 'Sync is on.', done: 'Synced.', offT: 'Turn off sync on this device?', offP: 'Progress on this device stays. Your other devices keep theirs and go on syncing.', offYes: 'Yes, turn it off', offDone: 'Sync is off on this device.',
  qrShow: 'Show QR code', qrHide: 'Hide QR code', qrHint: 'On the other device tap “Scan QR code”. The code hides itself in 2 minutes.',
  qrScan: 'Scan QR code', qrScanP: 'On the other device open Extras → Sync between devices → Pairing code → Show QR code, and point the camera at it.',
  qrStarting: 'Starting the camera…', qrLooking: 'Looking for the code…', qrNoCam: 'The camera isn’t available here. Type the 8 words instead.',
  qrDenied: 'Moonlight Mart isn’t allowed to use the camera. Allow it in the device settings, or type the 8 words instead.', qrWrong: 'That isn’t a Moonlight Mart pairing code.',
  tokenOk: 'The token is saved.', resetOff: 'Sync was turned off on this device, so this change stays here. Your other devices keep their progress.',
  merged: 'Progress from your other devices is here.',
  upNew: v => `A new version of the app is ready: ${v}.`, upGet: 'Download', upLater: 'Later',
  e: {
    offline: 'No internet connection. It will try again later.', token: 'The token is invalid or has expired. Enter a new one.',
    notfound: 'The repository can’t be opened. Check its name and the token’s permissions.', forbidden: 'The repository can’t be opened. Check its name and the token’s permissions.',
    public: 'That repository is public. For sync it must be private.', empty: 'The repository is empty. Add a README file to it on GitHub.',
    meta: 'The mailbox holds data of another app.', damaged: 'Some data from another device couldn’t be read (a different pairing code?). The rest was synced.',
    http: s => `GitHub refused the request (${s}). Try again later.`, other: 'Sync didn’t work. Try again later.'
  }
};
function syErrText(k) { if (!k) return ''; if (k.startsWith('http:')) return SYT.e.http(k.slice(5)); const f = SYT.e[k]; return typeof f === 'string' ? f : SYT.e.other; }
const syEsc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const isDay = v => typeof v === 'string' && /^\d{4}-\d\d-\d\d$/.test(v);

function syLoad() {
  try {
    const c = JSON.parse(localStorage.getItem(SY_KEY));
    if (c && SY_RE_REPO.test(c.repo || '') && SY_RE_BR.test(c.branch || '') && typeof c.token === 'string' && typeof c.code === 'string') {
      for (const k of ['seen', 'dev', 'it']) if (!c[k] || typeof c[k] !== 'object' || Array.isArray(c[k])) c[k] = {};
      return c;
    }
  } catch (e) { }
  return null;
}
function sySave() { try { if (SY) localStorage.setItem(SY_KEY, JSON.stringify(SY)); else localStorage.removeItem(SY_KEY); } catch (e) { } }
function syOn() { return !!(SY && syKey); }
const syEnc = s => new TextEncoder().encode(s);
const syHash = a => { let x = 2166136261; for (let i = 0; i < a.length; i++) x = Math.imul(x ^ a.charCodeAt(i), 16777619); return (x >>> 0).toString(36) + '.' + a.length; };
function syB64(u8) { let s = ''; for (let i = 0; i < u8.length; i += 32768) s += String.fromCharCode.apply(null, u8.subarray(i, i + 32768)); return btoa(s); }
function syUnB64(s) { const b = atob(s), u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }

/* ---------- key, cipher, compression ---------- */
async function syDerive(code) {
  const ikm = await crypto.subtle.importKey('raw', syEnc(code), 'HKDF', false, ['deriveKey']);
  return crypto.subtle.deriveKey({ name: 'HKDF', hash: 'SHA-256', salt: syEnc('Moonlight Mart sync v1'), info: syEnc('state') }, ikm, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
}
async function sySeal(key, name, u8) {
  const iv = crypto.getRandomValues(new Uint8Array(12)), ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: syEnc(name) }, key, u8));
  const o = new Uint8Array(12 + ct.length); o.set(iv); o.set(ct, 12); return o;
}
async function syOpen(key, name, u8) {
  if (!(u8 instanceof Uint8Array) || u8.length < 28) throw new Error('short');
  return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: u8.slice(0, 12), additionalData: syEnc(name) }, key, u8.subarray(12)));
}
async function syZip(u8, on) { const s = new Blob([u8]).stream().pipeThrough(on ? new CompressionStream('gzip') : new DecompressionStream('gzip')); return new Uint8Array(await new Response(s).arrayBuffer()); }
/* pairing code: 8 words from the 2048-word BIP39 list (88 bits); the first 4 letters of each word are enough */
function syNewCode() { return [...crypto.getRandomValues(new Uint16Array(8))].map(x => SY_WORDS[x & 2047]).join(' '); }
function syParseCode(s) {
  const ws = String(s || '').toLowerCase().replace(/[^a-z]+/g, ' ').trim().split(' ').filter(Boolean); if (ws.length !== 8) return null; const out = [];
  for (const w of ws) { const m = SY_WORDS.includes(w) ? w : w.length >= 4 ? SY_WORDS.find(x => x.startsWith(w.slice(0, 4))) : null; if (!m) return null; out.push(m); }
  return out.join(' ');
}
const SY_CHECK = 'Moonlight Mart sync check';
async function syCheckBlob(k) { return syB64(await sySeal(k, 'check', syEnc(SY_CHECK))); }
async function syCheckOk(k, c) { try { return new TextDecoder().decode(await syOpen(k, 'check', syUnB64(c))) === SY_CHECK; } catch (e) { return false; } }

/* ---------- GitHub REST API ---------- */
class SyErr extends Error { constructor(kind, status) { super(kind); this.kind = kind; this.status = status || 0; } }
async function gh(token, method, path, body, raw) {
  let r;
  try {
    r = await fetch(SY_API + path, {
      method, cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer',
      headers: Object.assign({ Authorization: 'Bearer ' + token, Accept: raw ? 'application/vnd.github.raw+json' : 'application/vnd.github+json' }, body ? { 'Content-Type': 'application/json' } : {}),
      body: body ? JSON.stringify(body) : undefined
    });
  } catch (e) { throw new SyErr('offline'); }
  if (r.status === 401) throw new SyErr('token', 401);
  if (!r.ok) throw new SyErr(r.status === 404 ? 'notfound' : r.status === 403 ? 'forbidden' : r.status === 409 ? 'empty' : 'http', r.status);
  if (raw) return new Uint8Array(await r.arrayBuffer());
  if (r.status === 204) return null;
  try { return await r.json(); } catch (e) { throw new SyErr('http', r.status); }
}
async function syCheckRepo(token, input) {
  let repo = String(input || '').trim().replace(/^https:\/\/github\.com\//, '').replace(/\.git$/, '').replace(/\/+$/, '');
  if (!repo.includes('/')) { const u = await gh(token, 'GET', '/user'); if (!u || typeof u.login !== 'string') throw new SyErr('http'); repo = u.login + '/' + (repo || SY_DEFREPO); }
  if (!SY_RE_REPO.test(repo)) throw new SyErr('notfound');
  const info = await gh(token, 'GET', '/repos/' + repo); if (!info || info.private !== true) throw new SyErr('public');
  return info.full_name && SY_RE_REPO.test(info.full_name) ? info.full_name : repo;
}
async function syReadMeta(token, repo) {
  let r; try { r = await gh(token, 'GET', `/repos/${repo}/contents/${SY_META}`); } catch (e) { if (e.kind === 'notfound') return null; throw e; }
  try { const m = JSON.parse(new TextDecoder().decode(syUnB64(String(r.content || '').replace(/\s+/g, '')))); if (m && m.app === SY_APP && m.sync === 1 && typeof m.check === 'string') return m; } catch (e) { }
  throw new SyErr('meta');
}

/* ---------- what is synced and how ---------- */
const syNum = v => { v = +v; return isFinite(v) ? v : 0; };
const syObj = o => !!o && typeof o === 'object' && !Array.isArray(o);
const RE_LES = /^\d{1,2}$/, RE_ID = /^[^\u0000-\u001f]{1,120}$/;
const lessonOk = n => RE_LES.test(String(n)) && +n >= 1 && +n <= 60;
const shiftsOf = n => { const L = MM.S.L[n]; return (L && L.game && syObj(L.game.shifts)) ? L.game.shifts : {}; };
/* counters as a flat map (no zeros): w = ₩, d.<day> = correct answers that day, r.<lesson>.<shift> = runs */
function syCount() {
  const S = MM.S, o = {}, a = (k, v) => { v = syNum(v); if (v) o[k] = (o[k] || 0) + v; };
  a('w', S.won);
  for (const d in S.days) if (isDay(d)) a('d.' + d, S.days[d]);
  for (const n in S.L) if (lessonOk(n)) { const sh = shiftsOf(n); for (const k in sh) if (/^[A-Za-z0-9_-]{1,20}$/.test(k) && syObj(sh[k])) a('r.' + n + '.' + k, sh[k].runs); }
  return o;
}
const SY_RE_CNT = /^(w|d\.\d{4}-\d\d-\d\d|r\.\d{1,2}\.[A-Za-z0-9_-]{1,20})$/;
function sySetCount(c) {
  const S = MM.S; S.won = Math.round(c.w || 0);
  const days = {}; for (const k in c) { const m = /^d\.(.+)$/.exec(k); if (m && c[k] > 0) days[m[1]] = Math.round(c[k]); }
  S.days = days;
  for (const n in S.L) if (lessonOk(n)) { const sh = shiftsOf(n); for (const k in sh) if (syObj(sh[k]) && sh[k].runs !== undefined) sh[k].runs = Math.max(0, Math.round(c['r.' + n + '.' + k] || 0)); }
  for (const k in c) { const m = /^r\.(\d{1,2})\.(.+)$/.exec(k); if (!m || !(c[k] > 0) || !lessonOk(m[1])) continue; const sh = MM.LS(m[1]).game.shifts; (sh[m[2]] || (sh[m[2]] = {})).runs = Math.round(c[k]); }
}
function syAdd(a, b, m = 1) { const o = Object.assign({}, a); for (const k in b) { const v = (o[k] || 0) + m * syNum(b[k]); if (v) o[k] = v; else delete o[k]; } return o; }
const syOwn = o => { const r = {}; if (syObj(o)) for (const k in o) if (SY_RE_CNT.test(k) && isFinite(+o[k]) && Math.abs(+o[k]) < 1e10) r[k] = +o[k]; return r; };
const syDevSum = dev => Object.values(dev).reduce((a, d) => syAdd(a, syOwn(d && d.own)), {});
/* union / maximum: snacks, store repairs, shifts (done = done anywhere, best = the best anywhere) */
function sySets() {
  const S = MM.S, sh = {};
  for (const n in S.L) if (lessonOk(n)) { const x = shiftsOf(n); for (const k in x) if (syObj(x[k]) && (x[k].done || x[k].best)) sh[n + '.' + k] = [x[k].done ? 1 : 0, Math.round(syNum(x[k].best))]; }
  return { coll: S.coll.slice(), fixed: S.fixed.slice(), sh };
}
function syUnion(x) {
  if (!syObj(x)) return; const S = MM.S, id = v => typeof v === 'string' && /^[\w.:-]{1,80}$/.test(v);
  if (Array.isArray(x.coll)) x.coll.forEach(v => { if (id(v) && !S.coll.includes(v)) S.coll.push(v); });
  if (Array.isArray(x.fixed)) x.fixed.forEach(v => { if (id(v) && !S.fixed.includes(v) && (!MM.upgrades || MM.upgrades.some(u => u.id === v))) S.fixed.push(v); });
  if (syObj(x.sh)) for (const key in x.sh) {
    const m = /^(\d{1,2})\.([A-Za-z0-9_-]{1,20})$/.exec(key), v = x.sh[key];
    if (!m || !lessonOk(m[1]) || !Array.isArray(v) || v.length !== 2) continue;
    const sh = MM.LS(m[1]).game.shifts, s = sh[m[2]] || (sh[m[2]] = {});
    if (v[0] === 1) s.done = true;
    const b = Math.max(0, Math.min(100, Math.round(syNum(v[1])))); if (b > (s.best || 0)) s.best = b;
  }
}
/* last changed wins, per item:
   k:<skill>  m:<Mnemo key>  x:<question id> (weak spot [skill, lesson, n])  o:theme
   L:<JSON [lesson, part, field(, key)]> (every textbook / workbook / game entry except shifts) */
const LKEY = a => 'L:' + JSON.stringify(a);
function syItems() {
  const S = MM.S, m = new Map(), put = (p, o) => { if (syObj(o)) for (const k in o) if (o[k] != null) m.set(p + k, o[k]); };
  put('k:', S.skills); put('m:', (S.mh || {}).c);
  for (const x of S.mistakes) if (x && typeof x.qid === 'string') m.set('x:' + x.qid, [String(x.skill || ''), x.lesson | 0, x.n | 0]);
  if (S.theme === 'dark' || S.theme === 'light') m.set('o:theme', S.theme);
  for (const n in S.L) {
    if (!lessonOk(n) || !syObj(S.L[n])) continue;
    for (const part of ['tb', 'wb', 'game']) {
      const P = S.L[n][part]; if (!syObj(P)) continue;
      for (const f in P) {
        if (part === 'game' && f === 'shifts') continue;
        const v = P[f]; if (v == null) continue;
        if (syObj(v)) { for (const k in v) if (v[k] != null) m.set(LKEY([+n, part, f, k]), v[k]); }
        else m.set(LKEY([+n, part, f]), v);
      }
    }
  }
  return m;
}
/* a value from another device: normalised, or undefined when it is not valid */
function syNorm(k, v) {
  const p = k.slice(0, 2), id = k.slice(2); if (!id || id.length > 300) return undefined;
  if (v === null) return p === 'o:' && id !== 'theme' ? undefined : null;
  if (p === 'k:') return RE_ID.test(id) && syObj(v) && JSON.stringify(v).length < 600 ? v : undefined;
  if (p === 'm:') return RE_ID.test(id) && Array.isArray(v) && v.length === 5 && v.every(x => typeof x === 'number' && isFinite(x)) ? v : undefined;
  if (p === 'x:') return RE_ID.test(id) && Array.isArray(v) && v.length === 3 && typeof v[0] === 'string' && v[0].length < 120 && Number.isInteger(v[1]) && Number.isInteger(v[2]) && v[2] >= 0 && v[2] < 1e6 ? v : undefined;
  if (p === 'o:') return id === 'theme' && (v === 'dark' || v === 'light') ? v : undefined;
  if (p === 'L:') {
    let a; try { a = JSON.parse(id); } catch (e) { return undefined; }
    if (!Array.isArray(a) || (a.length !== 3 && a.length !== 4) || !lessonOk(a[0]) || !['tb', 'wb', 'game'].includes(a[1])) return undefined;
    if (typeof a[2] !== 'string' || !RE_ID.test(a[2]) || (a[1] === 'game' && a[2] === 'shifts') || ['__proto__', 'constructor', 'prototype'].includes(a[2])) return undefined;
    if (a.length === 4 && (typeof a[3] !== 'string' || !RE_ID.test(a[3]) || ['__proto__', 'constructor', 'prototype'].includes(a[3]))) return undefined;
    if (JSON.stringify(v).length > 8000) return undefined;
    return v;
  }
  return undefined;
}
function syPut(k, v) {
  const S = MM.S, p = k.slice(0, 2), id = k.slice(2), set = (o, x) => { if (x === null) delete o[id]; else o[id] = x; };
  if (p === 'k:') set(S.skills || (S.skills = {}), v);
  else if (p === 'm:') set((S.mh || (S.mh = { c: {} })).c || (S.mh.c = {}), v);
  else if (p === 'o:') S.theme = v;
  else if (p === 'x:') {
    const i = S.mistakes.findIndex(x => x && x.qid === id);
    if (v === null) { if (i >= 0) S.mistakes.splice(i, 1); }
    else if (i >= 0) Object.assign(S.mistakes[i], { skill: v[0], lesson: v[1], n: v[2] });
    else S.mistakes.push({ skill: v[0], qid: id, lesson: v[1], n: v[2] });
  } else if (p === 'L:') {
    const a = JSON.parse(id), P = MM.LS(a[0])[a[1]];
    if (a.length === 3) { if (v === null) delete P[a[2]]; else P[a[2]] = v; }
    else { if (!syObj(P[a[2]])) { if (v === null) return; P[a[2]] = {}; } if (v === null) delete P[a[2]][a[3]]; else P[a[2]][a[3]] = v; }
  }
}
/* note when an item changed (called after every save); init: items found when sync is switched on get weight 1 */
function syTouch(init) {
  if (!SY) return false; const it = SY.it || (SY.it = {}), cur = syItems(), now = Math.round(Date.now() - (SY.skew || 0)); let ch = false;
  for (const [k, v] of cur) { const s = JSON.stringify(v), o = it[k]; if (o && o[0] === s) continue; it[k] = [s, init ? Math.max(o ? o[1] : 0, 1) : Math.max(now, (o ? o[1] : 0) + 1)]; ch = true; }
  for (const k in it) if (!cur.has(k) && it[k][0] !== 'null') { it[k] = ['null', init ? it[k][1] : Math.max(now, it[k][1] + 1)]; ch = true; }
  return ch;
}
/* items from another device: the later change wins (a tie goes to the larger value, so every device ends the same) */
function syTake(it) {
  if (!syObj(it)) return 0; let n = 0; const L = SY.it;
  for (let k in it) {
    const e = it[k]; if (!Array.isArray(e) || e.length !== 2) continue; const at = +e[1]; if (!(at > 0 && isFinite(at))) continue;
    if (k.startsWith('m:')) { const n = 'm:' + MM.oldCardId(k.slice(2)); if (n !== k) { if (it[n]) continue; k = n; } }   // a device still on the old card ids
    const v = syNorm(k, e[0]); if (v === undefined) continue; const s = JSON.stringify(v), o = L[k] || ['null', 0];
    if (at > o[1] || (at === o[1] && s > o[0])) { syPut(k, v); L[k] = [s, at]; n++; }
  }
  return n;
}
/* "take the progress from my other devices": empty this device first (only what is synced; keyboard, open lesson stay) */
function syWipe() {
  const S = MM.S, D = MM.defaultState();
  for (const k of ['won', 'L', 'skills', 'mistakes', 'days', 'coll', 'mh', 'fixed']) S[k] = D[k];
  SY.it = {};
}
function syMerge(present, fresh) {
  const c = SY, adopt = !c.joined && c.join === 'adopt', old = c.dev;
  syTouch(false);
  const O = adopt ? {} : syAdd(syCount(), syDevSum(old), -1);
  const dev = {}; for (const br of present) { if (fresh[br]) { dev[br] = { own: syOwn(fresh[br].d.own) }; c.seen[br] = fresh[br].cs; } else if (old[br]) dev[br] = old[br]; }
  for (const br in c.seen) if (!present.has(br)) delete c.seen[br];
  c.dev = dev;
  if (adopt) syWipe();
  for (const br in fresh) { const d = fresh[br].d; syUnion(d.sets); syTake(d.it); }
  sySetCount(syAdd(O, syDevSum(dev)));   // after the union: shifts that only exist elsewhere get their runs too
  return { O };
}
/* the progress and the sync state are written together (else a counter could be counted twice) */
function syPersist() { try { MM.writeLocal(); } catch (e) { } sySave(); }
/* key order must not matter (a merge rebuilds S.days in another order: same progress, other string) */
const syCanon = v => Array.isArray(v) ? '[' + v.map(syCanon).join(',') + ']' : syObj(v) ? '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + syCanon(v[k])).join(',') + '}' : JSON.stringify(v);
const syFingerprint = () => syCanon([syCount(), sySets()]);
const syAll = () => syFingerprint() + syCanon([...syItems()].sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));

/* ---------- one sync ---------- */
/* quick (on leaving the app): upload only, no downloads from the other devices (they come at the next sync), and when this
   device has uploaded before, not even the branch list: as few requests as possible before Android stops the app */
async function syNow(manual, quick) {
  if (!syOn()) return false; if (syBusy) { if (quick) syAgain = true; return false; }
  syBusy = true; syAgain = false; const c = SY, P = '/repos/' + c.repo; c.lastAttempt = Date.now(); sySave(); syRefresh();
  let ok = false, damaged = false, res = null, before = '';
  try {
    if (MM.tallyFlush) MM.tallyFlush();
    const short = quick && !manual && !!c.upHash, refs = short ? [] : await gh(c.token, 'GET', P + '/git/matching-refs/heads/' + SY_PFX);
    const present = new Set(short ? Object.keys(c.dev) : []), fresh = {}; let own = short ? 'kept' : null;
    for (const ref of Array.isArray(refs) ? refs : []) {
      const br = String(ref.ref || '').replace(/^refs\/heads\//, ''), cs = ref.object && ref.object.sha;
      if (!SY_RE_BR.test(br) || !SY_SHA.test(cs || '')) continue;
      if (br === c.branch) { own = cs; continue; }
      present.add(br); if (!manual && (quick || c.seen[br] === cs && c.dev[br])) continue;
      try {
        const cm = await gh(c.token, 'GET', `${P}/git/commits/${cs}`), ts = cm && cm.tree && cm.tree.sha; if (!SY_SHA.test(ts || '')) throw new SyErr('http');
        const tr = await gh(c.token, 'GET', `${P}/git/trees/${ts}`), e = (Array.isArray(tr.tree) ? tr.tree : []).find(x => x.path === 'state' && x.type === 'blob' && SY_SHA.test(x.sha || ''));
        if (!e) continue;
        const d = JSON.parse(new TextDecoder().decode(await syZip(await syOpen(syKey, 'state', await gh(c.token, 'GET', `${P}/git/blobs/${e.sha}`, null, true)), false)));
        if (!d || d.app !== SY_APP || d.v !== 1) throw new Error('shape');
        fresh[br] = { d, cs };
      } catch (e) { if (e instanceof SyErr) throw e; console.warn('sync: unreadable', br, e); damaged = true; }
    }
    if (c !== SY) return false;
    before = syAll(); res = syMerge(present, fresh); res.got = before !== syAll(); syPersist(); syFp = syFingerprint();
    const it = {}; for (const k in c.it) { const [s, at] = c.it[k]; if (at > 0) it[k] = [JSON.parse(s), at]; }
    const body = JSON.stringify({ app: SY_APP, v: 1, own: res.O, sets: sySets(), it }), hs = syHash(body);
    if (hs !== c.upHash || !own) {
      const blob = await gh(c.token, 'POST', P + '/git/blobs', { content: syB64(await sySeal(syKey, 'state', await syZip(syEnc(body), true))), encoding: 'base64' });
      const tr = await gh(c.token, 'POST', P + '/git/trees', { tree: [{ path: 'state', mode: '100644', type: 'blob', sha: blob.sha }] });
      const t0 = Date.now(), cm = await gh(c.token, 'POST', P + '/git/commits', { message: 'Moonlight Mart sync', tree: tr.sha, parents: [] });
      const sd = Date.parse(((cm && cm.committer) || {}).date || ''); if (isFinite(sd)) c.skew = Math.round((t0 + Date.now()) / 2 - sd);
      if (own) await gh(c.token, 'PATCH', `${P}/git/refs/heads/${c.branch}`, { sha: cm.sha, force: true });
      else await gh(c.token, 'POST', P + '/git/refs', { ref: 'refs/heads/' + c.branch, sha: cm.sha });
      c.upHash = hs;
    }
    c.joined = true; delete c.join; c.lastSync = Date.now(); c.lastError = damaged ? 'damaged' : null; ok = true;
  } catch (e) { console.warn('sync failed', e); c.lastError = e instanceof SyErr ? (e.kind === 'http' && e.status ? 'http:' + e.status : e.kind) : 'other'; }
  finally { syBusy = false; if (SY === c) sySave(); if (syAgain) { syAgain = false; if (document.hidden) setTimeout(() => syNow(false, true), 0); } }
  if (res && res.got) syShow(manual);
  syRefresh(manual ? (ok ? (damaged ? SYT.e.damaged : SYT.done) : '') : '');
  return ok;
}
/* after a merge: the header always; the page only on the game's home screen (never in a round, a card drill or an exercise) */
function syShow(manual) {
  try { if (MM.ui.applyTheme) MM.ui.applyTheme(); MM.ui.refreshWon(); } catch (e) { }
  const G = MM.G || {}, a = document.activeElement, typing = a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) && !(a.closest && a.closest('#sysheet'));
  if (!G.inRound && !typing && MM.S.cur && MM.S.cur.tab === 'game' && (G.screen || 'home') === 'home' && !document.querySelector('.mh-sheet')) {
    const y = window.scrollY; try { MM.app.render(); } catch (e) { } window.scrollTo(0, y);
  } else if (!manual && !document.hidden) { try { MM.ui.toast(SYT.merged); } catch (e) { } }
}

/* when: on start, on coming back to the app, on leaving it, every minute while it is open, a moment after a change */
function syMaybe(gap) {
  if (!syOn() || syBusy || navigator.onLine === false) return; const e = SY.lastError;
  const w = SY_HARD.includes(e) ? SY_RETRY : e && e !== 'damaged' ? Math.max(gap, SY_ERRWAIT) : gap;
  if (Date.now() - (SY.lastAttempt || 0) >= w) syNow(false);
}
const inRound = () => !!(MM.G && MM.G.inRound);
/* a moment after a change: 3 s outside a round (a shift just ended), 15 s during one (a batch of changes = one upload);
   a later change never pushes an earlier deadline further away */
function sySoon() {
  if (!syOn()) return; const due = Date.now() + (inRound() ? SY_SOON : SY_DESK); if (sySoonT && sySoonAt <= due) return;
  clearTimeout(sySoonT); sySoonAt = due; sySoonT = setTimeout(() => { sySoonT = null; if (syBusy) sySoon(); else syMaybe(0); }, due - Date.now());
}
function syChanged() { if (!SY) return; const t = syTouch(false), f = syFingerprint(); if (t) sySave(); if (t || f !== syFp) { syFp = f; sySoon(); } }
/* leaving the app: upload at once (quick), also right after a sync that was still running */
function syLeave() {
  if (!syOn() || navigator.onLine === false) return; const e = SY.lastError;
  if (SY_HARD.includes(e) && Date.now() - (SY.lastAttempt || 0) < SY_RETRY) return;
  clearTimeout(sySoonT); sySoonT = null; syNow(false, true);
}
function syBoot() {
  if (!ON) return; SY = syLoad(); if (!SY) return; syTouch(false); syFp = syFingerprint(); sySave();
  syDerive(SY.code).then(k => { syKey = k; syRefresh(); setTimeout(() => syMaybe(0), 1500); }).catch(e => console.warn('sync key', e));
}
if (ON) {
  document.addEventListener('visibilitychange', () => { if (!syOn()) return; if (document.hidden) syLeave(); else setTimeout(() => syMaybe(SY_BACK), 300); });
  window.addEventListener('online', () => setTimeout(() => syMaybe(0), 2000));
  setInterval(() => {
    if (document.hidden) return;
    if (sySoonT && sySoonAt > Date.now() + SY_DESK && !inRound()) { clearTimeout(sySoonT); sySoonT = null; sySoon(); }   // the round ended: upload soon
    syMaybe(SY_POLL);
  }, 10000);
}
/* transfer code loaded or progress erased with sync on: only here, and sync is turned off on this device
   (else the erase would be subtracted on every device, or the loaded progress counted twice) */
function syReset() { if (!SY) return false; clearTimeout(sySoonT); SY = null; syKey = null; sySave(); syResetNote = true; return true; }

/* ---------- screens (a sheet over the page) ---------- */
function h(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
let syView = '';
function syWhen(t) { return new Date(t).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); }
function syStatus() {
  if (!SY) return SYT.offState; if (syBusy) return SYT.busy; if (SY.lastError && SY.lastError !== 'damaged') return syErrText(SY.lastError);
  return (SY.lastSync ? SYT.last(syWhen(SY.lastSync)) : SYT.never) + (SY.lastError === 'damaged' ? ' ' + SYT.e.damaged : '');
}
const syBad = () => !!(SY && SY.lastError && SY.lastError !== 'damaged');
const syDevCount = () => SY && SY.joined ? SYT.devs(Object.keys(SY.dev).length + 1) : '';
function syRefresh(msg) {
  const ex = document.getElementById('sy-extras'); if (ex) { ex.textContent = syStatus(); ex.classList.toggle('sy-bad', syBad() && !syBusy); }
  if (syView !== 'home') return; const st = document.getElementById('sy-st'); if (!st) return;
  st.className = 'sy-p' + (syBad() && !syBusy ? ' sy-bad' : ''); st.textContent = syStatus();
  const nb = document.getElementById('sy-now'); if (nb) nb.disabled = syBusy;
  const dv = document.getElementById('sy-dev'); if (dv) dv.textContent = syDevCount();
  const ms = document.getElementById('sy-msg'); if (ms && msg) ms.innerHTML = `<em>${syEsc(msg)}</em>`;
  const tk = document.getElementById('sy-tok-btn'); if (tk) tk.hidden = !(SY && SY.lastError === 'token');
}
function syClose() {
  syScanStop(); clearTimeout(syQrT); const d = document.getElementById('sysheet'); if (d) d.remove(); syView = '';
  document.body.classList.remove('sy-open');
  try { if (!inRound()) MM.app.render(); } catch (e) { }
}
function show(card, view) {
  syScanStop(); let d = document.getElementById('sysheet');
  if (!d) { d = h('div', 'sy-back'); d.id = 'sysheet'; d.setAttribute('role', 'dialog'); d.setAttribute('aria-modal', 'true'); d.setAttribute('aria-label', SYT.title); document.body.appendChild(d); }
  d.innerHTML = ''; d.appendChild(card); document.body.classList.add('sy-open'); syView = view; d.scrollTop = 0;
}
function syCard() { const c = h('section', 'sy-card'); c.append(h('div', 'sy-eyebrow', `<span>Sync · 동기화</span><span id="sy-dev">${syEsc(syDevCount())}</span>`)); return c; }
function syBtn(t, cls, fn, id) { const b = h('button', cls || 'btn btn-go', syEsc(t)); b.type = 'button'; b.onclick = fn; if (id) b.id = id; return b; }
const GHOST = 'btn btn-ghost';
function syScreen(msg) {
  if (typeof msg !== 'string') msg = '';
  const c = syCard(); c.append(h('h2', 'sy-h', syEsc(SYT.title)), h('p', 'sy-p', syEsc(SYT.intro)));
  const ms = h('p', 'sy-p', msg ? `<em>${syEsc(msg)}</em>` : ''); ms.id = 'sy-msg';
  if (syResetNote) { syResetNote = false; c.append(h('p', 'sy-p sy-bad', syEsc(SYT.resetOff))); }
  if (!SY) c.append(ms, syBtn(SYT.setup, 'btn btn-go', sySetup, 'sy-setup'), syBtn(SYT.close, GHOST, syClose, 'sy-close'));
  else {
    const st = h('p', 'sy-p'); st.id = 'sy-st'; c.append(st, ms, syBtn(SYT.now, 'btn btn-go', () => { syNow(true); }, 'sy-now'), syBtn(SYT.code, GHOST, syShowCode, 'sy-code-btn'));
    const tk = syBtn(SYT.tokenNew, GHOST, syToken, 'sy-tok-btn'); c.append(tk, syBtn(SYT.off, GHOST, syOffAsk, 'sy-off'), syBtn(SYT.close, GHOST, syClose, 'sy-close'));
  }
  c.append(h('p', 'sy-foot', `<em>${syEsc(SY ? SYT.footOn : SYT.footOff)}</em>`));
  show(c, 'home'); syRefresh();
}
function syField(label, id, type, ph, val) {
  const w = h('label', 'sy-field'); w.append(h('span', 'sy-lbl', syEsc(label))); const i = h('input', 'sy-in'); i.id = id; i.type = type; i.autocomplete = 'off'; i.spellcheck = false;
  i.setAttribute('autocapitalize', 'off'); if (ph) i.placeholder = ph; if (val) i.value = val; w.append(i); return w;
}
const syErrBox = () => { const p = h('p', 'sy-p sy-bad'); p.id = 'sy-err'; p.hidden = true; return p; };
function syErr(k, txt) { const e = document.getElementById('sy-err'); if (e) { e.textContent = txt || syErrText(k); e.hidden = !(txt || k); } }
const syPend = {};
function sySetup() {
  for (const k in syPend) delete syPend[k];
  const c = syCard(); c.append(h('h2', 'sy-h', syEsc(SYT.setup)), h('p', 'sy-p', syEsc(SYT.setupP)),
    syField(SYT.tokenL, 'sy-tok', 'password', 'github_pat_…'), syField(SYT.repoL, 'sy-repo', 'text', '', SY_DEFREPO), syErrBox());
  const go = syBtn(SYT.connect, 'btn btn-go', async () => {
    const token = document.getElementById('sy-tok').value.trim(); if (!/^[A-Za-z0-9_]{20,255}$/.test(token)) { syErr('token'); return; }
    go.disabled = true; go.textContent = SYT.checking; syErr('');
    try {
      const repo = await syCheckRepo(token, document.getElementById('sy-repo').value), meta = await syReadMeta(token, repo); Object.assign(syPend, { token, repo, meta });
      if (meta) { syAskCode(); return; }
      syPend.code = syNewCode(); syNewCodeScreen();
    } catch (e) { console.warn('sync setup', e); go.disabled = false; go.textContent = SYT.connect; syErr(e instanceof SyErr ? e.kind : 'other'); }
  }, 'sy-connect');
  c.append(go, syBtn(SYT.cancel, GHOST, syScreen)); show(c, 'setup');
}
function syWordsEl(code) { const o = h('ol', 'sy-words'); code.split(' ').forEach(w => o.append(h('li', '', syEsc(w)))); return o; }
/* the QR code holds only "MOONLIGHT:" + the 8 words in capitals (no token); shown only on request, hides itself after 2 minutes */
const SY_QR = 'MOONLIGHT:', SY_QR_MS = 120000; let syQrT = 0, syCam = null;
function syQrPart(code) {
  if (!window.MMQR) return []; const box = h('div', 'sy-qr'); box.hidden = true; box.append(h('div', 'sy-qrimg'), h('p', 'sy-p', `<em>${syEsc(SYT.qrHint)}</em>`));
  const b = syBtn(SYT.qrShow, GHOST, () => {
    clearTimeout(syQrT); if (!box.hidden) { box.hidden = true; box.firstChild.innerHTML = ''; b.textContent = SYT.qrShow; return; }
    try { box.firstChild.innerHTML = MMQR.svg(SY_QR + code.toUpperCase(), 'M'); } catch (e) { console.warn('qr', e); return; }
    box.hidden = false; b.textContent = SYT.qrHide; box.scrollIntoView({ block: 'nearest' });
    syQrT = setTimeout(() => { if (document.contains(box)) { box.hidden = true; box.firstChild.innerHTML = ''; b.textContent = SYT.qrShow; } }, SY_QR_MS);
  }, 'sy-qr-btn');
  return [b, box];
}
function syQrCode(t) { const s = String(t || '').trim(); return s.slice(0, SY_QR.length).toUpperCase() === SY_QR ? syParseCode(s.slice(SY_QR.length)) : null; }
function syNewCodeScreen() {
  const c = syCard(), p = syPend; c.append(h('h2', 'sy-h', syEsc(SYT.code)), h('p', 'sy-p', syEsc(SYT.newCodeP)), syWordsEl(p.code), syErrBox());
  const [qb, qbox] = syQrPart(p.code);
  const go = syBtn(SYT.saved, 'btn btn-go', async () => {
    go.disabled = true;
    try {
      p.key = await syDerive(p.code);
      const content = syB64(syEnc(JSON.stringify({ app: SY_APP, sync: 1, created: new Date().toISOString(), check: await syCheckBlob(p.key) }, null, 1)));
      try { await gh(p.token, 'PUT', `/repos/${p.repo}/contents/${SY_META}`, { message: 'Moonlight Mart sync', content }); }
      catch (x) { /* another device created it meanwhile: enter its code */ const m = await syReadMeta(p.token, p.repo).catch(() => null); if (!m) throw x; p.meta = m; syAskCode(); return; }
      await syJoin();
    } catch (x) { console.warn('sync setup', x); go.disabled = false; syErr(x instanceof SyErr ? x.kind : 'other'); }
  }, 'sy-saved');
  c.append(go); if (qb) c.append(qb, qbox); c.append(syBtn(SYT.cancel, GHOST, syScreen)); show(c, 'setup');
}
function syAskCode() {
  const c = syCard(); c.append(h('h2', 'sy-h', syEsc(SYT.code)), h('p', 'sy-p', syEsc(SYT.askCodeP)), h('span', 'sy-lbl', syEsc(SYT.codeL)));
  const ta = h('textarea', 'sy-in sy-codein'); ta.id = 'sy-code'; ta.rows = 3; ta.spellcheck = false; ta.setAttribute('autocapitalize', 'off'); ta.autocomplete = 'off'; c.append(ta, syErrBox());
  const go = syBtn(SYT.ok, 'btn btn-go', () => syCodeGo(go), 'sy-codego'); c.append(go);
  if (window.MMQR) c.append(syBtn(SYT.qrScan, GHOST, syScan, 'sy-scan')); c.append(syBtn(SYT.cancel, GHOST, syScreen)); show(c, 'setup');
}
async function syCodeGo(b) {
  const code = syParseCode(document.getElementById('sy-code').value); if (!code) { syErr(0, SYT.codeBad); return; }
  b.disabled = true;
  try {
    const k = await syDerive(code); if (!await syCheckOk(k, syPend.meta.check)) { syErr(0, SYT.codeBad); b.disabled = false; return; }
    Object.assign(syPend, { code, key: k }); await syJoin();
  } catch (x) { b.disabled = false; syErr(x instanceof SyErr ? x.kind : 'other'); }
}
function syNewBranch() { return SY_PFX + [...crypto.getRandomValues(new Uint8Array(6))].map(b => b.toString(16).padStart(2, '0')).join(''); }
/* real progress only (rendering creates empty lesson records; the theme alone is not progress) */
const syHasProgress = () => { const x = sySets(); return Object.keys(syCount()).length > 0 || x.coll.length > 0 || x.fixed.length > 0 || Object.keys(x.sh).length > 0 || [...syItems().keys()].some(k => k !== 'o:theme'); };
/* another device: progress here and the others have some too → ask; otherwise take theirs */
async function syJoin() {
  const p = syPend; let others = 0;
  try { const refs = await gh(p.token, 'GET', `/repos/${p.repo}/git/matching-refs/heads/${SY_PFX}`); others = (Array.isArray(refs) ? refs : []).filter(r => SY_RE_BR.test(String(r.ref || '').replace(/^refs\/heads\//, ''))).length; }
  catch (e) { if (!(e instanceof SyErr && e.kind === 'notfound')) throw e; }
  if (!others) { syStart('add'); return; }
  if (syHasProgress()) {
    const c = syCard(); c.append(h('h2', 'sy-h', syEsc(SYT.joinT)), h('p', 'sy-p', syEsc(SYT.joinP(MM.U.won(MM.S.won)))));
    c.append(syBtn(SYT.joinAdopt, 'btn btn-go', () => syStart('adopt'), 'sy-adopt'), h('p', 'sy-p sy-small', `<em>${syEsc(SYT.joinAdoptS)}</em>`),
      syBtn(SYT.joinAdd, GHOST, () => syStart('add'), 'sy-add'), h('p', 'sy-p sy-small', `<em>${syEsc(SYT.joinAddS)}</em>`), syBtn(SYT.cancel, GHOST, syScreen));
    show(c, 'setup'); return;
  }
  syStart('adopt');
}
async function syStart(mode) {
  const p = syPend;
  if (MM.savePending && MM.savePending()) MM.saveNow();
  SY = { repo: p.repo, branch: syNewBranch(), token: p.token, code: p.code, join: mode, joined: false, seen: {}, dev: {}, it: {}, lastSync: 0, lastAttempt: 0, lastError: null, skew: 0 };
  syKey = p.key; syTouch(true); syFp = syFingerprint(); sySave(); for (const k in syPend) delete syPend[k]; syScreen();
  const ok = await syNow(false); syRefresh(ok ? SYT.first : '');
}
function syShowCode() {
  if (!SY) return; const c = syCard(); c.append(h('h2', 'sy-h', syEsc(SYT.code)), h('p', 'sy-p', syEsc(SYT.showCodeP)), syWordsEl(SY.code));
  const [qb, qbox] = syQrPart(SY.code); if (qb) c.append(qb, qbox); c.append(syBtn(SYT.close, GHOST, syScreen)); show(c, 'code');
}
function syToken() {
  const c = syCard(); c.append(h('h2', 'sy-h', syEsc(SYT.tokenNew)), syField(SYT.tokenL, 'sy-tok', 'password', 'github_pat_…'), syErrBox());
  const go = syBtn(SYT.ok, 'btn btn-go', async () => {
    const token = document.getElementById('sy-tok').value.trim(); if (!SY || !/^[A-Za-z0-9_]{20,255}$/.test(token)) { syErr('token'); return; }
    go.disabled = true;
    try {
      const repo = await syCheckRepo(token, SY.repo), m = await syReadMeta(token, repo); if (!m || !await syCheckOk(syKey, m.check)) throw new SyErr('meta');
      SY.token = token; SY.lastError = null; SY.lastAttempt = 0; sySave(); syScreen(SYT.tokenOk); syNow(false);
    } catch (x) { go.disabled = false; syErr(x instanceof SyErr ? x.kind : 'other'); }
  });
  c.append(go, syBtn(SYT.cancel, GHOST, syScreen)); show(c, 'setup');
}
function syOffAsk() {
  const c = syCard(); c.append(h('h2', 'sy-h', syEsc(SYT.offT)), h('p', 'sy-p', syEsc(SYT.offP)));
  c.append(syBtn(SYT.offYes, 'btn btn-go danger', () => { clearTimeout(sySoonT); SY = null; syKey = null; sySave(); syScreen(SYT.offDone); }, 'sy-offyes'), syBtn(SYT.cancel, GHOST, syScreen)); show(c, 'setup');
}
/* camera: back camera, BarcodeDetector where it exists, otherwise the decoder in qr.js */
function syScanStop() { const c = syCam; syCam = null; if (!c) return; c.done = true; clearTimeout(c.t); if (c.stream) c.stream.getTracks().forEach(t => { try { t.stop(); } catch (e) { } }); }
async function syScan() {
  syScanStop(); const c = syCard(); c.append(h('h2', 'sy-h', syEsc(SYT.qrScan)), h('p', 'sy-p', syEsc(SYT.qrScanP)));
  const box = h('div', 'sy-cam'), video = h('video'); video.setAttribute('playsinline', ''); video.muted = true; video.autoplay = true; box.append(video, h('div', 'sy-frame'));
  const st = h('p', 'sy-p', syEsc(SYT.qrStarting)); st.id = 'sy-cst'; c.append(box, st);
  c.append(syBtn(SYT.cancel, GHOST, () => { syScanStop(); syAskCode(); }, 'sy-scanback')); show(c, 'scan');
  const cam = syCam = { done: false, t: 0, stream: null, det: null }, cv = document.createElement('canvas');
  const say = (s, bad) => { if (cam.done) return; st.textContent = s; st.classList.toggle('sy-bad', !!bad); };
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { say(SYT.qrNoCam, 1); return; }
  try { cam.stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } }); }
  catch (e) { console.warn('camera', e); say(e && (e.name === 'NotAllowedError' || e.name === 'SecurityError') ? SYT.qrDenied : SYT.qrNoCam, 1); return; }
  if (cam.done || !document.contains(video)) { cam.stream.getTracks().forEach(t => t.stop()); if (syCam === cam) syCam = null; return; }
  try { if ('BarcodeDetector' in window && (await BarcodeDetector.getSupportedFormats()).includes('qr_code')) cam.det = new BarcodeDetector({ formats: ['qr_code'] }); } catch (e) { cam.det = null; }
  video.srcObject = cam.stream; try { await video.play(); } catch (e) { } say(SYT.qrLooking);
  const tick = async () => {
    if (cam.done) return;
    if (!document.contains(video)) { if (syCam === cam) syScanStop(); else { cam.done = true; cam.stream.getTracks().forEach(t => t.stop()); } return; }
    if (video.readyState >= 2 && video.videoWidth) {
      try {
        const k = Math.min(1, 800 / Math.max(video.videoWidth, video.videoHeight)), w = cv.width = Math.round(video.videoWidth * k), hh = cv.height = Math.round(video.videoHeight * k), ctx = cv.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(video, 0, 0, w, hh); let t = null;
        if (cam.det) { try { const r = await cam.det.detect(cv); if (r && r[0] && r[0].rawValue) t = r[0].rawValue; } catch (e) { cam.det = null; } }
        if (t == null && window.MMQR) t = MMQR.decode(ctx.getImageData(0, 0, w, hh), 80);
        if (t != null && !cam.done) {
          const code = syQrCode(t);
          if (code) { syScanStop(); syAskCode(); document.getElementById('sy-code').value = code; syCodeGo(document.getElementById('sy-codego')); return; }
          say(SYT.qrWrong, 1);
        }
      } catch (e) { console.warn('qr', e); }
    }
    cam.t = setTimeout(tick, 150);
  };
  tick();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.getElementById('sysheet') && syView !== 'scan') syClose(); });

/* ---------- new version (APK only): once in 20 h ask GitHub for the latest release and offer the download ----------
   Public data, no token, independent of sync. The web (GitHub Pages) updates itself through the service worker. */
const UP_KEY = 'moonlight-mart-update', UP_API = 'https://api.github.com/repos/tvspk/moonlight-mart/releases/latest', UP_APK = 'https://github.com/tvspk/moonlight-mart/releases/latest/download/moonlight-mart.apk';
const UP_EVERY = 20 * 3600000, UP_LATER = 24 * 3600000, UP_OPENED = 2 * 3600000;
function upLoad() { try { const u = JSON.parse(localStorage.getItem(UP_KEY)); return syObj(u) ? u : {}; } catch (e) { return {}; } }
function upSave(u) { try { localStorage.setItem(UP_KEY, JSON.stringify(u)); } catch (e) { } }
function upMine() { try { return window.MMAndroid && MMAndroid.version ? String(MMAndroid.version() || '') : ''; } catch (e) { return ''; } }
const upNum = v => String(v || '').replace(/^v/, '').split('.').map(x => parseInt(x, 10) || 0);
function upNewer(a, b) { const x = upNum(a), y = upNum(b); for (let i = 0; i < Math.max(x.length, y.length); i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) > (y[i] || 0); return false; }
let upBusy = false;
async function upCheck() {
  const mine = upMine(); if (!mine || upBusy) return; const u = upLoad();
  if (Date.now() - (+u.at || 0) >= UP_EVERY && navigator.onLine !== false) {
    upBusy = true;
    try {
      const r = await fetch(UP_API, { cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer', headers: { Accept: 'application/vnd.github+json' } });
      if (r.ok) { const j = await r.json(); if (j && typeof j.tag_name === 'string' && /^v?\d{1,4}(\.\d{1,4}){0,3}$/.test(j.tag_name)) u.latest = j.tag_name.replace(/^v/, ''); }
      u.at = Date.now(); upSave(u);
    } catch (e) { }
    upBusy = false;
  }
  upShow();
}
function upShow() {
  const old = document.getElementById('upbar'); if (old) old.remove(); const u = upLoad(), mine = upMine();
  if (!mine || !u.latest || !upNewer(u.latest, mine) || Date.now() < (+u.later || 0)) return;
  const d = h('div', 'upbar'); d.id = 'upbar'; d.setAttribute('role', 'status');
  d.append(h('p', '', `<b>${syEsc(SYT.upNew(u.latest))}</b>`),
    syBtn(SYT.upGet, 'btn btn-sm', () => { const v = upLoad(); v.later = Date.now() + UP_OPENED; upSave(v); upShow(); try { MMAndroid.open(UP_APK); } catch (e) { } }, 'up-get'),
    syBtn(SYT.upLater, 'btn btn-sm', () => { const v = upLoad(); v.later = Date.now() + UP_LATER; upSave(v); upShow(); }, 'up-later'));
  document.body.appendChild(d);
}
if (ON) { document.addEventListener('visibilitychange', () => { if (!document.hidden) setTimeout(upCheck, 1000); }); }

{
  const st = document.createElement('style');
  st.textContent = `.sy-back{position:fixed;inset:0;z-index:60;background:rgba(10,14,28,.55);overflow-y:auto;padding:max(16px,env(safe-area-inset-top)) 12px max(16px,env(safe-area-inset-bottom))}
body.sy-open{overflow:hidden}
.sy-card{max-width:520px;margin:0 auto;background:var(--surface);color:var(--ink);border:1.5px solid var(--line);border-radius:14px;padding:16px 16px 18px;box-shadow:0 10px 40px rgba(0,0,0,.3)}
.sy-eyebrow{display:flex;justify-content:space-between;gap:8px;font:600 .78rem var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}
.sy-h{font:700 1.25rem var(--f-ui);margin:8px 0 6px}.sy-p{margin:8px 0;line-height:1.45}.sy-small{font-size:.88rem;color:var(--muted);margin-top:4px}.sy-bad{color:var(--bad)}
.sy-foot{margin:14px 0 0;font-size:.85rem;color:var(--muted)}
.sy-field{display:flex;flex-direction:column;gap:4px;margin:10px 0}.sy-lbl{font-size:.85rem;font-weight:600;color:var(--muted)}
.sy-in{width:100%;box-sizing:border-box;font:16px var(--f-mono);padding:10px;border:1.5px solid var(--line);border-radius:8px;background:var(--bg);color:var(--ink)}
.sy-words{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px 18px;margin:12px 0;padding-left:30px;font:600 1.1rem var(--f-mono)}
.sy-qr{margin:12px 0}.sy-qrimg{background:#fff;padding:12px;max-width:300px;margin:0 auto;border-radius:8px}.sy-qrimg svg{display:block;width:100%;height:auto}
.sy-cam{position:relative;max-width:420px;margin:10px auto;background:#000;aspect-ratio:4/3;overflow:hidden;border-radius:8px}.sy-cam video{width:100%;height:100%;object-fit:cover;display:block}
.sy-frame{position:absolute;inset:18%;border:3px solid var(--tag);pointer-events:none}
.sy-card .btn-go,.sy-card .btn-ghost{width:100%}
.sy-line{margin:10px 0 4px}.sy-line .sy-st{display:block;font-size:.88rem;color:var(--muted);margin-top:2px}.sy-line .sy-st.sy-bad{color:var(--bad)}
.upbar{position:fixed;left:8px;right:8px;bottom:max(8px,env(safe-area-inset-bottom));z-index:55;display:flex;flex-wrap:wrap;gap:8px;align-items:center;max-width:540px;margin:0 auto;background:var(--night);color:#fff;border-radius:12px;padding:10px 12px;box-shadow:0 6px 24px rgba(0,0,0,.35)}
.upbar p{flex:1 1 100%;margin:0}.upbar .btn{flex:1}`;
  document.head.append(st);
}

/* ---------- what the rest of the game uses ---------- */
MM.sync = {
  avail: ON,
  boot() { syBoot(); setTimeout(upCheck, 4000); },
  changed: syChanged,            // core.js saveNow(): after every write of MM.S
  leave: syLeave,                // Android onPause
  reset: syReset,                // transfer code loaded / progress erased: true when sync was on (now off here)
  open: () => syScreen(),
  close: () => syClose(),   // Android Back
  /* a line for Extras: link + status */
  line() {
    return `<p class="sy-line"><button type="button" class="link" data-act="sync">${syEsc(SYT.link)}${syBad() ? ' ⚠' : ''}</button><span class="sy-st${syBad() ? ' sy-bad' : ''}" id="sy-extras">${syEsc(syStatus())}</span></p>`;
  },
  on: () => !!SY,
  /* for the tests (testy/test_sync.py) */
  now: (manual, quick) => syNow(manual, quick), upCheck, qrCode: syQrCode,
  get SY() { return SY; }, get busy() { return syBusy; }, get again() { return syAgain; }, get cam() { return syCam; },
};
})();
