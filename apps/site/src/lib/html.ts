import GithubSlugger from "github-slugger";
import { stripHtml } from "./format";

export interface Heading {
	depth: 2 | 3;
	slug: string;
	text: string;
}

/**
 * Tidy rich text from the CMS: drop editor leftovers and inline styles, keep
 * one h1 per page, give headings ids for the table of contents, and turn
 * embedded tweets into plain links.
 */
export function prepareBody(html: string, { dropCap = false } = {}) {
	const slugger = new GithubSlugger();
	const headings: Heading[] = [];

	let body = html
		.replace(/<!--.*?-->/gs, "")
		.replace(/<p>(&nbsp;|\s)*<\/p>/g, "")
		.replace(/&nbsp;/g, " ")
		.replace(/(<\w{1,10}[^>]*?)\sstyle="[^"]*"/g, "$1")
		.replace(/<(\/?)h1\b/g, "<$1h2")
		.replace(/<oembed url="([^"]+)"><\/oembed>/g, '<a href="$1">$1</a>')
		.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gs, (_, tag: string, attrs: string, content: string) => {
			const text = stripHtml(content);
			const slug = slugger.slug(text);
			headings.push({ depth: tag === "h2" ? 2 : 3, slug, text });
			return `<${tag} id="${slug}"${attrs.replace(/\sid="[^"]*"/, "")}>${content}</${tag}>`;
		});

	if (dropCap) {
		body = body.replace(/<p>\s*([A-Z])/, '<p><span class="lettrine">$1</span>');
	}

	return { body, headings };
}
