> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

***

### `crossrefToCsl()`

#### Signature

```ts
crossrefToCsl(item: CrossrefJSON): CSL;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `CrossrefJSON` |

#### Returns

`CSL`

Defined in:  [lib/crossref-to-csl.ts:52](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/crossref-to-csl/src/lib/crossref-to-csl.ts#L52)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add crossref-to-csl
# or with yarn
# yarn add crossref-to-csl
# or with npm
# npm install crossref-to-csl
```

# citations-crossref-to-csl

Tiny utitity to convert an Crossref API resonponse JSON item to CSL.
