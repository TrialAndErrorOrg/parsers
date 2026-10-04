import type * as Ast from '@unified-latex/unified-latex-types'
import { unifiedLatexFromString } from '@unified-latex/unified-latex-util-parse'
import { unified } from 'unified'
import { environmentSignatures, macroSignatures } from './signatures.js'

/**
 * Escape characters that TeX reads verbatim inside `\url{…}`/`\href{…}` but that the
 * unified-latex parser would treat as syntax (a bare `%` starts a comment, a bare `#` is a
 * parameter).
 */
export function preprocessLatex(input: string): string {
  return input.replace(/\\(url|href)\{([^{}]*)\}/g, (_m, macro: string, url: string) => {
    const escaped = url.replace(/(?<!\\)([%#])/g, '\\$1')
    return `\\${macro}{${escaped}}`
  })
}

/**
 * Parse LaTeX source into a unified-latex tree with the argument signatures of
 * every macro/environment the converter knows about (JOTE class, biblatex, tables, …).
 */
export function parseLatex(input: string): Ast.Root {
  const processor = unified().use(unifiedLatexFromString, {
    macros: macroSignatures,
    environments: environmentSignatures,
  })
  const tree = processor.parse(preprocessLatex(input))
  return processor.runSync(tree) as Ast.Root
}
