"""Write final local delivery records only after real host/package checks."""
from pathlib import Path
from datetime import datetime,timezone
import hashlib,json,shutil
R=Path('D:/AnLi');O=Path(__file__).resolve().parent
host=json.loads((O/'host-summary.json').read_text('utf8'))
candidate=O/'candidate1';apk=json.loads((candidate/'Mesting-Music-v1.0.77-verification.json').read_text('utf8'))
native=json.loads((O/'native-packaging-verification.json').read_text('utf8'))
contract=json.loads((O/'helper-contract-verification.json').read_text('utf8'))
build=json.loads((candidate/'build-input.json').read_text('utf8'))
for suite in ['beta','stable','navigation']:assert host[suite]['failed']==0
assert host['analysis']['issues']==0 and contract['passed']==16
for row in build['files']:assert hashlib.sha256((R/row['path']).read_bytes()).hexdigest()==row['sha256'],row['path']
for name in ['Mesting-Music-v1.0.77.apk','Mesting-Music-v1.0.77-verification.json','Mesting-Music-v1.0.77.apk.sha256']:
    p=R/'release'/name;assert not p.exists(),p
    with p.open('xb') as dst,(candidate/name).open('rb') as src:shutil.copyfileobj(src,dst)
(R/'docs/build-inputs-v1.0.77.json').write_text(json.dumps(build,indent=2)+'\n',encoding='utf8')
images=[]
for p in sorted((O/'ui').glob('*.png')):
    images.append({'file':p.name,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'explicitlyViewed':True})
assert len(images)==12
(O/'ui-review.json').write_text(json.dumps({'version':'1.0.77','images':images,'fixtureOnly':True,
    'checks':['Light/dark social list, likes, user, listening; header normal and 2x text',
        'Source groups, clickable counts, separate user/artist actions, unknown values',
        'Mine remains selected in new pushed pages; scroll content has chrome clearance'],
    'limits':['Software rendered fixtures are not phone/GPU/CDN/real-account proof.',
        '2x narrow header wraps and scrolls vertically; no clipped controls asserted by host tests.']},indent=2)+'\n',encoding='utf8')
gaps=['PC扫码会话是否被当前共同搜索/社交/music-wall接口实际接受；真实搜索及分页结果。',
 'NAS实际更新到匹配0.2.2及封面申请授权、ImageX上传、歌单云端/官版封面读回。',
 '本人关注/取消关注、粉丝/获赞及分组与官版真实一致。',
 'MCS身份报文兼容、本人账号归因及官版累计/本周时长实际增长；HTTP200不代替入账。',
 '77保留数据覆盖/冷恢复、Android后台与真实网络行为；本轮未手机。',
 '旧VIP整曲/301/400/奖励/下载权益/DSP、旧74原生崩溃根因/长期稳定/持续120FPS旧缺口保持。']
validation={'version':'1.0.77','androidVersionCode':98,'date':'2026-11-07','candidate':1,
 'authorizedScope':'Qishui only; independent helper modifications are owned by its original chat.',
 'hostChecks':host,'actualApkChecks':apk,'nativePackaging':native,
 'appToHelperSyntheticContract':contract,'hostVisualChecks':{'exported':12,'explicitlyViewed':12,'fixtureOnly':True},
 'deviceAccess':False,'physicalAcceptancePerformed':False,'realAccountAccess':False,
 'liveOfficialRequestsPerformed':False,'nasDeployedByMainChat':False,
 'helperOwnerThread':'01a1b026-e56b-7c60-9684-62d7494a6b70','helperReportedVersion':'0.2.2',
 'helperReportedTests':{'passed':80,'failed':0},'helperReportedSourceCommit':'de172f6',
 'helperPushOccurredInOriginalChatWithItsSeparateUserAuthorization':True,
 'mainProjectGitCommitted':False,'mainProjectGitPushed':False,'uploaded':False,'published':False,
 'prior66And71UserAcceptancePreserved':True,'oldMestingRetiredPathsAbsent':74,
 'driftVersion':7,'dataCleared':False,'newListeningReportsOnly':True,'oldUnknownLogsReplayed':False,
 'durationReportingCompatibilityCandidate':True,'officialDurationCreditingVerified':False,
 'officialTotalNeverIncludesUnconfirmedLocalDuration':True,'remainingAcceptance':gaps}
