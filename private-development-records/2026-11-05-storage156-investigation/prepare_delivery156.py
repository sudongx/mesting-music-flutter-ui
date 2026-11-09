"""Publish a local frozen APK record from verified bytes and redacted evidence."""
from pathlib import Path
import datetime
import hashlib
import json
import shutil

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent

def read(name):
    return json.loads((OUT / name).read_text('utf-8'))

def write(path, record):
    path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')

host = read('host-check-summary.json')
preservation = read('final-preservation.json')
apk = read('candidate56-verification.json')
native = read('native-packaging-verification.json')
notes = read('local-apk-notes-verification.json')
state = read('upgrade-device-check.json')
before = read('device-readonly-14.json')
after = read('device-readonly-16.json')
last = read('device-readonly-19.json')
ui = read('controlled-ui-checks.json')
assert state['cleanup']['helperUninstalled']
assert state['reinstall']['installedApkSha256'] == apk['sha256']
assert notes['notesCount'] == 8 and notes['productionReader']
assert native['verifiedSlotClassPresent']
secure = ('FlutterSecure', 'mesting_verified', 'MestingVerified')
assert all(value == after['filesBefore'].get(name)
           for name, value in before['filesBefore'].items() if name.startswith(secure))
for report in [before, after, last]:
    assert report['filesUnchangedDuringRead']
    found = set()
    for store in report['stores']:
        if not store['namespace'].startswith('mesting_verified_login_v2_'):
            continue
        for alias in store['aliases']:
            for unwrap in alias.get('unwrapAttempts', []):
                assert unwrap['unwrapSuccess']
                for key, value in unwrap.get('knownEntries', {}).items():
                    assert value['decryptAndJsonValid'] and not value['tombstone']
                    found.add('netease' if 'netease' in key else 'kugou')
    assert found == {'netease', 'kugou'}
assert before['selectedAccount'] == after['selectedAccount'] == 'netease'
assert last['selectedAccount'] == 'kugou'
assert sum(any(n['label'] == '网易云账号' for n in x['nodes']) for x in ui) >= 2
assert sum(any(n['label'] == '酷狗账号' for n in x['nodes']) for x in ui) >= 2
assert not any(n['label'] in {'重新恢复', '重新登录'} for x in ui for n in x['nodes'])
for event in state['events'][7:]:
    value = event['result']
    if event['component'] == 'FreshKeyProbe' and event['phase'] in {'create', 'read'}:
        assert all(value[k]['decryptSuccess'] for k in ['rsa', 'aes'])

