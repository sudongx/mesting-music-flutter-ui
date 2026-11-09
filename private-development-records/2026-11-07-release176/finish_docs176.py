"""Generate final76 records only after actual device and host evidence exists."""
from collections import Counter
from pathlib import Path
import hashlib
import json
import re
import shutil

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent

def read(path):
    return json.loads(path.read_text('utf-8-sig'))

def write(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2)+'\n', 'utf8')

host = read(OUT/'host-summary.json')
performance = read(ROOT/'docs/performance-2026-11-07-v1.0.76.json')
surface = read(OUT/'surface-presentation-final-summary.json')
visual = read(OUT/'device/visual-acceptance.json')
upgrade = read(OUT/'device/upgrade176-candidate3.json')
audio = read(OUT/'device/audio-route-acceptance.json')
native_equivalence = read(OUT/'device/native-output-candidate3-equivalence.json')
final_phone = read(OUT/'device/final-state.json')
apk = read(OUT/'candidate3/Mesting-Music-v1.0.76-verification.json')
inputs = read(OUT/'candidate3/build-input.json')
for row in inputs['files']:
    assert hashlib.sha256((ROOT/row['path']).read_bytes()).hexdigest() == row['sha256']
assert all(host[s]['failed'] == 0 for s in ['beta','stable','navigation'])
assert 'No issues found!' in (OUT/host['analysis']['log']).read_text('utf-8-sig')
assert performance['after']['status'] == 'completed'
assert upgrade['after']['installedApkSha256'] == apk['sha256']
assert native_equivalence['allDexPayloadsByteIdentical'] and native_equivalence['allNativeSourceInputsByteIdentical']
assert final_phone['matchesFinalCandidate'] and not final_phone['ownAudioTrackStarted']
assert visual['menuFullyDismissed'] and visual['greyLowerVeilAbsentInReviewedScenes']
assert visual['platformHomeAndTopRestored'] and visual['queueBlackLoadingVeilAbsent']
menus = [r for r in performance['newMenuAndQueueRecords']
         if r['scenario'].endswith('-menu') and r['phase'] != 'pages']
queue_records = [r for r in performance['newMenuAndQueueRecords']
                 if r['scenario'].endswith('/queue-motion')]
assert len(menus) == 12 and all(r['status'] == 'passed' for r in menus)
assert len(queue_records) == 2 and all(r['status'] == 'skipped' and r['reason'] == 'queue_empty' for r in queue_records)
for row in menus:
    actions = row['actions']
    cycles = 6 if row['phase'] == 'fastReverse' else 3
    if row['scenario'].endswith('-menu'):
        assert actions['observedOpenAndClose'] and actions['menuCycles'] == cycles
        assert actions['actionsSelected'] == 0
    else:
        assert actions['finalQueueClosed'] and actions['queueCycles'] == cycles
        assert actions['playbackCommands'] == 0
assert all(t['afterRecord']['status']=='passed' and
    t['afterRecord']['actions']['observedSelections']==12 and
    t['afterRecord']['actions']['finalPaintedTabVerified']
    for t in performance['verifiedRapidTabs'])
rejected = read(OUT/'device/candidate2-core-report.json')['session']
physical = {
    'device': 'Xiaomi 23116PN5BC / Android16 / SDK36',
    'retainedDataUpgrade': upgrade,
    'core': performance['after'],
    'fresh75Baseline': performance['before'],
    'pairedStages': performance['paired'],
    'verifiedRapidTabs': performance['verifiedRapidTabs'],
    'menuStageResults': menus,
    'queueMotionAutomaticRecords': queue_records,
    'visualAcceptance': visual,
    'nativeOutputRouting': audio,
    'nativeOutputPlaybackWasOnCandidate2': True,
    'nativeOutputCodeAndDexIdenticalInFinalCandidate3': True,
    'candidate2RejectedEntirely': {'statuses':dict(Counter(r['status'] for r in rejected['records'])),
        'reportRetainedPrivately':True,'includedInFinalPerformancePairs':False},
    'ownSurfaceComparison': surface,
    'screenOffTimeout':2147483647,'stayOnWhilePluggedIn':0,
    'endState':'NetEase, current track paused, Bluetooth route retained; no running diagnostic or screen recorder.',
    'finalStateReadback':final_phone,
    'continuous120FpsAccepted':False,'old74NativeCrashProvenFixed':False,
    'fullCatalogueOrLongTermStabilityAccepted':False,
}
validation = {
    'version':'1.0.76','androidVersionCode':97,'date':'2026-11-07','candidate':3,
    'hostChecks':host,'nativeOutputHostLifecycleAssertions':23,
    'nativeMedia3AndCencHistoricalCountsNotNewRuns':[14,29],
    'hostImagesExported':27,'hostImagesExplicitlyViewed':12,
    'actualApkChecks':{name:read(OUT/name) for name in ['native-packaging-verification.json',
        'audio-bridge-packaging-verification.json','qr-javascript-interface-verification.json']},
    'physical':physical,
    'limitations':performance['limitations']+[
        'Only the explicitly reviewed visual scenes were accepted; no claim that all pages/animations are artifact-free.',
        'Real output-route playback may exercise existing history/listening hooks; no explicit cloud-edit or reward/download action was part of these tests.',
        'A Soda coordinate miss in candidate2 triggered media resolution and HTTP302. Private transport/helper involvement was not intercepted; no NAS deployment or VIP acceptance.',
        'Prior66 user-accepted QR/reopen/NetEase full playback and71 basic Soda playback remain accepted.',
    ],
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,
}
write(ROOT/'docs/validation-2026-11-07-v1.0.76.json',validation)
write(ROOT/'docs/build-inputs-v1.0.76.json',inputs)

