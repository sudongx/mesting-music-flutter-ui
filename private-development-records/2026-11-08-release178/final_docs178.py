"""Write new-version documents after actual host and APK verification."""
from pathlib import Path
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
host = json.loads((OUT / 'host-summary.json').read_text('utf8'))
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.78-verification.json').read_text('utf8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf8'))
inputs = json.loads((OUT / 'candidate1/build-input.json').read_text('utf8'))
ui = json.loads((OUT / 'ui-review.json').read_text('utf8'))
assert all(host[s]['failed'] == 0 for s in ['beta', 'stable', 'navigation'])
assert host['analysis']['issues'] == 0
assert len(ui['reviewed']) == 6 and all(row['explicitlyViewedByRoot'] for row in ui['reviewed'])
for row in inputs['files']:
    assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
beta, stable, nav = host['beta'], host['stable'], host['navigation']
counts = (f"Beta {beta['files']}文件{beta['passed']}通过/{beta['skipped']}跳过；"
          f"Stable {stable['passed']}通过/{stable['skipped']}跳过；导航{nav['passed']}；分析0")


def new(path, text):
    target = ROOT / path
    assert not target.exists(), target
    target.write_text(text.rstrip() + '\n', encoding='utf8')


new('docs/fixes-2026-11-08-v1.0.78.md', f'''# 1.0.78 / code99：汽水封面上传路径修正与专用诊断

用户确认歌曲搜索已可用、NAS助手0.2.2已更新并重启；实际反馈仍有关注列表格式异常、官方时长缺失、全部上报未确认及图片上传HTTP400。本轮按确认实施，限定汽水，无手机/ADB/真实账号/NAS或官方业务请求。

## 已确认并修正的上传协议错误

完整用户日志80条中有43条汽水事件，图片服务返回过HTTP400。旧代码把ApplyImageUpload、CommitImageUpload请求和AWSV4签名路径设为 `/`。留存官方19的AWSV4AuthParams.CANONICAL_URI明确 `/top/v1`，BDAuthHelper把它交给签名器；相同native字节的Apply/Commit公共构造器也拼入 `/top/v1?`。本版将两项请求和canonical URI统一为 `/top/v1`，拒绝根路径签名，保留安全host校验、临时授权、独立存储上传路径和最终歌单读回。

独立Python重建的虚构签名向量与Dart精确对照；受控HTTP服务拒绝旧根路径、接受正确路径，并完整验证上传/提交/歌单读回。HTTP400可在申请地址、传图、提交分别记录安全错误码，失败不写歌单。只有云端封面身份读回一致才报告成功。

这证明并修正了协议路径错误，**没有证明它是现场400的唯一原因或真实上传已经恢复**。现有空region/imagex签名scope仍是兼容假设，region默认值未证；不凭猜测改为其他服务的签名协议。新的封面诊断导出会明确记录这一固定协议说明。

## 关注与官方时长

新增独立汽水诊断，不改原搜索、社交接口、MCS上报报文、回执接受规则和官方总时长语义。HTTP结果与DTO解析分别记录：关注/粉丝/歌手收藏、当前资料、官方累计时长可以区分空响应、缺字段、结构异常、身份不符、业务拒绝和续页错误。签名助手HTTP200后的拒绝、缺签名或身份不符也有独立失败记录。

听歌上报区分本机账本读写、缺真实身份/不支持UA、账号变化、禁上报、HTTP/JSON/正面回执缺失或拒绝。即使服务回执为正，落盘失败也只记录服务接收事实，不能称官方入账。原账号归属与本机 `mesting_qishui_listening177_` 存储保持，已观察的9分51秒未知旧记录不自动重放，不直接加到官版累计。

本版没有宣称关注列表、官方累计读取或官版时长增长已恢复；需要下一次实际回执继续定位。

## 导出与隐私边界

「设置→连接与播放诊断→汽水专用诊断」提供社交/时长/封面分组，独立内存缓冲最多160条。精简导出保留完整JSON且不超过4096字符；完整JSON可通过系统分享导出。导出只把生成的摘要写到固定私有报告路径，原生端拒绝其他路径、符号链接逃逸和超过1MiB文件，不放宽既有流畅度报告导出。

只保留闭合分类、状态码、固定安全错误码、布尔状态及受限字段名称/类型/容器数量。未知属性名、字段值、原始错误文本、URL、账号/设备/歌曲身份、Cookie/token、签名、临时密钥及图片均不导出。页面和导出不触发业务请求、播放或重放。新二级页保留玻璃壳和“我的”选中，深浅/大字及滚动后的操作区已软件渲染复核。

## 验证与边界

{counts}。完整文件替换复跑，不累加；初轮5条分析提示和完整Beta中1个诊断页测试夹具的离屏分组查找失败均保留。该夹具改为主动滚动构建并保留禁用/不重复导出断言，完整文件复跑替换旧结果。6张新主机图已查看，不能当成实机/GPU/账号验收。

原签名双ARM、固定引擎、7shader、12非app库和实际DEX/JNI/DTO/DSP/R8检查另验。助手请求契约未改，本轮不改助手或NAS。网易云/酷狗源文件对77基线保持，旧74退休路径/Drift7兼容、原签名/锁/历史脏树/旧94冻结物保留。66/71既有用户验收和手机号停止保持，旧51不恢复、63ZIP不补。未提交推送上传发布备份。
''')

