"""Prepare isolated R4 verification helpers without touching earlier artifacts."""
from pathlib import Path
import datetime as dt
import hashlib
import json

root = Path('D:/AnLi')
old = root / '.codex-artifacts/2026-11-03-release145-room-lease-r3'
out = root / '.codex-artifacts/2026-11-03-release145-media-owner-r4'
out.mkdir(exist_ok=False)
(out / 'private').mkdir()
for name in ['build_diagnostic.ps1', 'build_and_verify.py', 'sign_candidate.py']:
    text = (old / name).read_text(encoding='utf-8')
    text = text.replace('2026-11-03-release145-room-lease-r3', '2026-11-03-release145-media-owner-r4')
    text = text.replace('room-lease-r3.apk', 'media-owner-r4.apk')
    text = text.replace('R3 native room-lease experiment', 'R4 existing-media-service owner candidate')
    text = text.replace('private_original_signed_room_lease_candidate_pending_device_retest',
                        'private_original_signed_media_owner_candidate_pending_device_retest')
    (out / name).write_text(text, encoding='utf-8')
text = (old / 'verify_native_background.py').read_text(encoding='utf-8')
text = text.replace("['TogetherPulseScheduler.kt', 'TogetherBackgroundPlugin.kt']",
                    "['TogetherPulseScheduler.kt', 'TogetherBackgroundPlugin.kt', 'TogetherMediaLeaseCoordinator.kt']")
text = text.replace('scenarios = 0', "production.append(root / 'android/app/src/main/java/com/ryanheise/audioservice/MestingTogetherMediaLease.java')\nscenarios = 0")
text = text.replace("for version, expected in [('144', 6), ('145', 4)]:\n    label = 'scheduler' if version == '144' else 'diagnostics'",
                    "for version, label, expected in [('144', 'scheduler', 6), ('145', 'diagnostics', 4), ('145', 'media_lease', 6)]:")
(out / 'verify_native_background.py').write_text(text, encoding='utf-8')
(out / 'host-check-summary.json').write_bytes((old / 'host-check-summary.json').read_bytes())
base = json.loads((old / 'preservation-before.json').read_text(encoding='utf-8'))
base['frozen'].extend({'path': str(p), 'bytes': p.stat().st_size,
                       'sha256': hashlib.file_digest(p.open('rb'), 'sha256').hexdigest()}
                      for p in [old / 'private/Mesting-Music-v1.0.45-room-lease-r3.apk',
                                old / 'private/Mesting-Music-v1.0.45-room-lease-r3-source.zip'])
base['versionBefore'] = '1.0.45+66 R3 failed candidate'
base['capturedAt'] = dt.datetime.now(dt.timezone.utc).isoformat()
(out / 'preservation-before.json').write_text(json.dumps(base, indent=2), encoding='utf-8')
print(json.dumps({'protectedFrozenFiles': len(base['frozen'])}))
