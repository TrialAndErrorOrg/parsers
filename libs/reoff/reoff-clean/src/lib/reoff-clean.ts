import { Root } from 'ooxast'
import { ooxastUtilRemoveRsid, Options } from 'ooxast-util-remove-rsid'
import { Plugin } from 'unified'

export function reoffClean(
  options: Options = {
    rPrRemoveList: [
      'w:lang',
      'w:shd',
      'w:szCs',
      'w:sz',
      'w:kern',
      'w:rFonts',
      'w:noProof',
      'w:color',
    ],
  }
): ReturnType<Plugin<[Options?] | void[], Root, Root>> {
  return (tree: Root) => {
    return ooxastUtilRemoveRsid(tree as Root, options) as Root
  }
}
