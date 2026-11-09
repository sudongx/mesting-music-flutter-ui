"""Prepare selected history in an isolated Git database, preserving the live tree.

GitHub is read-only input. Existing 69 tags keep their original Git objects;
the two later versions are imported from their immutable delivery ZIPs. Only
an explicit allow-list of refs will be pushed by the separate publish step.
"""
from pathlib import Path, PurePosixPath
from datetime import datetime, timezone
import hashlib
import json
import os
import re
import subprocess
import tarfile
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-04-gitee-archive'
BARE = OUT / 'repository.git'
GITEE = 'https://gitee.com/Mesting42/mesting-music-flutter'
GITHUB = 'https://github.com/Mesting42/mesting-music-flutter'
ENV = dict(os.environ, GIT_OPTIONAL_LOCKS='0', GIT_TERMINAL_PROMPT='0', GCM_INTERACTIVE='never')


def read(path):
    return json.loads(Path(path).read_text('utf-8-sig'))


def save(path, value):
    """Keep resumable receipts out of both repositories."""
    path = Path(path)
    temp = path.with_suffix(path.suffix + '.writing')
    temp.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', 'utf-8')
    temp.replace(path)


def digest(path):
    with Path(path).open('rb') as stream:
        return hashlib.file_digest(stream, 'sha256').hexdigest()


def git(*args, data=None, env=None):
    """No command changes the primary checkout, its index, or its branch refs."""
    actual = dict(ENV, **(env or {}))
    result = subprocess.run(['git', '--git-dir=' + str(BARE), *map(str, args)],
                            input=data, capture_output=True, env=actual)
    if result.returncode:
        raise RuntimeError(result.stderr.decode('utf-8', 'replace')[:3000])
    return result.stdout


def safe(name):
    """Reject build caches, signing files and APKs; native engine sources stay."""
    p = PurePosixPath(name)
    assert not p.is_absolute() and '..' not in p.parts and '\\' not in name, name
    assert not {v.lower() for v in p.parts}.intersection({
        '.git', '.codex-artifacts', '.codex-backups', '.dart_tool', '.gradle',
        '.kotlin', 'build', 'node_modules', '.firecrawl'}), name
    assert p.suffix.lower() not in {'.apk', '.aab', '.keystore', '.jks', '.p12', '.pfx'}, name
    assert p.suffix.lower() != '.zip' or name == 'test/support/release_notes_apk_fixture.zip', name
    assert p.name.lower() not in {'key.properties', 'local.properties', 'credentials.json', 'token.json'}, name
    assert not p.name.lower().startswith('.env') or p.name.lower() in {'.env.example', '.env.sample'}, name


def entries(commit):
    result = {}
    for row in git('ls-tree', '-rz', commit).split(b'\0'):
        if not row:
            continue
        meta, path = row.split(b'\t', 1)
        mode, kind, oid = meta.decode().split()
        assert kind == 'blob'
        result[path.decode('utf-8')] = {'mode': mode, 'oid': oid}
    return result


def write_blobs(values):
    """Batch hashing avoids a shell/process launch per source file."""
    folder = OUT / 'blob-files'
    folder.mkdir(exist_ok=True)
    checks = {name: hashlib.sha256(value).hexdigest() for name, value in values.items()}
    unique = {}
    for name, checksum in checks.items():
        if checksum in unique:
            continue
        target = folder / checksum
        if not target.exists():
            target.write_bytes(values[name])
        else:
            assert digest(target) == checksum
        unique[checksum] = target
    names = list(unique)
    paths = ''.join(unique[n].as_posix() + '\n' for n in names).encode()
    oids = git('hash-object', '-w', '--no-filters', '--stdin-paths', data=paths).decode().splitlines()
    assert len(oids) == len(names)
    by_hash = dict(zip(names, oids))
    return {name: by_hash[checksum] for name, checksum in checks.items()}


def commit_tree(files, parent, label, message):
    """Use a private index; clean checkout and newline filters are unnecessary."""
    for name in files:
        safe(name)
    index = OUT / ('index-' + label)
    env = {'GIT_INDEX_FILE': str(index)}
    git('read-tree', '--empty', env=env)
    records = b''.join((row['mode'] + ' ' + row['oid'] + '\t' + name).encode('utf-8') + b'\0'
                       for name, row in sorted(files.items()))
    git('update-index', '-z', '--index-info', data=records, env=env)
    tree = git('write-tree', env=env).decode().strip()
    commit = git('-c', 'commit.gpgSign=false', 'commit-tree', tree, '-p', parent,
                 data=(message + '\n').encode('utf-8')).decode().strip()
    assert entries(commit) == files
    return commit, tree


