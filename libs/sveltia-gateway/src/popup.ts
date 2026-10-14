/*
 * The page that ends a sign-in. Sveltia CMS (like Decap and Netlify CMS)
 * opens sign-in in a popup and waits for this handshake: the popup says
 * "authorizing:github", the CMS echoes it, the popup answers with the token
 * (here, the editor's session) and closes.
 *
 * The hello carries nothing secret, so it goes to whatever opened the popup.
 * The token only goes back to an echo from one of the allowed origins.
 */

export type PopupResult = { token: string } | { error: string }

export function popupResponse(result: PopupResult, allowedOrigins: string[], provider = 'github') {
  const success = 'token' in result
  const message = `authorization:${provider}:${success ? 'success' : 'error'}:${JSON.stringify(result)}`
  // JSON inside a script: escape "<" so nothing in it can close the tag
  const literal = (value: unknown) => JSON.stringify(value).replaceAll('<', '\\u003c')
  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Signing in…</title></head>
<body>
<p>${success ? 'Signed in. This window closes by itself.' : 'Sign-in failed. You can close this window and try again.'}</p>
<script>
	const message = ${literal(message)};
	const hello = ${literal(`authorizing:${provider}`)};
	const allowed = ${literal(allowedOrigins)};
	window.addEventListener("message", (event) => {
		if (event.source === window.opener && event.data === hello && allowed.includes(event.origin)) {
			window.opener.postMessage(message, event.origin);
		}
	});
	window.opener?.postMessage(hello, "*");
</script>
</body>
</html>`
  return new Response(html, {
    status: success ? 200 : 403,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Content-Security-Policy': "default-src 'none'; script-src 'unsafe-inline'",
      'Referrer-Policy': 'no-referrer',
    },
  })
}
