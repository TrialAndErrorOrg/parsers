import { Converter, type OjsAccess } from "converter";
import "converter/styles.css";
import { useCallback, useMemo, useState } from "react";

/*
 * The converter (apps/converter) with this site's sign-in. Editors who are
 * signed in to /admin already are signed in here too: the CMS keeps its
 * session in localStorage. Others sign in through the same popup the CMS
 * uses. OJS calls go through /admin/ojs, which checks the session.
 */

const CMS_USER = "sveltia-cms.user";
const OWN_SESSION = "converter.session";

/** Whether a session (sveltia-gateway's signed `data.signature`) is still valid, going by its expiry */
function current(session: unknown): session is string {
	if (typeof session !== "string") return false;
	try {
		const data = JSON.parse(atob(session.split(".")[0].replaceAll("-", "+").replaceAll("_", "/")));
		return typeof data.exp === "number" && data.exp > Date.now() / 1000;
	} catch {
		return false;
	}
}

function storedSession() {
	try {
		const cms = JSON.parse(localStorage.getItem(CMS_USER) ?? "null");
		return [localStorage.getItem(OWN_SESSION), cms?.token].find(current);
	} catch {
		return undefined;
	}
}

function forgetSession() {
	try {
		localStorage.removeItem(OWN_SESSION);
	} catch {}
}

/** Sign in in a popup, the way Sveltia CMS does, and answer with the session */
function signInPopup() {
	return new Promise<string>((resolve, reject) => {
		const popup = window.open("/admin/auth", "admin-sign-in", "width=600,height=700");
		if (!popup) return reject(new Error("The sign-in window was blocked. Allow popups for this site and try again."));

		const done = () => {
			window.removeEventListener("message", onMessage);
			clearInterval(closed);
		};
		const onMessage = (event: MessageEvent) => {
			if (event.source !== popup || event.origin !== location.origin || typeof event.data !== "string") return;
			// The popup says hello, we answer, it sends the result
			if (event.data === "authorizing:github") return popup.postMessage(event.data, location.origin);
			const result = event.data.match(/^authorization:github:(success|error):(.*)$/s);
			if (!result) return;
			done();
			const body = JSON.parse(result[2]);
			if (result[1] === "success") resolve(body.token);
			else reject(new Error(body.error ?? "Sign-in failed"));
		};
		const closed = setInterval(() => {
			if (!popup.closed) return;
			done();
			reject(new Error("The sign-in window was closed"));
		}, 500);
		window.addEventListener("message", onMessage);
	});
}

export default function AdminConverter({ ojsUrl, ojs }: { ojsUrl: string; ojs: boolean }) {
	const [session, setSession] = useState(storedSession);

	const signIn = useCallback(async () => {
		const token = await signInPopup();
		try {
			localStorage.setItem(OWN_SESSION, token);
		} catch {}
		setSession(token);
	}, []);

	const fetchOjs = useCallback(
		async (path: string, apiKey: string, params: Record<string, string> = {}) => {
			const query = new URLSearchParams(params).toString();
			const response = await fetch(`/admin/ojs/${path}${query ? `?${query}` : ""}`, {
				headers: { Authorization: `Bearer ${session}`, "X-OJS-API-Key": apiKey },
			});
			if (response.status === 401) {
				forgetSession();
				setSession(undefined);
			}
			return response;
		},
		[session],
	);

	const access = useMemo<OjsAccess>(() => ({ url: ojsUrl, signedIn: Boolean(session), signIn, fetch: fetchOjs }), [ojsUrl, session, signIn, fetchOjs]);

	return <Converter ojs={ojs ? access : undefined} />;
}
