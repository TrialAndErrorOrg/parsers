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
  - ooxast-util-citations@0.5.1
  - docx-to-vfile@0.11.1
  - jast-types@0.2.0
  - jast-util-from-csl@0.2.0
  - ooxast@0.5.0
  - ooxast-util-properties@0.2.0
  - xast-util-is-element@0.4.1
  - xast-util-select@0.4.1

## 0.1.0 (2023-03-09)

### Dependency Updates

- `ooxast` updated to version `0.1.2`
- `xast-util-is-element` updated to version `0.1.2`
- `ooxast-util-citations` updated to version `0.1.0`
- `jast-types` updated to version `0.1.2`
- `xast-util-select` updated to version `0.1.1`
- `ooxast-util-properties` updated to version `0.1.1`
- `jast-util-from-csl` updated to version `0.1.1`

### Features

- added eslint and changed tsignore to expect ([95083c0](https://github.com/TrialAndErrorOrg/parsers/commit/95083c07fc19aeb3a4dc2fa0ecbb2597a86c11fa))
- brand spanking new project.json ([32e19eb](https://github.com/TrialAndErrorOrg/parsers/commit/32e19ebf3f71c80336f637297d8f4db274d098bf))
- citations from word to latex works ([1582e25](https://github.com/TrialAndErrorOrg/parsers/commit/1582e2553843505e3ddc2355676e0702418bbfdc))
- **citations:** improve citation recognition somewhat ([93ae18c](https://github.com/TrialAndErrorOrg/parsers/commit/93ae18c42a4bd3e2072c4fb0ffcb350d4fb9c4d2))
- **citations:** infer plugin type, don't break as often ([fd6a8af](https://github.com/TrialAndErrorOrg/parsers/commit/fd6a8af17f5900025cb2c23f3626113e617ba6bb))
- figure parsing in reoff ([fe2b9f8](https://github.com/TrialAndErrorOrg/parsers/commit/fe2b9f8e9eb1fb2421e3272dcc60fe2b871f2392))
- fix type errors ([0ce6946](https://github.com/TrialAndErrorOrg/parsers/commit/0ce6946f228d735dfea5177a941fa23dca474405))
- generate proper citation keys ([3c58da7](https://github.com/TrialAndErrorOrg/parsers/commit/3c58da7e0ac7f10e1ec1da5cecc4676641448a8b))
- it working ([53f8f03](https://github.com/TrialAndErrorOrg/parsers/commit/53f8f038f89a6e64a64600b3e6cb8deb1717cda7))
- it... works ([cf52c8d](https://github.com/TrialAndErrorOrg/parsers/commit/cf52c8d4e0e45a1364ad7be39ca535593835c3ff))
- make citations even more slightly better ([1cee053](https://github.com/TrialAndErrorOrg/parsers/commit/1cee053a5701a0962b91253712c56f5f9c4ca613))
- **ooxast-util-to-jast:** migrate to new api ([9a87805](https://github.com/TrialAndErrorOrg/parsers/commit/9a87805bc8388b16a7ebe41ecff2af8960723ce0))
- **ooxast-util-to-jast:** upgrade to new format ([adf81f4](https://github.com/TrialAndErrorOrg/parsers/commit/adf81f428c21339cbd447ce4930b04ba9b8c553d))
- **ooxast:** add actual ooxml types ([ad3d947](https://github.com/TrialAndErrorOrg/parsers/commit/ad3d9473fac066d0125316360ce759e3b57e4202))
- **parser:** make the parser contain more metadata ([59c8623](https://github.com/TrialAndErrorOrg/parsers/commit/59c8623885f0330e9c945306e09214b5fb378d5b))
- **pdf:** pdf compilation baybee ([f3cf107](https://github.com/TrialAndErrorOrg/parsers/commit/f3cf107193e3e015da3dc950736aa38e5803b5cd))
- **reoff:** add basic office parsing infrastructure ([3adfb9d](https://github.com/TrialAndErrorOrg/parsers/commit/3adfb9d1b44fe4e6f79a41ae5269c43ddbdfd5c2))
- **reoff:** parse mendeley citations properly ([5280b3b](https://github.com/TrialAndErrorOrg/parsers/commit/5280b3bd1ee0fd58c5ce3672b76d6fd7b83659d7))
- slightly better cite parsing ([0bae5bd](https://github.com/TrialAndErrorOrg/parsers/commit/0bae5bd703c1250c6e6f4fcc73c6c9e8635e0494))
- **xast-utils:** add xast-util-select, xast-util-is-element, xast-util-has-attribute ([5f8ab76](https://github.com/TrialAndErrorOrg/parsers/commit/5f8ab764a09da5debb4200ac3a996ced2ca2bbf4))

### Bug Fixes

- fixed all eslint errors like a good boy ([eae924f](https://github.com/TrialAndErrorOrg/parsers/commit/eae924fdc4e9741cc455696daf63754eb5a2481b))
- **ooxast-util-to-jast:** fix last extension error ([f9648ba](https://github.com/TrialAndErrorOrg/parsers/commit/f9648ba9947a78a2dc6362f94707fa49f641c488))
- **parser:** okay now nx bork ([e02fd04](https://github.com/TrialAndErrorOrg/parsers/commit/e02fd0412196e36a7e8f39a4e5cb3664ce2f3305))
- properly set all package.jsons ([5af9c17](https://github.com/TrialAndErrorOrg/parsers/commit/5af9c177be9910511844c481ca59cfcc7bd9b0f6))
- **types:** fixing types ([2893172](https://github.com/TrialAndErrorOrg/parsers/commit/2893172ccf37ad1d12a35fea3ef61700bd24dafb))
- **types:** sike!!!! fixed it nerd ([d94a66d](https://github.com/TrialAndErrorOrg/parsers/commit/d94a66d8dc3c152fcf6ab8a56251b52c6cbb85f7))
- **types:** sike!!!! fixed it nerd ([ebbc049](https://github.com/TrialAndErrorOrg/parsers/commit/ebbc049955437627872653b6cfda120f485bc4ab))
