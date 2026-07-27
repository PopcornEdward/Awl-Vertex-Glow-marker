/**
 * Cloudflare Worker — GitHub OAuth Gateway for Sveltia/Decap CMS
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || env.OAUTH_ORIGIN || "*";

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    // ── /auth — 发起 GitHub OAuth，跳转到 GitHub 授权页 ──
    if (url.pathname === "/auth") {
      const redirectHost = env.OAUTH_REDIRECT_HOST;
      const redirectUri = `https://${redirectHost}/callback`;

      const params = new URLSearchParams({
        client_id: env.OAUTH_CLIENT_ID,
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
        return new Response("<h1>Error: Missing authorization code</h1>", {
          status: 400,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      }

      const redirectHost = env.OAUTH_REDIRECT_HOST;
      const redirectUri = `https://${redirectHost}/callback`;

      const tokenRes = await fetch(
        "https://github.com/login/oauth/access_token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            client_id: env.OAUTH_CLIENT_ID,
            client_secret: env.OAUTH_CLIENT_SECRET,
            code,
            redirect_uri: redirectUri,
          }),
        }
      );

      const tokenData = await tokenRes.json();

      if (tokenData.error) {
        return new Response(
          `<h1>Authorization Failed</h1><p>${tokenData.error_description || tokenData.error}</p>`,
          { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
        );
      }

      return new Response(
        `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Login Success</title></head>
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
<p style="text-align:center;font-family:sans-serif;margin-top:40px;">Logging in…</p>
</body>
</html>`,
        { headers: { "Content-Type": "text/html; charset=utf-8" } }
      );
    }

    return new Response("Not Found", { status: 404 });
  },
};
