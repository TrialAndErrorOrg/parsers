import { fromXml } from 'xast-util-from-xml'

import { ParserFunction } from 'unified'
import { Root, Node as XastNode, Element as XastElement } from 'xast'
import { filter } from 'unist-util-filter'
import { map } from 'unist-util-map'

export interface Settings {
  removeWhiteSpace?: boolean
  fragment?: boolean
}

export default function reoffParse(options: Settings = {}) {
  const parser: ParserFunction<Root> = (doc, file) => {
    // Assume options.
    const settings: Settings = this.data('settings')
    // console.log(file.data)
    // console.log(file)
    // console.log(this.data())

    const configuration = Object.assign({}, settings, options, {
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      //extensions: this.data('micromarkExtensions') || [],
      //mdastExtensions: this.data('fromMarkdownExtensions') || [],
    })
    return unify(doc, settings)
  }

  Object.assign(this, { Parser: parser })
}

/**
 * Turn a pascal-case string into a camel-case string.
 * Necessary because working with pascal-case in js is annoying.
 */
function pascalToCamelCase(input: string): string {
  return input.replace(/-(\w)/g, (string, lowercaseLetter) =>
    lowercaseLetter.toUpperCase()
  )
}
function treeifyMabye(string: string) {
  try {
    return fromXml(string)
  } catch (e) {
    console.error(e)
    throw e
  }
}

function unify(string: string, settings: Settings) {
  let tree = treeifyMabye(string)

  tree = settings?.removeWhiteSpace
    ? filter(tree, (node: XastNode) => {
        return !(
          //@ts-expect-error ITS FINE
          (node.type === 'text' && node.value.replace(/[\n ]+/, '') === '')
        )
      })!
    : tree

  // map
  // attributes --> attributes
  // name --> name
  // to be more in line with hast, which makes plugins easier to port
  //@ts-expect-error: TODO:somehow types don't align, fix
  // tree = map(tree!, (node) => {
  //   if (node.type !== 'element') return node
  //   const element = node as XastElement

  //   const attributes = element.attributes
  //     ? Object.entries(element.attributes).reduce(
  //         (
  //           acc: { [key: string]: any },
  //           [key, value]: [key: string, value: any]
  //         ) => {
  //           acc[pascalToCamelCase(key)] = value
  //           return acc
  //         },
  //         {}
  //       )
  //     : {}
  //   return {
  //     type: 'element',
  //     name: pascalToCamelCase(element.name),
  //     attributes: attributes,
  //     children: element.children,
  //     ...(element.position ? { position: element.position } : {}),
  //   }
  // })
  return tree as Root
}
