import { handlers } from './handlers/index.js'
import { createState } from './state.js'
// import { Parsed } from 'reoff-parse'
import { fromXml } from 'xast-util-from-xml'

import { MdastNode, MdastRoot, Options, Root, Element, Text, Node } from './types.js'
import rehypeMinifyWhitespace from 'rehype-minify-whitespace'

import { VFile } from 'vfile'
import type { DocxVFileData } from 'docx-to-vfile'
import { findListNumbering } from './util/find-list-numbering.js'

export { handlers as defaultHandlers }

declare module 'vfile' {
  // `parsed` and `relations` are declared by `docx-to-vfile`.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DataMap extends DocxVFileData {}
}

const defaultOptions: Options = {
  newLines: false,
  quotes: ['"'],
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
  const options_ = options || {}
  // Relations (image and link targets) come from the options or, since docx-to-vfile 0.7,
  // per part (document/footnotes/endnotes) from the VFile.
  const relationsFor = (part: 'document' | 'footnotes' | 'endnotes') =>
    options_.relations ?? vfile?.data?.relations?.[part] ?? {}
  const state = createState({ ...options_, relations: relationsFor('document') })

  const numberingXml =
    vfile?.data?.parsed?.['word/numbering.xml'] ?? vfile?.data?.['word/numbering.xml']

  const listNumbering = numberingXml ? findListNumbering(numberingXml) : undefined

  state.listNumbering = listNumbering

  /** @type {MdastNode | MdastRoot} */
  let mdast: MdastNode | MdastRoot

  // @ts-expect-error: does return a transformer, that does accept any node.
  rehypeMinifyWhitespace({ newlines: options_.newlines === true })(cleanTree)

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
    state.relations = relationsFor('footnotes')
    // @ts-expect-error shhh
    rehypeMinifyWhitespace()(unparsedFootnotes)
    mdast.children.push(...state.all(unparsedFootnotes))
  }

  if (unparsedEndnotes) {
    state.relations = relationsFor('endnotes')
    // @ts-expect-error shhh
    rehypeMinifyWhitespace()(unparsedEndnotes)
    mdast.children.push(...state.all(unparsedEndnotes))
  }
  state.simpleParagraph = false

  return mdast
}
