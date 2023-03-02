> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

### Module: reoff-parse-references-browser

#### Functions

##### default

▸ **default**(`options`): (`tree`: `Root`, `vfile`: `VFile`) => `Promise`<`Root`>

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `options` | `Options` |

###### Returns

`fn`

▸ (`tree`, `vfile`): `Promise`<`Root`>

\####### Parameters

\| Name | Type |
\| :------ | :------ |
\| `tree` | `Root` |
\| `vfile` | `VFile` |

\####### Returns

`Promise`<`Root`>

###### Defined in

[src/lib/reoff-parse-references.ts:5](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/reoff/reoff-parse-references-browser/src/lib/reoff-parse-references.ts#L5)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add reoff-parse-references-browser
# or with yarn
# yarn add reoff-parse-references-browser
# or with npm
# npm install reoff-parse-references-browser
```

# reoff-parse-references

Plugin for `reoff` which tries to find a bibliography in the document and parse it using `ooxast-util-parse-bib`.

## Running unit tests

Run `nx test reoff-reoff-parse-references` to execute the unit tests via [Jest](https://jestjs.io).
