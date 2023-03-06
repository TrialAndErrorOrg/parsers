import reoffParse from './reoff-parse.js'
import { unified } from 'unified'
import fs from 'fs/promises'
import path from 'path'
import { docxToVFile } from 'docx-to-vfile'
import { removePosition } from 'unist-util-remove-position'

describe('reoffParse', () => {
  it('should work', async () => {
    const proc = unified().use(reoffParse)
    const doc = await fs.readFile(new URL('../test/Manuscript-2.docx', import.meta.url))
    const file = await docxToVFile(doc)
    await fs.writeFile(new URL('../test/xml', import.meta.url), String(file))

    const res = proc.parse(file)

    await fs.writeFile(
      new URL('../test/ooxasttree', import.meta.url),
      JSON.stringify(removePosition(res, true), null, 2),
    )
    expect(res).toBeDefined()
  })
})
