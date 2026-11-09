"""Prepare a concrete, path-checked cleanup inventory without deleting files."""
from __future__ import annotations

from collections import Counter
import hashlib
import json
import os
from pathlib import Path
import stat
import subprocess

ROOT = Path(r"D:\AnLi").resolve()
OUT = Path(__file__).resolve().parent
DIRECTORIES = [
    ".codex-artifacts/2026-10-26-beta14-apk",
    ".codex-artifacts/2026-10-26-beta15",
    ".codex-artifacts/2026-10-26-beta15-investigation",
    ".codex-artifacts/2026-10-26-beta16",
    ".codex-artifacts/2026-10-26-beta17",
    ".codex-artifacts/2026-10-26-beta17-git",
    ".codex-artifacts/2026-10-26-beta17-investigation",
    ".codex-artifacts/2026-10-26-git-archive",
    ".codex-artifacts/2026-10-26-ui-fixes",
    ".codex-artifacts/2026-10-27-beta21",
    ".codex-artifacts/2026-10-27-beta22-plan",
    ".codex-artifacts/2026-10-27-listening-investigation",
    ".codex-artifacts/2026-10-27-ui-review",
    ".codex-artifacts/2026-10-27-release-backfill/snapshots/v1.0.37-beta.20",
    ".codex-artifacts/2026-10-27-release-backfill/snapshots/v1.0.37-beta.21",
    ".codex-artifacts/2026-10-27-release-backfill/generated/v1.0.37-beta.20",
    ".codex-artifacts/2026-10-27-release-backfill/generated/v1.0.37-beta.21",
    ".codex-artifacts/2026-10-27-release-backfill/assets/v1.0.37-beta.20",
    ".codex-artifacts/2026-10-27-release-backfill/assets/v1.0.37-beta.21",
    ".codex-backups/2026-10-26-beta14-packaging",
    ".codex-backups/2026-10-26-beta15",
    ".codex-backups/2026-10-26-beta16",
    ".codex-backups/2026-10-26-beta17",
    ".codex-backups/2026-10-26-navigation-progress-menus",
    ".codex-backups/2026-10-27-beta21-before",
    ".codex-backups/2026-10-27-sync-beta19-1ikgtei0",
    ".codex-temp/listencheck-e7_504_y",
    ".impeccable/review/beta21",
]
LOOSE = [
    ".codex-artifacts/2026-10-27-release-backfill/index-v1.0.37-beta.20",
    ".codex-artifacts/2026-10-27-release-backfill/index-v1.0.37-beta.21",
]
SOURCE_EXTENSIONS = {".dart", ".kt", ".java", ".rs", ".c", ".cpp", ".h", ".kts", ".gradle", ".frag", ".vert", ".toml", ".yaml", ".yml", ".xml"}


def native(path):
    """Access old Gradle paths beyond MAX_PATH without changing logical targets."""
    return Path("\\\\?\\" + str(path.absolute()))


def sha(path):
    with native(path).open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest().upper()


def blob_id(data):
    return hashlib.sha1(b"blob " + str(len(data)).encode() + b"\0" + data).hexdigest()


def is_source_candidate(path, base):
    relative = path.relative_to(base)
    parts = relative.parts
    if any(part in {"build", ".dart_tool", ".gradle", ".pub-cache"} for part in parts):
        return False
    if path.name in {"GeneratedPluginRegistrant.java", "generated_plugin_registrant.cc", "generated_plugin_registrant.h", "generated_plugins.cmake", "build.gradle.kts"} and "build" in parts:
        return False
    return path.suffix.lower() in SOURCE_EXTENSIONS


