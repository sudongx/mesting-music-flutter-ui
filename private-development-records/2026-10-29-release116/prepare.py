from pathlib import Path
import hashlib
import json
import subprocess

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-10-29-release116'
assert out.is_dir()
def digest(p):
    with p.open('rb') as f:
        return hashlib.file_digest(f, 'sha256').hexdigest()
guard = out / 'frozen-before.json'
assert not guard.exists(), 'Preserve the original before-state'
paths = sorted(set((root / 'release').glob('*')) | set(root.glob('Mesting-Music-v*-source.zip')) | {root / 'pubspec.lock'})
records = [{'path': p.relative_to(root).as_posix(), 'bytes': p.stat().st_size, 'sha256': digest(p)} for p in paths if p.is_file()]
guard.write_text(json.dumps({'files': records, 'branch': subprocess.check_output(['git','branch','--show-current'], cwd=root, text=True).strip(), 'head': subprocess.check_output(['git','rev-parse','HEAD'], cwd=root, text=True).strip(), 'index': subprocess.check_output(['git','diff','--cached','--raw'], cwd=root, text=True), 'status': subprocess.check_output(['git','status','--porcelain=v1','-uall'], cwd=root, text=True)}, ensure_ascii=False, indent=2), encoding='utf-8')
prior = root / '.codex-artifacts/2026-10-29-release115'
for name in ['build-release.ps1','sign_delivery.py','verify_delivery.py','freeze_source.py','verify_local_notes.dart']:
    content = (prior / name).read_text(encoding='utf-8-sig')
    content = content.replace('2026-10-29-release115','2026-10-29-release116').replace('1.0.15','1.0.16').replace('MESTING115_','MESTING116_')
    for old,new in [("-VersionCode 36","-VersionCode 37"),("versionCode='36'","versionCode='37'"),("notes['versionCode'] == 36","notes['versionCode'] == 37"),("'androidVersionCode': 36","'androidVersionCode': 37"),("'versionCode': 36","'versionCode': 37"),("versionCode: 36","versionCode: 37"),("'code': 36","'code': 37")]:
        content = content.replace(old,new)
    target = out / name
    assert not target.exists()
    target.write_text(content, encoding='utf-8')
print(json.dumps({'preservedFiles':len(records),'releaseScriptsPrepared':True}))
