import { strapi, strapiAll } from "../strapi";
import type { Person, Picture, Post, Term } from "../types";

const imageFields = {
	"fields[0]": "url",
	"fields[1]": "width",
	"fields[2]": "height",
	"fields[3]": "alternativeText",
	"fields[4]": "formats",
};

const prefixed = (prefix: string, params: Record<string, string>) =>
	Object.fromEntries(Object.entries(params).map(([k, v]) => [`${prefix}${k.replace(/^(\w+)/, "[$1]")}`, v]));

const postParams = {
	"sort[0]": "publishDate:desc",
	"sort[1]": "publishedAt:desc",
	"populate[blog_tags]": "*",
	"populate[category]": "*",
	"populate[related][fields][0]": "slug",
	...prefixed("populate[image]", imageFields),
	...prefixed("populate[team_members][populate][image]", imageFields),
	...prefixed("populate[blog_authors][populate][image]", imageFields),
};

const slugify = (text: string) =>
	text
		.toLowerCase()
		.normalize("NFKD")
		.replace(/[^\w\s-]/g, "")
		.trim()
		.replace(/[\s_]+/g, "-");

export function toPicture(image: any, size: "large" | "medium" | "small" = "large"): Picture | undefined {
	if (!image?.url) return undefined;
	const format = image.formats?.[size] ?? image.formats?.large ?? image.formats?.medium;
	const chosen = format ?? image;
	return {
		url: chosen.url,
		width: chosen.width,
		height: chosen.height,
		alt: image.alternativeText ?? undefined,
	};
}

const linkKeys: Record<string, string> = {
	bluesky: "bluesky",
	mastodon: "mastodon",
	github: "github",
	linkedin: "linkedin",
	linkedIn: "linkedin",
	personalWebsite: "website",
	twitter: "twitter",
};

export function toPerson(raw: any, kind: Person["kind"]): Person {
	const links = Object.entries(linkKeys)
		.filter(([key]) => raw[key])
		.map(([key, icon]) => ({ icon, url: raw[key] as string }));
	return {
		slug: raw.slug ?? undefined,
		name: [raw.firstName, raw.lastName].filter(Boolean).join(" "),
		kind,
		position: raw.position ?? undefined,
		pronouns: raw.show_pronouns ? (raw.pronouns ?? undefined) : undefined,
		summary: raw.summary || raw.bio || undefined,
		image: toPicture(raw.image, "small"),
		email: kind === "team" ? (raw.email ?? undefined) : undefined,
		orcid: raw.orcid ?? undefined,
		links,
	};
}

const toTerm = (raw: any): Term => ({ title: raw.title, slug: raw.slug ?? slugify(raw.title) });

function toPost(raw: any): Post {
	return {
		id: String(raw.id),
		slug: raw.slug,
		title: raw.title,
		excerpt: raw.excerpt?.trim() || undefined,
		body: raw.body ?? undefined,
		date: raw.publishDate ?? raw.publishedAt ?? raw.createdAt,
		updated: raw.updatedAt ?? undefined,
		doi: raw.doi ?? undefined,
		image: toPicture(raw.image),
		category: raw.category ? toTerm(raw.category) : undefined,
		tags: (raw.blog_tags ?? []).map(toTerm),
		authors: [
			...(raw.team_members ?? []).map((p: any) => toPerson(p, "team")),
			...(raw.blog_authors ?? []).map((p: any) => toPerson(p, "guest")),
		],
		description: raw.seo?.metaDescription ?? raw.excerpt ?? undefined,
		related: (raw.related ?? []).map((r: any) => r.slug).filter(Boolean),
	};
}

export async function getPosts(): Promise<Post[]> {
	const posts = await strapiAll("blog-posts", postParams);
	return posts.map(toPost);
}

export async function getDraft(slug: string): Promise<Post | undefined> {
	const posts = await strapi<any[]>("blog-posts", { ...postParams, "filters[slug][$eq]": slug }, { draft: true });
	return posts?.[0] ? toPost(posts[0]) : undefined;
}

export async function getTeam(): Promise<Person[]> {
	const team = await strapiAll("team-members", {
		"sort[0]": "lastName:asc",
		...prefixed("populate[image]", imageFields),
	});
	return team.map((p) => toPerson(p, "team"));
}

export async function getGuestAuthors(): Promise<Person[]> {
	const guests = await strapiAll("blog-authors", prefixed("populate[image]", imageFields));
	return guests.map((p) => toPerson(p, "guest"));
}
