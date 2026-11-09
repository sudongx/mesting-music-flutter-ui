"""Check the preserved 77 baseline and freeze only the new 78 receipt."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import subprocess
import sys

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
before = json.loads((OUT / 'before.json').read_text('utf8'))


def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT).decode('utf8')


def changed(row):
    path = ROOT / row['path']
    return not path.is_file() or sha(path) != row['sha256']


assert git('branch', '--show-current').strip() == before['branch'] == 'beta'
assert git('rev-parse', 'HEAD').strip() == before['head']
assert not git('diff', '--cached', '--name-only')
for key, path in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                  ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT / path) == before[key], key
assert sha(ROOT / before['previousReceipt']) == before['previousReceiptSha256']
assert not any((ROOT / path).exists() for path in before['authorizedRetiredPaths'])
assert (ROOT / 'AGENTS.md').read_bytes().endswith((OUT / 'AGENTS-before.bin').read_bytes())

allowed = {
    'AGENTS.md', 'CHANGELOG.md', 'pubspec.yaml', 'assets/data/release-notes.json',
    'android/app/src/main/kotlin/com/mesting/mesting_music/MainActivity.kt',
    'android/app/src/main/kotlin/com/mesting/mesting_music/DiagnosticReportShare.kt',
    'android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java',
    'lib/features/settings/presentation/music_network_diagnostics_page.dart',
    *['lib/features/music_platform/qishui/' + name + '.dart' for name in [
        'qishui_api', 'qishui_request_signer', 'qishui_repository',
        'qishui_social_repository', 'qishui_listening_repository', 'qishui_image_upload']],
}
with ThreadPoolExecutor(max_workers=5) as pool:
    modified = [row['path'] for row, differs in zip(before['currentFiles'], pool.map(changed, before['currentFiles'])) if differs]
assert set(modified) <= allowed, sorted(set(modified) - allowed)
assert not [row['path'] for row in before['currentFiles'] if not (ROOT / row['path']).is_file()]

mode = sys.argv[1] if len(sys.argv) > 1 else 'check'
if mode == 'freeze':
    assert not (OUT / 'after.json').exists(), 'Never rewrite a frozen receipt'
    with ThreadPoolExecutor(max_workers=5) as pool:
        assert not any(pool.map(changed, before['frozenArtifacts'])), 'Old frozen delivery drift'
    selected = sorted({path for path in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0')
                       if path and not path.startswith('android/build/') and (ROOT / path).is_file()})
    current = [{'path': path, 'bytes': (ROOT / path).stat().st_size, 'sha256': sha(ROOT / path)} for path in selected]
    artifacts = before['frozenArtifacts'] + [
        {'path': path, 'bytes': (ROOT / path).stat().st_size, 'sha256': sha(ROOT / path)}
        for path in ['release/Mesting-Music-v1.0.78.apk', 'Mesting-Music-v1.0.78-source.zip']]
    inputs = json.loads((OUT / 'candidate1/build-input.json').read_text('utf8'))['files']
    assert not any(changed(row) for row in inputs), 'Final build-input drift'
    host = json.loads((OUT / 'host-summary.json').read_text('utf8'))
    assert all(host[suite]['failed'] == 0 for suite in ['beta', 'stable', 'navigation'])
    assert host['analysis']['issues'] == 0
    after = {
        'createdAtUtc': datetime.now(timezone.utc).isoformat(), 'version': '1.0.78', 'androidVersionCode': 99,
        **{key: before[key] for key in ['branch', 'head', 'indexSha256', 'lockSha256', 'signingSha256']},
        'previousReceipt': before['previousReceipt'], 'previousReceiptSha256': before['previousReceiptSha256'],
        'frozenArtifacts': artifacts, 'currentFiles': current, 'productFiles': inputs,
        'authorizedRetiredPaths': before['authorizedRetiredPaths'],
        'allowedOldFileChanges': sorted(allowed), 'actualOldFilesChanged': modified,
        'phoneAdbAccountOrNasAccess': False, 'realCoverUploadAccepted': False,
        'officialSocialAndListeningReadAccepted': False, 'durationCreditingVerified': False,
        'confirmedPrivateImageGatewayPathCorrected': True, 'helperSourceOrContractChanged': False,
        'oldUnknownReportsReplayed': False, 'pendingRuntimeTasks': False,
        'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    }
    (OUT / 'after.json').write_text(json.dumps(after, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
    print(json.dumps({'frozen': True, 'version': '1.0.78', 'artifacts': len(artifacts)}))
elif mode == 'check':
    after = json.loads((OUT / 'after.json').read_text('utf8'))
    for key in ['currentFiles', 'productFiles', 'frozenArtifacts']:
        with ThreadPoolExecutor(max_workers=5) as pool:
            assert not any(pool.map(changed, after[key])), key
    assert 'version: 1.0.78+99' in (ROOT / 'pubspec.yaml').read_text('utf8')
    print(json.dumps({'verified': True, 'version': '1.0.78', 'code': 99,
                      'frozenArtifacts': len(after['frozenArtifacts']), 'currentFiles': len(after['currentFiles']),
                      'productInputs': len(after['productFiles']), 'headIndexLockSigningAndOldArtifactsUnchanged': True,
                      'deviceAccess': False, 'realCoverUploadAccepted': False, 'durationCreditingVerified': False,
                      'pendingRuntimeTasks': False}, indent=2))
elif mode == 'source-check':
    print(json.dumps({'oldSourceScopePreserved': True, 'changedExistingFiles': modified}, indent=2))
else:
    raise ValueError('Unknown verification mode')
