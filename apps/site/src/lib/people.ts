import { getPosts, getTeam } from "./sources/blog";
import { getArticles } from "./sources/journal";
import type { Article, Person, Post } from "./types";

/*
 * One page per person at /people/<slug>, for team members and blog authors
 * alike. Strapi keeps the team and guest authors in separate collections, and
 * some people are in both (Marcel Hobma is team member `hobma-1` and guest
 * author `hobma`). Records are merged when their ORCID iDs match, or else
 * their full names. Every slug a person had redirects from /blog/author/<slug>,
 * so old author links and draft previews keep working.
 */

export interface Profile {
	slug: string;
	/** The merged person: team details first, then whatever the guest record adds */
	person: Person;
	/** Other slugs this person was known by, which redirect to `slug` */
	aliases: string[];
	posts: Post[];
	articles: Article[];
}

export const peopleUrl = (slug: string) => `/people/${slug}`;

/** The bare iD, 0000-0002-1825-0097, from however it was entered */
const orcidId = (orcid?: string) => orcid?.match(/\d{4}-\d{4}-\d{4}-\d{3}[\dX]/i)?.[0].toUpperCase();

/** Lowercase, without accents and with single spaces, so "David Grüning" equals "David Gruning" */
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

/** The slug a single record is reachable at: its own, or one made from its name */
export const slugOf = (person: Person) => person.slug || slugify(person.name);

/**
 * Link to a person's page. Pages rendered on request (draft previews) skip
 * loading everyone and link the record's own slug under /blog/author, which
 * redirects every slug a person had to their page.
 */
export async function personHref(person: Person, prerendered = true) {
	if (!prerendered) return `/blog/author/${slugOf(person)}`;
	const { byRecord } = await load();
	return peopleUrl(byRecord.get(recordKey(person))?.slug ?? slugOf(person));
}

interface Entry {
	records: Person[];
	posts: Post[];
	articles: Article[];
}

// A team member and a guest author can share a slug, so records are told apart by kind too
const recordKey = (person: Person) => `${person.kind}:${slugOf(person)}`;

let people: Promise<{ profiles: Profile[]; byRecord: Map<string, Profile> }> | undefined;

/** Everyone with a page: team members first, then authors by name */
export async function getPeople() {
	return (await load()).profiles;
}

function load() {
	people ??= build();
	return people;
}

async function build() {
	const entries: Entry[] = [];
	const byOrcid = new Map<string, Entry>();
	const byName = new Map<string, Entry>();
	// The same Strapi record shows up on every post it wrote
	const byRecord = new Map<string, Entry>();

	const find = (person: Person) => {
		const orcid = orcidId(person.orcid);
		const byId = orcid && byOrcid.get(orcid);
		if (byId) return byId;
		// Same name but a different ORCID iD is a different person
		const named = byName.get(nameKey(person.name));
		return named && !(orcid && named.records.some((r) => orcidId(r.orcid) && orcidId(r.orcid) !== orcid)) ? named : undefined;
	};

	const add = (person: Person) => {
		const key = recordKey(person);
		let entry = byRecord.get(key);
		if (entry) return entry;
		entry = find(person);
		if (entry) entry.records.push(person);
		else entries.push((entry = { records: [person], posts: [], articles: [] }));
		const orcid = orcidId(person.orcid);
		if (orcid) byOrcid.set(orcid, entry);
		byName.set(nameKey(person.name), entry);
		byRecord.set(key, entry);
		return entry;
	};

	for (const person of await getTeam()) add(person);
	for (const post of await getPosts()) {
		for (const person of post.authors) {
			const entry = add(person);
			if (!entry.posts.includes(post)) entry.posts.push(post);
		}
	}
	// Journal authors only join people who already have a page. Matched on ORCID
	// iD, or on the exact full name when neither side has a conflicting iD
	for (const article of await getArticles()) {
		for (const author of article.authors) {
			const entry = find({ name: author.name, orcid: author.orcid, kind: "guest", links: [] });
			if (entry && !entry.articles.includes(article)) entry.articles.push(article);
		}
	}

	const profiles: Profile[] = [];
	const bySlug = new Map<string, Profile>();
	const profileByRecord = new Map<string, Profile>();
	const sorted = entries
		.map((entry) => ({ ...entry, person: merge(entry.records) }))
		// Team members keep Strapi's order (by last name)
		.sort((a, b) => team(b.person) - team(a.person) || (team(a.person) ? 0 : a.person.name.localeCompare(b.person.name)));
	for (const { records, person, posts, articles } of sorted) {
		const own = [...new Set(records.map(slugOf))];
		// The shortest slug, so `hobma` wins over Strapi's de-duplicated `hobma-1`
		const slug = [...own].sort((a, b) => a.length - b.length).find((s) => !bySlug.has(s)) ?? slugify(person.name);
		const slugs = [...new Set([...own, ...records.flatMap((r) => r.aliases ?? [])])];
		const profile: Profile = { slug, person: { ...person, slug }, aliases: slugs.filter((s) => s !== slug && !bySlug.has(s)), posts, articles };
		for (const s of [slug, ...profile.aliases]) bySlug.set(s, profile);
		for (const record of records) profileByRecord.set(recordKey(record), profile);
		profiles.push(profile);
	}
	return { profiles, byRecord: profileByRecord };
}

const team = (person: Person) => Number(person.kind === "team");

/** One person from several records, preferring the team record's details */
function merge(records: Person[]): Person {
	const [first, ...rest] = [...records].sort((a, b) => team(b) - team(a));
	const person = { ...first, links: [...first.links] };
	for (const other of rest) {
		person.position ??= other.position;
		person.summary ??= other.summary;
		person.image ??= other.image;
		person.email ??= other.email;
		person.orcid ??= other.orcid;
		person.pronouns ??= other.pronouns;
		for (const link of other.links) if (!person.links.some((l) => l.icon === link.icon)) person.links.push(link);
	}
	const orcid = orcidId(person.orcid);
	if (orcid) person.orcid = `https://orcid.org/${orcid}`;
	return person;
}
