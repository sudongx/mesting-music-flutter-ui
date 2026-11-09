"""Index final host fixtures and arrange only new bytes for visual review."""
from pathlib import Path
import hashlib
import json
from PIL import Image, ImageDraw, ImageFont

out = Path(__file__).resolve().parent
prior = {r['path']: r for r in json.loads((out/'ui-reviewed-index.json').read_text('utf-8'))}
rows = []
for path in sorted((out/'ui-delivery').glob('*.png')):
    data = path.read_bytes()
    digest = hashlib.sha256(data).hexdigest()
    rows.append({'path': path.name, 'bytes': len(data), 'sha256': digest,
                 'byteIdenticalToPreviouslyViewed': prior.get(path.name, {}).get('sha256') == digest})
assert len(rows) == 74, len(rows)
(out/'ui-delivery-index.json').write_text(json.dumps(rows, indent=2)+'\n', 'utf-8')
changed = [r for r in rows if not r['byteIdenticalToPreviouslyViewed']]
contact = out/'ui-delivery-contact'
contact.mkdir(exist_ok=True)
font = ImageFont.truetype('C:/Windows/Fonts/arial.ttf', 20)
for start in range(0, len(changed), 6):
    group = changed[start:start+6]
    sheet = Image.new('RGB', (1170, 1770), '#dddddd')
    draw = ImageDraw.Draw(sheet)
    for i, row in enumerate(group):
        x, y = (i%3)*390, (i//3)*885
        image = Image.open(out/'ui-delivery'/row['path']).convert('RGB')
        image.thumbnail((390, 844))
        sheet.paste(image, (x, y+35))
        draw.text((x+4, y+4), row['path'], fill='black', font=font)
    sheet.save(contact/f'changed-{start//6+1:02}.png')
print(json.dumps({'images': len(rows), 'alreadyViewedIdentical': len(rows)-len(changed),
                  'changedOrNew': [r['path'] for r in changed],
                  'sheets': [str(p) for p in sorted(contact.glob('*.png'))]}, indent=2))
