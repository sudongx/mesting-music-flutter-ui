"""Finish external checksums and post-freeze handoff; never alter frozen payloads."""
from pathlib import Path
import hashlib
import json
import subprocess
import zipfile

root = Path('D:/AnLi')
out = Path(__file__).resolve().parent
apk = json.loads((root / 'release/Mesting-Music-v1.0.54-verification.json').read_text('utf-8'))
source = json.loads((root / 'release/Mesting-Music-v1.0.54-source-verification.json').read_text('utf-8'))
def digest(path):
    with path.open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()

assert digest(root / 'release' / apk['file']) == apk['sha256']
assert digest(root / source['sourceZipName']) == source['sourceZipSha256']
sha_text = (apk['sha256'] + '  ' + apk['file'] + '\n' +
    source['sourceZipSha256'] + '  ' + source['sourceZipName'] + '\n')
(root / 'release/Mesting-Music-v1.0.54-SHA256.txt').write_text(sha_text, 'utf-8')

before_agents = (out / 'AGENTS-before.md').read_bytes()
current_agents = (root / 'AGENTS.md').read_bytes()
prefix = ('**2026-11-05 本地交付1.0.54/code75：先读[54交接](HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.54.md)、'
    '[安装验收](docs/INSTALL-v1.0.54.md)及[实现](docs/fixes-2026-11-05-v1.0.54.md)。按确认修复挂起读取共享/阶段错误族、'
    'FSS10.3.1本地最小同步提交/命名空间队列、已验证新登录的独立加密恢复与回读；旧库不重置。酷狗Rust实际外网接Android系统HTTP/JNI，'
    '系统DNS/代理/双栈回退/网络代次，缓存及大流保持流式且不隐式重发。保留循环角色/完整玻璃。Beta179文件2009通过/2跳过、Stable63、'
    '导航55、分析0、原生16+13+6、Rust136/6外网忽略及40主机图；SDK563仅历史/242源码同输入。原证书双ARM/定制引擎/7shader/6未变旧库/'
    '2新编译酷狗库/2缓冲库、实际DEX的3类5方法12字段JNI与APK8条说明另验。98旧冻结物及两轮中间候选保留，新APK/2557文件源码另存；'
    '锁仅FSS同版hosted转本地path、原锁副本保留，原签名及全部脏改动/beta/b6bcd542/空暂存保持。未提交推送发布，不接管旧Gitee；'
    '未手机/ADB/真实账号/后台/VPN配置。原设备52/53升级/冷恢复/同VPN同节点开关/网络切换/完整播放/GPU待验收，不能称全部VPN修复。'
    '53的193/720角色帧仅历史同输入主机样本。历史总时长/十月683分10秒仍未解决，旧日志不重发。新接手先只读核对后等待，'
    '不外推设备/账号/发布授权；本前缀写于54源码冻结后，不回填冻结物，下方均保留历史时点。**\r\n\r\n').encode('utf-8')
if current_agents == before_agents:
    (root / 'AGENTS.md').write_bytes(prefix + before_agents)
else:
    assert current_agents == prefix + before_agents, 'Unexpected handoff edit; preserve it for review'

with zipfile.ZipFile(root / source['sourceZipName']) as archive:
    manifest = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
    assert manifest['version'] == '1.0.54' and manifest['androidVersionCode'] == 75
    assert manifest['apkSha256'] == apk['sha256'] and len(manifest['files']) == 2557
    assert archive.read('AGENTS.md') == before_agents
    mismatches = []
    for row in manifest['files']:
        if row['path'] == 'AGENTS.md':
            continue
        if digest(root / row['path']) != row['sha256']:
            mismatches.append(row['path'])
    assert not mismatches, mismatches
subprocess.run(['python', str(out / 'verify_preservation.py')], cwd=root, check=True)
record = {'version': '1.0.54', 'code': 75, 'apk': apk['file'], 'apkBytes': apk['fileSize'], 'apkSha256': apk['sha256'],
    'source': source['sourceZipName'], 'sourceBytes': source['sourceZipSize'], 'sourceSha256': source['sourceZipSha256'],
    'sourceFiles': source['sourceFileCount'], 'protectedFormalArtifacts': 100,
    'frozenSourceMatchesCurrentExceptDocumentedPostFreezeAgentsPrefix': True,
    'oldAgentsBytesPreservedExactly': True, 'allFinalChecksPassed': True,
    'deviceVpnAccountGpuAcceptanceComplete': False, 'uploaded': False, 'published': False}
(out / 'delivery-final.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print(json.dumps(record, ensure_ascii=False, indent=2))
