import { one } from './one'
import { handlers } from './handlers/index'
import { own } from './util/own'

import { J, LtastNode, LtastRoot, Node, Options, Properties } from './types'
import { convert } from 'unist-util-is'
//import { visit } from 'unist-util-visit'
//import {BuildVisitor} from 'unist-util-visit/complex-types'

export { one } from './one'
export { all } from './all'
export { handlers as defaultHandlers }

const block = convert(['heading', 'paragraph', 'root'])

export function toLtast(
  tree: Node,
  options: Options = {
    newLines: false,
    checked: '[x]',
    unchecked: '[ ]',
    quotes: ['"'],
  }
) {
  const byId: { [s: string]: Element } = {}
  let ltast: LtastNode | LtastRoot

  const j: J = Object.assign(
    (
      node: Node,
      type: string,
      props?: Properties | string | Array<Node>,
      children?: string | Array<Node>
    ) => {
      let properties: Properties | undefined

      if (typeof props === 'string' || Array.isArray(props)) {
        children = props
        properties = {}
      } else {
        properties = props
      }

      //// @ts-expect-error Assume valid `type` and `children`/`value`.
      const result: Node = { type, ...properties }

      if (typeof children === 'string') {
        //// @ts-expect-error: Looks like a literal.
        result.value = children
      } else if (children) {
        //// @ts-expect-error: Looks like a parent.
        result.children = children
      }

      if (node.position) {
        result.position = node.position
      }

      return result
    },
    {
      nodeById: byId,
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
    }
  )

  // visit(tree, 'element', (node) => {
  //   const id =
  //     node.properties &&
  //     'id' in node.properties &&
  //     String(node.properties.id).toUpperCase()

  //   if (id && !own.call(byId, id)) {
  //     byId[id] = node
  //   }
  // })

  // @ts-expect-error: does return a transformer, that does accept any node.
  //rehypeMinifyWhitespace({ newlines: options.newlines === true })(tree)

  const result = one(h, tree, undefined)

  if (!result) {
    ltast = { type: 'root', children: [] }
  } else if (Array.isArray(result)) {
    ltast = { type: 'root', children: result }
  } else {
    ltast = result
  }

  // visit(mdast, 'text', ontext)

  return ltast

  /**
   * Collapse text nodes, and fix whitespace.
   * Most of this is taken care of by `rehype-minify-whitespace`, but
   * we’re generating some whitespace too, and some nodes are in the end
   * ignored.
   * So clean up.
   *
   //* {import('unist-util-visit/complex-types').BuildVisitor<LtastRoot, 'text'>}
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
}
