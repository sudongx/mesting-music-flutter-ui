"""Write the final handoff only after actual device evidence is available."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi'); OUT = Path(__file__).resolve().parent
def read(path): return json.loads(path.read_text('utf8'))
apk = read(ROOT / 'release/Mesting-Music-v1.0.74-verification.json')
host = read(OUT / 'host-check-summary.json')
perf = read(ROOT / 'docs/performance-2026-11-07-v1.0.74.json')
install = read(OUT / 'device/installation74.json')
cache = read(OUT / 'device/cache-acceptance74.json')
first = read(OUT / 'first-device-candidate/installation74.json')
assert host['passed'] and perf['after']['status'] == 'completed'
assert perf['after']['platformRestored'] is True
assert apk['sha256'] == install['apkSha256']
assert install['after']['firstInstallTime'] == first['before']['firstInstallTime']
assert cache['cachedContentBeforeRefreshObserved'] and cache['replacementReadinessVerifiedByControlledHttpAndPng']
assert len(perf['sodaSeparate']['newScenarioIds']) == 8
validation = {
    'version': '1.0.74', 'androidVersionCode': 95, 'date': '2026-11-07',
    'implementationComplete': True, 'hostChecks': host,
    'overallPerformanceObjectiveAccepted': False,
    'measuredRasterRegressionRequiresLaterReview': True,
    'apk': {'file': apk['file'], 'sha256': apk['sha256'], 'bytes': apk['fileSize'],
            'originalSignature': apk['originalSignature'], 'bothArmAbis': apk['abis'],
            'fixedCustomEngineAndSevenShadersVerified': True, 'twelveUnchangedNonAppLibrariesVerified': True,
            'actualJniAndR8CallbacksVerified': True},
    'physicalInstallation': {**install, 'baselineVersion': '1.0.73', 'baselineCode': 94, 'allCandidateUpgradesPreservedOriginalFirstInstallTime': True},
    'physicalCache': cache,
    'devicePerformance': {'completed': True, 'before': perf['before'], 'after': perf['after'],
                         'paired': perf['paired'], 'sodaScenarioIds': perf['sodaSeparate']['newScenarioIds'],
                         'sodaStatuses': perf['sodaSeparate']['statuses'], 'frameTimingIsNotDisplayFps': True},
    'stability': perf['stability'],
    'releaseAcceptance': 'measurement candidate with recorded native crash; stability is not accepted',
    'samplingIssues': {'document': 'docs/performance-observations-2026-11-07-v1.0.74.md',
                       'productChangesAfterUserRequestedRecordOnly': False,
                       'oldMestingAccountSourceRemovalRequested': True,
                       'oldMestingAccountSourceRemovedInThisRelease': False,
                       'furtherFixesAwaitUserConfirmation': True},
    'firstDeviceCandidateRejectedAndRetained': True, 'ownerReloadRegressionReproducedAndFixed': True,
    'pictureProjectionRegressionReproducedAndFixed': True,
    'officialEvidence': perf['officialStaticMethods'],
    'sourceArchive': {'name': 'Mesting-Music-v1.0.74-source.zip', 'verification': 'release/Mesting-Music-v1.0.74-source-verification.json',
                      'note': 'External receipt verifies the complete current dirty source after these documents are frozen; no circular ZIP hash is embedded.'},
    'scope': {'authorizedDevicePerformanceAccess': True, 'privateAccountFilesOrTokensExtracted': False,
              'agentInitiatedSignerMediaResolution': False, 'helperModifiedOrDeployed': False,
              'vipFullPlaybackOr301CauseConfirmed': False, 'cloudCoverAndHistoryWritesAcceptedByServer': False,
              'rewardOrDownloadRightsOrDspAcceptance': False, 'oldAcceptedOrUnknownLogsReplayed': False,
              'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False},
    'priorAcceptancePreserved': ['66 QR original profile and full reopen', '66 NetEase automatic replacement full playback', '71 Soda basic playback'],
    'limitations': perf['limitations'],
}
(ROOT / 'docs/validation-2026-11-07-v1.0.74.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2) + '\n', 'utf8')
def metric(value): return '无有效配对' if value is None else f'{value:.2f}'
lines = ['\n## 本轮设备结果\n',
         '**本轮发现1次原生渲染SIGSEGV，已从断点补采；当前包仅作为测量候选，不是稳定性验收通过。按用户要求先记录，不继续改产品。旧账号与心动收藏排查见[待确认清单](performance-observations-2026-11-07-v1.0.74.md)。**\n',
         '**主要对比显示：UI构建仅小幅变化，网易云/酷狗栅格化耗时均变差，本轮整体性能目标未验收通过。三平台主Tab巡检均有stage_error，也未通过。**\n',
         f"原签名1.0.74/code95已保留数据覆盖安装，原首次安装时间保持；已安装公开APK哈希与交付包一致。最终SHA256：`{apk['sha256']}`。\n",
         f"主机Beta{host['beta']['files']}文件{host['beta']['passed']}通过/{host['beta']['skipped']}条件跳过，Stable{host['stable']['passed']}、导航{host['navigation']['passed']}，分析0。最终12张主机图与本轮已逐张查看的图字节一致。原生14/29仅匹配输入的历史结果，不相加为新运行。\n",
         f"旧版采样{perf['before']['statuses']}；新版采样{perf['after']['statuses']}。失败与跳过保留在性能JSON中。汽水8个场景单独统计：{perf['sodaSeparate']['statuses']}。\n",
         '| 配对平台 | 阶段数 | UI构建P90：旧→新(ms) | Raster P90：旧→新(ms) |\n|---|---:|---:|---:|\n']
for key, label in [('netease', '网易云'), ('kugou', '酷狗')]:
    row = perf['paired'][key]
    lines.append(f"| {label} | {row['stages']} | {metric(row['before']['buildP90Ms'])} → {metric(row['after']['buildP90Ms'])} | {metric(row['before']['rasterP90Ms'])} → {metric(row['after']['rasterP90Ms'])} |\n")
lines.append('\n这里只比较成功且采到至少25帧的相同阶段；旧根视口分页、进入Mesting账号保护页的网易云/酷狗history场景排除，原平台不同则公共页也排除。新汽水没有73逐帧基线，不宣称前后FPS收益。新版因原生崩溃续跑，后续阶段来自新进程；网络、推荐内容、缓存温度和设备温度未完全控制。完整逐阶段数据含好转与变慢的结果，不据单次采样承诺所有页面持续120FPS。\n')
lines.append('\n缓存恢复结论来自已记录时点的真实设备图与受控未完成网络/PNG解码回归；首次无缓存、图片确实缺失等情形仍可能加载。详见验证JSON中的physicalCache字段。\n')
with (ROOT / 'docs/performance-2026-11-07-v1.0.74.md').open('a', encoding='utf8') as f: f.writelines(lines)
handoff = f'''# 当前本地测量候选交接：1.0.74/code95（2026-11-07）

先读本文、[性能说明](docs/performance-2026-11-07-v1.0.74.md)、[实现](docs/fixes-2026-11-07-v1.0.74.md)、[安装](docs/INSTALL-v1.0.74.md)、[验证](docs/validation-2026-11-07-v1.0.74.json)与[逐阶段数据](docs/performance-2026-11-07-v1.0.74.json)，按`.codex-artifacts/2026-11-07-release174/after.json`只读核对，不回填旧冻结物。

**用户最新要求：先提交前后数据，采样新问题只记录，后续确认后再集中修改。产品源码已停止修改。12:09:35原生渲染SIGSEGV已保存，后续以同包断点补采；完成报告不等于连续无崩溃，当前为测量候选，稳定性未验收。**

**166个相同成功阶段的配对数据中，UI构建小幅变化但网易云/酷狗栅格化均变差，整体优化目标未验收通过。三平台tabs/pages均stage_error；新增汽水虽已加入8场景并采样，快速Tab阶段未通过。不要按主机测试数字或完成状态改写成全通过。**

## 已完成

用户确认全应用性能优化、允许本轮ADB实机对比、少量提前加载、保持默认入口和完整玻璃/角色动画。首页懒构建与启动订阅收缩、汽水账号隔离显示缓存/分页、图片解析复用、后台JSON处理，以及取消代次、旧错误、跨账号旧资料、汽水封面DTO准备链问题已修复。三平台诊断包含汽水8场景与真实Tab回调；历史标签不会使下一个歌单场景误判为空。

Beta{host['beta']['passed']}/{host['beta']['skipped']}条件跳过（{host['beta']['files']}文件），Stable{host['stable']['passed']}、导航{host['navigation']['passed']}、分析0；12最终主机图字节与已看图一致。Media3的14与CENC/准备29只继承同输入历史。实际APK原签名双ARM、固定引擎、7shader、12旧非app库、JNI/DSP声明及R8回调另验。

保留数据安装已读回74/code95，原首次安装时间和已安装公开APK哈希核对通过。设备缓存复测与完整三平台FrameTiming报告完成，失败/跳过及逐页配对边界见性能资料；这些不等于每页120FPS。中间未定稿候选与失败证据单独保留，最终只冻结本次APK与完整当前脏树源码，不覆盖73或更早86份冻结物。

APK：`release/{apk['file']}`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。源码：`Mesting-Music-v1.0.74-source.zip`；完整性/CRC/逐项哈希以同目录验证收据和`release/Mesting-Music-v1.0.74-SHA256.txt`为准。

## 未完成与边界

新增采样问题与后续清理范围见[观察清单](docs/performance-observations-2026-11-07-v1.0.74.md)：原生渲染崩溃未修；history巡检误入旧账号保护页已排除主要对比；“心动收藏”是平台收藏复用旧界面，不是已证明旧账号数据。用户要求连旧Mesting账号体系源码一并移除，仍待确认具体清理方案，未在74删除，不误删平台收藏和本地数据。

本轮设备授权只用于当前性能工作，未提取私有账号文件/令牌或主动发起媒体签名测试；没有修改或部署独立助手/NAS，没有主动领奖、重放旧日志或发布。云封面/双向历史写入、本人VIP整曲、旧301与NAS HTTP400、奖励、下载资格、DSP仍沿用既有未验边界。官方历史可见与页面顺畅不能替代这些验收。独立助手仍按[73契约](docs/qishui-helper-contract-v1.0.73.md)处理，不接管另一会话。

66扫码原账号、重开保持、网易云自动补源整曲及71基本播放的用户确认保持。手机号停止；旧51回收APK不恢复，63源码ZIP不补。官方静态分析只证明文中列出的调用链，不能说三家所有页面/动态实验被完整复刻。

## 后续注意

beta/HEAD b6bcd5425e0df3e03febdd460b56d0ed42004c52、空暂存、原签名、依赖锁和历史脏改保留。无Git提交推送、上传或发布。新会话先只读收据与用户新反馈，不自动重测重建冻结包、清理/同步或外推新的手机、账号、NAS部署和发布授权。
'''
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.74.md').write_text(handoff, 'utf8')
prefix = f'''**2026-11-07 当前本地与本轮实机测量候选1.0.74/code95：先读[74交接](HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.74.md)、[性能](docs/performance-2026-11-07-v1.0.74.md)、[采样问题](docs/performance-observations-2026-11-07-v1.0.74.md)、[验证](docs/validation-2026-11-07-v1.0.74.json)和[逐阶段数据](docs/performance-2026-11-07-v1.0.74.json)，按release174/after.json只读核对。用户最新要求先给前后数据，新问题只记录，确认后再改；停止产品修改。12:09:35原生渲染SIGSEGV后同包断点补采，稳定性未通过，不称无崩溃；配对栅格化变差，整体优化目标未通过，三平台主Tab巡检均失败。旧账号体系源码级移除已列范围待确认，心动收藏是平台数据共用旧界面，未删。默认入口先缓存后刷新、附近加载、玻璃/角色动画保留。首页懒构建、汽水缓存/歌单分页、JSON后台及图片/取消/旧错误/跨账号显示/封面准备链修复；三平台诊断含汽水8场景。Beta{host['beta']['passed']}/{host['beta']['skipped']}条件跳过、Stable63、导航57、分析0、12最终图字节等同已看图；原生14/29只继承同输入历史。原签名双ARM/固定引擎/7shader/12旧非app库/JNI/DSP声明/R8另验。保留数据覆盖与逐帧报告完成，失败跳过和变化明列，不宣称所有页120FPS。73及86旧冻结物/签名/锁/历史脏树、beta/b6bcd542与空暂存保持，74另存不回填。旧301/400、本人VIP整曲/云写入/奖励/下载/DSP边界保持；独立助手/NAS未动，不外推未来设备/账号/部署/发布授权。66与71已确认验收保持，手机号停止；旧51回收APK不恢复、63ZIP不补、旧日志不重放。未提交推送上传发布备份。下方均历史时点。**

'''
(ROOT / 'AGENTS.md').write_bytes(prefix.encode('utf8') + (OUT / 'AGENTS-before.bin').read_bytes())
print(json.dumps({'finalDocsWritten': True, 'apkSha256': apk['sha256'], 'performanceCompleted': True}, ensure_ascii=False))
