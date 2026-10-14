/*
 * Copies the blog out of Strapi into site-content, where /admin edits it:
 *
 *   blog/<slug>.md          posts, Markdown with the fields as frontmatter
 *   people/<slug>.yaml      team members and guest authors, one file per person
 *   categories/<slug>.yaml
 *   uploads/blog/<slug>/    each post's cover and inline images
 *   uploads/people/         portraits
 *
 *   pnpm exec varlock run -- node scripts/blog-to-content.ts            # into ../../../site-content
 *   pnpm exec varlock run -- node scripts/blog-to-content.ts <dir>
 *
 * Only reads Strapi. Run it again to start over: it overwrites what it wrote.
 * Strapi keeps team members and guest authors apart, and some people are both;
 * they become one person (same ORCID iD, or else the same name), whose other
 * slugs are kept as `aliases` so /blog/author/<old slug> still redirects.
 * Post bodies were HTML, much of it pasted from Word; they become Markdown.
 * Images become WebP of at most 2400 pixels, as uploads in /admin do.
 */

import { mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Element, Nodes as HastNodes } from "hast";
import { toHtml } from "hast-util-to-html";
import rehypeParse from "rehype-parse";
import rehypeRemark from "rehype-remark";
import remarkGfm from "remark-gfm";
import remarkStringify from "remark-stringify";
import sharp from "sharp";
import { unified } from "unified";
import { stringify } from "yaml";

const STRAPI_URL = process.env.STRAPI_URL ?? "https://cms.trialanderror.org";
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(process.argv[2] ?? join(here, "../../../../site-content"));

// Files this large stay where they are (GitHub refuses files over 100 MB, and video doesn't belong in git)
const MAX_COPY = 25 * 1024 * 1024;

async function strapiAll(path: string, params: Record<string, string>) {
	const all: any[] = [];
	for (let page = 1; ; page++) {
		const url = new URL(`/api/${path}`, STRAPI_URL);
		for (const [k, v] of Object.entries({ ...params, "pagination[page]": String(page), "pagination[pageSize]": "100" })) url.searchParams.set(k, v);
		const res = await fetch(url, { headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}, signal: AbortSignal.timeout(60_000) });
		if (!res.ok) throw new Error(`Strapi ${res.status} for ${url}`);
		const json = await res.json();
		all.push(...json.data.map(flatten));
		if (page >= json.meta.pagination.pageCount) return all;
	}
}

function flatten(value: any): any {
	if (Array.isArray(value)) return value.map(flatten);
	if (value === null || typeof value !== "object") return value;
	if ("data" in value && Object.keys(value).length <= 2) return flatten(value.data);
	if ("attributes" in value && "id" in value) return flatten({ id: value.id, ...value.attributes });
	return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, flatten(v)]));
}

const nameKey = (name: string) =>
	name
		.normalize("NFKD")
		.replace(/\p{M}/gu, "")
		.toLowerCase()
		.split(/\s+/)
		.filter(Boolean)
		.join(" ");
const slugify = (text: string) =>
	nameKey(text)
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-|-$/g, "");
const orcidId = (orcid?: string) => orcid?.match(/\d{4}-\d{4}-\d{4}-\d{3}[\dX]/i)?.[0].toUpperCase();
const clean = <T extends Record<string, unknown>>(o: T) =>
	Object.fromEntries(Object.entries(o).filter(([, v]) => v !== null && v !== undefined && v !== "" && !(Array.isArray(v) && !v.length))) as T;

/** Alt text Strapi filled with the file name says nothing */
const altText = (alt?: string | null) => (alt && !/\.(?:jpe?g|png|gif|webp|avif|tiff?)$/i.test(alt.trim()) ? alt.trim() : undefined);

const copied = new Map<string, string>();
const skipped: string[] = [];

