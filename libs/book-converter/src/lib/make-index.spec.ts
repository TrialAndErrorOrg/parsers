import { readFile } from 'fs/promises'
import { makeIndex } from './make-index'
import { describe, expect, it } from 'vitest'

describe('makeIndex', () => {
  console.log('describing index...')

  it('should work', async () => {
    let latexString = `A directe democratie requires adaptive capability.\n\\section{Covid capability}`

    const csvString = await readFile(new URL('./index.csv', import.meta.url).pathname, 'utf-8')
    console.log('Making index...')

    const { latexString: l, totalMatches, unmatchedWords } = makeIndex(csvString, latexString)

    expect(l).toMatchInlineSnapshot(`
      "A directe democratie requires adaptive capability.
      \\\\section{Covid capability}"
    `)
    expect(totalMatches).toMatchInlineSnapshot('1')
  })
})
