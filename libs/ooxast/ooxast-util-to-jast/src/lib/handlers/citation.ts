import { J } from '../types'
import { Parent, T } from 'ooxast'
import { Data as CSL } from 'csl-json'

export function citation(j: J, citation: T, parent: Parent) {
  // i const t = select('', citation) as T
  //  if (!t) return
  const text = citation.children[0].value
  if (text.includes('PAGE \\* MERGEFORMAT')) return
  const type = text.includes('CSL_CITATION') || '}'
  // Zotero/mendely citation: easy
  if (type && !text?.slice(0, 50)?.includes('Bibliography')) {
    let citation: { [key: string]: any }
    const json = text.replace(/ADDIN .*?CSL_CITATION/, '')
    try {
      citation = JSON.parse(j.partialCitation + json)
      if (j.partialCitation) j.partialCitation = ''
    } catch (e: any) {
      console.log(e.message)
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
      throw new Error(
        'Corrupt citation! This might be because the text is too long.'
      )
    }

    if (citation.mendeley) {
      // I want to create a link for each citation,
      // and want to catch things like (Person, 2020, 2021; Other 2020)
      const sectionedCitations = citation.mendeley.formattedCitation.replace(
        /(\d{4}), (\d{4})/g,
        '$1; $2'
      )
      const formattedCitations = sectionedCitations.split(';')

      j.deleteNextRun = true
      return citation.citationItems.map((cite: any, i: number) => {
        const citation: CSL = cite.itemData
        j.citationNumber++
        // const citeKey =
        let citeKey =
          generateAuthYearFromCSL(citation) || `bib${j.citationNumber}`

        while (citeKey in j.citeKeys) {
          if (citeKey.slice(-1).match(/\d/)) {
            citeKey = `${citeKey}a`
            continue
          }
          citeKey = incrementSuffix(citeKey)
        }
        j.citeKeys.push(citeKey)

        j.collectCitation(citation, citeKey)

        return j(
          citation,
          'xref',
          {
            id: `_xref-${j.citationNumber}`,
            refType: 'bibr',
            rid: citeKey,
          },
          [
            {
              type: 'text',
              value: formattedCitations?.[i] || `[${j.citationNumber}]`,
            },
          ]
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

function generateAuthYearFromCSL(csl: CSL): string {
  return csl.author?.[0]?.family && csl.issued?.['date-parts']?.[0]?.[0]
    ? `${csl.author[0].family}${csl.issued['date-parts'][0][0]}`
    : `${csl.id}`
}

function incrementSuffix(text: string) {
  return (
    text.slice(0, -1) +
    String.fromCharCode(text.charCodeAt(text.length - 1) + 1)
  )
}