/** Downloads a Strapi file into uploads/<folder>/ and returns its path on the site, or undefined when it stays remote */
async function copy(url: string, folder: string, name?: string): Promise<string | undefined> {
	const absolute = new URL(url, STRAPI_URL).href.replace(/\?.*$/, "");
	const known = copied.get(absolute);
	if (known) return known;
	const res = await fetch(absolute, { signal: AbortSignal.timeout(120_000) });
	if (!res.ok) throw new Error(`${res.status} for ${absolute}`);
	const size = Number(res.headers.get("content-length") ?? 0);
	if (size > MAX_COPY) {
		await res.body?.cancel();
		skipped.push(`${absolute} (${Math.round(size / 1024 / 1024)} MB)`);
		return undefined;
	}
	const bytes = Buffer.from(await res.arrayBuffer());
	const base = slugify((name ?? absolute.split("/").pop()!).replace(/\.[^.]+$/, "").replace(/_[0-9a-f]{10}$/, "")) || "file";
	const type = res.headers.get("content-type") ?? "";
	let file: string;
	let data: Buffer = bytes;
	if (/^image\/(?:jpeg|png|webp|avif|tiff)/.test(type)) {
		file = `${base}.webp`;
		data = await sharp(bytes).rotate().resize({ width: 2400, height: 2400, fit: "inside", withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
	} else {
		file = `${base}${absolute.match(/\.[a-z0-9]+$/i)?.[0].toLowerCase() ?? ""}`;
	}
	await mkdir(join(out, "uploads", folder), { recursive: true });
	await writeFile(join(out, "uploads", folder, file), data);
	const path = `/uploads/${folder}/${file}`;
	copied.set(absolute, path);
	return path;
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

/** Elements Markdown has no syntax for, kept as HTML */
const keepAsHtml = new Set(["video", "iframe", "sup", "sub"]);

async function toMarkdown(html: string, folder: string) {
	const tree = unified().use(rehypeParse, { fragment: true }).parse(html);
	// Download Strapi files the body points at, and drop Word's leftovers
	const visit = async (node: HastNodes) => {
		if (node.type === "text") node.value = node.value.replace(/\u00a0/g, " ");
		if (node.type === "element" || node.type === "root") {
			// Two line breaks in a row are a new paragraph
			node.children = node.children.flatMap((child) => (child.type === "element" && child.tagName === "p" ? splitParagraph(child) : [child]));
			// Word leaves paragraphs that hold nothing but spaces and line breaks, and line breaks that end paragraphs
			node.children = node.children.filter((child) => !(child.type === "element" && child.tagName === "p" && isBlank(child)));
			// Word's footnote links point at anchors Markdown doesn't keep
			node.children = node.children.flatMap((child) =>
				child.type === "element" && child.tagName === "a" && String(child.properties.href ?? "").startsWith("#_ftn") ? child.children : [child],
			);
		}
		if (node.type === "element") {
			while (node.tagName === "p" && isBreak(node.children.at(-1))) node.children.pop();
			if (node.tagName === "video") {
				const { src, poster } = node.properties;
				node.properties = { src, poster, controls: true };
			}
			for (const attr of ["src", "href"] as const) {
				const value = node.properties[attr];
				if (typeof value === "string" && value.startsWith(`${STRAPI_URL}/uploads/`)) {
					node.properties[attr] = (await copy(value, folder)) ?? value;
				}
			}
			delete node.properties.className;
			delete node.properties.style;
		}
		if ("children" in node) for (const child of node.children) await visit(child as HastNodes);
	};
	unwrapSpans(tree);
	await visit(tree);
	const asHtml = (_state: unknown, node: Element) => ({ type: "html" as const, value: toHtml(node) });
	const mdast = await unified()
		.use(rehypeRemark, {
			handlers: {
				...Object.fromEntries([...keepAsHtml].map((tag) => [tag, asHtml])),
				div: (state: any, node: Element) => (node.children.some((c) => c.type === "element" && keepAsHtml.has(c.tagName)) ? asHtml(state, node) : state.all(node)),
			},
		})
		.run(tree as any);
	liftSpaces(mdast as any);
	const markdown = unified().use(remarkGfm).use(remarkStringify, { bullet: "-", emphasis: "*", strong: "*", rule: "-" }).stringify(mdast as any);
	return String(markdown)
		.replace(/\u00a0/g, " ")
		.replace(/\n{3,}/g, "\n\n")
		.trim();
}

/** Word's spans only carried styles, which are gone */
function unwrapSpans(node: HastNodes) {
	if (!("children" in node)) return;
	for (const child of node.children) unwrapSpans(child as HastNodes);
	node.children = node.children.flatMap((child: any) => (child.type === "element" && ["span", "font", "o:p"].includes(child.tagName) ? child.children : [child]));
}

function splitParagraph(p: Element): Element[] {
	const parts: Element["children"][] = [[]];
	const children = p.children;
	for (let i = 0; i < children.length; i++) {
		const child = children[i];
		if (child.type === "element" && child.tagName === "br") {
			let j = i + 1;
			while (j < children.length && children[j].type === "text" && !(children[j] as { value: string }).value.trim()) j++;
			const next = children[j];
			if (next?.type === "element" && next.tagName === "br") {
				parts.push([]);
				i = j;
				continue;
			}
		}
		parts.at(-1)!.push(child);
	}
	return parts.map((children) => ({ ...p, children }));
}

const isBreak = (node?: HastNodes) => !!node && ((node.type === "element" && node.tagName === "br") || (node.type === "text" && !node.value.trim()));
const isBlank = (node: Element): boolean =>
	node.children.every((child) => isBreak(child) || (child.type === "element" && child.tagName !== "img" && isBlank(child)));

/**
 * Moves spaces at the edges of emphasis and bold outside them: "*please *"
 * isn't valid Markdown, and would be written as "*please&#x20;*"
 */
function liftSpaces(node: { type: string; value?: string; children?: any[] }) {
	if (!node.children) return;
	for (let i = 0; i < node.children.length; i++) {
		const child = node.children[i];
		liftSpaces(child);
		if (!["emphasis", "strong", "delete"].includes(child.type) || !child.children.length) continue;
		const first = child.children[0];
		const last = child.children.at(-1);
		if (first.type === "text" && /^\s/.test(first.value)) {
			first.value = first.value.trimStart();
			node.children.splice(i, 0, { type: "text", value: " " });
			i++;
		}
		if (last.type === "text" && /\s$/.test(last.value)) {
			last.value = last.value.trimEnd();
			node.children.splice(i + 1, 0, { type: "text", value: " " });
		}
		if (child.children.every((c: any) => c.type === "text" && !c.value)) node.children.splice(i, 1);
	}
}

interface PersonFile {
	slug: string;
	aliases: string[];
	data: Record<string, unknown>;
	team: boolean;
}

async function main() {
	const posts = await strapiAll("blog-posts", {
		"populate[image]": "*",
		"populate[category]": "*",
		"populate[blog_tags]": "*",
		"populate[related]": "*",
		"populate[seo]": "*",
		"populate[team_members]": "*",
		"populate[blog_authors]": "*",
	});
	const team = await strapiAll("team-members", { "populate[image]": "*" });
	const guests = await strapiAll("blog-authors", { "populate[image]": "*" });
	const categories = await strapiAll("categories", {});

	for (const folder of ["blog", "people", "categories", "uploads/blog", "uploads/people"]) await rm(join(out, folder), { recursive: true, force: true });
	for (const folder of ["blog", "people", "categories"]) await mkdir(join(out, folder), { recursive: true });

	// People: team records first, so a merged person keeps the team details
	const people: (PersonFile & { orcid?: string; name: string; records: string[] })[] = [];
	const recordToPerson = new Map<string, (typeof people)[number]>();
	// Guests who wrote nothing are leftovers (Strapi has a "Test Test-slug")
	const wrote = new Set(posts.flatMap((p) => (p.blog_authors ?? []).map((a: any) => a.id)));
	const records = [
		...team.map((raw) => ({ raw, kind: "team" as const })),
		...guests.filter((raw) => wrote.has(raw.id)).map((raw) => ({ raw, kind: "guest" as const })),
	];
	for (const { raw, kind } of records) {
		const name = [raw.firstName, raw.lastName].filter(Boolean).join(" ").trim();
		const orcid = orcidId(raw.orcid);
		// Strapi made slugs like `a-1` when one was missing; the name says more
		const own = raw.slug && !/^[a-z]-\d+$/.test(raw.slug) ? raw.slug : slugify(name);
		let person = people.find((p) => (orcid && p.orcid === orcid) || (nameKey(p.name) === nameKey(name) && !(orcid && p.orcid && p.orcid !== orcid)));
		if (!person) {
			person = { slug: own, aliases: [], name, orcid, team: false, records: [], data: {} };
			people.push(person);
		}
		person.records.push(own);
		if (raw.slug && raw.slug !== own) person.records.push(raw.slug);
		person.orcid ??= orcid;
		person.team ||= kind === "team";
		const d = person.data;
		d.firstName ??= raw.firstName?.trim();
		d.lastName ??= raw.lastName?.trim();
		d.position ??= raw.position || undefined;
		if (raw.show_pronouns) d.pronouns ??= raw.pronouns || undefined;
		if (kind === "team") d.email ??= raw.email || undefined;
		const summary = raw.summary || raw.bio;
		if (summary && !d.summary) d.summary = await toMarkdown(summary, "people");
		if (raw.image?.url && !d.image) d.image = await copy(raw.image.url, "people", own);
		const links = (d.links as { icon: string; url: string }[] | undefined) ?? [];
		for (const [key, icon] of Object.entries(linkKeys)) {
			if (raw[key] && !links.some((l) => l.icon === icon)) links.push({ icon, url: String(raw[key]).trim() });
		}
		d.links = links;
		recordToPerson.set(`${kind}-${raw.id}`, person);
	}
	const taken = new Set<string>();
	for (const person of people) {
		const slugs = [...new Set(person.records)];
		// The shortest slug, so `hobma` wins over Strapi's de-duplicated `hobma-1`
		// Strapi de-duplicated slugs with a number (`hobma-1`); the plain one is nicer when it's free
		person.slug =
			[...new Set([...slugs.map((s) => s.replace(/-\d+$/, "")), ...slugs])]
				.filter((s) => s && !/^[a-z](?:-\d+)?$/.test(s))
				.sort((a, b) => a.length - b.length)
				.find((s) => !taken.has(s)) ?? slugify(person.name);
		person.aliases = slugs.filter((s) => s !== person.slug);
		for (const s of [person.slug, ...person.aliases]) taken.add(s);
		const { firstName, lastName, ...rest } = person.data;
		const file = clean({
			firstName,
			lastName,
			team: person.team,
			...rest,
			orcid: person.orcid ? `https://orcid.org/${person.orcid}` : undefined,
			aliases: person.aliases,
		});
		await writeFile(join(out, "people", `${person.slug}.yaml`), stringify(file, { lineWidth: 0 }));
	}

	for (const c of categories) {
		await writeFile(join(out, "categories", `${c.slug ?? slugify(c.title)}.yaml`), stringify({ title: c.title }));
	}

	for (const p of posts) {
		const folder = `blog/${p.slug}`;
		const frontmatter = clean({
			title: p.title.trim(),
			date: new Date(p.publishDate ?? p.publishedAt).toISOString(),
			excerpt: p.excerpt?.trim(),
			description: p.seo?.metaDescription?.trim(),
			image: p.image?.url ? await copy(p.image.url, folder, p.image.name) : undefined,
			imageAlt: altText(p.image?.alternativeText),
			category: p.category ? (p.category.slug ?? slugify(p.category.title)) : undefined,
			tags: (p.blog_tags ?? []).map((t: any) => t.title.trim()),
			authors: [
				...(p.team_members ?? []).map((a: any) => recordToPerson.get(`team-${a.id}`)?.slug),
				...(p.blog_authors ?? []).map((a: any) => recordToPerson.get(`guest-${a.id}`)?.slug),
			].filter((s, i, all): s is string => !!s && all.indexOf(s) === i),
			doi: p.doi?.trim(),
			related: (p.related ?? []).map((r: any) => r.slug).filter(Boolean),
		});
		const body = p.body ? await toMarkdown(p.body, folder) : "";
		await writeFile(join(out, "blog", `${p.slug}.md`), `---\n${stringify(frontmatter, { lineWidth: 0 })}---\n\n${body}\n`);
	}

	console.log(`${posts.length} posts, ${people.length} people (from ${records.length} Strapi records), ${categories.length} categories, ${copied.size} files into ${out}`);
	if (skipped.length) console.log(`Left on Strapi, too large to copy:\n  ${skipped.join("\n  ")}`);
}

await main();
