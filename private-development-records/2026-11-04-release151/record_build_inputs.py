"""Bind the actual compile to all Git-selected product/build inputs."""
from pathlib import Path
from datetime import datetime,timezone
import hashlib,json,subprocess
ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-11-04-release151'
target=OUT/'build-input-final.json'
assert not target.exists()
selected=subprocess.check_output(['git','--no-optional-locks','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode().split('\0')
inputs=[]
for relative in sorted(set(selected)):
    path=ROOT/relative
    if relative and path.is_file() and (relative.startswith(('lib/','android/','assets/','third_party/','tool/')) or relative in ['pubspec.yaml','pubspec.lock']):
        with path.open('rb') as stream: digest=hashlib.file_digest(stream,'sha256').hexdigest()
        inputs.append({'path':relative,'sha256':digest})
target.write_text(json.dumps({'startedAtUtc':datetime.now(timezone.utc).isoformat(),'files':inputs},indent=2)+'\n','utf-8')
print({'productAndBuildInputs':len(inputs)})