new('docs/qishui-diagnostics-v1.0.78.md', '''# 汽水专用诊断：1.0.78

入口：设置→连接与播放诊断→汽水专用诊断。保持应用不退出，复现目标问题后选择“关注与粉丝”“听歌时长”或“歌单封面”，优先导出JSON文件发回；也可复制精简记录。专用缓冲与原80条跨平台诊断独立。

导出schema178，包含appVersion=1.0.78、appVersionCode=99、platform=qishui、group、eventCount及完整events。buffer为本次进程内存，只有用户显式导出时生成文件，不自动上传。后续发版应同步诊断版本标识。

feature区分socialStats/following/followers/userInfo/userFollow/userUnfollow/artistCollection/officialListening/listeningReport/coverUpload/playlistCover。stage区分helper/identity/request/response/parse/submit/receipt/grant/apply/storage/commit/readback/ledger等闭合名称。HTTP200仅是response/helper阶段的观察；后续parse或receipt仍可失败。

shape只含安全固定字段的类型、字段数、容器数量和有界嵌套结构，未知属性名称和值均不导出。serviceCode只允许固定助手策略码或ImageX错误码；其他非空值记unknown和serviceCodePresent。businessCode只允许严格有界数值。identityReady/ownerReady/willSubmit/receiptAccepted均为布尔，不含身份或请求正文；receiptAccepted不等于官版时长入账。

all/cover导出另含固定imageUploadContract：gatewayPath=/top/v1、signature=AWS4-HMAC-SHA256、service=imagex、regionMode=emptyUnverified。路径由留存官版静态证据确认，空region仍未完成实际配置链核验。

复制精简记录最多4096字符，完整事件删除以适配长度，不切断JSON；极大的单条shape可从精简版省略并明确标记，文件版保留。JSON文件固定为应用支持目录qishui_diagnostics/mesting-qishui-report.json；原生桥只接受此固定文件，拒绝任意路径及大于1MiB文件。复制内容会在本机读回核对，跨应用粘贴仍以最终收到的文本/文件为准。

导出不读取原始账号库、不启动播放器、不发官方/NAS请求，也不恢复或重放旧时长。真实响应缺口仍需要用户复现；这个诊断功能本身不代表关注/累计/上传或时长入账成功。
''')

