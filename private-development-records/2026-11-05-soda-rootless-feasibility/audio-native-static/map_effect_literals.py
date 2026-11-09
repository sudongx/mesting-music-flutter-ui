"""Index exact DEX literal references without running a JVM or target code.

This is a byte-level location index, not a control/data-flow proof.  Instruction
boundaries use standard non-quickened DEX widths; malformed data is rejected.
All output retains method/string indices and source offsets for REA follow-up.
"""
import hashlib
import json
import struct
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "official-android-latest.apk"
OUT = ROOT / "audio-native-static"
EXPECTED = "b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741"


def uleb(data, pos):
    value, shift = 0, 0
    while True:
        byte = data[pos]
        pos += 1
        value |= (byte & 127) << shift
        if not byte & 128:
            return value, pos
        shift += 7
        if shift > 35:
            raise ValueError("Invalid ULEB128")


def width(code, index):
    word = code[index]
    op = word & 255
    if op == 0 and word != 0:
        if word == 0x100:
            return 4 + 2 * code[index + 1]
        if word == 0x200:
            return 2 + 4 * code[index + 1]
        if word == 0x300:
            count = code[index + 2] | code[index + 3] << 16
            return 4 + (code[index + 1] * count + 1) // 2
        raise ValueError("Unrecognized DEX payload")
    if op in (0x03, 0x06, 0x09, 0x14, 0x17, 0x1b, 0x24, 0x25,
              0x26, 0x2a, 0x2b, 0x2c, 0xfc, 0xfd) or 0x6e <= op <= 0x72 or 0x74 <= op <= 0x78:
        return 3
    if op == 0x18:
        return 5
    if op in (0xfa, 0xfb):
        return 4
    if op in (0x02, 0x05, 0x08, 0x13, 0x15, 0x16, 0x19, 0x1a,
              0x1c, 0x1f, 0x20, 0x22, 0x23, 0x29, 0xfe, 0xff) or 0x2d <= op <= 0x3d or 0x44 <= op <= 0x6d or 0x90 <= op <= 0xaf or 0xd0 <= op <= 0xe2:
        return 2
    return 1


data_bytes = SOURCE.read_bytes()
assert hashlib.sha256(data_bytes).hexdigest() == EXPECTED
DEX_NUMBER = int(sys.argv[1]) if len(sys.argv) > 1 else 6
DEX_ENTRY = f"classes{DEX_NUMBER}.dex"
with zipfile.ZipFile(SOURCE) as archive:
    data = archive.read(DEX_ENTRY)
assert data[:4] == b"dex\n"
string_count, string_offset = struct.unpack_from("<II", data, 56)
type_count, type_offset = struct.unpack_from("<II", data, 64)
proto_count, proto_offset = struct.unpack_from("<II", data, 72)
field_count, field_offset = struct.unpack_from("<II", data, 80)
method_count, method_offset = struct.unpack_from("<II", data, 88)
class_count, class_offset = struct.unpack_from("<II", data, 96)
strings = []
for ordinal in range(string_count):
    offset = struct.unpack_from("<I", data, string_offset + ordinal * 4)[0]
    _, offset = uleb(data, offset)
    strings.append(data[offset:data.index(0, offset)].decode("utf-8", errors="replace"))
types = [strings[struct.unpack_from("<I", data, type_offset + i * 4)[0]] for i in range(type_count)]
protos = []
for i in range(proto_count):
    _, return_type, parameters = struct.unpack_from("<III", data, proto_offset + i * 12)
    args = []
    if parameters:
        count = struct.unpack_from("<I", data, parameters)[0]
        args = [types[struct.unpack_from("<H", data, parameters + 4 + j * 2)[0]] for j in range(count)]
    protos.append("(" + "".join(args) + ")" + types[return_type])
methods = []
for i in range(method_count):
    cls, proto, name = struct.unpack_from("<HHI", data, method_offset + i * 8)
    methods.append({"class": types[cls], "name": strings[name], "descriptor": protos[proto]})

targets = {i for i, value in enumerate(strings) if value.startswith("{") and '"chains"' in value}
literal_uses, selected_methods, configuration_methods, class_interfaces = [], [], [], []
configuration_classes = {
    "Lcom/luna/biz/playing/common/config/effect/AudioEffectSettingsConfigKt;",
    "Lcom/luna/biz/playing/common/config/effect/AudioEffectSettingsConfig;",
    "Lcom/luna/biz/playing/common/config/effect/DefaultAudioEffectConfig;",
    "Lcom/luna/biz/playing/common/config/effect/DefaultAudioEffectV2;",
}
if DEX_NUMBER == 4:
    configuration_classes = {
        "Lcom/luna/audio/effect/AudioEffectProcessor;",
        "Lcom/luna/audio/effect/AudioEffectBridge;",
        "Lcom/luna/audio/effect/model/OperateFadeInOption;",
        "Lcom/luna/audio/effect/model/OperateFadeOutOption;",
    }
