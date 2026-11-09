"""Freeze the current Git-selected source files; exclude local secrets/cache."""
from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

ROOT=Path('D:/AnLi')
OUT=ROOT/'.codex-artifacts/2026-10-28-release107'
target=ROOT/'Mesting-Music-v1.0.7-source.zip'
assert not target.exists(), 'Never overwrite a frozen source delivery'
paths=subprocess.check_output(['git','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode('utf-8').split('\0')
paths=sorted(set(p for p in paths if p and p!='Mesting-Music-v1.0.7-source.zip'))
files=[]
for rel in paths:
    file=ROOT/rel
    assert file.is_file(),f'Missing tracked source: {rel}'
    parts=Path(rel).parts
    assert not any(p.lower() in {'.git','.codex-artifacts','build','.dart_tool','.gradle'} for p in parts)
    assert file.suffix.lower() not in {'.keystore','.jks','.apk'},rel
    assert file.name.lower() not in {'key.properties','local.properties','.env'},rel
    files.append((rel,file))
manifest=[]
with zipfile.ZipFile(target,'x',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as archive:
    for rel,file in files:
        data=file.read_bytes()
        archive.writestr(rel,data)
        manifest.append({'path':rel,'size':len(data),'sha256':hashlib.sha256(data).hexdigest()})
    archive.writestr('SOURCE-SNAPSHOT.json',json.dumps({'version':'1.0.7','versionCode':28,
        'baseCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip(),
        'status':'working_source_snapshot_not_a_git_release','files':manifest},ensure_ascii=False,indent=2))
with zipfile.ZipFile(target) as archive:
    assert archive.testzip() is None
    for item in manifest:
        assert hashlib.sha256(archive.read(item['path'])).hexdigest()==item['sha256']
result={'sourceZip':str(target),'size':target.stat().st_size,
    'sha256':hashlib.sha256(target.read_bytes()).hexdigest().upper(),'files':len(files)}
(OUT/'source-verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(result,ensure_ascii=False,indent=2))
