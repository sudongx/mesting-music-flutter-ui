"""Build exact frozen trees using alternate indexes; preserve working code bytes."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import zipfile

from common import ROOT, OUT, BASELINE, ARCHIVE_DOC, git, read_json, save, sha, safe_path, tree_files
from continuation_docs import prepare, DOC_OVERRIDES, HANDOFF, CONTINUE_HISTORY


def hash_paths(files):
    paths = ''.join(json.dumps(p.as_posix(), ensure_ascii=False)+'\n' for p in files).encode('utf-8')
    return git('hash-object', '-w', '--no-filters', '--stdin-paths', data=paths).decode().splitlines()


def create_commit(files, label, parent, modes):
    names = sorted(files)
    for name in names:
        safe_path(name)
    oids = hash_paths([files[name] for name in names])
    assert len(oids) == len(names)
    index = OUT/f'index-{label}'
    assert not index.exists()
    env = {'GIT_INDEX_FILE': str(index)}
    git('read-tree', '--empty', env=env)
    records = b''.join(f"{modes.get(name, ('100644', ''))[0]} {oid}\t{name}".encode('utf-8')+b'\0'
        for name, oid in zip(names, oids))
    git('update-index', '-z', '--index-info', data=records, env=env)
    tree = git('write-tree', env=env).decode().strip()
    message = f'archive: preserve Mesting Music {label}\n\nVerified original frozen source bytes; additive archive documentation only.\n'
    commit = git('commit-tree', tree, '-p', parent, data=message.encode()).decode().strip()
    actual = tree_files(commit)
    assert set(actual) == set(files)
    assert all(actual[name][1] == oid for name, oid in zip(names, oids))
    return commit, tree


def provenance(rows, current=None, complete=False):
    state = '五版Git与GitHub归档已完成。' if complete else '归档提交已从原始交付准备；远端发布状态以实际标签、Release及最终验收记录为准。'
    title = f"Mesting Music {current['version']} 冻结源码归档" if current else 'Mesting Music 1.0.6～1.0.10 Git / GitHub 归档'
    text = f'# {title}\n\n日期：2026-10-28（Asia/Shanghai）。{state}\n\n'
    text += '用户确认逐版补齐提交、标签和正式Release，将beta推进到最新源码，保留main与旧历史。提交创建于本次，不回填开发日期；原APK／源码ZIP未重新编译、签名或压缩。\n\n'
    text += '| 版本 / code | 固定标签 | 原始源码文件数 | APK SHA-256 | 原始ZIP SHA-256 |\n| --- | --- | --- | --- | --- |\n'
    for row in rows:
        text += f"| {row['version']} / {row['code']} | `{row['tag']}` | {row['sourceFiles']} | `{row['apkSha256']}` | `{row['sourceHash']}` |\n"
    text += '\n每个标签的运行源码、素材、依赖锁、测试和构建入口都来自该版冻结ZIP，逐文件核验SHA-256。标签仅追加截至该版的来源清单和本说明。GitHub自动生成的源码包与原始ZIP附件不同，原始ZIP附件保持交付摘要。\n\n'
    text += '冻结文档中的未提交／未推送或v1.0.5基线描述当时状态；此轮归档不改写原记录。beta分支在v1.0.10标签之后追加跨电脑接续和索引文档，产品代码不变。\n\n'
    text += '五版均是正式发布，内部beta包名用于升级兼容；原签名与Mesting Music显示名保持。源码包含原授权SDK及原LICENSE／第三方声明，SDK分享关闭。私钥、管理凭据、真实账号记录、机器配置和缓存不进入Git或Release。SDK中既有tiny_http公开示例证书／密钥仅保留原上游测试夹具字节，与应用签名无关。\n\n'
    text += '本次只归档，不重跑历史产品测试、不操作手机、不改变music后台。真实设备体验、覆盖升级、持续120fps和官版统计入账的既有待验证边界继续保持。\n\n'
    text += '最终维护入口：[跨电脑接续](../../'+HANDOFF+')；历史1.0.3～1.0.5记录见[前次归档](RELEASE-BACKFILL-2026-10-28.md)。\n'
    return text.encode('utf-8')


def main():
    assert git('rev-parse', 'HEAD').decode().strip() == BASELINE
    assert not git('diff', '--cached', '--name-only').strip()
    rows = read_json(OUT/'verified-deliveries.json')
    before = read_json(OUT/'working-files-before.json')
    assert all(sha(ROOT/name) == value for name, value in before.items())
    modes = tree_files(BASELINE)
    parent = BASELINE
    for index, row in enumerate(rows):
        assert sha(ROOT/row['zip']) == row['sourceHash']
        extraction = OUT/'snapshots'/row['tag']
        assert not extraction.exists()
        files = {}
        with zipfile.ZipFile(ROOT/row['zip']) as archive:
            snapshot = json.loads(archive.read('SOURCE-SNAPSHOT.json'))
            for item in snapshot['files']:
                name = item['path']
                safe_path(name)
                data = archive.read(name)
                assert hashlib.sha256(data).hexdigest().lower() == item['sha256'].lower()
                target = extraction/name
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(data)
                files[name] = target
        for prior in rows[:index+1]:
            target = ROOT/prior['manifest']
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes((OUT/f"{prior['tag']}-source-manifest.json").read_bytes())
            files[prior['manifest']] = target
        proof = OUT/'assets'/row['tag']/'archive-provenance.md'
        proof.parent.mkdir(parents=True, exist_ok=True)
        proof.write_bytes(provenance(rows[:index+1], row))
        files[ARCHIVE_DOC] = proof
        commit, tree = create_commit(files, row['version'], parent, modes)
        row.update({'commit':commit,'tree':tree,'parent':parent,'gitFiles':len(files),
            'archiveAdditions':sorted(set(files)-{x['path'] for x in snapshot['files']})})
        parent = commit
        print(f"Prepared {row['tag']}: {commit}; {row['sourceFiles']} frozen files retained", flush=True)
    assert all(sha(ROOT/name) == value for name, value in before.items())
    prepare(rows, complete=False)
    (ROOT/ARCHIVE_DOC).write_bytes(provenance(rows))
    names = sorted(set(filter(None,git('ls-files','--cached','--others','--exclude-standard','-z').decode('utf-8').split('\0'))))
    files = {name: ROOT/name for name in names}
    changed = {name for name,value in before.items() if sha(ROOT/name) != value}
    assert changed <= DOC_OVERRIDES, sorted(changed-DOC_OVERRIDES)
    added = set(names)-set(before)
    allowed_added = {x['manifest'] for x in rows}|{ARCHIVE_DOC,HANDOFF,CONTINUE_HISTORY}
    assert added == allowed_added, sorted(added^allowed_added)
    commit, tree = create_commit(files, '1.0.10-continuation', parent, modes)
    save(OUT/'archive-commits.json', {'baseline':BASELINE,'branch':'beta','commits':rows,
        'releaseCommit':parent,'finalCommit':commit,'continuationTree':tree,
        'documentationOverrides':sorted(changed),'documentationAdditions':sorted(added),
        'originalRuntimeSourceUnchanged':True})
    save(OUT/'working-files-before-push.json', {name:sha(path) for name,path in files.items()})
    print(f'Prepared beta continuation: {commit}; product code matches frozen 1.0.10', flush=True)


if __name__ == '__main__':
    main()
