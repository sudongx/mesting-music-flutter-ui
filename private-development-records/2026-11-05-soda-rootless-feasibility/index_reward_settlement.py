"""Index reward-settlement declarations and exact direct invokes without a JVM.

This reads original official APK DEX bytes only. It does not execute code, call
the network, establish runtime dispatch or prove any server accepts a reward.
"""
import hashlib
import json
import re
import struct
import zipfile

from index_official_hosts import Dex, ROOT, SOURCE, EXPECTED_SHA256
from index_official_host_calls import calls
from index_phone_context_calls import proto
from read_dex_contract import Dex as ContractDex


MODEL = re.compile(r"^Lcom/luna/biz/ad/repo/net/|^Lcom/ss/android/excitingvideo/IRewardCompleteListener(?:\$.*)?;")
CLASS = re.compile(r"^Lcom/luna/biz/ad/|^Lcom/luna/biz/entitlement/core/commerceinfo/|^Lcom/ss/android/excitingvideo/(?:IRewardCompleteListener|reward/ability/(?:RewardCompleteFactory|InternalRewardCompleteProxy))")
METHODS = {"adIncentiveDone", "getAdIncentiveConfig", "getAdIncentiveRetrieve", "onRewardComplete", "getCommerceInfo", "getCommerceInfoV2"}


def selected(method):
    owner, name = method["owner"], method["name"]
    return (name in METHODS or
            ("AdIncentiveDoneRequest;" in owner and name == "<init>") or
            (owner.startswith("Lcom/ss/android/excitingvideo/IRewardCompleteListener") and name == "<init>"))


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
            dex = Dex(data)
            contracts = ContractDex(data)
            targets = {}
            for index in range(dex.methods_count):
                method = dex.method(index)
                if selected(method):
                    targets[index] = {**method, "prototype": proto(dex, method["proto_index"])}
            rows = {"entry": member, "sha256": hashlib.sha256(data).hexdigest(),
                    "targets": list(targets.values()), "callers": [], "classes": [], "contracts": [], "errors": []}
            for ordinal, owner, _ in dex.classes():
                if CLASS.search(owner):
                    rows["classes"].append({"class_def_index": ordinal, "descriptor": owner})
                if MODEL.search(owner):
                    rows["contracts"].append(contracts.inspect_class(owner))
            if targets:
                for ordinal, owner, index, offset in dex.code_methods():
                    try:
                        sites = list(calls(dex, offset, targets))
                        if sites:
                            method = dex.method(index)
                            rows["callers"].append({**method, "prototype": proto(dex, method["proto_index"]),
                                "class_def_index": ordinal, "code_item_offset": offset, "sites": sites})
                    except (IndexError, struct.error, ValueError) as error:
                        rows["errors"].append({"method_index": index, "error": str(error)})
            report["dex"].append(rows)
            if rows["callers"] or rows["contracts"]:
                print(json.dumps({"entry": member, "callers": len(rows["callers"]), "models": len(rows["contracts"]), "errors": len(rows["errors"])}))
    destination = ROOT / "reward-settlement-static-index.json"
    if destination.exists():
        raise FileExistsError(destination)
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
