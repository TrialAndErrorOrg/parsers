# Deprecated packages

Packages that are still on npm but no longer maintained. Their source stays here so the published
versions have a home; they are outside the pnpm workspace, so nothing builds, tests, lints or
publishes them, and they are marked `"private": true`.

| Package                                          | Last on npm | Why                                  |
| ------------------------------------------------ | ----------- | ------------------------------------ |
| [`rehype-notion`](rehype-notion)                 | 0.1.3       | Unmaintained.                        |
| [`html-to-notion-blocks`](html-to-notion-blocks) | 0.1.1       | Unmaintained; wraps `rehype-notion`. |

The code is the last state in this repo (moved to unified 11), which is newer than what is on npm.
It may not build as is: `workspace:^` dependencies no longer resolve from here.

To mark them deprecated on npm (once, by a maintainer):

```sh
npm deprecate rehype-notion "No longer maintained."
npm deprecate html-to-notion-blocks "No longer maintained."
```

To bring one back: move it into `libs/`, fix the relative `extends` in its tsconfig and the
`vitest.config.ts` re-export, remove `"private": true`, and run `pnpm install`.
