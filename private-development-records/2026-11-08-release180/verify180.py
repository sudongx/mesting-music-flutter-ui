"""Preserve the complete dirty79 handoff and freeze only the approved80 delta."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import subprocess
import sys

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

assert git('branch', '--show-current').strip() == before['branch'] == 'beta'
assert git('rev-parse', 'HEAD').strip() == before['head']
assert not git('diff', '--cached', '--name-only')
for key, path in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                  ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT/path) == before[key], key
assert sha(ROOT/before['previousReceipt']) == before['previousReceiptSha256']
assert not any((ROOT/p).exists() for p in before['authorizedRetiredPaths'])
assert (ROOT/'AGENTS.md').read_bytes().endswith((OUT/'AGENTS-before.bin').read_bytes())

allowed = {
    'AGENTS.md', 'CHANGELOG.md', 'pubspec.yaml', 'assets/data/release-notes.json',
    'android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java',
    'lib/core/network/music_network_diagnostics.dart',
    'lib/features/music_platform/netease/netease_free_listen_entry.dart',
    'lib/features/music_platform/netease/netease_reward_requests.dart',
    'lib/features/music_platform/netease/netease_rewards_repository.dart',
    # Only the shared release label changes in the Qishui diagnostic envelope.
    'lib/features/music_platform/qishui/qishui_diagnostics.dart',
    'test/qishui_diagnostics178_test.dart',
    'test/release_160_free_listen_entry_test.dart',
    'test/release_160_reward_repository_test.dart',
}
with ThreadPoolExecutor(max_workers=5) as pool:
    modified = [r['path'] for r, differs in zip(before['currentFiles'], pool.map(changed, before['currentFiles'])) if differs]
assert set(modified) <= allowed, sorted(set(modified)-allowed)
assert not [r['path'] for r in before['currentFiles'] if not (ROOT/r['path']).is_file()]
assert 'version: 1.0.80+101' in (ROOT/'pubspec.yaml').read_text('utf8')

mode = sys.argv[1] if len(sys.argv)>1 else 'check'
if mode == 'source-check':
    print(json.dumps({'approvedSourceScopePreserved': True, 'changedExistingFiles': modified}, indent=2))
elif mode == 'freeze':
    assert not (OUT/'after.json').exists(), 'Never rewrite a frozen receipt'
    unchanged(before['frozenArtifacts'], 'Old frozen delivery drift')
    selected = sorted({p for p in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0')
                       if p and not p.startswith('android/build/') and (ROOT/p).is_file()})
    allowed_new = {
        'lib/core/network/music_reward_diagnostic.dart', 'test/netease_free_listen180_test.dart',
        'HANDOFF-CURRENT-SESSION-2026-11-08-v1.0.80.md',
        *['docs/'+p for p in ['fixes-2026-11-08-v1.0.80.md', 'INSTALL-v1.0.80.md',
          'netease-free-listen-v1.0.80.md', 'validation-2026-11-08-v1.0.80.json', 'build-inputs-v1.0.80.json']],
        *['release/Mesting-Music-v1.0.80'+p for p in ['-verification.json', '-source-verification.json',
          '.apk.sha256', '-source.sha256', '-SHA256.txt']],
    }
    additions = set(selected)-{r['path'] for r in before['currentFiles']}
    assert additions <= allowed_new, sorted(additions-allowed_new)
    current = [{'path': p, 'bytes': (ROOT/p).stat().st_size, 'sha256': sha(ROOT/p)} for p in selected]
    artifacts = before['frozenArtifacts']+[
        {'path': p, 'bytes': (ROOT/p).stat().st_size, 'sha256': sha(ROOT/p)}
        for p in ['release/Mesting-Music-v1.0.80.apk', 'Mesting-Music-v1.0.80-source.zip']]
    inputs = json.loads((OUT/'candidate1/build-input.json').read_text('utf8'))['files']
    unchanged(inputs, 'Final build-input drift')
    host = json.loads((OUT/'host-summary.json').read_text('utf8'))
    assert all(host[s]['failed']==0 for s in ['beta', 'stable', 'navigation'])
    assert host['analysis']['issues']==0
    after = {
        'createdAtUtc': datetime.now(timezone.utc).isoformat(), 'version': '1.0.80', 'androidVersionCode': 101,
        **{k: before[k] for k in ['branch', 'head', 'indexSha256', 'lockSha256', 'signingSha256',
              'previousReceipt', 'previousReceiptSha256', 'authorizedRetiredPaths']},
        'currentFiles': current, 'productFiles': inputs, 'frozenArtifacts': artifacts,
        'allowedOldFileChanges': sorted(allowed), 'actualOldFilesChanged': modified,
        'newSourceAndMetadataFiles': sorted(additions),
        'neteaseOfficialNmNeEntryRoutesLocallyVerified': True,
        'neteaseTypedRewardDiagnosticsExported': True, 'neteaseCommonClientIdentityChanged': False,
        'priorNeteaseBalanceSyncAcceptedByUser': True, 'neteaseNewRealClaimOrCreditingAccepted': False,
        'qishuiBusinessChanged': False, 'qishuiDiagnosticReleaseLabelUpdatedOnly': True,
        'helperVersionAsReceived': '0.2.3', 'helperPushedCommitAsReceived': before['helperCommit'],
        'nas023DeploymentVerified': False,
        'phoneAdbAccountOrNasAccess': False, 'agentInitiatedBusinessRequests': False,
        'oldUnknownReportsReplayed': False, 'pendingRuntimeTasks': False,
        'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    }
    with (OUT/'after.json').open('x', encoding='utf8') as stream:
        json.dump(after, stream, ensure_ascii=False, indent=2)
        stream.write('\n')
    print(json.dumps({'frozen': True, 'version': '1.0.80', 'frozenArtifacts': len(artifacts)}))
elif mode == 'check':
    after = json.loads((OUT/'after.json').read_text('utf8'))
    for key in ['currentFiles', 'productFiles', 'frozenArtifacts']:
        unchanged(after[key], key)
    print(json.dumps({'verified': True, 'version': '1.0.80', 'code': 101,
      'currentFiles': len(after['currentFiles']), 'productInputs': len(after['productFiles']),
      'frozenArtifacts': len(after['frozenArtifacts']), 'retiredPathsPreserved': len(after['authorizedRetiredPaths']),
      'headIndexLockSigningAndPriorReceiptsUnchanged': True, 'pendingRuntimeTasks': False,
      'realClaimOrCreditingVerified': False, 'deviceAccountOrNasAccess': False}, indent=2))
else:
    raise ValueError('Unsupported mode')
