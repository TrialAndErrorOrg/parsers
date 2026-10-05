# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [0.6.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-to-unified-latex-0.5.0...ooxast-util-to-unified-latex-0.6.0) (2024-06-28)

### Dependency Updates

* `ooxast-util-get-style` updated to version `0.4.1`
* `ooxast` updated to version `0.4.0`
* `ooxast-util-citations` updated to version `0.5.0`
* `xast-util-is-element` updated to version `0.4.0`
* `xast-util-select` updated to version `0.4.0`
* `docx-to-vfile` updated to version `0.11.0`
* `reoff-parse` updated to version `0.6.0`
* `reoff-clean` updated to version `0.4.0`
* `reoff-cite` updated to version `0.5.0`
* `reoff-parse-references` updated to version `0.4.0`
* `unified-latex-stringify` updated to version `0.3.0`

### Features

* **unified-latex-stringify:** make compatible with new unified types ([108576f](https://github.com/TrialAndErrorOrg/parsers/commit/108576ff63aa727105bdb9e6fffc2070ac9a0836))
* update to new unified versions ([18bb996](https://github.com/TrialAndErrorOrg/parsers/commit/18bb9960d25843db83cda8bfea932e2e22f44b9b))

## [0.5.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-to-unified-latex-0.4.0...ooxast-util-to-unified-latex-0.5.0) (2023-09-29)

### Dependency Updates

* `ooxast-util-get-style` updated to version `0.4.0`
* `ooxast` updated to version `0.3.0`
* `ooxast-util-citations` updated to version `0.4.0`
* `xast-util-is-element` updated to version `0.3.1`
* `xast-util-select` updated to version `0.3.0`
* `csl-to-biblatex` updated to version `0.3.1`
* `docx-to-vfile` updated to version `0.10.0`
* `reoff-parse` updated to version `0.5.0`
* `reoff-clean` updated to version `0.3.0`
* `reoff-cite` updated to version `0.4.0`
* `reoff-parse-references` updated to version `0.3.0`
* `unified-latex-stringify` updated to version `0.2.1`

### Features

* update all package.json ([d4070e5](https://github.com/TrialAndErrorOrg/parsers/commit/d4070e53ab3389db11fed978f3f74bcfe6808f5e))

## [0.4.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-to-unified-latex-0.3.0...ooxast-util-to-unified-latex-0.4.0) (2023-09-22)

### Dependency Updates

* `ooxast-util-get-style` updated to version `0.3.0`
* `ooxast` updated to version `0.2.0`
* `ooxast-util-citations` updated to version `0.3.0`
* `xast-util-is-element` updated to version `0.2.0`
* `xast-util-select` updated to version `0.2.0`
* `csl-to-biblatex` updated to version `0.3.0`
* `docx-to-vfile` updated to version `0.9.0`
* `reoff-parse` updated to version `0.4.0`
* `reoff-clean` updated to version `0.2.0`
* `reoff-cite` updated to version `0.3.0`
* `reoff-parse-references` updated to version `0.2.0`
* `unified-latex-stringify` updated to version `0.2.0`

### Features

* giant prettier + eslint run ([6becd94](https://github.com/TrialAndErrorOrg/parsers/commit/6becd9492006b9a7f7f91b60db440bb31d9140c8))

## [0.3.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-to-unified-latex-0.2.0...ooxast-util-to-unified-latex-0.3.0) (2023-09-21)

### Dependency Updates

- `ooxast-util-get-style` updated to version `0.2.2`
- `ooxast` updated to version `0.1.4`
- `ooxast-util-citations` updated to version `0.2.0`
- `xast-util-is-element` updated to version `0.1.5`
- `xast-util-select` updated to version `0.1.3`
- `csl-to-biblatex` updated to version `0.2.1`
- `docx-to-vfile` updated to version `0.8.2`
- `reoff-parse` updated to version `0.3.0`
- `reoff-clean` updated to version `0.1.2`
- `reoff-cite` updated to version `0.2.0`
- `reoff-parse-references` updated to version `0.1.3`
- `unified-latex-stringify` updated to version `0.1.4`

### Features

- add escaping ([bfc6f3c](https://github.com/TrialAndErrorOrg/parsers/commit/bfc6f3c69601bb192977a3e0238f564fcdbe19df))
- book-converter! ([f2f74cb](https://github.com/TrialAndErrorOrg/parsers/commit/f2f74cb3f6d9a2ccee2e7fa8f08a435c8cf313a4))
- **ooxast-util-to-unified-latex:** add support for hyperlink handler ([51f188e](https://github.com/TrialAndErrorOrg/parsers/commit/51f188e6ad5f4637f1518ca83ca98670e9d69f99))
- **ooxast-util-to-unified-latex:** allow user to specify custom handlers for formatting ([e3bdcdc](https://github.com/TrialAndErrorOrg/parsers/commit/e3bdcdc0e6b4972d26f7c566f0992d77b2775f39))
- **ooxast-util-to-unified-latex:** allow user to specify custom handlers per paragraph ([4b7e202](https://github.com/TrialAndErrorOrg/parsers/commit/4b7e2026b63fe555d68c41ee78c8729591e98353))

### Bug Fixes

- don't use shady custom builder, just run a script that fixes the package.json ([def3c18](https://github.com/TrialAndErrorOrg/parsers/commit/def3c1844ae0a0d547de2b0a01689a302b58ab61))
- make citations work ([67993d3](https://github.com/TrialAndErrorOrg/parsers/commit/67993d33150e05024be7e8df676e59d4cd9c57b1))
- **ooxast-util-to-unified-latex:** just give up on infer heading for now ([4709f1c](https://github.com/TrialAndErrorOrg/parsers/commit/4709f1cbe5fe8bb3e6fbc3ade8f5c92c8c71afb1))

## [0.2.0](https://github.com/TrialAndErrorOrg/parsers/compare/ooxast-util-to-unified-latex-0.1.0...ooxast-util-to-unified-latex-0.2.0) (2023-03-29)

### Dependency Updates

- `csl-to-biblatex` updated to version `0.2.0`
- `ooxast` updated to version `0.1.3`
- `ooxast-util-citations` updated to version `0.1.2`
- `xast-util-is-element` updated to version `0.1.4`
- `xast-util-select` updated to version `0.1.2`
- `reoff-parse` updated to version `0.2.7`
- `docx-to-vfile` updated to version `0.6.1`
- `reoff-clean` updated to version `0.1.1`
- `reoff-cite` updated to version `0.1.2`
- `reoff-parse-references` updated to version `0.1.2`
- `unified-latex-stringify` updated to version `0.1.2`

### Features

- **ooxast-util-to-unified-latex:** add better list parsing ([3441a02](https://github.com/TrialAndErrorOrg/parsers/commit/3441a026a313d6d00eb3693da55a9f947ed10fc8))
- **ooxast-util-to-unified-latex:** improve citation output ([5b4fe11](https://github.com/TrialAndErrorOrg/parsers/commit/5b4fe11bdf9b8a5e07a72da40f03bd6a05e02e48))
- **ooxast-util-to-unified-latex:** improve citation output ([f2a5f2c](https://github.com/TrialAndErrorOrg/parsers/commit/f2a5f2c70c8c3ac33a89c1cbe9e2b0bcaf738a77))

### Bug Fixes

- **ooxast-util-to-unified-latex:** fix list rendering ([c423e1b](https://github.com/TrialAndErrorOrg/parsers/commit/c423e1b06e5d7e8a4181c3b70587f62845431252))
- **ooxast-util-to-unified-latex:** remove 'bare' option for now ([5745e16](https://github.com/TrialAndErrorOrg/parsers/commit/5745e1634f4259ede8ed42489fc51f99cdb72c9e))
- **ooxast-util-to-unified-latex:** set vfile types ([848e72a](https://github.com/TrialAndErrorOrg/parsers/commit/848e72aa5c618455fb8e9fab4f3c1149d7f938a4))

## 0.1.0 (2023-03-09)

### Dependency Updates

- `ooxast` updated to version `0.1.2`
- `ooxast-util-citations` updated to version `0.1.0`
- `xast-util-select` updated to version `0.1.1`
- `xast-util-is-element` updated to version `0.1.2`
- `csl-to-biblatex` updated to version `0.1.1`
- `reoff-parse` updated to version `0.2.2`
- `docx-to-vfile` updated to version `0.5.1`
- `reoff-clean` updated to version `0.1.0`
- `reoff-cite` updated to version `0.1.0`
- `reoff-parse-references` updated to version `0.1.0`

### Features

- brand spanking new project.json ([32e19eb](https://github.com/TrialAndErrorOrg/parsers/commit/32e19ebf3f71c80336f637297d8f4db274d098bf))
- **ooxast-unified:** add lists ([9727206](https://github.com/TrialAndErrorOrg/parsers/commit/9727206eb6f84790e20a4dc19b5070f0309d7ebc))
- **ooxast-util-to-unified-latex:** migrate to new api ([833941a](https://github.com/TrialAndErrorOrg/parsers/commit/833941ab411c94ee0a7ec0fd4a20c6698e00bec3))

### Bug Fixes

- enter a new era ([9c2a0e5](https://github.com/TrialAndErrorOrg/parsers/commit/9c2a0e505472c43d384f3cc78543ad90877b7c3d))
- properly set all package.jsons ([5af9c17](https://github.com/TrialAndErrorOrg/parsers/commit/5af9c177be9910511844c481ca59cfcc7bd9b0f6))
