"""Index selected DEX host literals, their exact instruction users and class owners.

Read-only byte parsing, not execution or data-flow proof.  Constant references are
decoded at instruction boundaries rather than found by byte-substring scanning.
All source DEX hashes, method identities and code-unit locations are retained.
"""
import hashlib
import json
import re
import struct
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "official-android-latest.apk"
EXPECTED_SHA256 = "b639e67c13e03377f0f9d8068c5e0419b1acd42c7d529362f11ae704b3838741"
HOST = re.compile(r"(?:https?://[^\s]{0,180}(?:luna|qishui|passport|snssdk)[^\s]{0,180}$)|^(?:[a-z0-9-]+\.)*(?:luna|qishui|passport|snssdk)[a-z0-9.-]*\.[a-z]{2,}$", re.I)
EXACT = {"/luna/media-player", "/luna/discover", "/luna/discover/mix", "/luna/search/{search_type}"}
CLASS = re.compile(r"BDAccountDelegate|BDAccount.*(?:Config|Request)|Account.*(?:NetworkConfig|HostConfig)|Luna.*(?:Api|Host)|Api.*Host|Host.*Config|Network.*Config")


def uleb(data, pos):
    value = shift = 0
    while True:
        byte = data[pos]
        pos += 1
        value |= (byte & 127) << shift
        if not byte & 128:
            return value, pos
        shift += 7
        if shift > 35:
            raise ValueError("Invalid ULEB128")


class Dex:
    def __init__(self, data):
        self.data = data
        count, offset = struct.unpack_from("<II", data, 56)
        self.strings = []
        for index in range(count):
            start = struct.unpack_from("<I", data, offset + index * 4)[0]
            _, start = uleb(data, start)
            self.strings.append(data[start:data.index(0, start)].decode("utf-8", "replace"))
        count, offset = struct.unpack_from("<II", data, 64)
        self.types = [self.strings[struct.unpack_from("<I", data, offset + index * 4)[0]] for index in range(count)]
        self.methods_count, self.methods_offset = struct.unpack_from("<II", data, 88)
        self.classes_count, self.classes_offset = struct.unpack_from("<II", data, 96)

    def method(self, index):
        owner, proto, name = struct.unpack_from("<HHI", self.data, self.methods_offset + index * 8)
        return {"method_index": index, "owner": self.types[owner], "name": self.strings[name], "proto_index": proto}

    def classes(self):
        for ordinal in range(self.classes_count):
            fields = struct.unpack_from("<8I", self.data, self.classes_offset + ordinal * 32)
            yield ordinal, self.types[fields[0]], fields[6]

    def code_methods(self):
        for ordinal, owner, pos in self.classes():
            if not pos:
                continue
            counts = []
            for _ in range(4):
                count, pos = uleb(self.data, pos)
                counts.append(count)
            for _ in range(counts[0] + counts[1]):
                _, pos = uleb(self.data, pos)
                _, pos = uleb(self.data, pos)
            for count in counts[2:]:
                method_index = 0
                for _ in range(count):
                    delta, pos = uleb(self.data, pos)
                    method_index += delta
                    _, pos = uleb(self.data, pos)
                    code_offset, pos = uleb(self.data, pos)
                    if code_offset:
                        yield ordinal, owner, method_index, code_offset


WIDTH = [1] * 256
for op in [0x02, 0x05, 0x08, 0x13, 0x15, 0x16, 0x19, 0x1a, 0x1c, 0x1f, 0x20, 0x22, 0x23, 0x29, *range(0x2d, 0x3e), *range(0x44, 0x6e), *range(0x90, 0xb0), *range(0xd0, 0xe3), 0xfe, 0xff]:
    WIDTH[op] = 2
for op in [0x03, 0x06, 0x09, 0x14, 0x17, 0x1b, 0x24, 0x25, 0x26, 0x2a, 0x2b, 0x2c, *range(0x6e, 0x73), *range(0x74, 0x79), 0xfc, 0xfd]:
    WIDTH[op] = 3
WIDTH[0x18] = 5
WIDTH[0xfa] = WIDTH[0xfb] = 4


def literal_sites(dex, method_index, code_offset, wanted):
    size = struct.unpack_from("<I", dex.data, code_offset + 12)[0]
    units = struct.unpack_from(f"<{size}H", dex.data, code_offset + 16)
    pos = 0
    while pos < size:
        unit = units[pos]
        op = unit & 255
        width = WIDTH[op]
        if op == 0 and unit:
            if unit == 0x0100:
                width = 4 + 2 * units[pos + 1]
            elif unit == 0x0200:
                width = 2 + 4 * units[pos + 1]
            elif unit == 0x0300:
                count = units[pos + 2] | units[pos + 3] << 16
                width = 4 + (units[pos + 1] * count + 1) // 2
            else:
                raise ValueError(f"Unknown payload at method {method_index}:{pos}")
        if op == 0x1a:
            index = units[pos + 1]
        elif op == 0x1b:
            index = units[pos + 1] | units[pos + 2] << 16
        else:
            index = None
        if index in wanted:
            yield {"code_unit_offset": pos, "opcode": "const-string/jumbo" if op == 0x1b else "const-string", "string_index": index, "value": dex.strings[index]}
        if pos + width > size:
            raise ValueError(f"Instruction outside code item at method {method_index}:{pos}")
        pos += width


def main():
    sha256 = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
    if sha256 != EXPECTED_SHA256:
        raise ValueError("Unexpected official APK bytes")
    reports = []
    with zipfile.ZipFile(SOURCE) as archive:
        for member in sorted(archive.namelist()):
            if not re.fullmatch(r"classes\d*\.dex", member):
                continue
            data = archive.read(member)
            dex = Dex(data)
            wanted = {i for i, value in enumerate(dex.strings) if (len(value) <= 360 and HOST.search(value)) or value in EXACT}
            report = {"entry": member, "sha256": hashlib.sha256(data).hexdigest(), "literals": [{"index": i, "value": dex.strings[i]} for i in sorted(wanted)], "classes": [{"class_def_index": i, "descriptor": owner} for i, owner, _ in dex.classes() if CLASS.search(owner)], "method_users": [], "errors": []}
            for ordinal, owner, index, code_offset in dex.code_methods():
                try:
                    sites = list(literal_sites(dex, index, code_offset, wanted))
                    if sites:
                        report["method_users"].append({**dex.method(index), "class_def_index": ordinal, "code_offset": code_offset, "sites": sites})
                except (IndexError, struct.error, ValueError) as error:
                    report["errors"].append({"method_index": index, "error": str(error)})
            reports.append(report)
            print(json.dumps({"entry": member, "literals": len(wanted), "methods": len(report["method_users"]), "errors": len(report["errors"])}))
    result = {"source_sha256": sha256, "scope": "Static DEX string constants, exact const-string instruction users and selected class declarations. Not runtime or cross-method data-flow proof.", "dex": reports}
    (ROOT / "official-host-index.json").write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
