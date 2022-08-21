import { docxToVFile } from './docx-to-vfile'
import fs from 'fs'
import path from 'path'

describe('reoffDocxToVfile', () => {
  const doc = fs.readFileSync(
    new URL('../fixtures/Manuscript-2.docx', import.meta.url)
  )
  it('should work', async () => {
    const vfile = await docxToVFile(doc)
    expect(vfile).toMatchSnapshot()
  })
})
