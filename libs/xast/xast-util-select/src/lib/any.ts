import { Element } from 'xast'
import {
  Selectors,
  Rule,
  RuleSet,
  XastNode as Node,
  XastParent as Parent,
  SelectState,
} from './types'

import { html, svg } from 'property-information'
import { zwitch } from 'zwitch'
import { enterState } from './enter-state'
import { nest } from './nest'
import { pseudo } from './pseudo'
import { test } from './test'

const type = zwitch('type', {
  /**
   * TODO: For some reason ts expect error doesn't work for unknowntype
   */
  unknown: unknownType as any ,
  invalid: invalidType,
  handlers: { selectors, ruleSet, rule } as any,
})

/**
 * @param {Selectors|RuleSet|Rule} query
 * @param {XastNode|undefined} node
 * @param {SelectState} state
 * @returns {Array.<Element>}
 */
export function any(
  query: Selectors | RuleSet | Rule,
  node: Node | undefined,
  state: SelectState
): Array<Element> {
  return query && node ? type(query, node, state) : []
}

/**
 * @param {Selectors} query
 * @param {XastNode} node
 * @param {SelectState} state
 * @returns {Array.<Element>}
 */
function selectors(
  query: Selectors,
  node: Node,
  state: SelectState
): Array<Element> {
  const collector = new Collector(state.one)
  let index = -1

  while (++index < query.selectors.length) {
    collector.collectAll(ruleSet(query.selectors[index], node, state))
  }

  return collector.result
}

/**
 * @param {RuleSet} query
 * @param {XastNode} node
 * @param {SelectState} state
 * @returns {Array.<Element>}
 */
function ruleSet(
  query: RuleSet,
  node: Node,
  state: SelectState
): Array<Element> {
  return rule(query.rule, node, state)
}

/**
 * @param {Rule} query
 * @param {XastNode} tree
 * @param {SelectState} state
 * @returns {Array.<Element>}
 */
function rule(query: Rule, tree: Node, state: SelectState): Array<Element> {
  const collector = new Collector(state.one)

  if (state.shallow && query.rule) {
    throw new Error('Expected selector without nesting')
  }

  nest(
    query,
    tree,
    0,
    null,
    configure(query, {
      schema: state.space === 'svg' ? svg : html,
      language: undefined,
      direction: 'ltr',
      editableOrEditingHost: false,
      // @ts-expect-error assume elements.
      scopeElements: tree.type === 'root' ? tree.children : [tree],
      iterator,
      one: state.one,
      shallow: state.shallow,
    })
  )

  return collector.result

  /** @type {SelectIterator} */
  function iterator(
    query: Rule,
    node: Node,
    index: number,
    parent: Parent | null,
    state: SelectState
  ) {
    const exit = enterState(state, node)

    if (test(query, node, index, parent, state)) {
      if (query.rule) {
        nest(query.rule, node, index, parent, configure(query.rule, state))
      } else {
        // @ts-expect-error `test` also asserts `node is Element`
        collector.collect(node)
        state.found = true
      }
    }

    exit()
  }

  /**
   * @template {SelectState} S
   * @param {Rule} query
   * @param {S} state
   * @returns {S}
   */
  function configure<S extends SelectState>(query: Rule, state: S): S {
    const pseudos = query.pseudos || []
    let index = -1

    while (++index < pseudos.length) {
      if (pseudo.needsIndex.includes(pseudos[index].name)) {
        state.index = true
        break
      }
    }

    return state
  }
}

// Shouldn’t be called, all data is handled.
/* c8 ignore next 6 */
/**
 * @param {{[x: string]: unknown, type: string}} query
 */
function unknownType(query: { [x: string]: unknown; type: string }) {
  throw new Error('Unknown type `' + query.type + '`')
}

// Shouldn’t be called, parser gives correct data.
/* c8 ignore next 3 */
function invalidType() {
  throw new Error('Invalid type')
}

// export interface CollectorInt {
//   result: Element[]
//   one: boolean
//   found: boolean
// }
class Collector {
  result: Element[]
  one: boolean | undefined
  found: boolean
  constructor(one: boolean | undefined) {
    this.result = []
    this.one = one
    this.found = false
  }

  /**
   * Append nodes to array, filtering out duplicates.
   *
   * @param {Array.<Element>} elements
   */
  collectAll(elements: Array<Element>) {
    let index = -1

    while (++index < elements.length) {
      this.collect(elements[index])
    }
  }

  /**
   * Append one node.
   *
   * @param {Element} element
   */
  collect(element: Element) {
    if (this.one) {
      // Shouldn’t happen, safeguards performance problems.
      /* c8 ignore next */
      if (this.found) return
      this.found = true
    }

    if (!this.result.includes(element)) this.result.push(element)
  }
}
