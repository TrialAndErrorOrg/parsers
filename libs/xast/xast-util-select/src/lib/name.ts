import { Rule, Element } from './types'

export function name(query: Rule, element: Element): boolean {
  return query.tagName === '*' || query.tagName === element.name
}
