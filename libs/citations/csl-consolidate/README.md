> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

### Module: csl-consolidate

#### Functions

##### consolidate

▸ **consolidate**(`data`, `options`): `Promise`<`undefined` | `Data`\[]>

Try to resolve a list of CSL data with crossref metadata

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `data` | `Data`\[] |
\| `options` | `Object` |
\| `options.mailto` | `string` |

###### Returns

`Promise`<`undefined` | `Data`\[]>

###### Defined in

[src/lib/csl-consolidate.ts:12](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/csl-consolidate/src/lib/csl-consolidate.ts#L12)

---

##### dateSim

▸ **dateSim**(`ref`, `csl`): `number`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `ref` | `Data` |
\| `csl` | `Data` |

###### Returns

`number`

###### Defined in

[src/lib/csl-consolidate.ts:144](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/csl-consolidate/src/lib/csl-consolidate.ts#L144)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add csl-consolidate
# or with yarn
# yarn add csl-consolidate
# or with npm
# npm install csl-consolidate
```

# citations-csl-consolidate

Small utility script which checks a list of CSL references against the Crossref doi.
If possible it adds the missing DOIs and extra metadata provided by Crossref or the doi provider.
