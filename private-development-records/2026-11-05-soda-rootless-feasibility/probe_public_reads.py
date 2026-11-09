"""Bounded anonymous catalog probes; never login, send SMS, or claim a reward.

POSTs here are catalog reads observed in the reviewed upstream implementation.
No account cookie, device ID, forged security signature, or app session is sent.
HTTP success is recorded separately from business success and usable content.
"""
import hashlib
import json
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
MAX_BODY = 4 * 1024 * 1024
USER_AGENT = "Luna/19.1.0 Android"
RESULTS = []


def scrub(value, key=""):
    """Keep response shape and public metadata without retaining auth material."""
    if any(part in key.lower() for part in ("token", "cookie", "session", "secret", "spade", "play_auth")):
        return "[redacted]"
    if isinstance(value, dict):
        return {k: scrub(v, k) for k, v in value.items()}
    if isinstance(value, list):
        return [scrub(v, key) for v in value]
    if isinstance(value, str) and value.startswith(("https://", "http://")):
        url = urllib.parse.urlsplit(value)
        return urllib.parse.urlunsplit((url.scheme, url.netloc, url.path, "[redacted]" if url.query else "", ""))
    return value


def request(label, path, body=None, host="https://beta-luna.douyin.com", ua=USER_AGENT):
    """One request per read, no implicit business retry; cap response bytes."""
    url = host + path
    headers = {"User-Agent": ua, "Accept": "application/json"}
    payload = None
    if body is not None:
        headers["Content-Type"] = "application/json; charset=utf-8"
        payload = json.dumps(body).encode()
    req = urllib.request.Request(url, data=payload, headers=headers)
    start = time.monotonic()
    record = {"label": label, "url": url, "method": req.get_method(),
              "body": body, "anonymous": True, "account_or_security_headers": False}
    parsed = None
    try:
        try:
            response = urllib.request.urlopen(req, timeout=18)
        except urllib.error.HTTPError as error:
            response = error
        with response:
            content = response.read(MAX_BODY + 1)
            record.update(http_status=response.status,
                          content_type=response.headers.get("Content-Type"),
                          response_bytes=len(content), truncated=len(content) > MAX_BODY)
            record["sha256"] = hashlib.sha256(content).hexdigest()
            if len(content) <= MAX_BODY:
                try:
                    parsed = json.loads(content)
                except (ValueError, UnicodeDecodeError):
                    record["non_json_preview"] = content[:140].decode("utf-8", "replace")
            record["json"] = scrub(parsed)
    except Exception as error:
        record["error"] = type(error).__name__ + ": " + str(error)
    record["elapsed_seconds"] = round(time.monotonic() - start, 3)
    RESULTS.append(record)
    print(json.dumps({k: v for k, v in record.items() if k not in ("json", "body")}, ensure_ascii=False), flush=True)
    return parsed


def entities(value, key):
    """Locate actual returned entities instead of guessing identifiers."""
    if isinstance(value, dict):
        item = value.get(key)
        if isinstance(item, dict) and (item.get("id") or item.get(key + "_id")):
            yield item
        for child in value.values():
            yield from entities(child, key)
    elif isinstance(value, list):
        for child in value:
            yield from entities(child, key)


def main():
    discover = request("discover", "/luna/discover", {"first_request": True})
    mix = request("discover-mix", "/luna/discover/mix", {"count": 3})
    request("feed-modes", "/luna/feed/mode", {})
    # A minimal anonymous read does not invent registered device identifiers.
    query = urllib.parse.urlencode({"q": "晴天", "cursor": 0, "aid": "386088", "app_name": "luna_pc"})
    request("pc-search-without-signature-or-device", "/luna/pc/search/track?" + query,
            host="https://api.qishui.com", ua="LunaPC/3.0.0(290101097)")
    playlists = list(entities(mix, "playlist"))
    if playlists:
        playlist = playlists[0]
        playlist_id = str(playlist.get("id") or playlist.get("playlist_id"))
        detail = request("playlist-detail", "/luna/playlist/detail", {"playlist_id": playlist_id, "count": 3})
        tracks, seen = [], set()
        for track in entities(detail, "track"):
            track_id = str(track.get("id") or track.get("track_id"))
            if track_id not in seen:
                seen.add(track_id)
                tracks.append(track)
        for track in tracks[:3]:
            track_id = str(track.get("id") or track.get("track_id"))
            request("media-player:" + track_id, "/luna/media-player", {
                "media_id": track_id, "media_type": "track", "queue_type": "",
                "enable_refresh_api": False, "enable_dash": True})
            query = urllib.parse.urlencode({"track_id": track_id, "device_platform": "web"})
            request("h5-seo:" + track_id, "/luna/h5/seo_track?" + query,
                    ua="Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36")
    destination = ROOT / "anonymous-public-reads-2026-11-05.json"
    if destination.exists():
        raise FileExistsError("Preserve previous run rather than overwrite research")
    destination.write_text(json.dumps({"scope": __doc__, "requests": RESULTS}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({"saved": str(destination), "requests": len(RESULTS)}))


if __name__ == "__main__":
    main()
