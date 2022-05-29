import { docxToVFile } from './docx-to-vfile'
import fs from 'fs'
import path from 'path'

describe('reoffDocxToVfile', () => {
  const doc = fs.readFileSync(
    path.join(__dirname, '../fixtures/Manuscript-2.docx')
  )
  it('should work', async () => {
    const vfile = await docxToVFile(doc)
    expect(vfile).toMatchSnapshot()
  })
})
