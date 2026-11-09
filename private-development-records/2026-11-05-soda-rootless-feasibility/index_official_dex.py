"""Read DEX tables as bytes and retain narrowly selected static names and strings.

This is a location index for focused decompilation, not a runtime call trace.
Each DEX is read independently to keep the investigation memory bounded.
"""
import hashlib
import json
import re
import struct
import zipfile
from pathlib import Path

root = Path(__file__).resolve().parent
source = root / "official-android-latest.apk"
class_pattern = re.compile(r"CommerceInfoRepo|AudioEffect|SoundEffect|AudioQualityConfig|OnlineSource|LoginService|LoginApi|SMSLogin|SmsLogin|PhoneLogin|MobileLogin|DiscoverFragment|DiscoveryFragment|MineFragment|MainTab|HomePage|FreeListen|Inspire|RewardComplete|passport.*(?:[Aa]pi|[Ss]ervice)")
string_pattern = re.compile(r"^/(?:luna|passport|aweme)/.{0,200}$|audio_effect_detail|effective_inspire_time|手机号登录|短信验证码登录|发现页|我的音乐|音乐馆|听歌时长|免费听时长")

def uleb(data, position):
    value, shift = 0, 0
    while True:
        byte = data[position]
        position += 1
        value |= (byte & 127) << shift
        if not byte & 128:
            return value, position
        shift += 7
        if shift > 35:
            raise ValueError("Invalid ULEB value")

results, total_classes, total_strings = [], 0, 0
with zipfile.ZipFile(source) as archive:
    for member in sorted(archive.namelist()):
        if not re.fullmatch(r"classes\d*\.dex", member):
            continue
        data = archive.read(member)
        if not data.startswith(b"dex\n"):
            raise ValueError("Not a DEX header")
        strings_count, strings_offset = struct.unpack_from("<II", data, 56)
        types_count, types_offset = struct.unpack_from("<II", data, 64)
        classes_count, classes_offset = struct.unpack_from("<II", data, 96)
        def read_string(index):
            offset = struct.unpack_from("<I", data, strings_offset + index * 4)[0]
            _, offset = uleb(data, offset)
            end = data.index(0, offset)
            return data[offset:end].decode("utf-8", errors="replace")
        classes, matches = [], []
        for ordinal in range(classes_count):
            type_index = struct.unpack_from("<I", data, classes_offset + ordinal * 32)[0]
            string_index = struct.unpack_from("<I", data, types_offset + type_index * 4)[0]
            name = read_string(string_index)
            if class_pattern.search(name):
                classes.append({"descriptor": name, "class_def_index": ordinal})
        for index in range(strings_count):
            value = read_string(index)
            if len(value) <= 260 and string_pattern.search(value):
                matches.append({"string_index": index, "value": value})
        result = {"entry": member, "sha256": hashlib.sha256(data).hexdigest(),
                  "bytes": len(data), "class_count": classes_count,
                  "string_count": strings_count, "classes": classes,
                  "selected_strings": matches}
        results.append(result)
        total_classes += classes_count
        total_strings += strings_count
report = {"artifact_sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
          "class_count": total_classes, "string_count": total_strings,
          "scope": "DEX class definitions and selected literal strings; not a call graph",
          "dex": results}
(root / "official-dex-index.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"dex_count": len(results), "classes": total_classes,
                  "selected_classes": sum(len(x["classes"]) for x in results),
                  "selected_strings": sum(len(x["selected_strings"]) for x in results)}))
for result in results:
    useful = [x["descriptor"] for x in result["classes"]
              if "/com/luna/" in x["descriptor"] or "RewardComplete" in x["descriptor"]]
    if useful:
        print(json.dumps({"entry": result["entry"], "classes": useful[:25]}, ensure_ascii=False))
