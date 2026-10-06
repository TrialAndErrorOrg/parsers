# typast

**T**ypst **A**bstract **S**yntax **T**ree: a [unist](https://github.com/syntax-tree/unist) syntax
tree for [Typst](https://typst.app), with TypeScript types.

## Contents

- [What is this?](#what-is-this)
- [Design](#design)
- [Nodes](#nodes)
- [Utilities](#utilities)
- [Related](#related)
- [License](#license)

## What is this?

`typast` mirrors the typed syntax tree of Typst's own parser
([`typst_syntax::ast`](https://docs.rs/typst-syntax/latest/typst_syntax/ast/index.html)), as unist
nodes. Parse Typst into it with [`typast-util-from-string`](../typast-util-from-string), write it
back with [`typast-util-to-typst`](../typast-util-to-typst), or work on it in a unified pipeline
with [`retypst`](../../retypst/retypst).

```typst
= Intro <intro>

Some *bold* text, see #footnote[a note].
```

```js
{
  type: 'root',
  children: [
    { type: 'heading', depth: 1, children: [{ type: 'text', value: 'Intro' }] },
    { type: 'space', value: ' ' },
    { type: 'label', name: 'intro' },
    { type: 'parbreak' },
    { type: 'text', value: 'Some' },
    { type: 'space', value: ' ' },
    { type: 'strong', children: [{ type: 'text', value: 'bold' }] },
    { type: 'space', value: ' ' },
    { type: 'text', value: 'text, see' },
    { type: 'space', value: ' ' },
    {
      type: 'funcCall',
      callee: { type: 'ident', name: 'footnote' },
      args: [],
      children: [{ type: 'contentBlock', children: [{ type: 'text', value: 'a note' }] }],
    },
    { type: 'text', value: '.' },
  ],
}
```

## Design

- **Typst's names.** Node types are Typst's AST node names in camelCase (`Emph` → `emph`,
  `FuncCall` → `funcCall`, `SetRule` → `setRule`), fields are named after its accessors
  (`callee`, `args`, `lhs`, `rhs`, `body`, `ifBody`, …).
- **No containers Typst does not have.** Paragraphs are separated by `parbreak` nodes, words by
  `space` nodes, and list items are consecutive siblings, the way Typst parses them. Typst groups
  them when it lays the document out.
- **Markup and math are `children`, code is fields.** Sequences of markup or math (a strong's
  content, an equation, a content block) are a node's `children`, and so are the content blocks
  after a call's parentheses (`#footnote[…]`, `#figure(…)[…]`), like a JSX element's children in
  MDX. So `unist-util-visit` walks the document's text. Sub-expressions of code (a callee, the
  arguments in parentheses, operands) are named fields, as in esast; `nodeFields` lists them and
  [`typast-util-visit`](../typast-util-visit) walks them.
- **Three extra nodes.** `comment` (Typst's comments are trivia), `error` (source the parser could
  not make sense of, kept verbatim) and `typst` (verbatim source for generated trees; the parser
  never produces it).
- **Positions** are unist positions: 1-based lines and columns, 0-based offsets, in UTF-16 code
  units (what JavaScript strings index).

## Nodes

| Group  | Types                                                                                                                                                                                                                                                                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Root   | `root`                                                                                                                                                                                                                                                                                                                                         |
| Markup | `text`, `space`, `linebreak`, `parbreak`, `escape`, `shorthand`, `smartQuote`, `strong`, `emph`, `raw`, `link`, `label`, `ref`, `heading`, `listItem`, `enumItem`, `termItem`, `equation`                                                                                                                                                    |
| Math   | `math`, `mathText`, `mathIdent`, `mathFieldAccess`, `mathShorthand`, `mathAlignPoint`, `mathCall`, `mathDelimited`, `mathAttach`, `mathPrimes`, `mathFrac`, `mathRoot`                                                                                                                                                                       |
| Code   | `ident`, `none`, `auto`, `bool`, `int`, `float`, `numeric`, `str`, `codeBlock`, `contentBlock`, `parenthesized`, `array`, `dict`, `named`, `keyed`, `spread`, `unary`, `binary`, `fieldAccess`, `funcCall`, `closure`, `underscore`, `destructuring`, `letBinding`, `destructAssignment`, `setRule`, `showRule`, `contextual`, `conditional`, `whileLoop`, `forLoop`, `importItem`, `moduleImport`, `moduleInclude`, `loopBreak`, `loopContinue`, `funcReturn` |
| Other  | `comment`, `error`, `typst`                                                                                                                                                                                                                                                                                                                    |

Each type has an interface (`FuncCall`, `Heading`, …) and an entry in `NodeMap`. The unions are
`MarkupContent` (what a markup sequence holds), `MathContent`, `CodeContent`, `Expr` and
`TypastNode` (every node).

Two things are syntax rather than meaning, kept so a tree prints the way it was written:
`raw.block`, and which content blocks of a call come after the parentheses (`children`) rather
than inside them (`args`). Typst's own tree has one argument list for both.

## Utilities

- `codeTypes`: the code expression types (written after a `#` in markup)
- `statementTypes`: `letBinding`, `setRule`, `showRule`, … (end at the end of a line in markup)
- `nodeFields`: for each node type, the fields besides `children` that hold nodes

## Related

- [`typast-util-from-string`](../typast-util-from-string): Typst → typast
- [`typast-util-to-typst`](../typast-util-to-typst): typast → Typst
- [`typast-util-visit`](../typast-util-visit): walk every node, code included
- [`typast-builder`](../typast-builder): build trees
- [`retypst`](../../retypst/retypst): unified processor for Typst

## License

GPL-3.0-or-later © Thomas F. K. Jorna
