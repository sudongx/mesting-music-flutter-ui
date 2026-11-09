from pathlib import Path
import json
import zipfile
import hashlib
import subprocess

root = Path('D:/AnLi')
src = root / '.codex-artifacts/2026-11-01-release130'
out = root / '.codex-artifacts/2026-11-01-release131'
files = sorted(set(json.loads((src/'beta-files.json').read_text(encoding='utf-8-sig')) + [
    'test/release_131_tab_input_test.dart', 'test/release_131_refresh_test.dart',
    'test/release_131_library_test.dart',
]))
(out/'beta-files.json').write_text(json.dumps(files,indent=2)+'\n',encoding='utf-8')
for name in ['build_release.ps1','sign_and_verify.py','freeze_source.py','verify_local_notes.dart','summarize.py']:
    text=(src/name).read_text(encoding='utf-8-sig')
    text=text.replace('1.0.29','PREVIOUS_VERSION').replace('1.0.30','1.0.31').replace('PREVIOUS_VERSION','1.0.30')
    text=text.replace('release130','release131').replace('MESTING130','MESTING131').replace('LocalV129','LocalV130')
    text=text.replace("'51'","'52'").replace('== 51','== 52').replace(': 51',': 52').replace('VersionCode 51','VersionCode 52')
    (out/name).write_text(text,encoding='utf-8')
with zipfile.ZipFile(root/'Mesting-Music-v1.0.30-source.zip') as z:
    prior=json.loads(z.read('SOURCE-SNAPSHOT.json'))
    previous={x['path']:x['sha256'] for x in prior['files']}
selected=subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=root).decode('utf-8').split('\0')
changed=[p for p in selected if p and (root/p).is_file() and
         hashlib.sha256((root/p).read_bytes()).hexdigest()!=previous.get(p)]
(out/'changes-from-v130.json').write_text(json.dumps(changed,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
dart=[p for p in changed if p.startswith(('lib/','test/')) and p.endswith('.dart')]
(out/'dart-changes.json').write_text(json.dumps(dart,indent=2)+'\n',encoding='utf-8')
print({'betaFiles':len(files),'changedDartFiles':len(dart)})
