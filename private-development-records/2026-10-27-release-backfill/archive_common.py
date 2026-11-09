"""Shared frozen-delivery inventory; never reads keys or touches a device."""
from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path
import subprocess

ROOT = Path(r"D:\AnLi")
ARTIFACTS = Path(__file__).resolve().parent
BASELINE = "edc6d1bf881cbe2173709cc84b86b91637fbaaed"
MAIN_BEFORE = "eb49d72d3c73aafc50db33ba1b224559e2ca279f"
REPO = "Mesting42/mesting-music-flutter"
CERT = "8CE2203AD821AD8D38576F9AE86350D98254AC05F2CB974E773C1973B22E0333"
ROWS = [
    {
        "version": "1.0.37-beta.20", "code": 20, "tag": "v1.0.37-beta.20",
        "zip": "Mesting-Music-beta.20-source.zip", "prefix": "Mesting-Music-beta.20/",
        "sourceHash": "8B61C5E33903E3C7B7D9087BC2598B734D941E0405153534AE512F149B30DB99",
        "originalManifest": ".codex-artifacts/2026-10-27-ui-review/beta20-source-verification.json",
        "manifest": "docs/version-archive/beta.20-source-manifest.json",
        "fixes": "docs/fixes-2026-10-27-beta20.md", "notes": "release/Beta.20-安装说明.txt",
        "prerelease": True,
    },
    {
        "version": "1.0.37-beta.21", "code": 21, "tag": "v1.0.37-beta.21",
        "zip": "Mesting-Music-beta.21-source.zip", "prefix": "Mesting-Music-beta.21/",
        "sourceHash": "31C2396315F5832045F7E6943E7947DFE49DFF08AA3978ABEBA836269B45C4DD",
        "originalManifest": ".codex-artifacts/2026-10-27-beta21/beta21-source-verification.json",
        "manifest": "docs/version-archive/beta.21-source-manifest.json",
        "fixes": "docs/fixes-2026-10-27-beta21.md", "notes": "release/Beta.21-安装说明.txt",
        "prerelease": True,
    },
    {
        "version": "1.0.1", "code": 22, "tag": "v1.0.1",
        "zip": "Mesting-Music-v1.0.1-source.zip", "prefix": "Mesting-Music-v1.0.1/",
        "sourceHash": "E6C10555D5039925A6816BDEE2E2460EF0B5FF1BA33DE0DA5DFC0074738040AB",
        "originalManifest": ".codex-artifacts/2026-10-27-v1.0.1/v1.0.1-source-verification.json",
        "manifest": "docs/version-archive/v1.0.1-source-manifest.json",
        "fixes": "docs/fixes-2026-10-27-v1.0.1.md", "notes": "release/1.0.1-安装说明.txt",
        "prerelease": False,
    },
    {
        "version": "1.0.2", "code": 23, "tag": "v1.0.2",
        "zip": "Mesting-Music-v1.0.2-source.zip", "prefix": "Mesting-Music-v1.0.2/",
        "sourceHash": "13BF5455836A319AF0ADDC8CF1C8F743817CBC3CE7C99BE8733B82099CA4387D",
        "originalManifest": ".codex-artifacts/2026-10-27-v1.0.2/v1.0.2-source-verification.json",
        "manifest": "docs/version-archive/v1.0.2-source-manifest.json",
        "fixes": "docs/fixes-2026-10-27-v1.0.2.md", "notes": "release/1.0.2-安装说明.txt",
        "prerelease": False,
    },
]
for row in ROWS:
    row["apk"] = f"release/Mesting-Music-v{row['version']}.apk"
    row["verification"] = f"release/Mesting-Music-v{row['version']}-verification.json"


def git(*args: str, data: bytes | None = None, env: dict | None = None) -> bytes:
    effective_env = os.environ.copy()
    effective_env.update({"GIT_TERMINAL_PROMPT": "0", "GCM_INTERACTIVE": "Never"})
    if env:
        effective_env.update(env)
    result = subprocess.run(["git", *args], cwd=ROOT, input=data, capture_output=True, env=effective_env)
    if result.returncode:
        raise RuntimeError(result.stderr.decode("utf-8", errors="replace"))
    return result.stdout


def digest(path: Path) -> str:
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest().upper()


def json_bytes(value) -> bytes:
    return (json.dumps(value, ensure_ascii=False, indent=2) + "\n").encode("utf-8")


def read_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8-sig"))


def safe_source_path(name: str) -> None:
    """Reject traversal, runtime artifacts and credential file names before use."""
    from pathlib import PurePosixPath
    path = PurePosixPath(name)
    assert not path.is_absolute() and ".." not in path.parts and "\\" not in name
    assert all(part not in (".git", ".dart_tool", ".codex-artifacts", ".codex-backups", ".codex-temp") for part in path.parts)
    assert not name.startswith(("build/", "coverage/"))
    assert path.suffix.lower() not in (".apk", ".zip", ".jks", ".keystore", ".class", ".p12", ".pfx")
    assert path.name not in ("key.properties", "local.properties", "credentials.json", "token.json")
    assert not path.name.startswith(".env") or path.name in (".env.example", ".env.sample")
