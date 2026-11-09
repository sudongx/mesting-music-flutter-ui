"""Create reviewable75 documents from checked evidence; leave old releases intact."""
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import re
import shutil

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent

def read(path):
    return json.loads(path.read_text('utf-8-sig'))

def write(path, data):
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', 'utf-8')

host = read(OUT / 'host-summary.json')
performance = read(ROOT / 'docs/performance-2026-11-07-v1.0.75.json')
apk = read(OUT / 'candidate4/Mesting-Music-v1.0.75-verification.json')
inputs = read(OUT / 'candidate4/build-input.json')
before = read(OUT / 'before.json')
upgrade = read(OUT / 'device/upgrade175.json')
followup = read(OUT / 'device/playlist-readonly-followup.json')
awake = read(OUT / 'device-state-private.json')
inspection = read(OUT / 'device-inspection.json')
assert awake['restored'] and inspection['screenOffTimeout'] == '2147483647'
assert all(hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'] for row in inputs['files'])
deleted = [row['path'] for row in before['currentFiles'] if not (ROOT / row['path']).is_file()]
assert sum(path.startswith('lib/') for path in deleted) == 47
assert not any(row['status'] != 'passed' or row.get('actions', {}).get('observedSelections') != 12
               or not row.get('actions', {}).get('finalPaintedTabVerified')
               for row in [item['record'] for item in performance['verifiedRapidTabs']])
exits = (OUT / 'device/app-exits-final.txt').read_text('utf-8')
new_crashes = []
for block in re.split(r'(?=timestamp=)', exits):
    timestamp = re.search(r'timestamp=([\d-]+ [\d:.]+)', block)
    if timestamp and timestamp[1] >= '2026-11-07 14:13:45.300' and 'CRASH' in block:
        new_crashes.append(timestamp[1])
assert not new_crashes
stability = {
    'observed75NativeCrashCountSinceUpgrade': len(new_crashes),
    'coreRunCompletedWithoutCheckpointResume': True,
    'coreRunDurationSeconds': 379.614,
    'fullCatalogueOrLongTermStabilityAccepted': False,
    'old74NativeCrashFixed': False,
    'old74NativeCrashAtLocalTime': '2026-11-07 12:09:35',
    'actualGpuBackendConfirmed': False,
    'requestedBackendIn75Report': 'opengles',
    'rendererCompatibilityPolicyChanged': False,
}
performance.update({
    'stability': stability,
    'playlistReadOnlyFollowup': followup,
    'surfacePresentationEvidence': read(OUT / 'surface-presentation-summary.json'),
    'coreRawExportSha256': hashlib.sha256((OUT / 'device/core-flow-report.json').read_bytes()).hexdigest(),
    'coreRawExportBytes': (OUT / 'device/core-flow-report.json').stat().st_size,
})
write(ROOT / 'docs/performance-2026-11-07-v1.0.75.json', performance)
write(ROOT / 'docs/build-inputs-v1.0.75.json', inputs)
validation = {
    'version': '1.0.75', 'androidVersionCode': 96, 'date': '2026-11-07',
    'hostChecks': host,
    'actualApk': {key: apk[key] for key in ['sha256', 'fileSize', 'certificateSha256', 'originalSignature', 'v2Signature', 'v3Signature', 'debuggable', 'abis', 'buildInputsUnchangedThroughVerification', 'retiredAccountAotAndNativeMarkersAbsent']},
    'fixedProductAndBuildInputs': len(inputs['files']),
    'actualJniPackaging': read(OUT / 'native-packaging-verification.json'),
    'actualAudioBridgePackaging': read(OUT / 'audio-bridge-packaging-verification.json'),
    'actualR8Callbacks': read(OUT / 'qr-javascript-interface-verification.json'),
    'historicalNativeTests': read(OUT / 'native-historical-input-match.json'),
    'retiredAccount': {
        'dartProductFilesDeleted': [path for path in deleted if path.startswith('lib/')],
        'testFilesDeleted': [path for path in deleted if path.startswith('test/')],
        'nativeAndToolsDeleted': [path for path in deleted if not path.startswith(('lib/', 'test/'))],
        'sourceLevelRemoval': True, 'oldSavedChoiceBecomesGuest': True,
        'threePlatformCredentialKeysAndOwnerIdsRetained': True,
        'databaseSchemaVersion': 7, 'oldSchemaPassiveForUpgradeCompatibility': True,
        'userDatabaseCleared': False, 'remoteAccountDeleted': False,
    },
    'physical': {
        'upgrade': upgrade, 'coreScenarios': 34, 'coreRecords': 133,
        'coreFrames': 9588, 'statuses': performance['after']['statuses'],
        'rapidTabs': [item['record'] for item in performance['verifiedRapidTabs']],
        'originalPlatformRestoredByRunner': True,
        'taskOriginalSodaRestoredAtEnd': True, 'playbackLeftPaused': True,
        'visibleRetainedData': {'neteaseFavoriteDisplayCount': 674, 'sodaFavoriteDisplayCount': 62, 'allCloudRowsAudited': False},
        'temporaryPluggedStayAwakeRestored': True,
        'userNeverSleepSettingPreserved': True,
        'stability': stability, 'playlistFollowup': followup,
    },
    'performance': {'data': 'performance-2026-11-07-v1.0.75.json',
        'matchedStages': 41, 'continuous120FpsAccepted': False,
        'scope': 'Measured core interaction improvement, with failed playlist open retained; not every page/device/full-catalogue acceptance.'},
    'unchangedHistoricalBoundaries': ['prior66 QR/cold restore and NetEase full-track user acceptance retained',
        'prior71 basic Soda playback user acceptance retained',
        'VIP full media/301/helper400/cloud writes/rewards/download rights/DSP remain separate and unverified here'],
    'signerOrNasModified': False, 'credentialsExtracted': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'rejectedIntermediateBuilds': [
        {'candidate': name, 'reason': read(OUT / name / 'rejected-input-drift.json')['reason']}
        for name in ['candidate1', 'candidate2', 'candidate3']],
}
write(ROOT / 'docs/validation-2026-11-07-v1.0.75.json', validation)

lines = []
for platform, label in [('netease', '网易云'), ('kugou', '酷狗'), ('qishui', '汽水')]:
    row = performance['paired'][platform]
    a, b = row['before'], row['after']
    lines.append(f"| {label} | {row['stages']} | {a['rasterP90Ms']:.3f} → {b['rasterP90Ms']:.3f} | {a['rasterOver16_67Percent']:.3f}% → {b['rasterOver16_67Percent']:.3f}% | {a['buildP90Ms']:.3f} → {b['buildP90Ms']:.3f} |")
tabs = []
for item in performance['verifiedRapidTabs']:
    record, timing = item['record'], item['timing']
    tabs.append(f"| {record['platform']} | 12/12 | 已核对 | {timing['frames']} | {timing['rasterP90Ms']:.3f} |")
(ROOT / 'docs/performance-2026-11-07-v1.0.75.md').write_text(f'''# 1.0.75/code96：实机常用交互结果

本轮可比常用场景的栅格化慢帧减少，三平台快速 Tab 真正执行并通过路由/选中项/最终绘制核对。仍有超过 8.33ms 的帧，未达到持续 120 FPS 验收，也不是所有页面都已通过。旧账号源码清理见[实现说明](fixes-2026-11-07-v1.0.75.md)。

34 个常用场景于北京时间 14:19:07—14:25:26 连续采样，共 133 条记录、9,588 帧：84 段操作完成并取得样本，1 段失败，48 段条件跳过。这里的“通过”不要求每帧低于 8.33ms。唯一失败是 `qishui/playlist/open` 的 25 秒 `page_timeout`；之后手动打开显示歌曲和 62 首数量，原失败保留，原因未证明。

| 平台 | 可比阶段 | 栅格化 P90 / ms | 栅格化超过 16.67ms | UI 构建 P90 / ms |
| --- | ---: | ---: | ---: | ---: |
{chr(10).join(lines)}

以上是 74 全量报告与 75 常用交互报告的**相同成功阶段**，每段不少于 25 帧，共 41 段；不是 74 全量平均值与 75 局部平均值的比较。排除旧根分页、原账号保护历史页和已切换到实际入口的收藏页；两次原平台不同，公共阶段也不配对。所有阶段和排除规则在[JSON 数据](performance-2026-11-07-v1.0.75.json)中保留，没有只选变好的阶段。UI 构建 P90 小幅增加；汽水 P99 栅格化为 13.168→13.854ms，超过 16.67ms 的少量帧比例也上升，不能说各项全都变好。

| 主 Tab 场景 | 选择请求与实际选中 | 最终实际绘制页 | 帧数 | 栅格化 P90 / ms |
| --- | ---: | --- | ---: | ---: |
{chr(10).join(tabs)}

三平台均验证最后回到“我的”，动画被实际观测，报告保留每次请求/选中事件。74 三个平台的这一步都是失败，没有可用的同场景速度基线；本版证明该测试已执行成功，不能编造 Tab 提速百分比。

设备为同一 Xiaomi 23116PN5BC、Android16、1080×2400、120Hz、浅色模式。75 报告的原生请求后端为 OpenGLES，shader filter 支持为 true；74 没记录相同后端信息，启动日志也未证明最终初始化的后端。因此当前差异不能严格归因到某一项代码。推荐内容、缓存、温度、网络和手机性能悬浮窗也有差异。

另留六次滚动的本应用 SurfaceView TimeStats：74/75 分别为 115.475/114.605 平均层 FPS，janky 为 56/684、43/542。ADB 操作间隔不一致，这个短样本未显示整体改善，不与 Flutter 耗时混成一条 FPS 结论。Perfetto FrameTimeline 仍没有本应用命名层样本，系统/悬浮窗帧不冒充应用帧。早先固定坐标 Tab 点击也可能漏中收缩后的底栏，不算完成次数。

75 本轮覆盖升级与约 6 分 20 秒巡检未观察到新的应用崩溃；未执行全量目录或长期稳定性验收。74 在 12:09:35 的原生 raster SIGSEGV 仍是历史失败，本版没有证明根因已解决，也未修改渲染器兼容策略。玻璃品质、shader、角色动画和固定引擎保留。

手机原首次安装时间保持。结束时恢复原先的汽水平台、保持暂停，并撤销本轮临时充电保持唤醒；用户手动设置的永不休眠保持。未提取账号凭据、未修改独立助手/NAS、未触发主动媒体解析/奖励/云写入。最终主机与包内检查见[验证记录](validation-2026-11-07-v1.0.75.json)。
''', 'utf-8')
(ROOT / 'docs/performance-observations-2026-11-07-v1.0.75.md').write_text('''# 1.0.75：保留的问题与验收限制

汽水 `playlist/open` 在常用交互巡检中达到 25 秒页面等待上限，记录为失败，未覆盖为跳过或成功。随后只读手动打开相同“我喜欢的音乐”入口已显示歌曲，页面标示 62 首；这不证明所有 62 首均已加载、播放或通过性能验收，也不足以确定首次超时的唯一原因。本轮未据此修改汽水业务代码。

旧 74 的原生渲染崩溃根因没有在本版证明解决。75 使用原有兼容策略，报告只确认请求 OpenGLES；不能把请求值当成 GPU 后端初始化证明。一次约 6 分 20 秒完成的常用巡检不能代替长期、全目录和其他设备的稳定性测试。

旧 74 的两项页面诊断错误已在本地修正入口/UID，其中网易云用户歌单有真实驱动主机回归；75 常用场景未包含它或公共歌单，不冒称两项实机全量验收已通过。新的三平台快速 Tab 已实际通过。

本轮失败和跳过完整列在性能 JSON。没有把旧账号保护页或旧收藏界面当成相同内容来宣称提速，没有把系统 FrameTimeline 或性能悬浮窗瞬时 FPS 作为持续 120FPS 证明。VIP整曲、301/助手400、云封面/历史写入、奖励、下载权益、DSP 仍沿用既有未验边界。
''', 'utf-8')

# New local deliveries are create-only; never rewrite an old version or an
# already-frozen75 with differing bytes. No remote publication is performed.
destination = ROOT / 'release/Mesting-Music-v1.0.75.apk'
source = OUT / 'candidate4/Mesting-Music-v1.0.75.apk'
if destination.exists():
    assert hashlib.sha256(destination.read_bytes()).hexdigest() == apk['sha256']
else:
    with destination.open('xb') as target, source.open('rb') as stream:
        shutil.copyfileobj(stream, target)
assert hashlib.sha256(destination.read_bytes()).hexdigest() == apk['sha256']
apk['physicalUpgradeTestPerformed'] = True
apk['devicePerformanceReport'] = 'docs/performance-2026-11-07-v1.0.75.json'
apk['continuous120FpsAccepted'] = False
apk['coreRunStatusCounts'] = performance['after']['statuses']
write(ROOT / 'release/Mesting-Music-v1.0.75-verification.json', apk)
(ROOT / 'release/Mesting-Music-v1.0.75.apk.sha256').write_text(apk['sha256'] + '  ' + destination.name + '\n', 'utf-8')
print(json.dumps({'version': '1.0.75', 'code': 96, 'apkCopiedHashVerified': True,
    'removedDartFiles': 47, 'sourceFreezePending': True, 'continuous120FpsAccepted': False}, indent=2))
