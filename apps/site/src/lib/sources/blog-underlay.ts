import { UNDERLAY_BLOG_COLLECTION } from "astro:env/server";
import type { Person, Post } from "../types";
import { fromRecords } from "./blog-underlay-records";
import { fileUrl, getCollection } from "./underlay";

/*
 * Reads the blog from Underlay, in the shape scripts/blog-to-underlay.ts
 * writes. Selected with BLOG_SOURCE=underlay.
 */

let data: Promise<{ posts: Post[]; team: Person[] }> | undefined;

function load() {
	const [owner, slug] = UNDERLAY_BLOG_COLLECTION.split("/");
	// originalUrl (Strapi) first: Astro fetches images anonymously at build, and
	// anonymous Underlay reads are limited to 60 a minute
	data ??= getCollection(owner, slug).then((byType) => fromRecords(byType, (file) => file.originalUrl ?? fileUrl(owner, slug, file)));
	return data;
}

export const getPosts = async () => (await load()).posts;
export const getTeam = async () => (await load()).team;
