import { timingSafeEqual } from "node:crypto";
import type { AstroCookies } from "astro";
import { DRAFT_SECRET } from "astro:env/server";

/*
 * Draft previews. Strapi's preview button opens /api/draft?secret=...&slug=...
 * That sets a short-lived cookie and redirects to /preview/<type>/<slug>,
 * the only pages rendered on request instead of at build time.
 */

const COOKIE = "draft";

export function isValidSecret(secret: string | null | undefined) {
	if (!DRAFT_SECRET || !secret) return false;
	const a = Buffer.from(secret);
	const b = Buffer.from(DRAFT_SECRET);
	return a.length === b.length && timingSafeEqual(a, b);
}

export function allowPreview(cookies: AstroCookies) {
	cookies.set(COOKIE, DRAFT_SECRET!, {
		path: "/preview",
		httpOnly: true,
		secure: import.meta.env.PROD,
		sameSite: "lax",
		maxAge: 60 * 60,
	});
}

export const canPreview = (cookies: AstroCookies) => isValidSecret(cookies.get(COOKIE)?.value);
