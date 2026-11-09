"""Emit public handoff only after the actual signed APK and host checks pass."""
from pathlib import Path
import hashlib
import json
import zipfile

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent

def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

checks = read(out / 'host-check-summary.json')
assert checks['analysisPassed']
assert all(checks[name]['completeAndSuccessful'] for name in (
    'beta-complete.jsonl', 'stable-complete.jsonl', 'search-back-player.jsonl'))
apk = read(root / 'release/Mesting-Music-v1.0.43-verification.json')
notes = read(out / 'local-apk-notes-verification.json')
assert notes['versionCode'] == 64 and notes['notesCount'] == 6
assert apk['engineBytesMatchPinnedManifest'] and apk['upgradeIdentityVerified']
assert apk['nativePluginsAndDiagnosticsBridgePresent']['TogetherBackgroundPlugin']
old = read(out / 'frozen-before.json')
for row in old:
    path = Path(row['path'])
    assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], path

renders = ['comments-menu-最热-closed.png', 'comments-menu-全部-closed.png',
           'vinyl-round.png', 'pending-cover-retained.png',
           'capsule-compact-netease.png', 'capsule-compact-kugou.png']
assert all((out / 'ui' / name).is_file() for name in renders)
beta = checks['beta-complete.jsonl']
stable = checks['stable-complete.jsonl']
nav = checks['search-back-player.jsonl']
summary = (f"{beta['files']}文件{beta['counts']['success']}项Beta通过、"
           f"{beta['counts'].get('skipped', 0)}项条件跳过；Stable{stable['counts']['success']}项、"
           f"导航与界面整文件{nav['counts']['success']}项通过，静态分析0问题。")
validation = {
    'version': '1.0.43', 'androidVersionCode': 64,
    'date': '2026-11-03', 'timezone': 'Asia/Shanghai',
    'hostChecks': checks, 'actualApkReleaseNotes': notes,
    'confirmedScope': {
        'menu': 'sort/scope dropdown closing must not reopen the manually hidden IME',
        'artwork': 'classic vinyl label is a circle in ordinary and Together layouts',
        'background': 'home/another app/lock screen; process is alive, no manual task clear',
        'foregroundTwoWaySyncAcceptedByUser': True,
        'loading': 'remove rectangular black loading curtain, retain spinner and old decoded cover',
        'scroll': 'long-page scroll compacts capsule into bottom controls, top expands it',
        'chat': 'friend message avatar opens the same public profile, draft survives return',
    },
    'redBeforeFix': {
        'sortHiddenImeReopened': True, 'scopeHiddenImeReopened': True,
        'rootPopupRemountedOpenerAndDroppedSelectionResult': True,
        'vinylLabel': {'width': 144.0, 'height': 127.2},
        'rootScrollFailedToCompact': True,
    },
    'uiCases': 7, 'backgroundCases': 4, 'existingPairedSyncCases': 8,
    'entireNavigationFileRerunAfterInactiveTransitionAssertionUpdate': True,
    'edgeBackPopupHierarchyStable': True,
    'immersiveQueueBatchReadinessRetained': True,
    'playlistCommentRepositoryCapturedBeforeRoutePush': True,
    'backgroundValidation': {
        'channelPulsesApplyRemotePlayAndPauseWithoutRendering': True,
        'productionProviderAdapterLoadsSharedAudioHandlerWithoutRendering': True,
        'staleOwnerLeaseIgnored': True, 'exitDisablesNativeLease': True,
        'coalescedExistingPollingSeconds': 5,
        'androidPluginCompilesInActualRelease': True,
        'nativePhoneExecutionVerified': False,
    },
    'nativeDesign': {
        'owner': 'cached audio FlutterEngine, not Activity',
        'additionalServiceOrNotification': False,
        'wakeLock': 'partial; active background room plus existing foreground audio service only; 90-second timeout; release on foreground/end/dispose',
        'privateDataAcrossBridge': False, 'backgroundLocationAdded': False,
        'systemForceStopOrTaskClearSupported': False,
    },
    'softwareRenders': [str((out / 'ui' / name).relative_to(root)).replace('\\', '/') for name in renders],
    'renderBoundary': 'Host software captures use synthetic assets and test-only Windows QA fonts; no phone GPU, IME implementation, or background-power acceptance.',
    'preservation': {
        'oldApkAndSourceFreezes': len(old), 'allOldFrozenHashesChecked': True,
        'originalSigningAndDependencyLock': True, 'pinnedEngineAndCompleteGlass': True,
        'oldAgentsBytesRetained': True, 'dirtyWorkingTreeRetained': True,
        'legacyPlaybackWeblogAndHeldOldNativeJournalUnchanged': True,
    },
    'acceptance': {
        'phoneOrAdbAccess': False, 'realAccountOrBackendAccess': False,
        'realBackgroundSync': False, 'realImeRegression': False,
        'realReportDurationV142': 'not rechecked this release',
        'neteaseProfileHistoricalTotalDurationFixed': False,
        'october683MinutesRecovered': False,
    },
    'references': [{'title': 'Android background playback',
        'url': 'https://developer.android.com/media/media3/session/background-playback',
        'use': 'public service lifecycle reference; project retains audio_service, not a migration to Media3'}],
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}

