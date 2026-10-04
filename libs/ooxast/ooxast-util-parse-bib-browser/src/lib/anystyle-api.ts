import flatryModule from 'flatry'
import axios from 'axios'
import { Data as CSL } from 'csl-json'

/** CommonJS modules with `exports.default`: Node's ESM loader hands us `module.exports`, bundlers `exports.default`. */
function interopDefault<T>(mod: T): T extends { default: infer D } ? D : T {
  return (mod && typeof mod === 'object' && 'default' in mod ? mod.default : mod) as never
}

const flatry = interopDefault(flatryModule)

export async function callAnystyleApi(
  refs: string,
  apiUrl: string,
  params?: { [param: string]: string },
  headers?: { [key: string]: string },
): Promise<CSL[]> {
  const [error, response] = await flatry(
    axios.post(apiUrl, refs, {
      headers: {
        'Content-type': 'text/plain; charset=utf-8',
        ...headers,
      },
      params,
    }),
  )
  if (error) {
    return [{ error }] as any
  }
  return response?.data ?? []
}