device = {
    'authorizedByUserForThisLoginFault': True,
    'androidApi': 36, 'targetPackage': 'com.mesting.music',
    'finalVersionName': '1.0.56', 'finalVersionCode': 77,
    'installedApkSha256': apk['sha256'],
    'initial55ApkMatchedFrozenDelivery': True,
    'initialFault': {
        'originalRsaPrivateKeyUnwrapFailed': True,
        'oldRecoveryRsaPrivateKeyUnwrapFailed': True,
        'androidError': 'KeyPermanentlyInvalidatedException',
        'oldRecoveryAccountEntries': 0,
        'authRequired': False, 'invalidatedByBiometricEnrollment': False,
        'originalInvalidationCause': 'UNKNOWN',
        'oldCiphertextRecovered': False,
    },
    'excludedConfoundedTrial': {
        'createdLocalTime': '2026-11-05 10:12', 'readLocalTime': '2026-11-05 10:35',
        'userReportedReinstalled52AndLoggedInBothPlatformsDuringInterval': True,
        'notEvidenceThatOrdinaryCoverInvalidatesKeys': True,
        'entireSessionOriginalFileBytesUnchanged': False,
    },
    'controlledSyntheticChecks': {
        'newRsaAndAesIndependentProcesses': True,
        'newRsaAndAesAfterFinalSameCodeReplacement': True,
        'actualShippedNativeSlotSaveReopenAndSeparateProcess': True,
        'actualShippedNativeSlotReadAfterReplacement': True,
        'syntheticTombstoneReopen': True,
        'syntheticAccountValuesOnly': True,
    },
    'realAccountChecks': {
        'newLoginPerformedByUser': ['netease', 'kugou'],
        'newLoginWithoutAgentClearingData': True,
        'bothNewRecordsUnwrappedAndDecryptedInIndependentProcess': True,
        'kugouColdRestoreBeforeCover': True,
        'kugouToSavedNetease': True,
        'neteaseColdRestoreBeforeCover': True,
        'sameFinalApkSameCodeReplacementWithoutDataClear': True,
        'credentialPointerAndSecureFileBytesIdenticalAcrossReplacement': True,
        'bothNewRecordsDecryptAfterReplacement': True,
        'neteaseColdRestoreAfterCover': True,
        'neteaseToSavedKugouAfterCover': True,
        'kugouColdRestoreAfterCover': True,
        'noReauthenticationDuringControlledRestoresAndSwitches': True,
        'versionCodeIncrementedInControlledRealAccountTest': False,
    },
    'cleanup': state['cleanup'],
    'agentClearedTargetData': False, 'agentUninstalledTarget': False,
    'agentRemovedOldKeyOrCiphertext': False,
    'agentChangedVpnSettings': False, 'credentialsOrOtpExported': False,
    'pending': [
        'Version-code-incremented future update with these retained accounts',
        'Readable legacy 50/51 real-device upgrade path',
        'Same VPN node on/off and network-switch matrix',
        'First-login artwork, complete playback and Android GPU behavior',
        'Kugou official profile/statistics/level/medal real-account acceptance',
    ],
    'loginStorageScopePassedOnThisDevice': True,
    'allDeviceAcceptanceComplete': False,
}
validation = {
    'version': '1.0.56', 'androidVersionCode': 77,
    'recordedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'host': host, 'device': device,
    'artifact': {
        'apkSha256': apk['sha256'], 'apkBytes': apk['fileSize'],
        'originalSignature': True, 'doubleArm': True,
        'customEngineAndSevenShadersUnchanged': True,
        'allTwelveNonAppNativeLibrariesMatch55': True,
        'jniClasses': 3, 'jniMethods': 5, 'jniFields': 12,
        'newNativeClassPresentAndExecutedOnDevice': True,
        'buildInputs': preservation['buildInputs'],
        'buildInputsMatchFinalApkPreparation': True,
        'apkReleaseNotesProductionReader': notes,
    },
    'preservation': preservation,
    'inheritedNotRerun': {'networkMediaJvm': 35, 'rust': 136, 'rustExternalIgnored': 6, 'ringSdk': 563},
    'historicalListeningTotalAndOctober683m10sResolved': False,
    'oldAcceptedOrUnknownPlaybackRecordsReplayed': False,
    'gitCommitted': False, 'gitPushed': False, 'backendAccess': False,
    'uploaded': False, 'published': False,
}
write(ROOT / 'docs/validation-2026-11-05-v1.0.56.json', validation)
apk.update({
    'file': 'Mesting-Music-v1.0.56.apk',
    'physicalUpgradeTestPerformed': False,
    'physicalSameCodeReplacementTestPerformed': True,
    'realAccountAccess': True,
    'realAccountAuthenticationPerformedByUser': True,
    'realAccountColdRestoreAndBidirectionalSwitchPassed': True,
    'deviceValidation': device,
    'jniPackaging': native,
    'actualApkNotesReader': notes,
    'finalBuildInputs': preservation['buildInputs'],
    'allFinalBuildInputsUnchanged': True,
})
target = ROOT / 'release/Mesting-Music-v1.0.56.apk'
assert not target.exists(), 'Never overwrite a frozen APK'
source = OUT / 'Mesting-Music-v1.0.56-device-candidate.apk'
assert hashlib.sha256(source.read_bytes()).hexdigest() == apk['sha256']
with target.open('xb') as dest, source.open('rb') as src:
    shutil.copyfileobj(src, dest)
assert hashlib.sha256(target.read_bytes()).hexdigest() == apk['sha256']
write(ROOT / 'release/Mesting-Music-v1.0.56-verification.json', apk)
(ROOT / 'release/Mesting-Music-v1.0.56.apk.sha256').write_text(apk['sha256'] + '  ' + target.name + '\n', 'utf-8')
print(json.dumps({'formalApkCopiedWithoutChangingInstalledBytes': True,
                  'sha256': apk['sha256'], 'deviceLoginStoragePassed': True}))
