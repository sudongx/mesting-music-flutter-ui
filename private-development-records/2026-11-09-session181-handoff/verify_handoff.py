"""Freeze/check the documentation-only81 handoff and preserve all deliveries."""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import subprocess
import sys

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
DOC = 'HANDOFF-SESSION-2026-11-09-v1.0.80-81-TO-NEW-CHAT.md'
before = json.loads((OUT/'before.json').read_text('utf8'))


def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT).decode('utf8')


def matches(row):
    path = ROOT/row['path']
    return path.is_file() and sha(path) == row['sha256']


def check_rows(rows, label):
    with ThreadPoolExecutor(max_workers=5) as pool:
        assert all(pool.map(matches, rows)), label


assert git('branch', '--show-current').strip() == before['branch'] == 'beta'
assert git('rev-parse', 'HEAD').strip() == before['head']
assert not git('diff', '--cached', '--name-only')
for key, relative in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
                      ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
    assert sha(ROOT/relative) == before[key], key
assert sha(ROOT/before['predecessorReceipt']) == before['predecessorReceiptSha256']
assert sha(ROOT/before['previousReceipt']) == before['previousReceiptSha256']
assert not any((ROOT/path).exists() for path in before['authorizedRetiredPaths'])
assert (ROOT/'AGENTS.md').read_bytes().endswith((OUT/'AGENTS-before.bin').read_bytes())
assert sha(OUT/'AGENTS-before.bin') == next(row['sha256'] for row in before['currentFiles'] if row['path'] == 'AGENTS.md')
assert 'version: 1.0.81+102' in (ROOT/'pubspec.yaml').read_text('utf8')
selected = {p for p in git('ls-files', '--cached', '--others', '--exclude-standard', '-z').split('\0')
            if p and not p.startswith('android/build/') and (ROOT/p).is_file()}
mode = sys.argv[1] if len(sys.argv) > 1 else 'check'

if mode == 'freeze':
    assert not (OUT/'after.json').exists(), 'Never overwrite a frozen handoff receipt'
    check_rows([row for row in before['currentFiles'] if row['path'] != 'AGENTS.md'], 'Only AGENTS prefix may change')
    check_rows(before['productFiles'], 'No product/build inputs may change')
    check_rows(before['frozenArtifacts'], 'Frozen artifact drift')
    assert selected == {row['path'] for row in before['currentFiles']} | {DOC}, 'Unexpected source additions/deletions'
    current = [row if row['path'] != 'AGENTS.md' else {
        'path': 'AGENTS.md', 'bytes': (ROOT/'AGENTS.md').stat().st_size,
        'sha256': sha(ROOT/'AGENTS.md')} for row in before['currentFiles']]
    current.append({'path': DOC, 'bytes': (ROOT/DOC).stat().st_size, 'sha256': sha(ROOT/DOC)})
    evidence_paths = [
        '.codex-artifacts/2026-11-08-netease-free-listen-research/REPORT.md',
        '.codex-artifacts/2026-11-08-netease-foreground-ad-research/REPORT.md',
        '.codex-artifacts/2026-11-09-netease-inapp-ad-feasibility/REPORT.md',
        '.codex-artifacts/2026-11-09-release181/research-contract/REPORT.md',
        '.codex-artifacts/2026-11-09-netease-noads-followup/REPORT.md',
        '.codex-artifacts/2026-11-09-netease-noads-followup/rea-evidence.json',
        '.codex-artifacts/2026-11-09-netease-noads-followup/user-report.json',
        '.codex-artifacts/2026-11-09-netease-noads-followup/scope.json',
        '.codex-artifacts/2026-11-09-release181/host-summary.json',
        '.codex-artifacts/2026-11-09-release181/final-reception-check.json',
    ]
    evidence = [{'path': p, 'bytes': (ROOT/p).stat().st_size, 'sha256': sha(ROOT/p)} for p in evidence_paths]
    after = {
        **before, 'createdAtUtc': datetime.now(timezone.utc).isoformat(),
        'currentFiles': current, 'privateResearchEvidence': evidence,
        'handoffDocument': DOC, 'handoffDocumentSha256': sha(ROOT/DOC),
        'documentationOnly': True, 'onlyExistingFileChanged': 'AGENTS.md',
        'newPublicFiles': [DOC], 'productOrTestFilesChanged': False,
        'oldDeliveriesOrReceiptsRewritten': False, 'retestedOrRebuiltForHandoff': False,
        'phoneAdbAccountOrNasAccessForHandoff': False,
        'pendingRuntimeTasks': False,
        'userActuallyRan81AndExportedEmptyAdConfiguration': True,
        'userConfirmedSameAccountOfficialAndroid9615StillLoadsAds': True,
        'nonEmptyAdConfigurationOrRenderingVerified': False,
        'adextjsonMissingFrom81StaticallyConfirmed': True,
        'adextjsonOmissionProvenSoleCauseOfEmptyAds': False,
        'version82Implemented': False, 'version82ImplementationAuthorized': False,
        'newChatInitialScope': 'Read handoff, run this verifier read-only, report and wait for user confirmation before82',
        'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    }
    with (OUT/'after.json').open('x', encoding='utf8') as stream:
        json.dump(after, stream, ensure_ascii=False, indent=2)
        stream.write('\n')
    print(json.dumps({'frozen': True, 'version': '1.0.81', 'code': 102,
        'currentFiles': len(current), 'productInputs': len(after['productFiles']),
        'frozenArtifacts': len(after['frozenArtifacts']), 'version82Implemented': False}))
elif mode == 'check':
    after = json.loads((OUT/'after.json').read_text('utf8'))
    assert after['predecessorReceiptSha256'] == before['predecessorReceiptSha256']
    for key in ['currentFiles', 'productFiles', 'frozenArtifacts', 'privateResearchEvidence']:
        check_rows(after[key], key)
    assert selected == {row['path'] for row in after['currentFiles']}
    assert sha(ROOT/DOC) == after['handoffDocumentSha256']
    print(json.dumps({'verified': True, 'version': '1.0.81', 'code': 102,
        'currentFiles': len(after['currentFiles']), 'productInputs': len(after['productFiles']),
        'frozenArtifacts': len(after['frozenArtifacts']),
        'retiredPathsPreserved': len(after['authorizedRetiredPaths']),
        'handoffDocument': DOC, 'handoffDocumentSha256': after['handoffDocumentSha256'],
        'headIndexLockSigningAndPriorReceiptsUnchanged': True,
        'documentationOnly': True, 'pendingRuntimeTasks': False,
        'userActuallyRan81WithEmptyAds': True, 'officialSameAccountLoadsAdsPerUser': True,
        'version82Implemented': False, 'version82ImplementationAuthorized': False,
        'phoneAdbAccountOrNasAccessForHandoff': False}, indent=2))
else:
    raise ValueError('Unsupported mode')
