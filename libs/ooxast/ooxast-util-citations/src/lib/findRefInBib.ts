import { dateSim } from 'csl-consolidate'
import { CitationItem } from './types'
import similarity from 'similarity'
import { Data as CSL } from 'csl-json'

export function findRef(
  citeItem: CitationItem,
  bibliography: CSL[]
): CitationItem {
  // we'll take it if it has 90% match with the author and the year, except if there are multiple thiingies
  const cite = citeItem.itemData
  const gottemInOne = bibliography.find(
    (bib) => bib.id && (bib.id === cite.id || bib.id === citeItem.id)
  )
  console.dir(citeItem, { depth: null })
  console.dir(gottemInOne, { depth: null })
  if (gottemInOne) {
    citeItem.itemData = gottemInOne
    return citeItem
  }

  if (!cite.author || !cite.issued) return citeItem
  let lastDig = alphaToNum(citeItem.id.slice(-1))
  let theOne: CSL | null = null

  for (const csl of bibliography) {
    if (!csl.author) continue

    const authsim =
      cite.author.reduce((acc, curr, index) => {
        if (!csl?.author?.[index]) return acc

        acc += similarity(
          curr?.family || '',
          csl?.author?.[index]?.family || 'aipugbbrwshotnat'
        )

        return acc
      }, 0) / (cite?.author?.length || 100)

    const yearsim = dateSim(cite, csl)

    if ((yearsim + authsim) / 2 > 1.6) {
      if (lastDig !== 0) {
        lastDig--
        continue
      }

      theOne = csl
      break
    }
  }
  if (theOne) citeItem.itemData = theOne

  return citeItem
}

function alphaToNum(a: string) {
  const anum: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }
  return anum[a] || 0
}
