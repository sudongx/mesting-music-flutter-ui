"""Verify the delivered dirty tree, then append documentation-only handoff.

No product code, frozen delivery, prior receipt, Git ref/index, phone, account,
signing contents or remote service is changed. Never execute this in a receiver
thread: its task is to read the resulting receipt and hash files independently.
"""
from datetime import datetime, timezone
from pathlib import Path
import hashlib
import json
import os
import subprocess

ROOT = Path('D:/AnLi')
OUT = Path(__file__).resolve().parent
PRIOR = ROOT/'.codex-artifacts/2026-11-06-release167/after.json'
HANDOFF = 'HANDOFF-SESSION-2026-11-06-v1.0.67-TO-NEW-CHAT.md'
os.environ['GIT_OPTIONAL_LOCKS'] = '0'
assert not (OUT/'after.json').exists(), 'Do not overwrite an existing handoff receipt'

cache = {}
def digest(path):
    stat = path.stat()
    key = (str(path), stat.st_size, stat.st_mtime_ns)
    if key not in cache:
        with path.open('rb') as stream:
            cache[key] = hashlib.file_digest(stream, 'sha256').hexdigest()
    return cache[key]

def git(*args):
    return subprocess.check_output(['git', '--no-optional-locks', *args], cwd=ROOT)

def record(path):
    return {'path': path.relative_to(ROOT).as_posix(), 'bytes': path.stat().st_size,
            'sha256': digest(path)}

