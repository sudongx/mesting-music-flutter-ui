"""Expand the draft delivery gates after the user's UI/sync additions."""
from pathlib import Path

out = Path(__file__).resolve().parent
assert not (out / 'beta-complete.jsonl').exists(), 'Final check setup is one-shot.'
def replace(name, changes):
    path = out / name
    text = path.read_text(encoding='utf-8')
    for before, after in changes:
        assert before in text, (name, before)
        text = text.replace(before, after)
    path.write_text(text, encoding='utf-8')

replace('sign_and_verify.py', [
    ("len(notes['releaseNotes']) == 3", "len(notes['releaseNotes']) == 4"),
    ("'bundledNotesCount': 3", "'bundledNotesCount': 4"),
])
replace('verify_local_notes.dart', [('expect(notes.length, 3)', 'expect(notes.length, 4)')])
replace('freeze_source.py', [
    ("['beta-targeted.jsonl']", "['beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl']"),
    ("'test/release_141_type51_message_test.dart',", "'test/release_141_type51_message_test.dart',\n              'test/release_142_player_chrome_test.dart','test/release_142_together_sync_test.dart',\n              'lib/shared/widgets/beta_page_route_observer.dart',\n              'lib/features/music_platform/netease/together/together_playback_command.dart',"),
])
replace('finish_artifacts.py', [
    ("'beta-targeted.jsonl',", "'beta-complete.jsonl','stable-complete.jsonl','search-back-player.jsonl'"),
])
with (out / 'summarize_checks.py').open('r', encoding='utf-8') as stream:
    (out / 'summarize-record-only.py').write_text(stream.read(), encoding='utf-8')
source = out.parent / '2026-11-02-release141-type51/summarize_checks.py'
text = source.read_text(encoding='utf-8').replace('complete=base["doneSeen"]', 'complete=base["doneSeen"] and base["commandSuccessful"]')
(out / 'summarize_checks.py').write_text(text, encoding='utf-8')
for source_name, target_name in [
    ('host-check-summary.json', 'host-check-summary-record-only.json'),
    ('analyze-complete.log', 'analyze-record-only.log'),
    ('build-release.log', 'build-paused-for-expanded-scope.log'),
]:
    source = out / source_name
    if source.exists():
        assert not (out / target_name).exists()
        source.rename(out / target_name)
print('Final gates require complete Beta, Stable, navigation and analysis; notes count is four.')
