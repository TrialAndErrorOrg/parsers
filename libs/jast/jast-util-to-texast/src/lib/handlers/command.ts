import { Names } from 'jast-types'
import { CommandArg, CommandArgOpt } from 'texast'
import { all } from '../all'
import { one } from '../one'
import { J, Node, Parent, Parents, Root, Text } from '../types'
import { wrap } from '../util/wrap'
import { wrapCommandArg } from '../util/wrap-command-arg'

const typeCommandMap: {
  [key: string]: {
    name?: string
    first?: Names[]
    required?: Names[][]
    optional?: Names[]
    empty?: boolean
    needsNewline?: boolean
  }
} = {
  title: { name: 'section', needsNewline: true },
  'article-title': { name: 'title', needsNewline: true },
  bold: { name: 'textbf' },
  caption: { name: 'caption', first: ['title'], needsNewline: true },
  label: { name: 'label', needsNewline: true },
  documentclass: { needsNewline: true },
  usepackage: { needsNewline: true },
  author: { needsNewline: true },
}

export function command(j: J, node: Parents, parent: Parent) {
  // if (!typeCommandMap[node.type]) {
  //   return j(node, 'paragraph', all(j, node))
  // }

  const mapEntry = typeCommandMap[node.name]
  const commandName = mapEntry?.name || node.name

  if (mapEntry?.empty) {
    return j(node, 'command', { name: commandName }, [])
  }
  const firstCommandArg = wrapCommandArg(
    j,
    node?.children
      // @ts-expect-error dude just chill
      ?.filter(
        (child: Node) =>
          mapEntry?.first?.includes(
            // @ts-expect-error dude just chill
            child.name
          ) || child?.type === 'text'
      )
  )

  const requiredCommandArgs: CommandArg[] = node?.children
    // @ts-expect-error dude just chill
    ?.filter((child: Node) =>
      mapEntry?.required?.includes(
        // @ts-expect-error dude just chill
        child.name
      )
    )
    .map((child: any) => {
      return wrapCommandArg(j, [child])
    })

  const optionalCommandArgs: CommandArgOpt[] = node?.children
    // @ts-expect-error dude just chill
    ?.filter((child: Parents) => mapEntry?.optional?.includes(child.name))
    .map((child: any) => wrapCommandArg(j, [child], true))

  return j(node, 'command', { name: commandName }, [
    firstCommandArg,
    ...requiredCommandArgs,
    ...optionalCommandArgs,
    ...(mapEntry.needsNewline ? [{ type: 'text', value: '\n' } as Text] : []),
  ])
}
