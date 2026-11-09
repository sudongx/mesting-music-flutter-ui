"""Create a byte-preserving single-DEX analysis carrier, never an installable app.

The manifest, resource table and selected original DEX remain unmodified.  The
provenance record binds each retained member to the original official APK.
"""
import hashlib
import json
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "official-android-latest.apk"
EXPECTED_SOURCE_SHA256 = "b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741"


def create_subset(dex_number):
    """Write only new derived artifacts and reject any unexpected source bytes."""
    source_sha256 = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
    if source_sha256 != EXPECTED_SOURCE_SHA256:
        raise ValueError("Official APK does not match the authorized research source")
    dex_member = "classes.dex" if dex_number == 1 else f"classes{dex_number}.dex"
    destination = ROOT / f"phone-analysis-only-dex{dex_number}.apk"
    provenance = destination.with_suffix(".provenance.json")
    if destination.exists() or provenance.exists():
        raise FileExistsError("Refusing to overwrite prior analysis artifacts")
    members = []
    with zipfile.ZipFile(SOURCE) as original, zipfile.ZipFile(destination, "x", zipfile.ZIP_DEFLATED) as derived:
        for member in ("AndroidManifest.xml", "resources.arsc", dex_member):
            content = original.read(member)
            derived.writestr(member, content)
            members.append({"original_entry": member, "derived_entry": member,
                            "sha256": hashlib.sha256(content).hexdigest(), "bytes": len(content)})
    record = {"source_apk_sha256": source_sha256,
              "derived_apk_sha256": hashlib.sha256(destination.read_bytes()).hexdigest(),
              "path": str(destination),
              "scope": "Analysis-only ZIP subset; byte-identical original members; all other DEX/native/assets omitted; not an installable delivery",
              "members": members}
    provenance.write_text(json.dumps(record, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(record, ensure_ascii=False))


if __name__ == "__main__":
    create_subset(int(sys.argv[1]))
