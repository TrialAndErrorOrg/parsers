import reoffParse from 'reoff-parse'
import reoffRejour from 'reoff-rejour'
import rejourRelatex from 'rejour-relatex'
import relatexStringify from 'relatex-stringify'
import { docxToVFile } from 'docx-to-vfile'
import { spawnSync } from 'child_process'
import { existsSync, readdirSync, writeFileSync as fsWriteFileSync } from 'fs'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { unified } from 'unified'
import { removePosition } from 'unist-util-remove-position'
import { reoffClean } from 'reoff-clean'
import reoffCite from 'reoff-cite'
import reoffParseReferences from 'reoff-parse-references'
import { it, expect } from 'vitest'
import type { Node } from 'unist'

// Debug output is only written when WRITE_TEST_OUTPUT is set, so test runs never modify tracked files.
const writeFileSync = (...args: Parameters<typeof fsWriteFileSync>) => {
  if (process.env.WRITE_TEST_OUTPUT) fsWriteFileSync(...args)
}

/** Dump a position-less copy of the tree; the tree flowing through the pipeline is left alone. */
const dumpTree = (path: string, tree: Node) => {
  if (!process.env.WRITE_TEST_OUTPUT) return
  const copy = structuredClone(tree)
  removePosition(copy, { force: true })
  fsWriteFileSync(path, JSON.stringify(copy, null, 2))
}

const fromDocx = (
  path: string,
  citationType?: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote',
) =>
  unified()
    .use(reoffParse)
    .use(reoffClean, {
      rPrRemoveList: [
        'w:lang',
        'w:shd',
        'w:szCs',
        'w:sz',
        'w:kern',
        'w:rFonts',
        'w:noProof',
        'w:color',
      ],
    })
    .use(reoffParseReferences)
    .use(reoffCite, { type: citationType || 'zotero', log: false })
    .use(() => (tree: Node) => {
      dumpTree(join(path, 'test.ooxast.json'), tree)
    })
    .use(reoffRejour, { citationType: citationType || 'zotero' })
    .use(() => (tree: Node) => {
      dumpTree(join(path, 'test.jats.json'), tree)
    })
    .use(rejourRelatex)
    .use(() => (tree: Node) => {
      dumpTree(join(path, 'test.tex.json'), tree)
    })
    .use(relatexStringify)

const fixtures = new URL('fixtures', import.meta.url).pathname
// `footnotes` and `image` keep their docx under another name, which takes them out of the suite.
const dir = readdirSync(fixtures).filter((name) => existsSync(join(fixtures, name, 'index.docx')))

/**
 * Fixtures with a plain-text bibliography: `reoff-parse-references` parses it with the anystyle
 * CLI (`gem install anystyle-cli`), so they can only run where that is installed.
 */
const needsAnystyle = ['citationparagraph', 'complete', 'endnote', 'nocites', 'zotero-2']
const hasAnystyle = spawnSync('anystyle', ['--version']).status === 0

// Skipped (not renamed, so their snapshots stay checked) when the anystyle CLI is missing.
for (const name of dir) {
  it.skipIf(needsAnystyle.includes(name) && !hasAnystyle)(
    `parses correctly for ${name}`,
    async () => {
      const docxIn = await docxToVFile(
        new Uint8Array(await readFile(join(fixtures, name, 'index.docx'))),
      )

      const result = String(
        await fromDocx(join(fixtures, name), name === 'zotero' ? 'zotero' : undefined).process(
          docxIn,
        ),
      )
      writeFileSync(join(fixtures, name, 'result.tex'), result)

      expect(result).toMatchSnapshot()
    },
    30000,
  )
}
