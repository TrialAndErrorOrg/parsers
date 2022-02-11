import { Rule } from './types.js'
import { RulePseudo } from './types.js'
import { RulePseudoNth } from './types.js'
import { RulePseudoSelector } from './types.js'
import { XastParent as Parent } from './types.js'
import { Selector } from './types.js'
import { Selectors } from './types.js'
import { SelectState } from './types.js'
import { Element } from './types.js'
import { ElementChild } from './types.js'

import { extendedFilter } from 'bcp-47-match'
import { parse as commas } from 'comma-separated-tokens'
import { hasAttribute } from 'xast-util-has-attribute'
import { isElement } from 'hast-util-is-element'
import { whitespace } from 'hast-util-whitespace'
import { zwitch } from 'zwitch'
import { any } from './any.js'

const handle = zwitch('name', {
  // @ts-ignore: hush.
  unknown: unknownPseudo,
  invalid: invalidPseudo,
  handlers: {
    // @ts-ignore: hush.
    any: matches,
    // @ts-ignore: hush.
    'any-link': anyLink,
    // @ts-ignore: hush.
    blank,
    // @ts-ignore: hush.
    checked,
    // @ts-ignore: hush.
    dir,
    // @ts-ignore: hush.
    disabled,
    // @ts-ignore: hush.
    empty,
    // @ts-ignore: hush.
    enabled,
    // @ts-ignore: hush.
    'first-child': firstChild,
    // @ts-ignore: hush.
    'first-of-type': firstOfType,
    // @ts-ignore: hush.
    has,
    // @ts-ignore: hush.
    lang,
    // @ts-ignore: hush.
    'last-child': lastChild,
    // @ts-ignore: hush.
    'last-of-type': lastOfType,
    // @ts-ignore: hush.
    matches,
    // @ts-ignore: hush.
    not,
    // @ts-ignore: hush.
    'nth-child': nthChild,
    // @ts-ignore: hush.
    'nth-last-child': nthLastChild,
    // @ts-ignore: hush.
    'nth-of-type': nthOfType,
    // @ts-ignore: hush.
    'nth-last-of-type': nthLastOfType,
    // @ts-ignore: hush.
    'only-child': onlyChild,
    // @ts-ignore: hush.
    'only-of-type': onlyOfType,
    // @ts-ignore: hush.
    optional,
    // @ts-ignore: hush.
    'read-only': readOnly,
    // @ts-ignore: hush.
    'read-write': readWrite,
    // @ts-ignore: hush.
    required,
    // @ts-ignore: hush.
    root,
    // @ts-ignore: hush.
    scope,
  },
})

pseudo.needsIndex = [
  'first-child',
  'first-of-type',
  'last-child',
  'last-of-type',
  'nth-child',
  'nth-last-child',
  'nth-of-type',
  'nth-last-of-type',
  'only-child',
  'only-of-type',
]

/**
 * @param {Rule} query
 * @param {Element} element
 * @param {number|null} index
 * @param {Parent|null} parent
 * @param {SelectState} state
 * @returns {boolean}
 */
export function pseudo(
  query: Rule,
  element: Element,
  index: number | null,
  parent: Parent | null,
  state: SelectState
): boolean {
  const pseudos = query.pseudos
  let offset = -1

  while (++offset < pseudos.length) {
    if (!handle(pseudos[offset], element, index, parent, state)) return false
  }

  return true
}

/**
 * @param {RulePseudoSelector} query
 * @param {Element} element
 * @param {number|null} _1
 * @param {Parent|null} _2
 * @param {SelectState} state
 * @returns {boolean}
 */
function matches(
  query: RulePseudoSelector,
  element: Element,
  _1: number | null,
  _2: Parent | null,
  state: SelectState
): boolean {
  const shallow = state.shallow
  const one = state.one

  state.shallow = true
  state.one = true

  const result = any(query.value, element, state)[0] === element

  state.shallow = shallow
  state.one = one

  return result
}

/**
 * @param {RulePseudoSelector} query
 * @param {Element} element
 * @param {number|null} index
 * @param {Parent|null} parent
 * @param {SelectState} state
 * @returns {boolean}
 */
