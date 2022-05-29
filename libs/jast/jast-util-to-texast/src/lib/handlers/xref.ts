// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Xref, Text } from 'jast-types'
import { CommandArg } from 'texast'
import { J } from '../types'
import { wrapCommandArg } from '../util/wrap-command-arg'

export function xref(j: J, node: Xref) {
  //  if (!article) {
  const refTypeMap = {
    bibr: 'cite',
    aff: 'ref',
    app: 'ref',
    bio: 'bio',
    default: 'ref',
    'author-notes': 'author-notes',
    award: 'award',
    'boxed-text': 'boxed-text',
    chem: 'chem',
    collab: 'collab',
    contrib: 'contrib',
    corresp: 'corresp',
    custom: 'custom',
    'disp-formula': 'eqref',
    fig: 'ref',
    fn: 'footnote',
    kwd: 'kwd',
    list: 'list',
    other: 'other',
    plate: 'plate',
    scheme: 'scheme',
    sec: 'ref',
    statement: 'statement',
    'supplementary-material': 'supplementary-material',
    table: 'ref',
    'table-fn': 'ref-fn',
  }

  // TODO: [rejour-rehype/citations] make citation parsing less hardcoded
  // Maybe add a new type to texast: citation.

  const labelToText: { [key: string]: string } = {
    page: 'pp.',
    appendix: 'App.',
  }

  // TODO: [rejour-rehype/citations] make checks for the kind of citations used.
  switch (node.attributes.refType) {
    case 'bibr': {
      const customType = node.attributes.customType

      // TODO: [rejour-relatex] make latex cite command setting more modular and customizable
      let command
      let pre
      let post
      if (customType) {
        const customData = JSON.parse(customType)
        const { prefix, infix, label, locator, mode, suffix } = customData

        const pref = (mode ? infix : prefix) || ''

        const suff = `${
          label && label !== 'none'
            ? `${labelToText[label] || label || 'pp.'} `
            : ''
        }${locator || ''}`
        command = mode ? 'textcite' : 'parencite'

        if (pref) pre = pref
        if (suff) post = suff
      }

      const optCommandArgs = createOptCiteArgs(pre, post)
      return j(
        node,
        'command',
        { name: command || j.citationAnalyzer(node) || 'autocite' },
        [
          ...optCommandArgs,
          {
            type: 'commandArg',
            children: [
              {
                type: 'text',
                value:
                  node.attributes.rid ||
                  node.children
                    .map((node) => {
                      //@ts-expect-error it is text, it has value
                      const n = node.value.replace(/[[\], ]/g, '')
                      return n ? `bib${n}` : undefined
                    })
                    .filter((n) => !!n)
                    .join(','),
              },
            ],
          },
        ]
      )
    }
    case 'fig': {
      return j(node, 'command', { name: 'autocite' }, [
        {
          type: 'commandArg',
          children: [
            {
              type: 'text',
              //@ts-expect-error It is text, it has value
              value: 'bib' + node.children[0]?.value?.replace(/[[\]]/g, ''),
            },
          ],
        },
      ])
    }
    case 'fn': {
      const fnContent = j.footnotes[
        // TODO: [rejour-relatex]: make footnote identification less arbitrary, like a counter or something
        // @ts-expect-error it is text, it has value
        parseInt(node.children?.[0]?.value?.replace(/[[\]]/g, '')) - 1
      ] as any
      return j(node, 'command', { name: 'footnote' }, [
        {
          type: 'commandArg',
          children:
            fnContent.type === 'paragraph' ? fnContent.children : [fnContent],
        },
      ])
    }
    default:
      return j(
        node,
        'command',
        { name: refTypeMap[node.attributes.refType || 'default'] || 'ref' },
        [wrapCommandArg(j, node.children)]
      )
  }
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { name: 'article' }, all(j, article)),
  // ])
}

function createOptCiteArgs(pre?: string, post?: string) {
  if (!pre && !post) return []
  if (!post) {
    return [
      {
        type: 'commandArg',
        optional: true,
        children: [
          {
            type: 'text',
            value: '',
          } as Text,
        ],
      } as CommandArg,
      {
        type: 'commandArg',
        optional: true,
        children: [
          {
            type: 'text',
            value: pre || '',
          } as Text,
        ],
      } as CommandArg,
    ]
  }

  return [
    {
      type: 'commandArg',
      optional: true,
      children: [
        {
          type: 'text',
          value: post || '',
        } as Text,
      ],
    } as CommandArg,
    {
      type: 'commandArg',
      optional: true,
      children: [
        {
          type: 'text',
          value: pre || '',
        } as Text,
      ],
    } as CommandArg,
  ]
}
