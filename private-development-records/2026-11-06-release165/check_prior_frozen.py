"""Hash only the 68 specifically protected baseline artifacts, without edits."""
import hashlib
import json
from pathlib import Path

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
baseline = json.loads((out / 'baseline.json').read_text('utf-8'))
issues = []
for row in baseline['frozenArtifacts']:
    path = root / row['path']
    if not path.is_file():
        issues.append({'path': row['path'], 'issue': 'missing'})
        continue
    with path.open('rb') as stream:
        digest = hashlib.file_digest(stream, 'sha256').hexdigest()
    if digest != row['sha256'] or path.stat().st_size != row['bytes']:
        issues.append({'path': row['path'], 'issue': 'changed'})
record = {'checked': len(baseline['frozenArtifacts']), 'issues': issues}
(out / 'prior-frozen-proof.json').write_text(json.dumps(record, indent=2), 'utf-8')
assert not issues, issues
print(record)
