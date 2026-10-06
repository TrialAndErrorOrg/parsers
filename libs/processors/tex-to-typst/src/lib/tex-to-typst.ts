import type { Root as TypastRoot } from 'typast'
import typastStringify from 'typast-stringify'
import type { Options as StringifyOptions } from 'typast-util-to-typst'
import { unified } from 'unified'
import unifiedLatexTypast from 'unified-latex-typast'
import { parseLatex, type Options as ToTypastOptions } from 'unified-latex-util-to-typast'
import { VFile } from 'vfile'

export interface Options extends Omit<ToTypastOptions, 'templatePath'> {
  /**
   * What `main.typ` imports the template from, e.g. `"@local/jote-article:0.1.0"`.
   * @default 'jote-article/lib.typ'
   */
  templatePath?: string
  /** Path of the input, for messages. */
  path?: string
  /** Options for the Typst serializer (`typast-stringify`). */
  stringify?: StringifyOptions
}

/**
 * Convert a JOTE LaTeX article (written against `jote-new-article.cls`) to Typst source for the
 * `jote-article` template.
 *
 * The LaTeX is parsed with the converter's macro signatures (`parseLatex`), then run through
 * `unified-latex-typast` and `typast-stringify`.
 *
 * The returned file's `value` is the Typst source; `file.data.typast` holds the tree and
 * `file.messages` lists everything that couldn't be converted faithfully.
 */
export async function texToTypst(input: string, options: Options = {}): Promise<VFile> {
  const { path, stringify, ...rest } = options
  const file = new VFile({ value: input, path })
  const processor = unified()
    .use(unifiedLatexTypast, { ...rest, templatePath: rest.templatePath ?? 'jote-article/lib.typ' })
    .use(typastStringify, stringify)
  const tree = (await processor.run(parseLatex(input), file)) as TypastRoot
  file.data.typast = tree
  file.value = processor.stringify(tree, file)
  return file
}
