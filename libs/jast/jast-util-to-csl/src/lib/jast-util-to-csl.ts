import {
  Text,
  ElementCitation,
  Element,
  isElement,
  Ref,
  RefList,
  Content,
  Root,
  Front,
  Back,
} from 'jast-types'
import { Data as CSL, LooseNumber, Person } from 'csl-json'
import { toString } from 'xast-util-to-string'
import { convert as unistConvert } from 'unist-util-is'
import { convertElement } from 'xast-util-is-element'
import { select } from 'xast-util-select'
// import { visit } from 'unist-util-visit'
const isRefList = convertElement<RefList>('refList')
const isRef = convertElement<Ref>('ref')
const isElementCitation = convertElement<ElementCitation>('elementCitation')

type Date = [
  [LooseNumber, (LooseNumber | undefined)?, (LooseNumber | undefined)?],
  ([LooseNumber, (LooseNumber | undefined)?, (LooseNumber | undefined)?] | undefined)?,
]

// const isElementCitation = (element: Element): element is ElementCitation =>
//   element.name === 'elementCitation'

export function refListToCSL(list: RefList): CSL[] {
  const cslList: CSL[] = []
  for (const ref of list.children) {
    if (!isRef(ref)) continue

    for (const citation of ref.children) {
      if (!isElementCitation(citation)) continue
      const entry = refToCSL(citation, ref.attributes.id!)
      cslList.push(entry)
    }
  }
  return cslList || []
}

