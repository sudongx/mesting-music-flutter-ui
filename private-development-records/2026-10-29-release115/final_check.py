from pathlib import Path
import hashlib
import json
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-29-release115'
def load(path): return json.loads(path.read_text(encoding='utf-8-sig'))
def digest(path):
    with path.open('rb') as stream: return hashlib.file_digest(stream, 'sha256').hexdigest()

apk = load(ROOT / 'release/Mesting-Music-v1.0.15-verification.json')
source = load(ROOT / 'release/Mesting-Music-v1.0.15-source-verification.json')
publish = load(ROOT / 'release/Mesting-Music-v1.0.15-publish.json')
validation = load(ROOT / 'docs/validation-2026-10-29-v1.0.15.json')
assert apk['version'] == source['version'] == publish['version'] == '1.0.15'
assert apk['androidVersionCode'] == source['androidVersionCode'] == publish['androidVersionCode'] == 36
apk_path = ROOT / 'release' / apk['file']
zip_path = ROOT / source['sourceZipName']
assert digest(apk_path) == apk['sha256'] == publish['sha256']
assert digest(zip_path) == source['sourceZipSha256']
assert apk_path.stat().st_size == apk['fileSize'] == publish['fileSize']
assert zip_path.stat().st_size == source['sourceZipSize']
assert not publish['published'] and not validation['deviceAccess']
with zipfile.ZipFile(zip_path) as archive:
    manifest = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    for item in manifest['files']:
        assert digest(ROOT / item['path']) == item['sha256'], item['path']
    assert 'lib/features/music_platform/netease/fallback/netease_public_sources.dart' in archive.namelist()
    assert 'third_party/unblock_netease/COPYING.LESSER' in archive.namelist()
    assert 'test/netease_v115_sources_test.dart' in archive.namelist()
for item in load(OUT / 'frozen-before.json'):
    assert digest(Path(item['path'])) == item['sha256'], item['path']
summary = (
    'Mesting Music 1.0.15 / Android code36\n'
    'Package: com.mesting.music.beta\n'
    f"Certificate SHA-256: {apk['certificateSha256']}\n\n"
    f"{apk['sha256']}  release/{apk['file']}\n"
    f"Bytes: {apk['fileSize']}\n\n"
    f"{source['sourceZipSha256']}  {source['sourceZipName']}\n"
    f"Bytes: {source['sourceZipSize']}\n\n"
    'Local prepared delivery. User uploads to music. Not published by this task.\n'
)
(ROOT / 'release/Mesting-Music-v1.0.15-SHA256.txt').write_text(summary, encoding='utf-8')
result = {'version': '1.0.15', 'code': 36, 'apkBytes': apk['fileSize'], 'apkSha256': apk['sha256'], 'sourceBytes': source['sourceZipSize'], 'sourceSha256': source['sourceZipSha256'], 'frozenSourceFiles': source['sourceFileCount'], 'currentSourceMatchesFrozenZip': True, 'oldFrozenArtifactsUnchanged': True, 'published': False}
(OUT / 'final-delivery-check.json').write_text(json.dumps(result, indent=2) + '\n', encoding='utf-8')
print(json.dumps(result, indent=2))
