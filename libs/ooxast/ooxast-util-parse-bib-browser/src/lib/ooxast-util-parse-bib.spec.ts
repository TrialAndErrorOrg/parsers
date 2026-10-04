import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import { readFile } from 'fs/promises'
import { unified } from 'unified'
import { parseBib } from './ooxast-util-parse-bib-browser.js'
import { findBib } from './find-bib.js'
import { describe, it, expect } from 'vitest'

// The anystyle API is a local server (`pnpm ruby`), not always running.
const anystyleApi = process.env.ANYSTYLE_API_URL ?? 'http://localhost:8000/api/style'
const hasAnystyleApi = await fetch(anystyleApi, {
  method: 'HEAD',
  signal: AbortSignal.timeout(1000),
}).then(
  () => true,
  () => false,
)

async function getTree() {
  const docxBuff = await readFile(
    new URL('../../../ooxast-util-parse-bib-node/src/fixtures/index.docx', import.meta.url),
  )
  const docxVFile = await docxToVFile(new Uint8Array(docxBuff))
  return unified().use(reoffParse).parse(docxVFile)
}

const tree = getTree()

describe('parseBib', () => {
  it('should find bib', async () => {
    const bibStart = findBib(await tree)
    expect(bibStart).toBeTruthy()
  })

  // Parses the bibliography with the anystyle API and consolidates it against Crossref (network).
  // Skipped when the anystyle API is unavailable.
  it.skipIf(!hasAnystyleApi)(
    'should crossref',
    async () => {
      const y = await parseBib(await tree, {
        apiUrl: anystyleApi,
        mailto: 'support@centeroftrialanderror.com',
      })
      expect(y).toMatchSnapshot()
    },
    60000,
  )
})
