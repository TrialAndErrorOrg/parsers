import { Root } from 'ooxast'
import { ooxastUtilRemoveRsid, Options } from 'ooxast-util-remove-rsid'
import { Plugin } from 'unified'

export function reoffClean(
  options: Options = {}
): ReturnType<Plugin<[Options?] | void[], Root, Root>> {
  return (tree: Root) => {
    return ooxastUtilRemoveRsid(tree as Root, options) as Root
  }
}