def interval(before, after, key):
    return f"{before[key]:.3f} → {after[key]:.3f}"

lines = [
    '# 1.0.75 → 1.0.76 实机性能及画面复查', '',
    '同一台 Xiaomi23116PN5BC、正式release APK、固定引擎/7份shader、OpenGLES请求。75为本轮新采短基线，76仅使用修正后的候选3。FrameTiming是Flutter构建/栅格耗时，不是屏幕持续FPS；不宣称稳定120FPS。', '',
    '## 采样完整性', '',
]
for label, data in [('75',performance['before']),('76候选3',performance['after'])]:
    lines.append(f"- {label}：{data['scenarios']}场景，{data['records']}记录，{data['statuses']}，{data['frames']}帧；状态{data['status']}。")
lines += ['', '## 同场景配对栅格耗时', '',
    '仅匹配两侧通过且各不少于25帧的相同场景/阶段，pages另列，不把新增菜单阶段混入。P95/P99均由原始帧重新计算。', '',
    '| 平台 | 配对阶段 | P90 ms | P95 ms | P99 ms |',
    '|---|---:|---:|---:|---:|',
]
for platform in ['netease','kugou','qishui','common','all']:
    row = performance['paired'][platform]
    if row['stages']:
        values = [interval(row['before'],row['after'],'raster'+suffix+'Ms') for suffix in ['P90','P95','P99']]
        lines.append(f"| {platform} | {row['stages']} | {' | '.join(values)} |")
lines += ['', '构建耗时、逐阶段结果、失败与条件跳过完整列于同名JSON，不能只引用改善项。动态内容、缓存/网络、顺序及温度均影响结果，不能作严格单因归因。', '',
    '## 快速Tab、菜单及遮挡', '',
    '- 三平台各12次真实Tab请求，逐次选中核验及最终单一绘制页核验，详见JSON。',
    '- 网易云/酷狗“我的”和播放器菜单共12个正常/快速反向/过渡阶段通过，逐次核验打开和关闭，菜单项选择数为0。两个队列自动场景因queue_empty前置判定跳过；这不能用来证明实机没有队列，手动录像及固定手势已能展开列表。队列自动逐阶段耗时仍有验收缺口，不把手动12个计划循环称为自动已核验。',
    '- 用户指出的候选2菜单残留及灰色横向遮挡按失败处理，151条记录整轮拒收（84采样/13失败/54跳过）。根菜单在嵌套导航中漏检并未清理；修正前新增4个嵌套主机用例均复现失败。候选3改为持有确切根弹层，所有异常路径清理，清理失败即中断。',
    '- 具体实机录像复核结果与场景范围见validation的visualAcceptance；保留完整玻璃和角色动画。', '',
    '## 同输入的系统呈现观察', '',
    '| 操作 | 75自身图层jank% | 76候选3自身图层jank% | 75→76温度°C |',
    '|---|---:|---:|---|',
]
for row in surface['pairs']:
    a,b = row['before'],row['after']
    lines.append(f"| {row['workload']} | {a['jankyPercent']:.3f} | {b['jankyPercent']:.3f} | {a['temperatureCStart']}–{a['temperatureCEnd']} → {b['temperatureCStart']}–{b['temperatureCEnd']} |")
