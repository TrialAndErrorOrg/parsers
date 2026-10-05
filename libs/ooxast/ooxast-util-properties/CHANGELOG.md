# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.1.1](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-properties-0.1.0...ooxast-util-properties-0.1.1) (2023-03-09)

### Bug Fixes

- **ooxast-util-properties:** actually fix project.json config ([caf0e79](https://github.com/TrialAndErrorOrg/parsers/commit/caf0e79b0e2383f2053f7db5678be56d793348dd))

## 0.2.0

### Minor Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - **Breaking:** move to the unified 11 ecosystem (unified 11, unist 3, xast 2, mdast 4, hast 3, vfile 6). The exported types now come from these versions, so use this release together with other unified 11 packages.
  
  - `jast-types` declares its own `Data` and `RootData` (unist 3's `Data` has no index signature anymore); augment `Data` to add fields.
  - `ooxast` element types are assignable to xast 2 elements: elements without attributes or children now have `attributes: Record<string, never>` / `children: []`, and text-only drawingml children (`a:t`, …) are `StringElement`s instead of bare strings.
  - `reoff-unified-latex` is typed like `reoff-rejour`, with both bridge overloads, so `.use(reoffUnifiedLatex, options)` typechecks.

### Patch Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - Published from the `TrialAndErrorOrg/parsers` monorepo with npm provenance: `repository` points at the package's directory there, and the build is plain TypeScript (`tsc`) to `dist`. Dependencies are updated to their latest versions.
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - xast-util-is-element@0.4.1

## 0.1.0 (2023-03-09)

### Dependency Updates

- `xast-util-is-element` updated to version `0.1.2`

### Features

- brand spanking new project.json ([32e19eb](https://github.com/TrialAndErrorOrg/parsers/commit/32e19ebf3f71c80336f637297d8f4db274d098bf))

### Bug Fixes

- **jest:** allow jest to be run even if there is a .swcrc ([6f188f2](https://github.com/TrialAndErrorOrg/parsers/commit/6f188f2a06922ee00d9367b29e666894e48c6c1e))
- **ooxast-util-properties:** fix project.json config ([0bf1339](https://github.com/TrialAndErrorOrg/parsers/commit/0bf133942c01978c95a058165730a8af95e6fb3d))
- properly set all package.jsons ([5af9c17](https://github.com/TrialAndErrorOrg/parsers/commit/5af9c177be9910511844c481ca59cfcc7bd9b0f6))

## 0.1.0 (2023-03-09)

### Dependency Updates

- `xast-util-is-element` updated to version `0.1.0`

### Features

- brand spanking new project.json ([32e19eb](https://github.com/TrialAndErrorOrg/parsers/commit/32e19ebf3f71c80336f637297d8f4db274d098bf))

### Bug Fixes

- **jest:** allow jest to be run even if there is a .swcrc ([6f188f2](https://github.com/TrialAndErrorOrg/parsers/commit/6f188f2a06922ee00d9367b29e666894e48c6c1e))
- properly set all package.jsons ([5af9c17](https://github.com/TrialAndErrorOrg/parsers/commit/5af9c177be9910511844c481ca59cfcc7bd9b0f6))

## 0.1.0 (2023-03-09)

### Dependency Updates

- `xast-util-is-element` updated to version `0.1.0`

### Features

- brand spanking new project.json ([32e19eb](https://github.com/TrialAndErrorOrg/parsers/commit/32e19ebf3f71c80336f637297d8f4db274d098bf))

### Bug Fixes

- **jest:** allow jest to be run even if there is a .swcrc ([6f188f2](https://github.com/TrialAndErrorOrg/parsers/commit/6f188f2a06922ee00d9367b29e666894e48c6c1e))
- properly set all package.jsons ([5af9c17](https://github.com/TrialAndErrorOrg/parsers/commit/5af9c177be9910511844c481ca59cfcc7bd9b0f6))
