import type * as Ast from '@unified-latex/unified-latex-types'
import type { Content, Heading } from 'typast'
import {
  arg,
  asBlock,
  call,
  code,
  content,
  label,
  math,
  named,
  noindentMarker,
  raw,
  str,
  text,
} from '../build.js'
import { isMathSymbol, texToTypstMath } from '../math.js'
import { State } from '../state.js'
import { applyAccent, ding, faMacroToIcon, fontawesome, textSymbols } from '../symbols.js'
import type { MacroHandler } from '../types.js'
import {
  args,
  convertLength,
  isStarred,
  isValidLabel,
  labelName,
  lastArg,
  plainText,
  printRaw,
  rawText,
  typstColor,
} from '../util.js'
import { captionof, includegraphics } from './figures.js'
import { metadataMacros } from './metadata.js'

const drop: MacroHandler = () => undefined

/** Wrap the converted last argument in a call: `\underline{x}` → `#underline[x]`. */
const wrapIn =
  (name: string, extra: Parameters<typeof call>[1] = []): MacroHandler =>
  (node, state) => {
    const children = state.inline(lastArg(node))
    return children.length ? call(name, extra, [children]) : undefined
  }

/** Keep the argument's content as-is. */
const passthrough: MacroHandler = (node, state) =>
  state.items(lastArg(node)).filter((i) => typeof i !== 'symbol') as Content[]

const sectioning =
  (depth: number): MacroHandler =>
  (node, state) => {
    const children = state.inline(lastArg(node))
    const heading: Heading = { type: 'heading', depth, children }
    if (isStarred(node)) heading.numbered = false
    return heading
  }

const linebreak = (): Content => ({ type: 'linebreak' })

const pagebreak: MacroHandler = () => asBlock(call('pagebreak', [arg(code('true'), 'weak')]))

