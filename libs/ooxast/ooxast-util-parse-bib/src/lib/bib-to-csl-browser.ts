import { Data as CSL } from 'csl-json'
import { callAnystyleApi } from './anystyle-api'
import { findBib } from './find-bib'
import { fixBib } from './fix-csl'
import { Options } from './ooxast-util-parse-bib'
import { Node } from 'ooxast'

export async function bibToCSLBrowser(
  tree: Node,
  options: Omit<Options, 'anystylePath'> & { apiUrl: string }
): Promise<CSL[]> {
  const { apiUrl, apiParams, headers } = options
  const bib = findBib(tree)
  if (!bib?.length) return []
  const refs = bib.join('\n')

  const parsedBib = await callAnystyleApi(refs, apiUrl, apiParams, headers)
  return fixBib(parsedBib)
}
