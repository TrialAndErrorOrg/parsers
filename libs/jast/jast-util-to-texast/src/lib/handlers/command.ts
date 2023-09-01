import { Names } from 'jast-types'
import { CommandArg, CommandArgOpt } from 'texast'
import { all } from '../all.js'
import { one } from '../one.js'
import { J, Node, Parent, Parents, Root, Text } from '../types.js'
import { wrap } from '../util/wrap.js'
import { wrapCommandArg } from '../util/wrap-command-arg.js'

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
    // @ts-expect-error dude just chill
    node?.children?.filter(
      (child: Node) =>
        ('name' in child && mapEntry?.first?.includes(child.name)) || child?.type === 'text',
    ),
  )

  const requiredCommandArgs: CommandArg[] = node?.children
    ?.filter((child: Node) =>
      mapEntry?.required?.includes(
        // @ts-expect-error dude just chill
        child.name,
      ),
    )
    .map((child: any) => {
      return wrapCommandArg(j, [child])
    })

  const optionalCommandArgs = node?.children
    ?.filter((child) => mapEntry?.optional?.some((opt) => 'name' in child && opt === child.name))
    .map((child: any) => wrapCommandArg(j, [child], true))

  return j(node, 'command', { name: commandName }, [
    firstCommandArg,
    ...requiredCommandArgs,
    ...optionalCommandArgs,
    ...(mapEntry?.needsNewline ? [{ type: 'text', value: '\n' } as Text] : []),
  ])
}
