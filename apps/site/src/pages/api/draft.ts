import type { APIRoute } from "astro";
import { getDraft } from "~/lib/sources/blog";
import { getCmsDraft } from "~/lib/sources/pages";
import { allowPreview, isValidSecret } from "~/lib/preview";

export const prerender = false;

// Strapi's preview button calls this for blog posts and pages alike.
// Pass type=blog or type=page to skip the lookup.
export const GET: APIRoute = async ({ url, cookies, redirect }) => {
	const secret = url.searchParams.get("secret");
	const slug = url.searchParams.get("slug");
	const type = url.searchParams.get("type");

	if (!isValidSecret(secret) || !slug) {
		return new Response("Invalid token", { status: 401 });
	}

	const kind =
		type === "page" || type === "blog"
			? type
			: (await getDraft(slug))
				? "blog"
				: (await getCmsDraft(slug))
					? "page"
					: undefined;
	if (!kind) return new Response("No draft with that slug", { status: 404 });

	allowPreview(cookies);
	return redirect(`/preview/${kind}/${encodeURIComponent(slug)}`, 307);
};
