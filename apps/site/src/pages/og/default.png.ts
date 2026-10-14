import type { APIRoute } from "astro";
import { defaultCard, renderPng } from "~/lib/og";
import { site } from "~/lib/settings";

export const GET: APIRoute = () => renderPng(defaultCard(site.description));
