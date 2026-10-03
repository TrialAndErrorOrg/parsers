import { unified } from 'unified'
import { VFile } from 'vfile'
import { docxToVFile } from 'docx-to-vfile'
import reoffParse from 'reoff-parse'
import { reoffClean } from 'reoff-clean'
import reoffMarkupToStyle, { type Options as MarkupToStyleOptions } from 'reoff-markup-to-style'
import reoffTyast from 'reoff-tyast'
import tyastStringify from 'tyast-stringify'
import type { Options as TyastOptions, TyastData } from 'ooxast-util-to-tyast'
import type { Options as StringifyOptions } from 'tyast-util-to-typst'

/** The reoff-clean configuration of the LaTeX route (`apps/converter/lib/converters/docx-to-tex.ts`) */
export const defaultCleanOptions = {
  rPrRemoveList: [
    'w:lang',
    'w:shd',
    'w:sz',
    'w:szCs',
    'w:kern',
    'w:rFonts',
    'w:noProof',
    'w:iCs',
    'w:color',
  ],
}

/** Fully bold paragraphs become Heading 1, fully italic ones Heading 2 (as in the LaTeX route) */
export const defaultMarkupToStyle: MarkupToStyleOptions = [
  { markup: ['w:b'], style: 'Heading 1' },
  { markup: ['w:i'], style: 'Heading 2' },
]

export interface DocxToTypstOptions extends TyastOptions {
  /** `reoff-clean` options, or `false` to skip cleaning */
  clean?: { rPrRemoveList?: string[] } | false
  /** `reoff-markup-to-style` options, or `false` to skip inferring styles from formatting */
  markupToStyle?: MarkupToStyleOptions | false
  /** Options for the Typst serializer */
  stringify?: StringifyOptions
}

/** Files to write next to each other in the output directory, keyed by relative path. */
export type OutputFiles = Record<string, Uint8Array | string>

declare module 'vfile' {
  interface DataMap {
    /**
     * Everything needed for a buildable Typst project: `main.typ`, the images under `media/`
     * and `bibliography.bib` (if citations were found). The template itself is not included.
     */
    files: OutputFiles
  }
}

/**
 * Convert a .docx to Typst source for the JOTE `jote-article` template.
 *
 * The returned file's value is `main.typ`; `file.data.files` holds every file of the output
 * directory (including `main.typ`, images and `bibliography.bib`), and `file.data.tyast` the
 * conversion details (media list, citations, template arguments). Warnings are on
 * `file.messages`.
 */
export async function docxToTypst(
  input: Uint8Array | ArrayBuffer,
  options: DocxToTypstOptions = {},
): Promise<VFile> {
  const {
    clean = defaultCleanOptions,
    markupToStyle = defaultMarkupToStyle,
    stringify,
    ...tyastOptions
  } = options
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input)
  const vfile = await docxToVFile(bytes as unknown as ArrayBuffer)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let processor: any = unified().use(reoffParse)
  if (clean !== false) processor = processor.use(reoffClean, clean)
  if (markupToStyle !== false) processor = processor.use(reoffMarkupToStyle, markupToStyle)
  processor = processor.use(reoffTyast, tyastOptions).use(tyastStringify, stringify)

  const file: VFile = await processor.process(vfile)
  file.data.files = await outputFiles(file)
  return file
}

async function outputFiles(file: VFile): Promise<OutputFiles> {
  const files: OutputFiles = { 'main.typ': String(file.value) }
  const data = file.data.tyast as TyastData | undefined
  if (!data) return files
  const media = (file.data.media ?? {}) as Record<string, Blob | ArrayBuffer | Uint8Array>
  for (const { source, path } of data.media) {
    const blob = media[source]
    if (!blob) {
      file.message(`Image ${source} is missing from the docx`)
      continue
    }
    files[path] = await toBytes(blob)
  }
  if (data.bibliography && data.bibliographyFile) files[data.bibliographyFile] = data.bibliography
  return files
}

async function toBytes(value: Blob | ArrayBuffer | Uint8Array): Promise<Uint8Array> {
  if (value instanceof Uint8Array) return value
  if (value instanceof ArrayBuffer) return new Uint8Array(value)
  return new Uint8Array(await value.arrayBuffer())
}
