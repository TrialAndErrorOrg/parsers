import { describe, it, expect } from 'vitest'
import {
  escapeBlockComment,
  escapeMarkup,
  escapeString,
  isIdentifier,
  isValidLabel,
  normalizeText,
  sanitizeLabel,
} from './escape.js'

describe('escapeMarkup', () => {
  it.each([
    ['plain text, with punctuation: yes!', 'plain text, with punctuation: yes!'],
    ['back\\slash', 'back\\\\slash'],
    [
      '#hash $dollar *star* _under_ `tick` @at <lt> [br] ~tilde',
      '\\#hash \\$dollar \\*star\\* \\_under\\_ \\`tick\\` \\@at \\<lt> \\[br\\] \\~tilde',
    ],
    ['it\'s "quoted" (paren) {brace} | ^ % & ? !', 'it\'s "quoted" (paren) {brace} | ^ % & ? !'],
    ['well-known e-mail 1-2 a-1', 'well-known e-mail 1-2 a-1'],
    ['en--dash em---dash soft-?hyphen', 'en\\--dash em\\-\\--dash soft\\-?hyphen'],
    ['minus -1 (-2)', 'minus \\-1 (\\-2)'],
    ['wait... ok.. ....', 'wait\\... ok.. \\.\\...'],
    ['a // b /* c */ d', 'a \\// b \\/\\* c \\*/ d'],
    ['https://doi.org/10.1/x_y', 'https:\\//doi.org/10.1/x\\_y'],
    ['and/or 1/2', 'and/or 1/2'],
    ['ends with backslash\\', 'ends with backslash\\\\'],
    ['line\nbreak\r\nand\u2028more', 'line break and more'],
    ['tab\there', 'tab here'],
    ['a = b - c + d / e', 'a = b - c + d / e'],
  ])('%j', (input, expected) => {
    expect(escapeMarkup(input)).toBe(expected)
  })

  it.each([
    ['= Not a heading', '\\= Not a heading'],
    ['== also not', '\\== also not'],
    ['- not a list', '\\- not a list'],
    ['+ not an enum', '\\+ not an enum'],
    ['/ not a term: x', '\\/ not a term: x'],
    ['1. not an enum', '1\\. not an enum'],
    ['2020. A year', '2020\\. A year'],
    ['1.5 million', '1.5 million'],
    ['12.', '12\\.'],
    ['  - indented', '  \\- indented'],
    ['-dash', '\\-dash'],
    ['plain', 'plain'],
  ])('at line start: %j', (input, expected) => {
    expect(escapeMarkup(input, { atLineStart: true })).toBe(expected)
    // not special mid-line (except for things that are always special)
    expect(escapeMarkup(input)).not.toContain('\\=')
  })

  it('looks at neighbouring characters', () => {
    expect(escapeMarkup('a/', { nextChar: '*' })).toBe('a\\/')
    expect(escapeMarkup('a/', { nextChar: '/' })).toBe('a\\/')
    expect(escapeMarkup('a/', { nextChar: 'b' })).toBe('a/')
    expect(escapeMarkup('-1', { prevChar: 'x' })).toBe('-1')
    expect(escapeMarkup('-1', { prevChar: ' ' })).toBe('\\-1')
    expect(escapeMarkup('-', { nextChar: '-' })).toBe('\\-')
  })

  it('escapes colons in terms', () => {
    expect(escapeMarkup('a: b', { escapeColon: true })).toBe('a\\: b')
  })
})

describe('escapeString', () => {
  it('escapes quotes, backslashes and control characters', () => {
    expect(escapeString('a "b" \\ c\nd\te\r')).toBe('"a \\"b\\" \\\\ c\\nd\\te\\r"')
    expect(escapeString('x\u2028y\u0000')).toBe('"x\\u{2028}y\\u{0}"')
    expect(escapeString('#$*_[]')).toBe('"#$*_[]"')
  })
})

describe('labels', () => {
  it('validates and sanitizes', () => {
    expect(isValidLabel('fig:1.a-b_c')).toBe(true)
    expect(isValidLabel('élan')).toBe(true)
    expect(isValidLabel('a b')).toBe(false)
    expect(isValidLabel('')).toBe(false)
    expect(sanitizeLabel('Figure 1 (a)')).toBe('Figure-1--a-')
    expect(sanitizeLabel('')).toBe('label')
    expect(sanitizeLabel('ok:fine')).toBe('ok:fine')
  })

  it('identifiers', () => {
    expect(isIdentifier('jote-box')).toBe(true)
    expect(isIdentifier('_x1')).toBe(true)
    expect(isIdentifier('1x')).toBe(false)
    expect(isIdentifier('a b')).toBe(false)
    expect(isIdentifier('none')).toBe(false)
    expect(isIdentifier('_')).toBe(false)
  })
})

describe('misc', () => {
  it('normalizes text', () => {
    expect(normalizeText('a\u0007b\nc')).toBe('ab c')
  })
  it('defuses block comments', () => {
    expect(escapeBlockComment('a */ b /* c')).toBe('a * / b / * c')
  })
})
