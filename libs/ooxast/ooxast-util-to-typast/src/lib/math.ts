/**
 * Office Math (OMML) → Typst math.
 *
 * OMML is a presentation tree much like MathML: fractions, scripts, n-ary operators, delimiters,
 * … so it maps onto Typst's math functions directly. Equations typed in Word's "LaTeX" linear
 * format but never converted (the runs contain literal `\frac{…}`) are handed to `tex2typst`.
 */
import type { Element } from 'xast'
import { tex2typst } from 'tex2typst'
import { attr, child, isEl, kids, ownText } from './util.js'

/** Typst math operators that render upright with proper spacing */
const OPERATORS = new Set([
  'arccos',
  'arcsin',
  'arctan',
  'arg',
  'cos',
  'cosh',
  'cot',
  'coth',
  'csc',
  'csch',
  'ctg',
  'deg',
  'det',
  'dim',
  'exp',
  'gcd',
  'hom',
  'id',
  'im',
  'inf',
  'ker',
  'lg',
  'lim',
  'liminf',
  'limsup',
  'ln',
  'log',
  'max',
  'min',
  'mod',
  'Pr',
  'sec',
  'sech',
  'sin',
  'sinc',
  'sinh',
  'sup',
  'tan',
  'tanh',
  'tg',
  'tr',
])

const NARY: Record<string, string> = {
  '∑': 'sum',
  '∏': 'product',
  '∐': 'product.co',
  '∫': 'integral',
  '∬': 'integral.double',
  '∭': 'integral.triple',
  '∮': 'integral.cont',
  '∯': 'integral.surf',
  '∰': 'integral.vol',
  '⋃': 'union.big',
  '⋂': 'inter.big',
  '⋁': 'or.big',
  '⋀': 'and.big',
  '⨁': 'plus.circle.big',
  '⨂': 'times.circle.big',
}

const ACCENTS: Record<string, string> = {
  '̂': 'hat',
  '^': 'hat',
  '̃': 'tilde',
  '~': 'tilde',
  '̄': 'macron',
  '̅': 'overline',
  '¯': 'overline',
  '̇': 'dot',
  '̈': 'dot.double',
  '⃛': 'dot.triple',
  '⃗': 'arrow',
  '⃖': 'arrow.l',
  '⃡': 'arrow.l.r',
  '́': 'acute',
  '̀': 'grave',
  '̌': 'caron',
  '̆': 'breve',
  '̊': 'circle',
}

// Characters that mean something in Typst math and must be escaped when they are literal text.
// Parentheses/brackets/braces are only escaped when unbalanced (balanced ones scale nicely).
const ESCAPE = new Set([
  '\\',
  '$',
  '#',
  '"',
  '_',
  '^',
  '/',
  '&',
  "'",
  '@',
  '~',
  '*',
  ',',
  ';',
  ':',
  '!',
  '<',
  '>',
  '|',
  '`',
])

export interface MathOptions {
  /** inside `m:eqArr`, `&` marks alignment points */
  align?: boolean
}

/** Convert an `m:oMath` (or any OMML container) to Typst math source. */
export function ommlToTypst(node: Element, options: MathOptions = {}): string {
  const linear = linearLatex(node)
  if (linear) {
    try {
      return tex2typst(linear)
    } catch {
      // fall through to the structural conversion
    }
  }
  return clean(seq(node, options))
}

/**
 * If an equation consists only of runs whose text looks like LaTeX (`\frac{a}{b}`, `x^{2}`),
 * return that text.
 */
