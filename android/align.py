"""Adds classes.dex to the APK made by aapt2 and aligns every stored entry to 4 bytes (zipalign without the SDK).
Stored (uncompressed): resources.arsc (Android 11+ refuses a compressed one), .png, .ogg/.mp3 (seeking), and whatever aapt2 stored.
Usage: python3 -I android/align.py base.apk classes.dex out.apk   (from tvspk/gorsaf apk/align.py)"""
import struct, sys, zipfile
src, dex, dst = sys.argv[1:4]
zin = zipfile.ZipFile(src)
items = [(i, zin.read(i.filename)) for i in zin.infolist()] + [(None, open(dex, 'rb').read())]
with zipfile.ZipFile(dst, 'w') as zout:
    for info, data in items:
        name = info.filename if info else 'classes.dex'
        stored = name == 'resources.arsc' or name.endswith(('.png', '.ogg', '.mp3')) or (info is not None and info.compress_type == zipfile.ZIP_STORED)
        zi = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
        zi.compress_type = zipfile.ZIP_STORED if stored else zipfile.ZIP_DEFLATED
        zi.external_attr = 0o644 << 16
        if stored:
            off = zout.fp.tell() + 30 + len(name.encode())
            zi.extra = b'\x00' * ((-off) % 4)
        zout.writestr(zi, data)
z = zipfile.ZipFile(dst)
with open(dst, 'rb') as f:
    for i in z.infolist():
        if i.compress_type == zipfile.ZIP_STORED:
            f.seek(i.header_offset); h = f.read(30); n, e = struct.unpack('<HH', h[26:30]); d = i.header_offset + 30 + n + e
            assert d % 4 == 0, (i.filename, d)
print('aligned', len(z.infolist()), 'entries')
