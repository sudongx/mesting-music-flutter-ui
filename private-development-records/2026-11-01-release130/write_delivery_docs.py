"""Record verified local delivery; source archive digest remains external."""
from pathlib import Path
import hashlib
import json
import subprocess

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-01-release130'
def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))
def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

apk = read(root / 'release/Mesting-Music-v1.0.30-verification.json')
host = read(out / 'host-check-summary.json')
notes = read(out / 'local-apk-notes-verification.json')
protected = read(out / 'protected-verification.json')
review = (out / 'finish-review.md').read_text(encoding='utf-8')
documentation = (out / 'ui-documentation-review.md').read_text(encoding='utf-8')
assert 'disposition: ship' in review.lower()
assert documentation and host['analysis']['issues'] == 0
assert apk['version'] == '1.0.30' and apk['androidVersionCode'] == 51
assert notes['productionReader'] and notes['version'] == '1.0.30'
assert digest(root / 'release' / apk['file']) == apk['sha256']
assert protected == {'frozenFiles': 42, 'allByteIdentical': True, 'signingMaterialUnchanged': True}
assert host['beta']['fileCount'] == 85 and host['beta']['failed'] == 0
for name in ['render-final.log', 'search-render.log', 'user-render.log']:
    assert 'All tests passed!' in (out / name).read_text(encoding='utf-8-sig')
screens = [{'path': p.relative_to(root).as_posix(), 'sha256': digest(p)}
           for p in sorted((out / 'ui').glob('*.png'))]
