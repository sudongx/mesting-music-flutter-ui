"""Merge final complete per-file retries without adding duplicate tests."""
from collections import Counter
import json
import re
from pathlib import Path
out=Path(__file__).resolve().parent

def read(name):
 path=out/name
 if not path.exists():return None
 tests={}; suites={}; rows={}; done=False; success=False
 for line in path.read_text(encoding="utf8",errors="replace").splitlines():
  try:e=json.loads(line)
  except ValueError:
   # PowerShell's inherited Windows codepage can corrupt a Chinese test name,
   # including its final quote. Keep the raw line untouched; recover only the
   # ASCII test/suite IDs so its separately valid testDone is still attributed
   # to the correct file. Test outcomes never come from this recovery path.
   if line.startswith('{"test":{"id":') and '"type":"testStart"' in line:
    identity=re.search(r'^\{"test":\{"id":(\d+)',line)
    suite=re.search(r'"suiteID":(\d+)',line)
    if identity and suite:
     tests[int(identity[1])]={'id':int(identity[1]),'suiteID':int(suite[1]),'name':'[Windows log name undecodable; raw retained]'}
   continue
  if not isinstance(e,dict):continue
  k=e.get("type")
  if k=="suite":
   suites[e["suite"]["id"]]=e["suite"].get("path","")
   rows.setdefault(e["suite"].get("path",""),{"counts":Counter(),"errors":[]})
  elif k=="testStart":tests[e["test"]["id"]]=e["test"]
  elif k in ["testDone","error"]:
   test=tests.get(e.get("testID"),{}); path=suites.get(test.get("suiteID"),"")
   if not path:continue
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
   for path,row in retry["files"].items():rows[path]=row
   complete=complete and retry["commandSuccessful"]
   retries.append(name)
 result["beta-complete.jsonl"]=summarize(rows,complete)
 result["beta-complete.jsonl"]["completeFileRetriesApplied"]=retries
 expected={str((out.parent.parent/path).resolve()).lower().replace('\\','/') for path in json.loads((out/'beta-files.json').read_text('utf-8-sig'))}
 observed={str(__import__('pathlib').Path(path).resolve()).lower().replace('\\','/') for path in rows}
 result['beta-complete.jsonl']['selectedFileManifestMatches']=expected==observed
 result['beta-complete.jsonl']['completeAndSuccessful'] &= expected==observed
for name in ["stable-complete.jsonl","search-back-player.jsonl"]:
 record=read("stable-final.jsonl") if name=="stable-complete.jsonl" and (out/"stable-final.jsonl").exists() else read(name)
 if record:result[name]=summarize(record["files"],record["doneSeen"] and record["commandSuccessful"])
analysis=out/"analyze-complete.log"
result["analysisPassed"]=analysis.exists() and "No issues found!" in analysis.read_text(encoding="utf8")
(out/"host-check-summary.json").write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding="utf8")
print(json.dumps({k:{a:b for a,b in v.items() if a!="perFile"} if isinstance(v,dict) else v for k,v in result.items()},ensure_ascii=False))
