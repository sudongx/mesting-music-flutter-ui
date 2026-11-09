(async () => {
  const row = {};
  try {
    const full = window.__probeFull;
    const bytes = new Uint8Array(88); crypto.getRandomValues(bytes);
    const nonce = btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '') + '==';
    const digits = n => Array.from(crypto.getRandomValues(new Uint8Array(n)), x => String(x % 10)).join('');
    const device = digits(16), install = digits(15), portrait = crypto.randomUUID()+'.login';
    const hex = n => Array.from(crypto.getRandomValues(new Uint8Array(n)), x => x.toString(16).padStart(2, '0')).join('');
    const fields = { aid:'386088', passport_jssdk_version:'2.4.13', passport_jssdk_type:'normal', is_from_ttaccountsdk:'1' };
    if (full) {
      // The known working Android implementation seeds this provisional web
      // nonce after bootstrap. It is independent of mobile BDInstall/signing.
      localStorage.clear(); localStorage.setItem('xmst', nonce); localStorage.setItem('xmsty', nonce);
      Object.assign(fields, {language:'zh', account_sdk_source:'web',p_js_v:'2.4.13',p_js_t:'pro',
        p_zt:'3.3.5',p_ver:'1.0.29',request_host:'app%3A%2F%2Fresources',p_bd:'1.0.0.41',
        is_new_login:'1',is_from_iesaccountsaas:'1',device_platform:'PC',version_code:'3.5.2',
        account_sdk_source_info:'00',device_id:device,install_id:install,did:device,iid:install,msToken:nonce});
    }
    const encode = value => new URLSearchParams(Object.entries(value).sort((a,b) => a[0].localeCompare(b[0]))).toString();
    async function request(path, extra, form) {
      const trace = hex(4);
      const url = 'https://api.qishui.com'+path+'?'+encode({...fields,biz_trace_id:trace,...extra});
      const headers = {'Accept':'application/json, text/javascript','x-tt-passport-verify-portrait':portrait,
        'x-tt-passport-trace-id':trace};
      const body = form ? encode(form) : null;
      if (body !== null) Object.assign(headers, {'Content-Type':'application/x-www-form-urlencoded','x-ss-stub':AnonymousProbe.md5(body)});
      const response = await window.__qishuiRequest({url, method:form?'POST':'GET',headers,body,timeout:20000});
      const signed = new URL(response.responseURL).searchParams.get('a_bogus') || '';
      return {data:JSON.parse(response.body).data || {}, signed:signed.length};
    }
    const created = await request('/passport/web/get_qrcode/', {next:'https://api.qishui.com',need_logo:'false',need_short_url:'false',is_new_login:'1'});
    row.createCode = String(created.data.error_code || 0); row.createSignedLength = created.signed;
    if (created.data.token) {
      await new Promise(resolve => setTimeout(resolve,3000));
      const result = await request('/passport/web/check_qrconnect/', {}, {need_logo:'false',need_short_url:'false',is_frontier:'true',
        token:created.data.token,is_new_login:'1',next:'https://api.qishui.com'});
      row.pollCode=String(result.data.error_code || 0);row.pollStatus=String(result.data.status || '');row.pollSignedLength=result.signed;
    }
    row.xmstMatchesQuery = full && localStorage.getItem('xmst') === nonce;
    row.xmstyMatchesQuery = full && localStorage.getItem('xmsty') === nonce;
  } catch (e) { row.errorType = String(e && e.name || 'Error'); }
  AnonymousProbe.complete(JSON.stringify(row));
})();
