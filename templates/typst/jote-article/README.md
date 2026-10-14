# jote-article (Typst)

A Typst port of `jote-new-article.cls`, the LaTeX class used for the Journal of Trial & Error.
Geometry, type sizes, colours and the first-page layout were taken from the class and checked
against a PDF it produced (Kohrt et al. 2026, issue 6-2). On that article the title block,
abstract, metadata column, running header, footers and the body baseline grid land within about
0.25 pt of the LaTeX output, and most abstract lines break in the same places.

```
jote-article/
├── lib.typ          the template (the only file you import)
├── typst.toml       package manifest, so it can be installed as @local/jote-article:0.1.0
├── media/           logo, Crossmark badge, ORCID / Creative Commons / open-access icons (SVG)
└── example/         main.typ: sample article using every feature, plus references.bib
```

## Building

Fonts are not bundled. The template needs **Open Sans** (Light, Light Italic, Regular,
SemiBold, Bold) and **Overpass** (Light, Regular, SemiBold). Arrows and maths operators in
running text (`S8 → n1`), which Open Sans lacks, come from New Computer Modern Math, which ships
with Typst (LaTeX sets them as maths). With the JOTE archive checked out:

```sh
cd templates/typst/jote-article/example
typst compile --root .. \
  --font-path ~/JOTE/archive/fonts \
  --font-path ~/JOTE/archive/OverpassFonts \
  --font-path ~/JOTE/archive \
  main.typ
```

Add `--ignore-system-fonts` for reproducible output. `--root ..` is needed only because the
example imports `../lib.typ`.

Converter output (`main.typ` + `media/`) imports `jote-article/lib.typ`. Copy or symlink this
directory next to it, so the article has a `jote-article/` folder beside `main.typ`:

```sh
ln -s /path/to/templates/typst/jote-article out/jote-article
typst compile --font-path … out/main.typ
```

You can also install the template as a local package and import
`@local/jote-article:0.1.0`. To do that, copy the directory to
`~/Library/Application Support/typst/packages/local/jote-article/0.1.0/` on macOS, or to
`~/.local/share/typst/packages/local/jote-article/0.1.0/` on Linux.

## API

```typst
#import "jote-article/lib.typ": *

#show: jote-article.with(
  article-type: "meta",          // a class option (see below) or any label, e.g. "Meta-Research"
  title: [A Conceptual Framework …],
  footer-title: none,            // \footertitle: shorter title for the footers; defaults to title
  authors: (
    (name: "Florian Kohrt", orcid: "0000-0003-0374-5625", affiliations: (1,)),
    (name: "Felix Schönbrodt", orcid: "0000-0002-8282-3910", affiliations: (1,), notes: ("†",)),
  ),
  affiliations: ([Department of Psychology, …], …),  // number i+1 <-> affiliations: (i+1,)
  running-author: "Kohrt et al.",
  correspondence: (address: [Ludwig-Maximilians-Universität München], email: "felix@…"),
  journal: (name: "Journal of Trial & Error", website: "https://journal.trialanderror.org"),
  year: 2026,
  doi: "10.36850/9ec0-4fab",
  dates: (received: "December 5, 2024", revised: none, accepted: "March 30, 2026",
          published: "July 24, 2026", published-iso: "2026-07-24", issued: none),
  abstract: [ … ],               // none: no abstract and no keywords (class option `noabstract`)
  keywords: ("error", "reproduction"),
  issue: none,                   // (volume: 6, number: 2, pages: "1–39"): issue mode, page numbers
  header: false,                 // class option `header`: big ARTICLE-TYPE banner on page 1
  special-issue: none,           // content: "Part of Special Issue" in the metadata column
  funding: none,                 // content: "Funding"
  contributions: none,           // content: footnote marked † in the metadata column
  rga-info: none,                // content: "Grant Application to" (rejected grant applications)
  review: none,                  // (round: 1, original-author: [..]): peer-review version
  bibliography: none,            // bibliography("refs.bib"), printed at the end as "References"
  one-column: false,             // one-column layout (inner margin 8 cm, 40 lines)
  math-font: "New Computer Modern Math",
)
```

