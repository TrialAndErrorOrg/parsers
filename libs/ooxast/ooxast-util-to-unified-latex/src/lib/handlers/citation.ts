import { H, Handle, Parent } from '../types.js'
import { T } from 'ooxast'
import { Data as CSL } from 'csl-json'

import { CitationItem, MendeleyCitationItem } from 'ooxast-util-citations'

import { arg, m } from '@unified-latex/unified-latex-builder'

import { Argument } from '@unified-latex/unified-latex-types'
import { toString } from 'xast-util-to-string'

export const citation: Handle = (h: H, citationNode: T, parent?: Parent) => {
  // i const t = select('', citation) as T
  //  if (!t) return
  if (!citationNode || !citationNode?.children?.length) return

  const text = citationNode.children[0].value

  if (text.includes('PAGE \\* MERGEFORMAT')) return

  const type = text.includes('CSL_CITATION') || h.partialCitation

  // Zotero/mendely citation: easy
  if (type && !text?.includes('Bibliography')) {
    let citation: { [key: string]: any }
    const json = text.replace(/ADDIN .*?CSL_CITATION/, '')

    try {
      if (h.partialCitation) {
        console.log('Attemping to combine incomplete citation with new one...')
        citation = JSON.parse(h.partialCitation + json)
        console.log('Success!')
        console.dir(citation, { depth: null })
        h.partialCitation = ''
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

        if (!h.partialCitation) {
          console.log('Stashing current citation')
          h.partialCitation = json
          return
        }

        console.log('Attempting to combine old citation with current...')

        citation = JSON.parse(h.partialCitation + json)

        h.partialCitation = ''

        console.log('Success!')
      }
      // console.log(json)
      console.log(h.partialCitation)

      console.error('Corrupt citation! This might be because the text is too long. Skipping...')
      return
    }

    if (citation.mendeley || citation.properties) {
      const citetype = text.match('ZOTERO') ? 'zotero' : 'mendeley'
      // I want to create a link for each citation,
      // and want to catch things like (Person, 2020, 2021; Other 2020)
      const { formattedCitation, plainCitation, prefix, suffix } =
        citetype === 'zotero' ? citation.properties : citation.mendeley

      const sectionedCitations = formattedCitation?.replace(/(\d{4}), (\d{4})/g, '$1; $2')

      const formattedCitations = sectionedCitations.split(';')

      if (citetype === 'mendeley') {
        h.deleteNextRun = true
      }

      const citations = citation.citationItems.map(
        (cite: CitationItem | MendeleyCitationItem, i: number) => {
          const itemData: CSL = cite.itemData
          h.citationNumber++
          // const citeKey =
          const citeKey = generateAuthYearFromCSL(h, itemData) || `bib${h.citationNumber}`

          h.collectCitation(itemData, citeKey)

          const { id, itemData: itemdata, ...rest } = cite
          // const customCiteData = { ...rest, ...citation.properties }

          return citeKey
          // return m('autocite', citeKey)
          // return h(
          //   itemData,
          //   'xref',
          //   {
          //     id: `_xref-${h.citationNumber}`,
          //     refType: 'bibr',
          //     rid: citeKey,
          //     // We store more value in the custom citation space, such as infix/suffix etc.
          //     ...(customCiteData ? { customType: JSON.stringify(customCiteData) } : {}), // customType: JSON.stringify()
          //   },
          //   [
          //     {
          //       type: 'string',
          //       content: formattedCitations?.[i] || `[${h.citationNumber}]`,
          //     },
          //   ],
          // )
        },
      )

      // we need to find the next child in order to accurately determine prefix and suffixes
      const nextChildIndex = parent?.children?.findIndex((c) => {
        const possibleInstr = c.children?.[0]

        if (possibleInstr.name !== 'w:instrText') {
          return false
        }

        const val = possibleInstr.children?.[0]?.value
        return val === text
      })

      const nextChild = parent?.children?.[(nextChildIndex ?? -2) + 1]

      // determine the prefix and the suffix by comparing the textvalue of the nextchild to the formatted citation
      const nextChildText = nextChild ? toString(nextChild) : ''
      const nextNextChild = parent?.children?.[(nextChildIndex ?? -3) + 2]

      const nextNextChildText = nextChildText || toString(nextNextChild)

      // cut off parentheses and see what's left in front
      const citationWithoutParens = (formattedCitation || plainCitation)?.replace(/[()]/g, '')
      const possiblePrefix = nextNextChildText
        .replace(/[()]/g, '')
        .trim()
        ?.match(new RegExp(`(.*?)${citationWithoutParens}(.*?)`))

      if (citationWithoutParens.includes('Hedge')) {
        console.log({
          possiblePrefix,
          citationWithoutParens,
          nextNextChildText,
          nextChild: nextChild.children,
          nextNextChild: nextNextChild.children,
        })
      }

      const maybePrefix = possiblePrefix?.[1]?.trim()
      const maybeSuffix = possiblePrefix?.[2]?.trim()

      const actualPrefix =
        maybePrefix && maybePrefix !== citationWithoutParens ? maybePrefix : prefix
      const actualSuffix =
        maybeSuffix && maybeSuffix !== citationWithoutParens ? maybeSuffix : suffix

      const args: Argument[] = [
        ...(actualPrefix ? [arg(actualPrefix, { braces: '[]' })] : []),
        ...(actualSuffix ? [arg(actualSuffix, { braces: '[]' })] : []),
        arg(citations.join(', ')),
      ]

      return m((formattedCitation ?? plainCitation)?.[0] !== '(' ? 'textcite' : 'parencite', args)
    }
  }
  // Endnote/Citavi citation

  return
}

export function cslCitation(text: string) {
  //
}

function generateAuthYearFromCSL(h: H, csl: CSL): string {
  // by default Mendeley generates "ITEM-X" ids, which are bad
  if (csl?.id && typeof csl.id === 'string' && !`${csl?.id}`?.match('ITEM')) {
    return makeUniqueSuffix(h, csl.id, csl)
  }

  return makeUniqueSuffix(
    h,
    csl?.author?.[0]?.family && csl?.issued?.['date-parts']?.[0]?.[0]
      ? `${csl.author[0].family}${csl.issued['date-parts'][0][0]}`
      : `${csl.id}`,
    csl,
  )
}
function makeUniqueSuffix(h: H, key: string, data: CSL) {
  while (h.citeKeys[key] && h.citeKeys[key] !== data.title) {
    key = incrementSuffix(key)
  }
  h.citeKeys[key] = data.title || ''
  return key
}

function incrementSuffix(text: string) {
  if (!text.slice(-1).match(/[a-zA-Z]/)) {
    return `${text}a`
  }
  return text.slice(0, -1) + String.fromCharCode(text.charCodeAt(text.length - 1) + 1)
}
