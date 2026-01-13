export default {
  async scheduled(event, env, ctx) {
    const newToken = crypto.randomUUID();
    const timenow = Math.floor(Date.now() / 1000);
    // 写入 KV (注意：需要在 wrangler.toml 里绑定同一个 KV)
    await env.checkidentity.put('cookie', newToken);
    await env.checkidentity.put('time', timenow.toString());
  }
};