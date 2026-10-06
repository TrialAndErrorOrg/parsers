# typast-util-visit

Walk every node of a [`typast`](../typast) tree, including code: a call's callee and arguments,
the sides of an operation, a set rule's arguments. `unist-util-visit` only follows `children`.

## Use

```ts
import { fromTypst } from 'typast-util-from-string'
import { SKIP, visit } from 'typast-util-visit'

const tree = fromTypst('Hi #footnote[a *b*] #set text(size: 10pt)')

visit(tree, 'text', (node) => {
  console.log(node.value) // Hi, a, b
})

visit(tree, 'numeric', (node, { parent, key }) => {
  console.log(node.value, node.unit, parent?.type, key) // 10 pt named expr
})
```

## API

### `visit(tree, test?, visitor)`

Depth first, in source order: a node, then its fields (as listed in `nodeFields` from `typast`),
then its `children`.

- `test`: a node type, a list of them, or a predicate
- `visitor(node, { parent, key, index, ancestors })`: `key` is `children` or the field name
  (`args`, `lhs`, …), `index` the position in it when it is a list. Return `SKIP` to not enter the
  node, `EXIT` to stop.

### `childEntries(node)`

The nodes directly inside `node`, in source order, as `{ key, index, node }`.

## License

GPL-3.0-or-later © Thomas F. K. Jorna
