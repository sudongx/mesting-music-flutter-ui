# PC/Web contract findings for 1.0.67 (2026-11-06)

Scope: read existing public-source snapshots and fetch selected files from the
same pinned original-author commits. No login, account credential access, real
playlist write, device operation, public signer call or REA shared-session
mutation was performed by this research worker.

## Sources and provenance

- mytv-android/myMusic commit `9c0f1f0ccb1b1046306f61c50998e327c040a6bc`:
  `app/src/main/java/com/mytv/mymusic/data/native/SodaProvider.kt` and
  `SodaDecrypt.kt`, saved through Firecrawl as `mymusic-SodaProvider.md` and
  `mymusic-SodaDecrypt.md`.
  Base URL: https://github.com/mytv-android/myMusic/tree/9c0f1f0ccb1b1046306f61c50998e327c040a6bc
- sodahub-org/libresoda commit `5edd2ff3b825f0a16b1e281204822ee06842df9c`:
  `src/soda/{track,mod,playlist_edit,types,download}.rs`,
  `docs/{CLIENT-API,FULL-QUALITY-STREAM,MSSDK-PORTING}.md`; saved as
  `libresoda-*.md` in this directory.
  Base URL: https://github.com/sodahub-org/libresoda/tree/5edd2ff3b825f0a16b1e281204822ee06842df9c
- AGPL-3.0 license copies from the existing pinned snapshots are saved as
  `mymusic-LICENSE.txt` and `libresoda-sodam-LICENSE.txt`. Both copies have SHA256
  `20b067f86de375aae6db0f283ab2e65de24d537733b89bd58432c101259d84cf`.
- `public-reference-artifacts.json` hashes the acquired local *scrape outputs*;
  those hashes are not claimed to be raw upstream Git blob hashes.

Source statements about successful network experiments remain the original
authors' reported experiments. They are not new Mesting account acceptance.

## Official full-track requests

`libresoda-track.md` lines 145-200 and `mymusic-SodaProvider.md` lines 1167-1217
implement:

```
POST https://api.qishui.com/luna/pc/track_v2?<PC app public parameters>
Content-Type: application/json; charset=utf-8
X-SS-STUB: UPPERCASE_MD5(exact_body_bytes)
x-luna-background-type: foreground
x-luna-is-background-req: 0
x-luna-is-local-user: 0  (myMusic full-track request)
Cookie: [REDACTED]

{"track_id":"...","media_type":"track","queue_type":"favorite_track_playlist","scene_name":"library"}
```

The complete URL, headers and exact body are prepared before requesting
per-request application signature headers `x-helios` and `x-medusa`.
`libresoda-mod.md` lines 281-324 define PC app parameters; those differ from
the QR Web identity (`device_platform=windows`, `channel=official`,
`version_name=3.3.0`, etc.). Fingerprints must match the chosen signer rather
than being mixed with a different identity.

Ordinary GET of the same path with Web parameters is a metadata/public-stream
path in these implementations. It is not evidence for full account playback.
Authors explicitly handle HTTP 200 with zero bytes as a missing/rejected
application signature. `libresoda-full-quality.md` lines 43-70 report that a
valid Web `a_bogus` still gives empty App responses, while exact signed requests
work; changing body key order invalidates that signature.

myMusic does not supply an Android-local replacement for this signature:
`mymusic-SodaProvider.md` lines 858-913 and 2920-2962 use a configurable/default
external SodaM signature service. Disabling it leaves only public/preview
streams. No public service was called here and its URL/token are not reproduced
in this report. Its source code is therefore not proof that WebView signing
alone can provide complete official media.

The original author's Cookie-substitution experiment suggests the full-track
signature need not include account Cookie. If a signature service is later
explicitly authorized, first validate an unsigned-credential contract and keep
Cookie/token and response media authorization on-device and sent only to the
official hosts. Do not copy myMusic's entire Cookie-bearing header map to a
third party.

## Media model and decryption

Top-level track response (`mymusic-SodaProvider.md` lines 3341-3380):
`track` or `track_info`, `track_player` containing `media_id`,
`url_player_info` and `video_model`, plus `lyric` and status fields.
`video_model` can be a JSON object or JSON-encoded string; myMusic unwraps up to
three string levels before parsing.

The second hop (`mymusic-SodaProvider.md` lines 925-956, 3519-3558) uses:
`Result.Data.PlayInfoList[]`, where fields are `MainPlayUrl`, `BackupPlayUrl`,
`PlayAuth`, `Size`, `Bitrate`, `Format`, `Duration` (double seconds), `Quality`
(string). Preview versus full compares actual stream duration with catalog
duration. Catalog milliseconds or `bit_rates` size are not full-stream proof.
The existing Mesting parser did not recognize all PascalCase fields or
`track_player` before this implementation work.

