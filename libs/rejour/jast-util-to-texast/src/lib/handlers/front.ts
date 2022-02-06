// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers } from 'jjast'
import { all } from '../all'
import { J, Node, Root } from '../types'
import { wrapCommandArg } from '../util/wrap-command-arg'
import { wrap } from '../util/wrap'

export function front(j: J, node: Root) {
  // const back = kids.find((child) => child?.tagName === 'back')
  return j(
    node,
    'preamble',
    wrap([
      {
        type: 'command',
        name: 'documentclass',
        children: [
          {
            type: 'commandArg',
            optional: false,
            children: [{ type: 'text', value: 'jote-article' }],
          },
        ],
      },
      { type: 'text', value: '\n' },
      {
        type: 'command',
        name: 'usepackage',
        children: [
          {
            type: 'commandArg',
            optional: true,
            children: [{ type: 'text', value: 'style=apa' }],
          },
          {
            type: 'commandArg',
            optional: false,
            children: [{ type: 'text', value: 'biblatex' }],
          },
        ],
      },
      {
        type: 'command',
        name: 'addbibresource',
        children: [
          {
            type: 'commandArg',
            optional: false,
            children: [{ type: 'text', value: 'bibliography.bib' }],
          },
        ],
      },
      { type: 'text', value: '\n' },
      ...all(j, node),
    ])
  )
}
