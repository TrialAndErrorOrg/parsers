import { toTypst } from 'tyast-util-to-typst'
import type { Root as TyastRoot } from 'tyast'
import { parseLatex, toTyast, type Options as ToTyastOptions } from 'unified-latex-util-to-tyast'
import { VFile } from 'vfile'

export interface Options extends Omit<ToTyastOptions, 'templatePath'> {
  /**
   * What `main.typ` imports the template from, e.g. `"@local/jote-article:0.1.0"`.
   * @default 'jote-article/lib.typ'
   */
  templatePath?: string
  /** Path of the input, for messages. */
  path?: string
}

/**
 * Convert a JOTE LaTeX article (written against `jote-new-article.cls`) to Typst source for the
 * `jote-article` template.
 *
 * The returned file's `value` is the Typst source; `file.data.tyast` holds the tree and
 * `file.messages` lists everything that couldn't be converted faithfully.
 */
export async function texToTypst(input: string, options: Options = {}): Promise<VFile> {
  const { path, ...rest } = options
  const file = new VFile({ value: input, path })
  const latex = parseLatex(input)
  const tree: TyastRoot = toTyast(latex, file, {
    ...rest,
    templatePath: options.templatePath ?? 'jote-article/lib.typ',
  })
  file.data.tyast = tree
  file.value = toTypst(tree)
  return file
}