lines += ['',
    '仅使用Mesting自身SurfaceView的TimeStats；每组24次ADB输入，12个计划循环，中间每次打开/关闭未单独逐帧核验。滚动latency缓冲重叠且有空闲及输入命令延迟，不可当独立动画样本池；8ms取整桶不能等同8.333ms期限，也不用编码视频/系统浮层证明FPS。候选2和重叠播放的旧捕获另存，不混入上表。', '',
    '## 功能及边界', '',
    '返回平台复用已加载内容/封面并回默认首页顶部，目标首页用实时位移过渡；新内容及封面均准备好再替换。主机覆盖刷新失败和身份变化，实机只接受已观察的场景，不外推所有网络条件。', '',
    '队列首次展开录像中未见整片黑色加载遮罩。个别尚无缓存的行封面仍在列表展开后到达，这不是所有首次网络图片已立即可见的验收。', '',
    '设备页列出本机和已连接蓝牙；原生AudioTrack实际路由在本机和耳机间切换，蓝牙保持连接。真实播放检查在候选2进行，最终候选3的相关原生源码及DEX逐字节一致；最终另复核列表。本机音量原为0，保留原值，未做人耳音质验收。', '',
    '旧74原生SIGSEGV根因未证明解决；本轮短时巡检不是长期稳定性或全页面验收。VIP整曲、下载权益、奖励、云写入及DSP实际输出不由本轮推出。保留旧Mesting74项源码移除和Drift7被动兼容，不清库。', '',
]
(ROOT/'docs/performance-2026-11-07-v1.0.76.md').write_text('\n'.join(lines),'utf8')

install = ROOT/'docs/INSTALL-v1.0.76.md'
text = install.read_text('utf8')
text = text.replace('（草稿，以下候选2已拒收）','')
text = text.replace('候选2因菜单残留和灰色遮挡拒收，下列旧哈希只用于失败证据定位；当前正在构建修正候选3，尚无最终交付APK。完成实机复查后本草稿才更新为最终安装记录。\n\n','')
text = re.sub(r'111204369字节',str(apk['fileSize'])+'字节',text)
text = text.replace('1d7f11dbf4aba1445300871d5e918d54a4547bc444c59dd7ed0dd5f891cdf87d',apk['sha256'])
text = text.replace('覆盖75/code96，读回76/code97',
    '保留数据覆盖75/code96到76/code97，随后把被拒收的候选2同版本替换为修正候选3；实际已安装APK的SHA-256与最终交付逐字节一致，读回76/code97')
install.write_text(text,'utf8')
fixes = ROOT/'docs/fixes-2026-11-07-v1.0.76.md'
text = fixes.read_text('utf8')
text = text.replace('Beta249文件2814通过/1条件跳过',f"Beta{host['beta']['files']}文件{host['beta']['passed']}通过/{host['beta']['skipped']}条件跳过")
text = text.replace('新增缓存/导航/菜单回归共8项','新增缓存/导航/菜单回归共14项')
text += '\n候选3最终实机复查、完整采样及各项限制已写入同版performance与validation文件。构建中断后的恢复沿用相同1613输入；主机中断时的未完成文件重新整文件执行，不累加部分文件或重复通过数。\n'
text += '\n恢复回归期间，release_146_download_resume_test的一项下载状态等待超时；没有修改产品或夹具，单独完整文件复跑通过。原失败保留，最终按该文件整份复跑结果替换，不把主机负载推断写成已证明根因。\n'
fixes.write_text(text,'utf8')
beta, stable = host['beta'], host['stable']
core = performance['after']
paired_text = '；'.join(f"{name}栅格P90 {row['before']['rasterP90Ms']}→{row['after']['rasterP90Ms']}ms"
    for name,row in performance['paired'].items() if name in ['netease','kugou','qishui'] and row['stages'])
