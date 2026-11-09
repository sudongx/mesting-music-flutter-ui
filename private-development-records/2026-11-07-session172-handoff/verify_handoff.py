"""Read-only product verification; write separate handoff receipts only."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import hashlib
import json
import subprocess
import sys

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
release_receipt = root/'.codex-artifacts/2026-11-06-release172/after.json'
baseline = json.loads(release_receipt.read_text('utf-8'))
phase = sys.argv[1]
assert phase in ('before', 'after')
target = out/f'{phase}.json'
assert not target.exists(), 'Do not overwrite an existing handoff receipt'
def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()
def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=root)
def issue(row):
    path = root/row['path']
    return row['path'] if (not path.is_file() or sha(path) != row['sha256'] or
                           'bytes' in row and path.stat().st_size != row['bytes']) else None
def record(relative):
    path = root/relative
    return {'path': relative, 'bytes': path.stat().st_size, 'sha256': sha(path)}
assert git('branch', '--show-current').decode().strip() == baseline['branch'] == 'beta'
assert git('rev-parse', 'HEAD').decode().strip() == baseline['head']
assert not git('diff', '--cached', '--name-only', '-z')
for key, name in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                  ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(root/name) == baseline[key], key
with ThreadPoolExecutor(max_workers=6) as pool:
    frozen_issues = [v for v in pool.map(issue, baseline['frozenArtifacts']) if v]
    product_issues = [v for v in pool.map(issue, baseline['productFiles']) if v]
    current_issues = [v for v in pool.map(issue, baseline['currentFiles']) if v]
assert not frozen_issues, frozen_issues
assert not product_issues, product_issues
assert set(current_issues) == (set() if phase == 'before' else {'AGENTS.md'}), current_issues
if phase == 'after':
    old = json.loads((out/'before.json').read_text('utf-8'))
    assert sha(release_receipt) == old['release172ReceiptSha256']
    old_agents = (out/'AGENTS-before.bin').read_bytes()
    assert (root/'AGENTS.md').read_bytes().endswith(old_agents)
    assert (root/'HANDOFF-SESSION-2026-11-07-v1.0.71-72-TO-NEW-CHAT.md').is_file()
else:
    (out/'AGENTS-before.bin').write_bytes((root/'AGENTS.md').read_bytes())
selected = sorted(set(git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0')))
current = [record(p) for p in selected if p and (root/p).is_file() and not p.startswith('android/build/')]
old_paths = {r['path'] for r in baseline['currentFiles']}
assert old_paths.issubset({r['path'] for r in current})
allowed_added = {'HANDOFF-SESSION-2026-11-07-v1.0.71-72-TO-NEW-CHAT.md'}
added = {r['path'] for r in current}-old_paths
assert added == (set() if phase == 'before' else allowed_added), sorted(added)
receipt = {
    'createdAtUtc': datetime.now(timezone.utc).isoformat(), 'phase': phase,
    'version': '1.0.72', 'androidVersionCode': 93, 'handoffOnly': True,
    **{key: baseline[key] for key in ('head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256')},
    'indexEmpty': True, 'release172ReceiptSha256': sha(release_receipt),
    'frozenArtifacts': baseline['frozenArtifacts'], 'frozenArtifactCount': len(baseline['frozenArtifacts']),
    'frozenArtifactIssues': frozen_issues, 'productFiles': baseline['productFiles'],
    'productInputsChecked': len(baseline['productFiles']), 'productInputIssues': product_issues,
    'currentFiles': current, 'currentFileCount': len(current),
    'existingChangedFiles': current_issues, 'addedFiles': sorted(added),
    'allPreexistingPathsPreserved': True,
    'historicalDirtyWorktreeRetained': True, 'productRetestedOrRebuiltDuringHandoff': False,
    'release172FrozenSourceAndMetadataRewritten': False,
    'latestFeedbackStoredSeparately': 'latest-user-feedback.json',
    'helperPolicyEvidenceStoredSeparately': 'helper-cookie-policy-evidence.json',
    'pendingCodingBuildInstallUploadTasks': False,
    'phoneAdbAccountNasSignerNetworkOrDeploymentDuringHandoff': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'receiverInstruction': 'Read the session handoff and AGENTS, verify this receipt read-only, report completed/pending/boundaries, then wait. Do not automatically repair/deploy the helper, rebuild frozen artifacts, access devices/accounts/NAS, clean/sync Git, or publish.',
}
target.write_text(json.dumps(receipt, ensure_ascii=False, indent=2)+'\n', 'utf-8')
print(json.dumps({'phase': phase, 'frozen': len(baseline['frozenArtifacts']),
                  'productInputs': len(baseline['productFiles']), 'currentFiles': len(current),
                  'allIssuesEmptyExceptAuthorizedAGENTS': True, 'branch': baseline['branch'],
                  'indexEmpty': True, 'added': sorted(added)}, indent=2))
