# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.1.2](https://github.com/TrialAndErrorOrg/parsers/compare/jast-types-0.1.1...jast-types-0.1.2) (2023-03-09)

## [0.1.1](https://github.com/TrialAndErrorOrg/parsers/compare/jast-types-0.1.0...jast-types-0.1.1) (2023-03-09)

### Bug Fixes

- make small fixes ([3c87afc](https://github.com/TrialAndErrorOrg/parsers/commit/3c87afc5afd38971bba9157b41eb6ee83f7482c2))

## [0.1.1](https://github.com/TrialAndErrorOrg/parsers/compare/jast-types-0.1.0...jast-types-0.1.1) (2023-03-09)

### Bug Fixes

- make small fixes ([3c87afc](https://github.com/TrialAndErrorOrg/parsers/commit/3c87afc5afd38971bba9157b41eb6ee83f7482c2))

## [0.1.1](https://github.com/TrialAndErrorOrg/parsers/compare/jast-types-0.1.0...jast-types-0.1.1) (2023-03-09)

### Bug Fixes

- make small fixes ([3c87afc](https://github.com/TrialAndErrorOrg/parsers/commit/3c87afc5afd38971bba9157b41eb6ee83f7482c2))

## 0.2.0

### Minor Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - **Breaking:** move to the unified 11 ecosystem (unified 11, unist 3, xast 2, mdast 4, hast 3, vfile 6). The exported types now come from these versions, so use this release together with other unified 11 packages.
  
  - `jast-types` declares its own `Data` and `RootData` (unist 3's `Data` has no index signature anymore); augment `Data` to add fields.
  - `ooxast` element types are assignable to xast 2 elements: elements without attributes or children now have `attributes: Record<string, never>` / `children: []`, and text-only drawingml children (`a:t`, …) are `StringElement`s instead of bare strings.
  - `reoff-unified-latex` is typed like `reoff-rejour`, with both bridge overloads, so `.use(reoffUnifiedLatex, options)` typechecks.

### Patch Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - Published from the `TrialAndErrorOrg/parsers` monorepo with npm provenance: `repository` points at the package's directory there, and the build is plain TypeScript (`tsc`) to `dist`. Dependencies are updated to their latest versions.

## 0.1.0 (2023-03-09)

### Features

- brand spanking new project.json ([32e19eb](https://github.com/TrialAndErrorOrg/parsers/commit/32e19ebf3f71c80336f637297d8f4db274d098bf))
- fix names ([a4f65fc](https://github.com/TrialAndErrorOrg/parsers/commit/a4f65fcb2fde9dd23750bc9ccddfb0e1ab11548f))
- **ojs:** add more ojs stuff ([3c55a9d](https://github.com/TrialAndErrorOrg/parsers/commit/3c55a9d17cecef513085c55870728e53bee17194))

### Bug Fixes

- enter a new era ([9c2a0e5](https://github.com/TrialAndErrorOrg/parsers/commit/9c2a0e505472c43d384f3cc78543ad90877b7c3d))
- **jest:** allow jest to be run even if there is a .swcrc ([6f188f2](https://github.com/TrialAndErrorOrg/parsers/commit/6f188f2a06922ee00d9367b29e666894e48c6c1e))
- properly set all package.jsons ([5af9c17](https://github.com/TrialAndErrorOrg/parsers/commit/5af9c177be9910511844c481ca59cfcc7bd9b0f6))
