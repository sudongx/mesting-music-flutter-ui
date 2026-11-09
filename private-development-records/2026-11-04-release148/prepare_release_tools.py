from pathlib import Path
import re
ROOT=Path('D:/AnLi')
OLD=ROOT/'.codex-artifacts/2026-11-03-release147'
OUT=ROOT/'.codex-artifacts/2026-11-04-release148'
for name in ['sign_and_verify.py','verify_formal_payload.py','read_compiler_definitions.ps1','verify_local_notes.dart']:
    text=(OLD/name).read_text('utf-8-sig')
    text=text.replace('2026-11-03-release147','2026-11-04-release148')
    text=text.replace('1.0.47','1.0.48').replace('1.0.46 notes','1.0.48 notes')
    text=text.replace('release_147_pending','release_148_pending').replace('MESTING142_KEYSTORE_PASSWORD','MESTING148_KEYSTORE_PASSWORD')
    text=re.sub(r'\b68\b','69',text)
    if name=='verify_local_notes.dart': text=text.replace('DateTime.utc(2026, 11, 3)','DateTime.utc(2026, 11, 4)')
    if name=='sign_and_verify.py':
        text=text.replace("b'If-Range']", "b'If-Range', b'artist-navigation-compact', b'favorite-keyboard-composer', b'platform-play-all']")
    target=OUT/name
    assert not target.exists(), name
    target.write_text(text,'utf-8')
print('Prepared retained signing, payload, compiler and APK-notes verification tools for 1.0.48.')
