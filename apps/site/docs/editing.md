# Editing the site

## Publishing a blog post

Write and publish it in Strapi as before. The site rebuilds when Strapi tells it
something changed ([deploying.md](deploying.md#rebuilding)), which takes a few
minutes.

To see a draft before publishing, use the **Preview** button in Strapi. It opens
the post as it will look, with a "Draft preview" bar on top. Preview links work
for an hour.

## Changing the homepage or another page

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

## Signing in to /admin

With `ADMIN_AUTH=microsoft`, editors sign in with their Center Microsoft
account and need no GitHub account: **Sign in with Microsoft** opens a
Microsoft sign-in in a popup. Editors have to be assigned to the "trialanderror admin" Entra app first
([admin-sign-in.md](admin-sign-in.md#adding-an-editor)), or Microsoft refuses
with `AADSTS50105`.

Otherwise (`ADMIN_AUTH=github`) they need a GitHub account with write access to
`TrialAndErrorOrg/site-content` and sign in with a
[personal access token](https://github.com/settings/tokens) (fine-grained,
repository contents read and write).