(R/'docs/validation-2026-11-07-v1.0.77.json').write_text(json.dumps(validation,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
handoff=f'''# 1.0.77 / code98 当前本地交付（2026-11-07）

本轮用户确认仅汽水接入。先读同版fixes、INSTALL、helper-contract和validation；接收以 `.codex-artifacts/2026-11-07-release177/after.json` 与 `python -B .codex-artifacts/2026-11-07-release177/verify177.py check` 为准，不运行或回填旧76校验器/收据。

已实现：官版歌曲POST搜索（保留原歌手GET）；官方关注/粉丝/获赞数据、汽水/抖音分组分页和明细、普通用户与歌手分别关注/取消并读回；官方累计/本周听歌时长读取、单播放器实际听歌计量和身份MCS上报兼容候选；封面授权失败阶段、签名助手策略码及图片/云端读回链路。新模型/仓库/provider/页面分开组织。未改网易云酷狗功能，用户已验结果保持。

主机最终Beta {host['beta']['files']}文件{host['beta']['passed']}通过/{host['beta']['skipped']}条件跳过；Stable {host['stable']['passed']}通过/{host['stable']['skipped']}条件跳过；导航{host['navigation']['passed']}；分析0。完整复跑替换旧文件，不累加。12张软件渲染主机图明确复核；App生成16个合成精确签名请求通过独立助手当前本地policy检查，不启动原生签名/服务。首轮2个统计自动重试timer失败已修；旧artist fixture/同凭据异UID隔离问题、遗漏stable flavor素材失败、图像导出假时钟等待和绑定夹具中断均保留原日志。不能抹掉失败或将其说为实机故障。

原签名双ARM APK实际核对v2/v3、包名code、SDK24/36、固定引擎/7shader/12非app库、实际JNI/DTO/DSP/R8回调及新功能AOT标记。输入{len(build['files'])}项编译/签名期间一致，锁和签名未变。APK SHA256 `{apk['sha256']}`，字节{apk['fileSize']}。完整源码和其SHA256另见release同版source-verification记录。

**本轮未手机/ADB/真实账号/NAS请求或部署，77未安装。** MCS报文是有真实身份的兼容候选，来源参考存在不同envelope形状；HTTP200或明确回执只作提交，本人归因与官版实际增长未验。官方读取/本机记录/已提交/未确认分开，未知事件不自动重放。搜索、社交、封面云端互通也均待实机。不能宣称全部同步官版或HTTP400现场已消失。

独立“汽水自用 Windows／NAS 签名助手”会话已交接并交付0.2.2，80项本地测试通过，原会话另获用户推送授权后自报Gitee提交de172f6；主项目没有推送，也没有代部署NAS。NAS需用户在该会话按匹配说明更新，只更新APK不能让旧助手新接口生效。主会话仅只读核对合成契约，不接管独立签名实验APK路线。

旧92冻结物、74退休路径、Drift7兼容、beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52、空暂存/签名/锁与历史脏树保持。77另存不回填76。66/71用户已验保持、手机号停止；旧51 APK不恢复、63 ZIP不补、旧日志不重放。无新的设备读回，不把76历史设备状态说成本次。未主项目Git同步清理/提交推送/上传发布/备份。

后续新问题仍按AGENTS逐题澄清和确认方案。验收缺口见validation，不自动使用手机、账号或NAS。没有继续运行的任务时才能写最终after收据。
'''
(R/'HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.77.md').write_text(handoff,encoding='utf8')
agents=R/'AGENTS.md';backup=O/'AGENTS-before.bin';assert not backup.exists();old=agents.read_bytes();backup.write_bytes(old)
header='**2026-11-07 当前本地1.0.77/code98候选1：先读[77交接](HANDOFF-CURRENT-SESSION-2026-11-07-v1.0.77.md)、[实现](docs/fixes-2026-11-07-v1.0.77.md)、[安装](docs/INSTALL-v1.0.77.md)和[验证](docs/validation-2026-11-07-v1.0.77.json)，按release177/after.json及verify177.py只读接收。仅汽水：歌曲POST搜索、官方社交数值/分组列表/用户和歌手关注读回、官方累计/本周时长读取、实际收听计量和MCS身份上报兼容候选、封面授权/助手契约已实现。Beta2876/1跳过、Stable50/12跳过、导航57、分析0；12图/16合成助手契约已验，完整文件替换复跑不累加。原签名双ARM/固定引擎/7shader/12非app库/JNI/DSP/R8另验。未手机ADB/真实账号/官方业务请求或NAS部署，77未安装；搜索/社交/封面互通及MCS账号归因/官版累计实际增长仍未验，不把本机或HTTP200冒充入账。原助手会话0.2.2自报80本地测试通过/Gitee de172f6，主项目未推送，NAS仍需另行更新。旧92冻结物/74退休路径/Drift7被动兼容/签名锁/历史脏树/beta/b6bcd542/空暂存保持，77另存不回填76；66/71用户已验与手机号停止保持，旧VIP/301/400/奖励/下载/DSP/稳定120和旧74根因缺口不外推。旧51不恢复、63ZIP不补、旧日志不重放，独立助手不接管。主项目未提交推送上传发布备份。下方均历史时点。**\n\n'
agents.write_bytes(header.encode('utf8')+old)
print(json.dumps({'docsWritten':True,'oldAgentsBytesPreserved':True,'buildInputs':len(build['files']),'apkSha256':apk['sha256']},indent=2))
