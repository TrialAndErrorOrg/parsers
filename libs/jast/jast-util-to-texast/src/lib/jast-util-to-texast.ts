import { one } from './one'
import { handlers } from './handlers/index'

import {
  Context,
  J,
  JWithoutProps,
  JWithProps,
  TexastContent,
  TexastRoot,
  Node,
  Options,
  Attributes,
} from './types'
import { convert } from 'unist-util-is'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'

export { one } from './one'
export { all } from './all'
export { handlers as defaultHandlers }

const block = convert(['heading', 'paragraph', 'root'])

export function toTexast(
  tree: TexastRoot | TexastContent,
  options: Options = {
    newLines: false,
    checked: '[x]',
    unchecked: '[ ]',
    quotes: ['"'],
    topSection: 1,
    columnSeparator: false,
  },
) {
  // const byId: { [s: string]: Element } = {}
  let texast: TexastContent | TexastRoot

  // TODO: fix this type error
  const j: J = Object.assign(
    ((
      node: TexastRoot | TexastContent,
      type: string,
      props?: Attributes | string | TexastContent[],
      children?: string | TexastContent[],
    ) => {
      let attributes: Attributes | undefined

      if (typeof props === 'string' || Array.isArray(props)) {
        children = props
        attributes = {}
      } else {
        attributes = props
      }

      // @ts-expect-error Assume valid `type` and `children`/`value`.
      const result: Node = { type, ...attributes }

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

      return result as TexastContent
    }) as JWithProps & JWithoutProps,
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
      sectionDepth: options.topSection || 1,
      documentClass: options.documentClass || { name: 'article' },
      bibname: options.bibname || 'bibliography',
      columnSeparator: !!options.columnSeparator,
      footnotes: {},
      booktabs: options.booktabs ?? true,
      rowNumber: 0,
      numberOfRows: 0,
      citationAnalyzer: options.citationAnalyzer || ((node: Node) => 'autocite'),
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

  // @ts-expect-error: does return a transformer, that does accept any node.
  rehypeMinifyWhitespace({ newlines: options.newlines === true })(tree)

  // @ts-expect-error: does return a transformer, that does accept any node.
  const result = one(j, tree, undefined)

  if (!result) {
    texast = { type: 'root', children: [] }
  } else if (Array.isArray(result)) {
    texast = { type: 'root', children: result }
  } else {
    texast = result
  }

  // visit(mdast, 'text', ontext)

  return texast
}
