import { visitParents } from 'unist-util-visit-parents'
import { P, R, T, Text, Root } from 'ooxast'
import { getPStyle } from 'ooxast-util-get-style'
import { parseTextCite } from 'parse-text-cite'
import { Node } from 'unist'
import { convertElement, isElement } from 'xast-util-is-element'
import { select } from 'xast-util-select'
import { toString } from 'xast-util-to-string'
import { select as unistSelect } from 'unist-util-select'
import { x } from 'xastscript'
import { Data as CSL } from 'csl-json'
import { CiteOutput, Citation, MendeleyCitation, ZoteroCitation } from './types.js'
import { detectCitePlugin } from 'ooxast-util-citation-plugin'
import { VFile } from 'vfile'
import { constructMendeleyCitation } from './constructMendeleyCitation.js'
import { constructZoteroCitation } from './constructZoteroCitation.js'

const isInstrT = convertElement<T>('w:instrText')
const isP = convertElement<P>('w:p')

export const citationTypesWithSuffixedForm = ['mendeley', 'zotero']
export interface Options {
  bibliography?: CSL[]
  log?: boolean
  type?: 'mendeley' | 'zotero' | 'citavi' | 'word' | 'endnote'
}

export function findCitations(tree: Node, vfile?: VFile, options?: Options): Root {
  const type = detectCitePlugin(tree)
  if (vfile) {
    vfile.data.citePlugin = type
  }

  let references = false
  let citationCounter = 1
  visitParents(tree, isP, (p: P, ancestors: Node[]) => {
    // don't parse citations in tables
    if (ancestors.some((parent) => isElement(parent) && /tbl/.test(parent.name))) {
      return
    }

    if (references) {
      return
    }

    // find references section
    if (getPStyle(p)?.toLowerCase()?.includes('heading')) {
      if (['references', 'citations', 'bibliography'].includes(toString(p)?.toLowerCase().trim())) {
        references = true
        return
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
      if (instr && isInstrT(instr) && toString(instr).includes('CSL_CITATION')) {
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

      const text = toString(t)

      /**
       * We dont care about empty runs
       */
      if (text === '') {
        continue
      }

      if (!text) {
        runs.push(kid)
        continue
      }

      if (skipNext) {
        skipNext = false
        runs.push(kid)
        continue
      }

      const sentences = text.split(/(?<=[.?!])\s+(?=[A-Z])/)
      // re-add the spaces that were removed by the split
      const sentencesWithSpaces = sentences.map((s, i) => {
        if (i === sentences.length - 1) return s
        return `${s} `
      })
      // const sentencesWithSpaces = [text]

      const rpr = select('w\\:rPr', kid)
      for (const sentence of sentencesWithSpaces) {
        try {
          // split the text into sentences so that we can parse them individually
          const parsedCitation = parseTextCite(sentence, {
            log: options?.log,
          }) as CiteOutput

          // if the sentence is not a citation, just add it to the runs
          if (parsedCitation.every((item) => typeof item === 'string')) {
            runs.push(
              x('w:r', {}, [
                ...(rpr ? [rpr] : []),
                x('w:t', {}, [{ type: 'text', value: sentence } as Text]) as T,
              ]) as R,
            )
            continue
          }

          const newNodes = parsedCitation.reduce((acc: typeof kids, curr: string | Citation) => {
            if (typeof curr === 'string') {
              acc.push(
                x('w:r', {}, [
                  ...(rpr ? [rpr] : []),
                  x('w:t', {}, [{ type: 'text', value: curr } as Text]) as T,
                ]) as R,
              )
              return acc
            }

            const { instr, citation } = constructCitation(
              curr,
              type,
              citationCounter,
              options?.bibliography,
            )
            citationCounter++

            acc.push(
              x('w:r', {}, [
                ...(rpr ? [rpr] : []),
                x('w:instrText', {}, [{ type: 'text', value: instr } as Text]) as T,
              ]) as R,
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
                          ? (citation as MendeleyCitation)?.mendeley.formattedCitation
                          : (citation as ZoteroCitation).properties.formattedCitation,
                    } as Text,
                  ]) as T,
                ]) as R,
              )
            }

            return acc
          }, [])
          runs.push(...newNodes)
        } catch (e) {
          console.warn('Text unsuccesfully parsed, treating it as non-cite')
          console.warn(sentence)
          console.warn(e)
          // runs.push(kid)
          runs.push(
            x('w:r', {}, [
              ...(rpr ? [rpr] : []),
              x('w:t', {}, [{ type: 'text', value: sentence } as Text]) as T,
            ]) as R,
          )
          continue
        }
      }
    }

    p.children = runs
  })
  return tree as Root
}
/**
 * Construct a citation for Mendeley or Zotero.
 * @param curr The citation to construct
 * @param type The type of citation to construct
 * @param index The index of the citation
 * @param bibliography The bibliography to use
 * @returns The constructed citation and instruction
 */
export function constructCitation(
  curr: Citation,
  type: string,
  index: number,
  bibliography?: CSL[],
): { citation: MendeleyCitation | ZoteroCitation; instr: string } {
  switch (type) {
    case 'mendeley': {
      const citation = constructMendeleyCitation(curr, index, bibliography)
      return {
        instr: `ADDIN CSL_CITATION ${JSON.stringify(citation)}`,
        citation,
      }
    }
    case 'zotero':
    default: {
      const citation = constructZoteroCitation(curr, index, bibliography)
      return {
        instr: `ADDIN ZOTERO_ITEM CSL_CITATION ${JSON.stringify(citation)}`,
        citation,
      }
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
