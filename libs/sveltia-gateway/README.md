# sveltia-gateway

Single sign-on for [Sveltia CMS](https://github.com/sveltia/sveltia-cms). Editors sign in with
Microsoft Entra ID, Google or any OpenID Connect provider, and never need a GitHub account.

- **No database.** Sessions are signed tokens, so the gateway keeps no state.
- **Runs anywhere** that speaks Web `Request` and `Response`: Cloudflare Workers, Node 20+, Deno,
  Bun, or a route in Astro, Next.js, SvelteKit or Hono.
- **No runtime dependencies.** Web Crypto does the signing.
- **Default deny.** Editors reach one repository, commit only to the branches and paths you
  open, and only through the calls Sveltia makes.

## How it works

Sveltia CMS normally talks to GitHub straight from the browser, with the editor's own GitHub
token. The gateway stands in for both GitHub's sign-in and GitHub's API:

```
Sveltia CMS ──sign in──▶ /auth ──▶ your identity provider ──▶ /callback ──▶ session back to the CMS
Sveltia CMS ──API calls with the session──▶ /api/... ──rules──▶ GitHub, as your GitHub App
```

- `/auth` and `/callback` run the OpenID Connect authorization code flow with PKCE and a nonce,
  check the ID token's signature against the provider's keys, and hand the CMS a signed session
  through the same popup handshake that Netlify and `sveltia-cms-auth` use.
- `/api/...` is what the CMS uses as GitHub's API. It answers "who am I" from the session, checks
  every other call against the rules, and passes allowed ones to GitHub with a short-lived token
  of a GitHub App that is installed on the content repository only. That token never reaches the
  browser.

## Setup

### 1. A GitHub App

In the organisation or account that owns the content repository: Settings, Developer settings,
GitHub Apps, New GitHub App.

- Homepage URL: anything, e.g. your site. Uncheck **Webhook**.
- Repository permissions: **Contents** read and write, **Pull requests** read and write (the
  second only matters for Sveltia's editorial workflow).
- Create it, note the **App ID**, and generate a **private key** (a `.pem` file).
- Install the app, on the content repository only.

### 2. An identity provider

**Microsoft Entra ID.** In the Entra admin center, App registrations, New registration:

- Supported account types: this organisational directory only.
- Redirect URI (Web): `https://<where the gateway runs><basePath>/callback`.
- Certificates and secrets: a new client secret.
- Note the **Directory (tenant) ID** and **Application (client) ID**.
- Decide who may sign in: Enterprise applications, your app, Properties, **Assignment required**
  yes, then Users and groups, add the editors or a group.

**Google.** In Google Cloud, APIs and Services, Credentials, an OAuth client ID of type Web
application, with the same redirect URI. Pass `domain` to admit only your Workspace.

**Anything else** with OpenID Connect (Okta, Keycloak, Authentik, Auth0, GitLab...): `oidc()`
with its issuer URL.

### 3. Run the gateway

Inside your site, as a catch-all route (Astro shown, see `examples/astro`):

```ts
import { createGateway, entra } from "sveltia-gateway";

const gateway = createGateway({
	identity: entra({ tenantId: TENANT_ID, clientId: CLIENT_ID, clientSecret: CLIENT_SECRET }),
	github: { repo: "owner/name", appId: GITHUB_APP_ID, privateKey: GITHUB_APP_PRIVATE_KEY },
	sessionSecret: SESSION_SECRET, // 32+ random characters
	basePath: "/admin",
	paths: ["src/content/**", "public/uploads/**"],
});

export const ALL = ({ request }) => gateway.fetch(request);
```

Or on its own Cloudflare Worker, for a CMS hosted anywhere (`examples/cloudflare-worker`). Then
list the site in `allowedOrigins`.

### 4. Point Sveltia CMS at it

In the CMS's `config.yml`:

```yaml
backend:
  name: github
  repo: owner/name
  branch: main
  base_url: https://example.org        # where the gateway runs
  auth_endpoint: admin/auth            # basePath + /auth, without the leading slash
  api_root: https://example.org/admin/api
  # Commits are made by the GitHub App, so put the editor in the message
  commit_messages:
    create: "Create {{collection}} “{{slug}}” (by {{author-name}})"
    update: "Update {{collection}} “{{slug}}” (by {{author-name}})"
    delete: "Delete {{collection}} “{{slug}}” (by {{author-name}})"
    uploadMedia: "Upload “{{path}}” (by {{author-name}})"
    deleteMedia: "Delete “{{path}}” (by {{author-name}})"
```

Sveltia adds `/api/v3` and `/api/graphql` to a custom `api_root`, as it does for GitHub
Enterprise. The gateway accepts both.

## Options

| Option | Default | |
|---|---|---|
| `identity` | required | `entra()`, `google()`, `oidc()`, or `testIdentity()` locally |
| `github` | required | `{ repo, appId, privateKey }`, or `{ repo, token }` for testing. `apiRoot` for GitHub Enterprise Server |
| `sessionSecret` | required | 32+ characters. Changing it signs everyone out |
| `basePath` | `""` | Prefix of the routes, e.g. `/admin` |
| `branches` | `["main", "cms/**"]` | Branches commits may go to. `*` stays within a name, `**` crosses slashes |
| `paths` | any | Paths commits may touch |
| `readOnly` | `false` | Refuse every write |
| `dispatches` | `true` | Let the CMS trigger a deploy through `repository_dispatch` |
| `sessionTtl` | 8 hours | In seconds |
| `allowedOrigins` | the gateway's own | Sites whose CMS may use the gateway |
| `publicUrl` | from the request | The gateway's public URL, if a proxy hides it |
| `onRefused` | none | Called with the reason for every refused call or sign-in, for logging |

`entra()`, `google()` and `oidc()` all take `allow(claims)` to narrow who may sign in, e.g. by
group or email, and `toEditor(claims)` to change the name and email the CMS shows.

## What editors can do

Everything else is refused with a 403 and a reason.

- Read the content repository (REST and GraphQL). Queries naming another repository are refused.
  The repository's `permissions` say editors may push (GitHub gives an app token none, and
  Sveltia won't open without them); the rules below decide each write.
- Commit with `createCommitOnBranch` to an open branch, changing only open paths.
- Create, update and delete open branches, open and merge pull requests and set their labels and
  draft status, for the editorial workflow. Sveltia creates a draft's branch with GraphQL
  `createRef`, which names the repository by node ID. Only the branch name is checked: the app's
  token reaches the content repository and nothing else (a `GITHUB_TOKEN` of your own may reach
  more).
- Trigger `repository_dispatch`, unless `dispatches: false`.

## Try it locally

```sh
pnpm install && pnpm build
REPO=owner/name GITHUB_TOKEN=$(gh auth token) FOLDER=content node examples/node/server.mjs
```

Then open http://localhost:8788/admin/. Everyone is signed in as a test editor, GitHub is reached
with your own token, and writes are refused unless `READ_ONLY=false`.

## Limits

- **GitHub only** for now. GitLab and Forgejo would need their own API rules.
- **Commits are by the app.** GitHub's `createCommitOnBranch` takes no author, so the editor's
  name goes in the commit message (see `commit_messages` above).
- **Sessions can't be revoked one by one.** They expire after `sessionTtl`. Changing
  `sessionSecret` signs everyone out. Removing someone in the identity provider stops their next
  sign-in.
- **The editorial workflow** (branches and pull requests) follows Sveltia's calls but has had less
  testing than plain saving.

## Credits

Builds on the ideas of [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) (the
popup handshake) and [sveltia-identity-translator](https://github.com/andrewdunndev/sveltia-identity-translator)
(answering "who am I" from the session, default deny), which does the same for GitLab and Google.

MIT licence.
