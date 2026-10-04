import { one } from './one.js'
import { handlers } from './handlers/index.js'
import { Data as CSL } from 'csl-json'

import {
  Context,
  H,
  HWithoutProps,
  HWithProps,
  HastContent,
  HastRoot,
  Options,
  Attributes,
  Root,
  Element,
  Text,
} from './types.js'
import { minifyWhitespace } from 'xast-util-minify-whitespace'
import type { Node as UnistNode } from 'unist'
import { getStyleNames } from './util/style-names.js'
// import { h } from 'hastscript'
import { cslToRefList } from 'jast-util-from-csl'

export { one } from './one.js'
export { all } from './all.js'
export { handlers as defaultHandlers }

export function toHast(
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
  },
) {
  // const byId: { [s: string]: Element } = {}
  let hast: HastContent | HastRoot
  const citations: { [key: string | number]: CSL } = {}

  const h: H = Object.assign(
    ((
      node: HastRoot | HastContent,
      type: string,
      props?: Attributes | string | Array<HastContent>,
      children?: string | Array<HastContent>,
    ): HastContent => {
      let attributes: Attributes | undefined

      if (typeof props === 'string' || Array.isArray(props)) {
        children = props
        attributes = {}
      } else {
        attributes = props
      }

      const result: UnistNode & {
        properties?: Attributes
        value?: string
        children?: Array<HastContent>
      } = {
        ...(['root', 'text'].includes(type) ? { type } : { type: 'element', tagName: type }),
        properties: attributes,
      }

      if (typeof children === 'string') {
        result.value = children
      } else if (children) {
        result.children = children
      }

      if (node.position) {
        result.position = node.position
      }

      return result as HastContent
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
      checked: options.checked || '[x]',
      unchecked: options.unchecked || '[ ]',
      quotes: options.quotes || ['"'],
      italics: options.italics || 'emph',
      sectionDepth: options.topSection || 0,
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
      pHandlers: options.pHandlers || [],
      styleNames: getStyleNames(options.styles),
    } as Context,
  )

  // visit(tree, 'element', (node) => {
  //   const id =
  //     node.attributes &&
  //     'id' in node.attributes &&
  //     String(node.attributes.id).toUpperCase()

  //   if (id && !own.call(byId, id)) {
  //     byId[id] = node
  //   }
  // })

  minifyWhitespace(tree, { newlines: options.newLines === true })

  // @ts-expect-error: does return a transformer, that does accept any node.
  const result = one(h, tree, undefined)

  if (!result) {
    hast = { type: 'root', children: [] }
  } else if (Array.isArray(result)) {
    hast = { type: 'root', children: result }
  } else {
    hast = result
  }

  // visit(mdast, 'text', ontext)

  //// // // console.log(citations)
  // const back = select('back', hast)
  // if (!back) return hast

  // back.children.unshift(cslToRefList(citations))

  return hast

  function parseCitation(citation: any) {
    //
  }
  function collectCitation(citation: any, index: number) {
    citations[index] = citation
  }
}
