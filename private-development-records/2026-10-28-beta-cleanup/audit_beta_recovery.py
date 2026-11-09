"""Read-only Git/GitHub recovery audit before any local Beta file deletion.

All private signing files, current source, formal deliveries and Git history are
outside the deletion scope. Reports stay in this ignored audit directory.
"""
from __future__ import annotations

from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import subprocess
from urllib.request import Request, urlopen

ROOT = Path(r"D:\AnLi").resolve()
OUT = Path(__file__).resolve().parent
REPO = "Mesting42/mesting-music-flutter"
BASELINE = "dbc5e78d05570c26f56fe5c5773245737a464a5f"


def git(*args, data=None):
    result = subprocess.run(["git", *args], cwd=ROOT, input=data, capture_output=True, check=True)
    return result.stdout


def sha(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest().upper()


def save(name, data):
    (OUT / name).write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def fetch_json(url):
    with urlopen(Request(url, headers={"User-Agent": "Mesting-beta-cleanup-audit", "Accept": "application/vnd.github+json"}), timeout=30) as response:
        assert response.status == 200
        return json.load(response)


def public_probe(asset):
    request = Request(asset["browser_download_url"], headers={"User-Agent": "Mesting-beta-cleanup-audit", "Range": "bytes=0-4095"})
    with urlopen(request, timeout=30) as response:
        prefix = response.read(4096)
        assert response.status in (200, 206) and prefix[:2] == b"PK"
        return {"name": asset["name"], "status": response.status, "bytesRead": len(prefix), "zipOrApkHeader": True}


def main():
    assert git("rev-parse", "HEAD").decode().strip() == BASELINE
    assert not git("status", "--porcelain").strip()
    remote_bytes = git("ls-remote", "--heads", "--tags", "origin")
    (OUT / "remote-refs-before.txt").write_bytes(remote_bytes)
    remote = {line.split("\t")[1]: line.split("\t")[0] for line in remote_bytes.decode().splitlines()}
    releases = fetch_json(f"https://api.github.com/repos/{REPO}/releases?per_page=100")
    save("github-releases-before.json", releases)
    by_tag = {release["tag_name"]: release for release in releases}
    versions, objects, asset_index = [], {}, {}
    for number in range(1, 22):
        tag = f"v1.0.37-beta.{number}"
        commit = git("rev-parse", tag + "^{commit}").decode().strip()
        assert remote["refs/tags/" + tag + "^{}"] == commit
        assert remote["refs/tags/" + tag] == git("rev-parse", tag).decode().strip()
        release = by_tag[tag]
        assert not release["draft"] and release["prerelease"]
        tree = {}
        for record in git("ls-tree", "-rz", commit).split(b"\0"):
            if record:
                meta, name = record.split(b"\t", 1)
                mode, kind, oid = meta.decode().split()
                assert kind == "blob"
                path = name.decode()
                tree[path] = oid
                objects.setdefault(oid, {"tag": tag, "path": path})
        assert {"pubspec.yaml", "lib/main.dart", "android/app/build.gradle.kts"}.issubset(tree)
        assets = release["assets"]
        apks = [asset for asset in assets if asset["name"].lower().endswith(".apk")]
        assert len(apks) == 1 and apks[0]["state"] == "uploaded"
        sources = [asset for asset in assets if "source" in asset["name"].lower() and asset["name"].lower().endswith(".zip")]
        assert len(sources) >= 1 or 14 <= number <= 17
        for asset in assets:
            if asset.get("digest"):
                asset_index.setdefault(asset["digest"].removeprefix("sha256:").upper(), []).append({"tag": tag, "asset": asset})
        row = {
            "beta": number, "tag": tag, "commit": commit, "localTagEqualsRemote": True,
            "sourceTrackedFiles": len(tree), "sourceAvailableFromGitTag": True,
            "release": release["html_url"], "releasePublished": True,
            "apk": {"name": apks[0]["name"], "bytes": apks[0]["size"], "digest": apks[0].get("digest"), "url": apks[0]["browser_download_url"]},
            "originalSourceZipAssets": [{"name": asset["name"], "bytes": asset["size"], "digest": asset.get("digest"), "url": asset["browser_download_url"]} for asset in sources],
            "originalZipAbsentButCompleteGitTagAvailable": not sources,
        }
        versions.append(row)
    # Read object existence for the complete set of referenced historical blobs.
    ids = sorted(objects)
    checked = git("cat-file", "--batch-check", data="".join(oid + "\n" for oid in ids).encode()).decode().splitlines()
    assert len(checked) == len(ids) and all(" missing" not in line and " blob " in line for line in checked)
    save("beta-git-blob-index.json", objects)
    save("beta-release-asset-index.json", asset_index)
    # Original signed deliveries and all three frozen source ZIPs on this machine.
    local = sorted((ROOT / "release").glob("*beta.*.apk"))
    local += sorted(path for path in ROOT.glob("*.zip") if "beta" in path.name.lower() and "sign" not in path.name.lower())
    installed_base = ROOT / ".codex-artifacts/2026-10-27-beta21/phone-upgrade/beta20-installed-base.apk"
    if installed_base.exists():
        local.append(installed_base)
    local_checks = []
    for path in local:
        digest = sha(path)
        matches = asset_index.get(digest, [])
        assert matches, f"Original artifact has no GitHub asset with this digest: {path.name}"
        assert any(item["asset"]["size"] == path.stat().st_size for item in matches)
        match = next(item for item in matches if item["asset"]["size"] == path.stat().st_size)
        local_checks.append({"path": str(path), "bytes": path.stat().st_size, "sha256": digest, "matchesGitHub": True,
                             "recoveryTag": match["tag"], "recoveryUrl": match["asset"]["browser_download_url"]})
    probes = []
    for version in versions:
        assets = by_tag[version["tag"]]["assets"]
        probes.append(next(asset for asset in assets if asset["name"].lower().endswith(".apk")))
        source = next((asset for asset in assets if "source" in asset["name"].lower() and asset["name"].lower().endswith(".zip")), None)
        if source:
            probes.append(source)
    with ThreadPoolExecutor(max_workers=4) as executor:
        public_results = list(executor.map(public_probe, probes))
    health = fetch_json("https://download.csnas.asia/api/app/music/health")
    assert health["version"] == "1.0.5" and health["android_version_code"] == 26
    result = {
        "checkedAtUtc": datetime.now(timezone.utc).isoformat(), "workspace": str(ROOT), "head": BASELINE,
        "betaVersionsVerified": 21, "allLocalRemoteTagsAgree": True,
        "completeHistoricalSourceBlobObjectsPresent": len(objects),
        "versions": versions, "localOriginalArtifacts": local_checks,
        "publicDownloadProbes": public_results, "publicProbesPassed": len(public_results),
        "formalSourceAndServerBaseline": "1.0.5 / 26", "userPhoneAccessPerformed": False,
        "androidDowngradeAndDifferentHistoricalCertificatesStillApply": True,
        "noDeletionPerformed": True,
    }
    save("beta-recovery-audit.json", result)
    print(json.dumps({"betaVersionsVerified": 21, "historicalSourceBlobsPresent": len(objects), "originalLocalArtifactsMatchGitHub": len(local_checks), "publicDownloadProbesPassed": len(public_results), "formalBaseline": "1.0.5 / 26", "noDeletionPerformed": True}), flush=True)


if __name__ == "__main__":
    main()