new('docs/INSTALL-v1.0.78.md', '''# 1.0.78 / code99 安装与验收

原签名双ARM候选APK：release/Mesting-Music-v1.0.78.apk。完整源码：Mesting-Music-v1.0.78-source.zip。按原签名覆盖安装保留账号、歌单和本机时长；本轮未连接手机、未安装，实际升级与恢复待用户验证。

1. 优先为本人可编辑的汽水歌单保存封面，核对返回歌单/我的页及官版同账号封面；不要把预览图片变化当云端成功。已确认的/top/v1请求/签名路径错误已改，现场HTTP400消失仍待确认。
2. 复现关注列表及官方累计时长读取，核对同账号真实值。两项在77反馈失败，本版先补准确诊断，不冒称已恢复。
3. 复现后保持应用不退出，进入设置→连接与播放诊断→汽水专用诊断，选择对应分组→导出JSON文件，发回本会话。复制精简记录是短文本备选。
4. 实际新收听与暂停后可检查时长上报诊断。本机时长、提交回执和官版累计分开；旧未确认记录不会自动重发。真实入账需官版再次读回。

本版助手接口未变；用户已确认NAS0.2.2更新并重启，该状态不是本会话远端核验。未代部署NAS。歌曲搜索用户已确认可用，网易云/酷狗与其他历史验收保持。6张主机图和本地回归不证明实机/GPU/DSP/长期稳定或持续120FPS。
''')

