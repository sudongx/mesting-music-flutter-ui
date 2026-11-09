"""Write local release documents from actual checked artifacts, before freeze."""
from pathlib import Path
import hashlib
import json
import subprocess

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-02-v140-fixes'
apk = json.loads((root/'release/Mesting-Music-v1.0.40-verification.json').read_text(encoding='utf-8'))
checks = json.loads((out/'host-check-summary.json').read_text(encoding='utf-8'))
assert checks['analysisPassed'] and all(checks[name]['completeAndSuccessful'] for name in (
    'beta-complete.jsonl', 'stable-complete.jsonl', 'search-back-player.jsonl'))
assert (out/'local-apk-notes-verification.json').exists()
head = subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()
assert head == 'b6bcd5425e0df3e03febdd460b56d0ed42004c52'
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root).strip()
rendered = sorted(p.name for p in (out/'ui').glob('*.png'))
validation = {
    'version': '1.0.40', 'androidVersionCode': 61, 'date': '2026-11-02', 'timezone': 'Asia/Shanghai',
    'hostChecks': checks, 'apkVerification': apk,
    'renderedSoftwareFixtures': rendered,
    'renderChecks': {'newUiAndSearchTestsPassed': True, 'darkLightAnd320LargeText': True,
                     'physicalDeviceRendering': False, 'hardwareFrameRateClaim': False,
                     'historySubtitleHostFontFixtureIncomplete': True},
    'officialContracts': {'ordinaryReport': '/api/listen/together/record/get',
        'history': '/api/listen/together/full/records', 'roomSongs': '/api/listen/together/room/songs/list',
        'reportDurationUnit': 'milliseconds', 'distanceUnit': 'kilometres',
        'sources': ['https://mp.music.163.com/5fbcd6a217aef81f3a03eda5/ending/index.html',
                    'https://mp.music.163.com/5fbcd6a217aef81f3a03eda5/list/index.html'],
        'officialBridgeDeclaresGet': True, 'existingEapiAdapterUsed': True,
        'realAccountTransportAcceptance': False, 'currentPrivateMessageDtoCaptured': False,
        'multiRoomReportImplemented': False, 'memberRestrictionsRespected': True},
    'fixEvidence': {'hiddenImePaddingTapUsesRequestKeyboard': True, 'oneRetainedEditorDuringSearchTransition': True,
        'imperativePlayerAndComposerChromePaintAndHitGate': True,
        'pasteAnchorAndViewportShareFollowerSpace': True,
        'coldOptionalContentMountsDuringMotion': 0, 'afterMotion': 1, 'afterRevisit': 1,
        'productionUserProfilePathsPassed': 4, 'realFollowAndUnfollowDispatchEncryptedTestsPassed': True,
        'darkUnreadRedWhiteContrastAtLeast4_5': True},
    'priorStatePreserved': {'branch': 'beta', 'head': head, 'stagedPaths': [],
        'pubspecLockSha256': hashlib.sha256((root/'pubspec.lock').read_bytes()).hexdigest(),
        'previousFrozenFiles': 62, 'privateOfficialAndDeviceEvidenceExcludedFromSource': True},
    'limits': {'deviceAccess': False, 'realAccountAccess': False, 'backendAccess': False,
        'physicalImeAndColdTransitionAcceptance': False, 'actualFollowOrUnfollowPerformed': False,
        'actualInviteOrMessageSent': False, 'actualPlaylistWritten': False,
        'historicalTotalDurationFixed': False, 'october683MinutesRecovered': False,
        'originalWeblogRetained': True, 'experimentalNativePlaybackEnabled': False,
        'oldAcceptedOrUnknownLogsReplayed': False, 'gitCommitted': False, 'gitPushed': False, 'published': False},
    'firstPassNotes': ['全量首轮7项失败：3项共享测试资源缺失及4项旧卡片文案断言。',
        '更新卡片断言、修正新夹具编码/依赖并串行补跑受影响完整文件；最终按文件替换首轮结果，未重复累加。',
        '软件渲染验证报告与编辑菜单布局；历史副文本的主机字体夹具不完整，不认证真实Android字体。'],
}
(root/'docs/validation-2026-11-02-v1.0.40.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
install = f'''# Mesting Music 1.0.40 / code61 安装验收

## 本地交付

原签名双 ARM APK：`release/Mesting-Music-v1.0.40.apk`，{apk['fileSize']} 字节，SHA256 `{apk['sha256']}`。

完整源码：`Mesting-Music-v1.0.40-source.zip`。源码大小、摘要与文件数见 `release/Mesting-Music-v1.0.40-source-verification.json` 和 `release/Mesting-Music-v1.0.40-SHA256.txt`，避免源码包自引用。

显示名 Mesting Music、包名 com.mesting.music.beta、原证书、双 ARM、定制 Release 引擎、完整玻璃与旧交付保留。仅本地准备，未安装、未提交推送或上传发布。

## 本版与手机验收

1. 原签名覆盖安装后核对1.0.40与原账号/歌单。安装及数据保持仍需手机确认。
2. 网易云、酷狗分别从发现/我的展开搜索，反复收起键盘后点击文字和输入框边缘；应能重新输入。长按展开粘贴菜单，改变键盘状态，菜单应位于可见区域并避让输入框。
3. 搜索结果滚动收拢后重新展开、快速切分类、进入歌曲页及一起听播放器、返回与切Tab，确认单一输入框；完整歌曲页和聊天输入区不应被底栏/播放胶囊盖住。保留退出手势正常显露。
4. 搜索网易云用户，分别点头像/名字进入主页，页头返回后保留查询与分类。按自己意愿关注/取消一位用户，核对实际平台结果。本轮只做模拟请求，没有操作真实关系。
5. 打开已结束一起听的聊天记录：红卡 → 本次报告 → 右上全部记录 → 选择历史记录。核对头像、时间、歌曲数、距离、本次与累计各自正确；失败应可重试，切号后旧报告不可见。非会员或旧记录缺字段应明确限制/未知。
6. 收藏先选择自己的普通歌单，核对结果；分享报告打开系统文字分享，内容含统计与官方链接。读报告不会自动收藏、发邀请或发私信；再次邀请仅进入已有邀请流程。多人报告保留在官版查看提示。
7. 深色模式我的消息徽标应红底白字，99以上显示99+。清后台冷启动后直接切我的及搜索，观察首次过渡；本机延后重内容挂载不保证手机帧率。

## 本机验证与边界

110个文件1482项Beta通过、1项条件跳过；Stable21、搜索/返回/播放器17项通过；静态分析0问题。完成11张主机软件渲染、键盘几何、账号隔离与按钮拖动/返回回归。渲染夹具不等于Android输入法、真实字体、GPU/FPS或长期流畅度验收。

原签名、版本、双ABI、7份玻璃shader、8份SDK库与原引擎主机核对；实际APK内更新说明读取通过。详细结果见 `validation-2026-11-02-v1.0.40.json`。

官版网页GET+encrypt与本工程现有EAPI适配的真实账号结果仍待验收。没有取得此次原始私信DTO，不能保证所有旧格式均可识别。历史总时长与十月683分钟仍未解决；1.0.39旧weblog及旧日志隔离/不重发规则保持。
'''
(root/'docs/INSTALL-v1.0.40.md').write_text(install,encoding='utf-8')
handoff = f'''# 当前本地交接：1.0.40 / Android code61

2026-11-02，Asia/Shanghai。用户已确认五组修复及本地原签名交付，当前工程唯一为 `D:/AnLi`，beta / `{head}`。工作区原改动及空暂存区保留；本版未提交、推送或发布，没有手机/账号/后台访问。

先读 `docs/fixes-2026-11-02-v1.0.40.md`、`docs/INSTALL-v1.0.40.md` 和 `docs/validation-2026-11-02-v1.0.40.json`。

已完成搜索输入连接、单编辑器保持、菜单跟随坐标、实际播放器/输入页覆盖注册；关注接口分派、四条用户主页路径与红色未读；普通双人一起听结束卡片/原生本次报告/全部历史、真实毫秒及公里单位、账号隔离与权益限制；冷启动可选内容延后到过渡落地，完整玻璃/原动画及缓存保留。

已核验本地APK：`release/Mesting-Music-v1.0.40.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。完整源码 `Mesting-Music-v1.0.40-source.zip` 及校验文件位于工程根/release。所有62份旧冻结物保持。

本机最终验证为110文件1482项Beta通过、1项条件跳过；Stable21、搜索/返回/播放器17项、分析0。11张软件渲染不是手机验收；历史列表副文本主机字体夹具不完整。全量首轮失败保留在原日志，按串行完整文件复跑汇总，不累加重复测试。

官版分析证据及公开网页脚本仅私有保存在 `.codex-artifacts/2026-11-02-v140-fixes/`。有效REA导出为 `rea-recovered-message-evidence.json`；早先0条文件不是证据。静态读取契约不等于真实账号传输验收；此次原始私信DTO未取得，不能称一切格式与官版已经全部验收。多人报告未实现，明确留在官版查看；分享使用现有系统文字分享。

仍待用户手机确认输入法、偶现覆盖、冷启动流畅度、真实关注/主页与一起听记录。历史总时长和十月683分钟仍未解决。旧weblog、新原生试验默认关闭及旧记录隔离不重发保持；本版没有启动此前未批准的私有时长候选。

下一会话先只读核对后等待；保留全部未提交改动、原签名、SDK、引擎、玻璃shader及私有原始材料。不自动构建/安装/访问手机、账号、后台或重发旧日志，不清理、不提交推送发布。新需求按一次一问、确认方案后实施。
'''
(root/'HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.40.md').write_text(handoff,encoding='utf-8')
agents=root/'AGENTS.md'
entry='''**2026-11-02 本地正式交付1.0.40/code61：先读[1.0.40交接](HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.40.md)及[安装验收](docs/INSTALL-v1.0.40.md)。用户确认后修复双平台搜索单编辑器/键盘重开/粘贴边界、实际播放器与输入页底栏显隐、网易云关注路由及深色红底未读；补齐普通双人一起听卡片→报告→全部记录，按真实毫秒/公里读取并隔离账号与权益；延后冷启动重内容，完整玻璃/原动画/缓存保留。110文件1482项Beta、1项条件跳过，Stable21、搜索返回播放器17、分析0；原签名双ARM/定制引擎/7玻璃shader/8SDK库核验。APK/完整源码仅本地，62份旧冻结物与脏工作区、beta/b6bcd542、空暂存保留；未手机/真实账号/后台、未提交推送发布。真机输入法/偶现覆盖/流畅度与真实一起听读取待验收，原始私信DTO未取得；多人报告仍在官版查看。历史总时长/十月683分钟未解决，旧weblog及旧日志隔离不重发保持，未制作新时长候选。下方最新保留历史时点；接续先只读核对，不自动访问手机或实施候选。**\n\n'''
previous=agents.read_bytes()
assert not previous.startswith('**2026-11-02 本地正式交付1.0.40'.encode('utf-8'))
# Only prepend the new entry; keep the old instructions byte-for-byte intact.
agents.write_bytes(entry.encode('utf-8')+previous)
print(json.dumps({'version':'1.0.40','apkBytes':apk['fileSize'],'softwareRenders':len(rendered),
    'documents':['INSTALL','fixes','validation','handoff','AGENTS entry']},ensure_ascii=False))
