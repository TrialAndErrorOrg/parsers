import { Root } from 'ooxast'
import { VFile } from 'vfile'
import { Data as CSL } from 'csl-json'
import { findCitations, Options } from 'ooxast-util-citations'
import { Plugin } from 'unified'

export default function reoffCite(
  options: Options = { type: 'zotero' },
): ReturnType<Plugin<[Options | void | undefined], Root, Root>> {
  return (tree: Root, vfile: VFile) => {
    if (options.log !== false) {
      console.log(vfile.data.bibliography)
    }
    return findCitations(tree, vfile, {
      bibliography: options.bibliography || (vfile.data.bibliography as CSL[]),
      type: options.type,
      log: options.log,
    })
  }
}
