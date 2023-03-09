> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

***

### `cslToFront()`

#### Signature

```ts
cslToFront(data: Data): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data` |

#### Returns

`void`

Defined in:  [lib/csl-to-jast.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-from-csl/src/lib/csl-to-jast.ts#L27)

***

### `cslToJats()`

#### Signature

```ts
cslToJats(data: Data | Data[]): void | RefList;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data` | `Data`[] |

#### Returns

`void` | `RefList`

Defined in:  [lib/csl-to-jast.ts:19](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-from-csl/src/lib/csl-to-jast.ts#L19)

***

### `cslToRef()`

#### Signature

```ts
cslToRef(data: Data, index: string | number): Ref;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data` |
| `index` | `string` | `number` |

#### Returns

`Ref`

Defined in:  [lib/csl-to-jast.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-from-csl/src/lib/csl-to-jast.ts#L44)

***

### `cslToRefList()`

#### Signature

```ts
cslToRefList(data: Data[] | {

}): RefList;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Data`[] | {  } |

#### Returns

`RefList`

Defined in:  [lib/csl-to-jast.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/main/libs/jast/jast-util-from-csl/src/lib/csl-to-jast.ts#L31)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add jast-util-from-csl
# or with yarn
[![npm version](https://badge.fury.io/js/jast-util-from-csl.svg)](https://badge.fury.io/js/jast-util-from-csl) [![npm downloads](https://img.shields.io/npm/dm/jast-util-from-csl.svg)](https://www.npmjs.com/package/jast-util-from-csl)
# yarn add jast-util-from-csl
# or with npm
# npm install jast-util-from-csl
```

# csl-util-to-jast

Transform a CSL list or object to a [jast][jast] node.