prior = json.loads(PRIOR.read_text('utf-8'))
assert prior['version'] == '1.0.67' and prior['androidVersionCode'] == 88
assert len(prior['frozenArtifacts']) == 74 and len(prior['productFiles']) == 1624
assert prior['installedVersion'] is None
assert git('rev-parse', 'HEAD').decode().strip() == prior['head']
assert git('branch', '--show-current').decode().strip() == prior['branch'] == 'beta'
assert digest(ROOT/'.git/index') == prior['indexSha256']
assert not git('diff', '--cached', '--name-only').strip()
assert digest(ROOT/'pubspec.lock') == prior['lockSha256']
assert digest(ROOT/'.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == prior['signingSha256']
for row in prior['frozenArtifacts']:
    path = ROOT/row['path']
    assert path.stat().st_size == row['bytes'] and digest(path) == row['sha256'], row['path']
for row in [*prior['productFiles'], *prior['sourceFiles']]:
    assert digest(ROOT/row['path']) == row['sha256'], row['path']
assert (ROOT/HANDOFF).is_file()

selected = set(git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0'))
product = {name for name in selected if name and (ROOT/name).is_file()
           and not name.startswith('android/build/')
           and (name.startswith(('lib/', 'android/', 'assets/', 'third_party/', 'tool/'))
                or name in ('pubspec.yaml', 'pubspec.lock'))}
assert product == {row['path'] for row in prior['productFiles']}, 'Unexpected new product paths'
(OUT/'git-status-before.nul').write_bytes(git('status', '--porcelain=v1', '-z'))
(OUT/'prior-release-receipt-sha256.txt').write_text(digest(PRIOR)+'  '+str(PRIOR)+'\n', 'utf-8')

agents = ROOT/'AGENTS.md'
old = agents.read_text('utf-8')
prefix = '''**2026-11-06 本会话总交接优先：先读[67官方媒体与汽水改版总交接](HANDOFF-SESSION-2026-11-06-v1.0.67-TO-NEW-CHAT.md)，按 `.codex-artifacts/2026-11-06-session167-handoff/after.json` 只读接收并报告等待。当前本地主项目1.0.67/code88；用户最后要求仅交付APK，67未安装，手机最后历史66/code87，不自动ADB/账号/播放写入/奖励/后台。66用户扫码/完全重开恢复/网易云自动补源完整播放已验，旧pending不覆盖；手机号路线停止。67仅汽水UI/官方媒体/外部签名及本机CENC、批量/写入读回已实现，“我的→我喜欢的”保持我的选中；Beta2466/2跳过、Stable63、导航55、分析0、CENC主机10及11主机图为已完成结果，不重测相加，匿名60秒不等于本人整曲/下载/真实写入/权益/DSP验收。74冻结物、原签名/锁、1624编译输入、历史脏改、beta/b6bcd542/空暂存保持；本次只追加总交接与入口，不回填67包/ZIP或旧收据。NAS助手另在“汽水自用 Windows／NAS 签名助手”会话，自报第一版/33本地测试及独立分支推送完成，Docker/Wine/NAS/外网仍待验且未部署；主会话未复核该仓库，不混同主项目未推送状态，不接管另会话。63源码ZIP未补，旧51回收APK不恢复，旧日志不补发。没有主项目挂起编码构建上传安装任务，未Git同步清理提交推送上传发布。下方保留历史时点。**

'''
assert not old.startswith('**2026-11-06 本会话总交接优先：先读[67')
agents.write_text(prefix+old, 'utf-8')

selected = sorted(set(git('ls-files', '--cached', '--others', '--exclude-standard', '-z').decode('utf-8').split('\0')))
current = [record(ROOT/name) for name in selected if name and (ROOT/name).is_file()
           and not name.startswith('android/build/')]
deleted = [name for name in selected if name and not (ROOT/name).exists()]
status = git('status', '--porcelain=v1', '-z')
(OUT/'git-status-after.nul').write_bytes(status)
assert digest(ROOT/'.git/index') == prior['indexSha256']
assert digest(PRIOR) == (OUT/'prior-release-receipt-sha256.txt').read_text('utf-8').split()[0]

helper = {'checkedAtUtc': datetime.now(timezone.utc).isoformat(),
    'threadId': '01a1b026-e56b-7c60-9684-62d7494a6b70', 'hostId': 'local',
    'title': '汽水自用 Windows／NAS 签名助手', 'status': 'idle',
    'directory': 'C:/Users/zyt/Documents/Codex/2026-11-06/mesting-qishui-signer',
    'reportedFirstVersionCompleted': True, 'reportedBranch': 'codex/qishui-signer',
    'reportedCommit': 'c195d18', 'reportedPushed': True, 'reportedLocalTestsPassed': 33,
    'reportedAnonymousOfficialMediaResponse': True, 'reportedRealAccountFullPlaybackAccepted': False,
    'reportedNasOrDockerWineOrExternalNetworkValidated': False, 'reportedDeployed': False,
    'independentlyVerifiedByMainThread': False}
(OUT/'helper-thread-status.json').write_text(json.dumps(helper, ensure_ascii=False, indent=2)+'\n', 'utf-8')

after = {**{key: prior[key] for key in ('version', 'androidVersionCode', 'head', 'branch',
            'indexSha256', 'indexEmpty', 'lockSha256', 'signingSha256', 'frozenArtifacts',
            'productFiles', 'hostChecks')},
    'recordedAtUtc': datetime.now(timezone.utc).isoformat(), 'phase': 'session handoff',
    'priorReleaseReceipt': str(PRIOR.relative_to(ROOT)), 'priorReleaseReceiptSha256': digest(PRIOR),
    'frozenArtifactsChecked': 74, 'frozenArtifactIssues': [],
    'productInputsChecked': 1624, 'differencesFrom67BuildInputs': [],
    'frozen67SourceFilesCheckedBeforeAppend': len(prior['sourceFiles']),
    'frozen67SourceZipUnchanged': True, 'postFreezeExpectedSourceDifferences': ['AGENTS.md'],
    'handoffDocument': HANDOFF, 'handoffSha256': digest(ROOT/HANDOFF),
    'agentInstructionsSha256': digest(agents), 'currentFiles': current,
    'currentFileCount': len(current), 'historicalDeletedPathsKept': deleted,
    'gitStatusSha256': hashlib.sha256(status).hexdigest(),
    'documentationOnlyChanges': [HANDOFF, 'AGENTS.md'],
    'installed67': False, 'lastHistoricalDeviceVersion': '1.0.66', 'lastHistoricalDeviceCode': 87,
    'latestDeviceInstruction': 'APK delivery only; no automatic phone continuation',
    'prior66QrAccountAndColdRestoreUserAccepted': True,
    'prior66NetEaseAutoSourceUserAccepted': True, 'soda67RealBusinessAccepted': False,
    'helperThreadStatusIsReportedOnly': helper,
    'pendingMainProjectCodingBuildUploadOrInstallTasks': False,
    'productEditedOrRetestedOrRebuiltForHandoff': False,
    'deviceOrAccountAccessForHandoff': False,
    'gitCommitted': False, 'gitPushed': False, 'uploaded': False, 'published': False,
    'receiverInstruction': 'Independently verify read-only, summarize completed/open/cautions, then wait for user'}
(OUT/'after.json').write_text(json.dumps(after, ensure_ascii=False, indent=2)+'\n', 'utf-8')
print(json.dumps({'version': after['version'], 'code': after['androidVersionCode'],
    'frozenArtifactsVerified': 74, 'productInputsVerified': 1624,
    'frozenSourceFilesVerifiedBeforeAppend': len(prior['sourceFiles']),
    'currentFilesRecorded': len(current), 'documentationOnly': True,
    'phoneAccess': False, 'gitIndexUnchanged': True}, ensure_ascii=False))
