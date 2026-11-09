# Additional user feedback and verified defects

The user reported 1.0.41 still shows the navigation bar and playback capsule on
the Together player. They asked to inspect all entry paths, then added a check
of both participants' song changes and play/pause. Their answer explicitly
meant song switching, not switching friends/rooms. These additions remain in
the already authorized local original-signed release; no phone or account is
accessed and no release is uploaded.

## Chrome

- NeteaseTogetherPage is the same production BetaNowPlayingPage; the old full
  catalogue path is an export. Feature shortcuts use their local Navigator,
  chat/invitation/report actions can use the root Navigator, and the capsule
  uses /player. Inspecting only the GoRouter address cannot cover these paths.
- chrome-before-fix.jsonl reproduces releasing the cover beneath a popup, and
  a stale production PlayerPullToDismiss callback setting reveal=1 over the next
  player (Kugou). The first NetEase run timed out on continuous animation; the
  harness then uses bounded frame pumps for both sources.
- A per-Navigator page observer now distinguishes popups from replacement full
  pages and is installed on root, music and all four retained-branch Navigators.
  Both tab visibility and chrome covers use it. Other full pages can reclaim
  controls, and hidden branches cannot retain ownership.
- The reveal signal binds callbacks to a stack of actual player views. Older
  callbacks cannot write the latest player's reveal; popping restores the
  previous owner after disposal. Existing glass and drag choreography remain.
- chrome-targeted/navigation-initial passed. The actual-shell test initially
  left a test-only saved-session timeout pending; overriding that fixture read
  removed the timer. chrome-shell-final passes with actual BetaMusicShell,
  capsule metadata, both track sources, and an active synthetic Together header.
  This is a host reproduction, not proof of the unique real-device cause.

## Playback synchronization

release_142_together_sync_test creates two independent controllers and decodes
their actual EAPI command payloads through a shared synthetic room. No account
DTO or live server is involved. sync-before-fix reproduces wrong pause state in
both directions, an older server receipt rolling back newer playback, and a
failed source load consuming the command so it cannot recover on the next read.
Nominal song switching already passed and remains covered in both directions.

The report now uses the explicit PLAY/PAUSE intent while native audio finishes
its local fade. A separate TogetherPlaybackCommand DTO validates wire state;
remote applications serialize, reject older numeric server versions (including
after own acknowledgements), and only consume successfully applied commands.
Source loading can retry the same read-side command. Updating formerSong after
successful remote application prevents a delayed media-item echo; the paired
test includes realistic heartbeat latency. Wire writes are not blindly retried.

The seven paired tests and 41 related workflow cases passed in sync-targeted.
Final complete-suite and artifact results supersede intermediate counts. Existing
5-second polling is retained; host manual ticks do not verify real double-device
latency, official app command payloads, or long-running background behavior.
