import { docxToVFile } from './docx-to-vfile-unzipit.js'
import fs from 'fs'
import { describe, expect, it } from 'vitest'
import { fileURLToPath } from 'url'

// Debug output is only written when WRITE_TEST_OUTPUT is set, so test runs never modify tracked files.
const writeDebugFile = (...args: Parameters<typeof fs.writeFileSync>) => {
  if (process.env.WRITE_TEST_OUTPUT) fs.writeFileSync(...args)
}

describe('reoffDocxToVfile', () => {
  const doc = //fs.readFileSync(
    fileURLToPath(new URL('../../../reoff-parse/src/test/word-citation.docx', import.meta.url))
  //  )

  const docimg = fs.readFileSync(new URL('../fixtures/images.docx', import.meta.url))
  it('should work', async () => {
    const vfile = await docxToVFile(doc)
    const url = new URL('../fixtures/test.xml', import.meta.url)
    writeDebugFile(url, String(vfile))
    // `cwd` is the machine's working directory, keep it out of the snapshot.
    vfile.cwd = '<cwd>'
    expect(vfile).toMatchSnapshot()
  })

  it('should contain images', async () => {
    const vfile = await docxToVFile(docimg)
    const url = new URL('../fixtures/testimages.xml', import.meta.url)
    writeDebugFile(url, String(vfile))

    expect(vfile.data.media).toBeDefined()
  })
})

interface Data {
  [key: `${string}.xml` | `${string}.rels`]: string | undefined
  media: { [key: string]: ArrayBuffer }
  relations: { [key: string]: string }
}
