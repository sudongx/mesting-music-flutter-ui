"""Independently verify deletion boundaries, retained drafts and recovery refs."""
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import subprocess
from urllib.request import Request, urlopen

ROOT = Path(r"D:\AnLi").resolve()
OUT = Path(__file__).resolve().parent


def read(name):
    return json.loads((OUT / name).read_text(encoding="utf-8-sig"))


def sha(path):
    with path.open("rb") as stream:
        return hashlib.file_digest(stream, "sha256").hexdigest().upper()


def git(*args):
    return subprocess.check_output(["git", *args], cwd=ROOT)


inventory = read("cleanup-inventory.json")
recovery = read("beta-recovery-audit.json")
execution = read("cleanup-result.json")
retained = read("retained-drafts.json")
assert execution["completed"] and len(retained) == 7
assert all(not Path(target["path"]).exists() for target in inventory["targets"])
for entry in inventory["protected"]:
    assert sha(Path(entry["path"])) == entry["sha256"], entry["path"]
for entry in retained:
    target = Path(entry["retained"]).resolve()
    assert target.is_relative_to(OUT / "unarchived-source")
    assert target.is_file() and sha(target) == entry["sha256"]
    assert target.stat().st_size == entry["bytes"]
assert not list(ROOT.glob("*Beta*.zip"))
assert not list(ROOT.glob("*beta*.zip"))
assert not list((ROOT / "release").glob("*beta.*.apk"))
assert git("rev-parse", "HEAD").decode().strip() == inventory["head"]
assert git("describe", "--tags", "--exact-match", "HEAD").decode().strip() == "v1.0.5"
assert not git("status", "--porcelain").strip()
remote = git("ls-remote", "--heads", "--tags", "origin")
assert remote == (OUT / "remote-refs-before.txt").read_bytes()
for version in recovery["versions"]:
    assert git("rev-parse", version["tag"] + "^{commit}").decode().strip() == version["commit"]
fsck = subprocess.run(["git", "fsck", "--full", "--no-dangling"], cwd=ROOT, capture_output=True)
(OUT / "git-fsck-after.log").write_bytes(fsck.stdout + fsck.stderr)
assert fsck.returncode == 0
with urlopen(Request("https://download.csnas.asia/api/app/music/health", headers={"User-Agent": "Mesting-cleanup-final-readback"}), timeout=25) as response:
    health = json.load(response)
assert health["version"] == "1.0.5" and health["android_version_code"] == 26
retained_bytes = sum(entry["bytes"] for entry in retained)
assert retained_bytes == 33288
# The PowerShell execution log stays immutable. Complete the JSON's aggregate
# byte field from the individually verified retained-file records.
execution["retainedUnarchivedBytes"] = retained_bytes
execution["retainedDraftSizesIndependentlyVerified"] = True
(OUT / "cleanup-result.json").write_text(json.dumps(execution, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
result = {
    "verifiedAtUtc": datetime.now(timezone.utc).isoformat(), "workspace": str(ROOT),
    "completed": True, "deletedDirectories": inventory["targetDirectories"],
    "deletedLooseFiles": inventory["targetLooseFiles"], "deletedFileCount": inventory["files"],
    "removedOriginalLogicalBytes": inventory["bytes"], "retainedDraftFiles": 7, "retainedDraftBytes": retained_bytes,
    "netLogicalBytesReduced": inventory["bytes"] - retained_bytes,
    "protectedFileHashesStillMatch": len(inventory["protected"]),
    "currentVersion": "1.0.5", "currentCode": 26, "head": inventory["head"],
    "currentGitWorkingTreeClean": True, "allRemoteRefsUnchanged": True,
    "all21HistoricalBetaTagsStillMatch": True, "gitObjectIntegrityCheckPassed": True,
    "signingFilesPreserved": True, "formalDeliveriesPreserved": True,
    "formalUpdateServerStill105Code26": True, "userPhoneAccessPerformed": False,
    "rootBetaDeliveryZipAndReleaseApkRemaining": 0,
}
(OUT / "post-cleanup-verification.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
guide = [
    "# 旧 Beta 清理结果与回滚入口", "",
    "日期：2026-10-28（Asia/Shanghai）。用户确认清理 D:/AnLi 的旧 Beta 交付、缓存、解压副本和历史备份，并保留 7 份未归档试验代码。", "",
    f"已删除 {inventory['targetDirectories']} 个旧目录和 {inventory['targetLooseFiles']} 个独立文件，共 {inventory['files']} 个文件，按原文件逻辑大小合计 {inventory['bytes']:,} 字节（约 {inventory['bytes']/1024**3:.2f} GiB）。",
    f"7 份试验代码副本共 {retained_bytes:,} 字节，保存在本目录 unarchived-source/；原路径和逐文件摘要见 retained-drafts.json。",
    "当前 1.0.5 / code 26 工程、正式版交付、原签名材料、Git 历史、全部标签及受跟踪文档均保持；工作区干净。根 build 中 beta 名称属于兼容 flavor，共享正式构建缓存不在本轮删除范围。", "",
    "## 已验证的恢复方式", "",
    "清理前核实 Beta.1–21 本地/远端标签一致、完整源码对象可用，38 个公开 APK/原始源码 ZIP 入口正常；本机 10 份原始交付文件大小和完整摘要与 GitHub 附件一致。Beta.14–17 的完整源码通过 Git 标签恢复，其余 17 版另有原始源码 ZIP。",
    "清理后再次检查全部远端引用未变、21 个旧标签 commit 未变、Git 对象完整性通过，以及全部受保护文件摘要和 7 份试验副本匹配。", "",
    "要查看旧源码，请在另一个新目录克隆固定标签，保留当前 1.0.5 工作目录。例如：", "",
    "```powershell", "git clone --branch v1.0.37-beta.21 --single-branch https://github.com/Mesting42/mesting-music-flutter.git Mesting-Music-Beta21-rollback", "```", "",
    "需要历史安装包时下载下表对应原始 APK。源码/安装包可恢复与 Android 覆盖降级是不同事项；系统仍限制降级及跨证书覆盖，不能由这些记录承诺保留数据降级。", "",
    "| Beta | 固定源码 | 原始 APK |", "| --- | --- | --- |",
]
for version in recovery["versions"]:
    guide.append(f"| {version['beta']} | [{version['tag']}](https://github.com/Mesting42/mesting-music-flutter/tree/{version['tag']}) | [下载]({version['apk']['url']}) |")
guide += ["", "逐项删除清单：cleanup-inventory.json / deleted-targets.jsonl。清理前审计：beta-recovery-audit.json。最终核验：post-cleanup-verification.json。签名文件和凭据未公开，未访问手机或修改线上发布。", ""]
(OUT / "ROLLBACK.md").write_text("\n".join(guide), encoding="utf-8")
print(json.dumps(result, ensure_ascii=True))
