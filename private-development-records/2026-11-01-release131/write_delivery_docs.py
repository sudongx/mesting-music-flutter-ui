from pathlib import Path
import json
import hashlib
import subprocess

root=Path('D:/AnLi')
out=root/'.codex-artifacts/2026-11-01-release131'
def read(p): return json.loads(p.read_text(encoding='utf-8-sig'))
def sha(p):
    with p.open('rb') as stream: return hashlib.file_digest(stream,'sha256').hexdigest()
apk=read(root/'release/Mesting-Music-v1.0.31-verification.json')
host=read(out/'host-check-summary.json')
notes=read(out/'local-apk-notes-verification.json')
assert apk['version']=='1.0.31' and apk['androidVersionCode']==52
assert sha(root/'release'/apk['file'])==apk['sha256']
assert host['beta']['fileCount']==88 and host['beta']['passed']==1320 and host['beta']['failed']==0
assert notes['version']=='1.0.31' and notes['productionReader'] and notes['notesCount']==3
assert 'disposition: ship' in (out/'finish-review.md').read_text(encoding='utf-8').lower()
assert (out/'ui-documentation-review.md').is_file()
assert not subprocess.check_output(['git','diff','--cached','--name-only'],cwd=root).strip()
head=subprocess.check_output(['git','rev-parse','HEAD'],cwd=root,text=True).strip()
assert head=='b6bcd5425e0df3e03febdd460b56d0ed42004c52'
protected=read(out/'frozen-before.json')
assert len(protected)==44
for item in protected:
    assert (root/item['path']).stat().st_size==item['bytes'] and sha(root/item['path'])==item['sha256']
