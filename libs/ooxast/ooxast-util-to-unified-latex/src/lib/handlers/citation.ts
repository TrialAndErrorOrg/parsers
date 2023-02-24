import { H } from '../types'
import { Parent, T } from 'ooxast'
import { Data as CSL } from 'csl-json'
import { CitationItem, MendeleyCitationItem } from 'ooxast-util-citations'

export function citation(h: H, citation: T, parent: Parent) {
  // i const t = select('', citation) as T
  //  if (!t) return
  if (!citation || !citation?.children?.length) return

  const text = citation.children[0].value

  if (text.includes('PAGE \\* MERGEFORMAT')) return

  const type = text.includes('CSL_CITATION') || j.partialCitation

  // Zotero/mendely citation: easy
  if (type && !text?.includes('Bibliography')) {
    let citation: { [key: string]: any }
    const json = text.replace(/ADDIN .*?CSL_CITATION/, '')

    try {
      if (j.partialCitation) {
        console.log('Attemping to combine incomplete citation with new one...')
        citation = JSON.parse(j.partialCitation + json)
        console.log('Success!')
        console.dir(citation, { depth: null })
        j.partialCitation = ''
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

        if (!j.partialCitation) {
          console.log('Stashing current citation')
          j.partialCitation = json
          return
        }

        console.log('Attempting to combine old citation with current...')

        citation = JSON.parse(j.partialCitation + json)

        j.partialCitation = ''

        console.log('Success!')
      }
      // console.log(json)
      console.log(j.partialCitation)

      console.error(
        'Corrupt citation! This might be because the text is too long. Skipping...'
      )
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

      const sectionedCitations = formattedCitation?.replace(
        /(\d{4}), (\d{4})/g,
        '$1; $2'
      )

      const formattedCitations = sectionedCitations.split(';')

      if (citetype === 'mendeley') {
        j.deleteNextRun = true
      }

      return citation.citationItems.map(
        (cite: CitationItem | MendeleyCitationItem, i: number) => {
          const itemData: CSL = cite.itemData
          j.citationNumber++
          // const citeKey =
          const citeKey =
            generateAuthYearFromCSL(j, itemData) || `bib${j.citationNumber}`

          j.collectCitation(itemData, citeKey)

          const { id, itemData: itemdata, ...rest } = cite
          const customCiteData = { ...rest, ...citation.properties }
          return j(
            itemData,
            'xref',
            {
              id: `_xref-${j.citationNumber}`,
              refType: 'bibr',
              rid: citeKey,
              // We store more value in the custom citation space, such as infix/suffix etc.
              ...(customCiteData
                ? { customType: JSON.stringify(customCiteData) }
                : {}), // customType: JSON.stringify()
            },
            [
              {
                type: 'text',
                value: formattedCitations?.[i] || `[${j.citationNumber}]`,
              },
            ]
          )
        }
      )
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
    return makeUniqueSuffix(j, csl.id, csl)
  }

  return makeUniqueSuffix(
    j,
    csl?.author?.[0]?.family && csl?.issued?.['date-parts']?.[0]?.[0]
      ? `${csl.author[0].family}${csl.issued['date-parts'][0][0]}`
      : `${csl.id}`,
    csl
  )
}
function makeUniqueSuffix(h: H, key: string, data: CSL) {
  while (j.citeKeys[key] && j.citeKeys[key] !== data.title) {
    key = incrementSuffix(key)
  }
  j.citeKeys[key] = data.title || ''
  return key
}

function incrementSuffix(text: string) {
  if (!text.slice(-1).match(/[a-zA-Z]/)) {
    return `${text}a`
  }
  return (
    text.slice(0, -1) +
    String.fromCharCode(text.charCodeAt(text.length - 1) + 1)
  )
}
