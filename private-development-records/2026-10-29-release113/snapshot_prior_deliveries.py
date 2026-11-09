from pathlib import Path
import hashlib
import json

root = Path('D:/AnLi')
items = [*root.glob('Mesting-Music-*-source.zip'), *(root / 'release').glob('*.apk'), root / 'android/gradle.properties', root / 'pubspec.lock']
result = []
for file in items:
    if 'v1.0.13' in file.name:
        continue
    with file.open('rb') as stream:
        digest = hashlib.file_digest(stream, 'sha256').hexdigest()
    result.append({'path': file.relative_to(root).as_posix(), 'size': file.stat().st_size, 'sha256': digest})
(root / '.codex-artifacts/2026-10-29-release113/preserved-inputs.json').write_text(json.dumps(result, indent=2), encoding='utf-8')
print(json.dumps({'priorArtifactsAndConfigurations': len(result)}))
