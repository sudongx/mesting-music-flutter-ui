from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-01-release136'
def read(path): return json.loads(path.read_text(encoding='utf-8-sig'))
def sha(path):
    with path.open('rb') as stream: return hashlib.file_digest(stream, 'sha256').hexdigest()

apk = read(root / 'release/Mesting-Music-v1.0.36-verification.json')
source = read(root / 'release/Mesting-Music-v1.0.36-source-verification.json')
assert sha(root / 'release' / apk['file']) == apk['sha256']
assert sha(root / source['sourceZipName']) == source['sourceZipSha256']
with zipfile.ZipFile(root / source['sourceZipName']) as archive:
    manifest = read_manifest = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert manifest['version'] == '1.0.36' and manifest['androidVersionCode'] == 57
    assert len(manifest['files']) == source['sourceFileCount']
    # The archival helper already read back every file/CRC. Confirm that no
    # subsequent public-document edit drifted away from the frozen source.
    for item in manifest['files']:
        assert sha(root / item['path']) == item['sha256'], item['path']
    for path in ['PRODUCT.md', 'DESIGN.md', '.impeccable/design.json']:
        with zipfile.ZipFile(root / 'Mesting-Music-v1.0.35-source.zip') as old:
            assert archive.read(path) == old.read(path)

for item in read(out / 'frozen-before.json'):
    assert (root / item['path']).stat().st_size == item['bytes']
    assert sha(root / item['path']) == item['sha256'], item['path']
key = root / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore'
assert sha(key) == read(root / '.codex-artifacts/2026-11-01-release129/signing-material-before.json')['sha256']
assert subprocess.check_output(['git', 'branch', '--show-current'], cwd=root, text=True).strip() == 'beta'
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip() == 'b6bcd5425e0df3e03febdd460b56d0ed42004c52'
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=root).strip()
summary = (root / 'release/Mesting-Music-v1.0.36-SHA256.txt')
assert not summary.exists()
summary.write_text(
    apk['sha256'] + '  ' + apk['file'] + '\n' +
    source['sourceZipSha256'] + '  ' + source['sourceZipName'] + '\n' +
    'APK bytes: ' + str(apk['fileSize']) + '\n' +
    'Source ZIP bytes: ' + str(source['sourceZipSize']) + '\n',
    encoding='utf-8')
result = {'version': '1.0.36', 'androidCode': 57,
          'apk': {'path': 'release/' + apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256']},
          'source': {'path': source['sourceZipName'], 'bytes': source['sourceZipSize'],
                     'sha256': source['sourceZipSha256'], 'files': source['sourceFileCount']},
          'frozenPreviousFilesUnchanged': 54, 'signingKeyUnchanged': True,
          'allWorkingEntriesMatchFrozenSource': True, 'incumbentSystemFilesUnchanged': True,
          'branchHeadAndEmptyIndexPreserved': True, 'published': False,
          'deviceUsed': False, 'realAccountUsed': False}
(out / 'delivery-final.json').write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result, indent=2))
