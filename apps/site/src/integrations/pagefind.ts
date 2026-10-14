import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { close, createIndex } from "pagefind";

/**
 * Builds the Pagefind search index over the prebuilt pages after each build.
 * Only elements marked data-pagefind-body are indexed, see /search.
 */
export default function pagefind(): AstroIntegration {
	return {
		name: "pagefind",
		hooks: {
			"astro:build:done": async ({ dir, logger }) => {
				const path = fileURLToPath(dir);
				const { index, errors } = await createIndex({ forceLanguage: "en" });
				if (!index) throw new Error(`Pagefind: ${errors.join(", ")}`);
				const added = await index.addDirectory({ path });
				const written = await index.writeFiles({ outputPath: join(path, "pagefind") });
				await close();
				const problems = [...added.errors, ...written.errors];
				if (problems.length) throw new Error(`Pagefind: ${problems.join(", ")}`);
				logger.info(`Indexed ${added.page_count} pages`);
			},
		},
	};
}
