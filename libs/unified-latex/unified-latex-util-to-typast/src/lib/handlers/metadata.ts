import type * as Ast from '@unified-latex/unified-latex-types'
import type { MacroHandler } from '../types.js'
import { args, lastArg, plainText } from '../util.js'

/** Class macros whose argument is stored and later fed into `jote-article.with(…)`. */
export const METADATA_FIELDS = [
  'jotetitle',
  'footertitle',
  'runningauthor',
  'jname',
  'jyear',
  'jvolume',
  'jissue',
  'jpages',
  'jwebsite',
  'jlogo',
  'paperdoi',
  'paperreceived',
  'paperrevised',
  'paperaccepted',
  'paperpublished',
  'paperpublisheddate',
  'paperissued',
  'papereditor',
  'papertype',
  'paperfield',
  'corremail',
  'corraddress',
  'abstracttext',
  'keywordsabstract',
  'funding',
  'fundinginfo',
  'acknowledgments',
  'contributions',
  'interests',
  'specialissue',
  'rgainfo',
  'articletype',
  'ogauthor',
  'prround',
  'pubpub',
  'companionurl',
  'companiontitle',
  'companionyear',
  'companionauthor',
  'companionabstract',
  'companionkey',
  'subtitle',
  'rolling',
  'heightabstract',
  'widthaffil',
  'title',
] as const

const store: MacroHandler = (node, state) => {
  state.meta.fields.set(node.content, lastArg(node))
  return undefined
}

/** Find `\orcid{…}` anywhere inside an author argument. */
function findOrcid(nodes: Ast.Node[]): string | undefined {
  for (const node of nodes) {
    if (node.type === 'macro' && node.content === 'orcid') return plainText(lastArg(node)).trim()
    if ('content' in node && Array.isArray(node.content)) {
      const found = findOrcid(node.content as Ast.Node[])
      if (found) return found
    }
    if (node.type === 'macro' && node.args) {
      for (const a of node.args) {
        const found = findOrcid(a.content)
        if (found) return found
      }
    }
  }
  return undefined
}

/** Author name text without `\orcid`, footnote markers etc. */
function authorName(nodes: Ast.Node[]): string {
  const strip = (list: Ast.Node[]): Ast.Node[] =>
    list
      .filter(
        (n) =>
          !(
            n.type === 'macro' &&
            ['orcid', 'authfn', 'thanks', 'footnote', 'footnotemark', 'textsuperscript'].includes(
              n.content,
            )
          ),
      )
      .map((n) => {
        if (n.type === 'macro' && n.args)
          return { ...n, args: n.args.map((a) => ({ ...a, content: strip(a.content) })) }
        if (n.type === 'group') return { ...n, content: strip(n.content) }
        return n
      })
  return plainText(strip(nodes))
    .replace(/\u00A0/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function indices(nodes: Ast.Node[] | null): number[] {
  return plainText(nodes)
    .split(',')
    .map((s) => Number(s.trim()))
    .filter((n) => Number.isFinite(n) && n > 0)
}

export const metadataMacros: Record<string, MacroHandler> = {
  ...Object.fromEntries(METADATA_FIELDS.map((f) => [f, store])),
  author: (node, state) => {
    const a = args(node)
    const content = lastArg(node)
    const name = authorName(content)
    if (!name) return undefined
    state.meta.authors.push({ name, orcid: findOrcid(content), affiliations: indices(a[0]) })
    return undefined
  },
  affil: (node, state) => {
    const a = args(node)
    const index = indices(a[0])[0] ?? state.meta.affiliations.size + 1
    state.meta.affiliations.set(index, lastArg(node))
    return undefined
  },
}
