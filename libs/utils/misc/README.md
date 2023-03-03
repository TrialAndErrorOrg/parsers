> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

***

### `tryCatchPromise()`

#### Signature

```ts
tryCatchPromise<T>(promise: Promise<T>, errorHandler?: Function): Promise<[T | null, unknown | null]>;
```

#### Type parameters

*   `T` = `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `promise` | `Promise`<`T`> |
| `errorHandler?` | (`error`: `unknown`) => `void` |

#### Returns

`Promise`<[`T` | `null`, `unknown` | `null`]>

Defined in:  [lib/tryCatchPromise.ts:1](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/utils/misc/src/lib/tryCatchPromise.ts#L1)

***

### `tryCatchVoid()`

#### Signature

```ts
tryCatchVoid(func: any, errorHandler?: Function): unknown | void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `any` |
| `errorHandler?` | (`error`: `any`) => `void` |

#### Returns

`unknown` | `void`

Defined in:  [lib/tryCatchVoid.ts:1](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/utils/misc/src/lib/tryCatchVoid.ts#L1)

***

### `utils()`

#### Signature

```ts
utils(): string;
```

#### Returns

`string`

Defined in:  [lib/utils.ts:1](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/utils/misc/src/lib/utils.ts#L1)

***

### `map`

> **`Const`** `any`

Defined in:  [lib/unistMap.ts:3](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/utils/misc/src/lib/unistMap.ts#L3)

***

### `remove`

> **`Const`** `any`

Defined in:  [lib/unistRemove.ts:3](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/utils/misc/src/lib/unistRemove.ts#L3)

***

### `visit`

> **`Const`** `any`

Defined in:  [lib/unistVisit.ts:3](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/utils/misc/src/lib/unistVisit.ts#L3)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add misc
# or with yarn
# yarn add misc
# or with npm
# npm install misc
```

# utils-misc

Miscellaneous utilities.

## Contents

*   [utils-misc](#utils-misc)
    *   [Contents](#contents)
    *   [Running unit tests](#running-unit-tests)
    *   [Use](#use)
    *   [License](#license)

## Running unit tests

Run `nx test utils-misc` to execute the unit tests via [Jest](https://jestjs.io).

## Use

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna
