import { one } from './one.js'
import { handlers } from './handlers/index.js'
import { Data as CSL } from 'csl-json'
// import { Parsed } from 'reoff-parse'

import {
  Context,
  H,
  HWithoutProps,
  HWithProps,
  UnifiedLatexNode,
  UnifiedLatexRoot,
  Options,
  Root,
  Element,
  Text,
  RenderInfo,
} from './types.js'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'

import { args, env, m, s } from '@unified-latex/unified-latex-builder'

import { PB } from './util/PB.js'

import { makePackage } from './util/make-package.js'
import { cslToBiblatex } from 'csl-to-biblatex'
import { VFile } from 'vfile'
import { notes } from './util/notes.js'
import { findListNumbering } from './util/find-list-numbering.js'

export { one } from './one.js'
export { all } from './all.js'
export { handlers as defaultHandlers }

const defaultOptions: Options = {
  newLines: false,
  quotes: ['"'],
  topSection: 1,
  columnSeparator: false,

  documentClass: { name: 'article' },
  bibname: 'References',
  packages: [
    'caption',
    'tabularx',
    'xcolor',
    'graphicx',
    'hyperref',
    { name: 'biblatex', options: ['backend=biber', 'style=apa'] },
  ],
}

declare module 'vfile' {
  interface DataMap {
    [key: `${string}.xml` | `${string}.rels`]: string | undefined
    parsed: {
      [key: `${string}.xml` | `${string}.rels`]: Root | undefined
    }
  }
}

