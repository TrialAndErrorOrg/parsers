import { docxToVFile } from './docx-to-vfile-unzipit'
import fs from 'fs'
import path from 'path'

describe('reoffDocxToVfile', () => {
  const doc = fs.readFileSync(
    new URL('../../../reoff-parse/src/test/word-citation.docx', import.meta.url)
  )

  const docimg = fs.readFileSync(
    new URL('../fixtures/images.docx', import.meta.url)
  )
  jest.setTimeout(10000)
  it('should work', async () => {
    const vfile = await docxToVFile(new Uint8Array(doc))
    fs.writeFileSync(new URL('test', import.meta.url), String(vfile))
    expect(vfile).toMatchSnapshot()
  })
  it('should contain vfile with relations data object', async () => {
    const vfile = await docxToVFile(new Uint8Array(doc))
    fs.writeFileSync(new URL('test', import.meta.url), String(vfile))
    expect(vfile.data.relations).toBeDefined()
  })
  it('should contain images', async () => {
    const vfile = await docxToVFile(new Uint8Array(docimg))
    // console.log(vfile)
    fs.writeFileSync(new URL('testimg', import.meta.url), String(vfile))
    expect(vfile.data.images).toBeDefined()
  })
})
