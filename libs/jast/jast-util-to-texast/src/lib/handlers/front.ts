// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers } from 'jast-types'
import { all } from '../all'
import { J, Node, Root } from '../types'
import { wrapCommandArg } from '../util/wrap-command-arg'
import { wrap } from '../util/wrap'
import { CommandArg } from 'texast'

export function front(j: J, node: Root) {
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
            children: [{ type: 'text', value: j.documentClass.name }],
          },
          ...(j.documentClass.options
            ? [
                {
                  type: 'commandArg',
                  optional: true,
                  children: [
                    { type: 'text', value: j.documentClass.options.join(', ') },
                  ],
                } as CommandArg,
              ]
            : []),
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
      { type: 'text', value: '\n' },
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
      {
        type: 'command',
        name: 'usepackage',
        children: [
          {
            type: 'commandArg',
            optional: false,
            children: [{ type: 'text', value: 'graphicx' }],
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
            optional: false,
            children: [{ type: 'text', value: 'hyperref' }],
          },
        ],
      },
      { type: 'text', value: '\n' },
      ...all(j, node),
    ])
  )
}
