import reoffCompile from './reoff-compile.js'
import { beforeAll, describe, it, expect } from 'vitest'
import { docxToVFile } from 'docx-to-vfile'
import { unified } from 'unified'
import reoffParse from 'reoff-parse'
import { fileURLToPath } from 'url'
import { writeFile } from 'fs/promises'
import { VFile } from 'vfile'
import reoffMarkupToStyle from 'reoff-markup-to-style'

const fromCompiler = unified().use(reoffParse).use(reoffCompile)

const moreInterestingCompiler = unified().use(reoffParse).use(reoffMarkupToStyle).use(reoffCompile)

describe('reoffCompile', () => {
  let vfile: VFile
  let vfileClone: VFile
  let blob: Blob
  let docx: VFile

  beforeAll(async () => {
    vfile = await docxToVFile(fileURLToPath(new URL('images.docx', import.meta.url)))
    vfileClone = structuredClone(vfile)

    expect(vfile.data.media).toBeDefined()
    const res = await fromCompiler.process(vfile)
    blob = await res.result

    expect(blob).toBeInstanceOf(Blob)

    await writeFile(
      fileURLToPath(new URL('images-rebuilt.docx', import.meta.url)),
      Buffer.from(await blob.arrayBuffer()),
    )

    docx = await docxToVFile(blob)
    expect(docx.data.media).toBeDefined()
  })

  it('should get the vfile', () => {
    expect(vfile.data.media).toBeDefined()
  })

  it('should compile the vfile', async () => {
    expect(blob).toBeInstanceOf(Blob)
  })

  it('should be able to parse the docx into a vfile again', async () => {
    expect(docx.data.media).toBeDefined()
  })

  it('should be able to run reoff-parse', async () => {
    const res = fromCompiler.parse(docx)
    expect(res).toBeDefined()
  })

  it('should reflect modifications', async () => {
    const res = await moreInterestingCompiler.process(vfileClone)
    const blob = await res.result
    expect(blob).toBeInstanceOf(Blob)

    const doc = await docxToVFile(blob)
    await writeFile(
      new URL('images-rebuilt2.docx', import.meta.url),
      Buffer.from(await blob.arrayBuffer()),
    )
    // const x = select('w:p', res.)
    expect(doc.data.media).toBeDefined()
  })
})
