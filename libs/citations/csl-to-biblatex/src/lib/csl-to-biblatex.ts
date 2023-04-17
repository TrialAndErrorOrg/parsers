import { Data as CSL, ItemType } from 'csl-json'
const biblatexCSLMap: {
  source: Record<string, ItemType>
  target: Record<ItemType, string>
} = {
  source: {
    article: 'article-journal',
    book: 'book',
    mvbook: 'book',
    inbook: 'chapter',
    bookinbook: 'book',
    booklet: 'book',
    collection: 'book',
    mvcollection: 'book',
    incollection: 'chapter',
    dataset: 'dataset',
    online: 'webpage',
    patent: 'patent',
    periodical: 'article-journal',
    proceedings: 'book',
    mvproceedings: 'book',
    inproceedings: 'paper-conference',
    reference: 'book',
    mvreference: 'book',
    inreference: 'entry',
    report: 'report',
    software: 'book',
    thesis: 'thesis',
    unpublished: 'manuscript',
    artwork: 'graphic',
    audio: 'song',
    image: 'figure',
    jurisdiction: 'legal_case',
    legislation: 'legislation',
    legal: 'treaty',
    letter: 'personal_communication',
    movie: 'motion_picture',
    music: 'musical_score',
    review: 'review',
    video: 'motion_picture',
    conference: 'paper-conference',
    electronic: 'webpage',
    mastersthesis: 'thesis',
    phdthesis: 'thesis',
    techreport: 'report',
    www: 'webpage',
  },
  target: {
    article: 'article',
    'article-journal': 'article',
    'article-magazine': 'article',
    'article-newspaper': 'article',
    bill: 'legislation',
    book: 'book',
    broadcast: 'audio',
    chapter: 'inbook',
    dataset: 'dataset',
    entry: 'inreference',
    'entry-dictionary': 'inreference',
    'entry-encyclopedia': 'inreference',
    figure: 'artwork',
    graphic: 'artwork',
    interview: 'audio',
    legal_case: 'jurisdiction',
    legislation: 'legislation',
    manuscript: 'unpublished',
    motion_picture: 'movie',
    musical_score: 'music',
    'paper-conference': 'inproceedings',
    patent: 'patent',
    personal_communication: 'letter',
    post: 'online',
    'post-weblog': 'online',
    report: 'report',
    review: 'review',
    'review-book': 'review',
    song: 'music',
    speech: 'audio',
    thesis: 'thesis',
    treaty: 'legal',
    webpage: 'online',
    map: 'artwork',
    pamphlet: 'booklet',
  },
}

const mapPersons = (persons: CSL.Person[]) =>
  persons
    .map((auth) =>
      (
        auth.literal ||
        `${
          auth['dropping-particle'] ||
          auth['non-dropping-particle'] ||
          // @ts-expect-error - particle is not in the type definition
          auth['particle'] ||
          ''
        } ${auth.family}${auth.given ? `, ${auth.given}` : ''}${auth.suffix || ''}`
      ).trim(),
    )
    ?.join(' and ')

export function cslToBiblatex(csl: CSL[]) {
  const texEntryMap = (key: string, value?: string) => (value ? `${key} = {${value}}` : [])

  const toBibtex = (c: CSL[]) => {
    return c
      .map(
        // prettier-ignore
        (ref,index) =>{

    const type = (biblatexCSLMap.target )[ref.type] || 'article'
      return [
        `@${type}{${generateCiteKey(ref,index)?.replace(/\s/g, '')}`,
  texEntryMap('title      ',ref.title),
  texEntryMap('author     ', mapPersons(ref.author || [])),
  texEntryMap('editor     ', mapPersons(ref.editor || [])),
  texEntryMap('number     ',`${ref.number||ref.issue||''}`),
  texEntryMap('volume     ',`${ref.volume||''}`),
  texEntryMap('url        ',ref.URL),
  texEntryMap('doi        ',ref.DOI),
  texEntryMap('publisher  ',ref.publisher),
  texEntryMap('place      ',ref['publisher-place']),
  texEntryMap('year       ',ref.issued?.literal ),
  texEntryMap('date       ',ref.issued?.['date-parts']?.[0]?.filter(Boolean).map(part=>(typeof part === 'string' ? part.length === 1 : part! < 10) ? `0${part}` : part).join('-')),
  texEntryMap('pages      ',ref.page),
  texEntryMap(`${type === 'article' ? 'journal' : 'booktitle'}    `,ref['container-title'] ?? ref.source),

].flat().join(',\n    ')+'\n}'
},
      )
      .join('\n\n\n') // + '\n}'
  }
  const bibtex = toBibtex(csl)

  return bibtex
}

function generateCiteKey(ref?: CSL, index?: number) {
  if (!ref) {
    return `bib${index ?? 'X'}`
  }

  const { id, author, issued, editor } = ref

  if (!id) {
    if (author?.[0]?.family) {
      return `${author[0].family}${issued?.literal || issued?.['date-parts']?.[0]?.[0] || ''}`
    }

    if (editor?.[0]?.family) {
      return `${editor[0].family}${issued?.literal || issued?.['date-parts']?.[0]?.[0] || ''}`
    }

    return `bib${index}`
  }
  if (!id.match(/\d/)) {
    return id
  }
  if (id.slice(-4).match(/(\d{4}|\d{3}[a-z])/)) {
    return id
  }

  return `bib${id.replace(/\D/g, '')}`
}
