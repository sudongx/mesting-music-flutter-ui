"""Write exact local-delivery facts only after signing/host verification."""
from pathlib import Path
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-01-release129'

def load(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))

def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

apk = load(ROOT / 'release/Mesting-Music-v1.0.29-verification.json')
assert apk['androidVersionCode'] == 50 and apk['version'] == '1.0.29'
assert digest(ROOT / 'release' / apk['file']) == apk['sha256']
host = load(OUT / 'host-check-summary.json')
assert host['beta']['passed'] == 1304 and host['beta']['fileCount'] == 84
assert 'No issues found!' in (OUT / 'analyze-complete.log').read_text(encoding='utf-8-sig')
assert 'All tests passed!' in (OUT / 'render-final.log').read_text(encoding='utf-8-sig')
notes = load(OUT / 'local-apk-notes-verification.json')
assert notes['version'] == '1.0.29' and notes['versionCode'] == 50
assert notes['productionReader'] and notes['notesCount'] == 3
frames = load(OUT / 'ui/frame-evidence.json')
screens = [{'path': p.relative_to(ROOT).as_posix(), 'sha256': digest(p)} for p in sorted((OUT / 'ui').glob('*.png'))]
assert len(screens) == 10
changes = load(OUT / 'changes-from-v128.json')
sources = sorted({v['path'] for v in changes if v['path'].startswith(('lib/', 'assets/', 'tool/', 'test/'))} | {'pubspec.lock', 'pubspec.yaml'})
validation = {
    'date': '2026-11-01', 'timezone': 'Asia/Shanghai', 'version': '1.0.29', 'androidVersionCode': 50,
    'localBaseVersion': '1.0.28',
    'baseCommit': subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip(),
    'status': 'local_original_signed_release_pending_user_device_acceptance',
    'betaRegression': {**host['beta'], 'skipped': 0,
        'logs': ['beta-final.jsonl', 'beta-followup.jsonl', 'beta-final-fixes.jsonl', 'review-f1.jsonl'],
        'aggregation': host['aggregation'],
        'intermediateFailuresRetainedAndCorrected': ['exact-size cache priority restored', 'host codec/file lifecycle fixture corrected']},
    'stableRegression': {'fileCount': 2, 'passed': 19, 'failed': 0, 'latestPerFile': host['stable']},
    'androidBackRegistration': {'passed': 1, 'failed': 0, 'deviceUsed': False},
    'analysis': {'issues': 0, 'scope': 'lib and test'},
    'coldStartDiscovery': {
        'bothPlatforms': True, 'sameHydratedProviderContainerMounted': True,
        'diskOnlyHydrationNeverWaitsForNetworkMiss': True, 'refreshResumesAfterFirstAppFrame': True,
        'localHistoryAndFavoritePreviewPrimed': True, 'currentPlaybackCoverWarmedFromLocalDatabase': True,
        'lateAccountResultsRejected': True, 'leaseReleasedOnAccountChange': True,
        'unrelatedSuccessfulWritesPreserveDiscovery': True,
        'actualLikeWriteAndRestartPreservationTested': ['/toplist', '/toplist/artist', '/mv/all', '/recommend/songs'],
        'editedLibraryAndProfileStillInvalidated': True,
        'liveDataAndDecodedCoversPublishAfterPreparation': True,
        'firstVisitOrMissingCorruptCacheMayLoadNormally': True,
    },
    'artworkSharing': {
        'thumbnailAvailableInFirstPlayerFrame': True, 'thumbnailToHdWithoutPlaceholder': True,
        'sharedContentIdentityAndNeteaseImageShardAliases': True,
        'boundedBuckets': [192, 384, 768, 1024], 'inFlightSameSizedRequestsDeduplicated': True,
        'exactHitPriorityPreserved': True, 'largerCachedImageCanServeSmallerWidget': True,
        'bestThumbnailSizeIndexSurvivesRestart': True, 'corruptIndexedAliasesRevalidatedAndRepaired': True,
        'currentTrackDoesNotRefetchUsableKugouArtworkMetadata': True,
        'newSongIdentityClearsPreviousSongFrame': True,
        'decodedFrameBudgetBytes': 25165824, 'diskImageBudgetBytes': 268435456,
    },
    'neteaseUsers': {
        'searchType': 1002, 'pageSize': 30, 'neteaseOnlyCategory': True,
        'typedPublicProfilesAndPlaylists': True, 'publicFollowingAndFollowers': True,
        'selfFollowRejected': True, 'duplicateWritesSuppressed': True,
        'followStatePublishedOnlyAfterConfirmation': True,
        'cancelUnfollowAndConfirmedUnfollowUiTested': True,
        'stateSharedAcrossRowsAndProfile': True, 'accountGenerationIsolated': True,
        'privatePlaylistsExcludedAndRawPaginationOffsetRetained': True,
        'realAccountSearchOrRelationshipWritePerformed': False,
    },
    'hostUi': {'screenshots': screens, 'count': 10, 'syntheticFixturesOnly': True,
        'nativeDeviceUsed': False, 'qaFontsAbsentFromApk': True, 'cacheAndTabEvidence': frames,
        'userProfileWidths': [390, 320], 'darkAndTextScale1_3': True,
        'finishReviewDisposition': 'ship', 'reviewFixF1': 'resolved', 'webDetector': 'not_applicable_to_flutter'},
    'apk': {'file': apk['file'], 'bytes': apk['fileSize'], 'sha256': apk['sha256'],
        'originalCertificate': apk['certificateSha256'], 'pinnedDualArmEngine': True,
        'productionRangeNotesReader': notes},
    'sourceHashesAtValidation': {name: digest(ROOT / name) for name in sources},
    'listenTogether': {'implementationFromV128Preserved': True, 'realUserRecordConfirmedFixed': False,
        'manualRedactedPayloadStillNeeded': True},
    'deviceAccess': False, 'realAccountAccess': False, 'backendAccess': False,
    'physicalUpgradeTestPerformed': False, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
}
(ROOT / 'docs/validation-2026-11-01-v1.0.29.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

install = f'''# Mesting Music 1.0.29 / code50 安装验收

仅本地交付，2026-11-01。APK：`D:/AnLi/release/Mesting-Music-v1.0.29.apk`，{apk['fileSize']} 字节。
SHA256：`{apk['sha256']}`。
包名 `com.mesting.music.beta`，应用名 Mesting Music，原证书 SHA256 `{apk['certificateSha256']}`，双 ARM、min24/target36。
原签名身份一致只证明安装兼容身份，不等于已经在手机覆盖安装通过。完整源码见根目录 `Mesting-Music-v1.0.29-source.zip`，摘要见 `release/Mesting-Music-v1.0.29-SHA256.txt`。

请自行覆盖安装后验收：

1. 分别进入网易云和酷狗发现页，让内容、封面完整显示；清后台后重开。发现页应先显示原缓存，后台刷新期间没有缓存栏目加载动画或封面占位闪现。慢网、断网及图片失败时继续保留有效旧内容；新文字和对应新封面就绪后更新。首次没有有效缓存的栏目仍正常加载。
2. 做一次收藏/歌单操作，再清后台重开；已有发现推荐、榜单、歌手榜及 MV 栏目应保留缓存。被编辑的个人资料/音乐库仍按真实结果更新，不回放其他账号内容。
3. 搜索歌曲（例如薛之谦），等列表封面显示，再播放并展开歌曲页。胶囊和歌曲页应立即复用已显示封面，后台补高清图；慢网或高清失败时仍保留小图。快速换歌时不串封面。歌单、发现及其他歌曲封面入口沿用同一机制。
4. 网易云搜索切换“用户”，检查真实结果、分页、关注、取消关注确认及失败回退。进入用户主页查看公开资料、公开歌单及关注/粉丝列表；搜索结果和主页同步关注状态，不能关注自己。隐私或平台限制仍由真实服务决定。
5. 复测快速切换 Tab、中途反向、搜索返回、页面状态及完整玻璃，观察实际 GPU 表现和长期稳定性。

本轮 84 文件1304项 Beta、Stable19、返回主机1项、分析0及10张主机渲染验证；全部为主机/合成验证，没有访问手机、ADB、真实账号或后台，没有提交推送或发布。一起听真实结束记录仍待用户提供单条脱敏诊断，不能称已修复。
'''
(ROOT / 'docs/INSTALL-v1.0.29.md').write_text(install, encoding='utf-8')

fixes = '''# 1.0.29 修改与维护

日期：2026-11-01。按用户逐题澄清并确认的三组范围实施，保留 1.0.25～1.0.28 未提交源码和所有旧冻结交付。唯一工程 D:/AnLi，维护分支 beta。当前本地产品不等于 Git HEAD 或线上已发布版本。

## 发现页冷启动

原来启动只恢复缓存文件索引，业务页挂载后 FutureProvider 才读取数据/解码图片，仍可能先显示加载状态。`DiscoveryStartupCache` 在原启动画面期间恢复本地账号、当前发现页 providers 和首屏缓存封面；应用挂载同一个 ProviderContainer，避免又创建空状态。恢复阶段只读磁盘，缓存缺失不等待网络，也不等待框架自动错误重试；首个业务帧之后才恢复正常后台刷新。有效缓存由 AsyncData 保留，首次无有效缓存仍走正常加载。预热当前播放封面只读原账号 SQLite 队列，不启动音频或预加载整队列。

启动租约在账号变化时释放，不让原平台离屏 providers 为新账号继续请求。缓存准备仍有原先的首12张/2秒冷磁盘准备、刷新64张/20秒、3并发/24MiB解码池限制；首次未缓存或损坏的内容不承诺凭空恢复。

成功的库/资料写操作继续使被编辑的快照失效，但只读发现路由保留最后有效内容并允许重验证。新增路由策略显式覆盖真实首页接口，包括 /toplist、/toplist/artist、/mv/all；关注/播放次数只触发重验证。账号代际校验继续阻止旧请求写回。

入口：`lib/features/music_platform/discovery_startup_cache.dart`、`lib/main.dart`、`lib/core/cache/browse_response_cache.dart`、`browse_cache_routes.dart` 及双平台 API。

## 歌曲封面

`ArtworkImage` 在精确尺寸未命中时立即提供内容索引中的已缓存图片，后台下载更清晰版本，失败不清空已有缩略图。NetEase 请求归并到 192/384/768/1024 档位，胶囊和搜索共享小图，歌曲页和背景共享大图；相同请求沿用原 single-flight。保持精确有效缓存优先，已缓存大图可供小控件使用；最佳尺寸索引兼容旧版字符串索引并落盘，重启会验证索引文件，损坏别名按真实文件键清理重试。

`RetainedArtworkFrame` 继续共享已解码画面。TrackArtwork 传入稳定歌曲身份，切换录音时清除前一首遗留帧。已知网易云 p1/p2 图片分片按同一内容识别；未知主机和语义版本参数保持隔离。酷狗当前歌曲已有可用封面时不主动再请求元数据；缺失/失败时仍使用既有修复路径。保留完整玻璃、动画和尺寸受控解码。

入口：`shared/media/persistent_network_image_cache.dart`、`shared/widgets/artwork_image.dart`、`retained_artwork_frame.dart`、`track_artwork.dart`、`shared/utils/media_uri.dart`、`core/audio/playback_providers.dart`。

## 网易云用户

分类搜索新增仅网易云显示的用户分类，type1002，按30条分页，使用真实用户ID、昵称、头像、签名及关注状态；不接入 Mesting 自有用户搜索。公开模型不带凭据。独立 `NeteaseUserRepository` 负责资料、公开歌单、关系列表和关注写入；`NeteaseUserRelations` 同步结果行/主页/关系列表，只在服务确认后发布新状态，防重复点击、不能关注自己、失败回退和账号变化保护。

公开主页使用已有 PlatformPageFrame 和公共 BetaGlassButton，展示公开资料、创建/收藏歌单，关注/粉丝数字可进入对应分页列表。取消关注先确认；确认期间账号变化不发送新账号写操作。私密歌单过滤后仍用原始返回条数推进分页，避免偏移错误。页面捕获原仓库代际，切换账号后显示返回提示，异步结果不写入旧页面。

入口：`domain/platform_search_user.dart`、`netease/netease_user_repository.dart`、`netease_user_providers.dart`、`netease_user_page.dart`、`platform_category_search_providers.dart`、`search/presentation/beta_category_search_results.dart`。

## 验证与边界

新增四文件18项回归，配合既有80文件形成84文件1304项 Beta。测试覆盖缓存落盘/新缓存实例/两个真实 provider、首帧缩略图、高清等待失败、持久索引和损坏修复、用户搜索分页、关注/取关参数、确认与取消、失败回退、单请求和账号切换。独立复核 F1 修正了实际栏目路由遗漏，并用真实 MockClient /like 写入和重启恢复验证。Stable19、返回主机1、静态分析0及10张主机渲染通过。回归汇总取每个文件最后完整结果，不重复计数；初次失败及修正保留在私有日志中。

真实搜索结果/关注写操作、覆盖安装、手机缓存/封面效果、GPU/长期稳定性仍待用户验收。没有访问手机/ADB、真实账号或后台，没有提交推送或发布。一起听真实结束记录沿用未确认状态。
'''
(ROOT / 'docs/fixes-2026-11-01-v1.0.29.md').write_text(fixes, encoding='utf-8')

handoff = f'''# Mesting Music 1.0.29 / code50 本地交付与接续

日期：2026-11-01，Asia/Shanghai。唯一工程 D:/AnLi，beta / {validation['baseCommit']}。在原 1.0.28 工作区继续完成用户确认的三项更新，1.0.25～1.0.29 全部未提交改动保留；没有提交、推送、发布或手机安装。

## 交付

- [原签名双ARM APK](release/Mesting-Music-v1.0.29.apk)：{apk['fileSize']} 字节，SHA256 `{apk['sha256']}`。
- [完整源码 ZIP](Mesting-Music-v1.0.29-source.zip)：包括全部工作区产品源码、固定引擎/许可证及回归。ZIP 摘要见 [摘要汇总](release/Mesting-Music-v1.0.29-SHA256.txt) 与 [源码核验](release/Mesting-Music-v1.0.29-source-verification.json)，不自引用。
- [APK 核验](release/Mesting-Music-v1.0.29-verification.json)、[主机验证](docs/validation-2026-11-01-v1.0.29.json)、[安装验收](docs/INSTALL-v1.0.29.md)、[修改与维护](docs/fixes-2026-11-01-v1.0.29.md)。

原证书、包名、双ARM定制Release引擎、完整玻璃和历史冻结物保留。APK 名称/版本/code、V2/V3、不可调试、min24/target36、ZIP/ELF对齐、SDK/着色器相同字节及最终包内3条更新说明已核验；身份兼容不代表真机覆盖安装验收。

## 本轮实现

1. 双平台发现页在启动期间先从磁盘恢复原账号内容、首屏封面和当前播放封面，在同一 ProviderContainer 中显示旧内容后再后台刷新。缓存恢复不等网络或自动重试；新数据及对应封面就绪后更新，失败保持旧画面。普通写操作保留不相关的发现快照，资料/库的实际编辑仍失效。无有效缓存的首次访问照常加载。
2. 搜索、胶囊、歌曲页及共用歌曲封面的入口立即复用已有缩略图/已解码画面，后台补高清图，失败保持旧图。尺寸请求归并、磁盘最佳尺寸索引/验证/损坏修复、网易云图片分片共享及歌曲身份隔离已实现。
3. 网易云用户搜索、分页、公开主页、歌单、关注/粉丝列表和关注/取关已实现，保留现有视觉。关系状态跨入口共享，取消关注确认、禁止关注自己、失败回退、单请求与账号代际防护已加入。服务隐私和可访问范围由网易云真实返回决定。

## 验证

84文件1304项Beta（新增4文件18项）、Stable19、Android返回主机1、lib/test分析0、10张主机渲染通过。完整套件之后取相关文件最终补跑结果，无重复计数；私有原始失败/修正日志完整保留。独立复核初次要求补齐3个发现接口路由，修正和实际MockClient写入后重启回归通过，最终 disposition: ship。文档复核保持 PRODUCT.md/DESIGN.md 等既有设计文件不变。

主机渲染包括390px浅色、320px深色/1.3字号用户页与搜索结果组件，以及生产缓存/封面/Tab合成像素场景。此证据不是手机、真实账号、官方App界面或GPU性能证明。

## 待用户验收及接续边界

实际覆盖安装、清后台恢复/慢网/断网、搜索到播放的封面无占位效果、高清升级、真实用户搜索和关注/取关/公开主页、平台切换及长期原生稳定性仍待验收。本轮无手机/ADB、真实账号或music后台操作，无提交/推送/发布。

一起听真实结束记录仍未确认解决：1.0.26曾失败，后续未取得用户真实载荷或成功反馈；等待用户手动预览并复制该条脱敏结构诊断，不凭合成数据称已修复。

后续先读本交接及最新实际工作区；保留全部脏改动和所有冻结APK/ZIP，不reset/clean/stash/切分支/pull覆盖、不重建覆盖冻结版本。没有新授权不访问手机、账号、后台或发布。新需求继续一次一问、确认方案后编码。下一版未指定。

## 维护环境

构建默认1.0.29/50，入口 `tool/build_android_release_apk.ps1`。Flutter3.41.9/Dart3.11.5、D:/CodexCache/flutter-3.41.9，JDK17.0.20.1+1、SDK/NDK28.2/Gradle8.14沿用原环境。固定引擎manifest、原签名目录和40项旧冻结物保留；私有日志/构建/签名/源码冻结助手在 `.codex-artifacts/2026-11-01-release129/`，不进入源码ZIP。SOURCE-SNAPSHOT.json工作区仍为1.0.24历史基线，ZIP内另有1.0.29当前清单和历史BASELINE。不要把Git HEAD或旧基线清单当作完整当前源码。
'''
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.29.md').write_text(handoff, encoding='utf-8')
agents = ROOT / 'AGENTS.md'
pointer = '**2026-11-01 本机最新为 1.0.29/code50：按用户确认修复双平台发现页冷启动缓存恢复，统一搜索/胶囊/歌曲页封面先小图复用再后台高清，新增网易云用户搜索、公开主页与关注/取关。先读 [1.0.29交接](HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.29.md) 和 [安装验收](docs/INSTALL-v1.0.29.md)。84文件1304项Beta、Stable19、返回主机1、分析0及10张主机渲染通过；原签名双ARM、定制引擎、完整玻璃和40项旧冻结物保持。仅本地准备，1.0.25～1.0.29源码全部未提交，未手机/ADB/真实账号/后台操作、未推送发布；真实设备及网易云业务待用户验收，一起听真实记录仍未确认解决。D:/AnLi，beta/b6bcd542，禁止覆盖脏工作区和冻结交付。下方“最新”均保留历史时点。**\n\n'
text = agents.read_text(encoding='utf-8')
assert '本机最新为 1.0.29/code50' not in text
agents.write_text(pointer + text, encoding='utf-8')
print('Wrote exact 1.0.29 validation, fixes, install, handoff and AGENTS pointer.')
