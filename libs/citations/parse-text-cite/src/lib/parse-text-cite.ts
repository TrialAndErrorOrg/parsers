import nearley from 'nearley'
import grammar from './apa'
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
}

export const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

export const parseTextCite = (string: string, options?: Options) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

  try {
    parser.feed(string)
  } catch (err) {
    console.warn(string)
    console.warn('Could not handle a parenthesis')
    // console.warn(err)
  }

  const results = parser.results

  if (!results) return [string]

  if (options?.showAll) {
    return results
  }

  const narrowResults = results?.[0]

  if (!narrowResults) return [string]

  // I'm too bad at parsing and I want the original value of the thing

  return recoverOriginalCitation(narrowResults, string)
}

function recoverOriginalCitation(cite: (string | Citation)[], ogText: string) {
  const narrowString = cite.reduce((acc: string, curr) => {
    if (typeof curr !== 'string') return acc
    return acc.replace(curr, '')
  }, ogText)

  const originalCites = narrowString
    .split(')')
    .filter((c) => c)
    .map((c: string) => c + ')')

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
