"""Record completed checks only; synthetic fixtures are not account acceptance."""
from pathlib import Path
from datetime import datetime
from zoneinfo import ZoneInfo
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-10-31-release127'

def load(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

def parse(name):
    suites, tests, files, success = {}, {}, {}, None
    for line in (OUT / name).read_text(encoding='utf-8-sig').splitlines():
        try:
            row = json.loads(line)
        except ValueError:
            continue
        kind = row.get('type')
        if kind == 'suite':
            suites[row['suite']['id']] = row['suite']['path']
        elif kind == 'testStart':
            tests[row['test']['id']] = row['test']
        elif kind == 'done':
            success = row.get('success')
        elif kind == 'testDone' and not row.get('hidden'):
            test = tests[row['testID']]
            path = Path(suites[test['suiteID']]).relative_to(ROOT).as_posix()
            item = files.setdefault(path, {'passed': 0, 'failed': 0, 'skipped': 0})
            item['skipped' if row.get('skipped') else 'passed' if row.get('result') == 'success' else 'failed'] += 1
    return {'success': success, 'files': files}

beta, stable, back = [parse(name) for name in ['beta-final.jsonl', 'stable-final.jsonl', 'android-back-final.jsonl']]
followup = parse('beta-followup-final.jsonl')
assert followup['success'] is True
beta['files'].update(followup['files'])
for item in [beta, stable, back]:
    assert item['success'] is True
    assert all(row['failed'] == row['skipped'] == 0 for row in item['files'].values())
assert set(beta['files']) == set(load(OUT / 'beta-files-final.json'))
assert len(beta['files']) == 79 and sum(row['passed'] for row in beta['files'].values()) == 1276
assert sum(row['passed'] for row in stable['files'].values()) == 19
assert sum(row['passed'] for row in back['files'].values()) == 1
assert 'No issues found!' in (OUT / 'analyze-final.log').read_text(encoding='utf-8-sig')
assert 'All tests passed!' in (OUT / 'render-final.log').read_text(encoding='utf-8-sig')
screens = sorted((OUT / 'ui').glob('*.png'))
assert len(screens) == 14
apk = load(ROOT / 'release/Mesting-Music-v1.0.27-verification.json')
notes = load(OUT / 'local-apk-notes-verification.json')
assert apk['version'] == notes['version'] == '1.0.27'
assert apk['androidVersionCode'] == notes['versionCode'] == 48
assert notes['notesCount'] == 3 and notes['productionReader']
assert digest(ROOT / 'pubspec.lock') == '6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
changes = load(OUT / 'changes-from-v126.json')
product = sorted({row['path'] for row in changes if row['path'].startswith(('lib/', 'tool/', 'assets/', 'third_party/'))} | {'pubspec.lock', 'pubspec.yaml'})
result = {
    'date': '2026-10-31', 'preparedAt': datetime.now(ZoneInfo('Asia/Shanghai')).isoformat(),
    'version': '1.0.27', 'androidVersionCode': 48, 'localBaseVersion': '1.0.26',
    'baseCommit': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip(),
    'status': 'local_original_signed_release_prepared_pending_user_real_record_acceptance',
    'betaRegression': {'passed': 1276, 'failed': 0, 'skipped': 0, 'fileCount': 79, 'latestPerFile': beta['files'], 'log': '.codex-artifacts/2026-10-31-release127/beta-final.jsonl',
                       'followupLog': '.codex-artifacts/2026-10-31-release127/beta-followup-final.jsonl',
                       'aggregation': 'Latest complete result per file, without double counting. Follow-up tests cover redacted unknown outer fields.'},
    'stableRegression': {'passed': 19, 'failed': 0, 'fileCount': 2, 'latestPerFile': stable['files']},
    'androidBackRegistration': {'passed': 1, 'failed': 0, 'deviceUsed': False},
    'analysis': {'issues': 0, 'scope': 'lib and test'},
    'messages': {
        'readerAndroidIdentity': {'appver': '9.5.61', 'versioncode': '9005061', 'osver': '12'},
        'encryptedHeaderCookieAndUserAgentChecked': True,
        'restrictedToHistoryAndUsersReads': True, 'savedAccountIdentityUnchanged': True,
        'outerMessageContainersPreserved': True, 'doubleEncodedJsonRead': True,
        'legacyCompatibilityNoticeCannotHideModernText': True,
        'pureCompatibilityNoticeNeverInventsARecord': True,
        'manualSchemaExport': {'previewAndExplicitCopyRequired': True, 'accountChangeGuardTested': True,
                               'includesTextIdentifiersTokensOrUrlValues': False, 'automaticUpload': False,
                               'maxNodes': 96, 'maxDepth': 7, 'maxObjectFields': 32, 'maxArrayItems': 4},
        'realUserMessageObtained': False, 'actualRecordRootCauseConfirmed': False,
        'actualRecordFixedOnDevice': False, 'officialWebViewOnDeviceVerified': False,
        'fixtureBoundary': 'synthetic structural regressions; user poster is not a raw message payload',
    },
    'tabMotion': {'increasingIndex': 'new page enters right; old page exits left',
                  'decreasingIndex': 'new page enters left; old page exits right',
                  'everyAdjacentPairAndCrossTabJumpCheckedInDeclarativeNavigator': True,
                  'bothSurfacesShareProgress': True, 'reducedMotionTested': True,
                  'queueAndOriginalAnimationTimingPreserved': True, 'deviceGpuTested': False},
    'hostUi': {'productionChatAndDetailComponents': True, 'compact320WidthAt140PercentText': True,
               'screenshots': [{'path': str(p.relative_to(ROOT)).replace('\\', '/'), 'sha256': digest(p)} for p in screens],
               'fonts': 'private Windows host QA font loaded only in tests; absent from APK',
               'fixtures': 'synthetic, not real account or Android GPU evidence'},
    'apk': {'file': apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256'],
            'originalCertificate': apk['certificateSha256'], 'pinnedDualArmEngine': True,
            'glassShadersByteIdenticalToV126': True, 'actualApkRangeNotesReader': notes,
            'loginArtworkAbsent': apk['loginArtworkAssetAbsent']},
    'publicProtocolReferences': [{'url': 'https://github.com/NeteaseCloudMusicApiEnhanced/api-enhanced/blob/main/' + rel,
                                 'reviewedDate': '2026-10-31', 'packageVersion': '4.41.1',
                                 'reviewedFileSha256': digest(OUT / 'references/enhanced' / rel)}
                                for rel in ['util/request.js', 'module/msg_private_history.js', 'module/msg_private.js']],
    'sourceHashesAtValidation': {p: digest(ROOT / p) for p in product},
    'deviceAccess': False, 'realAccountAccess': False, 'backendAccess': False,
    'physicalUpgradeTestPerformed': False, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
}
(ROOT / 'docs/validation-2026-10-31-v1.0.27.json').write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'version': '1.0.27', 'betaFiles': 79, 'betaPassed': 1276, 'stablePassed': 19, 'backPassed': 1, 'issues': 0, 'screenshots': len(screens), 'realRecordAcceptance': 'pending'}, ensure_ascii=False))
