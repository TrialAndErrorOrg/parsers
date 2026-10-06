import { describe, it, expect } from 'vitest'
import { toTypst } from './to-typst.js'
import {
  a,
  br,
  call,
  code,
  content,
  emph,
  h,
  label,
  li,
  math,
  ol,
  p,
  raw,
  ref,
  root,
  str,
  strong,
  t,
  term,
  ul,
} from '../test/build.js'

describe('toTypst: blocks', () => {
  it('separates paragraphs with blank lines and ends with a newline', () => {
    expect(toTypst(root(p(t('One.')), p(t('Two.'))))).toBe('One.\n\nTwo.\n')
  })

  it('wraps loose inline content at block level in a paragraph', () => {
    expect(toTypst(root(t('a '), strong(t('b')), p(t('c'))))).toBe('a *b*\n\nc\n')
  })

  it('renders headings with labels', () => {
    expect(toTypst(root(h(1, [t('Intro')], 'sec:intro'), h(3, [emph(t('Deep'))])))).toBe(
      '= Intro <sec:intro>\n\n=== _Deep_\n',
    )
  })

  it('does not escape line-start markers inside headings', () => {
    expect(toTypst(h(2, [t('1. Introduction - = x')]))).toBe('== 1. Introduction - = x')
  })

  it('renders unnumbered headings as calls', () => {
    expect(toTypst({ type: 'heading', depth: 2, numbered: false, children: [t('X')] })).toBe(
      '#heading(depth: 2, numbering: none)[X]',
    )
  })

  it('attaches labels to the previous block', () => {
    const fig = call('figure', [
      a(call('image', [a(str('a.png'))])),
      a(content(t('Cap')), 'caption'),
    ])
    expect(toTypst(root(fig, label('fig:a'), p(t('See '), ref('fig:a'), t('.'))))).toBe(
      '#figure(image("a.png"), caption: [Cap]) <fig:a>\n\nSee @fig:a.\n',
    )
  })

  it('puts statements on consecutive lines', () => {
    expect(
      toTypst(
        root(
          { type: 'import', source: 'jote-article/lib.typ', items: '*' },
          { type: 'set', name: 'text', args: [a(code('11pt'), 'size')] },
          { type: 'show', selector: 'link', transform: 'underline' },
          { type: 'show', transform: call('jote-article.with', [a(content(t('T')), 'title')]) },
          { type: 'let', name: 'x', value: str('y') },
          p(t('Body')),
        ),
      ),
    ).toBe(
      [
        '#import "jote-article/lib.typ": *',
        '#set text(size: 11pt)',
        '#show link: underline',
        '#show: jote-article.with(title: [T])',
        '#let x = "y"',
        '',
        'Body',
        '',
      ].join('\n'),
    )
  })
})

describe('toTypst: lists', () => {
  it('renders tight bullet lists', () => {
    expect(toTypst(ul(li(t('a')), li(p(t('b')))))).toBe('- a\n- b')
  })

  it('renders loose lists with blank lines', () => {
    expect(toTypst({ ...ul(li(t('a')), li(t('b'))), tight: false })).toBe('- a\n\n- b')
  })

  it('indents nested lists and extra paragraphs', () => {
    const tree = ul(
      li(p(t('one')), ul(li(t('one.a')), li(t('one.b')))),
      li(p(t('two')), p(t('two, second paragraph'))),
    )
    expect(toTypst(tree)).toBe(
      ['- one', '  - one.a', '  - one.b', '- two', '', '  two, second paragraph'].join('\n'),
    )
  })

  it('renders enums, with explicit start numbers', () => {
    expect(toTypst(ol({}, li(t('a')), li(t('b'))))).toBe('+ a\n+ b')
    expect(toTypst(ol({ start: 3 }, li(t('a')), li(t('b'))))).toBe('3. a\n+ b')
  })

  it('uses #enum for numbering patterns', () => {
    expect(toTypst(ol({ numbering: 'a)' }, li(t('a')), li(t('b'))))).toBe(
      '#enum(numbering: "a)")[a][b]',
    )
  })

  it('escapes markers at the start of item content', () => {
    expect(toTypst(ul(li(t('- x')), li(t('= y'))))).toBe('- \\- x\n- \\= y')
  })

  it('handles empty items', () => {
    expect(toTypst(ul(li(), li(t('b'))))).toBe('- #[]\n- b')
  })

  it('renders term lists, escaping colons in the term', () => {
    expect(toTypst(root(term([t('Key: word')], t('desc: here')), term([t('B')], t('d'))))).toBe(
      '/ Key\\: word: desc: here\n/ B: d\n',
    )
  })
})

