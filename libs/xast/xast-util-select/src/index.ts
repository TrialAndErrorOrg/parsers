import { XastNode, Space, Element } from './lib/types'

import { any } from './lib/any'
import { parse } from './lib/parse'

export function matches(
  selector: string,
  node?: XastNode,
  space?: Space
): boolean {
  return Boolean(
    any(parse(selector), node, { space, one: true, shallow: true })[0]
  )
}

export function select(
  selector: string,
  node?: XastNode,
  space?: Space
): Element | null {
  return any(parse(selector), node, { space, one: true })[0] || null
}

export function selectAll(
  selector: string,
  node?: XastNode,
  space?: Space
): Array<Element> {
  return any(parse(selector), node, { space })
}
