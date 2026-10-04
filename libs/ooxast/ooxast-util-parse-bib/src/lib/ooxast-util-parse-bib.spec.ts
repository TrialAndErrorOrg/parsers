import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import { readFile } from 'fs/promises'
import { spawnSync } from 'child_process'
import { unified } from 'unified'
import { parseBib } from './ooxast-util-parse-bib.js'
import { findBib } from './find-bib.js'
import { describe, it, expect } from 'vitest'

// The anystyle CLI (a Ruby gem) is not installed everywhere.
const hasAnystyle = !spawnSync('anystyle', ['--version']).error

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

  // Parses the bibliography with the anystyle CLI and consolidates it against Crossref (network).
  // Skipped when the anystyle CLI is unavailable.
  it.skipIf(!hasAnystyle)(
    'should crossref',
    async () => {
      const y = await parseBib(await tree, {
        mailto: 'support@centeroftrialanderror.com',
      })
      expect(y).toMatchSnapshot()
    },
    60000,
  )
})
