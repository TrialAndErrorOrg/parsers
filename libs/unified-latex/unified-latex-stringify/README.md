> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# unified-latex-stringify

[![npm version](https://badge.fury.io/js/unified-latex-stringify.svg)](https://badge.fury.io/js/unified-latex-stringify) [![npm downloads](https://img.shields.io/npm/dm/unified-latex-stringify.svg)](https://www.npmjs.com/package/unified-latex-stringify)

Plugin for `unified-latex` that takes an `unified-latex` tree and turns it into LaTeX

## Contents

*   [unified-latex-stringify](#unified-latex-stringify)
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
pnpm add unified-latex-stringify
# or with yarn
# yarn add unified-latex-stringify
# or with npm
# npm install unified-latex-stringify
```

## Use

## API

***

### `default()`

A plugin is a function.
It configures the processor and in turn can receive options.
Plugins can configure processors by interacting with parsers and compilers
(at `this.Parser` or `this.Compiler`) or by specifying how the syntax tree
is handled (by returning a `Transformer`).

#### Signature

```ts
default(this: Processor<void, Root, Root, string>, ...settings: void[]): void;
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `Processor`<`void`, `Root`, `Root`, `string`> | - |
| `...settings` | `void`[] | Configuration for plugin.   Plugins typically receive one options object, but could receive other and   more values.   Users can also pass a boolean instead of settings: `true` (to turn   a plugin on) or `false` (to turn a plugin off).   When a plugin is turned off, it won’t be called.    When creating your own plugins, please accept only a single object!   It allows plugins to be reconfigured and it helps users to know that every   plugin accepts one options object. |

#### Returns

`void`

Plugins can return a `Transformer` to specify how the syntax tree is
handled.

Defined in:  node\_modules/.pnpm/unified\@10.1.2/node\_modules/unified/index.d.ts:531

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

[relatex-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/relatex-parse

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

[reoff]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff

[reoff-parse]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-parse

[reoff-rejour]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/reoff/reoff-rejour

[ooxast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast/ooxast

[ooxast]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/ooxast/ooxast-util-to-jast

[unified-latex-stringify]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/unified-latex-stringify
