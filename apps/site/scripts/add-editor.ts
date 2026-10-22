/*
 * Lets people sign in to /admin by assigning them to the Entra app, which
 * otherwise means clicking through the Entra admin center for each person
 * (assigning a group instead needs Entra ID P1, which we don't have).
 *
 *   node scripts/add-editor.ts                                  # who can sign in now
 *   node scripts/add-editor.ts someone@trialanderror.org ...    # add people
 *
 * Runs through the Azure CLI, so `az login` first as someone who may manage
 * the app. Adding someone who is already on the list does nothing.
 */

import { execFileSync } from "node:child_process";

// "trialanderror.org admin" in Entra; its client ID, which survives a rename
const APP_ID = "8b43c2cb-cf94-465b-99c9-575c7328a3d1";
// The app defines no roles, so people get the default one
const DEFAULT_ROLE = "00000000-0000-0000-0000-000000000000";

type Assignment = { principalId: string; principalDisplayName: string };

// az's own error ends up in the thrown error's message instead of on the terminal
const az = <T>(...args: string[]): T =>
	JSON.parse(execFileSync("az", [...args, "-o", "json"], { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }));

const graph = <T>(method: string, path: string, body?: object): T =>
	az<T>(
		"rest",
		"--method",
		method,
		"--uri",
		`https://graph.microsoft.com/v1.0${path}`,
		...(body ? ["--body", JSON.stringify(body)] : []),
	);

const app = az<{ id: string; displayName: string }>("ad", "sp", "show", "--id", APP_ID);
const assigned = graph<{ value: Assignment[] }>("GET", `/servicePrincipals/${app.id}/appRoleAssignedTo`).value;
const emails = process.argv.slice(2);

if (emails.length === 0) {
	console.log(`Can sign in to /admin (${app.displayName}):`);
	for (const { principalDisplayName } of assigned.toSorted((a, b) => a.principalDisplayName.localeCompare(b.principalDisplayName))) {
		console.log(`  ${principalDisplayName}`);
	}
}

let failed = false;

for (const email of emails) {
	let user: { id: string; displayName: string };
	try {
		user = az("ad", "user", "show", "--id", email);
	} catch {
		console.error(`${email}: no such account in the directory`);
		failed = true;
		continue;
	}

	if (assigned.some(({ principalId }) => principalId === user.id)) {
		console.log(`${user.displayName}: could already sign in`);
		continue;
	}

	graph("POST", `/servicePrincipals/${app.id}/appRoleAssignedTo`, {
		principalId: user.id,
		resourceId: app.id,
		appRoleId: DEFAULT_ROLE,
	});
	console.log(`${user.displayName}: can sign in now`);
}

process.exitCode = failed ? 1 : 0;