function linearLatex(node: Element): string | undefined {
  let structural = false
  let text = ''
  const walk = (el: Element) => {
    for (const k of kids(el)) {
      if (k.name === 'm:r' || k.name === 'w:r') {
        const t = child(k, 'm:t') ?? child(k, 'w:t')
        if (t) text += ownText(t)
      } else if (
        k.name.endsWith('Pr') ||
        k.name === 'w:bookmarkStart' ||
        k.name === 'w:bookmarkEnd'
      ) {
        continue
      } else if (k.name === 'm:oMath') {
        walk(k)
      } else {
        structural = true
      }
    }
  }
  walk(node)
  if (structural) return undefined
  if (/\\[a-z]+|[_^]\{/i.test(text)) return text
  return undefined
}

function clean(s: string): string {
  return s.replace(/\s+/g, ' ').trim()
}

/** Convert the children of an OMML container and join them. */
function seq(node: Element | undefined, options: MathOptions): string {
  if (!node) return ''
  return kids(node)
    .map((k) => one(k, options))
    .filter(Boolean)
    .join(' ')
}

/** An argument (m:e, m:num, …) as Typst, `""`-safe for function call positions. */
function arg(node: Element | undefined, options: MathOptions): string {
  const s = clean(seq(node, options))
  return s
}

/** Wrap `s` so it can be the base of an attachment. */
function base(s: string): string {
  if (!s) return '""'
  if (isAtom(s)) return s
  return `attach(${s})`
}

/** A single token: one letter, number, symbol name, call or quoted string */
function isAtom(s: string): boolean {
  return (
    /^[\p{L}\p{N}]$/u.test(s) ||
    /^\d+(?:\.\d+)?$/.test(s) ||
    /^[a-z]+(?:\.[a-z]+)*$/i.test(s) ||
    /^"[^"]*"$/.test(s) ||
    /^\\?[^\s\p{L}\p{N}]$/u.test(s) ||
    (/^[a-z.]+\(.*\)$/i.test(s) &&
      balanced(s.slice(s.indexOf('('))) &&
      matchingClose(s, s.indexOf('(')) === s.length - 1)
  )
}

function matchingClose(s: string, open: number): number {
  let depth = 0
  for (let i = open; i < s.length; i++) {
    const c = s[i]
    if (c === '\\') {
      i++
      continue
    }
    if (c === '(') depth++
    if (c === ')') {
      depth--
      if (depth === 0) return i
    }
  }
  return -1
}

function script(s: string): string {
  return `(${s})`
}

