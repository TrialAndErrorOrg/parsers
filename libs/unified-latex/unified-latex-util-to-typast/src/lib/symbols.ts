/**
 * Character-level tables: text-mode symbol macros, accents, pifont dingbats and fontawesome icons.
 */

/** Argument-less macros that stand for a literal string in text mode. */
export const textSymbols: Record<string, string> = {
  // escaped specials
  '&': '&',
  '%': '%',
  $: '$',
  '#': '#',
  _: '_',
  '{': '{',
  '}': '}',
  ' ': ' ',
  ',': ' ',
  ';': ' ',
  ':': ' ',
  '!': '',
  '-': '­',
  '/': '',
  '@': '',
  // dashes, quotes, punctuation
  textendash: '–',
  textemdash: '—',
  textbullet: '•',
  textperiodcentered: '·',
  textquoteleft: '‘',
  textquoteright: '’',
  textquotedblleft: '“',
  textquotedblright: '”',
  textquotedbl: '"',
  textquotesingle: "'",
  guillemotleft: '«',
  guillemotright: '»',
  guillemetleft: '«',
  guillemetright: '»',
  quotedblbase: '„',
  quotesinglbase: '‚',
  ldots: '…',
  dots: '…',
  textellipsis: '…',
  textasciitilde: '~',
  textasciicircum: '^',
  textbackslash: '\\',
  textbar: '|',
  textless: '<',
  textgreater: '>',
  textunderscore: '_',
  textbraceleft: '{',
  textbraceright: '}',
  textdollar: '$',
  slash: '/',
  // signs
  S: '§',
  P: '¶',
  dag: '†',
  ddag: '‡',
  textdagger: '†',
  textdaggerdbl: '‡',
  copyright: '©',
  textcopyright: '©',
  textregistered: '®',
  texttrademark: '™',
  textdegree: '°',
  textcelsius: '℃',
  texttimes: '×',
  textdiv: '÷',
  textpm: '±',
  textminus: '−',
  textmu: 'µ',
  textonehalf: '½',
  textonequarter: '¼',
  textthreequarters: '¾',
  textsection: '§',
  textparagraph: '¶',
  textpertenthousand: '‱',
  textperthousand: '‰',
  textnumero: '№',
  textcurrency: '¤',
  euro: '€',
  texteuro: '€',
  pounds: '£',
  textsterling: '£',
  textyen: '¥',
  checkmark: '✓',
  // letters
  ss: 'ß',
  SS: 'SS',
  ae: 'æ',
  AE: 'Æ',
  oe: 'œ',
  OE: 'Œ',
  aa: 'å',
  AA: 'Å',
  o: 'ø',
  O: 'Ø',
  l: 'ł',
  L: 'Ł',
  i: 'ı',
  j: 'ȷ',
  dh: 'ð',
  DH: 'Ð',
  th: 'þ',
  TH: 'Þ',
  ng: 'ŋ',
  NG: 'Ŋ',
  // logos
  LaTeX: 'LaTeX',
  TeX: 'TeX',
  LaTeXe: 'LaTeX2ε',
  BibTeX: 'BibTeX',
  // spacing
  quad: ' ',
  qquad: '  ',
  enspace: ' ',
  thinspace: ' ',
  nobreakspace: '\u00A0',
  space: ' ',
  // things people (wrongly, but successfully) use in text mode
  bullet: '•',
  rightarrow: '→',
  leftarrow: '←',
  leftrightarrow: '↔',
  Rightarrow: '⇒',
  Leftarrow: '⇐',
  Leftrightarrow: '⇔',
  uparrow: '↑',
  downarrow: '↓',
  to: '→',
  times: '×',
  pm: '±',
  mp: '∓',
  cdot: '·',
  approx: '≈',
  neq: '≠',
  ne: '≠',
  leq: '≤',
  le: '≤',
  geq: '≥',
  ge: '≥',
  sim: '∼',
  infty: '∞',
  degree: '°',
  circ: '∘',
  triangleright: '▷',
  triangleleft: '◁',
  star: '⋆',
  square: '□',
  blacksquare: '■',
  checkedbox: '☑',
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  delta: 'δ',
  Delta: 'Δ',
  epsilon: 'ϵ',
  varepsilon: 'ε',
  eta: 'η',
  theta: 'θ',
  kappa: 'κ',
  lambda: 'λ',
  mu: 'μ',
  pi: 'π',
  rho: 'ρ',
  sigma: 'σ',
  Sigma: 'Σ',
  tau: 'τ',
  phi: 'ϕ',
  varphi: 'φ',
  chi: 'χ',
  psi: 'ψ',
  omega: 'ω',
  Omega: 'Ω',
}

/** Accent macros → Unicode combining character. */
export const accents: Record<string, string> = {
  "'": '́',
  '`': '̀',
  '^': '̂',
  '"': '̈',
  '~': '̃',
  '=': '̄',
  '.': '̇',
  u: '̆',
  v: '̌',
  H: '̋',
  c: '̧',
  k: '̨',
  r: '̊',
  d: '̣',
  b: '̱',
  t: '͡',
}

