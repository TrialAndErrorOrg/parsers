# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.1.2](https://github.com/TrialAndErrorOrg/parsers/compare/jast-util-to-csl-0.1.1...jast-util-to-csl-0.1.2) (2023-03-09)

### Dependency Updates

- `rejour-parse` updated to version `0.1.1`
- `jast-types` updated to version `0.1.2`
- `xast-util-is-element` updated to version `0.1.2`
- `xast-util-select` updated to version `0.1.1`

## [0.1.1](https://github.com/TrialAndErrorOrg/parsers/compare/jast-util-to-csl-0.1.0...jast-util-to-csl-0.1.1) (2023-03-09)

### Bug Fixes

- **jast-util-to-csl:** remove slow visit dependency ([936345f](https://github.com/TrialAndErrorOrg/parsers/commit/936345f4baf354bc676d9c005378720699b53eb9))

## 0.2.0

### Minor Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - **Breaking:** move to the unified 11 ecosystem (unified 11, unist 3, xast 2, mdast 4, hast 3, vfile 6). The exported types now come from these versions, so use this release together with other unified 11 packages.
  
  - `jast-types` declares its own `Data` and `RootData` (unist 3's `Data` has no index signature anymore); augment `Data` to add fields.
  - `ooxast` element types are assignable to xast 2 elements: elements without attributes or children now have `attributes: Record<string, never>` / `children: []`, and text-only drawingml children (`a:t`, …) are `StringElement`s instead of bare strings.
  - `reoff-unified-latex` is typed like `reoff-rejour`, with both bridge overloads, so `.use(reoffUnifiedLatex, options)` typechecks.

### Patch Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - Bug fixes:
  
  - `jast-util-to-csl`: CSL `date-parts` ordered year, month, day.
  - `ooxast-util-citations`: native Word citations inside content controls (`w:sdt`) are reparsed
  - `ooxast-util-remove-rsid`: merging keeps content.
  - `ooxast-util-to-jast`: only `heading N` styles are headings; sections are numbered from `sec-1`; footnotes and relations are read from the VFile; citation xrefs get the field code's position.
  - `ooxast-util-to-mdast`: links and images are kept (relations are read per part), and underline/sub/sup text renders instead of `[object Object]`.
  - `rejour-parse` actually use `removeWhiteSpace` option.
  - `rejour-stringify` writes kebab-case JATS names again (it wrote the camelCased names from `rejour-parse`).
  - `reoff-rejour` passes the VFile and its document relations to `ooxast-util-to-jast`.

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - Published from the `TrialAndErrorOrg/parsers` monorepo with npm provenance: `repository` points at the package's directory there, and the build is plain TypeScript (`tsc`) to `dist`. Dependencies are updated to their latest versions.
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - jast-types@0.2.0
  - xast-util-is-element@0.4.1
  - xast-util-select@0.4.1

## 0.1.0 (2023-03-09)

### Dependency Updates

- `rejour-parse` updated to version `0.1.0`
- `jast-types` updated to version `0.1.0`
- `utils-misc` updated to version `0.1.0`

### Features

- brand spanking new project.json ([32e19eb](https://github.com/TrialAndErrorOrg/parsers/commit/32e19ebf3f71c80336f637297d8f4db274d098bf))

### Bug Fixes

- enter a new era ([9c2a0e5](https://github.com/TrialAndErrorOrg/parsers/commit/9c2a0e505472c43d384f3cc78543ad90877b7c3d))
- **jest:** allow jest to be run even if there is a .swcrc ([6f188f2](https://github.com/TrialAndErrorOrg/parsers/commit/6f188f2a06922ee00d9367b29e666894e48c6c1e))
- properly set all package.jsons ([5af9c17](https://github.com/TrialAndErrorOrg/parsers/commit/5af9c177be9910511844c481ca59cfcc7bd9b0f6))
- types ([1a8bf9c](https://github.com/TrialAndErrorOrg/parsers/commit/1a8bf9c26bcc283c3a9d443e94e238881b9e2336))
