import { one } from './one'
import { handlers } from './handlers/index'
import { Data as CSL } from 'csl-json'

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
} from './types'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'

export { one } from './one'
export { all } from './all'
export { handlers as defaultHandlers }

export function toUnifiedLatex(
  tree: Root | Element | Text,
  options: Options = {
    newLines: false,
    checked: '[x]',
    unchecked: '[ ]',
    quotes: ['"'],
    topSection: 0,
    columnSeparator: false,
    documentClass: { name: 'article' },
    bibname: 'References',

    //relations: {},
  }
) {
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
      content?: string | Array<UnifiedLatexNode>
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
        { position: node.position }
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
      handlers: options.handlers
        ? { ...handlers, ...options.handlers }
        : handlers,
      document: options.document,
      checked: options.checked || '[x]',
      unchecked: options.unchecked || '[ ]',
      quotes: options.quotes || ['"'],
      italics: options.italics || 'emph',
      sectionDepth: options.topSection || 1,
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
    } as Context
  )

  const result = one(h, tree, undefined)

  if (!result) {
    unifiedLatex = { type: 'root', content: [] }
  } else if (Array.isArray(result)) {
    unifiedLatex = { type: 'root', content: result }
  } else {
    unifiedLatex = result
  }

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
