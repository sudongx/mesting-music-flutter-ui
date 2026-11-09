from pathlib import Path
import hashlib,json,subprocess,zipfile
from datetime import datetime,timezone,timedelta
ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-10-29-release117'
def read(p):return json.loads(p.read_text(encoding='utf-8-sig'))
def digest(p):
 with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()
apk=read(ROOT/'release/Mesting-Music-v1.0.17-verification.json')
reader=read(OUT/'local-apk-notes-verification.json')
notes=read(ROOT/'assets/data/release-notes.json')
tests=read(OUT/'host-test-summary.json');before=read(OUT/'before.json')
assert apk['version']==reader['version']==notes['version']=='1.0.17'
assert apk['androidVersionCode']==reader['versionCode']==notes['versionCode']==38
assert reader['notesCount']==len(notes['releaseNotes'])==8
assert 'No issues found!' in (OUT/'analysis.txt').read_text(encoding='utf-8-sig')
for p,sha in before['frozen'].items():assert digest(ROOT/p)==sha,p
assert digest(ROOT/'pubspec.lock')=='6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=ROOT,text=True).strip()==before['head']
assert subprocess.check_output(['git','diff','--cached','--raw'],cwd=ROOT,text=True)==before['index']==''
for p,sha in read(OUT/'built-sources.json').items():assert digest(ROOT/p)==sha,p
stamp=datetime.now(timezone(timedelta(hours=8))).isoformat(timespec='seconds')
validation={
 'version':'1.0.17','androidVersionCode':38,'date':'2026-10-29','preparedAt':stamp,
 'status':'local_release_ready_for_user_upload','implementation':'docs/UX-PLAYBACK-2026-10-29-v1.0.17.md',
 'betaRegression':tests['betaRegression'],
 'stableSearchAndUpdateRegression':tests['stableSearchAndUpdate'],
 'androidBackRegistrationRegression':tests['androidBackRegistration'],
 'lastChangedAudioAndUiRegression':tests['finalChangedAudioAndUi'],
 'sourceMenuRegression':tests['sourceMenusAndUi'],
 'additionalRegressionCountsOverlapMainAndAreNotSummed':True,
 'analysis':{'issues':0,'log':'.codex-artifacts/2026-10-29-release117/analysis.txt'},
 'apk':apk,'productionApkNotesReader':reader,
 'navigationAndStyleInventory':read(OUT/'navigation-style-inventory.json'),
 'visualQa':{'syntheticAccountOnly':True,'themes':['light','dark'],'widths':[320,390],
   'narrowTextScale':1.3,'renderedSurfaces':['personal_profile','downloaded_library'],
   'glassEffectReduced':False,'physicalFrameRateMeasured':False,
   'privateEvidenceDirectory':'.codex-artifacts/2026-10-29-release117/ui'},
 'downloads':{'directoryPermission':'persisted_user_selected_SAF_tree','playAllOrder':'visible_downloaded_list',
   'offlineLocalUriPlaybackHostVerified':True,'originalPlatformIdentityRetained':True,
   'noAutomaticLocalMusicImport':True,'legacyDownloadFilesMoved':False,'legacyDownloadFilesDeleted':False,
   'nativeStorageBridgeCompiledAndPackaged':True,'physicalOfflineRestartTestPerformed':False,
   'physicalExportOrFolderOpenVerified':False},
 'sourceSelection':{'existingAdaptersOnly':True,'newKugouAccountSourceAdded':False,'dualSignInAdded':False,
   'forcedSourceDoesNotFallThrough':True,'unavailableRowsDisabledHostVerified':True,
   'realAccountEntitlementChecked':False,'liveSourceAvailabilityCheckedThisRelease':False},
 'messages':{'accountScopedVisibleHistoryCursor':True,'newerIncomingTimestampRetainsUnread':True,
   'officialReadReceiptFabricated':False,'realAccountReadbackVerified':False},
 'preservedArtifactsAndLock':{'frozenArtifactFiles':len(before['frozen']),'allByteIdentical':True,
   'lockSha256':digest(ROOT/'pubspec.lock')},
 'sourceSnapshotVerification':'release/Mesting-Music-v1.0.17-source-verification.json',
 'sourceVerificationSeparateToAvoidSelfReference':True,
 'buildLog':'.codex-artifacts/2026-10-29-release117/build-release.log',
 'buildSourceHashesUnchanged':True,
 'environment':{'flutter':'3.41.9','dart':'3.11.5','java':'Temurin 17.0.20.1+1','minSdk':24,'targetSdk':36,
   'ndk':'28.2.13676358','gradleWorkers':1,'gradleMaxHeapGiB':3},
 'serverMembershipChanged':False,'physicalCrashRetestPerformed':False,'physicalUpgradeTestPerformed':False,
 'deviceAccess':False,'accountAccess':False,'backendAccess':False,'uploaded':False,'published':False,
 'publicReleaseVerified':False,'gitCommitted':False,'gitPushed':False,'userPublicationRequired':True,
}
(ROOT/'docs/validation-2026-10-29-v1.0.17.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
publish={'appSlug':'music','version':'1.0.17','androidVersionCode':38,'packageName':apk['packageName'],'appName':'Mesting Music',
 'apkPath':str(ROOT/'release'/apk['file']),'fileSize':apk['fileSize'],'sha256':apk['sha256'],
 'certificateSha256':apk['certificateSha256'],'releaseNotes':notes['releaseNotes'],
 'adminUrl':'https://download.csnas.asia/admin?page=apps','readyForUserUpload':True,'publicationOwner':'user',
 'uploaded':False,'published':False,'publicReleaseVerified':False,'preparedAt':stamp}
(ROOT/'release/Mesting-Music-v1.0.17-publish.json').write_text(json.dumps(publish,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(ROOT/'release/Mesting-Music-v1.0.17-release-notes.txt').write_text('Mesting Music 1.0.17 / Android code38\n\n'+''.join('- '+n+'\n' for n in notes['releaseNotes'])+'\n本机交付准备完成，上传发布由用户自行执行。\n',encoding='utf-8')
text=f'''# Mesting Music 1.0.17 / Android code38 本机接续

本轮按用户确认的八项整改及已下载“播放全部”完成本地准备，不新增酷狗账号音源、不做双平台签到联动。工程D:/AnLi，beta / {before['head']}，全部既有工作区与原签名保留，暂存区为空。用户自行安装和发布；当前未上传、未发布、未提交推送。

先读[实现与边界](UX-PLAYBACK-2026-10-29-v1.0.17.md)、[安装复测](INSTALL-v1.0.17.md)和[实际验证JSON](validation-2026-10-29-v1.0.17.json)。

## 本机完成

个人页资料与歌单分组、单项入口直达、公共返回与转场、玻璃菜单／表单、滚动灰底、消息本机阅读游标、中文输入搜索防抖、切歌立即停止和更新、封面HTTPS适配及缓存、独立已下载与播放全部、持久目录授权／导出／打开文件夹、既有来源逐曲选择均已实现。

45套1017项主机回归通过；最后改动相关6套65项另作复查，和主组重叠，不另相加。普通stable搜索及更新19项通过，Android返回注册专项1项通过。静态检查0问题。个人页浅深色／窄屏大字号及已下载列表已渲染检查；没有降低玻璃质量。

{len(before['frozen'])}个旧冻结交付文件及依赖锁逐字节不变。APK已核验原证书、包名、v2/v3、非debuggable、双ARM、ZIP/ELF对齐、CRC、许可和8条版本一致的说明。生产说明读取器仅从本地最终APK作Range模拟读取：{reader['rangeRequests']}次、{reader['bytesRead']:,}字节，无网络。

## 最终文件

准备时间{stamp}。APK `release/{apk['file']}`，{apk['fileSize']:,}字节，SHA256 `{apk['sha256']}`。完整源码`Mesting-Music-v1.0.17-source.zip`，准确大小／摘要及文件数见`release/Mesting-Music-v1.0.17-source-verification.json`。源码manifest逐文件核验，签名、账号、缓存、用户媒体和构建产物不入包。

## 接手约束与未验收

不得覆盖1.0.16等旧APK／源码ZIP。不要reset、clean、stash、切分支或自动提交推送；不要关闭保留的music网页，不继续桌面内存优化。没有新明确授权不访问手机、ADB、真实账号或music后台。

未做真机安装／升级、真实账号私信读回、手机断网重启播放／导出／文件管理器打开、官版数据双端核对、原闪退复测或设备帧率验收。系统文件管理器对目录ACTION_VIEW的支持依ROM而异，不能把原生编译与主机模拟说成已经在用户手机打开过。

下载在第一次选目录后持久保存授权；换目录只影响新文件，旧URI不迁移。已下载播放保留原平台ID，通过本地URI跳过音源解析。已有匿名来源继续保留，当前酷狗账号音源与自动广告领取迁移均未新增。手动来源只作用当前账号会话与歌曲，切换账号清空。

新会话先只读核对文件、版本与工作区，等待用户指示。后续需求仍一次只问一个必要问题，方案确认后实施。
'''
(ROOT/'docs/SESSION-HANDOFF-2026-10-29-v1.0.17.md').write_text(text,encoding='utf-8')
(ROOT/'HANDOFF-CURRENT-SESSION-2026-10-29-v1.0.17.md').write_text('# 当前本机交付：Mesting Music 1.0.17 / code38\n\n先读[本版接续](docs/SESSION-HANDOFF-2026-10-29-v1.0.17.md)、[实现与边界](docs/UX-PLAYBACK-2026-10-29-v1.0.17.md)、[安装复测](docs/INSTALL-v1.0.17.md)及本版validation。原签名APK与完整源码ZIP已本地准备，源文件清单、摘要和验证见release下对应JSON。\n\n本轮不新增酷狗账号音源或双平台签到。beta/deb68e4及既有脏工作区、原签名与旧冻结产物保留。用户自行安装发布，未访问手机／ADB、真实账号或后台，未提交推送；真机离线文件操作、消息读回与流畅度待用户验收。\n',encoding='utf-8')
banner='**当前本机开发版（2026-10-29）：用户确认1.0.17 / Android code38，完成个人页、返回／玻璃控件、消息／搜索、立即切歌、封面、独立已下载／播放全部／文件操作与既有来源逐曲选择。先读[1.0.17接续](docs/SESSION-HANDOFF-2026-10-29-v1.0.17.md)，以实际validation及冻结产物为准；本轮不新增酷狗账号音源或双签到。保留1.0.16等旧冻结交付、beta/deb68e4与全部脏工作区。music由用户发布；未经新授权不访问手机／ADB、账号或后台，不提交推送，不关闭music网页，不继续桌面内存优化。**\n\n'
p=ROOT/'AGENTS.md';s=p.read_text(encoding='utf-8');assert '用户确认1.0.17 / Android code38' not in s;s=s.replace('# 协作约定\n\n','# 协作约定\n\n'+banner,1);p.write_text(s,encoding='utf-8',newline='\n')
p=ROOT/'docs/CONTINUE-BETA.md';s=p.read_text(encoding='utf-8');s='# 当前接续：Mesting Music 1.0.17 / code38\n\n原签名本地交付准备完成，先读[本版接续](SESSION-HANDOFF-2026-10-29-v1.0.17.md)及[实现边界](UX-PLAYBACK-2026-10-29-v1.0.17.md)。本轮不新增酷狗账号音源或双平台签到。保留旧冻结产物与脏工作区，用户自行安装发布，不访问手机／账号／后台，不提交推送。\n\n'+s.replace('# 当前接续：Mesting Music 1.0.16 / code37','## 历史本地准备：1.0.16 / code37',1);p.write_text(s,encoding='utf-8',newline='\n')
print(json.dumps({'version':'1.0.17','code':38,'apkReady':True,'sourceMetadataPrepared':True,'published':False}))
