"""Read-only verification of this investigation's pre-existing APK/ZIP set."""
from pathlib import Path
import hashlib
import json

out = Path(__file__).resolve().parent
before = json.loads((out / 'frozen-before.json').read_text())
changed = []
for row in before:
    path = Path(row['path'])
    if not path.is_file():
        changed.append({'path': str(path), 'reason': 'missing'})
        continue
    with path.open('rb') as stream:
        digest = hashlib.file_digest(stream, 'sha256').hexdigest()
    if path.stat().st_size != row['bytes'] or digest != row['sha256']:
        changed.append({'path': str(path), 'reason': 'bytes_or_digest'})
result = {'frozenFiles': len(before), 'changed': changed, 'allUnchanged': not changed}
(out / 'frozen-after.json').write_text(json.dumps(result, indent=2))
print(json.dumps(result), flush=True)
assert not changed
