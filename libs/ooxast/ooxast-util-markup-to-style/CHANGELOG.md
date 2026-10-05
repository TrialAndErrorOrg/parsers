# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.5.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-markup-to-style-0.4.0...ooxast-util-markup-to-style-0.5.0) (2024-06-28)

### Dependency Updates

* `ooxast` updated to version `0.4.0`
* `xast-util-is-element` updated to version `0.4.0`
* `ooxast-util-get-style` updated to version `0.4.1`
* `xast-util-select` updated to version `0.4.0`

### Features

* update to new unified versions ([18bb996](https://github.com/TrialAndErrorOrg/parsers/commit/18bb9960d25843db83cda8bfea932e2e22f44b9b))

## [0.4.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-markup-to-style-0.3.0...ooxast-util-markup-to-style-0.4.0) (2023-09-29)

### Dependency Updates

* `ooxast` updated to version `0.3.0`
* `xast-util-is-element` updated to version `0.3.1`
* `ooxast-util-get-style` updated to version `0.4.0`
* `xast-util-select` updated to version `0.3.0`

### Features

* update all package.json ([d4070e5](https://github.com/TrialAndErrorOrg/parsers/commit/d4070e53ab3389db11fed978f3f74bcfe6808f5e))

## [0.3.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-markup-to-style-0.2.0...ooxast-util-markup-to-style-0.3.0) (2023-09-22)

### Dependency Updates

* `ooxast` updated to version `0.2.0`
* `xast-util-is-element` updated to version `0.2.0`
* `ooxast-util-get-style` updated to version `0.3.0`
* `xast-util-select` updated to version `0.2.0`

### Features

* giant prettier + eslint run ([6becd94](https://github.com/TrialAndErrorOrg/parsers/commit/6becd9492006b9a7f7f91b60db440bb31d9140c8))

## [0.2.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-markup-to-style-0.1.1...ooxast-util-markup-to-style-0.2.0) (2023-09-21)

### Dependency Updates

- `ooxast` updated to version `0.1.4`
- `xast-util-is-element` updated to version `0.1.5`
- `ooxast-util-get-style` updated to version `0.2.2`
- `xast-util-select` updated to version `0.1.3`

### Features

- book-converter! ([f2f74cb](https://github.com/TrialAndErrorOrg/parsers/commit/f2f74cb3f6d9a2ccee2e7fa8f08a435c8cf313a4))

### Bug Fixes

- don't use shady custom builder, just run a script that fixes the package.json ([def3c18](https://github.com/TrialAndErrorOrg/parsers/commit/def3c1844ae0a0d547de2b0a01689a302b58ab61))
- stupid package.json issue ([e27ee3e](https://github.com/TrialAndErrorOrg/parsers/commit/e27ee3ed91619e8adb0de6ed96af99da0ec79198))

## [0.1.1](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-markup-to-style-0.1.0...ooxast-util-markup-to-style-0.1.1) (2023-05-30)

### Dependency Updates

- `ooxast-util-get-style` updated to version `0.2.1`

## [0.1.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-markup-to-style-0.0.2...ooxast-util-markup-to-style-0.1.0) (2023-03-29)

### Features

- **ooxast-util-markup-to-style:** actually traverse trees lmao ([954233a](https://github.com/TrialAndErrorOrg/parsers/commit/954233a5237c1f2afa0fceabbe923655174698fb))

## [0.0.2](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-markup-to-style-0.0.1...ooxast-util-markup-to-style-0.0.2) (2023-03-27)

### Dependency Updates

- `ooxast-util-get-style` updated to version `0.2.0`

### Bug Fixes

- **ooxast-util-markup-to-style:** make better docs ([69fd7c7](https://github.com/TrialAndErrorOrg/parsers/commit/69fd7c75fd2830a54950a3cc2d295d79ea9cf8a6))

## 0.6.0

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
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - ooxast@0.5.0
  - ooxast-util-get-style@0.4.2
  - xast-util-is-element@0.4.1
  - xast-util-select@0.4.1

## 0.0.1 (2023-03-27)

### Dependency Updates

- `ooxast` updated to version `0.1.3`
- `xast-util-is-element` updated to version `0.1.4`
- `ooxast-util-get-style` updated to version `0.1.2`
- `xast-util-select` updated to version `0.1.2`
