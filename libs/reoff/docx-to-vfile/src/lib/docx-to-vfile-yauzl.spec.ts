import { docxToVFile } from './docx-to-vfile-yauzl'
import fs from 'fs'
import path from 'path'

describe('reoffDocxToVfile', () => {
  const doc = fs.readFileSync(
    new URL('../../../reoff-parse/src/test/word-citation.docx', import.meta.url)
  )
  jest.setTimeout(10000)
  it('should work', async () => {
    const vfile = await docxToVFile(doc)
    // console.log(vfile)
    expect(vfile).toMatchSnapshot()
  })
})
