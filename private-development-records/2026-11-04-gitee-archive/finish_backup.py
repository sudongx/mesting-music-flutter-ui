"""Finish the authorized remote configuration and retain an auditable handoff.

No checkout, reset, stash or normal-index mutation is involved. Existing
source, signing files and frozen deliveries must retain all original bytes.
"""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import os
import subprocess

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-04-gitee-archive'
URL = 'https://gitee.com/Mesting42/mesting-music-flutter.git'
ENV = dict(os.environ, GIT_OPTIONAL_LOCKS='0', GIT_TERMINAL_PROMPT='0', GCM_INTERACTIVE='never')


def read(path):
    return json.loads(Path(path).read_text('utf-8-sig'))


def digest(path):
    with Path(path).open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args):
    result = subprocess.run(['git', '--no-optional-locks', *args], cwd=ROOT,
                            env=ENV, capture_output=True)
    if result.returncode:
        raise RuntimeError(result.stderr.decode('utf-8', 'replace')[:2400])
    return result.stdout


before = read(OUT / 'workspace-before.json')
plan = read(OUT / 'prepared-backup.json')
fresh = read(OUT / 'fresh-source-verification.json')
github = read(OUT / 'github-unchanged-verification.json')
assert fresh['tagCount'] == 71 and fresh['fullStrictFsckPassed']
assert github['allHeadsUnchanged'] and github['allTagsUnchanged'] and github['allReleaseContentAndAssetsUnchanged']
assert git('rev-parse', 'HEAD').decode().strip() == before['head']
assert git('branch', '--show-current').decode().strip() == before['branch']
assert not git('diff', '--cached', '--name-only').strip()
assert digest(before['indexPath']) == before['indexSha256']
for item in before['files']:
    assert (ROOT / item['path']).is_file() and digest(ROOT / item['path']) == item['sha256'], item['path']
for item in before['frozen']:
    assert Path(item['path']).stat().st_size == item['bytes'] and digest(item['path']) == item['sha256'], item['path']
assert len(before['frozen']) == 94
assert digest(ROOT / 'pubspec.lock') == before['lockSha256']
assert digest(ROOT / '.codex-artifacts/2026-10-26-beta17-signing/debug.keystore') == before['signingSha256']
origin_lines = [line for line in git('remote', '-v').decode().splitlines() if line.startswith('origin\t')]
assert '\n'.join(origin_lines) + '\n' == before['remotes']
remotes = git('remote').decode().splitlines()
if 'gitee' in remotes:
    assert git('remote', 'get-url', 'gitee').decode().strip() == URL
else:
    git('remote', 'add', 'gitee', URL)
# Bring back the main tracking ref without importing tags or moving beta/HEAD.
fetch = git('-c', 'credential.username=Mesting42', '-c', 'gc.auto=0',
            '-c', 'maintenance.auto=false', 'fetch', '--no-tags', 'gitee',
            'refs/heads/main:refs/remotes/gitee/main')
assert git('rev-parse', 'refs/remotes/gitee/main').decode().strip() == plan['mainCommit']
assert git('rev-parse', 'HEAD').decode().strip() == before['head']
assert digest(before['indexPath']) == before['indexSha256']
record = {'completedAtUtc': datetime.now(timezone.utc).isoformat(),
          'giteeUrl': plan['giteeUrl'], 'visibility': 'private', 'versionCount': 71,
          'branch': 'main', 'mainCommit': plan['mainCommit'], 'tagCount': 71,
          'existingGitHubTagsPreservedInGitee': 69, 'newFrozenLocalVersions': ['1.0.50', '1.0.51'],
          'sourceEntriesVerified': fresh['sourceEntriesAcrossVersionsVerified'],
          'descriptionsInVersionDocuments': 71, 'nativeGiteeReleasePagesCreated': False,
          'originalGitHubAttachmentLinks': 685, 'attachmentsUploaded': False,
          'githubAllRefsReleaseContentAndAssetsUnchanged': True,
          'githubReleaseCount': github['releaseCount'], 'githubAssetCount': github['assetCount'],
          'originalWorkingFilesUnchanged': len(before['files']), 'frozenArtifactsUnchanged': 94,
          'headUnchanged': before['head'], 'branchUnchanged': before['branch'],
          'primaryIndexUnchanged': True, 'signingAndDependencyLockUnchanged': True,
          'staged': [], 'originUnchanged': True, 'giteeRemoteAdded': True,
          'giteeMainTrackingRefFetchedWithoutTags': True,
          'phoneAccess': False, 'realMusicAccountAccess': False, 'musicBackendPublished': False}
