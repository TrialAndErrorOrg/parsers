import { unified } from 'unified'
import reoffParse from 'reoff-parse'
import reoffUnifiedLatex from 'reoff-unified-latex'
import unifiedLatexStringify from 'unified-latex-stringify'
import { docxToVFile } from 'docx-to-vfile'
import { paragraphHandlers } from './paragraph'
import { readFile, writeFile } from 'fs/promises'
import { s } from '@unified-latex/unified-latex-builder'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { Output, makeIndex } from './make-index'

export async function bookConverter(book: string): Promise<string>
export async function bookConverter(book: string, indexCSV: string): Promise<Output>
export async function bookConverter(book: string, indexCSV?: string): Promise<string | Output> {
  const preamble = await readFile(new URL('./preamble.tex', import.meta.url).pathname, 'utf-8')
  const beforeFirstPage = await readFile(
    new URL('./before-first-page.tex', import.meta.url).pathname,
    'utf-8',
  )

  const readBook = await docxToVFile(book)
  const out = String(
    await unified()
      .use(reoffParse)
      .use(() => async (tree, vfile) => {
        if (vfile.data.media) {
          // write them to ./media

          if (!existsSync(new URL('./media', import.meta.url).pathname)) {
            mkdirSync(new URL('./media', import.meta.url).pathname)
          }
          for (const [key, value] of Object.entries(vfile.data.media)) {
            console.log(key, value)
            const path = new URL(`./${key.replace('word/', '')}`, import.meta.url).pathname
            const buff = await value.arrayBuffer()

            const writtenfile = await writeFile(path, Buffer.from(buff))
          }
        }
        return tree
      })
      .use(reoffUnifiedLatex, {
        documentClass: {
          name: 'jote-book',
          options: [
            'smallauthor, chapterhaspagenum, nochapterinheader, pagenuminheader,  bigchapnum,medium2, tocpages, garamond, titleinheader',
          ],
        },
        topSection: 0,
        paragraphHandlers,
        preamble,
        packages: [],
        formattingHandlers: {
          u: (h, text) => text,
          color: (h, text, color) => text,
          shd: (h, text, color) => text,
        },
      })
      .use(() => (tree) => {
        tree.content.at(-1).content.unshift(s(beforeFirstPage))
        tree.content.at(-1).content.push(s('\\printindex'))
        return tree
      })
      .use(unifiedLatexStringify)
      .process(readBook),
  )

  const cleaned = out
    .replace(/([^\\])%/g, '$1\\%')
    .replace(/\\chapter\{ *Hoofd?stuk \d\.? ?/g, '\\chapter{')
    .replace(/\\footnote\{ +/g, '\\footnote{')

  if (!indexCSV) {
    return cleaned
  }
  const index = await readFile(indexCSV, 'utf-8')

  const bibToken = '\\chapter*{Literatuurlijst }'
  const [beforeBib, afterBib] = cleaned.split(bibToken)

  const indexed = makeIndex(index, beforeBib)

  return {
    ...indexed,
    latexString: indexed.latexString + bibToken + afterBib,
  }
}