def verify_zip_commit(commit, expected):
    """Compare every imported file against the original frozen ZIP bytes."""
    proc = subprocess.Popen(['git', '--git-dir=' + str(BARE), '-c', 'core.autocrlf=false',
                             'archive', '--format=tar', commit], stdout=subprocess.PIPE,
                            stderr=subprocess.PIPE, env=ENV)
    seen = set()
    with tarfile.open(fileobj=proc.stdout, mode='r|') as archive:
        for item in archive:
            if item.isdir():
                continue
            assert item.isfile() and item.name in expected, item.name
            check = expected[item.name]
            assert item.size == check['size']
            assert hashlib.file_digest(archive.extractfile(item), 'sha256').hexdigest() == check['sha256'], item.name
            seen.add(item.name)
    error = proc.stderr.read()
    assert proc.wait() == 0, error.decode('utf-8', 'replace')
    assert seen == set(expected)
    return len(seen)


def import_delivery(version, parent):
    """Never reconstruct a historical release from today's dirty worktree."""
    tag = 'v' + version
    source = ROOT / f'Mesting-Music-{tag}-source.zip'
    receipt = read(ROOT / f'release/Mesting-Music-{tag}-source-verification.json')
    apk = read(ROOT / f'release/Mesting-Music-{tag}-verification.json')
    assert digest(source) == receipt['sourceZipSha256']
    with zipfile.ZipFile(source) as archive:
        assert archive.testzip() is None
        values = {name: archive.read(name) for name in archive.namelist()}
        assert len(values) == len(archive.namelist())
    manifest = {name: {'size': len(value), 'sha256': hashlib.sha256(value).hexdigest()}
                for name, value in values.items()}
    save(OUT / (tag + '-source-audit.json'), manifest)
    modes = entries(parent)
    blobs = write_blobs(values)
    files = {name: {'oid': oid, 'mode': modes.get(name, {}).get('mode', '100644')}
             for name, oid in blobs.items()}
    existing = git('tag', '--list', tag).decode().strip()
    if existing:
        commit = git('rev-parse', tag + '^{}').decode().strip()
        assert entries(commit) == files
        tree = git('rev-parse', commit + '^{tree}').decode().strip()
    else:
        commit, tree = commit_tree(files, parent, tag,
            f'archive: preserve frozen Mesting Music {version} / code{apk["androidVersionCode"]}\n\n'
            f'Original source ZIP SHA256 {receipt["sourceZipSha256"]}.\n'
            f'Original APK SHA256 {apk["sha256"]}.\n'
            'Gitee-only source backup; GitHub and frozen deliveries remain unchanged.')
        git('-c', 'tag.gpgSign=false', 'tag', '-a', tag, commit, '-m',
            f'Mesting Music {version} / code{apk["androidVersionCode"]}\n\n'
            f'Frozen source ZIP: {receipt["sourceZipSha256"]}\n'
            f'Original local APK: {apk["sha256"]}\n'
            'Only source is backed up here; no APK or private signing material is uploaded.')
    checked = verify_zip_commit(commit, manifest)
    notes = json.loads(values['assets/data/release-notes.json'])['releaseNotes']
    result = {'tag': tag, 'version': version, 'series': '1.0.x', 'code': apk['androidVersionCode'],
              'commit': commit, 'tree': tree, 'parent': parent,
              'tagObject': git('rev-parse', tag).decode().strip(),
              'sourceOrigin': 'original_frozen_local_zip', 'sourceZipSha256': receipt['sourceZipSha256'],
              'apkSha256': apk['sha256'], 'sourceEntriesVerified': checked,
              'githubRelease': None, 'attachments': [], 'notes': notes,
              'originalApkLocation': 'local_only', 'apkUploadedToGitee': False}
    print(json.dumps({'prepared': tag, 'verifiedSourceEntries': checked}), flush=True)
    return result


