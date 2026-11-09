"""Task-only public Maven transport with persistent upstream connections.

Repository coordinates and bytes are unchanged. Gradle cache hits are checked
against their SHA1 directory, cache writes are atomic, and public upstream TLS
remains verified. No user credential/header is forwarded to a repository.
"""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
from pathlib import Path
from urllib.parse import unquote, urlsplit
import argparse, hashlib, json, os, threading, time
import requests

OUT=Path(__file__).resolve().parent
CACHE=OUT/'maven-transport-cache'
GRADLE=Path('D:/CodexCache/android-build/gradle/caches/modules-2/files-2.1')
BASES={'google':'https://dl.google.com/dl/android/maven2/',
       'central':'https://repo.maven.apache.org/maven2/',
       'plugins':'https://plugins.gradle.org/m2/',
       'jitpack':'https://jitpack.io/',
       'flutter':'https://storage.googleapis.com/download.flutter.io/'}
parser=argparse.ArgumentParser();parser.add_argument('--port',type=int,default=0);args=parser.parse_args()
LOCK=threading.RLock();LOCAL=threading.local();PATH_LOCKS={};NEGATIVE={};ACTIVE={}
COUNTS=json.loads((OUT/'maven-transport-status.json').read_text())
COUNTS['pooledTransport']=True

def content_store(relative):
    parts=relative.split('/')
    if len(parts)<4:return None
    group,artifact,version,filename='.'.join(parts[:-3]),parts[-3],parts[-2],parts[-1]
    algorithm=filename.rsplit('.',1)[-1]
    checksum=algorithm in {'sha1','sha256','md5'}
    realname=filename.rsplit('.',1)[0] if checksum else filename
    for file in (GRADLE/group/artifact/version).glob('*/'+realname):
        if not file.is_file():continue
        data=file.read_bytes()
        if hashlib.sha1(data).hexdigest()!=file.parent.name:continue
        return hashlib.new(algorithm,data).hexdigest().encode() if checksum else data
    return None

def read_bytes(kind,relative):
    key=kind+'/'+relative
    with LOCK:
        path_lock=PATH_LOCKS.setdefault(key,threading.Lock())
    with path_lock:
        target=CACHE/kind/relative
        if target.is_file():return 200,target.read_bytes()
        with LOCK:
            if NEGATIVE.get(key,0)>time.time():return 404,b''
        # Mirror checksums describe the exact bytes served by this mirror.
        algorithm=relative.rsplit('.',1)[-1]
        original=target.with_name(target.name.rsplit('.',1)[0])
        if algorithm in {'sha1','sha256','md5'} and original.is_file():
            data=hashlib.new(algorithm,original.read_bytes()).hexdigest().encode()
        else:
            data=content_store(relative)
        if data is not None:
            with LOCK:COUNTS['local']+=1
        else:
            if not hasattr(LOCAL,'session'):
                LOCAL.session=requests.Session();LOCAL.session.trust_env=False
                LOCAL.session.headers['User-Agent']='Mesting-task-build-transport/2'
            with LOCAL.session.get(BASES[kind]+relative,stream=True,timeout=(10,25)) as response:
                if response.status_code in {400,401,403,404}:
                    # Consume small public error bodies so a 404 lookup does
                    # not discard the verified TLS connection to that host.
                    error_bytes=0
                    for chunk in response.iter_content(64*1024):
                        error_bytes+=len(chunk)
                        if error_bytes>1024*1024:break
                    with LOCK:
                        COUNTS['misses']+=1
                        if response.status_code==404:NEGATIVE[key]=time.time()+300
                    return response.status_code,b''
                response.raise_for_status()
                data=bytearray()
                for chunk in response.iter_content(256*1024):
                    data.extend(chunk)
                    if len(data)>120*1024*1024:raise ValueError('artifact limit')
                data=bytes(data)
            with LOCK:COUNTS['fetched']+=1
        target.parent.mkdir(parents=True,exist_ok=True)
        temporary=target.with_name(target.name+'.transport-'+str(threading.get_ident()))
        temporary.write_bytes(data)
        if target.exists():
            assert target.read_bytes()==data,'Immutable cache content differs'
            temporary.unlink()
        else:os.replace(temporary,target)
        return 200,data

class Handler(BaseHTTPRequestHandler):
    protocol_version='HTTP/1.1'
    def log_message(self,*args):pass
    def do_HEAD(self):self.serve(False)
    def do_GET(self):self.serve(True)
    def serve(self,body):
        path=unquote(urlsplit(self.path).path).lstrip('/');parts=path.split('/')
        if len(parts)<2 or parts[0] not in BASES or any(p in {'','.','..'} or '\\' in p for p in parts):
            self.send_error(404);return
        kind,relative=parts[0],'/'.join(parts[1:])
        identity=threading.get_ident()
        with LOCK:COUNTS['requests']+=1;ACTIVE[identity]=path
        try:
            status,data=read_bytes(kind,relative)
            self.send_response(status)
            self.send_header('Content-Length',str(len(data)))
            self.send_header('Content-Type','application/octet-stream')
            if status==200:self.send_header('ETag','"'+hashlib.sha256(data).hexdigest()+'"')
            self.end_headers()
            if body and data:self.wfile.write(data)
        except (BrokenPipeError,ConnectionResetError):pass
        except Exception as error:
            self.send_response(502);self.send_header('Content-Length','0');self.end_headers()
            with LOCK:COUNTS['lastFailureType']=type(error).__name__
        finally:
            with LOCK:
                ACTIVE.pop(identity,None)
                record={**COUNTS,'active':list(ACTIVE.values())[:12]}
                temporary=OUT/'maven-transport-status.tmp'
                temporary.write_text(json.dumps(record),'utf-8')
                os.replace(temporary,OUT/'maven-transport-status.json')

server=ThreadingHTTPServer(('127.0.0.1',args.port),Handler);server.daemon_threads=True
(OUT/'maven-transport-port.txt').write_text(str(server.server_port),'utf-8')
print(json.dumps({'host':'127.0.0.1','port':server.server_port,'pooledTls':True}),flush=True)
server.serve_forever()
