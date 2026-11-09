"""Write reviewable local-release documentation before source ZIP freezing."""
from pathlib import Path
import json

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
host = json.loads((out/'host-check-summary.json').read_text('utf-8'))
apk = json.loads((root/'release/Mesting-Music-v1.0.72-verification.json').read_text('utf-8'))
inputs = json.loads((out/'build-input-final.json').read_text('utf-8'))['files']
before = json.loads((out/'protected-state.json').read_text('utf-8'))
assert host['passed'] and host['analysisIssues'] == 0 and host['beta']['passed'] == 2692
packaging = {name: json.loads((out/name).read_text('utf-8')) for name in
             ('native-packaging-verification.json', 'qr-javascript-interface-verification.json',
              'audio-bridge-packaging-verification.json')}
validation = {
    'version': '1.0.72', 'androidVersionCode': 93, 'date': '2026-11-07',
    'localDeliveryOnly': True, 'apk': apk, 'hostChecks': host, 'packagingChecks': packaging,
    'productBuildInputCount': len(inputs), 'protectedFrozenArtifactsBefore72': 82,
    'beforeReceipt': '.codex-artifacts/2026-11-06-release172/protected-state.json',
    'afterReceipt': '.codex-artifacts/2026-11-06-release172/after.json',
    'knownLimits': {
        'prior71BasicPlaybackUserConfirmed': True, 'prior71ActualVipPreviewEndsUserConfirmed': True,
        'official29DaysUserReportedNotReadThisSession': True,
        'actual301LayerAndRootCauseUnknownWithoutResponse': True,
        'zeroMediaModelDiagnosticDoesNotReachNativeDecoder': True,
        'nasCookieCompatibilityAndDeploymentNotVerified': True,
        '72InstalledOrPhysicallyAccepted': False, 'officialVipFullPlaybackAcceptedIn72': False,
        'liveCoverCdnAccepted': False, 'liveQueueRecoveryAccepted': False,
        'phoneAdbAccountNasActualSigningRequestsOrDeployment': False,
        'rewardClaimDownloadDspAndOfficialStatisticsAccepted': False,
    },
    'unchangedHistory': {'head': before['head'], 'branch': 'beta', 'indexEmpty': True,
                        'originalSigningAndLockProtected': True,
                        'oldLogsReplayed': False, 'gitCommittedPushedUploadedOrPublished': False},
}
(root/'docs/validation-2026-11-07-v1.0.72.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2)+'\n', 'utf-8')

fixes = '''# 1.0.72/code93：汽水主题、账号媒体签名、封面和失败续播

日期：2026-11-07。工作区沿用 beta/b6bcd542 的历史脏改动；本轮仅本地实现、验证及交付，不代表手机或 NAS 已验收。

## 用户反馈优先

用户已确认 71 音乐可以播放，覆盖 71 冻结时“尚未安装/基本播放待验”的历史字段。VIP 歌曲《这么久没见》—薛之谦实际在短片段结束；官版同一账号显示已领取 29 天免费听。基本可播与 VIP 整曲是不同验收，后者尚未完成。

封面缺失、歌单歌曲显示编号、301 后队列卡住均由用户确认发生在汽水。另一例《你对我的了解（释怀版）》—DJ钰的完整精简记录显示两次 mediaModelParse/mediaSelection 均为 0 候选/0 可解码；前序 HTTP 200，但没有进入本机音频解码。这不能归因为原生解码失败，也不能仅凭这份脱敏记录判断是服务端未给媒体还是尚有未知模型。

## 主题与页面适配

新增独立 qishui_appearance 模块，使用完整深色组件主题，保留字体、其他主题扩展及玻璃样式。歌词背景仍从当前封面模糊并压暗；歌词的更多、播放、分享、收藏、队列、底部导航和搜索使用同一临时明暗。系统状态/手势图标一并调整，退出歌词、进入其他页面或切换平台恢复调用方主题，不写全局偏好。

主壳只在当前确为汽水音乐根页且歌词可见时订阅歌曲主题条件，避免其他页面被迫初始化音频服务。新增 Consumer 子树保持 ref.listen 的合法生命周期。

发现、封面/歌词、我的、歌单、批量/添加、历史、下载、搜索/结果、账号/扫码、签名设置、免费听、音效、通用设置、切换平台及菜单/队列/歌单弹窗均检查深浅模式；包含加载、空数据、错误重试、320×700/1.4 字号与390×844。修复搜索、刷新和重试中 setState 回调返回 Future 的错误。主机截图使用模拟资料与单独 QA 字体，不证明真实 Android GPU/玻璃或网络封面验收。

## 账号参与签名与免费听

新增默认关闭的“账号参与签名”，旧加密记录无字段时仍为关闭。只有用户保存的自建 HTTPS 地址可开启；HTTP 和已知公共签名主机拒绝开启，助手跳转保持禁止。设置键/独立加密 namespace 不变。

签名前快照该次官方媒体请求适用的 Cookie，开启时仅交给自建 NAS 的 /sign，随后官方 track_v2 请求使用相同字节。独立 CSRF/token 请求头和其他平台资料不交给助手；签名输入与发出请求不受并发 Cookie 更新打乱。其他写入、下载资格、匿名连接测试不增加音乐账号 Cookie。返回只接收允许的应用签名头和一致的设备身份，不接受助手替换 Cookie/URL。

参考项目的媒体路径在签名前加入 Cookie，原 Mesting 在签名后加入；这是本次修正依据，但不是用户此次试听或 301 的唯一根因证明。歌词接口并不能直接决定媒体请求的会员身份。

扫码会话支持只读 commerce_info，按官方静态 DTO 的 expire_at/expire_time 和 available/is_membership 等字段识别现有免费听/会员到期；处理秒与毫秒，不拿活动结束日期、最多可领天数或任务数代替到账。PC 会话仍不能领取广告或活动奖励，按钮明确去官版领取；原写入日志/下载资格不放宽。整曲以实际返回的媒体为准，短片段保留“官方试听”。

NAS 必须按原样 Cookie 参与签名。新增对接说明 [qishui-account-signing-v1.0.72.md](qishui-account-signing-v1.0.72.md)。本轮未访问、更改或部署助手；当前 NAS 是否保留 headers.cookie、本人 29 天在 PC 媒体协议下是否可用仍未证明。

## 封面

统一提取歌曲/专辑/歌单图片的常见字符串、对象、列表、CDN URI 和模板字段。空的前置别名不再遮住后续有效封面；保留服务端提供的多个有效 HTTPS 候选及原签名查询，某地址实际失败后尝试下一候选。候选随 Track 序列化、MediaItem 与队列恢复保存；账号/歌曲变更清除旧失败状态。没有图片或全部失败时仍需占位，不能捏造 CDN 地址。

歌单详情歌曲行改为封面组件，保留多选、菜单和播放行为。仅使用已有响应里的候选，不增加启动签名请求或后台补资料请求。

## 301 与无媒体资料

旧错误传播不能充分区别响应 HTTP 状态和汽水 JSON 业务码。现在 HTTP 301 记录为 HTTP301/http_301，HTTP200 中的业务301记录为 business/301；诊断页面和提示也分别标明。签名服务失败独立为 signer，不被单曲续播吞掉。保留禁止自动跟随官方重定向的规则，诊断不导出 Location、响应正文、媒体 URL 或凭据。

用户忘记 301 对应歌曲，并选择先查现有代码，因此没有真实 301 回执可定因。不能直接宣称它就是重定向、登录失效、会员到期或版权问题。已修复诊断区分和队列卡住的恢复路径；真实根因仍待下次发生时的精简记录。

媒体解析补充已知 player_info/track_player/video_model 等 JSON 字符串容器。播放器资料阶段显式记录 0 URL，模型阶段记录候选数；HTTP200/目录资料不再被等同为已有可播放音频。未扩大成任意递归捞 URL，也不保证所有零候选歌曲会变得可播。

## 有界失败续播

独立汽水策略注入核心播放器，核心不引用平台 API。只有明确的单曲权限/格式、301/404/410 等失败可继续已有队列；网络、登录、签名、超时、取消和未知写入错误停止。手动播放、下一首和自然结束后的加载均覆盖；暂停恢复/元数据准备不偷偷播放或扫描。

每轮队列快照内每个失败歌曲身份最多尝试一次；本机 play 失败也消费剩余队列。整轮失败停止并提示，不递归回放失败项或无限补推荐。用户暂停、新播放命令、账号变化使旧恢复停止。其他平台维持原处理。

## 验证与边界

Beta231文件2692通过/2条件跳过，Stable6文件63通过，导航57通过，静态分析0。全量第二轮成功；后续完整 UI 文件替换同文件结果，重复运行不叠加。74张最终主机图已看，其中68张与此前已看图字节相同，6张最终新增/变化图另看。首轮失败、无效附加测试路径、QA字体与假时钟调试日志均保留，不能说从无失败。

本轮未改 Kotlin 原生音频生产/runner 输入，按 SHA256 继承71 CENC10+准备19及64 Media3 14的历史结果；不记为72新跑、不加进Beta。实际72 APK另验原证书v2/v3、双ARM、固定定制引擎、7份玻璃shader、12份旧非app原生库、16KiB对齐、JNI公开契约/DSP声明及2个R8扫码回调。无QA字体、测试插件或私有签名材料混入包。

未手机/ADB/安装/真实账号/私有令牌/NAS签名/部署/后台操作。72升级/冷恢复、VIP整曲、真实封面/队列、下载、权益到账、广告奖励、DSP/GPU及官方统计待实际验收。66扫码原账号/重开保持与网易云自动补源整曲的用户验收保持；手机号路线停止。旧51个回收APK不恢复，63源码ZIP不补，旧日志不补发。未提交、推送、上传、发布或备份。
'''
(root/'docs/fixes-2026-11-07-v1.0.72.md').write_text(fixes, 'utf-8')

install = f'''# 安装与单次核对：1.0.72/code93

本地原签名安装包：[Mesting-Music-v1.0.72.apk](../release/Mesting-Music-v1.0.72.apk)，{apk['fileSize']}字节。

SHA256：`{apk['sha256']}`

在手机上手动覆盖安装，保留已有数据。此会话未连接或安装手机。71基本播放已由用户确认；本版目标包含VIP整曲，但未用本人账号验证。

1. 先核对设置里的版本为1.0.72/code93。使用现有扫码账号；如果账号变化，重新用官版汽水扫码，不需要手机号或导入Cookie。
2. 在浅色主题打开汽水歌词，查看更多、播放、待播、底部导航和搜索是否统一深色玻璃；退出歌词应恢复浅色。再在深色主题查看发现、我的、歌单、搜索、账号、签名服务、权益和音效页面。
3. 检查“我的”歌单内歌曲是否显示封面；某一服务器地址失败可回退其他已提供候选。没有任何有效图片的歌曲仍可能显示占位。
4. 如要核对29天免费听，先确认自建HTTPS NAS按[qishui-account-signing-v1.0.72.md](qishui-account-signing-v1.0.72.md)支持原样Cookie签名。然后在“我的→设置→汽水签名服务”开启“账号参与签名”，点击“保存并使用”。此开关默认关闭，HTTP/公共服务不能开启。连接测试仍是匿名测试，成功不代表整曲可用。
5. 打开“免费听与权益”刷新，核对本人已获得的免费听到期信息。播放《这么久没见》—薛之谦并越过原来片段结束处，实际听到整曲结束；只看权益、HTTP200或候选数不算通过。若仍是短片段，保留“官方试听”并立即复制精简连接诊断，无需发送Cookie或令牌。
6. 用已有队列观察单首301/无媒体失败后能否继续下一首。整轮都失败应停止提示，网络/登录/签名整体异常应停止。发生301后复制精简诊断，新版会区分HTTP与业务码；原先301根因尚未确认。

先做一轮核对即可。需要反馈的是版本、歌曲/歌手、实际结束位置和精简诊断；不要发送账号Cookie、NAS访问令牌或私有媒体地址。广告奖励仍在官版领取，下载与DSP不因本次改动自动视为通过。

可回退原71 APK覆盖，但跨版本数据回退未实机验证；不要卸载或清空数据。原71包和完整源码保持冻结，本轮没有回填历史交付物。
'''
(root/'docs/INSTALL-v1.0.72.md').write_text(install, 'utf-8')

handoff = f'''# 当前交接：1.0.72/code93（2026-11-07）

先读本文、[实现与边界](docs/fixes-2026-11-07-v1.0.72.md)、[安装核对](docs/INSTALL-v1.0.72.md)、[验证](docs/validation-2026-11-07-v1.0.72.json)和[NAS输入契约](docs/qishui-account-signing-v1.0.72.md)，再按`.codex-artifacts/2026-11-06-release172/after.json`只读接收。目录名沿用开工日期11月6日，最终交付日期为11月7日。接收后报告完成/未完成/注意点，等待用户反馈，不自动重测重建、访问手机/账号/NAS或同步发布。

## 已完成

- 本地原签名72/code93 APK及完整脏工作区源码另存，校验见release/Mesting-Music-v1.0.72-SHA256.txt，不覆盖71及原82冻结物；完成后冻结物共84。
- 歌词临时深色主题覆盖玻璃控件和壳；汽水各页面、弹窗、状态和大字深浅模式检查。封面别名、有效地址备选与歌单歌曲行图片补齐。
- 默认关闭账号参与签名，仅用户开启后将该次官方track_v2适用Cookie交给自建HTTPS NAS；其他凭据、路径、公用签名和匿名测试不扩大。同次官方Cookie/token/CSRF快照保持一致。
- 扫码会话只读现有免费听/会员权益，区分秒/毫秒和活动日期；PC奖励写入仍禁用，官方试听与下载资格保持。
- HTTP301/业务301分层诊断；已知JSON字符串媒体容器兼容。明确单曲失败时有界继续队列，暂停/新命令/账号变化取消，整体连接/登录/签名异常及整轮失败停止。
- Beta231文件2692通过/2条件跳过、Stable63、导航57、分析0、74主机图；历史原生输入逐一匹配不记新跑。实际APK原签名双ARM、定制引擎、7shader、12旧非app库/JNI/DSP和R8回调另验。

## 未完成

用户已确认71基本音乐播放成功，覆盖其旧冻结“未安装/基本播放待验”。但本人VIP歌曲仍实际只播放短片段，官版同账号有29天免费听。72尚未安装，实际VIP整曲和NAS是否原样签Cookie未验。本轮未访问或升级NAS，独立助手会话不接管；只提供对接契约，不能称部署已兼容。

301没有歌曲名及真实回执；用户选择先查代码。代码已补诊断与续播，但实际301到底来自HTTP还是业务码、具体根因均未知。两次零媒体候选记录没有进入native decoder；新增解析兼容不证明所有此类歌曲都有可取媒体。

72覆盖升级/冷恢复、真实封面CDN/失败续播、整曲/下载、领取奖励/到账、DSP/GPU和官方统计仍待验。66扫码原账号、完全重开保持、网易云自动补源完整播放已由用户确认，不能按旧pending否认。手机号路线停止，旧日志不补发。

## 注意点

主分支beta/HEAD`{before['head']}`，空暂存；{len(inputs)}项产品/构建输入冻结。原签名、pubspec.lock、全部历史脏改、82旧冻结物保持。完整源码含本轮文档，排除密钥/缓存/私有证据/QA字体。原63源码ZIP不补、旧51已回收APK不恢复。

本轮没有手机/ADB/真实账号/私有令牌/NAS/实际签名或部署授权，也未操作这些对象。用户允许的账号Cookie外发仅是新开关在其开启后使用自建HTTPS NAS的产品行为，不是本会话可读取或发送真实凭据的授权。未提交推送上传发布或备份；没有挂起编码/构建/安装/上传任务。

APK SHA256：`{apk['sha256']}`。源码完整性、全部旧路径/旧冻结物、分支/索引/锁/签名及产品输入最终复核见after.json。
'''
(root/'HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.72.md').write_text(handoff, 'utf-8')

agents = root/'AGENTS.md'
body = agents.read_text('utf-8-sig')
marker = '**2026-11-07 当前本地1.0.72/code93'
assert marker not in body
entry = '''**2026-11-07 当前本地1.0.72/code93：先读[72交接](HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.72.md)、[实现与边界](docs/fixes-2026-11-07-v1.0.72.md)、[安装核对](docs/INSTALL-v1.0.72.md)、[验证](docs/validation-2026-11-07-v1.0.72.json)与[NAS输入契约](docs/qishui-account-signing-v1.0.72.md)，按release172/after.json只读接收后等待。用户确认71基本播放成功，VIP《这么久没见》仍实际短片段，官版同账号29天免费听；此反馈覆盖71冻结“未安装/基本播放待验”，不冒称整曲已验。72统一歌词与壳临时深色玻璃/退出恢复并检查全部汽水页面深浅模式，补封面候选/歌单行图片及有界单曲失败续播。账号参与签名默认关闭，仅显式开启时将官方track_v2适用Cookie交给自建HTTPS NAS，公共/HTTP/其他路径/匿名测试不扩凭据；同次Cookie/token/CSRF快照固定，权益只读识别到期且PC领奖仍禁用。NAS当前Cookie契约未验，不接管独立助手、不部署。用户选择先查301代码，HTTP/业务码诊断与恢复已补，实际301层次/根因仍缺真实回执；0媒体候选尚未到nativeDecode，不能说解码失败或全已可播。Beta231文件2692通过/2条件跳过、Stable63、导航57、分析0、74已看主机图；71 CENC10+准备19及64 Media3 14仅逐项同输入历史不记新跑。实际原签名双ARM/固定引擎/7shader/12旧非app库/JNI/DSP与R8回调另验。原82冻结物/签名/锁/历史脏改、beta/b6bcd542与空暂存保持，72另存后84；未回填71。未手机/ADB/真实账号/私有令牌/NAS/实际签名请求或部署，72未安装，本人29天VIP整曲/封面CDN/队列/下载/奖励/GPU/DSP待验，check_download当前部署未复核。66已验扫码原账号/重开保持/网易云补源整曲保持，手机号停止；63源码ZIP不补、旧51回收APK不恢复、旧日志不重放。未提交推送上传发布备份。下方均为历史时点。**

'''
agents.write_text(entry+body, 'utf-8')
allowed = set(json.loads((out/'allowed-existing-changes.json').read_text('utf-8')))
allowed.update({'AGENTS.md', 'test/qishui_ui168_test.dart',
                'lib/features/settings/presentation/music_network_diagnostics_page.dart'})
(out/'allowed-existing-changes.json').write_text(json.dumps(sorted(allowed), indent=2)+'\n', 'utf-8')
print({'docsWritten': 4, 'AGENTSEntryPrepended': True, 'productInputs': len(inputs)})
