export { toBiblatex } from './lib/citations.js'
export { parseAffiliations, parseAuthors } from './lib/front-matter.js'
export { defaultFormattingHandlers, normalizeInline, unwrapFull } from './lib/inline.js'
export { ommlToTypst } from './lib/math.js'
export type { JoteArticleMeta, JoteAuthor, Rich } from './lib/meta.js'
export { familyName, mergeMeta, runningAuthorFor, templateShowRule } from './lib/meta.js'
export { parseStyles, resolveStyle } from './lib/styles.js'
export { defaultOptions, toTypast } from './lib/to-typast.js'
export type {
  FormattingHandler,
  MediaFile,
  Options,
  ParagraphContext,
  ParagraphHandler,
  ParagraphMatcher,
  State,
  TypastData,
  Where,
} from './lib/types.js'
