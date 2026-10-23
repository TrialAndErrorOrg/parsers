import type { APIRoute } from "astro";
import { journal } from "~/lib/sources/journal";

// Downloads (PDF, EPUB, Word...) from this site's own domain, passed through from Underlay
export const prerender = false;

export const GET: APIRoute = ({ params }) => journal("jote").serveFile(params.hash ?? "", params.name ?? "");
