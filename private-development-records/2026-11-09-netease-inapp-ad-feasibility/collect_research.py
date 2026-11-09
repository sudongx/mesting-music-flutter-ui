"""Collect static, non-account evidence for an in-Mesting ad feasibility review.

This script never runs the APK or downloaded JavaScript, requests an ad, reports
an impression/click, or submits a reward. Outputs stay in this private directory.
Existing outputs are refused so earlier evidence cannot silently be replaced.
"""

from __future__ import annotations

import hashlib
import json
import tarfile
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import Request, urlopen


WORKSPACE = Path("D:/AnLi")
OUTPUT = Path(__file__).resolve().parent
OLD = WORKSPACE / ".codex-artifacts/2026-11-05-release159/research-private"
CACHE = WORKSPACE / ".codex-artifacts/2026-10-28-music-api-feasibility/netease-enhanced-4.41.1.tgz"
REPOSITORY = "NeteaseCloudMusicApiEnhanced/api-enhanced"


def digest(path: Path) -> str:
    """Hash immutable inputs without executing or modifying them."""
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def write_json(name: str, value: object) -> None:
    """Keep complete selected evidence and reject accidental overwrites."""
    with (OUTPUT / name).open("x", encoding="utf-8", newline="\n") as stream:
        json.dump(value, stream, ensure_ascii=False, indent=2)
        stream.write("\n")


def read_public(url: str) -> bytes:
    """Fetch only the explicitly named public source, without authentication."""
    request = Request(url, headers={"User-Agent": "Mesting-static-feasibility-review"})
    with urlopen(request, timeout=20) as response:
        return response.read(2_000_000)


def main() -> None:
    if OUTPUT != WORKSPACE / ".codex-artifacts/2026-11-09-netease-inapp-ad-feasibility":
        raise RuntimeError("Unexpected private evidence output directory")

    # Reuse the earlier complete static decode, selecting functions rather than
    # line-searching its large single-line JSON or treating it as runtime proof.
    functions = json.loads((OLD / "rnfree-static-functions.json").read_text(encoding="utf-8-sig"))
    selected_ids = {6865, 7977, 7978, 7988, 9708, 9806, 9807, 9809}
    selected = [entry for entry in functions if entry["i"] in selected_ids]
    write_json("selected-rn-functions.json", selected)
    module_map = json.loads((OLD / "rnfree-biz_process_modules.android.json").read_text(encoding="utf-8-sig"))
    write_json("selected-rn-module-inventory.json", {
        key: value for key, value in module_map.items()
        if key.startswith("/workspace/git-source/src/") or "/apis/Url/" in key
    })

    # Compare the cached compatibility package as a lead, not as official SDK
    # documentation. Store source only; never import or run these modules.
    cached_sources = {}
    with tarfile.open(CACHE, "r:gz") as archive:
        metadata = json.load(archive.extractfile("package/package.json"))
        for name in ["module/ad_get.js", "module/ad_listening_rights_gain.js", "util/option.js"]:
            cached_sources[name] = archive.extractfile("package/" + name).read().decode("utf-8")
        request_lines = archive.extractfile("package/util/request.js").read().decode("utf-8").splitlines()
        cached_sources["util/request.js:292-339"] = "\n".join(request_lines[291:339])
    write_json("cached-compatibility-source.json", {
        "package": {key: metadata.get(key) for key in ["name", "version", "repository", "homepage"]},
        "sources": cached_sources,
        "authority": "third-party implementation; not official renderer or acceptance evidence",
    })

    # Pin any fresh public comparison to an exact Git commit. A network failure
    # remains an explicit gap; it does not trigger installation or account use.
    public = {"retrievedAt": datetime.now(timezone.utc).isoformat(), "sources": [], "errors": []}
    try:
        reference_url = f"https://api.github.com/repos/{REPOSITORY}/git/ref/heads/main"
        reference = json.loads(read_public(reference_url))
        commit = reference["object"]["sha"]
        public["commit"] = commit
        for name in ["package.json", "module/ad_get.js", "module/ad_listening_rights_gain.js"]:
            url = f"https://raw.githubusercontent.com/{REPOSITORY}/{commit}/{name}"
            try:
                data = read_public(url)
                filename = "public-" + name.replace("/", "--")
                with (OUTPUT / filename).open("xb") as stream:
                    stream.write(data)
                public["sources"].append({
                    "path": filename, "url": url, "bytes": len(data),
                    "sha256": hashlib.sha256(data).hexdigest(),
                })
            except Exception as error:
                public["errors"].append({"url": url, "error": type(error).__name__ + ": " + str(error)})
    except Exception as error:
        public["errors"].append({"error": type(error).__name__ + ": " + str(error)})
    write_json("public-source-provenance.json", public)

    inputs = [
        WORKSPACE / ".codex-artifacts/2026-11-01-together-history-review/com.netease.cloudmusic-9.6.15.apk",
        WORKSPACE / ".codex-artifacts/2026-11-08-release180/after.json",
        WORKSPACE / ".codex-artifacts/2026-11-08-netease-foreground-ad-research/rea-evidence.json",
        OLD / "rnfree-static-functions.json", OLD / "rnfree-provenance.json",
        OLD / "rnfree-appjson.json", CACHE,
    ]
    write_json("inputs-and-scope.json", {
        "createdAt": datetime.now(timezone.utc).isoformat(),
        "inputs": [{"path": str(path), "bytes": path.stat().st_size, "sha256": digest(path)} for path in inputs],
        "productChanged": False, "deviceAdbAccountNasAccess": False,
        "officialAdRequestOrRewardSubmitted": False,
        "scope": "private static analysis and anonymous public source retrieval only",
    })
    print(json.dumps({"selectedFunctions": len(selected), "publicCommit": public.get("commit"),
                      "publicFiles": len(public["sources"]), "publicErrors": public["errors"]}, ensure_ascii=True))


if __name__ == "__main__":
    main()
