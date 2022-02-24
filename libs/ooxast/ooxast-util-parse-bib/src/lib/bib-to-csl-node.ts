import { callAnystyleApi } from './anystyle-api'
import { findBib } from './find-bib'
import { fixBib } from './fix-csl'
import { Options } from './ooxast-util-parse-bib'
import { Data as CSL } from 'csl-json'
import { Node } from 'ooxast'

export async function bibToCSL(tree: Node, options: Options): Promise<CSL[]> {
  const { apiUrl, apiParams, anyStylePath, headers } = options
  const bib = findBib(tree)
  if (!bib?.length) return []
  const refs = bib.join('\n')

  if (!apiUrl || (!apiUrl && typeof window !== 'undefined')) {
    const { callAnystyleCLI } = await import('./anystyle-cli')
    const parsedBib = await callAnystyleCLI(refs, anyStylePath)
    return fixBib(parsedBib)
  }

  const parsedBib = await callAnystyleApi(refs, apiUrl, apiParams, headers)
  return fixBib(parsedBib)
}
