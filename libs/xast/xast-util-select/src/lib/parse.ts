import { Selector } from './types.js'
import { Selectors } from './types.js'
import { RuleSet } from './types.js'
import { Rule } from './types.js'
import { RulePseudo } from './types.js'
import { RulePseudoNth } from './types.js'

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

// @ts-ignore: hush.
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

  // @ts-ignore types are wrong.
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

/**
 * @param {Rule} query
 * @returns {Rule}
 */
function rule(query: Rule): Rule {
  const pseudos = query.pseudos || []
  let index = -1

  while (++index < pseudos.length) {
    const pseudo = pseudos[index]

    if (nth.has(pseudo.name)) {
      // @ts-ignore
      pseudo.value = nthCheck(pseudo.value)
      // @ts-ignore
      pseudo.valueType = 'function'
    }
  }

  compile(query.rule)

  return query
}
