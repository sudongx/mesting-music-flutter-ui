# 1.0.7 raster-path read-only audit

2026-10-28. Device reported by user: Xiaomi 14 Pro; default light/dark themes. Scenario: rapid root-tab switches and playback capsule expansion/collapse. No phone, ADB, real-account calls, product edits, publication, or GPU trace were used. Read AGENTS.md and docs/fixes-2026-10-28-v1.0.7.md. New implementation requires the user's confirmation.

## What the evidence supports

The report shows a raster-heavy bottleneck (UI p90 3.46 ms; raster p90 31.63 ms) against a reported 120 Hz display. Raster duration is not GPU utilization, and these samples do not identify an individual GPU pass as the cause. The source exposes mechanisms worth measuring and optimizing; none is a proven device root cause.

### 1. Preserve the optics while reusing exactly identical shader reads

- App settings: lib/features/experience/presentation/beta_bottom_bar.dart:10-23 and :108-126 set chromaticAberration to 0.01 for the capsule and bar, with blur 2 and premium quality. floating_playback_pill.dart:91-103 gives the capsule an independent premium layer.
- third_party/liquid_glass_widgets/package/shaders/liquid_glass_render.frag:552 uses a strict `< 0.01` test, so 0.01 reaches its RGB dispersion branch at :565-578. Lines :574-576 call textureBilinear three times; each call reads four RGBA texels at :188-191. This costs twelve source fetch instructions for affected nonflat edge pixels. Flat interiors already take a cheaper branch at :549-551; not every pixel costs twelve.
- Proposed first change: when the red, green, and blue sample positions share the same 2x2 texel footprint, fetch the four RGBA texels once, then interpolate each channel with its own unchanged fractional coordinate. Fall back to the current three footprints otherwise. Preserve the exact aberration, refraction, bilinear interpolation, premultiplied-alpha and fallback-color semantics. Do not change the 0.01 threshold to suppress dispersion.
- Host checks: mathematical equivalence cases for same/different footprints and alpha/fallback colors, shader compilation, and pixel-reference regression where supported. Device A/B trace is required to establish actual speedup; branch/register cost could offset some savings.

### 2. Let stable, nonoverlapping chrome share the background read

- glass_tab_bar.dart:1322-1325 already creates a joining GlassBackdropGroup. The tab/search geometry uses its own AdaptiveLiquidGlassLayer at src/widgets/surfaces/tab_bar_searchable_layout.dart:551-557.
- That file :1129-1135 always puts the accessory under AnimatedOpacity and GlassBackdropGroup(enabled:false). The capsule thus cannot share the bar's blur backdrop read even when it is fully opaque and stationary.
- src/renderer/glass_backdrop_group_boundary.dart:125-139 intentionally treats Opacity/AnimatedOpacity as a separate-pass barrier at every value, including 1. Changing enabled:false alone will not fix sharing. This conservatism prevents a retained glass layer from carrying a shared key into a newly started opacity pass.
- src/engine/liquid_glass_layer.dart:525-534 enables actual sharing only when a safe enclosing group has at least two members. Blur grouping is applied at :809-814. The refraction shader remains a separate filter at :1003-1023.
- Proposed second change: introduce an explicit stable optical-peer state. Join a common group only when capsule/bar are fully opaque, geometry and press/jelly/keyboard/search transitions are settled, their actual optical sampling/paint rectangles do not overlap, and no intervening save-layer/backer changes the sampled content. Establish the common group inside any common outer fade; the individual accessory opacity barrier must be absent or structurally handled at its opaque endpoint while preserving element/state identity. Exit sharing and invalidate retained filter layers before the first frame of a fade, overlap or movement. Resume only after a proven safe endpoint. Keep the moving indicator outside the bar's shared group so it continues to refract the icons/glass beneath it.
- Host checks: backdrop keys/member count at both stable endpoints; no sharing at transition start, overlap, partial opacity, keyboard/push-back and nested-glass cases; retained-layer invalidation and state/controller continuity; light/dark visual references. This may reduce steady chrome work during root-tab transitions; it intentionally leaves overlapping capsule morph frames isolated. A device trace is required to prove reduced raster cost.

### 3. Count changing mattes and light-mode shadow passes before redesigning them

- Capsule width actually changes every animation tick: tab_bar_searchable_layout.dart:1146-1178. General glass geometry is local and tightly bounded, not a fullscreen matte: engine/rendering/liquid_glass_render_object.dart:430-446 and :1049-1050.
- Local size, relative shape transforms and dirty geometry cause a new matte at :470-488; :954-957 calls Picture.toImageSync. The existing full-resolution geometry path is therefore relevant during a width morph, but pure ancestor translation already avoids rebuilding the local matte. The source's claim that this costs less than a millisecond is not current-device evidence.
- Light-mode shadows come from AdaptiveLiquidGlassLayer at widgets/shared/adaptive_liquid_glass_layer.dart:166-169 and own-layer AdaptiveGlass at adaptive_glass.dart:480-489. Dark-mode shadow lists are empty.
- engine/liquid_glass_layer.dart:1039-1058 can use a baked shadow only while geometry identity remains stable. Changing geometry runs :1122-1148, including a saveLayer, blur and interior dstOut for each shadow. A stable geometry subsequently bakes with toImageSync at :1089.
- Add bounded diagnostic counters for matte rebuild count/pixel area, shadow live/baked passes, active blur/shader passes and capture count. Compare capsule windows and light/dark themes. Only if these counters correlate should a primitive rounded-rectangle analytic/SDF path or geometry/shadow reuse be designed, retaining the generic blended/morph path and pixel fidelity. Do not broadly replace sync mattes with asynchronous stale images, lower DPR, remove shadows, disable premium, or alter spring motion as the first intervention.

## Important exclusion: fullscreen background capture is not the default bottom indicator path

- GlassPage has a fullscreen background source at widgets/shared/glass_page.dart:425-430. RenderGlassBackgroundBoundary captures full DPR once per interaction frame at widgets/interactive/liquid_glass_scope.dart:179-190; glass_effect.dart:291-296 explicitly forces fresh frames to handle nested repaint boundaries. That can be expensive for other active effects with blur > 0.
- However, AnimatedGlassIndicator's default base settings have blur:0 at widgets/shared/animated_glass_indicator.dart:183-201. BetaMusicBottomBar does not override indicatorSettings. GlassEffect starts the capture ticker only with interactionIntensity > 0.01, a source key, and settings.blur > 0 at glass_effect.dart:247-249. Its native premium selection at :508-545 uses the live path while captureImage is null.
- Consequently, the default bottom indicator should use the native live refraction path without the fullscreen capture loop. Do not identify wallpaper toImageSync as this report's main cause without capture counters proving otherwise. Native renderer selection itself still needs actual-device evidence; source expectations are not a renderer trace.

## Verification boundary and proposed order

1. Keep all premium settings, current pop/retract and spring motion. Implement the exact shader sampling reuse, with host equivalence/compile tests.
2. Implement safe stable-peer backdrop sharing with transition and retained-layer tests.
3. Add anonymous bounded pass/matte/shadow/capture counters to diagnostics; choose further matte/shadow work from the measured counts.
4. Build a versioned comparison artifact only after the user's approval. Have the user repeat the same device actions under the same display resolution, theme and power/temperature conditions. Compare per-action raster p50/p90/p99 and 8.33 ms over-budget share. Real present timing/GPU-pass evidence requires a separately authorized device trace. Do not claim the changes guarantee sustained 120 fps.

No product file was changed in this audit.
