# xast-util-minify-whitespace

Minify whitespace between [xast](https://github.com/syntax-tree/xast) elements: a port of
[`rehype-minify-whitespace`](https://github.com/rehypejs/rehype-minify/tree/main/packages/rehype-minify-whitespace)
5.0.1 for xast.

## What is this?

`rehype-minify-whitespace` 5 used to be run on xast trees (it never looked at anything
hast-specific that xast elements have), but 6.x crashes on them. This is its algorithm, typed for
xast 2.

The original classifies HTML elements by `tagName` (block-like, content, skippable, `<pre>`-like).
xast elements have a `name`, so those lists never matched and every element was treated as inline.
Here they are options, empty by default, which gives exactly the old results on xast.

## Use

```ts
import { fromXml } from 'xast-util-from-xml'
import { minifyWhitespace } from 'xast-util-minify-whitespace'

const tree = fromXml('<p>  a \n\n <b> b </b>  </p>')
minifyWhitespace(tree)
// <p>a <b>b</b></p>
```

## API

### `minifyWhitespace(tree[, options])`

Minify whitespace in `tree` (any xast node), in place.

###### `options`

- `newlines` (`boolean`, default `false`): collapse whitespace runs that contain a line ending to
  that line ending instead of to one space
- `blocks` (`Array<string>`, default `[]`): names of block-like elements; whitespace inside and
  around them is removed
- `content` (`Array<string>`, default `[]`): names of elements that contribute content, so
  whitespace next to them is kept
- `skippable` (`Array<string>`, default `[]`): names of elements skipped when looking ahead for a
  boundary
- `preserve` (`Array<string>`, default `[]`): names of elements whose whitespace is left alone

## License

MIT © Thomas F. K. Jorna, Titus Wormer (`rehype-minify-whitespace`)
