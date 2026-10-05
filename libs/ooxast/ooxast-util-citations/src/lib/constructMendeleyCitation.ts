import { Citation, CitationItem, Mendeley, MendeleyCitation } from './types.js'
import { Data as CSL } from 'csl-json'
import { findRef } from './findRefInBib.js'
// import { VFile } from 'vfile'

export function constructMendeleyCitation(
  curr: Citation,
  index: number,
  bibliography?: CSL[],
  //  message?: VFile['message'],
): MendeleyCitation {
  const schema = 'https://github.com/citation-style-language/schema/raw/master/csl-citation.json'

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
