from pathlib import Path
import json,hashlib,subprocess
root=Path('D:/AnLi'); out=root/'.codex-artifacts/2026-11-03-release147'
apk=json.loads((root/'release/Mesting-Music-v1.0.47-verification.json').read_text('utf-8'))
checks=json.loads((out/'host-check-summary.json').read_text('utf-8'))
native=json.loads((out/'formal-payload-verification.json').read_text('utf-8'))
notes=json.loads((out/'local-apk-notes-verification.json').read_text('utf-8'))
protection=json.loads((out/'preservation-final.json').read_text('utf-8'))
compiler=json.loads((out/'compiler-definitions.json').read_text('utf-8'))
beta=checks['beta-complete.jsonl']; passed=beta['counts']['success']; skipped=beta['counts']['skipped']
assert beta['files']==145 and passed==1729 and skipped==2
assert checks['analysisPassed'] and native['formalVersion']=='1.0.47+68'
assert notes['versionCode']==68 and notes['notesCount']==8
assert protection['allPreviousArtifactBytesUnchanged'] and protection['oldFrozenArtifactCount']==84
images=sorted((out/'ui-round2').glob('*.png')); assert len(images)==26
validation={
 'date':'2026-11-03','version':'1.0.47','androidVersionCode':68,
 'stage':'local_original_signed_formal_release',
 'apk':{'path':'release/'+apk['file'],'bytes':apk['fileSize'],'sha256':apk['sha256']},
 'sourceZip':{'path':'Mesting-Music-v1.0.47-source.zip','verification':'release/Mesting-Music-v1.0.47-source-verification.json'},
 'approvedScope':['whole-app long lists','real source paging where supported',
   'background processing and bounded display for fixed responses','fixed footprint common header with report-only swipes',
   'globally newest-first Kugou favorites using actual collecttime'],
 'coverageMatrix':'docs/LONG-LISTS-2026-11-03-v1.0.47.md',
 'beta':beta,'betaFileList':json.loads((out/'beta-files.json').read_text('utf-8-sig')),
 'stable':checks['stable-final-ready.jsonl'],
 'additionalStableLegacy':checks['stable-legacy-playlist.jsonl'],
 'navigation':checks['search-back-player.jsonl'],
 'formalLoggingAndSync':checks['formal-regression.jsonl'],
 'formalCasesAlreadyIncludedInBeta':True,
 'conditionalSkips':['Windows system SQLite lacks sqlite3_prepare_v3 in the legacy cloud snapshot fixture',
                     'optional original AirPods Pro reference comparison'],
 'analysisIssues':0,'actualAndroidReleaseCompilationPassed':True,
 'originalCertificateSha256':apk['certificateSha256'],'originalSignature':True,
 'packageName':apk['packageName'],'appName':apk['appName'],
 'currentCompilerDefinitions':compiler['whitelistedCompilerDefinitions'],
 'actualApkNotes':notes,'customReleaseEngineVerified':True,
 'glassShaderFilesCompared':7,'sdkLibraryFilesCompared':8,
 'nativeR4InputsStillIdentical':True,'nativeChecksInherited':16,'nativeChecksRerunThisRelease':False,
 'r4HistoricalCandidateTrackChangeChecks':7,'r4HistoricalCandidateMediaLeaseChecks':2,
 'historicalR4DeviceEvidenceIsNot147Acceptance':True,
 'visual':{'rounds':2,'finalFrames':26,'hostSyntheticOnly':True,
   'firstRoundMissingFixtureIconFontsCorrected':True,
   'files':[p.relative_to(root).as_posix() for p in images],
   'phoneGpuAcceptance':False},
 'largeFixtures':{'rows':[3000,10000],'firstFavoriteDetails':30,'fixedFeedFirstVisibleRows':30,
   'lazyInitial10000RowsBuilt':12,'lazyAfterScrollRowsBuilt':20,
   'download3000TasksProgressDoesNotNotifyCollection':True,
   'bulkEnqueueAndCancelUseBatchedPersistence':True,'downloadDirectoryRestoreAndEncodeUseWorker':True,
   'fullMembershipSearchAndGlobalCollectionTimeSortTested':True},
 'protocolLimits':{'neteaseFixedTopSongResponse':True,
   'kugouFavoritesNeedCompleteIndexForGlobalTimeSort':True,
   'kugouPrivateRequestReverseSortParameterNotEstablished':True,
   'noServerCursorInventedForCloudBaseSocial':True,
   'officialClientRuntimeNotExecuted':True},
 'preservation':protection,'stagedFiles':[],
 'deviceAccess':False,'adbAccess':False,'realAccountAccess':False,'businessBackendAccess':False,
 'committed':False,'pushed':False,'uploaded':False,'published':False,
 'historicalTotalDurationUnresolved':True,'october683MinutesUnrecovered':True,'oldLogsNotResent':True,
}
(root/'docs/validation-2026-11-03-v1.0.47.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n','utf-8')

