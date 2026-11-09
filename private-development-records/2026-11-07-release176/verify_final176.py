"""Create/verify a read-only handoff receipt without rebuilding or using ADB."""
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
RECEIPT = OUT / 'after.json'

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT).decode('utf-8').strip()

def row(relative):
    path = ROOT / relative
    return {'path': relative, 'bytes': path.stat().st_size, 'sha256': sha(path)}

def issue(item):
    path = ROOT / item['path']
    return item['path'] if not path.is_file() or sha(path) != item['sha256'] else None

def check(receipt):
    assert git('branch', '--show-current') == receipt['branch'] == 'beta'
    assert git('rev-parse', 'HEAD') == receipt['head']
    assert not git('diff', '--cached', '--name-only')
    for key, relative in [('indexSha256', '.git/index'), ('lockSha256', 'pubspec.lock'),
        ('signingSha256', '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')]:
        assert sha(ROOT / relative) == receipt[key], key
    with ThreadPoolExecutor(max_workers=6) as pool:
        for category in ['frozenArtifacts', 'currentFiles', 'productFiles']:
            failures = [path for path in pool.map(issue, receipt[category]) if path]
            assert not failures, (category, failures)
    assert not any((ROOT / path).exists() for path in receipt['authorizedRetiredPaths'])

mode = sys.argv[1] if len(sys.argv) > 1 else 'check'
if mode == 'create':
    assert not RECEIPT.exists()
    protected = json.loads((OUT / 'protected-state.json').read_text('utf-8'))
    before = json.loads((OUT / 'before.json').read_text('utf-8'))
    source = json.loads((ROOT / 'release/Mesting-Music-v1.0.76-source-verification.json').read_text('utf-8'))
    with zipfile.ZipFile(ROOT / source['sourceZipName']) as archive:
        snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
        assert archive.testzip() is None
        for item in snapshot['files']:
            assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256']
    external = ['release/Mesting-Music-v1.0.76' + suffix for suffix in
        ['-verification.json', '-source-verification.json', '.apk.sha256', '-source.sha256', '-SHA256.txt']]
    current = sorted({item['path'] for item in snapshot['files']} | set(external))
    with ThreadPoolExecutor(max_workers=6) as pool:
        current_rows = list(pool.map(row, current))
    receipt = {
        'createdAtUtc': datetime.now(timezone.utc).isoformat(),
        'version': '1.0.76', 'androidVersionCode': 97,
        **{key: protected[key] for key in ['head', 'branch', 'indexSha256', 'lockSha256', 'signingSha256']},
        'baselineReceiptSha256': before['baselineReceiptSha256'],
        'frozenArtifacts': protected['frozenArtifacts'] + [row('release/Mesting-Music-v1.0.76.apk'), row(source['sourceZipName'])],
        'currentFiles': current_rows, 'productFiles': snapshot['fixedProductAndBuildInputs']['files'],
        'authorizedRetiredPaths': snapshot['authorizedRetiredPathsPreservedFrom75'],
        'oldHistoricalFrozenCount': len(protected['frozenArtifacts']),
        'sourceZipCrcAndEveryEntryHashChecked': True,
        'sourceAndApkFrozenSeparatelyWithoutRewriting75': True,
        'scope': 'Cached home restoration, continuous platform navigation, bounded Tab/menu work, queue veil removal and native output activation, with retained-data device upgrade. No120FPS/all-page/long-term claim; see same-version report.',
        'deviceKeepAwakeRestoredUserNeverSleepPreserved': True,
        'pendingTasks': [], 'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
        'acceptanceGaps': ['Stable120FPS not achieved; player More jank and Soda rapid-Tab tails remain high.',
            'Two automatic queue-motion scenarios skipped as queue_empty; manual video/gestures are separate evidence.',
            'Old74 native crash cause and long-term stability unproved; account/NAS/VIP/DSP boundaries retained.'],
    }
    check(receipt)
    with RECEIPT.open('x', encoding='utf-8') as stream:
        stream.write(json.dumps(receipt, ensure_ascii=False, indent=2) + '\n')
else:
    assert mode == 'check'
    receipt = json.loads(RECEIPT.read_text('utf-8'))
    check(receipt)
print(json.dumps({'version': receipt['version'], 'code': receipt['androidVersionCode'],
    'frozenArtifactsVerified': len(receipt['frozenArtifacts']), 'currentFilesVerified': len(receipt['currentFiles']),
    'productInputsVerified': len(receipt['productFiles']), 'authorizedRetiredPaths': len(receipt['authorizedRetiredPaths']),
    'branch': receipt['branch'], 'headIndexLockSigningUnchanged': True,
    'sourceFreezeVerified': True, 'readOnlyCheck': mode == 'check'}, indent=2))

