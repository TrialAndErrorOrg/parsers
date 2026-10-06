# retypst-stringify

[unified](https://github.com/unifiedjs/unified) compiler plugin that turns a
[`typast`](../../typast/typast) (Typst) syntax tree into Typst source.

## Contents

- [What is this?](#what-is-this)
- [Use](#use)
- [API](#api)
- [Related](#related)
- [License](#license)

## What is this?

A thin wrapper around [`typast-util-to-typst`](../../typast/typast-util-to-typst), the same way
`unified-latex-stringify` wraps `unified-latex-util-to-string`. All escaping and layout rules
are documented there.

## Use

```ts
import { unified } from 'unified'
import reoffParse from 'reoff-parse'
import reoffTypast from 'reoff-typast'
import retypstStringify from 'retypst-stringify'

const file = await unified()
  .use(reoffParse)
  .use(reoffTypast)
  .use(retypstStringify, { lineWidth: 100 })
  .process(docx)

String(file) // Typst source
```

## API

### `unified().use(retypstStringify, options?)`

Sets the processor's compiler. `options` are passed to `toTypst`:

- `indent` — one level of indentation (default `'  '`)
- `lineWidth` — break argument lists longer than this over lines (default `80`)

## Related

- [`typast`](../../typast/typast) — the syntax tree types
- [`typast-util-to-typst`](../../typast/typast-util-to-typst) — the serializer

## License

[GPL-3.0-or-later](LICENSE) © Thomas F. K. Jorna
