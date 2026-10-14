# typast-util-from-string

Parse [Typst](https://typst.app) source into a [`typast`](../typast) syntax tree, with Typst's own
parser.

## Contents

- [What is this?](#what-is-this)
- [Use](#use)
- [API](#api)
- [Which parser](#which-parser)
- [Related](#related)
- [License](#license)

## What is this?

`fromTypst` runs [`typst-syntax`](https://crates.io/crates/typst-syntax) (0.15.1), the parser the
Typst compiler uses, and returns its typed syntax tree as `typast`. In Node.js the parser is a
native addon ([`typast-syntax-node`](../typast-syntax-node)), in the browser WebAssembly
([`typast-syntax-wasm`](../typast-syntax-wasm)); `package.json` `imports` pick one.

Printing the tree with [`typast-util-to-typst`](../typast-util-to-typst) and parsing that again gives
the same tree (tested on the source of 40 Typst Universe packages).

## Use

```ts
import { fromTypst } from 'typast-util-from-string'

const tree = fromTypst('= Hello\n\nSome *bold* text.')
// { type: 'root', children: [{ type: 'heading', depth: 1, … }, { type: 'parbreak' }, …] }

fromTypst('x^2', { mode: 'math' }) // [{ type: 'mathAttach', … }]
fromTypst('#f(', { onerror: (error) => console.warn(error.message, error.position) })
```

## API

### `fromTypst(value, options?)`

- `value` (`string` or anything with `toString()`, such as a VFile): Typst source
- `options.mode` (`'markup' | 'math' | 'code'`, default `'markup'`): where the source starts
- `options.positions` (`boolean`, default `true`): add unist positions (UTF-16 offsets)
- `options.onerror` (`(error: ParseError) => void`): called for each syntax error
  (`{ message, hints?, position }`). The tree is built regardless: what the parser could not make
  sense of becomes `error` nodes holding the source.

Returns a `typast` `Root`.

## Which parser

There are several Typst parsers on npm; none follows Typst 0.15:

| Package                         | What                                                    | Typst  |
| ------------------------------- | ------------------------------------------------------- | ------ |
| `@r4ai/typst-ast-node`/`-web`   | `typst-syntax` as WebAssembly, JSON CST and AST         | 0.14.2 |
| `@typstmate/typst-syntax`       | hand port of `typst-syntax` to TypeScript               | 0.14.2 |
| `codemirror-lang-typst`         | Lezer grammar with `typst-syntax`'s node names          | 0.15   |
| `@myriaddreamin/typst-ts-parser` | typst.ts, semantic tokens only                         | –      |

So this monorepo builds its own from `typst-syntax` (`crates/typast-syntax`), pinned in
`Cargo.toml`: bumping Typst is changing one version.

## Related

- [`retypst-parse`](../../retypst/retypst-parse): this as a unified plugin
- [`typast-util-to-typst`](../typast-util-to-typst): the other way

## License

GPL-3.0-or-later © Thomas F. K. Jorna
