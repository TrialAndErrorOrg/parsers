/*
 * Copies the blog from Strapi to an Underlay collection, so the site can read
 * it from there (BLOG_SOURCE=underlay) and the blog has a versioned public
 * archive like the journal.
 *
 *   node --env-file=.env scripts/blog-to-underlay.ts            # dry run, writes ./underlay-export
 *   node --env-file=.env scripts/blog-to-underlay.ts --push     # publishes a new version
 *
 * --push needs UNDERLAY_TOKEN (a write key) and UNDERLAY_BLOG_COLLECTION
 * (owner/slug, e.g. centeroftrialanderror/blog; the collection must exist).
 * Images are uploaded as Underlay files. Images inside post bodies keep
 * pointing at Strapi.
 */

import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const STRAPI_URL = process.env.STRAPI_URL ?? "https://cms.trialanderror.org";
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const UNDERLAY_URL = process.env.UNDERLAY_URL ?? "https://www.underlay.org";
const UNDERLAY_TOKEN = process.env.UNDERLAY_TOKEN;
const COLLECTION = process.env.UNDERLAY_BLOG_COLLECTION;
const push = process.argv.includes("--push");
const outDir = "underlay-export";

type Rec = { id: string; type: string; data: Record<string, unknown> };

const fileRef = { type: "object", required: ["$file"], properties: { $file: { type: "string" }, fileName: { type: "string" }, mimeType: { type: "string" }, originalUrl: { type: "string" }, width: { type: "number" }, height: { type: "number" }, alt: { type: "string" } } };
const str = { type: "string" };
const strs = { type: "array", items: str };

export const schemas = {
	BlogPost: {
		type: "object",
		required: ["slug", "title", "publishedAt"],
		properties: {
			slug: str,
			title: str,
			excerpt: str,
			description: str,
			body: { type: "string", description: "HTML" },
			publishedAt: { type: "string", format: "date-time" },
			updatedAt: { type: "string", format: "date-time" },
			doi: str,
			license: str,
			image: fileRef,
			categoryId: { type: "string", "x-ref-type": "Category" },
			tagIds: { type: "array", items: { type: "string", "x-ref-type": "Tag" } },
			authorIds: { type: "array", items: { type: "string", "x-ref-type": "Person" } },
			relatedIds: { type: "array", items: { type: "string", "x-ref-type": "BlogPost" } },
		},
	},
	Person: {
		type: "object",
		required: ["name", "kind"],
		properties: {
			slug: str,
			name: str,
			firstName: str,
			lastName: str,
			kind: { type: "string", enum: ["team", "guest"] },
			position: str,
			summary: { type: "string", description: "HTML" },
			orcid: str,
			email: str,
			image: fileRef,
			links: { type: "array", items: { type: "object", properties: { icon: str, url: str } } },
		},
	},
	Category: { type: "object", required: ["slug", "title"], properties: { slug: str, title: str } },
	Tag: { type: "object", required: ["slug", "title"], properties: { slug: str, title: str } },
};

async function strapiAll(path: string, params: Record<string, string>) {
	const out: any[] = [];
	for (let page = 1; ; page++) {
		const url = new URL(`/api/${path}`, STRAPI_URL);
		for (const [k, v] of Object.entries({ ...params, "pagination[page]": String(page), "pagination[pageSize]": "100" })) url.searchParams.set(k, v);
		const res = await fetch(url, { headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {} });
		if (!res.ok) throw new Error(`Strapi ${res.status} for ${url}`);
		const json = await res.json();
		out.push(...json.data.map(flatten));
		if (page >= json.meta.pagination.pageCount) return out;
	}
}

function flatten(value: any): any {
	if (Array.isArray(value)) return value.map(flatten);
	if (value === null || typeof value !== "object") return value;
	if ("data" in value && Object.keys(value).length <= 2) return flatten(value.data);
	if ("attributes" in value && "id" in value) return flatten({ id: value.id, ...value.attributes });
	return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, flatten(v)]));
}