function not(
  query: RulePseudoSelector,
  element: Element,
  index: number | null,
  parent: Parent | null,
  state: SelectState
): boolean {
  return !matches(query, element, index, parent, state)
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @returns {boolean}
 */
function anyLink(_: RulePseudo, element: Element): boolean {
  return (
    isElement(element, ['a', 'area', 'link']) && hasAttribute(element, 'href')
  )
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @returns {boolean}
 */
function checked(_: RulePseudo, element: Element): boolean {
  if (isElement(element, ['input', 'menuitem'])) {
    return Boolean(
      element.attributes &&
        (element.attributes.type === 'checkbox' ||
          element.attributes.type === 'radio') &&
        hasAttribute(element, 'checked')
    )
  }

  if (isElement(element, 'option')) {
    return hasAttribute(element, 'selected')
  }

  return false
}

/**
 * @param {RulePseudo} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function dir(
  query: RulePseudo,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  return state.direction === query.value
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @returns {boolean}
 */
function disabled(_: RulePseudo, element: Element): boolean {
  return (
    isElement(element, [
      'button',
      'input',
      'select',
      'textarea',
      'optgroup',
      'option',
      'menuitem',
      'fieldset',
    ]) && hasAttribute(element, 'disabled')
  )
}

/**
 * @param {RulePseudo} query
 * @param {Element} element
 * @returns {boolean}
 */
function enabled(query: RulePseudo, element: Element): boolean {
  return !disabled(query, element)
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @returns {boolean}
 */
function required(_: RulePseudo, element: Element): boolean {
  return (
    isElement(element, ['input', 'textarea', 'select']) &&
    hasAttribute(element, 'required')
  )
}

/**
 * @param {RulePseudo} query
 * @param {Element} element
 * @returns {boolean}
 */
function optional(query: RulePseudo, element: Element): boolean {
  return !required(query, element)
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @param {number|null} _1
 * @param {Parent|null} _2
 * @param {SelectState} state
 * @returns {boolean}
 */
function readWrite(
  _: RulePseudo,
  element: Element,
  _1: number | null,
  _2: Parent | null,
  state: SelectState
): boolean {
  return isElement(element, ['input', 'textarea'])
    ? !hasAttribute(element, 'readOnly') && !hasAttribute(element, 'disabled')
    : Boolean(state.editableOrEditingHost)
}

/**
 * @param {RulePseudo} query
 * @param {Element} element
 * @param {number|null} index
 * @param {Parent|null} parent
 * @param {SelectState} state
 * @returns {boolean}
 */
function readOnly(
  query: RulePseudo,
  element: Element,
  index: number | null,
  parent: Parent | null,
  state: SelectState
): boolean {
  return !readWrite(query, element, index, parent, state)
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @param {number|null} _1
 * @param {Parent|null} parent
 * @param {SelectState} state
 * @returns {boolean}
 */
function root(
  _: RulePseudo,
  element: Element,
  _1: number | null,
  parent: Parent | null,
  state: SelectState
): boolean {
  return Boolean(
    (!parent || parent.type === 'root') &&
      state.schema &&
      (state.schema.space === 'html' || state.schema.space === 'svg') &&
      isElement(element, ['html', 'svg'])
  )
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @param {number|null} _1
 * @param {Parent|null} _2
 * @param {SelectState} state
 * @returns {boolean}
 */
function scope(
  _: RulePseudo,
  element: Element,
  _1: number | null,
  _2: Parent | null,
  state: SelectState
): boolean {
  return Boolean(
    isElement(element) &&
      state.scopeElements &&
      state.scopeElements.includes(element)
  )
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @returns {boolean}
 */
function empty(_: RulePseudo, element: Element): boolean {
  return !someChildren(element, check)

  /**
   * @param {ElementChild} child
   * @returns {boolean}
   */
  function check(child: ElementChild): boolean {
    return child.type === 'element' || child.type === 'text'
  }
}

/**
 * @param {RulePseudo} _
 * @param {Element} element
 * @returns {boolean}
 */
function blank(_: RulePseudo, element: Element): boolean {
  return !someChildren(element, check)

  /**
   * @param {ElementChild} child
   * @returns {boolean}
   */
  function check(child: ElementChild): boolean {
    return (
      child.type === 'element' || (child.type === 'text' && !whitespace(child))
    )
  }
}

/**
 * @param {RulePseudo} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function firstChild(
  query: RulePseudo,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return state.elementIndex === 0
}

/**
 * @param {RulePseudo} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function lang(
  query: RulePseudo,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  return (
    state.language !== '' &&
    state.language !== undefined &&
    state.language !== null &&
    // @ts-ignore never `selectors`.
    extendedFilter(state.language, commas(query.value)).length > 0
  )
}

/**
 * @param {RulePseudo} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function lastChild(
  query: RulePseudo,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return Boolean(
    state.elementCount && state.elementIndex === state.elementCount - 1
  )
}

/**
 * @param {RulePseudo} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function onlyChild(
  query: RulePseudo,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return state.elementCount === 1
}

/**
 * @param {RulePseudoNth} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function nthChild(
  query: RulePseudoNth,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return (
    typeof state.elementIndex === 'number' && query.value(state.elementIndex)
  )
}

/**
 * @param {RulePseudoNth} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function nthLastChild(
  query: RulePseudoNth,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return Boolean(
    typeof state.elementCount === 'number' &&
      typeof state.elementIndex === 'number' &&
      query.value(state.elementCount - state.elementIndex - 1)
  )
}

/**
 * @param {RulePseudoNth} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function nthOfType(
  query: RulePseudoNth,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return typeof state.typeIndex === 'number' && query.value(state.typeIndex)
}

/**
 * @param {RulePseudoNth} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function nthLastOfType(
  query: RulePseudoNth,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return (
    typeof state.typeCount === 'number' &&
    typeof state.typeIndex === 'number' &&
    query.value(state.typeCount - 1 - state.typeIndex)
  )
}

/**
 * @param {RulePseudo} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function firstOfType(
  query: RulePseudo,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return state.typeIndex === 0
}

/**
 * @param {RulePseudo} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function lastOfType(
  query: RulePseudo,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return (
    typeof state.typeIndex === 'number' &&
    typeof state.typeCount === 'number' &&
    state.typeIndex === state.typeCount - 1
  )
}

/**
 * @param {RulePseudo} query
 * @param {Element} _1
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function onlyOfType(
  query: RulePseudo,
  _1: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  assertDeep(state, query)
  return state.typeCount === 1
}

/**
 * @param {Element} element
 * @param {(child: ElementChild) => boolean} check
 * @returns {boolean}
 */
function someChildren(
  element: Element,
  check: (child: ElementChild) => boolean
): boolean {
  const children = element.children
  let index = -1

  while (++index < children.length) {
    if (check(children[index])) return true
  }

  return false
}

// Shouldn’t be called, parser gives correct data.
/* c8 ignore next 3 */
function invalidPseudo() {
  throw new Error('Invalid pseudo-selector')
}

/**
 * @param {RulePseudo} query
 */
function unknownPseudo(query: RulePseudo) {
  if (query.name) {
    throw new Error('Unknown pseudo-selector `' + query.name + '`')
  }

  throw new Error('Unexpected pseudo-element or empty pseudo-class')
}

/**
 * @param {SelectState} state
 * @param {RulePseudo|RulePseudoNth} query
 */
function assertDeep(state: SelectState, query: RulePseudo | RulePseudoNth) {
  if (state.shallow) {
    throw new Error('Cannot use `:' + query.name + '` without parent')
  }
}

/**
 * @param {RulePseudoSelector} query
 * @param {Element} element
 * @param {number|null} _2
 * @param {Parent|null} _3
 * @param {SelectState} state
 * @returns {boolean}
 */
function has(
  query: RulePseudoSelector,
  element: Element,
  _2: number | null,
  _3: Parent | null,
  state: SelectState
): boolean {
  const shallow = state.shallow
  const one = state.one
  const scopeElements = state.scopeElements
  const value = appendScope(query.value)

  state.shallow = false
  state.one = true
  state.scopeElements = [element]

  const result = any(value, element, state).length > 0

  state.shallow = shallow
  state.one = one
  state.scopeElements = scopeElements

  return result
}

/**
 * @param {Selector} value
 * @returns {Selectors}
 */
function appendScope(value: Selector): Selectors {
  /** @type {Selectors} */
  const selector: Selectors =
    value.type === 'ruleSet' ? { type: 'selectors', selectors: [value] } : value
  let index = -1

  while (++index < selector.selectors.length) {
    const rule = selector.selectors[index].rule
    rule.nestingOperator = null

    if (
      !rule.pseudos ||
      rule.pseudos.length !== 1 ||
      rule.pseudos[0].name !== 'scope'
    ) {
      selector.selectors[index] = {
        type: 'ruleSet',
        // @ts-ignore pseudos are fine w/ just a name!
        rule: { type: 'rule', rule, pseudos: [{ name: 'scope' }] },
      }
    }
  }

  return selector
}
