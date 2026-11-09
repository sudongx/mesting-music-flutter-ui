"""Write release evidence only after actual checks, signing and APK-note reads."""
from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
def load(path): return json.loads(path.read_text(encoding='utf-8-sig'))
checks = load(out / 'host-check-summary.json')
assert checks['analysisPassed']
assert all(checks[name]['completeAndSuccessful'] for name in (
    'beta-complete.jsonl', 'stable-complete.jsonl', 'search-back-player.jsonl'))
apk = load(root / 'release/Mesting-Music-v1.0.41-verification.json')
notes = load(out / 'local-apk-notes-verification.json')
assert notes['versionCode'] == 62 and notes['notesCount'] == 3
assert (out / 'ui/chat-ended-record.png').is_file()
frozen = load(out / 'frozen-before.json')
for row in frozen:
    path = Path(row['path'])
    with path.open('rb') as stream:
        assert hashlib.file_digest(stream, 'sha256').hexdigest() == row['sha256']
    assert path.stat().st_size == row['bytes']

beta = checks['beta-complete.jsonl']
stable = checks['stable-complete.jsonl']
navigation = checks['search-back-player.jsonl']
result_text = (f"{beta['files']}个文件{beta['counts']['success']}项Beta通过、"
    f"{beta['counts'].get('skipped', 0)}项条件跳过；"
    f"Stable{stable['counts']['success']}项、搜索/返回/播放器"
    f"{navigation['counts']['success']}项通过；静态分析0问题。")
evidence = {
    'version': '1.0.41', 'androidVersionCode': 62, 'date': '2026-11-02',
    'timezone': 'Asia/Shanghai', 'hostChecks': checks,
    'actualApkNotes': notes,
    'userSamples': {
        'count': 2, 'readerVersion': '9.5.61', 'messageType': 51,
        'timeLabelCharacterCounts': [7, 3], 'rawMessageValuesAvailable': False,
        'secondSampleNewlyEnded': True,
    },
    'staticEvidence': {
        'officialApkVersion': '9.6.15',
        'apkSha256': '0c168d70c155d35a111c0031fec328430118ea09b400121ff1377b32c42a7ea4',
        'type51DispatchEvidence': 'ev_e4aa5c274cf0f5002e4084b9eb83d517c84faf8130c9210a5dc1b5aa4295067b',
        'ltRecordModelEvidence': 'ev_586be22735633fd7e5a302e4174506d4452361dd89459eb28703cffeb67d9e4a',
        'carrierDefinitions': {'MsgBody.parseFromJson': 'classes19.dex', 'LTRecordMsg': 'classes3.dex'},
        'outerContainerNameKnown': False, 'boundedTypedSignatureUsed': True,
        'reaExportRecords': 34, 'reaStateResetAfterExport': True,
    },
    'type51Coverage': [
        'seven-character and three-character official time labels',
        'JSON and map body, legacy msg and modern msgType/body',
        'history and conversation preview parser',
        'ordered creator and acceptor avatars, strict official CDN validation',
        'malformed/oversized bodies remain diagnosable',
        'profiles, untyped containers, invitations and invalid destinations rejected',
        'real card widget to actual report page to all records with fake read-only repository',
        'diagnostic schema contains no text, URL, room selector or account values',
    ],
    'softwareRenderFiles': [str((out / 'ui/chat-ended-record.png').relative_to(root)).replace('\\', '/')],
    'softwareRenderReviewed': True,
    'finalRenderUsesProductionChatListAnd300DpBubbleConstraints': True,
    'syntheticParticipantImagesOmittedToAvoidNetworkAccess': True,
    'renderLimitations': 'Host software layout uses synthetic data and QA fonts; not Android fonts, IME, GPU/FPS or live account acceptance.',
    'intermediateRuns': {
        'firstTargetedTestsPassed': 28,
        'expandedRelatedRunSuccessful': True,
        'channelMixedRunAborted': True,
        'channelMixedReason': 'Initial unrestricted beta invocation included Stable-only cases; final complete channel lists replace this run.',
        'initialAnalysisBraceStyleInfos': 2,
        'analysisInfosFixedAndCompleteAffectedFilesRerun': True,
        'firstRenderHarnessTightFullScreenBoundsCorrectedWithoutProductLayoutChange': True,
    },
    'preservation': {'previousApkAndSourceFrozenFiles': len(frozen),
        'allPreviousHashesVerified': True, 'lockAndOriginalSigningPreserved': True,
        'customEngineAndFullGlassPreserved': True},
    'acceptance': {'physicalDeviceAccess': False, 'realAccountAccess': False,
        'realType51DisplayVerified': False, 'realReportBackendReadsVerified': False,
        'physicalUpgradeVerified': False, 'historicalTotalDurationFixed': False},
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}

