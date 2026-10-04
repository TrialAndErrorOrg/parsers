# Releasing

Packages are versioned with [Changesets](https://changesets.dev) and published to npm **only from
GitHub Actions**, via [npm trusted publishing](https://docs.npmjs.com/trusted-publishers) (OIDC).
There is no npm token anywhere, and nothing is ever published from a laptop.

Every package is versioned independently. Internal dependencies are `workspace:^`; `pnpm pack`
rewrites them to real version ranges at publish time.

## Day to day

1. Make your change in a PR. If it should be released, add a changeset:

   ```sh
   pnpm changeset
   ```

   Pick the packages, pick `patch` / `minor` / `major`, write one line for the changelog, and
   commit the generated `.changeset/*.md` with your change. (CI lists changed packages without a
   changeset, but doesn't block on it — docs/test/CI-only changes don't need one.)

2. Merge the PR into `main`. The [release workflow](../.github/workflows/release.yml) opens (or
   updates) a **"Version Packages"** PR that bumps versions, updates dependents
   (`updateInternalDependencies: patch`) and writes `CHANGELOG.md`s.

3. Merge the "Version Packages" PR when you want to ship. The workflow then builds everything,
   packs every package whose version isn't on npm yet, and publishes it with provenance, then
   pushes `<name>@<version>` tags and GitHub releases.

How the workflow decides (`changesets/action/select-mode`): pending changesets → open/update the
version PR; no changesets but unpublished versions → publish; otherwise nothing.

> [!WARNING]
> "Publish" means **any** non-private package whose current version is not on npm. Before the first
> push to `main` with this workflow, sort out the packages listed under
> [one-time setup](#one-time-setup) step 3, or they'll all be attempted on that run.

Useful commands:

```sh
pnpm changeset              # add a changeset
pnpm changeset status       # what would be released
pnpm npm-status             # repo version vs npm version for every package
pnpm readme <dir> | --all   # regenerate the generated parts of package READMEs
```

## One-time setup

### 1. GitHub

- **Settings → Actions → General → Workflow permissions**: tick _Allow GitHub Actions to create and
  approve pull requests_ (needed for the version PR).
- Delete the old `NPM_TOKEN` and `ACCESS_TOKEN` repository secrets; nothing uses them anymore.
- Delete the old `last-release` tag if you like (`git push origin :refs/tags/last-release`).

### 2. npm: a trusted publisher per package

Each package needs a trusted publisher: GitHub Actions, organization/user `TrialAndErrorOrg`,
repository `parsers`, workflow filename `release.yml`, no environment.

In bulk, with npm ≥ 11.15.0 (`npm trust`), logged in as a maintainer, with account 2FA:

```sh
npm i -g npm@latest
npm login
pnpm npm-trust          # prints one `npm trust github <pkg> --repository TrialAndErrorOrg/parsers --file release.yml --allow-publish --yes` per package
pnpm npm-trust --run    # runs them, 2s apart
```

On the first 2FA prompt in the browser, tick "skip 2FA for the next 5 minutes"; that covers all
~40 packages. A package can only have one trusted publisher; `npm trust list <pkg>` /
`npm trust revoke <pkg> --id <id>` to replace one. Or do it by hand on npmjs.com:
package → Settings → Trusted publishing.

Then, per package on npmjs.com (optional, recommended): Settings → Publishing access →
_Require two-factor authentication and disallow tokens_. Trusted publishing keeps working.

### 3. Before the first release

- **Sync versions.** ~20 packages were released from the unmerged `feat/update-unified` branch in
  2024-06, so npm is ahead of the repo (e.g. `ooxast-util-remove-rsid` repo 0.4.0, npm 0.5.0).
  Run `pnpm npm-status --sync` (bumps those package.json versions to npm's latest) and commit,
  or merge that branch's version commits. Otherwise the next release either collides with an
  existing version or moves `latest` backwards.
- **Names you don't own.** `jast` (libs/ast-stringify) and `ojs-api` (libs/citations/ojs-types)
  are taken on npm by other projects. Mark them `"private": true` or rename them, or the publish
  job fails on them.
- **Never-published packages.** npm can only attach a trusted publisher to a package that already
  exists. For each package `pnpm npm-status` lists as `unpublished` either mark it
  `"private": true` until it's ready, or publish its first version by hand once
  (`npm publish --access public` from the package dir after `pnpm build`, using your own login +
  2FA), then run `pnpm npm-trust --run` for it. Packages without a `version` field must get one
  or be marked private.
- **`repository` must point at this repo.** Provenance is rejected when `package.json`
  `repository` doesn't match `github.com/TrialAndErrorOrg/parsers`. A few packages still point at
  their old split repos (`reoff-remark`, `reoff-unified-latex`, `reoff-markup-to-style`,
  `reoff-infer-headings`, `reoff-compile`, `ooxast-util-markup-to-style`,
  `unified-latex-stringify`, `reference-parser-chatgpt`, `@trialanderror/converter-cli`). Set
  them to `{ "type": "git", "url": "git+https://github.com/TrialAndErrorOrg/parsers.git", "directory": "libs/..." }`.

## How OIDC works here

The `publish` job is the only one with `id-token: write`. `changesets/action/publish` runs
`pnpm publish <tarball>` per package; pnpm 11 publishes natively (it no longer shells out to the
npm CLI), detects GitHub Actions, exchanges the job's OIDC token for a short-lived npm publish
token for that package, and attaches a provenance attestation automatically (public repo + public
package). Node 24 also ships an npm that supports trusted publishing (≥ 11.5.1), should you ever
switch the publish tool to npm.

## Standalone split repos

The old `split.yml` mirrored each lib into its own `TrialAndErrorOrg/<lib>` repo. It has been
removed: those mirrors' last content commits are from 2023 (e.g. `reoff-parse` stops at 0.2.7 while
npm is at 0.6.0), the workflow needed a personal `ACCESS_TOKEN`, and npm/GitHub releases now
point here. Consider archiving the ~50 mirror repos with a note pointing at this monorepo.