For authorized CENC streams, myMusic downloads the *complete* official media
and calls `SodaDecrypt.decryptAudio(bytes, playAuth)` before playback cache use
(lines 1224-1244). The algorithm in `mymusic-SodaDecrypt.md` is whole-file
MP4 CENC, not a partial-file/fragmented streaming implementation:

1. `extractKey` (174-190): Base64-decode PlayAuth; derive padding from the XOR
   of the first three bytes minus 48; transform its inner bytes with the
   `decryptSpadeInner` routine; use its base-36 prefix to trim the suffix; parse
   the resulting hex string into the server-authorized 16-byte AES key.
2. Read `moov/trak/mdia/minf/stbl`, `stsz` sample sizes, `senc` IV/subsample
   records and `tenc` 8/16-byte IV size, then process `mdat` sample bytes.
3. AES-CTR decrypt each sample (right-pad its IV to 16 bytes), preserving clear
   subsample regions. Preserve exact lengths and reject malformed metadata.
4. Restore `stsd`'s encrypted sample entry `enca` to its `frma` original codec
   (normally `mp4a`).

This does not solve the preceding request/signature requirement or grant
download rights. Use only actual authorization supplied for the current
account/request; do not synthesize keys or infer grant from catalog metadata.

## Playlist writes (PC contract)

`libresoda-playlist-edit.md` lines 1-35, 248-340, and `libresoda-mod.md`
lines 393-431:

| Operation | POST path | JSON body |
| --- | --- | --- |
| Create | `/luna/pc/me/playlist` | `name`, `is_private`, optional `media:[{id,type}]` |
| Update privacy/metadata | `/luna/pc/me/playlist/update` | `playlist_id`, optional `name`, `description`, `is_private`, `cover_uri` |
| Delete playlists | `/luna/pc/me/playlist/delete` | `playlist_ids:[...]` |
| Add songs | `/luna/pc/me/playlist/media/append` | `playlist_id`, `media:[{id,type:"track"}]` |
| Remove songs | `/luna/pc/me/playlist/media/delete` | `playlist_id`, `media:[{id,type:"track"}]` |
| Sort songs | `/luna/me/playlist/media/sort` | `playlist_id`, `media` in target order |

Sorting is explicitly **without** a `/pc` path in this pinned PC contract.
Each POST is serialized once, receives its exact-body MD5 and application
signature, and is sent with that unchanged body. Native Android field/form
contracts should not be mixed with these JSON PC contracts.

Success responses may omit `status_code`, returning `playlist` and
`status_info`; explicit nonzero codes are failure. An empty response is not
success. Mutations require same-owner guards and a new read-back to confirm
actual state; no such real write/read-back occurred in this research.
The alternate `track_ids` and import endpoints are marked IDL-only/unverified
by the author; do not silently substitute them for the `media` calls.

Playlist DTO (`libresoda-types.md` 185-222): `owner` has `id`, `nickname`,
`public_name`; privacy is `is_private` boolean; counts include `count_tracks`,
`resource_cnt.track_cnt`, and `stats.count_played/count_collected`. myMusic's
older DTO additionally accepts `play_count`. The current account's ownership
must be checked using actual `owner.id`, not its display name.

## Rights and unresolved items

- Neither inspected myMusic nor libresoda download pipeline implements an
  official `check_download`/quota-consumption confirmation. They call the same
  media resolution/download/decrypt pipeline. Their `downloadUrl` is not proof
  of an official download permission grant.
- Track rights metadata in myMusic is `label_info.only_vip_download`,
  `only_vip_playable`, `quality_only_vip_can_download`,
  `quality_only_vip_can_play`, and `quality_map[quality]` with
  `download_detail.need_vip`/`play_detail.need_vip`. These are requirements,
  not proof that the current account has permission.
- Accurate official Web download check/charge paths and response contracts
  remain unresolved by these public references; the parent is investigating
  the actual authorized official APK.
- Accurate current `/pc/me` social-count and total-listening-time fields and
  units were not established by the inspected DTOs. myMusic only models
  `my_info.{id,nickname,public_name,larger_avatar_url}`. Do not populate screenshot
  counts or guess units. An older report mentions `is_vip` and `vip_stage`
  without a complete response fixture, so those are not independently verified
  schema/acceptance evidence here.
