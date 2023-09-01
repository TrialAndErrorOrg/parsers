import { isElement, Names } from 'jast-types'
import { J, Parents, Name, Node, TexastContent, Text } from '../types.js'
import { wrap } from '../util/wrap.js'
import { wrapChildren } from '../util/wrap-children.js'
import { wrapCommandArg } from '../util/wrap-command-arg.js'

const typeEnvArgMap: {
  [key: string]: {
    name?: string
    first?: Names[]
    required?: Names[][]
    optional?: Names[]
    empty?: boolean
  }
} = {}

export function environment(j: J, node: Parents) {
  // if (!typeCommandMap[node.type]) {
  //   return j(node, 'paragraph', all(j, node))
  // }

  const mapEntry = typeEnvArgMap[node.name]
  const envName = mapEntry?.name || node.name

  if (mapEntry?.empty) {
    return j(node, 'environment', { name: envName }, wrapChildren(j, node))
  }

  const things = node.children.reduce(
    (
      acc: {
        req: Parents['children']
        opt: Parents['children']
        children: Text[]
      },
      child,
    ) => {
      if (isElement(child)) {
        if (mapEntry?.optional?.includes(child.name)) {
          // @ts-expect-error bruh
          acc.opt = [child]
          return acc
        }
        mapEntry?.required?.forEach((arg, i) => {
          if (arg.includes(child.name)) {
            // @ts-expect-error bruh
            acc.req.push(child)
            return acc
          }
        })
      }

      if (child.type === 'text') {
        acc.children.push(child)
      }

      return acc
    },

    { req: [], opt: [], children: [] },
  )

  return j(node, 'environment', { name: envName }, [
    // @ts-expect-error bruh
    wrapCommandArg(j, things.opt, true),
    // @ts-expect-error bruh
    wrapCommandArg(j, things.req),
    ...wrap('children' in things ? things.children : [things]),
  ])
}
