## verdict

All eight recaptures were reopened at their original `.impeccable/review/soda-162/` paths and are valid host viewport evidence. This is a scoring pass for R1/R2 and regressions introduced by their batch; it is not a new whole-surface review. The first review remains in `finish-review.md`.

- **R1 — resolved.** `host-login-390-1.0.png` now shows distinct neutral premium country, phone and OTP fields. `host-login-320-1.8.png` shows readable country/phone labels and +86 with no field-content clipping. The longer form remains in its existing scroll view; its login action is below the initial narrow viewport. Sampled source confirms `BetaGlassField` around all three login fields and the search field, with controllers, enabled/busy state and autofill retained; the country width grows from 88dp to a bounded 112dp.
- **R2 — resolved.** The actually pushed `host-welfare-390.png` visibly restores the circular glass back control and strong child-page title. Sampled source confirms `MusicFeaturePage` is used by welfare, track lists, search, effects, account and security verification; its existing header owns `BetaGlassBackButton`. This confirms the shared source/frame treatment, not physical system Back or other uncaptured device interactions.
- **G1 — material regression introduced by R2.** In `host-welfare-390.png`, the first body heading now begins around y=244, leaving approximately 180dp of empty space after the 56dp header. The previous welfare capture started its body near the top. `MusicFeaturePage` centers its constrained child, while welfare passes a shrink-wrapped `SingleChildScrollView`, so an ordinary account/task page becomes vertically centered. Keep the restored shared header, but make the welfare scroll view occupy the available body height or top-align it locally; its first content should follow the header with the existing 24dp padding. Do not change the shared frame globally merely to compensate for this caller.

## remaining

G1 remains open. Recapture the same `host-welfare-390.png` after the local body constraint/alignment fix; retain its actual pushed Navigator setup and the restored glass-back header. No additional design hunt is required.

This verdict covers the scored fixes and their identified regression only. No Android device UI, IME/GPU/TalkBack/system gestures, real account/SMS, benefit credit, playback/download or native DSP acceptance was established. Reported test/analyzer results were not independently rerun by this reviewer.

disposition: fix