fixes = f'''# 1.0.43 / Android code64：交互、后台同步与播放器回归

## 已确认范围

用户确认1.0.42前台双方切歌、播放/暂停已生效；后台指切到桌面、其他App或锁屏，未手动清后台。本版按确认修复五项，并补上聊天中的好友头像进入个人主页。用户自行安装验收，本轮未访问手机、ADB、真实账号或后台。

## 评论下拉菜单与输入焦点

视频显示收回最热/全部后键盘被唤起。主机在实际BetaAnchoredMenu与PlatformCommentComposer复现：先进入输入框，再隐藏IME但保留焦点，菜单取得路由焦点后，退出时恢复编辑器导致TextInput.show。另外复现BetaEdgeBack在canPop变化时更换内容层级，销毁打开菜单的控件并丢弃选择；现固定内容层级，仅增减边缘手势条。筛选菜单现在不申请输入焦点，选择、取消均不重开隐藏IME；用户再次点击输入框仍可输入。共用玻璃弹窗增加可选requestFocus，其他弹窗默认行为保持，Stable菜单也显式处理。

## 黑胶内封面

唱臂顶部留白给唱片传入矩形紧约束，AspectRatio无法突破约束，ClipOval把内封面绘成144×127.2。VinylDiscSurface先居中放松约束，再生成1:1唱片与标签，不通过变形图片修正视觉。保留旋转、沟槽、唱臂和原材质，普通/一起听共用。

## 一起听后台同步

现有Dart轮询独立于页面，但仅依靠它不足以覆盖用户反馈的设备后台行为。本版新增音频FlutterEngine持有的TogetherBackgroundPlugin，每5秒向Dart活跃房间发送无账号信息的触发；与原Dart轮询合并节流，仍用同一控制器、官方协议与音频处理器。缓存引擎持有插件，不在Activity暂停/重建时拆除；回前台、退出房间、账号切换和引擎释放会停止旧租约。

仅活跃后台房间、且已有前台媒体服务时，持有带90秒最终超时的部分唤醒锁，覆盖暂停/切歌解析间隙；不新增服务、通知或后台定位权限。暂停/播放状态仍真实上报，不制造静音音轨来保活。后台同步仍需平台连接与进程存活，手动清后台/强制停止不在此次确认范围。

四项后台用例覆盖原生通道触发后无页面帧的远端播放/暂停和切歌、真实生产provider/适配器进入MestingAudioHandler、旧租约拒绝及结束释放。原有八项双客户端协议回归保留。测试环境的真实异步I/O和Flutter假时钟需分开，期间失败日志保留；最终按整文件回归。导航旧断言原先连已停用的退出层也要求使用当前方向，本版限定到活动内容并重跑整个beta5_ui_test.dart；退出层继续由外层过渡带走。主机不能证明厂商省电/锁屏/官版网络实际表现，未把补强措施写成已证实的唯一根因或永久修复。

## 切歌封面加载

播放器误用了长列表ArtworkRevealBoundary，未就绪时其渲染器会绘制整块主题底色。歌曲封面改用独立PlayerArtworkTransition：保留上一张已解码封面，在新图准备后再运行原过渡；等待时仅显示透明背景菊花。新请求用代次隔离，旧图片结果不能覆盖新歌；失败保留旧图并提供重试。准备封面不阻塞音频解析或远端同步，通用长列表和播放器待播列表的就绪门控保持，封面区域独立处理。

## 长页面胶囊收起

根Tab新增PageView后，垂直滚动到音乐壳时depth已经增加，旧代码只接收depth0，导致不收起。在保留Tab内部转发当前页的垂直事件，隐藏Tab不影响当前底栏，保留88/24阈值与完整变形动画。实际BetaMusicShell、FloatingPlaybackPill与官方GlassTabBar渲染检查证明两种来源的胶囊宽度已进入inline区域，回到顶部恢复展开。

## 聊天好友主页

点击收到消息左侧的好友头像，按当前好友ID、昵称与头像打开现有NeteaseUserProfilePage。导航前收起输入焦点，公开主页继续使用原资料/歌单/关注流程；返回保留聊天页与未发送草稿，不发送消息或关注写入。

## 本机交付与限制

{summary}七项新UI、四项后台、八项既有双端模拟及六张主机渲染；原签名双ARM、定制引擎、7玻璃shader/8SDK和实际APK六条更新说明核验。{len(old)}份旧冻结APK/源码摘要保持，当前脏工作区和空暂存保留。同时修正歌单评论路由在原页面销毁后读取WidgetRef的时机，进入前保留账号对应仓库；没有扩展账号写操作。仅本地APK、完整源码ZIP和校验资料，未Git提交、推送、上传或发布。

官版个人资料历史总听歌时长与十月683分钟仍未解决；本版没有改动听歌足迹上报，原weblog新播放通道和旧原生日志隔离不重发规则保持。后台生命周期参考[Android官方文档](https://developer.android.com/media/media3/session/background-playback)，项目继续使用既有audio_service。
'''

