> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

***

### `docxToTex()`

#### Signature

```ts
docxToTex(input: Uint8Array, options: object = {}): Promise<VFile>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Uint8Array` |
| `options` | `object` |
| `options.citationType?` | `"endnote"` | `"native"` | `"mendeley"` | `"citavi"` | `"zotero"` |
| `options.mailto?` | `string` |
| `options.url?` | `string` |

#### Returns

`Promise`<`VFile`>

Defined in:  [lib/processors-jote-docx-tex.ts:15](https://github.com/TrialAndErrorOrg/parsers/blob/34b3326/libs/processors/jote-docx-tex/src/lib/processors-jote-docx-tex.ts#L15)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add jote-docx-tex
# or with yarn
# yarn add jote-docx-tex
# or with npm
# npm install jote-docx-tex
```

# processors-jote-docx-tex

Can't really remember what this is lmao

## Running unit tests
