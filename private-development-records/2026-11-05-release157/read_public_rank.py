"""Anonymous read of public rank metadata; no device or account is accessed."""
import hashlib,json,re,time,urllib.request,urllib.parse
from pathlib import Path
root=Path('D:/AnLi')
salt=re.search(r'pub const ROUTE: &str = "([^"]+)"', (root/'third_party/md3music/rust/src/helper.rs').read_text('utf-8'))[1]
q={'appid':'3116','clientver':'11440','clienttime':str(int(time.time())), 'dfid':'-', 'mid':'0','uuid':"[REDACTED]", 'rankid':'8888','rank_cid':'0','with_album_img':'1','zone':''}
q['signature']=hashlib.md5((salt+''.join(k+'='+q[k] for k in sorted(q))+salt).encode()).hexdigest()
req=urllib.request.Request('https://gateway.kugou.com/ocean/v6/rank/info?'+urllib.parse.urlencode(q),headers={'User-Agent':'Android-11440','Accept':'application/json'})
try:
 with urllib.request.urlopen(req,timeout=15) as r: data=json.loads(r.read(4*1024*1024))
 (Path(__file__).parent/'public-rank-info.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),'utf-8')
 print(json.dumps({'status':data.get('status'),'error':data.get('error_code'),'dataKeys':list(data.get('data',{}))},ensure_ascii=False))
except Exception as e: print(type(e).__name__)
