from pathlib import Path
import json
import zipfile

root = Path('D:/AnLi')
src = root / '.codex-artifacts/2026-11-01-release129'
dst = root / '.codex-artifacts/2026-11-01-release130'
files = sorted(set(json.loads((src / 'beta-files.json').read_text(encoding='utf-8-sig')) + [
    'test/release_130_artwork_reveal_test.dart',
]))
(dst / 'beta-files.json').write_text(json.dumps(files, indent=2) + '\n', encoding='utf-8')
for name in ['build_release.ps1', 'sign_and_verify.py', 'freeze_source.py', 'verify_local_notes.dart']:
    text = (src / name).read_text(encoding='utf-8-sig')
    text = text.replace('1.0.28', 'PREVIOUS_VERSION').replace('1.0.29', '1.0.30').replace('PREVIOUS_VERSION', '1.0.29')
    text = text.replace('release129', 'release130').replace('MESTING129', 'MESTING130')
    text = text.replace("'50'", "'51'").replace('== 50', '== 51').replace(': 50', ': 51').replace('VersionCode 50', 'VersionCode 51')
    (dst / name).write_text(text, encoding='utf-8')
print({'betaFiles': len(files), 'includesBeta5': 'test/beta5_ui_test.dart' in files})
