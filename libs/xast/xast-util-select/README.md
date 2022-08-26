# xast-util-select

Port of `(hast-util-select)[https://github.com/syntax-tree/hast-util-select]` for use with `xast` nodes.

## Contents

- [xast-util-select](#xast-util-select)
  - [Contents](#contents)
  - [What is this?](#what-is-this)
  - [When should I use this?](#when-should-i-use-this)
  - [Install](#install)
  - [Use](#use)
  - [API](#api)
  - [Compatibility](#compatibility)
  - [Related](#related)
  - [Contribute](#contribute)
  - [License](#license)

## What is this?

A tool which allows you to select items from `xast` trees using CSS-like queries.

This is a very naive port, so there's still a lot of HTML-specific logic included that could be removed to improve the size and efficiency of the program.

## When should I use this?

You are doing something low level with `xast` trees.

## Install

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c). In Node.js (version 12.20+, 14.14+, or 16.0+), install with [yarn](https://classic.yarnpkg.com/en/docs/cli/add)

```sh
yarn add xast-util-select
# pnpm i xast-util-select
# npm i xast-util-select
```

## Use

## API

## Compatibility

## Related

## Contribute

## License

MIT © Thomas F. K. Jorna

[unified]: https://unifiedjs.com
[unifiedgh]: https://github.com/unifiedjs/unified
[xast-from-xml]: https://github.com/syntax-tree/xast-util-from-xml
[rehype]: https://github.com/rehypejs/rehype
[rejour]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour
[rejour-parse]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-parse
[rejour-stringify]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-stringify
[rejour-move-abstract]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-move-abstract
[rejour-meta]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-meta
[rejour-relatex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/rejour-relatex
[relatex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex
[reoff-parse]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex/reoff-parse
[jast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/jast
[jast-util-to-texast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/jast-util-to-texast
[jastscript]: https://github.com/journaloftrialanderror/jote/tree/main/libs/rejour/jastscript
[texast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex/texast
[texast-util-to-latex]: https://github.com/journaloftrialanderror/jote/tree/main/libs/relatex/texast-util-to-latex
[hast]: https://github.com/syntax-tree/hast
[xast]: https://github.com/syntax-tree/xast
[mdast]: https://github.com/syntax-tree/mdast
[mdast-markdown]: https://github.com/syntax-tree/mdast-util-to-markdown
[latex-utensils]: https://github.com/tamuratak/latex-utensils
[latexjs]: https://github.com/latexjs/latexjs
[reoff]: https://github.com/journaloftrialanderror/jote/tree/main/libs/reoff
[reoff-parse]: https://github.com/journaloftrialanderror/jote/tree/main/libs/reoff/reoff-parse
[reoff-rejour]: https://github.com/journaloftrialanderror/jote/tree/main/libs/reoff/reoff-rejour
[ooxast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/ooxast/ooxast
[ooxast]: https://github.com/journaloftrialanderror/jote/tree/main/libs/ooxast/ooxast-util-to-jast
