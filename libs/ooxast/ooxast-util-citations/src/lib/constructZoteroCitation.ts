import { VFile } from 'vfile'
import { findRef } from './findRefInBib.js'
import { Citation, CitationItem, ZoteroCitation, ZoteroProperties } from './types.js'
import { Data as CSL } from 'csl-json'

export function constructZoteroCitation(
  curr: Citation,
  index: number,
  bibliography?: CSL[],
  message?: VFile['message'],
): ZoteroCitation {
  const schema = 'https://github.com/citation-style-language/schema/raw/master/csl-citation.json'

  const properties: ZoteroProperties = {
    ...curr.properties,
    noteIndex: 0,
    formattedCitation: curr.originalText || '',
    plainCitation: curr.originalText || '',
  }

  curr['citationId'] = curr['citationId'].replace('X', `${index}`)
  if (!bibliography) {
    const zot: any = { ...curr, schema, properties }
    return zot
  }

  const zotCites = curr.citationItems.reduce((acc: CitationItem[], curr) => {
    const betterCSL = curr // findRef(curr, bibliography)

    acc.push(betterCSL)
    return acc
  }, [])

  const mend: ZoteroCitation = {
    citationItems: zotCites as any,
    schema,
    properties,
    citationID: curr.citationId,
  }
  return mend
}
