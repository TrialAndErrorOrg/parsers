# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.3.2](https://github.com/TrialAndErrorOrg/parsers/compare/book-converter-0.3.1...book-converter-0.3.2) (2024-06-29)


### Bug Fixes

* remove hardcoded heading2 stuff ([1ac1155](https://github.com/TrialAndErrorOrg/parsers/commit/1ac1155783820cc177cf07a93d6cac1fb2572d99))

## [0.3.1](https://github.com/TrialAndErrorOrg/parsers/compare/book-converter-0.3.0...book-converter-0.3.1) (2024-06-28)


### Bug Fixes

* include schema.json ([cdcd98f](https://github.com/TrialAndErrorOrg/parsers/commit/cdcd98f507c82529a82192e1c90368f67a4fcd0e))

## [0.3.0](https://github.com/TrialAndErrorOrg/parsers/compare/book-converter-0.2.0...book-converter-0.3.0) (2024-06-28)

### Dependency Updates

* `ooxast-util-markup-to-style` updated to version `0.5.0`
* `reoff-unified-latex` updated to version `0.4.0`
* `unified-latex-stringify` updated to version `0.3.0`
* `docx-to-vfile` updated to version `0.11.0`
* `reoff-clean` updated to version `0.4.0`
* `reoff-markup-to-style` updated to version `0.3.0`
* `reoff-parse-references` updated to version `0.4.0`
* `reoff-cite` updated to version `0.5.0`
* `ooxast` updated to version `0.4.0`
* `ooxast-util-get-style` updated to version `0.4.1`
* `reoff-parse` updated to version `0.6.0`
* `ooxast-util-to-unified-latex` updated to version `0.6.0`

### Features

* update to new unified versions ([18bb996](https://github.com/TrialAndErrorOrg/parsers/commit/18bb9960d25843db83cda8bfea932e2e22f44b9b))


### Bug Fixes

* allow some more options and export schema ([3b30c56](https://github.com/TrialAndErrorOrg/parsers/commit/3b30c5697b316a343809133011f50ba6d162bd44))

## [0.2.0](https://github.com/TrialAndErrorOrg/parsers/compare/book-converter-0.1.0...book-converter-0.2.0) (2023-09-29)

### Dependency Updates

* `ooxast-util-markup-to-style` updated to version `0.4.0`
* `reoff-unified-latex` updated to version `0.3.0`
* `unified-latex-stringify` updated to version `0.2.1`
* `docx-to-vfile` updated to version `0.10.0`
* `reoff-clean` updated to version `0.3.0`
* `reoff-markup-to-style` updated to version `0.2.0`
* `reoff-parse-references` updated to version `0.3.0`
* `reoff-cite` updated to version `0.4.0`
* `ooxast` updated to version `0.3.0`
* `ooxast-util-get-style` updated to version `0.4.0`
* `reoff-parse` updated to version `0.5.0`
* `ooxast-util-to-unified-latex` updated to version `0.5.0`

### Features

* add modified package check eslint rule ([aec2486](https://github.com/TrialAndErrorOrg/parsers/commit/aec2486cf5196a1c370c5575b5f6fae405b7b5de))
* update all package.json ([d4070e5](https://github.com/TrialAndErrorOrg/parsers/commit/d4070e53ab3389db11fed978f3f74bcfe6808f5e))

## 0.4.0

### Minor Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - **Breaking:** move to zod 4, yargs 18, chokidar 5 and js-yaml 5. The JSON schema for config files is now exported as `@trialanderror/converter-cli/schema.json`, generated with zod's own `z.toJSONSchema`. The index stats are returned in the declared `Output` shape.

### Patch Changes

- [#134](https://github.com/TrialAndErrorOrg/parsers/pull/134) [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e) Thanks [@tefkah](https://github.com/tefkah)! - Published from the `TrialAndErrorOrg/parsers` monorepo with npm provenance: `repository` points at the package's directory there, and the build is plain TypeScript (`tsc`) to `dist`. Dependencies are updated to their latest versions.
- Updated dependencies [[`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e), [`721606c`](https://github.com/TrialAndErrorOrg/parsers/commit/721606cdc14277e234da470475048bddad80be5e)]:
  - ooxast-util-to-unified-latex@0.7.0
  - ooxast-util-markup-to-style@0.6.0
  - reoff-markup-to-style@0.4.0
  - reoff-unified-latex@0.5.0
  - docx-to-vfile@0.11.1
  - ooxast@0.5.0
  - ooxast-util-get-style@0.4.2
  - reoff-cite@0.5.1
  - reoff-clean@0.4.1
  - reoff-parse@0.6.1
  - reoff-parse-references@0.4.1
  - unified-latex-stringify@0.3.1

## 0.1.0 (2023-09-22)

### Dependency Updates

* `ooxast-util-markup-to-style` updated to version `0.3.0`
* `reoff-parse` updated to version `0.4.0`
* `reoff-unified-latex` updated to version `0.2.0`
* `unified-latex-stringify` updated to version `0.2.0`
* `docx-to-vfile` updated to version `0.9.0`
* `ooxast-util-to-unified-latex` updated to version `0.4.0`
* `reoff-markup-to-style` updated to version `0.1.0`
* `reoff-parse-references` updated to version `0.2.0`
* `reoff-cite` updated to version `0.3.0`
* `ooxast` updated to version `0.2.0`
* `ooxast-util-get-style` updated to version `0.3.0`
* `reoff-clean` updated to version `0.2.0`

### Features

* book cli ([4c865ae](https://github.com/TrialAndErrorOrg/parsers/commit/4c865ae3a28bdf509b23e049520edac0a89c20ba))
* book converter! not very polished yet ([9ac0d8b](https://github.com/TrialAndErrorOrg/parsers/commit/9ac0d8b0d034ca0e6a0940b2219084ebb36f1f64))
* book-converter! ([f2f74cb](https://github.com/TrialAndErrorOrg/parsers/commit/f2f74cb3f6d9a2ccee2e7fa8f08a435c8cf313a4))
* **book-converter:** auto word to latex converter (wip) ([541bf5b](https://github.com/TrialAndErrorOrg/parsers/commit/541bf5bb9260a0a6122604a920adc507c716fac5))
* giant prettier + eslint run ([6becd94](https://github.com/TrialAndErrorOrg/parsers/commit/6becd9492006b9a7f7f91b60db440bb31d9140c8))


### Bug Fixes

* ? ([508c7ce](https://github.com/TrialAndErrorOrg/parsers/commit/508c7ce1347cd18173fc98760f7fc93c2fc320c6))
* bump version of cli converter and reoff-unified-latex bc of incorrect files prop in latter package.json ([14aac64](https://github.com/TrialAndErrorOrg/parsers/commit/14aac64c8257c0e73e97f53dba0ba887f111bbec))
* don't use shady custom builder, just run a script that fixes the package.json ([def3c18](https://github.com/TrialAndErrorOrg/parsers/commit/def3c1844ae0a0d547de2b0a01689a302b58ab61))
* fix builds ([053a878](https://github.com/TrialAndErrorOrg/parsers/commit/053a878bb92321c36d3e35ab24e8d92b49abecc0))
* make converter cli module ([139b3b0](https://github.com/TrialAndErrorOrg/parsers/commit/139b3b05d685d50a90e468664d7ff78c0f26cc02))
* remove misc dependency ([dc33f05](https://github.com/TrialAndErrorOrg/parsers/commit/dc33f053cacdfb632d0a44e573f8d84fe5382520))
* stupid package.json issue ([e27ee3e](https://github.com/TrialAndErrorOrg/parsers/commit/e27ee3ed91619e8adb0de6ed96af99da0ec79198))
* use the right name idiot ([66be7e7](https://github.com/TrialAndErrorOrg/parsers/commit/66be7e71481534e9e663982c46bae017e3f8301c))