fixes = f'''# 1.0.41 / Android code62：一起听结束消息 type 51

用户提供的两条1.0.40脱敏结构均为type 51；第二条来自刚重新邀请好友并结束的一起听。它们不是原始消息，otherN是诊断别名，不能据此猜真实字段或数值。

## 依据与实现

已保留官版9.6.15 APK的静态方法将51分派到post.meta.LTRecordMsg，1.0.40只读通用卡片而漏掉该模型。新解析只在明确type/msgType为51时检查有限个直接子对象，以recordOrpheus、timeTitle、title与合法普通双人报告地址识别记录，避免猜外层字段名。官版实际字段定义与分派证据ID见本版validation；无手机或账号访问。

卡片保留官版原有时长文字；仅带明确单位时解析数字，不从关系累计制造本次时长。双方头像沿用creator/acceptor顺序，限制官方HTTPS封面域名；缺失头像显示匿名图标，避免把角色错误归为当前用户。点击沿用1.0.40的本次报告→全部记录流程及账号/权益隔离。

手动单条诊断增加已确认字段名和普通报告地址类型标记；正文、头像地址、roomId、数字标识与账号值仍不导出，维持手动预览/复制。通用旧卡片继续独立解析。

## 验证

{result_text}

新增11项专用协议回归覆盖两种时长形状、双层JSON、消息历史/会话预览、恶意链接/邀请区分、身份边界与脱敏；实际卡片→报告→全部记录的控件测试和1张主机软件渲染通过。实际原签名APK的3条更新说明经生产Range读取器离线读取并与本版历史一致。已验证版本、包名、证书、双ARM、原定制引擎、7份玻璃shader和8份SDK库。

最初扩大回归误混Stable专用用例，已停止并保留失败日志；最终按原渠道清单完整重跑，未将中途失败算通过。记录页面测试用合成数据，不代表平台真实读接口通过。

## 边界与保留

仅本地准备APK和完整源码，{len(frozen)}份旧APK/源码冻结字节不变。1.0.40的双平台搜索、底栏、用户关注、红底徽标、冷启动改动随本版保留；本次不修改播放上报、历史时长或旧日志补发。历史总时长和十月683分钟仍未解决。

真实结束记录显示、官方报告/历史读取、安装兼容性与手机效果仍需用户验收；未访问手机/ADB、真实账号或后台，未Git提交、推送、上传或发布。
'''

install = f'''# Mesting Music 1.0.41 / code62 安装验收

## 本地交付

原签名双ARM APK：`release/Mesting-Music-v1.0.41.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`。

完整源码：`Mesting-Music-v1.0.41-source.zip`。源码大小、摘要、文件数和APK完整校验见`release/Mesting-Music-v1.0.41-source-verification.json`及`release/Mesting-Music-v1.0.41-SHA256.txt`。源码包排除构建缓存、签名和私有诊断；包含当前脏工作区中的完整产品源码、原引擎和许可。

显示名Mesting Music、包名com.mesting.music.beta、原证书和递增code62已核对，可作为本机所核验同包名/证书版本的覆盖升级包；手机安装与数据保留仍待实际确认。1.0.40原APK/ZIP保留，未发布。

## 用户验收

1. 自行安装后检查版本1.0.41及账号/歌单。重新进入好友聊天，刷新或重新拉取记录，观察你提供的两条结束消息能否显示红色记录卡片，并核对时长和头像。
2. 点击卡片：本次好友详情→右上全部记录→历史详情，核对本次/累计、歌曲数和时间；不要把未知字段或读取失败当成0。读记录不会自动发邀请、私信或收藏。
3. 自愿再结束一次短时一起听，重新加载聊天检查新记录。若仍不识别，长按该条手动预览/复制脱敏结构；新结构会保留timeTitle/recordOrpheus等已确认字段名，依旧不含消息值。无需提供账号凭据或原始聊天。
4. 延续1.0.40验收双平台搜索键盘/粘贴菜单、歌曲和聊天页底栏隐藏、网易云关注/主页、深色红底徽标与冷启动切页。此前手机偶现问题仍以实际复测为准。

## 已验证与未验证

{result_text}已完成专用消息与完整跳转控件测试、1张主机渲染、实际APK说明读取及原签名/引擎/完整玻璃核验。

数据夹具依据静态字段和脱敏形状构造，没有取得真实原始DTO；真实账号记录显示与后端读取尚未验收。主机测试不证明Android输入法、字体、GPU/FPS或长期稳定性。未访问手机、账号或后台；历史总时长及十月683分钟未解决。
'''

