import { CommandArg, CommandArgOpt } from 'texast'
import { all } from '../all'
import { one } from '../one'
import { J, Node, Parents, Root, TagName, Text } from '../types'
import { wrap } from '../util/wrap'

const typeCommandMap: {
  [key: string]: {
    name?: string
    first?: TagName[]
    required?: TagName[][]
    optional?: TagName[]
    empty?: boolean
  }
} = {
  title: { name: 'section' },
  'article-title': {},
  listItem: {},
  bold: { name: 'textbf' },
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
        // @ts-ignore dude just chill
        ?.filter(
          (child: Node) =>
            mapEntry?.first?.includes(
              // @ts-ignore dude just chill
              child.tagName
            ) || child?.type === 'text'
        )
    )
  )

  const requiredCommandArgs: CommandArg[] = node?.children
    // @ts-ignore dude just chill
    ?.filter((child: Node) =>
      mapEntry?.required?.includes(
        // @ts-ignore dude just chill
        child.tagName
      )
    )
    .map((child: Node) => {
      console.log(child)
      return j(child, 'commandArg', { optional: false }, all(j, child))
    })

  const optionalCommandArgs: CommandArgOpt[] = node?.children
    // @ts-ignore dude just chill
    ?.filter((child: Parents) => mapEntry?.optional?.includes(child.tagName))
    .map((child: Node) =>
      j(child, 'commandArg', { optional: true }, all(j, child))
    )

  return j(node, 'command', { name: commandName }, [
    firstCommandArg,
    ...requiredCommandArgs,
    ...optionalCommandArgs,
  ])
}