install=f'''# Mesting Music 1.0.47 / code68 安装与验收

本地正式 APK：`D:/AnLi/release/Mesting-Music-v1.0.47.apk`

APK SHA-256：`{apk['sha256']}`

完整源码：`D:/AnLi/Mesting-Music-v1.0.47-source.zip`

校验汇总：`D:/AnLi/release/Mesting-Music-v1.0.47-SHA256.txt`

显示名 Mesting Music，包名 `{apk['packageName']}`，原签名，code68 高于 1.0.46/code67。已核对本地升级身份；本版未安装手机，实际覆盖安装及账号资料保留待验收。无需卸载旧版。正式诊断及原生上报试验关闭，更新检查保留；未上传或发布到 music/GitHub。

## 本版检查重点

1. 网易云与酷狗的新歌、歌单、榜单、歌手/专辑页：进入后快速滑动、连续续载、回退重开、失败重试；完成提示不能被浮动控件遮挡。
2. 我的喜欢：总数、未显示歌曲的爱心、搜索收藏末尾歌曲、取消收藏、播放全部；换账号后不能带出前一个账号的结果。
3. 酷狗我的喜欢：新增收藏应优先显示。首次需建立完整收藏时间索引，这是所核私人接口缺少倒序参数时的兼容路径；真实缺失收藏时间时保留来源顺序。
4. 听歌足迹：左右切换周/月/年时公共标题、累计和分段栏不横移；日期箭头、竖向收起及每页滚动位置继续可用。
5. 下载：大量任务的进入/恢复、批量加入、切换账号、单行进度、左滑删除和暂停继续；断点续传需在实际 CDN 上验收。
6. 评论、消息、关注/粉丝、通用功能长结果、本地音乐及播放记录：滑到后页、搜索末尾、返回和筛选；回顾统计仍读取完整记录。

主机已验证 Beta {beta['files']} 文件 {passed} 项通过 / {skipped} 条件跳过、Stable 6 文件 63 项通过、导航 54 项、正式日志关闭 28 项及分析 0 问题。正式 28 项已包含在 Beta 对应文件，不重复累加。26 张最终主机渲染通过，保留完整玻璃与原定制引擎。两项跳过分别为旧 Windows 系统 SQLite 的云快照夹具与可选 AirPods 原图比对。

未证明 Android 实机帧率、IME/GPU、真实账号/接口更新顺序和 CDN 续传；历史总时长及十月 683 分钟保持未解决状态，旧日志没有重发。R4 历史双开结果不作为本版手机验收。

实现、全 App 管道清单与兼容限制见 [长列表说明](LONG-LISTS-2026-11-03-v1.0.47.md)；后续先读根目录本版交接。
'''
(root/'docs/INSTALL-v1.0.47.md').write_text(install,'utf-8')

