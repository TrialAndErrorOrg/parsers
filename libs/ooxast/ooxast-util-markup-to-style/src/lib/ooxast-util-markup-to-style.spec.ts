import { describe, it, expect } from 'vitest'
import { markupToStyle } from './ooxast-util-markup-to-style.js'
import { x } from 'xastscript'
import { P, PPr, R, RPr, RPrMap, Root, T } from 'ooxast'
import { Element } from 'xast'

const makeP = (els: (keyof RPrMap | (keyof RPrMap)[] | Element)[]) =>
  x('w:p', [
    x('w:pPr', [x('w:pStyle', { 'w:val': 'Normal' })]),
    ...els.flatMap((el) =>
      Array.isArray(el) || typeof el === 'string'
        ? (x('w:r', [
            ...(el
              ? [x('w:rPr', Array.isArray(el) ? el.map((e) => x(`w:${e}`)) : [x(`w:${el}`)]) as RPr]
              : []),
            x('w:t', `Some text with ${el} styling`) as T,
          ]) as R)
        : el,
    ),
  ]) as P

describe('ooxast-util-markup-to-style', () => {
  it('should by default turn bold text into a Heading 1', () => {
    const p = makeP(['b'])
    const result = markupToStyle(p)
    expect(result).toEqual(
      x('w:p', [
        x('w:pPr', [x('w:pStyle', { 'w:val': 'Heading 1' })]),
        x('w:r', [x('w:rPr', [x('w:b')]), x('w:t', 'Some text with b styling')]),
      ]),
    )
  })

  it('should turn bold and italic text into a Heading 1', () => {
    let p = makeP([['b', 'i']])

    const both = markupToStyle(p, [
      {
        markup: ['w:b', 'w:i'],
        style: 'Heading 1',
      },
    ])

    const pWithHStyle = x('w:p', [
      x('w:pPr', [x('w:pStyle', { 'w:val': 'Heading 1' })]),
      x('w:r', [x('w:rPr', [x('w:b'), x('w:i')]), x('w:t', 'Some text with b,i styling')]),
    ])

    expect(both).toEqual(pWithHStyle)

    p = makeP([['b', 'i']])
    const one = markupToStyle(p, [{ markup: ['w:b'], style: 'Heading 1' }])
    expect(one).toEqual(p)

    p = makeP([['b', 'i']])
    const either = markupToStyle(p, [{ markup: ['w:b'], style: 'Heading 1', matchAll: false }])

    expect(either).toEqual(pWithHStyle)
  })

  it('should not apply styles if matchFull is set to true and the markup is not present in all runs', () => {
    const p = makeP(['b', 'i'])
    const result = markupToStyle(p, [
      {
        markup: ['w:b', 'w:i'],
        style: 'Heading 1',
        matchFull: true,
      },
    ])
    expect(result).toEqual(p)
  })

  it('should apply styles if matchFull is set to true, matchAll is set to false, and the to be matched markup is present in all of the runs', () => {
    let p = makeP(['b', 'i'])

    const pWithHStyle = x('w:p', [
      x('w:pPr', [x('w:pStyle', { 'w:val': 'Heading 1' })]),
      x('w:r', [x('w:rPr', [x('w:b')]), x('w:t', 'Some text with b styling')]),
      x('w:r', [x('w:rPr', [x('w:i')]), x('w:t', 'Some text with i styling')]),
    ])

    const result1 = markupToStyle(p, [
      {
        markup: ['w:b', 'w:i'],
        style: 'Heading 1',
        matchFull: true,
        matchAll: false,
      },
    ])

    expect(result1).toEqual(pWithHStyle)

    p = makeP(['b', 'i'])
    const result2 = markupToStyle(p, [
      {
        markup: ['w:b'],
        style: 'Heading 1',
        matchFull: true,
        matchAll: false,
      },
    ])

    expect(result2).toEqual(p)
  })

  it('should still apply style if only a punctuation or whitespace element does not match', () => {
    const p = makeP([['b', 'i'], x('w:r', [x('w:t', ' !')])])
    const result = markupToStyle(p, [
      {
        markup: ['w:b', 'w:i'],
        style: 'Heading 1',
        matchFull: true,
        matchAll: false,
      },
    ])
    expect(result).toEqual(
      x('w:p', [
        x('w:pPr', [x('w:pStyle', { 'w:val': 'Heading 1' })]),
        x('w:r', [x('w:rPr', [x('w:b'), x('w:i')]), x('w:t', 'Some text with b,i styling')]),
        x('w:r', [x('w:t', ' !')]),
      ]),
    )
  })

  it('should not apply styles if only a punctuation or whitespace element does match', () => {
    const p = makeP([x('w:r', [x('w:rPr', [x('w:i')]), x('w:t', ' !')])])
    const result = markupToStyle(p, [
      {
        markup: 'w:i',
        style: 'Heading 1',
      },
    ])
    expect(result).toEqual(p)
  })

  it('should overwrite any existing styles', () => {
    const p = makeP(['b'])
    const result = markupToStyle(p, [
      {
        markup: 'w:b',
        style: 'Heading 1',
      },
    ])
    expect(result).toEqual(
      x('w:p', [
        x('w:pPr', [x('w:pStyle', { 'w:val': 'Heading 1' })]),

        x('w:r', [x('w:rPr', [x('w:b')]), x('w:t', 'Some text with b styling')]),
      ]),
    )
  })

  it('should not count toggles that are switched off (w:val="false"/"0") as markup', () => {
    // Google Docs exports put <w:b w:val="false"/> on plain text
    for (const val of ['false', '0', 'off']) {
      const p = x('w:p', [
        x('w:pPr', [x('w:pStyle', { 'w:val': 'normal1' })]),
        x('w:r', [x('w:rPr', [x('w:b', { 'w:val': val })]), x('w:t', 'Florian Kohrt')]),
      ]) as P
      expect(markupToStyle(p)).toEqual(p)
    }
  })

  it('should not turn the title or a real heading into something else', () => {
    for (const style of ['Title', 'Heading2', 'Subtitle']) {
      const p = x('w:p', [
        x('w:pPr', [x('w:pStyle', { 'w:val': style })]),
        x('w:r', [x('w:rPr', [x('w:b')]), x('w:t', 'A Conceptual Framework')]),
      ]) as P
      expect(markupToStyle(p)).toEqual(p)
    }
  })

  it('should skip `onlyIfNoHeadings` rules in a document that has heading styles', () => {
    const boldP = () =>
      x('w:p', [x('w:pPr'), x('w:r', [x('w:rPr', [x('w:b')]), x('w:t', 'Figure 1')])])
    const heading = x('w:p', [
      x('w:pPr', [x('w:pStyle', { 'w:val': 'Heading1' })]),
      x('w:r', [x('w:t', 'Introduction')]),
    ])
    const options = [{ markup: 'w:b' as const, style: 'Heading 1', onlyIfNoHeadings: true }]

    const withHeadings = x(null, [x('w:body', [heading, boldP()])]) as unknown as Root
    markupToStyle(withHeadings, options)
    expect(JSON.stringify(withHeadings)).not.toContain('Heading 1')

    const withoutHeadings = x(null, [x('w:body', [boldP()])]) as unknown as Root
    markupToStyle(withoutHeadings, options)
    expect(JSON.stringify(withoutHeadings)).toContain('Heading 1')
  })
})