function one(el: Element, options: MathOptions): string {
  switch (el.name) {
    case 'm:r':
      return mathRun(el, options)
    case 'w:r': {
      // a normal Word run inside math: text
      const t = kids(el)
        .filter((k) => k.name === 'w:t')
        .map(ownText)
        .join('')
      return t ? quote(t) : ''
    }
    case 'm:oMath':
    case 'm:e':
    case 'm:num':
    case 'm:den':
    case 'm:sub':
    case 'm:sup':
    case 'm:deg':
    case 'm:lim':
    case 'm:fName':
    case 'm:box':
    case 'm:borderBox':
      return seq(el, options)
    case 'm:f': {
      const type = attr(child(child(el, 'm:fPr'), 'm:type'), 'm:val')
      const num = arg(child(el, 'm:num'), options)
      const den = arg(child(el, 'm:den'), options)
      if (type === 'lin') return `${base(num)} \\/ ${base(den)}`
      if (type === 'noBar') return `binom(${num || '""'}, ${den || '""'})`
      return `frac(${num || '""'}, ${den || '""'})`
    }
    case 'm:sSup':
      return attachment(arg(child(el, 'm:e'), options), undefined, arg(child(el, 'm:sup'), options))
    case 'm:sSub':
      return attachment(arg(child(el, 'm:e'), options), arg(child(el, 'm:sub'), options), undefined)
    case 'm:sSubSup':
      return attachment(
        arg(child(el, 'm:e'), options),
        arg(child(el, 'm:sub'), options),
        arg(child(el, 'm:sup'), options),
      )
    case 'm:sPre': {
      const e = arg(child(el, 'm:e'), options) || '""'
      const sub = arg(child(el, 'm:sub'), options)
      const sup = arg(child(el, 'm:sup'), options)
      return `attach(${e}${sup ? `, tl: ${sup}` : ''}${sub ? `, bl: ${sub}` : ''})`
    }
    case 'm:rad': {
      const pr = child(el, 'm:radPr')
      const hide = attr(child(pr, 'm:degHide'), 'm:val')
      const deg = arg(child(el, 'm:deg'), options)
      const e = arg(child(el, 'm:e'), options) || '""'
      if (!deg || hide === '1' || hide === 'on' || hide === 'true') return `sqrt(${e})`
      return `root(${deg}, ${e})`
    }
    case 'm:nary': {
      const pr = child(el, 'm:naryPr')
      const chr = attr(child(pr, 'm:chr'), 'm:val') ?? '∫'
      const op = NARY[chr] ?? escapeText(chr)
      const subHide = isTrue(attr(child(pr, 'm:subHide'), 'm:val'))
      const supHide = isTrue(attr(child(pr, 'm:supHide'), 'm:val'))
      const limLoc = attr(child(pr, 'm:limLoc'), 'm:val')
      const sub = subHide ? '' : arg(child(el, 'm:sub'), options)
      const sup = supHide ? '' : arg(child(el, 'm:sup'), options)
      const e = arg(child(el, 'm:e'), options)
      const opBase = limLoc === 'undOvr' && op.startsWith('integral') ? `limits(${op})` : op
      return `${opBase}${sub ? `_${script(sub)}` : ''}${sup ? `^${script(sup)}` : ''} ${e}`
    }
    case 'm:d': {
      const pr = child(el, 'm:dPr')
      const beg = attr(child(pr, 'm:begChr'), 'm:val') ?? '('
      const end = attr(child(pr, 'm:endChr'), 'm:val') ?? ')'
      const sep = attr(child(pr, 'm:sepChr'), 'm:val') ?? '|'
      const parts = kids(el)
        .filter((k) => k.name === 'm:e')
        .map((e) => arg(e, options))
      const inner = parts.join(` ${delim(sep)} `)
      // matching pairs stay unescaped so that Typst scales them to the content
      if (['()', '[]', '{}'].includes(beg + end)) return `${beg}${inner}${end}`
      return `${delim(beg)}${inner}${delim(end)}`
    }
    case 'm:func': {
      const name = clean(seq(child(el, 'm:fName'), options))
      const e = arg(child(el, 'm:e'), options)
      return `${name} ${e}`
    }
    case 'm:acc': {
      const chr = attr(child(child(el, 'm:accPr'), 'm:chr'), 'm:val') ?? '̂'
      const e = arg(child(el, 'm:e'), options) || '""'
      const fn = ACCENTS[chr]
      return fn ? `${fn}(${e})` : `accent(${e}, ${quote(chr)})`
    }
    case 'm:bar': {
      const pos = attr(child(child(el, 'm:barPr'), 'm:pos'), 'm:val')
      const e = arg(child(el, 'm:e'), options) || '""'
      return pos === 'top' ? `overline(${e})` : `underline(${e})`
    }
    case 'm:groupChr': {
      const pr = child(el, 'm:groupChrPr')
      const chr = attr(child(pr, 'm:chr'), 'm:val') ?? '⏟'
      const e = arg(child(el, 'm:e'), options) || '""'
      if (chr === '⏟') return `underbrace(${e})`
      if (chr === '⏞') return `overbrace(${e})`
      const pos = attr(child(pr, 'm:pos'), 'm:val')
      return pos === 'top'
        ? `overset(${e}, ${escapeText(chr)})`
        : `underset(${e}, ${escapeText(chr)})`
    }
    case 'm:limLow': {
      const e = arg(child(el, 'm:e'), options)
      const lim = arg(child(el, 'm:lim'), options)
      return `${OPERATORS.has(e) ? e : `limits(${e || '""'})`}_${script(lim)}`
    }
    case 'm:limUpp': {
      const e = arg(child(el, 'm:e'), options)
      const lim = arg(child(el, 'm:lim'), options)
      return `${OPERATORS.has(e) ? e : `limits(${e || '""'})`}^${script(lim)}`
    }
    case 'm:m': {
      const rows = kids(el)
        .filter((k) => k.name === 'm:mr')
        .map((mr) =>
          kids(mr)
            .filter((k) => k.name === 'm:e')
            .map((e) => arg(e, options) || '""')
            .join(', '),
        )
      return `mat(delim: #none, ${rows.join('; ')})`
    }
    case 'm:eqArr': {
      const rows = kids(el)
        .filter((k) => k.name === 'm:e')
        .map((e) => arg(e, { ...options, align: true }))
      return rows.join(' \\ ')
    }
    case 'm:phant':
      return ''
    default:
      // properties (m:rPr, m:ctrlPr, m:fPr, …), bookmarks etc.
      if (el.name.endsWith('Pr') || !el.name.startsWith('m:')) return ''
      return seq(el, options)
  }
}