handoff=f'''# Mesting Music 1.0.47 / code68 当前交接

## 已完成

按用户确认覆盖整个 App 长列表：支持的接口按需请求；固定响应大 JSON/DTO 及缓存序列化后台处理，分批显示。新增 source cursor、收藏/云端歌单/歌单目录窗口、完整收藏状态索引及账号内搜索，保留完整播放/下载/排序语义。最近与排行 SQL 分页、本地分组/查询和回顾缓存、评论/消息/记录/通用结果懒构建、下载行进度及批量持久化已完成。足迹公共头部移出横向 pager，酷狗喜欢按真实 collecttime 全局最新优先。

正式原签名双 ARM APK、定制引擎、7 份玻璃 shader、8 份 SDK 库和实际 APK 的 8 条更新说明核验通过。交付路径为 `release/Mesting-Music-v1.0.47.apk`、`Mesting-Music-v1.0.47-source.zip`；摘要与完整源码校验见 `release/Mesting-Music-v1.0.47-SHA256.txt` 和本版 verification 文件。

Beta {beta['files']} 文件 {passed} 通过 / {skipped} 条件跳过，为全量首轮加成功整文件复跑合并，每文件只计一次；失败日志保留。Stable 4 文件 48 项，另 2 文件 15 项，共 63 项通过。导航整文件 54 项独立通过；正式关闭诊断后的 4 文件 28 项已包含在 Beta 对应文件，不重复相加。分析 0 问题，两轮内完成渲染检查，最终 26 帧通过。R4 原生 16 项是相同源码/测试输入的继承结果，本轮只重新核对输入哈希并实际编译 Android，不冒充重新运行 16 项。

## 实现入口和重要边界

先读 [全 App 核查矩阵/协议限制](docs/LONG-LISTS-2026-11-03-v1.0.47.md)、[安装验收](docs/INSTALL-v1.0.47.md)、[机器验证](docs/validation-2026-11-03-v1.0.47.json)。

`background_json.dart` / `track_snapshots.dart` 负责独立大快照处理；`FavoriteTrackWindow`、`PlaylistDirectoryWindow` 和 `TrackPage` 负责分批浏览和完整集合的分离；`KugouPlaylistPaging` 检查版本、数量和重复页；`KugouFavoriteIndex` 使用真实收藏时间。`buildPlatformLazyList` 保留 key/index 映射，公共 header/footer 只能放有限控件。下载大目录恢复前不允许新任务覆盖旧持久化记录，批量加入/取消合并写盘，原校验续传继续保留。

酷狗私人读取没有已确认的倒序参数，故喜欢首次取得完整记录建立索引；普通歌单仍真正分页。网易云新歌与专辑等固定响应保留完整内容后台处理；CloudBase 社交未核实服务端游标，未伪造分页参数。没有声称完全复现官版内部代码或运行时；官方 APK 研究正文私有保存且排除交付源码。

## 未完成与后续注意

本版未手机/ADB/账号/业务后台验收，不能声称真机帧率或 GPU/键盘、真实排序、断点 CDN 已验收。两项条件跳过已记录；旧聊天测试引用已删除的登录插画，本轮改用保留封面和独立测试 PNG，未把登录插画加回 App。首轮新渲染夹具缺少图标字体已在第二轮补齐；QA 字体不进 Android 资产。

历史总听歌时长与十月 683 分钟仍未解决，旧日志隔离且未重发；既往 R4 双开 7 项切歌/2 项承载释放是历史候选证据，不是 47 手机验收。

本地 `D:/AnLi`，`beta / {protection['head']}`，全部原脏改动及空暂存保持。84 份旧冻结物、原签名和锁文件经哈希核验不变，新 APK/完整源码另存；未提交、推送、上传或发布。完整源码排除签名、私有研究/诊断、测试渲染和构建缓存。Flutter 3.41.9 / Dart 3.11.5、原 JDK17/NDK/定制引擎继续使用；私有诊断三开关均 false、更新检查 true 已从本次编译参数白名单回读。

新接续先读本文和 AGENTS，只读核对当前 refs/脏工作区/冻结物，再按用户后续方向行动；不自动访问手机、账号、发布或清理。不得覆盖原 APK/ZIP。
'''
(root/'HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.47.md').write_text(handoff,'utf-8')
old=(out/'AGENTS-before.md').read_bytes(); assert (root/'AGENTS.md').read_bytes()==old
prefix=f'''**2026-11-03 本地正式交付1.0.47/code68：先读[47交接](HANDOFF-CURRENT-SESSION-2026-11-03-v1.0.47.md)、[安装验收](docs/INSTALL-v1.0.47.md)及[全App长列表矩阵](docs/LONG-LISTS-2026-11-03-v1.0.47.md)。按确认完成全App长列表按需读取/后台处理与懒构建、固定足迹公共头部、酷狗喜欢收藏时间最新优先；保留全收藏搜索/状态/总数、完整队列和播放全部、原签名/定制引擎/完整玻璃。Beta145文件{passed}通过/2条件跳过为全量首轮加整文件成功复跑合并；Stable6文件63、导航54、正式关闭日志28（已包含不累加）、分析0及26张最终主机渲染通过。R4原生16项为相同输入继承，本版实际Android编译、原签名双ARM/7shader/8SDK和APK8条说明核验通过。酷狗喜欢首次完整记录索引为无倒序参数的兼容例外；固定接口和CloudBase无已核实游标者不伪造分页。84份旧冻结物、签名/锁、全部脏改动、beta/b6bcd542及空暂存保留，新APK/完整源码另存。未手机/ADB/真实账号/业务后台；实际排序、Android流畅度/IME/GPU/CDN续传待验收。历史总时长及十月683分钟未解决，旧日志不重发；R4历史双开不冒充47验收。未提交推送上传发布。下方均为历史时点。**\n\n'''
(root/'AGENTS.md').write_bytes(prefix.encode('utf-8')+old)
p=root/'CHANGELOG.md'; text=p.read_text('utf-8'); assert text.startswith('# Changelog\n')
entry='''
## 1.0.47 / Android code68 — 2026-11-03

- 优化全 App 长列表的按需读取、后台大快照处理和惰性构建，保留完整收藏搜索、状态、播放/下载全部及统计。
- 听歌足迹公共标题、累计时长和周月年栏不再横移，只切换下方报告。
- 酷狗我的喜欢使用真实收藏时间全局排序，修正新收藏排在旧收藏之后的问题。
- 优化下载行进度、批量加入/取消及大目录恢复，保留暂停和校验后的断点续传。

仅本地正式交付；完整验证及接口兼容限制见 1.0.47 交接/安装与长列表说明，真实手机与账号待验收。旧记录均保留。
'''
p.write_text(text.replace('# Changelog\n','# Changelog\n'+entry,1),'utf-8')
p=root/'DESIGN.md'; text=p.read_text('utf-8')
text+='''

## 1.0.47 长列表与足迹收尾记录（2026-11-03）

在现有 Apple Music 参考、明暗语义色、胶囊和完整玻璃下做性能与结构修正。集合 30 条一批，公共足迹头部只参与竖向收起；横向移动仅作用于报告。保持原图文缓存、失败旧内容、完整收藏及显式播放/下载全部语义。

两轮有界主机检查已完成：首轮新夹具缺少图标字体，第二轮加载测试字体后 26 帧全部核对，包含明暗搜索、3000 收藏首批/末尾搜索、新歌首批、下载任务及横滑中头部固定。最终判定为本地主机检查通过；不表示 Android IME/GPU/帧率或真实账号验收。未更改产品字体、原材质或动画来换取性能。
'''
p.write_text(text,'utf-8')
print('Wrote 1.0.47 validation, install, handoff and preserved AGENTS prefix after actual APK verification.')
