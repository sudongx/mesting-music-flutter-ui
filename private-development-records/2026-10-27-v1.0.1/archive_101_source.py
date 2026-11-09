"""Create a source snapshot from Git-visible files, excluding local secrets.

Run after final delivery documents are written. This does not stage, commit,
push, modify Git history, or include ignored account/device test artifacts.
"""
from __future__ import annotations

import hashlib
import json
import pathlib
import subprocess
import zipfile

ROOT = pathlib.Path(r"D:\AnLi")
OUT = ROOT / ".codex-artifacts/2026-10-27-v1.0.1"
DEST = ROOT / "Mesting-Music-v1.0.1-source.zip"


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest().upper()


def main() -> None:
    assert not DEST.exists(), "Preserve the existing source snapshot"
    entries = subprocess.check_output([
        "git", "ls-files", "--cached", "--others", "--exclude-standard", "-z"
    ], cwd=ROOT).decode("utf-8").split("\0")
    entries = sorted(set(filter(None, entries)))
    manifest = []
    with zipfile.ZipFile(DEST, "x", compression=zipfile.ZIP_DEFLATED, compresslevel=6) as archive:
        for name in entries:
            relative = pathlib.PurePosixPath(name)
            file = (ROOT / name).resolve()
            assert ROOT in file.parents and file.is_file() and not (ROOT / name).is_symlink()
            assert relative.name not in ("key.properties", "local.properties")
            assert not relative.name.startswith(".env") or relative.name in (".env.example", ".env.sample")
            assert relative.suffix.lower() not in (".apk", ".keystore", ".jks", ".zip")
            assert not name.startswith((".codex-", "build/", ".dart_tool/"))
            payload = file.read_bytes()
            archive.writestr("Mesting-Music-v1.0.1/" + name, payload)
            manifest.append({"path": name, "bytes": len(payload), "sha256": sha(payload)})
    with zipfile.ZipFile(DEST) as archive:
        assert archive.testzip() is None
        assert len(archive.namelist()) == len(manifest)
        for entry in manifest:
            assert sha(archive.read("Mesting-Music-v1.0.1/" + entry["path"])) == entry["sha256"]
    result = {
        "fileName": DEST.name, "bytes": DEST.stat().st_size,
        "sha256": sha(DEST.read_bytes()), "sourceFiles": len(manifest),
        "baselineCommit": subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT).decode().strip(),
        "includesWorkingTreeChanges": True, "containsGitHistory": False,
        "containsPrivateKeysOrAccountReports": False,
        "files": manifest,
    }
    (OUT / "v1.0.1-source-verification.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (OUT / (DEST.name + ".sha256")).write_text(f"{result['sha256']}  {DEST.name}\n", encoding="ascii")
    print(json.dumps({"sourceZip": str(DEST), "bytes": result["bytes"], "sha256": result["sha256"], "files": len(manifest)}))


if __name__ == "__main__":
    main()
