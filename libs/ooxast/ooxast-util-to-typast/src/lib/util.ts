import type { Content, PhrasingContent, Text } from 'typast'
import type { Element, Root } from 'xast'

/** Any xast node we may meet while walking an ooxast tree. */
export type XNode = Root | Root['children'][number] | Element['children'][number]

export function isEl(node: unknown, name?: string): node is Element {
  return (
    !!node &&
    typeof node === 'object' &&
    (node as Element).type === 'element' &&
    (name === undefined || (node as Element).name === name)
  )
}

/** The element children of a node. */
export function kids(node: XNode | undefined): Element[] {
  if (!node || !('children' in node) || !node.children) return []
  return (node.children as XNode[]).filter((c): c is Element => isEl(c))
}

export function child(node: XNode | undefined, name: string): Element | undefined {
  return kids(node).find((c) => c.name === name)
}

export function attr(node: Element | undefined, name: string): string | undefined {
  const value = node?.attributes?.[name]
  return value == null ? undefined : String(value)
}

/** Depth-first search for the first descendant (or self) with the given name. */
export function find(
  node: XNode | undefined,
  name: string | ((el: Element) => boolean),
): Element | undefined {
  if (!node) return undefined
  const test = typeof name === 'string' ? (el: Element) => el.name === name : name
  if (isEl(node) && test(node)) return node
  for (const c of kids(node)) {
    const found = find(c, test)
    if (found) return found
  }
  return undefined
}

export function findAll(
  node: XNode | undefined,
  name: string | ((el: Element) => boolean),
): Element[] {
  const out: Element[] = []
  const test = typeof name === 'string' ? (el: Element) => el.name === name : name
  const walk = (n: XNode) => {
    if (isEl(n) && test(n)) out.push(n)
    for (const c of kids(n)) walk(c)
  }
  if (node) walk(node)
  return out
}

/** Direct text value of an element (`w:t`, `m:t`, `w:instrText`). */
export function ownText(el: Element): string {
  return el.children.map((c) => (c.type === 'text' ? c.value : '')).join('')
}

/**
 * Plain text of a part of the document as Word would show it: `w:t`, tabs, breaks and math
 * text, without deleted text or field instructions.
 */
export function plainText(node: XNode | undefined): string {
  if (!node) return ''
  let out = ''
  const walk = (n: XNode) => {
    if (!isEl(n)) return
    switch (n.name) {
      case 'w:t':
      case 'm:t':
        out += ownText(n)
        return
      case 'w:tab':
        out += '\t'
        return
      case 'w:br':
      case 'w:cr':
        out += '\n'
        return
      case 'w:noBreakHyphen':
        out += '‑'
        return
      case 'w:delText':
      case 'w:instrText':
      case 'w:del':
      case 'w:moveFrom':
      case 'w:pPr':
      case 'w:rPr':
        return
      default:
        for (const c of kids(n)) walk(c)
    }
  }
  walk(node)
  return out
}

/** Is a `w:val`-style toggle property on? (`<w:b/>`, `<w:b w:val="1"/>`, not `w:val="0"`) */
export function isOn(el: Element | undefined): boolean {
  if (!el) return false
  const val = attr(el, 'w:val')
  return val === undefined || !['0', 'false', 'off', 'none'].includes(val)
}

export const text = (value: string): Text => ({ type: 'text', value })

export function isWhitespaceText(node: Content): boolean {
  return node.type === 'text' && !node.value.trim()
}

/** Typst-safe string for use in a label (`<…>`) or bibliography key. */
export function slug(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .replace(/ß/g, 'ss')
    .replace(/[^\w\-:.]+/g, '')
}

/** Convert EMU (English Metric Units) to typographic points. */
export const emuToPt = (emu: number) => emu / 12700

/** Convert twentieths of a point (twips) to points. */
export const twipsToPt = (twips: number) => twips / 20

export function trimInline(nodes: PhrasingContent[]): PhrasingContent[] {
  const out = [...nodes]
  while (out.length && out[0].type === 'text' && !out[0].value.trim()) out.shift()
  while (
    out.length &&
    out[out.length - 1].type === 'text' &&
    !(out[out.length - 1] as Text).value.trim()
  )
    out.pop()
  if (out.length && out[0].type === 'text') {
    out[0] = { ...out[0], value: (out[0] as Text).value.replace(/^\s+/, '') }
  }
  const last = out[out.length - 1]
  if (last && last.type === 'text') {
    out[out.length - 1] = { ...last, value: last.value.replace(/\s+$/, '') }
  }
  // a trailing linebreak is meaningless in a paragraph
  while (out.length && out[out.length - 1].type === 'linebreak') out.pop()
  while (out.length && out[0].type === 'linebreak') out.shift()
  return out
}
