import { one } from './one'
import { handlers } from './handlers/index'
import { Data as CSL } from 'csl-json'

import {
  Context,
  H,
  HWithoutProps,
  HWithProps,
  HastContent,
  HastRoot,
  Node,
  Options,
  Attributes,
  Root,
  Element,
  Text,
} from './types'
import { convert } from 'unist-util-is'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'
import { select } from 'xast-util-select'
// import { h } from 'hastscript'
import { cslToRefList } from 'jast-util-from-csl'

export { one } from './one'
export { all } from './all'
export { handlers as defaultHandlers }

const block = convert(['heading', 'paragraph', 'root'])

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
  }
) {
  // const byId: { [s: string]: Element } = {}
  let hast: HastContent | HastRoot
  const citations: { [key: string | number]: CSL } = {}

  const h: H = Object.assign(
    ((
      node: HastRoot | HastContent,
      type: string,
      props?: Attributes | string | Array<HastContent>,
      children?: string | Array<HastContent>
    ): HastContent => {
      let attributes: Attributes | undefined

      if (typeof props === 'string' || Array.isArray(props)) {
        children = props
        attributes = {}
      } else {
        attributes = props
      }

      const result: Node = Object.assign(
        {},
        ['root', 'text'].includes(type)
          ? { type }
          : { type: 'element', tagName: type },
        { properties: attributes }
      )

      if (typeof children === 'string') {
        // @ts-expect-error: Looks like a literal.
        result.value = children
      } else if (children) {
        // @ts-expect-error: Looks like a parent.
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
      handlers: options.handlers
        ? { ...handlers, ...options.handlers }
        : handlers,
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
    } as Context
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

  // @ts-expect-error: does return a transformer, that does accept any node.
  rehypeMinifyWhitespace({ newlines: options.newlines === true })(tree)

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

  /**
   * Collapse text nodes, and fix whitespace.
   * Most of this is taken care of by `rehype-minify-whitespace`, but
   * we’re generating some whitespace too, and some nodes are in the end
   * ignored.
   * So clean up.
   *
   //* {import('unist-util-visit/complex-types').BuildVisitor HastRoot, 'text'>}
   */
  function ontext(node: any, index: any, parent: any) {
    /* c8 ignore next 3 */
    if (index === null || !parent) {
      return
    }

    const previous = parent.children[index - 1]

    if (previous && previous.type === node.type) {
      previous.value += node.value
      parent.children.splice(index, 1)

      if (previous.position && node.position) {
        previous.position.end = node.position.end
      }

      // Iterate over the previous node again, to handle its total value.
      return index - 1
    }

    node.value = node.value.replace(/[\t ]*(\r?\n|\r)[\t ]*/, '$1')

    // We don’t care about other phrasing nodes in between (e.g., `[ asd ]()`),
    // as there the whitespace matters.
    if (parent && block(parent)) {
      if (!index) {
        node.value = node.value.replace(/^[\t ]+/, '')
      }

      if (index === parent.children.length - 1) {
        node.value = node.value.replace(/[\t ]+$/, '')
      }
    }

    if (!node.value) {
      parent.children.splice(index, 1)
      return index
    }
  }
  function parseCitation(citation: any) {
    //
  }
  function collectCitation(citation: any, index: number) {
    citations[index] = citation
  }
}
