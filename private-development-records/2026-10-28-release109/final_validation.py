"""Final release evidence audit; read-only except its own ignored report."""
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-28-release109'

def read_json(name):
    return json.loads((OUT / name).read_text(encoding='utf-8-sig'))

def sha256(path):
    digest = hashlib.sha256()
    with Path(path).open('rb') as source:
        while chunk := source.read(1024 * 1024):
            digest.update(chunk)
    return digest.hexdigest().upper()

apk = read_json('apk-verification.json')
public = read_json('public-verification.json')
notes = read_json('live-notes.json')
source = read_json('source-verification.json')
preserved = read_json('preserved-frozen.json')['unchanged']
for item in preserved:
    assert sha256(item['Path']) == item['Hash'], item['Path']
assert sha256(apk['delivery']) == apk['sha256']
assert public['fullDownloadSha256'] == apk['sha256']
assert public['fullDownloadSize'] == apk['size']
assert notes['version'] == apk['version'] == '1.0.9'
assert notes['versionCode'] == apk['versionCode'] == 30
expected_notes = json.loads((ROOT / 'assets/data/release-notes.json').read_text(encoding='utf-8'))
assert notes['notes'] == expected_notes['releaseNotes'] and len(notes['notes']) == 4
assert sha256(source['sourceZip']) == source['sha256']
with zipfile.ZipFile(source['sourceZip']) as archive:
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    for item in snapshot['files']:
        assert sha256(ROOT / item['path']).lower() == item['sha256'], item['path']
assert 'No issues found!' in (OUT / 'analyze-final.log').read_text(encoding='utf-8-sig')
assert read_json('build-result.json')['exitCode'] == 0
branch = subprocess.check_output(['git', 'branch', '--show-current'], cwd=ROOT, text=True).strip()
head = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip()
assert branch == 'beta' and head == 'dbc5e78d05570c26f56fe5c5773245737a464a5f'
assert (OUT / 'music-published.png').is_file()
result = {
    'verifiedAtUtc': datetime.now(timezone.utc).isoformat(),
    'status': 'published_and_verified',
    'version': apk['version'], 'versionCode': apk['versionCode'],
    'apkSha256': apk['sha256'], 'source': source,
    'frozenHistoricalFilesPreserved': len(preserved),
    'sourceSnapshotMatchesWorkingFiles': True,
    'publicFullDownloadMatchesApk': True,
    'productionRangeReaderNotesMatch': True,
    'branch': branch, 'head': head,
    'deviceAccess': False, 'gitCommitPush': False,
}
(OUT / 'validation-summary.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2))
