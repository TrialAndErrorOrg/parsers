import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import satori from "satori";
import sharp from "sharp";
import { formatDate } from "./format";
import { colors } from "./theme";

/*
 * Share images (Open Graph cards), drawn at build time with Satori and
 * turned into PNGs by sharp. Colours come from theme.css via ./theme.
 */

const WIDTH = 1200;
const HEIGHT = 630;
const FRAME = 6;

type Child = Node | string | number | false | null | undefined;
interface Node {
	type: string;
	props: Record<string, unknown>;
}

/** A Satori element. Divs default to flex, which Satori requires for more than one child */
function h(type: string, props: Record<string, unknown> = {}, ...children: Child[]): Node {
	const style = type === "div" ? { display: "flex", ...(props.style as object) } : props.style;
	return { type, props: { ...props, style, children: children.filter((c) => c !== false && c != null && c !== "") } };
}

const FONTS = [
	{ file: "Overpass-Black.ttf", name: "Overpass", weight: 900 },
	{ file: "Overpass-Bold.ttf", name: "Overpass", weight: 700 },
	{ file: "OpenSans-Regular.ttf", name: "Open Sans", weight: 400 },
] as const;

let fonts: Promise<{ name: string; data: Buffer; weight: 400 | 700 | 900 }[]> | undefined;
const loadFonts = () =>
	(fonts ??= Promise.all(
		FONTS.map(async ({ file, name, weight }) => ({ name, weight, data: await readFile(resolve("src/assets/fonts", file)) })),
	));

/** Rendered cards are kept here, keyed on their content, so unchanged cards are not drawn again */
const CACHE = resolve("node_modules/.astro/og");

export async function renderPng(node: Node) {
	const cached = resolve(CACHE, `${createHash("sha1").update(JSON.stringify([FONTS, node])).digest("hex")}.png`);
	const png = await readFile(cached).catch(async () => {
		const svg = await satori(node as any, { width: WIDTH, height: HEIGHT, fonts: await loadFonts() });
		const png = await sharp(Buffer.from(svg)).png({ palette: true, effort: 1 }).toBuffer();
		await mkdir(CACHE, { recursive: true });
		await writeFile(cached, png);
		return png;
	});
	return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
}

