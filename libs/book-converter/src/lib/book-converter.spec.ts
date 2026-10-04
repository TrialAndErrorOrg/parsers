import { writeFile as fsWriteFile } from 'fs/promises'
import { docxConverter } from './book-converter.js'
import { describe, expect, it } from 'vitest'

// Debug output is only written when WRITE_TEST_OUTPUT is set, so test runs never modify tracked files.
const writeFile = async (...args: Parameters<typeof fsWriteFile>) => {
  if (process.env.WRITE_TEST_OUTPUT) await fsWriteFile(...args)
}

describe('bookConverter', () => {
  it('should work', async () => {
    const { latexString, totalMatches, unmatchedWords } = await docxConverter(
      new URL('./source.docx', import.meta.url).pathname,
      new URL('./index.csv', import.meta.url).pathname,
    )

    console.log({ totalMatches, unmatchedWords })

    await writeFile(new URL('./book.tex', import.meta.url).pathname, latexString)
    expect(latexString).toContain('\\documentclass')
    expect(totalMatches).toMatchInlineSnapshot('726')
    expect(unmatchedWords).toMatchInlineSnapshot(`
      Map {
        "community engaged learning" => true,
        "constructive alignment" => true,
        "experiental" => true,
        "international classroom" => true,
        "science and society" => true,
        "strategic evaluation protocol" => true,
      }
    `)
  })
})
