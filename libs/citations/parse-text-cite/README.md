> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

## API

### Module: parse-text-cite

#### Interfaces

- [Citation](.interfaces/parse_text_cite.Citation.md)
- [CitationItem](.interfaces/parse_text_cite.CitationItem.md)
- [Properties](.interfaces/parse_text_cite.Properties.md)

#### Variables

##### parser

• `Const` **parser**: `Parser`

###### Defined in

[src/lib/parse-text-cite.ts:32](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L32)

#### Functions

##### parseTextCite

▸ **parseTextCite**(`string`, `options?`): `any`\[]

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `string` | `string` |
\| `options?` | `Options` |

###### Returns

`any`\[]

###### Defined in

[src/lib/parse-text-cite.ts:34](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L34)

### Interface: Citation

[parse-text-cite](.modules).Citation

#### Properties

##### citationId

• **citationId**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:6](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L6)

---

##### citationItems

• **citationItems**: [`CitationItem`](.interfaces/parse_text_cite.CitationItem.md)\[]

###### Defined in

[src/lib/parse-text-cite.ts:7](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L7)

---

##### originalText

• `Optional` **originalText**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:9](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L9)

---

##### properties

• **properties**: [`Properties`](.interfaces/parse_text_cite.Properties.md)

###### Defined in

[src/lib/parse-text-cite.ts:8](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L8)

### Interface: CitationItem

[parse-text-cite](.modules).CitationItem

#### Properties

##### id

• **id**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:19](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L19)

---

##### infix

• `Optional` **infix**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:22](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L22)

---

##### itemData

• **itemData**: `Data`

###### Defined in

[src/lib/parse-text-cite.ts:18](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L18)

---

##### label

• `Optional` **label**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:23](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L23)

---

##### locator

• `Optional` **locator**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:24](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L24)

---

##### prefix

• `Optional` **prefix**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:20](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L20)

---

##### suffix

• `Optional` **suffix**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:21](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L21)

### Interface: Properties

[parse-text-cite](.modules).Properties

#### Properties

##### mode

• `Optional` **mode**: `string`

###### Defined in

[src/lib/parse-text-cite.ts:14](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L14)

---

##### noteIndex

• **noteIndex**: `number`

###### Defined in

[src/lib/parse-text-cite.ts:13](https://github.com/TrialAndErrorOrg/parsers/blob/586a0d2/libs/citations/parse-text-cite/src/lib/parse-text-cite.ts#L13)

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add parse-text-cite
# or with yarn
# yarn add parse-text-cite
# or with npm
# npm install parse-text-cite
```

# citations-parse-text-cite

Small tool that parses a string of text containing APA style in text citations, e.g. Jones (2020), and returns a rudimentary AST with the thing parsed.

Not very efficient at all, just uses regex so don't run it on big pieces of text at once. To be used inside other more mature parsers in order to check whether what we are looking at is a citation.
