from pathlib import Path
import json,re
root=Path('D:/AnLi')
out=root/'.codex-artifacts/2026-11-03-release147'
prior=root/'.codex-artifacts/2026-11-03-release146'
for name in ['sign_and_verify.py','verify_formal_payload.py','verify_local_notes.dart',
             'freeze_source.py','read_compiler_definitions.ps1','verify_preservation.py']:
    text=(prior/name).read_text('utf-8-sig')
    text=text.replace('1.0.46+67','1.0.47+68').replace('v1.0.46','v1.0.47').replace("'1.0.46'","'1.0.47'")
    text=text.replace('release146','release147').replace('release_146_pending','release_147_pending')
    text=re.sub(r'\b67\b','68',text)
    if name in ['verify_preservation.py','verify_formal_payload.py']:
        text=re.sub(r'\b82\b','84',text)
    if name=='freeze_source.py':
        text=text.replace("assert checks['analysisPassed']", "assert checks['analysisPassed']")
        text=text.replace("required={'pubspec.yaml'", "required={'lib/core/performance/background_json.dart','lib/features/library/data/favorite_track_window.dart','lib/features/music_platform/data/kugou_favorite_index.dart','test/release_147_collection_ui_test.dart','test/release_147_collection_window_test.dart','docs/LONG-LISTS-2026-11-03-v1.0.47.md','pubspec.yaml'")
    (out/name).write_text(text,'utf-8')
native=json.loads((prior/'native-background-verification.json').read_text('utf-8'))
native['runThisRelease']=False
native['inheritedFrom']='1.0.46 unchanged R4 source inputs; rehashed for 1.0.47'
(out/'native-background-verification.json').write_text(json.dumps(native,indent=2)+'\n','utf-8')
print('Prepared new-version verification scripts; no frozen output overwritten.')
