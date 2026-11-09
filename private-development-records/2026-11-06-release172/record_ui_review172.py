"""Bind the completed visual review to exact screenshot bytes."""
from pathlib import Path
import hashlib
import json

out = Path(__file__).resolve().parent
rows = json.loads((out/'ui-delivery-index.json').read_text('utf-8'))
assert len(rows) == 74
assert sum(r['byteIdenticalToPreviouslyViewed'] for r in rows) == 68
for row in rows:
    assert hashlib.sha256((out/'ui-delivery'/row['path']).read_bytes()).hexdigest() == row['sha256']
review = {
    'imageCount': 74, 'allImagesViewed': True,
    'hostFixtureOnly': True, 'androidGpuOrPhysicalDevice': False,
    'previous70ViewedViaContactSheets': [p.name for p in sorted((out/'ui-reviewed-contact').glob('*.png'))],
    'finalImagesByteIdenticalToPreviouslyViewed': 68,
    'newOrChangedImagesViewedVia': 'ui-delivery-contact/changed-01.png',
    'newOrChangedImageCount': 6,
    'viewports': ['390x844 text1.0', '320x700 text1.4'],
    'themes': ['global light', 'global dark', 'temporary dark artwork appearance in lyrics'],
    'coverage': ['discover', 'music cover', 'lyrics and shell', 'mine', 'playlist', 'batch selection',
                 'add to playlist', 'history', 'downloads', 'search and results', 'account',
                 'signer configuration and validation', 'free-listening and read-only QR benefits',
                 'effects', 'QR login', 'settings', 'platform switching',
                 'song actions', 'queue', 'privacy', 'create/rename/remove dialogs',
                 'loading', 'empty', 'error/retry', 'HTTP and business 301 diagnostics'],
    'findings': [
        'Lyrics controls and floating shell consistently use dark glass; exiting restores caller theme.',
        'Dark/light page text, fields, states and overlays are readable with retained glass styling.',
        'Cupertino queue rows require an explicit host fixture font, separately from Material styles; final rows are readable.',
        'Read-only benefit fixture does not permit unsupported activity claims; fixture dates are not account acceptance.',
    ],
    'limitations': ['Synthetic local covers, account responses, audio and benefits; no live CDN, NAS or music-account verification.',
                    'Host fonts are QA-only and excluded from APK; host rendering is not Android glass/GPU validation.'],
    'images': rows,
}
(out/'ui-review.json').write_text(json.dumps(review, ensure_ascii=False, indent=2)+'\n', 'utf-8')
print({'reviewedImages': 74, 'sameBytesPreviouslyViewed': 68, 'newBytesViewed': 6})
