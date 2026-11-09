"""Write delivery records from completed host/build/APK evidence, before ZIP freeze."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-04-release150'

def read(path):
    return json.loads(path.read_text('utf-8-sig'))

def sha(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

checks = read(OUT/'host-check-summary.json')
build = read(OUT/'build-final-verification.json')
apk = read(ROOT/'release/Mesting-Music-v1.0.50-verification.json')
native = read(OUT/'formal-payload-verification.json')
notes = read(OUT/'local-apk-notes-verification.json')
protection = read(OUT/'preservation-final.json')
assert all(checks[name]['completeAndSuccessful'] for name in (
    'beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'))
assert checks['analysisPassed'] and apk['packageName'] == 'com.mesting.music'
assert apk['androidVersionCode'] == 71 and notes['versionCode'] == 71
assert protection['oldFrozenCount'] == 90 and protection['allOldFrozenBytesUnchanged']
assert native['nativeChecksInheritedFromUnchangedR4Inputs'] and build['actualBuildReceiptPresent']

record = {
    'version':'1.0.50','androidVersionCode':71,'packageName':'com.mesting.music',
    'internalNativeUiFlavor':'beta','createdAtUtc':datetime.now(timezone.utc).isoformat(),
    'hostChecks':checks,'actualAndroidBuild':build,
    'apk':{'path':'release/'+apk['file'],'bytes':apk['fileSize'],'sha256':apk['sha256'],
        'certificateSha256':apk['certificateSha256'],'v2':apk['v2Signature'],'v3':apk['v3Signature'],
        'abis':apk['abis'],'customEngineBytesVerified':True,'glassShaderCount':7,'sdkLibraryCount':8,
        'installedPackageReadFromActualApk':apk['packageName']},
    'source':'Mesting-Music-v1.0.50-source.zip',
    'sourceSummaryExternal':'release/Mesting-Music-v1.0.50-source-verification.json',
    'nativeMediaBridge':{'inheritedR4Scenarios':16,'rerunThisVersion':False,
        'inputFilesStillByteIdentical':True,'actualThisApkBridgeAndPermissionsChecked':True,
        'newRendererFlavorDecisionActuallyCompiled':True},
    'actualApkNotes':notes,
    'legacyBetaInPlaceUpgradePossible':False,'legacyBetaDataAutomaticallyMigrated':False,
    'legacyStableSamePackagePhysicalUpgradeTested':False,
    'originalDirtyWorkspacePreserved':True,'originalIndexPreserved':True,'originalFrozenArtifactsPreserved':90,
    'branch':protection['branch'],'head':protection['head'],'staged':[],
    'noPhysicalDeviceAcceptance':True,'noRealAccountAcceptance':True,'noCDNAcceptance':True,
    'historicalDurationFixed':False,'october683Minutes10SecondsRecovered':False,'oldLogsReplayed':False,
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,
    'phoneAccess':False,'musicAccountOrBackendAccess':False,
    'privateReferenceMaterialInSourceZip':False,
}
(ROOT/'docs/validation-2026-11-04-v1.0.50.json').write_text(
    json.dumps(record,ensure_ascii=False,indent=2)+'\n','utf-8')

install=ROOT/'docs/INSTALL-v1.0.50.md'
text=install.read_text('utf-8')
marker='APK：`D:/AnLi/release/Mesting-Music-v1.0.50.apk`'
assert marker in text and '实际APK SHA256：' not in text
text=text.replace(marker,marker+'\n\n实际APK SHA256：`'+apk['sha256']+'`；大小 '+f"{apk['fileSize']:,}"+' 字节。')
text+='\n最终主机结果：157文件1840通过/2条件跳过，Stable 6文件63，独立导航整文件54，静态分析0，22张最终主机图。Beta按最终整文件来源每文件只计一次；足迹15项已包含，不另累加。实际原签名双ARM、定制引擎、7玻璃shader/8SDK、包名及APK八条说明生产Range读取已核验；R4原生16项只继承相同输入，未冒称本轮重跑或真机验收。\n'
install.write_text(text,'utf-8')

handoff = ROOT/'HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.50.md'
assert not handoff.exists()
handoff.write_text(f'''# Mesting Music 1.0.50 / code71 本地交接

日期：2026-11-04（Asia/Shanghai），唯一工程D:/AnLi。用户确认实施五组页面/歌曲菜单方案，并追加确认从本版起包名统一为 **com.mesting.music**。本轮仅本地交付，未提交推送、上传发布、手机/ADB或音乐账号/业务后台访问。

## 已完成

1. 普通二级、三级及更深页面进入向左、返回向右，保留真实父页与状态；补父页双向位移、声明式Page更新和Tab保留状态修复。顶部/系统返回同路由，特殊入口保留各自形式与反向退出。
2. 末播提示改为紧凑真实封面胶囊，内置独立关闭按钮；原按账号/列表记忆、重启恢复、按需补页定位及2秒高亮保持，不自动播放。
3. 双平台所有当前歌曲列表共用竖向三点底部菜单，喜欢页旁边爱心保留。下一首置待播首位，喜欢/歌单/下载/评论/分享复用原owner；本地/下载/歌单/待播保留上下文操作。
4. 菜单按当前歌曲真实来源读取歌手/专辑ID和明确署名的创作者；资料失败可重试，无值如实提示，不猜测词曲作者或交易项目。
5. 喜欢置顶按账号在本机串行持久化，最近置顶优先，可取消，其余原排序；用完整收藏ID确认未加载置顶成员，不修改官方歌单顺序。
6. 安装身份、构建入口、更新包名校验改为com.mesting.music；内部beta flavor仍选择现有原生/UI/定制引擎，隔离benchmark保持独立。原生渲染兼容按flavor识别，更新feed不改，本轮没有后台发布。

实现：[fixes](docs/fixes-2026-11-04-v1.0.50.md)；安装：[INSTALL](docs/INSTALL-v1.0.50.md)；机器证据：[validation](docs/validation-2026-11-04-v1.0.50.json)。

## 验证与交付

- Beta 157整文件1840通过/2条件跳过；Stable 6文件63；独立导航1整文件54；分析0；最终主机图22张。Beta以最终完整首轮、必要最终整文件回归和第二轮视觉文件来源合并，每文件只计一次，不将导航、其他版本或原生项重复相加。两条件跳过仍为Windows SQLite云快照夹具和可选AirPods原图。
- 原生媒体16项为R4相同7个源码/测试输入继承，未重跑；本版另实际Android编译，核对原证书V2/V3、arm64-v8a/armeabi-v7a、固定定制引擎、7份玻璃shader、8份SDK库、R4承载桥接与权限，以及实际APK内八条更新说明的生产Range读取。RendererCompatibility新flavor分支为本次实际编译覆盖，真机行为未证。
- APK：`D:/AnLi/release/Mesting-Music-v1.0.50.apk`，{apk['fileSize']:,}字节，SHA256 `{apk['sha256']}`。
- 完整源码：`D:/AnLi/Mesting-Music-v1.0.50-source.zip`。源码条目、大小及SHA256在冻结完成后的同版`release/*-source-verification.json`与`SHA256.txt`，避免文档自引用循环。源码保留既有完整许可/定制引擎，排除签名、缓存与私有官版/设备证据。

## 关键边界

com.mesting.music.beta与本版为不同应用，不能直接覆盖且旧Beta私有数据不自动迁入；这是用户已明确确认的包名选择，不自行迁移/删除旧应用。和同包名旧稳定版的实际覆盖/数据兼容未真机验收。

本地主beta/HEAD **b6bcd5425e0df3e03febdd460b56d0ed42004c52**及空主暂存、全部原脏改动、90份旧冻结物、签名与pubspec.lock保持。本次新增交付不得覆盖旧APK/ZIP。GitHub仍以49归档总交接和远端917cd332为已完成基线，main 9f011b1d仅归档导航文档；50没有提交推送或发布，不自动pull/reset/clean/stash/checkout，也不重复批量归档。

官版仅本地静态参考：网易云9.6.15菜单类型与用户截图；酷狗Lite5.2.9未证明新版封面胶囊精确比例，238×52是适配选择。没有真实wiki响应，不猜百科返回结构，创作者取明确平台/歌词署名。私有review目录和REA原APK/聚焦DEX不进公开源码；REA已结束。

## 待验收和接手

50包名新安装/旧稳定覆盖兼容、Android IME/GPU/动画方向及快速返回、真实封面/CDN/资料/创作者/菜单平台写入、置顶跨重启/账号/未加载歌曲和实际下一首行为仍待真实设备/账号验收。主机模拟和软件图不代替这些。48音质/真实队列与封面、47长列表和排序、46下载CDN续传，以及一起听锁屏/独立设备/播放暂停/功耗/退房清理仍承接各自边界。

历史总听歌时长与十月683分10秒仍未解决，跨日入账未验收，旧已收/未知weblog及旧原生日志不重发。R4历史同机双开7项切歌/2项释放不作为50真机验收。

新会话先只读核对本交接/AGENTS、HEAD/暂存及交付摘要后等待，无待续跑的自动编码、构建、上传或设备步骤。新需求仍一次一问、充分理解后给方案，用户确认后实施；本轮授权不外推设备、音乐账号或发布。
''','utf-8')

agents=ROOT/'AGENTS.md'
old=agents.read_bytes()
prefix='''**2026-11-04 本地正式交付1.0.50/code71：先读[50交接](HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.50.md)、[安装](docs/INSTALL-v1.0.50.md)及[实现](docs/fixes-2026-11-04-v1.0.50.md)。用户确认普通多级页双向/特殊入口反向退出、真实封面紧凑末播胶囊和内关闭、双平台所有歌曲列表三点菜单/真实资料与上下文操作、账号隔离本机喜欢置顶；另明确从本版及之后包名改com.mesting.music，内部beta原生/UI/引擎保留。新包不能覆盖旧.beta且私有数据不自动迁入，旧稳定同包名实际兼容未验收。157文件1840通过/2条件跳过、Stable63、独立导航54、分析0及22主机图；实际原签名双ARM/定制引擎/7shader/8SDK/包名与APK八条说明生产Range读取另核验，R4原生16仅相同输入继承。90份旧冻结物、签名/锁、全部脏改动、beta/b6bcd542和空暂存保持；50仅本地APK/完整源码，不提交推送发布，49GitHub归档保留。未手机/ADB/真实音乐账号/后台，实际新安装/旧稳定兼容/IME/GPU/CDN/资料/菜单写入和一起听剩余设备范围待验收。历史总时长及十月683分10秒未解决，旧日志不重发。新接手先只读核对后等待，不自动pull/reset/clean/重建或外推设备/发布授权；下方均为历史时点。**

'''.encode('utf-8')
assert not old.startswith(prefix)
agents.write_bytes(prefix+old)
(OUT/'delivery-documents.json').write_text(json.dumps({
    'priorAgentsBytesSha256':hashlib.sha256(old).hexdigest(),
    'priorAgentsSuffixBytesPreserved':True,'newHandoff':str(handoff),
    'productEditsAfterActualBuild':False,'docsWrittenBeforeSourceFreeze':True,
},indent=2)+'\n','utf-8')
print({'validationCreated':True,'handoffCreated':True,'apkSha256':apk['sha256'],
       'agentsOriginalSuffixPreserved':True})