const logo = (fill: string) =>
	`data:image/svg+xml,${encodeURIComponent(
		`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177 177.8" fill="${fill}"><path d="M88.5,147.5c0-61.7,0-61.7,0-61.7c0-8.5,6.9-16.2,16.2-16.2l0,0c30.8,0,30.8,0,30.8,0c0,15.4,0,15.4,0,15.4c-23.1,0-23.1,0-23.1,0c-4.6,0-7.7,3.9-7.7,8.5c0,38.5,0,38.5,0,38.5c51.6,0,51.6,0,51.6,0c0,15.4,0,15.4,0,15.4H88.5V147.5z"/><path d="M46.1,84.3L46.1,84.3c0-7.7,6.9-14.6,14.6-14.6c2.3,0,2.3,0,2.3,0c0,77.9,0,77.9,0,77.9c-17,0-17,0-17,0V84.3H46.1z"/><path d="M58.4,46.5c-16.2,0-16.2,0-16.2,0c-21.6,0-21.6,0-21.6,0l0,0c0-9.3,6.9-16.2,16.2-16.2c119.5,0,119.5,0,119.5,0c0,15.4,0,15.4,0,15.4L58.4,46.5z"/></svg>`,
	)}`;

/** Each brand's name, as two stacked boxes, and its colours */
const BRANDS = {
	center: { name: ["Center of", "Trial & Error."], color: "accent", soft: "accent-soft", text: "ink" },
	journal: { name: ["Journal of", "Trial & Error."], color: "journal", soft: "journal-soft", text: "paper" },
	jrn: { name: ["Journal for", "Reproducibility in Neuroscience."], color: "jrn", soft: "jrn-soft", text: "paper" },
} as const;

type Brand = keyof typeof BRANDS;

/** The stacked "Center of / Trial & Error." label boxes from the old blog header */
function wordmark(kind: Brand, scale = 1.2) {
	const brand = BRANDS[kind];
	const box = {
		backgroundColor: colors[brand.color],
		color: colors[brand.text],
		border: `${4 * scale}px solid ${colors.ink}`,
		padding: `${10 * scale}px ${16 * scale}px ${4 * scale}px`,
		fontFamily: "Overpass",
		fontWeight: 900,
		fontSize: 30 * scale,
		lineHeight: 1,
		letterSpacing: -0.5 * scale,
	};
	return h(
		"div",
		{ style: { flexDirection: "column", alignItems: "flex-start" } },
		h("div", { style: { ...box, borderBottom: "none", paddingRight: 40 * scale } }, brand.name[0]),
		h("div", { style: box }, brand.name[1]),
	);
}

function label(text: string, kind: Brand) {
	return h(
		"div",
		{
			style: {
				backgroundColor: colors[BRANDS[kind].soft],
				border: `3px solid ${colors.ink}`,
				padding: "8px 16px 3px",
				fontFamily: "Overpass",
				fontWeight: 700,
				fontSize: 24,
				color: colors.ink,
			},
		},
		text,
	);
}

/** Largest title size that fits the space, judged by a rough word wrap */
function titleSize(title: string, width: number, height: number) {
	const words = title.split(/\s+/);
	for (const size of [92, 80, 70, 62, 54, 48, 42]) {
		const perLine = width / (size * 0.52);
		let lines = 1;
		let used = 0;
		for (const word of words) {
			if (used && used + 1 + word.length > perLine) {
				lines++;
				used = word.length;
			} else used += (used ? 1 : 0) + word.length;
		}
		if (lines * size * 1.05 <= height) return size;
	}
	return 42;
}

/** The framed white card on a coloured background that every share image uses */
function frame(background: string, ...children: Child[]) {
	return h(
		"div",
		{ style: { width: "100%", height: "100%", backgroundColor: background, fontFamily: "Open Sans" } },
		h(
			"div",
			{
				style: {
					position: "absolute",
					top: 36,
					left: 36,
					right: 52,
					bottom: 52,
					flexDirection: "column",
					justifyContent: "space-between",
					backgroundColor: colors.paper,
					border: `${FRAME}px solid ${colors.ink}`,
					boxShadow: `16px 16px 0 ${colors.ink}`,
					padding: "40px 52px",
					color: colors.ink,
				},
			},
			...children,
		),
	);
}

const TITLE_WIDTH = WIDTH - 36 - 52 - 2 * FRAME - 104;

function title(text: string) {
	const size = titleSize(text, TITLE_WIDTH, 260);
	return h(
		"div",
		{
			style: {
				fontFamily: "Overpass",
				fontWeight: 900,
				fontSize: size,
				lineHeight: 1.05,
				letterSpacing: -size * 0.03,
				lineClamp: 4,
				paddingTop: 8,
			},
		},
		text,
	);
}

function byline(authors: string, right?: string) {
	return h(
		"div",
		{ style: { justifyContent: "space-between", alignItems: "flex-end", gap: 32, fontSize: 28 } },
		h("div", { style: { flexShrink: 1, lineClamp: 1 } }, authors),
		right && h("div", { style: { flexShrink: 0, fontFamily: "Overpass", fontWeight: 700, fontSize: 24, color: colors.muted } }, right),
	);
}

function top(kind: Brand, tag: string | undefined, date: string | undefined) {
	return h(
		"div",
		{ style: { justifyContent: "space-between", alignItems: "flex-start" } },
		wordmark(kind),
		h(
			"div",
			{ style: { flexDirection: "column", alignItems: "flex-end", gap: 12 } },
			tag && label(tag, kind),
			date && h("div", { style: { fontFamily: "Overpass", fontWeight: 700, fontSize: 26 } }, formatDate(date)),
		),
	);
}

const names = (list: { name: string }[], max = 3) => {
	const all = list.map((a) => a.name);
	if (all.length > max) return `${all.slice(0, max).join(", ")} et al.`;
	return all.length <= 1 ? (all[0] ?? "") : `${all.slice(0, -1).join(", ")} & ${all.at(-1)}`;
};

export function blogCard(post: { title: string; date: string; authors: { name: string }[]; category?: { title: string } }) {
	return frame(
		colors.accent,
		top("center", post.category?.title ?? "Blog", post.date),
		title(post.title),
		byline(post.authors.length ? `By ${names(post.authors)}` : "", "trialanderror.org/blog"),
	);
}

/** A journal article's card, for the Journal of Trial and Error unless another journal is given */
export function articleCard(
	article: { title: string; date: string; authors: { name: string }[]; kind?: string; doi?: string },
	journal: { brand: "journal" | "jrn"; site: string } = { brand: "journal", site: "journal.trialanderror.org" },
) {
	return frame(
		colors[BRANDS[journal.brand].soft],
		top(journal.brand, article.kind, article.date),
		title(article.title),
		byline(names(article.authors), article.doi ? `doi.org/${article.doi}` : journal.site),
	);
}

export function defaultCard(description: string) {
	return frame(
		colors.accent,
		h(
			"div",
			{ style: { justifyContent: "space-between", alignItems: "flex-start" } },
			wordmark("center", 2.4),
			h("div", { style: { backgroundColor: colors.ink, padding: 20 } }, h("img", { src: logo(colors.paper), width: 120, height: 120 })),
		),
		h(
			"div",
			{ style: { justifyContent: "space-between", alignItems: "flex-end", gap: 40 } },
			h("div", { style: { fontSize: 34, lineHeight: 1.3, maxWidth: 640 } }, description),
			h("div", { style: { fontFamily: "Overpass", fontWeight: 700, fontSize: 26, color: colors.muted } }, "trialanderror.org"),
		),
	);
}
