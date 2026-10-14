# trialanderror.org

The website of the Center of Trial and Error: the main site, the blog (formerly
blog.trialanderror.org) and the Journal of Trial and Error's articles, in one
Astro site.

Everything is built into plain HTML files ahead of time. The only parts that run
on a server are draft previews (`/preview/...` and `/api/draft`).

## Where things come from

| What | Where it lives | How to change it |
| --- | --- | --- |
| Homepage, About and other section-built pages | site-content: `pages/*.yaml` | `/admin`, or edit the file |
| Menus, footer, social links | site-content: `settings/navigation.yaml` | `/admin` → Settings → Menus |
| Site name, newsletter, analytics | site-content: `settings/site.yaml` | `/admin` → Settings → Site |
| Images and files uploaded in `/admin` | site-content: `uploads/` | `/admin` |
| Colours, fonts, borders, shadows | `src/styles/theme.css` | edit the file |
| Blog posts, authors, categories, tags | Strapi (cms.trialanderror.org) | Strapi |
| Team members | Strapi | Strapi |
| Free-text pages (donate, events, award calls) | Strapi → Pages | Strapi |
| Journal articles | Underlay ([centeroftrialanderror/jote](https://www.underlay.org/centeroftrialanderror/jote)), exported from PubPub | PubPub |

site-content is its own repository,
[TrialAndErrorOrg/site-content](https://github.com/TrialAndErrorOrg/site-content), so
saving in `/admin` doesn't add commits to this one. A page in site-content wins
over a Strapi page with the same slug.

## For editors

### Publishing a blog post

Write and publish it in Strapi as before. The site rebuilds when Strapi tells it
something changed (see *Rebuilding* below), which takes a minute or two.

To see a draft before publishing, use the **Preview** button in Strapi. It opens
the post as it will look, with a "Draft preview" bar on top. Preview links work
for an hour.

### Changing the homepage or another page

Go to `/admin` and sign in. Pages are lists of **sections**, drawn top to
bottom. You can add, remove, reorder and edit sections:

- **Big intro**: the large title block. Each line of the title gets its own box.
- **Text**: a block of text, optionally with a title and a coloured background.
- **Columns**: two or three boxes side by side (like "What do we do?").
- **Latest blog posts** / **Latest journal articles**: filled in automatically.
- **Team**: everyone in Strapi's team list who has a photo.
- **Newsletter sign-up**
- **Buttons**

Text fields take Markdown: `**bold**`, `*italic*`, `[a link](https://...)`.

To make a new page, click **New Page** in `/admin`. Its address is its title
in lowercase with dashes (`Open Positions` becomes `/open-positions`).

Saving in `/admin` makes a commit to site-content, which triggers a rebuild.

### Signing in to /admin

With `ADMIN_AUTH=microsoft`, editors sign in with their Center Microsoft
account and need no GitHub account. Otherwise (`ADMIN_AUTH=github`, the
default) they need a GitHub account with write access to
`TrialAndErrorOrg/site-content` and sign in with a
[personal access token](https://github.com/settings/tokens) (fine-grained,
repository contents read and write).

## For developers

The site is `apps/site` in the `trialanderror` monorepo. Its content is in
site-content, checked out next to it:

```sh
git clone https://github.com/TrialAndErrorOrg/site-content ../site-content   # or set CONTENT_DIR
pnpm install
pnpm turbo run dev --filter=site           # http://localhost:4321
pnpm turbo run build --filter=site...      # into apps/site/dist, then `pnpm --filter site start`
```

Turbo builds the workspace packages the site uses (`sveltia-gateway`) first.

**Secrets** come from 1Password. `dev` and `build` run through
[varlock](https://varlock.dev), which reads `.env.schema`: plain settings with
their defaults, and the tokens as references to the Website vault. The
1Password desktop app asks once per session. Without access to the vault, put
`ONEPASSWORD=false` and your own values in `apps/site/.env.local`; most tokens
are optional (published content is public). `pnpm exec varlock load` in
`apps/site` shows what was resolved, with secrets hidden.

**Content** (`src/integrations/content.ts`): pages are read from
`<site-content>/pages`, settings are imported as `@content/settings/*.yaml`,
and `uploads/` is served at `/uploads` in dev and copied into the build.
The site is not formatted by the repository's `oxfmt`, which can't read
`.astro` files; it keeps its own style (tabs, double quotes).

### Layout

```
src/
  content.config.ts  the section types and their fields
  integrations/      content.ts (reads site-content), pagefind.ts (search index)
  styles/theme.css   every colour, font and size token
  styles/global.css  shared component classes (.card, .button, .label, .prose-site...)
  components/        Header, Footer, cards; sections/ holds one component per section type
  layouts/           Base (every page), Post (blog post), Page (CMS page), BlogList
  lib/sources/       one module per content source: blog (Strapi), journal (Underlay), pages
  pages/             routes
admin/config.yml  the /admin editing interface (src/admin/config.yml)
.env.schema       every environment variable, with secrets as 1Password references
```

site-content holds `pages/` (section-built pages, `index.yaml` is the
homepage), `settings/` (`site.yaml`, `navigation.yaml`) and `uploads/`.

### Restyling

Change the values in `src/styles/theme.css`. Components only use those tokens
(`bg-accent`, `border-ink`, `shadow-hard`, `font-heading`) and the classes in
`global.css`, so a new palette or font is a one-file change. To change how all
cards or buttons look, edit `.card` or `.button` in `global.css`.

### Adding a section type

1. Make `src/components/sections/MySection.astro`.
2. Add its fields to the `section` union in `src/content.config.ts`.
3. Register it in `src/components/Sections.astro`.
4. Describe its fields under `sections.types` in `src/admin/config.yml`, so
   editors can use it.

### The journal

`/journal` lists the articles from Underlay, filtered by type
(`/journal/kind/...`) and issue (`/journal/issue/...`). `/journal/<slug>` renders
the latest release's HTML export with downloads (PDF, EPUB, Word, JATS, LaTeX)
and citation metadata. Set `ARTICLE_PAGES = false` in
`src/lib/sources/journal.ts` to link to PubPub instead and skip those pages.
Article HTML is cached by hash in `node_modules/.cache/underlay`.

`/jrn` is the archive of the Journal for Reproducibility in Neuroscience
([centeroftrialanderror/jrn](https://www.underlay.org/centeroftrialanderror/jrn)),
which is no longer updated. It uses the same article pages, in grey. Each
journal is an entry in `JOURNALS` in `src/lib/sources/journal.ts` (its
collection, path, article types and issue tags), and `journal("jrn")` gives
its loaders.

### People

`/people/<slug>` has a page for every team member and blog author, with their
posts and journal articles (`src/lib/people.ts`). Strapi keeps team members and
guest authors apart, so records with the same ORCID iD, or else the same full
name, become one person. Journal articles join a person on ORCID iD, or on the
exact full name when the iDs don't conflict. `/blog/author/<slug>` redirects
there from every slug a person had.

### Built at build time, not by services

- Share images (`/og/...png`) are drawn with satori in `src/lib/og.ts`, using
  the colours from `theme.css`. Cached in `node_modules/.astro/og`.
- Feeds: `/rss.xml` (blog) and `/journal/rss.xml`.
- Search is [Pagefind](https://pagefind.app): an index written after the build
  (`src/integrations/pagefind.ts`) and searched in the browser at `/search`.
  Only elements marked `data-pagefind-body` are indexed.

Keep `node_modules/.astro` and `node_modules/.cache` between builds if the host
allows it. A cold build downloads and resizes every image and draws every share
image again.

### Switching content sources

Components only see the types in `src/lib/types.ts`. Each source converts its
data into those. To read the blog from somewhere else, write a module like
`lib/sources/blog-strapi.ts` and select it in `lib/sources/blog.ts`
(`BLOG_SOURCE=underlay` is already wired to `blog-underlay.ts`).

### Previews

`/api/draft?secret=...&slug=...` is what Strapi's preview button calls. It
checks the secret against `DRAFT_SECRET`, sets a cookie for an hour and
redirects to `/preview/blog/<slug>` or `/preview/page/<slug>`, which render
the draft from Strapi on request. To preview another kind of content later, add
a `src/pages/preview/<kind>/[slug].astro` with `export const prerender = false`.

### Microsoft sign-in for /admin

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

To set it up:

1. **Entra:** register an app (single tenant) with the redirect URI
   `https://trialanderror.org/admin/callback` and a client secret. Under
   Enterprise applications, set "Assignment required" to yes and assign the
   editors or a group: that is who can sign in. Set `ENTRA_TENANT_ID`,
   `ENTRA_CLIENT_ID` and `ENTRA_CLIENT_SECRET`.
2. **GitHub:** create a GitHub App in the TrialAndErrorOrg organisation with
   repository permissions Contents and Pull requests (read and write), no
   webhook, and install it only on `TrialAndErrorOrg/site-content`. Set
   `GITHUB_APP_ID` and `GITHUB_APP_PRIVATE_KEY` (the .pem as downloaded,
   newlines may be written as `\n`).
3. Set `ADMIN_SESSION_SECRET` to 32 or more random characters and
   `ADMIN_AUTH=microsoft`. These are read when the server runs, not at build.

Behind a proxy the server only learns its public address from the proxy's
headers for the domains in `security.allowedDomains` (`astro.config.mjs`:
trialanderror.org and its subdomains). On any other domain, add it there, or
the sign-in sends Microsoft the wrong callback address.

To try it locally without either: `ADMIN_AUTH=dev` signs everyone in as a test
editor (only in `pnpm dev`), `GITHUB_CONTENT_TOKEN=$(gh auth token)` stands in
for the app, and `ADMIN_READ_ONLY=true` refuses every write.

### Rebuilding

Content is fetched at build time, so the site has to rebuild when content
changes:

- Strapi: a webhook on entry publish, unpublish, update and delete that sends
  a `content-updated` repository dispatch to this repository (GitHub's
  `POST /repos/TrialAndErrorOrg/trialanderror/dispatches`, with a token that may
  trigger workflows).
- `/admin`: every save is a commit to site-content, whose `rebuild` workflow
  starts `site.yml` directly (`gh workflow run`).
- Journal: the daily run picks up new articles from Underlay.

All three start `.github/workflows/site.yml` (see *Deploying*).

### Deploying

`.github/workflows/site.yml` builds the site on GitHub Actions and publishes
the image `ghcr.io/trialanderrororg/site` (`:latest` and `:<commit>`), then
calls Coolify's deploy webhook. It checks out site-content next to the code.
It runs on pushes that touch the site, when site-content changes, on a
`content-updated` repository dispatch (from Strapi), daily for new journal
articles, and by hand. A newer run cancels an older one.

It is quick because it keeps every cache between runs: pnpm's store, turbo's
cache for the workspace packages, and the site's own caches of resized images,
share images and journal article HTML (`node_modules/.astro`,
`node_modules/.cache`). The site's turbo `build` task is never cached itself,
since its pages come from services turbo can't see. The `Dockerfile` only
packages the build: `pnpm deploy --prod` leaves the built site with just its
production dependencies, and the image copies that in.

Setup:

- **1Password:** a vault named Website holding only what the site's CI needs
  (the items `.env.schema` names: `Strapi TrialAndError CI Read Token`, `Underlay`,
  `Coolify deploy`, `Site rebuild token`, and `Website admin` for the Microsoft
  sign-in), and a service account that can read that vault and nothing else.
- **GitHub:** one secret, `OP_TOKEN`, the service account's token, for this
  repository and site-content (an organisation secret shared with both works).
  varlock reads the rest and hides the values in the log. `Site rebuild token`
  is a fine-grained token that may only start workflows here (Actions: read
  and write on `trialanderror` only), used by site-content.
- **Coolify deploys** once `COOLIFY_DEPLOY_URL` is filled in `.env.schema` (the
  app's deploy webhook, not secret). Until then the image is only published.
- The first push creates the package on GitHub, private. Make it public under
  the organisation's Packages, or give Coolify a token to pull it.
- In Coolify: a "Docker Image" application for `ghcr.io/trialanderrororg/site:latest`,
  port 4321, with the runtime variables from `.env.schema` (`DRAFT_SECRET`,
  `STRAPI_TOKEN` for previews, the `ADMIN_*`, `ENTRA_*` and `GITHUB_APP_*` ones).

The image holds no secrets: Astro reads them from the environment when the
server runs.

Elsewhere: any host that runs Node or Docker works, and so does any host with
an Astro adapter (replace `@astrojs/node` in `astro.config.mjs`).

### Redirects to set up when this goes live

- `blog.trialanderror.org/*` → `trialanderror.org/blog/*` (keeps old links and
  blog DOIs working; `/blog/api/draft` exists for the old preview URL).
- `blog.trialanderror.org/author/*` → `trialanderror.org/blog/author/*` falls
  out of the rule above.
- The old blog's page list (`blog.trialanderror.org/blog/2`) would land on
  `/blog/blog/2`; redirect `/blog/blog/*` to `/blog/page/*` if that matters.