const slugify = (t: string) => t.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/[\s_]+/g, "-");
const clean = <T extends Record<string, unknown>>(o: T) => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== null && v !== undefined && v !== "")) as T;

const files = new Map<string, { bytes: Buffer; mimeType: string }>();

async function toFile(image: any) {
	if (!image?.url) return undefined;
	const res = await fetch(image.url);
	if (!res.ok) throw new Error(`Image ${res.status} for ${image.url}`);
	const bytes = Buffer.from(await res.arrayBuffer());
	const hash = createHash("sha256").update(bytes).digest("hex");
	const mimeType = res.headers.get("content-type") ?? image.mime ?? "application/octet-stream";
	files.set(hash, { bytes, mimeType });
	return clean({ $file: `sha256:${hash}`, fileName: image.name, mimeType, originalUrl: image.url, width: image.width, height: image.height, alt: image.alternativeText });
}

const linkKeys: Record<string, string> = { bluesky: "bluesky", mastodon: "mastodon", github: "github", linkedin: "linkedin", linkedIn: "linkedin", personalWebsite: "website", twitter: "twitter" };

async function toPerson(raw: any, kind: "team" | "guest"): Promise<Rec> {
	return {
		id: `${kind}-${raw.id}`,
		type: "Person",
		data: clean({
			slug: raw.slug,
			name: [raw.firstName, raw.lastName].filter(Boolean).join(" "),
			firstName: raw.firstName,
			lastName: raw.lastName,
			kind,
			position: raw.position,
			summary: raw.summary || raw.bio,
			orcid: raw.orcid,
			email: kind === "team" ? raw.email : undefined,
			image: await toFile(raw.image),
			links: Object.entries(linkKeys).filter(([k]) => raw[k]).map(([k, icon]) => ({ icon, url: raw[k] })),
		}),
	};
}