export function refToCSL(citation: ElementCitation, id: string): CSL {
  const issued: { year?: string; month?: string; day?: string } = {
    year: undefined,
    month: undefined,
    day: undefined,
  }

  const entry = citation.children.reduce(
    (acc: CSL, curr: ElementCitation['children'][number]) => {
      if (!isElement(curr)) return acc
      switch (curr.name) {
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
          if (curr?.attributes?.personGroupType !== 'author') return acc
          curr.children?.forEach((child) => {
            if (!isElement(child)) return
            const author: Person = {} as Person
            switch (child.name) {
              case 'name': {
                child.children?.forEach((name) => {
                  if (!isElement(name)) return
                  switch (name.name) {
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
          if (!curr.attributes.pubIdType) return acc
          // @ts-expect-error yaya
          acc[curr.attributes.pubIdType.toUpperCase()] = toString(curr)
          return acc
        }
        case 'articleTitle':
        case 'chapterTitle':
        case 'partTitle': {
          acc.title = toString(curr)
          return acc
        }
        case 'publisherName': {
          acc.publisher = toString(curr)
          return acc
        }
        case 'publisherLoc': {
          acc['publisher-place'] = toString(curr)
          return acc
        }
        case 'extLink': {
          acc.URL = toString(curr)
          return acc
        }
        case 'source':
          if (acc.type === 'book') {
            acc.title = toString(curr)
            return acc
          }
        //fallthrough
        default:
          //@ts-expect-error it's an element
          acc[curr.name] = toString(curr as Element)
          return acc
      }
    },
    {
      issued: {
        'date-parts': [[0]] as Date,
        literal: '',
      },
      id,
      'citation-key': id,
      type:
        citation.attributes.publicationType === 'journal'
          ? 'article-journal'
          : citation.attributes.publicationType,
      author: [],
    } as CSL,
  )

  entry.issued = {
    'date-parts': [
      [issued.year, issued.month, issued.day]
        .filter((part) => !!part)
        .map((part) => (part?.length === 1 ? `0${part}` : part)),
    ] as unknown as Date,
  }
  return entry
}

const isText = unistConvert<Text>('text')
type Node = Content

const merge = (array: ({ [key: string]: any | any[] } | any)[]): { [key: string]: any | any[] } =>
  array.reduce((acc: { [key: string]: any }, curr: { [key: string]: any | any[] } | any) => {
    if (typeof curr !== 'object') {
      return acc
    }

    const [key, val] = Object.entries(curr)[0]
    if (!Array.isArray(val)) {
      acc[key] = val
      return acc
    }
    return { ...acc, [key]: [...(acc[key] || []), ...val] }
  }, {})

export function toCSLFront(node: Front): CSL | undefined {
  const csl = merge(one(node))
  if (csl.custom) {
    csl.custom = merge(csl.custom)
  }
  return csl as CSL
}

export function toCSLBack(node: Back): CSL[] | undefined {
  const reflist = select('refList', node)
  if (!isRefList(reflist)) throw new Error('reflist is not a reflist')

  const back = reflist ? refListToCSL(reflist) : undefined
  // visit(
  //   node,
  //   (element: Content): element is RefList => isElement(element) && element.name === 'refList',
  //   (node: RefList) => {
  //     back = refListToCSL(node)
  //   },
  // )
  return back
}

type MetaData = { front: CSL | undefined; back: CSL[] | undefined }
type CSLConditional<T extends Root | Front | Back> = T extends Root
  ? MetaData
  : T extends Front
  ? CSL
  : CSL[]

const isFront = convertElement<Front>('front')
const isBack = convertElement<Back>('back')

/**
 * Parses either Root, Front, or Back jast-element and returns CSL JSON
 */
export function toCSL<T extends Root | Front | Back>(root: T): CSLConditional<T> {
  if (root.type === 'root') {
    const frontElement = select('front', root)
    const backElement = select('back', root)

    const front = isFront(frontElement) ? toCSLFront(frontElement) : undefined
    const back = isBack(backElement) ? toCSLBack(backElement) : undefined
    // (element: Content): element is Front => isElement(element) && element.name === 'front',
    // visit(
    //   root,
    //   (node: Node) => {

    //     front = toCSLFront(node)
    //   },
    // )

    // visit(
    //   root,
    //   (element: Content): element is Back => isElement(element) && element.name === 'back',
    //   (node: Back) => {
    //     back = toCSLBack(node)
    //   },
    // )

    return { front, back } as CSLConditional<T>
  }
  if (root.name === 'front') {
    return toCSLFront(root) as CSLConditional<T>
  }
  return toCSLBack(root) as CSLConditional<T>
}

export function all(node: Extract<Node, { children: any[] }>): any[] {
  return node?.children?.flatMap((n: Node) => one(n)).filter((n) => n)
  // .reduce((acc: { [key: string]: any | any[] }, curr: undefined | {[key:string]: any}) => {
  //   if (!curr) return acc
  //   const [key, val] = Object.entries(curr)[0]
  //   if (acc[key] && Array.isArray(acc[key])) {
  //     Array.isArray(acc[key]) && acc[key].push(val)
  //     return acc
  //   }
  //   acc[key] = val
  //   return acc
  // }, {})
}

export function one(node: Node) {
  if (isText(node)) return

  switch (node.name) {
    case 'articleTitle':
      return { title: toString(node) }
    case 'refList':
      return refListToCSL(node)
    case 'contribGroup': {
      if (node.attributes.contentType === 'author') {
        return { author: all(node) }
      }
      return
    }
    case 'event': {
      const type = node.attributes.eventType
      if (!type) {
        return
      }
      return {
        [type]: Object.assign({}, ...all(node)),
      }
    }
    case 'date': {
      switch (node.attributes.dateType) {
        case 'published': {
          return {
            issued: {
              'date-parts': [all(node)],
              ...(node.attributes.iso8601Date ? { literal: node.attributes.iso8601Date } : {}),
            },
          }
        }
        case 'accepted':
          return {
            custom: [
              {
                accepted: {
                  'date-parts': [all(node)],
                  ...(node.attributes.iso8601Date ? { literal: node.attributes.iso8601Date } : {}),
                },
              },
            ],
          }
        case 'received':
          return {
            custom: [
              {
                received: {
                  'date-parts': [all(node)],
                  ...(node.attributes.iso8601Date ? { literal: node.attributes.iso8601Date } : {}),
                },
              },
            ],
          }
        default:
          return
      }
    }
    case 'month':
    case 'day':
    case 'year':
      return toString(node)
    case 'pubDate': {
      return {
        issued: {
          'date-parts': [all(node)],
        },
      }
    }
    case 'contrib': {
      if (node.attributes.contribType !== 'person') return
      return Object.assign({}, ...all(node))
    }
    case 'surname': {
      return { family: toString(node) }
    }
    case 'givenNames': {
      return { given: toString(node) }
    }
    case 'email': {
      // yes i know but it's handy
      return { email: toString(node) }
    }
    case 'aff': {
      // it'll be fine
      return {
        custom: [{ [node.attributes.id || 'aff']: all(node as any) }],
      }
    }
    case 'xref': {
      if (node.attributes.refType !== 'aff') return
      return { 'aff-link': node.attributes.rid }
    }

    //@ts-expect-error yea
    case 'orcid': {
      return toString(node)
    }
    case 'issn': {
      return { issn: toString(node) }
    }
    case 'isbn': {
      return { isbn: toString(node) }
    }
    case 'publisherName': {
      return { publisher: all(node).join('') }
    }
    case 'publisherLoc': {
      return { 'publisher-place': all(node).join('') }
    }
    case 'institution': {
      return { instution: toString(node) }
    }
    case 'country': {
      return { country: toString(node) }
    }
    case 'volumeId':
    case 'articleId': {
      switch (node.attributes.pubIdType) {
        case 'doi':
          return { DOI: toString(node) }
        case 'pmid':
          return { PMID: toString(node) }
        case 'pmcid':
          return { PMCID: toString(node) }
        default:
          //@ts-expect-error yea
          return { [node.attributes.pubIdType]: toString(node) }
      }
    }
    default:
      return all(node)
  }
}
