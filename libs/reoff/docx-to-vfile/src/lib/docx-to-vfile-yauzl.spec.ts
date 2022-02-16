import { docxToVFile } from './docx-to-vfile-yauzl'
import fs from 'fs'
import path from 'path'

describe('reoffDocxToVfile', () => {
  const doc = fs.readFileSync(
    path.join(__dirname, '../../../reoff-parse/src/test/word-citation.docx')
  )
  jest.setTimeout(10000)
  it('should work', async () => {
    const vfile = await docxToVFile(doc)
    // console.log(vfile)
    expect(vfile).toMatchSnapshot()
  })
})
