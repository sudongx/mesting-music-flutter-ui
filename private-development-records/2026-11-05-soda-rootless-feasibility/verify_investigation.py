"""Verify analysis carriers, retained evidence IDs, and current report links.

This validates research integrity only: no target code runs, no network request
is sent, and neither server acceptance nor device behavior is inferred.
"""
import hashlib
import json
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "official-android-latest.apk"
EXPECTED = "b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741"


def sha256(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest()


def main():
    issues, carriers, bundles = [], [], []
    source_digest = sha256(SOURCE)
    if source_digest != EXPECTED:
        issues.append("Original official APK changed")
    provenance_files = list(ROOT.glob("*-provenance.json")) + list(ROOT.glob("*.provenance.json"))
    with zipfile.ZipFile(SOURCE) as original:
        for path in sorted(set(provenance_files)):
            record = json.loads(path.read_text(encoding="utf-8-sig"))
            destination = Path(record.get("path") or ROOT / path.name.replace("-provenance.json", ".apk"))
            if "path" not in record:
                # The first DEX4 carrier predates the shared carrier helper.
                destination = ROOT / record.get("derived_path", destination.name)
            expected_subset = record.get("derived_apk_sha256") or record.get("subset_sha256")
            if not destination.exists():
                issues.append(f"Missing carrier for {path.name}: {destination}")
                continue
            actual_subset = sha256(destination)
            item = {"provenance": path.name, "carrier": destination.name,
                    "sha256": actual_subset, "members_match_original": True}
            if expected_subset and actual_subset != expected_subset:
                issues.append(f"Carrier digest mismatch: {destination.name}")
            # Every retained member must be byte-identical to the original,
            # irrespective of the helper's historical provenance key names.
            with zipfile.ZipFile(destination) as derived:
                for name in derived.namelist():
                    if name not in original.namelist() or derived.read(name) != original.read(name):
                        item["members_match_original"] = False
                        issues.append(f"Changed/non-original carrier member: {destination.name}:{name}")
            carriers.append(item)

    # Read one bundle at a time; large full-artifact metadata should not be
    # kept alive simply to check references in the human-facing reports.
    evidence_ids = set()
    files = list(ROOT.glob("*.json")) + list((ROOT / "audio-native-static").glob("*.json"))
    for path in sorted(files):
        if "checkpoint" in path.name:
            continue
        try:
            data = json.loads(path.read_text(encoding="utf-8-sig"))
        except (ValueError, UnicodeDecodeError):
            continue
        if not isinstance(data, dict) or not isinstance(data.get("records"), list):
            continue
        ids = [entry.get("evidence_id") for entry in data["records"] if isinstance(entry, dict)]
        evidence_ids.update(value for value in ids if isinstance(value, str))
        bundles.append({"path": str(path.relative_to(ROOT)), "sha256": sha256(path),
                        "records": len(data["records"]), "unknown_heads": len(data.get("unknowns", []))})
        del data

    documents = ["README.md", "MINIMAL-CHAIN-STATUS.md", "CURRENT-MOBILE-CONTRACT.md", "phone-client-context.md",
                 "reward-settlement-contract.md", "effect-config-map.md", "official-host-context.md",
                 "audio-feasibility-implementation.md", "integration-map.md"]
    if (ROOT / "phone-request-hook-boundary.md").is_file():
        documents.append("phone-request-hook-boundary.md")
    references = set()
    for name in documents:
        path = ROOT / name
        if not path.is_file():
            issues.append(f"Missing current report: {name}")
            continue
        content = path.read_text(encoding="utf-8-sig")
        references.update(re.findall(r"ev_[a-f0-9]{64}", content))
        for target in re.findall(r"\]\(([^)]+)\)", content):
            if target.lower().startswith("d:/") and not Path(target).exists():
                issues.append(f"Broken local report link in {name}: {target}")
    missing_ids = sorted(references - evidence_ids)
    issues.extend(f"Unretained current-report evidence ID: {value}" for value in missing_ids)
    result = {"scope": __doc__, "official_apk_sha256": source_digest,
              "official_apk_matches": source_digest == EXPECTED, "carriers": carriers,
              "bundles": bundles, "unique_retained_evidence_ids": len(evidence_ids),
              "current_report_evidence_ids": len(references), "missing_report_evidence_ids": missing_ids,
              "checked_reports": documents, "issues": issues}
    (ROOT / "investigation-integrity.json").write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({"carriers": len(carriers), "bundles": len(bundles),
                      "retained_unique_ids": len(evidence_ids), "report_ids": len(references),
                      "issues": issues}, ensure_ascii=False))
    return 1 if issues else 0


if __name__ == "__main__":
    raise SystemExit(main())
