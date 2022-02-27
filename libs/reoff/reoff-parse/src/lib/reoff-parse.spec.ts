import reoffParse from './reoff-parse'
import { unified } from 'unified'
import fs from 'fs/promises'
import path from 'path'
import { docxToVFile } from 'docx-to-vfile'
import { removePosition } from 'unist-util-remove-position'

describe('reoffParse', () => {
  it('should work', async () => {
    const proc = unified().use(reoffParse)
    const doc = await fs.readFile(
      path.join(__dirname, '../test/Manuscript-2.docx')
    )
    const file = await docxToVFile(doc)
    await fs.writeFile(path.join(__dirname, '../test/xml'), String(file))

    const res = proc.parse(file)

    await fs.writeFile(
      path.join(__dirname, '../test/ooxasttree'),
      JSON.stringify(removePosition(res, true), null, 2)
    )
    expect(res).toBeDefined()
  })
})
