# 1.0.7 independent finish review

Disposition: **SHIP** (bounded final confirmation; no open P1/P2 finding).

Scope: root-owned feature grid, player controls/menu geometry, recognition,
listening-sync status and frame-diagnostics surfaces, local-music captures,
the shared glass performance changes, and the completed audiobook/together
features including their root route, playback resolver and provider bindings.

The user's pinned Apple/Cupertino world, full premium glass and existing liquid
400ms/240ms transition are authoritative. This is an extension of that world,
not a replacement identity. The launchpad topology is explicitly user-approved.
No HTML/CSS detector was run on native Flutter code. PRODUCT.md, DESIGN.md,
docs/fixes-2026-10-28-v1.0.7.md, craft-floor.md and android.md were consulted.

## Resolved findings

### Resolved P2: nested repaint boundary capture invalidation

File: `third_party/liquid_glass_widgets/package/lib/widgets/interactive/liquid_glass_scope.dart:194-198`.

`captureSnapshot()` retains an image across frames based on the outer
`paintVersion`. A nested `RepaintBoundary` can repaint its retained layer without
calling the outer boundary's `paint()`. This is the actual production composition:
`MusicThemeBackground` wraps itself in a boundary at
`lib/features/themes/music_theme_background.dart:149`, and its atmosphere has
another boundary at line 188. These are not `TextureLayer`/`PlatformViewLayer`, so
`hasLiveTexture` does not catch their changes. While the lens is moving, its
capture request can keep receiving the old image, freezing the reflected
background or leaving it on an earlier colour.

Keep sharing the texture between lenses within one frame, but do not reuse it
across interaction frames without a reliable descendant-content revision.
Add a test that changes a nested repaint boundary while keeping the outer
boundary's paint counter unchanged, then checks the next capture.

### Resolved P2: independent recognition recording lifetimes

File: `lib/features/recognition/song_recognition_page.dart:93` (cleanup: lines 134-135).

The name `recognition-$generation-$attempt.wav` resets with every page instance.
Returning during recording and immediately reopening recognition creates the
same first filename while the disposed page still unwinds asynchronous
recorder/network work. Its `finally` can delete the new page's current file.
Use a unique temporary directory/file for each recording session; cleanup must
only own that allocated path. The same fix also isolates two simultaneously
mounted instances. Add a bounded file-lifetime test or a helper-level uniqueness
test.

## Visual evidence

All 31 supplied current captures were opened in original-resolution contact
sheets generated only from the current beta PNGs, not the earlier stable/invalid
contacts. Paths:

- `screens/{functions,functions-bottom,recognition,sync,diagnostics,player-lenses,menu-inner-edge}-{light,dark,small-large,tablet}.png` (28 captures).
- `local-music/{empty-light-320-large,songs-dark,folders-dark}.png` (3 captures).

They have the intended blue beta accent, complete Chinese glyphs, valid opaque
page backgrounds and no visible clipping/overlap in the captured controls.
320px/1.6 text wraps grid labels into two lines while retaining the approved
three columns. Long diagnostic/sync text continues in a scroll view; the visible
viewport crop is not a missing control. The menu screenshots intentionally sample
the early geometry phase before the foreground reveal, so the blank menu body
at that instant is not a missing-content finding. Both player lenses visibly
match. No visual P1/P2 was found in this packet.

The images show production Flutter widgets with synthetic fixtures and a host
Skia renderer. They do not prove Android optical fidelity, sustained 120fps,
TalkBack, microphone capture, MediaStore/SAF, real-account writes or installation.

## Other checks

Image clone/disposal ownership and selected-tab widget/dependency/colour cache
invalidation were reviewed. No separate P1/P2 was found in those paths; material
parameters and DPR are not intentionally reduced. The recording parser's bounded
RIFF/PCM conversion and recording-ID-first fallback keep source identity rather
than choosing the first unrelated search result.

## Final confirmation

Both original P2 findings are resolved in the reviewed source:

- `captureSnapshot(dpr, frame:)` refreshes for a new interaction frame while
  cloning handles for multiple lenses within the same frame. The shared
  `GlassEffect` ticker supplies the frame stamp, so nested repaint boundaries
  and video textures cannot remain stuck behind a parent-only paint counter.
- Recognition allocates a unique temporary directory for each run. Cleanup owns
  that directory only; exiting and immediately reopening the page cannot reuse
  the previous run's segment path.

`review-fixes-tests-final.log` records 7/7 passing Beta tests, including an actual
nested child repaint with an unchanged parent counter, new-frame pixel changes,
same-frame image reuse, and independent recording-directory cleanup. The first
fixture attempt's scheduling error remains in its separate historical log; it
was not treated as a product failure or silently discarded.

The additional 12 screenshots in
`.codex-artifacts/2026-10-28-followup-review/screens-features/` were reviewed:
`{books,chapters,together}-{light,dark,small-large-text,tablet}.png`. The two
previously invalid Together subtitle captures were refreshed with the QA-only
ListTile font configuration and opened again at original resolution. All now
show complete Chinese text and the Beta blue accent. These bring the valid
visual packet to 43 captures. No captured overflow, blocked control or other
visual P1/P2 was found. Small-screen long content remains scrollable; viewport
cropping was not misclassified as missing content.

The final book/together test log records 14/14 passing tests and
`analyze-final.log` reports no issues. The inspected integration uses the single
audio handler, routes audiobook resolution before ordinary music resolution,
uses room entitlement resolution for active room tracks, and starts progress
and listening-sync providers only in the Beta app root. Account-bound
repositories reject an authentication epoch change. Audiobook signed URLs are
refreshed for playback and omitted from durable resume storage; paid/preview and
unsupported encrypted sources retain explicit failure states. Together's
manually detached listener is not restarted by polling, and its leave/dispose
paths stop session timers.

No further aesthetic or broad polishing pass is requested. SHIP here is the
bounded source/host-render review verdict, not certification of physical-device
120fps, microphone/MediaStore behavior, paid content entitlement, two-account
room synchronization, official listening-time credit, or Android installation.

