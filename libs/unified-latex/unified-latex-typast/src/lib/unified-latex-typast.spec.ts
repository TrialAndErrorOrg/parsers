import { unifiedLatexFromString } from '@unified-latex/unified-latex-util-parse'
import type { Root } from 'typast'
import { toTypst } from 'typast-util-to-typst'
import { unified } from 'unified'
import { VFile } from 'vfile'
import { environmentSignatures, macroSignatures } from 'unified-latex-util-to-typast'
import unifiedLatextypast from './unified-latex-typast.js'

const parse = () =>
  unified().use(unifiedLatexFromString, { macros: macroSignatures, environments: environmentSignatures })

describe('unifiedLatextypast', () => {
  it('mutates a unified-latex tree into typast', async () => {
    const processor = parse().use(unifiedLatextypast, { document: false })
    const tree = (await processor.run(processor.parse('Hello \\emph{world}'))) as unknown as Root
    expect(tree.type).toBe('root')
    expect(toTypst(tree).trim()).toBe('Hello _world_')
  })

  it('passes options through (template path)', async () => {
    const processor = parse().use(unifiedLatextypast, { templatePath: '@local/jote-article:0.1.0' })
    const tree = (await processor.run(
      processor.parse('\\documentclass[empirical]{jote-new-article}\\begin{document}x\\end{document}'),
    )) as unknown as Root
    expect(tree.children[0]).toEqual({ type: 'import', source: '@local/jote-article:0.1.0', items: '*' })
  })

  it('bridges into another processor', async () => {
    let seen: Root | undefined
    const destination = unified().use(() => (tree: unknown) => {
      seen = tree as Root
    })
    const processor = parse().use(unifiedLatextypast, destination, { document: false })
    await processor.run(processor.parse('\\textbf{x}'))
    expect(seen && toTypst(seen).trim()).toBe('*x*')
  })

  it('reports unknown macros as file messages', async () => {
    const processor = parse().use(unifiedLatextypast, { document: false })
    const f = new VFile('\\mystery{a}')
    await processor.run(processor.parse(f), f)
    expect(f.messages.map((m) => m.reason)).toContain('Unknown \\mystery: kept its text content')
  })
})
