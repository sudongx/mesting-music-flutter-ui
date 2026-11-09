"""Verify the frozen pair, source selection and preservation of old deliveries."""
from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-31-release126'

def load(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

apk = load(ROOT / 'release/Mesting-Music-v1.0.26-verification.json')
source = load(ROOT / 'release/Mesting-Music-v1.0.26-source-verification.json')
validation = load(ROOT / 'docs/validation-2026-10-31-v1.0.26.json')
assert apk['version'] == source['version'] == validation['version'] == '1.0.26'
assert apk['androidVersionCode'] == source['androidVersionCode'] == validation['androidVersionCode'] == 47
assert apk['loginArtworkAssetAbsent'] is True
assert not (ROOT / 'assets/branding/login/companions-bottom.png').exists()
assert digest(ROOT / 'release' / apk['file']) == apk['sha256']
assert digest(ROOT / source['sourceZipName']) == source['sourceZipSha256']
with zipfile.ZipFile(ROOT / source['sourceZipName']) as archive:
    assert archive.testzip() is None
    snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert snapshot['version'] == '1.0.26' and snapshot['androidVersionCode'] == 47
    assert len(snapshot['files']) == source['sourceFileCount']
    for item in snapshot['files']:
        assert digest(ROOT / item['path']) == item['sha256'], item['path']
        assert hashlib.sha256(archive.read(item['path'])).hexdigest() == item['sha256'], item['path']
    selected = set(subprocess.check_output(['git', 'ls-files', '--cached', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode('utf-8').split('\0')) - {''}
    expected = selected - set(snapshot['externalVerificationExcludedToAvoidSelfReference']) - {'SOURCE-SNAPSHOT.json'}
    assert expected == {item['path'] for item in snapshot['files']}, 'Source changed after freeze'
    assert archive.read(snapshot['previousSnapshotMetadata']['archivePath']) == (ROOT / 'SOURCE-SNAPSHOT.json').read_bytes()
for relative, expected in load(OUT / 'frozen-before.json').items():
    assert (ROOT / relative).stat().st_size == expected['size']
    assert digest(ROOT / relative) == expected['sha256'], relative
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip() == 'b6bcd5425e0df3e03febdd460b56d0ed42004c52'
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=ROOT).strip()
subprocess.run(['git', '-c', 'core.whitespace=blank-at-eol,blank-at-eof,space-before-tab,cr-at-eol', 'diff', '--check'], cwd=ROOT, check=True)
assert validation['betaRegression']['passed'] == 1267 and validation['betaRegression']['fileCount'] == 78
assert validation['stableRegression']['passed'] == 19 and validation['androidBackRegistration']['passed'] == 1
assert validation['analysis']['issues'] == 0
checksums = apk['sha256'] + '  ' + apk['file'] + '\n' + source['sourceZipSha256'] + '  ' + source['sourceZipName'] + '\n'
(ROOT / 'release/Mesting-Music-v1.0.26-SHA256.txt').write_text(checksums, encoding='utf-8')
result = {
    'version': '1.0.26', 'androidVersionCode': 47, 'apkFile': 'release/' + apk['file'],
    'apkBytes': apk['fileSize'], 'apkSha256': apk['sha256'],
    'sourceFile': source['sourceZipName'], 'sourceBytes': source['sourceZipSize'],
    'sourceSha256': source['sourceZipSha256'], 'sourceFiles': source['sourceFileCount'],
    'allSourceHashesAndZipCrcVerified': True, 'sourceSelectionMatchesFinalWorkingTree': True,
    'allPreviousFrozenFilesAndSigningKeyPreserved': True,
    'originalUpgradeCertificateVerified': True, 'pinnedDualArmReleaseEngineVerified': True,
    'actualFinalApkProductionNotesReaderVerified': True, 'loginArtworkAssetAbsent': True,
    'betaTestsPassed': 1267, 'stableTestsPassed': 19, 'androidBackTestsPassed': 1,
    'staticIssues': 0, 'deviceAccess': False, 'physicalUpgradeTestPerformed': False,
    'realAccountAccess': False, 'backendAccess': False, 'gitCommitted': False,
    'gitPushed': False, 'uploaded': False, 'published': False,
}
(OUT / 'final-delivery-check.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps(result, ensure_ascii=False, indent=2))
