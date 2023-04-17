import { fromXml } from 'xast-util-from-xml'

import { ParserFunction } from 'unified'
import { Root, Node as XastNode } from 'xast'
import { filter } from 'unist-util-filter'
import { VFile } from 'vfile'
import {} from 'vfile-message'
import { DocxVFileData, XMLOrRelsString } from 'docx-to-vfile'

export const mainRelations = ['document', 'footnotes', 'endnotes'] as const
export type MainRelations = (typeof mainRelations)[number]

export interface Settings {
  removeWhiteSpace?: boolean
  fragment?: boolean

  /**
   * Whether to leave the raw XML on the data attribute of the VFile.
   * The raw XML is not needed in most cases, but can be useful for debugging.
   *
   * By default, all XML files that match the include option are parsed and added to the `data.parsed` attribute of the VFile.
   * All XML are then removed from the VFile.
   *
   * @default false
   */
  leaveRaw?: boolean

  /**
   * Which files on the `data` attribute of the VFile to parse and turn into `ooxast` trees.
   *
   * - `allXML` parses and appends all files that end with `.xml`.
   * - `all` parses and appends all files that end with `.xml` or `.rels`.
   * - if a string array is passed, it parses and appends all files that match the strings in the array.
   * - if a regexp array is passed, it parses and appends all files that match the regexps in the array.
   * - if a function is passed, it parses and appends all files that match the function.
   *
   * @default ['word/footnotes.xml', 'word/endnotes.xml', 'customXml/item1.xml', 'word/glossary/document.xml']
   *
   * Use of 'all' or 'allXML' is discouraged, as it will greatly increase the size of the VFile and generally be slower.
   * You can always manually parse the files you need later. For example, if you want to find out what fonts are used in the document, you can do something like this:
   *
   * ```ts
   * import { docxToVFile } from 'docx-to-vfile'
   * import { fromXml } from 'xast-util-from-xml'
   * import { unified } from 'unified'
   * import { reoffParse } from 'reoff-parse'
   *
   * const file = await docxToVFile(docx)
   *
   * const processor = unified()
   *  .use(reoffParse)
   *  .use(() => (tree, vfile) => {
   *    const fontTable = fromXml(vfile.data['word/fontTable.xml'])
   *    // do something with the fontTable
   *
   *    return tree
   *  })
   * ```
   */
  include?: string[] | RegExp[] | ((key: string) => boolean) | 'allXML' | 'all'
}

export default function reoffParse(options: Settings = {}) {
  const parser: ParserFunction<Root> = (doc, file) => {
    // Assume options.
    const settings: Settings = this.data('settings')

    const configuration = Object.assign({}, settings, options, {})
    return unify(doc, file, configuration)
  }

  Object.assign(this, { Parser: parser })
}

/**
 * Turn a pascal-case string into a camel-case string.
 * Necessary because working with pascal-case in js is annoying.
 */
function pascalToCamelCase(input: string): string {
  return input.replace(/-(\w)/g, (string, lowercaseLetter) => lowercaseLetter.toUpperCase())
}

function treeifyMabye(string: string, key?: string) {
  try {
    const xmlTree = fromXml(string) as RootWithSource
    if (!key) {
      return xmlTree
    }

    xmlTree.source = key
    return xmlTree
  } catch (e) {
    console.error(e)
    throw e
  }
}

export interface RootWithSource extends Root {
  /**
   * The key of the file in the VFile's `data` attribute.
   * Used to identify the file in the VFile and where to put it when stringifying.
   */
  source?: string
}

export const defaultSettings = {
  include: [
    'word/footnotes.xml',
    'word/endnotes.xml',
    'customXml/item1.xml',
    'word/glossary/document.xml',
    'word/_rels/document.xml.rels',
    'word/_rels/footnotes.xml.rels',
    'word/_rels/endnotes.xml.rels',
  ],
}

function unify(doc: string, file: VFile, userSettings: Settings) {
  let tree = treeifyMabye(doc, 'word/document.xml')

  if (!tree) {
    throw new Error('Could not parse document.xml')
  }

  const settings = { ...defaultSettings, ...userSettings }
  const { include } = settings

  tree = settings?.removeWhiteSpace
    ? filter(tree, (node: XastNode) => {
        return !(
          //@ts-expect-error ITS FINE
          (node.type === 'text' && node.value.replace(/[\n ]+/, '') === '')
        )
      }) || tree
    : tree

  const entries = Object.entries(file.data)

  const filesToParse = entries
    .filter(([key]) => {
      if (include === 'all') {
        return key.endsWith('.xml') || key.endsWith('.rels')
      }

      if (include === 'allXML') {
        return key.endsWith('.xml')
      }

      if (typeof include === 'function') {
        return include(key)
      }

      if (Array.isArray(include)) {
        return include.some((item) => {
          if (typeof item === 'string') {
            return key === item
          }
          if (item instanceof RegExp) {
            return item.test(key)
          }

          throw new Error('Invalid include option')
        })
      }

      return false
    })
    // check if it actually is a String
    .filter<[XMLOrRelsString, string]>((val): val is [XMLOrRelsString, string] => {
      const [key, value] = val
      if (/.xml$|.rels$/.test(key) && typeof value === 'string') {
        return true
      }

      console.log(`File ${key} is not a string, skipping...`)
      console.log(value)
      file.message(`File ${key} is not a string, skipping...`)
      return false
    })

  const relations = file.data.relations ?? ({} as NonNullable<DocxVFileData['relations']>)

  filesToParse.forEach(([key, value]) => {
    if (!file.data.parsed) {
      file.data.parsed = {} as Parsed
    }

    if (settings.leaveRaw) {
      return
    }

    if (!key.endsWith('.rels')) {
      file.data.parsed[key] = treeifyMabye(value, key)

      file.data[key] = undefined
      return
    }

    const newKey = key.split('/').pop()?.replace('.xml.rels', '')

    if (!newKey) {
      console.error('Could not parse relations key', key)
      file.message(`Could not parse relations key ${key}`)
      return
    }

    if (!isAllowedRelation(newKey)) {
      return
    }

    relations[newKey] = relToJSON(value)
  })

  file.data.relations = relations

  return tree
}

/**
 * The parsed content of .xml files in the .docx file
 */
export interface Parsed {
  [key: XMLOrRelsString]: Root | undefined
}

declare module 'vfile' {
  interface DataMap extends DocxVFileData {
    parsed: Parsed
  }
}

export function relToJSON(rels: string) {
  return Object.fromEntries(
    // eslint-disable-next-line regexp/no-super-linear-backtracking
    [...rels.matchAll(/Id="(.*?)".*?Target="(.*?)"/g)].map((match) => [match[1], match[2]]),
  )
}

function isAllowedRelation(key: string): key is MainRelations {
  return mainRelations.includes(key as any)
}
