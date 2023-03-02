> **Note**
> This repository is automatically generated from the [main parser monorepo](https://github.com/TrialAndErrorOrg/parsers). Please submit any issues or pull requests there.

# reoff-rejour

Plugin for `reoff` that transforms an `ooxast` syntax tree into a `jats` syntax tree, i.e. converting `.docx` to `JATS XML`.

## Contents

- [reoff-rejour](#reoff-rejour)
  - [Contents](#contents)
  - [What is this?](#what-is-this)
  - [When should I use this?](#when-should-i-use-this)
  - [Install](#install)
  - [Use](#use)
  - [API](#api)
  - [Syntax tree](#syntax-tree)
  - [Types](#types)
  - [Compatibility](#compatibility)
  - [Security](#security)
  - [Related](#related)
  - [Contribute](#contribute)
  - [License](#license)

## What is this?

## When should I use this?

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, 16.0+, 18.0+), install as

```bash
pnpm add reoff-rejour
# or with yarn
# yarn add reoff-rejour
# or with npm
# npm install reoff-rejour
```

## Use

## API

### Module: reoff-rejour

#### Functions

##### default

▸ **default**(`this`, `...settings`): `void` | `Transformer`<`Root`, `Root`>

Plugin to bridge or mutate to rehype.

If a destination is given, runs the destination with the new mdast
tree (bridge-mode).
Without destination, returns the mdast tree: further plugins run on that
tree (mutate-mode).

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `this` | `Processor`<`void`, `Root`, `void`, `void`> |
\| `...settings` | \[`Processor`, Options?] |

###### Returns

`void` | `Transformer`<`Root`, `Root`>

###### Defined in

node_modules/.pnpm/unified\@10.1.2/node_modules/unified/index.d.ts:531

▸ **default**(`this`, `...settings`): `void` | `Transformer`<`Root`, `Root`>

Plugin to bridge or mutate to rehype.

If a destination is given, runs the destination with the new mdast
tree (bridge-mode).
Without destination, returns the mdast tree: further plugins run on that
tree (mutate-mode).

###### Parameters

\| Name | Type |
\| :------ | :------ |
\| `this` | `Processor`<`void`, `Root`, `void`, `void`> |
\| `...settings` | \[Options?] | `void`\[] |

###### Returns

`void` | `Transformer`<`Root`, `Root`>

###### Defined in

node_modules/.pnpm/unified\@10.1.2/node_modules/unified/index.d.ts:531

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
[reoff-rejour]: https://github.com/TrialAndErrorOrg/parsers/tree/main/libs/relatex/reoff-rejour
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