`article-type` accepts the class options `reflection`, `rga`, `empirical`, `anecdote`,
`commentary`, `meta`, `editorial`, `review` and `perspective`. Each one maps to its label, for
example `meta` becomes "Meta-Research". Any other string is used as the label as written.
Setting `review` forces the label "Peer Review", adds `.pr<round>` to the DOI in the footers,
and replaces the metadata column with the peer-review notes.

The template sets the PDF metadata the way the class's hyperref setup does: the title is
`<running-author> (<year>) - <footer-title or title>`, and the author, keywords and the
abstract (as description) are filled in.

### Body

Most of the body is plain Typst:

| LaTeX                              | Typst                                                     |
| ---------------------------------- | --------------------------------------------------------- |
| `\section`                         | `= Heading` (orange bar, SemiBold)                        |
| `\subsection`                      | `== Heading` (Open Sans Regular)                          |
| `\subsubsection`                   | `=== Heading` (italic, no space below)                    |
| `\paragraph`                       | `==== Heading` (run into the following paragraph)         |
| `\emph`, `\textbf`                 | `_…_`, `*…*` (Light Italic, SemiBold)                     |
| `\footnote`                        | `#footnote[…]` (numbers hang in the margin, no rule; several paragraphs allowed, the later ones indented 1em) |
| `figure`, `table`                  | `#figure(image(…), caption: […]) <fig:x>`, `#figure(table(…))` |
| `figure*`                          | `#wide-figure(image(…), caption: […])`                    |
| booktabs                           | `toprule`, `midrule`, `bottomrule` (exported `table.hline`s) |
| `itemize`, `enumerate`             | `- item`, `+ item` (bold labels, no space between items; a \baselineskip above and below outer lists only, nested lists are `nosep`) |
| `quote`, `quotation`               | `#quote(block: true)[…]` (small italic, 26 pt indents)    |
| `epigraph{source}`                 | `#epigraph[source][…]`                                    |
| `landscape` (pdflscape)            | `#landscape[…]` (landscape page(s); header and footer turned with the page) |
| `\orcid{…}`                        | `#orcid("0000-…")`                                         |

Figures float (`placement: auto`), as in LaTeX. Pass `placement: none` to keep one in place.
Table captions go above the table and figure captions below it; pass
`caption: figure.caption(position: top)[…]` to change that for one figure. Captions are ragged
right and not hyphenated. Tables are `\small`, as the class sets every `tabular`: a table in
normal-size text is set at 9 pt, one in small text (a box) or with an explicit size keeps it; wrap
a table in `#text(size: 8pt)[…]` for `\footnotesize`. Table cells are ragged right and not
hyphenated. Table rules are `betterlightblack` (the class' running footer sets
`\arrayrulecolor{betterlightblack}` globally) and 0.4 pt by default; give `table.hline`/`vline`
only a thickness (`stroke: 1pt`) to keep that colour. Headings are not numbered.

JOTE-specific environments:

- `#jote-box(title: [Box 1], width: "column" | "wide" | "full", placement: auto)[…]` draws the
  light-orange "Box N" panel. Its title straddles the top edge, and the body is set in Open
  Sans Regular at 9 pt with a 1.3 line stretch. Its outer lists use enumitem's `wide` style, as
  the reference's boxes do: the label indents only the first line of an item, and continuation
  lines start at the box's text edge. Nested lists keep the normal layout.
  - `"column"`: an in-flow box as wide as the column. Give it `placement: top` or `bottom` to
    make it float.
  - `"wide"`: `rightWide`. A float in its column that reaches into the left margin, out to the
    edge of the running header. If the float lands in the right column, it stays at column width
    (its title then may stick out of the box, as a tcolorbox title does).
    With `placement: auto` it goes to the bottom of the column, where all of the reference
    article's `rightWide` boxes ended up.
  - `"full"`: `fullWide`. A float across the whole page, including the left margin. Like a
    LaTeX float taller than `\topfraction` (0.7 of the page), a box that tall gets a page of
    its own, centred vertically.
  - `placement`: `auto`, `top`, `bottom`, or `none` (in the text flow).
