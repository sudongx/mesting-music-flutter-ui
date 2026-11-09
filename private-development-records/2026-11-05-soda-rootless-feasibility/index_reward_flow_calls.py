"""Record bounded reward-related DEX instruction references, never execute them.

Direct calls, field instructions and constants are observed static bytes. This
is not a control-flow, object-alias or server acceptance proof. Raw code units
and source/method identity let a focused REA follow-up check each inference.
"""
import hashlib
import json
import re
import struct
import zipfile

from index_official_hosts import Dex, ROOT, SOURCE, EXPECTED_SHA256, WIDTH
from index_official_host_calls import calls
from index_phone_context_calls import proto
from read_dex_contract import Dex as ContractDex


TARGET_CLASSES = {
    "Lcom/luna/biz/ad/strategy/AdRewardConfigManager;": {"j", "k", "l", "i", "o", "p", "O", "P", "q"},
    "Lcom/luna/biz/ad/repo/AdRepository;": {"Z", "W", "e0"},
    "Lcom/luna/biz/ad/adns/mannor/reward/api/IRewardVideoAdShowListener;": None,
    "Lcom/luna/biz/ad/listener/IAdnShowListener;": None,
    "Lcom/luna/biz/ad/view/container/AdRewardDelegateManager;": {"I", "o0", "B0", "D0", "K0", "u0"},
    "Lcom/luna/biz/entitlement/core/commerceinfo/api/CommerceInfoApi;": {"getMyCommerceInfo"},
}
BODY_CLASS = re.compile(r"AdRewardConfigManager|AdRewardDelegateManager|RewardCloseResultCoordinator|RewardAdSdkService\$showRewardVideoAd\$3;|RewardVideoAdRewardAgainManager|IRewardVideoAdShowListener(?:\$DefaultImpls)?;|^Lcom/luna/biz/ad/repo/AdRepository;|^Lcom/luna/biz/entitlement/core/commerceinfo/core/CommerceInfoRepo")
BODY_METHODS = {"onRewardComplete", "onRewardVerify"}


def body(dex, contracts, index, code_offset):
    size = struct.unpack_from("<I", dex.data, code_offset + 12)[0]
    units = struct.unpack_from(f"<{size}H", dex.data, code_offset + 16)
    position = 0
    sites = []
    while position < size:
        unit = units[position]
        op = unit & 255
        width = WIDTH[op]
        if op == 0 and unit:
            if unit == 0x0100:
                width = 4 + 2 * units[position + 1]
            elif unit == 0x0200:
                width = 2 + 4 * units[position + 1]
            elif unit == 0x0300:
                count = units[position + 2] | units[position + 3] << 16
                width = 4 + (units[position + 1] * count + 1) // 2
            else:
                raise ValueError("Unknown payload")
        reference = None
        if op in {*range(0x6e, 0x73), *range(0x74, 0x79)}:
            reference = {"kind": "invoke", **contracts.method(units[position + 1])}
        elif op == 0x1a:
            reference = {"kind": "string", "string_index": units[position + 1], "value": dex.strings[units[position + 1]]}
        elif op == 0x1b:
            string_index = units[position + 1] | units[position + 2] << 16
            reference = {"kind": "string", "string_index": string_index, "value": dex.strings[string_index]}
        elif 0x52 <= op <= 0x6d:
            reference = {"kind": "field", **contracts.field(units[position + 1])}
        if reference:
            sites.append({"code_unit_offset": position, "opcode": hex(op),
                          "units": list(units[position:position + width]), "reference": reference})
        if position + width > size:
            raise ValueError("Instruction outside method")
        position += width
    method = contracts.method(index)
    return {**method, "code_item_offset": code_offset, "code_units": size,
            "references": sites}


def main():
    digest = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
    if digest != EXPECTED_SHA256:
        raise ValueError("Unexpected original APK")
    report = {"source_sha256": digest, "scope": __doc__, "dex": []}
    with zipfile.ZipFile(SOURCE) as archive:
        for member in sorted(archive.namelist()):
            if not re.fullmatch(r"classes\d*\.dex", member):
                continue
            data = archive.read(member)
            dex, contracts = Dex(data), ContractDex(data)
            targets = {}
            for index in range(dex.methods_count):
                method = dex.method(index)
                owner, name = method["owner"], method["name"]
                if owner in TARGET_CLASSES and (TARGET_CLASSES[owner] is None or name in TARGET_CLASSES[owner]):
                    targets[index] = {**method, "prototype": proto(dex, method["proto_index"])}
            rows = {"entry": member, "sha256": hashlib.sha256(data).hexdigest(),
                    "targets": list(targets.values()), "callers": [], "method_bodies": [], "errors": []}
            for ordinal, owner, index, offset in dex.code_methods():
                method = dex.method(index)
                try:
                    sites = list(calls(dex, offset, targets)) if targets else []
                    if sites:
                        rows["callers"].append({**contracts.method(index), "class_def_index": ordinal,
                            "code_item_offset": offset, "sites": sites})
                    callback = "Lcom/luna/biz/ad/adns/mannor/reward/api/RewardVideoAdCompleteParams;" in proto(dex, method["proto_index"])
                    if sites or callback or BODY_CLASS.search(owner) or method["name"] in BODY_METHODS:
                        rows["method_bodies"].append(body(dex, contracts, index, offset))
                except (IndexError, struct.error, ValueError) as error:
                    rows["errors"].append({"method_index": index, "error": str(error)})
            report["dex"].append(rows)
            if rows["callers"] or rows["method_bodies"]:
                print(json.dumps({"entry": member, "callers": len(rows["callers"]), "method_bodies": len(rows["method_bodies"]), "errors": len(rows["errors"])}))
    destination = ROOT / "reward-flow-call-index-v3.json"
    if destination.exists():
        raise FileExistsError(destination)
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
