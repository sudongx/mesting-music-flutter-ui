"""Record exact per-file final results and this locally signed delivery."""
from pathlib import Path
from datetime import datetime
from zoneinfo import ZoneInfo
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-31-release126'
def load(path): return json.loads(path.read_text(encoding='utf-8-sig'))
def digest(path):
    with path.open('rb') as stream: return hashlib.file_digest(stream, 'sha256').hexdigest()
def parse(name):
    suites, tests, files, success = {}, {}, {}, None
    for line in (OUT / name).read_text(encoding='utf-8-sig').splitlines():
        if not line.startswith('{'): continue
        try: row = json.loads(line)
        except ValueError: continue
        kind = row.get('type')
        if kind == 'suite': suites[row['suite']['id']] = row['suite']['path']
        if kind == 'testStart': tests[row['test']['id']] = row['test']
        if kind == 'done': success = row.get('success')
        if kind == 'testDone' and not row.get('hidden'):
            test = tests[row['testID']]
            path = Path(suites[test['suiteID']]).relative_to(ROOT).as_posix()
            item = files.setdefault(path, {'passed': 0, 'failed': 0, 'skipped': 0,
                                           'log': '.codex-artifacts/2026-10-31-release126/' + name})
            item['skipped' if row.get('skipped') else 'passed' if row.get('result') == 'success' else 'failed'] += 1
    return {'success': success, 'files': files}

latest = {}
runs = {}
for name in ['beta-final.jsonl', 'beta-cache-final.jsonl', 'beta-write-final.jsonl']:
    result = parse(name); latest.update(result['files']); runs[name] = {'success': result['success']}
assert parse('beta-cache-final.jsonl')['success'] is True
assert set(latest) == set(load(OUT / 'beta-files-final.json'))
assert len(latest) == 78 and sum(row['passed'] for row in latest.values()) == 1267
assert all(row['failed'] == row['skipped'] == 0 for row in latest.values())
stable, back = parse('stable-final.jsonl'), parse('android-back-final.jsonl')
assert stable['success'] and sum(row['passed'] for row in stable['files'].values()) == 19
assert back['success'] and sum(row['passed'] for row in back['files'].values()) == 1
assert 'No issues found!' in (OUT / 'analyze-final.log').read_text(encoding='utf-8-sig')
assert 'All tests passed!' in (OUT / 'login-render-final.log').read_text(encoding='utf-8-sig')
art = load(OUT / 'ui/login/preview-evidence.json')
assert art['loginArtworkRemoved'] and art['screenshots'] == 20
assert not (ROOT / 'assets/branding/login/companions-bottom.png').exists()
assert 'companions-bottom' not in (ROOT / 'pubspec.yaml').read_text(encoding='utf-8')
apk = load(ROOT / 'release/Mesting-Music-v1.0.26-verification.json')
notes = load(OUT / 'local-apk-notes-verification.json')
assert apk['version'] == notes['version'] == '1.0.26'
assert apk['androidVersionCode'] == notes['versionCode'] == 47
assert notes['notesCount'] == 5 and notes['productionReader'] and notes['currentVersionOfflineHistoryMatches']
changed = subprocess.check_output(['git', 'ls-files', '--modified', '--others', '--exclude-standard', '-z'], cwd=ROOT).decode('utf-8').split('\0')
product = sorted({path for path in changed if path.startswith('lib/') and path.endswith('.dart') and (ROOT / path).is_file()} |
                 {'pubspec.yaml', 'pubspec.lock', 'assets/data/release-notes.json',
                  'tool/build_android_release_apk.ps1', 'tool/build_android_md3_beta_apk.ps1'})
