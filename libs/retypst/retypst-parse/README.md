# retypst-parse

[unified](https://github.com/unifiedjs/unified) parser plugin that turns Typst source into a
[`typast`](../../typast/typast) syntax tree, with Typst's own parser.

## Use

```ts
import { unified } from 'unified'
import retypstParse from 'retypst-parse'
import retypstStringify from 'retypst-stringify'

const file = await unified().use(retypstParse).use(myPlugin).use(retypstStringify).process(source)
```

Or use [`retypst`](../retypst), which is the two of them.

## API

### `unified().use(retypstParse, options?)`

Parses with [`typast-util-from-string`](../../typast/typast-util-from-string): natively in Node.js,
as WebAssembly in the browser. Syntax errors become messages on the file (`ruleId: 'syntax'`,
`source: 'retypst-parse'`, with Typst's hints as `note`); what could not be parsed stays in the
tree as `error` nodes.

- `options.mode` (`'markup' | 'math' | 'code'`, default `'markup'`)
- `options.positions` (`boolean`, default `true`)

## License

GPL-3.0-or-later © Thomas F. K. Jorna
