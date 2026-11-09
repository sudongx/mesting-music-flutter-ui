"""Finalize local facts only after verifying the exact signed APK."""
from pathlib import Path
from datetime import datetime,timezone
import json,hashlib
ROOT=Path('D:/AnLi');OUT=Path(__file__).resolve().parent

def digest(p):
 with p.open('rb') as f:return hashlib.file_digest(f,'sha256').hexdigest()

host=json.loads((OUT/'host-check-summary.json').read_text('utf-8'))
apk=json.loads((ROOT/'release/Mesting-Music-v1.0.59-verification.json').read_text('utf-8'))
notes=json.loads((OUT/'local-apk-notes-verification.json').read_text('utf-8'))
native=json.loads((OUT/'native-packaging-verification.json').read_text('utf-8'))
before=json.loads((OUT/'state-before.json').read_text('utf-8'))
inputs=json.loads((OUT/'build-input-final2.json').read_text('utf-8'))
assert host['analysisPassed'] and host['beta']['success']==2175 and host['beta']['skipped']==2
assert apk['androidVersionCode']==80 and apk['originalSignature']
assert notes['notesCount']==8 and not notes['networkAccess']
for e in inputs['files']:assert digest(ROOT/e['path'])==e['sha256'],e['path']
for e in before['frozenArtifacts']:
 p=ROOT/e['path'];assert p.stat().st_size==e['bytes'] and digest(p)==e['sha256'],e['path']
assert len(before['frozenArtifacts'])==108
validation={'version':'1.0.59','androidVersionCode':80,'recordedAtUtc':datetime.now(timezone.utc).isoformat(),'host':host,
'apk':{'path':'release/Mesting-Music-v1.0.59.apk','sha256':apk['sha256'],'bytes':apk['fileSize'],'originalCertificateSha256':apk['certificateSha256'],'abis':apk['abis'],'minSdk':apk['minSdk'],'targetSdk':apk['targetSdk'],'engineBytesMatchPinnedManifest':apk['engineBytesMatchPinnedManifest'],'unchangedNonAppNativeLibrariesFrom58':len(apk['unchangedNonAppNativePayloadsFrom58']),'glassShadersByteIdenticalTo58':apk['glassShadersByteIdenticalTo58'],'glassShaderCount':len(apk['glassShadersComparedByteIdenticalAgainstLocalV136']),'nativePackaging':native,'productionNotesReadFromActualApk':notes},
'preservation':{'oldFrozenArtifactsRehashedAndUnchanged':108,'productBuildInputsVerifiedAfterBuild':len(inputs['files']),'pubspecLockSha256':before['lockSha256'],'originalSigningFileUnchanged':digest(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore')==before['signingSha256'],'branch':before['branch'],'head':before['head'],'indexIntentionallyEmpty':True,'dirtyWorkingTreeRetained':True},
'device':{'accessed':False,'adbUsed':False,'realAccountsAccessed':False,'backendAccessed':False,'phoneAcceptance':False,'code79To80OverlayVerified':False,'newVersionColdRestoreVerified':False,'neteaseRealSignInAccepted':False,'neteaseDirectAdClaimAccepted':False,'neteaseFreeListenCredited':False,'kugouOfficialDayWeekMonthAndCumulativeBookingVerified':False,'nativeQqWechatLoginConnected':False,'older56SameCodeOverlayIsNotThisUpgradeProof':True},
'outstanding':['NetEase minimal real-account qualification, transport compatibility and direct reward acceptance remain unverified.','No real-account sign-in, free-listen balance or cross-day ad task acceptance was performed.','No complete official historical sign-in calendar endpoint was established; only confirmed receipts and current signed flag are used.','QQ/WeChat native approved identity/session exchange and Kugou actual statistics booking remain unresolved.','Physical upgrade, cold restore, network/VPN, images, playback and GPU remain untested for this APK.','Original key invalidation cause, old ciphertext and NetEase historical total/October 683m10s remain unresolved.'],
'oldAcceptedOrUnknownPlaybackRecordsReplayed':False,'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False}
(ROOT/'docs/validation-2026-11-05-v1.0.59.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n','utf-8')
result='\n最终本地主机：Beta195文件2175通过／2条件跳过、Stable63、导航55、静态分析0；48张主机图已查看。首轮旧离线界面fixture未隔离新增奖励自动读取导致暂存定时器、初轮新用例的转场等待与释放问题，以及28项分析提示均保留原证据并修复，完整文件复跑合并、不累加。实际原签名双ARM／1528编译输入／定制引擎／7shader／58全部12非app原生库／DEX三类五方法十二字段JNI及APK8条说明另验。\n'
for p in [ROOT/'HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.59.md',ROOT/'docs/fixes-2026-11-05-v1.0.59.md']:
 text=p.read_text('utf-8');assert '最终本地主机：' not in text;p.write_text(text+result,'utf-8')
assert not (ROOT/'Mesting-Music-v1.0.59-source.zip').exists()
prefix=('**2026-11-05 本地交付1.0.59/code80：先读[59交接](HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.59.md)、[实现](docs/fixes-2026-11-05-v1.0.59.md)、[安装](docs/INSTALL-v1.0.59.md)及[验证](docs/validation-2026-11-05-v1.0.59.json)。'
'已确认双平台全部精选卡片与榜单／公开歌单大背景右下角独立播放，36dp视觉／48dp命中，日推完整列表、心动官方批次、FM原流续播；较早选择／旧账号／离页与确认后结果均检查。'
'网易云增加日历／自动开关／手动签到与免费听余额、任务和可停止连续直接申请。官版签到／mobileSign、asset真实毫秒及任务／gainFlag已静态核对，但最小资格参数、eapi兼容与无视频直接领取未真实账号证明，不承诺免广告到账；不伪造广告凭证，拒绝／未知停止，未定写同日不重放，历史仅已确认日期。'
'Beta195文件2175通过／2条件跳过、Stable63、导航55、分析0和48张已查看主机图；首轮fixture隔离／新测试释放及28项分析提示修复，原日志与完整文件复跑保留不累加。'
'实际原签名双ARM／1528编译输入／定制引擎／7shader／58全部12非app库／DEX三类五方法十二字段JNI及APK8条说明另验；FSS164、网络媒体35、Rust136／6外网忽略、SDK563仅同输入历史继承。'
'原108冻结物、签名／锁／全部历史脏改动、beta/b6bcd542及空暂存保持，59APK／完整源码另存。未手机／ADB／真实账号／VPN／后台／提交推送发布；79→80升级／冷恢复／网络图片播放GPU与真实签到到账待验，不外推56同码结果。'
'QQ微信原生登录、酷狗官方累计及日周月入账、旧密钥失效原因／旧密文及网易云历史总时长／十月683分10秒仍未解决；59不改听歌上报、旧日志不补发。新接续先按release159/after.json只读核对后等待，不自动清理同步构建发布，不接管旧Gitee或外推设备授权。下方保留历史时点。**\n\n')
agents=ROOT/'AGENTS.md';old=agents.read_bytes();assert not old.startswith('**2026-11-05 本地交付1.0.59'.encode());agents.write_bytes(prefix.encode('utf-8')+old)
print(json.dumps({'finalDocsPrepared':True,'protectedOldArtifacts':108,'buildInputsVerified':len(inputs['files']),'apkSha256':apk['sha256'],'phoneAccess':False},indent=2))
