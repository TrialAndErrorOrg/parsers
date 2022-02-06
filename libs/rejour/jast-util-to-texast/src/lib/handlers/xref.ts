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

  switch (node.properties.refType) {
    case 'bibr': {
      return j(node, 'command', { name: 'cite' }, [
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
        { name: refTypeMap[node.properties.refType || 'default'] || 'ref' },
        [wrapCommandArg(j, node.children)]
      )
  }
  //  }

  // return j(article, 'root', [
  //   j(node, 'element', { tagName: 'article' }, all(j, article)),
  // ])
}
