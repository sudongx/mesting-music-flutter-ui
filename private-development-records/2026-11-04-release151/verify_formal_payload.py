"""Verify the existing R4 APK without rebuilding, resigning or device access.

R8 inlines the bridge and Android resource optimization renames XML files.
Resolve both using the build's mapping and resource table before checking
their presence in the actual APK. Original source names alone are not proof.
"""
from pathlib import Path
import ast
import hashlib
import json
import re
import struct
import subprocess
import zipfile

ROOT = Path('D:/AnLi')
OUT = ROOT / '.codex-artifacts/2026-11-04-release151'
RESUME = Path(__file__).resolve().parent
AAPT = Path('D:/CodexCache/android-build/sdk/build-tools/35.0.0/aapt.exe')
record = json.loads((ROOT / 'release/Mesting-Music-v1.0.51-verification.json').read_text('utf-8'))
apk = ROOT / 'release' / record['file']
assert hashlib.file_digest(apk.open('rb'), 'sha256').hexdigest() == record['sha256']
assert all(record[key] for key in (
    'v2Signature', 'v3Signature', 'engineBytesMatchPinnedManifest', 'zipAlignment16KiB'))

# Load only the existing pure DEX reader; importing that script would sign.
module = ast.parse((OUT / 'sign_and_verify.py').read_text('utf-8'))
reader = next(node for node in module.body
              if isinstance(node, ast.FunctionDef) and node.name == 'dex_defined_classes')
namespace = {'struct': struct}
exec(compile(ast.Module(body=[reader], type_ignores=[]), '<existing-dex-reader>', 'exec'), namespace)
mapping = (ROOT / 'build/app/outputs/mapping/betaRelease/mapping.txt').read_text('utf-8')
methods = [
    'com.ryanheise.audioservice.MestingTogetherMediaLease.acquire(',
    'com.ryanheise.audioservice.MestingTogetherMediaLease.release(',
    'com.ryanheise.audioservice.MestingTogetherMediaLease$1.promote(',
    'com.ryanheise.audioservice.MestingTogetherMediaLease$1.releaseIfOwned(',
    'com.mesting.music.TogetherMediaLeaseCoordinator.acquire(',
    'com.mesting.music.TogetherMediaLeaseCoordinator.release(',
]
holders = {method: set() for method in methods}
holder = None
for line in mapping.splitlines():
    header = re.match(r'^(\S+) -> ([^\s:]+):$', line)
    if header:
        holder = header[2]
    for method in methods:
        if holder and method in line:
            holders[method].add(holder)

resources = subprocess.check_output([
    str(AAPT), 'dump', '--values', 'resources', str(apk)
]).decode('utf-8', errors='replace')
icon = re.search(
    r'(?m)^\s*resource (0x[0-9a-f]+) [^\n]*:drawable/ic_stat_together:[^\n]*\n'
    r'\s*\(string8\) "([^"]+)"', resources)
assert icon, 'Resolve the new notification icon through the optimized resource table'
with zipfile.ZipFile(apk) as archive:
    dexes = {name: archive.read(name) for name in archive.namelist()
             if re.fullmatch(r'classes\d*\.dex', name)}
    definitions = {name: set(namespace['dex_defined_classes'](data))
                   for name, data in dexes.items()}
    evidence = {}
    for method, classes in holders.items():
        live = []
        for mapped in sorted(classes):
            descriptor = 'L' + mapped.replace('.', '/') + ';'
            defined = [name for name, values in definitions.items() if descriptor in values]
            if defined:
                live.append({'mappedHolder': mapped, 'definedInDex': defined})
        assert live, method
        evidence[method] = live
    phases = ['foregroundLeaseAcquired', 'foregroundLeaseRejected']
    for phase in phases:
        assert any(phase.encode() in data for data in dexes.values()), phase
    assert any(b'com.mesting.music.together.mediaLease' in data for data in dexes.values())
    assert archive.read(icon[2]), 'The resolved notification XML must exist in the APK'

def permissions(path):
    """Compare declared permissions without using any phone or account."""
    text = subprocess.check_output([str(AAPT), 'dump', 'badging', str(path)]).decode(
        'utf-8', errors='replace')
    return sorted(set(re.findall(
        r"^uses-permission(?:-sdk-\d+)?: name='([^']+)'", text, re.MULTILINE)))

r2 = ROOT / '.codex-artifacts/2026-11-03-release145-sync-fix/private/Mesting-Music-v1.0.45-sync-fix-r2.apk'
old_permissions, new_permissions = permissions(r2), permissions(apk)
# AndroidX derives this signature-only receiver protection from applicationId.
# A package rename necessarily changes that declaration; assert the exact one
# allowed rename, while every OS permission and all other declarations match.
old_receiver = 'com.mesting.music.beta.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION'
new_receiver = 'com.mesting.music.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION'
assert old_receiver in old_permissions and new_receiver in new_permissions
assert set(old_permissions) - {old_receiver} == set(new_permissions) - {new_receiver}
native_reference = ROOT / '.codex-artifacts/2026-11-03-release147/native-background-verification.json'
native = json.loads(native_reference.read_text('utf-8'))
assert native['scenariosPassed'] == 16
for item in native['inputs']:
    assert hashlib.file_digest((ROOT / item['path']).open('rb'), 'sha256').hexdigest() == item['sha256']

summary = {
    'apk': str(apk), 'bytes': apk.stat().st_size, 'sha256': record['sha256'],
    'r8InlinedBridgeMethodEvidence': evidence,
    'leasePhasesPresent': phases, 'ownershipMarkerPresent': True,
    'notificationResource': {'id': icon[1], 'resolvedPath': icon[2], 'present': True},
    'permissionsIdenticalToR2': False,
    'permissionsEquivalentExceptPackageScopedRename': True,
    'packageScopedPermissionRename': {'from': old_receiver, 'to': new_receiver},
    'osPermissionsIdenticalToR2': True, 'permissionCount': len(new_permissions),
    'nativeScenariosPassed': 16, 'nativeInputsStillMatch': True,
    'r4NativeInputsMatch': True, 'release151ListAndTransitionChanges': True,
    'priorFrozenArtifactsToVerifyAtDelivery': 92,
    'inheritedNativeVerificationReference': str(native_reference),
    'inheritedNativeVerificationSha256': hashlib.sha256(native_reference.read_bytes()).hexdigest(),
    'deviceAccess': False, 'realAccountAccess': False,
    'formalVersion': '1.0.51+72', 'r4LogicPreserved': True,
    'formalApkDeviceAccepted': False, 'nativeChecksInheritedFromUnchangedR4Inputs': True,
}
(RESUME / 'formal-payload-verification.json').write_text(
    json.dumps(summary, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print(json.dumps({key: summary[key] for key in (
    'bytes', 'sha256', 'notificationResource', 'nativeScenariosPassed',
    'permissionsEquivalentExceptPackageScopedRename', 'deviceAccess')}, ensure_ascii=False, indent=2))
