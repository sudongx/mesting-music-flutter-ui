"""Read static JADX arrays and find XOR-obfuscated audio keywords.

This analyzer never imports, installs, or executes the Android target. Each
candidate key is derived from the first character of an analyst-selected
keyword and then checked against the complete keyword, leaving false-positive
and execution questions explicit.
"""
from pathlib import Path
import json
import re

ROOT = Path(__file__).parent
KEYWORDS = [
    "音效", "均衡", "音质", "Audio", "audio", "Sound", "sound", "Effect",
    "effect", "Equalizer", "equalizer", "Dolby", "dolby", "Reverb",
    "BassBoost", "Virtualizer", "DSP", "dsp", "PCM", "sampleRate",
]
findings = []
for path in sorted((ROOT / "jadx-static").glob("*.java")):
    source = path.read_text(encoding="utf-8")
    for match in re.finditer(r"(f\d+short)\s*=\s*(?:new short\[\])?\{([^}]+)\}", source):
        try:
            values = [int(x.strip()) for x in match.group(2).split(",")]
        except ValueError:
            continue
        for keyword in KEYWORDS:
            for offset in range(len(values) - len(keyword) + 1):
                key = (values[offset] & 0xFFFF) ^ ord(keyword[0])
                if not all(((values[offset + i] & 0xFFFF) ^ key) == ord(c) for i, c in enumerate(keyword)):
                    continue
                low = max(0, offset - 30)
                high = min(len(values), offset + len(keyword) + 80)
                context = "".join(chr(((v & 0xFFFF) ^ key) & 0xFFFF) for v in values[low:high])
                findings.append({
                    "file": path.name,
                    "line": source.count("\n", 0, match.start()) + 1,
                    "array": match.group(1),
                    "offset": offset,
                    "keyword": keyword,
                    "key": key,
                    "context_offset": low,
                    "context": context,
                })
(ROOT / "audio-keyword-scan.json").write_text(json.dumps(findings, ensure_ascii=True, indent=2), encoding="utf-8")
print(json.dumps(findings, ensure_ascii=True, indent=2))