handoff = f'''# 本地接续：Mesting Music 1.0.41 / code62

先读`docs/fixes-2026-11-02-v1.0.41.md`、`docs/INSTALL-v1.0.41.md`与`docs/validation-2026-11-02-v1.0.41.json`。这是此前确认的一起听完整记录流程兼容修复，未新增时长候选。

## 当前结果

1.0.40用户两次诊断均为type 51（第二条刚结束），发现并补齐官版LTRecordMsg专用解析；红卡保留时长和双方头像，接入既有本次报告→全部记录。已确认官版分派与字段，外层被脱敏的名字仍未知，采用有限直接子对象和精确签名匹配。合成夹具不等于真实私信验收。

{result_text}1张主机软件渲染与实际原签名APK更新说明读取通过。双ARM、原证书、完整玻璃和原引擎保持；APK与完整源码仅本地冻结，摘要见release校验资料。{len(frozen)}份旧APK/源码冻结校验一致，包含1.0.40。

## 工作区与接手

唯一工程D:/AnLi，beta/b6bcd5425e0df3e03febdd460b56d0ed42004c52，暂存区保持空；1.0.25起全部未提交产品改动保留。禁止reset/clean、拉取覆盖或替换旧冻结产物。版本来源为当前完整源码ZIP，不是仅HEAD。新会话先只读核对，按用户新指令继续。

本轮未访问手机/ADB、真实账号或后台；安装和真实结束卡片/详情/历史由用户自行验收。不能称官版真实读取或手机流畅度通过。历史总时长、跨日入账、十月683分钟仍未解决，旧weblog及旧日志隔离/不重发保持；原生时长候选未新授权。

没有Git提交、推送、上传或发布。签名材料私有且不进入源码ZIP。静态官版及REA原始Evidence保留在私有.codex-artifacts，34项Evidence已导出并清空REA状态，源码只携带可接手的结论和ID，不分发官版APK/私有素材。
'''

for relative, text in [
    ('docs/fixes-2026-11-02-v1.0.41.md', fixes),
    ('docs/INSTALL-v1.0.41.md', install),
    ('HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.41.md', handoff),
    ('docs/validation-2026-11-02-v1.0.41.json', json.dumps(evidence, ensure_ascii=False, indent=2)+'\n'),
]:
    target = root / relative
    assert not target.exists(), target
    target.write_text(text, encoding='utf-8')

with zipfile.ZipFile(out / 'source-before-private.zip') as before:
    previous_agents = before.read('AGENTS.md')
assert (root / 'AGENTS.md').read_bytes() == previous_agents
prefix = (f'**2026-11-02 本地正式交付1.0.41/code62：先读[1.0.41交接](HANDOFF-CURRENT-SESSION-2026-11-02-v1.0.41.md)及[安装验收](docs/INSTALL-v1.0.41.md)。'
    f'用户1.0.40两条诊断（含刚结束记录）均为51，按官版静态分派/字段补齐LTRecordMsg专用解析，保留时长文字与双方头像，接入本次报告→全部记录，完善无值脱敏诊断；真实消息/后端仍待用户验收。'
    f'{result_text}原签名双ARM、原引擎、7玻璃shader/8SDK与实际APK更新说明核验；1张主机渲染。'
    f'仅本地APK/完整源码，{len(frozen)}份旧冻结物及全部脏工作区保留，beta/b6bcd542、暂存空。'
    '未手机/真实账号/后台、未提交推送发布；历史总时长及十月683分钟仍未解决，旧weblog与旧日志隔离不重发保持。'
    '下方最新保留历史时点；新接续先只读核对，不自动访问手机或实施时长候选。**\n\n').encode('utf-8')
(root / 'AGENTS.md').write_bytes(prefix + previous_agents)
print(json.dumps({'docsWritten': 4, 'agentsPrefixAdded': True, 'previousFrozenUnchanged': len(frozen),
                  'betaFiles': beta['files'], 'betaTests': beta['counts']['success']}, indent=2))
