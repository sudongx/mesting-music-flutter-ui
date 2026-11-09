from pathlib import Path
import json
root=Path('D:/AnLi');out=root/'.codex-artifacts/2026-11-01-release133'
apk=json.loads((root/'release/Mesting-Music-v1.0.33-verification.json').read_text(encoding='utf-8-sig'))
host=json.loads((out/'host-check-summary.json').read_text(encoding='utf-8'))
checks='93文件1355项Beta、Stable19、Stable底距专项1、搜索/返回/播放器11项（含Android返回登记1项）、静态分析0问题和10张主机合成渲染通过。专项/渲染重复运行不叠加完整套件数量。'
limits='仅本地准备；未访问手机/ADB、真实账号或music后台，未Git提交推送/打标签、上传或发布。主机证据不证明真机覆盖安装、系统Back/TalkBack、GPU/FPS、长期稳定及真实业务通过。'
acceptance='一起听累计显示使用既有totalConnectionTime字段，移除了currentConnectionTime兜底。真实响应是否返回每位好友的完整历史、是否与官版数值一致仍待用户验收；没有硬编码截图数值或猜测其他历史字段。历史一起听真实结束记录/聊天卡片仍未确认解决，属于独立待诊断事项。'
artifact=f'原签名双ARM APK：release/Mesting-Music-v1.0.33.apk，{apk["fileSize"]}字节；SHA256：{apk["sha256"]}。'
source='完整源码：Mesting-Music-v1.0.33-source.zip。大小/摘要见release/Mesting-Music-v1.0.33-SHA256.txt和source-verification.json，避免自引用。'
validation={'version':'1.0.33','androidVersionCode':54,'date':'2026-11-01','timezone':'Asia/Shanghai',
 'git':{'branch':'beta','head':'b6bcd5425e0df3e03febdd460b56d0ed42004c52','committed':False,'pushed':False,'dirtySourcePreserved':True},
 'host':host,'apkVerification':'release/Mesting-Music-v1.0.33-verification.json',
 'sourceScrollDeclarationAudit':153,'frozenPreviousFilesUnchanged':48,'fullGlassAndPinnedEngineRetained':True,
 'deviceUsed':False,'realAccountUsed':False,'backendUsed':False,'published':False,
 'togetherCumulative':{'scope':'current account + current friend, applies to every friend identity','authoritativeField':'totalConnectionTime (seconds), existing relation/statistics/get/v2 contract','currentSessionFallbackRemoved':True,'snapshotReplacementNotAddition':True,'explicitRetryBypassesPollThrottle':True,'missingLabel':'累计时长暂未获取','staleValueLabelled':True,'realOfficialHistoryObserved':False,'officialClientParityVerified':False},
 'completionMessageRecordResolved':False,
 'acceptancePending':['physical install/Back/TalkBack/gestures/GPU/FPS and long-running stability','real NetEase per-friend cumulative totals compared with official client','Together actual completion message/card still unresolved','real account/region write/service behavior']}
