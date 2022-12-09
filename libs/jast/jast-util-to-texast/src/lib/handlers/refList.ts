import { J } from '../types'
import { RefList } from 'jast-types'
import { Data as CSL } from 'csl-json'
import { Environment } from 'texast'
import { wrapCommandArg } from '../util/wrap-command-arg'
import { refListToCSL } from 'jast-util-to-csl'

const biblatexCSLMap = {
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
  },
}

export function refList(j: J, list: RefList): Environment | undefined {
  // we're parsing it to CSL-JSON first, lot easier to render to bib
  if (list.children.length === 0) {
    return
  }

  const csl: CSL[] = refListToCSL(list)

  const texEntryMap = (key: string, value?: string) =>
    value ? `${key} = {${value}}` : []
  const toBibtex = (c: CSL[]) => {
    return c
      .map(
        // prettier-ignore
        (ref,index) =>
          [
            `@${(biblatexCSLMap.target as any)[ref.type] || 'article'}{${generateCiteKey(ref.id,index)}`,
          //  ${ref.author?.[0]?.family && ref.issued?.['date-parts']?.[0]?.[0] ? `${ref.author[0].family}${ref.issued['date-parts'][0][0]}` :ref['citation-key'] || ref.id}`,
      texEntryMap('title      ',ref.title),
      texEntryMap('author     ',ref.author
        ?.map(
          (auth) =>
            (auth.literal ||
            `${(auth['dropping-particle'] || auth['non-dropping-particle'] || '')} ${auth.family}${auth.given ? `, ${auth.given}` : ''}${auth.suffix || ''}`).trim()
        )
        .join(' and ')),
      texEntryMap('number     ',`${ref.number||ref.issue||''}`),
      texEntryMap('volume     ',`${ref.volume||''}`),
      texEntryMap('url        ',ref.URL),
      texEntryMap('doi        ',ref.DOI),
      texEntryMap('publisher  ',ref.publisher),
      texEntryMap('place      ',ref['publisher-place']),
      texEntryMap('year       ',ref.issued?.literal || ref.issued?.['date-parts']?.[0]?.join('-')),
      texEntryMap('pages      ',ref.page),
      texEntryMap('journal    ',ref.source),

].flat().join(',\n    ')+'\n}'
      )
      .join('\n\n\n') // + '\n}'
  }
  const bibtex = toBibtex(csl)

  return {
    type: 'environment',
    name: 'filecontents',
    children: [
      wrapCommandArg(j, [{ type: 'text', value: 'bibliography.bib' }]),
      { type: 'text', value: bibtex },
    ],
  }
}

function generateCiteKey(id?: string, index?: number) {
  if (!id) {
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
