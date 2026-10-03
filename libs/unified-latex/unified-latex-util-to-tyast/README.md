# unified-latex-util-to-tyast

Convert a [unified-latex](https://github.com/siefkenj/unified-latex) tree into a
[`tyast`](../../tyast/tyast) (Typst) tree. It targets JOTE articles written against
`jote-new-article.cls` (the hand-edited `main.tex` files in the archive), producing a document
for the Typst `jote-article` template (`templates/typst/jote-article`). It also works on plain
LaTeX fragments.

## Use

```ts
import { parseLatex, toTyast } from 'unified-latex-util-to-tyast'
import { toTypst } from 'tyast-util-to-typst'
import { VFile } from 'vfile'

const file = new VFile()
const tree = toTyast(parseLatex(source), file, { templatePath: 'jote-article/lib.typ' })
const typst = toTypst(tree)
file.messages // everything that couldn't be converted faithfully
```

`parseLatex` runs the unified-latex parser with the argument signatures of every macro and
environment the converter handles (`macroSignatures`, `environmentSignatures`). If you parse
yourself, pass those to `unifiedLatexFromString`; `toTyast` attaches missing macro arguments
itself, but environment arguments are only gobbled for the environments it handles.

For a unified pipeline use [`unified-latex-tyast`](../unified-latex-tyast); for a ready-made
LaTeX → Typst project converter use [`@jote/processors/tex-to-typst`](../../processors/tex-to-typst).

### Options

| option              | default                  | what                                                                  |
| ------------------- | ------------------------ | --------------------------------------------------------------------- |
| `templatePath`      | `'jote-article/lib.typ'` | the `#import` source, e.g. `'@local/jote-article:0.1.0'`              |
| `document`          | auto                     | emit `#import` + `#show: jote-article.with(…)`; auto = has `\documentclass` or `document` env |
| `bibliographyStyle` | `'apa'`                  | `style:` of the `bibliography(…)` passed to the template              |
| `resolveImage`      | add `.png` if no ext     | map `\includegraphics` paths to the file Typst should load            |
| `macros`            |                          | extra/overriding macro handlers `(node, state) => Content \| Content[]` |
| `environments`      |                          | extra/overriding environment handlers                                 |

## What it converts

- **Preamble / class metadata** → one `#show: jote-article.with(…)` call: `\jotetitle`,
  `\footertitle`, `\runningauthor`, `\jname`, `\jwebsite`, `\jyear`, `\jvolume`/`\jissue`/`\jpages`
  (only with the `issue` class option), `\paperdoi`, `\paperreceived`/`revised`/`accepted`/
  `published`/`publisheddate`/`issued`, `\corremail`, `\corraddress`, `\abstracttext` (or an
  `abstract` environment with real content), `\keywordsabstract` (split on commas),
  `\funding`, `\contributions`, `\specialissue`, `\rgainfo`, `\author[1,2]{\mbox{Name\orcid{…}}}`,
  `\affil[n]{…}`, class options (article type, `issue`, `header`, `noabstract`, `review` +
  `\prround`/`\ogauthor`) and `\addbibresource` (only when the document cites).
  `frontmatter`, `\maketitle`, `\printabstracttext`, `\usepackage` … are dropped.
- **Text**: paragraphs, `\emph`/`\textit`/`\textbf`/`\textsc`/`\underline`/`\textsuperscript`/
  `\textsubscript`/`\texttt`, font declarations (`{\bfseries …}`, `\footnotesize` → `8pt`: sizes are
  absolute, as in a 10pt LaTeX class), TeX ligatures
  (`--`, `---`, ` `` `` ''`, `~`), escaped specials, accents (`\'e`, `\"{o}`, `\c{c}` …), text
  symbols, math symbols used in text mode (`\rightarrow` → `→`; `\bullet`, which LaTeX sets as
  maths, → a drawn dot on the maths axis), `\ding{n}` (pifont → Unicode), fontawesome (`\faCircle`,
  `\faIcon[regular]{dot-circle}`; disks are drawn as Typst shapes, after a zero-width space so that
  a cell holding only a shape sits on the row's baseline),
  `\url`, `\href`, `\footnote`, `\mbox`, `\phantom`, `\vspace`/`\hspace`/`\hfill`,
  `\newpage`/`\clearpage` (`#pagebreak(weak: true)`), `\onecolumn`, `\textcolor` and `{\color{…} …}`
  (standard and jote* colour names), `\rule` (a box in the text colour), `\lettrine{I}{n}` →
  `I#smallcaps[n]` (no drop cap). A space at the edge of a formatting argument
  (`\textsc{data }to`) is moved outside the call. `\noindent` at the start of a paragraph that
  follows another paragraph (vertical space in between included) → `#par(first-line-indent: 0pt)[…]`
  (elsewhere Typst does not indent anyway). Register
  assignments (`\hyphenpenalty=10000`) and layout-only macros (`\centering`, `\FloatBarrier` …) are
  dropped.
- **Structure**: `\section` … `\paragraph` (starred too) → headings; `\label` → `<label>` on the
  heading/figure/equation; `\ref`/`\autoref`/`\cref`/`\eqref` → `@label` or `#ref(<label>, supplement: none)`
  (`\ref` after "Figure~" must not repeat the supplement). References to unnumbered headings become
  `#link(<label>)[heading text]`; references to labels that don't exist become `??` with a warning
  (Typst would refuse to compile).
- **Lists**: `itemize`/`enumerate`/`description`/`tabitemize`, nested; enumitem `label=` →
  `#list(marker: […])` / `#enum(numbering: "(a)")`, labels in bold as the class sets them
  (`\setlist{font=\bfseries}`); `\item[x]` → a separate list with that marker;
  `topsep=0pt` / `nosep` → the list is wrapped in a plain `#block`, so it gets paragraph spacing
  instead of the template's list spacing; `leftmargin=2.5em` with a custom label → the label in a
  right-aligned box, so the item text starts 2.5em in (as with the class' `align=left`, `labelwidth=*`).
- **Quotes**: `quote`, `quotation` → `#quote(block: true)`; `epigraph{source}` → `#epigraph[source][…]`.
- **Math** via [tex2typst](https://github.com/qwinsi/tex2typst): inline, display, `equation`
  (numbered, scoped `math.equation(numbering: "(1)")`), `align`/`gather`/`split`/`multline` (→ aligned),
  text commands and accents inside math (`\textbf{\^{y}}` → `upright(bold(hat(y)))`). Unknown math
  commands become upright text with a warning, so the output always compiles.
- **Figures**: `figure`/`figure*` → `#figure`/`#wide-figure` (`placement: auto`, or `placement: none`
  for `[h]`/`[H]` and `\captionof`, since the template floats figures by default); a caption written
  before the graphics is set above them (`figure.caption(position: top)[…]`), one after a table below it;
  `\includegraphics` width/height as `%` of `\linewidth`/`\textwidth`, `alt=`, `keepaspectratio`,
  `scale`, `angle`, and `trim=… , clip` (measured and clipped at layout time); subfigures → a `grid`
  with (a), (b) captions; a `minipage` containing `\captionof` becomes an in-flow figure (headings inside
  it are hoisted out); `\renewcommand{\thefigure}{A1}` → literal numbering.
- **Tables**: `tabular`/`tabularx`/`tabular*`/`longtable` → `#table(…)` with `stroke: none`:
  column specs (`l c r p{} m{} b{} X`, `*{n}{…}`, `@{}`, `|` → `table.vline`, `>{\centering\footnotesize\hsize=1.25\hsize}` →
  alignment, text size and widths, `\hyphenpenalty=10000` → `hyphenate: false`,
  `\exhyphenpenalty=10000` → words with a hyphen boxed). LaTeX widths are the
  cell text's width, so fixed columns get the `2\tabcolsep` padding added (`3cm + 12pt`), and tabularx
  X columns share what is left of the table width after all padding and fixed columns, in proportion
  to their `\hsize` factors (`0.1136 * (100% - 11 * 12pt) + 12pt`); with any `l`/`c`/`r` column they
  stay `fr` tracks. `@{}` takes the padding away on its side (`+ 6pt`, and the cells there get
  `inset: (left: 0pt)`). `\newcolumntype`, `\multicolumn`, `\multirow` (the placeholder cells
  below are dropped), `\hline`/`\cline`/booktabs rules → `table.hline(y: …)`, short rows padded.
  Rules carry only a thickness, so the template's rule colour applies: `\hline`, `\cline` and `|`
  are `\arrayrulewidth`, 0.4 pt, or 1 pt inside `table`/`table*` as the class sets it.
  `table`/`table*` → `figure(kind: table)`; `\caption*` and `threeparttable`/`tablenotes` notes stay under the
  table; a text-only `minipage` in a float (a table note) stays a justified, left-aligned block;
  `adjustbox`, `\resizebox`, `center` are transparent; the class's `fullwidth` → `#fullwidth[…]` (an
  in-flow table goes in it with its caption); `landscape` → `#landscape[…]` (floats inside are not floated).
- **JOTE environments**: `rightWide[Box N]` → `#jote-box(title: [Box N], width: "wide")`,
  `fullWide` → `width: "full"`, `takeHomeMessage` → `#take-home`, `originalPurpose` →
  `#original-purpose`, `companion`, `invitation`.
- **Citations** (biblatex/natbib): `\parencite`/`\cite`/`\citep`/`\autocite` → `#cite(<key>)`,
  `\textcite`/`\citet` → `form: "prose"`, `\citeauthor`, `\citeyear`, `\footcite`, `\nocite`; postnotes →
  `supplement:`. Typst's `cite` has no prenote, so a parenthetical citation with one is built from the
  `author` and `year` forms: `\parencite[see][p.~2]{a}` → `(see #cite(<a>, form: "author"),
  #cite(<a>, form: "year"), p. 2)`. biblatex multicite commands (`\parencites[pre][post]{a}{b}`,
  `\textcites`, `\cites`, `\autocites`, `\footcites`, with global `(pre)(post)` notes) are collected
  by `groupMultiCites` before conversion. `\printbibliography` is dropped (the template prints the
  bibliography).
- **Anything else**: unknown macros keep the text of their mandatory arguments, unknown environments
  keep their content, and both are reported once per name as a `vfile` warning. A `tikzpicture` is
  dropped with a warning, except a `remember picture, overlay` picture with one
  `\node[anchor=north west] at ([xshift=…, yshift=…]current page.north west) {…}` (the correction
  notice JOTE puts at the top of a page), which becomes a `place` at that page position.

## Known limitations

- User macros (`\newcommand`) are not expanded (warning).
- Subfigure references render as the letter only (`(a)`); `\pageref` becomes a link.
- `\multirow` with a negative row count is treated as positive.
- Vertical alignment inside table cells other than `m{}` columns and `\multirow` is ignored.
