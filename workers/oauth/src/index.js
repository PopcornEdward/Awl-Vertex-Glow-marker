/**
 * Cloudflare Worker — GitHub OAuth Gateway + R2 Image Upload + Frontend Proxy
 * for Sveltia/Decap CMS
 */

const CDN_BASE = "https://ownshop.usbartimgotolink.qzz.io";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || env.OAUTH_ORIGIN || "*";

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
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

    // ── /upload — 图片上传到 R2，返回 CDN URL ──
    if (url.pathname === "/upload" && request.method === "POST") {
      const contentType = request.headers.get("Content-Type") || "";
      if (!contentType.includes("multipart/form-data")) {
        return new Response(
          JSON.stringify({ error: "Expected multipart/form-data" }),
          { status: 400, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } }
        );
      }

      const formData = await request.formData();
      const file = formData.get("file");
      if (!file || typeof file === "string") {
        return new Response(
          JSON.stringify({ error: "No file provided" }),
          { status: 400, headers: { ...corsHeaders(origin), "Content-Type": "application/json" } }
        );
      }

      const arrayBuffer = await file.arrayBuffer();
      const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
      const fileHash = hashHex.substring(0, 32);

      const ext = (file.name || "image.jpg").split(".").pop() || "jpg";
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const key = `${year}/${month}/${day}/${fileHash}.${ext}`;

      await env.MY_BUCKET.put(key, arrayBuffer, {
        httpMetadata: { contentType: file.type || "image/jpeg" },
      });

      return new Response(
        JSON.stringify({ url: `${CDN_BASE}/${key}` }),
        { headers: { ...corsHeaders(origin), "Content-Type": "application/json" } }
      );
    }

    // ── Proxy all other requests to GitHub Pages origin ──
    const originUrl = new URL(request.url);
    originUrl.hostname = env.ORIGIN_HOST;
    // Prepend the repo base path for project-site GitHub Pages
    if (env.ORIGIN_BASE_PATH) {
      originUrl.pathname = env.ORIGIN_BASE_PATH + originUrl.pathname;
    }
    const originReq = new Request(originUrl.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: "follow",
    });

    return fetch(originReq);
  },
};
