import { visit } from '@jote/utils'
import { P, R, T, Text, Root } from 'ooxast'
import { getPStyle } from 'ooxast-util-get-style'
import { parseTextCite, parser } from 'parse-text-cite'
import { Node } from 'unist'
import { convertElement } from 'xast-util-is-element'
import { select, selectAll } from 'xast-util-select'
import { toString } from 'xast-util-to-string'
import { select as unistSelect } from 'unist-util-select'
import { x } from 'xastscript'
import { Data as CSL } from 'csl-json'
import {
  CiteOutput,
  Citation,
  MendeleyCitation,
  Mendeley,
  MendeleyProperties,
  MendeleyCitationItem,
  CitationItem,
} from './types'
import similarity from 'similarity'
import { dateSim } from 'csl-consolidate'

const isT = convertElement<T>('w:t')
const isInstrT = convertElement<T>('w:instrText')
const isP = convertElement<P>('w:p')
const isR = convertElement<R>('w:r')

export const citationTypesWithSuffixedForm: Options['type'][] = ['mendeley']
export interface Options {
  type: 'mendeley' | 'native' | 'citavi' | 'zotero' | 'endnote'
  bibliography?: CSL[]
}

export function findCitations(
  tree: Node,
  options: Options = { type: 'mendeley' }
): Root {
  const citations: any[] = []
  let references = false
  let citationCounter = 1
  visit(tree, isP, (p: P) => {
    if (references) return

    if (getPStyle(p)?.toLowerCase()?.includes('heading')) {
      if (
        ['references', 'citations', 'bibliography'].includes(
          toString(p)?.toLowerCase()
        )
      ) {
        references = true
      }
      return
    }

    const kids = p.children
    const runs: typeof kids = []

    let skipNext = false
    for (const kid of kids) {
      const instr = select('w\\:instrText', kid)

      // Check if this is a Mendeley citation, because if so we should not try to parse it ourselves
      if (
        instr &&
        isInstrT(instr) &&
        instr?.children[0]?.value?.includes('CSL_CITATION')
      ) {
        skipNext = true
        runs.push(kid)
        continue
      }

      const t = select('w\\:t', kid)
      // If either one of them don't have text, don't merge them ya dummy
      if (!t) {
        runs.push(kid)
        continue
      }

      if (skipNext) {
        skipNext = false
        runs.push(kid)
        continue
      }

      const text = unistSelect('text', t) as Text
      if (!text?.value) {
        runs.push(kid)
        continue
      }

      try {
        const parsedCitation: CiteOutput = parseTextCite(text.value)
        if (parsedCitation.every((item) => typeof item === 'string')) {
          runs.push(kid)
          continue
        }
        const rpr = select('w\\:rPr', kid)

        const newNodes = parsedCitation.reduce(
          (acc: typeof kids, curr: string | Citation) => {
            if (typeof curr === 'string') {
              acc.push(
                x('w:r', {}, [
                  ...(rpr ? [rpr] : []),
                  x('w:t', {}, [{ type: 'text', value: curr } as Text]) as T,
                ]) as R
              )
              return acc
            }

            const citation = constructCitation(
              curr,
              options.type,
              citationCounter,
              options.bibliography
            )
            const val = `ADDIN CSL_CITATION ${JSON.stringify(citation)}`

            acc.push(
              x('w:r', {}, [
                ...(rpr ? [rpr] : []),
                x('w:instrText', {}, [
                  { type: 'text', value: val } as Text,
                ]) as T,
              ]) as R
            )
            if (
              citationTypesWithSuffixedForm.includes(options.type) &&
              citation
            ) {
              acc.push(
                x('w:r', {}, [
                  ...(rpr ? [rpr] : []),
                  x('w:t', {}, [
                    {
                      type: 'text',
                      value: citation.mendeley.formattedCitation,
                    } as Text,
                  ]) as T,
                ]) as R
              )
            }

            citationCounter++
            return acc
          },
          []
        )
        runs.push(...newNodes)
      } catch (e) {
        console.warn('Text unsuccesfully parsed, treating it as non-cite')
        console.warn(text.value)
        console.warn(e)
        runs.push(kid)
        continue
      }
    }

    p.children = runs
  })
  return tree as Root
}

