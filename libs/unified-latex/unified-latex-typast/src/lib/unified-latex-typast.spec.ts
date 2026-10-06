import { describe, it, expect } from 'vitest'
import type { Root as LatexRoot } from '@unified-latex/unified-latex-types'
import type { Root } from 'typast'
import { toTypst } from 'typast-util-to-typst'
import { unified, type Plugin } from 'unified'
import { VFile } from 'vfile'
import { parseLatex } from 'unified-latex-util-to-typast'
import unifiedLatexTypast from './unified-latex-typast.js'

const latexParse: Plugin<[], string, LatexRoot> = function () {
  this.parser = (document) => parseLatex(document)
}
const parse = () => unified().use(latexParse)

describe('unifiedLatexTypast', () => {
  it('mutates a unified-latex tree into typast', async () => {
    const processor = parse().use(unifiedLatexTypast, { document: false })
    const tree = (await processor.run(processor.parse('Hello \\emph{world}'))) as unknown as Root
    expect(tree.type).toBe('root')
    expect(toTypst(tree).trim()).toBe('Hello _world_')
  })

  it('passes options through (template path)', async () => {
    const processor = parse().use(unifiedLatexTypast, { templatePath: '@local/jote-article:0.1.0' })
    const tree = (await processor.run(
      processor.parse(
        '\\documentclass[empirical]{jote-new-article}\\begin{document}x\\end{document}',
      ),
    )) as unknown as Root
    expect(tree.children[0]).toEqual({
      type: 'import',
      source: '@local/jote-article:0.1.0',
      items: '*',
    })
  })

  it('bridges into another processor', async () => {
    let seen: Root | undefined
    const destination = unified().use(() => (tree: unknown) => {
      seen = tree as Root
    })
    const processor = parse().use(unifiedLatexTypast, destination, { document: false })
    await processor.run(processor.parse('\\textbf{x}'))
    expect(seen && toTypst(seen).trim()).toBe('*x*')
  })

  it('reports unknown macros as file messages', async () => {
    const processor = parse().use(unifiedLatexTypast, { document: false })
    const f = new VFile('\\mystery{a}')
    await processor.run(processor.parse(f), f)
    expect(f.messages.map((m) => m.reason)).toContain('Unknown \\mystery: kept its text content')
  })
})
