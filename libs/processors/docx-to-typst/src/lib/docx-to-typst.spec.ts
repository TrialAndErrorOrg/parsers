import { describe, expect, it } from 'vitest'
import { spawnSync } from 'node:child_process'
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { fromXml } from 'xast-util-from-xml'
import type { Element } from 'xast'
import { ommlToTypst } from 'ooxast-util-to-tyast'
import { docxToTypst } from './docx-to-typst.js'
import { metaToTemplateArgs } from './meta-to-template-args.js'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '../../../../..')
const fixtureBase = join(root, 'libs/ooxast/ooxast-util-to-unified-latex/src/test')
const template = join(root, 'templates/typst/jote-article')
const fixtures = [
  ...readdirSync(join(fixtureBase, 'fixtures')).map((d) => join(fixtureBase, 'fixtures', d)),
  join(fixtureBase, 'nocites'),
].filter((d) => existsSync(join(d, 'index.docx')))

const hasTypst = spawnSync('typst', ['--version']).status === 0
const hasTemplate = existsSync(join(template, 'lib.typ'))

/** Write the output files and the template to a temp dir and compile; returns stderr on failure. */
function compile(files: Record<string, Uint8Array | string>): string | undefined {
  const dir = mkdtempSync(join(tmpdir(), 'docx-to-typst-'))
  try {
    for (const [path, content] of Object.entries(files)) {
      mkdirSync(dirname(join(dir, path)), { recursive: true })
      writeFileSync(join(dir, path), content)
    }
    cpSync(template, join(dir, 'jote-article'), { recursive: true })
    const result = spawnSync(
      'typst',
      ['compile', '--root', dir, join(dir, 'main.typ'), join(dir, 'main.pdf')],
      {
        encoding: 'utf8',
      },
    )
    return result.status === 0 ? undefined : result.stderr
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

const expectations: Record<string, (typ: string, files: Record<string, unknown>) => void> = {
  footnotes: (typ) => expect(typ).toContain('#footnote['),
  formatting: (typ) => {
    expect(typ).toContain('*Bold*')
    expect(typ).toContain('#underline[Underline]')
    expect(typ).toContain('#strike[Strikethrough]')
    expect(typ).toContain('#super[superscript]')
    expect(typ).toContain('#link("https://hyperlink.com/")[hyperlink]')
  },
  image: (typ, files) => {
    expect(typ).toMatch(/image\(\s*"media\//)
    expect(Object.keys(files).some((f) => f.startsWith('media/'))).toBe(true)
  },
  lists: (typ) => {
    expect(typ).toContain('+ Number one')
    expect(typ).toContain('- Unordered')
  },
  math: (typ) => {
    expect(typ).toContain('$ integral_alpha^beta')
    expect(typ).toContain('($integral_a^b$)')
  },
  tables: (typ) =>
    expect(typ).toContain('table.cell(colspan: 3, align: center)[Three merged guys]'),
  'zotero-2': (typ, files) => {
    expect(typ).toContain('#cite(<Gladwin2019>)')
    expect(typ).toContain('bibliography: bibliography("bibliography.bib")')
    expect(files['bibliography.bib']).toContain('@article{Gladwin2019,')
  },
}

describe('docxToTypst', () => {
  it.each(fixtures.map((d) => [d.split('/').pop()!, d]))(
    'converts the %s fixture',
    async (name, dir) => {
      const file = await docxToTypst(readFileSync(join(dir, 'index.docx')))
      const typ = String(file.value)
      expect(typ.startsWith('#import "jote-article/lib.typ": *\n#show: jote-article.with(')).toBe(
        true,
      )
      expectations[name]?.(typ, file.data.files ?? {})
      if (hasTypst && hasTemplate) {
        expect(compile(file.data.files ?? {})).toBeUndefined()
      }
    },
    30000,
  )

  it('honours templatePath and meta', async () => {
    const file = await docxToTypst(
      readFileSync(join(fixtureBase, 'fixtures/footnotes/index.docx')),
      {
        templatePath: '@local/jote-article:0.1.0',
        meta: { title: 'Given title', articleType: 'empirical', doi: '10.1/x' },
      },
    )
    const typ = String(file.value)
    expect(typ).toContain('#import "@local/jote-article:0.1.0": *')
    expect(typ).toContain('article-type: "empirical"')
    expect(typ).toContain('title: [Given title]')
    expect(typ).toContain('doi: "10.1/x"')
  })

  // The Kohrt et al. (2026) manuscript, if it is around (not checked in)
  const kohrt =
    process.env.KOHRT_DOCX ?? '/Users/thomas/.claude/jobs/be8c0753/tmp/kohrt-src/Manuscript.docx'
  it.skipIf(!existsSync(kohrt))(
    'converts a complex APA manuscript',
    async () => {
      const file = await docxToTypst(readFileSync(kohrt))
      const typ = String(file.value)
      expect(typ).toContain(
        '(name: "Florian Kohrt", orcid: "0000-0003-0374-5625", affiliations: (1,))',
      )
      expect(typ).toContain('[Faculty of Psychology, University of Vienna, Vienna, Austria]')
      expect(typ).toContain('email: "felix.schoenbrodt@psy.lmu.de"')
      expect(typ).toContain('#jote-box(title: [Box 1])')
      expect(typ).toContain('<fig:A1>')
      expect(typ).toContain('<tab:1>')
      expect(typ).toContain('= Acknowledgments')
      expect(typ).not.toContain('= Author Note')
      if (hasTypst && hasTemplate) expect(compile(file.data.files ?? {})).toBeUndefined()
    },
    60000,
  )
})

describe('ommlToTypst output compiles', () => {
  const NS = 'xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math"'
  const r = (t: string, sty?: string) =>
    `<m:r>${sty ? `<m:rPr><m:sty m:val="${sty}"/></m:rPr>` : ''}<m:t>${t}</m:t></m:r>`
  const cases = [
    `<m:f><m:num>${r('a,b')}</m:num><m:den>${r('(c')}</m:den></m:f>`,
    `<m:sSubSup><m:e>${r('xy')}</m:e><m:sub>${r('i')}</m:sub><m:sup>${r('2')}</m:sup></m:sSubSup>`,
    `<m:d><m:dPr><m:begChr m:val="["/><m:endChr m:val=")"/></m:dPr><m:e>${r('0')}</m:e><m:e>${r(
      '1',
    )}</m:e></m:d>`,
    `<m:rad><m:deg>${r('3')}</m:deg><m:e>${r('x')}</m:e></m:rad>`,
    `<m:func><m:fName>${r('log', 'p')}</m:fName><m:e>${r('x')}</m:e></m:func>`,
    `<m:acc><m:e>${r('β')}</m:e></m:acc><m:bar><m:barPr><m:pos m:val="top"/></m:barPr><m:e>${r(
      'x',
    )}</m:e></m:bar>`,
    `<m:m><m:mr><m:e>${r('1')}</m:e><m:e>${r('0')}</m:e></m:mr><m:mr><m:e>${r('0')}</m:e><m:e>${r(
      '1',
    )}</m:e></m:mr></m:m>`,
    `<m:limLow><m:e>${r('lim', 'p')}</m:e><m:lim>${r('n→∞')}</m:lim></m:limLow>`,
    r('p &lt; .05; M = 3.2, SD = 1.1 &amp; "x" #y $z [a'),
    r('Mean', 'p'),
  ]
  it.skipIf(!hasTypst)('every case', () => {
    const lines = cases.map(
      (c) => `$${ommlToTypst(fromXml(`<m:oMath ${NS}>${c}</m:oMath>`).children[0] as Element)}$`,
    )
    const dir = mkdtempSync(join(tmpdir(), 'omml-'))
    writeFileSync(join(dir, 'main.typ'), lines.join('\n\n'))
    const result = spawnSync('typst', ['compile', join(dir, 'main.typ')], { encoding: 'utf8' })
    rmSync(dir, { recursive: true, force: true })
    expect(result.stderr).toBe('')
    expect(result.status).toBe(0)
  })
})

describe('metaToTemplateArgs', () => {
  it('maps the converter form to template arguments', () => {
    const meta = metaToTemplateArgs({
      documentclassopt: 'authordate, empirical',
      title: 'T',
      jyear: '2026',
      doi: '10.36850/x',
      paperreceived: '2024-12-05',
      paperpublished: '2026-07-24',
      keywordsabstract: 'a, b',
      jvolume: '6',
      jissue: '2',
      authors: [
        {
          givenName: 'Ann',
          familyName: 'One',
          affiliation: 'Uni',
          orcid: 'https://orcid.org/0000-0001-2345-6789',
          email: 'a@x.org',
        },
        { givenName: 'Bob', familyName: 'Two', affiliation: 'Uni' },
        { givenName: 'Cy', familyName: 'Three', affiliation: 'Other' },
      ],
    })
    expect(meta).toMatchObject({
      articleType: 'empirical',
      title: 'T',
      year: 2026,
      doi: '10.36850/x',
      keywords: ['a', 'b'],
      affiliations: ['Uni', 'Other'],
      runningAuthor: 'One, Two, & Three',
      correspondence: { address: 'Uni', email: 'a@x.org' },
      dates: {
        received: 'December 5, 2024',
        published: 'July 24, 2026',
        publishedIso: '2026-07-24',
      },
      issue: { volume: '6', number: '2' },
    })
    expect(meta.authors?.[0]).toEqual({
      name: 'Ann One',
      orcid: '0000-0001-2345-6789',
      affiliations: [1],
      email: 'a@x.org',
    })
    expect(meta.authors?.[2].affiliations).toEqual([2])
  })

  it('turns the LaTeX and HTML in form values into plain text', () => {
    const meta = metaToTemplateArgs({
      title: 'Errors -- and \\& Trials',
      jname: 'Journal of Trial \\& Error',
      abstract: '<p>First&nbsp;para &amp; more.</p><p>Second 50\\%.</p>',
    })
    expect(meta.title).toBe('Errors – and & Trials')
    expect(meta.journal?.name).toBe('Journal of Trial & Error')
    expect(meta.abstract).toBe('First para & more. Second 50%.')
  })
})
