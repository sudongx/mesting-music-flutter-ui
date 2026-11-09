"""Combine existing feature evidence with the exact 1.0.25 release checks."""
from pathlib import Path
from datetime import datetime
from zoneinfo import ZoneInfo
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-31-release125'

def load(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

feature = load(ROOT / 'docs/validation-2026-10-31-v1.0.24-followup.json')
for path, expected in feature['productFilesSha256'].items():
    assert digest(ROOT / path) == expected, path
apk = load(ROOT / 'release/Mesting-Music-v1.0.25-verification.json')
notes = load(OUT / 'local-apk-notes-verification.json')
assert apk['version'] == notes['version'] == '1.0.25'
assert notes['versionCode'] == 46 and notes['notesCount'] == 4
assert notes['productionReader'] and notes['currentVersionOfflineHistoryMatches']
assert 'No issues found!' in (OUT / 'analyze.log').read_text(encoding='utf-8-sig')

rows = []
for line in (OUT / 'update-tests.jsonl').read_text(encoding='utf-8-sig').splitlines():
    if line.startswith('{'):
        rows.append(json.loads(line))
assert any(row.get('type') == 'done' and row.get('success') for row in rows)
suites = {row['suite']['id']: row['suite']['path'] for row in rows if row.get('type') == 'suite'}
tests = {row['test']['id']: row['test'] for row in rows if row.get('type') == 'testStart'}
current = {}
for row in rows:
    if row.get('type') != 'testDone' or row.get('hidden'):
        continue
    assert row['result'] == 'success' and not row.get('skipped')
    test = tests[row['testID']]
    path = Path(suites[test['suiteID']]).relative_to(ROOT).as_posix()
    record = current.setdefault(path, {'passed': 0, 'failed': 0, 'skipped': 0,
                                        'log': '.codex-artifacts/2026-10-31-release125/update-tests.jsonl'})
    record['passed'] += 1
assert sum(row['passed'] for row in current.values()) == 7
beta = feature['betaRegression']
for record in beta['latestPerFile'].values():
    record['log'] = '.codex-artifacts/2026-10-31-v124-followup/' + record['log']
beta['latestPerFile'].update(current)
assert len(beta['latestPerFile']) == 74
assert sum(row['passed'] for row in beta['latestPerFile'].values()) == 1242
result = {
    'date': '2026-10-31', 'preparedAt': datetime.now(ZoneInfo('Asia/Shanghai')).isoformat(),
    'version': '1.0.25', 'androidVersionCode': 46, 'baseVersion': '1.0.24',
    'baseCommit': 'b6bcd5425e0df3e03febdd460b56d0ed42004c52',
    'status': 'local_original_signed_release_prepared_pending_user_device_and_real_message_acceptance',
    'betaRegression': beta, 'stableRegression': feature['stableRegression'],
    'androidBackRegistration': feature['androidBackRegistration'],
    'analysis': {'issues': 0, 'scope': 'lib and test after version metadata update',
                 'log': '.codex-artifacts/2026-10-31-release125/analyze.log'},
    'releaseMetadataChecks': {'updateNotesAndIsolationTestsPassed': 7,
                              'includedIn1242CountNotAddedAgain': True,
                              'bundledNotesAndOfflineHistoryMatch': True,
                              'actualFinalApkProductionRangeReader': notes},
    'apkVerification': {'file': 'release/Mesting-Music-v1.0.25-verification.json',
                        'apkFile': 'release/' + apk['file'], 'bytes': apk['fileSize'],
                        'sha256': apk['sha256'], 'originalCertificateVerified': True,
                        'bothPinnedEngineLibrariesMatchManifest': True,
                        'fullWidthLoginArtworkPackagedByteIdentical': True},
    'sourceSnapshot': {'file': 'Mesting-Music-v1.0.25-source.zip',
                       'verificationFile': 'release/Mesting-Music-v1.0.25-source-verification.json',
                       'manifestInsideZip': 'SOURCE-SNAPSHOT.json',
                       'externalDigestKeptOutsideSnapshotToAvoidSelfReference': True},
    'togetherExit': feature['togetherExit'], 'messageCards': feature['messageCards'],
    'accountSourceInfo': feature['accountSourceInfo'], 'loginArtwork': feature['loginArtwork'],
    'hostRender': feature['hostRender'], 'featureProductFilesSha256': feature['productFilesSha256'],
    'releaseMetadataFilesSha256': {path: digest(ROOT / path) for path in [
        'assets/data/release-notes.json', 'lib/features/app_update/domain/release_history.dart',
        'tool/build_android_release_apk.ps1', 'tool/build_android_md3_beta_apk.ps1']},
    'dependencyLockUnchanged': True, 'customEngineUnchanged': True,
    'newVersionAssigned': True, 'apkBuiltAndOriginalSignatureVerified': True,
    'phoneAccessed': False, 'adbUsed': False, 'physicalUpgradeTestPerformed': False,
    'realAccountAccess': False, 'musicBackendAccess': False,
    'gitCommitted': False, 'gitPushed': False, 'published': False,
    'limitations': feature['limitations'][:2] + [
        'The actual signed APK has not been installed or exercised on a phone in this task.',
        'The complete source archive is verified separately after final documentation, without a self-referencing digest.',
    ],
}
(ROOT / 'docs/validation-2026-10-31-v1.0.25.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'version': '1.0.25', 'betaFiles': 74, 'betaPassed': 1242,
                  'releaseMetadataTestsIncluded': 7, 'staticIssues': 0, 'actualApkRangeReader': True}))
