import { writeFile as fsWriteFile, mkdtemp, rm } from 'fs/promises'
import { tmpdir } from 'os'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { docxConverter } from './book-converter.js'
import { converterOptionsSchema } from './bin/schema.js'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

// Debug output is only written when WRITE_TEST_OUTPUT is set, so test runs never modify tracked files.
const writeFile = async (...args: Parameters<typeof fsWriteFile>) => {
  if (process.env.WRITE_TEST_OUTPUT) await fsWriteFile(...args)
}

describe('bookConverter', () => {
  // The converter writes the docx media next to its output, so point that at a temporary directory.
  let out: string
  beforeAll(async () => {
    out = await mkdtemp(join(tmpdir(), 'book-converter-'))
  })
  afterAll(async () => {
    await rm(out, { recursive: true, force: true })
  })

  it('should work', async () => {
    const options = converterOptionsSchema.parse({
      docx: fileURLToPath(new URL('./_cleanup/source.docx', import.meta.url)),
      index: fileURLToPath(new URL('./_cleanup/index.csv', import.meta.url)),
      out,
      media: out,
      latexOptions: { documentClass: 'jote-book', options: [] },
    })

    const { latexString, index } = await docxConverter(options)

    await writeFile(new URL('./_cleanup/book.tex', import.meta.url), latexString)
    expect(latexString).toContain('\\documentclass')
    expect(index?.totalMatches).toMatchInlineSnapshot('727')
    expect(index?.unmatchedWords).toMatchInlineSnapshot(`
      Map {
        "community engaged learning" => true,
        "constructive alignment" => true,
        "experiental" => true,
        "international classroom" => true,
        "science and society" => true,
        "strategic evaluation protocol" => true,
      }
    `)
  }, 60_000)
})
