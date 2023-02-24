import { isElement, Title } from 'jast-types'
import { CommandArg, CommandArgOpt, EnvironmentContent } from 'texast'
import { all } from '../all'
import { J, Parents, Name, Node } from '../types'
import { wrap } from '../util/wrap'
import { wrapChildren } from '../util/wrap-children'
import { wrapCommandArg } from '../util/wrap-command-arg'

export const sectionDepth = [
  'part',
  'chapter',
  'section',
  'subsection',
  'subsubsection',
  'paragraph',
  'subparagraph',
  'textbf',
]
export function sec(j: J, node: Parents) {
  let titleElement: Title | null = null

  const sectionArg = sectionDepth[(j.sectionDepth + 1) % sectionDepth.length]

  for (let i = 0; i < node?.children?.length || 0; i++) {
    const child = node?.children[i]
    if (isElement(child) && child.name === 'title') {
      node.children.splice(i, 1)
      titleElement = child
      break
    }
  }

  j.sectionDepth++
  const contents = all(j, node)
  j.sectionDepth--
  if (!titleElement) return contents

  contents.unshift({
    type: 'command',
    name: sectionArg,
    children: [
      {
        type: 'commandArg',
        optional: false,
        // TODO: [jast-util-to-texast] Figure out how to properly nest environments and commands
        // @ts-expect-error theres something wrong with this nesting
        children: all(j, titleElement),
      },
    ],
  })

  return wrap(contents)
}
