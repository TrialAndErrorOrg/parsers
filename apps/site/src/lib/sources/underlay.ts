import { UNDERLAY_TOKEN, UNDERLAY_URL } from "astro:env/server";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export interface UnderlayRecord<T = any> {
	id: string;
	type: string;
	data: T;
}

export interface UnderlayFile {
	$file: string;
	fileName?: string;
	mimeType?: string;
	originalUrl?: string;
}

const headers = (): Record<string, string> => (UNDERLAY_TOKEN ? { Authorization: `Bearer ${UNDERLAY_TOKEN}` } : {});

/**
 * Fetch from Underlay, waiting and trying again when it says to slow down.
 * Without a token, reads are limited to 60 a minute, which a build with
 * empty caches goes over.
 */
async function underlayFetch(url: URL | string, attempt = 0): Promise<Response> {
	const response = await fetch(url, { headers: headers() });
	if (response.status !== 429 || attempt >= 6) return response;
	const wait = Number(response.headers.get("retry-after")) * 1000 || 2 ** attempt * 2000;
	await new Promise((resolve) => setTimeout(resolve, Math.min(wait, 60_000)));
	return underlayFetch(url, attempt + 1);
}

/** Every record of a collection's latest version, grouped by type */
export async function getCollection(owner: string, slug: string, version = "latest") {
	const url = new URL(`/api/collections/${owner}/${slug}/versions/${version}/records.ndjson`, UNDERLAY_URL);
	const response = await underlayFetch(url);
	if (!response.ok) throw new Error(`Underlay ${response.status} for ${url.pathname}`);

	const text = await response.text();
	const expected = Number(response.headers.get("x-underlay-record-count"));
	const records = text
		.split("\n")
		.filter(Boolean)
		.map((line) => JSON.parse(line) as UnderlayRecord);
	if (expected && records.length !== expected) {
		throw new Error(`Underlay stream for ${owner}/${slug} was cut off: ${records.length} of ${expected} records`);
	}

	const byType = new Map<string, UnderlayRecord[]>();
	for (const record of records) {
		const list = byType.get(record.type) ?? [];
		list.push(record);
		byType.set(record.type, list);
	}
	return byType;
}

/** The durable API locator of a file. It redirects to a short-lived download URL */
export const fileUrl = (owner: string, slug: string, file: UnderlayFile) =>
	new URL(`/api/collections/${owner}/${slug}/files/${file.$file.replace(/^sha256:/, "")}`, UNDERLAY_URL).href;

/** Download a file's contents, for build-time use */
export async function fetchFile(owner: string, slug: string, file: UnderlayFile) {
	const response = await underlayFetch(fileUrl(owner, slug, file));
	if (!response.ok) throw new Error(`Underlay ${response.status} for file ${file.$file}`);
	return response;
}

// Files are named by their hash, so a copy on disk never goes stale
const cacheDir = path.resolve("node_modules/.cache/underlay");
let active = 0;
const waiting: (() => void)[] = [];

/** A text file's contents, downloaded at most 8 at a time and cached between builds */
export async function fetchFileText(owner: string, slug: string, file: UnderlayFile) {
	const cached = path.join(cacheDir, file.$file.replace(/^sha256:/, ""));
	try {
		return await readFile(cached, "utf8");
	} catch {}

	if (active >= 8) await new Promise<void>((resolve) => waiting.push(resolve));
	active++;
	try {
		const text = await (await fetchFile(owner, slug, file)).text();
		await mkdir(cacheDir, { recursive: true });
		await writeFile(cached, text);
		return text;
	} finally {
		active--;
		waiting.shift()?.();
	}
}