assert digest(ROOT / 'pubspec.lock') == '6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
result = {
    'date': '2026-10-31', 'preparedAt': datetime.now(ZoneInfo('Asia/Shanghai')).isoformat(),
    'version': '1.0.26', 'androidVersionCode': 47, 'localBaseVersion': '1.0.25',
    'baseCommit': 'b6bcd5425e0df3e03febdd460b56d0ed42004c52',
    'status': 'local_original_signed_release_prepared_pending_user_device_and_real_message_acceptance',
    'betaRegression': {'passed': 1267, 'failed': 0, 'skipped': 0, 'fileCount': 78,
                       'aggregation': 'Latest complete result per file; a rerun replaces that file, never adds duplicate tests.',
                       'latestPerFile': latest, 'rawRunStatus': runs,
                       'earlierFailureResolved': 'Fixed a host test waiting a fixed 25ms before notification/file cleanup; final test waits for the callback and durable fixture content.'},
    'stableRegression': {'passed': 19, 'failed': 0, 'fileCount': len(stable['files']), 'latestPerFile': stable['files']},
    'androidBackRegistration': {'passed': 1, 'failed': 0, 'deviceUsed': False, 'latestPerFile': back['files']},
    'analysis': {'issues': 0, 'scope': 'lib and test', 'log': '.codex-artifacts/2026-10-31-release126/analyze-final.log'},
    'messageRecord': {'mobileReadEapiWireIdentityVerified': True,
                       'historyAndConversationPreview': True, 'nestedAndOuterRecordPayloads': True,
                       'mobileIdentityCannotBeUsedForSends': True, 'retainedCookieJarIsolated': True,
                       'receivedOfficialLinkOnly': True, 'pureCompatibilityTextNeverInventsARecord': True,
                       'realUserMessageObtained': False, 'officialWebViewOnDeviceVerified': False,
                       'fixtures': 'synthetic, no real account accessed'},
    'browseCache': {'platforms': ['netease', 'kugou'], 'persistsOnSuccessfulReadNotOnExit': True,
                     'staleContentFirstBackgroundRevalidation': True, 'failedRefreshRetainsPrevious': True,
                     'accountPlatformRouteAndQueryIsolation': True, 'credentialAndEpochGuards': True,
                     'replacesOnlyAffectedPageBatch': True, 'explicitMutationsNeverCachedOrReplayed': True,
                     'actualDailyProviderRestartTest': True, 'actualBothPlatformLibraryStreamRestartTests': True,
                     'corruptionAndInterruptedWriteRecovery': True, 'storageFailureKeepsLivePath': True,
                     'maxDiskBytes': 33554432, 'maxEntries': 800, 'maxEntryBytes': 8388608,
                     'maxDecodedResponseBytes': 4194304, 'maxDecodedEntries': 24, 'maxConcurrentRefreshes': 3,
                     'automaticRefreshCooldownSeconds': 60, 'manualRefreshBypassesCooldown': True,
                     'notPersisted': ['login credentials and request headers', 'live room state', 'private messages', 'stream URLs and write operations']},
    'imageCache': {'startupIndexRecovery': True, 'ordinaryBetaCoversUseExistingDiskCache': True,
                   'maxDiskBytes': 268435456, 'maxFiles': 4000, 'semanticIdVersionAndThumbnailPreserved': True,
                   'knownExpiredSignatureParametersCoalesced': True, 'interruptedWriteRecovery': True,
                   'corruptImageRecoveryRetained': True, 'onDeviceColdStartMeasured': False},
    'tabMotion': {'increasingIndex': 'new page enters left, old page exits right',
                  'decreasingIndex': 'new page enters right, old page exits left',
                  'bothReplacementRouteSurfacesShareProgress': True, 'reducedMotionTested': True,
                  'latestQueuedDestinationRetained': True, 'deviceGpuTested': False},
    'loginArtwork': {'removedFromProductSourceAndAssetManifest': True, 'apkAssetAbsent': apk['loginArtworkAssetAbsent'],
                      'hostScreenshots': 20, 'comparisonBoards': 3,
                      'themes': ['light', 'dark'], 'methods': 8, 'choicePages': 2,
                      'qrAndAccountRequestsMocked': True, 'hostCjkFontsUsedOnlyInPrivateHarness': True},
    'apkVerification': {'file': 'release/Mesting-Music-v1.0.26-verification.json',
                        'apkFile': 'release/' + apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256'],
                        'originalCertificateVerified': True, 'pinnedDualArmEngineVerified': True,
                        'productionRangeNotesReader': notes},
    'sourceSnapshot': {'file': 'Mesting-Music-v1.0.26-source.zip',
                       'verificationFile': 'release/Mesting-Music-v1.0.26-source-verification.json',
                       'manifestInsideZip': 'SOURCE-SNAPSHOT.json', 'externalDigestAvoidsSelfReference': True},
    'productFilesSha256': {path: digest(ROOT / path) for path in product},
    'dependencyLockUnchanged': True, 'customEngineUnchanged': True,
    'phoneAccessed': False, 'adbUsed': False, 'physicalUpgradeTestPerformed': False,
    'realAccountAccess': False, 'musicBackendAccess': False, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
    'limitations': [
        'The actual reported private message and its official detail page require user acceptance on the phone.',
        'Process restart is covered by recreated disk-cache and real-provider fixtures, not an actual phone process kill.',
        'No on-device installation, GPU/long-run performance or two-device Together acceptance was performed.',
        'Uncached, evicted, corrupt or manually cleared resources still require a live fetch; disk reads and decoding are not zero latency.',
    ],
}
(ROOT / 'docs/validation-2026-10-31-v1.0.26.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'version': '1.0.26', 'betaFiles': 78, 'betaPassed': 1267, 'stablePassed': 19,
                  'androidBackPassed': 1, 'staticIssues': 0, 'loginScreens': 20, 'actualApkRangeReader': True}))
