import { isElement } from 'rejour'
import { CommandArg, CommandArgOpt, EnvironmentContent } from 'relatex'
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
  title: {},
}

export function environment(j: J, node: Parents) {
  // if (!typeCommandMap[node.type]) {
  //   return j(node, 'paragraph', all(j, node))
  // }

  const mapEntry = typeEnvArgMap[node.tagName]
  const envName = mapEntry?.name || node.tagName

  if (mapEntry.empty) {
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

  return j(node, 'enviroment', { name: envName }, [
    wrapCommandArg(
      j,
      { type: 'element', tagName: 'p', properties: {}, children: [things.opt] },
      true
    ),
    wrapCommandArg(j, {
      type: 'element',
      tagName: 'p',
      properties: {},
      children: things.req,
    }),
  ])
}
