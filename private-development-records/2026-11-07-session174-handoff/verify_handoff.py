"""Preserve frozen deliveries; check mode performs only local read-only work."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import subprocess
import sys

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
RELEASE = ROOT / '.codex-artifacts/2026-11-07-release174/after.json'
DOCUMENT = 'HANDOFF-SESSION-2026-11-07-v1.0.73-74-TO-NEW-CHAT.md'
phase = sys.argv[1]
assert phase in {'before', 'after', 'check'}
release = json.loads(RELEASE.read_text('utf8'))
baseline = json.loads((OUT / 'after.json').read_text('utf8')) if phase == 'check' else release

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT)

def issue(row):
    path = ROOT / row['path']
    return row['path'] if not path.is_file() or sha(path) != row['sha256'] or ('bytes' in row and path.stat().st_size != row['bytes']) else None

def record(relative):
    path = ROOT / relative
    return {'path': relative, 'bytes': path.stat().st_size, 'sha256': sha(path)}

assert git('branch', '--show-current').decode().strip() == baseline['branch'] == 'beta'
assert git('rev-parse', 'HEAD').decode().strip() == baseline['head']
assert not git('diff', '--cached', '--name-only', '-z')
for key, name in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'), ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT / name) == baseline[key], key
with ThreadPoolExecutor(max_workers=6) as pool:
    frozen_issues = [p for p in pool.map(issue, baseline['frozenArtifacts']) if p]
    product_issues = [p for p in pool.map(issue, baseline['productFiles']) if p]
    current_issues = [p for p in pool.map(issue, baseline['currentFiles']) if p]
assert not frozen_issues, frozen_issues
assert not product_issues, product_issues
assert set(current_issues) == ({'AGENTS.md'} if phase == 'after' else set()), current_issues
selected = sorted({p for p in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf8').split('\0') if p and not p.startswith('android/build/') and (ROOT / p).is_file()})
old_paths = {row['path'] for row in baseline['currentFiles']}
assert old_paths.issubset(selected)
added = sorted(set(selected) - old_paths)
assert added == ([DOCUMENT] if phase == 'after' else []), added
if phase == 'check':
    assert sha(RELEASE) == baseline['release174ReceiptSha256']
    assert (ROOT / 'AGENTS.md').read_bytes().endswith((OUT / 'AGENTS-before.bin').read_bytes())
    print(json.dumps({'readOnlyReceptionVerified': True, 'version': baseline['version'], 'frozenArtifacts': len(baseline['frozenArtifacts']), 'productInputs': len(baseline['productFiles']), 'currentFiles': len(selected), 'headIndexLockAndSigningUnchanged': True, 'nativeCrashAndRasterRegressionStillPending': True, 'waitingForUser': True}, ensure_ascii=False, indent=2))
    raise SystemExit(0)

target = OUT / f'{phase}.json'
assert not target.exists(), 'Never overwrite handoff receipts'
if phase == 'before':
    assert not (OUT / 'AGENTS-before.bin').exists()
    (OUT / 'AGENTS-before.bin').write_bytes((ROOT / 'AGENTS.md').read_bytes())
else:
    before = json.loads((OUT / 'before.json').read_text('utf8'))
    assert sha(RELEASE) == before['release174ReceiptSha256']
    assert (ROOT / 'AGENTS.md').read_bytes().endswith((OUT / 'AGENTS-before.bin').read_bytes())
with ThreadPoolExecutor(max_workers=6) as pool:
    current = list(pool.map(record, selected))
receipt = {
    'createdAtUtc': datetime.now(timezone.utc).isoformat(), 'phase': phase,
    'version': '1.0.74', 'androidVersionCode': 95, 'handoffOnly': True,
    **{key: release[key] for key in ['head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256']},
    'indexEmpty': True, 'historicalDirtyWorktreeRetained': True,
    'release174ReceiptSha256': sha(RELEASE),
    'frozenArtifacts': release['frozenArtifacts'], 'frozenArtifactCount': len(release['frozenArtifacts']), 'frozenArtifactIssues': [],
    'productFiles': release['productFiles'], 'productInputsChecked': len(release['productFiles']), 'productInputIssues': [],
    'currentFiles': current, 'currentFileCount': len(current), 'existingChangedFiles': current_issues, 'addedFiles': added,
    'allPreexistingPathsPreserved': True, 'previousAgentsSuffixPreserved': True,
    'productRetestedOrRebuiltDuringHandoff': False, 'frozenDeliveriesOrReleaseMetadataRewritten': False,
    'phoneAdbAccountNasSignerAccessDuringHandoff': False,
    'overallPerformanceObjectiveAccepted': False, 'continuousCrashFreeDeviceAcceptance': False,
    'oldMestingAccountSourceRemovalRequestedButNotImplemented': True, 'furtherProductFixesAwaitUserConfirmation': True,
    'pendingCodingBuildInstallSamplingExportUploadOrDeploymentTasks': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'receiverInstruction': 'Read the session handoff and AGENTS, verify this receipt read-only, report completed/pending/boundaries, then wait. Do not modify product or handoff, rerun tests/builds, use ADB/accounts/NAS, clean/sync Git, publish, or create another thread. New fixes require user confirmation.',
}
target.write_text(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n', 'utf8')
print(json.dumps({'phase': phase, 'frozen': len(release['frozenArtifacts']), 'productInputs': len(release['productFiles']), 'currentFiles': len(current), 'authorizedExistingChangesOnly': current_issues, 'addedFiles': added}, ensure_ascii=False, indent=2))
