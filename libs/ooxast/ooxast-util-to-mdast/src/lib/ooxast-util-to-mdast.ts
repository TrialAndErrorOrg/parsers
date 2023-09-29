import { handlers } from './handlers/index.js'
import { createState } from './state.js'
// import { Parsed } from 'reoff-parse'
import { fromXml } from 'xast-util-from-xml'

import { MdastNode, MdastRoot, Options, Root, Element, Text, Node } from './types.js'

import { VFile } from 'vfile'
import { findListNumbering } from './util/find-list-numbering.js'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'

export { handlers as defaultHandlers }

const defaultOptions: Options = {
  newLines: false,
  quotes: ['"'],
}

declare module 'vfile' {
  interface DataMap {
    [xml: `${string}.xml` | `${string}.rels`]: string | undefined
    parsed: {
      [key: `${string}.xml` | `${string}.rels`]: Root | undefined
    }
  }
}

export function toMdast(tree: Root | Element | Text, file: VFile, options?: Options): MdastRoot
export function toMdast(tree: Root | Element | Text, options?: Options): MdastRoot
export function toMdast(
  tree: Root | Element | Text,
  optionsOrVFile?: Options | VFile,
  maybeOptions?: Options,
): MdastRoot {
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

  const options_ = {
    ...options,
    relations: vfile?.data?.relations?.document,
  }
  const state = createState(options_)

  const numberingXml =
    vfile?.data?.parsed?.['word/numbering.xml'] ?? vfile?.data?.['word/numbering.xml']

  const listNumbering = numberingXml ? findListNumbering(numberingXml) : undefined

  state.listNumbering = listNumbering

  /** @type {MdastNode | MdastRoot} */
  let mdast: MdastNode | MdastRoot

  // @ts-expect-error shh
  rehypeMinifyWhitespace()(cleanTree)
  const result = state.one(cleanTree, undefined)

  if (!result) {
    mdast = { type: 'root', children: [] } as MdastRoot
  } else if (Array.isArray(result)) {
    mdast = { type: 'root', children: result } as MdastRoot
  } else {
    mdast = result as MdastRoot
  }

  state.simpleParagraph = true
  if (unparsedFootnotes) {
    // @ts-expect-error shh
    rehypeMinifyWhitespace()(unparsedFootnotes)
    state.options.relations = vfile?.data?.relations?.footnotes
    mdast.children.push(...state.all(unparsedFootnotes))
  }

  if (unparsedEndnotes) {
    // @ts-expect-error shh
    rehypeMinifyWhitespace()(unparsedEndnotes)
    state.options.relations = vfile?.data?.relations?.endnotes
    mdast.children.push(...state.all(unparsedEndnotes))
  }
  state.simpleParagraph = false

  return mdast
}