def make_notes(row):
    """All original descriptions and immutable asset links remain reviewable."""
    tag = row['tag']
    result = [f'# Mesting Music {row["version"]}', '',
              f'[本版源码]({GITEE}/tree/{tag}) · [全部版本](../gitee-versions.md)', '',
              f'源码提交：`{row["commit"]}`。', '']
    if row['githubRelease']:
        result += [f'[原 GitHub 发行说明与附件]({row["githubRelease"]})，原文件保留在 GitHub。', '',
                   '## 原发行说明', '',
                   '以下正文保留原始内容；其中相对链接可在原 GitHub 发行说明中打开。', '',
                   row['body'].strip(), '', '## 原附件', '',
                   '| 文件 | 字节 | 下载 |', '| --- | ---: | --- |']
        for asset in row['attachments']:
            result.append(f'| `{asset["name"]}` | {asset["size"]} | [GitHub 原文件]({asset["url"]}) |')
    else:
        result += ['本版原 APK 与冻结源码 ZIP 仍保留本地，本轮未上传到 GitHub 或 Gitee。', '',
                   f'APK SHA-256：`{row["apkSha256"]}`。', '',
                   f'原始源码 ZIP SHA-256：`{row["sourceZipSha256"]}`。', '',
                   '## 更新说明', '']
        result += [f'- {line}' for line in row['notes']]
        result += ['', '实际 APK 的签名和主机验证可在本标签的 release、docs 目录查看。',
                   '真实设备及账号验收仍按该版本原文边界保留。']
    return '\n'.join(result) + '\n'


