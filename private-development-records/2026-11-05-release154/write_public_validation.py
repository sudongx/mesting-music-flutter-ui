"""Export only fixed public verification facts, excluding credentials and host commands."""
from pathlib import Path
import json

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
def read(name):
    return json.loads((out / name).read_text('utf-8-sig'))

host, native = read('host-check-summary.json'), read('native-packaging-verification.json')
apk = json.loads((root / 'release/Mesting-Music-v1.0.54-verification.json').read_text('utf-8'))
notes, build = read('local-apk-notes-verification.json'), read('build-final-verification.json')
assert notes['notesCount'] == 8 and build['versionCode'] == 75
record = {'version': '1.0.54', 'androidVersionCode': 75, 'packageName': 'com.mesting.music',
    'appName': 'Mesting Music', 'localOnly': True,
    'beta': {key: host['beta-complete.jsonl'][key] for key in ['files', 'counts', 'completeAndSuccessful', 'completeFileRerunProvenance']},
    'stable': {key: host['stable-complete.jsonl'][key] for key in ['files', 'counts', 'completeAndSuccessful']},
    'navigation': {key: host['search-back-player.jsonl'][key] for key in ['files', 'counts', 'completeAndSuccessful']},
    'analysisIssues': 0, 'wholeFileSuccessfulRerunsReplacePriorResults': True,
    'initialFailuresRetainedPrivately': True,
    'nativeJvm': {'background': 16, 'systemHttp': 13, 'credentialFamily': 6, 'totalPassed': 35,
        'httpFixturesLoopbackOnly': True, 'actualAndroidRuntime': False,
        'scenarios': ['IPv6 stalled -> IPv4 fast fallback and losing-socket cleanup',
            'binary POST sent once', 'ordered cookies', 'gzip decoding', 'cross-host private-header removal',
            'manual GET redirects and no-follow', 'POST307 no replay', 'HTTP429 receipt',
            'full body deadline', '18MiB streaming', 'userinfo rejected', 'HTTP503 Retry-After0 no replay',
            'global CookieHandler isolation', 'fixed native error family without exception text']},
    'rustHost': host['rustHost'],
    'sdkHistoricalOnly': host['sdkHistoricalOnly'],
    'finalHostScreenshots': {'total': 40, 'coreWelcomeLoginDiagnostics': 12, 'allLoginNavigation': 28,
        'lightDarkAndLargeText': True, 'visuallyInspected': True, 'physicalGpuMeasured': False},
    'welcomeMotion': host['welcomeFrameScheduling'],
    'diagnostics': {'schema': 2, 'memoryOnly': True, 'maximumEvents': 80,
        'fixedPhaseAndFamilyOnly': True, 'credentialsOrRawExceptionsIncluded': False},
    'storage': {'existingCipherConfigurationUnchanged': True, 'resetOnError': False,
        'primaryEncryptedBytesRetainedOnFailure': True, 'verifiedLoginRecoveryNamespace': 'mesting_verified_recovery_v1',
        'nativeCommittedDataKeysAndMarkers': True, 'readbackBeforeAccountPublish': True,
        'samePendingNativeReadShared': True, 'namespaceQueueIsolation': True,
        'plugin': 'flutter_secure_storage10.3.1 local minimal Android fork',
        'originalLockBackupPreserved': True, 'lockEntriesChanged': ['flutter_secure_storage'],
        'otherLockEntriesAndSdkConstraintsUnchanged': True,
        'androidKeystoreOnAffectedDeviceVerified': False},
    'network': {'systemDnsProxyTlsDefaultRoute': True, 'physicalNetworkBinding': False,
        'vpnSettingsModified': False, 'certificateVerificationDisabled': False,
        'rustActualAndroidOutboundUsesSystemBridge': True, 'streamingBodyPreserved': True,
        'jniStreamMaximumChunkBytes': 65536, 'unknownWriteAutomaticallyReplayed': False,
        'nativeLibraries': 'OkHttp5.3.2 and Okio3.16.4', 'fixedLibraryLicensesBundled': True},
    'actualApk': {'file': apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256'],
        'certificateSha256': apk['certificateSha256'], 'originalSignature': True,
        'sourceAndBuildInputsVerified': build['sourceFileHashesMatched'], 'compilerFlagsObservedDuringBuild': True,
        'nativePlaybackExperiment': False, 'localPrivateDiagnosticLogging': False, 'updateCheckEnabled': True,
        'customEngineBytesMatch': True, 'glassShadersByteIdentical': 7,
        'unchangedOldSdkLibraries': 6, 'rebuiltRustLibraries': native['rebuiltRustLibraries'],
        'ringReceiveBufferLibrariesVerified': 2, 'abis': apk['abis'],
        'actualDexJniClasses': len(native['jniClassesDefinedInDex']),
        'actualDexJniMethodSignatures': len(native['jniMethodSignaturesAndFlagsChecked']),
        'actualDexJniPublicFields': 12, 'alignmentAndZipCrcVerified': True, 'productionNotesReader': notes},
    'preservation': {'oldFormalFrozenArtifacts': 98, 'newFormalPairMakes': 100,
        'oldSourcePathsRetained': 2487, 'branch': 'beta', 'head': 'b6bcd5425e0df3e03febdd460b56d0ed42004c52',
        'indexEmpty': True, 'originalSigningKeyPreserved': True, 'earlierCandidatesRetained': True},
    'notPerformed': ['physical52or53Upgrade', 'affectedDeviceColdRestore', 'realMusicAccountLogin',
        'sameVpnSameNodeOnOff', 'wifiCellularTransition', 'completeRealCdnSongPlayback', 'physicalGpuMeasurement',
        'phoneAdbOrEmulatorAccess', 'backendAccess', 'gitCommitPushUploadPublish'],
    'unresolved': ['initialDeviceNativeStorageFailureFamilyUnknown', 'neteaseHistoricalTotalDuration', 'October683min10sec'],
    'oldAcceptedOrUnknownPlaybackRecordsReplayed': False,
    'officialStaticComparison': {'neteaseVersion': '9.6.15', 'kugouVersion': '20.8.6',
        'matchesUserInstalledOfficialVersions': 'UNKNOWN', 'runtimeEvidence': False},
    'sourceZipVerification': 'release/Mesting-Music-v1.0.54-source-verification.json',
    'phoneAcceptance': False, 'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False}
(root / 'docs/validation-2026-11-05-v1.0.54.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print('Public fixed-category validation written; device/account/VPN/GPU acceptance remains unperformed.')
