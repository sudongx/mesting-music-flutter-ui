from pathlib import Path
from collections import Counter
from datetime import datetime, timezone, timedelta
import json, hashlib, subprocess

root=Path('D:/AnLi');out=root/'.codex-artifacts/2026-10-30-release119'
def read(path):return json.loads(path.read_text(encoding='utf-8-sig'))
def write(path,value):path.write_text(json.dumps(value,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def tests(name):
 events=[]
 for line in (out/name).read_text(encoding='utf-8-sig').splitlines():
  try:events.append(json.loads(line))
  except (ValueError,TypeError):pass
 assert events and events[-1].get('type')=='done' and events[-1].get('success') is True,name
 assert not any(e.get('type')=='error' for e in events),name
 suites={e['suite']['id']:e['suite']['path'] for e in events if e.get('type')=='suite'}
 started={e['test']['id']:e['test'] for e in events if e.get('type')=='testStart'}
 counts=Counter()
 for e in events:
  if e.get('type')=='testDone' and e.get('result')=='success' and not e.get('hidden') and not e.get('skipped'):
   path=Path(suites[started[e['testID']]['suiteID']]).relative_to(root).as_posix();counts[path]+=1
 assert counts,name
 return {'passed':sum(counts.values()),'files':sorted(counts),'countsByFile':dict(sorted(counts.items())),'log':str((out/name).relative_to(root)).replace('\\','/'),'success':True}

beta=tests('beta-verified-final.jsonl');stable=tests('stable-final.jsonl');back=tests('android-back-verified-final.jsonl');ui=tests('ui-verified-final.jsonl')
assert beta['passed']==1081 and len(beta['files'])==51,(beta['passed'],len(beta['files']))
assert stable['passed']==19 and back['passed']==1 and ui['passed']==9
assert 'No issues found!' in (out/'analyze-verified-final.log').read_text(encoding='utf-8-sig')
apk=read(root/'release/Mesting-Music-v1.0.19-verification.json')
notes=read(out/'local-apk-notes-verification.json');assert notes['versionCode']==40 and notes['notesCount']==8
before=read(out/'frozen-v118-before.json')
for relative,expected in before.items():
 file=root/relative
 assert file.stat().st_size==expected['size']
 with file.open('rb') as stream:assert hashlib.file_digest(stream,'sha256').hexdigest()==expected['sha256'],relative
lock=hashlib.file_digest((root/'pubspec.lock').open('rb'),'sha256').hexdigest()
assert lock=='6316dd4a0989c4a89b32d2a9a82bf603203743175909b52395a2d97cc4f2b5cc'
record={
 'version':'1.0.19','androidVersionCode':40,'date':'2026-10-30',
 'preparedAt':datetime.now(timezone(timedelta(hours=8))).isoformat(),
 'status':'local_original_signature_release_ready_not_published',
 'baseCommit':'8763551c0cc39c1c25f60e42fd49624f58d91a89',
 'betaRegression':beta,'stableRegression':stable,'androidBackRegistration':back,
 'visualQaRegression':ui,'extraCountsNotAddedToBeta':True,
 'analysis':{'issues':0,'log':'.codex-artifacts/2026-10-30-release119/analyze-verified-final.log'},
 'visualQa':{'hostOnly':True,'syntheticAccounts':True,'themes':['light','dark'],'widths':[320,390],'compactTextScale':1.3,'screenshotsReviewed':True,'emojiGlyphsReviewed':True,'physicalDeviceRenderingVerified':False},
 'performance':{'inputVersion':'1.0.18','inputCode':39,'inputFrames':3854,'displayHz':120,'buildP95ms':3.550,'rasterP95ms':26.295,'rasterOver8_33ms':1519,'rasterOver16_67ms':352,'publicImageProbe':read(out/'public-image-probe.json'),'glassQualityPreserved':True,'routeEntryDeferredWorkTestPassed':True,'afterDeviceFrameRateMeasured':False},
 'productionApkNotesReader':notes,'apk':apk,
 'preservedArtifactsAndLock':{'frozenV118LocalFiles':len(before),'allByteIdentical':True,'lockSha256':lock},
 'sourceVerificationSeparateToAvoidSelfReference':True,'sourceSnapshotVerification':'release/Mesting-Music-v1.0.19-source-verification.json',
 'deviceAccess':False,'adbUsed':False,'realAccountAccess':False,'backendAccess':False,
 'uploaded':False,'published':False,'gitCommitted':False,'gitPushed':False,'userDeviceRetestRequired':True,
}
write(root/'docs/validation-2026-10-30-v1.0.19.json',record)
handoff='''# Mesting Music 1.0.19 / code40 本地交付接续

日期：2026-10-30（Asia/Shanghai）。本轮按用户逐项确认方案完成七项修复，准备原签名 APK、完整源码及校验资料。只准备本地文件；没有 Git 提交推送、GitHub Release 或 music 后台发布，没有真实账号、手机或 ADB 操作。

- 代码基线：beta / `8763551c0cc39c1c25f60e42fd49624f58d91a89`；本轮改动尚未提交。远端归档基线仍以 1.0.18 跨电脑交接为准。
- APK：`release/Mesting-Music-v1.0.19.apk`，{bytes} 字节，SHA-256 `{sha}`。
- 完整源码：根目录 `Mesting-Music-v1.0.19-source.zip`；大小和摘要以 `release/Mesting-Music-v1.0.19-source-verification.json` 为准，不能覆盖旧冻结交付。
- 原签名证书：`8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333`，包名 `com.mesting.music.beta`，双 ARM，code40；未做手机覆盖安装验收。
- 51 文件 1081 项 Beta 回归通过；普通 stable 19 项、Android 返回专项 1 项通过；新 UI 9 项已在主组内，不重复相加。静态分析 0 问题。APK v2/v3、CRC、16KiB ZIP/arm64 ELF 对齐、许可和无 QA/测试插件打包检查通过，生产 Range 读取器从最终本地 APK 读出 8 条说明。

先读 `docs/fixes-2026-10-30-v1.0.19.md`、`docs/INSTALL-v1.0.19.md`、`docs/PERFORMANCE-2026-10-30-v1.0.19.md` 和 validation JSON。网易云歌单/歌手图片使用 CDN 缩略图；双平台下载音质逐任务保存并严格核对；聊天普通表情转换、名称居中、一起听及菜单布局已修复；未读总数超过99为99+，新账号等待时隐藏旧值；重复音乐搜索入口移除。RouteSettledContent 延后可选栏加载，不降低玻璃质量。

Flutter 3.41.9 / Dart 3.11.5，Java 编译目标17，保持依赖锁，原签名通过私下保留的密钥生成。不要从源码包寻找私钥或改用新 debug 签名。SDK 原许可及第三方声明保留，用户分享继续关闭。

真实账号的下载权益、歌单/歌手封面、私信和计数、手机离线存储及更新后帧率仍由用户复测。已有诊断只证明 1.0.18 的绘制耗时较高；匿名缩略图样本减少约97%传输量，不等于应用帧率提升97%或持续120fps。

后续先只读核对 Git/工作区、交付核验和未提交改动，按 AGENTS.md 继续逐题澄清并确认方案后实施。没有新授权不提交推送或发布后台，不访问手机/ADB、真实账号，不关闭保留的 music 网页。
'''.format(bytes=apk['fileSize'],sha=apk['sha256'])
(root/'HANDOFF-CURRENT-SESSION-2026-10-30-v1.0.19.md').write_text(handoff,encoding='utf-8')
(root/'docs/SESSION-HANDOFF-2026-10-30-v1.0.19.md').write_text('# 1.0.19 接续入口\n\n先读 [本版总交接](../HANDOFF-CURRENT-SESSION-2026-10-30-v1.0.19.md)、[修改](fixes-2026-10-30-v1.0.19.md)、[安装复测](INSTALL-v1.0.19.md) 和 [验证](validation-2026-10-30-v1.0.19.json)。\n\n本轮为本地原签名准备，Git/GitHub 和 music 的最新公开状态不能从本地包推断。保留1.0.18等冻结产物，用户自行真机复测。\n',encoding='utf-8')
p=root/'AGENTS.md';text=p.read_text(encoding='utf-8-sig')
pointer='**当前本机1.0.19/code40（2026-10-30）：已按用户确认完成封面、双平台下载音质、聊天表情与顶部、总未读99+、重复搜索入口及切页绘制工作，51文件1081项Beta回归、stable19项、Android返回1项与静态分析通过，原签名本地APK及完整源码准备。先读[本版总交接](HANDOFF-CURRENT-SESSION-2026-10-30-v1.0.19.md)与[验证](docs/validation-2026-10-30-v1.0.19.json)。本轮尚未Git提交推送、GitHub或music发布；下方1.0.18是已归档基线。保留冻结交付，用户自行手机复测，没有新授权不访问手机/ADB、真实账号或后台。**'
assert pointer not in text
text=text.replace('# 协作约定\n','# 协作约定\n\n'+pointer+'\n',1);p.write_text(text,encoding='utf-8')
print(json.dumps({'beta':beta['passed'],'stable':stable['passed'],'androidBack':back['passed'],'staticIssues':0,'recordsWritten':True}))
