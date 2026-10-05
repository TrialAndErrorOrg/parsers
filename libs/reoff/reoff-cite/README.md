> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

***

### `default()`

#### Signature

```ts
default(options: Options = ...): Function;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Options` |

#### Returns

`Function`

##### `Signature`

```ts
(tree: Root, vfile: VFile): Root;
```

##### `Parameters`

| Name | Type |
| :------ | :------ |
| `tree` | `Root` |
| `vfile` | `VFile` |

##### `Returns`

`Root`

Defined in:  [lib/reoff-cite.ts:12](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/reoff/reoff-cite/src/lib/reoff-cite.ts#L12)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add reoff-cite
# or with yarn
[![npm version](https://badge.fury.io/js/reoff-cite.svg)](https://badge.fury.io/js/reoff-cite) [![npm downloads](https://img.shields.io/npm/dm/reoff-cite.svg)](https://www.npmjs.com/package/reoff-cite)
# yarn add reoff-cite
# or with npm
# npm install reoff-cite
```

# reoff-cite

Plugin for `reoff` that parses citations in the form of `@cite{key}` and `@cite[page]{key}` using `ooxast-util-parse-bib` and `ooxast-util-parse-text-cite`.

## Running unit tests

Run `nx test reoff-reoff-cite` to execute the unit tests via [Jest](https://jestjs.io).