describe('toTypst: inline', () => {
  it('uses delimiters for strong and emphasis where unambiguous', () => {
    expect(toTypst(p(t('a '), strong(t('b')), t(' '), emph(t('c')), t('.')))).toBe('a *b* _c_.')
  })

  it('falls back to functions inside words', () => {
    expect(toTypst(p(t('foo'), emph(t('bar')), t('baz')))).toBe('foo#emph[bar]baz')
    expect(toTypst(p(emph(t('bar')), t('baz')))).toBe('#emph[bar]baz')
    expect(toTypst(p(t('x'), strong(t('y'))))).toBe('x#strong[y]')
  })

  it('falls back to functions for nested same-kind markup', () => {
    expect(toTypst(p(emph(t('a '), emph(t('b')), t(' c'))))).toBe('_a #emph[b] c_')
    expect(toTypst(p(strong(t('a '), emph(t('b '), strong(t('c'))))))).toBe('*a _b #strong[c]_*')
  })

  it('falls back for empty or whitespace-only markup', () => {
    expect(toTypst(p(t('a '), emph(), t(' b')))).toBe('a #emph[] b')
    expect(toTypst(p(t('a '), strong(t(' ')), t(' b')))).toBe('a #strong[ ] b')
  })

  it('terminates hash expressions that would swallow following text', () => {
    expect(toTypst(p(emph(t('x')), t('.foo')))).toBe('_x_.foo')
    expect(toTypst(p(t('a'), emph(t('x')), t('.foo')))).toBe('a#emph[x];.foo')
    expect(toTypst(p(t('a'), emph(t('x')), t('(y)')))).toBe('a#emph[x];(y)')
    expect(toTypst(p(t('a'), emph(t('x')), t('; y')))).toBe('a#emph[x];; y')
    expect(toTypst(p(t('a'), emph(t('x')), t('[y]')))).toBe('a#emph[x]\\[y\\]')
    expect(toTypst(p(t('a'), emph(t('x')), t('. Next')))).toBe('a#emph[x]. Next')
    expect(toTypst(p(call('footnote', [], [t('n')]), t('.5')))).toBe('#footnote[n].5')
  })

  it('renders linebreaks', () => {
    expect(toTypst(p(t('a'), br(), t('- b')))).toBe('a\\\n\\- b')
    expect(toTypst(p(t('a'), br()))).toBe('a#linebreak()')
    expect(toTypst(h(1, [t('a'), br(), t('b')]))).toBe('= a\\ b')
  })

  it('renders raw', () => {
    expect(toTypst(p(raw('x = 1')))).toBe('`x = 1`')
    expect(toTypst(p(raw('a`b')))).toBe('#raw("a`b")')
    expect(toTypst(p(raw('fn', { lang: 'rust' })))).toBe('#raw("fn", lang: "rust")')
    expect(toTypst(root(raw('let x = 1\n```', { block: true, lang: 'js' })))).toBe(
      '````js\nlet x = 1\n```\n````\n',
    )
  })

  it('renders math', () => {
    expect(toTypst(p(t('so '), math('x^2'), t('.')))).toBe('so $x^2$.')
    expect(toTypst(root(math('sum_i x_i', true)))).toBe('$ sum_i x_i $\n')
  })

  it('renders refs, falling back when the next character would extend the target', () => {
    expect(toTypst(p(ref('fig:1'), t(', and')))).toBe('@fig:1, and')
    expect(toTypst(p(ref('fig:1'), t('. Next')))).toBe('@fig:1. Next')
    expect(toTypst(p(ref('fig'), t('s')))).toBe('#ref(<fig>)s')
    expect(toTypst(p(ref('fig'), t('.a')))).toBe('#ref(<fig>);.a')
    expect(toTypst(p(ref('fig'), t('-1')))).toBe('#ref(<fig>)\\-1')
    expect(toTypst(p(ref('fig'), t('.'), emph(t('x'))))).toBe('#ref(<fig>);._x_')
    expect(toTypst(p(ref('fig'), t(':'), emph(t('x'))))).toBe('#ref(<fig>):_x_')
    expect(toTypst(p(ref('fig.'), t(' x')))).toBe('#ref(<fig.>) x')
    expect(toTypst(p(ref('a b')))).toBe('@a-b')
    expect(toTypst(p(ref('tab', [t('Table')])))).toBe('@tab[Table]')
  })

  it('renders labels inline', () => {
    expect(toTypst(p(t('x'), label('a b')))).toBe('x<a-b>')
  })

  it('renders comments', () => {
    expect(toTypst(p(t('a'), { type: 'comment', value: 'note' }, t('b')))).toBe('a // note\nb')
    expect(toTypst(p(t('a'), { type: 'comment', value: 'x */ y', block: true }, t('b')))).toBe(
      'a/* x * / y */b',
    )
    expect(toTypst(root({ type: 'comment', value: 'one\ntwo' }, p(t('x'))))).toBe(
      '// one\n// two\nx\n',
    )
  })

  it('emits raw typst verbatim', () => {
    expect(toTypst(p(t('a '), { type: 'typst', value: '#sym.arrow' }, t('(b)')))).toBe(
      'a #sym.arrow;(b)',
    )
  })
})

describe('toTypst: code', () => {
  it('renders calls with positional, named and body arguments', () => {
    expect(
      toTypst(
        p(
          call(
            'jote-box',
            [a(content(t('Box 1')), 'title'), a(str('wide'), 'width')],
            [t('Inside')],
          ),
        ),
      ),
    ).toBe('#jote-box(title: [Box 1], width: "wide")[Inside]')
    expect(toTypst(p(call('pagebreak')))).toBe('#pagebreak()')
    expect(toTypst(call('footnote', [], [t('a')], [t('b')]))).toBe('#footnote[a][b]')
  })

  it('renders values', () => {
    const v = (value: Parameters<typeof toTypst>[0]) => toTypst(value)
    expect(v({ type: 'array', items: [] })).toBe('()')
    expect(v({ type: 'array', items: [code('1')] })).toBe('(1,)')
    expect(v({ type: 'array', items: [code('1'), str('a"b')] })).toBe('(1, "a\\"b")')
    expect(v({ type: 'dict', entries: [] })).toBe('(:)')
    expect(
      v({
        type: 'dict',
        entries: [
          { key: 'name', value: str('X') },
          { key: 'with space', value: code('true') },
        ],
      }),
    ).toBe('(name: "X", "with space": true)')
    expect(v(code(''))).toBe('none')
    expect(v(content(t('#x')))).toBe('[\\#x]')
  })

  it('breaks long argument lists over lines', () => {
    const fig = call('figure', [
      a(
        call('image', [
          a(str('media/a-very-long-file-name-for-an-image.png')),
          a(code('100%'), 'width'),
        ]),
      ),
      a(
        content(t('A caption that is long enough to push this call past the line width.')),
        'caption',
      ),
    ])
    expect(toTypst(root(fig, label('fig:x')))).toBe(
      [
        '#figure(',
        '  image("media/a-very-long-file-name-for-an-image.png", width: 100%),',
        '  caption: [A caption that is long enough to push this call past the line width.],',
        ') <fig:x>',
        '',
      ].join('\n'),
    )
  })

  it('lays out block content in content blocks', () => {
    const box = call(
      'jote-box',
      [a(content(t('Box 1')), 'title')],
      [p(t('One')), ul(li(t('a')), li(t('b')))],
    )
    expect(toTypst(root(box))).toBe(
      ['#jote-box(title: [Box 1])[', '  One', '', '  - a', '  - b', ']', ''].join('\n'),
    )
  })

  it('indents raw blocks inside content blocks consistently', () => {
    const box = call('block', [], [p(t('x')), raw('a\n  b', { block: true })])
    expect(toTypst(box)).toBe('#block[\n  x\n\n  ```\n  a\n    b\n  ```\n]')
  })

  it('escapes text in content blocks from line start', () => {
    expect(toTypst(p(call('footnote', [], [t('- not a list')])))).toBe('#footnote[\\- not a list]')
  })
})
