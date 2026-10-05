# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.4.0](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-unified-latex-0.3.0...reoff-unified-latex-0.4.0) (2024-06-28)

### Dependency Updates

* `ooxast-util-to-unified-latex` updated to version `0.6.0`
* `ooxast` updated to version `0.4.0`

### Features

* update to new unified versions ([18bb996](https://github.com/TrialAndErrorOrg/parsers/commit/18bb9960d25843db83cda8bfea932e2e22f44b9b))

## [0.3.0](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-unified-latex-0.2.0...reoff-unified-latex-0.3.0) (2023-09-29)

### Dependency Updates

* `ooxast-util-to-unified-latex` updated to version `0.5.0`
* `ooxast` updated to version `0.3.0`

### Features

* update all package.json ([d4070e5](https://github.com/TrialAndErrorOrg/parsers/commit/d4070e53ab3389db11fed978f3f74bcfe6808f5e))

## [0.2.0](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-unified-latex-0.1.1...reoff-unified-latex-0.2.0) (2023-09-22)

### Dependency Updates

* `ooxast-util-to-unified-latex` updated to version `0.4.0`
* `ooxast` updated to version `0.2.0`

### Features

* giant prettier + eslint run ([6becd94](https://github.com/TrialAndErrorOrg/parsers/commit/6becd9492006b9a7f7f91b60db440bb31d9140c8))


### Bug Fixes

* bump version of cli converter and reoff-unified-latex bc of incorrect files prop in latter package.json ([14aac64](https://github.com/TrialAndErrorOrg/parsers/commit/14aac64c8257c0e73e97f53dba0ba887f111bbec))
* don't use shady custom builder, just run a script that fixes the package.json ([def3c18](https://github.com/TrialAndErrorOrg/parsers/commit/def3c1844ae0a0d547de2b0a01689a302b58ab61))
* make typecheck work sort of ([d6a2eb6](https://github.com/TrialAndErrorOrg/parsers/commit/d6a2eb690a06d376043309f8bea6f418a4ff16ec))
* **reoff-unified-latex:** try to set types correctly, fail ([772c20a](https://github.com/TrialAndErrorOrg/parsers/commit/772c20ac1f2fd8af41f8c2519cdc32b9d4d6a6dd))
* stupid package.json issue ([e27ee3e](https://github.com/TrialAndErrorOrg/parsers/commit/e27ee3ed91619e8adb0de6ed96af99da0ec79198))

## [0.1.1](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-unified-latex-0.1.0...reoff-unified-latex-0.1.1) (2023-03-29)

### Dependency Updates

- `ooxast-util-to-unified-latex` updated to version `0.2.0`
- `ooxast` updated to version `0.1.3`

### Bug Fixes

- **reoff-unified-latex:** set the types correctly ([4178515](https://github.com/TrialAndErrorOrg/parsers/commit/417851598ddcc2b51292874328a26d3caf98ad2b))

## 0.5.0

### Minor Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - **Changed output:** real manuscripts (Google Docs exports included) now convert to LaTeX that compiles.
  
  - Only `heading N` styles are headings (by style name, so localised ids like `Kop1` work); before, any style ending in a digit was one, so Google Docs' `normal1` turned every paragraph into a `\section`.
  - `w:val="false"` / `"off"` on bold, italic etc. means off. Markup-to-style never restyles a paragraph that already has a heading, Title or Subtitle style, and has a new per-rule `onlyIfNoHeadings` option.
  - Tracked deletions are dropped, line breaks become `\newline`, text in table cells and literal braces are escaped, colours use `\color[HTML]{…}`.
  - Numbered headings are no longer one-item lists; the title is kept when a custom preamble is passed.
  - Only a paragraph holding nothing but a picture becomes a figure; other pictures are inline `\includegraphics`.
  - Tables: the column count comes from `w:tblGrid`, tabularx tables get `X` columns, nested tables work, paragraphs in a cell are separated.
  - Citation keys of organisations as authors no longer contain spaces.

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - **Breaking:** move to the unified 11 ecosystem (unified 11, unist 3, xast 2, mdast 4, hast 3, vfile 6). The exported types now come from these versions, so use this release together with other unified 11 packages.
  
  - `jast-types` declares its own `Data` and `RootData` (unist 3's `Data` has no index signature anymore); augment `Data` to add fields.
  - `ooxast` element types are assignable to xast 2 elements: elements without attributes or children now have `attributes: Record<string, never>` / `children: []`, and text-only drawingml children (`a:t`, …) are `StringElement`s instead of bare strings.
  - `reoff-unified-latex` is typed like `reoff-rejour`, with both bridge overloads, so `.use(reoffUnifiedLatex, options)` typechecks.

### Patch Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - Published from the `TrialAndErrorOrg/parsers` monorepo with npm provenance: `repository` points at the package's directory there, and the build is plain TypeScript (`tsc`) to `dist`. Dependencies are updated to their latest versions.
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - ooxast-util-to-unified-latex@0.7.0
  - ooxast@0.5.0

## 0.1.0 (2023-03-09)

### Dependency Updates

- `ooxast-util-to-unified-latex` updated to version `0.1.0`
- `ooxast` updated to version `0.1.2`

### Features

- **docs:** update docs ([4e5c927](https://github.com/TrialAndErrorOrg/parsers/commit/4e5c927d745469aa1e1cc584d9d218bc88f87e4f))
- **reoff-unified-latex:** add reoff-unified-latex converter ([71d53a9](https://github.com/TrialAndErrorOrg/parsers/commit/71d53a9984b5696db8bd92493e56fef7976567f1))

### Bug Fixes

- **reoff-unified-latex:** pass vfile to converter ([a87284b](https://github.com/TrialAndErrorOrg/parsers/commit/a87284bf345f4f0ad40eaf351ee86a3a47d8c98e))
