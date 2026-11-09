"""Merge final complete per-file retries without adding duplicate tests."""
from collections import Counter
import json
from pathlib import Path
out=Path(__file__).resolve().parent

def read(name):
 path=out/name
 if not path.exists():return None
 tests={}; suites={}; rows={}; done=False; success=False
 for line in path.read_text(encoding="utf8",errors="replace").splitlines():
  try:e=json.loads(line)
  except ValueError:continue
  if not isinstance(e,dict):continue
  k=e.get("type")
  if k=="suite":
   suites[e["suite"]["id"]]=e["suite"].get("path","")
   rows.setdefault(e["suite"].get("path",""),{"counts":Counter(),"errors":[]})
  elif k=="testStart":tests[e["test"]["id"]]=e["test"]
  elif k in ["testDone","error"]:
   test=tests.get(e.get("testID"),{}); path=suites.get(test.get("suiteID"),"")
   if path not in rows:rows[path]={"counts":Counter(),"errors":[]}
   if k=="error":rows[path]["errors"].append({"test":test.get("name"),"error":e.get("error","")[:500]})
   elif not e.get("hidden"):
    rows[path]["counts"]["skipped" if e.get("skipped") else e.get("result","unknown")]+=1
  elif k=="done":done=True;success=e.get("success") is True
 return {"doneSeen":done,"commandSuccessful":success,"files":rows}

def summarize(rows,complete):
 counts=Counter();errors=[]
 for path,r in rows.items():counts.update(r["counts"]);errors.extend(r["errors"])
 return {"completeAndSuccessful":complete and not errors and counts.get("error",0)==0 and counts.get("failure",0)==0,
         "counts":dict(counts),"files":len(rows),"errors":errors,"perFile":rows}
base=read("beta-complete.jsonl");result={}
if base:
 rows=base["files"].copy();complete=base["doneSeen"] and base["commandSuccessful"];retries=[]
 for name in ["beta-affected-final.jsonl","beta-notes-final.jsonl","beta-ui-final.jsonl"]:
  retry=read(name)
  if retry and retry["doneSeen"]:
   for path,row in retry["files"].items():
    if path in rows:rows[path]=row
   retries.append(name)
 result["beta-complete.jsonl"]=summarize(rows,complete)
 result["beta-complete.jsonl"]["completeFileRetriesApplied"]=retries
for name in ["stable-complete.jsonl","search-back-player.jsonl"]:
 record=read("stable-final.jsonl") if name=="stable-complete.jsonl" and (out/"stable-final.jsonl").exists() else read(name)
 if record:result[name]=summarize(record["files"],record["doneSeen"])
analysis=out/"analyze-complete.log"
result["analysisPassed"]=analysis.exists() and "No issues found!" in analysis.read_text(encoding="utf8")
(out/"host-check-summary.json").write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding="utf8")
print(json.dumps({k:{a:b for a,b in v.items() if a!="perFile"} if isinstance(v,dict) else v for k,v in result.items()},ensure_ascii=False))
