"""Write only new81 documents after real host/package checks complete."""
from pathlib import Path
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
host = json.loads((OUT/'host-summary.json').read_text('utf8'))
apk = json.loads((ROOT/'release/Mesting-Music-v1.0.81-verification.json').read_text('utf8'))
native = json.loads((OUT/'native-packaging-verification.json').read_text('utf8'))
build = json.loads((OUT/'candidate1/build-input.json').read_text('utf8'))
assert all(host[s]['failed'] == 0 for s in ['beta', 'stable', 'navigation'])
assert host['analysis']['issues'] == 0 and apk['originalSignature']
assert 'version: 1.0.81+102' in (ROOT/'pubspec.yaml').read_text('utf8')


def create(relative, text):
    with (ROOT/relative).open('x', encoding='utf8') as stream:
        stream.write(text.rstrip()+'\n')


counts = '；'.join(f"{s} {host[s]['files']}文件/{host[s]['passed']}通过/{host[s]['skipped']}跳过"
                  for s in ['beta', 'stable', 'navigation'])+'；分析0问题'
validation = {
    'version': '1.0.81', 'androidVersionCode': 102, 'date': '2026-11-09',
    'scope': 'User-triggered read-only NetEase advertising configuration probe and redacted export',
    'hostValidation': host, 'actualApk': apk, 'actualNativePackaging': native,
    'packagingVerificationNotes': ['Initial inherited combined-path assertion was obsolete after fixed Report enum extraction; complete actual DEX initializer checked and checker corrected', 'Private verifier indentation corrected; no product changes or rebuild; all original logs retained'],
    'buildInputs': {'count': len(build['files']), 'manifest': 'docs/build-inputs-v1.0.81.json',
                    'unchangedDuringCompilationSigningAndArchive': True},
    'officialReferenceVersion': '9.6.15',
    'issuedAdPositionResourceJoinStaticallyConfirmed': True,
    'probeRequestsOnlyCurrentTaskAndAdConfiguration': True,
    'probeRunsOnlyAfterExplicitButton': True,
    'probeUsesExistingEapiWithoutNewClientIdentity': True,
    'qualificationGainTrackingMediaOrServerIssuedUrlRequestedByProbe': False,
    'rawAccountAdContextUrlsOrRequestIdentifiersExported': False,
    'probeHasCancelAccountDayAndForegroundGuards': True,
    'hostUiNote': 'At320px text scale2 the inherited shared bottom-navigation labels remain crowded; no shared-shell redesign in this scoped change',
    'reportHasClosedKeyDepthAndSizeBounds': True,
    'sharedNativeExportUsesFixedBoundedNeteaseReportPath': True,
    'realAccountAdConfigurationRetrieved': False,
    'standaloneOfficialH5OrIndependentRenderingVerified': False,
    'officialAdCompletionOrNewRewardCreditingVerified': False,
    'previousOfficialClaimThenMestingBalanceSyncAcceptedByUser': True,
    'qishuiBusinessChanged': False, 'qishuiDiagnosticAppVersionLabelUpdatedOnly': True,
    'helperStatusAsReceived': {'version': '0.2.3', 'pushedCommit': '5d01327',
                              'nas023DeploymentVerified': False},
    'deviceAccess': False, 'physicalAcceptancePerformed': False, 'realAccountAccess': False,
    'nasAccessOrDeployment': False, 'agentInitiatedOfficialBusinessRequests': False,
    'oldUnknownRecordsReplayed': False, 'historical100FrozenArtifactsPreserved': True,
    'retired74PathsPreserved': True, 'continuous120FpsOrGpuDspAccepted': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
create('docs/validation-2026-11-09-v1.0.81.json', json.dumps(validation, ensure_ascii=False, indent=2))
create('docs/build-inputs-v1.0.81.json', json.dumps(build, ensure_ascii=False, indent=2))
create('docs/fixes-2026-11-09-v1.0.81.md', f'''# 1.0.81/code102：网易云广告配置只读验证

用户接受Mesting内网页、无需启动官版，明确确认先交付只读广告配置验证版。本阶段目标是取得真实配置的安全结构，以判断后续承载条件；没有承诺已完成真实广告展示、官方完成回调或领取。用户官版9.6.15领取后Mesting余额和任务可同步的既有验收保持。

## 改动和边界

在签到与会员的网易云页免费听卡片下新增“广告配置诊断”。打开页面只恢复已保存登录，点击读取后才读取同账号FREE_LISTEN进度与对应广告位，最多顺序各一次。官版9.6.15 utils.k.j0(int,String)拼接adPosition_resourceId规则已静态核对并私有保存；不硬编码广告位、不采用其他位代替、不打开actionUrl或返回的素材/追踪链接。

独立NeteaseAdProbeRepository只接两条只读路径，使用既有eapi和默认身份；没有调用资格、gain、媒体或广告事件。业务/HTTP/解码错误均停止，无身份切换、传输探测、广告凭据生成或自动重试。现有eapi对当前账号该广告接口是否被接受仍未知；代码不会用新加密或伪造SDK能力尝试兜底。

报告与原响应解耦，只保留闭合字段名、类型、链接协议类别、存在性及受限的规则数值；动态广告位名、URL/host/query、账号/设备/请求ID、原始广告上下文和错误正文不进入报告。120节点/深度5/字符串JSON长度65536边界，列表只看首项、计数上限100；规则时长不推定单位或资格。精简JSON完整且≤4096字符，超限省略结构并标记，完整文件≤65536字节。

页面报告只在当前生命周期内保留；显式导出才写固定脱敏JSON文件。复制含读回核对，Android分享只允许固定目录和文件、限制大小与私有目录包含关系。共用分享器按固定Report合同解耦，原流畅度/汽水文件名和限制保持。

支持停止/离开前台取消，账号代次或日期改变后不继续下一请求、不展示迟到报告；重复点击不启动第二条请求链。打开诊断页期间临时抑制自动签到，返回后恢复此前设置，不改变保存开关。页面保留共用玻璃导航和底栏；未更改播放器、余额读取及旧未知写入账本。

## 本地验证

{counts}。完整最终套件只计一次，不加定向/历史成绩。初轮两条lint info及界面夹具的semantics清理、无关provider计时器、离屏定位、生命周期跳转失败保留日志；修正夹具后新模块定向30项通过，随后补入未登录/不完整回执及响应Cookie更新身份4项；最终按受影响完整文件替换运行结果，未重复累加。四张主机图已看：390正常及320文字2倍、浅深色；它们是软件渲染及模拟响应，不代表手机/GPU或广告展示验收。320宽/文字2倍时沿用的共用底栏标签仍拥挤，已记录，未扩大修改共用底栏。

原签名v2/v3、双ARM、固定引擎、7shader、12非app库、实际DEX/JNI/DTO/DSP/R8另验；{len(build['files'])}项输入固定。APK SHA256：{apk['sha256']}。打包首轮旧整段路径字符串检查不适用于新的固定Report枚举；已检查该实际APK的完整DEX初始化方法，修正私有检查器后重跑通过，原失败和脚本缩进修正日志保留，无产品重建。未连接手机、访问真实账号、请求真实广告或操作NAS；本地HTTP模拟成功不能冒充官方配置、展示或入账验收。

保护100旧冻结物、74退休路径/Drift7、签名/锁/历史脏树、beta/b6bcd542与空暂存。80包/ZIP/收据不回填，81另存。汽水仅共享导出版本标签更新；独立助手0.2.3已推送5d01327、NAS0.2.3升级未确认的接续状态不变。66/71既有用户验收、手机号停止、旧51不恢复、63ZIP不补和旧日志不重放保持。未提交推送上传发布备份。
''')
create('docs/INSTALL-v1.0.81.md', '''# 1.0.81/code102 安装和手动只读验证

原签名双ARM包：release/Mesting-Music-v1.0.81.apk；源码：Mesting-Music-v1.0.81-source.zip。本轮未连接手机或代安装，保留数据升级需要本人核对。

1. 按原签名覆盖安装，勿卸载清数据；确认版本1.0.81/code102。
2. 打开“签到与会员→网易云”，在免费听卡片下点击“广告配置诊断”。这是新增的验证入口；原“领时长/广告领取”按钮仍是此前业务，不是此次诊断入口。
3. 点击一次“读取广告配置”。本阶段不展示广告、不打开官版、不发送曝光/点击/停留或领取请求。可手动停止，离开前台会取消尚未完成的读取。
4. 无论返回配置、没有广告、格式不支持、HTTP或业务拒绝，都优先“导出JSON文件”保存或发送。也可复制精简诊断，确认剪贴板提示；若结构较大，精简版会省略配置，完整文件保留有界结构。
5. 将这份脱敏诊断反馈用于继续判断承载条件。无需提供Cookie、账号ID、原始URL或广告上下文，不要反复点击原领奖按钮尝试完成广告。
6. 返回后可刷新余额及任务，确认原同步保持；读取配置本身不应被当作增加免费听时长。

真实账号配置和现有eapi兼容性尚待本人这一步验证。即使配置成功返回，也不等于已具备独立H5、真实广告完成回执或领取能力。本轮未取得/执行这些验收；NAS和独立助手不需要因本次网易云验证改动。
''')
create('docs/netease-ad-probe-v1.0.81.md', '''# 网易云广告配置诊断：1.0.81

入口：“签到与会员→网易云→广告配置诊断”。仅在本人点击后读取一次新任务入口和对应广告配置，自动进入页面不会请求广告。报告与原“连接与播放诊断”schema2分开，本页专用schema1。

报告固定feature=neteaseAdConfiguration；stage为entry/adData，transport=existingEapi。identity沿用defaultPc/sessionPc/sessionAndroid/sessionOsx/sessionOther分类，不能当作完整官版身份。readOnly=true、adDisplayed/trackingSubmitted/rewardSubmitted=false描述本验证器的能力，不代表其他独立操作从未发生。

outcome区分configurationObserved/noAds/unsupportedLayout/invalidEntry/noSession/businessRejected/requestFailed/receiptIncomplete/cancelled/accountChanged/dayChanged。configurationObserved只证明同次位置返回了非空对象，不表示素材可播或服务端已认可广告完成。networkOutcome来自固定错误分类，httpStatus与businessCode分别有界；平台错误正文不导出。

entry仅含80已有纯枚举/存在性字段。qualificationRequested=false依然可能是省略或明确false，本次不因它而把广告当作免广告资格。configuration只投影同次请求的精确广告位，其他位置不替代；slotCount/fieldCount/list count上限100，未知字段名称和值不导出。

selectedAd和responseShape内的字段只输出类型；链接只分https/http/officialNative/relative/otherScheme/缺失/异常，不保留地址。extJson/generalRightsInfo等有限字符串JSON可递归解析固定字段，req_id/contextInfo等仅结构、source仅类型；规则数值受字段范围限制，时长单位和资格不推定。最多120节点、5层，过长或受限会标记。

精简复制≤4096字符、始终闭合，过大时configurationOmitted=true；完整文件≤64KiB。报告平时在当前页内存中，退出不恢复；显式导出才生成私有netease_ad_diagnostics/mesting-netease-ad-report.json，系统选择分享或保存，不自动上传。复制失败可使用文件导出，账号变化会阻止旧报告导出。

本轮主机只使用虚构账号、广告及响应。真实响应是否接受现有eapi/默认身份需要本人安装后核对；未实现新的xeapi或SDK承载，不向第三方服务转交凭据，不切换身份重试，不展示/跟踪/领取。后续真实广告展示与服务端入账必须另验。
''')
create('HANDOFF-CURRENT-SESSION-2026-11-09-v1.0.81.md', f'''# 1.0.81/code102 当前本地交付

先读同版fixes、INSTALL、netease-ad-probe、validation和build-inputs；按`.codex-artifacts/2026-11-09-release181/after.json`及`python -B .codex-artifacts/2026-11-09-release181/verify181.py check`只读接收。旧180当前树校验会因已授权81变化失败，不改旧收据。

用户接受Mesting内网页、不启动官版，明确确认先做只读配置验证并要求继续。81独立手动任务入口→ad/get读取、安全结构报告、复制核对及固定JSON导出已实现；官版9.6.15拼接位置规则已静态核对。通用身份/传输保持，无资格/gain/追踪/媒体请求或启动官版；不声称已接入真实广告与完成回调。打开页面不自动读广告，取消/账号/日期/前台与自动签到抑制已有本地覆盖。

{counts}，不加定向/旧版本；首轮lint和UI夹具失败原日志保留。四张浅深/大字主机图已看，无真实广告。原签名双ARM/固定引擎/7shader/12非app库及实际DEX/JNI/DTO/DSP/R8另验；{len(build['files'])}输入固定。APK SHA256 {apk['sha256']}；源码CRC及逐项字节等同另记。

尚待：本人安装后取得真实广告配置、现有eapi兼容性、独立H5或原生宿主可行性、真实完成/领奖/新入账。用户此前官版领取后Mesting余额任务同步已验，不能再次否认。80诊断的qualificationNotRequested是本地停止，不等于官版资格拒绝。

100旧冻结物、74退休路径/Drift7、原签名锁/历史脏树/beta/b6bcd542/空暂存保持，81另存不回填80。汽水仅共享诊断版本标签变更；助手0.2.3已推送5d01327、NAS升级未确认保持，不接管独立会话。66/71既有用户验收/手机号停止、旧51不恢复/63ZIP不补/旧日志不重放保持。无手机ADB/真实账号/NAS/官方业务或提交推送上传发布备份；冻结后无挂起任务。
''')
prior = (OUT/'AGENTS-before.bin').read_bytes()
agents = ROOT/'AGENTS.md'
assert agents.read_bytes() == prior
prefix = f'''**2026-11-09 当前本地1.0.81/code102：先读[81交接](HANDOFF-CURRENT-SESSION-2026-11-09-v1.0.81.md)、[实现](docs/fixes-2026-11-09-v1.0.81.md)、[安装](docs/INSTALL-v1.0.81.md)、[只读诊断](docs/netease-ad-probe-v1.0.81.md)和[验证](docs/validation-2026-11-09-v1.0.81.json)，按release181/after.json和verify181.py check只读接收。用户确认先做只读广告配置验证版；手动任务入口→对应广告位、闭合结构报告/复制核对/固定文件导出已实现，不展示/追踪/资格/gain/媒体或启动官版。官版9.6.15拼接规则已证，现有eapi/defaultPc保持；真实配置/独立H5/完成与入账未验，官版领取后Mesting余额同步的既有验收保持。{counts}；四主机图已看，不加定向/历史成绩，首轮lint/UI夹具失败保留。原签名双ARM/固定引擎/7shader/12非app库/JNI/DSP/R8另验，{len(build['files'])}输入固定。100旧冻结物/74退休路径/Drift7/签名锁/脏树/beta/b6bcd542/空暂存保持，81另存不回填80。汽水仅诊断版本标签，助手0.2.3已推送5d01327、NAS升级未确认不变；未手机ADB/账号/NAS/官方业务/提交推送上传发布备份。66/71既有验收/手机号停止、旧51不恢复/63ZIP不补/旧日志不重放保持。冻结后无挂起任务。下方均历史时点。**\r\n\r\n'''
agents.write_bytes(prefix.encode('utf8')+prior)
print(json.dumps({'newDocuments': 6, 'version': '1.0.81', 'inputCount': len(build['files']),
                  'apkSha256': apk['sha256']}, indent=2))
