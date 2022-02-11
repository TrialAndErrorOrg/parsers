import { J } from '../types'
import { RefList } from 'ooxast'
// @ts-ignore No types :(
import { Person, Data as CSL } from 'csl-json'
import { Environment } from 'jast'
import { wrapCommandArg } from '../util/wrap-command-arg'
import { refListToCSL } from 'ooxast-util-to-csl'

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

export function refList(j: J, list: RefList): Environment {
  // we're parsing it to CSL-JSON first, lot easier to render to bib

  const csl: CSL[] = refListToCSL(list)

  const toBibtex = (c: CSL[]) => {
    return c
      .map(
        // prettier-ignore
        // @ts-expect-error
        (ref) => `@${(biblatexCSLMap.target as any)[ref.type]}{${ref['citation-key'] || ref.id},
      title = {${ref.title||''}},
      author = {${ref.author
        ?.map(
          (auth) =>
            auth.literal ||
            `${auth.family}, ${
              auth['dropping-particle'] || auth['non-dropping-particle'] || ''
            }${auth.given ||''} ${auth.suffix || ''}`
        )
        .join(' and ')||''}},
      number = {${ref.number||ref.issue||''}},
      volume = {${ref.volume||''}},
      url = {${ref.URL||''}},
      doi = {${ref.DOI||''}},
      publisher = {${ref.publisher||''}},
      year = {${ref.issued?.literal || ref.issued?.['date-parts']?.join('-')||''}},
      pages = {${ref.page||''}},
      journal = {${ref.source||''}},
    }

`
      )
      .join('\n\n\n')
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