validation = {
    'version': '1.0.78', 'androidVersionCode': 99, 'date': '2026-11-08',
    'scope': 'Qishui dedicated diagnostics and statically confirmed private ImageX path correction',
    'hostValidation': host, 'actualApk': apk, 'actualNativePackaging': native,
    'buildInputs': len(inputs['files']), 'uiReview': ui,
    'confirmedPrivateImageGatewayPathCorrected': True,
    'independentSigningGoldenVectorsPassed': True,
    'imagexEmptyRegionStillUnverified': True, 'liveCoverHttp400Resolved': False,
    'realCoverUploadAccepted': False, 'officialSocialAndListeningReadAccepted': False,
    'officialDurationAccountAttributionOrCreditingVerified': False,
    'priorSearchAcceptedByUser': True, 'nas022UpdatedAndRestartedReportedByUser': True,
    'helperSourceOrContractChanged': False, 'oldUnknownListeningRecordsReplayed': False,
    'deviceAccess': False, 'physicalAcceptancePerformed': False, 'realAccountAccess': False,
    'nasAccessOrDeployment': False, 'agentInitiatedOfficialBusinessRequests': False,
    'unrelatedPlatformSourceChangedFrom77': False,
    'historical94FrozenArtifactsPreserved': True, 'old74RetiredPathsPreserved': True,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
new('docs/validation-2026-11-08-v1.0.78.json', json.dumps(validation, ensure_ascii=False, indent=2))
new('docs/build-inputs-v1.0.78.json', json.dumps(inputs, ensure_ascii=False, indent=2))

new('HANDOFF-CURRENT-SESSION-2026-11-08-v1.0.78.md', f'''# 1.0.78 / code99 当前交付（2026-11-08）

本轮用户确认专用诊断版并修复已确认图片上传HTTP400。当前APK和完整源码另存78，接收用 `.codex-artifacts/2026-11-08-release178/after.json` 与 `python -B .codex-artifacts/2026-11-08-release178/verify178.py check`，不回填77/76或运行其冻结脚本。

先读同版fixes、INSTALL、qishui-diagnostics、validation和build-inputs。已确认并修正Apply/Commit请求与签名的根路径错误：官版Java常量与native共同构造使用/top/v1，新代码两者一致；独立签名向量及受控上传/读回协议回归通过。空region仍未证，现场400是否消失/真实保存仍待用户验证，不能将本机模拟当实际上传。

用户已确认歌曲搜索可用、NAS助手0.2.2已更新重启；77关注格式错误、官方累计缺失、旧9分51秒上报全未知及图片上传400是实际反馈优先。本版社交与时长增加可导出的受限结构/错误码/身份与回执阶段，尚未证明这些业务恢复。保持原MCS契约、回执规则、旧177账本键和不重放旧记录；导出不会发请求或启动播放器。助手契约未变、助手源码及NAS未代改。

{counts}，完整文件替换复跑不累加。初轮分析5条、完整Beta单个离屏控件查找夹具失败和后续整文件替换日志保留。6张最终主机图查看过，含深浅/大字与大字已滚动操作区；非实机/GPU验收。原签名双ARM/固定引擎/7shader/12非app库、实际DEX/JNI/DTO/DSP/R8另验，编译输入{len(inputs['files'])}项固定。

APK SHA256 `{apk['sha256']}`，字节{apk['fileSize']}；源码ZIP和其验证见release同版记录。94旧冻结物、原签名/锁/旧74退休路径/Drift7被动兼容、历史脏树/beta/b6bcd542/空暂存保持。78另存不回填77，源码不包含私有证据或签名材料。

本轮无手机/ADB/真实账号/官方业务请求/NAS部署，78未安装。66/71既有用户验收、手机号停止和其他旧边界保持；旧51不恢复、63ZIP不补、旧日志不重放。未提交推送上传发布备份。新会话先只读接收，新的产品修改仍按AGENTS澄清及确认范围。无挂起任务后才冻结最终after收据。
''')

prefix = f'''**2026-11-08 当前本地1.0.78/code99诊断修复候选1：先读[78交接](HANDOFF-CURRENT-SESSION-2026-11-08-v1.0.78.md)、[实现](docs/fixes-2026-11-08-v1.0.78.md)、[安装](docs/INSTALL-v1.0.78.md)、[专用诊断](docs/qishui-diagnostics-v1.0.78.md)和[验证](docs/validation-2026-11-08-v1.0.78.json)，按release178/after.json及verify178.py只读接收。用户确认搜索可用、NAS0.2.2已更新重启；77关注/官方累计仍失败、9分51秒上报未确认及上传HTTP400反馈优先。本版已证并修正官版/top/v1请求与签名路径；空region仍未证，现场400消失和真实封面保存仍未验。汽水专用分组诊断/安全结构摘要/身份回执及固定文件导出已实现，社交和累计/真实入账仍不冒称恢复，旧账本和不重放保持。{counts}；6软件图已看，完整文件替换复跑不累加，初轮分析和单个离屏测试夹具失败保留。原签名双ARM/固定引擎/7shader/12非app库/JNI/DSP/R8另验。未手机ADB/账号/NAS/真实业务或部署，78未安装；助手契约未改。旧94冻结物/74退休路径/Drift7兼容/签名锁/历史脏树/beta/b6bcd542/空暂存保持，78另存不回填77。66/71用户已验及手机号停止保持，旧51不恢复、63ZIP不补、旧日志不重放。未提交推送上传发布备份。下方均历史时点。**\r\n\r\n'''
agents = ROOT / 'AGENTS.md'
prefix = prefix.replace(r'\r\n', '\n')
old_agents = (OUT / 'AGENTS-before.bin').read_bytes()
assert agents.read_bytes() == old_agents
agents.write_bytes(prefix.encode('utf8') + old_agents)
changelog = ROOT / 'CHANGELOG.md'
changelog.write_bytes(('''# 1.0.78 / code99 — 2026-11-08

- 修正汽水ImageX Apply/Commit请求和签名路径为官版/top/v1，保留存储及云端封面读回。
- 新增汽水独立分组诊断、受限结构摘要/安全错误码及JSON文件导出。
- 听歌上报明确身份/账本/网络/回执失败；保持本机旧记录和不重放规则。
- 真实封面400消失、社交/官方累计读取与时长入账仍待用户验证；空region仍未证。
- 主机回归及原签名包装检查见同版validation；无手机/NAS/账号业务或发布操作。

''').encode('utf8') + changelog.read_bytes())
print(json.dumps({'newDocsWritten': True, 'version': '1.0.78', 'fixedInputs': len(inputs['files'])}))