export function constructCitation(
  curr: Citation,
  type: string,
  index: number,
  bibliography?: CSL[]
) {
  switch (type) {
    case 'mendeley':
      return constructMendeleyCitation(curr, index, bibliography)
    case 'zotero':
      return constructZoteroCitation(curr, index)
    case 'endnote':
      return constructEndnoteCitation(curr, index)
    case 'native':
      return constructMendeleyCitation(curr, index)
    case 'citavi':
      return constructCitaviCitation(curr, index)
    default: {
      throw new Error(
        `Unknown citation type ${type}. Please select a valid type.`
      )
      return
    }
  }
}

// function plainMendeleyCitation(
//   cite: Citation,
//   index: number
// ): MendeleyCitation {
//   const schema =
//     'https://github.com/citation-style-language/schema/raw/master/csl-citation.json'

//   const pref = 'ADDIN CSL_CITATION'

//   const mend = {
//     schema,
//     properties: cite.properties,
//     citationItems: cite.citationItems,
//     mendeley: {
//       formattedCitation: cite.raw,
//       previouslyFormattedCitation: cite.raw,
//       plainTextFormattedCitation: cite.raw,
//     },
//   }

//   return mend
// }
function constructMendeleyCitation(
  curr: Citation,
  index: number,
  bibliography?: CSL[]
): MendeleyCitation {
  const schema =
    'https://github.com/citation-style-language/schema/raw/master/csl-citation.json'

  const mendeley: Mendeley = {
    formattedCitation: curr.originalText || '',
    plainTextFormattedCitation: curr.originalText || '',
    previouslyFormattedCitation: curr.originalText || '',
  }

  curr['citationId'] = curr['citationId'].replace('X', `${index}`)
  if (!bibliography) {
    const mend: any = { ...curr, schema, mendeley }
    return mend
  }

  const mendCites = curr.citationItems.reduce((acc: CitationItem[], curr) => {
    const betterCSL = findRef(curr, bibliography)
    acc.push(betterCSL)
    return acc
  }, [])

  const mend: MendeleyCitation = {
    ...curr,
    citationItems: mendCites as any,
    schema,
    mendeley,
  }
  return mend

  //const citationItems
}

function findRef(citeItem: CitationItem, bibliography: CSL[]): CitationItem {
  // we'll take it if it has 90% match with the author and the year, except if there are multiple thiingies
  const cite = citeItem.itemData
  const gottemInOne = bibliography.find(
    (bib) => bib.id === cite.id || bib.id === citeItem.id
  )
  if (gottemInOne) {
    citeItem.itemData = gottemInOne
    return citeItem
  }

  if (!cite.author || !cite.issued) return citeItem
  let lastDig = alphaToNum(cite.id.slice(-1))
  let theOne: CSL | null = null

  for (const csl of bibliography) {
    if (!csl.author) continue

    const authsim =
      cite.author.reduce((acc, curr, index) => {
        if (!csl?.author?.[index]) return acc

        acc += similarity(
          curr?.family || '',
          csl?.author?.[index]?.family || 'aishotnat'
        )

        return acc
      }, 0) / (cite?.author?.length || 100)

    const yearsim = dateSim(cite, csl)

    if ((yearsim + authsim) / 2 > 1.6) {
      if (lastDig !== 0) {
        lastDig--
        continue
      }

      theOne = csl
      break
    }
  }
  if (theOne) citeItem.itemData = theOne

  return citeItem
}

function alphaToNum(a: string) {
  const anum: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  return anum[a] || 0
}

function constructZoteroCitation(curr: Citation, index: number) {
  throw new Error('Function not implemented.')
}

function constructEndnoteCitation(curr: Citation, index: number) {
  throw new Error('Function not implemented.')
}

function constructCitaviCitation(curr: Citation, index: number) {
  throw new Error('Function not implemented.')
}
