import { docxToVFile } from './docx-to-vfile-unzipit.js'
import fs from 'fs'
import { describe, expect, it } from 'vitest'
import { fileURLToPath } from 'url'

describe('reoffDocxToVfile', () => {
  const doc = //fs.readFileSync(
    fileURLToPath(new URL('../../../reoff-parse/src/test/word-citation.docx', import.meta.url))
  //  )

  const docimg = fs.readFileSync(new URL('../fixtures/images.docx', import.meta.url))
  it('should work', async () => {
    const vfile = await docxToVFile(doc)
    const url = new URL('../fixtures/test.xml', import.meta.url)
    fs.writeFileSync(url, String(vfile))
    expect(vfile).toMatchSnapshot()
  })
  it('should contain vfile with relations data object', async () => {
    const vfile = await docxToVFile(doc)
    const url = new URL('../fixtures/testrelations.xml', import.meta.url)
    fs.writeFileSync(url, String(vfile))
    expect(vfile.data.relations).toBeDefined()
  })
  it('should contain images', async () => {
    const vfile = await docxToVFile(docimg)
    const url = new URL('../fixtures/testimages.xml', import.meta.url)
    fs.writeFileSync(url, String(vfile))
    console.dir(vfile.data, { depth: null })

    expect(vfile.data.media).toBeDefined()
  })
})

interface Data {
  [key: `${string}.xml` | `${string}.rels`]: string | undefined
  media: { [key: string]: ArrayBuffer }
  relations: { [key: string]: string }
}
