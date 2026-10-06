/**
 * Escaping rules for Typst 0.15 markup and code.
 *
 * The rules mirror Typst's lexer (`typst-syntax/src/lexer.rs`):
 *
 * - Always special in markup: `\ # $ * _ ` @ < [ ] ~`
 * - Comments start anywhere with `//` or `/*` (this also covers `https://`, which
 *   would otherwise become an auto-link or, once escaped, a line comment)
 * - Shorthands: `--`, `---`, `-?`, `...` and `-` before a digit (minus sign)
 * - At the start of a line (after optional whitespace) `=`, `-`, `+`, `/` and
 *   `<digits>.` followed by a space start headings, lists, enums and terms
 *
 * Everything else (quotes, apostrophes, ordinary punctuation, mid-word
 * hyphens) is left alone so the output stays readable. Straight quotes become
 * smart quotes in Typst, the same as they do in most LaTeX setups.
 */

/** Characters that are always escaped in markup text. */
const ALWAYS = new Set(['\\', '#', '$', '`', '[', ']', '~'])

/** Letters and numbers as Typst's lexer sees them around `*` and `_` (CJK scripts excluded). */
const WORDY = /[\p{Alphabetic}\p{N}]/u
const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u

function isWordy(c: string | undefined): boolean {
  return !!c && WORDY.test(c) && !CJK.test(c)
}

/** Characters that start a block element at the start of a line. */
const LINE_START = new Set(['=', '-', '+', '/'])

/** Unicode newlines as recognised by Typst, plus other vertical whitespace. */
const NEWLINES = /\r\n|[\n\v\f\r\u0085\u2028\u2029]/g

/** C0/C1 control characters (except tab/newlines) that have no business in a document. */
// eslint-disable-next-line no-control-regex
const CONTROL = /[\u0000-\u0008\u000E-\u001F\u007F-\u0084\u0086-\u009F]/g

const ALNUM = /[\p{Alphabetic}\p{N}]/u
const DIGIT = /\p{N}/u
const ID_START = /[\p{XID_Start}_]/u
const ID_CONTINUE = /[\p{XID_Continue}-]/u
const LABEL_CHAR = /[\p{XID_Continue}\-.:]/u
const WHITESPACE = /\s/

/** Is `c` a letter or number (what Typst calls "wordy", but slightly more conservative)? */
export function isAlnum(c: string | undefined): boolean {
  return !!c && ALNUM.test(c)
}

export function isIdStart(c: string | undefined): boolean {
  return !!c && ID_START.test(c)
}

export function isIdContinue(c: string | undefined): boolean {
  return !!c && ID_CONTINUE.test(c)
}

/** Can `c` appear in a `<label>` or `@ref` literal? */
export function isLabelChar(c: string | undefined): boolean {
  return !!c && LABEL_CHAR.test(c)
}

/** Words that look like identifiers but are keywords or literals. */
const KEYWORDS = new Set([
  'none',
  'auto',
  'true',
  'false',
  'not',
  'and',
  'or',
  'let',
  'set',
  'show',
  'context',
  'if',
  'else',
  'for',
  'in',
  'while',
  'break',
  'continue',
  'return',
  'import',
  'include',
  'as',
  '_',
])

/** A valid Typst identifier, e.g. `jote-box`, `_x`, `table2` (not a keyword). */
export function isIdentifier(name: string): boolean {
  return /^[\p{XID_Start}_][\p{XID_Continue}-]*$/u.test(name) && !KEYWORDS.has(name)
}

/** A string that can be written as `<label>` (and as `@label`, modulo trailing `.`/`:`) */
export function isValidLabel(name: string): boolean {
  return /^[\p{XID_Continue}\-.:]+$/u.test(name)
}

/**
 * Turn an arbitrary string into a valid label name: every character Typst
 * does not allow in a label literal becomes `-`. Converters should run both
 * label definitions and references through this (the serializer does so
 * automatically for `label` nodes, `heading.label` and `ref.target`).
 */
export function sanitizeLabel(name: string): string {
  const out = Array.from(name.normalize('NFC'))
    .map((c) => (isLabelChar(c) ? c : '-'))
    .join('')
  return out || 'label'
}

/** Does `value` contain anything Typst considers a newline? */
export function hasNewline(value: string): boolean {
  return new RegExp(NEWLINES.source).test(value)
}

/** Turn every kind of newline into `\n`. */
export function normalizeNewlines(value: string): string {
  return value.replace(NEWLINES, '\n')
}

/**
 * Normalise text before escaping: all newlines become spaces (a single
 * newline is a space in Typst, two would be a paragraph break and a newline
 * would make the next line subject to block markers), control characters are
 * dropped and tabs become spaces.
 */
