"""Finish bounded static dependency/resource checks without loading Android code.

Inputs are the pinned official APK and saved readelf/REA evidence.  This script
does not execute a shared library, decrypt resources, or modify product source.
"""
import hashlib
import json
import re
import struct
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "audio-native-static"
SOURCE = ROOT / "official-android-latest.apk"
EXPECTED = "b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741"


def digest(data):
    return hashlib.sha256(data).hexdigest()


def dex_strings(data):
    """Yield literal DEX strings, preserving their table ordinals and byte offsets."""
    count, offset = struct.unpack_from("<II", data, 56)
    for index in range(count):
        start = struct.unpack_from("<I", data, offset + index * 4)[0]
        cursor = start
        while data[cursor] & 128:
            cursor += 1
        cursor += 1
        end = data.index(0, cursor)
        yield index, start, data[cursor:end].decode("utf-8", errors="replace")


source_bytes = SOURCE.read_bytes()
assert digest(source_bytes) == EXPECTED
libraries = []
for name in ("libaudio_effect_bridge", "libBYTE_AUDIO_TUNER_CAPI_LITE", "libc++_shared", "libaudioeffect"):
    target = OUT / f"{name}.so"
    readelf = (OUT / f"{name}-readelf.txt").read_text(encoding="utf-8-sig")
    libraries.append({"name": target.name, "bytes": target.stat().st_size,
                      "sha256": digest(target.read_bytes()), "architecture": "AArch64",
                      "dt_needed": re.findall(r"\(NEEDED\).*?\[(.*?)\]", readelf),
                      "source_readelf": str(OUT / f"{name}-readelf.txt")})

pattern = re.compile(r"audio[_/-]?effect|byte_audio_tuner|sound[_/-]?effect", re.I)
resource_names, literals, abi_libraries = [], [], []
with zipfile.ZipFile(SOURCE) as archive:
    for info in archive.infolist():
        if info.filename.startswith("lib/"):
            abi_libraries.append(info.filename)
        if not info.filename.startswith("lib/") and pattern.search(info.filename):
            resource_names.append({"path": info.filename, "bytes": info.file_size})
        if not re.fullmatch(r"classes\d*\.dex", info.filename):
            continue
        for index, offset, value in dex_strings(archive.read(info.filename)):
            if (pattern.search(value) or "active_chain_nodes" in value or
                (value.startswith("{") and '"chains"' in value)) and len(value) <= 30000:
                literals.append({"dex": info.filename, "string_index": index,
                                 "string_data_offset": offset, "value": value})
    cxx = archive.read("lib/arm64-v8a/libc++_shared.so")
    official_cxx = {"bytes": len(cxx), "sha256": digest(cxx)}

report = {"source_sha256": EXPECTED, "scope": "Stored bytes and readelf tables only; no loading, linkage execution or DSP output",
          "libraries": libraries,
          "minimal_non_system_dt_needed_closure": ["libaudio_effect_bridge.so", "libBYTE_AUDIO_TUNER_CAPI_LITE.so", "libc++_shared.so"],
          "official_cxx": official_cxx,
          "official_abis": sorted(set(x.split("/")[1] for x in abi_libraries)),
          "effect_name_resources": resource_names,
          "resource_search_boundary": "All APK member names matched case-insensitive audio_effect/audioeffect/sound_effect/byte_audio_tuner; obfuscated or remote resources are not excluded",
          "dex_effect_literals": literals}
existing = Path(r"D:\AnLi\release\Mesting-Music-v1.0.61.apk")
if existing.exists():
    with zipfile.ZipFile(existing) as archive:
        report["mesting61_cxx"] = [{"path": info.filename, "bytes": info.file_size,
                                    "sha256": digest(archive.read(info.filename))}
                                   for info in archive.infolist() if info.filename.endswith("libc++_shared.so")]
(OUT / "native-dependencies.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

bundle = json.loads((ROOT / "official-research-evidence.json").read_text(encoding="utf-8"))
excerpts = []
for record in bundle["records"]:
    if record.get("operation") not in {"inspect_android_method", "inspect_android_class"}:
        continue
    result = record.get("normalized_result", {})
    if result.get("kind") == "summary":
        continue
    excerpts.append({"evidence_id": record["evidence_id"], "parameters": record.get("parameters"),
                     "normalized_result": result})
(OUT / "saved-dex4-excerpts.json").write_text(json.dumps(excerpts, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"libraries": len(libraries), "effect_named_resources": len(resource_names),
                  "dex_effect_literals": len(literals), "official_abis": report["official_abis"],
                  "cxx": official_cxx, "mesting61_cxx": report.get("mesting61_cxx")}, ensure_ascii=False))
print(json.dumps(resource_names[:45], ensure_ascii=False))