(root/'docs/validation-2026-11-01-v1.0.33.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
install=f'''# Mesting Music 1.0.33 / code54 安装验收

2026-11-01，Asia/Shanghai，唯一工程D:/AnLi。

{artifact}

{source}

应用Mesting Music，包名com.mesting.music.beta；原签名、固定双ARM定制Release引擎及完整玻璃保持。签名相容不等于已真机覆盖安装验收。

请自行覆盖安装后检查：

1. 设置→更新说明滑到底部：1.0.1标题、箭头及整行能完整滚至底部控件上方，展开后的正文也能完整阅读。检查底栏展开/收起、普通/大字号、系统手势/三键导航。
2. 检查账号概览、个人资料末尾保存、音乐库/收藏/关注、消息/好友/通知/详情、通用功能表单/资源选择、听书/专辑/歌单、下载/本地音乐/历史、独立待播队列和装扮等长内容末项。排查范围见layout-clearance-audit-2026-11-01-v1.0.33.md。
3. 地区原选广东省/深圳市等保持选中，不再插入440000/440300；未选从北京市开始，之后按原中国地区顺序。省份切换同步城市；取消不改草稿，完成只更新表单草稿，保存沿用明确提交行为。
4. 和已有较长官方历史的好友一起听，对照官版累计值，再换另一位好友确认没有串用数据。重复刷新不重复相加，退出后再加入仍从服务端读取，不局限于Mesting里的历史；所有好友按各自关系读取。
5. 无有效累计字段时显示“累计时长暂未获取”；已有同好友确认值但刷新失败时标注“上次同步”，停止本地计时。恢复网络后主动刷新可立即重试，播放/心跳/定位授权流程保留。
6. 复测升级后一次说明、设置离线历史、搜索侧滑、封面缓存及原有功能。

{checks}

{limits}

{acceptance}
'''
(root/'docs/INSTALL-v1.0.33.md').write_text(install,encoding='utf-8')
fixes=f'''# 1.0.33 修改与维护

2026-11-01，用户确认1.0.33/code54及每位好友的官方历史累计范围。

## 底部遮挡

主BetaMusicShell原有玻璃导航/播放胶囊，但未提供BetaContentInsets；独立包装因已有搜索scope被跳过，更新说明/公共表单/接口页会读取到底距0。主壳与独立页现在共用musicChromeBottomOf，按字号及系统viewPadding变化；滚动收起底栏时仍保留展开预算。

业务正文通过musicPaddingOf/musicBottomOf在滚动内容内部预留，保留原有更大底距；Stable原值不变。补齐音乐库、账号、消息、用户/关注、通用功能表单/资源选择、听书/歌单、下载/本地音乐、播放足迹/同步、社交及相关设置页。独立队列路由增加内部末尾留白，弹层/播放器内队列保持18dp。装扮页Beta留白移入可滚动内容，背景仍延伸到玻璃后方。

检查153处原有滚动声明并另查可重排队列，不把主底栏高度套到横向/不可滚动的内嵌列表、独立弹层、完整播放器或聊天输入区。详见[排查清单](layout-clearance-audit-2026-11-01-v1.0.33.md)。检查范围不代表153页逐一真机验收。

## 地区

接口可能给440000/440300，离线列表使用44/4403。musicRegionMatches/resolveMusicRegion供资料文字与选择器共用，限定有效代码边界并保留六位直管城市身份。已有广东/深圳正确选中，不构造数字地区；未选/未知数字从原列表第一项北京市开始。命名旧地区在末尾兼容保留，不抢第一项。取消不写，完成后仍只改表单草稿，账号保存逻辑保留。

## 一起听累计

parseTogetherCumulativeDuration只接纳既有关系统计契约totalConnectionTime秒值。缺失/负数/错误类型/越界值未知，currentConnectionTime不再冒充累计。快照替换旧快照，不叠加本次字段或旧快照；账号/好友/房间隔离保留，并在getter拒绝过期账号。失败停表且标注同好友上次确认值，没有则明确未获取。显式restore可立即重试，后台统计轮询仍限30秒。顶部时间局部更新，音频owner/封面/玻璃不随时间tick重建。

{acceptance}

没有新取得的独立官方响应结构证据；本轮没有访问真实账号，不改变官方统计写入。累计显示修正不能证明真实结束聊天记录已修复。

## 验证与接续

{checks}

回归直接挂载真实主壳和底栏比较整项矩形，覆盖历史1.0.1折叠/展开、主壳/独立页、窄屏/大字号/34dp安全区、账号概览与公共表单。地区检查真实滚轮索引及确认/取消；累计覆盖缺失/非法、本次兜底错误、任意好友/账号/房间隔离、重复快照、失败标注和显式重试。实际修复前失败及早期夹具配置/编译问题均保留私有证据，不混入通过数量。

{limits}

48份旧冻结APK/ZIP、原签名、定制引擎、完整玻璃及依赖锁定保留。PRODUCT.md、DESIGN.md和设计sidecar未改；仅新增局部surface brief，无产品栅格/字体新增。
'''
(root/'docs/fixes-2026-11-01-v1.0.33.md').write_text(fixes,encoding='utf-8')
handoff=f'''# Mesting Music 1.0.33 / code54 本地交付与接续

2026-11-01，Asia/Shanghai。唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52。1.0.25～1.0.33全部未提交改动保留，暂存区空；HEAD不是当前完整源码。

{artifact}

{source}

[安装验收](docs/INSTALL-v1.0.33.md)、[修改维护](docs/fixes-2026-11-01-v1.0.33.md)、[遮挡排查](docs/layout-clearance-audit-2026-11-01-v1.0.33.md)、[主机验证](docs/validation-2026-11-01-v1.0.33.json)、[APK核验](release/Mesting-Music-v1.0.33-verification.json)、[源码核验](release/Mesting-Music-v1.0.33-source-verification.json)。

## 完成

主壳/独立页统一提供动态底距，修复历史1.0.1、公共表单及其他长页面末项遮挡。地区中文/短码/六位码共用匹配，保留既有选择，未选从北京市开始，不插入数字选项。一起听按任意当前好友读取既有官方累计字段，移除本次兜底；快照替换、隔离、明确未获取/上次同步及显式重试得到处理。

{checks}

实际APK版本/code、原签名双ARM、固定Release引擎、全部玻璃着色器/SDK库和内置说明以核验文件为准。48份旧冻结物保持。源码ZIP保存当前清单及1.0.24历史BASELINE，工作区SOURCE-SNAPSHOT.json仍为旧基线，不能据此回滚。默认tool/build_android_release_apk.ps1为1.0.33/code54；Flutter3.41.9/Dart3.11.5及既有JDK/SDK/NDK不升级。

## 待验收与约束

{limits}

{acceptance}

若安装后累计仍未获取或数值不符，需用户提供脱敏响应结构再确认具体修复。本轮没有真实统计响应，也没有可复用官方客户端静态证据，不发明其他历史字段或累计公式。

保留全部脏工作区与冻结交付，不reset/clean/stash、切分支或pull覆盖。无新授权不访问手机/ADB、真实账号/music后台，不提交推送、打标签或发布。新需求继续一次只问一个问题，方案确认后实施，已确认选择不重复询问。

维护入口：lib/shared/widgets/beta_content_insets.dart、beta_secondary_music_layout.dart；lib/features/experience/presentation/beta_music_shell.dart；lib/features/music_platform/domain/platform_regions.dart及presentation/platform_region_picker.dart；lib/features/music_platform/netease/together/together_presence.dart、netease_together_controller.dart、netease_together_player_header.dart。三份test/release_133_*和test/support/release_133_qa.dart为新增主机回归。私有原始日志、10张渲染、复核及交付保护在.codex-artifacts/2026-11-01-release133/，不进入源码ZIP。
'''
(root/'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.33.md').write_text(handoff,encoding='utf-8')
p=root/'AGENTS.md';s=p.read_text(encoding='utf-8-sig');prefix='**2026-11-01 本机最新为1.0.33/code54：已按确认修复历史更新说明及其他页面末项底部避让、移除地区数字选项并保留已选地区（未选从北京市开始），一起听改用每位当前好友的官方累计字段，不再将本次时长冒充累计，缺失/过期明确提示。先读[1.0.33交接](HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.33.md)和[安装验收](docs/INSTALL-v1.0.33.md)。93文件1355项Beta、Stable19、Stable底距1、搜索/返回/播放器11项、分析0及10张主机渲染通过。原签名双ARM本地交付、定制引擎/完整玻璃和48份旧冻结物保持；1.0.25～1.0.33未提交。真实累计与官版对齐、手机/账号业务待验收，一起听真实结束记录仍未确认解决。D:/AnLi，beta/b6bcd542；未手机/ADB、真实账号/后台、Git提交推送或发布。下方最新保留历史时点。**\n\n'
assert '本机最新为1.0.33/code54' not in s
p.write_text(prefix+s,encoding='utf-8')
print('1.0.33 validation, install, fixes, handoff and AGENTS pointer written before source freeze.')
