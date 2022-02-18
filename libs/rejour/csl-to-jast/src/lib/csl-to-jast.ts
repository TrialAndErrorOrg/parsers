import { Data as CSL } from 'csl-json'
import {
  Ref,
  RefList,
  Front,
  PubId,
  PersonGroup,
  Source,
  Issn,
  Isbn,
  ExtLink,
  Issue,
  Volume,
  Edition,
  PublisherLoc,
  PublisherName,
} from 'jjast'
import { x } from 'xastscript'
export function cslToJats(data: CSL | CSL[]) {
  if (Array.isArray(data)) {
    return cslToRefList(data)
  }
  return cslToFront(data)
}

//
export function cslToFront(data: CSL) {
  //TODO: [csl-to-jast] write a function that converts CSL to JAST frontmatter
}

export function cslToRefList(
  data: CSL[] | { [key: string | number]: CSL }
): RefList {
  if (Array.isArray(data)) {
    const reflist = data.map((csl, index) => cslToRef(csl, index))
    return x('refList', reflist) as RefList
  }
  const reflist = Object.entries(data).map(([index, csl]) =>
    cslToRef(csl, index)
  )
  return x('refList', reflist) as RefList
}

export function cslToRef(data: CSL, index: number | string): Ref {
  const date = data.issued?.['date-parts']?.[0]
  const [year, month, day] = date || data.issued?.literal?.split('-') || []

  const pubIds = ['DOI', 'PMID', 'PMCID'].flatMap(
    //@ts-expect-error no idea why not work
    (id: 'DOI' | 'PMID' | 'PMCID') =>
      data[id]
        ? //@ts-expect-error I can assign it to this dw bby
          (x('pubId', { pubIdType: id.toLowerCase() }, [
            { type: 'text', value: data[id] },
          ]) as PubId)
        : []
  )

  const names = data.author?.map((person) => {
    return x(
      'name',
      Object.entries(person).flatMap(
        ([name, val]: [name: string, val: string]) => {
          switch (name) {
            case 'family':
              return nameMap('surname', val)
            case 'given':
              return nameMap('givenNames', val)
            case 'suffix':
              return nameMap('suffix', val)
            case 'dropping-particle':
              return nameMap('prefix', val)
            case 'non-dropping-particle':
              return nameMap('prefix', val)
            default:
              return []
          }
        }
      )
    )
  })

  const authors = names
    ? (x('personGroup', { personGroupType: 'author' }, names) as PersonGroup)
    : []

  const pages = getPages(data)
  const source = getTitle(data)

  const elementCitationChildren = [
    nameMap('publisherLoc', data['publisher-place']) as PublisherLoc,
    nameMap('publisherName', data['publisher']) as PublisherName,
    //x(
    //  'date',
    //  [
    nameMap('year', `${year || ''}`),
    nameMap('month', `${month || ''}`),
    nameMap('day', `${day || ''}`),
    //   ].flat()
    // ) as Date,
    pubIds as PubId[],
    authors,
    pages,
    source as Source,
    nameMap('source', data['container-title']) as Source,
    nameMap('issn', data['ISSN']) as Issn,
    nameMap('isbn', data['ISBN']) as Isbn,
    nameMap('extLink', data['URL']) as ExtLink,
    nameMap('issue', `${data['issue'] || data['number'] || ''}`) as Issue,
    nameMap('volume', `${data['volume'] || ''}`) as Volume,
    nameMap('edition', `${data['edition'] || ''}`) as Edition,
  ].flat()

  return x('ref', { id: typeof index === 'string' ? index : `bib${index}` }, [
    x(
      'elementCitation',
      { publicationType: getPublicationType(data) },
      elementCitationChildren
    ),
  ]) as Ref
}
function nameMap(name: string, value: string | undefined) {
  return value ? x(name, [{ type: 'text', value: value }]) : []
}

function getPages(data: CSL) {
  if (data.page) {
    return nameMap('pageRange', data.page)
  } else if (data['page-first']) {
    return nameMap('pageFirst', data['page-first'])
  }
  return []
}

function getTitle(data: CSL) {
  if (!data.title) return []
  if (data.type === 'book') {
    return nameMap('source', data.title)
  }
  return nameMap('articleTitle', data.title)
}

function getPublicationType(data: CSL) {
  switch (data.type) {
    case 'article':
    case 'article-journal':
    case 'article-magazine':
    case 'article-newspaper':
      return 'journal'
    case 'book':
      return 'book'
    case 'chapter':
      return 'bookchapter'
    case 'dataset':
      return 'dataset'
    case 'patent':
      return 'patent'
    case 'review':
      return 'review'
    default:
      return 'standard'
  }
}

// TODO: [csl-to-jts] add reviewer support
// TODO: [csl-to-jts] do something with abstract maybe
// TODO: [csl-to-jts] add editor support
// TODO: [csl-to-jts] use citation key if available
