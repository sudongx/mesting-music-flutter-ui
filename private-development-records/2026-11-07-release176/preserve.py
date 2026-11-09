"""Preserve the accepted 75 delivery before the authorized 76 work.

Only this new evidence directory is writable here. Historical receipts,
deliveries, signing material, the dependency lock and Git index stay immutable.
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
BASE = ROOT / '.codex-artifacts/2026-11-07-release175/after.json'
base = json.loads(BASE.read_text('utf8'))

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT).decode('utf8').strip()

def changed(item):
    path = ROOT / item['path']
    return item['path'] if not path.is_file() or sha(path) != item['sha256'] else None

assert git('branch', '--show-current') == base['branch'] == 'beta'
assert git('rev-parse', 'HEAD') == base['head']
assert not git('diff', '--cached', '--name-only')
for key, relative in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
    ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT / relative) == base[key], key
with ThreadPoolExecutor(max_workers=6) as pool:
    frozen = list(filter(None, pool.map(changed, base['frozenArtifacts'])))
    changes = list(filter(None, pool.map(changed, base['currentFiles'])))
assert not frozen, frozen
mode = sys.argv[1]
receipt = {
    'createdAtUtc': datetime.now(timezone.utc).isoformat(),
    **{key: base[key] for key in ['head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256']},
    'baselineReceiptSha256': sha(BASE),
    'frozenArtifactsVerified': len(base['frozenArtifacts']),
    'changedExistingPaths': changes,
}
if mode == 'before':
    assert not changes, changes
    receipt.update({key: base[key] for key in ['currentFiles', 'productFiles', 'frozenArtifacts', 'authorizedRetiredPaths']})
    with (OUT / 'before.json').open('x', encoding='utf8') as stream:
        stream.write(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n')
else:
    assert mode == 'check'
    (OUT / 'protected-check.json').write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', 'utf8')
print(json.dumps({key: value for key, value in receipt.items() if key not in
    ['currentFiles', 'productFiles', 'frozenArtifacts', 'authorizedRetiredPaths']}, ensure_ascii=False, indent=2))
