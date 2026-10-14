import { describe, expect, it } from 'vitest'
import { fromXml } from 'xast-util-from-xml'
import type { Element, Root } from 'xast'
import { VFile } from 'vfile'
import { toTypst } from 'typast-util-to-typst'
import { toTypast } from './to-typast.js'
import { ommlToTypst } from './math.js'
import { parseAffiliations, parseAuthors } from './front-matter.js'
import type { Options } from './types.js'

const NS =
  'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"'

const STYLES = `<w:styles ${NS}>
  <w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/></w:style>
  <w:style w:type="paragraph" w:styleId="Heading2"><w:name w:val="heading 2"/></w:style>
  <w:style w:type="paragraph" w:styleId="normal1"><w:name w:val="normal1"/></w:style>
  <w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/></w:style>
  <w:style w:type="paragraph" w:styleId="Quote"><w:name w:val="Quote"/></w:style>
</w:styles>`

const NUMBERING = `<w:numbering ${NS}>
  <w:abstractNum w:abstractNumId="0">
    <w:lvl w:ilvl="0"><w:start w:val="1"/><w:numFmt w:val="decimal"/><w:lvlText w:val="%1."/><w:pPr><w:ind w:left="720"/></w:pPr></w:lvl>
    <w:lvl w:ilvl="1"><w:start w:val="1"/><w:numFmt w:val="lowerLetter"/><w:lvlText w:val="(%2)"/><w:pPr><w:ind w:left="1440"/></w:pPr></w:lvl>
  </w:abstractNum>
  <w:abstractNum w:abstractNumId="1">
    <w:lvl w:ilvl="0"><w:numFmt w:val="bullet"/><w:lvlText w:val="•"/><w:pPr><w:ind w:left="2160"/></w:pPr></w:lvl>
  </w:abstractNum>
  <w:num w:numId="1"><w:abstractNumId w:val="0"/></w:num>
  <w:num w:numId="2"><w:abstractNumId w:val="1"/></w:num>
</w:numbering>`

function doc(body: string): Root {
  return fromXml(`<w:document ${NS}><w:body>${body}</w:body></w:document>`)
}

const p = (text: string, style?: string, extra = '') =>
  `<w:p>${
    style || extra ? `<w:pPr>${style ? `<w:pStyle w:val="${style}"/>` : ''}${extra}</w:pPr>` : ''
  }<w:r><w:t xml:space="preserve">${text}</w:t></w:r></w:p>`

const li = (text: string, numId: number, ilvl = 0) =>
  p(text, undefined, `<w:numPr><w:ilvl w:val="${ilvl}"/><w:numId w:val="${numId}"/></w:numPr>`)

function convert(body: string, options: Options = {}): string {
  return toTypst(
    toTypast(doc(body), {
      styles: STYLES,
      numbering: NUMBERING,
      document: false,
      inferFrontMatter: false,
      ...options,
    }),
  )
}

describe('paragraphs and headings', () => {
  it('maps heading styles by name, not by the last digit of the style id', () => {
    const out = convert(p('Intro', 'Heading1') + p('Body text', 'normal1') + p('Sub', 'Heading2'))
    expect(out).toBe('= Intro\n\nBody text\n\n== Sub\n')
  })

  it('understands headings written by reoff-markup-to-style and strips manual numbers and bold', () => {
    const out = convert(
      '<w:p><w:pPr><w:pStyle w:val="Heading 1"/></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>2. Methods</w:t></w:r></w:p>',
    )
    expect(out).toBe('= Methods\n')
  })

  it('merges runs with the same formatting and keeps whitespace outside', () => {
    const out = convert(
      '<w:p><w:r><w:rPr><w:b/></w:rPr><w:t xml:space="preserve">bold </w:t></w:r><w:r><w:rPr><w:b/></w:rPr><w:t>text</w:t></w:r><w:r><w:t xml:space="preserve"> and </w:t></w:r><w:r><w:rPr><w:i/></w:rPr><w:t>it</w:t></w:r><w:r><w:rPr><w:vertAlign w:val="superscript"/></w:rPr><w:t>2</w:t></w:r></w:p>',
    )
    expect(out).toBe('*bold text* and _it_#super[2]\n')
  })

  it('turns quote styles into block quotes', () => {
    expect(convert(p('Quoted', 'Quote'))).toBe('#quote(block: true)[Quoted]\n')
  })
})

