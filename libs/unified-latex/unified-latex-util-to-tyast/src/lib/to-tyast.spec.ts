import { toTypst } from 'tyast-util-to-typst'
import type { FunctionCall, Root, ShowRule } from 'tyast'
import { VFile } from 'vfile'
import { parseLatex } from './parse.js'
import { toTyast } from './to-tyast.js'

function tree(latex: string, file = new VFile()): Root {
  return toTyast(parseLatex(latex), file, { document: false })
}

/** LaTeX fragment → Typst source (trimmed) */
function typ(latex: string, file = new VFile()): string {
  return toTypst(tree(latex, file)).trim()
}

describe('text', () => {
  it('converts paragraphs and formatting', () => {
    expect(typ('Hello \\emph{world} and \\textbf{bold}.\n\nSecond \\textsc{caps}.')).toBe(
      'Hello _world_ and *bold*.\n\nSecond #smallcaps[caps].',
    )
  })

  it('applies TeX ligatures, quotes and special characters', () => {
    expect(typ("a--b---c ``q'' 10\\% \\& \\$5 a~b")).toBe('a–b—c “q” 10% & \\$5 a\u00A0b')
  })

  it('moves spaces at the edges of a formatting argument out of the call', () => {
    expect(typ('the \\textsc{data utilized }to obtain \\textsc{ data }(or')).toBe(
      'the #smallcaps[data utilized] to obtain #smallcaps[data] (or',
    )
    expect(typ('a \\emph{b }c')).toBe('a _b_ c')
  })

  it('composes accents', () => {
    expect(typ("\\'ecole \\\"o \\c{c} Sch\\\"{o}nbrodt")).toBe('école ö ç Schönbrodt')
  })

  it('maps sub/superscripts, underline, url and href', () => {
    expect(typ('n\\textsubscript{1} x\\textsuperscript{2} \\underline{u}')).toBe('n#sub[1] x#super[2] #underline[u]')
    expect(typ('\\url{https://x.org/a_b}')).toBe('#link("https://x.org/a_b")')
    expect(typ('\\href{https://doi.org/1}{the doi}')).toBe('#link("https://doi.org/1")[the doi]')
  })

  it('keeps a raw % in a url', () => {
    expect(typ('\\url{https://x.org/?q=%22a%22}')).toBe('#link("https://x.org/?q=%22a%22")')
  })

  it('unescapes underscores in urls', () => {
    expect(typ('\\url{https://doi.org/10.1/a\\_b}')).toBe('#link("https://doi.org/10.1/a_b")')
  })

  it('converts footnotes', () => {
    expect(typ('Text.\\footnote{A \\emph{note}.} More')).toBe('Text.#footnote[A _note_.] More')
  })

  it('swallows the space after a control word', () => {
    expect(typ('\\LaTeX\\ is \\ldots and')).toBe('LaTeX is …and')
  })

  it('maps pifont dings and fontawesome icons', () => {
    expect(typ('\\ding{109} \\ding{114} \\ding{51}')).toBe('❍ ❒ ✓')
    expect(typ('\\faCircle')).toContain('circle(radius: 0.45em, fill: black)')
    expect(typ('\\faIcon[regular]{dot-circle}')).toContain('circle(radius: 0.22em')
  })

  it('maps math symbols used in text mode', () => {
    expect(typ('S8 \\rightarrow{ }n')).toBe('S8 → n')
    expect(typ('\\textbullet{}')).toBe('•')
    // LaTeX sets a text-mode \bullet as maths: a big dot on the maths axis
    expect(typ('\\bullet')).toBe('\u200B#box(baseline: -0.05em, circle(radius: 0.2em, fill: black))')
  })

  it('handles font declarations until the end of the group', () => {
    expect(typ('a {\\bfseries b c} d')).toBe('a *b c* d')
    expect(typ('{\\footnotesize small}')).toBe('#text(size: 8pt)[small]')
  })

  it('skips register assignments', () => {
    expect(typ('\\hyphenpenalty=10000 text')).toBe('text')
  })

  it('drops layout-only commands and maps spacing', () => {
    expect(typ('\\noindent\\centering Text\\hfill end')).toBe('Text#h(1fr)end')
    expect(typ('a\n\n\\vspace{\\topsep}\n\nb')).toBe('a\n\n#v(0.8em)\n\nb')
    expect(typ('a\n\n\\clearpage\n\nb')).toBe('a\n\n#pagebreak(weak: true)\n\nb')
  })

  it('keeps the text of unknown macros and warns', () => {
    const file = new VFile()
    expect(typ('a \\frobnicate{kept} b', file)).toBe('a kept b')
    expect(file.messages.map((m) => m.reason)).toEqual(['Unknown \\frobnicate: kept its text content'])
  })
})

