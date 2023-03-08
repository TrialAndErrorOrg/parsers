> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# rejour-parse

Parser for `rejour` that parses the `JATS` document to a `jast` tree.

## Contents

*   [rejour-parse](#rejour-parse)
    *   [Contents](#contents)
    *   [What is this?](#what-is-this)
    *   [When should I use this?](#when-should-i-use-this)
    *   [Install](#install)
    *   [Use](#use)
    *   [API](#api)
    *   [Syntax tree](#syntax-tree)
    *   [Types](#types)
    *   [Compatibility](#compatibility)
    *   [Security](#security)
    *   [Related](#related)
    *   [Contribute](#contribute)
    *   [License](#license)

## What is this?

## When should I use this?

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add rejour-parse
# or with yarn
# yarn add rejour-parse
# or with npm
# npm install rejour-parse
```

## Use

## API

***

### `default()`

#### Signature

```ts
default(options: Settings = {}): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Settings`](modules.md#settings) |

#### Returns

`void`

Defined in:  [lib/rejour-parse.ts:18](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/rejour/rejour-parse/src/lib/rejour-parse.ts#L18)

***

### `Settings`

#### Properties

##### `fragment?`

> `boolean`

Defined in:  [lib/rejour-parse.ts:15](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/rejour/rejour-parse/src/lib/rejour-parse.ts#L15)

##### `removeWhiteSpace?`

> `boolean`

Defined in:  [lib/rejour-parse.ts:14](https://github.com/TrialAndErrorOrg/parsers/blob/5af9c17/libs/rejour/rejour-parse/src/lib/rejour-parse.ts#L14)

## Syntax tree

## Types

## Compatibility

## Security

## Related

## Contribute

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna

[unified]: https://unifiedjs.com

[unifiedgh]: https://github.com/unifiedjs/unified

[xast-from-xml]: https://github.com/syntax-tree/xast-util-from-xml

[rehype]: https://github.com/rehypejs/rehype

[rejour]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour

[rejour-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-parse

[rejour-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-stringify

[rejour-move-abstract]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-move-abstract

[rejour-meta]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-meta

[rejour-relatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/rejour-relatex

[relatex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex

[relatex-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/relatex-stringify

[jast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast

[jast-util-to-texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jast-util-to-texast

[jastscript]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/rejour/jastscript

[texast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast

[texast-util-to-latex]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/texast-util-to-latex

[hast]: https://github.com/syntax-tree/hast

[xast]: https://github.com/syntax-tree/xast

[mdast]: https://github.com/syntax-tree/mdast

[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown

[latex-utensils]: https://github.com/tamuratak/latex-utensils

[latexjs]: https://github.com/latexjs/latexjs
