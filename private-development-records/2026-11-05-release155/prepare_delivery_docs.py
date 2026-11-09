"""Bind public delivery records to fresh host checks and the actual signed APK."""
from pathlib import Path
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
load = lambda path: json.loads(path.read_text('utf-8-sig'))
checks = load(OUT / 'host-check-summary.json')
apk_path = ROOT / 'release/Mesting-Music-v1.0.55-verification.json'
apk = load(apk_path)
jni = load(OUT / 'native-packaging-verification.json')
notes = load(OUT / 'local-apk-notes-verification.json')
inputs = load(OUT / 'build-input-final.json')
before = load(OUT / 'state-before.json')
flags = load(OUT / 'compiler-definitions.json')
expected = {'USE_CLOUDBASE_AUTH':'true', 'ENABLE_APP_UPDATE_CHECKS':'true',
    'MESTING_NATIVE_PLAYBACK_LOGGING':'false', 'MESTING_LOCAL_DIAGNOSTICS':'false',
    'TOGETHER_SYNC_DIAGNOSTICS':'false', 'APP_UPDATE_PACKAGE_NAME':'com.mesting.music'}
assert flags['whitelistedCompilerDefinitions'] and all(v == expected for v in flags['whitelistedCompilerDefinitions'])
for item in inputs['files']:
    assert hashlib.sha256((ROOT / item['path']).read_bytes()).hexdigest() == item['sha256'], item['path']
assert len(inputs['files']) == 1513
assert checks['analysisPassed'] and notes['notesCount'] == 8 and notes['versionCode'] == 76
assert len(jni['jniClassesDefinedInDex']) == 3 and len(jni['jniMethodSignaturesAndFlagsChecked']) == 5
assert sum(map(len, jni['jniPublicDtoFieldTypesVerified'].values())) == 12
apk.update({'sourceAndBuildInputsVerified': len(inputs['files']),
    'compilerFlagsObservedDuringBuild': True, 'actualDexJniClasses':3,
    'actualDexJniMethodSignatures':5, 'actualDexJniPublicFields':12,
    'actualJniAndNativePackagingVerified':True, 'productionNotesReader':notes})
