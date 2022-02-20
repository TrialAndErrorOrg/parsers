import { Selector } from './types'
import { Selectors } from './types'
import { RuleSet } from './types'
import { Rule } from './types'

import { CssSelectorParser } from 'css-selector-parser'
import fauxEsmNthCheck from 'nth-check'
import { zwitch } from 'zwitch'

/** @type {import('nth-check').default} */

const nthCheck = fauxEsmNthCheck

const nth = new Set([
  'nth-child',
  'nth-last-child',
  'nth-of-type',
  'nth-last-of-type',
])

const parser = new CssSelectorParser()

// @ts-expect-error: hush.
const compile = zwitch('type', { handlers: { selectors, ruleSet, rule } })

parser.registerAttrEqualityMods('~', '|', '^', '$', '*')
parser.registerSelectorPseudos('any', 'matches', 'not', 'has')
parser.registerNestingOperators('>', '+', '~')

/**
 * @param {string} selector
 * @returns {Selector}
 */
export function parse(selector: string): Selector {
  if (typeof selector !== 'string') {
    throw new TypeError('Expected `string` as selector, not `' + selector + '`')
  }

  // @ts-expect-error types are wrong.
  return compile(parser.parse(selector))
}

/**
 * @param {Selectors} query
 * @returns {Selectors}
 */
function selectors(query: Selectors): Selectors {
  let index = -1

  while (++index < query.selectors.length) {
    compile(query.selectors[index])
  }

  return query
}

/**
 * @param {RuleSet} query
 * @returns {Rule}
 */
function ruleSet(query: RuleSet): Rule {
  return rule(query.rule)
}

/*
 * @param {Rule} query
 * @returns {Rule}
 */
function rule(query: Rule): Rule {
  const pseudos = query.pseudos || []
  let index = -1

  while (++index < pseudos.length) {
    const pseudo = pseudos[index]

    if (nth.has(pseudo.name)) {
      // @ts-expect-error This does not work
      pseudo.value = nthCheck(pseudo.value)
      // @ts-expect-error Not sure why mad
      pseudo.valueType = 'function'
    }
  }

  compile(query.rule)

  return query
}
