import type { APIRoute } from "astro";
import { adminGateway, siteSignIn } from "~/lib/admin";

/*
 * /admin/auth, /admin/callback and /admin/api/..., when editors sign in with
 * Microsoft (src/lib/admin.ts). The CMS page and its config.yml are their own
 * routes and win over this one.
 */

export const prerender = false;

export const ALL: APIRoute = ({ request }) => (siteSignIn ? adminGateway().fetch(request) : new Response("Not found", { status: 404 }));
