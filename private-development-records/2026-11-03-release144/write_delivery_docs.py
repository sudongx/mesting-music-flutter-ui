"""Write local delivery documentation only after actual checks and APK verification."""
from pathlib import Path
import json

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
def read(p):
    return json.loads(p.read_text('utf-8-sig'))

checks = read(out/'host-check-summary.json')
assert checks['analysisPassed']
assert all(checks[n]['completeAndSuccessful'] for n in (
    'beta-complete.jsonl', 'stable-complete.jsonl', 'search-back-player.jsonl'))
apk = read(root/'release/Mesting-Music-v1.0.44-verification.json')
notes = read(out/'local-apk-notes-verification.json')
native = read(out/'native-scheduler-verification.json')
assert notes['versionCode'] == 65 and notes['notesCount'] == 8
assert native['scenariosPassed'] == 6
renders = sorted(p.name for p in (out/'ui').glob('*.png'))
assert len(renders) == 6
beta = checks['beta-complete.jsonl']
stable = checks['stable-complete.jsonl']
nav = checks['search-back-player.jsonl']
summary = (f"{beta['files']}文件{beta['counts']['success']}项Beta通过、"
           f"{beta['counts'].get('skipped', 0)}项条件跳过；Stable{stable['counts']['success']}项、"
           f"导航界面整文件{nav['counts']['success']}项通过，静态分析0问题。")
compact_checks = {k: {a:b for a,b in v.items() if a != 'perFile'}
                  if isinstance(v, dict) else v for k,v in checks.items()}
