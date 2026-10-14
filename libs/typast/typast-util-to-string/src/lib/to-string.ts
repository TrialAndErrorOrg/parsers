import type { MathContent, TypastNode } from 'typast'
import { childEntries } from 'typast-util-visit'

export interface Options {
  /**
   * Include equations, as text close to how they read (`x_1^2`, `a/b`).
   * @default true
   */
  includeMath?: boolean
  /**
   * Include string literals in code (`#text("hi")`, but also `#image("a.png")`).
   * @default false
   */
  includeStrings?: boolean
}

/**
 * Get the text content of a typast node (or nodes): text, spaces, escapes and shorthands as the
 * characters they stand for, a paragraph break as a blank line, and everything in content blocks
 * wherever they are (a footnote's body, a caption argument, a table cell, a template's title).
 * Code itself (names, numbers, `#set` rules), comments and labels add nothing.
 */
export function toString(
  node: TypastNode | TypastNode[] | null | undefined,
  options: Options = {},
): string {
  const { includeMath = true, includeStrings = false } = options

  const all = (nodes: TypastNode[]): string => nodes.map(one).join('')

  const math = (node: MathContent): string => {
    switch (node.type) {
      case 'mathText':
      case 'mathShorthand':
        return node.value
      case 'mathIdent':
        return node.name
      case 'mathFieldAccess':
        return `${math(node.target)}.${node.field}`
      case 'mathAlignPoint':
        return ''
      case 'mathPrimes':
        return "'".repeat(node.count)
      case 'mathFrac':
        return `${math(node.num)}/${math(node.denom)}`
      case 'mathRoot':
        return (node.index === 4 ? '∜' : node.index === 3 ? '∛' : '√') + math(node.radicand)
      case 'mathAttach':
        return (
          math(node.base) +
          "'".repeat(node.primes ?? 0) +
          (node.bottom ? '_' + math(node.bottom) : '') +
          (node.top ? '^' + math(node.top) : '')
        )
      case 'mathDelimited':
        return math(node.open) + node.children.map(math).join('') + math(node.close)
      case 'mathCall':
        return `${math(node.callee)}(${node.args
          .map((a) => (a.type === 'named' || a.type === 'spread' ? '' : math(a as MathContent)))
          .join(', ')})`
      case 'math':
        return (
          (node.deparenthesized ? '(' : '') +
          node.children.map(math).join('') +
          (node.deparenthesized ? ')' : '')
        )
      case 'str':
        return node.value
      default:
        return one(node)
    }
  }

  const one = (node: TypastNode): string => {
    switch (node.type) {
      case 'text':
      case 'escape':
      case 'shorthand':
        return node.value
      case 'space':
        return ' '
      case 'linebreak':
        return '\n'
      case 'parbreak':
        return '\n\n'
      case 'smartQuote':
        return node.double ? '"' : "'"
      case 'raw':
        return node.value
      case 'link':
        return node.url
      case 'ref':
        return node.supplement ? one(node.supplement) : ''
      case 'str':
        return includeStrings ? node.value : ''
      case 'equation':
        return includeMath ? node.children.map(math).join('') : ''
      case 'comment':
      case 'error':
      case 'typst':
      case 'label':
        return ''
      default:
        return all(childEntries(node).map((e) => e.node))
    }
  }

  if (!node) return ''
  return Array.isArray(node) ? all(node) : one(node)
}
