# Together report duration unit correction

The new device screenshots confirm that type-51 cards now render in 1.0.41.
Opening the 26h05m card reads 224 songs and the correct 3167.77 km, but the
detail time is 1m and the relation total is 15h48m instead of 15808h16m. This
matches interpreting 93900 and 56909760 seconds as milliseconds. The screenshots
are acceptance evidence, not an unredacted network capture.

The user's first short answer said the list was shortened too. The subsequent
21:03 screenshot resolves that ambiguity: yesterday's row is correctly 26h05m
and 224 songs; today's 1m/3-song row is another session. The top relationship
summary is membership-masked. Preserve list units and those account boundaries.

Re-reading the already retained public scripts established the precise cause:

- In official-record-ending.js, QmAe exports `e -> g`. The actual report render
  calls `Le(Object(q.e)(P))` and `Le(Object(q.e)(k))`, where P/k are the raw
  duration/totalDuration projections. `g(e)` returns `Math.floor(+e/60)` and
  the relevant `Le` formats a count of minutes into hours/minutes. These two
  report fields therefore carry SECONDS.
- In official-record-list.js, QmAe exports `c -> T`; T first divides by 1e3.
  The list's mostListen card uses `Object(V.c)(c)`, and record rows use the
  same millisecond formatter. History duration and mostListen.totalDuration
  therefore remain MILLISECONDS. startTime/endTime remain millisecond dates.

The v140 contract incorrectly treated QmAe.c's millisecond helper as the report
render call. Its source note and synthetic report fixture repeated that error.
Preserve v140/v141 frozen archives and their historical docs; the v142 handoff
and current DTO comments supersede that incorrect unit statement.

Fix at the report DTO boundary only, with separately named seconds and
milliseconds readers. Never infer units from the size of a number: a short
session and a long relationship total share the same report unit. No clock,
card-label substitution, ratio adjustment, or statistical fabrication is needed.
The screenshot song counts stay actual server fields: this session 224 and
relationship total 18344 in the user sample.

`unit-evidence.json` retains exact expressions, offsets and original script
hashes. No phone, account or backend query was made. The original public script
locations and hashes remain in v140's source index; original artifacts are
private and excluded from source delivery.
