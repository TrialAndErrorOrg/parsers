import { tryCatchPromise } from 'misc'
import axios from 'axios'
import { Data as CSL } from 'csl-json'

export async function callAnystyleApi(
  refs: string,
  apiUrl: string,
  params?: { [param: string]: string },
  headers?: { [key: string]: string }
): Promise<CSL[]> {
  const [response, error] = await tryCatchPromise(
    axios.post(apiUrl, refs, {
      headers: {
        'Content-type': 'text/plain; charset=utf-8',
        ...headers,
      },
      params,
    })
  )
  if (error) {
    return [{ error }] as any
  }
  return response?.data ?? []
}
