import type { APIRoute } from "astro";
import { ADMIN_AUTH } from "astro:env/server";
import { parse, stringify } from "yaml";
import configYaml from "~/admin/config.yml?raw";

/*
 * The CMS configuration, from src/admin/config.yml. When editors sign in with
 * Microsoft, the CMS is pointed at this site for signing in (/admin/auth) and
 * for GitHub's API (/admin/api), instead of at GitHub.
 */

// Rendered on request, so ADMIN_AUTH is read where the site runs, not where it was built
export const prerender = false;

export const GET: APIRoute = ({ url }) => {
	if (ADMIN_AUTH === "github") return yaml(configYaml);

	const config = parse(configYaml);
	const origin = url.origin;
	config.backend = {
		...config.backend,
		base_url: origin,
		auth_endpoint: "admin/auth",
		api_root: `${origin}/admin/api`,
		// Only the sign-in button: a GitHub access token means nothing here
		auth_methods: ["oauth"],
	};
	return yaml(stringify(config));
};

const yaml = (body: string) => new Response(body, { headers: { "Content-Type": "application/yaml; charset=utf-8" } });
