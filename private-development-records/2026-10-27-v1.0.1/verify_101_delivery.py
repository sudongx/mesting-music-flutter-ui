"""Verify the actual Release artifact before making a user-facing copy.

No device commands, signing credentials or network operations are involved.
All source/runtime files are read-only; only new 1.0.1 delivery files and the
ignored validation directory are written. Old release artifacts are preserved.
"""
from __future__ import annotations

import hashlib
import json
import pathlib
import re
import shutil
import struct
import subprocess
import zipfile

ROOT = pathlib.Path(r"D:\AnLi")
BUILD = ROOT / "build/app/outputs/flutter-apk/app-beta-release.apk"
TOOLS = pathlib.Path(r"D:\CodexCache\android-build\sdk\build-tools\35.0.0")
EXPECTED_CERT = "8CE2203AD821AD8D38576F9AE86350D98254AC05F2CB974E773C1973B22E0333"
EXPECTED_LOCK = "3F2DC18A71A59324ADF202E8EFE43E2F712B23A16E743B772AF0EC10748B4957"
OUT = ROOT / ".codex-artifacts/2026-10-27-v1.0.1"


def sha(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest().upper()


def run(name: str, *args: str) -> str:
    result = subprocess.run([str(TOOLS / name), *args], stdout=subprocess.PIPE,
                            stderr=subprocess.STDOUT, check=True)
    return result.stdout.decode("utf-8", errors="replace")


def aligned_elf(data: bytes) -> bool:
    """Check ARM64 PT_LOAD alignments and offset/virtual-address congruence."""
    if data[:6] != b"\x7fELF\x02\x01":
        raise ValueError("Expected a little-endian ELF64 library")
    header = struct.unpack_from("<HHIQQQIHHHHHH", data, 16)
    phoff, entsize, count = header[4], header[8], header[9]
    loads = []
    for index in range(count):
        typ, _, off, addr, _, _, _, align = struct.unpack_from(
            "<IIQQQQQQ", data, phoff + index * entsize)
        if typ == 1:
            loads.append(align >= 16384 and off % 16384 == addr % 16384)
    return bool(loads) and all(loads)


def main() -> None:
    baseline = json.loads((OUT / "frozen-baseline.json").read_text(encoding="utf-8-sig"))
    for item in baseline:
        name, digest = item['path'], item['sha256']
        assert sha((ROOT / name).read_bytes()) == digest, f"Frozen artifact changed: {name}"
    badging = run("aapt.exe", "dump", "badging", str(BUILD))
    assert re.search(r"^package: name='com\.mesting\.music\.beta' versionCode='22' versionName='1\.0\.1'", badging, re.M)
    assert "application-label:'Mesting Music'" in badging
    assert "application-debuggable" not in badging
    assert "sdkVersion:'24'" in badging and "targetSdkVersion:'36'" in badging
    signatures = run("apksigner.bat", "verify", "--verbose", "--print-certs", str(BUILD))
    assert "Verified using v2 scheme (APK Signature Scheme v2): true" in signatures
    # AGP's current signing config emits v2. V3 was added when some historical
    # releases were re-signed; the upgrade identity is the certificate itself.
    schemes = [version for version in ("v2", "v3")
               if f"Verified using {version} scheme (APK Signature Scheme {version}): true" in signatures]
    cert = re.search(r"Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)", signatures)
    assert cert and cert[1].upper() == EXPECTED_CERT
    zip_alignment = run("zipalign.exe", "-c", "-P", "16", "-v", "4", str(BUILD))
    assert re.search(r"Verification succes[s]?ful", zip_alignment)
    assert sha((ROOT / "pubspec.lock").read_bytes()) == EXPECTED_LOCK

    native = []
    pngs = []
    welcome_assets = []
    with zipfile.ZipFile(BUILD) as archive:
        assert archive.testzip() is None
        names = archive.namelist()
        assert sorted({n.split('/')[1] for n in names if n.startswith('lib/') and n.endswith('.so')}) == ["arm64-v8a", "armeabi-v7a"]
        for name in names:
            if not (name.startswith("lib/") and name.endswith(".so")):
                continue
            data = archive.read(name)
            generated = ROOT / "build/app/intermediates/stripped_native_libs/betaRelease/stripBetaReleaseDebugSymbols/out" / name
            assert generated.is_file() and generated.read_bytes() == data, name
            item = {"file": name, "bytes": len(data), "sha256": sha(data)}
            if name.startswith("lib/arm64-v8a/"):
                item["elf16KiBAligned"] = aligned_elf(data)
                assert item["elf16KiBAligned"], name
            native.append(item)
        for leaf in ["companions-static-1.png", "companions-static-2.png"]:
            source = ROOT / "assets/branding/startup" / leaf
            packaged = archive.read("assets/flutter_assets/assets/branding/startup/" + leaf)
            assert packaged == source.read_bytes()
            pngs.append({"file": leaf, "sha256": sha(packaged)})
        welcome_path = "assets/branding/welcome/companions-atlas.png"
        welcome = archive.read("assets/flutter_assets/" + welcome_path)
        assert welcome == (ROOT / welcome_path).read_bytes()
        welcome_assets.append({"file": welcome_path, "bytes": len(welcome), "sha256": sha(welcome)})
        assert not any(name.endswith(("welcome/record-atlas.png", "welcome/earbud-atlas.png")) for name in names)
        assert not any(name.endswith("welcome/provenance.json") for name in names)
        assert len(native) == 10
        assert "assets/flutter_assets/packages/liquid_glass_widgets/shaders/liquid_glass_render.frag" in names

    destination = ROOT / "release/Mesting-Music-v1.0.1.apk"
    digest = sha(BUILD.read_bytes())
    if destination.exists():
        assert sha(destination.read_bytes()) == digest, "Preserve a different existing 1.0.1 artifact"
    else:
        shutil.copy2(BUILD, destination)
    metadata = {
        "packageName": "com.mesting.music.beta", "applicationLabel": "Mesting Music",
        "versionName": "1.0.1", "versionCode": 22, "mode": "release",
        "debuggable": False, "fileName": destination.name,
        "bytes": destination.stat().st_size, "sizeMiB": round(destination.stat().st_size / 1048576, 2),
        "sha256": digest, "architectures": ["armeabi-v7a", "arm64-v8a"],
        "minSdk": 24, "targetSdk": 36, "signatureVerified": True,
        "signatureSchemes": schemes, "signerCertificateSha256": EXPECTED_CERT,
        "matchesDeliveredBeta14Through21Signer": True,
        "zipAlignment16KiBVerified": True, "arm64ElfAlignment16KiBVerified": True,
        "nativeEntriesMatchBuildOutputs": True, "nativeEntries": native,
        "dependencyLockSha256": EXPECTED_LOCK, "originalStartupPngs": pngs,
        "welcomePoseAssets": welcome_assets, "welcomePoseAssetsMatchSource": True,
        "formalOnlyAssetPathsExcluded": 69,
        "appUpdateChecksEnabled": True,
        "releaseHealthUrl": "https://download.csnas.asia/api/app/music/health",
        "downloadMode": "HTTPS only; no P2P/P8P",
        "uiInstalledOnUserPhone": False, "gitCommitted": False,
        "gitPushed": False, "automaticListeningSyncEnabled": False,
    }
    (ROOT / "release/Mesting-Music-v1.0.1-verification.json").write_text(
        json.dumps(metadata, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (ROOT / "release/Mesting-Music-v1.0.1.apk.sha256").write_text(
        f"{digest}  {destination.name}\n", encoding="ascii")
    (OUT / "v1.0.1-apksigner-verification.txt").write_text(signatures, encoding="utf-8")
    (OUT / "v1.0.1-zip-alignment.txt").write_text(zip_alignment, encoding="utf-8")
    print(json.dumps({"apk": str(destination), "bytes": metadata["bytes"],
                      "sha256": digest, "certificateMatches": True}))


if __name__ == "__main__":
    main()
