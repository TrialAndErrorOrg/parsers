import reoffParse from './reoff-parse.js'
import { unified } from 'unified'
import fs from 'fs'
import path from 'path'
import { docxToVFile } from 'docx-to-vfile'
import { removePosition } from 'unist-util-remove-position'

describe('reoffParse', () => {
  const doc = fs.readFileSync(new URL('../test/Manuscript-2.docx', import.meta.url))
  const proc = unified().use(reoffParse)
  it('should work', async () => {
    const file = await docxToVFile(doc)
    fs.writeFileSync(new URL('../test/xml.xml', import.meta.url), String(file))

    const res = proc.parse(file)

    fs.writeFileSync(
      new URL('../test/ooxasttree.json', import.meta.url),
      JSON.stringify(removePosition(res, true), null, 2),
    )
    expect(res).toBeDefined()
  })

  it('should create vfile without relations data object and then add relations object after parsing', async () => {
    const vfile = await docxToVFile(doc)
    expect(vfile.data.relations).toBeUndefined()
    const parsed = proc.parse(vfile)

    const url = new URL('../test/testrelations.json', import.meta.url)
    fs.writeFileSync(url, JSON.stringify(parsed, null, 2))
    expect(vfile.data.relations).toBeDefined()
    console.log(vfile.data.relations)

    expect(vfile.data.relations.document).toBeDefined()
  })
})