key=root/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore'
assert sha(key)==read(root/'.codex-artifacts/2026-11-01-release129/signing-material-before.json')['sha256']
screens=[{'path':p.relative_to(root).as_posix(),'sha256':sha(p)} for p in sorted((out/'ui').glob('*.png'))]
assert len(screens)==12
validation={
    'date':'2026-11-01','timezone':'Asia/Shanghai','version':'1.0.31','androidVersionCode':52,
    'localBaseVersion':'1.0.30','baseCommit':head,
    'status':'local_original_signed_release_pending_user_device_acceptance',
    'hostChecks':host,
    'loading':{
        'all12ExistingRefreshSitesShareCommonAdapter':True,'betaUsesNativeCupertinoTicks':True,
        'oneVisualOwnerPerRefresh':True,'gestureAndCallbackRetained':True,
        'standaloneAndFramedRefreshTested':True,'oldRowsRemainUsable':True,
        'actualMessagesHeldResponseDark390And320LargeTextTested':True,
        'duplicatePlaceholderPaddingYieldsToRefresh':True,
        'refreshWaitingExtentDp':64,'independentActionProgressRemainsOwnedByAction':True,
        'determinatePlaybackDownloadAndQuotaProgressRetained':True,
        'reducedMotionPausesAppleTickers':True,
        'previousCachedContentAndThumbnailHdBehaviorRetained':True,
    },
    'library':{
        'groups':['常用音乐','收藏与订阅','播放足迹','我的歌单'],
        'neteaseCatalogueCapabilities':47,'neteaseCatalogueCategories':5,'uniqueDirectFeeds':9,
        'cloudCategoryRetainsAll5Workflows':True,'newAndImportPlaylistRetained':True,
        'unknownFutureCategoriesRemainReachable':True,'platformOnlyEntriesStayConditional':True,
        'destinationsPermissionsAndRepositoriesRetained':True,'realAccountWritesPerformed':False,
    },
    'tabs':{
        'staleAcknowledgementRedTestReproducedDroppedRequest':True,
        'onlyMatchingLatestTargetAcknowledged':True,
        'actualGlassCoordinateTapsWhileContentPending':True,'latestRequestSequence':[3,1,0,2,3,0],
        'retainedPageViewAndDirectionPreserved':True,'noNetworkOrPriorAnimationWait':True,
        'physicalFrameTimeMeasured':False,
    },
    'hostUi':{'screenshots':screens,'count':12,'syntheticFixturesOnly':True,
        'librarySizes':[[390,844],[320,844]],'libraryDarkTextScale':1.3,
        'messagesSizes':[[390,844],[320,650]],'messagesNarrowTextScale':1.5,
        'finishReviewDisposition':'ship','newShippingRaster':False,
        'incumbentSystemFilesPreserved':True,'webDetector':'not_applicable_native_flutter'},
    'apk':apk,'productionApkNotesReader':notes,
    'protectedArtifacts':{'frozenFiles':44,'allByteIdentical':True,'originalSigningKeyUnchanged':True},
    'sourceSnapshot':{'file':'Mesting-Music-v1.0.31-source.zip',
        'verification':'release/Mesting-Music-v1.0.31-source-verification.json',
        'digestExternalToAvoidSelfReference':True},
    'limitations':['Host tests and software captures do not certify physical Android GPU/FPS/Back/TalkBack or real services.',
        'No phone/ADB, real account/backend, Git commit/push, upload or publication.',
        'Together real ended-listening record remains unresolved/unverified.'],
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,
}
(root/'docs/validation-2026-11-01-v1.0.31.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
checks='88文件1320项Beta、Stable19、搜索/返回/播放器主机11项（含Android返回登记1项）、分析0及12张主机渲染'
fixes=f"""# Mesting Music 1.0.31 / code52 修改与维护

2026-11-01，Asia/Shanghai。在1.0.30完整工作区继续用户已确认方案；仅本地准备，未手机/ADB、真实账号/后台、Git提交推送或发布。

## 统一 Apple 加载

12处原下拉刷新统一使用MusicRefreshIndicator。Beta沿用Flutter刷新手势/阈值及回调，以noSpinner关闭Material圆环；由就近ArtworkRevealController统一绘制Apple分段菊花，无公共内容边界时显示同样的独立动画。一次刷新只有一个视觉所有者，保留实际列表和已有内容。64dp等待区域随刷新展开，避免动画覆盖文字；原数据加载占位让出重复动画和空隙。

MusicLoadingScope负责同次刷新覆盖关系，MusicActivityIndicator负责原生Apple动画，数据等待继续加入原ArtworkRevealBoundary就绪门槛，独立操作按钮保持自己的进度归属。登录、消息、资料编辑、搜索刷新、更新检查、下载解析等未确定进度等待统一Apple；播放、下载字节、等级/签到等确定数值进度保留。减少动态效果时停止Apple ticker。Stable原有Material/波形分支保持独立。

消息页以真实生产组件及MockClient悬挂响应验证：390px深色、320px深色/1.5字号下只有一个活动Apple动画，没有蓝色圆环，已有会话仍可点击。本轮没有访问截图中的真实账号。

## 音乐库

按常用音乐、收藏与订阅、播放足迹、我的歌单分组，沿用标题/列表/蓝色功能图标、封面和新建歌单入口。网易云专有项目仍只在网易云账号下显示；酷狗保留已有通用音乐库功能。

netease_library_sections.dart仅管理展示归类，不接管仓库/权限。47项现有网易云能力、5个目录类别、9个独立快捷订阅/记录入口、导入/新建歌单与收藏概览保持。音乐云盘合并重复入口，仍进入包含上传/匹配/删除等全部5个原工作流的类别。未知后续类别保留扩展入口；原路由/操作和账号代际保持。

## Tab 最新目标

已先以失败回归复现：请求3→1、旧路由回报3后再次点3，原代码只执行[3,1]，丢掉最后一次点击。BetaTabNavigation现在只有匹配最新请求的回报才清除待选目标。保留BetaRootTabViewport原PageView滑动、方向和页面状态，不等待网络或旧动画。实际玻璃控件坐标连续点击[3,1,0,2,3,0]且内容始终等待时，目标立即跟随最后点击并最终回到0。

## 验证及限制

{checks}通过。Beta从完整88文件运行和最终相关文件补跑取每文件最终结果，不重复累计。中间失败日志保留；资料失败旧用例的诊断为AsyncError(retrying)，现仅在该人工失败测试关闭自动退避并明确等待手动错误态，产品重试策略未变。新代码没有以放宽产品行为换取测试通过。

独立UI复核disposition: ship；文档比较保持PRODUCT.md、DESIGN.md及.impeccable/design.json，历史红色sidecar/版本措辞漂移只记录不修。无新产品栅格、字体或视觉世界。12张图均为合成主机组件证据：库顶/足迹/底部、消息刷新和刻意采样的Tab中帧/完成态，不证明手机GPU/FPS、系统返回/TalkBack或真实服务。

保留1.0.30的缓存首屏、可见批次、缩略图立即复用及后台高清政策、原签名、双ARM定制引擎、完整玻璃和44项旧冻结物。一起听真实结束记录仍未确认解决，等待用户手动提供单条脱敏结构诊断。

维护入口tool/build_android_release_apk.ps1默认1.0.31/code52；实际APK版本及包内说明已核验。私有日志/签名/冻结助手位于.codex-artifacts/2026-11-01-release131/，不进入源码ZIP。
"""
(root/'docs/fixes-2026-11-01-v1.0.31.md').write_text(fixes,encoding='utf-8')
install=f"""# Mesting Music 1.0.31 / code52 安装验收

仅本地交付，2026-11-01。APK：D:/AnLi/release/Mesting-Music-v1.0.31.apk，{apk['fileSize']}字节。
SHA256：{apk['sha256']}。
应用Mesting Music，包名com.mesting.music.beta，原证书SHA256：{apk['certificateSha256']}；双ARM、min24/target36、定制引擎及完整玻璃保持。签名/包名一致不代表已手机覆盖安装验收。

完整源码：D:/AnLi/Mesting-Music-v1.0.31-source.zip。大小/摘要见release/Mesting-Music-v1.0.31-SHA256.txt和source-verification.json，避免ZIP自引用。

请自行覆盖安装后检查：

1. 我的消息下拉刷新时只有一个Apple分段菊花，不出现蓝色圆环和第二个重复加载。已有消息保留；成功/失败后动画结束并可重试。其他发现、音乐库、歌单、评论、社交页面同样检查。
2. 首次加载、搜索、登录/资料操作、下载解析等等待使用Apple动画；已有真实播放和下载进度数值正常。慢网/断网及刷新失败时不要清掉有效旧缓存。
3. 音乐库四组内容可辨认，常用入口、收藏/订阅、云端历史/排行、歌单/导入/新建及高级管理都能找到。两平台切换只展示各自支持项目，不串账号；音乐云盘仍有全部既有功能。
4. 快速连续点击发现/功能/音乐库/我的，含同帧返回起点、跨多页及中途反向。应立即采用最新点击，不等待数据或上一段动画；保留滑动方向、已浏览状态、搜索归属和完整玻璃。
5. 复测首屏文字封面共同显示、下滑新批次、已有小图立即进入胶囊/歌曲页再补高清，以及浅深色/大字号和系统返回。

{checks}通过；仅主机合成验证。实际手机覆盖安装、流畅度、GPU、长期原生稳定性和真实业务待用户验收；本轮未访问手机/账号/后台，未提交推送或发布。一起听真实结束记录不能称已修复。
"""
(root/'docs/INSTALL-v1.0.31.md').write_text(install,encoding='utf-8')
handoff=f"""# Mesting Music 1.0.31 / code52 本地交付与接续

2026-11-01，Asia/Shanghai。唯一工程D:/AnLi，beta / {head}。在1.0.30完整脏工作区继续用户确认方案，1.0.25～1.0.31未提交源码全部保留。未手机/ADB、真实账号/后台、提交推送、上传或发布。

## 交付

- [原签名双ARM APK](release/Mesting-Music-v1.0.31.apk)：{apk['fileSize']}字节，SHA256：{apk['sha256']}。
- [完整源码ZIP](Mesting-Music-v1.0.31-source.zip)，大小/摘要见[摘要汇总](release/Mesting-Music-v1.0.31-SHA256.txt)和[源码核验](release/Mesting-Music-v1.0.31-source-verification.json)，不自引用。
- [APK核验](release/Mesting-Music-v1.0.31-verification.json)、[主机验证](docs/validation-2026-11-01-v1.0.31.json)、[安装验收](docs/INSTALL-v1.0.31.md)、[修改维护](docs/fixes-2026-11-01-v1.0.31.md)。

原签名/包名、固定双ARM Release引擎、完整玻璃和44项旧冻结物保持。实际版本/code、V2/V3、不可调试、min24/target36、ZIP/ELF对齐、SDK/玻璃着色器字节及实际APK中3条说明通过生产Range读取器核验。原签名身份兼容不等于手机覆盖安装已验收。

## 本轮完成

1. 12处刷新接入共用MusicRefreshIndicator和MusicLoadingScope，Beta只显示一个Apple进度所有者，保留已有内容。原Material圆环不再出现；常用不确定等待统一Apple，确定数值进度保留。消息刷新复用已有区域/64dp等待空间，避免重复空隙或覆盖文字。
2. 音乐库分常用音乐、收藏与订阅、播放足迹、我的歌单。47项网易云能力、5目录/9快捷、5个云盘工作流、导入/新建/收藏概览及权限/路由保留，未知类别仍有入口；平台条件不变。
3. 修复旧路由回报清掉最新Tab目标。失败回归先复现丢点击，再以实际玻璃控件连续坐标点击及等待内容验证最新目标立即生效；保留PageView滑动/方向、页面状态和完整玻璃。

## 验证与待验收

{checks}通过。按完整套件与补跑每文件最终结果计数，无重叠叠加；旧资料失败用例显式测试单次失败后的手动重试态，产品自动重试未改。初始失败及诊断保留。独立复核ship，文档比较不改现有设计系统，无新产品栅格。

主机图包含390px浅色两平台音乐库、320px深色1.3字号库、390/320px深色1.5字号消息刷新及有意采样的Tab中帧。全部合成组件证据，不证明真实账号、官版一致性或手机GPU/FPS/系统返回/TalkBack。用户自行覆盖安装，验收刷新/首访/慢网、全部库入口、快速Tab、缓存和小图/高清连续性。

一起听真实结束记录仍未确认解决；1.0.26曾失败，后续无真实载荷/成功反馈，等待用户手动复制单条脱敏结构诊断，不能凭合成测试称修复。

## 接续约束

先读本交接和实际源码，保留所有脏改动及冻结APK/ZIP；不reset/clean/stash/切分支/pull覆盖，不覆盖冻结版本。无新授权不访问手机/ADB、账号、后台或提交推送/发布。新需求继续逐题澄清、确认方案后实施。

构建默认1.0.31/code52，tool/build_android_release_apk.ps1；Flutter3.41.9/Dart3.11.5、既有JDK/SDK/NDK与原签名沿用。pubspec内部历史版本不是公开交付版本；工作区SOURCE-SNAPSHOT.json为1.0.24历史基线，ZIP内另有1.0.31当前清单和历史BASELINE，Git HEAD/旧清单不能代替当前完整源码。

私有构建/签名/复核与原始失败证据在.codex-artifacts/2026-11-01-release131/，不入源码ZIP。刷新/展示/业务/路由职责解耦：刷新适配器只协调手势与视觉所有者，资料/播放仓库仍拥有自己的任务和账号代际，Tab只维护最新目标。
"""
(root/'HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.31.md').write_text(handoff,encoding='utf-8')
p=root/'AGENTS.md'; current=p.read_text(encoding='utf-8-sig')
assert not current.startswith('**2026-11-01 本机最新为 1.0.31')
pointer=f"""**2026-11-01 本机最新为 1.0.31/code52：按确认统一刷新/等待为Apple动画并消除同次刷新双动画，音乐库按四组归纳且保留全部功能，修正旧路由回报丢失最新Tab点击，保留滑动/页面状态。先读 [1.0.31交接](HANDOFF-CURRENT-SESSION-2026-11-01-v1.0.31.md) 和 [安装验收](docs/INSTALL-v1.0.31.md)。{checks}通过；原签名双ARM、定制引擎、完整玻璃及44项旧冻结物保持。仅本地准备，1.0.25～1.0.31未提交，未手机/ADB/真实账号/后台、未推送发布；真机效果待用户验收，一起听真实记录仍未确认解决。D:/AnLi，beta/b6bcd542，禁止覆盖脏工作区及冻结交付。下方“最新”为历史时点。**\n\n"""
p.write_text(pointer+current,encoding='utf-8')
print({'version':'1.0.31','betaPassed':1320,'screenshots':12,'oldFrozenFiles':44,'docs':4})
