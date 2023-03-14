import { State } from '../state.js'
import { Handle } from '../types.js'
import { T } from 'ooxast'
import { Data as CSL } from 'csl-json'

import { CitationItem, MendeleyCitationItem } from 'ooxast-util-citations'

import { Parent } from 'unist'
import {} from '@benrbray/micromark-extension-cite'
import { InlineCiteNode } from '@benrbray/mdast-util-cite'

export const citation: Handle = (state: State, node: T, parent?: Parent) => {
  // i const t = select('', citation) as T
  //  if (!t) return
  if (!node || !node?.children?.length) return

  const text = node.children[0].value

  if (text.includes('PAGE \\* MERGEFORMAT')) return

  const type = text.includes('CSL_CITATION') || state.partialCitation

  // Zotero/mendely citation: easy
  if (type && !text?.includes('Bibliography')) {
    let citation: { [key: string]: any }
    const json = text.replace(/ADDIN .*?CSL_CITATION/, '')

    try {
      if (state.partialCitation) {
        console.log('Attemping to combine incomplete citation with new one...')
        citation = JSON.parse(state.partialCitation + json)
        console.log('Success!')
        console.dir(citation, { depth: null })
        state.partialCitation = ''
      } else {
        citation = JSON.parse(json)
      }
    } catch (e: any) {
      console.log(e.message)
      console.log(json)
      // With very long Mendely citations, Word will sometimes split it up
      // in two w:instrText tags, in different runs.
      if (e.message === 'Unexpected end of JSON input') {
        console.error('Found incomplete JSON, attempting to recover...')

        if (!state.partialCitation) {
          console.log('Stashing current citation')
          state.partialCitation = json
          return
        }

        console.log('Attempting to combine old citation with current...')

        citation = JSON.parse(state.partialCitation + json)

        state.partialCitation = ''

        console.log('Success!')
      }
      // console.log(json)
      console.log(state.partialCitation)

      console.error('Corrupt citation! This might be because the text is too long. Skipping...')
      return
    }

    if (citation.mendeley || citation.properties) {
      const citetype = text.match('ZOTERO') ? 'zotero' : 'mendeley'
      // I want to create a link for each citation,
      // and want to catch things like (Person, 2020, 2021; Other 2020)
      const formattedCitation =
        citetype === 'zotero'
          ? citation.properties.formattedCitation
          : citation.mendeley.formattedCitation

      const sectionedCitations = formattedCitation?.replace(/(\d{4}), (\d{4})/g, '$1; $2')

      const formattedCitations = sectionedCitations.split(';')

      if (citetype === 'mendeley') {
        state.deleteNextRun = true
      }

      return citation.citationItems.map((cite: CitationItem | MendeleyCitationItem, i: number) => {
        const itemData: CSL = cite.itemData
        state.citationNumber++
        // const citeKey =
        const citeKey = generateAuthYearFromCSL(state, itemData) || `bib${state.citationNumber}`

        state.collectCitation(itemData, citeKey)

        const { id, itemData: itemdata, ...rest } = cite
        const customCiteData = { ...rest, ...citation.properties }

        const inlineCiteNode: InlineCiteNode = {
          type: 'cite',
          value: '',
          data: {
            citeItems: [
              {
                key: citeKey,
                prefix: customCiteData.prefix,
                suffix: `${customCiteData.locator}${customCiteData.suffix}`,
              },
            ],
          },
        }

        state.patch(node, inlineCiteNode)
        return inlineCiteNode
        return h(
          itemData,
          'xref',
          {
            id: `_xref-${state.citationNumber}`,
            refType: 'bibr',
            rid: citeKey,
            // We store more value in the custom citation space, such as infix/suffix etc.
            ...(customCiteData ? { customType: JSON.stringify(customCiteData) } : {}), // customType: JSON.stringify()
          },
          [
            {
              type: 'string',
              content: formattedCitations?.[i] || `[${state.citationNumber}]`,
            },
          ],
        )
      })
    }
  }
  // Endnote/Citavi citation

  return
}

export function cslCitation(text: string) {
  //
}

function generateAuthYearFromCSL(state: State, csl: CSL): string {
  // by default Mendeley generates "ITEM-X" ids, which are bad
  if (csl?.id && typeof csl.id === 'string' && !`${csl?.id}`?.match('ITEM')) {
    return makeUniqueSuffix(state, csl.id, csl)
  }

  return makeUniqueSuffix(
    state,
    csl?.author?.[0]?.family && csl?.issued?.['date-parts']?.[0]?.[0]
      ? `${csl.author[0].family}${csl.issued['date-parts'][0][0]}`
      : `${csl.id}`,
    csl,
  )
}
function makeUniqueSuffix(state: State, key: string, data: CSL) {
  while (state.citeKeys[key] && state.citeKeys[key] !== data.title) {
    key = incrementSuffix(key)
  }
  state.citeKeys[key] = data.title || ''
  return key
}

function incrementSuffix(text: string) {
  if (!text.slice(-1).match(/[a-zA-Z]/)) {
    return `${text}a`
  }
  return text.slice(0, -1) + String.fromCharCode(text.charCodeAt(text.length - 1) + 1)
}