handoff = f'''# 1.0.76 / code97 当前会话交接（2026-11-07）

当前本地及手机为修正候选3，公开包com.mesting.music，内部beta。先读本文件、同版fixes/performance/validation，按`.codex-artifacts/2026-11-07-release176/after.json`及verify_final176.py只读核对，不重新构建或回填冻结物。

已完成用户确认的首页内容/封面保留、默认首页顶部返回、平台连续过渡、Tab/菜单绘制工作、播放器内待播列表黑色加载门移除及原生本机输出入口激活。灰色遮挡与未退出菜单的候选2按失败保留，整轮不纳入最终比较；修正后的嵌套导航、异常/取消清理和清理失败中断已主机及实机复核。具体可见场景见validation.visualAcceptance，不能外推全部页面。

最终常用巡检{core['scenarios']}场景/{core['records']}记录/{core['frames']}帧，{core['statuses']}。三平台快速Tab各12/12真实选中与最终绘制页核验；12个新增菜单阶段通过，两个队列自动场景因queue_empty判定跳过，手动录像及固定手势另列。{paired_text}。构建、尾部及系统自身图层数据全列同版报告，不能只挑改善项，不称持续120FPS、长期稳定性或旧74原生SIGSEGV根因已解决。

主机Beta{beta['files']}文件{beta['passed']}通过/{beta['skipped']}条件跳过；Stable{stable['passed']}通过/{stable['skipped']}条件跳过；导航{host['navigation']['passed']}；分析0。完整文件替换中断/旧结果，不累加复跑。输出注册表23项主机断言新跑，原生14/29仅同输入历史不相加。最终原签名、双ARM、固定引擎/7shader/12非app库/JNI/DTO/DSP声明及2个R8回调另验。27张主机图片导出，其中12张已看；夹具不替代账号设备验收。

已75/code96→76/code97保留数据覆盖，再同版本替换失败候选2为候选3，实际已装APK字节哈希与交付一致；首次安装时间保持2026-11-04 15:08:54。原生本机/蓝牙真实AudioTrack路由验收在候选2完成，最终候选3全部DEX及原生源码输入逐字节一致，最终另看设备列表。本机音量原为0且未调整，无人工听感/音质验收。结束网易云当前曲目暂停/蓝牙保持，永不休眠2147483647、充电常亮0保持，无挂起诊断/录屏/构建/安装工作。

设备可见浏览及路由实际播放可能触发现有播放历史/上报钩子，不作为云写入验收。候选2汽水坐标误点触发过媒体解析HTTP302，实际私有传输/助手参与未截取，不宣称没有签名请求；没有NAS配置/部署、私有凭据提取、奖励、下载或主动云编辑菜单。VIP整曲/301/400/权益/DSP等旧缺口保留，66和71用户已验结果不否认，手机号路线停止，独立助手不接管。

旧75及更早90冻结物、签名/锁、beta/b6bcd542及空暂存保护；74项旧Mesting源码移除保持，Drift7旧表仅被动兼容，不清库。76 APK和完整源码另存，源码ZIP哈希见release的同版source-verification文件。旧51回收APK不恢复、63ZIP不补、旧日志不重放。未提交/推送/上传/发布/备份。任务已结束；新会话只读核对后报告，继续依用户新指令，不自动设备/账号/NAS或后台操作。
'''
(ROOT/'HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.76.md').write_text(handoff,'utf8')
agents = ROOT/'AGENTS.md'
header = f"**2026-11-07 当前本地及实机1.0.76/code97修正候选3：先读[76交接](HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.76.md)、[性能](docs/performance-2026-11-07-v1.0.76.md)及[验证](docs/validation-2026-11-07-v1.0.76.json)，按release176/after.json和verify_final176.py只读接收。首页缓存及封面保留/默认首页顶部/平台过渡/Tab菜单/队列黑色加载层/本机输出入口已实现。候选2菜单残留与灰色横断遮挡整轮拒收；根/内部导航漏检及异常清理修复，候选3实际复查场景和边界详见验证。常用{core['scenarios']}场景{core['records']}记录{core['frames']}帧，{core['statuses']}；三平台Tab各12/12，菜单队列18阶段。{paired_text}，不称持续120/长期稳定或旧74原生退出根因解决。Beta{beta['passed']}/{beta['skipped']}跳过、Stable{stable['passed']}/{stable['skipped']}跳过、导航{host['navigation']['passed']}、分析0，原生23新跑/14与29历史不相加。最终原签名双ARM/固定引擎/7shader/12非app库/JNI/DSP/R8另验。96→97及失败候选同版替换均保留数据/首次安装时间。90旧冻结物、签名锁/历史脏树/beta/b6bcd542/空暂存保护，76另存不回填；旧74项删除与Drift7被动兼容保持。结束网易云当前曲目暂停/蓝牙，永不休眠及充电常亮原0保持。汽水误点有HTTP302媒体尝试，不外推私有传输/NAS/整曲或云写入验收；账号/奖励/下载/DSP/301/400旧边界及66/71用户已验保持，手机号停止，不接管助手。无挂起任务，未提交推送上传发布备份。下方均历史时点。**\n\n"
header = header.replace('菜单队列18阶段','菜单12阶段/队列自动2跳过')
assert '当前本地及实机1.0.76/code97修正候选3' not in agents.read_text('utf8')
agents.write_text(header+agents.read_text('utf8'),'utf8')
assert not (ROOT/'release/Mesting-Music-v1.0.76.apk').exists()
shutil.copyfile(OUT/'candidate3/Mesting-Music-v1.0.76.apk',ROOT/'release/Mesting-Music-v1.0.76.apk')
apk['physicalUpgradeTestPerformed'] = True
apk['rejectedSameVersionCandidateReplaced'] = True
apk['actualInstalledApkHashMatchesFinal'] = True
apk['performanceReport'] = 'docs/performance-2026-11-07-v1.0.76.json'
write(ROOT/'release/Mesting-Music-v1.0.76-verification.json',apk)
(ROOT/'release/Mesting-Music-v1.0.76.apk.sha256').write_text(apk['sha256']+'  Mesting-Music-v1.0.76.apk\n','utf8')
print({'finalDocsGenerated':True,'betaPassed':host['beta']['passed'],
       'verifiedMenuQueueStages':len(menus),'apkSha256':apk['sha256']})
