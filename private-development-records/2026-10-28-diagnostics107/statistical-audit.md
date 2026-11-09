# 1.0.7 diagnostic report statistical audit

Read-only analysis of the user-supplied JSON. The original file was not modified.

## Confirmed facts

- Session length 44.458 seconds; 2133 timing samples; advertised display refresh 120.0000076 Hz.
- UI build P50/P90/P99: 1.813 / 3.460 / 17.465 ms; max 41.311 ms. 86 frames (4.032%) exceed 8.333 ms, 26 (1.219%) exceed 16.667 ms.
- Raster P50/P90/P99: 10.144 / 31.633 / 62.947 ms; max 79.739 ms. 1637 frames (76.746%) exceed 8.333 ms, 527 (24.707%) exceed 16.667 ms.
- 1647 frames exceed the 120 Hz stage budget in at least one phase: 1561 raster-only, 10 build-only, 76 both. 486 frames (22.785%) are within budget in both stages.
- End-to-end totalSpan P50/P90/P99: 19.513 / 60.968 / 120.194 ms. This is latency, not the duration of one serial sum of CPU+GPU work.
- Recorded interactions: 57 page-change markers; 3 capsule_compact and 2 capsule_expanded markers.

The dominant measured bottleneck is the raster/painting/compositing side. These counters do not expose GPU utilization or prove whether a particular shader, blur, driver, texture upload or offscreen layer is responsible.

## Timing alignment limitation

Events are written using a Stopwatch started in beginSession, while sample vsyncUs values are raw Flutter engine timestamps from an unspecified common epoch. The report lacks a simultaneous cross-clock anchor. Exact operation-to-frame alignment is unrecoverable from this file.

The first-to-last vsync span is 43.732027 seconds; last frame totalSpan is 22.233 ms. If all reported frames were strictly inside the session, first-vsync offset can be in [0, 703.740] ms. This is a conditional interval, not a guarantee: timings are delivered in batches and a callback may contain frames generated before registration. Stop does not flush a final pending batch. The local Flutter 3.41.9 primary source documents delivery within about 1 second in release (100 ms in debug/profile), so no claimed per-event millisecond precision is justified.

Both simple alignments (first sample at time zero, and the conditional upper offset +703.740 ms) show the 39.3–42.8 s capsule-operation window is slow: raster P90 48.296–53.503 ms and about 88.0% over 8.333 ms. This supports coarse association, not causal attribution to an individual capsule transition. Early navigation window 1.8–14.5 s has raster P90 47.678–48.523 ms and 86.5–86.6% over budget.

The 15–34.5 s region has no page/capsule marker, but may contain scrolling/playback/other animations. Do not label it an idle-screen baseline. Its raster P90 remains 15.748–16.414 ms.

## Frame interval caution

First-to-last callback sample density is 48.751 samples/s (session-normalized 47.978/s). Neither is measured presented FPS. 1131 intervals are approximately one 120 Hz slot, 532 are two slots. The maximum 2.307 s sample gap can include genuine no-frame periods, so it must not be called a 2.3 s frozen frame. Vsync interval median is 8.338 ms, P90 33.313 ms.

## Sources

- lib/core/performance/frame_timing_probe.dart: Stopwatch events at lines 25–44; sample ingestion lines 84–96; vsync export lines 61–69; no common time anchor.
- D:/CodexCache/flutter-3.41.9/bin/cache/pkg/sky_engine/lib/ui/platform_dispatcher.dart:22–31 batch delivery semantics; :2177–2179 epoch; :2204–2209 raster thread duration.

Machine-readable detail: statistics.json, event-list.json, burst-and-gaps.json.
