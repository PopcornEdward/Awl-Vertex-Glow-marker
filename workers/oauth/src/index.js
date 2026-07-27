/**
 * Cloudflare Worker — GitHub OAuth Gateway for Sveltia/Decap CMS
 *
 * 部署后，Worker URL 就是 config.yml 里的 base_url。
 * 例如 Worker 域名是 awl-cms-oauth.xxx.workers.dev，
 * 那么 base_url = https://awl-cms-oauth.xxx.workers.dev
 */

const CLIENT_ID = OAUTH_CLIENT_ID;
const CLIENT_SECRET = OAUTH_CLIENT_SECRET;
const REDIRECT_HOST = OAUTH_REDIRECT_HOST;
const ALLOWED_ORIGIN = OAUTH_ORIGIN;

function htmlResponse(body, status = 200) {
  return new Response(body, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin || ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || ALLOWED_ORIGIN;

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    // ── /auth — 发起 GitHub OAuth，跳转到 GitHub 授权页 ──
    if (url.pathname === "/auth") {
      const clientId = env.OAUTH_CLIENT_ID || CLIENT_ID;
      const redirectHost = env.OAUTH_REDIRECT_HOST || REDIRECT_HOST;
      const redirectUri = `https://${redirectHost}/callback`;

      const params = new URLSearchParams({
        client_id: clientId,
        scope: "repo,user",
        redirect_uri: redirectUri,
      });

      return Response.redirect(
        `https://github.com/login/oauth/authorize?${params.toString()}`,
        302
      );
    }

    // ── /callback — GitHub 回调，用 code 换 access_token ──
    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) {
        return htmlResponse("<h1>错误：缺少授权码 (code)</h1>", 400);
      }

      const clientId = env.OAUTH_CLIENT_ID || CLIENT_ID;
      const clientSecret = env.OAUTH_CLIENT_SECRET || CLIENT_SECRET;
      const redirectHost = env.OAUTH_REDIRECT_HOST || REDIRECT_HOST;
      const redirectUri = `https://${redirectHost}/callback`;

      // 用 code 向 GitHub 换取 access_token
      const tokenRes = await fetch(
        "https://github.com/login/oauth/access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            client_id: clientId,
            client_secret: clientSecret,
            code,
            redirect_uri: redirectUri,
          }),
        }
      );

      const tokenData = await tokenRes.json();

      if (tokenData.error) {
        return htmlResponse(
          `<h1>授权失败</h1><p>${tokenData.error_description || tokenData.error}</p>`,
          400
        );
      }

      // 成功 —— 把 token 通过 postMessage 传给 CMS 页面
      return htmlResponse(`<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>登录成功</title></head>
<body>
  <script>
    (function() {
      function receiveMessage(e) {
        window.opener.postMessage(
          'authorization:github:success:{"token":"${tokenData.access_token}","provider":"github"}',
          e.origin
        );
        window.close();
      }
      window.addEventListener("message", receiveMessage, { once: true });
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
  <p style="text-align:center;font-family:sans-serif;margin-top:40px;">
    登录中… 窗口将自动关闭
  </p>
</body>
</html>`);
    }

    // ── 404 ──
    return new Response("Not Found", { status: 404 });
  },
};
