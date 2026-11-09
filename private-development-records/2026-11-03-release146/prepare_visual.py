"""Keep new host renders private; never overwrite a previous release capture."""
from pathlib import Path

root = Path('D:/AnLi')
out = root / '.codex-artifacts/2026-11-03-release146'
text = (root / 'test/release_145_footprint_ui_test.dart').read_text('utf-8')
for file in ['release_137_footprint_test.dart', 'release_145_footprint_test.dart',
             'support/release_144_qa.dart']:
    text = text.replace("'" + file + "'", "'file:///D:/AnLi/test/" + file + "'")
text = text.replace('.codex-artifacts/2026-11-03-release145/footprint/ui/',
                    '.codex-artifacts/2026-11-03-release146/ui/footprint/')
(out / 'footprint_visual_test.dart').write_text(text, encoding='utf-8')
print('Prepared private footprint render fixture with current production code.')
