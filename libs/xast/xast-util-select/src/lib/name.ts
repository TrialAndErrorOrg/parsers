import { Rule, Element } from './types.js'

export function name(query: Rule, element: Element): boolean {
  return query.tagName === '*' || query.tagName === element.name
}
