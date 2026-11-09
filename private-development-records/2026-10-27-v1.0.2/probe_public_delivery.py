"""Read only public APK endpoints and compare bounded bytes with the delivery.

The full primary download is already covered by the production repository test.
This small probe adds HEAD and first-range evidence for both public URLs without
recording redirect tokens, browser sessions, cookies, or administrator responses.
"""
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
from urllib.request import Request, urlopen

ROOT = Path(r"D:\AnLi")
APK = ROOT / "release/Mesting-Music-v1.0.2.apk"
URLS = {
    "primary": "https://download.csnas.asia/music/download",
    "backup": "https://download1.csnas.asia/music/download?direct=backup",
}
PREFIX_SIZE = 65536
with APK.open("rb") as stream:
    expected_prefix = stream.read(PREFIX_SIZE)
expected_digest = hashlib.sha256(expected_prefix).hexdigest().upper()


def probe(item):
    name, url = item
    result = {"endpoint": name, "url": url}
    try:
        with urlopen(Request(url, method="HEAD"), timeout=25) as response:
            result["head"] = {
                "status": response.status,
                "contentLength": response.headers.get("Content-Length"),
                "acceptRanges": response.headers.get("Accept-Ranges"),
            }
    except Exception as error:
        # Do not persist exception text because it may contain redirect queries.
        result["head"] = {"errorType": type(error).__name__}
    try:
        request = Request(url, headers={"Range": f"bytes=0-{PREFIX_SIZE-1}"})
        with urlopen(request, timeout=25) as response:
            prefix = response.read(PREFIX_SIZE)
            result["boundedRange"] = {
                "status": response.status,
                "contentRange": response.headers.get("Content-Range"),
                "contentLength": response.headers.get("Content-Length"),
                "readBytes": len(prefix),
                "sha256": hashlib.sha256(prefix).hexdigest().upper(),
                "matchesLocalApkPrefix": prefix == expected_prefix,
            }
    except Exception as error:
        result["boundedRange"] = {"errorType": type(error).__name__}
    return result


with ThreadPoolExecutor(max_workers=2) as executor:
    results = list(executor.map(probe, URLS.items()))
result = {
    "checkedAtUtc": datetime.now(timezone.utc).isoformat(),
    "publicVersion": "1.0.2",
    "versionCode": 23,
    "expectedFileBytes": APK.stat().st_size,
    "expectedPrefixSha256": expected_digest,
    "prefixBytes": PREFIX_SIZE,
    "endpoints": results,
    "fullBackupDownloadVerified": False,
    "primaryFullDownloadProof": "live-client-verification.json",
    "phoneAccessPerformed": False,
}
encoded = json.dumps(result, ensure_ascii=False, indent=2) + "\n"
for folder in (
    ROOT / ".codex-artifacts/2026-10-27-v1.0.2",
    ROOT / "docs/version-archive/v1.0.2-evidence",
):
    (folder / "public-endpoints-verification.json").write_text(encoded, encoding="utf-8")
print(encoded)
