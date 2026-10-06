import type { BlockContent, FunctionCall, PhrasingContent } from 'typast-builder/doc'
import type { Element, Root } from 'xast'
import { blocks } from './blocks.js'
import type { State } from './types.js'
import { attr, findAll } from './util.js'

/** Index the `w:footnote`/`w:endnote` elements of a notes part by id. */
export function indexNotes(tree: Root | undefined): Map<string, Element> {
  const map = new Map<string, Element>()
  if (!tree) return map
  for (const note of findAll(tree, (el) => el.name === 'w:footnote' || el.name === 'w:endnote')) {
    const type = attr(note, 'w:type')
    if (type === 'separator' || type === 'continuationSeparator' || type === 'continuationNotice')
      continue
    const id = attr(note, 'w:id')
    if (id) map.set(id, note)
  }
  return map
}

/** `#footnote[…]` for a footnote/endnote reference. Endnotes become footnotes too. */
export function noteContent(
  state: State,
  kind: 'footnotes' | 'endnotes',
  id: string | undefined,
): FunctionCall | undefined {
  if (!id) return undefined
  const note = state.notes[kind].get(id)
  if (!note) {
    state.warn(`${kind === 'footnotes' ? 'Footnote' : 'Endnote'} ${id} not found`)
    return undefined
  }

  // notes have their own relations and field state
  const saved = {
    relations: state.relations,
    fields: state.fields,
    out: state.out,
  }
  state.relations = state.rels[kind]
  state.fields = []
  const content = blocks(
    state,
    note.children.filter((c): c is Element => c.type === 'element'),
    'note',
  )
  state.relations = saved.relations
  state.fields = saved.fields
  state.out = saved.out

  if (!content.length) return undefined
  // A footnote is set as one paragraph (the template puts the mark and the body in one `par`,
  // like LaTeX's footmisc), where a paragraph break would be dropped with a warning; separate
  // the paragraphs of a multi-paragraph note with line breaks instead.
  const body: Array<BlockContent | PhrasingContent> = content.every((c) => c.type === 'paragraph')
    ? content.flatMap((c, i) => [
        ...(i > 0 ? [{ type: 'linebreak' } as PhrasingContent] : []),
        ...(c.children as PhrasingContent[]),
      ])
    : content
  return {
    type: 'call',
    name: 'footnote',
    args: [],
    body: [body as PhrasingContent[]],
  }
}
