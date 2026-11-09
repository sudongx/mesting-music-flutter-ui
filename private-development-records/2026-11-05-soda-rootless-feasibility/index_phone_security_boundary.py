"""Locate account request field consumers and the configured IAccountSec class.

All matches are byte-level static locations in the original APK.  No JNI code or
network request is executed, and no complete security/signature flow is inferred.
"""
import hashlib
import json
import re
import struct
import zipfile

from index_official_hosts import Dex, EXPECTED_SHA256, ROOT, SOURCE, WIDTH
from dump_dex_method_insns import field

REQUEST = "Lcom/bytedance/sdk/account/execute/ApiRequest;"


def field_uses(dex, offset, wanted):
    size = struct.unpack_from("<I", dex.data, offset + 12)[0]
    units = struct.unpack_from(f"<{size}H", dex.data, offset + 16)
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
        if op in range(0x52, 0x6e) and units[pos + 1] in wanted:
            yield {"code_unit_offset": pos, "opcode": hex(op), "field": wanted[units[pos + 1]]}
        if pos + width > size:
            raise ValueError("Instruction beyond code item")
        pos += width


def main():
    if hashlib.sha256(SOURCE.read_bytes()).hexdigest() != EXPECTED_SHA256:
        raise ValueError("Unexpected original APK")
    output = {"source_sha256": EXPECTED_SHA256, "scope": "Selected class declarations and direct field users, not runtime or signature data-flow proof.", "dex": []}
    with zipfile.ZipFile(SOURCE) as archive:
        for name in sorted(archive.namelist()):
            if not re.fullmatch(r"classes\d*\.dex", name):
                continue
            data = archive.read(name)
            dex = Dex(data)
            result = {"entry": name, "sha256": hashlib.sha256(data).hexdigest(), "classes": [], "field_users": [], "errors": []}
            for ordinal, owner, _ in dex.classes():
                if owner == "Lu40/a;" or owner == "Lcom/bytedance/sdk/account/job/CommonRequestJob;" or owner.startswith("Lcom/bytedance/sdk/account/execute/"):
                    super_index = struct.unpack_from("<I", data, dex.classes_offset + ordinal * 32 + 8)[0]
                    result["classes"].append({"class_def_index": ordinal, "owner": owner, "super": dex.types[super_index] if super_index != 0xffffffff else None})
            count, _ = struct.unpack_from("<II", data, 80)
            wanted = {}
            for index in range(count):
                item = field(dex, index)
                if item["owner"] == REQUEST and item["name"] in {"url", "parms", "headers"}:
                    wanted[index] = item
            if wanted:
                for ordinal, owner, index, offset in dex.code_methods():
                    try:
                        uses = list(field_uses(dex, offset, wanted))
                        if uses:
                            result["field_users"].append({**dex.method(index), "code_offset": offset, "uses": uses})
                    except (IndexError, struct.error, ValueError) as error:
                        result["errors"].append({"method_index": index, "error": str(error)})
            output["dex"].append(result)
            if result["classes"] or result["field_users"]:
                print(json.dumps({"entry": name, "classes": result["classes"], "field_users": [{"owner": m["owner"], "name": m["name"]} for m in result["field_users"]]}, ensure_ascii=False))
    (ROOT / "phone-security-boundary-index.json").write_text(json.dumps(output, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
