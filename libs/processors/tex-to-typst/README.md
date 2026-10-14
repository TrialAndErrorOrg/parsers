# tex-to-typst

Convert a JOTE LaTeX article (a `main.tex` written against `jote-new-article.cls`, as in the
archive) into Typst for the `jote-article` template in `templates/typst/jote-article`.

Pipeline: `parseLatex` ([`unified-latex-util-to-typast`](../../unified-latex/unified-latex-util-to-typast),
unified-latex with the converter's macro signatures) → a unified processor running
[`unified-latex-typast`](../../unified-latex/unified-latex-typast) and
[`retypst-stringify`](../../typast/retypst-stringify). Serializer options go in `stringify`.

## Library

```ts
import { texToTypst } from 'tex-to-typst'

const file = await texToTypst(source, { templatePath: 'jote-article/lib.typ' })
String(file.value) // main.typ
file.messages // what couldn't be converted faithfully
file.data.typast // the Typst tree
```

Options: `templatePath` (default `'jote-article/lib.typ'`, e.g. `'@local/jote-article:0.1.0'`),
`path` (for messages), plus every option of `toTypast` (`resolveImage`, `bibliographyStyle`, …).

## CLI

```sh
npx tsx --conditions=@jote/source libs/processors/tex-to-typst/src/cli.ts \
  "path/to/article/main.tex" out/article [--compile] [--font-path dir]… \
  [--template templates/typst/jote-article] [--copy-template] [--import "@local/jote-article:0.1.0"]
```

Writes `out/article/main.typ`, copies `media/` (and any other referenced image) and the `.bib`
files next to it, and links the template as `out/article/jote-article` (a symlink, or a copy with
`--copy-template`/`--compile`). `\includegraphics` paths are resolved against the source folder,
picking an extension Typst can read (`.pdf`, `.png`, `.jpg`, `.svg`, …) when the path has none or an
unsupported one. Warnings are printed as `main.tex:line:col  warning  reason`.

`--compile` then runs `typst compile` (pass the JOTE fonts with `--font-path`):

```sh
npx tsx --conditions=@jote/source libs/processors/tex-to-typst/src/cli.ts \
  "$HOME/JOTE/archive/issues/issue 6-2/kohrt framework/main.tex" /tmp/kohrt --compile \
  --font-path ~/JOTE/archive/fonts --font-path ~/JOTE/archive/OverpassFonts --font-path ~/JOTE/archive
```

All twelve articles of issues 6-1 and 6-2 convert and compile; kohrt (39 pages, landscape table
with `\multirow` and dingbats, Box 1–5, cropped appendix flowchart) comes out at the same page count as
the LaTeX PDF.
