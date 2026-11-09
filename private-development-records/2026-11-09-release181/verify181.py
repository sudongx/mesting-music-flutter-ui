"""Check the authorized81 delta; never rewrite previous80 or frozen receipts."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import subprocess
import sys
import zipfile

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
before = json.loads((OUT/'before.json').read_text('utf8'))


def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT).decode('utf8')


def changed(row):
    path = ROOT/row['path']
    return not path.is_file() or sha(path) != row['sha256']


def unchanged(rows, label):
    with ThreadPoolExecutor(max_workers=5) as pool:
        assert not any(pool.map(changed, rows)), label


allowed_old = {
    'AGENTS.md', 'CHANGELOG.md', 'pubspec.yaml', 'assets/data/release-notes.json',
    'android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java',
    'android/app/src/main/kotlin/com/mesting/mesting_music/MainActivity.kt',
    'android/app/src/main/kotlin/com/mesting/mesting_music/DiagnosticReportShare.kt',
    'lib/features/music_platform/presentation/netease_reward_calendar.dart',
    'lib/features/music_platform/qishui/qishui_diagnostics.dart',
    'test/qishui_diagnostics178_test.dart',
}
allowed_new = {
    *['lib/features/music_platform/netease/ad_probe/netease_ad_probe_'+s+'.dart'
      for s in ['report', 'repository', 'provider', 'page', 'export']],
    'test/netease_ad_probe181_test.dart', 'test/netease_ad_probe181_ui_test.dart',
    'HANDOFF-CURRENT-SESSION-2026-11-09-v1.0.81.md',
    *['docs/'+s for s in ['fixes-2026-11-09-v1.0.81.md', 'INSTALL-v1.0.81.md',
      'netease-ad-probe-v1.0.81.md', 'validation-2026-11-09-v1.0.81.json',
      'build-inputs-v1.0.81.json']],
    *['release/Mesting-Music-v1.0.81'+s for s in ['-verification.json',
      '-source-verification.json', '.apk.sha256', '-source.sha256', '-SHA256.txt']],
}
assert git('branch', '--show-current').strip() == before['branch'] == 'beta'
assert git('rev-parse', 'HEAD').strip() == before['head']
assert not git('diff', '--cached', '--name-only')
for key, path in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                  ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT/path) == before[key], key
assert sha(ROOT/before['previousReceipt']) == before['previousReceiptSha256']
assert not any((ROOT/p).exists() for p in before['authorizedRetiredPaths'])
assert (ROOT/'AGENTS.md').read_bytes().endswith((OUT/'AGENTS-before.bin').read_bytes())
with ThreadPoolExecutor(max_workers=5) as pool:
    modifications = [row['path'] for row, differs in zip(before['currentFiles'], pool.map(changed, before['currentFiles'])) if differs]
assert set(modifications) <= allowed_old, sorted(set(modifications)-allowed_old)
assert not [row['path'] for row in before['currentFiles'] if not (ROOT/row['path']).is_file()]
selected = sorted({p for p in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0')
                   if p and not p.startswith('android/build/') and (ROOT/p).is_file()})
additions = set(selected)-{row['path'] for row in before['currentFiles']}
assert additions <= allowed_new, sorted(additions-allowed_new)
assert 'version: 1.0.81+102' in (ROOT/'pubspec.yaml').read_text('utf8')
# The previous frozen source supplies an exact semantic comparison for shared
# labels; newline normalization cannot hide a collateral Qishui/API change.
with zipfile.ZipFile(ROOT/'Mesting-Music-v1.0.80-source.zip') as prior_source:
    for relative in ['lib/features/music_platform/qishui/qishui_diagnostics.dart',
                     'test/qishui_diagnostics178_test.dart', 'pubspec.yaml']:
        old = prior_source.read(relative).decode('utf8').replace('\r\n', '\n')
        expected = old.replace("'1.0.80'", "'1.0.81'")
        expected = expected.replace("'appVersionCode': 101", "'appVersionCode': 102")
        expected = expected.replace("root['appVersionCode'], 101", "root['appVersionCode'], 102")
        expected = expected.replace('version: 1.0.80+101', 'version: 1.0.81+102')
        assert (ROOT/relative).read_text('utf8') == expected, relative+' has non-release changes'

mode = sys.argv[1] if len(sys.argv)>1 else 'check'
if mode == 'source-check':
    print(json.dumps({'approvedSourceScopePreserved': True, 'modifiedExistingFiles': modifications,
                      'newFiles': sorted(additions)}, indent=2))
elif mode == 'freeze':
    assert not (OUT/'after.json').exists(), 'Never overwrite a frozen receipt'
    unchanged(before['frozenArtifacts'], 'Historical delivery changed')
    inputs = json.loads((OUT/'candidate1/build-input.json').read_text('utf8'))['files']
    unchanged(inputs, 'Product input drift after compilation')
    host = json.loads((OUT/'host-summary.json').read_text('utf8'))
    assert all(host[s]['failed'] == 0 for s in ['beta', 'stable', 'navigation'])
    assert host['analysis']['issues'] == 0
    current = [{'path': p, 'bytes': (ROOT/p).stat().st_size, 'sha256': sha(ROOT/p)} for p in selected]
    artifacts = before['frozenArtifacts']+[
        {'path': p, 'bytes': (ROOT/p).stat().st_size, 'sha256': sha(ROOT/p)}
        for p in ['release/Mesting-Music-v1.0.81.apk', 'Mesting-Music-v1.0.81-source.zip']]
    after = {
        'createdAtUtc': datetime.now(timezone.utc).isoformat(),
        'version': '1.0.81', 'androidVersionCode': 102,
        **{k: before[k] for k in ['branch', 'head', 'indexSha256', 'lockSha256',
          'signingSha256', 'previousReceipt', 'previousReceiptSha256', 'authorizedRetiredPaths']},
        'currentFiles': current, 'productFiles': inputs, 'frozenArtifacts': artifacts,
        'allowedOldFileChanges': sorted(allowed_old), 'actualOldFilesChanged': modifications,
        'newSourceAndMetadataFiles': sorted(additions),
        'neteaseExplicitReadOnlyAdProbe': True, 'neteaseCommonClientIdentityChanged': False,
        'neteaseAdDisplayed': False, 'neteaseTrackingSubmitted': False, 'neteaseRewardSubmitted': False,
        'actualAccountAdConfigurationReadVerified': False,
        'independentH5RenderingOrOfficialCompletionVerified': False,
        'priorOfficialBalanceSyncAcceptedByUser': True,
        'qishuiBusinessChanged': False, 'qishuiDiagnosticVersionLabelUpdatedOnly': True,
        'helperVersionAsReceived': '0.2.3', 'helperPushedCommitAsReceived': '5d01327',
        'nas023DeploymentVerified': False,
        'phoneAdbAccountOrNasAccess': False, 'agentInitiatedBusinessRequests': False,
        'oldUnknownReportsReplayed': False, 'pendingRuntimeTasks': False,
        'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    }
    with (OUT/'after.json').open('x', encoding='utf8') as stream:
        json.dump(after, stream, ensure_ascii=False, indent=2)
        stream.write('\n')
    print(json.dumps({'frozen': True, 'frozenArtifacts': len(artifacts)}))
elif mode == 'check':
    after = json.loads((OUT/'after.json').read_text('utf8'))
    for key in ['currentFiles', 'productFiles', 'frozenArtifacts']:
        unchanged(after[key], key)
    print(json.dumps({'verified': True, 'version': '1.0.81', 'code': 102,
        'currentFiles': len(after['currentFiles']), 'productInputs': len(after['productFiles']),
        'frozenArtifacts': len(after['frozenArtifacts']),
        'retiredPathsPreserved': len(after['authorizedRetiredPaths']),
        'headIndexLockSigningAndPriorReceiptsUnchanged': True,
        'pendingRuntimeTasks': False, 'deviceAccountOrNasAccess': False,
        'actualAdConfigurationOrRewardCreditingVerified': False}, indent=2))
else:
    raise ValueError('Unsupported mode')