def main():
    recovery = json.loads((OUT / "beta-recovery-audit.json").read_text(encoding="utf-8"))
    objects = json.loads((OUT / "beta-git-blob-index.json").read_text(encoding="utf-8"))
    tracked = set(filter(None, subprocess.check_output(["git", "ls-files", "-z"], cwd=ROOT).decode().split("\0")))
    protected = []
    # Protect current source, formal delivery data, all keys and rollback records.
    for name in sorted(tracked):
        path = ROOT / name
        protected.append({"path": str(path), "sha256": sha(path)})
    signing = ROOT / ".codex-artifacts/2026-10-26-beta17-signing"
    for path in sorted(signing.iterdir()):
        if path.is_file():
            protected.append({"path": str(path), "sha256": sha(path)})
    for path in ROOT.glob("*.zip"):
        if "beta" not in path.name.lower():
            protected.append({"path": str(path), "sha256": sha(path)})
    for path in (ROOT / "release").glob("*.apk"):
        if "beta" not in path.name.lower():
            protected.append({"path": str(path), "sha256": sha(path)})
    loose = LOOSE + [str(Path(item["path"]).relative_to(ROOT).as_posix()) for item in recovery["localOriginalArtifacts"] if not Path(item["path"]).is_relative_to(ROOT / ".codex-artifacts/2026-10-27-beta21")]
    entries, target_rows, unmatched, sensitive = [], [], [], []
    for relative in DIRECTORIES + loose:
        target = (ROOT / relative).resolve()
        assert target.is_relative_to(ROOT) and target != ROOT and not target.is_relative_to(signing)
        assert target.exists()
        files = []
        if target.is_file():
            files = [target]
        else:
            for native_directory, dirs, names in os.walk(native(target), followlinks=False):
                directory = Path(str(native_directory).removeprefix("\\\\?\\"))
                assert ".git" not in dirs and ".git" not in names, "Embedded Git history is protected"
                for name in dirs:
                    item = Path(directory) / name
                    assert not native(item).is_symlink() and not (native(item).stat().st_file_attributes & stat.FILE_ATTRIBUTE_REPARSE_POINT)
                files.extend(Path(directory) / name for name in names)
        row_bytes = 0
        for file in sorted(files):
            assert not native(file).is_symlink()
            assert not (native(file).stat().st_file_attributes & stat.FILE_ATTRIBUTE_REPARSE_POINT)
            name = file.relative_to(ROOT).as_posix()
            assert name not in tracked
            metadata = native(file).stat()
            item = {"path": str(file.absolute()), "relativePath": name, "bytes": metadata.st_size, "mtimeNs": metadata.st_mtime_ns, "lastWriteTimeUtcTicks": metadata.st_mtime_ns // 100 + 621355968000000000}
            row_bytes += metadata.st_size
            if file.suffix.lower() in {".jks", ".keystore", ".p12", ".pfx", ".key", ".pem"} or file.name in {"key.properties", ".env", "credentials.json"}:
                payload = native(file).read_bytes()
                if blob_id(payload) not in objects:
                    sensitive.append(name)
            if target.is_dir() and (relative.startswith(".codex-backups/") or "/snapshots/" in relative or relative.startswith(".codex-temp/")) and is_source_candidate(file, target):
                payload = native(file).read_bytes()
                exact = blob_id(payload)
                normalized = blob_id(payload.replace(b"\r\n", b"\n"))
                match = objects.get(exact) or objects.get(normalized)
                if match:
                    item["recoverableSource"] = match
                    item["sourceLineEndingsNormalizedForMatch"] = exact not in objects
                else:
                    unmatched.append({"path": name, "bytes": metadata.st_size, "sha256": hashlib.sha256(payload).hexdigest().upper()})
            if target.is_file():
                item["sha256"] = sha(file)
            entries.append(item)
        target_rows.append({"path": str(target), "relativePath": relative, "kind": "directory" if target.is_dir() else "file", "files": len(files), "bytes": row_bytes})
    assert len({item["path"] for item in entries}) == len(entries), "Overlapping targets"
    result = {
        "workspace": str(ROOT), "head": recovery["head"], "scope": "Only old public Beta deliveries and their local development artifacts under this workspace",
        "targetDirectories": sum(row["kind"] == "directory" for row in target_rows), "targetLooseFiles": sum(row["kind"] == "file" for row in target_rows),
        "files": len(entries), "bytes": sum(item["bytes"] for item in entries), "targets": target_rows, "entries": entries,
        "protected": protected, "unmatchedCandidateSourceFiles": unmatched, "sensitiveFilesPreventingDeletion": sensitive,
        "sourceFilesMatchedToHistoricalGitBlobs": sum("recoverableSource" in item for item in entries),
        "noDeletionPerformed": True,
    }
    (OUT / "cleanup-inventory.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({key: value for key, value in result.items() if key not in {"entries", "protected", "targets"}}, ensure_ascii=True))


if __name__ == "__main__":
    main()
