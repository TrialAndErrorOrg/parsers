export const formatDate = (iso: string, style: "long" | "short" = "long") =>
	new Date(iso).toLocaleDateString("en-GB", {
		day: "numeric",
		month: style === "long" ? "long" : "short",
		year: "numeric",
	});

export const listNames = (names: string[]) =>
	names.length <= 1 ? (names[0] ?? "") : `${names.slice(0, -1).join(", ")} & ${names.at(-1)}`;

export const stripHtml = (html: string) =>
	html
		.replace(/<[^>]*>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/\s+/g, " ")
		.trim();

export const readingMinutes = (html: string) => Math.max(1, Math.ceil(stripHtml(html).split(" ").length / 230));

export const escapeXml = (text: string) =>
	text.replace(/[<>&"']/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[c]!);