install = f'''# Mesting Music 1.0.43 / code64 安装验收

原签名双ARM：`release/Mesting-Music-v1.0.43.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。

完整源码`Mesting-Music-v1.0.43-source.zip`，摘要/大小见`release/Mesting-Music-v1.0.43-source-verification.json`与`release/Mesting-Music-v1.0.43-SHA256.txt`。Mesting Music显示名、com.mesting.music.beta包名与原证书保持，Android code递增至64；实际覆盖安装及数据保留由用户确认。旧1.0.42等交付保留。

## 用户自行验收

1. 评论页点击输入框，再用返回键收起键盘。依次展开最热、全部，选择项目、点击空白关闭和返回关闭；键盘不应自行弹出。主动点击输入框仍可输入，草稿保持。网易云和酷狗共用评论菜单均复核。
2. 黑胶样式普通播放和一起听分别检查，封面与唱片应保持圆形，转动时也不变椭圆；小屏和一起听头部占用空间时复核。
3. 与好友进入同一一起听房间，先确认前台同步，再切到桌面/其他App/锁屏，不手动清后台。好友依次播放、暂停、下一首、上一首；本机应在现有约5秒轮询节奏内跟随，返回软件时保留正确状态。交换双方重复，尤其检查暂停后再播放；实际延迟受网络/系统后台策略影响。本版增加媒体引擎后台触发，主机模拟不替代这一项。
4. 在一起听中连续切歌，等待封面时应保留旧封面并显示菊花，不出现黑色长方形；快速切两首时不应回退成前一首图。加载失败可重试，音乐同步不等封面。
5. 双平台发现/我的/音乐库等长页面向下滚动，胶囊应合入底栏，回到顶部再展开；快速切Tab及重新打开播放器后复核，歌曲页不应出现底栏。
6. 好友聊天点击其消息头像，应打开同一好友的个人主页；返回后检查滚动位置和未发送草稿。

## 本机证据

{summary}六张软件渲染、生产音频适配器无渲染帧用例、后台通道/过期回调、实际APK更新说明和原签名/引擎/玻璃核验完成。手机输入法、真实锁屏/厂商省电及双设备网络未访问，仍待用户验收。未提交推送或发布。
'''

