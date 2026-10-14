import { BLOG_SOURCE } from "astro:env/server";
import type { Person, Post } from "../types";
import * as strapiSource from "./blog-strapi";

/*
 * Where blog content comes from. Strapi today, set BLOG_SOURCE=underlay once
 * the blog is published there (see blog-underlay.ts). Drafts always come from
 * Strapi, since Underlay only holds published versions.
 */

const source = BLOG_SOURCE === "underlay" ? await import("./blog-underlay") : strapiSource;

let posts: Promise<Post[]> | undefined;

/** All published posts, newest first. Fetched once per build */
export function getPosts(): Promise<Post[]> {
	posts ??= source.getPosts().then((all) => all.sort((a, b) => b.date.localeCompare(a.date)));
	return posts;
}

export async function getPost(slug: string) {
	return (await getPosts()).find((post) => post.slug === slug);
}

export const getDraft = strapiSource.getDraft;

let team: Promise<Person[]> | undefined;
export function getTeam(): Promise<Person[]> {
	team ??= source.getTeam();
	return team;
}

/** Everyone who wrote a post, with their posts */
export async function getAuthors() {
	const authors = new Map<string, { person: Person; posts: Post[] }>();
	for (const post of await getPosts()) {
		for (const person of post.authors) {
			if (!person.slug) continue;
			const entry = authors.get(person.slug) ?? { person, posts: [] };
			entry.posts.push(post);
			authors.set(person.slug, entry);
		}
	}
	return [...authors.values()];
}

export async function getTerms(kind: "category" | "tags") {
	const terms = new Map<string, { title: string; slug: string; posts: Post[] }>();
	for (const post of await getPosts()) {
		const list = kind === "category" ? (post.category ? [post.category] : []) : post.tags;
		for (const term of list) {
			const entry = terms.get(term.slug) ?? { ...term, posts: [] };
			entry.posts.push(post);
			terms.set(term.slug, entry);
		}
	}
	return [...terms.values()];
}
