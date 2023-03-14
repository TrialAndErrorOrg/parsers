import { args, m } from '@unified-latex/unified-latex-builder'
import { Macro } from '@unified-latex/unified-latex-types'

export function makePackage(name: string, options: string[] = []): Macro {
  return options.length
    ? m(
        'usepackage',
        args([options.join(','), name], {
          braces: '[]{}',
        })
      )
    : m('usepackage', name)
}
