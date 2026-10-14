import { STRAPI_TOKEN, STRAPI_URL } from "astro:env/server";

/**
 * Strapi v4 wraps everything in `{ data: { id, attributes } }`. This turns
 * that into plain objects, so the rest of the site never sees the wrapping.
 */
export function flatten<T = any>(value: any): T {
	if (Array.isArray(value)) return value.map(flatten) as T;
	if (value === null || typeof value !== "object") return value;

	if ("data" in value && Object.keys(value).length <= 2) {
		return flatten(value.data);
	}
	if ("attributes" in value && "id" in value) {
		return flatten({ id: value.id, ...value.attributes });
	}

	return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, flatten(v)])) as T;
}

export async function strapi<T = any>(path: string, params: Record<string, string> = {}, { draft = false } = {}): Promise<T> {
	const url = new URL(`/api/${path}`, STRAPI_URL);
	for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
	if (draft) url.searchParams.set("publicationState", "preview");

	const response = await fetch(url, {
		headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
	});
	if (!response.ok) {
		throw new Error(`Strapi ${response.status} for ${url.pathname}${url.search}`);
	}
	return flatten<T>(await response.json());
}

/** Fetch every page of a collection */
export async function strapiAll<T = any>(path: string, params: Record<string, string> = {}): Promise<T[]> {
	const items: T[] = [];
	for (let page = 1; ; page++) {
		const url = new URL(`/api/${path}`, STRAPI_URL);
		for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
		url.searchParams.set("pagination[page]", String(page));
		url.searchParams.set("pagination[pageSize]", "100");

		const response = await fetch(url, {
			headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
		});
		if (!response.ok) throw new Error(`Strapi ${response.status} for ${url.pathname}`);
		const json = await response.json();
		items.push(...flatten<T[]>(json.data));
		if (page >= (json.meta?.pagination?.pageCount ?? 1)) return items;
	}
}
