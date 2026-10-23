import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { escapeXml } from "~/lib/format";
import { prepareBody } from "~/lib/html";
import { site } from "~/lib/settings";
import { getPosts } from "~/lib/sources/blog";

export const GET: APIRoute = async (context) =>
	rss({
		title: site.blog.title,
		description: site.blog.description,
		site: new URL("/blog", context.site),
		xmlns: { dc: "http://purl.org/dc/elements/1.1/" },
		customData: "<language>en</language>",
		items: (await getPosts()).map((post) => ({
			title: post.title,
			link: `/blog/${post.slug}`,
			pubDate: new Date(post.date),
			description: post.excerpt ?? post.description,
			content: post.body ? prepareBody(post.body).body : undefined,
			categories: [post.category?.title, ...post.tags.map((t) => t.title)].filter((c): c is string => !!c),
			customData: post.authors.map((a) => `<dc:creator>${escapeXml(a.name)}</dc:creator>`).join(""),
		})),
	});
