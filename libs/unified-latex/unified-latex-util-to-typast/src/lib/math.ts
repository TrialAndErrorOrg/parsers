import { symbolMap, tex2typst } from 'tex2typst'

export type MathResult =
  | { ok: true; value: string; unknown: string[] }
  | { ok: false; error: string }

/** LaTeX commands (beyond tex2typst's symbol table) that tex2typst converts properly. */
const KNOWN_COMMANDS = new Set(
  (
    'frac dfrac tfrac cfrac sqrt text mathrm mathbf mathit mathbb mathcal ' +
    'mathfrak mathsf mathtt mathscr boldsymbol operatorname operatorname* left right middle big Big bigg Bigg bigl bigr Bigl Bigr ' +
    'biggl biggr Biggl Biggr begin end hat widehat bar overline underline tilde widetilde vec dot ddot ' +
    'overbrace underbrace overset underset stackrel binom dbinom tbinom limits nolimits sum prod int iint oint lim ' +
    'log ln exp sin cos tan sec csc cot arcsin arccos arctan sinh cosh tanh max min sup inf det dim ker deg gcd arg Pr ' +
    'quad qquad mod bmod pmod xrightarrow xleftarrow color'
  ).split(' '),
)

/** Text-mode commands that people use in math, mapped to what tex2typst understands. */
const TEXT_IN_MATH: Record<string, string> = {
  textbf: 'mathbf',
  textit: 'mathit',
  textsf: 'mathsf',
  texttt: 'mathtt',
  textrm: 'text',
  textnormal: 'text',
  textup: 'text',
  mbox: 'text',
  hbox: 'text',
  bm: 'boldsymbol',
  pmb: 'boldsymbol',
}

/** Text accents (`\^{y}`) → math accents */
const TEXT_ACCENTS: Record<string, string> = {
  '^': 'hat',
  '~': 'tilde',
  '=': 'bar',
  '.': 'dot',
  '"': 'ddot',
}

/** Environments tex2typst lacks, mapped to ones it has */
const MATH_ENVS: Record<string, string> = {
  split: 'aligned',
  align: 'aligned',
  'align*': 'aligned',
  alignat: 'aligned',
  eqnarray: 'aligned',
  multline: 'aligned',
  gathered: 'aligned',
  multlined: 'aligned',
  gather: 'aligned',
}

/*
 * Each pattern matches `\\` (a line break) as a token of its own first, so the second backslash of
 * `\\b` is never read as the start of a command `\b`. Replacers return that token unchanged.
 */
const COMMAND = /\\\\|\\([a-zA-Z]+)(\*?)/g
const ACCENT = /\\\\|\\([\^~=."])\s*(\{[^{}]*\}|[a-zA-Z])/g
const ENV = /\\\\|\\(begin|end)\{([a-z]+\*?)\}/g
const TEXT_ARG = /\\\\|\\text\s*\{/g
/** `\\[2pt]`, `\\*[1ex]`: the optional vertical space after a line break */
const BREAK_SPACE = /(\\\\)\*?\s*\[\s*-?[\d.]+\s*(?:pt|em|ex|mm|cm|in|bp|mu|sp|pc|dd|cc)\s*\]/g
/** Stands in for `"` inside `\text{…}`, which tex2typst would emit unescaped inside a string */
const QUOTE = '\uE000'

/** Apply `fn` to the contents of every `\text{…}` argument (balanced braces). */
function mapTextArgs(s: string, fn: (body: string) => string): string {
  let out = ''
  let last = 0
  TEXT_ARG.lastIndex = 0
  for (let m = TEXT_ARG.exec(s); m; m = TEXT_ARG.exec(s)) {
    if (m[0] === '\\\\') continue
    const open = m.index + m[0].length
    let depth = 1
    let i = open
    for (; i < s.length && depth > 0; i++) {
      if (s[i] === '\\') i++
      else if (s[i] === '{') depth++
      else if (s[i] === '}') depth--
    }
    if (depth > 0) break
    out += s.slice(last, open) + fn(s.slice(open, i - 1)) + '}'
    last = i
    TEXT_ARG.lastIndex = i
  }
  return out + s.slice(last)
}

/** Rewrite LaTeX math into the subset tex2typst handles. */
export function normalizeMath(tex: string): string {
  let s = tex
    .replace(COMMAND, (m, name?: string, star?: string) =>
      name && TEXT_IN_MATH[name] ? `\\${TEXT_IN_MATH[name]}${star}` : m,
    )
    .replace(ACCENT, (m, acc?: string, arg?: string) => {
      if (!acc || !arg) return m
      const body = arg.startsWith('{') ? arg : `{${arg}}`
      return `\\${TEXT_ACCENTS[acc]}${body}`
    })
    .replace(ENV, (m, which?: string, env?: string) =>
      which && env && MATH_ENVS[env] ? `\\${which}{${MATH_ENVS[env]}}` : m,
    )
    .replace(BREAK_SPACE, '$1')
  // TeX quote ligatures in text become curly quotes; `"` is protected from tex2typst
  s = mapTextArgs(s, (body) => body.replace(/``/g, '“').replace(/''/g, '”').replace(/"/g, QUOTE))
  // alignment points or line breaks at the top level need an aligned environment
  if (/(?:^|[^\\])&|\\\\/.test(s) && !/\\begin\{/.test(s)) s = `\\begin{aligned}${s}\\end{aligned}`
  return s
}

/** Whether `\name` is a math symbol tex2typst knows (used for math symbols written in text mode). */
export function isMathSymbol(name: string): boolean {
  return symbolMap.has(name)
}

/** LaTeX math → Typst math via tex2typst. Never throws; unknown commands become upright text. */
export function texToTypstMath(tex: string): MathResult {
  const unknown: string[] = []
  const source = normalizeMath(tex)
    // spacing/sizing/numbering commands Typst doesn't need
    .replace(/\\(displaystyle|textstyle|scriptstyle|scriptscriptstyle|nonumber|notag)\b/g, '')
    .replace(/\\label\s*\{[^}]*\}/g, '')
    .replace(COMMAND, (m, name?: string, star?: string) => {
      if (!name) return m
      if (symbolMap.has(name) || KNOWN_COMMANDS.has(name + star) || KNOWN_COMMANDS.has(name))
        return m
      unknown.push(name)
      return `\\mathrm{${name}}`
    })
    .trim()
  if (!source) return { ok: true, value: '', unknown }
  try {
    // `\"` is a literal quote both inside a Typst string and in bare math
    const value = tex2typst(source, { nonStrict: true }).split(QUOTE).join('\\"')
    return { ok: true, value, unknown }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}
