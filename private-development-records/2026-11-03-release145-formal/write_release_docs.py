"""Write version-specific formal delivery docs after actual APK verification.

Old handoffs remain historical. Prefix AGENTS once, preserving its old bytes;
source freezing runs afterwards so these exact documents enter the archive.
"""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.45-verification.json').read_text('utf-8'))
payload = json.loads((OUT / 'formal-payload-verification.json').read_text('utf-8'))
notes = json.loads((OUT / 'local-apk-notes-verification.json').read_text('utf-8'))
checks = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
flags = json.loads((OUT / 'compiler-definitions.json').read_text('utf-8'))
assert not apk['togetherSyncDiagnosticLoggingEnabled']
assert payload['r4LogicPreserved'] and payload['permissionsIdenticalToR2']
assert notes['versionCode'] == 66 and notes['notesCount'] == 8
assert checks['analysisPassed'] and checks['formalLoggingAndSyncRegression']['counts']['success'] == 28
device = json.loads((ROOT / '.codex-artifacts/2026-11-03-r4-resume/device-r4-summary.json').read_text('utf-8'))
assert device['trackChangeCasesPassed'] == 7 and device['allCapturesStopped']

handoff = f'''# Mesting Music 1.0.45 / code66 本地正式交付

先读 `docs/INSTALL-v1.0.45.md`、`docs/validation-2026-11-03-v1.0.45.json` 和 `docs/fixes-2026-11-03-v1.0.45.md`。本入口接替此前“正式冻结仍44、45仅私有候选”的历史状态；这次是本地正式Release构建，不代表已上传或发布。

用户明确要求“构建为正式版的apk”，随后确认沿用1.0.45/code66、保留R4和全部功能、关闭诊断日志、原签名本地交付。没有新增手机安装或账号验收。本次保留R4全部产品行为，只更新当前版本说明，正式编译中关闭一起听日志、旧原生上报试验和本机通用诊断；保留更新检查与手动本机同步报告。

正式APK为 `release/Mesting-Music-v1.0.45.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。显示名Mesting Music，包名 `com.mesting.music.beta`，原证书、双ARM、定制Release引擎、7玻璃shader/8SDK库和许可证保持。完整源码 `Mesting-Music-v1.0.45-source.zip` 及外部校验见release目录；不含签名材料、设备采集、截图、官版参考或构建缓存。

本次关闭日志后的4个完整文件28项回归通过，静态分析0问题，实际正式APK的8条说明由生产Range读取器离线核对；实际Gradle编译参数确认三种私有日志/原生试验关闭。16项原生检查来自同会话R4且输入摘要仍一致，Release实际Android编译和DEX/资源表核验再次通过。132文件1636项Beta通过/1条件跳过、Stable21和导航54为既有结果；本次只复跑28项相关用例，不重复累加或宣称又跑全量。

R4候选已在此前获授权双开实测中两次覆盖安装，7项切歌全部通过，含双向首次恢复且从未播放、双向后台及双方桌面；2项未播放承载释放检查通过。三轮采集均已停止，一次roomCheck失败后轮询恢复。正式APK关闭日志后字节已变化，本次没有手机覆盖安装，不把候选测试冒充正式APK实测。

全部1.0.45页面功能保留：发现/列表加载定位、消息连续返回、歌单四操作、我的统计、完整关注粉丝和听歌足迹。界面详细范围见早期45实现文档；R4原理及实测见 `docs/SYNC-MEDIA-OWNER-R4-2026-11-03-v1.0.45.md`。正式说明只更新第一条，离线历史与APK内说明一致。

剩余边界：锁屏、独立设备、播放暂停、长期功耗/厂商省电与真机退房清理仍未验收；正式APK覆盖安装、真实账号页面权限及GPU仍由用户确认。官版个人资料历史总时长和十月683分钟未解决，旧weblog新播放与旧原生日志隔离不重发保持。多人报告、官版同款海报/二维码不在本次范围。

唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52，暂存为空。旧80份冻结物（含R4 APK/源码）及全部脏工作区保留，正式APK和源码另存；HEAD不是完整当前产品。未提交、推送、上传或发布。接续先只读核对，不reset/clean/stash、不拉取覆盖、不重发旧日志。后续操作沿用已经明确的需求和当前授权，新的跨会话手机/账号操作另行判断。
'''
install = f'''# Mesting Music 1.0.45 / code66 正式APK安装验收

本地正式原签名双ARM包：`release/Mesting-Music-v1.0.45.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。对应完整源码和校验见release目录及 `Mesting-Music-v1.0.45-source.zip`。此前R4与旧版本交付保持原字节，未上传发布。

显示名Mesting Music、既有安装包名及证书保持。可直接覆盖当前同签名1.0.45/code66候选，或从较早正式版本升级；不需要卸载、清除数据。真实正式包覆盖安装仍待用户操作，本次未访问手机。更新检查保持开启，私有阶段日志/旧原生试验/通用本机日志均关闭，手动有界同步报告保留。

1. 覆盖后检查账号、喜欢、下载、缓存、播放队列与一起听房间；如仍在房间，先在前台确认双方状态。
2. 重点复查刚恢复房间且接收端尚未播放时，另一端切歌；接收端留桌面等待，再检查是否已经更新。交换两端，连续切歌及双方桌面也复查。原轮询约5秒，实际网络和系统策略影响等待时间。
3. 锁屏、独立设备、暂停一段时间后恢复、长时功耗和厂商省电仍需独立验收；同机双开因音频焦点自动暂停，不能用它认证播放暂停同步。手动清后台和强制停止不作承诺。
4. 本版页面保留：发现刷新安全区、长列表加载末尾避让、聊天→消息→我的连续返回及草稿、歌单四操作同一行、我的统计、关注粉丝搜索筛选排序与主页、听歌足迹图表/区间/今日列表。按真实账号权限核对，旧内容和已解码封面保留。
5. 更新说明应为8条，第一条反映后台/首次恢复修复及双开验证，并明确锁屏/独立设备待验收；设置离线历史与APK说明一致。

本机新跑28项相关回归与分析0通过，实际APK签名/对齐/定制引擎/完整玻璃/SDK及8条说明读回通过。R4候选7项切歌和2项承载检查已实测；正式APK未重新安装验证。历史总时长及十月683分钟仍未解决，不重发旧记录。
'''
fixes = '''# 1.0.45 正式构建范围与验证

本轮在已通过所测双开场景的R4源码上构建正式APK，版本1.0.45/code66。用户确认保留全部功能、原签名、定制引擎、完整玻璃，仅关闭诊断日志并本地交付。

产品源码相对R4只更新 `assets/data/release-notes.json` 和 `lib/features/app_update/domain/release_history.dart` 的同一条版本说明，移除已过时的“后台待复测”，写明双开切歌通过及锁屏/独立设备待验收。其余508个Dart文件、全部原生R4实现和相关测试保持。正式构建仍通过现有入口，TOGETHER_SYNC_DIAGNOSTICS、MESTING_NATIVE_PLAYBACK_LOGGING和MESTING_LOCAL_DIAGNOSTICS编译为false；更新检查保持true。只保存白名单编译参数，不保存完整进程命令或凭据。

R4实现与7项实机切歌、2项未播放承载释放的证据见 `SYNC-MEDIA-OWNER-R4-2026-11-03-v1.0.45.md`。本次没有访问手机，不将候选的实测扩大为正式APK已验收。

关闭日志后的完整文件回归：诊断8项、共享快照6项、44后台10项、43后台4项，共28项通过；全工程静态分析0问题。正式APK的8条更新说明由生产Range读取器通过本地有界读取核对，没有网络请求。其余Beta132文件1636通过/1跳过、Stable21、导航54和原生16项保留既有证据，不重复计数。实际Release重新编译并核验原证书v2/v3、双ARM、16KiB ZIP对齐、定制引擎、7玻璃shader/8SDK库、R8内联后的租约代码和优化后的通知图标。

正式APK、完整源码、外部校验另存，旧80份冻结物、签名、依赖锁及所有脏工作区保留。源码排除私钥、设备采集、账号材料、截图和构建缓存。未提交推送上传发布。

锁屏、独立设备、播放暂停、长期功耗/厂商限制和真机退房仍未实测。官版个人资料历史总时长与十月683分钟未解决，旧日志不重发；其它真实页面权限、GPU及正式包覆盖安装继续独立验收。
'''
for path, text in [
    (ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.45.md', handoff),
    (ROOT / 'docs/INSTALL-v1.0.45.md', install),
    (ROOT / 'docs/fixes-2026-11-03-v1.0.45.md', fixes),
]:
    assert not path.exists(), path
    path.write_text(text, encoding='utf-8')
validation = {
    'date': '2026-11-03', 'version': '1.0.45', 'androidVersionCode': 66,
    'stage': 'local_original_signed_formal_release',
    'apk': {'path': 'release/' + apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256']},
    'formalLoggingAndSyncRegression': checks['formalLoggingAndSyncRegression'],
    'analysisRunThisBuild': True, 'analysisIssues': 0,
    'inheritedBeta': {'files': 132, 'passed': 1636, 'conditionalSkipped': 1},
    'inheritedStablePassed': 21, 'inheritedNavigationPassed': 54,
    'nativeScenariosInheritedFromIdenticalR4Inputs': 16,
    'actualAndroidReleaseCompilationPassed': True,
    'r4LogicPreserved': True, 'currentCompilerDefinitions': flags['whitelistedCompilerDefinitions'],
    'togetherSyncDiagnosticLoggingEnabled': False, 'experimentalNativePlaybackEnabled': False,
    'localDiagnosticsLoggingEnabled': False, 'manualBoundedSyncReportAvailable': True,
    'actualApkNotes': notes,
    'originalSignature': True, 'pinnedCustomReleaseEngine': True,
    'glassShaderFilesCompared': 7, 'sdkLibraryFilesCompared': 8,
    'optimizedMediaLeaseBridgeVerified': True, 'permissionsUnchangedFromR2': True,
    'r4CandidateTrackChangeCasesPassed': 7, 'r4CandidateLeaseReleaseChecksPassed': 2,
    'r4CandidateAllCapturesStopped': True, 'formalApkDeviceInstalledOrTested': False,
    'allBackgroundAcceptanceComplete': False,
    'historicalOfficialProfileTotalFixed': False, 'october683MinutesRecovered': False,
    'previousFrozenArtifactsToPreserve': 80,
    'deviceAccessThisFormalBuild': False, 'realAccountAccessThisFormalBuild': False,
    'backendAccess': False, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
    'sourceVerificationExternalToAvoidSelfReference': 'release/Mesting-Music-v1.0.45-source-verification.json',
}
(ROOT / 'docs/validation-2026-11-03-v1.0.45.json').write_text(
    json.dumps(validation, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
agents = ROOT / 'AGENTS.md'
previous = (OUT / 'AGENTS-before.md').read_bytes()
assert agents.read_bytes() == previous, 'Do not replace concurrently edited project instructions'
prefix = '**2026-11-03 本地正式交付1.0.45/code66：先读[45正式交接](HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.45.md)及[安装验收](docs/INSTALL-v1.0.45.md)。用户确认将R4保留全部功能、关闭诊断日志，以原签名构建正式APK本地交付；本次仅版本说明与正式编译开关变化。新跑关闭日志后的4整文件28项通过、分析0、实际APK8条说明生产读取核对；Beta132文件1636通过/1跳过、Stable21、导航54和原生16项为已有结果，不重复累加。原签名双ARM、定制引擎、7玻璃shader/8SDK库、R4媒体桥接和权限核验通过。此前R4候选双开切歌7项及承载释放2项通过；正式APK字节已变化，本次未手机安装或实测。锁屏/独立设备/播放暂停/长期功耗及真机退房未验收。APK/完整源码另存，旧80份冻结物、原签名/引擎/玻璃、全部脏改动、beta/b6bcd542及空暂存保持。历史总时长及十月683分钟未解决，旧日志隔离不重发。未提交推送上传发布；下方为历史时点。**\r\n\r\n'
agents.write_bytes(prefix.encode('utf-8') + previous)
print(json.dumps({'formalDocsWritten': True, 'previousAgentsBytesRetained': True}))