- `#take-home[…]` and `#original-purpose[…]` are the class's take-home message (top float) and
  original-purpose box (bottom float).
- `#companion[…]` and `#invitation[…]` are the companion-article and invitation boxes, each with
  a thick orange bar on the right.
- `#fullwidth[…]` is the class's `fullwidth` environment: a white box with a thin light-orange
  frame that reaches into the left margin, used for wide tables.

The colours are exported as `joteorange`, `jotedark`, `jote-orange-light`, `lightblack`,
`betterlightblack` and `darklightblack`. The size helpers are exported too:
`fsize("small")`, `fskip("small")`, `size-as("small")[…]`, `skip(n)` and the TeX-point unit
`tpt`.

## How it maps to the class

- **Page.** 210 × 280 mm. Inner margin 48 mm, outer 15 mm, two columns 12 pt apart, 53 lines
  per column. The class asks for `textwidth=130mm`, but geometry resolves it to 147 mm.
- **Line grid.** Every line box is 1 em tall with no depth, the same as TeX's `\topskip` model,
  and the leading is `baselineskip − size`. Consecutive baselines are therefore 12 pt apart, and
  headings, lists, quotes and display maths keep whole empty lines around them (`skip(n)`).
- **Line breaking.** These settings approximate TeX:
  - `costs: (hyphenation: 50%)` stands in for TeX's low `\hyphenpenalty`.
  - Justification limits allow spaces to shrink to 2/3 and stretch to 3/2.
  - ±0.01 em of tracking stands in for microtype font expansion.
  - A show rule adds TeX's extra space after full stops and colons (`\nonfrenchspacing`), also
    after bold text ending in one (`*Works:* Which`) and italic text ending in a colon, `?` or `!`.
  - A word joiner before every em dash: TeX never breaks a line before one.

  This combination gave the closest line breaks to the LaTeX output.
- **Fonts.** The main font is Open Sans Light, so `*strong*` (300 + 300) gives SemiBold, as in
  the class. Overpass SemiBold is used for the title and box titles, Overpass Light for the
  authors, and Overpass Regular for the article type in the header.
- **Header and footers.** They are drawn in the page background at positions measured on the
  reference PDF. On a `#landscape` page (a flipped page) the same header and footer are drawn
  turned by 90°, so the page looks like pdflscape's rotated page in a PDF viewer.
- **Symbols.** `\ding` glyphs (❍ ❒ ✓ …) are taken from Zapf Dingbats, like pifont does, for
  the Unicode Dingbats block only. Typst warns once if that font is not installed.
- **Title.** The class sets the title `\RaggedRight` (a right skip of 0pt plus 2em) with no
  hyphenation, and TeX balances the lines. Typst's ragged-right breaking often leaves a single
  word on a line instead, so the template breaks the title itself: Knuth–Plass over the word
  boundaries (and after explicit hyphens) with the same right skip. This reproduces the title
  lines of every article in issues 6-1 and 6-2. Titles with markup that cannot be split into
  words (explicit line breaks) fall back to Typst's own breaking.
- **First paragraph.** LaTeX indents the first paragraph after the front matter when no heading
  comes first; Typst only indents paragraphs that follow another paragraph. The template puts
  an empty paragraph in front of a body that starts with text.
- **Citations and bibliography.** Typst's built-in APA style. Like the class
  (`cite:plabelyear+extradate`), the year of a citation is bold jotedark and the names stay
  black. The bibliography is `\small` with a hanging indent and `\bibitemsep` of
  0.3 `\smallwidth`.
