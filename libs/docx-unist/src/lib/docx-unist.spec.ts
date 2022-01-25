import { docxUnist } from './docx-unist'
import { readFileSync } from 'fs'

describe('docxUnist', () => {
  const docx =
    '/Users/thomas/OneDrive - Journal of Trial and Error/Documents/Publications/Issue 2 and beyond/RGA/Dunleavy/working/JOTE2_RGA_Dunleavy_v2.docx'
  it('should work', async () => {
    const result = await docxUnist(docx)
    console.dir(result, { depth: null })
    expect(result).toEqual('docx-unist')
  })
})
