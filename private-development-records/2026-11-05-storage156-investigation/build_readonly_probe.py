"""Build a local, same-signer instrumentation probe without changing the app.

The probe has no network permission. It never invokes the storage plugin (whose
initialization can migrate data), edits preferences, generates keys or deletes
keys. Credential bytes and decrypted values stay only in the device process.
Only file digests, counts, algorithms and cryptographic success/failure leave it.
"""
from pathlib import Path
import hashlib
import json
import os
import re
import subprocess
import zipfile

OUT = Path(__file__).resolve().parent
ROOT = Path('D:/AnLi')
JDK = Path('D:/CodexCache/android-build/jdk/jdk-17.0.20.1+1')
SDK = Path('D:/CodexCache/android-build/sdk')
BUILD = SDK / 'build-tools/35.0.0'
ANDROID = SDK / 'platforms/android-36/android.jar'
PKG = 'com.mesting.music.storageprobe156'
CERT = '8ce2203ad821ad8d38576f9ae86350d98254ac05f2cb974e773c1973b22e0333'

JAVA = r'''
package com.mesting.music.storageprobe156;

import android.app.Instrumentation;
import android.app.Activity;
import android.content.Context;
import android.os.Bundle;
import android.os.Process;
import android.security.keystore.KeyInfo;
import android.util.Base64;
import android.util.Xml;
import org.json.JSONObject;
import org.json.JSONArray;
import org.xmlpull.v1.XmlPullParser;
import java.io.File;
import java.io.FileInputStream;
import java.security.Key;
import java.security.KeyStore;
import java.security.MessageDigest;
import java.security.cert.Certificate;
import java.security.spec.MGF1ParameterSpec;
import java.util.LinkedHashMap;
import java.util.Map;
import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.OAEPParameterSpec;
import javax.crypto.spec.PSource;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.spec.GCMParameterSpec;
import javax.crypto.spec.IvParameterSpec;

/** Read raw XML instead of SharedPreferences: even a read can promote a .bak. */
public final class ReadOnlyProbe extends Instrumentation {
    private static final String PREFIX = "VGhpcyBpcyB0aGUgcHJlZml4IGZvciBhIHNlY3VyZSBzdG9yYWdlCg_";
    private static final String WRAPPED_GCM = "AESVGhpcyBpcyB0aGUga2V5IGZvciBhIHNlY3VyZSBzdG9yYWdlIEFFUyBLZXkK";
    private static final String WRAPPED_CBC = "VGhpcyBpcyB0aGUga2V5IGZvciBhIHNlY3VyZSBzdG9yYWdlIEFFUyBLZXkK";
    private static final String[] ENTRIES = {
        "mesting_music_platform_netease_session_v1",
        "mesting_music_platform_kugou_session_v1",
        "mesting_music_platform_kugou_accounts_v2"
    };
    private File prefs;
    private final JSONObject files = new JSONObject();

    @Override public void onCreate(Bundle args) { super.onCreate(args); start(); }

    @Override public void onStart() {
        JSONObject report = new JSONObject();
        try {
            Context target = getTargetContext();
            prefs = new File(target.getDataDir(), "shared_prefs");
            report.put("targetPackage", target.getPackageName());
            report.put("targetUid", Process.myUid());
            report.put("targetVersionCode", target.getPackageManager()
                .getPackageInfo(target.getPackageName(), 0).getLongVersionCode());
            report.put("mode", "raw-file-read-and-keystore-unwrap-only");
            Map<String, String> legacyConfig = readPrefs("FlutterSecureStorageConfiguration");
            JSONArray stores = new JSONArray();
            stores.put(inspectStore(target, null, legacyConfig));
            stores.put(inspectStore(target, "mesting_verified_recovery_v1", legacyConfig));
            Map<String, String> activeSlots = readPrefs("MestingVerifiedCredentialSlotsV2");
            java.util.Set<String> inspected = new java.util.HashSet<>();
            for (String entry : ENTRIES) {
                String slot = activeSlots.get(entry);
                if (slot == null) continue;
                if (!slot.matches("mesting_verified_login_v2_[a-f0-9]{32}")) {
                    report.put("invalidActivePointer", true);
                    continue;
                }
                if (inspected.add(slot)) stores.put(inspectStore(target, slot, legacyConfig));
            }
            report.put("stores", stores);
            report.put("selectedAccount", readPrefs("FlutterSharedPreferences")
                .get("flutter.beta_active_account_v2"));
            report.put("filesBefore", files);
            JSONObject after = new JSONObject();
            for (java.util.Iterator<String> it = files.keys(); it.hasNext();) {
                String name = it.next();
                after.put(name, fileSummary(new File(prefs, name)));
            }
            report.put("filesAfter", after);
        } catch (Throwable error) {
            try { report.put("probeFailure", failure(error)); } catch (Exception ignored) { }
        }
        Bundle result = new Bundle();
        result.putString("MESTING_STORAGE_PROBE", report.toString());
        finish(Activity.RESULT_OK, result);
    }

    private JSONObject inspectStore(Context target, String ns,
            Map<String, String> legacyConfig) throws Exception {
        String dataName = ns == null ? "FlutterSecureStorage" : ns;
        String wrappedName = ns == null ? "FlutterSecureKeyStorage" : "FlutterSecureKeyStorage:" + ns;
        Map<String, String> config = readPrefs("FlutterSecureStorageConfiguration:" + dataName);
        Map<String, String> data = readPrefs(dataName);
        Map<String, String> wrapped = readPrefs(wrappedName);
        JSONObject store = new JSONObject();
        store.put("namespace", ns == null ? "legacy" : ns);
        store.put("localConfigKeys", config.size());
        String keyAlg = config.containsKey("FlutterSecureSAlgorithmKey")
            ? config.get("FlutterSecureSAlgorithmKey") : legacyConfig.get("FlutterSecureSAlgorithmKey");
        String storageAlg = config.containsKey("FlutterSecureSAlgorithmStorage")
            ? config.get("FlutterSecureSAlgorithmStorage") : legacyConfig.get("FlutterSecureSAlgorithmStorage");
        store.put("keyAlgorithm", keyAlg == null ? "absent" : keyAlg);
        store.put("storageAlgorithm", storageAlg == null ? "absent" : storageAlg);
        store.put("encryptedEntryCount", data.size());
        store.put("wrappedGcmPresent", wrapped.containsKey(WRAPPED_GCM));
        store.put("wrappedCbcPresent", wrapped.containsKey(WRAPPED_CBC));
        JSONObject knownEntries = new JSONObject();
        for (String entry : ENTRIES) knownEntries.put(entry, data.containsKey(PREFIX + entry));
        store.put("knownEntriesPresent", knownEntries);

        // Trying an existing alias never creates, regenerates, migrates or deletes it.
        String suffix = ns == null ? "" : "." + ns;
        JSONArray aliases = new JSONArray();
        aliases.put(inspectAlias(target.getPackageName() + ".FlutterSecureStoragePluginKeyOAEP" + suffix,
            true, wrapped, data, storageAlg));
        aliases.put(inspectAlias(target.getPackageName() + ".FlutterSecureStoragePluginKey" + suffix,
            false, wrapped, data, storageAlg));
        store.put("aliases", aliases);
        return store;
    }

    private JSONObject inspectAlias(String alias, boolean oaep, Map<String, String> wrapped,
            Map<String, String> data, String storageAlg) throws Exception {
        JSONObject result = new JSONObject();
        result.put("alias", alias);
        KeyStore ks = KeyStore.getInstance("AndroidKeyStore");
        ks.load(null);
        result.put("exists", ks.containsAlias(alias));
        if (!ks.containsAlias(alias)) return result;
        java.util.Date creation = ks.getCreationDate(alias);
        if (creation != null) result.put("createdMillis", creation.getTime());
        Certificate cert = ks.getCertificate(alias);
        if (cert != null) result.put("certificateSha256", hex(MessageDigest.getInstance("SHA-256").digest(cert.getEncoded())));
        Key privateKey;
        try {
            privateKey = ks.getKey(alias, null);
            result.put("keyHandlePresent", privateKey != null);
            if (privateKey == null) return result;
            KeyInfo info = (KeyInfo) java.security.KeyFactory.getInstance(privateKey.getAlgorithm(), "AndroidKeyStore")
                .getKeySpec(privateKey, KeyInfo.class);
            result.put("authRequired", info.isUserAuthenticationRequired());
            result.put("invalidatedByBiometricEnrollment", info.isInvalidatedByBiometricEnrollment());
            result.put("securityLevel", info.getSecurityLevel());
            result.put("keySize", info.getKeySize());
            result.put("purposes", info.getPurposes());
        } catch (Throwable error) {
            result.put("keyInfoFailure", failure(error));
            return result;
        }
        // A random, memory-only challenge distinguishes UNWRAP_MODE problems
        // from a private key which also cannot perform ordinary decryption.
        // The encrypted challenge is neither persisted nor returned.
        JSONArray challenges = new JSONArray();
        for (String provider : new String[] { "AndroidKeyStoreBCWorkaround", "default" }) {
            JSONObject challenge = new JSONObject();
            challenge.put("provider", provider);
            try {
                Cipher encrypt = Cipher.getInstance(oaep ? "RSA/ECB/OAEPPadding" : "RSA/ECB/PKCS1Padding");
                OAEPParameterSpec spec = new OAEPParameterSpec("SHA-256", "MGF1", MGF1ParameterSpec.SHA1, PSource.PSpecified.DEFAULT);
                byte[] input = new byte[16]; new java.security.SecureRandom().nextBytes(input);
                if (oaep) encrypt.init(Cipher.ENCRYPT_MODE, cert.getPublicKey(), spec);
                else encrypt.init(Cipher.ENCRYPT_MODE, cert.getPublicKey());
                byte[] encrypted = encrypt.doFinal(input);
                challenge.put("publicEncryptSuccess", true);
                Cipher decrypt = provider.equals("default")
                    ? Cipher.getInstance(oaep ? "RSA/ECB/OAEPPadding" : "RSA/ECB/PKCS1Padding")
                    : Cipher.getInstance(oaep ? "RSA/ECB/OAEPPadding" : "RSA/ECB/PKCS1Padding", provider);
                if (oaep) decrypt.init(Cipher.DECRYPT_MODE, privateKey, spec);
                else decrypt.init(Cipher.DECRYPT_MODE, privateKey);
                challenge.put("privateDecryptSuccess", java.util.Arrays.equals(input, decrypt.doFinal(encrypted)));
                java.util.Arrays.fill(input, (byte) 0);
            } catch (Throwable error) {
                challenge.put("privateDecryptSuccess", false);
                challenge.put("failure", failure(error));
            }
            challenges.put(challenge);
        }
        result.put("memoryOnlyChallenges", challenges);
        JSONArray attempts = new JSONArray();
        for (String wrappedKeyName : new String[] { WRAPPED_GCM, WRAPPED_CBC }) {
            if (!wrapped.containsKey(wrappedKeyName)) continue;
            JSONObject attempt = new JSONObject();
            attempt.put("wrappedKind", wrappedKeyName.equals(WRAPPED_GCM) ? "gcm" : "cbc");
            try {
                Cipher rsa = Cipher.getInstance(oaep ? "RSA/ECB/OAEPPadding" : "RSA/ECB/PKCS1Padding",
                    "AndroidKeyStoreBCWorkaround");
                if (oaep) rsa.init(Cipher.UNWRAP_MODE, privateKey,
                    new OAEPParameterSpec("SHA-256", "MGF1", MGF1ParameterSpec.SHA1, PSource.PSpecified.DEFAULT));
                else rsa.init(Cipher.UNWRAP_MODE, privateKey);
                Key aes = rsa.unwrap(Base64.decode(wrapped.get(wrappedKeyName), Base64.DEFAULT), "AES", Cipher.SECRET_KEY);
                attempt.put("unwrapSuccess", true);
                // Validate only known credential entries in memory; export no value or identity.
                JSONObject entries = new JSONObject();
                for (String entry : ENTRIES) {
                    String encoded = data.get(PREFIX + entry);
                    if (encoded == null) continue;
                    JSONObject check = new JSONObject();
                    try {
                        byte[] bytes = Base64.decode(encoded, Base64.DEFAULT);
                        boolean gcm = "AES_GCM_NoPadding".equals(storageAlg);
                        Cipher cipher = Cipher.getInstance(gcm ? "AES/GCM/NoPadding" : "AES/CBC/PKCS7Padding");
                        int ivSize = gcm ? 12 : 16;
                        if (gcm) cipher.init(Cipher.DECRYPT_MODE, aes, new GCMParameterSpec(128, bytes, 0, ivSize));
                        else cipher.init(Cipher.DECRYPT_MODE, aes, new IvParameterSpec(bytes, 0, ivSize));
                        byte[] plain = cipher.doFinal(bytes, ivSize, bytes.length - ivSize);
                        JSONObject object = new JSONObject(new String(plain, java.nio.charset.StandardCharsets.UTF_8));
                        check.put("decryptAndJsonValid", true);
                        check.put("recoveryEnvelope", object.optInt("schema", -1) == 1 && object.has("value"));
                        check.put("tombstone", object.optInt("schema", -1) == 1 && object.has("value") && object.isNull("value"));
                        java.util.Arrays.fill(plain, (byte) 0);
                    } catch (Throwable error) { check.put("failure", failure(error)); }
                    entries.put(entry, check);
                }
                attempt.put("knownEntries", entries);
            } catch (Throwable error) {
                attempt.put("unwrapSuccess", false);
                attempt.put("failure", failure(error));
            }
            attempts.put(attempt);
        }
        result.put("unwrapAttempts", attempts);
        return result;
    }

    private Map<String, String> readPrefs(String name) throws Exception {
        File xml = new File(prefs, name + ".xml");
        File bak = new File(prefs, name + ".xml.bak");
        files.put(xml.getName(), fileSummary(xml));
        files.put(bak.getName(), fileSummary(bak));
        // Android treats a surviving .bak as authoritative. Read it without renaming.
        File selected = bak.isFile() ? bak : xml;
        Map<String, String> values = new LinkedHashMap<>();
        if (!selected.isFile()) return values;
        try (FileInputStream input = new FileInputStream(selected)) {
            XmlPullParser parser = Xml.newPullParser();
            parser.setInput(input, "UTF-8");
            for (int event = parser.getEventType(); event != XmlPullParser.END_DOCUMENT; event = parser.next()) {
                if (event != XmlPullParser.START_TAG) continue;
                String key = parser.getAttributeValue(null, "name");
                if (key == null) continue;
                if ("string".equals(parser.getName())) values.put(key, parser.nextText());
                else if ("boolean".equals(parser.getName())) values.put(key, parser.getAttributeValue(null, "value"));
            }
        }
        return values;
    }

    private static JSONObject fileSummary(File file) throws Exception {
        JSONObject out = new JSONObject();
        out.put("exists", file.isFile());
        if (!file.isFile()) return out;
        out.put("bytes", file.length());
        out.put("modifiedMillis", file.lastModified());
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        try (FileInputStream in = new FileInputStream(file)) {
            byte[] chunk = new byte[8192]; int count;
            while ((count = in.read(chunk)) != -1) digest.update(chunk, 0, count);
        }
        out.put("sha256", hex(digest.digest()));
        return out;
    }

    private static JSONArray failure(Throwable error) {
        JSONArray chain = new JSONArray();
        for (int depth = 0; error != null && depth < 10; depth++, error = error.getCause()) {
            JSONObject item = new JSONObject();
            try {
                item.put("class", error.getClass().getName());
                // Numeric system error codes are safe; exception messages may carry values.
                for (String getter : new String[] { "getNumericErrorCode", "getErrorCode" }) {
                    try { item.put(getter, error.getClass().getMethod(getter).invoke(error)); }
                    catch (Throwable unavailable) { }
                }
                chain.put(item);
            } catch (Exception ignored) { }
        }
        return chain;
    }

    private static String hex(byte[] bytes) {
        StringBuilder value = new StringBuilder();
        for (byte b : bytes) value.append(String.format(java.util.Locale.ROOT, "%02x", b & 255));
        return value.toString();
    }
}
'''