export function normalizeText(value: string): string {
  return value.replace(NEWLINES, ' ').replace(CONTROL, '').replace(/\t/g, ' ')
}

export interface EscapeTextOptions {
  /** The text starts at the start of a line (after optional whitespace) */
  atLineStart?: boolean
  /** The character emitted right before this text, if any */
  prevChar?: string
  /** The first character emitted right after this text, if known */
  nextChar?: string
  /** Escape `:` (inside a term list's term) */
  escapeColon?: boolean
}

/**
 * Is `chars[i]` a heading, list, enum or term marker? They need whitespace (or the end, or a
 * comment) after them; `==` is one heading marker.
 */
function isMarker(chars: string[], i: number, nextChar: string | undefined): boolean {
  let j = i + 1
  if (chars[i] === '=') while (chars[j] === '=') j++
  const after = j < chars.length ? chars[j] : nextChar
  return after === undefined || WHITESPACE.test(after) || after === '/'
}

/**
 * Escape a (normalised) string so Typst markup renders it literally.
 */
export function escapeMarkup(value: string, options: EscapeTextOptions = {}): string {
  const chars = Array.from(normalizeText(value))
  const { atLineStart = false, escapeColon = false } = options
  let out = ''

  // index of the first non-whitespace character, if we're at the start of a line
  let lineStartIndex = -1
  if (atLineStart) {
    lineStartIndex = chars.findIndex((c) => !WHITESPACE.test(c))
  }

  // `1.` / `12.` enum markers at the start of a line: index of the dot to escape
  let enumDot = -1
  if (lineStartIndex >= 0 && /\d/.test(chars[lineStartIndex])) {
    let j = lineStartIndex
    while (j < chars.length && /\d/.test(chars[j])) j++
    if (j > lineStartIndex && chars[j] === '.') {
      const after = chars[j + 1]
      if (after === undefined || WHITESPACE.test(after)) enumDot = j
    }
  }

  for (let i = 0; i < chars.length; i++) {
    const c = chars[i]
    const next = i + 1 < chars.length ? chars[i + 1] : options.nextChar
    const prev = i > 0 ? chars[i - 1] : options.prevChar

    let escape = false
    if (ALWAYS.has(c)) {
      escape = true
    } else if (c === '*' || c === '_') {
      // strong/emphasis delimiters, except inside a word (`snake_case`)
      escape = !(isWordy(prev) && isWordy(next))
    } else if (c === '<' || c === '@') {
      // labels and references
      escape = next === undefined || isIdContinue(next)
    } else if (i === lineStartIndex && LINE_START.has(c) && isMarker(chars, i, options.nextChar)) {
      escape = true
    } else if (i === enumDot) {
      escape = true
    } else if (c === '/') {
      // `//` and `/*` open comments (also guards `https://` auto-links),
      // `*/` (after a strong delimiter) closes one
      escape = next === '/' || next === '*' || (i === 0 && prev === '*')
    } else if (c === '-') {
      // `--` / `---` dashes, `-?` soft hyphen, `-1` minus sign
      // (and a `-` right after a `-` that came before this text, such as a `--` shorthand)
      escape =
        next === '-' ||
        next === '?' ||
        (i === 0 && prev === '-') ||
        (DIGIT.test(next ?? '') && !isAlnum(prev))
    } else if (c === '.') {
      // `...` ellipsis
      escape = chars[i + 1] === '.' && chars[i + 2] === '.'
    } else if (c === ':') {
      escape = escapeColon
    }

    out += escape ? '\\' + c : c
  }

  return out
}

/**
 * Escape a string for a Typst string literal, including the quotes.
 */
export function escapeString(value: string): string {
  let out = '"'
  for (const c of value) {
    switch (c) {
      case '\\':
        out += '\\\\'
        break
      case '"':
        out += '\\"'
        break
      case '\n':
        out += '\\n'
        break
      case '\r':
        out += '\\r'
        break
      case '\t':
        out += '\\t'
        break
      default: {
        const code = c.codePointAt(0) ?? 0
        // other control characters and unicode newlines
        if (code < 0x20 || (code >= 0x7f && code <= 0x9f) || code === 0x2028 || code === 0x2029) {
          out += `\\u{${code.toString(16)}}`
        } else {
          out += c
        }
      }
    }
  }
  return out + '"'
}

/**
 * Make text safe inside a `/* … *\/` comment (Typst block comments nest).
 */
export function escapeBlockComment(value: string): string {
  return value.replace(/\*\//g, '* /').replace(/\/\*/g, '/ *')
}
