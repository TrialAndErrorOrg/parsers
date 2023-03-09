import { XastNode, Space, Element } from './lib/types.js'

import { any } from './lib/any.js'
import { parse } from './lib/parse.js'

export function matches(selector: string, node?: XastNode, space?: Space): boolean {
  return Boolean(any(parse(selector), node, { space, one: true, shallow: true })[0])
}

export function select(selector: string, node?: XastNode, space?: Space): Element | null {
  return any(parse(selector), node, { space, one: true })[0] || null
}

export function selectAll(selector: string, node?: XastNode, space?: Space): Array<Element> {
  return any(parse(selector), node, { space })
}
