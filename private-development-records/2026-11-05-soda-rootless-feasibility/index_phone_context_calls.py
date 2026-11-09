"""Read original DEX bytes to locate phone-flow constructors and SDK configuration.

This index establishes direct instruction users only.  It does not execute the
APK, invoke a service, or prove dynamic request acceptance or full data flow.
"""
import hashlib
import json
import re
import struct
import zipfile

from index_official_hosts import Dex, EXPECTED_SHA256, ROOT, SOURCE
from index_official_host_calls import calls

CLASSES = re.compile(r"TTAccount(?:Init|Config)|AccountInit|Account.*(?:Network|NetConfig|Host)|ApiRequest(?:\$Builder)?;|IESSaasInitUtils|PhoneNumber")
BEANS = {"Lcom/ss/android/ugc/aweme/account/saas/api/login/bean/SendSmsCodeParams;", "Lcom/ss/android/ugc/aweme/account/saas/api/login/bean/SmsLoginParams;", "Lcom/bytedance/sdk/account/param/SendCodeParam;", "Lcom/bytedance/sdk/account/param/UserLoginParam;"}
BUILDERS = {"Lcom/bytedance/sdk/account/param/SendCodeParam$Builder;", "Lcom/bytedance/sdk/account/param/UserLoginParam$Builder;"}


def proto(dex, index):
    _, offset = struct.unpack_from("<II", dex.data, 72)
    _, ret, params = struct.unpack_from("<III", dex.data, offset + index * 12)
    args = []
    if params:
        count = struct.unpack_from("<I", dex.data, params)[0]
        args = [dex.types[struct.unpack_from("<H", dex.data, params + 4 + i * 2)[0]] for i in range(count)]
    return "(" + "".join(args) + ")" + dex.types[ret]


def main():
    if hashlib.sha256(SOURCE.read_bytes()).hexdigest() != EXPECTED_SHA256:
        raise ValueError("Unexpected original APK")
    report = {"source_sha256": EXPECTED_SHA256, "scope": "Selected original class definitions and instruction-boundary direct invoke users; not runtime or complete data-flow proof.", "dex": []}
    with zipfile.ZipFile(SOURCE) as archive:
        for name in sorted(archive.namelist()):
            if not re.fullmatch(r"classes\d*\.dex", name):
                continue
            data = archive.read(name)
            dex = Dex(data)
            targets = {}
            for i in range(dex.methods_count):
                method = dex.method(i)
                is_bean = method["owner"] in BEANS and method["name"] == "<init>"
                is_builder = method["owner"] in BUILDERS
                if is_bean or is_builder:
                    targets[i] = {**method, "prototype": proto(dex, method["proto_index"])}
            result = {"entry": name, "sha256": hashlib.sha256(data).hexdigest(), "classes": [{"class_def_index": i, "descriptor": owner} for i, owner, _ in dex.classes() if CLASSES.search(owner)], "targets": list(targets.values()), "callers": [], "errors": []}
            if targets:
                for ordinal, owner, index, offset in dex.code_methods():
                    try:
                        sites = list(calls(dex, offset, targets))
                        if sites:
                            method = dex.method(index)
                            result["callers"].append({**method, "prototype": proto(dex, method["proto_index"]), "class_def_index": ordinal, "code_offset": offset, "sites": sites})
                    except (IndexError, struct.error, ValueError) as error:
                        result["errors"].append({"method_index": index, "error": str(error)})
            report["dex"].append(result)
    (ROOT / "phone-parameter-builder-call-index.json").write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    for dex in report["dex"]:
        if dex["callers"] or dex["classes"]:
            print(json.dumps({"entry": dex["entry"], "classes": len(dex["classes"]), "targets": len(dex["targets"]), "callers": len(dex["callers"]), "errors": len(dex["errors"])}))


if __name__ == "__main__":
    main()
