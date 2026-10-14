# Microsoft sign-in for /admin

Sveltia CMS normally talks to GitHub straight from the browser, with the
editor's own GitHub token. With `ADMIN_AUTH=microsoft` the site stands in
between, through `sveltia-gateway` (`libs/sveltia-gateway` in this repository,
see its README):

- `/admin/auth` sends the editor to Microsoft and `/admin/callback` takes them
  back, then hands the CMS a signed session instead of a GitHub token.
- `/admin/api/...` is what the CMS uses as GitHub's API. It answers "who am I"
  from the session and passes the rest to GitHub as a GitHub App. Editors can
  only commit to the branch in `src/admin/config.yml` and only change the
  folders the CMS edits (`src/lib/admin.ts` reads them from that file).
- `/admin/config.yml` is generated from `src/admin/config.yml` and points the
  CMS at those routes. Commit messages carry the editor's name.

## What it needs

Set up for trialanderror.org on 2026-10-14.

**Entra app** "trialanderror admin" (entra.microsoft.com, App registrations):

- Supported account types: this organisational directory only.
- Redirect URIs, type Web: `https://trialanderror.org/admin/callback`, plus
  `http://localhost:4321/admin/callback` to test with `pnpm dev`. Every other
  address the site runs on (a test subdomain, say) needs its own entry.
- A client secret. It expires (the current one on 2028-10-11): make a new one
  before then and update 1Password.
- API permissions: the default `User.Read` is enough. No implicit grant, no
  public client flows.
- Enterprise applications, the app, Properties: **Assignment required** yes.
  Only people assigned to the app can sign in.

**GitHub App** `admin-cms-write` in the TrialAndErrorOrg organisation:
repository permissions Contents and Pull requests (read and write), no webhook,
installed only on `TrialAndErrorOrg/site-content`. Don't install it anywhere
else: its key lives on the web server, and an installation gets every
permission the app has.

**1Password**, Website vault (`.env.schema` reads them):

- "trialanderror admin Entra app": `username` is the client ID, `credential`
  the client secret, `tenant id`, and `session secret` (32 or more random
  characters, e.g. `openssl rand -base64 48`; changing it signs everyone out).
- "Admin CMS Write Github App": `username` is the app ID, `credential` the
  private key (the .pem as downloaded, newlines may be written as `\n`).

**Where the site runs:** `ADMIN_AUTH=microsoft`. The rest is read from
1Password when the server starts ([deploying.md](deploying.md)).

## Adding an editor

Entra admin center, Enterprise applications, "trialanderror admin", Users and
groups, Add user/group. Assigning a group instead of people needs Entra ID P1.
Taking someone off the list stops their next sign-in. A session already open
lasts until it expires (8 hours).

## Behind a proxy

The server only learns its public address from the proxy's headers for the
domains in `security.allowedDomains` (`astro.config.mjs`: trialanderror.org and
its subdomains). On any other domain, add it there, or the sign-in sends
Microsoft the wrong callback address.

## Trying it locally

With the vault: `ADMIN_AUTH=microsoft` in `apps/site/.env.local`, then
`pnpm turbo run dev --filter=site` and open http://localhost:4321/admin.

Without either registration: `ADMIN_AUTH=dev` signs everyone in as a test
editor (only in `pnpm dev`), `GITHUB_CONTENT_TOKEN=$(gh auth token)` stands in
for the app, and `ADMIN_READ_ONLY=true` refuses every write.
