import {
	ADMIN_AUTH,
	ADMIN_READ_ONLY,
	ADMIN_SESSION_SECRET,
	ENTRA_CLIENT_ID,
	ENTRA_CLIENT_SECRET,
	ENTRA_TENANT_ID,
	GITHUB_APP_ID,
	GITHUB_APP_PRIVATE_KEY,
	GITHUB_CONTENT_TOKEN,
} from "astro:env/server";
import { createGateway, entra, type Gateway, testIdentity } from "sveltia-gateway";
import { parse } from "yaml";
import configYaml from "~/admin/config.yml?raw";

/*
 * Sign-in for /admin without GitHub accounts, through sveltia-gateway
 * (libs/sveltia-gateway). With ADMIN_AUTH=microsoft editors sign in with
 * Entra, and the site talks to GitHub for them as a GitHub App. Editors can
 * only change the folders the CMS edits.
 */

const config = parse(configYaml);

/** The repository and folders the CMS edits, from src/admin/config.yml */
export const repo: string = config.backend.repo;
export const editablePaths: string[] = [
	`${config.media_folder}/**`,
	...config.collections.flatMap((collection: { folder?: string; files?: { file: string }[] }) =>
		collection.folder ? [`${collection.folder}/**`] : (collection.files ?? []).map((file) => file.file),
	),
];

let gateway: Gateway | undefined;

export function adminGateway() {
	gateway ??= createGateway({
		identity:
			ADMIN_AUTH === "dev" && import.meta.env.DEV
				? testIdentity()
				: entra({ tenantId: ENTRA_TENANT_ID ?? "", clientId: ENTRA_CLIENT_ID ?? "", clientSecret: ENTRA_CLIENT_SECRET }),
		github: GITHUB_CONTENT_TOKEN
			? { repo, token: GITHUB_CONTENT_TOKEN }
			: { repo, appId: GITHUB_APP_ID ?? "", privateKey: GITHUB_APP_PRIVATE_KEY ?? "" },
		sessionSecret: ADMIN_SESSION_SECRET ?? "",
		basePath: "/admin",
		branches: [config.backend.branch ?? "main"],
		paths: editablePaths,
		readOnly: ADMIN_READ_ONLY,
		onRefused: (reason, request) => console.warn(`[admin] refused ${request.method} ${new URL(request.url).pathname}: ${reason}`),
	});
	return gateway;
}
