// Read-only policy execution over app-generated, wholly synthetic envelopes.
// This does not start the helper/native backend or access NAS/official APIs.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
const root='D:/AnLi/.codex-artifacts/2026-11-07-release177';
const policy='C:/Users/zyt/Documents/Codex/2026-11-06/mesting-qishui-signer/work/app/qishui-signer/src/policy.mjs';
const {validateRequest}=await import(pathToFileURL(policy));
const requests=JSON.parse(fs.readFileSync(root+'/helper-app-envelopes.json','utf8'));
if(requests.length!==16)throw new Error('Expected all16 feature envelopes');
const identity={device_id:'12345678901234',iid:'12345678901235',fp:'fixture-pc-168',user_agent:'LunaPC/3.7.0(452316191)'};
const results=requests.map(request=>{
  const result=validateRequest(request,identity,request.ts_ms);
  if(JSON.stringify(result)!==JSON.stringify(request))throw new Error('Policy rewrote signed bytes');
  return {method:request.method,path:new URL(request.url).pathname,passed:true};
});
const receipt={syntheticOnly:true,appEnvelopes:results.length,passed:results.length,
  helperPolicySha256:createHash('sha256').update(fs.readFileSync(policy)).digest('hex'),
  requestFileSha256:createHash('sha256').update(fs.readFileSync(root+'/helper-app-envelopes.json')).digest('hex'),
  helperOrNativeBackendStarted:false,liveNasOrOfficialServiceAcceptance:false,results};
fs.writeFileSync(root+'/helper-contract-verification.json',JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify({syntheticAppEnvelopes:16,passed:16,helperPolicyOnly:true}));
