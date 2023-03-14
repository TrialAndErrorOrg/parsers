import { handlers } from './handlers/index.js'
import { createState } from './state.js'
// import { Parsed } from 'reoff-parse'

import { MdastNode, MdastRoot, Options, Root, Element, Text, Node } from './types.js'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'

import { VFile } from 'vfile'
import { notes } from './util/notes.js'

export { one } from './one.js'
export { all } from './all.js'
export { handlers as defaultHandlers }

const defaultOptions: Options = {
  newLines: false,
  quotes: ['"'],
}

declare module 'vfile' {
  interface DataMap {
    parsed: {
      [key: `${string}.xml` | `${string}.rels`]: Root
    }
  }
}

export function toMdast(tree: Root | Element | Text, file: VFile, options?: Options): MdastNode
export function toMdast(tree: Root | Element | Text, options?: Options): MdastNode
export function toMdast(
  tree: Root | Element | Text,
  optionsOrVFile?: Options | VFile,
  maybeOptions?: Options,
): MdastNode {
  const options = {
    ...defaultOptions,
    ...(optionsOrVFile instanceof VFile ? maybeOptions : optionsOrVFile),
  }

  const vfile = optionsOrVFile instanceof VFile ? optionsOrVFile : undefined

  const [unparsedFootnotes, unparsedEndnotes] = vfile
    ? [vfile?.data?.parsed?.['word/footnotes.xml'], vfile?.data?.parsed?.['word/endnotes.xml']]
    : []

  // We have to clone, cause we’ll use `rehype-minify-whitespace` on the tree,
  // which modifies
  /** @type {Node} */
  const cleanTree: Node = JSON.parse(JSON.stringify(tree))
  const options_ = options || {}
  const state = createState(options_)

  /** @type {MdastNode | MdastRoot} */
  let mdast: MdastNode | MdastRoot

  // @ts-expect-error: does return a transformer, that does accept any node.
  rehypeMinifyWhitespace({ newlines: options_.newlines === true })(cleanTree)

  state.simpleParagraph = true
  if (unparsedFootnotes) {
    // @ts-expect-error shhh
    whiteSpaceTransformer!(unparsedFootnotes)
    state.footnotes = notes(state, unparsedFootnotes)
  }

  if (unparsedEndnotes) {
    // @ts-expect-error shhh
    whiteSpaceTransformer!(unparsedEndnotes)
    state.endnotes = notes(state, unparsedEndnotes)
  }
  state.simpleParagraph = false

  const result = state.one(cleanTree, undefined)

  if (!result) {
    mdast = { type: 'root', children: [] }
  } else if (Array.isArray(result)) {
    // @ts-expect-error: assume no `root` in `children`.
    mdast = { type: 'root', children: result }
  } else {
    mdast = result
  }

  return mdast

  /**
   * Collapse text nodes, and fix whitespace.
   * Most of this is taken care of by `rehype-minify-whitespace`, but
   * we’re generating some whitespace too, and some nodes are in the end
   * ignored.
   * So clean up.
   *
   //* {import('unist-util-visit/complex-types').BuildVisitor MdastRoot, 'text'>}
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
}
