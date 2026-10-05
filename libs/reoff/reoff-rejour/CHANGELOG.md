# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

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
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - ooxast-util-to-jast@0.2.0
  - jast-types@0.2.0
  - ooxast@0.5.0

## 0.1.0 (2023-03-09)

### Dependency Updates

- `ooxast-util-to-jast` updated to version `0.1.0`
- `jast-types` updated to version `0.1.2`
- `ooxast` updated to version `0.1.2`

### Features

- added eslint and changed tsignore to expect ([95083c0](https://github.com/TrialAndErrorOrg/parsers/commit/95083c07fc19aeb3a4dc2fa0ecbb2597a86c11fa))
- brand spanking new project.json ([32e19eb](https://github.com/TrialAndErrorOrg/parsers/commit/32e19ebf3f71c80336f637297d8f4db274d098bf))
- figure parsing in reoff ([fe2b9f8](https://github.com/TrialAndErrorOrg/parsers/commit/fe2b9f8e9eb1fb2421e3272dcc60fe2b871f2392))
- it working ([53f8f03](https://github.com/TrialAndErrorOrg/parsers/commit/53f8f038f89a6e64a64600b3e6cb8deb1717cda7))
- **pdf:** pdf compilation baybee ([f3cf107](https://github.com/TrialAndErrorOrg/parsers/commit/f3cf107193e3e015da3dc950736aa38e5803b5cd))
- **reoff:** add basic office parsing infrastructure ([3adfb9d](https://github.com/TrialAndErrorOrg/parsers/commit/3adfb9d1b44fe4e6f79a41ae5269c43ddbdfd5c2))

### Bug Fixes

- correct typings and remove ts-expect-error ([6c26b55](https://github.com/TrialAndErrorOrg/parsers/commit/6c26b551e2f328065575854cf7fd77cef0c63c8e))
- fixed all eslint errors like a good boy ([eae924f](https://github.com/TrialAndErrorOrg/parsers/commit/eae924fdc4e9741cc455696daf63754eb5a2481b))
- **jest:** allow jest to be run even if there is a .swcrc ([6f188f2](https://github.com/TrialAndErrorOrg/parsers/commit/6f188f2a06922ee00d9367b29e666894e48c6c1e))
- properly set all package.jsons ([5af9c17](https://github.com/TrialAndErrorOrg/parsers/commit/5af9c177be9910511844c481ca59cfcc7bd9b0f6))
- **reoff-rejour:** update to new format ([a184684](https://github.com/TrialAndErrorOrg/parsers/commit/a184684ec9dc4d6b3810e54a817131861fdd311d))
