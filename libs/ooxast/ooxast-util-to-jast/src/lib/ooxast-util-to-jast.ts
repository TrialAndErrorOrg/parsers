import { one } from './one'
import { handlers } from './handlers/index'
import { own } from './util/own'
import { Data as CSL } from 'csl-json'

import {
  Context,
  J,
  JWithoutProps,
  JWithProps,
  JastContent,
  JastRoot,
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
import { x } from 'xastscript'
import { cslToRefList } from 'jast-util-from-csl'
import { DocxVFile } from 'docx-to-vfile'
import { VFile } from 'vfile'

export { one } from './one'
export { all } from './all'
export { handlers as defaultHandlers }

const block = convert(['heading', 'paragraph', 'root'])

const defaultOptions: Options = {
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

export function toJast(input: VFile, userOptions: Options): JastRoot
export function toJast(input: Root | Element | Text | VFile, userOptions: Options) {
  const options: Options = { ...defaultOptions, ...userOptions }
  // const byId: { [s: string]: Element } = {}
  let jast: JastContent | JastRoot
  const citations: { [key: string | number]: CSL } = {}

  const footnotes = input instanceof VFile ? input?.data?.parsed?.['word/footnotes.xml'] : undefined

  const j: J = Object.assign(
    ((
      node: JastRoot | JastContent,
      type: string,
      props?: Attributes | string | Array<JastContent>,
      children?: string | Array<JastContent>,
    ) => {
      let attributes: Attributes | undefined

      if (typeof props === 'string' || Array.isArray(props)) {
        children = props
        attributes = {}
      } else {
        attributes = props
      }

      const result: Node = Object.assign(
        {},
        ['root', 'text'].includes(type) ? { type } : { type: 'element', name: type },
        { attributes },
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

      return result as JastContent
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
      sectionDepth: options.topSection || 0,
      documentClass: options.documentClass || { name: 'article' },
      bibname: options.bibname || 'bibliography',
      columnSeparator: !!options.columnSeparator,
      citationNumber: 0,
      collectCitation: options.collectCitation || collectCitation,
      parseCitation: options.parseCitation || parseCitation,
      partialCitation: '',
      deleteNextRun: false,
      relations:
        input instanceof VFile
          ? options.relations || input.data.relations || {}
          : options.relations || {},
      citeKeys: {},
      citationType: options.citationType || 'mendeley',
      footnotes: footnotes,
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
  rehypeMinifyWhitespace({ newlines: options.newlines === true })(input)

  // @ts-expect-error: does return a transformer, that does accept any node.
  const result = one(j, input, undefined)

  if (!result) {
    jast = { type: 'root', children: [] }
  } else if (Array.isArray(result)) {
    jast = { type: 'root', children: result }
  } else {
    jast = result
  }

  // visit(mdast, 'text', ontext)

  //// // // console.log(citations)
  const back = select('back', jast)
  if (!back) return jast

  back.children.unshift(cslToRefList(citations))

  return jast

  function parseCitation(citation: any) {
    //
  }
  function collectCitation(citation: any, index: number) {
    citations[index] = citation
  }
}
