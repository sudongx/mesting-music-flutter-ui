"""Inventory shared CodexCache without following links or changing its files."""
from collections import defaultdict
from datetime import datetime, timezone
import ctypes
from ctypes import wintypes
import heapq
import json
import os
from pathlib import Path
import stat

ROOT = Path(r"D:\CodexCache")
OUT = Path(__file__).resolve().parent
folder_stats = defaultdict(lambda: {"bytes": 0, "files": 0, "directories": 0})
files, directories, total = 0, 0, 0
errors, links, largest, root_files = [], [], [], []
root_native = "\\\\?\\" + str(ROOT)
stack = [(root_native, ())]


def buckets(parts):
    yield "."
    for count in range(1, min(len(parts), 4) + 1):
        yield "/".join(parts[:count])


while stack:
    directory, parents = stack.pop()
    try:
        with os.scandir(directory) as iterator:
            for entry in iterator:
                parts = (*parents, entry.name)
                relative = "/".join(parts)
                try:
                    metadata = entry.stat(follow_symlinks=False)
                    if metadata.st_file_attributes & stat.FILE_ATTRIBUTE_REPARSE_POINT:
                        links.append({"path": relative, "followed": False})
                        continue
                    if entry.is_dir(follow_symlinks=False):
                        directories += 1
                        folder_stats[relative]  # Include empty directories.
                        for bucket in buckets(parents):
                            folder_stats[bucket]["directories"] += 1
                        stack.append((entry.path, parts))
                    elif entry.is_file(follow_symlinks=False):
                        files += 1
                        total += metadata.st_size
                        for bucket in buckets(parents):
                            folder_stats[bucket]["bytes"] += metadata.st_size
                            folder_stats[bucket]["files"] += 1
                        item = {"path": relative, "bytes": metadata.st_size, "modifiedUtc": datetime.fromtimestamp(metadata.st_mtime, timezone.utc).isoformat()}
                        if not parents:
                            root_files.append(item)
                        heapq.heappush(largest, (metadata.st_size, relative, item["modifiedUtc"]))
                        if len(largest) > 60:
                            heapq.heappop(largest)
                except OSError as error:
                    errors.append({"path": relative, "type": type(error).__name__, "winerror": error.winerror})
    except OSError as error:
        errors.append({"path": "/".join(parents), "type": type(error).__name__, "winerror": error.winerror})

sectors, bytes_per_sector, free_clusters, total_clusters = [wintypes.DWORD() for _ in range(4)]
success = ctypes.windll.kernel32.GetDiskFreeSpaceW("D:\\", ctypes.byref(sectors), ctypes.byref(bytes_per_sector), ctypes.byref(free_clusters), ctypes.byref(total_clusters))
cluster = sectors.value * bytes_per_sector.value if success else None
result = {
    "root": str(ROOT), "readOnly": True, "sharedSdksMustBePreserved": True,
    "checkedAtUtc": datetime.now(timezone.utc).isoformat(), "bytes": total, "files": files, "directories": directories,
    "clusterBytes": cluster, "skippedReparsePoints": links, "errors": errors,
    "rootFiles": root_files,
    "folders": [{"path": name, **value} for name, value in folder_stats.items() if name == "." or name.count("/") < 4],
    "largestFiles": [{"path": path, "bytes": size, "modifiedUtc": modified} for size, path, modified in sorted(largest, reverse=True)],
    "filesDeleted": 0,
}
(OUT / "inventory.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(json.dumps({key: value for key, value in result.items() if key not in {"folders", "largestFiles", "rootFiles"}}, ensure_ascii=True))
for row in sorted((row for row in result["folders"] if row["path"] != "." and "/" not in row["path"]), key=lambda row: row["bytes"], reverse=True):
    print(json.dumps(row, ensure_ascii=True))
print(json.dumps({"rootFiles": sorted(root_files, key=lambda row: row["bytes"], reverse=True)}, ensure_ascii=True))
