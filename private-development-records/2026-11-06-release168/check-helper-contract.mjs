// Offline compatibility check against the separately delivered helper's actual
// allowlist. Synthetic captures only: no server, native component or account.
import fs from 'node:fs';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { fileURLToPath } from 'node:url';
const out = new URL('./', import.meta.url);
const policyPath = 'C:/Users/zyt/Documents/Codex/2026-11-06/mesting-qishui-signer/work/app/qishui-signer/src/policy.mjs';
const { validateRequest } = await import(pathToFileURL(policyPath).href);
const identity = { device_id:'12345678901234', iid:'12345678901235',
  fp:'fixture-pc-168', user_agent:'LunaPC/3.7.0(452316191)' };
const requests = JSON.parse(fs.readFileSync(new URL('helper-envelopes.json',out)));
for (const request of requests) {
  const result = validateRequest(request,identity,request.ts_ms);
  if(result.url!==request.url || result.body!==request.body) throw Error('byte_contract_changed');
}
const record = {passed:true,requests:requests.length,synthetic:true,
  policyPath, policySha256:crypto.createHash('sha256').update(fs.readFileSync(policyPath)).digest('hex'),
  helperModified:false, helperServerOrNativeProcessStarted:false, officialRequestsSent:false};
fs.writeFileSync(new URL('helper-contract-check.json',out),JSON.stringify(record,null,2)+'\n');
console.log(JSON.stringify(record));
