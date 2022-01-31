import { all } from '../all.js'
import { J, Node, Root, Text } from '../types.js'

type TagNamesMap<T> = T extends { tagName: string } ? Pick<T, 'tagName'> : never
type TagNames = TagNamesMap<Node>
const typeCommandMap: {
  [key: string]: {
    name: string
    required?: TagNames[]
    optional?: TagNames[]
  }
} = {}

type Parents = Extract<Exclude<Node, Text | Root>, { children: any[] }>

export function command(j: J, node: Parents) {
  // if (!typeCommandMap[node.type]) {
  //   return j(node, 'paragraph', all(j, node))
  // }

  const mapEntry = typeCommandMap[node.tagName]

  const requiredCommandArgs = node?.children
    // @ts-expect-error dude just chill
    ?.filter((child: Parents) =>
      mapEntry?.required?.includes(
        // @ts-expect-error dude just chill
        child.tagName
      )
    )
    .map((child: Node) =>
      j(child, 'commandArg', { optional: false }, all(j, child))
    )

  const optionalCommandArgs = node?.children
    // @ts-expect-error dude just chill
    ?.filter((child: Parents) =>
      mapEntry?.optional?.includes(
        // @ts-expect-error dude just chill
        child.tagName
      )
    )
    .map((child: Node) =>
      j(child, 'commandArg', { optional: true }, all(j, child))
    )

  return j(node, 'command', { name: mapEntry?.name || node.tagName })
}