describe('structure', () => {
  it('converts sectioning with labels', () => {
    expect(typ('\\section{Intro}\\label{sec:intro}\nText\n\\subsection*{Sub}\n\\subsubsection{Third}\n\\paragraph{Run-in} text')).toBe(
      '= Intro <sec:intro>\n\nText\n\n#heading(depth: 2, numbering: none)[Sub]\n\n=== Third\n\n==== Run-in\n\ntext',
    )
  })

  it('links references to unnumbered headings and figures', () => {
    const out = typ(
      '\\section{Intro}\\label{sec:a}\nSee \\ref{sec:a} and Figure~\\ref{fig:x} and \\autoref{fig:x}.\n\\begin{figure}\\includegraphics{a.png}\\caption{Cap}\\label{fig:x}\\end{figure}',
    )
    expect(out).toContain('See #link(<sec:a>)[Intro]')
    expect(out).toContain('Figure\u00A0#ref(<fig:x>, supplement: none)')
    expect(out).toContain('and @fig:x.')
  })

  it('replaces references to missing labels', () => {
    const file = new VFile()
    expect(typ('see \\ref{nope}', file)).toBe('see ??')
    expect(file.messages[0].reason).toContain('unknown label')
  })

  it('converts quotes and epigraphs', () => {
    expect(typ('\\begin{quote}Quoted.\\end{quote}')).toBe('#quote(block: true)[Quoted.]')
    expect(typ('\\begin{epigraph}{Someone}Wise words.\\end{epigraph}')).toBe('#epigraph([Someone])[Wise words.]')
  })
})

describe('lists', () => {
  it('converts nested itemize and enumerate', () => {
    expect(typ('\\begin{itemize}\\item one\\begin{enumerate}\\item a\\item b\\end{enumerate}\\item two\\end{itemize}')).toBe(
      '- one\n  + a\n  + b\n- two',
    )
  })

  it('maps enumitem labels', () => {
    expect(typ('\\begin{enumerate}[label=(\\alph*)]\\item a\\end{enumerate}')).toBe('#enum(numbering: "(a)")[a]')
    // topsep=0pt: a plain block, so the list sits on the line grid
    expect(typ('\\begin{itemize}[label=\\phantom{\\textbullet},topsep=0pt]\\item x\\end{itemize}')).toBe(
      // an outer list's text starts at the paragraph indent, whatever the label's width
      '#block[#list(\n  marker: box(width: 10pt - 0.5em, [*#hide[•]*]),\n  indent: 0pt,\n  body-indent: 0.5em,\n  [x],\n)]',
    )
    expect(typ('\\begin{itemize}[leftmargin=2.5em, label={\\hspace{1em}\\textendash}]\\item x\\end{itemize}')).toBe(
      // leftmargin: the text starts 2.5em in, the label ends a label separation before it
      '#list(\n  marker: box(width: 2.5em - 0.5em, align(right, [*#h(1em)–*])),\n  indent: 0pt,\n  body-indent: 0.5em,\n  [x],\n)',
    )
  })

  it('splits lists on custom item labels', () => {
    expect(typ('\\begin{itemize}\\item[] empty\\item normal\\end{itemize}')).toBe(
      // (labelled: the template closes up the parts of one LaTeX list)
      '#list(marker: box(width: 10pt - 0.5em, []), indent: 0pt, body-indent: 0.5em, [empty]) <jote-list-continues>\n\n- normal',
    )
  })
})

