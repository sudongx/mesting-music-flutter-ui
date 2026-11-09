"""Publish local verification facts only after inspecting the actual APK."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.57-verification.json').read_text('utf-8'))
notes = json.loads((OUT / 'local-apk-notes-verification.json').read_text('utf-8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf-8'))
before = json.loads((OUT / 'state-before.json').read_text('utf-8'))
inputs = json.loads((OUT / 'build-input-final.json').read_text('utf-8'))
assert apk['androidVersionCode'] == 78 and apk['originalSignature']
assert host['beta']['success'] == 2078 and host['analysisPassed']
assert notes['notesCount'] == 8 and not notes['networkAccess']
for row in inputs['files']:
    assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
for row in before['frozenArtifacts']:
    path = ROOT / row['path']
    with path.open('rb') as stream:
        assert hashlib.file_digest(stream, 'sha256').hexdigest() == row['sha256'], row['path']
    assert path.stat().st_size == row['bytes'], row['path']
assert len(before['frozenArtifacts']) == 104
validation = {
    'version': '1.0.57', 'androidVersionCode': 78,
    'recordedAt': datetime.now(timezone.utc).isoformat(),
    'host': host,
    'apk': {
        'path': 'release/Mesting-Music-v1.0.57.apk', 'sha256': apk['sha256'],
        'bytes': apk['fileSize'], 'originalCertificateSha256': apk['certificateSha256'],
        'abis': apk['abis'], 'minSdk': apk['minSdk'], 'targetSdk': apk['targetSdk'],
        'engineBytesMatchPinnedManifest': apk['engineBytesMatchPinnedManifest'],
        'unchangedNonAppNativeLibrariesFrom56': len(apk['unchangedNonAppNativePayloadsFrom56']),
        'glassShadersByteIdenticalTo56': apk['glassShadersByteIdenticalTo56'],
        'glassShaderCount': len(apk['glassShadersComparedByteIdenticalAgainstLocalV136']),
        'nativePackaging': native, 'productionNotesReadFromActualApk': notes,
    },
    'preservation': {
        'oldFrozenArtifactsRehashedAndUnchanged': 104,
        'productBuildInputsVerifiedAfterBuild': len(inputs['files']),
        'pubspecLockSha256': before['lockSha256'], 'originalSigningFileUnchanged': True,
        'branch': before['branch'], 'head': before['head'], 'indexIntentionallyEmpty': True,
        'dirtyWorkingTreeRetained': True,
    },
    'device': {
        'accessed': False, 'adbUsed': False, 'realAccountsAccessed': False,
        'backendAccessed': False, 'phoneAcceptance': False,
        'code77To78OverlayVerified': False, 'newVersionColdRestoreVerified': False,
        'kugouCloudSnapshotAndCommentsAcceptedByRealAccount': False,
        'kugouOfficialDayWeekMonthAndCumulativeBookingVerified': False,
        'nativeQqWechatLoginConnected': False,
        'older56SameCodeOverlayIsNotThisUpgradeProof': True,
    },
    'outstanding': [
        'QQ/WeChat native approved application identity and music-platform session exchange are unavailable.',
        'Kugou official cumulative and daily/weekly/monthly booking needs real-account and cross-day acceptance.',
        'Native official chart comments for Kugou are not established; the labeled comments belong to the saved cloud playlist.',
        'Physical upgrade, account operations, network/VPN, playback and GPU are untested for this APK.',
        'Original key invalidation cause and historical NetEase total/October 683m10s remain unresolved.',
    ],
    'oldAcceptedOrUnknownPlaybackRecordsReplayed': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
}
(ROOT / 'docs/validation-2026-11-05-v1.0.57.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2) + '\n', 'utf-8')
handoff = ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.57.md'
text = handoff.read_text('utf-8')
marker = '189 文件 Beta 的最终结果按完整文件合并复跑'
text = text.replace(marker, '本轮 Beta189文件2078通过／2条件跳过、Stable63、独立导航55、分析0；8张最终主机图均已查看。' + marker)
handoff.write_text(text, 'utf-8')
agents = ROOT / 'AGENTS.md'
old = agents.read_bytes()
assert old.startswith('**2026-11-05 本会话总移交'.encode())
prefix = ('**2026-11-05 本地交付1.0.57/code78：先读[57交接](HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.57.md)、[安装](docs/INSTALL-v1.0.57.md)、[实现与未完成边界](docs/fixes-2026-11-05-v1.0.57.md)及[验证](docs/validation-2026-11-05-v1.0.57.json)。'
    '按已确认的最后参考图完成双平台榜单大背景／居中资料／单条三操作玻璃胶囊与完整播放下载；网易云真实歌单收藏评论、酷狗收藏当日整期云歌单快照及其歌单评论，公开榜单分享。保留上方已下载、合并重复入口，酷狗精选移除本机喜欢。'
    '修正酷狗统计成功缓存永久复用、官方日读回不更新页面、明确Lite拒绝分类及标准等级完整截止；不改网易云上报、不重发旧未知日志。QQ／微信本机原生登录仍因获批身份／平台会话交换路径缺失未接通；酷狗官方累计与日周月实际入账仍未证明，不冒充全部同步已修复。'
    'Beta189文件2078通过／2条件跳过、Stable63、导航55、分析0和8张已查看主机图；首轮旧下载入口断言失败与整文件复跑证据保留、不累加。FSS164、网络媒体35、Rust136／6外网忽略及SDK563仅相应同输入历史继承。'
    '实际原证书双ARM／定制引擎／7shader／56全部12非app原生库／DEX三类五方法十二字段JNI及APK八条说明另验。原104冻结物、签名／锁／全部历史脏改动、beta/b6bcd542与空暂存保持，新APK／完整源码另存。'
    '本轮未手机／ADB／真实账号／后台／提交推送发布，不外推56同code77覆盖为此次77→78升级验收；真实收藏评论／跨日统计／网络VPN／首次图片／完整播放／GPU待验。旧密钥失效原因、旧密文及网易云历史总时长／十月683分10秒仍未解决。'
    '新接手先只读核对后等待，不自动同步清理构建发布、不接管旧Gitee，不外推旧设备授权；下方保留历史时点。**\n\n')
agents.write_bytes(prefix.encode('utf-8') + old)
print(json.dumps({'finalDocsPrepared': True, 'protectedOldArtifacts': 104, 'buildInputsVerified': len(inputs['files']), 'phoneAccess': False}, indent=2))
