"""Project selected original DEX methods as instruction-level evidence.

No target execution or decompilation: raw code units are retained together with
resolved constant strings, field/method/type references at decoded boundaries.
Branch/data-flow interpretation is left explicit to the analyst.
"""
import argparse
import hashlib
import json
import struct
import zipfile

from index_official_hosts import Dex, EXPECTED_SHA256, SOURCE, WIDTH
from index_phone_context_calls import proto


def field(dex, index):
    _, offset = struct.unpack_from("<II", dex.data, 80)
    owner, kind, name = struct.unpack_from("<HHI", dex.data, offset + index * 8)
    return {"field_index": index, "owner": dex.types[owner], "type": dex.types[kind], "name": dex.strings[name]}


def decode(dex, offset):
    registers, ins, outs, tries, debug, size = struct.unpack_from("<HHHHII", dex.data, offset)
    units = struct.unpack_from(f"<{size}H", dex.data, offset + 16)
    output = []
    pos = 0
    while pos < size:
        op = units[pos] & 255
        width = WIDTH[op]
        if op == 0 and units[pos]:
            if units[pos] == 0x0100:
                width = 4 + 2 * units[pos + 1]
            elif units[pos] == 0x0200:
                width = 2 + 4 * units[pos + 1]
            elif units[pos] == 0x0300:
                count = units[pos + 2] | units[pos + 3] << 16
                width = 4 + (units[pos + 1] * count + 1) // 2
            else:
                raise ValueError("Unknown payload")
        if pos + width > size:
            raise ValueError("Instruction extends past code item")
        row = {"code_unit_offset": pos, "opcode": hex(op), "units": list(units[pos:pos + width])}
        if op in (0x1a, 0x1b):
            index = units[pos + 1] | (units[pos + 2] << 16 if op == 0x1b else 0)
            row.update({"string_index": index, "string": dex.strings[index]})
        if op in {*range(0x6e, 0x73), *range(0x74, 0x79)}:
            method = dex.method(units[pos + 1])
            row["method"] = {**method, "prototype": proto(dex, method["proto_index"])}
        if op in range(0x52, 0x6e):
            row["field"] = field(dex, units[pos + 1])
        if op in (0x1c, 0x1f, 0x20, 0x22, 0x23, 0x24, 0x25):
            row["type"] = dex.types[units[pos + 1]]
        if op == 0x12:
            value = (units[pos] >> 12) & 15
            row["const"] = value - 16 if value & 8 else value
            row["dest_register"] = (units[pos] >> 8) & 15
        elif op in (0x13, 0x14, 0x15):
            value = units[pos + 1] if op != 0x14 else units[pos + 1] | units[pos + 2] << 16
            bits = 32 if op == 0x14 else 16
            if value & (1 << (bits - 1)):
                value -= 1 << bits
            row["const"] = value << 16 if op == 0x15 else value
            row["dest_register"] = units[pos] >> 8
        output.append(row)
        pos += width
    return {"registers": registers, "incoming_words": ins, "outgoing_words": outs, "code_unit_count": size, "instructions": output}


def extract(member, owner, method_name=None):
    with zipfile.ZipFile(SOURCE) as archive:
        data = archive.read(member)
    dex = Dex(data)
    output = {"source_apk_sha256": EXPECTED_SHA256, "dex_entry": member, "dex_sha256": hashlib.sha256(data).hexdigest(), "selected_owner": owner, "scope": "Original DEX instructions, not runtime/data-flow proof.", "methods": []}
    for ordinal, current_owner, index, offset in dex.code_methods():
        method = dex.method(index)
        if current_owner == owner and (method_name is None or method["name"] == method_name):
            output["methods"].append({**method, "prototype": proto(dex, method["proto_index"]), "code_offset": offset, **decode(dex, offset)})
    return output


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("member")
    parser.add_argument("owner")
    parser.add_argument("output")
    parser.add_argument("--method")
    args = parser.parse_args()
    if hashlib.sha256(SOURCE.read_bytes()).hexdigest() != EXPECTED_SHA256:
        raise ValueError("Unexpected original APK bytes")
    with open(args.output, "x", encoding="utf-8") as destination:
        json.dump(extract(args.member, args.owner, args.method), destination, ensure_ascii=False, indent=2)
