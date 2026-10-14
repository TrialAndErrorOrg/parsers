import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

/*
 * Pages built from sections. Each file in src/content/pages is one page:
 * index.yaml is the homepage, about.yaml is /about, and so on. A page is a
 * list of sections, drawn top to bottom. Each section type is a component in
 * src/components/sections. Text fields accept Markdown.
 */

const button = z.object({ label: z.string(), url: z.string(), style: z.enum(["accent", "plain"]).default("accent") });
const background = z.enum(["paper", "accent", "accent-soft", "journal", "journal-soft"]).default("paper");

const section = z.discriminatedUnion("type", [
	z.object({
		type: z.literal("hero"),
		title: z.string(),
		subtitle: z.string().optional(),
		text: z.string().optional(),
		buttons: z.array(button).default([]),
	}),
	z.object({
		type: z.literal("text"),
		id: z.string().optional(),
		title: z.string().optional(),
		body: z.string(),
		background,
	}),
	z.object({
		type: z.literal("features"),
		id: z.string().optional(),
		title: z.string().optional(),
		items: z.array(
			z.object({
				title: z.string(),
				body: z.string(),
				link: z.object({ label: z.string(), url: z.string() }).optional(),
			}),
		),
	}),
	z.object({
		type: z.literal("latest-posts"),
		title: z.string().default("From the Blog"),
		count: z.number().int().positive().default(4),
	}),
	z.object({
		type: z.literal("latest-articles"),
		title: z.string().default("From the Journal"),
		count: z.number().int().positive().default(4),
	}),
	z.object({
		type: z.literal("team"),
		id: z.string().optional(),
		title: z.string().default("Meet the Team"),
	}),
	z.object({
		type: z.literal("newsletter"),
	}),
	z.object({
		type: z.literal("buttons"),
		buttons: z.array(button),
	}),
]);

export type Section = z.infer<typeof section>;

const pages = defineCollection({
	loader: glob({ pattern: "**/*.yaml", base: "./src/content/pages" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		/** Show the title as a big heading above the sections */
		showTitle: z.boolean().default(false),
		sections: z.array(section),
	}),
});

export const collections = { pages };
