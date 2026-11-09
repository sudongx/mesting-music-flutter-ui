// Read-only cross-workspace contract verification. All input is a pure fixture;
// this script imports policy only and never creates a service or native signer.
import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { validateRequest } from 'file:///C:/Users/zyt/Documents/Codex/2026-11-06/mesting-qishui-signer/work/app/qishui-signer/src/policy.mjs';

const directory = new URL('./', import.meta.url);
const bytes = readFileSync(new URL('helper-app-envelopes179.json', directory));
const envelope = JSON.parse(bytes)[0];
const identity = { device_id: '12345678901234', iid: '12345678901235', fp: 'fixture-pc-168', user_agent: 'LunaPC/3.7.0(452316191)' };
const before = JSON.stringify(envelope);
const result = validateRequest(envelope, identity, envelope.ts_ms);
assert.equal(result.url, envelope.url);
assert.equal(result.body, envelope.body);
assert.equal(result.headers, envelope.headers);
assert.equal(JSON.stringify(envelope), before);
const changed = body => ({ ...envelope, body, headers: { ...envelope.headers, 'x-ss-stub': createHash('md5').update(body).digest('hex').toUpperCase() } });
const old = changed(JSON.stringify({ feed_music_wall_extra: {}, ab_param: '' }));
assert.equal(validateRequest(old, identity, envelope.ts_ms).body, old.body);
const flags = JSON.parse(JSON.parse(envelope.body).ab_param);
const body = (ab, extra = {}) => JSON.stringify({ feed_music_wall_extra: extra, ab_param: ab });
const invalid = [
  changed(body(flags)),
  changed(body(JSON.stringify({ ...flags, enable_new_music_wall: '1' }))),
  changed(body(JSON.stringify({ ...flags, enable_new_music_wall: 0 }))),
  changed(body(JSON.stringify({ ...flags, enable_fav_artists: true }))),
  changed(body(JSON.stringify({ ...flags, duration: 60 }))),
  changed(body(JSON.stringify(flags), { duration: 60 })),
  { ...envelope, headers: { ...envelope.headers, cookie: "[REDACTED]" } },
];
for (const input of invalid) assert.throws(() => validateRequest(input, identity, envelope.ts_ms));
assert.throws(() => validateRequest(envelope, identity, envelope.ts_ms + 60001));
const helperRoot = 'C:/Users/zyt/Documents/Codex/2026-11-06/mesting-qishui-signer/';
const receiptBytes = readFileSync(helperRoot + 'outputs/qishui-signer-0.2.3-app-verified-validation.json');
const receipt = JSON.parse(receiptBytes);
assert.equal(receipt.app_transport_envelope.sha256, createHash('sha256').update(bytes).digest('hex'));
const report = {
  helperVersion: '0.2.3', fixtureOnly: true, newRequestAccepted: true,
  oldEmptyRequestAccepted: true, negativeCasesRejected: invalid.length + 1,
  rawUrlBodyHeadersUnchanged: true, fixtureSha256: receipt.app_transport_envelope.sha256,
  helperReceiptSha256: createHash('sha256').update(receiptBytes).digest('hex'),
  independentlyReportedCompleteTests: receipt.tests,
  node: process.version, nativeSignerOrAccountOrNetworkUsed: false,
  nasDeployed: false, helperPushed: false,
};
writeFileSync(new URL('helper-cross-validation179.json', directory), JSON.stringify(report, null, 2) + '\n');
process.stdout.write(JSON.stringify(report) + '\n');
