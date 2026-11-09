# 1.0.29 UI documentation comparison

Date: 2026-11-01. Private documentation handoff; this is not a release, installation, publishing, or live-service verification record.

## Result and write boundary

The reviewed implementation is an ordinary precise extension of the established Mesting Apple/Cupertino and premium glass world. The new user surfaces, cold discovery hydration, and retained artwork do not establish a replacement identity or an approved global design-system change. The incumbent system files remain unchanged: `D:/AnLi/PRODUCT.md`, `D:/AnLi/DESIGN.md`, and `D:/AnLi/.impeccable/design.json`.

The only file written by this documenter pass is this private note. Product source, public documentation, assets, Git history/index, and frozen deliveries were read-only. No new UI comp, random direction seed, brand font, design token, or shipping raster was created or retroactively claimed.

The independent finish-review handoff supplied to this pass reports **disposition: ship**, after F1 was resolved. This note records the system comparison and the evidence limits; it does not expand that review into device or live approval.

## Incumbent evidence compared

- `D:/AnLi/AGENTS.md` and `D:/AnLi/docs/BETA-CONTROL-CONVENTIONS.md`: preserve the confirmed visual direction, use shared glass controls, retain full optics and animations, and verify a drag begun on a button before finger release. No device/account/backend access or Git/publishing action is implied.
- `D:/AnLi/PRODUCT.md`: Chinese music discovery, cover-led hierarchy, continuous playback, account ownership, restrained chrome, and distinct host/device/live evidence. Historical capability and release statements remain historical.
- `D:/AnLi/DESIGN.md`: normative blue accents, neutral light/dark surfaces, platform sans-serif and text scaling, stable content surfaces, circular back controls, independent premium glass, compact artwork/list grammar, reachable scrolling content, and retained page transitions. In particular, the readable hierarchy, floating glass, transition surface, and 1.0.17 profile/library rules are applicable.
- Actual incumbent implementation: `lib/features/themes/beta_appearance.dart`, `lib/features/themes/app_theme.dart`, `lib/features/music_platform/presentation/platform_design.dart`, and `lib/shared/widgets/beta_glass_controls.dart`. The shared page frame owns the opaque themed backdrop, safe-area header, 48dp glass back control, and secondary-page shell. Glass controls retain their own premium layer and `persistPressOnDrag: false`.
- Incumbent host captures opened for comparison: `D:/AnLi/.codex-artifacts/2026-10-29-release117/ui/profile-light-regular.png` and `profile-dark-narrow.png`. Their neutral canvas, circular avatar, strongly weighted Chinese identity, rounded artwork, quiet playlist rows, and circular glass operations provide the relevant visual lineage. These historical captures are references, not current test results.
- Skill contract read: `C:/Users/zyt/.codex/skills/impeccable/SKILL.md`, `reference/new-work.md` (ordinary-extension/documenter handoff), `reference/document.md`, and `agents/impeccable_documenter.toml`. The ordinary-extension rule calls for preserving the incumbent files and reporting existing drift without repairing it unasked.

## Finished extension compared with the incumbent

### NetEase users

Inspected `lib/features/music_platform/netease/netease_user_page.dart`, `netease_user_repository.dart`, `netease_user_providers.dart`, `lib/features/search/presentation/beta_category_search_results.dart`, and the focused user tests.

The NetEase-only sixth search category joins the existing fixed-order category strip. User rows retain a 52dp circular avatar, 16dp/600 identity text, compact secondary text, and a separate shared glass follow control. The public profile reuses `PlatformPageFrame`, an 80dp circular avatar, a 24dp/700 nickname, wrapped relationship controls, a readable signature, and separate created/collected playlist sections. Playlist rows retain 52dp square artwork and restrained text. These are local composition values, not new global tokens.

Search, profile, and connection lists share the same relationship state and follow button. Source and focused fixtures cover request waiting, duplicate-action suppression, server-confirmed state, failure restoration, account-generation rejection, and explicit unfollow confirmation. Public playlists are filtered by returned privacy data; pagination advances using the consumed upstream rows. These mechanisms fit the existing requirement to show real states rather than invent successful writes.

The three user captures were opened and match their filenames:

| Capture under `D:/AnLi/.codex-artifacts/2026-11-01-release129/ui/` | Host coverage observed |
| --- | --- |
| `users-search-light.png` | 390×844, light, text scale 1.0; six-category strip, one synthetic user, separate follow lens |
| `user-profile-light.png` | 390×844, light, text scale 1.0; public identity, relationship counts, created/collected playlists |
| `user-profile-dark-320-large.png` | 320×844, dark, text scale 1.3; nickname/signature wrap and playlist sections remain reachable |

The absent avatar and one missing fixture cover use existing fallback rendering. That is separate from the retained-song-cover guarantee: this extension does not promise to eliminate fallbacks when no usable image exists.

### Discovery cold hydration

Inspected `lib/main.dart`, `lib/features/music_platform/discovery_startup_cache.dart`, `lib/core/cache/browse_cache_routes.dart`, and `test/release_129_discovery_test.dart`.

