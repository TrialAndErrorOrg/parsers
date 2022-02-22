import { visit } from '@jote/utils'
import { P, R, T, Text } from 'ooxast'
import { getPStyle } from 'ooxast-util-get-style'
import { parseTextCite, parser } from 'parse-text-cite'
import { Node } from 'unist'
import { convertElement } from 'xast-util-is-element'
import { select, selectAll } from 'xast-util-select'
import { toString } from 'xast-util-to-string'
import { select as unistSelect } from 'unist-util-select'
import { x } from 'xastscript'
import { Data as CSL } from 'csl-json'
import { CiteOutput, Citation, MendeleyCitation, Mendeley } from './types'

const isT = convertElement<T>('w:t')
const isP = convertElement<P>('w:p')
const isR = convertElement<R>('w:r')

export interface Options {
  type: 'mendeley' | 'native'
  bibliography?: CSL[]
}

export function findCitations(
  tree: Node,
  options: Options = { type: 'mendeley' }
) {
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
      if (skipNext) {
        runs.push(kid)
        continue
      }

      const instr = select('w\\:instrText')

      // Check if this is a Mendeley citation, because if so we should not try to parse it ourselves
      if (instr && instr?.children[0]?.value?.includes('CSL_CITATION')) {
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
              citationCounter
            )
            return acc
          },
          []
        )
      } catch (e) {
        console.warn('Text unsuccesfully parsed, treating it as non-cite')
        console.warn(e)
        runs.push(kid)
        continue
      }
    }

    p.children = runs
  })
  return tree
}

export function constructCitation(curr: Citation, type: string, index: number) {
  switch (type) {
    case 'mendeley':
      return constructMendeleyCitation(curr, index)
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

function plainMendeleyCitation(
  cite: Citation,
  index: number
): MendeleyCitation {
  const schema =
    'https://github.com/citation-style-language/schema/raw/master/csl-citation.json'

  const pref = 'ADDIN CSL_CITATION'

  const mend = {
    schema,
    properties: cite.properties,
    citationItems: cite.citationItems,
    mendeley: {
      formattedCitation: cite.raw,
      previouslyFormattedCitation: cite.raw,
      plainTextFormattedCitation: cite.raw,
    },
  }

  return mend
}
function constructMendeleyCitation(
  curr: Citation,
  index: number,
  bibliography?: CSL[]
): MendeleyCitation {
  const mendeley: Mendeley = {
    formattedCitation: '',
    plainTextFormattedCitation: '',
    previouslyFormattedCitation: '',
  }
  const properties: MendeleyProperties = { noteIndex: 0 }
  const schema =
    'https://github.com/citation-style-language/schema/raw/master/csl-citation.json'

  const pref = 'ADDIN CSL_CITATION'

  if (!bibliography) {
    return plainMendeleyCitation(curr, index)
  }

  //const citationItems
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