apk_path.write_text(json.dumps(apk, ensure_ascii=False, indent=2) + '\n', 'utf-8')
validation = {
    'version':'1.0.55', 'androidVersionCode':76, 'packageName':'com.mesting.music',
    'appName':'Mesting Music', 'localOnly':True,
    'beta':{k:v for k,v in checks['beta-complete.jsonl'].items() if k != 'perFile'},
    'stable':{k:v for k,v in checks['stable-complete.jsonl'].items() if k != 'perFile'},
    'navigation':{k:v for k,v in checks['search-back-player.jsonl'].items() if k != 'perFile'},
    'analysisIssues':0, 'wholeFileSuccessfulRerunsReplacePriorResults':True,
    'new155Cases':checks['new155Cases'],
    'https':{'missingTlsReproducedBeforeFix':True, 'actualLoopbackTlsServer':True,
        'androidFactoryExercisedWithMockSystemPolicyAndDns':True,
        'originalHostnameCertificateVerification':True, 'wrongHostnameRejected':True,
        'httpConnectProxyVerified':True, 'largeStreamOver18MiBVerified':True,
        'inFlightGenerationChangePostSentOnce':True, 'handshakeCloseReleasesSocket':True,
        'neteaseFirstArtworkDecodedThroughFactory':True,
        'kugouStatisticsGradeMusicAgeMedalsReadThroughFactory':True,
        'physicalAndroidTlsOrVpnExecuted':False},
    'images':{'automaticAndExplicitSameUrlRetriesVerified':True,
        'successfulNeighborPixelsRetained':True, 'restartRequiredByDesign':False},
    'storage':{'readableBothPlatformCredentialsRestoreWithoutReplacement':True,
        'unreadableTargetReauthenticationPreservesCurrentAccount':True,
        'cancelAndFailedSavePreserveCurrentAccount':True,
        'verifiedRecoverySurvivesNewRepositoryInstances':True,
        'oldEncryptedBytesRetained':True, 'originalCipherAndNamespaceOptionsUnchanged':True,
        'resetOnError':False, 'initialUserKeyInvalidationCauseKnown':False,
        'permanentlyInvalidKeyAutomaticallyDecrypted':False,
        'physicalKeystoreColdRestoreVerified':False},
    'kugouOfficial':{'standardProtocolAndCredentialAppIdPreserved':True,
        'completeHeadersAndBodyDeadline':True, 'actualAbort':True,
        'smallJsonLimitBytes':4*1024*1024, 'unknownWritesAutomaticallyReplayed':False,
        'sameTokenSuccessfulQrForcesOverviewRetry':True,
        'networkHttpBusinessFormatErrorsSeparated':True,
        'realOfficialAccountDataValidated':False},
    'diagnostics':{'schema':2, 'memoryOnly':True, 'maximumEvents':80,
        'fixedCategoriesOnly':True, 'signedUrlsCredentialsDeviceIdsOrRawExceptionsIncluded':False},
    'inheritedNativeJvm':checks['inheritedNativeJvm'],
    'inheritedRustHost':checks['inheritedRustHost'],
    'sdkHistoricalOnly':checks['sdkHistoricalOnly'],
    'unchangedNativeThirdPartyAndMotionInputsVerified':checks['unchangedNativeThirdPartyAndMotionInputsVerified'],
    'finalHostScreenshots':{'total':24, 'visuallyInspected':True,
        'lightDarkNarrowAndLargeText':True, 'currentPlatformLabelClippingRepaired':True,
        'physicalGpuMeasured':False},
    'welcomeMotion':checks['inheritedWelcomeMotion'],
    'actualApk':apk, 'pubspecLockSha256':before['lockSha256'], 'lockUnchangedFrom54':True,
    'oldFormalFrozenArtifacts':100, 'newFormalPairMakes':102,
    'sourceZipVerification':'release/Mesting-Music-v1.0.55-source-verification.json',
    'notPerformed':['physical54to55Upgrade','physicalColdRestore','realAccountAccess',
        'sameVpnSameNodeOnOff','wifiCellularSwitch','completeCdnSongPlayback',
        'physicalGpuMeasurement','adbOrEmulatorAccess','backendAccess','commitPushUploadPublish'],
    'unresolved':['initialDeviceKeyInvalidationCause','neteaseHistoricalTotalDuration','October683min10sec'],
    'oldAcceptedOrUnknownPlaybackRecordsReplayed':False,
    'phoneAcceptance':False, 'gitCommitted':False, 'gitPushed':False, 'uploaded':False, 'published':False,
}
(ROOT / 'docs/validation-2026-11-05-v1.0.55.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2) + '\n', 'utf-8')
summary = '\n\n## 55最终主机与交付核对\n\nBeta185文件2046通过、2条件跳过；Stable63、独立导航55、分析0。24张明暗/窄屏/大字主机图已查看，切换页大字当前平台文字裁切已按实际字高修正。1513项产品/构建输入与实际编译一致；原签名双ARM、原定制引擎、7份玻璃shader和全部非app原生库保持54对应字节，实际DEX的3类5方法12字段JNI及最终APK8条生产Range说明另验。原生JVM35、Rust136/6外网忽略及SDK563均为对应输入不变范围的历史结果，本轮未重跑。具体哈希以release中的verification/SHA256为准。\n'
fixes = ROOT / 'docs/fixes-2026-11-05-v1.0.55.md'
assert '## 55最终主机与交付核对' not in fixes.read_text('utf-8')
with fixes.open('a', encoding='utf-8') as stream: stream.write(summary)
handoff = ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.55.md'
with handoff.open('a', encoding='utf-8') as stream: stream.write(summary)
agents = ROOT / 'AGENTS.md'
old_agents = agents.read_bytes()
prefix = '**2026-11-05 本地交付1.0.55/code76：先读[55交接](HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.55.md)、[安装](docs/INSTALL-v1.0.55.md)及[实现](docs/fixes-2026-11-05-v1.0.55.md)。按确认修复Android自定义直连HTTPS漏建TLS、连接代次租约/回环隔离、同地址图片重订阅，以及旧目标平台不可读时直接重新认证和酷狗同令牌扫码后刷新。保留原加密字节和可读旧登录，明确keyInvalidated不能盲目重试或承诺解开旧密钥；初始失效原因未知。Beta185文件2046通过/2跳过、Stable63、导航55、分析0及24张已查看主机图；JVM35、Rust136/6外网忽略、SDK563仅对应同输入继承，不重跑计数。1513编译输入、原证书双ARM/定制引擎/7shader/全部54非app原生库、DEX的3类5方法12字段JNI及APK8条说明另验。原100份冻结物保留，55 APK/完整源码另存共102份；签名/与54一致的锁、全部原脏改动、beta/b6bcd542及空暂存保持。未手机/ADB/真实账号/后台/VPN设置/提交推送发布，不接管旧Gitee。55原设备覆盖升级、冷恢复、首次图片、双平台切换、真实官方资料及同VPN同节点开关/完整播放/GPU待验收；54用户新登录可冷恢复的反馈不冒充55验收。历史总时长及十月683分10秒仍未解决，旧日志不重发。新接手先只读核对后等待，不自动Git同步、清理、构建或外推设备/账号/发布授权；下方均保留历史时点。**\n\n'
agents.write_bytes(prefix.encode('utf-8') + old_agents)
assert agents.read_bytes().endswith(old_agents)
(OUT / 'build-input-readback.json').write_text(json.dumps({'filesVerified':len(inputs['files']), 'allProductBuildInputHashesMatch':True, 'previousAgentsBytesPreservedExactly':True}, indent=2) + '\n', 'utf-8')
print(json.dumps({'publicValidationPrepared':True, 'buildInputsVerified':1513, 'oldAgentsBytesPreserved':True}))
