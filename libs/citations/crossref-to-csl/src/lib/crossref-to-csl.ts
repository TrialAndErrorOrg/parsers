import type { CrossrefJSON } from 'crossref-json'
import type { Data as CSL } from 'csl-json'
import type { PickByValue } from 'utility-types'

type CRArraylike = keyof PickByValue<CrossrefJSON, any[]>
type CRSinglets = Exclude<keyof CrossrefJSON, CRArraylike>
type CSLArraylike = keyof PickByValue<CSL, any[] | undefined>
type CSLSinglets = Exclude<keyof CSL, CSLArraylike>

type Same = (CSLSinglets & CRSinglets) | (CSLArraylike & CRArraylike)
type Arr = CSLSinglets & CRArraylike

// From https://github.com/relata/relata-prototype
const typeMappings: { [key: CrossrefJSON['type']]: CSL['type'] } = {
  'journal-article': 'article-journal',
  'book-chapter': 'chapter',
  'posted-content': 'manuscript',
  'proceedings-article': 'paper-conference',
}

const sames: Same[] = [
  'issued',
  'issue',
  'volume',
  'author',
  'editor',
  'translator',
  'DOI',
  'URL',
  'abstract',
  'language',
  'page',
  'publisher',
  //'source',
  //'type',
]
const arrs: Arr[] = ['ISBN', 'ISSN', 'archive', 'container-title', 'original-title', 'title']

const maps: [key1: keyof CSL, key2: keyof CrossrefJSON][] = [
  ['publisher-place', 'publisher-location'],
  ['edition', 'edition-number'],
]

export function crossrefToCsl(item: CrossrefJSON): CSL {
  const map = (key: keyof CSL, newkey: keyof CrossrefJSON) =>
    item[newkey] ? { [key]: item[newkey] } : {}
  const same = (key: Same) => (item[key] ? { [key]: item[key] } : {})
  const arr = (key: Arr) => (item[key] ? { [key]: item[key][0] } : {})

  const samesArr = sames.map((s: Same) => same(s))
  const samesObj = Object.assign({}, ...samesArr)

  const arrArr = arrs.map((a) => arr(a))
  const arrObj = Object.assign({}, ...arrArr)

  const mapArr = maps.map((m) => map(m[0], m[1]))
  const mapObj = Object.assign({}, ...mapArr)

  return {
    ...samesObj,
    ...arrObj,
    ...mapObj,
    type: typeMappings[item.type] || item.type,
  }
}
