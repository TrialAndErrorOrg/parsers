import { strapiAll, strapi } from "../strapi";

/*
 * Free-form pages kept in Strapi (donate, events, award calls). They are
 * plain rich text. Pages built from sections live in src/content/pages.
 */

export interface CmsPage {
	slug: string;
	title: string;
	description?: string;
	/** HTML */
	body: string;
}

const toPage = (raw: any): CmsPage => ({
	slug: raw.slug.trim(),
	title: raw.title,
	description: raw.seo?.metaDescription ?? undefined,
	body: (raw.block ?? []).map((b: any) => b.body ?? "").join("\n"),
});

let pages: Promise<CmsPage[]> | undefined;

export function getCmsPages(): Promise<CmsPage[]> {
	pages ??= strapiAll("pages", { "populate[block]": "*", "populate[seo]": "*" }).then((all) =>
		all.filter((p) => p.slug && p.slug.trim() !== "test").map(toPage),
	);
	return pages;
}

export async function getCmsDraft(slug: string): Promise<CmsPage | undefined> {
	const found = await strapi<any[]>("pages", { "populate[block]": "*", "populate[seo]": "*", "filters[slug][$eq]": slug }, { draft: true });
	return found?.[0] ? toPage(found[0]) : undefined;
}
