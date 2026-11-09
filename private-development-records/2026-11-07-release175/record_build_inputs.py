"""Freeze exact product/build input hashes immediately before compiling."""
from pathlib import Path
from datetime import datetime,timezone
import hashlib,json,subprocess,sys
ROOT=Path('D:/AnLi');OUT=Path(__file__).resolve().parent
candidate=sys.argv[1] if len(sys.argv)>1 else 'candidate1'
assert candidate in ['candidate1','candidate2','candidate3','candidate4']
target=OUT/candidate/'build-input.json';assert not target.exists()
target.parent.mkdir(exist_ok=True)
selected=subprocess.check_output(['git','--no-optional-locks','ls-files','--cached','--others','--exclude-standard','-z'],cwd=ROOT).decode().split('\0')
inputs=[]
for relative in sorted(set(selected)):
 path=ROOT/relative
 if relative and not relative.startswith('android/build/') and path.is_file() and (relative.startswith(('lib/','android/','assets/','third_party/','tool/')) or relative in ['pubspec.yaml','pubspec.lock']):
  with path.open('rb') as stream:digest=hashlib.file_digest(stream,'sha256').hexdigest()
  inputs.append({'path':relative,'sha256':digest})
target.write_text(json.dumps({'startedAtUtc':datetime.now(timezone.utc).isoformat(),'files':inputs},indent=2)+'\n','utf-8')
print({'productAndBuildInputs':len(inputs)})
