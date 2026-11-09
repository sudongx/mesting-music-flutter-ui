"""Derive the established source-freeze procedure for the new local release."""
from pathlib import Path

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-03-release146'
text = (root / '.codex-artifacts/2026-11-03-release145-formal/freeze_source.py').read_text('utf-8')
text = text.replace('2026-11-03-release145-formal', '2026-11-03-release146')
text = text.replace('1.0.45', '1.0.46')
text = text.replace("'androidVersionCode':66", "'androidVersionCode':67")
text = text.replace('1.0.46+66', '1.0.46+67')
# The R4 evidence is historical input, not a newly renamed 46 candidate.
text = text.replace('v1.0.46-MEDIA-OWNER-R4', 'v1.0.45-MEDIA-OWNER-R4')
text = text.replace('SYNC-MEDIA-OWNER-R4-2026-11-03-v1.0.46',
                    'SYNC-MEDIA-OWNER-R4-2026-11-03-v1.0.45')
text = text.replace("    assert required.issubset", """    required.update({
        'lib/features/downloads/audio_download_resume.dart',
        'lib/features/downloads/downloaded_track_subtitle.dart',
        'lib/features/experience/presentation/favorite_tracks_search.dart',
        'lib/shared/widgets/music_list_footer.dart',
        'test/release_146_download_resume_test.dart',
        'test/release_146_ui_test.dart',
        'docs/fixes-2026-11-03-v1.0.46.md',
    })
    assert required.issubset""")
text = text.replace("'fullBackgroundAcceptanceComplete':False,", """'fullBackgroundAcceptanceComplete':False,
        'release146DeviceAccess':False,
        'release146BetaFiles':checks['beta-complete.jsonl']['files'],
        'release146BetaPassed':checks['beta-complete.jsonl']['counts']['success'],
        'release146BetaSkipped':checks['beta-complete.jsonl']['counts']['skipped'],
        'sourceIncludesCompleteFileRegressionRerunResults':True,""")
(out / 'freeze_source.py').write_text(text, encoding='utf-8')
print('Prepared version 46 source freezer; no snapshot created yet.')
