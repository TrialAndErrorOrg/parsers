import { readFile } from 'fs/promises'
import { makeIndex } from './make-index.js'
import { describe, expect, it } from 'vitest'

describe('makeIndex', () => {
  console.log('describing index...')

  it('should work', async () => {
    const latexString = `A directe democratie requires adaptive capability.\n\\section{Covid capability}`

    const csvString = await readFile(new URL('./index.csv', import.meta.url).pathname, 'utf-8')
    console.log('Making index...')

    const { latexString: l, index } = makeIndex(csvString, latexString)

    expect(l).toMatchInlineSnapshot(`
      "A directe democratie requires adaptive capability.
      \\\\section{Covid capability}"
    `)
    expect(index?.totalMatches).toMatchInlineSnapshot('0')
  })
})
