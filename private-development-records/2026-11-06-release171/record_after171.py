"""Independently verify protected history and freeze this local delivery receipt."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()
def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT)
def record(relative):
    path = ROOT / relative
    return {'path': relative, 'bytes': path.stat().st_size, 'sha256': sha(path)}
def issue(row):
    path = ROOT / row['path']
    return row['path'] if (not path.is_file() or sha(path) != row['sha256'] or
                          'bytes' in row and path.stat().st_size != row['bytes']) else None

before = json.loads((OUT / 'protected-state.json').read_text('utf-8'))
assert git('branch', '--show-current').decode().strip() == before['branch'] == 'beta'
assert git('rev-parse', 'HEAD').decode().strip() == before['head']
assert not git('diff', '--cached', '--name-only', '-z')
for key, path in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                  ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT / path) == before[key], key
inputs = json.loads((OUT / 'build-input-final.json').read_text('utf-8'))['files']
with ThreadPoolExecutor(max_workers=6) as pool:
    frozen_issues = [value for value in pool.map(issue, before['frozenArtifacts']) if value]
    input_issues = [value for value in pool.map(issue, inputs) if value]
assert not frozen_issues, frozen_issues
assert not input_issues, input_issues
allowed = {
 'AGENTS.md', 'pubspec.yaml', 'assets/data/release-notes.json',
 'android/app/src/main/kotlin/com/mesting/mesting_music/QishuiOfficialAudioDecrypt.kt',
 'android/app/src/main/kotlin/com/mesting/mesting_music/QishuiOfficialAudioPlugin.kt',
 'lib/core/network/music_network_diagnostics.dart',
 'lib/features/music_platform/qishui/qishui_official_audio_cache.dart',
 'lib/features/settings/presentation/music_network_diagnostics_page.dart',
 'test/native_qishui_media/QishuiOfficialAudioHostTest.kt',
}
changed = []
for row in before['currentFiles']:
    assert (ROOT / row['path']).is_file(), row['path']
    if sha(ROOT / row['path']) != row['sha256']: changed.append(row['path'])
assert set(changed) == allowed, sorted(set(changed) ^ allowed)
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.71-verification.json').read_text('utf-8'))
source = json.loads((ROOT / 'release/Mesting-Music-v1.0.71-source-verification.json').read_text('utf-8'))
assert sha(ROOT / 'release/Mesting-Music-v1.0.71.apk') == apk['sha256']
assert sha(ROOT / source['sourceZipName']) == source['sourceZipSha256']
(ROOT / 'release/Mesting-Music-v1.0.71-SHA256.txt').write_text(
    f"{apk['sha256']}  Mesting-Music-v1.0.71.apk\n{source['sourceZipSha256']}  {source['sourceZipName']}\n", 'utf-8')
selected = sorted(set(git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0')))
current = [record(name) for name in selected if name and (ROOT / name).is_file() and not name.startswith('android/build/')]
frozen = before['frozenArtifacts'] + [record('release/Mesting-Music-v1.0.71.apk'), record(source['sourceZipName'])]
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
after = {
 'version': '1.0.71', 'androidVersionCode': 92, 'releaseBuild': True, 'localDelivery': True,
 **{key: before[key] for key in ['head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256']},
 'indexEmpty': True, 'originalFrozenArtifactsChecked': len(before['frozenArtifacts']),
 'originalFrozenArtifactIssues': frozen_issues, 'frozenArtifacts': frozen, 'frozenArtifactCount': len(frozen),
 'productFiles': inputs, 'productInputsChecked': len(inputs), 'differencesFrom71BuildInputs': input_issues,
 'currentFiles': current, 'currentFileCount': len(current), 'existingChangedFiles': changed,
 'addedFiles': sorted({r['path'] for r in current} - {r['path'] for r in before['currentFiles']}),
 'allPreexistingPathsPreserved': True, 'historicalDirtyWorktreeRetained': True,
 'hostChecks': host, 'apkSha256': apk['sha256'], 'sourceZipSha256': source['sourceZipSha256'],
 'sourceZipFiles': source['sourceFileCount'], 'sourceCrcAndAllEntriesVerified': True,
 'user70InstalledAndAudioDecodeFailureConfirmed': True,
 'installed71': False, 'physical71CompletePlaybackAccepted': False,
 'pathCompatibilityNotProvenSoleCauseOfUserFailure': True,
 'clipboardReadbackDoesNotGuaranteeCrossApplicationPaste': True,
 'pendingCodingBuildInstallUploadTasks': False,
 'phoneAdbRealAccountNasOrSignerAccessThisRelease': False,
 'privateSignerTokenAccess': False, 'helperDeploymentModified': False,
 'prior66QrAccountColdRestoreAndNeteaseAutoSourceAccepted': True,
 'phoneLoginRemoved': True, 'oldLogsReplayed': False, 'old51RecycledApksRestored': False,
 'missing63SourceZipRecreated': False,
 'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
 'receiverInstruction': 'Read AGENTS and current71 handoff/docs, verify this receipt read-only; await user install/full-playback feedback. No automatic device/account/NAS/Git cleanup/publication work.',
}
target = OUT / 'after.json'
assert not target.exists()
target.write_text(json.dumps(after, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps({'version': after['version'], 'code': 92, 'oldFrozenVerified': len(before['frozenArtifacts']),
    'frozenNow': len(frozen), 'productInputs': len(inputs), 'currentFiles': len(current),
    'sourceFiles': source['sourceFileCount'], 'branch': before['branch'], 'indexEmpty': True,
    'originalSigningAndLockIntact': True, 'physicalAcceptance': False}, ensure_ascii=False, indent=2))
