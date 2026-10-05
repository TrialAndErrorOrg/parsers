# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.2.0](https://github.com/TrialAndErrorOrg/parsers/compare/reoff-remark-0.1.0...reoff-remark-0.2.0) (2023-09-22)

### Dependency Updates

* `ooxast-util-to-mdast` updated to version `0.2.0`
* `ooxast` updated to version `0.2.0`

### Features

* giant prettier + eslint run ([6becd94](https://github.com/TrialAndErrorOrg/parsers/commit/6becd9492006b9a7f7f91b60db440bb31d9140c8))


### Bug Fixes

* don't use shady custom builder, just run a script that fixes the package.json ([def3c18](https://github.com/TrialAndErrorOrg/parsers/commit/def3c1844ae0a0d547de2b0a01689a302b58ab61))
* make typecheck work sort of ([d6a2eb6](https://github.com/TrialAndErrorOrg/parsers/commit/d6a2eb690a06d376043309f8bea6f418a4ff16ec))
* stupid package.json issue ([e27ee3e](https://github.com/TrialAndErrorOrg/parsers/commit/e27ee3ed91619e8adb0de6ed96af99da0ec79198))

## 0.3.0

### Minor Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - **Breaking:** move to the unified 11 ecosystem (unified 11, unist 3, xast 2, mdast 4, hast 3, vfile 6). The exported types now come from these versions, so use this release together with other unified 11 packages.
  
  - `jast-types` declares its own `Data` and `RootData` (unist 3's `Data` has no index signature anymore); augment `Data` to add fields.
  - `ooxast` element types are assignable to xast 2 elements: elements without attributes or children now have `attributes: Record<string, never>` / `children: []`, and text-only drawingml children (`a:t`, …) are `StringElement`s instead of bare strings.
  - `reoff-unified-latex` is typed like `reoff-rejour`, with both bridge overloads, so `.use(reoffUnifiedLatex, options)` typechecks.

### Patch Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - Published from the `TrialAndErrorOrg/parsers` monorepo with npm provenance: `repository` points at the package's directory there, and the build is plain TypeScript (`tsc`) to `dist`. Dependencies are updated to their latest versions.
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - ooxast-util-to-mdast@0.3.0
  - ooxast@0.5.0

## 0.1.0 (2023-03-14)

### Dependency Updates

- `ooxast-util-to-mdast` updated to version `0.1.0`
- `ooxast` updated to version `0.1.3`

### Features

- **reoff-remark:** add reoff-remark ([56c96fe](https://github.com/TrialAndErrorOrg/parsers/commit/56c96fea61af92eac769096b9e33e0a69a596f58))

### Bug Fixes

- **reoff-remark:** export correct options ([8b0c205](https://github.com/TrialAndErrorOrg/parsers/commit/8b0c2055ae6dcaa41c09c7d53624379f69ca5e52))

## 0.1.0 (2023-03-09)

### Dependency Updates

- `ooxast-util-to-remark` updated to version `0.1.0`
- `ooxast` updated to version `0.1.2`

### Features

- **docs:** update docs ([4e5c927](https://github.com/TrialAndErrorOrg/parsers/commit/4e5c927d745469aa1e1cc584d9d218bc88f87e4f))
- **reoff-remark:** add reoff-remark converter ([71d53a9](https://github.com/TrialAndErrorOrg/parsers/commit/71d53a9984b5696db8bd92493e56fef7976567f1))

### Bug Fixes

- **reoff-remark:** pass vfile to converter ([a87284b](https://github.com/TrialAndErrorOrg/parsers/commit/a87284bf345f4f0ad40eaf351ee86a3a47d8c98e))