- **Float pages.** LaTeX puts a `figure*` taller than `\dbltopfraction` (0.7) of the text height
  on a float page of its own, centred vertically. A `wide-figure` taller than that is padded
  (above its body and below its caption) to fill the page, so that no text joins it, and centred
  in the text height; it is measured against the text height, so an image sized relative to it
  (`height: 90%` for `0.9\textheight`) counts at its real size. Tall `"full"` boxes get a centred
  float page too.
- **Column floats on pages with page-wide floats.** Typst 0.15 has a bug: a column float that
  does not fit in the left column is deferred to the right column of the same page, and if
  that page has page-wide floats (the front matter, a wide figure, a full box) it is put there
  even when it does not fit, overflowing the page. LaTeX moves it to the next page. The
  template works around this for its own column floats (`take-home`, `original-purpose`,
  `companion`, `invitation`, floating `jote-box`es):
  - Page-wide floats record their page and height.
  - A column float that cannot fit on its page (or, anchored low in a right column, on the next
    page, where Typst defers it), or that overflowed in the previous layout pass, is held back
    and placed again at a paragraph break of the body in a right column. From there it goes
    into that column if it fits in the rest of it, and otherwise Typst defers it to the top of
    the next page that has room, as LaTeX does.
  - A box that reaches into the left margin (`take-home`, `original-purpose`, `"wide"` boxes)
    takes the column-wide form wherever it lands in a right column, held back or not, so it
    never reaches over the text of the left column.
  - Every decision can change only a bounded number of times across layout passes (a float is
    held back at most once, a held-back float moves to another paragraph break at most once, a
    box changes its form at most once and then keeps the column-wide one), so that the document
    settles within Typst's five passes. Positions are read from the locations of markers, not
    from `here()` inside a float, which lags a pass behind and can alternate between passes.

  Plain `#figure`s (column figures) are not covered.
- **Display maths.** An equation up to 30 % wider than its column is scaled down to fit, because
  the class' maths font is much narrower than New Computer Modern. A matrix in running text has
  full-size cells, as in LaTeX.

## Known differences and limitations

- **Maths.** The class uses Iwona Light for maths, which has no OpenType-math version, so maths
  is set in New Computer Modern Math. Set `math-font` to change this; Fira Math looks closer.
  Noto Sans Math works too, but Typst warns that it is not designed for maths.
- **Line breaks.** TeX's paragraph builder with microtype expansion cannot be reproduced
  exactly. Expect the same lines in places, not everywhere.
- **Float placement** follows LaTeX's rules only roughly (see "Float pages" and "Column floats"
  above). A `wide-figure` that LaTeX put on a float page for other reasons (for instance
  `\dbltopnumber`) shares its page with text here, and plain column `#figure`s are not
  protected against Typst's overflow bug. A document crowded with column floats next to
  page-wide floats can still fail to settle within five passes (Typst then warns "document did
  not converge"); moving one float a paragraph earlier or later usually fixes that.
- **Back-references.** biblatex prints "(see p. 3)" after each bibliography entry
  (`backref=true`); Typst has no equivalent.
- **Bibliography data.** Typst reads the `.bib` with hayagriva, which does not turn TeX quotes
  (` `` `) into curly ones, and its APA style differs from biblatex-apa in small ways.
- **`"wide"` boxes** are only wide in the left column. Typst cannot pin a float to a column. In
  the reference PDF these boxes were placed by hand.
- **Licence link.** The class links the CC-BY text to the `by-nc-nd` legal code, which is a bug.
  The template links to `https://creativecommons.org/licenses/by/4.0/`.
- **Icons.** The Creative Commons and open-access icons are SVGs made from the FontAwesome 5
  Free and Academicons glyphs; the FontAwesome icons are under CC BY 4.0. The ORCID iD icon is
  the official ORCID vector.
