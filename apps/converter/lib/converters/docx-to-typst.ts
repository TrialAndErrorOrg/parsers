import type { VFile } from 'vfile'
import { docxToTypst, type JoteArticleMeta, type OutputFiles } from '@jote/processors/docx-to-typst'
import { typstTemplateFiles } from '../generated/jote-article-typst'

/** Where the template goes in the download, matching the `#import` at the top of main.typ. */
export const TEMPLATE_DIR = 'jote-article'

/**
 * Convert a .docx to Typst for the `jote-article` template, the Typst counterpart of
 * `docxToTexConverter`. `meta` (from the metadata form, see `metaToTemplateArgs`) overrides
 * whatever front matter is recognised in the document.
 *
 * The result's value is `main.typ`; `file.data.files` holds every output file (main.typ,
 * media/…, bibliography.bib).
 */
export async function docxToTypstConverter(
  input: ArrayBuffer,
  options: { meta?: JoteArticleMeta } = {},
): Promise<VFile> {
  return docxToTypst(input, {
    templatePath: `${TEMPLATE_DIR}/lib.typ`,
    meta: options.meta,
  })
}

const README = `# Typst build

Compile with Typst 0.15 or newer:

    typst compile main.typ

The template in \`${TEMPLATE_DIR}/\` uses the Open Sans and Overpass fonts. Install them, or
point Typst at a folder that has them: \`typst compile --font-path <fonts> main.typ\`.
`

/**
 * Every file of a buildable Typst project: the converter output plus the template, as bytes or
 * text keyed by path in the zip.
 */
export function typstProjectFiles(files: OutputFiles): Record<string, Uint8Array | string> {
  const project: Record<string, Uint8Array | string> = { ...files, 'README.md': README }
  for (const [path, file] of Object.entries(typstTemplateFiles)) {
    project[`${TEMPLATE_DIR}/${path}`] = 'text' in file ? file.text : base64ToBytes(file.base64)
  }
  return project
}

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}
