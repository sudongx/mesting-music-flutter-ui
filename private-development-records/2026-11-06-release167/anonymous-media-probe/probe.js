(async function(){
 const p=new URLSearchParams({aid:'386088',app_name:'luna_pc',device_platform:'web',channel:'pc_web',track_id:'6841692289832585217',media_type:'track',queue_type:''});
 if(window.__probeFull){for(const [k,v] of Object.entries({os_name:'Windows',os_version:'10',version_name:'3.2.1',version_code:'100302010',device_id:'7936084230165340',did:'7936084230165340',install_id:'790416379212363',iid:'790416379212363',real_aid:'386088',app_version:'3.2.1',region:'CN',language:'zh-Hans',resolution:'1920*1080'}))p.set(k,v);}
 const out={};try{
 const r=await window.__qishuiRequest({method:'GET',url:'https://api.qishui.com/luna/pc/track_v2?'+p,headers:{accept:'application/json'},timeout:20000});
 out.status=r.status;out.bytes=r.body.length;
 const u=new URL(r.responseURL);out.signatureLength=(u.searchParams.get('a_bogus')||u.searchParams.get('X-Bogus')||'').length;
 if(r.body){const j=JSON.parse(r.body);out.code=j.status_code??j.error_code??0;out.keys=Object.keys(j).join(',').slice(0,75);
 let count=0,enc=false;function scan(x,d){if(d>12||!x)return;if(typeof x==='string'){if(x[0]==='{')try{scan(JSON.parse(x),d+1)}catch(_){};return;}if(typeof x!=='object')return;if(x.main_url||x.MainPlayUrl)count++;if(x.sp||x.play_auth||x.encrypt_key)enc=true;for(const v of Object.values(x))scan(v,d+1);};scan(j,0);out.candidateCount=count;out.encrypted=enc;}
 }catch(e){out.errorType=(e&&e.name)||'Error'}
 AnonymousProbe.complete(JSON.stringify(out));
})();