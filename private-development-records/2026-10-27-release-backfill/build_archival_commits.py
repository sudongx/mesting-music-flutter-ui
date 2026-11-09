"""Create verified trees with alternate indexes; never check out old app code.

The original workspace bytes remain in place. Historical trees come only from
their frozen ZIPs, plus additive archive documents. The final tree is the current
reviewed workspace; runtime/source deltas against its ZIP are forbidden.
"""
from __future__ import annotations

import hashlib
import os
from pathlib import Path
import zipfile

from archive_common import ARTIFACTS, BASELINE, ROOT, digest, git, json_bytes, read_json, safe_source_path

PROVENANCE = "docs/version-archive/RELEASE-BACKFILL-2026-10-27.md"
LATEST_DOC_OVERRIDES = {
    "AGENTS.md", "BETA_ARCHIVE.md", "docs/CONTINUE-BETA.md",
    "docs/SESSION-HANDOFF-2026-10-27-v1.0.2.md",
}


def files_in_tree(commit):
    result = {}
    for item in git("ls-tree", "-rz", commit).split(b"\0"):
        if item:
            meta, name = item.split(b"\t", 1)
            mode, kind, object_id = meta.decode().split()
            assert kind == "blob"
            result[name.decode()] = (mode, object_id)
    return result


def object_ids(paths):
    # Git reads paths itself in one process, preserving original line endings.
    lines = b"".join(json_bytes(str(path.as_posix())).strip() + b"\n" for path in paths)
    return git("hash-object", "-w", "--no-filters", "--stdin-paths", data=lines).decode().splitlines()


def historical_provenance(rows, current):
    lines = [
        f"# Mesting Music {current['version']} 的后续 Git 归档说明",
        "", "日期：2026-10-27（Asia/Shanghai）。用户已确认补推尚未归档的交付版本。",
        "本树从对应原始源码 ZIP 建立，增加截至该版的来源清单与本文；原运行代码和历史文档字节保持。",
        "原文中的未提交/未推送记录描述冻结交付时状态，后续归档并不改写该历史事实。",
        "提交创建于本次归档，不回填旧开发日期；原 APK/ZIP 未重编译、重签或重打包。", "",
        "| 已归档版本 | 固定标签 | 原始条目数 |", "| --- | --- | --- |",
    ]
    lines.extend(f"| {row['version']} | `{row['tag']}` | {row['sourceFiles']} |" for row in rows)
    lines.extend([
        "", "Beta.20/21 标记历史预发布，1.0.1 起为正式发布；最新状态以 beta 分支的归档索引为准。",
        f"当前树固定标签：`{current['tag']}`；包名 `com.mesting.music.beta`，code {current['code']}。",
        f"来源清单：`{current['manifest']}`。原始 ZIP 附件保留全部原条目，归档文档不冒充原交付内容。",
        "本次不访问手机、不安装、不重跑历史产品测试，原交付验收边界保持。",
        "此前已有标签、Release 和 main 分支保持；本次不上传私钥、账号记录、运行缓存或本机日志。", "",
    ])
    return "\n".join(lines).encode("utf-8")


