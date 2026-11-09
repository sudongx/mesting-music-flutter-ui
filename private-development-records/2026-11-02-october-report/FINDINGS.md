# October report analysis, 2026-11-02

User-provided v1.0.36 redacted export only; no phone/account access, network calls, playback writes, product edits, tests or rebuild.

Input SHA256: 62c991c9324a48526836eb7b2bb6292b6a1a2e0145040aae8d020e2eb9386ea0

The complete report has 512 unique anonymous event rows: 292 duration and 220 starts. All aggregate/detail state and actual-duration sums agree. October local total is 40,990,208 ms (683 min 10 sec); NetEase-song share is 40,972,921 ms (682 min 52 sec), other sources 17,287 ms. Duration events total 38,970,068 ms (649 min 30 sec): 280 accepted / 37,051,404 ms (617 min 31 sec), 12 unknown / 1,918,664 ms (31 min 58 sec); queued/open/dispatched/rejected/verified/coalesced/interrupted are zero. 213 of 220 starts carry recent-play confirmation.

All 292 saved duration records lack realtime and startlogtime and are legacy protocol. ActualMs remains known from heardMs. All 512 exported dates use event-ID timestamp fallback, not saved exact startlogtime. These are saved-payload facts, not captured HTTP requests or backend inclusion evidence. Existing v1.0.35 sends enriched fields only for undispatched queued/open rows; it does not resend accepted/unknown. The report cannot prove whether some legacy rows were sent with send-time enrichment, nor restore original response bodies.

Local 2026-10-28 has 641,701 ms and no duration event assigned to that day in the export. Do not turn the local-vs-event difference into an exact missing-cloud count: daily and start-date attribution differ, and closed-month acceptance is unknown. Do not fabricate logs from daily totals or blindly replay accepted/unknown events.

Current source: netease_listening_reporter.dart _save saves protocolVersion2/realtime/startlogtime; _sendQueued only selects queued then marks accepted when reportPlayback returns, unknown on ambiguous failure. Local accepted states do not preserve per-event response body. Transport still uses the verified clientlog eapi desktop logging contract, not a proven full native Android envelope. Existing static official core findings show realtime/time/startlogtime but do not establish sole footprint failure or historical backfill rules.

One user question is pending: whether genuinely new playback on v1.0.35/1.0.36 has increased November official footprint. No proposed product fix is implemented before that answer and plan confirmation.
