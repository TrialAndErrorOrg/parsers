> **Note**
> This repository is

# citations-parse-text-cite

Small tool that parses a string of text containing APA style in text citations, e.g. Jones (2020), and returns a rudimentary AST with the thing parsed.

Not very efficient at all, just uses regex so don't run it on big pieces of text at once. To be used inside other more mature parsers in order to check whether what we are looking at is a citation.
automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add parse-text-cite
# or with yarn
# yarn add parse-text-cite
# or with npm
# npm install parse-text-cite
```

## API

***

### `parseTextCite()`

#### Signature

```ts
parseTextCite(string: string, options?: Options): any[];
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |
| `options?` | `Options` |

#### Returns

`any`[]

Defined in:  [lib/parse-text-cite.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L34)

***

### `parser`

> **`Const`** `Parser`

Defined in:  [lib/parse-text-cite.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L32)

***

### `Citation`

#### Properties

##### `citationId`

> `string`

Defined in:  [lib/parse-text-cite.ts:6](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L6)

##### `citationItems`

> [`CitationItem`](modules.md#citationitem)[]

Defined in:  [lib/parse-text-cite.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L7)

##### `originalText?`

> `string`

Defined in:  [lib/parse-text-cite.ts:9](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L9)

##### `properties`

> [`Properties`](modules.md#properties)

Defined in:  [lib/parse-text-cite.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L8)

***

### `CitationItem`

#### Properties

##### `id`

> `string`

Defined in:  [lib/parse-text-cite.ts:19](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L19)

##### `infix?`

> `string`

Defined in:  [lib/parse-text-cite.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L22)

##### `itemData`

> `Data`

Defined in:  [lib/parse-text-cite.ts:18](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L18)

##### `label?`

> `string`

Defined in:  [lib/parse-text-cite.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L23)

##### `locator?`

> `string`

Defined in:  [lib/parse-text-cite.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L24)

##### `prefix?`

> `string`

Defined in:  [lib/parse-text-cite.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L20)

##### `suffix?`

> `string`

Defined in:  [lib/parse-text-cite.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L21)

***

### `Properties`

#### Properties

##### `mode?`

> `string`

Defined in:  [lib/parse-text-cite.ts:14](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L14)

##### `noteIndex`

> `number`

Defined in:  [lib/parse-text-cite.ts:13](https://github.com/TrialAndErrorOrg/parsers/blob/d1cc864/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L13)

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna
