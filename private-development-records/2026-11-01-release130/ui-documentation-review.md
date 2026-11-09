# 1.0.30 UI documentation comparison

No changes to the incumbent product or design-system files. The finished extension remains within the established Mesting/Apple-Cupertino world. No replacement visual world, system token, font, approved comp or shipping raster was introduced. This review writes only this artifact; public delivery records belong to the release handoff.

The independent finish review records `disposition: ship` with no material fixes in its supplied captures and sampled implementation. This document compares that result with the incumbent system; it does not enlarge the finish review into device or live-service approval.

## Authority and preservation

Read the shipped `impeccable_documenter` instructions and `reference/document.md`. The ordinary-extension rule requires preserving the incumbent system and reporting inherited drift rather than repairing it without approval. The project authorities checked were `AGENTS.md`, the durable product principles and accessibility constraints in `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, `docs/BETA-CONTROL-CONVENTIONS.md`, and the current 1.0.30 Direction contract at the start of `.impeccable/surfaces/features-search-presentation-beta-category-search-results-dart.md`.

The following SHA-256 values matched before and after the comparison. These files were not written by this pass.

| Preserved file | SHA-256 |
| --- | --- |
| `PRODUCT.md` | `33c1cd8f2dd8fa1cc089f64c1a433efe1c7f6a40ee8363d8fb3bfac2998b6202` |
| `DESIGN.md` | `af455c07dd9ed8d86a5a2b8e9e035fa8967d287888113fae10969ae4bde4c793` |
| `.impeccable/design.json` | `cff43c2cb587fef2a0edd8c29a1eec9d5cfd173579be8675d17aaee721a317be` |

No product source, public document, system sidecar, device state, account, backend, Git state or publication was changed by this pass.

## Comparison with the incumbent system

| System concern | Finished evidence | Result |
| --- | --- | --- |
| Palette ownership | `lib/features/themes/beta_appearance.dart:7` retains the existing light/dark functional blue and grouped neutral palette. `app_theme.dart:22` supplies the Beta overrides. Search selection and user controls in the captures use that established blue; the readiness boundary reads the current `colorScheme.surface`. | Existing palette retained. Synthetic red/blue test markers are assertions, not palette additions. |
| Chinese hierarchy and scaling | `platform_design.dart:210` retains the 21dp/700 detail heading and theme text ownership. `beta_category_search_results.dart:74` retains a 48dp rail with 14dp labels and 500/700 weights. `netease_user_page.dart` uses the existing compact row, circular portrait and shared page/control patterns. The 320dp dark profile at 1.3 text scale wraps its identity and signature without covering following sections. | Existing type family and hierarchy retained; no new global type role is inferred from local labels. |
| Stable live content | `artwork_reveal_boundary.dart:316` clips only the unresolved content portion and retains the displayed prefix at its existing coordinates. Its presented-identity set is bounded to 512; normal lazy layout remains live. `artwork_image.dart:133` reports decoded readiness and exposes failed/no-cover states rather than manufacturing cover content. | Implements the approved batch presentation inside the existing surface grammar; no screenshot-frozen content surface. |
| Cache and image identity | `artwork_image.dart:493` selects exact/content cache data before an HD fetch. `retained_artwork_frame.dart` retains a decoded frame across same-owner provider changes, clears it when scope/owner changes, and releases owned image resources. | Extends the established cached-thumbnail and retained-frame behavior without changing account or playback ownership. |
| One unresolved-content animation | `artwork_reveal_boundary.dart:54` owns the unified Cupertino content indicator and Chinese live-region label. `mesting_loading_indicator.dart:31` joins the surrounding content gate; per-cover pending widgets do not start separate tickers inside it. `artwork_image.dart:154` bounds the initial remote-image wait, and explicit retry does not re-hide successful rows. | Existing loading vocabulary retained. A local content-readiness rule is not promoted into a replacement global motion or material token. |
| Usable navigation and independent glass | `platform_design.dart:163` keeps the header and shared glass Back control above the content boundary. `beta_category_search_results.dart:48` keeps the category rail outside its per-category boundary. The existing independent glass controls and neutral body surfaces remain visible in their proper roles. | Matches the Floating Glass and Reachable Content rules; no glass-quality change is inferred or certified from software rendering. |
| Paired search motion and state | `music_search_page.dart:237` uses one controller with the existing-style eased horizontal surface motion; return reverses that controller. The landing element remains mounted, inactive work is gated, the opaque themed result surface moves with its content, and heavy result rows mount after the final entry frame. `test/beta5_ui_test.dart:3098` checks deferred mounting, retained element identity and matched forward/reverse midpoint geometry. | Matches the Transition Surface rule and the confirmed 1.0.30 direction. No new system-wide duration is canonized. |
| Conditional user category | `beta_category_search_results.dart:52` exposes Users only when NetEase is selected. The Kugou capture has the five incumbent categories; the NetEase capture adds its existing conditional sixth category. User rows/profiles reuse shared page, portrait, cover and glass controls. | No new category is incorrectly added to Kugou and no independent visual system is created. |

## Rendered evidence checked

All 11 named PNG files in `.codex-artifacts/2026-11-01-release130/ui/` were opened in this pass. Their visible content matches their declared fixture/state. The loading frame is intentionally unresolved, and the two search midpoint frames intentionally sample motion rather than a settled page.

| Captures | Size and meaning |
| --- | --- |
| `first-visit-unified-loading.png`, `first-visit-ready-together.png`, `failed-cover-explicit-retry.png` | 800×600 production-frame/readiness fixture: one initial loader, text and decoded markers revealed together, then an explicit failed-cover retry beside a usable successful row. English fixture text and colored markers are not proposed product styling. |
| `scroll-next-batch-loading.png`, `scroll-next-batch-ready.png` | 400×480 lazy 1,000-row fixture: the displayed prefix remains in place while the next visible batch waits, then appears together. |
| `release130-search-entry-middle.png`, `release130-search-settled.png`, `release130-search-exit-middle.png` | 390×844 actual search/category widgets with synthetic Kugou data: deferred result content during entry, retained landing under return, and the same horizontal half-path in reverse. The settled fixture has no cover URL and correctly says “无封面”. |
| `users-search-light.png`, `user-profile-light.png`, `user-profile-dark-320-large.png` | 390×844 light search/profile and 320×844 dark profile at 1.3 scale, using a mock NetEase repository. The default avatar and deliberately invalid fixture cover are disclosed fallback/retry evidence, not live account or successful image-fetch evidence. |

Read `render-final.log` (6 passed), `search-render.log` (1 passed), and `user-render.log` (5 passed), plus the corresponding production-widget tests. The reveal tests include metadata-pixel negative control, semantics and hit-test exclusion, batch/prefix retention, fewer than 25 nearby requests in the lazy fixture, failed-cover deadline/retry and immediately painted prepared-thumbnail cases. These are separate evidence groups and are not added to the release regression count.

At this documentation comparison, `host-check-summary.json` records the completed final 85-file Beta run as 1,310 passed / 0 failed / 0 skipped, Stable as 19 passed, the separate search/back/player selection as 11 passed and analysis as 0 issues. `beta-final.jsonl` ends with `success: true`. This supersedes the still-running Beta snapshot described in the earlier finish packet/review. No tests, captures or builds were rerun by the documenter; packaging/signing/source-freeze records remain the parent's separate delivery gates.

## Inherited drift left unchanged

- `.impeccable/design.json:1345` and `:1354` still describe red navigation/selection, while the current `DESIGN.md` palette and Theme Ownership rule, `BetaAppearance`, and the supplied captures use blue. `DESIGN.md:356`, `:368` and `:379` already disclose inherited sidecar drift. The obsolete red narrative was not canonized or repaired.
- The retained five-category prose in `PRODUCT.md:61` and `DESIGN.md:277` does not describe the NetEase-only Users extension already recorded by the 1.0.29 project entry. The current Direction contract, conditional implementation and supplied user capture supply the bounded current behavior. This pass does not rewrite historical prose into a new global category rule.
- The older version names in the system-file titles and historical sections remain historical labels, not evidence of current APK version, release completion or device acceptance. No historical status was silently updated.

## Five-line system summary

Palette: existing functional blue, grouped neutral light/dark surfaces, semantic favorite pink and completion green; cover atmosphere remains image-owned.

Type: native sans-serif Chinese hierarchy with existing display/section/detail/row roles; system text scaling remains active.

Layout and shape: compact live lists, 52dp cover vocabulary, circular portraits, shared page framing and reachable scrolling; no replacement shell.

Depth and motion: independent premium glass remains with controls; content uses stable themed surfaces and paired, interruptible local motion.

Named rules: Theme Ownership, Readable Hierarchy, Reachable Content, Transition Surface and Floating Glass continue to govern this extension.

## Limits and non-canonized material

This is a bounded source-and-host-render documentation comparison, not a second full product audit. Windows software pixels, synthetic data, fixture text, local transport behavior and default/no-cover/retry states do not establish physical Android GPU optics, frame time/FPS, TalkBack, IME/system Back, live account or backend behavior, official-app parity, or user acceptance. No new raster provenance entry is owed because no shipping raster was created. No HTML/CSS detector ran for this native Flutter extension.

Not canonized or repaired: inherited red sidecar narrative, older category/version prose, synthetic marker colors, QA fonts, fallback imagery and software-flat glass. Their respective stale-documentation, test-fixture and host-render boundaries do not make them reusable product rules.
