import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { escapeXml } from "~/lib/format";
import { site } from "~/lib/settings";
import { articleUrl, getArticles } from "~/lib/sources/journal";

export const GET: APIRoute = async (context) =>
	rss({
		title: site.journal.title,
		description: site.journal.description,
		site: new URL("/journal", context.site),
		xmlns: { dc: "http://purl.org/dc/elements/1.1/" },
		customData: "<language>en</language>",
		items: (await getArticles()).map((article) => ({
			title: article.title,
			link: articleUrl(article.slug),
			pubDate: new Date(article.date),
			description: article.description,
			categories: [article.kind, ...article.issues.map((i) => i.title)].filter((c): c is string => !!c),
			customData: [
				...article.authors.map((a) => `<dc:creator>${escapeXml(a.name)}</dc:creator>`),
				article.doi && `<dc:identifier>https://doi.org/${escapeXml(article.doi)}</dc:identifier>`,
			]
				.filter(Boolean)
				.join(""),
		})),
	});
