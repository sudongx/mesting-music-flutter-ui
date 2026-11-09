"""Verify duplicate installers and classify regenerable data; no deletion."""
from collections import defaultdict
import hashlib
import json
import os
from pathlib import Path
import stat
import zipfile

ROOT = Path(r"D:\CodexCache")
OUT = Path(__file__).resolve().parent


def native(path):
    return Path("\\\\?\\" + str(path.absolute()))


def sha(path):
    with native(path).open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest().upper()


def tree(path):
    files = {}
    for raw_directory, dirs, names in os.walk(native(path), followlinks=False):
        directory = Path(str(raw_directory).removeprefix("\\\\?\\"))
        for name in names:
            file = Path(directory) / name
            assert not native(file).is_symlink()
            files[file.relative_to(path).as_posix()] = file
    return files


def zip_vs_installed(archive_path, installed_parent):
    count, size, missing, changed = 0, 0, [], []
    with zipfile.ZipFile(archive_path) as archive:
        for info in archive.infolist():
            if info.is_dir():
                continue
            file = installed_parent / info.filename
            count += 1
            size += info.file_size
            if not native(file).is_file():
                missing.append(info.filename)
                continue
            checksum = hashlib.sha256()
            with archive.open(info) as source:
                while block := source.read(1024 * 1024):
                    checksum.update(block)
            if native(file).stat().st_size != info.file_size or checksum.hexdigest().upper() != sha(file):
                changed.append(info.filename)
    return {"archive": str(archive_path.relative_to(ROOT)), "compressedBytes": archive_path.stat().st_size,
            "entriesCompared": count, "expandedBytes": size, "missingInstalledFiles": missing,
            "changedInstalledFiles": changed, "allFilesMatchInstalledCopy": not missing and not changed}


staging = ROOT / "android-build/command-line-staging/cmdline-tools"
installed = ROOT / "android-build/sdk/cmdline-tools/latest"
first, second = tree(staging), tree(installed)
assert set(first) == set(second)
assert all(sha(first[name]) == sha(second[name]) for name in first)
gradle_a = ROOT / "android-build/gradle-8.14-all.zip"
gradle_b = next((ROOT / "android-build/gradle/wrapper/dists/gradle-8.14-all").glob("*/gradle-8.14-all.zip"))
assert sha(gradle_a) == sha(gradle_b)
assert (gradle_b.parent / "gradle-8.14/bin/gradle.bat").is_file()
zip_checks = [
    zip_vs_installed(ROOT / "android-build/commandlinetools-win-16111833_latest.zip", ROOT / "android-build/command-line-staging"),
    zip_vs_installed(ROOT / "android-build/jdk/OpenJDK17U-jdk_x64_windows_hotspot_17.0.20.1_1.zip", ROOT / "android-build/jdk"),
]
assert all(check["allFilesMatchInstalledCopy"] for check in zip_checks)
preserved_sentinel_paths = [
    ROOT / "flutter-3.41.9/bin/flutter.bat",
    ROOT / "android-build/sdk/cmdline-tools/latest/bin/sdkmanager.bat",
    ROOT / "android-build/jdk/jdk-17.0.20.1+1/bin/java.exe",
    gradle_b.parent / "gradle-8.14/bin/gradle.bat",
]
assert all(path.is_file() for path in preserved_sentinel_paths)
baseline = [{"path": str(path), "sha256": sha(path)} for path in preserved_sentinel_paths]
totals = defaultdict(lambda: {"bytes": 0, "files": 0})
for base in [ROOT / "android-build/gradle/caches/8.14", ROOT / "migration-backups", ROOT / "codex-browser/Default/Partitions"]:
    for raw_directory, dirs, names in os.walk(native(base), followlinks=False):
        directory = Path(str(raw_directory).removeprefix("\\\\?\\"))
        for name in names:
            file = Path(directory) / name
            size = native(file).stat().st_size
            parts = file.relative_to(base).parts
            for level in range(1, min(len(parts) - 1, 3) + 1):
                key = base.relative_to(ROOT).as_posix() + "/" + "/".join(parts[:level])
                totals[key]["bytes"] += size
                totals[key]["files"] += 1
backup_sensitive_names = []
for file in (ROOT / "migration-backups").rglob("*"):
    if file.is_file() and file.name.lower() in {"cookies", "login data", "history", "local state", "auth.json", "settings.json", "config.toml", "state.vscdb"}:
        backup_sensitive_names.append(str(file.relative_to(ROOT)))
npms = []
for child in (ROOT / "npm-npx").iterdir():
    package = child / "package.json"
    if package.is_file():
        data = json.loads(package.read_text(encoding="utf-8"))
        dependencies = data.get("dependencies", {})
        # Names and semver declarations only; never emit credentials or registry URLs.
        npms.append({"cache": child.name, "packages": list(dependencies)})
result = {
    "readOnly": True, "filesDeleted": 0,
    "stagingMatchesInstalledCmdlineTools": {"files": len(first), "bytes": sum(path.stat().st_size for path in first.values()), "allSha256Match": True},
    "gradleStandaloneZipIsExactDuplicate": {"standalone": str(gradle_a.relative_to(ROOT)), "retainedWrapperZip": str(gradle_b.relative_to(ROOT)), "bytes": gradle_a.stat().st_size, "sha256": sha(gradle_a)},
    "installerZipsMatchExtractedFiles": zip_checks,
    "sdkSentinelHashes": baseline,
    "deepDirectoryTotals": [{"path": key, **value} for key, value in totals.items()],
    "migrationBackupProfileOrSettingsFiles": backup_sensitive_names,
    "npxToolPackages": npms,
}
(OUT / "verified-candidates.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(json.dumps({key: value for key, value in result.items() if key not in {"deepDirectoryTotals", "npxToolPackages", "sdkSentinelHashes"}}, ensure_ascii=True))
for prefix in ["android-build/gradle/caches/8.14", "migration-backups", "codex-browser/Default/Partitions"]:
    rows = [{"path": key, **value} for key, value in totals.items() if key.startswith(prefix + "/") and key.count("/") == prefix.count("/") + 1]
    print(json.dumps({"parent": prefix, "children": sorted(rows, key=lambda row: row["bytes"], reverse=True)}, ensure_ascii=True))
print(json.dumps({"npxCacheFolders": len(npms), "packages": sorted({name for row in npms for name in row["packages"]})}, ensure_ascii=True))