def main():
    assert git("rev-parse", "HEAD").decode().strip() == BASELINE
    assert not git("diff", "--cached", "--name-only").strip(), "Preserve preexisting staged work"
    rows = read_json(ARTIFACTS / "verified-deliveries.json")
    baseline_files = files_in_tree(BASELINE)
    current_names = sorted(set(filter(None, git("ls-files", "--cached", "--others", "--exclude-standard", "-z").decode().split("\0"))))
    before = {name: digest(ROOT / name) for name in current_names}
    (ARTIFACTS / "workspace-hashes-before-commits.json").write_bytes(json_bytes(before))
    parent = BASELINE
    completed = []
    all_manifests = {row["manifest"] for row in rows}
    allowed_added = all_manifests | {
        PROVENANCE, "Mesting-Music-v1.0.2-source.zip.sha256",
        "release/Mesting-Music-v1.0.2-source-verification.json",
    }
    for row in rows:
        assert digest(ROOT / row["zip"]) == row["sourceHash"]
        extraction = ARTIFACTS / "snapshots" / row["tag"]
        assert not extraction.exists(), "Do not overwrite an existing archive staging tree"
        snapshot = {}
        source_hashes = {}
        with zipfile.ZipFile(ROOT / row["zip"]) as archive:
            for item in archive.infolist():
                if item.is_dir():
                    continue
                name = item.filename.removeprefix(row["prefix"])
                safe_source_path(name)
                payload = archive.read(item)
                target = extraction / name
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(payload)
                snapshot[name] = target
                source_hashes[name] = hashlib.sha256(payload).hexdigest().upper()
        if row["tag"] == "v1.0.2":
            assert set(snapshot).issubset(current_names)
            additions = set(current_names) - set(snapshot)
            assert additions <= allowed_added, sorted(additions - allowed_added)
            overrides = {name for name in snapshot if before[name] != source_hashes[name]}
            assert overrides <= LATEST_DOC_OVERRIDES, sorted(overrides - LATEST_DOC_OVERRIDES)
            source = {name: ROOT / name for name in current_names}
            row["documentationOverridesAgainstFrozenZip"] = sorted(overrides)
            row["archiveAdditionsAgainstFrozenZip"] = sorted(additions)
        else:
            source = snapshot.copy()
            for prior in rows[:len(completed) + 1]:
                source[prior["manifest"]] = ROOT / prior["manifest"]
            guide = ARTIFACTS / "generated" / row["tag"] / "archive-provenance.md"
            guide.parent.mkdir(parents=True, exist_ok=True)
            guide.write_bytes(historical_provenance(rows[:len(completed) + 1], row))
            source[PROVENANCE] = guide
            row["documentationOverridesAgainstFrozenZip"] = []
            row["archiveAdditionsAgainstFrozenZip"] = sorted(set(source) - set(snapshot))
        for name in source:
            safe_source_path(name)
        names = sorted(source)
        hashes = object_ids([source[name] for name in names])
        assert len(hashes) == len(names)
        index_path = ARTIFACTS / f"index-{row['tag']}"
        assert not index_path.exists()
        env = {"GIT_INDEX_FILE": str(index_path)}
        git("read-tree", "--empty", env=env)
        records = b"".join(
            f"{baseline_files.get(name, ('100644', ''))[0]} {oid}\t{name}".encode() + b"\0"
            for name, oid in zip(names, hashes)
        )
        git("update-index", "-z", "--index-info", data=records, env=env)
        tree = git("write-tree", env=env).decode().strip()
        message = f"archive: preserve Mesting Music {row['version']}\n\nArchive the verified frozen delivery and its source provenance; retain original APK and ZIP bytes.\n"
        commit = git("commit-tree", tree, "-p", parent, data=message.encode()).decode().strip()
        actual = files_in_tree(commit)
        assert set(actual) == set(source)
        expected_oids = dict(zip(names, hashes))
        assert all(actual[name][1] == expected_oids[name] for name in names)
        if row["tag"] != "v1.0.2":
            assert all(digest(source[name]) == sha for name, sha in source_hashes.items())
        row.update({"commit": commit, "tree": tree, "parent": parent, "gitFiles": len(source)})
        completed.append(row)
        parent = commit
        print(f"Prepared {row['tag']}: {commit} ({len(source)} source/provenance files)", flush=True)
    assert all(digest(ROOT / name) == sha for name, sha in before.items())
    result = {"baseline": BASELINE, "branch": "beta", "commits": completed, "finalCommit": parent, "workingFilesUnchanged": True}
    (ARTIFACTS / "archive-commits.json").write_bytes(json_bytes(result))


if __name__ == "__main__":
    main()
