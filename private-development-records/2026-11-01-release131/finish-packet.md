# Mesting 1.0.31: single Apple progress, library groups and latest Tab intent

Project D:/AnLi. User approved the three-point plan and requested a new local
build. Preserve all dirty changes, original signing/custom dual-ARM engine,
full premium glass and44 prior frozen APK/ZIP files. No phone/ADB, real account,
backend, Git mutation or publishing is authorized.

## User request and authority

The supplied phone screenshot showed a blue Material pull-refresh ring plus
an Apple tick spinner on My Messages. Keep only Apple indeterminate animations
and one visual owner for the same refresh/load. Group the existing Music Library
without losing functions. On rapid Tab taps, the newest tap immediately owns
the destination without waiting for loading or older motion; preserve sliding.

Original user evidence (read-only critique reference, not a design comp):
C:/Users/zyt/AppData/Local/Temp/codex-clipboard-e0aae578-7e09-40e9-9dfe-ea498eb15ed5.jpg

Authority: AGENTS.md, PRODUCT.md, DESIGN.md, .impeccable/design.json,
docs/BETA-CONTROL-CONVENTIONS.md, and current Direction contract at
.impeccable/surfaces/music-library-refresh-tab-131.md.
Read C:/Users/zyt/.codex/skills/impeccable/reference/craft-floor.md and
reference/android.md. Native Flutter: no HTML/CSS detector ran. The user-pinned
Apple/Cupertino and full-glass world remains authoritative. No comp, new tokens,
font or shipping raster was introduced.

## Source and behavior

- lib/shared/widgets/music_refresh_indicator.dart keeps Flutter's refresh
  gesture via noSpinner, retains the scroll child, coalesces one callback,
  reserves64dp native-style waiting space, and leases progress from the enclosing
  ArtworkRevealController. Standalone views draw the same Apple progress.
- music_loading_scope.dart and music_activity_indicator.dart give a refresh
  one owner. Data placeholders yield their old padding/progress while refresh
  owns the waiting area; independent action progress remains separate.
- artwork_reveal_boundary.dart preserves the 1.0.30 readiness/cached-frame
  policy, paints one active progress at the local refresh viewport, and releases
  leases on deactivation/disposal. Existing cached rows remain usable.
- beta_glass_controls.dart, beta_activity_indicator.dart, Mesting loading and
  all12 prior refresh sites now use the common Apple path. Other indeterminate
  Material callers were migrated; determinate playback/download/quota progress
  remains meaningful. Beta download parsing now uses Apple; Stable legacy
  fallbacks remain in their own branches. Reduce Motion pauses Apple tickers.
- music_library_page.dart groups 常用音乐 / 收藏与订阅 / 播放足迹 / 我的歌单.
  NetEase-only controls stay conditional. netease_library_sections.dart maps
  all47 library catalogue entries across5 categories and9 direct feeds; the
  duplicate cloud shortcut is one category containing all5 existing workflows.
  netease_features_page.dart and full/netease_full_page.dart retain destinations,
  rights, import/new playlist, overview and full task hubs. Unknown future
  categories remain reachable rather than disappearing.
- beta_tab_navigation.dart formerly cleared the newest request on any older
  router acknowledgement. It now acknowledges only a matching latest target.
  Existing BetaRootTabViewport/PageView sliding and retained branches stay.

## Tests and gates

- release_131_tab_input_test.dart: red test observed [3,1] instead of [3,1,3]
  before the intent fix; now passes, plus actual glass coordinate taps through
 6 destinations while all page content is pending.
- release_131_refresh_test.dart: standalone and common framed views hold one
  actual Apple ticker, no Material ring, retain cached row hit-testing, and do
  not issue duplicate refreshes.
- netease_full_ui_test.dart: actual My Messages page refresh in dark390dp and
  dark320dp/1.5 text scale, held MockClient response, exactly one active Apple
  ticker, prior conversation retained, no Material ring.
- release_131_library_test.dart: all47 capabilities, five cloud workflows,
 9 distinct direct feeds and unknown-category fallback; actual NetEase/Kugou
  root widgets and cloud destination, light390 and dark320/1.3 text scale.
- Full88-file run completed1319 passed/1 failed. The one failed legacy profile
  error test assumed pumpAndSettle implied a business response; reduced-motion
  now pauses the ticker, so root is verifying an explicit error-state wait.
  Focused reruns, Stable19, search/back/player11 and analysis are separate
  finishing gates, not yet claimed complete. Candidate dual-ARM build running.

## Current captures, all opened by root

Directory D:/AnLi/.codex-artifacts/2026-11-01-release131/ui/:

- library-false-false-top.png, library-false-false-bottom.png: Kugou common
  library in390x844, synthetic repository data (no real account read).
- library-true-false-top.png, library-true-false-history.png,
  library-true-false-bottom.png: actual NetEase library sections,390x844 light.
- library-true-true-top.png, library-true-true-history.png,
  library-true-true-bottom.png: NetEase320x844 dark,1.3 text scale. History is
  captured from its heading after artwork readiness; titles can wrap normally.
- messages-refresh-false.png, messages-refresh-true.png: actual held-refresh
  Messages at390x844 dark and320x650 dark/1.5 scale. Apple progress is in its own
  waiting area, no blue ring; existing conversation remains visible. Caption
  fonts are local QA substitutes; they are absent from shipping assets.
- tab-latest-during-motion.png, tab-latest-settled.png: actual shared glass bar,
  betaTabShellRoutes, PageView and intent coordinator with all four content panes
  deliberately pending. The moving frame is intentional; the settled frame
  selects the last requested tab while its data still waits. White fixture
  surfaces and absence of real content are disclosed, not an app-content claim.

Review this bounded native extension against the user request and incumbent
world. No device FPS/GPU/TalkBack, live service or official-app parity approval
is possible. Do not repair source. Write ONLY
.codex-artifacts/2026-11-01-release131/finish-review.md; return the five required
contract sections and literal disposition ship/fix/rebuild/recapture. Material
findings need a concrete trigger and path. Final packaging/docs remain root's
separate gates.
