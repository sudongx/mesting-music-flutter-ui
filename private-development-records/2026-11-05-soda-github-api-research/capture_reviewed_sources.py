"""Record pinned public source identities and bounded relevant line locations.

Read only cloned source files. Never execute a repository's scripts, tests,
install hooks, signer binaries, account logins, or reward requests.
"""
import hashlib
import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent
REPOS = {
    "TuneWeave": ("MOPELotus/TuneWeave", [
        "crates/tuneweave-provider-soda/src/provider.rs",
        "crates/tuneweave-provider-soda/src/login.rs",
        "crates/tuneweave-provider-soda/src/bdms.rs", "docs/authentication.md"]),
    "music-lib": ("guohuiyuan/music-lib", ["soda/login.go", "soda/signature.go", "soda/localsigner.go", "soda/download.go"]),
    "baka-plugins": ("Zencok/baka-plugins", ["plugins/qishui.js"]),
    "musicdl": ("CharlesPikachu/musicdl", ["musicdl/modules/sources/soda.py"]),
    "myMusic": ("mytv-android/myMusic", [
        "app/src/main/java/com/mytv/mymusic/data/native/SodaWelfare.kt",
        "app/src/main/java/com/mytv/mymusic/data/native/SodaProvider.kt",
        "app/src/main/java/com/mytv/mymusic/data/native/SodaQrLogin.kt",
        "app/src/test/java/com/mytv/mymusic/data/native/SodaWelfareTest.kt"]),
    "MeloX-Android": ("lladlam/MeloX-Android", ["docs/QISHUI.md"]),
    "libresoda": ("sodahub-org/libresoda", ["README.md", "docs/QR-LOGIN.md", "src/soda/qr_login.rs"]),
    "QishuiHelper": ("1093791954/QishuiHelper", ["README.md"]),
}
EXACT = re.compile(r"/luna/(?:pc/track_v2|commerce/v2/(?:commerce_info|apply_free_vip)|advert/incentive/done)|/passport/(?:web/get_qrcode|mobile/sms_login)|Capability::(?:QrLogin|AudioStream|AudioDownload)|SIGNER_NODE_ENV|QISHUI_XHEADERS_SIGN_URL|DEFAULT_SIGNER_URL|def _parsewith(?:qiuyu|qqovo)|_parsewithofficialvip|\.post\(f'https://api.qishui.com/luna/pc/track_v2")
report = []
for folder, (repository, selected) in REPOS.items():
    root = ROOT / "repos" / folder
    commit = subprocess.check_output(["git", "-C", str(root), "rev-parse", "HEAD"]).decode().strip()
    files = []
    for name in selected:
        path = root / name
        if not path.is_file():
            files.append({"path": name, "missing_checkout": True})
            continue
        data = path.read_bytes()
        lines = data.decode("utf-8-sig").splitlines()
        hits = [{"line": i + 1, "snippet": line[:300]} for i, line in enumerate(lines)
                if len(line) < 1500 and EXACT.search(line)]
        files.append({"path": name, "sha256": hashlib.sha256(data).hexdigest(),
                      "url": f"https://github.com/{repository}/blob/{commit}/{name}",
                      "lines": len(lines), "relevant_locations": hits[:24]})
    report.append({"repository": repository, "commit": commit, "selected_files": files,
                   "scope": "Public source inspection only; no actual account/signer/media runtime validation"})

output = ROOT / "reviewed-source-manifest.json"
output.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
for item in report:
    print(json.dumps({"repo": item["repository"], "commit": item["commit"],
                      "files": len(item["selected_files"]),
                      "missing": [x["path"] for x in item["selected_files"] if x.get("missing_checkout")]}, ensure_ascii=False))