for cls_index in range(class_count):
    cls, flags, superclass, interfaces, source_file, annotations, class_data, static_values = struct.unpack_from("<8I", data, class_offset + cls_index * 32)
    if types[cls] in configuration_classes:
        interface_types = []
        if interfaces:
            count = struct.unpack_from("<I", data, interfaces)[0]
            interface_types = [types[struct.unpack_from("<H", data, interfaces + 4 + i * 2)[0]] for i in range(count)]
        class_interfaces.append({"class": types[cls], "superclass": types[superclass], "interfaces": interface_types})
    if not class_data:
        continue
    counts, cursor = [], class_data
    for _ in range(4):
        value, cursor = uleb(data, cursor)
        counts.append(value)
    for field_group in counts[:2]:
        for _ in range(field_group):
            _, cursor = uleb(data, cursor)
            _, cursor = uleb(data, cursor)
    for method_group in counts[2:]:
        method_index = 0
        for _ in range(method_group):
            diff, cursor = uleb(data, cursor)
            method_index += diff
            access_flags, cursor = uleb(data, cursor)
            code_offset, cursor = uleb(data, cursor)
            if not code_offset:
                continue
            size = struct.unpack_from("<I", data, code_offset + 12)[0]
            code = struct.unpack_from(f"<{size}H", data, code_offset + 16)
            instructions, uses, index = [], [], 0
            while index < size:
                op = code[index] & 255
                length = width(code, index)
                if index + length > size:
                    raise ValueError(f"Bad instruction end {method_index}:{index}")
                instruction = {"code_unit_offset": index, "file_offset": code_offset + 16 + index * 2,
                               "opcode": hex(op), "raw_units": [hex(x) for x in code[index:index + length]]}
                if op in (0x1a, 0x1b):
                    string_index = code[index + 1] | (code[index + 2] << 16 if op == 0x1b else 0)
                    instruction.update(string_index=string_index, string=strings[string_index], register=code[index] >> 8)
                    if string_index in targets:
                        uses.append({"instruction_index": len(instructions), "string_index": string_index,
                                     "code_unit_offset": index, "file_offset": instruction["file_offset"]})
                elif 0x6e <= op <= 0x72 or 0x74 <= op <= 0x78:
                    instruction.update(target_method_index=code[index + 1], target=methods[code[index + 1]])
                elif 0x52 <= op <= 0x6d:
                    field_index = code[index + 1]
                    field_class, field_type, field_name = struct.unpack_from("<HHI", data, field_offset + field_index * 8)
                    instruction.update(field_index=field_index,
                                       field={"class": types[field_class], "type": types[field_type], "name": strings[field_name]})
                elif op in (0x1c, 0x22):
                    instruction["type"] = types[code[index + 1]]
                instructions.append(instruction)
                index += length
            item = {"method_index": method_index, "method": methods[method_index], "code_offset": code_offset,
                    "literal_uses": uses, "instructions": instructions}
            if types[cls] in configuration_classes:
                configuration_methods.append(item)
            if uses:
                selected_methods.append(item)
                literal_uses.extend({"method_index": method_index, "method": methods[method_index], **use} for use in uses)

report = {"source_apk_sha256": EXPECTED, "dex_entry": DEX_ENTRY,
          "dex_sha256": hashlib.sha256(data).hexdigest(),
          "scope": "Exact const-string references in standard DEX method code; no runtime or data-flow proof",
          "target_string_indices": sorted(targets), "literal_uses": literal_uses,
          "methods": selected_methods, "configuration_methods": configuration_methods,
          "class_interfaces": class_interfaces}
output_name = "effect-literal-methods.json" if DEX_NUMBER == 6 else f"effect-engine-dex{DEX_NUMBER}-methods.json"
(OUT / output_name).write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
print(json.dumps({"target_count": len(targets), "literal_use_count": len(literal_uses),
                  "methods": [{"method_index": x["method_index"], "method": x["method"], "uses": len(x["literal_uses"])} for x in selected_methods]}, ensure_ascii=False, indent=2))
