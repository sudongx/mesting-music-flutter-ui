"""Freeze/check the documentation-only handoff without changing prior receipts."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import subprocess
import sys

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
DOC = 'HANDOFF-SESSION-2026-11-08-v1.0.77-79-TO-NEW-CHAT.md'
before = json.loads((OUT / 'before.json').read_text('utf8'))


def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT).decode('utf8')


def unchanged(row):
    path = ROOT / row['path']
    return path.is_file() and sha(path) == row['sha256']


def parallel_check(rows, label):
    with ThreadPoolExecutor(max_workers=5) as pool:
        assert all(pool.map(unchanged, rows)), label


assert git('branch', '--show-current').strip() == before['branch'] == 'beta'
assert git('rev-parse', 'HEAD').strip() == before['head']
assert not git('diff', '--cached', '--name-only')
for key, path in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                  ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT / path) == before[key], key
assert sha(ROOT / before['predecessorReceipt']) == before['predecessorReceiptSha256']
assert not any((ROOT / path).exists() for path in before['authorizedRetiredPaths'])
assert (ROOT / 'AGENTS.md').read_bytes().endswith((OUT / 'AGENTS-before.bin').read_bytes())
assert sha(OUT / 'AGENTS-before.bin') == next(row['sha256'] for row in before['currentFiles'] if row['path'] == 'AGENTS.md')
assert 'version: 1.0.79+100' in (ROOT / 'pubspec.yaml').read_text('utf8')
mode = sys.argv[1] if len(sys.argv) > 1 else 'check'
selected = {path for path in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0')
            if path and not path.startswith('android/build/') and (ROOT / path).is_file()}

if mode == 'freeze':
    assert not (OUT / 'after.json').exists(), 'Never rewrite a handoff receipt'
    parallel_check([row for row in before['currentFiles'] if row['path'] != 'AGENTS.md'], 'Only AGENTS prefix may change')
    parallel_check(before['productFiles'], 'Product/build input drift')
    parallel_check(before['frozenArtifacts'], 'Frozen artifact drift')
    assert selected == {row['path'] for row in before['currentFiles']} | {DOC}
    current = [row if row['path'] != 'AGENTS.md' else {
        'path': 'AGENTS.md', 'bytes': (ROOT / 'AGENTS.md').stat().st_size,
        'sha256': sha(ROOT / 'AGENTS.md')} for row in before['currentFiles']]
    current.append({'path': DOC, 'bytes': (ROOT / DOC).stat().st_size, 'sha256': sha(ROOT / DOC)})
    after = {**before, 'createdAtUtc': datetime.now(timezone.utc).isoformat(),
        'currentFiles': current, 'handoffDocument': DOC, 'handoffDocumentSha256': sha(ROOT / DOC),
        'documentationOnly': True, 'onlyExistingFileChanged': 'AGENTS.md',
        'newPublicFiles': [DOC], 'productOrTestFilesChanged': False,
        'oldDeliveriesOrReceiptsRewritten': False, 'retestedOrRebuiltForHandoff': False,
        'phoneAdbAccountOrNasAccessForHandoff': False,
        'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
        'pendingRuntimeTasks': False,
        'newChatInitialScope': 'Read this handoff and run this check read-only; report and wait',
    }
    (OUT / 'after.json').write_text(json.dumps(after, ensure_ascii=False, indent=2) + '\n', 'utf8')
    print(json.dumps({'frozen': True, 'version': '1.0.79', 'currentFiles': len(current),
        'productInputs': len(after['productFiles']), 'frozenArtifacts': len(after['frozenArtifacts'])}))
elif mode == 'check':
    after = json.loads((OUT / 'after.json').read_text('utf8'))
    assert after['predecessorReceiptSha256'] == before['predecessorReceiptSha256']
    for key in ['currentFiles', 'productFiles', 'frozenArtifacts']:
        parallel_check(after[key], key)
    assert selected == {row['path'] for row in after['currentFiles']}
    assert sha(ROOT / DOC) == after['handoffDocumentSha256']
    print(json.dumps({'verified': True, 'version': '1.0.79', 'code': 100,
        'currentFiles': len(after['currentFiles']), 'productInputs': len(after['productFiles']),
        'frozenArtifacts': len(after['frozenArtifacts']), 'retiredPathsPreserved': len(after['authorizedRetiredPaths']),
        'handoffDocument': DOC, 'handoffDocumentSha256': after['handoffDocumentSha256'],
        'mainHeadIndexLockSigningAndPriorReceiptsUnchanged': True,
        'documentationOnly': True, 'helperVersion': '0.2.3',
        'helperPushedCommit': '5d013276e51d0c07c6c9fa1a96b3b74bf8321baa',
        'nas023DeploymentVerified': False, 'realBusinessAcceptanceVerified': False,
        'pendingRuntimeTasks': False}, indent=2))
else:
    raise ValueError('Unknown mode')
