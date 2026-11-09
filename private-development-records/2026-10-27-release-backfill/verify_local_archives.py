"""Read committed Git objects back and prove all frozen source bytes survived."""
from __future__ import annotations

import hashlib
import subprocess

from archive_common import ARTIFACTS, CERT, ROOT, digest, git, json_bytes, read_json, safe_source_path


def main():
    archive = read_json(ARTIFACTS / "archive-commits.json")
    expectations = {}
    verified_files = 0
    for row in archive["commits"]:
        manifest = read_json(ROOT / row["manifest"])
        expected = {item["path"]: item["sha256"] for item in manifest["files"]}
        for name in row["documentationOverridesAgainstFrozenZip"]:
            expected[name] = digest(ROOT / name)
        for name in row["archiveAdditionsAgainstFrozenZip"]:
            if name.endswith("RELEASE-BACKFILL-2026-10-27.md") and row["tag"] != "v1.0.2":
                expected[name] = digest(ARTIFACTS / "generated" / row["tag"] / "archive-provenance.md")
            else:
                expected[name] = digest(ROOT / name)
        names = set()
        for entry in git("ls-tree", "-rz", row["commit"]).split(b"\0"):
            if not entry:
                continue
            metadata, encoded_name = entry.split(b"\t", 1)
            mode, kind, encoded_oid = metadata.split()
            assert kind == b"blob"
            name, oid = encoded_name.decode(), encoded_oid.decode()
            safe_source_path(name)
            names.add(name)
            sha = expected[name]
            assert oid not in expectations or expectations[oid] == sha
            expectations[oid] = sha
        assert names == set(expected)
        assert digest(ROOT / row["zip"]) == row["sourceHash"]
        assert digest(ROOT / row["apk"]) == row["apkSha256"]
        verified_files += len(names)
    process = subprocess.Popen(["git", "cat-file", "--batch"], cwd=ROOT, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    for oid, expected in expectations.items():
        process.stdin.write((oid + "\n").encode())
        process.stdin.flush()
        returned_oid, kind, raw_size = process.stdout.readline().decode().strip().split()
        assert returned_oid == oid and kind == "blob"
        remaining = int(raw_size)
        checksum = hashlib.sha256()
        while remaining:
            block = process.stdout.read(min(1024 * 1024, remaining))
            assert block
            checksum.update(block)
            remaining -= len(block)
        assert process.stdout.read(1) == b"\n"
        assert checksum.hexdigest().upper() == expected, oid
    process.stdin.close()
    assert process.wait() == 0
    assert not git("status", "--porcelain").strip()
    result = {
        "committedTreesVerified": 4, "totalSourceAndProvenanceEntries": verified_files,
        "uniqueGitBlobsReadAndHashed": len(expectations), "allExpectedSha256MatchGitObjects": True,
        "originalApkAndZipFilesUnchanged": True, "signerCertificateSha256": CERT,
        "runtimeSourcesUnchangedAgainstEachFrozenDelivery": True,
        "latestDocumentationOverrides": archive["commits"][-1]["documentationOverridesAgainstFrozenZip"],
        "workingTreeClean": True, "phoneAccessPerformed": False,
    }
    (ARTIFACTS / "source-tree-readback-verification.json").write_bytes(json_bytes(result))
    print(json_bytes(result).decode())


if __name__ == "__main__":
    main()
