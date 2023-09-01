import { writeFile } from 'fs/promises'
import { bookConverter } from './book-converter.js'
import { describe, expect, it } from 'vitest'

describe('bookConverter', () => {
  it('should work', async () => {
    const { latexString, totalMatches, unmatchedWords } = await bookConverter(
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
