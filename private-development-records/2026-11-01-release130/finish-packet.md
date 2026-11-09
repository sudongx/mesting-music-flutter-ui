# 1.0.30 native content readiness and search motion

Project D:/AnLi. Ordinary precise extension of the existing Flutter Android Beta UI; original glass, custom engine, source/account ownership and all frozen deliveries stay intact. The user approved this implementation. No device/ADB, account/backend, network writes, Git mutation or publishing is authorized.

User contract: cached content immediately, cached thumbnail immediately then HD in background. With no cache, one unified loading animation until first visible text and actual decoded covers are ready. While scrolling, retain displayed rows and prepare only nearby content; reveal the next visible batch together. Explicit failed-cover retry must not hold all successful items. Search exit reverses the actual entry direction and existing search/page state is retained. Both NetEase and Kugou content pages share the policy; NetEase-only users remains conditional.

## Authority and boundaries

- AGENTS.md; PRODUCT.md; DESIGN.md; .impeccable/design.json; docs/BETA-CONTROL-CONVENTIONS.md.
- .impeccable/surfaces/features-search-presentation-beta-category-search-results-dart.md has the current confirmed Direction contract followed by historical evidence.
- C:/Users/zyt/.codex/skills/impeccable/reference/craft-floor.md and reference/android.md apply. This is native Flutter: no HTML/CSS detector was run. No comp, redesign, new system tokens or shipping raster was created.
- Host-only synthetic widget evidence cannot establish physical Android frame time/FPS, GPU, TalkBack, real account operations or official-app parity. The user's device testing remains paused.

## Implementation to inspect

- lib/shared/widgets/artwork_reveal_boundary.dart: live painting/semantics/hit-test boundary, lazy geometry, bounded 512-entry presented identity set, unified Cupertino indicator; data-pending marker. No screenshot freeze.
- lib/shared/widgets/artwork_image.dart and retained_artwork_frame.dart: decoded readiness, same-owner retained frames, hidden ticker/deactivation handling, explicit compact retry/no-cover state and 20-second initial image deadline.
- lib/shared/widgets/mesting_loading_indicator.dart: existing data loading joins a containing readiness gate; operation/button progress remains separate.
- lib/features/music_platform/presentation/platform_design.dart: common root pages and PageFrame body use the boundary; PageFrame header/back remains outside.
- lib/features/search/presentation/music_search_page.dart: landing retained through entry/exit, result rows mounted after final moving frame, repaint isolation, same controller reverse. beta_category_search_results.dart owns a boundary per category.
- lib/features/music_platform/presentation/platform_search_landing.dart narrows its history watch. lib/features/experience/presentation/beta_now_playing_page.dart applies the boundary to the central cover/queue viewport. NetEase user data loading uses the marker.
- test/release_130_artwork_reveal_test.dart has six real widget/transport tests: multiple pending data sections, bounded failure deadline, first-screen metadata/pixels/semantics/taps (includes a negative pixel control), scrolling old prefix/new batch and lazy request count, failure/retry, prepared first-frame image.
- test/beta5_ui_test.dart has a new real body transition test: deferred rows, retained landing Element, matched forward/reverse midpoint. Existing host fixture waits now pump real codecs rather than expecting metadata to be immediately clickable; Kugou category loops exclude the NetEase-only Users category.

## Captures, all opened by the root agent

All files under D:/AnLi/.codex-artifacts/2026-11-01-release130/ui/.

- first-visit-unified-loading.png; first-visit-ready-together.png; failed-cover-explicit-retry.png: production PlatformPageFrame/readiness/image components in a synthetic row fixture at 800x600. Red/blue markers and English “Content/Secret row title” are assertions, NOT proposed app styling. The missing-image “重试” is intentional.
- scroll-next-batch-loading.png; scroll-next-batch-ready.png: same production mechanism, 400x480 lazy 1,000-row fixture. Only the displayed prefix paints while the new visible batch waits.
- release130-search-entry-middle.png; release130-search-settled.png; release130-search-exit-middle.png: actual MusicSearchResultsBody and category widgets with synthetic Kugou data, 390x844. The two middle frames intentionally sample motion (same half path, opposite direction); they are not settled screenshots. The settled result fixture has no cover URL, thus explicit “无封面”, not a claim of successful image retrieval. Landing persists under both directions.
- users-search-light.png; user-profile-light.png; user-profile-dark-320-large.png: actual NetEase user widgets with mock repository, 390x844/light and 320x844/dark/text scale1.3. Intentional default avatar (no URL) and one invalid bundled fixture cover (“重试”). No live user/account was fetched.

Current logs: render-final.log six passed, search-render.log one passed, user-render.log five passed. Full 85-file Beta regression was run; corrected failed expectations/real-codec fixture timing were rerun in beta-followup.jsonl and beta-final-fixes.jsonl. Broader search/back/player, Stable and final analysis are still running and must not be claimed passed prematurely. Original-signature packaging is not yet frozen.

Review product behavior and these captures against the contract and incumbent system. Do not certify devices/live services. Write only D:/AnLi/.codex-artifacts/2026-11-01-release130/finish-review.md. Return the required five review sections and one literal disposition: ship/fix/rebuild/recapture. Any material source/behavior finding must have a concrete trigger and path; do not repair source yourself.
