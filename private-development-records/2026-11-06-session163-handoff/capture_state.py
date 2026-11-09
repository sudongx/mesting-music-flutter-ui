"""Record the local handoff without building, using a device, or changing Git."""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path("D:/AnLi")
OUT = Path(__file__).resolve().parent
os.environ["GIT_OPTIONAL_LOCKS"] = "0"


def git(*args):
    return subprocess.check_output(["git", *args], cwd=ROOT)


def sha(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def entry(relative):
    path = ROOT / relative
    return {"path": relative, "bytes": path.stat().st_size, "sha256": sha(path)}


phase = sys.argv[1]
assert phase in {"before", "after"}
target = OUT / f"{phase}.json"
assert not target.exists(), "Keep the original handoff state record"
old = json.loads((ROOT / ".codex-artifacts/2026-11-06-soda-sms-2156/protected-state.json").read_text("utf-8"))
frozen = old["frozenArtifacts"]
issues = []
for previous in frozen:
    path = ROOT / previous["path"]
    if not path.is_file() or sha(path) != previous["sha256"]:
        issues.append(previous["path"])
new_apk = entry("release/Mesting-Music-v1.0.63.apk")
assert new_apk["sha256"] == "f2f4ddd007198ed38e381f48ed4c1b5eabb33d60a7acbde192c2d1cd80ca075b"
inputs = json.loads((ROOT / ".codex-artifacts/2026-11-06-soda-sms-2156/build-input-final.json").read_text("utf-8"))["files"]
products = [entry(item["path"]) for item in inputs]
input_changes = [item["path"] for item, current in zip(inputs, products) if item["sha256"] != current["sha256"]]
selected = git("ls-files", "--cached", "--others", "--exclude-standard", "-z").decode("utf-8").split("\0")
source = [entry(relative) for relative in sorted(set(selected) - {""}) if (ROOT / relative).is_file()]
deleted = [relative for relative in sorted(set(selected) - {""}) if not (ROOT / relative).exists()]
index_path = Path(git("rev-parse", "--git-path", "index").decode().strip())
if not index_path.is_absolute():
    index_path = ROOT / index_path
record = {
    "recordedAtUtc": datetime.now(timezone.utc).isoformat(),
    "version": "1.0.63", "androidVersionCode": 84,
    "head": git("rev-parse", "HEAD").decode().strip(),
    "branch": git("branch", "--show-current").decode().strip(),
    "indexSha256": sha(index_path),
    "indexEmpty": not bool(git("diff", "--cached", "--name-only")),
    "lockSha256": sha(ROOT / "pubspec.lock"),
    "signingSha256": sha(ROOT / ".codex-artifacts/2026-10-26-beta17-signing/debug.keystore"),
    "frozenArtifacts": frozen + [new_apk],
    "frozenArtifactsChecked": len(frozen) + 1,
    "frozenArtifactIssues": issues,
    "productFiles": products,
    "differencesFrom63BuildInputs": input_changes,
    "sourceFiles": source,
    "deletedSourcePaths": deleted,
    "source63ZipExists": (ROOT / "Mesting-Music-v1.0.63-source.zip").exists(),
    "status": "Failed candidate: SMS 2156; shared audio processor playback regression identified, not fixed",
    "deviceVersionEvidence": ".codex-artifacts/2026-11-06-soda-sms-2156/device-install-verification.json",
    "deviceRequeriedForHandoff": False,
    "businessAccepted": False,
    "oldLogsReplayed": False,
    "gitCommitted": False, "gitPushed": False, "published": False,
}
for key in ("head", "branch", "indexSha256", "lockSha256", "signingSha256"):
    assert record[key] == old[key], key
assert record["indexEmpty"] and not issues
assert set(input_changes) <= {"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java"}, input_changes
if phase == "after":
    before = json.loads((OUT / "before.json").read_text("utf-8"))
    assert before["productFiles"] == products, "A documentation handoff must not alter product inputs"
    previous_source = {item["path"]: item["sha256"] for item in before["sourceFiles"]}
    current_source = {item["path"]: item["sha256"] for item in source}
    changed = [path for path in previous_source if previous_source[path] != current_source.get(path)]
    added = sorted(set(current_source) - set(previous_source))
    assert changed == ["AGENTS.md"], changed
    assert added == ["HANDOFF-SESSION-2026-11-06-v1.0.63-SMS-AND-PLAYBACK-TO-NEW-CHAT.md"], added
    record["handoffChanges"] = {"modified": changed, "added": added}
    record["handoffSha256"] = sha(ROOT / added[0])
    record["agentInstructionsSha256"] = sha(ROOT / "AGENTS.md")
status = git("status", "--porcelain=v1", "--untracked-files=all", "-z")
(OUT / f"git-status-{phase}.nul").write_bytes(status)
target.write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n", "utf-8")
print(json.dumps({
    "phase": phase, "frozenArtifactsChecked": len(frozen) + 1,
    "issues": issues, "productFiles": len(products),
    "inputChanges": input_changes, "sourceFiles": len(source),
    "source63ZipExists": record["source63ZipExists"],
    "handoffChanges": record.get("handoffChanges"),
}, ensure_ascii=False))
