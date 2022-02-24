import { Root } from 'ooxast'
import { VFile } from 'vfile'
import { Data as CSL } from 'CSL-JSON'
import { findCitations } from 'ooxast-util-citations'

export default function reoffCite(
  options: {
    bibliography?: CSL[]
    type: 'mendeley' | 'native' | 'citavi' | 'zotero' | 'endnote'
  } = { type: 'mendeley' }
) {
  return (tree: Root, vfile: VFile) => {
    findCitations(tree, {
      bibliography: options.bibliography || (vfile.data.bibliography as CSL[]),
      type: options.type,
    })
  }
}
