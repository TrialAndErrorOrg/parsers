import { CommandArg, CommandArgOpt } from 'texast'
import { all } from '../all.js'
import { one } from '../one.js'
import { J, Node, Parents, Root, TagName, Text } from '../types.js'
import { wrap } from '../util/wrap.js'

const typeCommandMap: {
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

export function command(j: J, node: Parents) {
  // if (!typeCommandMap[node.type]) {
  //   return j(node, 'paragraph', all(j, node))
  // }

  const mapEntry = typeCommandMap[node.tagName]
  const commandName = mapEntry?.name || node.tagName

  if (mapEntry?.empty) {
    return j(node, 'command', { name: commandName }, [])
  }
  const firstCommandArg = j(
    node,
    'commandArg',
    { optional: false },
    wrap(
      node?.children
        // @ts-expect-error dude just chill
        ?.filter(
          (child: Node) =>
            mapEntry?.first?.includes(
              // @ts-expect-error dude just chill
              child.tagName
            ) || child?.type === 'text'
        )
    )
  )

  const requiredCommandArgs: CommandArg[] = node?.children
    // @ts-expect-error dude just chill
    ?.filter((child: Node) =>
      mapEntry?.required?.includes(
        // @ts-expect-error dude just chill
        child.tagName
      )
    )
    .map((child: Node) => {
      console.log(child)
      return j(child, 'commandArg', { optional: false }, all(j, child))
    })

  const optionalCommandArgs: CommandArgOpt[] = node?.children
    // @ts-expect-error dude just chill
    ?.filter((child: Parents) => mapEntry?.optional?.includes(child.tagName))
    .map((child: Node) =>
      j(child, 'commandArg', { optional: true }, all(j, child))
    )

  console.log(requiredCommandArgs)
  console.log(node)
  return j(node, 'command', { name: commandName }, [
    firstCommandArg,
    ...requiredCommandArgs,
    ...optionalCommandArgs,
  ])
}
