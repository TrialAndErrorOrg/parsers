// based on https://github.com/syntax-tree/hast-util-to-mdast/blob/main/lib/handlers/em

import { Article, Parent, TagHavers, Xref } from 'jjast'
import { Command } from 'texast'
import { all } from '../all'
import { J, Node, Root } from '../types'
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
    fn: 'fn',
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

  // TODO: [rejour-rehype/citations] make checks for the kind of citations used.
  switch (node.attributes.refType) {
    case 'bibr': {
      return j(node, 'command', { name: 'autocite' }, [
        {
          type: 'commandArg',
          children: [
            {
              type: 'text',
              value: node.children
                .map((node) => {
                  //@ts-ignore
                  const n = node.value.replace(/[\[\], ]/g, '')
                  return n ? `bib${n}` : undefined
                })
                .filter((n) => !!n)
                .join(','),
            },
          ],
        },
      ])
    }
    case 'fig': {
      return j(node, 'command', { name: 'autocite' }, [
        {
          type: 'commandArg',
          children: [
            {
              type: 'text',
              //@ts-expect-error
              value: 'bib' + node.children[0]?.value?.replace(/[\[\]]/g, ''),
            },
          ],
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