describe('lists', () => {
  it('nests by indentation and keeps numbering patterns', () => {
    const out = convert(li('one', 1) + li('sub a', 1, 1) + li('bullet under sub', 2) + li('two', 1))
    expect(out).toBe(
      '+ one\n  #enum(numbering: "(a)")[\n    sub a\n\n    - bullet under sub\n  ]\n+ two\n',
    )
  })

  it('continues numbering of an interrupted list', () => {
    const out = convert(li('one', 1) + p('between') + li('two', 1))
    expect(out).toContain('2. two')
  })
})

describe('tables', () => {
  const cell = (text: string, pr = '') =>
    `<w:tc>${pr ? `<w:tcPr>${pr}</w:tcPr>` : ''}${p(text)}</w:tc>`
  const table = (rows: string[], grid = [1000, 1000, 1000]) =>
    `<w:tbl><w:tblGrid>${grid.map((w) => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>${rows
      .map((r) => `<w:tr>${r}</w:tr>`)
      .join('')}</w:tbl>`

  it('skips tables without cells, with a warning', () => {
    for (const empty of ['<w:tbl><w:tblGrid/></w:tbl>', '<w:tbl><w:tblGrid/><w:tr/></w:tbl>']) {
      const file = new VFile()
      const out = toTypst(
        toTypast(doc(empty + p('after')), file, {
          styles: STYLES,
          document: false,
          inferFrontMatter: false,
        }),
      )
      expect(out).toBe('after\n')
      expect(file.messages.map((m) => m.reason)).toEqual([
        'Skipped an empty table (it has no cells)',
      ])
    }
  })

  it('handles column and row spans', () => {
    const out = convert(
      table([
        cell('A', '<w:vMerge w:val="restart"/>') + cell('B', '<w:gridSpan w:val="2"/>'),
        cell('', '<w:vMerge/>') + cell('c') + cell('d'),
      ]),
    )
    expect(out).toContain('table.cell(rowspan: 2)[A]')
    expect(out).toContain('table.cell(colspan: 2)[B]')
    expect(out).not.toMatch(/\[\],\n\s+\[c\]/)
  })

  it('captions tables from an APA "Table N" label and title, with a note', () => {
    const out = convert(
      p('Table 1', 'Heading 1') +
        p('My Title', 'Heading 2') +
        table([
          cell('h1') + cell('h2') + cell('h3'),
          cell('a') + cell('b') + cell('c'),
          cell('d') + cell('e') + cell('f'),
        ]) +
        p('Note. Something.'),
    )
    expect(out).toContain('#figure(')
    expect(out).toContain('caption: [My Title]')
    expect(out).toContain('table.header([h1], [h2], [h3])')
    expect(out).toContain('Note. Something.')
    expect(out).toContain('<tab:1>')
  })

  it('links mentions of captioned tables, but not of missing ones', () => {
    const tbl = table([cell('h1') + cell('h2'), cell('a') + cell('b')], [1000, 1000])
    const out = convert(
      p('As Table 1 shows (unlike Table 7), see Tables 1 and 2.') +
        p('Table 1', 'Heading 1') +
        p('My Title', 'Heading 2') +
        tbl,
    )
    expect(out).toContain(
      'As #link(<tab:1>)[Table 1] shows (unlike Table 7), see Tables #link(<tab:1>)[1] and 2.',
    )
    expect(out).not.toMatch(/caption: \[[^\]]*#link/)
  })

  it('turns "Box N" + single-cell table into a jote-box', () => {
    const out = convert(p('Box 1', 'Heading 1') + table([cell('Inside the box')], [9000]))
    expect(out).toBe('#jote-box(title: [Box 1])[Inside the box]\n')
  })

  it('continues a box taller than a page in an untitled box, splitting long lists', () => {
    const items = Array.from(
      { length: 60 },
      (_, i) =>
        `<w:p><w:pPr><w:numPr><w:ilvl w:val="0"/><w:numId w:val="1"/></w:numPr></w:pPr><w:r><w:t>Item ${
          i + 1
        }</w:t></w:r></w:p>`,
    ).join('')
    const out = convert(
      p('Box 2', 'Heading 1') +
        `<w:tbl><w:tblGrid><w:gridCol w:w="9000"/></w:tblGrid><w:tr><w:tc>${items}</w:tc></w:tr></w:tbl>`,
    )
    expect(out.match(/#jote-box[([]/g)).toHaveLength(2)
    expect(out.match(/title: \[Box 2\]/g)).toHaveLength(1)
    // the numbering continues in the second box
    const next = out.match(/#jote-box\[\n\s+(\d+)\. Item (\d+)/)
    expect(next?.[1]).toBe(next?.[2])
    expect(Number(next?.[1])).toBeGreaterThan(30)
  })
})

describe('images', () => {
  const drawing = (rId: string) =>
    `<w:p><w:r><w:drawing xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><wp:inline><wp:extent cx="2540000" cy="1270000"/><a:graphic><a:graphicData><a:blip r:embed="${rId}"/></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`
  const run = (media: Record<string, unknown>, rels: Record<string, string>, body: string) => {
    const file = new VFile({ data: { media, relations: { document: rels } } as never })
    const out = toTypst(toTypast(doc(body), file, { document: false, inferFrontMatter: false }))
    return { out, file }
  }

  it('skips images whose file is missing from the docx', () => {
    const { out, file } = run(
      { 'word/media/other.png': new Uint8Array() },
      { rId1: 'media/image1.png' },
      drawing('rId1') + p('After'),
    )
    expect(out).toBe('After\n')
    expect(file.messages.map(String).join()).toContain('missing from the docx')
    expect(file.data.typast?.media).toEqual([])
  })

  it('shows a placeholder for formats Typst cannot read, but keeps the file', () => {
    const { out, file } = run(
      { 'word/media/image1.tiff': new Uint8Array() },
      { rId1: 'media/image1.tiff' },
      drawing('rId1'),
    )
    expect(out).toContain('rect(width: 100%, height: 6em')
    expect(out).toContain('media/image1.tiff: convert to PNG or SVG')
    expect(out).not.toContain('image(')
    expect(file.data.typast?.media).toEqual([
      { source: 'word/media/image1.tiff', path: 'media/image1.tiff' },
    ])
  })
})

describe('notes, links and fields', () => {
  it('converts footnotes and hyperlinks', () => {
    const footnotes = fromXml(
      `<w:footnotes ${NS}><w:footnote w:id="1"><w:p><w:r><w:footnoteRef/></w:r><w:r><w:t xml:space="preserve"> A note.</w:t></w:r></w:p></w:footnote></w:footnotes>`,
    )
    const file = new VFile({
      data: {
        parsed: { 'word/footnotes.xml': footnotes },
        relations: { document: { rId1: 'https://example.org' } },
      } as never,
    })
    const tree = toTypast(
      doc(
        '<w:p><w:r><w:t>Text</w:t></w:r><w:r><w:footnoteReference w:id="1"/></w:r><w:r><w:t xml:space="preserve"> see </w:t></w:r><w:hyperlink r:id="rId1"><w:r><w:t>here</w:t></w:r></w:hyperlink></w:p>',
      ),
      file,
      { document: false, inferFrontMatter: false },
    )
    expect(toTypst(tree)).toBe('Text#footnote[A note.] see #link("https://example.org")[here]\n')
  })

  it('joins the paragraphs of a multi-paragraph footnote with line breaks', () => {
    const footnotes = fromXml(
      `<w:footnotes ${NS}><w:footnote w:id="1"><w:p><w:r><w:footnoteRef/></w:r><w:r><w:t xml:space="preserve"> First.</w:t></w:r></w:p><w:p><w:r><w:t>Second.</w:t></w:r></w:p></w:footnote></w:footnotes>`,
    )
    const file = new VFile({ data: { parsed: { 'word/footnotes.xml': footnotes } } as never })
    const tree = toTypast(
      doc('<w:p><w:r><w:t>Text</w:t></w:r><w:r><w:footnoteReference w:id="1"/></w:r></w:p>'),
      file,
      { document: false, inferFrontMatter: false },
    )
    expect(toTypst(tree)).toBe('Text#footnote[First.\\\nSecond.]\n')
  })

  it('turns Zotero citation fields into cite calls and collects a bibliography', () => {
    const json = JSON.stringify({
      citationID: 'abc',
      properties: { formattedCitation: '(Smith, 2020, p. 4)' },
      citationItems: [
        {
          id: 1,
          locator: '4',
          itemData: {
            id: 1,
            type: 'article-journal',
            title: 'A study',
            author: [{ family: 'Smith', given: 'Jo' }],
            issued: { 'date-parts': [[2020]] },
          },
        },
      ],
    })
    const run = (inner: string) => `<w:r>${inner}</w:r>`
    const body = `<w:p>${run('<w:t xml:space="preserve">As shown </w:t>')}${run(
      '<w:fldChar w:fldCharType="begin"/>',
    )}${run(
      `<w:instrText xml:space="preserve"> ADDIN ZOTERO_ITEM CSL_CITATION ${json.replace(
        /</g,
        '&lt;',
      )}</w:instrText>`,
    )}${run('<w:fldChar w:fldCharType="separate"/>')}${run('<w:t>(Smith, 2020, p. 4)</w:t>')}${run(
      '<w:fldChar w:fldCharType="end"/>',
    )}${run('<w:t>.</w:t>')}</w:p>`
    const file = new VFile()
    const out = toTypst(toTypast(doc(body), file, { inferFrontMatter: false }))
    expect(out).toContain('As shown #cite(<Smith2020>, supplement: [p. 4]).')
    expect(out).toContain('bibliography: bibliography("bibliography.bib")')
    expect(file.data.typast?.bibliography).toContain('@article{Smith2020,')
  })
})

describe('math', () => {
  const omml = (xml: string) => fromXml(`<m:oMath ${NS}>${xml}</m:oMath>`).children[0] as Element
  const r = (t: string, sty?: string) =>
    `<m:r>${sty ? `<m:rPr><m:sty m:val="${sty}"/></m:rPr>` : ''}<m:t>${t}</m:t></m:r>`

  it('converts fractions, scripts and n-ary operators', () => {
    expect(ommlToTypst(omml(`<m:f><m:num>${r('a')}</m:num><m:den>${r('b+1')}</m:den></m:f>`))).toBe(
      'frac(a, b + 1)',
    )
    expect(ommlToTypst(omml(`<m:sSup><m:e>${r('x')}</m:e><m:sup>${r('2')}</m:sup></m:sSup>`))).toBe(
      'x^(2)',
    )
    expect(
      ommlToTypst(
        omml(
          `<m:nary><m:naryPr><m:chr m:val="∑"/></m:naryPr><m:sub>${r('i=1')}</m:sub><m:sup>${r(
            'n',
          )}</m:sup><m:e>${r('xi')}</m:e></m:nary>`,
        ),
      ),
    ).toBe('sum_(i = 1)^(n) x i')
  })

  it('keeps multi-letter upright text and operators apart', () => {
    expect(ommlToTypst(omml(r('max', 'p') + r('(x,y)')))).toBe('max ( x \\, y )')
    expect(ommlToTypst(omml(r('SD', 'p')))).toBe('"SD"')
  })

  it('hands LaTeX typed in linear format to tex2typst', () => {
    expect(ommlToTypst(omml(r('\\frac{a}{b}')))).toBe('a/b')
  })
})

describe('front matter', () => {
  const t = (value: string) => ({ type: 'text' as const, value })
  it('parses author lines with superscript markers', () => {
    expect(
      parseAuthors([t('Florian Kohrt¹, Filip Melinscak², and Felix D. Schönbrodt¹˒³')]),
    ).toEqual([
      { name: 'Florian Kohrt', affiliations: [1] },
      { name: 'Filip Melinscak', affiliations: [2] },
      { name: 'Felix D. Schönbrodt', affiliations: [1, 3] },
    ])
    expect(parseAuthors([t('This is a sentence, not authors.')])).toBeUndefined()
  })

  it('parses affiliations separated by markers', () => {
    expect(
      parseAffiliations([
        t('¹ Department A, Munich'),
        { type: 'linebreak' },
        t('² Faculty B, Vienna'),
      ]),
    ).toEqual([
      [1, 'Department A, Munich'],
      [2, 'Faculty B, Vienna'],
    ])
  })

  it('moves title, authors, abstract and keywords into the template call', () => {
    const body =
      p('A Title', 'Title') +
      p('Ann Author¹, Bob Builder²') +
      p('¹ Uni One') +
      p('² Uni Two') +
      p('Abstract', 'Heading1') +
      p('We did things.') +
      p('Keywords: one, two') +
      p('Introduction', 'Heading1') +
      p('Text.')
    const out = toTypst(toTypast(doc(body), { styles: STYLES }))
    expect(out).toContain('title: [A Title]')
    expect(out).toContain('(name: "Ann Author", affiliations: (1,))')
    expect(out).toContain('affiliations: ([Uni One], [Uni Two])')
    expect(out).toContain('running-author: "Author & Builder"')
    expect(out).toContain('abstract: [We did things.]')
    expect(out).toContain('keywords: ("one", "two")')
    expect(out).toMatch(/\)\n\n= Introduction\n\nText\.\n$/)
  })

  const frontMatter = (body: string, options: Options = {}) => {
    const file = new VFile()
    const out = toTypst(toTypast(doc(body), file, { styles: STYLES, ...options }))
    return { out, messages: file.messages.map((m) => m.reason) }
  }
  const realTitle = { title: [t('Real Title')] }

  it('does not take a leading section heading for the title', () => {
    const body =
      p('Introduction', 'Heading1') +
      p('Jane Doe, John Roe') +
      p('Some intro text.') +
      p('Methods', 'Heading1') +
      p('Method text.')
    for (const options of [{}, { meta: realTitle }]) {
      const { out, messages } = frontMatter(body, options)
      expect(out).toContain('= Introduction\n\nJane Doe, John Roe\n\nSome intro text.\n\n= Methods')
      expect(out).not.toContain('authors:')
      expect(out).not.toContain('affiliations:')
      expect(messages).toEqual([])
    }
    // numbered
    expect(frontMatter(p('1. Introduction', 'Heading1') + p('Text.')).out).toContain(
      '= Introduction\n\nText.',
    )
  })

  it('keeps a heading that is not the given title in the body', () => {
    const body =
      p('Study Overview', 'Heading1') +
      p('Some intro text that is a sentence.') +
      p('Methods', 'Heading1') +
      p('Method text.')
    const { out, messages } = frontMatter(body, { meta: realTitle })
    expect(out).toContain('title: [Real Title]')
    expect(out).toContain('= Study Overview\n\nSome intro text that is a sentence.')
    expect(messages).toEqual([])
    // without a given title it is the title
    expect(frontMatter(body).out).toContain('title: [Study Overview]')
  })

  it('takes a heading as the title when it matches the given title or authors follow', () => {
    const similar = frontMatter(p('A Study of Things', 'Heading1') + p('Text.'), {
      meta: { title: [t('A study of things: the sequel')] },
    })
    expect(similar.out).not.toContain('= A Study of Things')
    const withAuthors = frontMatter(
      p('Something Else Entirely', 'Heading1') + p('Ann Author¹, Bob Builder²') + p('¹ Uni One'),
      { meta: realTitle },
    )
    expect(withAuthors.out).not.toContain('= Something Else')
    expect(withAuthors.out).toContain('(name: "Ann Author", affiliations: (1,))')
  })

  it('only takes an unmarked paragraph after the authors as their affiliation if it looks like one', () => {
    const sentence = frontMatter(
      p('A Title', 'Title') + p('Jane Doe, John Roe') + p('Some intro text.'),
    ).out
    expect(sentence).not.toContain('affiliations:')
    expect(sentence).toMatch(/\)\n\nSome intro text\.\n$/)
    const institution = frontMatter(
      p('A Title', 'Title') + p('Jane Doe, John Roe') + p('University of Somewhere.'),
    ).out
    expect(institution).toContain('affiliations: ([University of Somewhere.],)')
  })

  it('warns when front matter read from the document is replaced by the given metadata', () => {
    const { out, messages } = frontMatter(
      p('A Title', 'Title') + p('Ann Author¹, Bob Builder²') + p('¹ Uni One') + p('Text.'),
      { meta: { ...realTitle, authors: [{ name: 'Real Author' }] } },
    )
    expect(out).toContain('title: [Real Title]')
    expect(out).toContain('(name: "Real Author")')
    expect(messages).toHaveLength(1)
    expect(messages[0]).toMatch(/\(title, authors\) was removed from the body and replaced/)
  })
})
