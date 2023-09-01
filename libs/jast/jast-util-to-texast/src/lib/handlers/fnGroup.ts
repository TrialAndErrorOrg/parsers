import { Fn, FnGroup } from 'jast-types'
import { all } from '../all.js'
import { J, TexastContent } from '../types.js'

export const fnGroup = (j: J, node: FnGroup) => {
  const children = node.children.filter<Fn>(
    (child): child is Fn => 'name' in child && child.name === 'fn',
  )

  const footnotes = children.map((child, idx) => {
    return [child.attributes.id ?? idx.toString(), all(j, child) ?? []] as const
  })

  return Object.fromEntries<TexastContent[]>(footnotes)
}
