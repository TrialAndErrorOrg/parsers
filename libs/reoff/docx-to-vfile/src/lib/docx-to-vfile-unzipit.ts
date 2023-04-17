import { VFile } from 'vfile'
import { unzip } from 'unzipit'
import { Root } from 'xast'

const removeCarriage = (text: string | undefined) => (text ? text.replace(/\r/g, '') : '')

export interface Options {
  /**
   * Whether or not to include media in the VFile.
   *
   * By default, images are included on the `data.media` attribute of the VFile as an object of Blobs, which are accessible both client and serverside.
   *
   * @default false
   */
  withoutMedia?: boolean
  /**
   * Include only the specified files on the `data` attribute of the VFile.
   * This may be useful if you want to only do something with a subset of the files in the docx file, and don't intend to use 'reoff-stringify' to turn the VFile back into a docx file.
   *
   * - If an array of strings or regexps is passed, only files that match one of the values will be included.
   * - If a function is passed, it will be called for each file and should return true to include the file.
   * - If the value is 'all', almost all files will be included, except for 'word/document.xml', as that already is the root of the VFile.
   * - If the value is 'allWithDocumentXML', all files will be included, including `word/document.xml`, even though that is already the root of the VFile. Useful if you really want to mimic the original docx file.
   *
   * You should keep it at the default value if you intend to use 'reoff-stringify' to turn the VFile back into a docx file.
   *
   * @default 'all'
   */
  include?: string[] | RegExp[] | ((key: string) => boolean) | 'all' | 'allWithDocumentXML'
}

export interface OptionsWithFetchConfig extends Options {
  /**
   * The config to pass to fetch, for e.g. authorization headers.
   */
  fetchConfig?: RequestInit
}

/**
 * The data attribute of the VFile will contain the following:
 */
export interface DocxVFileData {
  /**
   * The textcontent of .xml files in the .docx file
   */
  [key: XMLOrRelsString]: string | undefined
  /**
   * The media files in the .docx file
   * Possibly undefined only to be compatible with the VFile interface
   *
   * @since 0.5.0 - Added media, removed images
   */
  media: { [key: string]: Blob }
  /**
   * The relations between the .xml files in the .docx file
   * Possibly undefined only to be compatible with the VFile interface
   *
   * @since 0.7.0 - Added relations.footnotes and relations.endnotes. `relations.document` is now an alias for `relations`. This now gets added by `reoff-parse`.
   *
   */
  relations?: {
    document: { [key: string]: string }
    footnotes?: { [key: string]: string }
    endnotes?: { [key: string]: string }
  }

  /**
   * The parsed .xml files in the .docx file
   *
   * Usually added by `reoff-parse`
   */
  parsed?: {
    [key: XMLOrRelsString]: Root | undefined
  }
}

declare module 'vfile' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DataMap extends DocxVFileData {}
}

export type XMLOrRelsString = `${string}.xml` | `${string}.rels`

/**
 * Takes a docx file as a Blob or File and returns a VFile with the contents of the document.xml file as the root, and the contents of the other xml files as data.
 *
 * @param file The docx file as a Blob or File
 * @param options Options
 * @returns A VFile with the contents of the document.xml file as the root, and the contents of the other xml files as data.
 */
export async function docxToVFile(
  file: ArrayBuffer | File | Blob | Buffer | string,
  userOptions?: Options,
): Promise<VFile> {
  let input = file

  let path: string | undefined
  // node code
  if (typeof window === 'undefined') {
    const { readFile } = await import('fs/promises')
    const inp = typeof file === 'string' ? await readFile(file) : file
    path = typeof file === 'string' ? file : undefined

    input = Buffer.isBuffer(inp) ? new Blob([inp]) : file
  }

  const options: Options = {
    withoutMedia: false,
    include: 'all',
    ...userOptions,
  }

  const { entries } = await unzip(input)

  const doc = await entries['word/document.xml'].text()

  const textEntriesObjectEntries = await Promise.all(
    Object.entries(entries)
      .filter(([key]) => /xml|rels/.test(key))
      .filter(([key]) => {
        if (options.include === 'all') {
          return key !== 'word/document.xml'
        }

        if (options.include === 'allWithDocumentXML') {
          return true
        }

        if (typeof options.include === 'function') {
          return options.include(key)
        }

        if (Array.isArray(options.include)) {
          return options.include.some((include) => {
            if (typeof include === 'string') {
              return key.includes(include)
            }
            if (include instanceof RegExp) {
              return include.test(key)
            }
            return false
          })
        }
        return false
      })
      .map(async ([key, value]) => [key, removeCarriage(await value.text())] as const),
  )

  const textEntriesObject = Object.fromEntries<string>(textEntriesObjectEntries)

  const vfileData = textEntriesObject as VFile['data']
  vfileData.media = {} as { [key: string]: Blob }

  if (options.withoutMedia) {
    return new VFile({ value: removeCarriage(doc), data: vfileData, path, extname: '.docx' })
  }

  const mediaEntries = Object.entries(entries).filter(([key]) => /word\/media/.test(key))

  const media = Object.fromEntries<Blob>(
    await Promise.all(mediaEntries.map(async ([key, value]) => [key, await value.blob()] as const)),
  )

  vfileData.media = media

  return new VFile({ value: removeCarriage(doc), data: vfileData })
}
