import type { Root as TyastRoot } from 'tyast'
import tyastStringify from 'tyast-stringify'
import type { Options as StringifyOptions } from 'tyast-util-to-typst'
import { unified } from 'unified'
import unifiedLatexTyast from 'unified-latex-tyast'
import { parseLatex, type Options as ToTyastOptions } from 'unified-latex-util-to-tyast'
import { VFile } from 'vfile'

export interface Options extends Omit<ToTyastOptions, 'templatePath'> {
  /**
   * What `main.typ` imports the template from, e.g. `"@local/jote-article:0.1.0"`.
   * @default 'jote-article/lib.typ'
   */
  templatePath?: string
  /** Path of the input, for messages. */
  path?: string
  /** Options for the Typst serializer (`tyast-stringify`). */
  stringify?: StringifyOptions
}

/**
 * Convert a JOTE LaTeX article (written against `jote-new-article.cls`) to Typst source for the
 * `jote-article` template.
 *
 * The LaTeX is parsed with the converter's macro signatures (`parseLatex`), then run through
 * `unified-latex-tyast` and `tyast-stringify`.
 *
 * The returned file's `value` is the Typst source; `file.data.tyast` holds the tree and
 * `file.messages` lists everything that couldn't be converted faithfully.
 */
export async function texToTypst(input: string, options: Options = {}): Promise<VFile> {
  const { path, stringify, ...rest } = options
  const file = new VFile({ value: input, path })
  const processor = unified()
    .use(unifiedLatexTyast, { ...rest, templatePath: rest.templatePath ?? 'jote-article/lib.typ' })
    .use(tyastStringify, stringify)
  const tree = (await processor.run(parseLatex(input), file)) as TyastRoot
  file.data.tyast = tree
  file.value = processor.stringify(tree, file)
  return file
}
