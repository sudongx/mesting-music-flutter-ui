"""Locate current playback/reward contract strings, including non-/luna paths.

Literal presence is a location aid, never endpoint reachability or execution.
No network calls and no APK code execution are performed.
"""
import hashlib
import json
import re
import struct
import zipfile
from pathlib import Path

from read_dex_contract import Dex

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "official-android-latest.apk"
PATTERN = re.compile(r"media.?player|media.?v2|play(?:er|back)?[\W_]*(?:info|url|auth)|(?:reward|inspire|free.?listen|listen.?time).*(?:api|request|response)|(?:api|request|response).*(?:reward|inspire|free.?listen)|^/?(?:luna|aweme|passport)/.*(?:play|reward|inspire|commerce|benefit)", re.I)
matches = []
with zipfile.ZipFile(SOURCE) as archive:
    for name in archive.namelist():
        if not re.fullmatch(r"classes\d*\.dex", name):
            continue
        data = archive.read(name)
        dex = Dex(data)
        items = []
        for index in range(dex.string_count):
            value = dex.string(index)
            if len(value) <= 400 and PATTERN.search(value):
                items.append({"string_index": index, "string_data_offset": dex.uint(dex.string_offset + 4 * index), "value": value})
        if items:
            matches.append({"dex_entry": name, "sha256": hashlib.sha256(data).hexdigest(), "strings": items})
        del dex, data
destination = ROOT / "media-contract-literal-index.json"
if destination.exists():
    raise FileExistsError(destination)
destination.write_text(json.dumps({"scope": __doc__, "dex": matches}, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"saved": str(destination), "selected_strings": sum(len(row["strings"]) for row in matches)}))
for row in matches:
    selected = [item["value"] for item in row["strings"] if item["value"].startswith(("/", "Lcom/luna/"))]
    if selected:
        print(json.dumps({"dex": row["dex_entry"], "paths_and_types": selected[:35]}, ensure_ascii=False))
