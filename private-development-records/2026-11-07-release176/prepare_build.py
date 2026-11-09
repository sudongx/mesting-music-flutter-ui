"""Copy established candidate verifiers into the new evidence scope only."""
from pathlib import Path
import json

OUT = Path(__file__).resolve().parent
OLD = OUT.parent / '2026-11-07-release175'
before = json.loads((OUT / 'before.json').read_text('utf8'))
with (OUT / 'protected-state.json').open('x', encoding='utf8') as stream:
    stream.write(json.dumps(before, ensure_ascii=False, indent=2) + '\n')
copies = {
    'record_build_inputs.py': 'record_build_inputs.py',
    'sign_candidate175.py': 'sign_candidate176.py',
    'verify_native_packaging175.py': 'verify_native_packaging176.py',
    'verify_audio_bridge175.py': 'verify_audio_bridge176.py',
    'verify_qr_callbacks175.py': 'verify_qr_callbacks176.py',
}
for source, target in copies.items():
    code = (OLD / source).read_text('utf8')
    code = code.replace('1.0.75', '1.0.76').replace('candidate4', 'candidate1')
    code = code.replace("versionCode='96'", "versionCode='97'")
    code = code.replace("['versionCode'] == 96", "['versionCode'] == 97")
    code = code.replace("'androidVersionCode': 96", "'androidVersionCode': 97")
    code = code.replace("'code': 96", "'code': 97")
    with (OUT / target).open('x', encoding='utf8') as stream:
        stream.write(code)
print('Prepared new candidate-only build and payload verification helpers')
