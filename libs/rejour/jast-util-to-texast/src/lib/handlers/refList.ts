import { all } from 'jast-util-to-texast'
import { J } from '../types'
import { Element, ElementCitation, isElement, Ref, RefList } from 'jjast'
import { toString } from 'hast-util-to-string'
import { convertElement } from 'hast-util-is-element'
// @ts-ignore No types :(
import { BibLatexParser } from 'biblatex-csl-converter'
import { Person, Data as CSL } from 'csl-json'
import { Environment } from 'texast'
import { wrapCommandArg } from '../util/wrap-command-arg'

const isElementCitation = (element: Element): element is ElementCitation =>
  element.tagName === 'elementCitation'

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

  const csl: CSL[] = list.children.reduce(
    (acc: CSL[], ref: RefList['children'][number]) => {
      if (!(isElement(ref) && ref.tagName === 'ref')) return acc
      const citation = ref.children[0]
      if (!(isElement(citation) && isElementCitation(citation))) return acc

      const issued: { [key: string]: string | undefined } = {
        year: undefined,
        month: undefined,
        day: undefined,
      }
      const entry = citation.children.reduce(
        // @ts-expect-error
        (acc: CSL, curr: ElementCitation['children'][number]) => {
          if (!isElement(curr)) return acc
          switch (curr.tagName) {
            case 'day':
              issued.day = toString(curr)
              return acc
            case 'month':
              issued.month = toString(curr)
              return acc
            case 'year': {
              issued.year = toString(curr)
              return acc
            }
            case 'personGroup': {
              if (curr?.properties?.personGroupType !== 'author') return acc
              curr.children?.forEach((child) => {
                if (!isElement(child)) return
                const author: Person = {} as Person
                switch (child.tagName) {
                  case 'name': {
                    child.children?.forEach((name) => {
                      if (!isElement(name)) return
                      switch (name.tagName) {
                        case 'surname':
                          author.family = toString(name)
                          return
                        case 'givenNames':
                          author.given = toString(name)
                          return
                        case 'suffix':
                          author.suffix = toString(name)
                          return
                        case 'prefix':
                          author['non-dropping-particle'] = toString(name)
                          return
                        default:
                          return
                      }
                    })

                    acc?.author?.push(author)
                    return
                  }
                  default:
                    return
                }
              })
              return acc
            }
            case 'pageRange': {
              acc.page = toString(curr)
              return acc
            }
            case 'pubId': {
              if (!curr.properties.pubIdType) return acc
              // @ts-expect-error yaya
              acc[curr.properties.pubIdType.toUpperCase()] = toString(curr)
              return acc
            }
            case 'articleTitle':
            case 'chapterTitle':
            case 'partTitle':
              //@ts-ignore it's an element
              acc.title = toString(curr)
              return acc
            case 'publisherName':
              //@ts-ignore it's an element
              acc.publisher = toString(curr)
              return acc
            case 'source':
              if (acc.type === 'book') {
                //@ts-ignore it's an element
                acc.title = toString(curr)
                return acc
              }
            default:
              //@ts-ignore it's an element
              acc[curr.tagName] = toString(curr as Element)
              return acc
          }
        },
        {
          issued: { 'date-parts': [] },
          id: ref?.properties?.id,
          'citation-key': ref.properties?.id,
          type:
            citation.properties.publicationType === 'journal'
              ? 'article-journal'
              : citation.properties.publicationType,
          author: [],
        }
      )

      //@ts-expect-error shhh
      entry.issued = {
        'date-parts': [issued.year, issued.month, issued.day]
          .filter((part) => !!part)
          .map((part) => (part?.length === 1 ? `0${part}` : part)),
      }
      // @ts-expect-error yeah i know but im lazy
      acc.push(entry)
      return acc
    },
    []
  )

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