def prepare():
    assert not read(OUT / 'history-path-audit.json')['forbiddenPathOccurrences']
    before = read(OUT / 'github-before.json')
    remote = {x['ref'].removeprefix('refs/tags/'): x['object']['sha'] for x in before['tags']}
    releases = {x['tag_name']: x for x in before['releases']}
    git('config', 'user.name', 'Mesting42')
    git('config', 'user.email', '17777580+mesting42@user.noreply.gitee.com')
    git('config', 'gc.auto', '0')
    git('config', 'core.autocrlf', 'false')
    rows = []
    wanted = [('v1.0.37-beta.' + str(i), 'Beta.' + str(i), 'early_beta') for i in range(1, 22)]
    wanted += [('v1.0.' + str(i), '1.0.' + str(i), '1.0.x') for i in range(1, 50) if i != 38]
    for tag, version, series in wanted:
        assert git('rev-parse', tag).decode().strip() == remote[tag], tag
        release = releases[tag]
        commit = git('rev-parse', tag + '^{}').decode().strip()
        tree = git('rev-parse', tag + '^{tree}').decode().strip()
        files = entries(commit)
        for name in files:
            safe(name)
        rows.append({'tag': tag, 'version': version, 'series': series, 'commit': commit, 'tree': tree,
                     'tagObject': remote[tag], 'sourceOrigin': 'existing_github_tag',
                     'sourceEntries': len(files), 'githubRelease': release['html_url'],
                     'name': release['name'], 'body': release['body'] or '',
                     'originalReleasePrerelease': release['prerelease'],
                     'attachments': [{'name': a['name'], 'size': a['size'],
                                      'url': a['browser_download_url'], 'digest': a.get('digest')}
                                     for a in release['assets']]})
    parent = next(x['commit'] for x in rows if x['tag'] == 'v1.0.49')
    for version in ['1.0.50', '1.0.51']:
        row = import_delivery(version, parent)
        rows.append(row)
        parent = row['commit']
    assert len(rows) == 71 and len({r['tag'] for r in rows}) == 71
    generated = {}
    for row in rows:
        generated['docs/gitee-release-notes/' + row['tag'] + '.md'] = make_notes(row).encode('utf-8')
    catalogue = ['# Mesting Music 版本源码与附件索引', '',
                 '本仓库为仅仓库成员可见的 Gitee 私有源码备份。共 71 个版本；GitHub 原仓库、标签、发行版及附件保持原样。', '',
                 '备份范围为早期 Beta.1～Beta.21 与新版 1.0.1～1.0.51；排除旧稳定版、Java/MySQL 独立测试与未公开私有候选。', '',
                 '1.0.38 只有本系列私有候选，没有对应正式冻结源码，因此不创建该标签。', '',
                 '受 Gitee 附件配额限制，已有安装包/原源码 ZIP 由下方 GitHub 原地址下载；50/51 的原 APK 与 ZIP 仍仅本地保存。', '',
                 'Gitee 可按标签浏览或下载相应源码；平台生成的源码压缩包与原冻结 ZIP 的容器字节可能不同。', '']
    for title, series in [('新版 1.0.x', '1.0.x'), ('早期 Beta', 'early_beta')]:
        catalogue += ['## ' + title, '', '| 版本 | 源码 | 说明与附件 |', '| --- | --- | --- |']
        subset = [r for r in rows if r['series'] == series]
        for row in reversed(subset):
            tag = row['tag']
            catalogue.append(f'| {row["version"]} | [{tag}]({GITEE}/tree/{tag}) | [本版说明](gitee-release-notes/{tag}.md) |')
        catalogue.append('')
    generated['docs/gitee-versions.md'] = ('\n'.join(catalogue) + '\n').encode('utf-8')
    generated['docs/apk-downloads.md'] = ('# 下载与源码\n\n[查看全部 71 个版本及原附件入口](gitee-versions.md)。\n').encode('utf-8')
    public_rows = [{k: v for k, v in row.items() if k not in {'body', 'notes'}} for row in rows]
    generated['docs/gitee-versions.json'] = (json.dumps({
        'versionCount': 71, 'latestTag': 'v1.0.51', 'private': True,
        'githubUnchanged': True, 'giteeApkUploads': False, 'versions': public_rows},
        ensure_ascii=False, indent=2) + '\n').encode('utf-8')
    generated['README.md'] = f'''# Mesting Music — 私有源码备份

当前产品源码：**1.0.51 / Android code72**，应用包名 `com.mesting.music`。

[全部 71 个版本、说明与附件入口](docs/gitee-versions.md) · [1.0.51 源码]({GITEE}/tree/v1.0.51) · [1.0.51 安装验收](docs/INSTALL-v1.0.51.md)

这是 Mesting42 的 Gitee 私有源码副本，GitHub 原仓库、版本、标签和附件全部保留。

- 早期 Beta.1～Beta.21：21 个原始标签。
- 新版 1.0.1～1.0.51：50 个版本，1.0.38 私有候选不在公开正式归档范围。
- 69 个既有标签保留 GitHub 原提交与标签对象；50/51 各自由其原冻结 ZIP 建立源码提交和标签。
- 本轮备份源码、标签及说明，不向 Gitee 上传 APK 或冻结 ZIP。旧附件仍从 GitHub 原地址下载，50/51 原包继续保留本地。
- 当前主分支在 1.0.51 冻结源码之上补充本备份导航；`v1.0.50`、`v1.0.51` 标签与各自冻结 ZIP 文件内容逐项相同。

## Git、GitHub 与 Gitee

Git 是本地版本管理工具；GitHub 和 Gitee 是托管 Git 仓库的平台。同一份本地项目可以配置多个远端：本项目 `origin` 仍指向 GitHub，新增 `gitee` 指向本私有仓库。向其中一个推送不会自动同步另一个，删除其中一个仓库也不会自动删除另一个。

Git 标签和源码由 Git 推送；GitHub/Gitee 的发行说明页面、附件、Issues 等属于平台数据，需要另外处理。本副本通过 [版本目录](docs/gitee-versions.md) 保留各版原说明与附件链接。

## 验收边界

主机测试、原始 APK 校验及设备/账号尚未验收事项以各标签交接文档为准。源码备份不会替代手机安装、真实账号或后台验证；签名私钥、密码、设备私有证据和构建缓存均不包含在本备份中。
'''.encode('utf-8')
    files = entries(parent)
    blobs = write_blobs(generated)
    for name, oid in blobs.items():
        files[name] = {'mode': files.get(name, {}).get('mode', '100644'), 'oid': oid}
    main, tree = commit_tree(files, parent, 'backup-navigation',
        'docs: index 71 selected Mesting Music source versions for private Gitee backup\n\n'
        'GitHub remains unchanged. APK/ZIP attachments stay at their existing locations.')
    git('update-ref', 'refs/heads/main', main)
    git('symbolic-ref', 'HEAD', 'refs/heads/main')
    refs = {'refs/heads/main': main}
    refs.update({'refs/tags/' + row['tag']: row['tagObject'] for row in rows})
    assert len(refs) == 72
    result = {'preparedAtUtc': datetime.now(timezone.utc).isoformat(), 'giteeUrl': GITEE,
              'private': True, 'versionCount': 71, 'originalGitHubTagCount': 69,
              'newLocalTagCount': 2, 'nativeGiteeReleasesCreated': False,
              'versionDescriptionsStoredInDocs': 71, 'latestTag': 'v1.0.51',
              'mainCommit': main, 'mainTree': tree, 'refsToPush': refs,
              'originalAttachmentCount': sum(len(r['attachments']) for r in rows),
              'originalAttachmentBytes': sum(a['size'] for r in rows for a in r['attachments']),
              'attachmentsUploaded': False, 'githubMutations': False,
              'sourceFileEntriesAcrossVersions': sum(r.get('sourceEntries', r.get('sourceEntriesVerified', 0)) for r in rows),
              'versions': public_rows,
              'generatedDocumentation': {n: hashlib.sha256(v).hexdigest() for n, v in generated.items()}}
    save(OUT / 'prepared-backup.json', result)
    print(json.dumps({k: v for k, v in result.items() if k not in {
        'refsToPush', 'versions', 'generatedDocumentation'}}, ensure_ascii=True, indent=2), flush=True)


if __name__ == '__main__':
    prepare()
