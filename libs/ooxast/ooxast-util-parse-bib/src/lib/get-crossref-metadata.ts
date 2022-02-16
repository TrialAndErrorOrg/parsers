import axios, { AxiosPromise, AxiosResponse } from 'axios'
import { Data as CSL } from 'csl-json'
import RateLimit from '@hokify/axios-rate-limit'
/**
 * Try to resolve a list of CSL data with crossref metadata
 */
export async function getCrossRefMetadata(
  data: CSL[],
  options: {
    mailto: string
    // name: string
    accept?: string
  }
) {
  const http = RateLimit(axios.create(), {
    maxRequests: 20,
    perMilliseconds: 1000,
    maxRPS: 50,
  })
  const crossRefResponses: Promise<AxiosResponse<any, any>>[] = []
  for (const ref of data) {
    const { author, issued, title } = ref
    const res = http.get('https://api.crossref.org/works', {
      headers: {
        Accept: 'application/vnd.citationstyles.csl+json;q=1.0',
      },
      params: {
        mailto: options.mailto,
      },
    })
    crossRefResponses.push(res)
  }
  const resolvedPromises = await Promise.all(crossRefResponses)
  return resolvedPromises.map((res) => res.data)
}
