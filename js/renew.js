export default {
  async scheduled(event, env, ctx) {
    const newToken = crypto.randomUUID()+"~"+"0"+"~"+crypto.randomUUID();
    await env.checkidentity.put('cookie', newToken);
  }
};