"""Write final factual documentation after host and actual-APK verification."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
checks = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.60-verification.json').read_text('utf-8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf-8'))
notes = json.loads((OUT / 'local-apk-notes-verification.json').read_text('utf-8'))
inputs = json.loads((OUT / 'build-input-final.json').read_text('utf-8'))
before = json.loads((OUT / 'state-before.json').read_text('utf-8'))
assert checks['beta']['success'] == 2290 and checks['analysisIssues'] == 0
assert notes['notesCount'] == 8 and notes['productionReader']
for row in inputs['files']:
    assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip() == before['head']
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=ROOT, text=True).strip()
assert hashlib.sha256((ROOT / 'pubspec.lock').read_bytes()).hexdigest() == before['lockSha256']
assert hashlib.sha256((ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore').read_bytes()).hexdigest() == before['signingSha256']

unknowns = [
    '修正后当前账号的实际actionUrl、资格/领取是否接受及实际时长到账未验证。',
    '平台需要真实广告凭证或反作弊信息时不会伪造；不承诺免广告直接到账。',
    '官版可选entranceComponent的缺省及必要性仍未知，动态配置和xeapi兼容未验证。',
    '80到81保留数据覆盖、冷恢复、真实网络/图片/播放/GPU未验收。',
    'QQ微信原生登录、酷狗官方累计日周月入账、旧私钥/旧密文、网易云历史总时长/十月683分10秒仍未解决。',
]
validation = {
    'version': '1.0.60', 'androidVersionCode': 81, 'date': '2026-11-05', 'timezone': 'Asia/Shanghai',
    'recordedAtUtc': datetime.now(timezone.utc).isoformat(),
    'scope': '网易云免费听资格请求兼容修正和分阶段脱敏诊断，本地交付待账号验收',
    'userConfirmed': {'officialAppCanCredit': True, 'mestingFirstAttemptBusiness500': True,
        'mestingBalanceAndProgressMatchOfficial': True, 'continueDirectCancellableClaims': True},
    'host': checks, 'actualApk': apk, 'nativePackaging': native, 'apkNotes': notes,
    'compiledInputs': {'count': len(inputs['files']), 'allHashesVerifiedAfterCompile': True},
    'repairs': {'sameOwnerProgressActionUrl': True, 'restrictedLocalNativeRouteParser': True,
        'qualificationReqParamJsonString': True, 'entrySourceRetained': True,
        'sameResponseStringRightsExtJsonRetained': True, 'nativeMapNullOmission': True,
        'stageAndHttpVsBusinessDifferentiated': True, 'ambiguousMutationJournalRetained': True,
        'fabricatedAdProof': False, 'globalClientIdentityChanged': False, 'oldPlaybackLogsReplayed': False},
    'device': {'performed': False, 'adbUsed': False, 'phoneAccess': False, 'realAccountAccess': False,
        'neteaseClaimAccepted': False, 'neteaseFreeListenCredited': False, 'upgrade80to81Verified': False,
        'coldRestoreVerified': False, 'vpnChanged': False, 'backendAccess': False},
    'preservation': {'baselineSourceFilesMatchedBeforeEdits': 2644, 'oldFrozenArtifactsMatchedBeforeEdits': 110,
        'originalSignature': True, 'lockUnchanged': True, 'head': before['head'], 'branch': before['branch'],
        'indexEmpty': True, 'priorDirtyTreePreserved': True, 'oldGiteeTakenOver': False},
    'remainingUnknowns': unknowns, 'gitCommitted': False, 'gitPushed': False,
    'uploaded': False, 'published': False,
}
(ROOT / 'docs/validation-2026-11-05-v1.0.60.json').write_text(
    json.dumps(validation, ensure_ascii=False, indent=2) + '\n', 'utf-8')

handoff = f'''# 1.0.60 / code81 当前交接

先读本文、[实现与边界](docs/fixes-2026-11-05-v1.0.60.md)、[安装与单次验收](docs/INSTALL-v1.0.60.md)、[验证](docs/validation-2026-11-05-v1.0.60.json)和 `.codex-artifacts/2026-11-05-release160/after.json`。新接续先只读核对后报告等待，不自动同步、清理、测试、构建或发布。

用户59首轮广告领取业务500、未到账；官版同账号广告可到账，Mesting余额/进度正常。用户确认保留直接连续申请及停止，先修参数和阶段诊断，再由用户验证单次实际到账。本轮不授权访问手机/ADB、真实账号、VPN或业务后台，不外推旧设备授权。

已修正：每次从同账号FREE_LISTEN进度actionUrl本地解析受限motivationAd/show入口，按官版Bundle参数与JSON字符串请求资格，匹配默认Map空值省略；保留entry.source及真实string权益扩展。不猜source/creativeType、不伪造广告曝光点击完成凭证。只有isNeedGetRights=true才查询资格，未知入口或来源停止。业务/HTTP/格式/超时按具体阶段提示并脱敏记录。领取5xx等未知写保留journal，同日不重放；停止、换账号和跨日保护保留。

**这只是有静态证据支持的兼容修正与诊断交付。修正后真实资格、gain接受和到账尚未验证，不能称免广告领取已成功。** 官版可能需要真实广告凭证/反作弊信息；可选entranceComponent及xeapi兼容仍有未知。不要用Mock通过代替到账，不对不明写或旧听歌日志重发。

本地主机：Beta199文件2290通过/2条件跳过，Stable63，导航55，分析0；新增4文件115项已纳入Beta，不重复加总。首次完整Beta通过，null规则补核后相关6文件完整复跑合并。首次Stable留下着色器资源缺失失败及接续中断，最终整组复跑保留原日志；新增测试先后2项与4项分析提示修复后，相关整文件复跑并保留原日志，不累加。实际原签名双ARM、{len(inputs['files'])}编译输入、定制引擎/7shader、59全部12非app原生库、DEX三类五方法十二字段JNI及实际APK8条说明另验；FSS164、网络媒体35、Rust136/6外网忽略、SDK563仅同输入历史继承。无新截图验收外推。

APK `release/Mesting-Music-v1.0.60.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`；完整源码 `Mesting-Music-v1.0.60-source.zip`，外置验证JSON记录实际ZIP摘要及完整逐文件校验。原110冻结物、签名、锁、全部历史脏改动、beta/b6bcd542与空暂存保留，新APK/源码另存，不覆盖旧版。

没有本轮手机/ADB、真实账号、后台、提交推送上传或发布，也不接管旧Gitee。80→81升级/冷恢复、真实网络图片播放/GPU、领取到账仍待验。QQ微信原生登录、酷狗官方累计及日周月入账、旧私钥失效原因/旧密文及网易云历史总时长/十月683分10秒仍未解决，60不改上报、不补发旧日志。

后续先让用户按安装说明只验一次，记录完整阶段与业务码/HTTP分类及脱敏连接诊断；真实到账确认后再验连续领取。没有挂起的编码构建上传任务，不自动试领或访问设备。
'''
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.60.md').write_text(handoff, 'utf-8')

agent = ROOT / 'AGENTS.md'
prior = agent.read_bytes()
assert not prior.startswith('**2026-11-05 本地交付1.0.60'.encode('utf-8'))
prefix = f'''**2026-11-05 本地交付1.0.60/code81：先读[60交接](HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.60.md)、[实现](docs/fixes-2026-11-05-v1.0.60.md)、[安装与单次验收](docs/INSTALL-v1.0.60.md)及[验证](docs/validation-2026-11-05-v1.0.60.json)。59首轮领取业务500、官版可到账且余额进度一致；按确认修正为同账号进度actionUrl的受限本地入口解析、官版Bundle上下文及reqParam JSON字符串，匹配空Map键省略并沿用真实entry.source/string权益扩展。明确余额/进度/资格/gain/签到阶段与业务码/HTTP分类，领取5xx等未知写留journal同日不重放；停止/账号/日期保护保留。不猜来源或creativeType，不伪造广告凭证，不改全局身份；真实接受与免广告到账未证明，entranceComponent/xeapi等仍有兼容未知。Beta199文件2290通过/2条件跳过、Stable63、导航55、分析0；新增115项已包含不累加；首次Stable着色器资源失败及中断、最终整组复跑保留，无新截图外推。实际原签名双ARM/{len(inputs['files'])}编译输入/定制引擎/7shader/59全部12非app库/DEX三类五方法十二字段JNI与实际APK8条说明另验；FSS164、网络媒体35、Rust136/6外网忽略及SDK563仅同输入历史继承。原110冻结物、签名/锁/全部历史脏改动、beta/b6bcd542及空暂存保持，60APK/完整源码另存。未手机/ADB/真实账号/VPN/后台/提交推送上传发布，不外推80→81升级、冷恢复、网络图片播放GPU或奖励到账；后续先由用户单次核对。QQ微信原生登录、酷狗官方累计日周月入账、旧密钥/旧密文与网易云历史总时长/十月683分10秒仍未解决，60不改听歌上报不补旧日志。新接续先按release160/after.json只读核对后等待，不自动清理同步构建发布，不接管旧Gitee或外推设备授权。下方保留历史时点。**\r\n\r\n'''
agent.write_bytes(prefix.encode('utf-8') + prior)
assert agent.read_bytes().endswith(prior)
print({'validationWritten': True, 'handoffWritten': True,
    'agentPrefixAddedOldBytesRetained': True, 'compiledInputs': len(inputs['files'])})
