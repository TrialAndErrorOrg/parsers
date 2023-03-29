import nearley from 'nearley'
import grammar from './apa.js'
import { Data as CSL } from 'csl-json'

export interface Citation {
  citationId: string
  citationItems: CitationItem[]
  properties: Properties
  originalText?: string
}

export interface Properties {
  noteIndex: number
  mode?: string
}

export interface CitationItem {
  itemData: CSL
  id: string
  prefix?: string
  suffix?: string
  infix?: string
  label?: string
  locator?: string
}

interface Options {
  showAll?: boolean
  log?: boolean
}

export const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

export const parseTextCite = (string: string, options?: Options) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

  try {
    parser.feed(string)
  } catch (err) {
    if (options?.log !== false) {
      console.warn(string)
      ;(err as { message: string }).message.match(/(Rp|Lp)/i)
        ? console.warn(err)
        : console.warn(err)
    }
  }

  const results = parser.results as unknown[][]

  if (string.includes('Whitaker')) {
    console.log({ results })
  }

  if (!results) {
    return [string]
  }

  if (options?.showAll) {
    return results
  }

  // find the item that has the smallest total length of strings
  let narrowResults = results[0]
  for (let i = 0; i < results.length; i++) {
    let accLength = 0
    for (let j = 0; j < results[i].length; j++) {
      const curr = results[i][j]
      if (typeof curr === 'string') {
        accLength += curr.length
      }
    }
    let currLength = 0
    for (let j = 0; j < narrowResults.length; j++) {
      const curr = narrowResults[j]
      if (typeof curr === 'string') {
        currLength += curr.length
      }
    }
    if (currLength > accLength) {
      narrowResults = results[i]
    }
  }

  if (!narrowResults) {
    return [string]
  }

  // I'm too bad at parsing and I want the original value of the thing

  return recoverOriginalCitation(narrowResults as (Citation | string)[], string)
}

function recoverOriginalCitation(cite: (string | Citation)[], ogText: string) {
  const narrowString = cite.reduce((acc: string, curr) => {
    if (typeof curr !== 'string') {
      return acc
    }
    return acc.replace(curr, '')
  }, ogText)

  const originalCites = narrowString
    .split(')')
    .filter((c) => c)
    .map((c: string, idx, arr) => `${c}${arr.length > 1 && idx === arr.length - 1 ? '' : ')'}`)

  let stupidCounterYouShouldKnowBetter = 0

  const reduced = cite.reduce((acc: (string | Citation)[], curr) => {
    if (typeof curr === 'string') {
      acc.push(curr)
      return acc
    }

    curr.originalText = originalCites[stupidCounterYouShouldKnowBetter]
    stupidCounterYouShouldKnowBetter++
    acc.push(curr)
    return acc
  }, [])
  return reduced
}
