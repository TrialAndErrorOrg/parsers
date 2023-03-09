import { Node } from 'ooxast'
import { consolidate } from 'csl-consolidate'
import { bibToCSLBrowser } from './bib-to-csl-browser.js'
export interface Options {
  apiUrl: string
  apiParams?: { param: string }
  headers?: { header: string }
  mailto?: string
  overrideId?: boolean
}

export async function parseBib(tree: Node, options: Options) {
  const csl = await bibToCSLBrowser(tree, options)
  if (!csl) return
  if (!options.mailto) {
    return csl
  }

  return await consolidate(csl, { mailto: options.mailto })
}
