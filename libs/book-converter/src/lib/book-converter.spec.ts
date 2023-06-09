import { writeFile } from 'fs/promises'
import { bookConverter } from './book-converter'
import { describe, expect, it } from 'vitest'

describe('bookConverter', () => {
  it('should work', async () => {
    const { latexString, totalMatches, unmatchedWords } = await bookConverter(
      new URL('./partial.docx', import.meta.url).pathname,
      new URL('./index.csv', import.meta.url).pathname,
    )
    await writeFile(new URL('./book.tex', import.meta.url).pathname, latexString)
    expect(latexString).toContain('\\documentclass')
    expect(totalMatches).toMatchInlineSnapshot('709')
    expect(unmatchedWords).toMatchInlineSnapshot(`
      Map {
        "constructive alignment" => true,
        "experiential learning" => true,
        "fair open data and software" => true,
        "international classroom" => true,
        "ondersteunend en bedrijfsvoerend personeel" => true,
        "strategic evaluation protocol" => true,
      }
    `)
  })
})
