import { isElement } from 'jast'
import { CommandArg, CommandArgOpt, EnvironmentContent } from 'texast'
import { all } from '../all'
import { J, Parents, TagName, Node } from '../types'
import { wrap } from '../util/wrap'
import { wrapChildren } from '../util/wrap-children'
import { wrapCommandArg } from '../util/wrap-command-arg'

const typeEnvArgMap: {
  [key: string]: {
    name?: string
    first?: TagName[]
    required?: TagName[][]
    optional?: TagName[]
    empty?: boolean
  }
} = {
  list: { name: 'itemize' },
}

export function environment(j: J, node: Parents) {
  // if (!typeCommandMap[node.type]) {
  //   return j(node, 'paragraph', all(j, node))
  // }

  const mapEntry = typeEnvArgMap[node.tagName]
  const envName = mapEntry?.name || node.tagName

  if (mapEntry?.empty) {
    return j(node, 'environment', { name: envName }, wrapChildren(j, node))
  }

  const things = node.children
    // @ts-ignore dude just chill
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
          if (mapEntry?.optional?.includes(child.tagName)) {
            acc.opt = child
            return acc
          }
          mapEntry?.required?.forEach((arg, i) => {
            if (arg.includes(child.tagName)) {
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
