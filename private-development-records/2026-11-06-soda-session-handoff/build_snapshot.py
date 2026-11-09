"""Record the documentation-only handoff without changing product or Git state.

This reads the delivered baseline, current files and research artifacts. It
never restores missing APKs, runs product tests/builds, accesses a phone or
refreshes external repositories. The successor should hash/read after.json
directly rather than rerun this snapshot writer.
"""
import datetime
import hashlib
import json
import os
import re
import subprocess
from pathlib import Path

ROOT = Path("D:/AnLi")
OUT = Path(__file__).resolve().parent
HANDOFF = "HANDOFF-SESSION-2026-11-06-SODA-RESEARCH-TO-NEW-CHAT.md"
ENV = {**os.environ, "GIT_OPTIONAL_LOCKS": "0"}


def git(*args, directory=ROOT):
    return subprocess.check_output(["git", *args], cwd=directory, env=ENV).decode("utf-8")


def digest(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def record(path):
    return {"path": path.relative_to(ROOT).as_posix(), "bytes": path.stat().st_size,
            "sha256": digest(path)}


def main():
    previous = json.loads((ROOT / ".codex-artifacts/2026-11-05-release161/after.json").read_text(encoding="utf-8-sig"))
    before = json.loads((OUT / "before.json").read_text(encoding="utf-8"))
    issues, product, frozen = [], [], []
    selected = {}
    for row in previous["files"]:
        name = row["path"].replace("\\", "/")
        if not (name.startswith(("lib/", "android/", "third_party/", "assets/", "test/"))
                or name in ("pubspec.yaml", "pubspec.lock", "analysis_options.yaml")):
            continue
        path = ROOT / name
        if not path.is_file():
            issues.append("Missing product input: " + name)
            continue
        current = record(path)
        product.append(current)
        selected[name] = current
        if current["sha256"] != row["sha256"]:
            issues.append("Product differs from release161: " + name)

    # This is the post-cleanup baseline. Recycled historical APKs are not
    # enumerated from old pre-cleanup lists and are never restored.
    for row in previous["frozenArtifacts"]:
        path = ROOT / row["path"]
        if not path.is_file():
            issues.append("Missing post-cleanup frozen artifact: " + row["path"])
            continue
        current = record(path)
        frozen.append(current)
        selected[current["path"]] = current
        if current["sha256"] != row["sha256"] or current["bytes"] != row["bytes"]:
            issues.append("Changed post-cleanup frozen artifact: " + row["path"])

    research_roots = [ROOT / ".codex-artifacts" / name for name in (
        "2026-11-05-soda-module-analysis", "2026-11-05-soda-rootless-feasibility",
        "2026-11-05-soda-github-api-research")]
    research_count = 0
    for research in research_roots:
        for path in research.rglob("*"):
            if not path.is_file():
                continue
            relative_parts = path.relative_to(research).parts
            if any(part in ("repos", "qishui-api-upstream", ".git", "__pycache__") for part in relative_parts):
                continue
            current = record(path)
            selected[current["path"]] = current
            research_count += 1

    manifest = ROOT / ".codex-artifacts/2026-11-05-soda-github-api-research/reviewed-source-manifest.json"
    source_checks = []
    for repo in json.loads(manifest.read_text(encoding="utf-8")):
        folder = repo["repository"].split("/")[-1]
        checkout = manifest.parent / "repos" / folder
        head = git("rev-parse", "HEAD", directory=checkout).strip()
        source_checks.append({"repository": repo["repository"], "head": head,
                              "expected": repo["commit"], "matches": head == repo["commit"]})
        if head != repo["commit"]:
            issues.append("Changed source reference commit: " + repo["repository"])
        for item in repo["selected_files"]:
            path = checkout / item["path"]
            if not path.is_file():
                issues.append("Missing source reference: " + str(path))
                continue
            current = record(path)
            selected[current["path"]] = current
            if current["sha256"] != item["sha256"]:
                issues.append("Changed source reference: " + current["path"])

    for name in ("AGENTS.md", HANDOFF, "HANDOFF-CURRENT-SESSION-2026-11-05-v1.0.61.md",
                 "docs/fixes-2026-11-05-v1.0.61.md", "docs/INSTALL-v1.0.61.md",
                 "docs/validation-2026-11-05-v1.0.61.json"):
        current = record(ROOT / name)
        selected[name] = current
    for name in ("user-soda-login-reference.jpg", "AGENTS-before.md", "agents-prefix-verification.json", "before.json"):
        current = record(OUT / name)
        selected[current["path"]] = current

    handoff_text = (ROOT / HANDOFF).read_text(encoding="utf-8")
    broken_links = [value for value in re.findall(r"\]\(([^)]+)\)", handoff_text)
                    if value.lower().startswith("d:/") and value != str(OUT / "after.json").replace("\\", "/")
                    and not Path(value).exists()]
    issues.extend("Broken handoff link: " + value for value in broken_links)
    head, branch = git("rev-parse", "HEAD").strip(), git("branch", "--show-current").strip()
    index = digest(ROOT / ".git/index")
    staged = git("diff", "--cached", "--name-only").strip()
    status = git("status", "--porcelain=v1", "-uall")
    (OUT / "git-status-after.txt").write_text(status, encoding="utf-8")
    old_status = set((OUT / "git-status-before.txt").read_text(encoding="utf-8").splitlines())
    new_status = set(status.splitlines())
    added, removed = sorted(new_status - old_status), sorted(old_status - new_status)
    unexpected = [line for line in added if line != "?? " + HANDOFF]
    if unexpected or removed:
        issues.append("Unexpected Git status delta; inspect added/removed records")
    if head != before["head"] or branch != before["branch"]:
        issues.append("Branch or HEAD changed")
    old_index = next(row["sha256"] for row in before["files"] if row["path"] == ".git/index")
    if index != old_index or staged:
        issues.append("Index or staged state changed")

    result = {"handoff_date_local": "2026-11-06", "timezone": "Asia/Shanghai",
              "recorded_at_utc": datetime.datetime.now(datetime.timezone.utc).isoformat(),
              "scope": "Documentation-only handoff; hashes are not functional tests/device/account acceptance",
              "version": "1.0.61", "androidVersionCode": 82, "head": head, "branch": branch,
              "indexEmpty": not bool(staged), "indexSha256": index,
              "existing_product_inputs_checked": len(product), "product_differences": [x for x in issues if "Product" in x or "product" in x],
              "post_cleanup_frozen_artifacts_checked": len(frozen),
              "old_release_apks_recycled": 51, "old_release_apks_restored": False,
              "source_reference_commits": source_checks, "research_artifact_files": research_count,
              "files": [selected[key] for key in sorted(selected)],
              "frozenArtifacts": frozen,
              "allowed_document_changes": ["AGENTS.md", HANDOFF, ".codex-artifacts/2026-11-06-soda-session-handoff/"],
              "git_status_before_entries": len(old_status), "git_status_after_entries": len(new_status),
              "git_status_added": added, "git_status_removed": removed,
              "phone_access": False, "adb_used": False, "real_music_account_access": False,
              "sms_sent": False, "reward_written": False, "backend_access": False,
              "product_tests_run": False, "product_built": False, "git_committed": False,
              "git_pushed": False, "uploaded": False, "published": False,
              "successor_first_turn": "read only; report completed/unfinished/cautions, then wait",
              "issues": issues}
    (OUT / "after.json").write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({key: result[key] for key in (
        "existing_product_inputs_checked", "post_cleanup_frozen_artifacts_checked", "research_artifact_files",
        "git_status_before_entries", "git_status_after_entries", "git_status_added", "git_status_removed", "issues")}, ensure_ascii=False))
    print(json.dumps({"snapshot_files": len(selected), "head": head, "index_empty": not bool(staged)}, ensure_ascii=False))
    return 1 if issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
