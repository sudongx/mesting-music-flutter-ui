# 1.0.77 / code98 work record

2026-11-07, Asia/Shanghai. User confirmed Qishui-only implementation after sequential clarification. NetEase/Kugou are user-accepted existing features and are outside this investigation. No phone/ADB access, NAS deployment, Git write/sync/cleanup, upload, or publication is authorized by this work.

- Prior handoff receipt was checked once before this task; `before.json` copies the frozen baseline without changing any old receipt or deliverable. 92 old artifacts, 1613 old inputs, 2952 old current paths, 74 retired paths, branch/head/index/lock/signing are protected.
- Songs now use the official common `POST /luna/search/track` with `q`, `cursor`, `search_id`, `search_method`. Working artist GET remains. Local search fixture suite: 39 passed in `search-targeted-r1.jsonl` (not online acceptance).
- Cover grant remains exact GET `/luna/video/uploader`, fixed image query. Helper policy refusals are recognized only through an explicit safe-code allowlist; the failed authorization stage is displayed before any image upload. Local cover suite: 10 passed in `cover-targeted-r1.jsonl` (not NAS or live cover acceptance).
- Official common follow APIs use form data, not JSON. The app freezes form bytes before signing and dispatches those same bytes. New social repository/UI and focused tests are in progress.
- Music-wall official total duration is seconds and is fetched with a JSON POST read. `/luna/action` has no duration field and will not be misrepresented as duration reporting. Investigation of genuine playing telemetry is in progress.
- The original helper chat owns independent local helper adaptation. It has received exact route/body contracts; the main project does not edit that helper or deploy NAS.

This is an appendable work timeline, not the final validation receipt. Do not treat in-progress entries as final delivery or physical-account acceptance.

## FINAL177

- Implemented social user/artist namespaces, official source groups/cursors, readback journals and owner guards. Genuine listening uses the existing player, monotonic eligibility and separate official/local/submitted/unknown counters. MCS identity envelope remains a documented compatibility candidate, not accepted official credit.
- Final fresh host aggregate: Beta257 files2876 passed/1 conditional skip; Stable11 files50 passed/12 conditional skips; navigation57 passed; analysis0. Latest whole-file replacement only. First retry-timer failures were fixed by disabling automatic provider retries; same-cookie/different-user guard was fixed. The stable runner's missing flavor and the new UI/binding fixture issues were corrected; original failed/interrupted logs remain.
-12 final software-rendered images were explicitly viewed.16 wholly synthetic envelopes from the actual App transport passed the separate helper's current local policy unchanged. Original helper chat reported0.2.2/80 tests and its separately user-authorized Gitee push; NAS still not deployed by this chat.
- Candidate1 fixed1623 product/build inputs. Original signing certificate/v2/v3, double ARM, SDK24/36, fixed engine/7 shaders/12 non-app native libraries and actual JNI/DTO/DSP/R8 callbacks checked on the new APK. No phone, actual account, NAS or official business request occurred.
- New APK, full source and validation are local. Source archive CRC and every frozen source entry verified, signing/private evidence/cache excluded; old92 deliveries unchanged. Final after receipt is created only after preservation checks. Root HEAD/index/lock/signature and74 retired paths remain protected; no main-project Git writes, publication or backup.
