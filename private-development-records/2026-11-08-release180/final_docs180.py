"""Create new80 documents only after real host/APK checks have completed."""
from pathlib import Path
import json
import hashlib
ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
host = json.loads((OUT/'host-summary.json').read_text('utf8'))
apk = json.loads((ROOT/'release/Mesting-Music-v1.0.80-verification.json').read_text('utf8'))
native = json.loads((OUT/'native-packaging-verification.json').read_text('utf8'))
build = json.loads((OUT/'candidate1/build-input.json').read_text('utf8'))
assert all(host[s]['failed']==0 for s in ['beta', 'stable', 'navigation'])
assert host['analysis']['issues']==0 and apk['originalSignature']
assert 'version: 1.0.80+101' in (ROOT/'pubspec.yaml').read_text('utf8')

def create(relative, text):
    with (ROOT/relative).open('x', encoding='utf8') as stream:
        stream.write(text.rstrip()+'\n')

counts = '；'.join(f"{s} {host[s]['files']}文件/{host[s]['passed']}通过/{host[s]['skipped']}跳过" for s in ['beta','stable','navigation'])+'；分析0问题'
validation = {
    'version':'1.0.80', 'androidVersionCode':101, 'date':'2026-11-08',
    'scope':'NetEase free-listen official nm/ne route support and closed typed stage diagnostics',
    'hostValidation':host, 'actualApk':apk, 'actualNativePackaging':native,
    'buildInputs':{'count':len(build['files']), 'manifest':'docs/build-inputs-v1.0.80.json',
      'unchangedDuringCompilationSigningAndArchive':True},
    'officialReferenceVersion':'9.6.15',
    'officialNmNeRoutesSupported':True, 'legacyEntryRoutePreserved':True,
    'entryContextAndDiagnosticValuesSeparated':True, 'rewardDiagnosticsRemainSchema2':True,
    'rawEntryUrlQueryAccountCookieAndAdProofExported':False,
    'neteaseCommonClientIdentityChanged':False,
    'serverQualificationFlagForced':False, 'advertisementEvidenceFabricated':False,
    'previouslyReportedOfficialBalanceAndProgressSyncAcceptedByUser':True,
    'realActionUrlForReportedFailureCaptured':False,
    'qualificationAndGainAcceptedByCurrentRealAccount':False,
    'newRealFreeListeningRewardCredited':False,
    'qishuiBusinessChanged':False, 'qishuiDiagnosticAppVersionLabelUpdatedOnly':True,
    'helperStatusAsReceived':{'version':'0.2.3','pushedCommit':'5d013276e51d0c07c6c9fa1a96b3b74bf8321baa','nas023DeploymentVerified':False},
    'deviceAccess':False, 'physicalAcceptancePerformed':False, 'realAccountAccess':False,
    'nasAccessOrDeployment':False, 'agentInitiatedOfficialBusinessRequests':False,
    'oldUnknownRecordsReplayed':False, 'historical98FrozenDeliveriesPreserved':True,
    'old74RetiredPathsPreserved':True, 'continuous120FpsOrGpuDspAccepted':False,
    'gitCommitted':False, 'gitPushed':False, 'uploaded':False, 'published':False,
}
create('docs/validation-2026-11-08-v1.0.80.json', json.dumps(validation,ensure_ascii=False,indent=2))
create('docs/build-inputs-v1.0.80.json', json.dumps(build,ensure_ascii=False,indent=2))
create('docs/fixes-2026-11-08-v1.0.80.md', f'''# 1.0.80 / code101：网易云免费听入口与领取诊断

用户确认官版安卓版9.6.15“领福利”能领取，录屏显示广告、点击并停留、返回发奖；官版领取后Mesting余额和进度能同步。当前报错在入口解析，未提交奖励。用户确认本地修复、回归并交付新原签名APK/源码，不含手机、账号、NAS或发布授权。

## 已证差异与修正

官版lg.M→wp.a在nm/ne命名空间中取两个path segment组成motivationAd/show。旧解析只接收orpheus://motivationAd/show，旧夹具也主要使用该结构，遗漏了官版正常命名空间。80兼容orpheus://nm/motivationAd/show及orpheus://ne/motivationAd/show，原结构仅作显式兼容分支。只解释同账号进度返回的已知字段，不打开任何地址，不放宽重复键、类型、有界长度或未知路由限制。

原始静态证据和离线研究位于私有netease-free-listen-research目录。尚未采集用户那次实际actionUrl，不能宣称这是全部失败的唯一原因。

## 分层与诊断

独立纯Dart MusicRewardDiagnostic仅接受枚举和存在性布尔值，入口解析返回私有业务上下文与安全诊断两个对象。通用连接诊断仅接收该固定投影；业务请求层负责阶段、结果和用户提示，不把URL解析耦合到HTTP或Flutter。

导出保留schema2、80条本次启动内存缓冲和≤4096字符闭合精简JSON。新增rewardStep/rewardReason/entryRoute/entryValueType/字段存在性/qualificationRequested及rewardIdentity。区分入口缺失/错类型/超长/路由不支持/重复字段/缺字段/整数异常/扩展异常/编码异常、未提供资格分支、无资格、业务拒绝、回执不完整和gain拒绝。HTTP与业务状态仍分开。

rewardIdentity只分类请求发出时有效os cookie，不输出实际值或声称完整安卓身份。通用PC默认、安卓样式UA和会话jar行为均未调整。不新增广告展示/点击/完成、设备或安装证明，不强制isNeedGetRights或qualified。真实广告条件、资格、gain及独立余额读回需要分别验收。

## 验证和交付边界

{counts}。定向148项结果不与完整运行或历史版本相加。首轮分析有一处新测试空值语法info，修正后整文件替换复跑及最终分析通过，原日志保留。无新布局或截图；新入口、阶段、隐私和有界导出有受控请求回归，原停止/跨账号/跨日/未知不重发回归保留。主机用虚构账号/广告上下文，不作真实领取或到账证明。

实际APK原证书v2/v3、双ARM、固定引擎、7shader、12非app原生库、实际DEX/JNI/DTO/DSP/R8另验；{len(build['files'])}项输入固定。APK SHA256：{apk['sha256']}。

汽水仅诊断导出版本标签更新为80/code101，不改业务；助手0.2.3已推送5d01327是接续状态，NAS0.2.3升级仍未确认。酷狗、玻璃壳/底栏、账号、旧账本、74退休路径/Drift7和历史脏树保持。79及此前98份交付不覆盖、不回填；未手机/ADB/真实账号/NAS/业务写入或提交推送上传发布备份。
''')
create('docs/INSTALL-v1.0.80.md', '''# 1.0.80 / code101 安装与验收

原签名双ARM APK：release/Mesting-Music-v1.0.80.apk。完整源码：Mesting-Music-v1.0.80-source.zip。此轮只本地交付，没有连接手机、ADB或执行覆盖安装。

1. 由本人按原签名覆盖安装，保留账号和本机记录；勿卸载清数据。确认设置中为1.0.80/code101，检查现有三平台资料。
2. 网易云“签到与会员”先刷新，核对官版领取过的余额、进度仍正常同步。
3. 点击一次免费听领取；若确认成功，先停止连续领取并到官版独立核对余额和进度。入口兼容通过、HTTP200和页面提示不能单独证明新增时长入账。
4. 若仍失败，保持Mesting不退出，进入“设置→连接与播放诊断”，优先“复制精简记录”。新记录会区分entry、qualification、claim和闭合原因，包含nm/ne/兼容入口分类，不含真实链接、Cookie或广告参数。精简记录≤4096字符；粘贴时确认末尾JSON完整，必要时再复制完整记录。
5. 若提示“未提供直接领取资格流程”或平台要求真实广告，不反复点击、不补造凭据；保留本次诊断。此版本没有接入或伪造广告完成链，也不保证免广告直领。

未知写入仍不自动重复提交。既有66/71用户验收有效；本版实际升级恢复、本人资格/gain和新到账尚未验，不把主机回归当实机/GPU/DSP或长期稳定验收。NAS与独立助手无需因本次网易云修正改动。
''')
create('docs/netease-free-listen-v1.0.80.md', '''# 网易云免费听阶段诊断：1.0.80

入口仍是“设置→连接与播放诊断”，无新增页面或主动业务探测。保持App不退出，复现一次后复制精简记录；最近80条只在内存保存，不自动上传。精简JSON始终完整且≤4096字符，不截断字符串。

## 字段

- rewardStep：entry / progress / qualification / claim / balance / signState / signIn。
- rewardReason：accepted；entryMissing / entryWrongType / entryTooLong / entryMalformedUri / entryUnsupportedRoute / entryDuplicateField / entryMissingField / entryInvalidPosition / entryInvalidExt / entryInvalidEncoding；qualificationNotRequested / qualificationDenied / sourceUnavailable；businessRejected / receiptIncomplete / gainDenied / httpFailure / transportFailure。
- entryRoute：officialNm / officialNe / legacyHost / unsupported。仅分类，不保留真实scheme、host、path或链接值。
- entryValueType：missing / text / number / boolean / list / object / other。缺入口与空文本可由分类共同判断。
- entryHasAdPosition / entryHasResourceId / entryHasSource / entryHasExt：能够解析后才记录的存在性位，不表示参数有效或有领奖资格。
- qualificationRequested：入口明确提供的布尔分支；false不会被强制为true。
- rewardIdentity：defaultPc / sessionPc / sessionAndroid / sessionOsx / sessionOther。仅代表发请求时的os cookie分类，非完整官版身份；通用请求UA/版本没有改变。

HTTP状态通过网络异常中的数值保留，业务code在responseValidate事件保留。网络层和业务层可能各记一条，条数不是请求次数。entry本地成功只证明解析，qualification成功只证明资格返回，claim正回执与官方余额实际新增仍分开。

所有新诊断类型只接受枚举/布尔值，不接受任意字符串、响应对象或Map。无原始actionUrl/query值、账号ID、Cookie、令牌、广告reqUid、曝光/点击/停留或完成凭据。已确认的余额/任务读取保持，旧未知写入不重放。
''')
create('HANDOFF-CURRENT-SESSION-2026-11-08-v1.0.80.md', f'''# 1.0.80 / code101 当前本地交付

先读同版fixes、INSTALL、netease-free-listen、validation和build-inputs；按 `.codex-artifacts/2026-11-08-release180/after.json` 与 `python -B .codex-artifacts/2026-11-08-release180/verify180.py check` 只读接收。不要运行旧179接收器校验本版当前树，不回填旧收据。

用户确认官版安卓版9.6.15，提供点击广告/停留/返回发奖录屏；官版领取后Mesting余额和任务可同步。当前入口识别错误已找到可复现静态差异：lg.M→wp.a支持nm/ne命名空间，旧解析器不支持。用户确认本地修正、诊断、验证及新原签名APK/源码ZIP交付，不扩手机/账号/NAS或发布授权。

本版兼容nm/ne正确路由，保留旧格式显式兼容及原资格/停止/跨账号/跨日/未知不重发保护；纯枚举诊断与私有上下文解耦，可从原连接诊断导出闭合精简JSON。通用PC默认/安卓UA不改，现有余额读取保持，不生成广告完成凭据。用户那次真实actionUrl未采集，本地兼容不能证明本人后续资格/gain/到账。

{counts}，不加定向148项或历史运行；无新布局/截图。原签名双ARM/固定引擎/7shader/12非app库及实际DEX/JNI/DTO/DSP/R8已另验；{len(build['files'])}输入固定。APK SHA256 {apk['sha256']}；源码ZIP在同版source-verification记录精确文件数和CRC/逐项散列。

保护98份旧冻结交付、74退休路径/Drift7被动兼容、原签名锁、历史脏树/beta/b6bcd542与空暂存；80另存不回填79。汽水仅诊断版本标签同步，无业务更改；助手0.2.3已推送5d01327、NAS0.2.3升级未确认的接续状态保持，未复测部署。66/71用户已验与手机号停止保持，旧51不恢复、63ZIP不补、旧日志不重放。未手机/ADB/真实账号/NAS/官方业务或提交推送上传发布备份。包装/归档/冻结全部结束后无挂起任务。
''')

