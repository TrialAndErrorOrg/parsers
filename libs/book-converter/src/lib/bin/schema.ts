import path from 'path'
import { z } from 'zod'
import { Option as MarkupStyleOptions } from 'ooxast-util-markup-to-style'

const documentClasses = ['jote-book', 'new-jote-article'] as const
const documentClassesSchema = z.enum(documentClasses)

const bookOptions = [
  'smallauthor',
  'chapterhaspagenum',
  'nochapterinheader',
  'pagenuminheader',
  'bigchapnum',
  'medium2',
  'tocpages',
  'garamond',
  'titleinheader',
  'print',
] as const

const articleTypeOptions = ['empirical', 'reflection', 'meta', 'rga', 'editorial'] as const

const citeOptions = ['authordate', 'numeric'] as const

const bookSchema = z.object({
  documentClass: z.literal(documentClassesSchema.enum['jote-book']),
  options: z.enum(bookOptions).array(),
  indexCSV: z
    .string({
      description: 'Path to the index CSV file to use',
    })
    .optional(),
})

const articleSchema = z.object({
  documentClass: z.literal(documentClassesSchema.enum['new-jote-article']),
  article: z.enum(articleTypeOptions).default('empirical'),
  citeStyle: z.enum(citeOptions).default('authordate'),
  issued: z.literal('issued').optional(),
})

const formatSchema = z.discriminatedUnion('documentClass', [bookSchema, articleSchema])

const RPr = [
  'w:b',
  'w:bCs',
  'w:bdr',
  'w:caps',
  'w:color',
  'w:cs',
  'w:dstrike',
  'w:eastAsianLayout',
  'w:effect',
  'w:em',
  'w:emboss',
  'w:fitText',
  'w:highlight',
  'w:i',
  'w:iCs',
  'w:imprint',
  'w:kern',
  'w:lang',
  'w:noProof',
  'w:oMath',
  'w:outline',
  'w:position',
  'w:rFonts',
  'w:rPrChange',
  'w:rStyle',
  'w:rtl',
  'w:shadow',
  'w:shd',
  'w:smallCaps',
  'w:snapToGrid',
  'w:spacing',
  'w:specVanish',
  'w:strike',
  'w:sz',
  'w:szCs',
  'w:u',
  'w:vanish',
  'w:vertAlign',
  'w:w',
  'w:webHidden',
] as const

const rPrSchema = z.enum(RPr)

export const converterCLIOptionsDefaultSchemaInput = z.object({
  type: z.enum(['book', 'article']).default('book'),
  docx: z.string({
    description: 'Path to the docx file to convert',
  }),
  out: z
    .string({
      description:
        'Path to the directory of the output file. Defaults to the same directory as the docx file.',
    })
    .optional(),
  preamble: z
    .string({
      description: 'Path to the preamble.tex file to use',
    })
    .optional(),
  before: z
    .string({
      description: 'Path to the before-first-page.tex file to use',
    })
    .optional(),
  media: z
    .string({
      description:
        'Path to where to place the media files from the output. Defaults to ./media of the output directory.',
    })
    .optional(),
  config: z
    .string({
      description: 'Path to the config yaml file to use',
    })
    .optional(),
  parseCitations: z
    .boolean()
    .optional()
    .describe("Whether to parse citations. Defaults to 'false'"),
  citationType: z
    .enum(['mendeley', 'word', 'citavi', 'zotero', 'endnote'])
    .default('zotero')
    .describe('The type of citation you want to parse.'),
  onSuccess: z
    .string({
      description: 'Command to run after conversion',
    })
    .optional(),
  index: z.string().optional().describe('Path to the index file to use'),
})

export const converterConfigOptions = z.object({
  markupStyle: z
    .array(
      z.object({
        markup: z.union([rPrSchema, z.array(rPrSchema)]),
        style: z.string(),
        matchAll: z.boolean().default(true),
        /**
         * Whether the entire paragraph should contain the markup, or the markup can be present in any of the runs.
         *
         * @default true
         */
        matchFull: z.boolean().default(true),
        /**
         * If punctuation or whitespace should be ignored when matching.
         *
         * E.g. if `markup: 'w:b'` is specified and only an empty space at the beginning of the paragraph is bold, the style not be applied.
         * Likewise, if `markup: 'w:b'` is specified and only a period at the end of the paragraph is not bold, the style not be applied.
         *
         * @default true
         */
        ignorePunctuation: z.boolean().default(true),
      }) satisfies z.ZodType<MarkupStyleOptions>,
      {
        description: 'Markup style options',
      },
    )
    .default([]),

  paragraphStyleHandlers: z
    .array(
      z.object({
        style: z
          .string({
            description:
              'The name of the paragraph style to handle. No spaces allowed, its in camelCase or PascalCase.',
          })
          .regex(/^\w+$/, {
            message: 'No spaces allowed, its in camelCase or PascalCase.',
          }),
        output: z.string({
          description:
            "Output LaTeX code. Use $1 for the text of the paragraph. E.g. '\\textbf{$1}'",
        }),
      }),
      {
        description: 'Paragraph style handlers',
      },
    )
    .optional(),
})

export const converterOptionsDefaultSchemaInput =
  converterCLIOptionsDefaultSchemaInput.merge(converterConfigOptions)

export const converterOptionsSchemaInput = converterOptionsDefaultSchemaInput.extend({
  latexOptions: formatSchema.describe('Options dealiing with latex').default({
    documentClass: 'jote-book',
    options: [],
  }),
})

export const converterOptionsSchema = converterOptionsSchemaInput.transform((obj) => {
  if (!obj.out) {
    obj.out = path.resolve(path.dirname(obj.docx))
  }

  if (!obj.media) {
    obj.media = path.resolve(path.dirname(obj.out), 'media')
  }

  const withDocumentClass = {
    ...structuredClone(obj),
    documentClassOptions: '',
  }
  const latexOptions = obj.latexOptions

  if (latexOptions.documentClass === 'new-jote-article') {
    withDocumentClass.documentClassOptions = [
      latexOptions.article,
      latexOptions.citeStyle,
      ...([latexOptions.issued] ?? []),
    ].join(', ')

    return withDocumentClass
  }

  return { ...obj, latexOptions, documentClassOptions: latexOptions.options.join(', ') }
})

export type ConverterOptions = z.infer<typeof converterOptionsSchema>
export type ConverterInputOptions = typeof converterOptionsSchemaInput._input