export function applyAccent(accent: string, base: string): string {
  const mark = accents[accent]
  if (!mark) return base
  if (!base) return mark.normalize('NFC')
  // dotless i/j take accents as plain i/j
  const first = base[0] === 'ı' ? 'i' : base[0] === 'ȷ' ? 'j' : base[0]
  return (first + mark + base.slice(1)).normalize('NFC')
}

/**
 * pifont `\ding{n}`: ZapfDingbats code → Unicode. Most of the 0x21–0x7E range sits at
 * U+2700 + (n - 0x20); the exceptions are the glyphs that were assigned elsewhere.
 */
export function ding(n: number): string | undefined {
  const exceptions: Record<number, number> = {
    0x25: 0x260e,
    0x2a: 0x261b,
    0x2b: 0x261e,
    0x48: 0x2605,
    0x6c: 0x25cf,
    0x6e: 0x25a0,
    0x73: 0x25b2,
    0x74: 0x25bc,
    0x75: 0x25c6,
    0x77: 0x25d7,
    0xa8: 0x2663,
    0xa9: 0x2666,
    0xaa: 0x2665,
    0xab: 0x2660,
    0xd5: 0x2192,
    0xd6: 0x2194,
    0xd7: 0x2195,
  }
  if (exceptions[n]) return String.fromCodePoint(exceptions[n])
  if (n === 0x20) return ' '
  if (n >= 0x21 && n <= 0x7e) return String.fromCodePoint(0x2700 + n - 0x20)
  if (n >= 0xa1 && n <= 0xa7) return String.fromCodePoint(0x2761 + n - 0xa1)
  if (n >= 0xac && n <= 0xb5) return String.fromCodePoint(0x2460 + n - 0xac)
  if (n >= 0xb6 && n <= 0xd4) return String.fromCodePoint(0x2776 + n - 0xb6)
  if (n >= 0xd8 && n <= 0xef) return String.fromCodePoint(0x2798 + n - 0xd8)
  if (n >= 0xf1 && n <= 0xfe) return String.fromCodePoint(0x27b1 + n - 0xf1)
  return undefined
}

/**
 * fontawesome5 icons → the closest Unicode character. Keyed by icon name; `regular` variants
 * use the `regular:` prefix.
 */
export const fontawesome: Record<string, string> = {
  circle: '●',
  'regular:circle': '○',
  'dot-circle': '◉',
  'regular:dot-circle': '◉',
  'circle-dot': '◉',
  'regular:circle-dot': '◉',
  square: '■',
  'regular:square': '□',
  'check-square': '☑',
  'regular:check-square': '☑',
  check: '✓',
  times: '✗',
  'times-circle': '⊗',
  'regular:times-circle': '⊗',
  'check-circle': '✔',
  'regular:check-circle': '✔',
  star: '★',
  'regular:star': '☆',
  'star-half': '⯨',
  'arrow-right': '→',
  'arrow-left': '←',
  'long-arrow-alt-right': '⟶',
  'angle-right': '›',
  'chevron-right': '›',
  'caret-right': '▸',
  'exclamation-triangle': '⚠',
  'info-circle': 'ⓘ',
  'question-circle': '?',
  envelope: '✉',
  'regular:envelope': '✉',
  phone: '✆',
  user: '👤',
  globe: '🌐',
  link: '🔗',
  book: '📖',
  lock: '🔒',
  'lock-open': '🔓',
  'unlock-alt': '🔓',
  'file-alt': '🗎',
  'regular:file-alt': '🗎',
  flag: '⚑',
  'regular:flag': '⚐',
  heart: '♥',
  'regular:heart': '♡',
  minus: '−',
  plus: '+',
  'thumbs-up': '👍',
  'thumbs-down': '👎',
  orcid: 'iD',
}

/** fontawesome5 shortcut macros (`\faCircle` …) → icon name. */
export function faMacroToIcon(macro: string): string | undefined {
  if (!macro.startsWith('fa') || macro.length < 3 || macro === 'faIcon') return undefined
  // \faCircle → circle, \faDotCircle → dot-circle, \faArrowRight → arrow-right
  return macro
    .slice(2)
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

/**
 * Font size switches → Typst sizes. LaTeX sizes are absolute (`\footnotesize` is 8pt in a 10pt
 * class wherever it is used, also inside `\small` text), so these are too: the JOTE class is
 * always 10pt.
 */
export const fontSizes: Record<string, string> = {
  tiny: '5pt',
  scriptsize: '7pt',
  footnotesize: '8pt',
  small: '9pt',
  normalsize: '10pt',
  large: '12pt',
  Large: '14.4pt',
  LARGE: '17.28pt',
  huge: '20.74pt',
  Huge: '24.88pt',
}
