import { extractDocx } from './extractDocx'
import { readFileSync } from 'fs'
import tryCatchPromise from './tryCatchPromise'

describe('utils', () => {
  const docx = readFileSync(
    '/Users/thomas/OneDrive - Journal of Trial and Error/Documents/Publications/Issue 2 and beyond/RGA/Dunleavy/pre/JOTE2_RGA_Dunleavy_v2.docx'
  )
  it('should work', async () => {
    const [res, error] = await tryCatchPromise(extractDocx(docx))
    expect(error).toBeNull()
  })
})
