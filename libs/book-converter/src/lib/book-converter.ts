import { unified } from 'unified'
import reoffParse from 'reoff-parse'
import reoffUnifiedLatex from 'reoff-unified-latex'
import unifiedLatexStringify from 'unified-latex-stringify'
import { docxToVFile } from 'docx-to-vfile'
import { paragraphHandlers } from './paragraph/index.js'
import { readFile, writeFile } from 'fs/promises'
import { s } from '@unified-latex/unified-latex-builder'
import { existsSync, mkdirSync } from 'fs'
import { Output, makeIndex } from './make-index.js'
import { ConverterOptions } from './bin/schema.js'
import { Options } from 'ooxast-util-to-unified-latex'
import { reoffClean } from 'reoff-clean'
import reoffMarkupToStyle from 'reoff-markup-to-style'
import reoffParseReferences from 'reoff-parse-references'
import reoffCite from 'reoff-cite'
import { dirname, join } from 'path'

export async function docxConverter(
  options: ConverterOptions,
  unifiedOptions?: Options,
): Promise<Output> {
  const { docx, documentClassOptions, media, out } = options

  const preamble = options.preamble && (await readFile(options.preamble, 'utf-8'))

  const beforeFirstPage = options.before && (await readFile(options.before, 'utf-8'))

  const readBook = await docxToVFile(docx)

  const isBook = options.latexOptions.documentClass === 'jote-book'

  const output = String(
    await unified()
      .use(reoffParse)
      .use(reoffClean, {
        rPrRemoveList: [
          'w:lang',
          'w:shd',
          'w:sz',
          'w:szCs',
          'w:kern',
          'w:rFonts',
          'w:noProof',
          'w:iCs',
          'w:color',
        ],
      })
      .use(reoffMarkupToStyle, options.markupStyle)
      .use(options.parseCitations ? reoffParseReferences : () => (tree) => tree)
      .use(
        options.parseCitations
          ? reoffCite
          : () => (tree) => {
              return tree
            },
        { type: options.citationType ?? 'zotero' },
      )
      .use(() => async (tree, vfile) => {
        if (!existsSync(out!)) {
          mkdirSync(out!)
        }

        if (vfile.data.media) {
          // write them to ./media

          console.log(media)
          if (!existsSync(join(media!, 'media'))) {
            mkdirSync(join(media!, 'media'))
          }
          for (const [key, value] of Object.entries(vfile.data.media)) {
            const path = join(out!, `${key.replace('word/', '')}`)
            if (!existsSync(dirname(path))) {
              mkdirSync(dirname(path))
            }

            const buff = await value.arrayBuffer()

            const writtenfile = await writeFile(path, Buffer.from(buff))
          }
        }
        return tree
      })
      // @ts-expect-error jaja
      .use(reoffUnifiedLatex, {
        documentClass: {
          name: options.latexOptions.documentClass,
          options: [documentClassOptions],
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
        ...unifiedOptions,
      })
      .use(() => (tree) => {
        if (beforeFirstPage) {
          // @ts-expect-error jaja
          tree.content.at(-1).content.unshift(s(beforeFirstPage))
        }

        if (isBook && options.index) {
          // @ts-expect-error jaja
          tree.content.at(-1).content.push(s('\\printindex'))
        }
        return tree
      })
      .use(unifiedLatexStringify)
      .process(readBook),
  )

  const cleaned = output
    .replace(/([^\\])%/g, '$1\\%')
    .replace(/\\chapter\{ *Hoofd?stuk \d\.? ?/g, '\\chapter{')
    .replace(/\\footnote\{ +/g, '\\footnote{')

  if (!isBook || !options.index) {
    return {
      latexString: cleaned,
    }
  }
  const index = await readFile(options.index, 'utf-8')

  const bibToken = '\\chapter*{Literatuurlijst }'
  const [beforeBib, afterBib] = cleaned.split(bibToken)

  const indexed = makeIndex(index, beforeBib)

  return {
    ...indexed,
    latexString: indexed.latexString + bibToken + afterBib,
  }
}