The source prepares discovery within the same `ProviderContainer` later mounted by `UncontrolledProviderScope`, before startup yields to routed content. Disk-only hydration does not wait for a live response. The lease preserves restored provider data and starts background refresh after the real app's first frame. Missing/corrupt snapshots remain first-visit conditions, not a logout or a claim of cached content. Account identity changes invalidate the lease.

F1's concrete correction is present: `BrowseCacheRoutes.discoveryRead` includes the mounted `/toplist`, `/toplist/artist`, and `/mv/all` routes. `review-f1.jsonl` ends with all three focused tests successful. Its first test uses the actual `NeteaseApi.call('/like')` path with `MockClient`, makes one synthetic write, opens a new cache instance, restores the discovery snapshots, and confirms `/user/playlist` and `/user/detail` were invalidated. The two cold tests separately verify NetEase and Kugou daily-provider `AsyncData` before background network resumes. This is mock transport and host cache evidence, not an actual account edit or a device cold-start measurement of every shelf.

### Retained song artwork and inherited continuity

Inspected `lib/shared/widgets/artwork_image.dart`, `retained_artwork_frame.dart`, `track_artwork.dart`, `lib/shared/media/persistent_network_image_cache.dart`, and the focused artwork tests. A cached thumbnail is made available immediately while a larger request runs in the background; retained decoded pixels remain visible during replacement. Known public CDN content/size identity permits an adequate cached image to serve smaller search/capsule views and permits a separate HD upgrade. Semantic image versions/private signed URLs keep their existing exact-key rules. Song frame ownership prevents a previous recording's pixels following a changed song.

Opened all seven synthetic captures under the same current `ui/` directory: `cache-before.png`, `cache-image-pending.png`, `cache-first-fresh-frame.png`, `tab-before-retarget.png`, `tab-immediate-retarget.png`, `tab-reversing.png`, and `tab-settled.png`. The pending cache frame visibly retains the old red image and title; the first fresh frame pairs the new blue image and title. The immediate Tab retarget frame preserves the current split position before reversal and settlement. `preview_test.dart` and `ui/frame-evidence.json` identify these as production cache/artwork/viewport components with synthetic content, seven screenshots, and no device use. The red/blue squares, English cache label, and red/green Tab panels are QA scaffolding, not product styling or new brand colors.

## Five-line system summary

1. Palette: inherited functional blue (`#0066D9` / `#0091FF`) on neutral light/dark surfaces; artwork retains its own colors.
2. Type: inherited platform sans-serif and system text scaling; compact identity/metadata contrast, bold profile hierarchy, and wrapping rather than whole-page shrinking.
3. Material: stable content surfaces plus independent premium glass for designated controls; the extension retains the shared optical and drag-cancel behavior.
4. Composition: circular user avatars, rounded square playlist artwork, compact rows, shared secondary-page frame, and scrolling bottom clearance.
5. State: cached content stays displayable through background refresh; writes publish confirmed state; loading, failure, empty, and account-change states remain explicit.

## Existing drift reported only

The pre-existing sidecar still identifies itself as Android Beta.19 and describes `beta-accent` as coral/red, whereas current `DESIGN.md` frontmatter and `BetaAppearance` use blue. `DESIGN.md` also retains historical Beta.19/Beta.20 names and some historical values: for example `surface-dark: #11141B` in its frontmatter differs from the current Beta `colorScheme.surface` of `#121316` in `app_theme.dart`. These are documentation drift, not an authorization to refresh the system during a local extension. They were neither repaired nor promoted as current rules. No new defect was canonized as a design token or global rule by this pass.

## Exact validation boundary

This pass read source, focused tests, supplied host logs, and ten current PNGs; it did not rerun tests or regenerate captures. `host-check-summary.json` records the latest completed result per test file without double counting: the focused 1.0.29 files record discovery 3, artwork 4, user data 6, and user UI 5 passing tests. The final F1 log was separately read as described above. These focused results overlap the broader host suite and must not be added to it as independent totals.

The user captures use synthetic sessions/users/playlists, Flutter host software rendering, DPR 1, and private Windows QA fonts (`msyh.ttc` loaded under test-only font families). They show composition, text scaling, rendering, and bounded fixture interactions. They do not establish Android GPU refraction, frame rate, IME, TalkBack, physical edge/back behavior, a real installation/upgrade, account permissions, real follow/unfollow success, live profile/playlists, CDN availability, playback, or background process/cache survival on a phone.

No phone, emulator, ADB, live APIs, real account, backend, Git mutation, installation, upload, or publication was used by this documentation pass. The unrelated real together-listening end-record issue remains pending diagnosis/acceptance and is not represented as fixed here. Any later UI/source correction needs a corresponding bounded evidence recheck; this note applies to the source and captures inspected at this handoff.

Protected-file SHA-256 values read before this pass's only write:

- `PRODUCT.md`: `33C1CD8F2DD8FA1CC089F64C1A433EFE1C7F6A40EE8363D8FB3BFAC2998B6202`
- `DESIGN.md`: `AF455C07DD9ED8D86A5A2B8E9E035FA8967D287888113FAE10969AE4BDE4C793`
- `.impeccable/design.json`: `CFF43C2CB587FEF2A0EDD8C29A1EEC9D5CFD173579BE8675D17AAEE721A317BE`