describe('math', () => {
  it('converts inline and display math', () => {
    expect(typ('$x^2 + \\alpha$ and \\[ \\frac{a}{b} \\]')).toBe('$x^2 + alpha$ and\n\n$ a/b $')
  })

  it('numbers equation environments with labels', () => {
    const out = typ('\\begin{equation}\\label{eq:1} x = y \\end{equation}')
    expect(out).toBe('#[#set math.equation(numbering: "(1)")\n$ x = y $ <eq:1>\n]')
  })

  it('maps text commands and accents used in math', () => {
    expect(typ('$\\textbf{a}_1 + \\textbf{\\^{y}}$')).toBe('$upright(bold(a))_1 + upright(bold(hat(y)))$')
  })

  it('wraps split in aligned', () => {
    expect(typ('\\begin{equation*}\\begin{split} a &= b \\\\ c &= d \\end{split}\\end{equation*}')).toBe(
      '$ a &= b \\ c &= d $',
    )
  })

  it('never emits unknown identifiers', () => {
    const file = new VFile()
    const out = typ('$\\frobnicate x$', file)
    expect(out).toBe('$upright(f r o b n i c a t e) x$')
    expect(file.messages[0].reason).toContain('\\frobnicate')
  })
})

describe('figures', () => {
  it('converts figure and figure* with width, alt, caption and label', () => {
    expect(
      typ('\\begin{figure*}\\centering\\includegraphics[width=0.5\\linewidth, alt={A "chart"}]{media/a.png}\\caption{The caption}\\label{fig:a}\\end{figure*}'),
    ).toBe('#wide-figure(image("media/a.png", width: 50%, alt: "A \\"chart\\""), caption: [The caption]) <fig:a>')
    expect(typ('\\begin{figure}[h]\\includegraphics{media/b.pdf}\\caption{B}\\end{figure}')).toBe(
      '#figure(image("media/b.pdf"), caption: [B], placement: none)',
    )
    expect(typ('\\begin{figure}\\includegraphics{media/b.pdf}\\caption{B}\\end{figure}')).toBe(
      '#figure(image("media/b.pdf"), caption: [B], placement: auto)',
    )
  })

  it('adds an extension to extension-less images', () => {
    expect(typ('\\includegraphics{media/x}')).toBe('#image("media/x.png")')
  })

  it('crops images with trim and clip', () => {
    const out = typ('\\includegraphics[trim=0cm 44cm 0cm 0cm, clip, width=\\linewidth]{media/i.pdf}')
    expect(out).toContain('box(clip: true')
    expect(out).toContain('height: (nat.height - 0cm - 44cm) * s')
  })

  it('turns a minipage with \\captionof into an in-flow figure and hoists headings', () => {
    const out = typ('\\begin{minipage}{\\textwidth}\\section{Appendix}\\captionof{figure}{Cap}\\includegraphics{a.png}\\label{fig:z}\\end{minipage}')
    // the caption comes first in the source, so it is set above the image
    expect(out).toBe('= Appendix\n\n#figure(image("a.png"), caption: figure.caption(position: top)[Cap], placement: none) <fig:z>')
  })

  it('lays out subfigures in a grid', () => {
    const out = typ(
      '\\begin{figure}\\begin{subfigure}[t]{0.45\\textwidth}\\includegraphics[width=\\linewidth]{a.png}\\caption{A}\\end{subfigure}\\begin{subfigure}[t]{0.45\\textwidth}\\includegraphics[width=\\linewidth]{b.png}\\caption{B}\\end{subfigure}\\caption{Both}\\end{figure}',
    )
    expect(out).toContain('grid(')
    expect(out).toContain('columns: 2')
    expect(out).toContain('[(b) B]')
  })
})

