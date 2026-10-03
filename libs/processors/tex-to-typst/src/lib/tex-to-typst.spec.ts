import { spawnSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { texToTypst } from './tex-to-typst.js'

const article = String.raw`\documentclass[authordate, empirical]{jote-new-article}
\usepackage{booktabs}
\jotetitle{A Small Test}
\runningauthor{Doe}
\jname{Journal of Trial \& Error}
\jwebsite{https://journal.trialanderror.org}
\jyear{2026}
\paperdoi{10.36850/test}
\paperreceived{January 1, 2026}
\paperaccepted{February 1, 2026}
\paperpublished{March 1, 2026}
\paperpublisheddate{2026-03-01}
\keywordsabstract{one, two}
\abstracttext{The abstract with $x^2$.}
\corremail{a@b.c}
\corraddress{Somewhere}
\author[1]{\mbox{Jane Doe\orcid{0000-0003-0374-5625}}}
\affil[1]{An Institute}
\begin{document}
\begin{frontmatter}\maketitle\begin{abstract}\printabstracttext\end{abstract}\end{frontmatter}
\section{Introduction}\label{sec:intro}
Some text with a footnote.\footnote{Note.} See Table~\ref{tab:t} and \ding{51}.
\begin{table}
\caption{A table}\label{tab:t}
\begin{tabular}{lc}\toprule A & B \\ \midrule \multirow{2}{*}{x} & 1 \\ & 2 \\ \bottomrule\end{tabular}
\end{table}
\begin{rightWide}[Box 1]
\begin{itemize}\item one\item two\end{itemize}
\end{rightWide}
\subsection{Math}
\begin{equation}\label{eq:a} a = \frac{b}{c} \end{equation}
\end{document}`

describe('texToTypst', () => {
  it('converts a whole article', async () => {
    const file = await texToTypst(article)
    const out = String(file.value)
    expect(out.startsWith('#import "jote-article/lib.typ": *\n#show: jote-article.with(')).toBe(true)
    expect(out).toContain('article-type: "Empirical"')
    expect(out).toContain('= Introduction <sec:intro>')
    expect(out).toContain('Table #ref(<tab:t>, supplement: none)')
    expect(out).toContain('table.cell(rowspan: 2, align: left + horizon)[x]')
    expect(out).toContain('#jote-box(title: [Box 1], width: "wide")')
    expect(out).toContain('$ a = b/c $ <eq:a>')
    expect(file.messages).toEqual([])
    expect(file.data.tyast).toBeDefined()
  })

  it('uses the given template import', async () => {
    const file = await texToTypst(article, { templatePath: '@local/jote-article:0.1.0' })
    expect(String(file.value)).toMatch(/^#import "@local\/jote-article:0.1.0": \*/)
  })

  const template = resolve(__dirname, '../../../../../templates/typst/jote-article')
  const hasTypst = spawnSync('typst', ['--version']).status === 0
  it.skipIf(!hasTypst || !existsSync(join(template, 'lib.typ')))('compiles with typst', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'tex-to-typst-'))
    try {
      writeFileSync(join(dir, 'main.typ'), String((await texToTypst(article)).value))
      symlinkSync(template, join(dir, 'jote-article'), 'dir')
      const result = spawnSync('typst', ['compile', 'main.typ', 'main.pdf'], { cwd: dir, encoding: 'utf8' })
      expect(result.stderr).not.toMatch(/error/)
      expect(result.status).toBe(0)
    } finally {
      rmSync(dir, { recursive: true, force: true })
    }
  }, 60000)

  const cited = article
    .replace('\\usepackage{booktabs}', '\\usepackage{booktabs}\n\\addbibresource{bibliography.bib}')
    .replace(
      'Some text with a footnote.',
      String.raw`\begin{takeHomeMessage}Take this home.\end{takeHomeMessage}
As \textcite[p.~5]{doe2020} showed \parencites[see][p.~2]{doe2020}{roe2021}, things \parencite{roe2021}. Some text with a footnote.`,
    )
    .replace('\\end{document}', '\\printbibliography\n\\end{document}')
  const bib = `@article{doe2020, author = {Doe, Jane}, title = {A study}, journal = {Journal}, year = {2020}}
@book{roe2021, author = {Roe, Richard}, title = {A book}, publisher = {Press}, year = {2021}}
`
  const hasPdftotext = spawnSync('pdftotext', ['-v']).status === 0
  it.skipIf(!hasTypst || !hasPdftotext || !existsSync(join(template, 'lib.typ')))(
    'compiles citations and the bibliography',
    async () => {
      const dir = mkdtempSync(join(tmpdir(), 'tex-to-typst-'))
      try {
        const file = await texToTypst(cited)
        expect(file.messages).toEqual([])
        const out = String(file.value)
        expect(out).toContain('bibliography: bibliography("bibliography.bib", style: "apa")')
        writeFileSync(join(dir, 'main.typ'), out)
        writeFileSync(join(dir, 'bibliography.bib'), bib)
        symlinkSync(template, join(dir, 'jote-article'), 'dir')
        const result = spawnSync('typst', ['compile', 'main.typ', 'main.pdf'], { cwd: dir, encoding: 'utf8' })
        // no errors, and the held-back float machinery settles
        expect(result.stderr).toBe('')
        expect(result.status).toBe(0)
        const text = spawnSync('pdftotext', ['main.pdf', '-'], { cwd: dir, encoding: 'utf8' }).stdout.replace(/\s+/g, ' ')
        expect(text).toContain('Doe (2020, p. 5)')
        expect(text).toContain('(see Doe, 2020, p. 2; Roe, 2021)')
        expect(text).toContain('(Roe, 2021)')
        expect(text).toContain('References')
        expect(text).toContain('Take-home message')
      } finally {
        rmSync(dir, { recursive: true, force: true })
      }
    },
    60000,
  )
})
