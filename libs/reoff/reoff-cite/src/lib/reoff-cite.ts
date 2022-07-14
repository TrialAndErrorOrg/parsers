import { Root } from 'ooxast'
import { VFile } from 'vfile'
import { Data as CSL } from 'csl-json'
import { findCitations } from 'ooxast-util-citations'

export default function reoffCite(
  options: {
    bibliography?: CSL[]
    type: 'mendeley' | 'word' | 'citavi' | 'zotero' | 'endnote'
  } = { type: 'zotero' }
) {
  return (tree: Root, vfile: VFile) => {
    console.log(vfile.data.bibliography)
    return findCitations(tree, vfile, {
      bibliography: options.bibliography || (vfile.data.bibliography as CSL[]),
      type: options.type,
    })
  }
}
