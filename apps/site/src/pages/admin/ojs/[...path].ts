import type { APIRoute } from "astro";
import { OJS_API_URL } from "astro:env/server";
import { adminGateway, siteSignIn } from "~/lib/admin";

/*
 * The converter's way into OJS (/admin/convert). OJS doesn't answer other
 * sites' pages, so the converter asks here and this asks OJS. Only for signed-in
 * editors, only reading, only the journal's OJS and only what the converter
 * needs. Each editor sends their own OJS API key, so OJS knows who did what.
 */

export const prerender = false;

const paths = [
	/^submissions$/,
	/^submissions\/\d+\/files$/,
	/^submissions\/\d+\/publications\/\d+$/,
	// A submission file's contents
	/^_files\/\d+$/,
];

export const GET: APIRoute = async ({ params, request, url }) => {
	if (!siteSignIn) return new Response("Not found", { status: 404 });
	if (!(await adminGateway().editor(request))) return Response.json({ error: "Not signed in, or the sign-in has expired" }, { status: 401 });

	const path = params.path ?? "";
	if (!paths.some((allowed) => allowed.test(path))) return Response.json({ error: "Not something the converter reads" }, { status: 404 });
	const apiKey = request.headers.get("X-OJS-API-Key");
	if (!apiKey) return Response.json({ error: "No OJS API key" }, { status: 400 });

	const upstream = new URL(`${OJS_API_URL.replace(/\/$/, "")}/${path}`);
	for (const [name, value] of url.searchParams) if (name !== "apiToken") upstream.searchParams.append(name, value);
	// OJS 3.3 only takes the key as a parameter
	upstream.searchParams.set("apiToken", apiKey);

	const response = await fetch(upstream, { headers: { Accept: request.headers.get("Accept") ?? "application/json" } });
	return new Response(response.body, {
		// A 401 from here means the sign-in to the site ran out, so OJS refusing the key is a 403
		status: response.status === 401 ? 403 : response.status,
		headers: {
			"Content-Type": response.headers.get("Content-Type") ?? "application/octet-stream",
			"Cache-Control": "no-store",
		},
	});
};
