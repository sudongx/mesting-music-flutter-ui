from pathlib import Path
import hashlib
import json
import subprocess

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-01-release132'
read = lambda p: json.loads(p.read_text(encoding='utf-8-sig'))
apk = read(root / 'release/Mesting-Music-v1.0.32-verification.json')
host = read(out / 'host-check-summary.json')
notes = read(out / 'local-apk-notes-verification.json')
assert notes['notesCount'] == 3
assert 'disposition: ship' in (out / 'finish-review.md').read_text(encoding='utf-8').lower()
assert (out / 'ui-documentation-review.md').is_file()
for item in read(out / 'frozen-before.json'):
    path = root / item['path']
    assert path.stat().st_size == item['bytes']
    with path.open('rb') as stream:
        assert hashlib.file_digest(stream, 'sha256').hexdigest() == item['sha256'], item['path']
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=root).strip()
count = host['beta']['passed']
captures = host['renderCount']
evidence = f'90文件{count}项Beta、Stable19、搜索/返回/播放器主机11项（含Android返回登记1项）、分析0及{captures}张主机渲染通过'
boundary = '仅本地准备；未手机/ADB、真实账号/后台、Git提交推送、上传或发布。真机覆盖安装、实际侧滑流畅度、系统返回/TalkBack、GPU/FPS及真实业务待用户验收。一起听真实结束记录仍未确认解决，不能凭合成测试称已修复。'
install = f'''# Mesting Music 1.0.32 / code53 安装验收

2026-11-01，Asia/Shanghai，仅本地交付。APK：D:/AnLi/release/Mesting-Music-v1.0.32.apk，{apk['fileSize']}字节。
SHA256：{apk['sha256']}。
应用Mesting Music，包名com.mesting.music.beta；原证书SHA256：8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333。
双ARM、min24/target36、既有定制引擎及完整玻璃保持。签名身份一致不代表已真机覆盖安装验收。

完整源码：D:/AnLi/Mesting-Music-v1.0.32-source.zip。大小/摘要见release/Mesting-Music-v1.0.32-SHA256.txt和source-verification.json，不自引用。

请自行覆盖安装后检查：

1. 完成进入主界面后，应自动展示1.0.32此次更新内容；关闭后再启动不重复。断网也可展示，欢迎/登录指南及后台期间不抢先展示。首次全新安装会在完成引导后展示一次。
2. 设置→关于与更新→更新说明，不需要等待检查更新。确认当前版本、1.0.31和1.0.30均能展开阅读；其他已收录版本保留。大字号可上下滚动，末尾可滚至底部玻璃上方。
3. 两平台搜索后，在正文中间左右滑动，依次切换歌曲、专辑、歌手、歌单、歌词；网易云另有用户。顶部选中项同步，点击仍可切换，快速反向采用最新目标；分类两端不循环。
4. 各分类下滑后切换再返回，内容、封面及滚动位置应保留；首次进入未缓存分类仍用统一Apple等待。换关键词、换账号/平台及结束搜索后，不应串用另一搜索或账号的数据。
5. 页面两侧32dp返回手势和系统返回仍按结果→搜索首页→来源页退出；歌曲/详情页临时进入后返回仍保留搜索。底部播放器、搜索和完整玻璃继续可用。
6. 复测旧版冷启动发现缓存、缩略图立即复用后补高清、统一Apple刷新、音乐库全部入口及快速底部Tab。

{evidence}。按完整套件和补跑的每文件最终结果计数，重叠不叠加；原始中间失败保留。{boundary}
'''
(root / 'docs/INSTALL-v1.0.32.md').write_text(install, encoding='utf-8')
fixes = f'''# 1.0.32 修改与维护

2026-11-01，用户逐项澄清并确认后实施；1.0.32/code53。

## 搜索侧滑

BetaCategorySearchResults复用下载页BetaSwipePages，按平台提供5/6个分类。每个已访问页面保留独立ScrollController与ArtworkRevealBoundary；PageStorage维持当前会话偏移，新查询/平台拥有新的viewport。分类数据继续由CategorySearchController按需读取，不在构建相邻页时批量联网。原封面复用/新批次就绪、错误重试及业务权限保持。

共享分页区分点击动画的目标与手势选择，忽略跨多页点击途中的中间回报，避免改掉最新目标或启动无关搜索；手指可中途接管。仍只转发当前页面的纵向滚动，减少对底部玻璃的错误控制；下载页已有左右滑动回归通过。

## 更新说明

最近两版说明文字原本在release_history.dart及APK内，但没有安装升级后的展示流程，也缺少独立历史入口。ReleaseNotesReceipt将已读状态绑定package/versionCode/versionName，关闭说明后才写入；中途退出不消费机会。AppUpdateCoordinator先展示确切已安装版本的本地说明，再继续远端检查；版本未知不套用旧文案，断网不影响本地说明。

协调器位于MaterialApp.builder内，处于Router导航器上方。通过注入主导航器key解析实际overlay上下文，避免从祖先上下文发起弹窗。引导/前后台检查沿用并补齐，联网检查仍保留节流、下载及原有权属。设置新入口直接打开MusicReleaseHistoryPage，展示全部既有版本；历史与弹窗共用MusicReleaseNotesList，使用实际说明文本，沿用主题/玻璃及Reduce Motion。

## 验证边界

{evidence}。新增10项覆盖侧滑、点击/中断、按需读取、滚动与查询重置、首次/重复展示、后台/引导、未知版本、离线设置路径和46项旧冻结物保护。完整运行曾与最后的历史页底部间距修改交错，旧库kernel读取28dp；修改后的整个说明文件重新验证，最终每文件结果替代旧结果。未把中间失败删除或重复计数。

原签名双ARM实际APK版本、V2/V3、min/target、ZIP/ELF对齐、固定引擎/SDK/玻璃字节、实际APK内说明生产Range读取及源码逐项摘要另见release核验。12张图均为主机合成组件，包含有意滚动的说明底部和旧版展开态；不是真机/真实账号证据。{boundary}
'''
(root / 'docs/fixes-2026-11-01-v1.0.32.md').write_text(fixes, encoding='utf-8')
handoff = f'''# Mesting Music 1.0.32 / code53 本地交付与接续

2026-11-01，Asia/Shanghai。唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52。在完整脏工作区按用户确认实施，1.0.25～1.0.32未提交源码全部保留。

## 交付

- [原签名双ARM APK](release/Mesting-Music-v1.0.32.apk)：{apk['fileSize']}字节；SHA256：{apk['sha256']}。
- [完整源码ZIP](Mesting-Music-v1.0.32-source.zip)，大小/摘要见[汇总](release/Mesting-Music-v1.0.32-SHA256.txt)及[源码核验](release/Mesting-Music-v1.0.32-source-verification.json)，避免自引用。
- [安装验收](docs/INSTALL-v1.0.32.md)、[修改维护](docs/fixes-2026-11-01-v1.0.32.md)、[主机验证](docs/validation-2026-11-01-v1.0.32.json)、[APK核验](release/Mesting-Music-v1.0.32-verification.json)。

## 完成及证据

搜索分类支持正文左右侧滑、顶部点击同步、快速反向以及各分类内容/滚动/封面保留，复用下载页组件。升级后进入主界面展示确切已安装版本说明一次，关闭后记录；设置新增独立离线历史入口，1.0.30/31及既有说明保留。主导航器上下文注入修正自动弹窗层级，历史末尾保留玻璃内容间距。

{evidence}。完整套件及补跑按每文件最终结果计数，重叠不叠加，原始中间失败保留。独立复核disposition: ship，限定主机渲染/源码交互范围；文档复核保留PRODUCT.md、DESIGN.md和sidecar。无新产品栅格或设计系统更换。

原签名、固定双ARM定制引擎、全部玻璃着色器/SDK库、46项旧冻结物字节保持，实际包版本/code与三条说明经本地生产Range读取核验。原签名身份兼容不等于真机安装验收。

## 待验收与接续

{boundary}

保留所有脏改动及冻结APK/ZIP；不reset/clean/stash、切分支或pull覆盖。无新授权不访问手机/ADB、账号/后台或提交推送/发布。新需求仍逐题澄清、确认方案后实施。

默认构建入口tool/build_android_release_apk.ps1，1.0.32/code53；Flutter3.41.9/Dart3.11.5及既有JDK/SDK/NDK/原签名。pubspec内部历史版本不是实际交付版本。工作区SOURCE-SNAPSHOT.json仍为1.0.24历史基线，ZIP另有当前清单与历史BASELINE，Git HEAD不能代替当前完整源码。

私有脚本、原始测试/构建、12张渲染、复核和冻结保护证据位于.codex-artifacts/2026-11-01-release132/，不入源码ZIP。更新说明已读状态与远端更新/账号数据解耦；搜索数据、加载就绪及导航保持各自职责。
'''
(root / 'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.32.md').write_text(handoff, encoding='utf-8')
validation = {
    'version': '1.0.32', 'androidVersionCode': 53, 'date': '2026-11-01', 'timezone': 'Asia/Shanghai',
    'git': {'branch': 'beta', 'head': 'b6bcd5425e0df3e03febdd460b56d0ed42004c52',
            'committed': False, 'pushed': False, 'dirtySourcePreserved': True},
    'host': host, 'apkVerification': 'release/Mesting-Music-v1.0.32-verification.json',
    'actualApkLocalRangeNotes': notes, 'frozenPreviousFilesUnchanged': 46,
    'originalSigningKeyUnchanged': True, 'fullGlassAndPinnedEngineRetained': True,
    'review': {'disposition': 'ship', 'scope': 'host synthetic captures and sampled source interaction',
              'documentation': 'incumbent system retained; pre-existing drift not repaired'},
    'deviceUsed': False, 'realAccountUsed': False, 'backendUsed': False, 'published': False,
    'acceptancePending': ['device install/gestures/FPS/Back/TalkBack', 'real service/account behavior',
                          'Together actual completion record still unresolved'],
}
(root / 'docs/validation-2026-11-01-v1.0.32.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
agents = root / 'AGENTS.md'
pointer = f'**2026-11-01 本机最新为 1.0.32/code53：按确认支持搜索分类左右侧滑及点击同步、保留各分类状态；补齐升级后一次更新说明和设置离线历史入口。先读 [1.0.32交接](HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.32.md) 和 [安装验收](docs/INSTALL-v1.0.32.md)。{evidence}；原签名双ARM、定制引擎、完整玻璃及46项旧冻结物保持。仅本地准备，1.0.25～1.0.32未提交，未手机/ADB/真实账号/后台、未推送发布；真机待用户验收，一起听真实记录仍未确认解决。D:/AnLi，beta/b6bcd542，禁止覆盖脏工作区及冻结交付。下方“最新”为历史时点。**\n\n'
assert '本机最新为 1.0.32/code53' not in agents.read_text(encoding='utf-8')
agents.write_text(pointer + agents.read_text(encoding='utf-8'), encoding='utf-8')
print({'publicDocs': 4, 'entryPointerUpdated': True, 'betaPassed': count, 'oldFrozenFilesVerified': 46})