describe('tables', () => {
  it('converts a booktabs tabular', () => {
    const out = typ('\\begin{tabular}{lr}\\toprule A & B \\\\ \\midrule 1 & 2 \\\\ \\bottomrule\\end{tabular}')
    expect(out).toBe(
      [
        '#table(',
        '  columns: (auto, auto),',
        '  align: (left, right),',
        '  stroke: none,',
        '  table.hline(y: 0, stroke: 0.8pt),',
        '  [A],',
        '  [B],',
        '  table.hline(y: 1, stroke: 0.5pt),',
        '  [1],',
        '  [2],',
        '  table.hline(y: 2, stroke: 0.8pt),',
        ')',
      ].join('\n'),
    )
  })

  it('handles multirow, multicolumn and cline', () => {
    const out = typ(
      '\\begin{tabular}{lll}\\multicolumn{2}{c}{Head} & X \\\\ \\multirow{2}{*}{R} & a & b \\\\ \\cline{2-3} & c & d \\\\\\end{tabular}',
    )
    expect(out).toContain('table.cell(colspan: 2, align: center)[Head]')
    expect(out).toContain('table.cell(rowspan: 2, align: left + horizon)[R]')
    expect(out).toContain('table.hline(y: 2, start: 1, end: 3, stroke: 0.4pt)')
    // the placeholder cell under the multirow is dropped: row 3 has exactly c and d
    expect(out).toMatch(/\[c\],\n {2}\[d\],\n\)$/)
  })

  it('resolves \\newcolumntype, X weights and font size prefixes', () => {
    const out = typ(
      '\\newcolumntype{B}{>{\\footnotesize\\raggedright\\arraybackslash\\hsize=1.25\\hsize}X}\\newcolumntype{S}{>{\\footnotesize\\centering\\arraybackslash\\hsize=0.75\\hsize}X}\\begin{tabularx}{\\linewidth}{@{} B S @{}} a & b \\\\\\end{tabularx}',
    )
    // tabularx: X widths are what is left after the column padding, scaled by \hsize
    // (`@{}` takes away the padding at the table's edges)
    expect(out).toContain('0.625 * (100% - 2 * 6pt) + 6pt')
    expect(out).toContain('0.375 * (100% - 2 * 6pt) + 6pt')
    expect(out).toContain('table.cell(inset: (left: 0pt))[a]')
    expect(out).toContain('table.cell(inset: (right: 0pt))[b]')
    expect(out).toContain('align: (left, center)')
    expect(out).toMatch(/^#text\(size: 8pt\)\[/)
  })

  it('keeps \\hyphenpenalty=10000 columns unhyphenated', () => {
    const out = typ('\\begin{tabular}{>{\\hyphenpenalty=10000}p{2cm}}a \\\\\\end{tabular}')
    expect(out).toContain('[#text(hyphenate: false)[a]]')
    // \exhyphenpenalty=10000: no break after an explicit hyphen either
    const ex = typ(
      '\\begin{tabular}{>{\\hyphenpenalty=10000\\exhyphenpenalty=10000}p{2cm}}Re-implementation reproduction \\\\\\end{tabular}',
    )
    expect(ex).toContain('[#text(hyphenate: false)[#box[Re-implementation] reproduction]]')
  })

  it('keeps a text-only minipage in a float as a justified block', () => {
    const out = typ(
      '\\begin{table}\\caption{T}\\begin{tabular}{l}x\\\\\\end{tabular}\\begin{minipage}{\\linewidth}\\emph{Note}. n\\end{minipage}\\end{table}',
    )
    expect(out).toMatch(/#block\[\s*#set align\(left\)\s*_Note_\. n\s*\]/)
  })

  it('maps the fullwidth environment, keeping an in-flow table and its caption inside', () => {
    const out = typ('\\begin{table}[H]\\begin{fullwidth}\\caption{T}\\begin{tabular}{l}x\\\\\\end{tabular}\\end{fullwidth}\\end{table}')
    expect(out).toMatch(/^#fullwidth\[#figure\(/)
    expect(out).toContain('placement: none')
    expect(typ('\\begin{fullwidth}text\\end{fullwidth}')).toBe('#fullwidth[text]')
  })

  it('draws vertical rules and pads short rows', () => {
    const out = typ('\\begin{tabular}{|l|p{3cm}|}\\hline a \\\\ \\hline\\end{tabular}')
    expect(out).toContain('columns: (auto, 3cm + 12pt)')
    expect(out).toContain('table.vline(x: 0, stroke: 0.4pt)')
    expect(out).toContain('table.vline(x: 2, stroke: 0.4pt)')
    expect(out).toContain('[a],\n  [],')
    // the class sets \arrayrulewidth to 1pt in table floats
    const float = typ('\\begin{table}\\begin{tabular}{|l}\\hline a \\\\\\end{tabular}\\end{table}')
    expect(float).toContain('table.vline(x: 0, stroke: 1pt)')
    expect(float).toContain('table.hline(y: 0, stroke: 1pt)')
  })

  it('wraps table floats in a figure with kind: table and keeps notes', () => {
    const out = typ(
      '\\begin{table}\\caption{T}\\begin{tabular}{l}x\\\\\\end{tabular}\\caption*{\\emph{Note}. n}\\label{tab:t}\\end{table}',
    )
    expect(out).toContain('kind: table')
    expect(out).toContain('caption: [T]')
    expect(out).toContain('_Note_. n')
    expect(out).toMatch(/<tab:t>$/)
  })

  it('converts landscape tables without floating them', () => {
    const out = typ('\\begin{landscape}\\begin{table}\\caption{L}\\begin{tabular}{l}x\\\\\\end{tabular}\\end{table}\\end{landscape}')
    expect(out).toMatch(/^#landscape\[#figure\(/)
    expect(out).not.toContain('placement')
  })

  it('converts lists inside cells (tabitemize)', () => {
    const out = typ('\\begin{tabular}{lp{4cm}}A & \\begin{tabitemize}\\item one\\item two\\end{tabitemize}\\\\\\end{tabular}')
    expect(out).toContain('- one\n')
  })
})

describe('jote boxes', () => {
  it('maps rightWide/fullWide and class floats', () => {
    expect(typ('\\begin{rightWide}[Box 1]\\textbf{Sum}\\end{rightWide}')).toBe('#jote-box(title: [Box 1], width: "wide")[*Sum*]')
    expect(typ('\\begin{fullWide}[]x\\end{fullWide}')).toBe('#jote-box(width: "full")[x]')
    expect(typ('\\begin{takeHomeMessage}t\\end{takeHomeMessage}')).toBe('#take-home[t]')
    expect(typ('\\begin{originalPurpose}o\\end{originalPurpose}')).toBe('#original-purpose[o]')
  })
})

describe('citations', () => {
  it('maps biblatex citations', () => {
    expect(typ('\\parencite{a,b} \\textcite[p.~5]{c} \\citeauthor{d}')).toBe(
      '#cite(<a>)#cite(<b>) #cite(<c>, form: "prose", supplement: [p.\u00A05]) #cite(<d>, form: "author")',
    )
  })

  it('builds a parenthetical citation with a prenote from the author and year forms', () => {
    expect(typ('\\parencite[see][p.~2]{a}')).toBe(
      '(see #cite(<a>, form: "author"), #cite(<a>, form: "year"), p.\u00A02)',
    )
  })

  it('maps multicite commands', () => {
    const file = new VFile()
    expect(typ('\\parencites{a}{b} x \\textcites[][p. 2]{c}', file)).toBe(
      '#cite(<a>)#cite(<b>) x #cite(<c>, form: "prose", supplement: [p. 2])',
    )
    expect(typ('\\parencites[e.g.,][]{a}[p. 3]{b}')).toBe(
      // (`;;`: the first `;` ends the embedded expression)
      '(e.g., #cite(<a>, form: "author"), #cite(<a>, form: "year");; #cite(<b>, form: "author"), #cite(<b>, form: "year"), p. 3)',
    )
    expect(file.messages).toHaveLength(0)
  })
})

describe('JOTE quirks', () => {
  it('turns \\noindent after a paragraph into an unindented paragraph', () => {
    expect(typ('First.\n\n\\noindent Second.')).toBe('First.\n\n#par(first-line-indent: 0pt)[Second.]')
    // nothing to do where Typst does not indent anyway
    expect(typ('\\section{A}\n\\noindent Text.')).toBe('= A\n\nText.')
    // vertical space between the paragraphs does not stop Typst from indenting
    expect(typ('First.\n\n\\vspace{1em}\n\n\\noindent Second.')).toBe(
      'First.\n\n#v(1em)\n\n#par(first-line-indent: 0pt)[Second.]',
    )
  })

  it('maps \\lettrine, \\color and \\rule', () => {
    expect(typ('\\lettrine{I}{n} the')).toBe('I#smallcaps[n] the')
    expect(typ('{\\color{joteorange} hot} cold')).toBe('#text(fill: joteorange)[hot] cold')
    expect(typ('\\rule{\\linewidth}{1pt}')).toBe('#context box(width: 100%, height: 1pt, fill: text.fill)')
  })

  it('places a TikZ page overlay (correction notice) on the page', () => {
    const file = new VFile()
    const out = typ(
      String.raw`\begin{tikzpicture}[remember picture, overlay]
\node[align=left, anchor=north west] at ([xshift=4.7cm, yshift=-0.3cm]current page.north west) {Notice};
\end{tikzpicture}`,
      file,
    )
    expect(out).toContain('#context { let p = here().position(); place(dx: 4.7cm - p.x, dy: -(-0.3cm) - p.y)[')
    expect(out).toContain('Notice')
    expect(file.messages).toHaveLength(0)
  })
})

describe('document', () => {
  const doc = String.raw`\documentclass[authordate, meta, issue]{jote-new-article}
\usepackage{pifont}
\addbibresource{refs.bib}
\jotetitle{A \emph{Title}}
\runningauthor{Doe et al.}
\jname{Journal of Trial \& Error}
\jyear{2026}
\jvolume{6}
\jissue{2}
\jpages{1--39}
\paperdoi{10.36850/x}
\paperreceived{December 5, 2024}
\paperpublisheddate{2026-07-24}
\keywordsabstract{error, reproduction ,  meta-science}
\abstracttext{An abstract.}
\corremail{\href{mailto:a@b.c}{a@b.c}}
\corraddress{LMU Munich}
\author[1,2]{\mbox{Jane Doe\orcid{0000-0003-0374-5625}}}
\author[2]{\mbox{John Roe}}
\affil[2]{Second}
\affil[1]{First}
\begin{document}
\begin{frontmatter}
  \maketitle
  \begin{abstract}
    \printabstracttext
  \end{abstract}
\end{frontmatter}
\section{Intro}
As \textcite{key} said.
\printbibliography
\end{document}`

  it('builds the import and jote-article show rule', () => {
    const root = toTyast(parseLatex(doc), new VFile(), { templatePath: '@local/jote-article:0.1.0' })
    expect(root.children[0]).toEqual({ type: 'import', source: '@local/jote-article:0.1.0', items: '*' })
    const show = root.children[1] as ShowRule
    const call = show.transform as FunctionCall
    expect(call.name).toBe('jote-article.with')
    const out = toTypst(root)
    expect(out).toContain('article-type: "Meta-Research"')
    expect(out).toContain('title: [A _Title_]')
    expect(out).toContain('(name: "Jane Doe", orcid: "0000-0003-0374-5625", affiliations: (1, 2))')
    expect(out).toContain('(name: "John Roe", affiliations: (2,))')
    expect(out).toContain('affiliations: ([First], [Second])')
    expect(out).toContain('email: "a@b.c"')
    expect(out).toContain('journal: (name: "Journal of Trial & Error"')
    expect(out).toContain('year: 2026')
    expect(out).toContain('issue: (volume: 6, number: 2, pages: "1–39")')
    expect(out).toContain('keywords: ("error", "reproduction", "meta-science")')
    expect(out).toContain('published-iso: "2026-07-24"')
    expect(out).toContain('abstract: [An abstract.]')
    expect(out).toContain('bibliography: bibliography("refs.bib", style: "apa")')
    expect(out).toContain('= Intro\n\nAs #cite(<key>, form: "prose") said.')
    expect(out).not.toContain('maketitle')
  })

  it('emits no abstract with noabstract', () => {
    const out = toTypst(toTyast(parseLatex(doc.replace('issue]', 'issue, noabstract]'))))
    expect(out).toContain('abstract: none')
  })
})
