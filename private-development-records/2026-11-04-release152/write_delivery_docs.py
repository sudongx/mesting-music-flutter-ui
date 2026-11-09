from pathlib import Path
from datetime import datetime,timezone
import json,hashlib,re
ROOT=Path('D:/AnLi');OUT=ROOT/'.codex-artifacts/2026-11-04-release152'
def read(p):return json.loads(p.read_text('utf-8-sig'))
apk=read(ROOT/'release/Mesting-Music-v1.0.52-verification.json')
checks=read(OUT/'host-check-summary.json');payload=read(OUT/'formal-payload-verification.json')
build=read(OUT/'build-final-verification.json');notes=read(OUT/'local-apk-notes-verification.json');sdk=read(OUT/'sdk-host-summary.json')
assert apk['androidVersionCode']==build['versionCode']==notes['versionCode']==73
assert checks['analysisPassed'] and checks['analysisIssues']==0
assert checks['beta-complete.jsonl']['files']==172 and checks['beta-complete.jsonl']['counts']=={'success':1962,'skipped':2}
assert checks['stable-complete.jsonl']['counts']=={'success':63} and checks['search-back-player.jsonl']['counts']=={'success':55}
assert checks['finalHostFrames']==56
validation={'version':'1.0.52','androidVersionCode':73,'date':'2026-11-04','preparedAtUtc':datetime.now(timezone.utc).isoformat(),
 'packageName':'com.mesting.music','appName':'Mesting Music','internalNativeUiFlavor':'beta',
 'apk':apk,'host':checks,'actualBuild':build,'formalPayload':payload,'productionApkNotesReader':notes,'sdk':sdk,
 'protectedOldFrozenArtifacts':94,'protectedGitHead':'b6bcd5425e0df3e03febdd460b56d0ed42004c52',
 'originalSigningPreserved':True,'dependencyLockUnchanged':True,'newProtocolsUseSyntheticFixtures':True,
 'officialStandardLoginActualAccountAccepted':False,'officialListeningDailyOrCrossDayBooked':False,
 'phoneAdbAccess':False,'realMusicAccountAccess':False,'backendAccess':False,'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,
 'oldBetaPrivateDataAutomaticallyMigrated':False,
 'frozenSourceVerificationExternal':'release/Mesting-Music-v1.0.52-source-verification.json'}
(ROOT/'docs/validation-2026-11-04-v1.0.52.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n','utf-8')
result='本地正式 APK 已原签名构建并核验；Beta172文件1962项通过/2条件跳过、Stable63、独立导航55、静态分析0问题及56张最终主机图已核对。SDK29文件563项仅在613个第三方输入哈希一致后继承51结果；R4原生16项同输入继承，不重复计成本轮新测。实际包名/code、双ARM/定制引擎/7shader/8旧SDK库/2缓冲库/原证书和八条更新说明已从最终APK单独读取。完整源码另存并回读验证，字节与哈希以本版verification和SHA256清单为准。未访问手机或真实账号，官方授权、写入和最终跨日入账待验收。'
for relative in ['docs/fixes-2026-11-04-v1.0.52.md','docs/INSTALL-v1.0.52.md','HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.52.md']:
 p=ROOT/relative;s=p.read_text('utf-8');s=re.sub(r'^\*\*交付草稿状态：\*\*.*$', '**本地交付与验证：** '+result,s,flags=re.M)
 s=s.replace('目标本地正式 APK：','本地正式 APK：').replace('本稿不提前认定分析/测试/渲染或构建已通过，最终状态见本版验证和 release 核验文件。主代理需把完整文件复跑按替换计数记录，不跨轮累加；条件跳过保留原因。实际 APK 的包名/code、原证书、双 ARM/对齐、定制引擎、7 份玻璃 shader、8 份旧 SDK 库及 2 份缓冲库、R4 媒体桥/权限和八条更新说明均须单独记录，源码包另做覆盖核对。',result)
 s=s.replace('新文档与 AGENTS 若在冻结后补写，不回填已冻结 APK/ZIP。','本轮文档和AGENTS入口随52完整源码冻结；后续补写不回填本次APK/ZIP。')
 assert '交付草稿状态' not in s
 p.write_text(s,'utf-8')
prior=(ROOT/'AGENTS.md').read_bytes();prior_sha=hashlib.sha256(prior).hexdigest()
prefix=('**2026-11-04 本地正式交付1.0.52/code73：先读[52交接](HANDOFF-CURRENT-SESSION-2026-11-04-v1.0.52.md)、[安装](docs/INSTALL-v1.0.52.md)及[实现](docs/fixes-2026-11-04-v1.0.52.md)。按确认完成210dp末播胶囊/连续校准滚动、歌曲目录与署名独立读取重试、酷狗20.8.6真实日周月/已发布年报与服务器乐龄、等级三榜及点赞/90天地区、徽章分类详情领取/主页5枚及评论2枚佩戴、多酷狗账号暂停旧并恢复各自队列进度。保留Lite主登录并补同UID加密标准授权，QR1005凭据经v4零计量验证后保存；只上报当前周期新听歌，旧/未知不重发，回执/等级/官方日读回分开。Beta172文件1962通过/2条件跳过、Stable63、导航55、分析0及56主机图；SDK563及R4原生16仅同输入继承，最终原签名双ARM/定制引擎/7shader/8旧SDK/2缓冲库/包名code及8条说明另验。94份旧冻结物、签名/锁/全部脏改动、beta/b6bcd542及空暂存保持；52仅本地APK/完整源码，未提交推送发布，不管旧会话Gitee上传。未手机/ADB/真实账号/后台；标准扫码、官方各项读写/新听歌及跨日入账待验收。网易云历史总时长/十月683分10秒未解决，旧日志不重发。新接手先只读后等，不外推设备/账号/发布授权；下方均为历史时点。**\n\n')
assert b'1.0.52/code73' not in prior[:160]
(ROOT/'AGENTS.md').write_bytes(prefix.encode('utf-8')+prior)
for relative,text in [('PRODUCT.md','1.0.52本地新增酷狗真实听歌统计/乐龄/等级三榜/徽章管理和多账号。Lite音乐登录与同UID标准授权分开保存；正常新听歌回执、等级读回和官方日读回分别显示，真实账号及跨日入账待验收。'),('DESIGN.md','1.0.52沿用完整玻璃与反向路由，末播胶囊最大210dp、同一滚动活动连续校准；目录/署名独立错误与重试保留成功内容。酷狗原生统计/等级/徽章页面覆盖明暗/320窄屏及2x文字，写入未知先重读，不添加交易入口。')]:
 p=ROOT/relative;old=p.read_bytes();p.write_bytes(('**2026-11-04 1.0.52：'+text+'**\n\n').encode('utf-8')+old)
p=ROOT/'CHANGELOG.md';old=p.read_bytes();lines=read(ROOT/'assets/data/release-notes.json')['releaseNotes'];p.write_bytes(('## 1.0.52 / code73 — 2026-11-04\n\n'+''.join('- '+line+'\n' for line in lines)+'\n本地原签名APK及完整源码交付；主机验证不代表真实账号和跨日入账验收。\n\n').encode('utf-8')+old)
(OUT/'public-docs-final.json').write_text(json.dumps({'priorAgentsBytesSha256':prior_sha,'newAgentsPrefixBytes':len(prefix.encode('utf-8')),'hostFiles':172,'betaPass':1962,'finalHostImages':56,'apkSha256':apk['sha256']},indent=2)+'\n','utf-8')
print('Public delivery docs and append-only project entries prepared from actual receipts.')