function urlText(nodes: Ast.Node[] | null): string {
  return printRaw(nodes ?? [])
    .replace(/\\([_%#&$~{}])/g, '$1')
    .replace(/\s+/g, '')
}

/** A Typst label value for code mode: `<key>` or `label("key")`. */
export function labelValue(key: string) {
  return isValidLabel(key) ? code(`<${key}>`) : call('label', [arg(str(key))])
}

const ref =
  (form: 'ref' | 'auto' | 'eq' | 'name' | 'page'): MacroHandler =>
  (node) => {
    const keys = plainText(lastArg(node))
      .split(',')
      .map((k) => labelName(k))
      .filter(Boolean)
    const out: Content[] = []
    keys.forEach((key, i) => {
      if (i > 0) out.push(text(', '))
      out.push({ type: 'ref', target: key, data: { form } } as Content)
    })
    return out
  }

type CiteForm = 'normal' | 'prose' | 'author' | 'year' | 'none'

/** What a `#cite` call was made from, kept in its `data.cite`. */
export interface CiteData {
  key: string
  form: CiteForm
  supplement?: Content[]
}

interface CiteItem {
  prenote: Ast.Node[] | null
  postnote: Ast.Node[] | null
  keys: string[]
}

const hasText = (nodes: Ast.Node[] | null): nodes is Ast.Node[] =>
  !!nodes && !!plainText(nodes).trim()

/**
 * Typst citations for biblatex cite items. Typst's `cite` has a supplement (postnote) but no
 * prenote: a parenthetical citation with a prenote is therefore built from the `author` and
 * `year` forms, `(see Author, Year, post; Author, Year)`, as biblatex-apa prints it.
 */
function renderCites(
  state: State,
  form: CiteForm,
  items: CiteItem[],
  opts: { foot?: boolean; parens?: boolean } = {},
): Content[] {
  state.meta.hasCitations = true
  const cite = (key: string, f: CiteForm, supplement?: Content[]): Content => ({
    ...call('cite', [
      arg(labelValue(key)),
      f === 'normal' ? undefined : named('form', f === 'none' ? code('none') : str(f)),
      supplement ? named('supplement', content(supplement)) : undefined,
    ]),
    // read by `citationsAsText` when the document has no bibliography
    data: { cite: { key, form: f, supplement } satisfies CiteData },
  })
  const out: Content[] = []
  if (form === 'normal' && items.some((item) => hasText(item.prenote))) {
    out.push(text('('))
    items.forEach((item, i) => {
      if (i > 0) out.push(text('; '))
      if (hasText(item.prenote)) out.push(...state.inline(item.prenote), text(' '))
      item.keys.forEach((key, k) => {
        if (k > 0) out.push(text('; '))
        out.push(cite(key, 'author'), text(', '), cite(key, 'year'))
      })
      if (hasText(item.postnote)) out.push(text(', '), ...state.inline(item.postnote))
    })
    out.push(text(')'))
  } else {
    items.forEach((item, i) => {
      if (i > 0 && form !== 'normal') out.push(text(form === 'prose' ? ', ' : '; '))
      // a prenote of a textual citation goes in front of it
      if (hasText(item.prenote)) out.push(...state.inline(item.prenote), text(' '))
      item.keys.forEach((key, k) => {
        if (k > 0 && form !== 'normal') out.push(text(form === 'prose' ? ', ' : '; '))
        const isLast = k === item.keys.length - 1
        const supplement =
          isLast && hasText(item.postnote) ? state.inline(item.postnote) : undefined
        out.push(cite(key, form, supplement))
      })
    })
  }
  if (opts.parens && form === 'year') return [text('('), ...out, text(')')]
  if (opts.foot) return [call('footnote', [], [out])]
  return out
}

const citeKeys = (nodes: Ast.Node[] | null) =>
  plainText(nodes ?? [])
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean)

const citation =
  (form: CiteForm, opts: { foot?: boolean; parens?: boolean } = {}): MacroHandler =>
  (node, state) => {
    const a = args(node)
    // signature `s o o m`: with one optional it's the postnote, with two it's pre + post
    const opt1 = a[1]
    const opt2 = a[2]
    const item: CiteItem = {
      prenote: opt2 ? opt1 : null,
      postnote: opt2 ? opt2 : opt1,
      keys: citeKeys(a[3] ?? lastArg(node)),
    }
    return renderCites(state, form, [item], opts)
  }

/**
 * biblatex multicite commands (`\parencites[pre][post]{a}[post]{b}`). {@link groupMultiCites}
 * has already collected their arguments as `[pre] [post] {keys}` triples.
 */
const multiCitation =
  (form: CiteForm, opts: { foot?: boolean } = {}): MacroHandler =>
  (node, state) => {
    const a = node.args ?? []
    const items: CiteItem[] = []
    for (let i = 0; i + 2 < a.length; i += 3) {
      const pre = a[i].content
      const post = a[i + 1].content
      const noPost = a[i + 1].openMark === ''
      items.push({
        // one optional argument is the postnote, two are pre- and postnote
        prenote: noPost ? null : pre,
        postnote: noPost ? pre : post,
        keys: citeKeys(a[i + 2].content),
      })
    }
    return renderCites(state, form, items, opts)
  }

const vspace: MacroHandler = (node, state) => {
  const raw = rawText(lastArg(node))
  const length = convertLength(raw)
  if (!length) {
    state.warn(`Could not convert length \`${raw}\``, node)
    return undefined
  }
  return asBlock(call('v', [arg(code(length))]))
}

const hspace: MacroHandler = (node, state) => {
  const raw = rawText(lastArg(node))
  const length = convertLength(raw)
  if (!length) {
    state.warn(`Could not convert length \`${raw}\``, node)
    return undefined
  }
  return call('h', [arg(code(length))])
}

function symbol(value: string): Content {
  return text(value)
}

/**
 * fontawesome disks are drawn as shapes: Unicode fallbacks (●, ◉) are far smaller than the
 * icons and depend on whichever font has the glyph.
 */
const disk = (fill: boolean) =>
  call('circle', [
    arg(code('0.45em'), 'radius'),
    fill ? arg(code('black'), 'fill') : arg(code('0.09em'), 'stroke'),
  ])
const FA_SHAPES: Record<string, () => Content[]> = {
  circle: () => withStrut(call('box', [arg(code('0.15em'), 'baseline'), arg(disk(true))])),
  'regular:circle': () =>
    withStrut(call('box', [arg(code('0.15em'), 'baseline'), arg(disk(false))])),
  'dot-circle': () => faDotCircle(),
  'regular:dot-circle': () => faDotCircle(),
  'circle-dot': () => faDotCircle(),
  'regular:circle-dot': () => faDotCircle(),
}
function faDotCircle(): Content[] {
  const inner = call('align', [
    arg(code('center + horizon')),
    arg(call('circle', [arg(code('0.22em'), 'radius'), arg(code('black'), 'fill')])),
  ])
  const outer = call('circle', [
    arg(code('0.45em'), 'radius'),
    arg(code('0.09em'), 'stroke'),
    arg(code('0pt'), 'inset'),
    arg(inner),
  ])
  return withStrut(call('box', [arg(code('0.15em'), 'baseline'), arg(outer)]))
}

/**
 * `\bullet` in text mode: LaTeX sets it as maths (after a "Missing $" error), a dot 0.4em
 * across centred on the maths axis — far bigger than the text bullet of a light sans face.
 */
const mathBullet = (): Content[] =>
  withStrut(
    call('box', [
      arg(code('-0.05em'), 'baseline'),
      arg(call('circle', [arg(code('0.2em'), 'radius'), arg(code('black'), 'fill')])),
    ]),
  )

/**
 * A zero-width space in front of a drawn shape: a line with only a box in it is only as tall as
 * the box, so a table cell holding just the shape would put it higher than the text of the
 * other cells in its row. The space gives the line the text's height, as TeX's strut does.
 */
function withStrut(shape: Content): Content[] {
  return [text('\u200B'), shape]
}

const faIcon: MacroHandler = (node, state) => {
  const a = args(node)
  const style = plainText(a[0]).trim()
  const name = plainText(lastArg(node)).trim()
  const shape = FA_SHAPES[`${style}:${name}`] ?? FA_SHAPES[name]
  if (shape) return shape()
  const glyph = fontawesome[`${style}:${name}`] ?? fontawesome[name]
  if (!glyph) {
    state.warn(`Unknown fontawesome icon \`${name}\``, node)
    return text('□')
  }
  return symbol(glyph)
}

/** `\renewcommand{\thefigure}{A1}` → literal figure numbering from here on */
const renewcommand: MacroHandler = (node, state) => {
  const a = args(node)
  const target = rawText(a[1])
  const body = plainText(lastArg(node)).trim().replace(/[:.]$/, '')
  const kinds: Record<string, string> = { '\\thefigure': 'image', '\\thetable': 'table' }
  if (kinds[target] && body && !body.includes('\\')) {
    return asBlock(
      raw(
        `#show figure.where(kind: ${kinds[target]}): set figure(numbering: _ => ${JSON.stringify(
          body,
        )})`,
      ),
    )
  }
  if (target === '\\arraystretch' || target === '\\baselinestretch') return undefined
  state.warn(`Ignored \\renewcommand{${target}}`, node)
  return undefined
}

export const macroHandlers: Record<string, MacroHandler> = {
  ...metadataMacros,

  // structure
  part: sectioning(1),
  chapter: sectioning(1),
  section: sectioning(1),
  subsection: sectioning(2),
  subsubsection: sectioning(3),
  paragraph: sectioning(4),
  subparagraph: sectioning(5),
  label: (node, state) => {
    const name = labelName(plainText(lastArg(node)))
    if (!name) return undefined
    const kind = state.labelContext[state.labelContext.length - 1] ?? 'other'
    if (!state.labels.has(name)) state.labels.set(name, { kind })
    return label(name)
  },
  ref: ref('ref'),
  autoref: ref('auto'),
  cref: ref('auto'),
  Cref: ref('auto'),
  eqref: ref('eq'),
  nameref: ref('name'),
  pageref: ref('page'),

  // text formatting
  emph: (node, state) => ({ type: 'emphasis', children: state.inline(lastArg(node)) }),
  textit: (node, state) => ({ type: 'emphasis', children: state.inline(lastArg(node)) }),
  textsl: (node, state) => ({ type: 'emphasis', children: state.inline(lastArg(node)) }),
  textbf: (node, state) => ({ type: 'strong', children: state.inline(lastArg(node)) }),
  textsc: wrapIn('smallcaps'),
  // lettrine's drop cap has no Typst equivalent: keep the initial, and the rest of the first
  // word in small caps as lettrine sets it
  lettrine: (node, state) => {
    const a = args(node)
    return [...state.inline(a[1] ?? []), call('smallcaps', [], [state.inline(a[2] ?? [])])]
  },
  pdfbookmark: drop,
  underline: wrapIn('underline'),
  uline: wrapIn('underline'),
  sout: wrapIn('strike'),
  hl: wrapIn('highlight'),
  textsuperscript: wrapIn('super'),
  textsubscript: wrapIn('sub'),
  texttt: (node) => ({ type: 'raw', value: plainText(lastArg(node)).replace(/\u00A0/g, ' ') }),
  textup: passthrough,
  textmd: passthrough,
  textnormal: passthrough,
  textrm: passthrough,
  textsf: passthrough,
  text: passthrough,
  mbox: wrapIn('box'),
  makebox: wrapIn('box'),
  fbox: wrapIn('box', [arg(code('0.5pt'), 'stroke'), arg(code('3pt'), 'inset')]),
  phantom: wrapIn('hide'),
  hphantom: wrapIn('hide'),
  vphantom: drop,
  thaifont: passthrough,
  japanesefont: passthrough,
  foreignlanguage: passthrough,
  textcolor: (node, state) => {
    const color = typstColor(plainText(args(node)[1]).trim())
    const children = state.inline(lastArg(node))
    if (!color) return children
    return call('text', [arg(code(color), 'fill')], [children])
  },
  colorbox: passthrough,
  color: drop,
  footnote: (node, state) => call('footnote', [], [state.body(lastArg(node))]),
  footnotetext: (node, state) => call('footnote', [], [state.body(lastArg(node))]),
  footnotemark: drop,
  blfootnote: (node, state) =>
    call('footnote', [arg(code('none'), 'numbering')], [state.body(lastArg(node))]),
  customfootnote: (node, state) => call('footnote', [], [state.body(lastArg(node))]),
  tnote: (node, state) => call('super', [], [state.inline(lastArg(node))]),
  url: (node) => {
    const url = urlText(lastArg(node))
    return call('link', [arg(str(url))])
  },
  href: (node, state) => {
    const a = args(node)
    const url = urlText(a[1])
    const children = state.inline(lastArg(node))
    return call('link', [arg(str(url))], [children])
  },
  doi: (node) => {
    const doi = urlText(lastArg(node))
    return call('link', [arg(str(`https://doi.org/${doi}`))], [[text(`https://doi.org/${doi}`)]])
  },

  // characters and symbols
  ding: (node, state) => {
    const n = Number(plainText(lastArg(node)))
    const glyph = Number.isFinite(n) ? ding(n) : undefined
    if (!glyph) {
      state.warn(`Unknown \\ding{${plainText(lastArg(node))}}`, node)
      return undefined
    }
    return symbol(glyph)
  },
  faIcon,
  bullet: mathBullet,
  item: (node, state) => {
    state.warn('\\item outside of a list', node)
    return state.inline(lastArg(node))
  },
  '\\': (node) => linebreak(),
  newline: () => linebreak(),
  linebreak: () => linebreak(),
  tabularnewline: () => linebreak(),
  today: () =>
    text(
      new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    ),

  // spacing and layout
  vspace,
  vskip: drop,
  hspace,
  hfill: () => call('h', [arg(code('1fr'))]),
  hfil: () => call('h', [arg(code('1fr'))]),
  vfill: () => asBlock(call('v', [arg(code('1fr'))])),
  dotfill: () => call('box', [arg(code('1fr'), 'width')], [[call('repeat', [], [[text('.')]])]]),
  smallskip: () => asBlock(call('v', [arg(code('0.25em'))])),
  medskip: () => asBlock(call('v', [arg(code('0.5em'))])),
  bigskip: () => asBlock(call('v', [arg(code('1em'))])),
  newpage: pagebreak,
  clearpage: pagebreak,
  cleardoublepage: pagebreak,
  pagebreak,
  onecolumn: () => [asBlock({ type: 'set', name: 'page', args: [arg(code('1'), 'columns')] })],
  twocolumn: () => [asBlock({ type: 'set', name: 'page', args: [arg(code('2'), 'columns')] })],
  centering: drop,
  raggedright: drop,
  raggedleft: drop,
  RaggedRight: drop,
  RaggedLeft: drop,
  justifying: drop,
  noindent: () => noindentMarker(),
  indent: drop,
  FloatBarrier: drop,
  protect: drop,
  relax: drop,
  strut: drop,
  nobreak: drop,
  allowbreak: drop,
  sloppy: drop,
  fussy: drop,
  selectfont: drop,
  arraybackslash: drop,
  appendix: drop,
  maketitle: drop,
  printabstracttext: drop,
  tableofcontents: drop,
  listoffigures: drop,
  listoftables: drop,
  // \rule[raise]{width}{height}: a filled box
  rule: (node) => {
    const a = args(node)
    const w = convertLength(rawText(a[1] ?? []))
    const h = convertLength(rawText(a[2] ?? []))
    if (!w || !h) return undefined
    // in the current text colour, like TeX's rule
    return raw(`#context box(width: ${w}, height: ${h}, fill: text.fill)`)
  },
  hrule: drop,
  hline: drop,
  midrule: drop,
  toprule: drop,
  bottomrule: drop,
  addlinespace: drop,
  cline: drop,
  usepackage: drop,
  RequirePackage: drop,
  PassOptionsToPackage: drop,
  documentclass: drop,
  setlength: drop,
  addtolength: drop,
  setcounter: drop,
  addtocounter: drop,
  newlist: drop,
  setlist: drop,
  captionsetup: drop,
  hypersetup: drop,
  graphicspath: drop,
  newfontfamily: drop,
  setmainfont: drop,
  setsansfont: drop,
  pagestyle: drop,
  thispagestyle: drop,
  bibliographystyle: drop,
  newcommand: (node, state) => {
    state.warn(`Custom macro ${rawText(args(node)[1])} is not expanded`, node)
    return undefined
  },
  providecommand: drop,
  DeclareMathOperator: drop,
  renewcommand,
  newcolumntype: (node, state) => {
    const a = args(node)
    const name = plainText(a[0]).trim()
    const n = Number(plainText(a[1]) || 0)
    if (name) state.columnTypes.set(name, { args: n, def: lastArg(node) })
    return undefined
  },

  // citations (biblatex + natbib)
  cite: citation('normal'),
  parencite: citation('normal'),
  Parencite: citation('normal'),
  autocite: citation('normal'),
  Autocite: citation('normal'),
  citep: citation('normal'),
  citealp: citation('normal'),
  textcite: citation('prose'),
  Textcite: citation('prose'),
  citet: citation('prose'),
  citealt: citation('prose'),
  citeauthor: citation('author'),
  Citeauthor: citation('author'),
  citeyear: citation('year'),
  citeyearpar: citation('year', { parens: true }),
  footcite: citation('normal', { foot: true }),
  nocite: citation('none'),
  cites: multiCitation('normal'),
  Cites: multiCitation('normal'),
  parencites: multiCitation('normal'),
  Parencites: multiCitation('normal'),
  autocites: multiCitation('normal'),
  Autocites: multiCitation('normal'),
  smartcites: multiCitation('normal'),
  Smartcites: multiCitation('normal'),
  supercites: multiCitation('normal'),
  textcites: multiCitation('prose'),
  Textcites: multiCitation('prose'),
  footcites: multiCitation('normal', { foot: true }),
  printbibliography: (_node, state) => {
    state.meta.hasPrintBibliography = true
    return undefined
  },
  bibliography: (node, state) => {
    state.meta.hasPrintBibliography = true
    for (const file of plainText(lastArg(node)).split(',')) {
      const f = file.trim()
      if (f) state.meta.bibResources.push(f.endsWith('.bib') ? f : `${f}.bib`)
    }
    return undefined
  },
  addbibresource: (node, state) => {
    const f = plainText(lastArg(node)).trim()
    if (f) state.meta.bibResources.push(f)
    return undefined
  },

  // figures
  includegraphics,
  captionof,
  caption: (node, state) => {
    if (isStarred(node))
      return asBlock({ type: 'paragraph', children: state.inline(lastArg(node)) })
    state.warn('\\caption outside of a float', node)
    return asBlock({ type: 'paragraph', children: state.inline(lastArg(node)) })
  },
  resizebox: passthrough,
  scalebox: passthrough,
  rotatebox: passthrough,
  raisebox: passthrough,
  adjustbox: passthrough,
  orcid: (node) => call('orcid', [arg(str(plainText(lastArg(node)).trim()))]),

  // fallback: accents, symbols, fontawesome shortcuts, math symbols, unknown macros
  '*': (node, state) => {
    const name = node.content
    if (name in textSymbols) return symbol(textSymbols[name])
    if (name.length === 1 || /^[uvHckrdbt]$/.test(name)) {
      const base = plainText(lastArg(node))
      if (node.args && /^['`^"~=.uvHckrdbt]$/.test(name)) return text(applyAccent(name, base))
    }
    const icon = faMacroToIcon(name)
    if (icon) {
      if (FA_SHAPES[icon]) return FA_SHAPES[icon]()
      const glyph = fontawesome[icon]
      if (glyph) return symbol(glyph)
    }
    // a math symbol used in text mode
    if ((!node.args || node.args.length === 0) && isMathSymbol(name)) {
      const converted = texToTypstMath(`\\${name}`)
      if (converted.ok && converted.value) return math(converted.value)
    }
    state.unknownCommand(`\\${name}`, node)
    if (!node.args) return undefined
    const mandatory = (node.args ?? []).filter((a) => a.openMark === '{')
    return mandatory.flatMap((a) => state.inline(a.content))
  },
}

// keep the State import for type-only consumers that augment handlers
export type { State }
