import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { unified } from 'unified'
import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import typastStringify from 'typast-stringify'
import reoffTypast from './reoff-typast.js'

const fixture = fileURLToPath(
  new URL(
    '../../../../ooxast/ooxast-util-to-unified-latex/src/test/fixtures/footnotes/index.docx',
    import.meta.url,
  ),
)

describe('reoffTypast', () => {
  it('turns a docx into Typst source in a unified pipeline', async () => {
    const vfile = await docxToVFile(readFileSync(fixture))
    const file = await unified()
      .use(reoffParse)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .use(reoffTypast as any, { templatePath: 'template.typ' })
      .use(typastStringify)
      .process(vfile)
    const out = String(file)
    expect(out.startsWith('#import "template.typ": *\n#show: jote-article.with(')).toBe(true)
    expect(out).toContain('#footnote[')
    expect(file.data.typast).toBeDefined()
  })
})
