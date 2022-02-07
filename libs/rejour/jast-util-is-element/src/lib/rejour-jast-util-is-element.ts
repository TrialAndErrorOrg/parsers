// Port of hast-util-is-element
// https://github.com/syntax-tree/hast-util-is-element/blob/main/index.js

import { Node, Parent } from 'unist'
import { Element } from 'jjast'

export type Name = string

export type Test =
  | null
  | undefined
  | Name
  | TestFunctionAnything
  | Array<Name | TestFunctionAnything>
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('hast').Element} Element
 *
 * @typedef {string} Name
 */

export type PredicateTest<T extends Element> =
  | null
  | undefined
  | T['name']
  | TestFunctionPredicate<T>
  | Array<T['name'] | TestFunctionPredicate<T>>

/**
 * Check if an element passes a test
 */
export type TestFunctionAnything = (
  element: Element,
  index?: number | null,
  parent?: Parent | null
) => boolean | void

/**
 * Check if an element passes a certain node test
 */
export type TestFunctionPredicate<X extends Element> = (
  element: Element,
  index?: number | null,
  parent?: Parent | null
) => element is X

/**
 * Check if a node is an element and passes a certain node test
 */
export type AssertAnything = (
  node?: unknown,
  index?: number | null,
  parent?: Parent | null | undefined
) => boolean

/**
 * Check if a node is an element and passes a certain node test
 */
export type AssertPredicate<Y extends Element> = (
  node?: unknown,
  index?: number | null,
  parent?: Parent | null
) => node is Y

/**
 *  Check if `node` is an `element` and whether it passes the given test.
 */
export const isElement: (() => false) &
  (<T extends Element = Element>(
    node: unknown,
    test?: PredicateTest<T>,
    index?: number,
    parent?: Parent,
    context?: unknown
  ) => node is T) &
  ((
    node: unknown,
    test: Test,
    index?: number,
    parent?: Parent,
    context?: unknown
  ) => boolean) =
  /**
   * Check if a node is an element and passes a test.
   * When a `parent` node is known the `index` of node should also be given.
   *
   * @type {(
   *   (() => false) &
   *   (<T extends Element = Element>(node: unknown, test?: PredicateTest<T>, index?: number, parent?: Parent, context?: unknown) => node is T) &
   *   ((node: unknown, test: Test, index?: number, parent?: Parent, context?: unknown) => boolean)
   * )}
   */
  /**
   * Check if a node passes a test.
   * When a `parent` node is known the `index` of node should also be given.
   *
   * @param {unknown} [node] Node to check
   * @param {Test} [test] When nullish, checks if `node` is a `Node`.
   * When `string`, works like passing `function (node) {return node.type === test}`.
   * When `function` checks if function passed the node is true.
   * When `array`, checks any one of the subtests pass.
   * @param {number} [index] Position of `node` in `parent`
   * @param {Parent} [parent] Parent of `node`
   * @param {unknown} [context] Context object to invoke `test` with
   * @returns {boolean} Whether test passed and `node` is an `Element` (object with `type` set to `element` and `name` set to a non-empty string).
   */
  // eslint-disable-next-line max-params
  function (
    node?: unknown,
    test?: Test,
    index?: number,
    parent?: Parent,
    context?: unknown
  ): boolean {
    const check = convertElement(test)

    if (
      index !== undefined &&
      index !== null &&
      (typeof index !== 'number' ||
        index < 0 ||
        index === Number.POSITIVE_INFINITY)
    ) {
      throw new Error('Expected positive finite index for child node')
    }

    if (
      parent !== undefined &&
      parent !== null &&
      (!parent.type || !parent.children)
    ) {
      throw new Error('Expected parent node')
    }

    // @ts-expect-error Looks like a node.
    if (!node || !node.type || typeof node.type !== 'string') {
      return false
    }

    if (
      (parent === undefined || parent === null) !==
      (index === undefined || index === null)
    ) {
      throw new Error('Expected both parent and index')
    }

    return check.call(context, node, index, parent)
  }

export const convertElement: (<T extends Element>(
  test: T['name'] | TestFunctionPredicate<T>
) => AssertPredicate<T>) &
  ((test?: Test) => AssertAnything) =
  /**
   * @type {(
   *   (<T extends Element>(test: T['name']|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * Generate an assertion from a check.
   * @param {Test} [test]
   * When nullish, checks if `node` is a `Node`.
   * When `string`, works like passing `function (node) {return node.type === test}`.
   * When `function` checks if function passed the node is true.
   * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
   * When `array`, checks any one of the subtests pass.
   * @returns {AssertAnything}
   */
  function (test: Test): AssertAnything {
    if (test === undefined || test === null) {
      return element
    }

    if (typeof test === 'string') {
      return nameFactory(test)
    }

    if (typeof test === 'object') {
      return anyFactory(test)
    }

    if (typeof test === 'function') {
      return castFactory(test)
    }

    throw new Error('Expected function, string, or array as test')
  }

/**
 * @param {Array.<Name|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */
function anyFactory(tests: Array<Name | TestFunctionAnything>): AssertAnything {
  /** @type {Array.<AssertAnything>} */
  const checks: Array<AssertAnything> = []
  let index = -1

  while (++index < tests.length) {
    checks[index] = convertElement(tests[index])
  }

  return castFactory(any)

  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */
  function any(...parameters: unknown[]): boolean {
    let index = -1

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) {
        return true
      }
    }

    return false
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s tag
 * name for said string.
 *
 * @param {Name} check
 * @returns {AssertAnything}
 */
function nameFactory(check: Name): AssertAnything {
  return name

  /**
   * @param {unknown} node
   * @returns {boolean}
   */
  function name(node: unknown): boolean {
    return element(node) && node.name === check
  }
}

/**
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */
function castFactory(check: TestFunctionAnything): AssertAnything {
  return assertion

  /**
   * @this {unknown}
   * @param {unknown} node
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */
  function assertion(node: unknown, ...parameters: Array<unknown>): boolean {
    // @ts-expect-error: fine.
    return element(node) && Boolean(check.call(this, node, ...parameters))
  }
}

/**
 * Utility to return true if this is an element.
 * @param {unknown} node
 * @returns {node is Element}
 */
function element(node: unknown): node is Element {
  return Boolean(
    node &&
      typeof node === 'object' &&
      // @ts-expect-error Looks like a node.
      node.type === 'element' &&
      // @ts-expect-error Looks like an element.
      typeof node.name === 'string'
  )
}
