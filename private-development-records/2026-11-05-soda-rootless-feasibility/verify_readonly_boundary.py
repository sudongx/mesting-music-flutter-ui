"""Compare the investigation with the delivered 1.0.61 source checkpoint.

Reads only the checkout and protected delivery; never restores older files.
The earlier authorized removal of historical release APKs is not audited here.
"""
import hashlib
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
baseline = json.loads((ROOT / ".codex-artifacts/2026-11-05-release161/after.json").read_text(encoding="utf-8-sig"))


def digest(path):
    hasher = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            hasher.update(block)
    return hasher.hexdigest()


selected, differences = [], []
for entry in baseline["files"]:
    relative = entry["path"].replace("\\", "/")
    # Include both product and native forks; omit generated/private research.
    if not (relative.startswith(("lib/", "android/", "third_party/", "assets/", "test/"))
            or relative in ("pubspec.yaml", "pubspec.lock", "analysis_options.yaml")):
        continue
    path = ROOT / relative
    actual = digest(path) if path.is_file() else None
    selected.append(relative)
    if actual != entry["sha256"]:
        differences.append({"path": relative, "expected_sha256": entry["sha256"], "actual_sha256": actual})

status = subprocess.check_output(["git", "status", "--porcelain=v1", "-uall"], cwd=ROOT).decode("utf-8")
before = (OUT / "git-status-before.txt").read_text(encoding="utf-8-sig")
head = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT).decode().strip()
index = digest(ROOT / ".git/index")
apk = ROOT / "release/Mesting-Music-v1.0.61.apk"
record = {
    "source_baseline": ".codex-artifacts/2026-11-05-release161/after.json",
    "checked_existing_product_test_native_files": len(selected),
    "differences": differences,
    "git_status_matches_before": status.splitlines() == before.splitlines(),
    "head": head, "head_matches": head == baseline["head"],
    "index_sha256": index, "index_matches": index == baseline["indexSha256"],
    "v1_0_61_apk_sha256": digest(apk),
    "v1_0_61_apk_matches": digest(apk) == "8a3d821c7ac2dd3f8129a225b0c30839403ef4828d85e20a5cd412dd67117bd2",
    "scope": "Read-only validation, not build/test/device/release acceptance",
}
(OUT / "readonly-boundary-verification.json").write_text(json.dumps(record, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(record, ensure_ascii=False))
