import type { APIRoute } from "astro";
import { ADMIN_AUTH } from "astro:env/server";
import { adminGateway } from "~/lib/admin";

/*
 * /admin/auth, /admin/callback and /admin/api/..., when editors sign in with
 * Microsoft (src/lib/admin.ts). The CMS page and its config.yml are their own
 * routes and win over this one.
 */

export const prerender = false;

export const ALL: APIRoute = ({ request }) => {
	const enabled = ADMIN_AUTH === "microsoft" || (ADMIN_AUTH === "dev" && import.meta.env.DEV);
	return enabled ? adminGateway().fetch(request) : new Response("Not found", { status: 404 });
};
