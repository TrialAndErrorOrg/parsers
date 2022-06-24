import { visit } from 'unist-util-visit'
import { P, R, T, Text, Root } from 'ooxast'
import { getPStyle } from 'ooxast-util-get-style'
import { parseTextCite } from 'parse-text-cite'
import { Node } from 'unist'
import { convertElement } from 'xast-util-is-element'
import { select } from 'xast-util-select'
import { toString } from 'xast-util-to-string'
import { select as unistSelect } from 'unist-util-select'
import { x } from 'xastscript'
import { Data as CSL } from 'csl-json'
import { CiteOutput, Citation, MendeleyCitation, ZoteroCitation } from './types'
import { detectCitePlugin } from 'ooxast-util-citation-plugin'
import { VFile } from 'vfile'
import { constructMendeleyCitation } from './constructMendeleyCitation'
import { constructZoteroCitation } from './constructZoteroCitation'

const isInstrT = convertElement<T>('w:instrText')
const isP = convertElement<P>('w:p')

export const citationTypesWithSuffixedForm = ['mendeley', 'zotero']
export interface Options {
  bibliography?: CSL[]
  type?: 'mendeley' | 'zotero' | 'citavi' | 'word' | 'endnote'
}

export function findCitations(
  tree: Node,
  vfile?: VFile,
  options?: Options
): Root {
  const type = detectCitePlugin(tree)
  if (vfile) {
    vfile.data.citePlugin = type
  }

  let references = false
  let citationCounter = 1
  visit(tree, isP, (p: P) => {
    if (references) return

    if (getPStyle(p)?.toLowerCase()?.includes('heading')) {
      if (
        ['references', 'citations', 'bibliography'].includes(
          toString(p)?.toLowerCase().trim()
        )
      ) {
        references = true
      }
      references = false
      return
    }

    const kids = p.children
    const runs: typeof kids = []

    let skipNext = false
    for (const kid of kids) {
      const instr = select('w\\:instrText', kid)

      // Check if this is a Mendeley/Zotero citation, because if so we should not try to parse it ourselves
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

      const text = unistSelect('text', t) as Text
      if (!text?.value) {
        runs.push(kid)
        continue
      }
      if (text.value === '') {
        continue
      }

      if (skipNext) {
        skipNext = false
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

            const { instr, citation } = constructCitation(
              curr,
              type,
              citationCounter,
              options?.bibliography
            )
            citationCounter++

            acc.push(
              x('w:r', {}, [
                ...(rpr ? [rpr] : []),
                x('w:instrText', {}, [
                  { type: 'text', value: instr } as Text,
                ]) as T,
              ]) as R
            )

            // say this is an empty, clean thing, and we want to turn it into a text
            // with mendeely citations. then we need to push the formatted citation after the main citation
            if (citationTypesWithSuffixedForm.includes(type) && citation) {
              acc.push(
                x('w:r', {}, [
                  ...(rpr ? [rpr] : []),
                  x('w:t', {}, [
                    {
                      type: 'text',
                      value:
                        type === 'mendeley'
                          ? (citation as MendeleyCitation)?.mendeley
                              .formattedCitation
                          : (citation as ZoteroCitation).properties
                              .formattedCitation,
                    } as Text,
                  ]) as T,
                ]) as R
              )
            }

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
): { citation: MendeleyCitation | ZoteroCitation; instr: string } {
  switch (type) {
    case 'mendeley': {
      const citation = constructMendeleyCitation(curr, index, bibliography)
      return {
        instr: `ADDIN CSL_CITATION ${JSON.stringify(citation)}`,
        citation,
      }
    }
    // case 'zotero': {
    //   const citation = constructZoteroCitation(curr, index, bibliography)
    //   return {
    //     instr: `ADDIN ZOTERO_ITEM CSL_CITATION ${JSON.stringify(
    //       constructZoteroCitation(curr, index, bibliography)
    //     )}`,
    //     citation,
    //   }
    // }
    // case 'endnote':
    //   return constructEndnoteCitation(curr, index)
    // case 'native':
    //   return constructMendeleyCitation(curr, index)
    // case 'citavi':
    //   return constructCitaviCitation(curr, index)
    case 'zotero':
    default: {
      const citation = constructZoteroCitation(curr, index, bibliography)
      return {
        instr: `ADDIN ZOTERO_ITEM CSL_CITATION ${JSON.stringify(
          constructZoteroCitation(curr, index, bibliography)
        )}`,
        citation,
      }
      // throw new Error(
      //   `Unknown citation type ${type}. Please select a valid type.`
      // )
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

// function constructZoteroCitation(curr: Citation, index: number) {
//   throw new Error('Function not implemented.')
// }

function constructEndnoteCitation(curr: Citation, index: number) {
  throw new Error('Function not implemented.')
}

function constructCitaviCitation(curr: Citation, index: number) {
  throw new Error('Function not implemented.')
}
