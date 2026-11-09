"""Create only the new82 documents after actual package and host checks pass."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
host = json.loads((OUT/'host-summary.json').read_text('utf8'))
apk = json.loads((ROOT/'release/Mesting-Music-v1.0.82-verification.json').read_text('utf8'))
native = json.loads((OUT/'native-packaging-verification.json').read_text('utf8'))
build = json.loads((OUT/'candidate1/build-input.json').read_text('utf8'))
counts = '；'.join(f"{k} {host[k]['files']}文件/{host[k]['passed']}通过/{host[k]['skipped']}跳过" for k in ['beta','stable','navigation'])+'；分析0问题'
assert all(host[k]['failed']==0 for k in ['beta','stable','navigation'])
assert host['analysis']['issues']==0 and apk['originalSignature']
assert apk['actualDexByteIdenticalTo81']


def create(relative, text):
    with (ROOT/relative).open('x', encoding='utf8') as stream:
        stream.write(text.rstrip()+'\n')


validation = {
    'version':'1.0.82','androidVersionCode':103,
    'authorization':"[REDACTED]",
    'host':host,'actualPackage':apk,'nativePackaging':native,
    'productInputCount':len(build['files']),
    'sameTaskAdextjsonIncluded':True,'contextMergeOrder':'source/backupUrl, then native-route ext overrides',
    'contextLimits':{'utf8Bytes':65536,'nodes':256,'depth':8,'oversize':'Stop whole ad read; never truncate'},
    'requestAndReceiptMetadataClosedAndRedacted':True,
    'noRetryObservationalOnly':True,'singleAliasStructuralObservationOnly':True,
    'commonIdentityUserAgentAndEapiChanged':False,'deviceSdkContextSynthesized':False,
    'adRenderingTrackingQualificationOrGainAdded':False,
    'version81UserActuallyReadEmptyAds':True,'userSameAccountOfficial9615LoadsAds':True,
    'adextjsonOmissionProvenSoleCause':False,'version82RealAdConfigurationVerified':False,
    'standaloneH5OrOfficialCompletionOrNewRewardVerified':False,
    'priorOfficialClaimThenMestingBalanceSyncAcceptedByUser':True,
    'qishuiBusinessChanged':False,'qishuiDiagnosticVersionLabelUpdatedOnly':True,
    'helperVersionAsReceived':'0.2.3','helperPushedCommit':'5d01327','nas023DeploymentVerified':False,
    'deviceAccess':False,'physicalAcceptancePerformed':False,'realAccountAccess':False,
    'nasAccessOrDeployment':False,'agentInitiatedBusinessRequests':False,
    'historical102FrozenArtifactsPreserved':True,'retired74PathsPreserved':True,
    'gitCommitted':False,'gitPushed':False,'uploaded':False,'published':False,
}
create('docs/validation-2026-11-09-v1.0.82.json',json.dumps(validation,ensure_ascii=False,indent=2))
create('docs/build-inputs-v1.0.82.json',json.dumps(build,ensure_ascii=False,indent=2))
create('docs/fixes-2026-11-09-v1.0.82.md',f'''# 1.0.82/code103：补齐只读广告任务上下文

用户确认“开始1.0.82”，按80—81总交接第6节实施。81已由用户实际运行，HTTP/业务200但ads为空；同账号官版安卓版9.6.15仍可加载广告。82只改变已证的任务上下文差异，不把它当作已证明的唯一根因。

## 实现

新增纯NeteaseAdProbeContext，与请求repository及安全report分开。由同次FREE_LISTEN入口的native Bundle参数构造source/backupUrl，然后按官版Fragment.y及ViewModel.j3顺序合并ext（ext覆盖前两者）；不复用qualificationJson。沿用原路由对bizReportInfo字符串化及空map值省略规则，保留数组null。无source/backupUrl时沿用官版0/空串默认值，诊断明确标识其未在入口提供。

原始ext最多256节点/8层，序列化ext及最终adextjson均不超过65536 UTF-8字节。超限整次停止，输出invalidContext，不截断或改造真实字段。真实入口中已提供的rightsCommonExt可原样携带；不创建entranceComponent、入口URL、设备ID或SDK能力。backupUrl只是同次固定ad/get请求中的数据，不打开或转发至其host。

仍使用现有eapi、通用默认PC参数及原UA；只补任务分量，不声称完整对齐官版设备/SDK通用广告上下文。读取每步一次，不自动重试、切换身份或尝试新加密。不展示广告，不请求素材、曝光/点击/停留/安装探测、资格或gain，不启动官版。

专用报告升schema2：requestContext仅闭合存在性；receiptHints独立记录noRetry/message/mainMsg/image存在性和类型，noRetry只输出0/1或等值数字字符串，不猜其他值。提示文本即使为对象也不展开，值、URL、动态键不导出。空/业务拒绝/缺code回执都保留提示。配置结构超出精简复制预算时，仍保留小型提示；完整文件≤64KiB、复制≤4096字符。单槽别名只观察结构，requestedSlotPresent仍false，outcome仍unsupportedLayout，不能当精确匹配、展示或成功。

手动触发、停止/前后台/账号/跨日隔离、互斥、临时抑制自动签到和固定文件分享保持。未改UI布局、共用原生分享合同、余额同步及旧未知账本。汽水仅共享报告版本标签更新，助手/NAS不改。

## 验证与边界

{counts}。每份完整套件只计一次，不加定向或旧版本成绩。别名裁剪标志复核后完整复跑三个广告诊断文件并替换其结果。首轮既有图片缓存UI测试未在400毫秒内观察到失效回退；未改相关产品或夹具，整文件独立复跑通过后替换对应结果，首轮失败日志保留。初轮两条null-aware语法风格提示已修正。新模拟用例解密实际eapi请求核对source/backupUrl/ext、覆盖顺序、默认值、UTF-8/节点/深度边界、noRetry和不重试、业务拒绝与缺code、消息不泄漏、精简保留提示及单槽别名。沿用81 UI互动测试回归，没有新布局或新截图；此前320宽/文字2倍共用底栏拥挤记录仍保持。

实际原签名v2/v3、双ARM、固定引擎、7shader、12非app库、JNI/DTO/DSP/R8验证；整组DEX与81字节一致，故81固定分享合同保留。{len(build['files'])}产品/构建输入固定。APK SHA256：{apk['sha256']}。

保护102旧冻结物、74退休路径/Drift7、原签名/锁/历史脏树、beta/b6bcd542及空暂存。82另存，旧包/ZIP/文档/收据不回填。未设备/ADB/真实账号/NAS/业务请求、提交推送上传发布备份。82能否返回非空广告尚待本人读取；独立H5、真实完成/新领取入账仍未实现或验收。官版领取后Mesting余额/任务同步既有用户验收保持。
''')
create('docs/INSTALL-v1.0.82.md','''# 1.0.82/code103 安装与只读验证

原签名双ARM包：release/Mesting-Music-v1.0.82.apk；完整源码：Mesting-Music-v1.0.82-source.zip。未代安装。

1. 覆盖安装，勿卸载清数据，确认1.0.82/code103。
2. 打开“签到与会员→网易云→广告配置诊断”，点击一次“读取广告配置”。原“领时长/广告领取”按钮不是本次验证入口。
3. 返回结果后点击“导出JSON文件”，反馈这份脱敏报告；也可复制精简诊断。无需提供Cookie、账号ID或原始任务URL。
4. 即使仍没有广告，也请导出：82增加任务字段存在性及noRetry/消息类型，可继续区分问题。不要连续重复读取或用页面返回当领取完成。

本版补任务上下文，不保证一定返回广告。仍不展示、不上报观看、不领取、不启动官版；读取本身不会增加时长。若返回非空，也只证明观察到配置，不代表独立H5、完成或新入账通过。原官版领取后余额/任务同步的既有验收保持；NAS无须因本次修改。
''')
create('docs/netease-ad-probe-v1.0.82.md','''# 网易云广告配置诊断：1.0.82/schema2

沿用81手动只读入口及固定导出文件netease_ad_diagnostics/mesting-netease-ad-report.json。版本1.0.82/code103；schema从1升2，entry/identity/transport和旧outcome语义保持。

新增invalidContext：同次任务上下文超出256节点、8层或65536 UTF-8字节支持范围，未发广告读取；URL/格式错误仍由原入口解析器给invalidEntry。

requestContext仅含typeIdsPresent/adextjsonPresent/taskContextOnly、sourceFromEntry/backupUrlFromEntry/extFromEntry/rightsCommonExtFromEntry以及deviceSdkContextAdded/officialClientContextMatched。存在性说明本次尝试的请求形状，不记录实际值、URL或自由键。ext可按官版顺序覆盖基础source/backupUrl。原路由默认bizReportInfo字符串保持；extFromEntry=false不表示native归一化后的ext为空。taskContextOnly=true、后两者false明确完整官版设备/SDK广告上下文尚未对齐。

configuration.receiptHints在code200/业务拒绝/缺code时可观察noRetry/message/mainMsg/image存在性和类型。null用type=missing且present=true，与缺键present=false区分。noRetry只保留0/1（兼容'0'/'1'），其余仅类型；无论值为何均不自动重试。消息/图像原文不导出，不从消息对象展开已知规则字段。HTTP传输失败没有可用JSON时不猜提示。

configuration.singleSlotAliasObserved表示精确位缺失但只返回一个别名；singleSlotAliasShape仅结构，不输出别名。requestedSlotPresent仍false，outcome仍unsupportedLayout；多未知位置不选取。别名不等于本次81空ads的原因或观看成功。

旧结构预算120节点/深度5保持；单槽别名使用独立同样预算，总导出仍≤64KiB。精简复制≤4096字符、始终闭合，必要时configurationOmitted=true并把小型receiptHints移到根级。账号变化/离开前台/跨日保护和显式导出不自动上传保持。

本版不伪造设备SDK、曝光/点击/停留，不展示或领取。81实际空广告报告是已取得的事实；82真实返回、独立H5、完成及新领取需另验。
''')
create('HANDOFF-CURRENT-SESSION-2026-11-09-v1.0.82.md',f'''# 当前交接：1.0.82/code103

用户已明确确认“开始1.0.82”，完成80—81总交接第6节的只读补上下文候选。先读docs/fixes-2026-11-09-v1.0.82.md、docs/INSTALL-v1.0.82.md、docs/netease-ad-probe-v1.0.82.md与docs/validation-2026-11-09-v1.0.82.json。按.codex-artifacts/2026-11-09-release182/after.json及verify182.py check只读接收。

同次任务source/backupUrl、有界ext构造adextjson；闭合requestContext、noRetry和消息类型、单槽别名结构观察已实现。身份/UA/eapi保持，设备SDK未对齐，不造rightsCommonExt。手动一次读取、取消/账号/跨日、固定脱敏导出保持，不展示/追踪/资格/gain/启动官版。

{counts}；新测试模拟请求，不加定向或历史成绩；原签名双ARM、固定引擎/7shader/12非app库/JNI/DTO/DSP/R8及实际完整DEX与81一致另验。{len(build['files'])}输入固定。82包及源码另存，102旧冻结物/74退休路径/签名锁/脏树/beta/b6bcd542/空暂存保护。冻结后无挂起编码、测试、构建、签名、安装、导出或调查任务。

81用户已实际导出HTTP/业务200、defaultPc/existingEapi、ads空对象，同账号官版9.6.15仍可加载。82补齐缺项是否解决空集合未知，不是唯一根因结论；82真实非空广告、独立H5/真实展示完成及新领取入账未验。官版领取后Mesting余额/任务同步既有用户验收保持。

本轮未设备/ADB/真实账号/NAS/官方业务/主项目提交推送上传发布备份。汽水仅共享诊断版本标签；助手0.2.3已推送5d01327，NAS升级未确认，不接管助手。66/71既有验收、手机号停止、旧51不恢复/63ZIP不补/旧日志不重放保持。下次先接收报告，后续新功能/bug仍按AGENTS一次一问并确认实施。
''')
prefix = f'''**2026-11-09 当前本地1.0.82/code103：用户确认“开始1.0.82”后已完成[82交接](HANDOFF-CURRENT-SESSION-2026-11-09-v1.0.82.md)、[实现](docs/fixes-2026-11-09-v1.0.82.md)、[安装](docs/INSTALL-v1.0.82.md)、[诊断](docs/netease-ad-probe-v1.0.82.md)和[验证](docs/validation-2026-11-09-v1.0.82.json)，按release182/after.json及verify182.py check只读接收。同次任务source/backupUrl/有界ext的adextjson、闭合字段存在性/noRetry与消息类型、单槽别名结构观察已完成；通用身份/UA/eapi保持，未对齐设备SDK，不展示/追踪/资格/gain或启动官版。81用户实测200空ads、同账号官版9.6.15可加载保持；82真实非空配置/独立H5/完成/新领取入账未验，不称唯一根因修复；官版领取后Mesting同步既有验收保持。{counts}为本轮最终结果不累加；原签名双ARM/固定引擎/7shader/12非app库/JNI/DTO/DSP/R8及完整DEX与81字节一致另验，{len(build['files'])}输入固定。102旧冻结物/74退休路径/Drift7/签名锁/脏树/beta/b6bcd542/空暂存保护，82另存不回填旧收据。汽水仅共享报告版本标签，助手0.2.3已推送5d01327/NAS升级未确认；未手机ADB/账号/NAS/官方业务/提交推送上传发布备份。66/71已验及手机号停止、旧51不恢复/63ZIP不补/旧日志不重放保持。冻结后无挂起任务。下方均历史时点。**\r\n\r\n'''
agents = ROOT/'AGENTS.md'
assert agents.read_bytes()==(OUT/'AGENTS-before.bin').read_bytes()
agents.write_bytes(prefix.encode('utf8')+agents.read_bytes())
print(json.dumps({'new82DocumentationCreated':True,'productInputs':len(build['files'])}))