export function toUnifiedLatex(
  tree: Root | Element | Text,
  file: VFile,
  options?: Options,
): UnifiedLatexRoot
export function toUnifiedLatex(tree: Root | Element | Text, options?: Options): UnifiedLatexRoot
export function toUnifiedLatex(
  tree: Root | Element | Text,
  optionsOrVFile?: Options | VFile,
  maybeOptions?: Options,
): UnifiedLatexRoot {
  const options = {
    ...defaultOptions,
    ...(optionsOrVFile instanceof VFile ? maybeOptions : optionsOrVFile),
  }

  const vfile = optionsOrVFile instanceof VFile ? optionsOrVFile : undefined

  const [unparsedFootnotes, unparsedEndnotes] = vfile
    ? [vfile?.data?.parsed?.['word/footnotes.xml'], vfile?.data?.parsed?.['word/endnotes.xml']]
    : []

  const whiteSpaceTransformer = rehypeMinifyWhitespace({
    newlines: options.newLines === true,
  })

  if (whiteSpaceTransformer) {
    // @ts-expect-error rehype-minify-whitespace is not typed correctly
    whiteSpaceTransformer(tree)
  }

  // const byId: { [s: string]: Element } = {}
  let unifiedLatex: UnifiedLatexNode | UnifiedLatexRoot
  const citations: { [key: string | number]: CSL } = {}

  const h: H = Object.assign(
    ((
      node: UnifiedLatexRoot | UnifiedLatexNode,
      type: string,
      props?: RenderInfo | string | Array<UnifiedLatexNode>,
      content?: string | Array<UnifiedLatexNode>,
    ): UnifiedLatexNode => {
      let _renderInfo: RenderInfo | undefined

      if (typeof props === 'string' || Array.isArray(props)) {
        content = props
        _renderInfo = {}
      } else {
        _renderInfo = props
      }

      const result: UnifiedLatexNode = Object.assign(
        {},
        { type },
        { _renderInfo },
        { content },
        { position: node.position },
      )

      return result as UnifiedLatexNode
    }) as HWithProps & HWithoutProps,
    {
      //  nodeById: byId,
      baseFound: false,
      inTable: false,
      wrapText: true,
      /** @type {string|null} */
      frozenBaseUrl: null,
      qNesting: 0,
      handlers: options.handlers ? { ...handlers, ...options.handlers } : handlers,
      document: options.document,
      quotes: options.quotes || ['"'],
      italics: options.italics || 'emph',
      sectionDepth: options.topSection ?? 1,
      documentClass: options.documentClass || { name: 'article' },
      bibname: options.bibname || 'bibliography',
      columnSeparator: !!options.columnSeparator,
      citationNumber: 0,
      collectCitation: options.collectCitation || collectCitation,
      parseCitation: options.parseCitation || parseCitation,
      partialCitation: '',
      deleteNextRun: false,
      relations: options.relations || {},
      citeKeys: {},
      citationType: options.citationType || 'mendeley',
      displayMath: options.displayMath || 'equation',
      inlineMath: options.inlineMath || '$',
      xcolor: options.xcolor ?? 'true',
      strikethrough: options.strikethrough ?? 'sout',
      inMath: false,
      title: options.title,
      footnotes: {},
      endnotes: {},
      defaultCol: options.defaultCol || 'l',
      tabularx: options.tabularx
        ? {
            width:
              typeof options.tabularx === 'object' && 'width' in options.tabularx
                ? options.tabularx.width
                : '1.0\\textwidth',
          }
        : false,
      simpleParagraph: false,
      bibliography: options.bibliography || [],
      inDisplayMath: false,
      listNumbering: vfile?.data?.['word/numbering.xml']
        ? findListNumbering(vfile.data['word/numbering.xml'])
        : vfile?.data?.parsed?.['word/numbering.xml']
        ? findListNumbering(vfile.data.parsed['word/numbering.xml'])
        : undefined,
    } as Context,
  )

  h.simpleParagraph = true
  if (unparsedFootnotes) {
    //@ts-expect-error shhh
    whiteSpaceTransformer!(unparsedFootnotes)
    h.footnotes = notes(h, unparsedFootnotes)
  }

  if (unparsedEndnotes) {
    //@ts-expect-error shhh
    whiteSpaceTransformer!(unparsedEndnotes)
    h.endnotes = notes(h, unparsedEndnotes)
  }
  h.simpleParagraph = false

  const result = one(h, tree, undefined)
  console.log('result', result)

  if (!result) {
    return { type: 'root', content: [] } as UnifiedLatexRoot
  }

  unifiedLatex = env('document', result)

  const biblatex = h.bibliography
    ? Array.isArray(h.bibliography)
      ? cslToBiblatex(h.bibliography)
      : s(h.bibliography)
    : null

  const packages =
    options.packages
      ?.filter((p) => {
        const name = typeof p === 'string' ? p : p.name
        if (!h.xcolor) {
          return name !== 'xcolor'
        }

        if (!h.tabularx) {
          return name !== 'tabularx'
        }

        return true
      })
      ?.flatMap((p) => [
        typeof p === 'string' ? makePackage(p) : makePackage(p.name, p.options),
        PB,
      ]) || []

  const preamble = options.preamble ?? [
    ...(h.title ? [PB, m('title', h.title), PB] : []),
    ...(h.bibliography && h.bibliography.length
      ? [PB, m('addbibresource', 'bibliography.bib'), PB]
      : []),
  ]

  unifiedLatex = {
    type: 'root',
    content: [
      h.documentClass.options
        ? m(
            'documentclass',
            args([h.documentClass.options?.join(', '), h.documentClass.name], {
              braces: '[]{}',
            }),
          )
        : m('documentclass', h.documentClass.name),
      PB,
      ...packages,
      ...(typeof preamble === 'string' ? [s(preamble)] : preamble),
      ...(biblatex ? [env('filecontents', biblatex, 'bibliography.bib')] : []),
      PB,
      unifiedLatex,
    ],
  } as UnifiedLatexRoot

  return unifiedLatex

  /**
   * Collapse text nodes, and fix whitespace.
   * Most of this is taken care of by `rehype-minify-whitespace`, but
   * we’re generating some whitespace too, and some nodes are in the end
   * ignored.
   * So clean up.
   *
   //* {import('unist-util-visit/complex-types').BuildVisitor UnifiedLatexRoot, 'text'>}
   */
  // function ontext(node: any, index: any, parent: any) {
  //   /* c8 ignore next 3 */
  //   if (index === null || !parent) {
  //     return
  //   }

  //   const previous = parent.children[index - 1]

  //   if (previous && previous.type === node.type) {
  //     previous.value += node.value
  //     parent.children.splice(index, 1)

  //     if (previous.position && node.position) {
  //       previous.position.end = node.position.end
  //     }

  //     // Iterate over the previous node again, to handle its total value.
  //     return index - 1
  //   }

  //   node.value = node.value.replace(/[\t ]*(\r?\n|\r)[\t ]*/, '$1')

  //   // We don’t care about other phrasing nodes in between (e.g., `[ asd ]()`),
  //   // as there the whitespace matters.
  //   if (parent && block(parent)) {
  //     if (!index) {
  //       node.value = node.value.replace(/^[\t ]+/, '')
  //     }

  //     if (index === parent.content.length - 1) {
  //       node.value = node.value.replace(/[\t ]+$/, '')
  //     }
  //   }

  //   if (!node.value) {
  //     parent.children.splice(index, 1)
  //     return index
  //   }
  // }
  function parseCitation(citation: any) {
    //
  }
  function collectCitation(citation: any, index: number) {
    citations[index] = citation
  }
}