handoff = ROOT / 'HANDOFF-GITEE-BACKUP-2026-11-04.md'
assert not handoff.exists(), 'Do not overwrite an existing handoff'
handoff.write_text(f'''# Gitee 私有源码备份完成交接

日期：2026-11-04，Asia/Shanghai。用户逐项确认范围、私有可见性、附件保留原位置及最终执行方案。GitHub 原仓库与本机产品工作区保持原样，Gitee 是独立的源码副本。

- [Gitee 私有仓库]({plan['giteeUrl']})，默认 `main`，当前提交 `{plan['mainCommit']}`。
- [71 个版本目录]({plan['giteeUrl']}/blob/main/docs/gitee-versions.md)，每版另有原发行说明和原附件链接。
- 范围：早期 Beta.1～Beta.21，以及新版 1.0.1～1.0.51，共71版。1.0.38只有本系列私有候选，没有正式冻结版，未创建该标签。旧稳定版、Java/MySQL独立测试与私有候选未建立备份标签；既有提交所需祖先历史随 Git 保留。
- 69个旧标签保留 GitHub 原始标签、提交和树对象；50/51分别由各自原冻结ZIP建立独立注释标签与提交，未用今天的工作树倒填历史。
- Gitee 的 `main` 在51冻结源码之上增加导航和说明；50/51标签本身包含原ZIP全部文件，分别2362/2423项，内容逐字节核验。
- 平台发行版页面未另建；71版说明保存为 `docs/gitee-release-notes/<tag>.md`，由版本目录访问。685个原附件链接保留，附件仍位于GitHub；50/51原APK及冻结ZIP仍只保留本地，本轮未上传或重新发布。

## 验证

从Gitee进行独立网络裸克隆，完整严格 `git fsck --full --strict` 通过。唯一主分支及71个标签与允许清单完全相符；跨71版111089个源码条目的树身份核对通过，50/51另与原冻结ZIP逐项SHA-256核对。{fresh['generatedDocumentationFilesVerified']}份新增导航/目录/每版说明文件内容核对。

GitHub全量回读：两分支、94标签、73发行版和724附件的引用/正文/文件信息与备份前一致。未对GitHub发起任何写操作。未访问手机/ADB、真实音乐账号或音乐业务后台，不改变原测试/设备验收边界。

本机保留原beta/HEAD `{before['head']}`、原索引和空暂存、{len(before['files'])}份原工作文件与94份冻结APK/ZIP、签名与依赖锁。仅新增本文、`gitee`远端及 `refs/remotes/gitee/main` 跟踪引用；`origin`仍为GitHub。50/51新标签创建在隔离备份Git库与Gitee中，未强行挪动主工作区分支或向GitHub补推。

## Git 和两个远端

Git 是本地版本管理工具；GitHub 和 Gitee 是托管 Git 仓库的平台。`origin` 与 `gitee` 是两个独立目的地，向其中一个推送不会自动同步另一个。发行版附件不是普通Git对象，也不会随 `git push` 自动复制。

当前主工作区仍故意停在旧beta提交并保留1.0.51等脏改动，不能直接reset/pull/checkout覆盖。以后需同步新的冻结版本时，按对应版本源码及明确目的地建立提交/标签，不运行 `push --mirror`、强推或通配标签来混入旧稳定系列。

私有证据：`.codex-artifacts/2026-11-04-gitee-archive/` 的 `prepared-backup.json`、`push-final.json`、`fresh-source-verification.json`、`github-unchanged-verification.json`、`delivery-final.json`。凭据仅使用既有安全存储，不写入日志、源码或附件。
''', 'utf-8')
(OUT / 'delivery-final.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
(OUT / 'git-status-final.txt').write_bytes(git('-c', 'core.quotepath=false', 'status', '--porcelain=v1', '--untracked-files=all'))
print(json.dumps(record, ensure_ascii=True, indent=2), flush=True)
