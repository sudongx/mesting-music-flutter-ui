"""Verify original deliveries and write additive, portable archive manifests.

This first step does not move refs, stage app files or alter frozen APK/ZIP data.
All ZIP entries must match the manifests captured at their original deliveries.
"""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import re
import subprocess
import zipfile

from archive_common import ARTIFACTS, BASELINE, CERT, ROOT, ROWS, digest, git, json_bytes, read_json, safe_source_path


def main():
    assert git("rev-parse", "HEAD").decode().strip() == BASELINE
    assert git("branch", "--show-current").decode().strip() == "beta"
    refs = git("ls-remote", "--heads", "--tags", "origin")
    (ARTIFACTS / "remote-refs-before.txt").write_bytes(refs)
    (ARTIFACTS / "status-before.txt").write_bytes(git("status", "--short", "--branch"))
    modes = {}
    for record in git("ls-tree", "-r", "-z", BASELINE).split(b"\0"):
        if record:
            meta, name = record.split(b"\t", 1)
            modes[name.decode()] = meta.split()[0].decode()
    verified = []
    for row in ROWS:
        assert f"refs/tags/{row['tag']}".encode() not in refs
        assert digest(ROOT / row["zip"]) == row["sourceHash"]
        original = read_json(ROOT / row["originalManifest"])
        assert original["sha256"] == row["sourceHash"]
        source_records = {entry["path"]: entry for entry in original["files"]}
        manifest_files = []
        with zipfile.ZipFile(ROOT / row["zip"]) as archive:
            assert archive.testzip() is None
            names = set()
            for info in archive.infolist():
                if info.is_dir():
                    continue
                assert info.filename.startswith(row["prefix"])
                name = info.filename.removeprefix(row["prefix"])
                safe_source_path(name)
                assert name not in names
                names.add(name)
                data = archive.read(info)
                sha = hashlib.sha256(data).hexdigest().upper()
                previous = source_records[name]
                assert len(data) == previous["bytes"] and sha == previous["sha256"]
                manifest_files.append({"path": name, "bytes": len(data), "sha256": sha})
            assert names == set(source_records)
            # Every preexisting tracked file is present in each complete snapshot.
            assert set(modes).issubset(names)
        package = read_json(ROOT / row["verification"])
        assert package["versionName"] == row["version"] and package["versionCode"] == row["code"]
        assert package["packageName"] == "com.mesting.music.beta" and not package["debuggable"]
        assert package["signerCertificateSha256"] == CERT
        assert digest(ROOT / row["apk"]) == package["sha256"]
        assert (ROOT / row["apk"]).stat().st_size == package["bytes"]
        apk = ROOT / row["apk"]
        tools = Path(r"D:\CodexCache\android-build\sdk\build-tools\35.0.0")
        java = next(Path(r"D:\CodexCache").glob("**/jdk-17*/bin/java.exe"), None)
        # apksigner.bat already resolves the installed Java; no key material is read.
        signed = subprocess.run([str(tools / "apksigner.bat"), "verify", "--verbose", "--print-certs", str(apk)], capture_output=True, text=True)
        assert signed.returncode == 0, signed.stderr
        signer = re.search(r"Signer #1 certificate SHA-256 digest:\s*([0-9a-f]+)", signed.stdout, re.I)
        assert signer and signer.group(1).upper() == CERT
        badging = subprocess.run([str(tools / "aapt.exe"), "dump", "badging", str(apk)], capture_output=True, text=True, check=True).stdout
        assert f"versionCode='{row['code']}'" in badging and f"versionName='{row['version']}'" in badging
        assert "name='com.mesting.music.beta'" in badging
        target = ROOT / row["manifest"]
        assert not target.exists(), f"Preserve existing manifest: {target}"
        manifest = {
            "versionName": row["version"], "versionCode": row["code"],
            "archivedOn": "2026-10-27", "sourceOrigin": "Original frozen delivery ZIP; archival commit created now without backdating development history.",
            "originalArchiveName": row["zip"], "originalArchiveBytes": (ROOT / row["zip"]).stat().st_size,
            "originalArchiveSha256": row["sourceHash"], "archiveRootPrefixRemoved": row["prefix"],
            "fileCount": len(manifest_files), "excludedFiles": [], "allArchiveEntriesReadAndHashed": True,
            "originalDeliveryMetadataHashMatches": {"apk": True, "source": True},
            "apkName": apk.name, "apkBytes": package["bytes"], "apkSha256": package["sha256"],
            "packageName": package["packageName"], "architectures": package["architectures"],
            "signatureVerifiedNow": True, "signerCertificateSha256": CERT,
            "historicalApkNotRebuiltOrResigned": True, "physicalDeviceRetestedDuringArchive": False,
            "frozenDocumentsRetainOriginalDeliveryStatus": True,
            "archiveCommitAddsSeparateProvenance": True,
            "files": sorted(manifest_files, key=lambda entry: entry["path"]),
        }
        target.write_bytes(json_bytes(manifest))
        files = [
            {"path": row["apk"], "name": apk.name},
            {"path": row["zip"], "name": row["zip"]},
            {"path": row["verification"], "name": Path(row["verification"]).name},
            {"path": row["manifest"], "name": Path(row["manifest"]).name},
            {"path": row["notes"], "name": f"{row['tag']}-installation-notes.txt"},
            {"path": row["fixes"], "name": Path(row["fixes"]).name},
        ]
        sums = []
        for asset in files:
            asset["bytes"] = (ROOT / asset["path"]).stat().st_size
            asset["sha256"] = digest(ROOT / asset["path"])
            sums.append(f"{asset['sha256']}  {asset['name']}")
        folder = ARTIFACTS / "assets" / row["tag"]
        folder.mkdir(parents=True, exist_ok=True)
        checksum = folder / "SHA256SUMS.txt"
        checksum.write_text("\n".join(sums) + "\n", encoding="ascii")
        files.append({"path": str(checksum), "name": checksum.name, "bytes": checksum.stat().st_size, "sha256": digest(checksum)})
        verified.append({**row, "apkSha256": package["sha256"], "apkBytes": package["bytes"], "sourceFiles": len(manifest_files), "assets": files})
        print(json.dumps({"verified": row["tag"], "files": len(manifest_files), "apkAndSignerVerified": True}), flush=True)
    (ARTIFACTS / "verified-deliveries.json").write_bytes(json_bytes(verified))


if __name__ == "__main__":
    main()
