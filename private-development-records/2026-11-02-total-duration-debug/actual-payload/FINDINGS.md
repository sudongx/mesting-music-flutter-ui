# Actual installed official 9.5.12 playback-payload comparison

2026-11-02 Asia/Shanghai. Read-only investigation of parent-selected local APK; no phone/account access, target execution, product edits, playback writes or publication by this investigator. Parent handles device work separately.

## Artifact identity and coverage

Original `../official-9.5.12-base.apk`: 201332834 bytes, SHA256 `5082d1ca510ee061bb6b6270c6a2fe0b56a90b7574a023433f3637dede0c0695`. SDK aapt2 reports package com.netease.cloudmusic, version9.5.12/code9005012. No signature verification performed here.

REA original-member classes20 carrier: `official-9.5.12-classes20-analysis-only.apk`, SHA256 `d29a6174f3be8d7b63d02b06f0ef0a982a64ba2afd981c099028d2b723fc19bc`. Contains only original classes20.dex and original AndroidManifest.xml, not an installable APK/full-app analysis. Original member hashes in classes20-provenance.json. Package Evidence ev_436969b6bf65f71a5b2c93bf11c1eda683d529e88ee2d528210070ea175f644d. REA6.4.0/JADX MCP0.7.1.

`candidates.json` inventories all22 DEXes with bounded aligned-byte/string candidate scans. Those candidates are discovery aids, not disassembly or proof a path executes. Exact source validation below uses REA methods and SDK dexdump of original classes20.

## Answered: actual song payload and measured clocks

Core ms0.w0.R2(Object...) builds the shared start/end song JSON. REA Evidence **ev_d52e0be0331d19aa2565f7db37cfee0367c6bba1ddf593b36e0df218160b5345**, full complete Java result in rea-core-R2.json. Decompiled method has type-inference/duplicate-block warnings; exact corresponding DEX disassembly retained in sdk-core-w0.txt.

- `realtime` = (ms0.j.o0(songId) + saved SongPlayedTime.realTime)/1000. SDK core address448452 explicitly divides by1000. ms0.j.o0 delegates to canonical DEX en0.p0.L0; L0 dispatches getPlayedTime (sdk-clock-p0.txt lines10486+, instruction376bf4). REA o0 Evidence ev_466fd541df5fb55251db48e70089a76fef450aca269a309de64fa2c9016cbddc.
- `time` = (en0.p0.M0(songId) + saved SongPlayedTime.time)/1000. M0 dispatches getPlayedTimeWithSpeed (sdk-clock-p0.txt lines2081+, instruction376ef4). These remain separate real/media clocks, consistent with earlier9.6.15 findings.
- `startlogtime` reads the service's original getMusicStartLogTime(). It is not replaced with upload/retry time. The method also emits type/id/source/sourceId/wifi/download/mode/status/bitrate/resource_time/progressTime and actual entitlement/context fields.
- R2 itself does not set mainsite/mainsiteWeb. Current Mesting sets mainsite=1 and mainsiteWeb=1, uses source=list/sourceId0, and a smaller field set. This is a concrete source-level difference; **static code does not establish which fields the server requires or whether those flags exclude historical totals**. Do not invent native entitlement/device/source values simply to resemble official payloads.

## Answered: start/end action and completion reason

- ms0.w0.h() invokes R2(empty), then emits startplay through sr.h/sr.p for ordinary songs. REA Evidence **ev_747c0b9f99ab254484792e42f858d8986ba9f263e74a8aae071b1562acff791b**, rea-core-h.json.
- End ms0.w0.H -> S2 -> R2(end,reason,format,errorcode,end_source). S2 Evidence **ev_262450e16af5c165c1fa5d16061018aa78212022780533fe2cd74ebd4516ec7d**; H Evidence **ev_4efdd22188cbf07d4ee9c9e98d58dfa83f7b89d56d599553ce968e8b8ef9c100**.
- ms0.f.L1 maps errorcode!=-1 to exception; completion flag null to interrupt; flag true to ui; false to playend. Evidence **ev_fadc3cba4b9a9cb673f527cc5e545b2f04962d5181ef90cb597b5e6b97593dae**, rea-ms0.f-L1.json.
- ms0.w0.I3 finalizes measured durations, progressTime/play_speed and emits play for songs. Evidence **ev_33f15f3c0c1635246a4552f91034bd42233f35713ad166bf20e365a8f5772df8**, rea-core-I3.json.
- Current Mesting uses end=playend for all track changes/disposal/completion. That mislabels skipped/interrupted plays; it does not prove the reason for total-duration omission. A truthful reason repair should capture the actual close cause in durable journal rows rather than guessing from duration or rewriting historical rows.

## Partially answered: additional per-play state versus separate total writer

H also persists PlayRecordEntity with original start/end timestamps, real play duration, source and extInfoJson via v3 -> vo.e.R7().o7. v3 Evidence **ev_73e290fdaf1065e0282b503aab44c1bbd35af11ff46b536bd55342f34797abf6**. This DAO-like path has not been traced to a network endpoint here and is not proof of a separate total writer.

I3's additional ms0.a.c and start h's ms0.a.d only assign mRecentPld/mRecentPlv snapshots (Evidence ev_2c4ae6088301cdf324e19070518d53350657e440bb515d5b5c624db1566e3fa2 / ev_e8a1328f848316f5a6388bcee285161f17f564368db9396a80f73f68f73fffe6). ql0.c.a.c/d emit PlayerMonitor records (Evidence ev_de8066286bc007a814ba098f98f7d2090c118d8cba8a15ccd66df4a760e1db11 / ev_99ab6be211ff3edbb20b8de51ed6264ba95e971e2d1fa393dcce32bbd78c454a). These examined side branches do not establish a dedicated historical-total write.

No separate total-duration event/heartbeat or server ingestion rule was established in this bounded pass. This is **unresolved**, not a claim none exists. Historical total/current-day reads and service-side aggregation remain separate from client log construction. A service accepting code200 or today growing still does not prove next-day total inclusion.

## Unknowns and implementation boundary

- Server required-field subset, anti-duplication/history-cutoff rules and root cause of historical-total exclusion are not observable from this static pass.
- Transport envelope belongs to sibling official_transport investigator; no conclusions here about exact multipart/encryption equivalence.
- REA uses generated display aliases in Java (e.g. ia.p0) while exact DEX reference is en0.p0. Both exact/alias direct class lookup failed, so clock dispatch was corroborated with SDK dexdump rather than interpreting failed lookup as absence.
- Existing accepted/dispatched/unknown historical events must not be rewritten or blindly replayed under corrected end fields/transport. New measured events and next-day official readback are the proper acceptance basis.

No product patch is justified solely by assuming a field or server filter. Action reasons are an independently verified mismatch, if included in a repair; modern Android transport plus all unobserved server behavior still requires runtime/daily acceptance.
