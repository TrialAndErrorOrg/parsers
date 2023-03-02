> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

### Module: jast-util-from-csl

#### Functions

##### cslToFront

▸ **cslToFront**(`data`): `void`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `data` | `Data` |

###### Returns

`void`

###### Defined in

[src/lib/csl-to-jast.ts:27](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-from-csl/src/lib/csl-to-jast.ts#L27)

---

##### cslToJats

▸ **cslToJats**(`data`): `void` | `RefList`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `data` | `Data` | `Data`\[] |

###### Returns

`void` | `RefList`

###### Defined in

[src/lib/csl-to-jast.ts:19](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-from-csl/src/lib/csl-to-jast.ts#L19)

---

##### cslToRef

▸ **cslToRef**(`data`, `index`): `Ref`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `data` | `Data` |
\| `index` | `string` | `number` |

###### Returns

`Ref`

###### Defined in

[src/lib/csl-to-jast.ts:44](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-from-csl/src/lib/csl-to-jast.ts#L44)

---

##### cslToRefList

▸ **cslToRefList**(`data`): `RefList`

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `data` | `Data`\[] | { `[key: string | number]`: `CSL`; } |

###### Returns

`RefList`

###### Defined in

[src/lib/csl-to-jast.ts:31](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/jast/jast-util-from-csl/src/lib/csl-to-jast.ts#L31)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add jast-util-from-csl
# or with yarn
# yarn add jast-util-from-csl
# or with npm
# npm install jast-util-from-csl
```

# csl-util-to-jast

Transform a CSL list or object to a \[jast]\[jast] node.