manifest = f'''<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="{PKG}" android:versionCode="1" android:versionName="read-only-1">
  <uses-sdk android:minSdkVersion="24" android:targetSdkVersion="36" />
  <application android:label="Mesting temporary storage probe" android:allowBackup="false" android:hasCode="true" />
  <instrumentation android:name="{PKG}.ReadOnlyProbe" android:targetPackage="com.mesting.music" android:functionalTest="true" android:handleProfiling="false" />
  <instrumentation android:name="{PKG}.FreshKeyProbe" android:targetPackage="com.mesting.music" android:functionalTest="true" android:handleProfiling="false" />
  <instrumentation android:name="{PKG}.NativeSlotProbe" android:targetPackage="com.mesting.music" android:functionalTest="true" android:handleProfiling="false" />
</manifest>'''

def run(command, env=None):
    result = subprocess.run(list(map(str, command)), env=env, capture_output=True)
    if result.returncode:
        (OUT / 'probe-build-error.log').write_bytes(result.stdout + result.stderr)
        raise RuntimeError('Probe build failed; see private build log')
    return result.stdout.decode('utf-8', errors='replace')

src = OUT / 'probe-src/com/mesting/music/storageprobe156/ReadOnlyProbe.java'
src.parent.mkdir(parents=True, exist_ok=True)
src.write_text(JAVA, encoding='utf-8')
manifest_path = OUT / 'probe-src/AndroidManifest.xml'
manifest_path.write_text(manifest, encoding='utf-8')
classes = OUT / 'probe-classes'
classes.mkdir(exist_ok=True)
dex = OUT / 'probe-dex'
dex.mkdir(exist_ok=True)
env = os.environ.copy()
env['JAVA_HOME'] = str(JDK)
env['PATH'] = str(JDK / 'bin') + os.pathsep + env.get('PATH', '')
run([JDK / 'bin/javac.exe', '-source', '8', '-target', '8', '-encoding', 'UTF-8', '-classpath', ANDROID,
     '-d', classes, src, OUT / 'FreshKeyProbe.java', OUT / 'NativeSlotProbe.java'], env)
run([BUILD / 'd8.bat', '--lib', ANDROID, '--min-api', '24', '--output', dex,
     *sorted(classes.rglob('*.class'))], env)
unsigned = OUT / 'probe-unsigned.apk'
run([BUILD / 'aapt2.exe', 'link', '-o', unsigned, '--manifest', manifest_path, '-I', ANDROID], env)
with zipfile.ZipFile(unsigned, 'a', compression=zipfile.ZIP_DEFLATED) as apk:
    apk.write(dex / 'classes.dex', 'classes.dex')
aligned = OUT / 'probe-aligned.apk'
run([BUILD / 'zipalign.exe', '-f', '4', unsigned, aligned], env)
retained = ROOT / '.codex-artifacts/2026-10-26-beta17-signing'
instructions = (retained / '使用说明.txt').read_text('utf-8-sig')
passwords = re.findall(r'(?im)^[^\r\n]*(?:password|密码)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
aliases = re.findall(r'(?im)^[^\r\n]*(?:alias|别名)[ \t]*[:：][ \t]*[`"\']?([^\s`"\'；，。]+)', instructions)
assert passwords and len(set(passwords)) == 1 and aliases and len(set(aliases)) == 1
env['MESTING_STORAGE_PROBE_PASSWORD'] = passwords[0]
signed = OUT / 'readonly-storage-probe.apk'
run([BUILD / 'apksigner.bat', 'sign', '--ks', retained / 'debug.keystore', '--ks-key-alias', aliases[0],
     '--ks-pass', 'env:MESTING_STORAGE_PROBE_PASSWORD', '--key-pass', 'env:MESTING_STORAGE_PROBE_PASSWORD',
     '--v1-signing-enabled', 'false', '--v2-signing-enabled', 'true', '--v3-signing-enabled', 'true',
     '--v4-signing-enabled', 'false', '--out', signed, aligned], env)
verification = run([BUILD / 'apksigner.bat', 'verify', '--verbose', '--print-certs', signed], env)
assert re.search(r'Signer #1 certificate SHA-256 digest: ([0-9a-fA-F]+)', verification)[1].lower() == CERT
record = {'package': PKG, 'apkBytes': signed.stat().st_size,
          'sha256': hashlib.sha256(signed.read_bytes()).hexdigest(), 'certificateSha256': CERT,
          'target': 'com.mesting.music', 'networkPermissions': [], 'writesTargetData': False,
          'existingKeyProbeGeneratesOrDeletesKeys': False,
          'freshKeyProbeRequiresExplicitNonce': True, 'exportsCredentialValues': False}
(OUT / 'probe-build-identity.json').write_text(json.dumps(record, indent=2), encoding='utf-8')
print(json.dumps(record, indent=2))
