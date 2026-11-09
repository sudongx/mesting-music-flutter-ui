"""Publish factual local documents only after checking the actual new APK."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
checks = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
apk_path = ROOT / 'release/Mesting-Music-v1.0.61-verification.json'
apk = json.loads(apk_path.read_text('utf-8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf-8'))
notes = json.loads((OUT / 'local-apk-notes-verification.json').read_text('utf-8'))
inputs = json.loads((OUT / 'build-input-final.json').read_text('utf-8'))
before = json.loads((OUT / 'state-before.json').read_text('utf-8'))
ui = json.loads((OUT / 'ui-review.json').read_text('utf-8'))
assert checks['beta']['success'] == 2331 and checks['analysisIssues'] == 0
assert notes['notesCount'] == 8 and notes['productionReader']
assert ui['allFramesViewed'] and ui['frames'] == 10
for row in inputs['files']:
    assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
assert subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip() == before['head']
assert not subprocess.check_output(['git', 'diff', '--cached', '--name-only'], cwd=ROOT, text=True).strip()
assert hashlib.sha256((ROOT / 'pubspec.lock').read_bytes()).hexdigest() == before['lockSha256']
assert hashlib.sha256((ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore').read_bytes()).hexdigest() == before['signingSha256']

# These assertions were executed against the actual signed zip by the signer.
# Add their readable metadata without modifying the already frozen APK.
apk['lxSourceScriptsByteIdentical'] = 11
apk['lxRuntimeAssetsVerified'] = True
apk['lxRemoteScriptUpdatesEnabled'] = False
apk['lxAndroidRuntimeExecuted'] = False
apk_path.write_text(json.dumps(apk, ensure_ascii=False, indent=2) + '\n', 'utf-8')
unknowns = [
    '新Worker及各音源的Android设备行为未验收；主机Chrome不外推手机。',
    '联网仅抽查公开ID347230的128k有界音频头，5源返回合格头，其余有404/失败/超时，不承诺任意歌曲档位可用。',
    '真实完整播放、下载导出、升级/冷恢复、网络/VPN和GPU仍需用户设备验收。',
    '60真实签到/免费听到账、QQ微信原生登录、酷狗官方统计入账、旧密钥/旧密文与网易云历史总时长/十月683分10秒仍未解决或未验收。',
]
validation = {
    'version': '1.0.61', 'androidVersionCode': 82, 'date': '2026-11-05', 'timezone': 'Asia/Shanghai',
    'recordedAtUtc': datetime.now(timezone.utc).isoformat(),
    'scope': '网易云11个LX源、播放自动救援、官方下载优先并由用户选择备用下载源；本地交付',
    'userConfirmed': {'manualPlaybackWithAutomaticRescue': True, 'keepExistingAutomaticOrder': True,
        'downloadsAlwaysTryOfficialFirst': True, 'userChoosesAlternateDownloadSource': True,
        'noSilentDownloadSourceSwitch': True},
    'host': checks, 'actualApk': apk, 'nativePackaging': native, 'apkNotes': notes,
    'compiledInputs': {'count': len(inputs['files']), 'allHashesVerifiedAfterCompile': True},
    'uiReview': ui,
    'device': {'performed': False, 'adbUsed': False, 'phoneAccess': False, 'realAccountAccess': False,
        'upgradeTo82Verified': False, 'coldRestoreVerified': False, 'androidWorkerVerified': False,
        'fullPlaybackVerified': False, 'fullMusicDownloadAndExportVerified': False,
        'vpnChanged': False, 'backendAccess': False},
    'preservation': {'head': before['head'], 'branch': before['branch'], 'indexEmpty': True,
        'originalSignature': True, 'lockUnchanged': True, 'remainingFrozenArtifacts': 61,
        'recycledOldReleaseApks': 51, 'oldApksRestored': False, 'priorDirtyTreePreserved': True},
    'remainingUnknowns': unknowns, 'oldAcceptedOrUnknownPlaybackRecordsReplayed': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(ROOT / 'docs/validation-2026-11-05-v1.0.61.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2) + '\n', 'utf-8')

handoff = f'''# 1.0.61 / code82 当前交接

工作目录 `D:/AnLi`。先读本文、[实现](docs/fixes-2026-11-05-v1.0.61.md)、[安装验收](docs/INSTALL-v1.0.61.md)、[验证](docs/validation-2026-11-05-v1.0.61.json)，按 `.codex-artifacts/2026-11-05-release161/after.json` 只读接收。没有挂起的编码、构建或上传步骤，不自动同步、清理、重建、操作设备或发布。

用户逐问确认：接入原仓库标绿11源，保留既有音源；手动播放源失败自动救援并显示实际来源。自动顺序为官方完整版→酷狗账号→既有公开/LX源→BugPk。下载始终先官方，失败后由用户选择可下载源，所选下载源失败不自动换源。

11源均固定原JS字节、隔离Worker运行，最多2个并发；CSP与匿名HTTP边界保留。不共享账号Cookie、不跟随脚本更新、不修改网易云全局身份。按歌曲/所选音质检测，试听/错误内容/时长不符被拦截，音质由实际头部测量。等待选源和下载选择持久化，取消/换账号阻止迟到结果。

主机Beta203文件2331通过/2条件跳过、Stable63、导航55、分析0；新增41项已含在Beta，不累加。首轮全量留下3项旧状态断言和1项新UI夹具安全存储定时器失败，随后11整文件134项复跑通过，原始日志保留。15项隔离浏览器协议检查通过；10张最终合成主机图已查看。公开ID347230/128k的匿名有界Range抽查中 fish/helloworld/huibq/jiexiang/xinghai 5源提供匹配约326秒的128kbps MP3头；其他源出现404/失败/超时。五个结果可共用同一上游文件，不当作11源全歌曲可用或完整播放/下载证明。

实际{len(inputs['files'])}编译输入、原证书V2/V3双ARM、定制引擎、7玻璃shader、60全部12非app库、DEX三类五方法十二字段JNI及实际APK8条说明已另验。原生FSS164/网络媒体35/Rust136及6外网忽略/SDK563仅相应同输入历史继承。

新APK `release/Mesting-Music-v1.0.61.apk`，{apk['fileSize']}字节，SHA256 `{apk['sha256']}`；完整源码 `Mesting-Music-v1.0.61-source.zip`，最终摘要与文件数见同版本外置source-verification.json。原61份清理后冻结物保持；旧51个release APK仍按既有授权回收，不据清理前112基线恢复或报丢失。当前release只新增61 APK，根目录旧51份源码ZIP保留。签名/锁、完整玻璃/定制引擎、全部历史脏改动、beta/b6bcd542和空暂存保持，旧HEAD不是完整产品。

没有手机/ADB/真实音乐账号/VPN/业务后台访问，没有提交推送或上传发布。没有Android Worker、升级/冷恢复、完整播放/下载保存、网络/GPU验收，不外推主机Chrome或56同码历史结果。60真实签到/免费听到账、QQ微信原生登录、酷狗官方统计入账、旧密钥/旧密文和网易云历史总时长/十月683分10秒仍未解决或未验收。61不改上报、不补旧日志。

新文档只在本地，未另行公开或私有推送；既有公开标签/源码ZIP不改写。历史归档与清理接续仍见 `HANDOFF-SESSION-2026-11-05-v1.0.60-TO-NEW-CHAT.md`。新需求一次一问，方案确认后实施；本轮设备/账号和发布没有授权。
'''
(ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.61.md').write_text(handoff, 'utf-8')

agent = ROOT / 'AGENTS.md'
prior = agent.read_bytes()
assert hashlib.sha256(prior).hexdigest() == next(x['sha256'] for x in before['files'] if x['path'] == 'AGENTS.md')
prefix = '''**2026-11-05 本地交付1.0.61/code82：先读[61交接](HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.61.md)、[实现](docs/fixes-2026-11-05-v1.0.61.md)、[安装验收](docs/INSTALL-v1.0.61.md)及[验证](docs/validation-2026-11-05-v1.0.61.json)。按确认接入11个固定LX脚本的网易云音源，手动播放源失败自动救援、显示实际来源；下载独立官方优先，失败进入持久等待选源并由用户决定，所选源失败不自动换源。隔离Worker/匿名HTTP/实际音频完整性及音质核验，原账号身份/听歌上报/旧日志不改。Beta203文件2331通过/2跳过、Stable63、导航55、分析0；新增41项已包含，首轮3旧状态断言/1新UI夹具定时器失败及11整文件134项复跑保留。15浏览器协议项及10已查看主机图；联网只验一首公开歌128k有界头，5源可读、其余有404/失败/超时，不称11源全曲全档位可用。实际原签名双ARM/1556编译输入/定制引擎/7shader/60全部12非app库/DEX三类五方法十二字段JNI及包内8说明另验，原生和SDK历史结果不重跑累加。61 APK/完整源码另存，原61清理后冻结物、签名/锁、全部历史脏改动、beta/b6bcd542/空暂存保持；旧51个release APK仍按授权回收，不按旧112基线恢复。未手机/ADB/真实账号/VPN/后台/提交推送上传发布，Android Worker、升级/冷恢复、完整播放下载/GPU与60签到免费听到账未验收，历史登录/官方统计/密钥/总时长问题沿用。新接续按release161/after.json只读核对并等待，不自动同步清理测试构建发布；下方保留历史时点。**

'''
agent.write_bytes(prefix.encode('utf-8') + prior)
assert agent.read_bytes().endswith(prior)
print({'validationWritten': True, 'handoffWritten': True,
    'agentPrefixAddedOldBytesRetained': True, 'compiledInputs': len(inputs['files'])})
