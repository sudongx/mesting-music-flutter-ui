"""Inventory shipped Retrofit interface declarations without decompiling code.

Routes are declarations, not proof that an API executes or accepts a request.
Field/parameter annotations retain DEX offsets and descriptors for REA checks.
No network or target execution. Narrow output avoids loading the whole APK in
JADX while other workers inspect focused method implementations.
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
HTTP = re.compile(r"/(?:GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS|HTTP);$")
routes = []
counts = []
with zipfile.ZipFile(SOURCE) as archive:
    for name in archive.namelist():
        if not re.fullmatch(r"classes\d*\.dex", name):
            continue
        data = archive.read(name)
        dex = Dex(data)
        count = 0
        for ordinal in range(dex.class_count):
            offset = dex.class_offset + ordinal * 32
            typ, flags, _, _, _, directory, _, _ = struct.unpack_from("<8I", data, offset)
            if not flags & 0x200 or not directory:
                continue
            _, field_count, method_count, parameter_count = struct.unpack_from("<4I", data, directory)
            position = directory + 16 + field_count * 8
            selected = {}
            for j in range(method_count):
                index, annotation_set = dex.pair(position + j * 8)
                annotations = dex.annotation_set(annotation_set)
                verbs = [ann for ann in annotations if HTTP.search(ann["type"])
                         and ("/retrofit" in ann["type"] or "Lretrofit" in ann["type"])]
                if verbs:
                    item = {"dex_entry": name, "class_def_index": ordinal,
                            **dex.method(index), "annotations": annotations, "parameters": []}
                    selected[index] = item
                    routes.append(item)
                    count += 1
            if selected:
                position += method_count * 8
                for j in range(parameter_count):
                    index, annotations = dex.pair(position + j * 8)
                    if index not in selected:
                        continue
                    selected[index]["parameters"] = [dex.annotation_set(dex.uint(annotations + 4 + i * 4))
                                                      for i in range(dex.uint(annotations))]
        counts.append({"dex_entry": name, "sha256": hashlib.sha256(data).hexdigest(), "routes": count})
        del dex, data

destination = ROOT / "official-retrofit-contract-index.json"
if destination.exists():
    raise FileExistsError(destination)
with SOURCE.open("rb") as stream:
    source_hash = hashlib.file_digest(stream, "sha256").hexdigest()
destination.write_text(json.dumps({"source_sha256": source_hash, "scope": __doc__,
                                  "dex": counts, "routes": routes}, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"saved": str(destination), "routes": len(routes)}))
for item in routes:
    paths = [ann["elements"].get("value", "") for ann in item["annotations"] if HTTP.search(ann["type"])]
    if any(re.search(r"play|media_v2|reward|inspire|free.?listen|benefit", path, re.I) for path in paths):
        print(json.dumps({"dex": item["dex_entry"], "owner": item["owner"],
                          "name": item["name"], "path": paths}, ensure_ascii=False))
