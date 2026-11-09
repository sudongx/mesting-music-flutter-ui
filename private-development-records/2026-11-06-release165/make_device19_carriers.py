"""Exact public DEX analysis carriers. Never install or execute these APKs."""
import hashlib
import json
import zipfile
from pathlib import Path

root = Path(__file__).resolve().parent
original = root / 'official-device-19.0.0.apk'
original_hash = hashlib.sha256(original.read_bytes()).hexdigest()
assert original_hash == '68bd9ab99e45875527959ec6e2a6bf48bcd43e817b503e4870d83c65d4bf5fa8'
with zipfile.ZipFile(original) as src:
    for number in (5, 15):
        entry = f'classes{number}.dex'
        target = root / f'device19-analysis-classes{number}.apk'
        assert not target.exists(), target
        raw = src.read(entry)
        with zipfile.ZipFile(target, 'x', zipfile.ZIP_DEFLATED) as out:
            for name in ('AndroidManifest.xml', 'resources.arsc'):
                out.writestr(name, src.read(name))
            out.writestr('classes.dex', raw)
        target.with_suffix('.provenance.json').write_text(json.dumps({
            'originalApk': str(original), 'originalSha256': original_hash,
            'rawDex': entry, 'rawDexSha256': hashlib.sha256(raw).hexdigest(),
            'carrierAnalysisOnlyNotInstallable': True,
        }, indent=2), encoding='utf-8')
        print(entry, len(raw), hashlib.sha256(raw).hexdigest())
