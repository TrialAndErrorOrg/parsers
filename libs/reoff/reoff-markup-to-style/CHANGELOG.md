# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.3.0](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-markup-to-style-0.2.0...reoff-markup-to-style-0.3.0) (2024-06-28)

### Dependency Updates

* `ooxast-util-markup-to-style` updated to version `0.5.0`
* `ooxast` updated to version `0.4.0`

### Features

* update to new unified versions ([18bb996](https://github.com/TrialAndErrorOrg/parsers/commit/18bb9960d25843db83cda8bfea932e2e22f44b9b))

## [0.2.0](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-markup-to-style-0.1.0...reoff-markup-to-style-0.2.0) (2023-09-29)

### Dependency Updates

* `ooxast-util-markup-to-style` updated to version `0.4.0`
* `ooxast` updated to version `0.3.0`

### Features

* update all package.json ([d4070e5](https://github.com/TrialAndErrorOrg/parsers/commit/d4070e53ab3389db11fed978f3f74bcfe6808f5e))

## [0.1.0](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-markup-to-style-0.0.5...reoff-markup-to-style-0.1.0) (2023-09-22)

### Dependency Updates

* `ooxast-util-markup-to-style` updated to version `0.3.0`
* `ooxast` updated to version `0.2.0`

### Features

* giant prettier + eslint run ([6becd94](https://github.com/TrialAndErrorOrg/parsers/commit/6becd9492006b9a7f7f91b60db440bb31d9140c8))

## [0.0.5](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-markup-to-style-0.0.4...reoff-markup-to-style-0.0.5) (2023-09-21)

### Dependency Updates

- `ooxast-util-markup-to-style` updated to version `0.2.0`
- `ooxast` updated to version `0.1.4`

### Bug Fixes

- don't use shady custom builder, just run a script that fixes the package.json ([def3c18](https://github.com/TrialAndErrorOrg/parsers/commit/def3c1844ae0a0d547de2b0a01689a302b58ab61))
- make citations work ([67993d3](https://github.com/TrialAndErrorOrg/parsers/commit/67993d33150e05024be7e8df676e59d4cd9c57b1))
- make typecheck work sort of ([d6a2eb6](https://github.com/TrialAndErrorOrg/parsers/commit/d6a2eb690a06d376043309f8bea6f418a4ff16ec))
- **ooxast-util-to-unified-latex:** just give up on infer heading for now ([4709f1c](https://github.com/TrialAndErrorOrg/parsers/commit/4709f1cbe5fe8bb3e6fbc3ade8f5c92c8c71afb1))

## [0.0.4](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-markup-to-style-0.0.3...reoff-markup-to-style-0.0.4) (2023-05-30)

### Dependency Updates

- `ooxast-util-markup-to-style` updated to version `0.1.1`

## [0.0.3](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-markup-to-style-0.0.2...reoff-markup-to-style-0.0.3) (2023-03-29)

### Bug Fixes

- **reoff-:** make them compile ([84c95e4](https://github.com/TrialAndErrorOrg/parsers/commit/84c95e4ced2556b03d3fa61fabebba7439a57029))

## [0.0.2](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-markup-to-style-0.0.1...reoff-markup-to-style-0.0.2) (2023-03-29)

### Dependency Updates

- `ooxast-util-markup-to-style` updated to version `0.1.0`

## 0.4.0

### Minor Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - **Changed output:** real manuscripts (Google Docs exports included) now convert to LaTeX that compiles.
  
  - Only `heading N` styles are headings (by style name, so localised ids like `Kop1` work); before, any style ending in a digit was one, so Google Docs' `normal1` turned every paragraph into a `\section`.
  - `w:val="false"` / `"off"` on bold, italic etc. means off. Markup-to-style never restyles a paragraph that already has a heading, Title or Subtitle style, and has a new per-rule `onlyIfNoHeadings` option.
  - Tracked deletions are dropped, line breaks become `\newline`, text in table cells and literal braces are escaped, colours use `\color[HTML]{…}`.
  - Numbered headings are no longer one-item lists; the title is kept when a custom preamble is passed.
  - Only a paragraph holding nothing but a picture becomes a figure; other pictures are inline `\includegraphics`.
  - Tables: the column count comes from `w:tblGrid`, tabularx tables get `X` columns, nested tables work, paragraphs in a cell are separated.
  - Citation keys of organisations as authors no longer contain spaces.

### Patch Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - Published from the `TrialAndErrorOrg/parsers` monorepo with npm provenance: `repository` points at the package's directory there, and the build is plain TypeScript (`tsc`) to `dist`. Dependencies are updated to their latest versions.
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - ooxast-util-markup-to-style@0.6.0
  - ooxast@0.5.0

## 0.0.1 (2023-03-27)

### Dependency Updates

- `ooxast` updated to version `0.1.3`
- `ooxast-util-markup-to-style` updated to version `0.0.2`

### Bug Fixes

- **reoff-markup-to-style:** create reoff plugin for inferring styles ([4b24aac](https://github.com/TrialAndErrorOrg/parsers/commit/4b24aac3d139d769fdd4958aa903bb0a18f98abf))
