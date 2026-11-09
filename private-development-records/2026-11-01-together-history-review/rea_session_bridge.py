from pathlib import Path
import subprocess,os,json,threading,queue,time,traceback
root=Path(__file__).resolve().parent
settings={'REA_JADX_MCP_JAR':'D:/CodexCache/rea/jadx-headless-mcp/0.7.1/jadx-headless-mcp-0.7.1-all.jar','JAVA_HOME':'D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1','REA_JADX_HEAP_MIB':'3072'}
env=os.environ.copy();env.update(settings)
stderr=(root/'rea-session-stderr.log').open('w',encoding='utf-8')
proc=subprocess.Popen(['D:/nvm/nodejs/node.exe','D:/nvm/nodejs/node_modules/rea-agents/scripts/rea.mjs','--mcp'],stdin=subprocess.PIPE,stdout=subprocess.PIPE,stderr=stderr,text=True,encoding='utf-8',bufsize=1,env=env,creationflags=subprocess.CREATE_NO_WINDOW)
q=queue.Queue();sequence=0
def reader():
 for line in proc.stdout:
  try:q.put(json.loads(line))
  except ValueError:
   with (root/'rea-session-nonjson.log').open('a',encoding='utf-8') as f:f.write(line)
threading.Thread(target=reader,daemon=True).start()
def send(method,params=None,timeout=60):
 global sequence
 sequence+=1;identifier=sequence
 proc.stdin.write(json.dumps({'jsonrpc':'2.0','id':identifier,'method':method,'params':params or {}})+'\n');proc.stdin.flush()
 limit=time.monotonic()+timeout
 while time.monotonic()<limit:
  item=q.get(timeout=max(.1,limit-time.monotonic()))
  if item.get('id')==identifier:
   if 'error' in item:raise RuntimeError(json.dumps(item['error']))
   return item['result']
 raise TimeoutError(method)
try:
 init=send('initialize',{'protocolVersion':'2024-11-05','capabilities':{},'clientInfo':{'name':'Mesting offline official-client review','version':'1'}},60)
 proc.stdin.write(json.dumps({'jsonrpc':'2.0','method':'notifications/initialized'})+'\n');proc.stdin.flush()
 (root/'rea-session-ready.json').write_text(json.dumps({'pid':proc.pid,'server':init.get('serverInfo'),'environment':settings},indent=2),encoding='utf-8')
 print('REA analysis server ready',proc.pid,flush=True)
 catalog=send('tools/list');(root/'rea-catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2),encoding='utf-8')
 jobs=root/'rea-jobs.jsonl';position=0
 while True:
  lines=jobs.read_text(encoding='utf-8').splitlines() if jobs.exists() else []
  if position>=len(lines):time.sleep(.2);continue
  job=json.loads(lines[position]);position+=1
  if job.get('stop'):break
  key=job['id'];assert key.replace('-','').replace('_','').isalnum()
  print('REA starting',key,flush=True)
  result=send('tools/call',{'name':job['name'],'arguments':job['arguments']},180)
  (root/('rea-'+key+'.json')).write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
  print('REA completed',key,'isError=',result.get('isError',False),flush=True)
except Exception:
 (root/'rea-session-error.log').write_text(traceback.format_exc(),encoding='utf-8');raise
finally:
 if proc.poll() is None:
  proc.stdin.close()
  try:proc.wait(timeout=10)
  except subprocess.TimeoutExpired:proc.terminate();proc.wait(timeout=10)
 stderr.close()
