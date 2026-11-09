"""Track authorized source changes against the accepted74 handoff.

Deletion of reviewed old-account code is allowed; historical deliveries,
receipts, signing, dependency lock and Git index remain immutable.
"""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import subprocess
import sys

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
BASE = ROOT / '.codex-artifacts/2026-11-07-session174-handoff/after.json'
base = json.loads(BASE.read_text('utf8'))

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT).decode('utf8').strip()

def issue(row):
    path = ROOT / row['path']
    return row['path'] if not path.is_file() or sha(path) != row['sha256'] else None

assert git('branch', '--show-current') == base['branch'] == 'beta'
assert git('rev-parse', 'HEAD') == base['head']
assert not git('diff', '--cached', '--name-only')
for key, relative in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'), ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT / relative) == base[key], key
with ThreadPoolExecutor(max_workers=6) as pool:
    frozen_issues = [p for p in pool.map(issue, base['frozenArtifacts']) if p]
    changed = [p for p in pool.map(issue, base['currentFiles']) if p]
assert not frozen_issues, frozen_issues
receipt = {
    'createdAtUtc': datetime.now(timezone.utc).isoformat(),
    'head': base['head'], 'branch': base['branch'],
    'baselineReceiptSha256': sha(BASE),
    'frozenArtifactsVerified': len(base['frozenArtifacts']),
    'headIndexLockAndSigningUnchanged': True,
    'changedExistingPaths': changed,
    'missingExistingPaths': [p for p in changed if not (ROOT / p).is_file()],
}
if sys.argv[1] == 'before':
    assert not changed, changed
    assert not (OUT / 'before.json').exists()
    receipt.update({k: base[k] for k in ['currentFiles', 'productFiles', 'frozenArtifacts']})
target = OUT / (sys.argv[1] + '.json')
target.write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', 'utf8')
print(json.dumps({k: v for k, v in receipt.items() if k not in ['currentFiles', 'productFiles', 'frozenArtifacts']}, ensure_ascii=False, indent=2))
