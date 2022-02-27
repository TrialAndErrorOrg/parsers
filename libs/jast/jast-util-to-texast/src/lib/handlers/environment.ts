import { isElement, Names } from 'jast-types'
import { J, Parents, Name, Node } from '../types'
import { wrap } from '../util/wrap'
import { wrapChildren } from '../util/wrap-children'
import { wrapCommandArg } from '../util/wrap-command-arg'

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

  const things = node.children
    // @ts-expect-error dude just chill
    .reduce(
      (
        acc: {
          req: Node[]
          opt: Node
          children: Node[]
        },
        child: Node
      ) => {
        if (isElement(child)) {
          if (mapEntry?.optional?.includes(child.name)) {
            acc.opt = child
            return acc
          }
          mapEntry?.required?.forEach((arg, i) => {
            if (arg.includes(child.name)) {
              acc.req.push(child)
              return acc
            }
          })
        }
        acc.children.push(child)
        return acc
      },

      { req: [], opt: [], children: [] }
    )

  return j(node, 'environment', { name: envName }, [
    wrapCommandArg(j, [things.opt], true),
    wrapCommandArg(j, things.req),
    ...wrap(things.children),
  ])
}