async function main() {
	const posts = await strapiAll("blog-posts", { "populate[image]": "*", "populate[category]": "*", "populate[blog_tags]": "*", "populate[related]": "*", "populate[seo]": "*", "populate[team_members][populate][image]": "*", "populate[blog_authors][populate][image]": "*" });
	const team = await strapiAll("team-members", { "populate[image]": "*" });
	const guests = await strapiAll("blog-authors", { "populate[image]": "*" });
	const categories = await strapiAll("categories", {});
	const tags = await strapiAll("tags", {});

	const records: Rec[] = [];
	for (const c of categories) records.push({ id: String(c.id), type: "Category", data: { slug: c.slug ?? slugify(c.title), title: c.title } });
	for (const t of tags) records.push({ id: String(t.id), type: "Tag", data: { slug: t.slug ?? slugify(t.title), title: t.title } });
	for (const p of team) records.push(await toPerson(p, "team"));
	for (const p of guests) records.push(await toPerson(p, "guest"));
	for (const p of posts) {
		records.push({
			id: String(p.id),
			type: "BlogPost",
			data: clean({
				slug: p.slug,
				title: p.title,
				excerpt: p.excerpt?.trim(),
				description: p.seo?.metaDescription,
				body: p.body,
				publishedAt: p.publishDate ?? p.publishedAt,
				updatedAt: p.updatedAt,
				doi: p.doi,
				license: "CC-BY-4.0",
				image: await toFile(p.image),
				categoryId: p.category ? String(p.category.id) : undefined,
				tagIds: (p.blog_tags ?? []).map((t: any) => String(t.id)),
				authorIds: [...(p.team_members ?? []).map((a: any) => `team-${a.id}`), ...(p.blog_authors ?? []).map((a: any) => `guest-${a.id}`)],
				relatedIds: (p.related ?? []).map((r: any) => String(r.id)),
			}),
		});
	}

	await mkdir(join(outDir, "files"), { recursive: true });
	await writeFile(join(outDir, "schemas.json"), JSON.stringify(schemas, null, 2));
	await writeFile(join(outDir, "records.ndjson"), records.map((r) => JSON.stringify(r)).join("\n") + "\n");
	for (const [hash, { bytes }] of files) await writeFile(join(outDir, "files", hash), bytes);
	console.log(`${records.length} records and ${files.size} files written to ${outDir}/`);

	if (!push) {
		console.log("Dry run. Pass --push to publish.");
		return;
	}
	if (!UNDERLAY_TOKEN || !COLLECTION) throw new Error("--push needs UNDERLAY_TOKEN and UNDERLAY_BLOG_COLLECTION");

	const api = (path: string) => new URL(`/api/collections/${COLLECTION}${path}`, UNDERLAY_URL);
	const auth = { Authorization: `Bearer ${UNDERLAY_TOKEN}` };

	const head = await fetch(api("/versions/latest"), { headers: auth });
	const base = head.status === 404 ? null : (await head.json()).semver;

	// The site's export is the whole blog, so anything not in it is deleted
	const deletes: { type: string; id: string }[] = [];
	if (base) {
		const current = new Set(records.map((r) => `${r.type}\u0000${r.id}`));
		let cursor: string | undefined;
		do {
			const url = api(`/versions/${base}/manifest`);
			if (cursor) url.searchParams.set("cursor", cursor);
			const manifest = await (await fetch(url, { headers: auth })).json();
			for (const r of manifest.records) if (!current.has(`${r.type}\u0000${r.id}`)) deletes.push({ type: r.type, id: r.id });
			cursor = manifest.pagination.hasMore ? manifest.pagination.nextCursor : undefined;
		} while (cursor);
	}

	const open = await fetch(api("/push"), {
		method: "POST",
		headers: { ...auth, "Content-Type": "application/json" },
		body: JSON.stringify({ base, message: `Blog export ${new Date().toISOString().slice(0, 10)}`, app_id: "trialanderror-site", schemas }),
	});
	if (!open.ok) throw new Error(`Opening push: ${open.status} ${await open.text()}`);
	const session = await open.json();

	for (const hash of session.needed_files ?? []) {
		const file = files.get(hash);
		if (!file) continue;
		const res = await fetch(api(`/files/${hash}`), { method: "PUT", headers: { ...auth, "Content-Type": "application/octet-stream" }, body: new Uint8Array(file.bytes) });
		if (!res.ok) throw new Error(`Uploading ${hash}: ${res.status}`);
	}
	for (const hash of files.keys()) {
		const has = await fetch(api(`/files/${hash}`), { method: "HEAD", headers: auth });
		if (has.ok) continue;
		const file = files.get(hash)!;
		const res = await fetch(api(`/files/${hash}`), { method: "PUT", headers: { ...auth, "Content-Type": "application/octet-stream" }, body: new Uint8Array(file.bytes) });
		if (!res.ok) throw new Error(`Uploading ${hash}: ${res.status}`);
	}

	const batch = 500;
	for (let i = 0; i < records.length; i += batch) {
		const res = await fetch(api(`/push/${session.session_id}/records`), {
			method: "POST",
			headers: { ...auth, "Content-Type": "application/x-ndjson" },
			body: records.slice(i, i + batch).map((r) => JSON.stringify(r)).join("\n"),
		});
		if (!res.ok) throw new Error(`Uploading records: ${res.status} ${await res.text()}`);
	}
	if (deletes.length) {
		const res = await fetch(api(`/push/${session.session_id}/deletes`), {
			method: "POST",
			headers: { ...auth, "Content-Type": "application/x-ndjson" },
			body: deletes.map((d) => JSON.stringify(d)).join("\n"),
		});
		if (!res.ok) throw new Error(`Uploading deletes: ${res.status} ${await res.text()}`);
	}

	const commit = await fetch(api(`/push/${session.session_id}/commit`), { method: "POST", headers: auth });
	if (commit.status === 409) {
		console.log("No changes since the last version.");
		return;
	}
	if (!commit.ok) throw new Error(`Commit: ${commit.status} ${await commit.text()}`);
	console.log("Published", await commit.json());
}

await main();
