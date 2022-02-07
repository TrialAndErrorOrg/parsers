import {
  Text,
  ElementCitation,
  Element,
  isElement,
  List,
  Ref,
  RefList,
  Content,
  Root,
  Front,
  Back,
} from 'jjast'
import { Data as CSL, LooseNumber, Person } from 'csl-json'
import { toString } from 'xast-util-to-string'
import { convert } from 'unist-util-is'
import { visit } from '@jote/utils'
type Date = [
  [LooseNumber, (LooseNumber | undefined)?, (LooseNumber | undefined)?],
  (
    | [LooseNumber, (LooseNumber | undefined)?, (LooseNumber | undefined)?]
    | undefined
  )?
]

const isElementCitation = (element: Element): element is ElementCitation =>
  element.name === 'elementCitation'

export function refListToCSL(list: RefList): CSL[] {
  const cslList: CSL[] = []
  for (const ref of list.children) {
    if (!(isElement(ref) && ref.name === 'ref')) continue

    for (const citation of ref.children) {
      if (!(isElement(citation) && isElementCitation(citation))) continue
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
    } as CSL
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

const isText = convert<Text>('text')
type Node = Content

export function toCSLFront(node: Front): CSL | undefined {
  return toCSL(node)
}
export function toCSLBack(node: Back): CSL[] | undefined {
  return
}

type CSLResult = { front: CSL | undefined; back: CSL[] | undefined }

export function toCSLRoot(node: Root): CSLResult {
  let result: CSLResult = { front: undefined, back: [] }
  visit(
    node,
    (node: Node) => isElement(node) && node.name === 'front',
    (node: Front) => {
      result.front = toCSLFront(node)
    }
  )

  visit(
    node,
    (node: Node) => isElement(node) && node.name === 'back',
    (node: Back) => {
      result.back = toCSLBack(node)
    }
  )

  return result
}

/**
 * Parses either Root, Front, or Back jast-element and returns CSL JSON
 */
export function toCSL(node: Node | Node[]): CSL | CSL[] | string {
  //@ts-ignore
  if (Array.isArray(node)) return node.map((n) => toCSL(n))

  if (isText(node)) return node.value

  switch (node.name) {
    case 'articleTitle':
      return { title: toString(node) }
    case 'refList':
      refListToCSL(node)
    case 'contribGroup': {
      //@ts-ignore
      if (node.attributes.contentType === 'author') {
        return { author: Object.assign(...toCSL(node.children)) }
      }
    }
    case 'surname': {
      return { family: toString(node) }
    }
    case 'givenNames': {
      return { given: toString(node) }
    }
    default:
      //@ts-ignore

      return toCSL(node.children)
  }
}
