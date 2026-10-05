# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.2.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-to-mdast-0.1.0...ooxast-util-to-mdast-0.2.0) (2023-09-22)

### Dependency Updates

* `ooxast` updated to version `0.2.0`
* `ooxast-util-citations` updated to version `0.3.0`
* `xast-util-select` updated to version `0.2.0`
* `xast-util-is-element` updated to version `0.2.0`
* `reoff-parse` updated to version `0.4.0`
* `docx-to-vfile` updated to version `0.9.0`
* `reoff-clean` updated to version `0.2.0`
* `reoff-cite` updated to version `0.3.0`
* `reoff-parse-references` updated to version `0.2.0`

### Features

* giant prettier + eslint run ([6becd94](https://github.com/TrialAndErrorOrg/parsers/commit/6becd9492006b9a7f7f91b60db440bb31d9140c8))


### Bug Fixes

* don't use shady custom builder, just run a script that fixes the package.json ([def3c18](https://github.com/TrialAndErrorOrg/parsers/commit/def3c1844ae0a0d547de2b0a01689a302b58ab61))
* make typecheck work sort of ([d6a2eb6](https://github.com/TrialAndErrorOrg/parsers/commit/d6a2eb690a06d376043309f8bea6f418a4ff16ec))

## 0.3.0

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
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - ooxast-util-citations@0.5.1
  - docx-to-vfile@0.11.1
  - ooxast@0.5.0
  - xast-util-is-element@0.4.1
  - xast-util-select@0.4.1

## 0.1.0 (2023-03-14)

### Dependency Updates

- `ooxast` updated to version `0.1.3`
- `ooxast-util-citations` updated to version `0.1.1`
- `xast-util-select` updated to version `0.1.2`
- `xast-util-is-element` updated to version `0.1.4`
- `reoff-parse` updated to version `0.2.5`
- `docx-to-vfile` updated to version `0.5.3`
- `reoff-clean` updated to version `0.1.1`
- `reoff-cite` updated to version `0.1.1`
- `reoff-parse-references` updated to version `0.1.1`

### Features

- **ooxast-util-to-mdast:** add hyperlink support and write readme ([35c66de](https://github.com/TrialAndErrorOrg/parsers/commit/35c66debe846f30fb88122f2cdea085e39c32c26))
- **ooxast-util-to-mdast:** add initial ooxast-mdast implementation ([88445ca](https://github.com/TrialAndErrorOrg/parsers/commit/88445caf759f9bb4d668789e2146050240cd9012))
- **ooxast-util-to-mdast:** add math and bad citation support ([797f95a](https://github.com/TrialAndErrorOrg/parsers/commit/797f95addd245a57b7b79223698b446d97e1ec5b))
- **ooxast-util-to-mdast:** make big progress, add better list parsing ([7076bac](https://github.com/TrialAndErrorOrg/parsers/commit/7076bac9b39ae9aea05b9725f877d5a19b0bfc02))

### Bug Fixes

- **ooxast-util-to-mdast:** fix tiny thing ([de9953a](https://github.com/TrialAndErrorOrg/parsers/commit/de9953ad0e26633c38b4df0e72efd52019677867))
- **ooxast-util-to-mdast:** properly set output type ([a200b4e](https://github.com/TrialAndErrorOrg/parsers/commit/a200b4ee819e2421f059d6d983c1b14f037fb68c))
- **reoff-remark:** export correct options ([8b0c205](https://github.com/TrialAndErrorOrg/parsers/commit/8b0c2055ae6dcaa41c09c7d53624379f69ca5e52))
