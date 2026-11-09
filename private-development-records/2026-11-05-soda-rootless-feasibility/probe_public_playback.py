"""Check named official public tracks without accounts, SMS, or DRM handling.

Reuses identities returned by the prior anonymous read.  Playback completeness
is decided against track duration, never against HTTP status or a nonempty URL.
The only follow-up request variant updates the documented app User-Agent from
the reviewed upstream's 19.1.0 to the downloaded official 21.5.0 version.
"""
import json
import urllib.parse
import urllib.request
from pathlib import Path
import probe_public_reads as reads

ROOT = Path(__file__).resolve().parent
prior = json.loads((ROOT / "anonymous-public-reads-2026-11-05.json").read_text(encoding="utf-8"))
public_song = next(r["json"] for r in prior["requests"] if r["label"].startswith("h5-seo:"))
tracks = [r["track"] for r in public_song["chart_tracks"][:3]]
summary = []

for index, track in enumerate(tracks):
    track_id = track["id"]
    if index == 0:
        reads.request("media-player-official-version-ua:" + track_id, "/luna/media-player", {
            "media_id": track_id, "media_type": "track", "queue_type": "",
            "enable_refresh_api": False, "enable_dash": True}, ua="Luna/21.5.0 Android")
    data = reads.request("h5-seo:" + track_id, "/luna/h5/seo_track?" + urllib.parse.urlencode({
        "track_id": track_id, "device_platform": "web"}),
        ua="Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36") or {}
    model = data.get("track_player", {}).get("video_model")
    try:
        model = json.loads(model) if isinstance(model, str) else (model or {})
    except ValueError:
        model = {}
    duration = float(model.get("video_duration") or 0)
    expected = float(track.get("duration") or 0) / 1000
    record = {"track_id": track_id, "title": track.get("name"),
              "artists": [artist.get("name") for artist in track.get("artists", [])],
              "catalog_duration_seconds": expected, "returned_duration_seconds": duration,
              "matches_full_duration": expected > 0 and abs(duration - expected) <= 2,
              "has_audio_url": any(bool(row.get("main_url")) for row in model.get("video_list", [])),
              "media_formats": [row.get("video_meta", {}).get("vtype") for row in model.get("video_list", [])],
              "decoded_or_played": False}
    # Only inspect an anonymous audio header; never unwrap encrypted media.
    rows = model.get("video_list") or []
    if rows and rows[0].get("main_url"):
        url = rows[0]["main_url"]
        host = urllib.parse.urlsplit(url).hostname or ""
        if host.endswith(".douyinvod.com"):
            try:
                req = urllib.request.Request(url, headers={"Range": "bytes=0-65535", "User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(req, timeout=18) as response:
                    head = response.read(65536)
                    record["bounded_header"] = {"status": response.status,
                        "type": response.headers.get("Content-Type"),
                        "content_range": response.headers.get("Content-Range"),
                        "bytes_read": len(head), "has_mp4_ftyp": head[4:8] == b"ftyp"}
            except Exception as error:
                record["bounded_header_error"] = type(error).__name__ + ": " + str(error)
    summary.append(record)
    # Replace the serialized model after inspection: raw signed URLs are not
    # required by this result and should not leak through an embedded string.
    for item in reads.RESULTS:
        body = item.get("json")
        if isinstance(body, dict) and "track_player" in body:
            player = body["track_player"]
            if isinstance(player.get("video_model"), str):
                try:
                    player["video_model"] = reads.scrub(json.loads(player["video_model"]))
                except ValueError:
                    player["video_model"] = "[unparsed model omitted]"
    print(json.dumps(record, ensure_ascii=False), flush=True)

destination = ROOT / "anonymous-public-playback-2026-11-05.json"
if destination.exists():
    raise FileExistsError("Preserve previous run")
destination.write_text(json.dumps({"scope": __doc__, "tracks": summary, "requests": reads.RESULTS},
                                 ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"saved": str(destination), "tracks": len(summary)}))
