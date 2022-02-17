import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { Data as CSL } from 'csl-json'
import RateLimit from '@hokify/axios-rate-limit'
import { tryCatchPromise } from '@jote/utils'
import similarity from 'similarity'
import { crossrefToCsl } from 'crossref-to-csl'
import { CrossrefJSON, CrossrefResponse } from 'crossref-json'
import { PickByValue } from 'utility-types/dist/mapped-types'
/**
 * Try to resolve a list of CSL data with crossref metadata
 */
export async function getCrossRefMetadata(
  data: CSL[],
  options: {
    mailto: string
    // name: string
    //  accept?: string
  }
) {
  const http = RateLimit(axios.create(), {
    maxRequests: 20,
    perMilliseconds: 1000,
    maxRPS: 20,
  })
  const crossRefResponses: (Promise<AxiosResponse<any, any>> | CSL)[] = []
  // this is a bad solution because i cannot work with promises
  const types: string[] = []
  for (const ref of data) {
    const { DOI, author, issued, title, type } = ref
    if (DOI) {
      const res = http.get(
        DOI.replace(
          /(https:\/\/(dx\.)?doi\.org\/)?(.*?)/,
          'https://doi.org/$3'
        ),
        {
          headers: {
            Accept: 'application/vnd.citationstyles.csl+json',
          },
          params: { mailto: options.mailto },
        }
      )
      crossRefResponses.push(Promise.resolve(res))
      types.push('doi')
      continue
    }
    if (!type?.includes('article')) {
      crossRefResponses.push(ref)
      types.push('anystyle')
      continue
    }
    const res = http.get('https://api.crossref.org/works', {
      headers: {
        //Accept: 'application/vnd.citationstyles.csl+json;q=1.0',
      },
      params: {
        ['query.bibliographic']: `${
          typeof issued === 'string'
            ? issued
            : issued?.['date-parts']?.[0]?.join('-')
        } ${author?.[0]?.family || ''} ${title || ''}`,
        rows: 2,
        mailto: options.mailto,
      },
    })
    crossRefResponses.push(Promise.resolve(res))
    types.push('crossref')
    console.log(res)
  }

  const [resolvedPromises, error] = await tryCatchPromise(
    Promise.all(crossRefResponses as any)
  )
  if (error) {
    console.error(error)
    throw new Error(error)
  }
  const datas = resolvedPromises.map((res: any, index: number) => {
    try {
      return consolidate(data[index], res.data, types[index])
    } catch (e) {
      console.error(e)
      return data[index]
    }
  })
  return datas
}

function consolidate(ref: CSL, res: CrossrefResponse, type: string) {
  if (type === 'anystyle') {
    return ref
  }

  if (type === 'doi') {
    return { ...ref, ...res }
  }

  const message = res.message.items
  if (message.length === 0) {
    return ref
  }

  return overrideCrossref(ref, message[0], message[1])
}

function overrideCrossref(ref: CSL, res1: CrossrefJSON, res2?: CrossrefJSON) {
  const csl1 = crossrefToCsl(res1)
  const sim1 = checkSimilarity(ref, csl1)

  if (!res2) {
    return determineCanonical(ref, csl1, sim1)
  }

  const csl2 = crossrefToCsl(res2)
  const sim2 = checkSimilarity(ref, csl2)

  if (sim1 > sim2) {
    return determineCanonical(ref, csl1, sim1)
  }

  return determineCanonical(ref, csl2, sim2)
}

/**
 * Basically if two things completely match but one doesn't, it's good.
 */
function determineCanonical(ref: CSL, csl: CSL, sim: number) {
  if (sim > 0.6) {
    return { ...ref, ...csl }
  }
  return ref
}

function checkSimilarity(ref: CSL, csl: CSL) {
  const titleSim = simMaybe('title', [ref, csl])
  const authorSim = simMaybeIndex('author', [ref, csl], 0)
  const yearSim = dateSim(ref, csl)

  return Math.sqrt(titleSim ** 2 + authorSim ** 2 + yearSim ** 2) / 3
}

function dateSim(ref: CSL, csl: CSL) {
  const year1 = parseInt(`${ref['issued']?.['date-parts']?.[0]?.[0] || 0}`)
  const year2 = parseInt(`${csl['issued']?.['date-parts']?.[0]?.[0] || 0}`)
  if (!year1) {
    if (!ref['issued']) return 1

    const year1 = parseInt(`${ref['issued']}`)
    return simNum(year1, year2, 15)
  }
  return simNum(year1, year2, 15)
}
/**
 * Shitty formula to determine how close two years are.
 * Falls off quadratically, because I feel like 2012 and 2014 are
 * kinda close but 2012 and 2001 aren't.
 */
function simNum(num1: number, num2: number, tolerance: number = 15) {
  if (Math.abs(num1 - num2) > tolerance) return 0
  return (1 - Math.abs(num1 - num2) / tolerance) ^ 2
}

function simMaybeString(string1?: any, string2?: any) {
  if (!string1 && !string2) return 1
  if (!string1) return 1
  if (!string2) return 0
  return similarity(`${string1}`, `${string2}`)
}
function simMaybe(key: keyof CSL, csls: [CSL, CSL]): number {
  if (!csls[0][key] && !csls[1][key]) return 0
  if (!csls[0][key]) return 1
  if (!csls[1][key]) return 0

  return similarity(`${csls[0][key]!}`, `${csls[1][key]}`)
}

function simMaybeIndex(
  key: keyof PickByValue<CSL, any[] | undefined>,
  csls: [CSL, CSL],
  index: number
): number {
  if (!csls[0][key]?.[index] && !csls[1][key]?.[index]) return 1
  if (!csls[0][key]?.[index]) return 1
  if (!csls[1][key]?.[index]) return 0

  return similarity(`${csls[0][key]![index]}`, `${csls[1][key]![index]}`)
}
