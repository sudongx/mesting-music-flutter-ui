"""Bounded raw DEX annotation reader for selected, byte-identical APK classes.

This records declarations/annotations, not executable behavior or a call graph.
It complements focused REA/JADX analysis when the host cannot run two JVMs.
It neither loads classes nor runs APK/native code. No third-party parser code.
"""
import hashlib
import json
import struct
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent


class Dex:
    def __init__(self, data):
        if not data.startswith(b"dex\n"):
            raise ValueError("Expected standard DEX")
        self.data = data
        self.string_count, self.string_offset = self.pair(56)
        self.type_count, self.type_offset = self.pair(64)
        self.proto_count, self.proto_offset = self.pair(72)
        self.field_count, self.field_offset = self.pair(80)
        self.method_count, self.method_offset = self.pair(88)
        self.class_count, self.class_offset = self.pair(96)

    def pair(self, offset):
        return struct.unpack_from("<II", self.data, offset)

    def uint(self, offset):
        return struct.unpack_from("<I", self.data, offset)[0]

    def uleb(self, position):
        value = 0
        for shift in range(0, 35, 7):
            byte = self.data[position]
            position += 1
            value |= (byte & 127) << shift
            if not byte & 128:
                return value, position
        raise ValueError("Invalid ULEB")

    def string(self, index):
        if index >= self.string_count:
            raise IndexError("string index")
        position = self.uint(self.string_offset + index * 4)
        _, position = self.uleb(position)
        end = self.data.index(0, position)
        return self.data[position:end].decode("utf-8", "replace")

    def type(self, index):
        if index >= self.type_count:
            raise IndexError("type index")
        return self.string(self.uint(self.type_offset + index * 4))

    def type_list(self, offset):
        if not offset:
            return []
        count = self.uint(offset)
        return [self.type(struct.unpack_from("<H", self.data, offset + 4 + i * 2)[0]) for i in range(count)]

    def proto(self, index):
        if index >= self.proto_count:
            raise IndexError("proto index")
        _, result, parameters = struct.unpack_from("<III", self.data, self.proto_offset + index * 12)
        return "(" + "".join(self.type_list(parameters)) + ")" + self.type(result)

    def method(self, index):
        if index >= self.method_count:
            raise IndexError("method index")
        owner, proto, name = struct.unpack_from("<HHI", self.data, self.method_offset + index * 8)
        return {"dex_method_index": index, "owner": self.type(owner),
                "name": self.string(name), "descriptor": self.proto(proto)}

    def field(self, index):
        if index >= self.field_count:
            raise IndexError("field index")
        owner, typ, name = struct.unpack_from("<HHI", self.data, self.field_offset + index * 8)
        return {"dex_field_index": index, "owner": self.type(owner),
                "name": self.string(name), "type": self.type(typ)}

    def encoded_annotation(self, position, depth=0):
        if depth > 16:
            raise ValueError("Annotation nesting limit")
        typ, position = self.uleb(position)
        count, position = self.uleb(position)
        elements = {}
        for _ in range(count):
            name, position = self.uleb(position)
            value, position = self.encoded_value(position, depth + 1)
            elements[self.string(name)] = value
        return {"type": self.type(typ), "elements": elements}, position

    def encoded_value(self, position, depth=0):
        if depth > 16:
            raise ValueError("Value nesting limit")
        header = self.data[position]
        position += 1
        kind, arg = header & 31, header >> 5
        if kind == 0x1E:
            return None, position
        if kind == 0x1F:
            return bool(arg), position
        if kind == 0x1C:
            count, position = self.uleb(position)
            values = []
            for _ in range(count):
                value, position = self.encoded_value(position, depth + 1)
                values.append(value)
            return values, position
        if kind == 0x1D:
            return self.encoded_annotation(position, depth + 1)
        count = arg + 1
        raw = self.data[position:position + count]
        if len(raw) != count:
            raise ValueError("Truncated value")
        value = int.from_bytes(raw, "little")
        position += count
        if kind == 0x17:
            return self.string(value), position
        if kind == 0x18:
            return {"type_descriptor": self.type(value)}, position
        if kind in (0x19, 0x1B):
            return self.field(value), position
        if kind == 0x1A:
            return self.method(value), position
        # Numeric values preserve width/kind instead of pretending unsigned
        # float bits or unknown encoded types are human-readable semantics.
        return {"encoded_kind": kind, "bytes_le_hex": raw.hex(), "unsigned_value": value}, position

    def annotation_set(self, offset):
        if not offset:
            return []
        result = []
        for i in range(self.uint(offset)):
            item = self.uint(offset + 4 + i * 4)
            annotation, _ = self.encoded_annotation(item + 1)
            result.append({"annotation_item_offset": item,
                           "visibility": self.data[item], **annotation})
        return result

    def inspect_class(self, descriptor):
        for ordinal in range(self.class_count):
            offset = self.class_offset + ordinal * 32
            values = struct.unpack_from("<8I", self.data, offset)
            if self.type(values[0]) != descriptor:
                continue
            _, flags, super_type, interfaces, source, annotations, class_data, static_values = values
            result = {"class_def_index": ordinal, "descriptor": descriptor,
                      "access_flags": flags, "super": None if super_type == 0xFFFFFFFF else self.type(super_type),
                      "interfaces": self.type_list(interfaces), "class_data_offset": class_data,
                      "static_values_offset": static_values, "fields": [], "methods": []}
            # Definition lists retain raw identities even without annotations;
            # these are the selectors for focused JADX follow-up, not bodies.
            if class_data:
                position = class_data
                counts = []
                for _ in range(4):
                    count, position = self.uleb(position)
                    counts.append(count)
                result["declared_fields"] = []
                for count in counts[:2]:
                    index = 0
                    for _ in range(count):
                        delta, position = self.uleb(position)
                        access, position = self.uleb(position)
                        index += delta
                        result["declared_fields"].append({**self.field(index), "access_flags": access})
                result["declared_methods"] = []
                for count in counts[2:]:
                    index = 0
                    for _ in range(count):
                        delta, position = self.uleb(position)
                        access, position = self.uleb(position)
                        code, position = self.uleb(position)
                        index += delta
                        result["declared_methods"].append({**self.method(index),
                            "access_flags": access, "code_item_offset": code})
            if annotations:
                cls, field_count, method_count, parameter_count = struct.unpack_from("<4I", self.data, annotations)
                result["annotations"] = self.annotation_set(cls)
                position = annotations + 16
                for _ in range(field_count):
                    index, ann = self.pair(position)
                    position += 8
                    result["fields"].append({**self.field(index), "annotations": self.annotation_set(ann)})
                for _ in range(method_count):
                    index, ann = self.pair(position)
                    position += 8
                    result["methods"].append({**self.method(index), "annotations": self.annotation_set(ann)})
                params = []
                for _ in range(parameter_count):
                    index, ann = self.pair(position)
                    position += 8
                    count = self.uint(ann)
                    params.append({**self.method(index), "parameters": [
                        self.annotation_set(self.uint(ann + 4 + j * 4)) for j in range(count)]})
                result["parameter_annotations"] = params
            return result
        raise LookupError(descriptor)


if __name__ == "__main__":
    member, *classes = sys.argv[1:]
    source = ROOT / "official-android-latest.apk"
    with zipfile.ZipFile(source) as archive:
        data = archive.read(member)
    dex = Dex(data)
    output = {"source_sha256": hashlib.file_digest(source.open("rb"), "sha256").hexdigest(),
              "dex_entry": member, "dex_sha256": hashlib.sha256(data).hexdigest(),
              "scope": __doc__, "classes": [dex.inspect_class(name) for name in classes]}
    destination = ROOT / ("contract-" + classes[0].split("/")[-1].rstrip(";").replace("$", "_") + ".json")
    if destination.exists():
        raise FileExistsError(destination)
    destination.write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({"saved": str(destination), "classes": len(classes)}))
