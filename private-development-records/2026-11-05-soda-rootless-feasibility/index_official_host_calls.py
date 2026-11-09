"""Locate direct invokes to selected host/account initialization methods in DEX.

This is a bounded static direct-call index, not an interprocedural data-flow or
runtime trace.  It reads original APK members and creates only investigation JSON.
"""
import hashlib
import json
import re
import struct
import zipfile

from index_official_hosts import Dex, EXPECTED_SHA256, ROOT, SOURCE, WIDTH

TARGETS = {
    "Lcom/luna/common/arch/util/HostUtil;": {"init"},
    "Lcom/bytedance/sdk/account/impl/BDAccountDelegate;": {"getCommonRequestProxy", "init", "setAppContext", "setHost"},
    "Lcom/bytedance/sdk/account/impl/BDAccountDelegateInner;": {"getCommonRequestProxy", "init"},
}


def calls(dex, code_offset, target_ids):
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
                raise ValueError("Unknown payload")
        if op in {*range(0x6e, 0x73), *range(0x74, 0x79)}:
            target_id = units[pos + 1]
            if target_id in target_ids:
                yield {"code_unit_offset": pos, "opcode": hex(op), "target": target_ids[target_id], "raw_units": list(units[pos:pos + width])}
        if pos + width > size:
            raise ValueError("Instruction outside code item")
        pos += width


def main():
    if hashlib.sha256(SOURCE.read_bytes()).hexdigest() != EXPECTED_SHA256:
        raise ValueError("Unexpected original APK")
    report = {"source_sha256": EXPECTED_SHA256, "scope": "Instruction-boundary direct DEX invokes to selected initialization/proxy methods; excludes reflection and runtime observation.", "dex": []}
    with zipfile.ZipFile(SOURCE) as archive:
        for name in sorted(archive.namelist()):
            if not re.fullmatch(r"classes\d*\.dex", name):
                continue
            data = archive.read(name)
            dex = Dex(data)
            targets = {}
            for i in range(dex.methods_count):
                method = dex.method(i)
                if method["owner"] in TARGETS and method["name"] in TARGETS[method["owner"]]:
                    targets[i] = method
            result = {"entry": name, "sha256": hashlib.sha256(data).hexdigest(), "targets": list(targets.values()), "callers": [], "errors": []}
            if targets:
                for ordinal, owner, index, offset in dex.code_methods():
                    try:
                        sites = list(calls(dex, offset, targets))
                        if sites:
                            result["callers"].append({**dex.method(index), "class_def_index": ordinal, "code_offset": offset, "sites": sites})
                    except (IndexError, struct.error, ValueError) as error:
                        result["errors"].append({"method_index": index, "error": str(error)})
            report["dex"].append(result)
    (ROOT / "official-host-call-index.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    for dex in report["dex"]:
        if dex["callers"]:
            print(json.dumps({"entry": dex["entry"], "callers": dex["callers"]}, ensure_ascii=False))


if __name__ == "__main__":
    main()
