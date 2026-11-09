"""Fetch the Android link observed in the official site as inert analysis data."""
import hashlib
import json
import re
import urllib.request
from pathlib import Path

root = Path(__file__).resolve().parent
entry = "https://ugapk.com/GMg3"
history = []

class RecordedRedirects(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, request, stream, code, message, headers, new_url):
        history.append({"from": request.full_url, "status": code, "to": new_url})
        return super().redirect_request(request, stream, code, message, headers, new_url)

opener = urllib.request.build_opener(RecordedRedirects())
request = urllib.request.Request(entry, headers={
    "User-Agent": "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130.0 Mobile Safari/537.36",
})
with opener.open(request, timeout=45) as response:
    content_type = response.headers.get("Content-Type", "")
    first = response.read(65536)
    info = {"official_page": "https://www.douyin.com/qishui/",
            "official_script": "https://lf-luna.qishui.com/obj/music-luna-fe/luna/home/1.0.0.287/assets/index-d6b15e58.js",
            "entry": entry, "redirects": history, "resolved_url": response.url,
            "status": response.status, "content_type": content_type,
            "content_length": response.headers.get("Content-Length"), "executed": False}
    if first.startswith(b"PK\x03\x04"):
        target = root / "official-android-latest.apk"
        if target.exists():
            raise SystemExit("Existing artifact retained; choose a new destination before fetching again")
        digest, total, checkpoint = hashlib.sha256(), 0, 0
        with target.open("xb") as output:
            chunk = first
            while chunk:
                total += len(chunk)
                if total > 600 * 1024 * 1024:
                    raise SystemExit("Download exceeds the 600 MiB analysis bound")
                output.write(chunk)
                digest.update(chunk)
                if total - checkpoint >= 32 * 1024 * 1024:
                    print(json.dumps({"downloaded_mib": total // 1024 // 1024}), flush=True)
                    checkpoint = total
                chunk = response.read(1024 * 1024)
        info.update(path=str(target), bytes=total, sha256=digest.hexdigest())
    else:
        body = first + response.read(2 * 1024 * 1024)
        (root / "official-android-entry.html").write_bytes(body)
        text = body.decode("utf-8", errors="replace")
        info.update(body_bytes=len(body), text_preview=text[:1200],
                    urls=re.findall(r"https?[^\s\"'<>]+", text)[:20])
(root / "official-android-download.json").write_text(
    json.dumps(info, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps(info, ensure_ascii=False), flush=True)