assert len(screens) == 11
base = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=root, text=True).strip()
assert base == 'b6bcd5425e0df3e03febdd460b56d0ed42004c52'
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=root).strip()
passed = host['beta']['passed']
checks = f'85文件{passed}项Beta、Stable19、搜索/返回/播放器主机11项（含Android返回登记1项）、分析0及11张主机渲染'
validation = {
    'date': '2026-11-01', 'timezone': 'Asia/Shanghai', 'version': '1.0.30',
    'androidVersionCode': 51, 'localBaseVersion': '1.0.29', 'baseCommit': base,
    'status': 'local_original_signed_release_pending_user_device_acceptance',
    'hostChecks': host,
    'contentPresentation': {
        'bothMusicBackendsShareBoundary': True, 'liveLayoutNotScreenshot': True,
        'firstVisibleTextAndDecodedArtworkRevealTogether': True,
        'pendingDataSectionsUseSameGateBeforeImagesExist': True,
        'existingVisibleRowsRetainedDuringNextBatchPreparation': True,
        'normalLazyCacheExtentOnly': True, 'lazyThousandRowFixtureRequestsBelow25': True,
        'presentedIdentityBudget': 512, 'networkArtworkInitialDeadlineSeconds': 20,
        'imageFailureOffersIndependentRetry': True, 'emptyArtworkHasExplicitNoCoverState': True,
        'cachedDecodedThumbnailFirstFramePreserved': True,
        'sameSongHdUpgradeKeepsExistingDecodedFrame': True,
        'hiddenContentSemanticsAndHitTestsSuppressed': True,
        'headersAndBackOutsidePageFrameGate': True,
        'allRoutesOrPhysicalNetworkConditionsCertified': False,
    },
    'searchMotion': {
        'sameControllerForwardAndReverse': True, 'entryFromRightExitToRight': True,
        'landingElementRetainedAcrossEntryAndExit': True, 'noBlankUnderlyingLanding': True,
        'firstResultMountAfterFinalMovingFrame': True, 'repaintIsolation': True,
        'hiddenLandingTickersPaused': True, 'reducedMotionRespected': True,
        'matchedPathMidpointWidgetTest': True, 'physicalFrameTimeMeasured': False,
    },
    'hostUi': {'screenshots': screens, 'count': 11, 'syntheticFixturesOnly': True,
               'userWidths': [390, 320], 'userDarkTextScale': 1.3,
               'mechanismFixtureSizes': [[800,600],[400,480]],
               'finishReviewDisposition': 'ship',
               'firstReviewContextReturnedNoFinalAndRetriedOnce': True,
               'detector': 'not_applicable_native_flutter',
               'incumbentProductAndDesignSystemFilesUnchanged': True,
               'newShippingRaster': False},
    'apk': apk, 'productionApkNotesReader': notes,
    'protectedArtifacts': protected,
    'sourceSnapshot': {'file': 'Mesting-Music-v1.0.30-source.zip',
                       'verification': 'release/Mesting-Music-v1.0.30-source-verification.json',
                       'digestExternalToAvoidSelfReference': True},
    'limitations': ['Physical installation, motion/GPU/frame time and cold-cache scrolling remain user acceptance.',
                    'No phone/ADB, real account or backend accessed; no Git commit/push or publishing.',
                    'Together real ended-listening record remains unresolved/unverified.',
                    'Missing URL is explicit no-cover; failed image offers retry, never fabricated artwork.'],
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(root / 'docs/validation-2026-11-01-v1.0.30.json').write_text(
    json.dumps(validation, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

fixes = f"""# Mesting Music 1.0.30 / code51 修改与维护

日期：2026-11-01，Asia/Shanghai。在1.0.29完整工作区继续实现用户已确认的统一加载与搜索转场方案。仅本地准备，未提交推送、发布、安装手机或操作真实账号/后台。

## 内容展示

ArtworkRevealBoundary为公共实时布局/绘制边界。数据加载标记及ArtworkImage的解码帧向其报告就绪。无缓存首屏只显示一个统一动画，实际列表按原懒加载范围布局；可见文字与封面一起展示。滚动时保留已展示前缀，新可见批次准备好后一起显示。只准备临近内容，不预加载整个库，已展示身份记录限制512项。

公共入口接在PlatformStyle、PlatformPageFrame内容区、搜索分类和播放器中央内容。公共页面标题/返回在内容门槛外；隐藏内容不可点击、不可提前读出；失活元素不查询失效BuildContext。就绪后停用统一动画，隐藏行不各自运行动画，不用截图假页面或降级玻璃。操作按钮进度不作为整页内容等待条件。

已有缓存/同歌曲小图照常立即显示，后台高清不清掉旧帧。网络封面首次等待限20秒，失败显示独立“重试”，不无限阻塞成功行；缺URL明确显示“无封面”。默认用户头像属于实际无头像状态。

## 搜索过渡

MusicSearchResultsBody保留同一个搜索首页元素和滚动状态。进入/退出均保留底层首页，隐藏时暂停Ticker。只监听查询字段，结果列表和图片的首次挂载延后到进入动画最后移动帧结束；使用独立RepaintBoundary。原有从右进入、向左滑至就位保持，退出沿相反方向向右退回，复用同一个控制器。减少动态效果、原返回层级、底部玻璃、Tab方向及搜索归属保持。

## 验证与维护

{checks}通过。Beta最终85文件完整回归单独计数，不叠加中间补跑。中间失败/修正日志保留：修正无Material容器重试、旧占位图断言、真实codec时序、网易云专有用户分类与转场结束后挂载的等待。新增6项公共边界测试和1项真实搜索组件转场测试。

11张主机图包含刻意采样的转场中帧。公共机制场景的色块和英文是QA断言，不是产品样式。独立复核首次上下文未返回最终结果，按技能要求重试一次后取得ship；文档复核保留PRODUCT.md、DESIGN.md和design.json。无新增产品栅格。

图片缓存负责字节，ArtworkImage负责解码帧，边界只负责可见批次绘制/语义/点击，仓库继续负责分页/账号代际。新增页面复用公共边界，不复制加载状态，不把按钮操作进度加入整页门槛。test/support/pump_artwork_ready.dart同时推进真实codec与widget时钟。

以上是主机验证，不证明手机FPS/GPU、TalkBack、真实网络或官版完全一致。设备覆盖安装、首次搜索/快速滑动、慢网/断网及原生长期稳定性待用户验收。一起听真实结束记录仍未确认解决，等待手动复制单条脱敏结构诊断。

保留原签名、双ARM固定引擎、完整玻璃及42项旧冻结物。构建默认1.0.30/code51；pubspec内部历史版本不作为公开版本，以实际APK为准。私有日志/构建助手在.codex-artifacts/2026-11-01-release130/，不进入源码ZIP。
"""
(root / 'docs/fixes-2026-11-01-v1.0.30.md').write_text(fixes, encoding='utf-8')

install = f"""# Mesting Music 1.0.30 / code51 安装验收

仅本地交付，2026-11-01。APK：D:/AnLi/release/Mesting-Music-v1.0.30.apk，{apk['fileSize']}字节。
SHA256：{apk['sha256']}。
包名com.mesting.music.beta、Mesting Music、原证书SHA256：{apk['certificateSha256']}；双ARM、min24/target36、定制引擎与完整玻璃保持。身份一致不等于手机覆盖安装已验收。

完整源码：D:/AnLi/Mesting-Music-v1.0.30-source.zip；大小/摘要见release/Mesting-Music-v1.0.30-SHA256.txt和source-verification.json，避免ZIP自引用。

请自行覆盖安装后验收：

1. 两平台各选未搜过的关键词，搜索歌曲、歌手、专辑/歌单；网易云另测用户。无缓存先显示统一动画，首屏文字与封面就绪后一起出现，不逐行显示加载占位。空结果/服务错误/无封面要区分。
2. 连续下滑到未访问位置，慢网保留已展示内容，下面统一等待，新批次一起展示；快速来回不串图，不提前加载整个库。单张失败可独立重试，其余成功内容可展示。
3. 搜索封面显示后播放，胶囊/歌曲页立即复用小图再补高清。测试快速换歌、高清失败及返回搜索，不能退回加载占位或串歌。
4. 搜索进入/退出沿同一路径反向移动，首页状态保留；检查中途返回、连续返回和系统返回，观察真机是否仍短暂停顿。
5. 发现、音乐库、个人页、歌单、歌曲页检查首次/未缓存下方内容。已有缓存冷启动仍先旧后新，新文字与对应封面就绪后替换。不要通过卸载/清数据来覆盖安装。
6. 回归网易云用户搜索/关注/公开主页、原有下载/播放、完整玻璃、浅深色、大字号和平台切换。

{checks}通过。全部为主机合成验证，未访问手机/ADB、真实账号/后台，未提交推送或发布。真机流畅度、原生稳定性与真实业务待用户验收；一起听真实结束记录不能称已修复。
"""
(root / 'docs/INSTALL-v1.0.30.md').write_text(install, encoding='utf-8')

handoff = f"""# Mesting Music 1.0.30 / code51 本地交付与接续

日期2026-11-01，Asia/Shanghai。唯一工程D:/AnLi，beta / {base}。在完整1.0.29脏工作区继续用户确认方案；1.0.25～1.0.30全部未提交源码保留。没有提交、推送、发布、手机安装或真实账号/后台操作。

## 交付

- [原签名双ARM APK](release/Mesting-Music-v1.0.30.apk)：{apk['fileSize']}字节，SHA256：{apk['sha256']}。
- [完整源码ZIP](Mesting-Music-v1.0.30-source.zip)，大小/摘要见[摘要汇总](release/Mesting-Music-v1.0.30-SHA256.txt)和[源码核验](release/Mesting-Music-v1.0.30-source-verification.json)，不自引用。
- [APK核验](release/Mesting-Music-v1.0.30-verification.json)、[主机验证](docs/validation-2026-11-01-v1.0.30.json)、[安装验收](docs/INSTALL-v1.0.30.md)、[修改维护](docs/fixes-2026-11-01-v1.0.30.md)。

原证书/包名、双ARM定制Release引擎、完整玻璃和42项旧冻结APK/ZIP保持。实际名称/version/code、V2/V3、不可调试、min24/target36、ZIP/ELF对齐、SDK/着色器相同字节及包内3条说明通过生产Range读取器核验。身份兼容不等于真机覆盖安装验收。

## 本轮行为

1. 公共ArtworkRevealBoundary收集数据和图片解码状态：无缓存首屏统一等待后文字/封面共同展示；滚动保留已展示前缀，新可见批次就绪后一起显示。仍按临近懒布局，不预下载整个库，不用截图假页面。隐藏内容不可点击/提前读出，公共页面标题/返回保留。
2. 已有解码小图立即复用，后台高清不清图。单图失败独立重试，缺URL明确无封面；网络图片首次等待限20秒。缓存/账号隔离沿用1.0.29。
3. 搜索首页元素/滚动保留，进入期间底层首页持续显示；结果首次构建和解码延后到移动帧结束，退出反向复用同一路径。完整玻璃、Tab方向和返回层级保持。

## 验证与待验收

{checks}通过。Beta只计最终85文件完整运行；此前失败和修正保留。独立复核首次上下文未返回最终结果，重试一次后disposition: ship；文档复核保持PRODUCT.md、DESIGN.md和.impeccable/design.json，无新产品栅格。

图含390px搜索中帧/完成、390px用户页、320px深色1.3字号用户页和800x600/400x480公共机制断言。全部合成数据，不是官版界面、手机FPS/GPU、TalkBack或真实账号证明。由用户自行覆盖安装，验收两平台首次搜索、未访问下方内容、快滑、反向/连续返回、失败重试和小图到高清复用。无新授权不访问手机/ADB、真实账号或music后台。

一起听真实结束记录仍未确认解决：1.0.26曾失败，后续无真实载荷/成功反馈；等待用户手动预览复制单条脱敏结构诊断，不凭合成测试称修复。

## 接续

保留全部脏改动及冻结APK/ZIP，不reset/clean/stash/切分支/pull覆盖，不覆盖冻结交付。新需求继续逐题澄清、用户确认后实施。没有新授权不提交推送、发布或访问手机/账号/后台。

构建默认1.0.30/code51，入口tool/build_android_release_apk.ps1；Flutter3.41.9/Dart3.11.5、JDK17.0.20.1+1及既有SDK/NDK沿用。pubspec内部历史版本与公开APK分开，以实际包核验为准。工作区SOURCE-SNAPSHOT.json是1.0.24历史基线；ZIP内另有1.0.30当前清单和历史BASELINE，不能以Git HEAD/旧清单替代完整当前源码。

私有构建/签名/渲染/复核与失败证据在.codex-artifacts/2026-11-01-release130/，不进入源码ZIP。业务仓库负责分页/账号代际、图片组件负责字节/解码、公共边界负责可见批次绘制/语义/点击，接手时保持解耦。
"""
(root / 'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.30.md').write_text(handoff, encoding='utf-8')
agents = root / 'AGENTS.md'
current = agents.read_text(encoding='utf-8-sig')
assert not current.startswith('**2026-11-01 本机最新为 1.0.30')
pointer = f"""**2026-11-01 本机最新为 1.0.30/code51：按确认增加双平台首屏文字/封面就绪后统一展示、滚动保留已显示内容并共同展示下一批、图片失败独立重试，优化搜索进入/退出反向同路径过渡和首页状态保留。先读 [1.0.30交接](HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.30.md) 和 [安装验收](docs/INSTALL-v1.0.30.md)。{checks}通过；原签名双ARM、定制引擎、完整玻璃及42项旧冻结物保持。仅本地准备，1.0.25～1.0.30源码未提交，未手机/ADB/真实账号/后台操作、未推送发布；真机效果待用户验收，一起听真实结束记录仍未确认解决。D:/AnLi，beta/b6bcd542，禁止覆盖脏工作区与冻结交付。下方“最新”为历史时点。**\n\n"""
agents.write_text(pointer + current, encoding='utf-8')
print({'version': '1.0.30', 'betaPassed': passed, 'screenshots': len(screens),
       'publicDocsWritten': 4, 'agentsPointerAdded': True})