# Prepend bytes only; never rewrite any historical AGENTS entry or receipt.
agents = ROOT/'AGENTS.md'
prior = (OUT/'AGENTS-before.bin').read_bytes()
assert agents.read_bytes()==prior
prefix = f'''**2026-11-08 当前本地1.0.80/code101：先读[80交接](HANDOFF-CURRENT-SESSION-2026-11-08-v1.0.80.md)、[实现](docs/fixes-2026-11-08-v1.0.80.md)、[安装](docs/INSTALL-v1.0.80.md)、[免费听诊断](docs/netease-free-listen-v1.0.80.md)和[验证](docs/validation-2026-11-08-v1.0.80.json)，按release180/after.json和verify180.py check只读接收。用户确认官版安卓版9.6.15、领福利广告/停留/返回发奖，官版领取后Mesting余额/任务可同步。80修正已证nm/ne路由兼容、增加闭合安全诊断；通用PC身份/安卓UA保持，真实该次actionUrl未采集，资格/gain/实际到账仍未验，不以主机/HTTP200代验，不造广告凭据。{counts}，不加定向148或旧成绩；原签名双ARM/固定引擎/7shader/12非app库/JNI/DSP/R8另验，{len(build['files'])}输入固定。98旧冻结物/74退休路径/Drift7/原签名锁/历史脏树/beta/b6bcd542/空暂存保持，80另存；旧179入口哈希差异不改收据。汽水仅诊断版本标签同步，业务/助手不改；助手0.2.3已推送5d01327、NAS升级未确认保持。未手机ADB/账号/NAS/实际业务/提交推送上传发布备份；66/71既有用户验收、手机号停止、旧51不恢复/63ZIP不补/旧日志不重放保持。无挂起任务。下方均历史时点。**\r\n\r\n'''
agents.write_bytes(prefix.encode('utf8')+prior)
print(json.dumps({'newDocuments':6,'version':'1.0.80','inputCount':len(build['files']),'apkSha256':apk['sha256']},indent=2))