function isTrue(v: string | undefined) {
  return v === '1' || v === 'on' || v === 'true'
}

function attachment(e: string, sub?: string, sup?: string): string {
  if (!sub && !sup) return e
  return `${base(e)}${sub ? `_${script(sub)}` : ''}${sup ? `^${script(sup)}` : ''}`
}

function delim(chr: string): string {
  if (!chr) return ''
  switch (chr) {
    case '(':
    case ')':
    case '[':
    case ']':
    case '{':
    case '}':
      return `\\${chr}`
    case '|':
      return 'bar.v'
    case '‖':
      return 'bar.v.double'
    case '⟨':
    case '〈':
      return 'angle.l'
    case '⟩':
    case '〉':
      return 'angle.r'
    case '⌊':
      return 'floor.l'
    case '⌋':
      return 'floor.r'
    case '⌈':
      return 'ceil.l'
    case '⌉':
      return 'ceil.r'
    default:
      return escapeText(chr)
  }
}

function quote(text: string): string {
  return `"${text.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`
}

/** Text of an `m:r`, tokenized into Typst math. */
function mathRun(r: Element, options: MathOptions): string {
  const rPr = child(r, 'm:rPr')
  const t = kids(r)
    .filter((k) => k.name === 'm:t')
    .map(ownText)
    .join('')
  if (!t) return ''
  if (child(rPr, 'm:nor')) return quote(t)
  const sty = attr(child(rPr, 'm:sty'), 'm:val')
  const plain = sty === 'p' || sty === 'b'
  const bold = sty === 'b' || sty === 'bi'
  const out = tokens(t, plain, options)
  return bold ? `bold(${out || '""'})` : out
}

/** Tokenize literal math text. */
export function tokens(t: string, plain = false, options: MathOptions = {}): string {
  const parts: string[] = []
  const re = /(\p{L}+)|(\d+(?:[.,]\d+)?)|(\s+)|(.)/gsu
  let m: RegExpExecArray | null
  const balance = balancedSet(t)
  while ((m = re.exec(t))) {
    const [, letters, digits, space, other] = m
    if (letters) {
      if (letters.length === 1) {
        parts.push(plain ? `upright(${letters})` : letters)
      } else if (OPERATORS.has(letters)) {
        parts.push(letters)
      } else if (plain) {
        parts.push(quote(letters))
      } else {
        parts.push([...letters].join(' '))
      }
    } else if (digits) {
      parts.push(digits.replace(',', '\\,'))
    } else if (space) {
      continue
    } else if (other) {
      if (other === '&' && options.align) parts.push('&')
      else if ('()[]{}'.includes(other)) parts.push(balance ? other : `\\${other}`)
      else parts.push(escapeText(other))
    }
  }
  return parts.join(' ')
}

function escapeText(c: string): string {
  return [...c].map((ch) => (ESCAPE.has(ch) || '()[]{}'.includes(ch) ? `\\${ch}` : ch)).join('')
}

function balancedSet(t: string): boolean {
  return balanced(t)
}

function balanced(t: string): boolean {
  const stack: string[] = []
  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' }
  for (let i = 0; i < t.length; i++) {
    const c = t[i]
    if (c === '\\') {
      i++
      continue
    }
    if (c === '(' || c === '[' || c === '{') stack.push(c)
    else if (c in pairs) {
      if (stack.pop() !== pairs[c]) return false
    }
  }
  return stack.length === 0
}

export { isEl }
