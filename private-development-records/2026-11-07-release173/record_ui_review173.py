"""Record the final twelve host images after individually viewing each one."""
from pathlib import Path
import hashlib
import json

out = Path(__file__).resolve().parent
images = sorted((out / 'ui').glob('*.png'))
assert len(images) == 12
record = {
    'allImagesViewed': True,
    'hostOnly': True,
    'viewportLogicalPixels': [320, 700],
    'textScaleFactor': 1.4,
    'surfaces': ['music', 'lyrics', 'songs', 'singers', 'artist', 'cover'],
    'modes': ['light', 'dark'],
    'review': [
        'Viewed all twelve final images individually after the accepted capture run.',
        'Music progress/controls and retained glass navigation fit the narrow large-text viewport.',
        'Lyrics intentionally retain their temporary dark glass theme in both app modes.',
        'Search and artist titles truncate safely; cover actions remain scrollable with large text.',
        'Fixtures contain synthetic song/artist text and existing local review artwork; no account access.',
    ],
    'images': [{'path': p.name, 'bytes': p.stat().st_size,
                'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in images],
}
(out / 'ui-review.json').write_text(json.dumps(record, ensure_ascii=False, indent=2) + '\n', 'utf-8')
print({'imagesViewed': len(images), 'hostOnly': True})