handoff = f'''# 本地接续：Mesting Music 1.0.43 / code64

先读`docs/fixes-2026-11-03-v1.0.43.md`、`docs/INSTALL-v1.0.43.md`和`docs/validation-2026-11-03-v1.0.43.json`。最新本地APK/完整源码已冻结，未提交推送或发布。

用户确认42前台双向同步可用，新增后台范围明确为进程仍在的桌面/其他App/锁屏，手动清后台不包含。按确认完成评论筛选收回误弹IME、黑胶圆形约束、媒体引擎后台触发与有界唤醒租约、封面保留并移除列表式黑幕、根Tab滚动转发及好友消息头像个人主页。

{summary}七项新UI/四项后台/八项既有双端模拟、六张主机渲染，实际APK六条说明通过；原签名双ARM、原定制引擎及完整玻璃保持，{len(old)}份旧冻结物核验不变。后台通道只传活动状态与不含身份的租约，仍使用既有约5秒轮询与原媒体服务；不新增后台定位或第二个通知。

工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52，暂存空。1.0.25以来全部未提交工作包含在当前源码ZIP，HEAD不是完整当前产品；禁止reset/clean、拉取覆盖或替换历史交付。签名、手机素材和诊断保持私有，源码不包含签名/缓存/官版资料。

本轮未手机/ADB、真实账号或后台；43的实际IME、后台同步、锁屏功耗和GPU行为待用户安装验收，不能称永久修复/持续FPS/官版后台验收通过。1.0.42报告时长本轮未重测真实接口；官版个人资料历史总听歌时长和十月683分钟仍未解决，旧weblog新播放/旧原生日志隔离不重发保持。

后续先只读核对最新交接、校验和工作区，按用户新指令继续；没有新授权不访问手机/账号、安装、提交推送或发布。
'''

for relative, content in [
    ('docs/fixes-2026-11-03-v1.0.43.md', fixes),
    ('docs/INSTALL-v1.0.43.md', install),
    ('HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.43.md', handoff),
    ('docs/validation-2026-11-03-v1.0.43.json', json.dumps(validation, ensure_ascii=False, indent=2)+'\n'),
]:
    target = root / relative
    assert not target.exists(), target
    target.write_text(content, encoding='utf-8')

with zipfile.ZipFile(out / 'source-before-private.zip') as archive:
    previous = archive.read('AGENTS.md')
assert (root / 'AGENTS.md').read_bytes() == previous
prefix = (f'**2026-11-03 本地正式交付1.0.43/code64：先读[1.0.43交接](HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.43.md)及[安装验收](docs/INSTALL-v1.0.43.md)。'
    '用户确认42前台同步生效；按确认修复评论筛选收回误弹键盘、黑胶内封面圆形、活跃房间后台同步触发、切歌黑色加载幕和长页面胶囊合入；新增聊天好友头像进入现有个人主页并保留返回草稿。'
    f'{summary}七项新UI、四项后台和八项既有双端模拟，六张主机渲染；原签名双ARM、定制引擎、7玻璃shader/8SDK及实际APK六条说明核验。'
    f'仅本地APK/完整源码，{len(old)}份旧冻结物与全部脏工作区、beta/b6bcd542及空暂存保留。'
    '后台范围为进程仍在的桌面/其他App/锁屏，仍复用既有媒体服务与约5秒轮询；真实设备后台/输入法/GPU由用户验收。'
    '未手机/真实账号/后台、未提交推送发布；官版个人资料历史总听歌时长和十月683分钟未解决，旧weblog与旧日志隔离不重发保持。下方最新保留历史时点；接续先只读核对，不自动访问手机或实施时长候选。**\n\n').encode('utf-8')
(root / 'AGENTS.md').write_bytes(prefix + previous)
print(json.dumps({'docsWritten': 4, 'oldFrozenFiles': len(old),
    'betaFiles': beta['files'], 'betaTests': beta['counts']['success'],
    'previousAgentsBytesRetained': True}, indent=2))
