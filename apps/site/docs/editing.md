# Editing the site

## Publishing a blog post

In `/admin`, **Blog**, **New Post**. Fill in the title, date and authors, write
the text, and **Save**. Saving makes a draft: nothing changes on the site yet.

Drafts move through **Workflow** (the icon in the top bar): Draft, In Review,
Ready. Someone else can read and edit a draft there. **Publish** puts it on
the site, which rebuilds in a few minutes. Changing a published post goes the
same way: the change is a draft until it's published.

The preview next to the fields shows the post as it will look on the site and
follows along as you type. It leaves out what the post page adds around it,
like the table of contents and the author bios.

Authors are picked from **People**. Someone new writes for the blog? Add them
under People first (Team member off).

### Images

Upload photos as they are: they are turned into WebP of at most 2400 pixels
before they are saved, so a 15 MB camera photo becomes a few hundred KB. The
image picker can also search **Unsplash**; those photos are linked, not copied.
Give the cover image a description for people who can't see it.

Everything uploaded is public, on the site and in site-content's history, the
moment it's saved. Deleting a file in `/admin` takes it off the site, but its
history stays: to remove something for good, ask someone who manages the
repository.

## Changing the homepage or another page

Go to `/admin` and sign in. Pages are lists of **sections**, drawn top to
bottom. You can add, remove, reorder and edit sections:

- **Big intro**: the large title block. Each line of the title gets its own box.
- **Text**: a block of text, optionally with a title and a coloured background.
- **Columns**: two or three boxes side by side (like "What do we do?").
- **Latest blog posts** / **Latest journal articles**: filled in automatically.
- **Team**: everyone under People marked as team member who has a photo.
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