validation = {
    'version': '1.0.44', 'androidVersionCode': 65,
    'date': '2026-11-03', 'timezone': 'Asia/Shanghai',
    'hostChecks': compact_checks, 'nativeScheduler': native,
    'actualApkReleaseNotes': notes, 'softwareRenders': renders,
    'officialReference': 'Local saved 9.6.15 manifest/classes17 carrier bytes matched the original; REA methods observed statically, private evidence excluded from public source.',
    'background': {
        'worker': 'HandlerThread owned by existing audio engine',
        'intervalSeconds': 5, 'acknowledgementSeconds': 12,
        'nativeLeaseSeconds': 120, 'wakeLockTimeoutSeconds': 90,
        'audioApplicationDeadlineSeconds': 30,
        'acknowledgedConfigurationAndBoundedRetry': True,
        'lateAudioGuardAndLocalIntentPriority': True,
        'physicalBackgroundAndLockScreenAccepted': False,
    },
    'preserved': {'originalCertificate': True, 'pinnedEngineAndCompleteGlass': True,
                  'legacyWeblogNewPlayback': True, 'oldNativeLogsNotReplayed': True,
                  'togetherReportSecondsAndListMilliseconds': True},
    'unresolved': {'officialProfileHistoryTotal': True, 'october683Minutes': True,
                   'realKugouAccountReadBackPending': True},
    'deviceAccess': False, 'realAccountAccess': False, 'backendAccess': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(root/'docs/validation-2026-11-03-v1.0.44.json').write_text(
    json.dumps(validation, ensure_ascii=False, indent=2)+'\n', 'utf8')

fixes = f'''# Mesting Music 1.0.44 / code65：实现与验证

2026-11-03，Asia/Shanghai。用户确认安装43后仍有问题，逐题确认方案后实施。本版仅本地原签名交付。

## 修改

- 后台一起听：复用音频引擎、媒体服务和约5秒轮询，独立HandlerThread持有调度。触发带请求号、12秒回执期限和失效租约保护；Dart立即确认接收，异步网络/音频不阻塞调度。配置需确认，限次退避后可由后续活动探测恢复；普通前台/非活跃房间不启用配置等待与重试。退出/账号切换取消等待计时器。同步读取与音频应用分离，30秒应用期限使旧请求失效，晚音源不得覆盖新曲，真实用户/通知栏操作优先。
- 官版参考：本机9.6.15的相关静态方法显示，播放服务持有一起听处理器，独立消息线程发送心跳、注册消息接收器，播放命令经序列校验交给播放器。本版参考生命周期及消息隔离，继续使用既有兼容接口。该观察不证明本版手机后台通过，也不代表已接入官版即时消息全栈。
- 一起听界面：自己和好友头像横向轻微重叠，保留昵称和无障碍身份。已配对隐藏邀请区及复制邀请入口，好友离开恢复；控制器发送前复核人数。应用主题显式位于路由上层，面板玻璃、背景、文字成套跟随明暗模式；播放器既有视觉保留。
- 歌曲更多菜单：播放器单独使用320/220毫秒开闭配置，中途反转沿当前轨迹返回，保留premium玻璃、连接形变及内容树。编辑菜单保留原配置。
- 四Tab：真实分支Navigator通过观察器清理普通子页面，声明式详情由现有路由归根；再次进入任一Tab回其主页，保留主页数据/滚动及原切页动画，覆盖下载、设置等多层入口、同Tab点击及快速改向。
- 双平台首页刷新：定向刷新当前可见数据，避免整仓库失效。按账号/凭证保留旧快照，等待网络与新封面预备后替换；失败保留旧内容，账号变化清除旧归属。
- 功能页和账号：功能页明确使用应用主题，保留页面在深浅切换后正确更新；当前账号两个按钮间增加16dp间距。
- 酷狗喜欢：爱心、取消喜欢、状态和列表共用目标选择器，按当前账号、有效listid及系统标记识别。旧响应仅接受唯一喜欢名称候选，默认收藏不再仅凭名称匹配；歧义/缺失不写。历史默认收藏内容不搬迁。

## 本机验证

{summary}

原生调度状态机由既有Kotlin 2.2.20和Java17真实编译运行，6场景通过；不是Android设备验证。六张软件渲染检查明暗一起听、明暗功能页、窄屏大字和账号间距；仅测试合成头像与字体未打入APK。新回归覆盖双平台慢刷新/失败/账号隔离、四Tab多层导航、HTTP mock喜欢读写、菜单反转、后台挂起/旧回执/超时和生产音频handler晚音源失效。按validation统计，不重复累加定向复跑。

实际Release核验原证书、双ARM、定制引擎、7玻璃shader/8SDK库、许可证及8条更新说明。实际覆盖安装、后台/锁屏、厂商省电、输入法与GPU仍待用户验收。

## 保留边界

未访问手机/ADB、真实账号/后台，未提交、推送、上传或发布。既有70份冻结物与全部脏工作区保留。旧weblog新播放及旧原生日志隔离不重发保持；官版个人资料历史总时长、十月683分钟仍未解决；一起听报告秒/列表毫秒契约不改。手动清后台或强制停止不在后台范围内。
'''
(root/'docs/fixes-2026-11-03-v1.0.44.md').write_text(fixes, 'utf8')

install = f'''# Mesting Music 1.0.44 / code65 安装验收

原签名双ARM：`release/Mesting-Music-v1.0.44.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。
完整源码`Mesting-Music-v1.0.44-source.zip`的摘要和大小见release中的source-verification.json及SHA256.txt。显示名、包名和原证书保持；请自行覆盖安装并确认数据保留。旧43等冻结交付保留。

1. 双方一起听先在前台确认，再分别切桌面、其他App、锁屏由好友切歌及播放/暂停，交换操作者。尤其检查暂停一段时间后再播放、连续切两首和回前台状态。进程仍在、不手动清后台；约5秒轮询，网络/系统策略影响实际延迟。
2. 两人时双头像横向重叠，不显示邀请好友及复制邀请入口；好友离开后恢复。浅/深色各检查背景、昵称、说明、按钮和距离文字。
3. 歌曲右上菜单反复展开收回，并在途中取消后重开，检查玻璃、文字连续性和操作分派。
4. 四个Tab各进入下载/歌单/设置等一至两层子页面，切往其他Tab再切回，应回对应主页；补查同Tab点击、快速切换及Android返回。
5. 双平台首页下拉刷新，旧内容保持，新文字与封面就绪后替换；慢网络或失败不应先清空内容。
6. 浅色功能页使用浅色卡片与清晰文字；深浅切换后返回保留的功能页及一起听面板复查。
7. 当前账号刷新登录状态与退出登录按钮有独立间距，文字及点击范围不重叠。
8. 酷狗点爱心后到真正的「我喜欢」核对，取消后刷新复查；不同入口的喜欢状态一致。历史默认收藏内容保持，实际接口/权限仍需本项验收。

本机：{summary}另有6项JVM实编实跑、六张软件渲染。主机结果不替代手机后台/锁屏/GPU或真实账号验收。未上传发布。
'''
(root/'docs/INSTALL-v1.0.44.md').write_text(install, 'utf8')

handoff = f'''# 本地接续：Mesting Music 1.0.44 / code65

先读`docs/fixes-2026-11-03-v1.0.44.md`、`docs/INSTALL-v1.0.44.md`及`docs/validation-2026-11-03-v1.0.44.json`。用户逐项确认后实施，本版原签名APK/完整源码仅本地交付，未提交推送或发布。

完成后台独立线程/回执/配置恢复/晚音源失效与用户控制优先；一起听重叠头像/满员隐藏邀请及明暗主题；歌曲菜单；四Tab回主页；双平台刷新保留旧图文；功能浅色/账号按钮间距和酷狗喜欢目标。详情及边界见实现文档，不将官版静态参考或宿主模拟写成手机验收。

{summary}原生调度6项JVM实编实跑、六张主机渲染，原证书双ARM/定制引擎/完整玻璃与实际APK8条更新说明核验。

工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52，暂存空。70份旧冻结物、签名/SDK/引擎和全部脏工作区保留；HEAD不是完整当前产品，当前源码ZIP包含未提交工作。禁止reset/clean或拉取覆盖、替换冻结交付。

44真实后台/锁屏、实际报告、输入法/GPU、覆盖安装及酷狗真实喜欢读取待用户自行验收。官版个人资料历史总时长和十月683分钟仍未解决；旧weblog新播放与旧原生日志隔离不重发保持。未经新授权不访问手机/ADB/账号/后台，不重发旧日志、不提交推送发布。
'''
(root/'HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.44.md').write_text(handoff, 'utf8')
agents = root/'AGENTS.md'
previous = agents.read_bytes()
assert not previous.startswith('**2026-11-03 本地交付1.0.44'.encode('utf8'))
(out/'AGENTS-before.md').write_bytes(previous)
prefix = f'''**2026-11-03 本地交付1.0.44/code65：先读[1.0.44交接](HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.44.md)及[安装验收](docs/INSTALL-v1.0.44.md)。按确认完成后台独立线程与回执/配置/音频失效恢复、一起听双头像重叠/满员隐藏邀请与明暗主题、歌曲菜单、四Tab回主页、双平台刷新保留图文、功能浅色/账号间距和酷狗喜欢目标。{summary}原生6项JVM、六张渲染及实际APK8条说明核验。原签名双ARM/定制引擎/完整玻璃、70份旧冻结物和全部脏工作区保留；beta/b6bcd542、暂存空。仅本地交付，未手机/账号/后台、未提交推送发布。44后台/锁屏/覆盖安装/GPU和酷狗喜欢待用户验收，官版个人资料历史总时长及十月683分钟仍未解决；旧weblog/旧原生日志隔离不重发保持。下方最新均为历史时点，新接续先只读核对。**\r\n\r\n'''
agents.write_bytes(prefix.encode('utf8')+previous)
print(summary)
