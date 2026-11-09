# Official NetEase listening-time protocol: bounded static findings

2026-11-01. No phone, ADB, emulator, target execution, real account, service writes, Git mutation or publication. Product/test files were not edited by this investigator.

## Verified artifact and coverage

Original official Android distribution: NetEase CloudMusic 9.6.15/code9006015, application-bao distribution acquired earlier from https://sj.qq.com/appdetail/com.netease.cloudmusic ; original SHA256 `e6427bcb35ccd9e8858ee55c46ec3db56b2f09871adcd8e897244d96cfcf7894`, 224823452 bytes. Signature and upstream MD5 were verified in the original investigation. Static SDK smali here comes directly from that full original APK.

REA whole-APK timeout was already established; not repeated. REA 6.4.0/JADX0.7.1 was run against original-byte classes18 and classes19 DEX carriers with original manifest. See `classes18-provenance.json`, `derived-provenance.json` for all member and carrier hashes. These are partial unsigned static carriers, not original installable signed APKs or whole-app analysis. SDK outputs are not represented as REA Evidence.

## Core song log fields (implementation-ready)

Original core player class `qn0.z0.x3(Object...)` builds the generic music log. Exact SDK body: `core-x3.smali.txt`; complete REA Java body: `core-log.java.txt`, `rea-core-log.json`.

- REA Evidence **ev_bb528ee62bfc2a6d6451d3595355c9e95b308883faab6baeea702d16aa40d11f** (core x3).
- `realtime` is `(q0(songId) + saved SongPlayedTime.realTime)/1000`. SDK body lines583-615.
- `qn0.j.q0(songId)` delegates to `bi0.p0.X`; that method's dispatch string is **getPlayedTime**. Exact files `core-player-base.smali.txt` lines14671+, `p0-realtime.smali.txt`. q0 REA Evidence **ev_7ceeeec19602dff3033d4eaf19c8ca7fd0f61eba6b1f7ce9fb74b95aed2769b9**.
- `time` is `(bi0.p0.Y(songId) + saved SongPlayedTime.time)/1000`. SDK lines1359+. `Y` dispatches **getPlayedTimeWithSpeed**, verified in `p0-mediatime.smali.txt`. Therefore audible real-time and speed-weighted audible media-time are distinct; don't fill realtime with seeked position or full song length, and don't double a real-second counter merely because the song plays at2x.
- `startlogtime` reads `IPlayService.getMusicStartLogTime()` (SDK1229+). The service getter returns its original `startLogTime` field (`service-logtime.smali.txt`); web-audio independent implementation uses Unix seconds `System.currentTimeMillis()/1000`, supporting seconds as client field units. Original song time should be captured when its audio starts, never replaced by retry/send time.
- `status` is background **back** or foreground **front**, `id` is numeric song/filter ID, `type` is the player resource type, `source`/`sourceId` describe the origin. Additional native fields include wifi, download, bitrate, file, copyright, lags, refer/context and entitlement properties. These additional values cannot all be truthfully reproduced from current DTOs; do not invent native entitlements, device measurements or official UI source metadata.
- Existing Mesting report has action `startplay`/`play` and `time`, but omits **realtime and original startlogtime**. This is an established payload discrepancy. It is not live proof of the sole cloud-footprint indexing failure.

## Action/end/envelope scope

- Native core start path `qn0.z0.h()` calls x3 without end parameters, then emits **startplay** (original SDK in `core-genlog.smali.txt`). End path constructs x3 parameters **end**, caller-supplied reason, format, errorcode, end_source. End write emits **play**. `core-genlog.smali.txt` near8190+/31900+ preserves the caller data flow.
- Independent official web-audio `s.N()` logs startplay; `s.M()` logs play with time in seconds and an end reason enum, via IStatistic. REA Evidence **ev_e675e97374f172389db2942efa494f599f9af61c5e111a965c642d2b51933e5b**, **ev_604962bd11a8dc0efe86a153a8f634115c717b6ab96debbbe36ddc0e0572e272**. It is a separate web-audio path, not a substitute for core-player proof.
- Native core `x3` receives its end reason from callers, so a lifecycle checkpoint is not automatically a completed-song **playend**. A pause/final segment design must preserve actual measured intervals and cannot repeatedly send cumulative totals as additive playend events. This investigation did not prove a dedicated additive-duration heartbeat protocol.
- IStatistic passes action+JSON to configured BI stubs; the legacy stub captures event wall-clock before enqueueing, then forwards original timestamp+JSON to its configured formatter. `statistic-impl.smali.txt`, `stat-f0.smali.txt` logJSON/H/w and `legacy-envelope.smali.txt` record this. Current investigation did not complete that formatter's HTTP/native upload envelope and identity. **Keep the existing demonstrated clientlog eapi endpoint/transport until exact native alternative is verified**; do not claim changing os/appver makes it official/native-equivalent.
- Do not add speculative top-level historical event timestamp fields based on string matches. Original startlogtime is a verified payload field; server backdating acceptance is unknown.

## Footprint read-back, distinct from recent plays

Original `s11.i.p()` calls **music/multi/terminal/widget/listen/data**, no extra arguments; q(JSONObject) parses response `data` as JSON into **FootPrintCalendarData**, caches it, and returns the DTO. SDK `footprint-cache.smali.txt` lines1440+ (route) and720+ (parser). This is the official footprint calendar widget aggregate read, not `/record/recent/song`.

REA FootPrintCalendarData class Evidence **ev_c8837157a0ec464222b73164278f9ea37fa3bda68c7ec94eb4b33b8facefa031**. Exact fields:

- monthDate String
- hourDuration int
- minuteDuration int
- listenDay String
- durationDetails List<DurationDetail>
- title, todayContent, url String

DurationDetail exact SDK fields: **dateNum** int, **period** String, **hasData**, **emptyTag**, **remainTag**, **todayTag** booleans (`footprint-duration.smali.txt`). No per-day seconds or song identity are present in this DTO, so do not compute recovered missing listening seconds from these flags. Month/hour/minute can be displayed as platform-returned aggregate only; this read does not prove which single outbox event was indexed, nor that a specific local683min total must equal the platform monthly total.

**Formatter verification:** original `a21.f.i()` uses `if hourDuration > 0`, then shows only hourDuration plus 小时; otherwise shows only minuteDuration plus 分钟. Exact SDK `footprint-data.smali.txt` lines488-575. **No evidence says minuteDuration is a residual minute value, and hours*60+minutes is therefore not justified.** Preserve raw fields and follow the conditional display, without calculating a summed total or claiming minute precision for hours-mode output.

## Historical recovery and unknowns

No endpoint or server rule was found establishing historical write acceptance, retention window, event-ID deduplication, or recalculation of closed monthly reports. Never promise October683minutes restoration from only a local aggregate. Genuine queued/open undispatched per-song journal rows can retain original captured dates and measured durations; accepted/dispatched/unknown records must not be blindly replayed under corrected fields (duplicate accounting risk). Root is implementing journal lifecycle and tests.

No live account/cloud-footprint parity was observed. API receipt200 remains separate from official footprint aggregate/read-back, and recent-song appearance alone never proves duration indexing.
