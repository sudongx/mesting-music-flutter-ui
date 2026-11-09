"""Publish local verification facts only after inspecting the actual APK."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
host = json.loads((OUT / 'host-check-summary.json').read_text('utf-8'))
apk = json.loads((ROOT / 'release/Mesting-Music-v1.0.58-verification.json').read_text('utf-8'))
notes = json.loads((OUT / 'local-apk-notes-verification.json').read_text('utf-8'))
native = json.loads((OUT / 'native-packaging-verification.json').read_text('utf-8'))
before = json.loads((OUT / 'state-before.json').read_text('utf-8'))
inputs = json.loads((OUT / 'build-input-final.json').read_text('utf-8'))
assert apk['androidVersionCode'] == 79 and apk['originalSignature']
assert host['beta']['success'] == 2103 and host['analysisPassed']
assert notes['notesCount'] == 8 and not notes['networkAccess']
for row in inputs['files']:
    assert hashlib.sha256((ROOT / row['path']).read_bytes()).hexdigest() == row['sha256'], row['path']
for row in before['frozenArtifacts']:
    path = ROOT / row['path']
    with path.open('rb') as stream:
        assert hashlib.file_digest(stream, 'sha256').hexdigest() == row['sha256'], row['path']
    assert path.stat().st_size == row['bytes'], row['path']
assert len(before['frozenArtifacts']) == 106
validation = {
    'version': '1.0.58', 'androidVersionCode': 79,
    'recordedAt': datetime.now(timezone.utc).isoformat(),
    'host': host,
    'apk': {
        'path': 'release/Mesting-Music-v1.0.58.apk', 'sha256': apk['sha256'],
        'bytes': apk['fileSize'], 'originalCertificateSha256': apk['certificateSha256'],
        'abis': apk['abis'], 'minSdk': apk['minSdk'], 'targetSdk': apk['targetSdk'],
        'engineBytesMatchPinnedManifest': apk['engineBytesMatchPinnedManifest'],
        'unchangedNonAppNativeLibrariesFrom57': len(apk['unchangedNonAppNativePayloadsFrom57']),
        'glassShadersByteIdenticalTo57': apk['glassShadersByteIdenticalTo57'],
        'glassShaderCount': len(apk['glassShadersComparedByteIdenticalAgainstLocalV136']),
        'nativePackaging': native, 'productionNotesReadFromActualApk': notes,
    },
    'preservation': {
        'oldFrozenArtifactsRehashedAndUnchanged': 106,
        'productBuildInputsVerifiedAfterBuild': len(inputs['files']),
        'pubspecLockSha256': before['lockSha256'], 'originalSigningFileUnchanged': True,
        'branch': before['branch'], 'head': before['head'], 'indexIntentionallyEmpty': True,
        'dirtyWorkingTreeRetained': True,
    },
    'device': {
        'accessed': False, 'adbUsed': False, 'realAccountsAccessed': False,
        'backendAccessed': False, 'phoneAcceptance': False,
        'code78To79OverlayVerified': False, 'newVersionColdRestoreVerified': False,
        'publicPlaylistAndCommentsAcceptedByRealAccount': False,
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
(ROOT / 'docs/validation-2026-11-05-v1.0.58.json').write_text(json.dumps(validation, ensure_ascii=False, indent=2) + '\n', 'utf-8')
handoff = ROOT / 'HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.58.md'
text = handoff.read_text('utf-8')
text += '\n最终主机结果：Beta191文件2103通过／2条件跳过、Stable63、独立导航55、分析0；32张最终主机图已查看。首轮旧日推行与旧首页模块顺序断言失败，完整文件复跑保留，不累加。\n'
handoff.write_text(text, 'utf-8')
agents = ROOT / 'AGENTS.md'
old = agents.read_bytes()
assert old.startswith('**2026-11-05 本地交付1.0.57/code78'.encode())
prefix = ('**2026-11-05 本地交付1.0.58/code79：先读[58交接](HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.58.md)、[安装](docs/INSTALL-v1.0.58.md)、[实现](docs/fixes-2026-11-05-v1.0.58.md)及[验证](docs/validation-2026-11-05-v1.0.58.json)。'
    '按确认仅双平台发现／搜索公开歌单采用榜单同款头部，保留个人喜欢／云歌单布局；榜单／歌单封面右下角独立完整播放，其他区域仍进入详情。发现首屏补每日推荐／榜单推荐／网易云心动与FM／酷狗猜你喜欢，下方重排歌单／分组歌曲／榜单／新歌新碟。'
    '新选择和账号撤销迟到播放，待播确认之后仍检查；酷狗公开歌单订阅原创建者，未知回执核对不自动重复。Beta191文件2103通过／2条件跳过、Stable63、导航55、分析0及32张已查看主机图；旧日推行／旧首页顺序断言首轮失败与整文件复跑保留、不累加。'
    '实际原证书双ARM／定制引擎／7shader／57全部12非app原生库／DEX三类五方法十二字段JNI及APK八条说明另验；FSS164、网络媒体35、Rust136／6外网忽略和SDK563仅相应同输入继承。'
    '原106冻结物、签名／锁／全部历史脏改动、beta/b6bcd542和空暂存保持，新APK／完整源码另存。未手机／ADB／真实账号／VPN／后台／提交推送发布，不接管旧Gitee，不外推旧设备授权或56同code77覆盖。'
    '官版指定版本静态结构不冒充当前账号首页完整顺序；匿名酷狗歌单详情20028拒绝，真实详情／收藏评论分享及78→79覆盖／冷恢复／网络／图片／播放／GPU仍待验。QQ微信原生接入、酷狗累计及日周月入账、旧密钥失效／旧密文及网易云历史总时长／十月683分10秒仍未解决，58不改听歌上报、不重放旧日志。'
    '新接续先只读核对后等待，不自动同步清理测试构建发布；下方保留历史时点。**\n\n')
agents.write_bytes(prefix.encode('utf-8') + old)
print(json.dumps({'finalDocsPrepared': True, 'protectedOldArtifacts': 106, 'buildInputsVerified': len(inputs['files']), 'phoneAccess': False}, indent=2))
