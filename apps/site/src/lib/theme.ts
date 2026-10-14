import css from "../styles/theme.css?raw";

type ColorToken = "ink" | "paper" | "accent" | "accent-soft" | "journal" | "journal-soft" | "jrn" | "jrn-soft" | "muted" | "subtle";

/** The colour tokens of src/styles/theme.css, for places CSS does not reach, like share images */
export const colors = Object.fromEntries(
	[...css.matchAll(/--color-([\w-]+):\s*([^;]+);/g)].map(([, name, value]) => [name, value.trim()]),
) as Record<ColorToken, string>;
