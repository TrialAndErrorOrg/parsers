# In an Astro site

With an adapter (any server output), add one catch-all route next to the CMS
page, e.g. `src/pages/admin/[...gateway].ts`:

```ts
import type { APIRoute } from "astro";
import { createGateway, entra } from "sveltia-gateway";

export const prerender = false;

const gateway = createGateway({
	identity: entra({
		tenantId: import.meta.env.ENTRA_TENANT_ID,
		clientId: import.meta.env.ENTRA_CLIENT_ID,
		clientSecret: import.meta.env.ENTRA_CLIENT_SECRET,
	}),
	github: { repo: "owner/name", appId: import.meta.env.GITHUB_APP_ID, privateKey: import.meta.env.GITHUB_APP_PRIVATE_KEY },
	sessionSecret: import.meta.env.SESSION_SECRET,
	basePath: "/admin",
});

export const ALL: APIRoute = ({ request }) => gateway.fetch(request);
```

`src/pages/admin/index.astro` (the CMS page) and `admin/config.yml` still win
over the catch-all, because Astro prefers more specific routes. The same
three lines work in a Next.js route handler, SvelteKit `+server.ts`, Hono or
anything else that hands you a `Request`.
