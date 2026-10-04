import { readFile } from 'fs/promises'
import { makeIndex } from './make-index.js'
import { describe, expect, it } from 'vitest'

describe('makeIndex', () => {
  it('should work', async () => {
    const latexString = `A directe democratie requires adaptive capability.\n\\section{Covid capability}`

    const csvString = await readFile(new URL('./_cleanup/index.csv', import.meta.url), 'utf-8')

    const { latexString: l, index } = makeIndex(csvString, latexString)

    expect(l).toMatchInlineSnapshot(`
      "A directe democratie requires adaptive capability.
      \\\\section{Covid capability}"
    `)
    expect(index?.totalMatches).toMatchInlineSnapshot('0')
  })
})
