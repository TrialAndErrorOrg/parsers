import { Node } from 'unist'
import { detectCitePlugin } from './ooxast-util-citation-plugin'
import fs from 'fs'
import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import { unified } from 'unified'
import path from 'path'

const fromDocx = async (file: string) => {
  const arr = new Uint8Array(await fs.promises.readFile(file))
  const docx = docxToVFile(arr)

  const tree = unified()
    .use(reoffParse)
    .parse(await docx)
  return detectCitePlugin(tree)
}
const testfile = (type: string) =>
  new URL(
    `../../../../processors/docx-to-tex/src/test/fixtures/${type}/index.docx`,
    import.meta.url
  ).pathname

describe('ooxast-util-citation-plugin', () => {
  it('should identify zotero', async () => {
    expect(await fromDocx(testfile('zotero'))).toBe('zotero')
  })
  it('should identify zotero-2', async () => {
    expect(await fromDocx(testfile('zotero-2'))).toBe('zotero')
  })
  it('should identify citavi', async () => {
    expect(await fromDocx(testfile('citavi'))).toBe('citavi')
  })
  it('should identify endnote', async () => {
    expect(await fromDocx(testfile('endnote'))).toBe('endnote')
  })
  it('should identify mendeley', async () => {
    expect(await fromDocx(testfile('complete'))).toBe('mendeley')
  })
  it('should identify word', async () => {
    expect(await fromDocx(testfile('word'))).toBe('word')
  })
})
