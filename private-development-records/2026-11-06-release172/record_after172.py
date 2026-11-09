"""Freeze local-delivery state without modifying any prior release receipt."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
import subprocess

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()
def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=root)
def record(relative):
    path = root/relative
    return {'path': relative, 'bytes': path.stat().st_size, 'sha256': sha(path)}
def issue(row):
    path = root/row['path']
    return row['path'] if (not path.is_file() or sha(path) != row['sha256'] or
                           'bytes' in row and path.stat().st_size != row['bytes']) else None

before = json.loads((out/'protected-state.json').read_text('utf-8'))
assert git('branch', '--show-current').decode().strip() == before['branch'] == 'beta'
assert git('rev-parse', 'HEAD').decode().strip() == before['head']
assert not git('diff', '--cached', '--name-only', '-z')
for key, name in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                  ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(root/name) == before[key], key
inputs = json.loads((out/'build-input-final.json').read_text('utf-8'))['files']
with ThreadPoolExecutor(max_workers=6) as pool:
    frozen_issues = [v for v in pool.map(issue, before['frozenArtifacts']) if v]
    input_issues = [v for v in pool.map(issue, inputs) if v]
assert not frozen_issues, frozen_issues
assert not input_issues, input_issues
allowed = set(json.loads((out/'allowed-existing-changes.json').read_text('utf-8')))
changed = []
for row in before['currentFiles']:
    assert (root/row['path']).is_file(), row['path']
    if sha(root/row['path']) != row['sha256']:
        changed.append(row['path'])
assert set(changed) == allowed, sorted(set(changed) ^ allowed)
apk = json.loads((root/'release/Mesting-Music-v1.0.72-verification.json').read_text('utf-8'))
source = json.loads((root/'release/Mesting-Music-v1.0.72-source-verification.json').read_text('utf-8'))
assert sha(root/'release/Mesting-Music-v1.0.72.apk') == apk['sha256']
assert sha(root/source['sourceZipName']) == source['sourceZipSha256']
(root/'release/Mesting-Music-v1.0.72-SHA256.txt').write_text(
    f"{apk['sha256']}  Mesting-Music-v1.0.72.apk\n{source['sourceZipSha256']}  {source['sourceZipName']}\n", 'utf-8')
selected = sorted(set(git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0')))
current = [record(p) for p in selected if p and (root/p).is_file() and not p.startswith('android/build/')]
frozen = before['frozenArtifacts'] + [record('release/Mesting-Music-v1.0.72.apk'), record(source['sourceZipName'])]
host = json.loads((out/'host-check-summary.json').read_text('utf-8'))
assert host['passed'] and host['analysisIssues'] == 0
assert len(frozen) == 84
after = {
    'version': '1.0.72', 'androidVersionCode': 93, 'releaseBuild': True, 'localDelivery': True,
    **{key: before[key] for key in ('head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256')},
    'indexEmpty': True, 'originalFrozenArtifactsChecked': len(before['frozenArtifacts']),
    'originalFrozenArtifactIssues': frozen_issues, 'frozenArtifacts': frozen, 'frozenArtifactCount': len(frozen),
    'productFiles': inputs, 'productInputsChecked': len(inputs), 'differencesFrom72BuildInputs': input_issues,
    'currentFiles': current, 'currentFileCount': len(current), 'existingChangedFiles': changed,
    'addedFiles': sorted({r['path'] for r in current} - {r['path'] for r in before['currentFiles']}),
    'allPreexistingPathsPreserved': True, 'historicalDirtyWorktreeRetained': True,
    'hostChecks': host, 'apkSha256': apk['sha256'], 'sourceZipSha256': source['sourceZipSha256'],
    'sourceZipFiles': source['sourceFileCount'], 'sourceCrcAndAllEntriesVerified': True,
    'prior71BasicPlaybackUserAccepted': True, 'prior71ActualVipShortPreviewUserConfirmed': True,
    'officialSameAccount29DaysUserReported': True,
    'installed72': False, 'physical72VipCompletePlaybackAccepted': False,
    'code301RealResponseAbsent': True, 'actual301RootCauseConfirmed': False,
    'mediaZeroDiagnosticDoesNotReachNativeDecoder': True,
    'accountSigningCapability': 'Default off; explicitly opted-in custom HTTPS NAS; exact track_v2 Cookie only',
    'helperCookieContractProvided': True, 'currentHelperDeploymentCookieCompatibilityVerified': False,
    'pendingCodingBuildInstallUploadTasks': False,
    'phoneAdbRealAccountNasOrSignerAccessThisRelease': False,
    'privateSignerTokenAccess': False, 'helperDeploymentModified': False,
    'prior66QrAccountColdRestoreAndNeteaseAutoSourceAccepted': True,
    'phoneLoginRemoved': True, 'oldLogsReplayed': False, 'old51RecycledApksRestored': False,
    'missing63SourceZipRecreated': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'receiverInstruction': 'Read AGENTS and current72 handoff/docs; verify receipt read-only and await user acceptance. Current user feedback supersedes old71 uninstalled/basic pending records. No automatic device/account/NAS/Git cleanup/publication.',
}
target = out/'after.json'
assert not target.exists()
target.write_text(json.dumps(after, ensure_ascii=False, indent=2)+'\n', 'utf-8')
print(json.dumps({'version': after['version'], 'code': 93, 'oldFrozenVerified': len(before['frozenArtifacts']),
                  'frozenNow': len(frozen), 'productInputs': len(inputs), 'currentFiles': len(current),
                  'sourceFiles': source['sourceFileCount'], 'branch': before['branch'], 'indexEmpty': True,
                  'originalSigningAndLockIntact': True, 'physical72Acceptance': False}, indent=2))
