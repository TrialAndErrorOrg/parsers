import { createReadStream, existsSync, statSync } from "node:fs";
import { cp } from "node:fs/promises";
import { dirname, extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";

/*
 * What editors change lives in its own repository, TrialAndErrorOrg/site-content, so saving in
 * /admin doesn't add commits here. Check it out next to this repository
 * (~/Projects/cote/site-content beside ~/Projects/cote/trialanderror) or point CONTENT_DIR at it,
 * relative to apps/site. Everything in it is read at build time:
 *
 *   pages/      section-built pages (src/content.config.ts)
 *   settings/   site.yaml and navigation.yaml (src/lib/settings.ts), imported as @content/...
 *   uploads/    images and files from /admin, served at /uploads
 */
export const contentDir = resolve(
	dirname(fileURLToPath(import.meta.url)),
	"../..",
	process.env.CONTENT_DIR ?? "../../../site-content",
);

const TYPES: Record<string, string> = {
	".avif": "image/avif",
	".gif": "image/gif",
	".jpeg": "image/jpeg",
	".jpg": "image/jpeg",
	".pdf": "application/pdf",
	".png": "image/png",
	".svg": "image/svg+xml",
	".webp": "image/webp",
};

export default function content(): AstroIntegration {
	const uploads = join(contentDir, "uploads");
	return {
		name: "site-content",
		hooks: {
			"astro:config:setup": ({ command, updateConfig, logger }) => {
				if (!existsSync(join(contentDir, "settings"))) {
					const message = `No site content at ${contentDir}. Clone TrialAndErrorOrg/site-content next to this repository, or set CONTENT_DIR.`;
					// astro check and astro sync still work without it
					if (command === "dev" || command === "build") throw new Error(message);
					logger.warn(message);
				}
				updateConfig({
					vite: {
						resolve: { alias: { "@content": contentDir } },
						server: { fs: { allow: [contentDir] } },
						plugins: [
							{
								name: "site-content-uploads",
								// In dev, /uploads comes straight from site-content. A build copies it, below.
								configureServer(server) {
									server.watcher.add(join(contentDir, "settings"));
									server.middlewares.use("/uploads", (req, res, next) => {
										const path = normalize(join(uploads, decodeURIComponent((req.url ?? "/").split("?")[0])));
										if (!path.startsWith(uploads + sep) || !existsSync(path) || !statSync(path).isFile()) return next();
										res.setHeader("Content-Type", TYPES[extname(path).toLowerCase()] ?? "application/octet-stream");
										createReadStream(path).pipe(res);
									});
								},
							},
						],
					},
				});
			},
			"astro:build:done": async ({ dir, logger }) => {
				if (!existsSync(uploads)) return;
				await cp(uploads, join(fileURLToPath(dir), "uploads"), {
					recursive: true,
					filter: (source) => !source.endsWith(".gitkeep"),
				});
				logger.info(`Copied uploads from ${contentDir}`);
			},
		},
	};
}
