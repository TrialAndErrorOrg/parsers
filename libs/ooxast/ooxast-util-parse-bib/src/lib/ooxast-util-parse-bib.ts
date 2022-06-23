import { Node } from 'ooxast'
import { consolidate } from 'csl-consolidate'
import { bibToCSL } from './bib-to-csl-node'
export interface Options {
  apiUrl?: string
  apiParams?: { param: string }
  headers?: { header: string }
  anyStylePath?: string
  mailto?: string
  overrideId?: boolean
}

export async function parseBib(tree: Node, options: Options) {
  const csl = await bibToCSL(tree, options)

  if (!csl) return

  if (!options.mailto) {
    return csl
  }

  return await consolidate(csl, { mailto: options.mailto })
}
