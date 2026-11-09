"""Check local report references and hash the final static-analysis deliverables."""
import hashlib
import json
import re
from pathlib import Path

root = Path(__file__).resolve().parent
reports = [root / "REPORT.md", root / "analysis-audio.md"]
bundles = [root / "evidence-main.json", root / "evidence-audio.json"]
ids = set()
counts = []
for bundle in bundles:
    records = json.loads(bundle.read_text(encoding="utf-8"))["records"]
    ids.update(record["evidence_id"] for record in records)
    counts.append({"file": bundle.name, "records": len(records)})
for report in reports:
    text = report.read_text(encoding="utf-8")
    missing = set(re.findall(r"ev_[0-9a-f]{64}", text)) - ids
    if missing:
        raise SystemExit(f"Missing source records in {report.name}: {sorted(missing)}")
    for target in re.findall(r"\]\((D:/[^)]+)\)", text):
        file_path = re.sub(r":\d+$", "", target)
        if not Path(file_path).is_file():
            raise SystemExit(f"Missing local report target: {target}")

sample = Path(r"C:\Users\zyt\Downloads\base.apk")
digest = hashlib.sha256(sample.read_bytes()).hexdigest()
expected = "7bf0af3ef1dfeaedff3a8c1a24216a3e1d2cdab8c8dda5581860f5f1660266fb"
if digest != expected:
    raise SystemExit("Original APK identity changed")
files = []
for file_path in sorted(root.rglob("*")):
    if file_path.is_file() and file_path.name != "analysis-manifest.json":
        files.append({"path": str(file_path.relative_to(root)),
                      "bytes": file_path.stat().st_size,
                      "sha256": hashlib.sha256(file_path.read_bytes()).hexdigest()})
jar = Path(r"D:\CodexCache\rea\jadx-headless-mcp\0.7.1\jadx-headless-mcp-0.7.1-all.jar")
manifest = {"artifact_sha256": digest, "artifact_unchanged": True,
            "target_executed": False, "phone_or_adb_accessed": False,
            "business_network_accessed": False, "product_modified": False,
            "static_decompiler_jar": str(jar),
            "static_decompiler_sha256": hashlib.sha256(jar.read_bytes()).hexdigest(),
            "derived_string_scope": "Static initial values only; no runtime validity implied",
            "evidence_bundles": counts, "cited_evidence_records_present": True,
            "local_report_targets_exist": True,
            "rea_connections": "Both checkpointed and reset; no native target was opened",
            "files": files}
(root / "analysis-manifest.json").write_text(
    json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"apk_unchanged": True, "files_hashed": len(files),
                  "evidence_bundles": counts, "report_references": "passed"}))
