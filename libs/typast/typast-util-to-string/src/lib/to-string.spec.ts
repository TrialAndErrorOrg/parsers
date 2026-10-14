import { describe, expect, it } from 'vitest'
import { fromTypst } from 'typast-util-from-string'
import { toString } from './to-string.js'

const tree = (source: string) => fromTypst(source, { positions: false })

describe('toString', () => {
  it('gets the text of markup', () => {
    expect(
      toString(tree('= Intro <intro>\n\nSome *bold* and _emph_ text\\#1 -- "quoted" `raw`.')),
    ).toBe('Intro \n\nSome bold and emph text#1 – "quoted" raw.')
  })

  it('reaches content in calls, arguments and dictionaries', () => {
    expect(
      toString(
        tree(
          'A#footnote[note]. #figure(image("a.png"), caption: [A _cat_.])[Body] #show: tpl.with(title: [T], authors: ((name: [Jane]),))',
        ),
      ),
    ).toBe('Anote. A cat.Body TJane')
  })

  it('leaves code, comments and labels out', () => {
    expect(toString(tree('#set text(size: 10pt)\n#let x = 1\na // c\n<l>b'))).toBe('a  b')
  })

  it('includes math unless asked not to', () => {
    const t = tree('$x_1^2 + a/b$ and $sqrt(y)$')
    expect(toString(t)).toBe('x_1^2 + a/b and sqrt(y)')
    expect(toString(t, { includeMath: false })).toBe(' and ')
  })

  it('includes strings when asked', () => {
    expect(toString(tree('#text("hi")'), { includeStrings: true })).toBe('hi')
    expect(toString(tree('#text("hi")'))).toBe('')
  })

  it('takes nothing, a node or a list', () => {
    expect(toString(undefined)).toBe('')
    expect(toString(tree('a *b*').children)).toBe('a b')
  })
})
