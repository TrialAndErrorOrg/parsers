import { describe, expect, it } from 'vitest'
import type { Expr, FuncCall, MarkupContent, MathArg, MathContent, Root } from 'typast'

import { compile, flatten, hasTypst } from '../test/typst.js'
import { toTypst } from './to-typst.js'

const text = (value: string) => ({ type: 'text', value }) as const
const space = (value = ' ') => ({ type: 'space', value }) as const
const parbreak = { type: 'parbreak' } as const
const ident = (name: string) => ({ type: 'ident', name }) as const
const str = (value: string) => ({ type: 'str', value }) as const
const content = (...children: MarkupContent[]) => ({ type: 'contentBlock', children }) as const
const call = (name: string, ...args: MathArg[]): FuncCall => ({
  type: 'funcCall',
  callee: ident(name),
  args,
})
const root = (...children: MarkupContent[]): Root => ({ type: 'root', children })

describe('toTypst: markup', () => {
  it('writes what the tree says: spaces, newlines and paragraph breaks', () => {
    expect(
      toTypst(
        root(
          text('One'),
          space(),
          text('two'),
          space('\n  '),
          text('three'),
          parbreak,
          text('Four'),
        ),
      ),
    ).toBe('One two\nthree\n\nFour\n')
  })

  it('writes strong, emphasis, raw, links, labels and references', () => {
    expect(
      toTypst([
        { type: 'strong', children: [text('b')] },
        space(),
        { type: 'emph', children: [text('i')] },
        space(),
        { type: 'raw', value: 'x', block: false },
        space(),
        { type: 'link', url: 'https://typst.app' },
        space(),
        { type: 'ref', target: 'fig:1' },
        space(),
        { type: 'label', name: 'here' },
      ]),
    ).toBe('*b* _i_ `x` https://typst.app @fig:1 <here>')
  })

  it('falls back to functions where markup would not parse', () => {
    // `*` next to letters is not a delimiter
    expect(toTypst([text('a'), { type: 'strong', children: [text('b')] }, text('c')])).toBe(
      'a#strong[b]c',
    )
    // `@a.b` would be the reference `a.b`, and `#ref(<a>).b` a field access
    expect(toTypst([{ type: 'ref', target: 'a' }, text('.b')])).toBe('#ref(<a>);.b')
    expect(toTypst([{ type: 'link', url: 'mailto:x@y.org' }])).toBe('#link("mailto:x@y.org")')
  })

  it('writes headings, list items and terms on lines of their own', () => {
    expect(
      toTypst(
        root(
          { type: 'heading', depth: 2, children: [text('Intro')] },
          space(),
          { type: 'label', name: 'intro' },
          { type: 'listItem', children: [text('a')] },
          { type: 'enumItem', number: 3, children: [text('b')] },
          { type: 'termItem', term: [text('T')], children: [text('d')] },
        ),
      ),
    ).toBe('== Intro <intro>\n- a\n3. b\n/ T: d\n')
  })

  it('indents what continues a list item', () => {
    const item = (...children: MarkupContent[]) => ({ type: 'listItem', children }) as const
    expect(
      toTypst(
        root(
          item(text('a'), space('\n'), item(text('b')), parbreak, text('more')),
          item(text('c')),
        ),
      ),
    ).toBe('- a\n  - b\n\n  more\n- c\n')
  })

  it('separates statements from what follows', () => {
    const set: Expr = { type: 'setRule', target: ident('text'), args: [ident('red')] }
    expect(toTypst(root(set, text('Hi')))).toBe('#set text(red)\nHi\n')
    expect(toTypst(root(set, space(), text('Hi')))).toBe('#set text(red); Hi\n')
  })

  it('ends embedded code where text would continue it', () => {
    expect(toTypst([call('f'), text('(x)')])).toBe('#f();(x)')
    expect(toTypst([ident('x'), text('-y')])).toBe('#x;-y')
    expect(toTypst([ident('x'), text(' y')])).toBe('#x y')
  })

  it('parenthesizes code that cannot follow a hash', () => {
    expect(
      toTypst([
        { type: 'binary', op: '+', lhs: { type: 'int', value: 1 }, rhs: { type: 'int', value: 2 } },
      ]),
    ).toBe('#(1 + 2)')
  })

  it('keeps comments out of the way', () => {
    expect(
      toTypst(root(text('a'), { type: 'comment', value: ' c', block: false }, text('b'))),
    ).toBe('a // c\nb\n')
    expect(toTypst([text('a'), { type: 'comment', value: ' c ', block: true }, text('b')])).toBe(
      'a/* c */b',
    )
  })

  it('writes escapes, shorthands and smart quotes', () => {
    expect(
      toTypst([
        { type: 'escape', value: '#' },
        { type: 'shorthand', value: '—' },
        { type: 'smartQuote', double: true },
        { type: 'escape', value: '\u{1F5FA}' },
      ]),
    ).toBe('\\#---"\\🗺')
  })
})

describe('toTypst: math', () => {
  const eq = (block: boolean, ...children: MathContent[]): MarkupContent => ({
    type: 'equation',
    block,
    children,
  })
  const t = (value: string) => ({ type: 'mathText', value }) as const

  it('writes equations', () => {
    expect(
      toTypst([
        eq(false, {
          type: 'mathAttach',
          base: t('x'),
          bottom: t('1'),
          top: { type: 'math', children: [t('n'), t('+'), t('1')] },
        }),
      ]),
    ).toBe('$x_1^(n+1)$')
    expect(
      toTypst([
        eq(
          true,
          {
            type: 'mathFrac',
            num: {
              type: 'math',
              deparenthesized: true,
              children: [t('a'), space(), t('+'), space(), t('b')],
            },
            denom: t('2'),
          },
          space(),
          { type: 'mathShorthand', value: '≤' },
          space(),
          { type: 'mathRoot', index: 3, radicand: t('x') },
        ),
      ]),
    ).toBe('$ (a + b)/2 <= ∛x $')
  })

  it('writes calls with rows and embedded code', () => {
    expect(
      toTypst([
        eq(false, {
          type: 'mathCall',
          callee: { type: 'mathIdent', name: 'mat' },
          args: [
            { type: 'named', name: 'delim', expr: str('[') } as MathArg,
            { ...t('1'), semicolon: true },
            ident('x'),
          ],
        }),
      ]),
    ).toBe('$mat(delim: "[", 1; #x)$')
  })
})

describe('toTypst: code', () => {
  it('writes calls with trailing content blocks', () => {
    expect(
      toTypst(
        call(
          'figure',
          call('image', str('a.png')),
          { type: 'named', name: 'caption', expr: content(text('A cat.')) },
          content(text('x')),
        ),
      ),
    ).toBe('figure(image("a.png"), caption: [A cat.])[x]')
    expect(toTypst(call('footnote', content(text('note'))))).toBe('footnote[note]')
  })

  it('writes literals', () => {
    expect(
      toTypst({
        type: 'array',
        items: [
          { type: 'none' },
          { type: 'auto' },
          { type: 'bool', value: true },
          { type: 'int', value: 3 },
          { type: 'float', value: 2 },
          { type: 'numeric', value: 1.5, unit: 'em' },
          { type: 'numeric', value: 50, unit: '%' },
          str('a "q"'),
        ],
      }),
    ).toBe('(none, auto, true, 3, 2.0, 1.5em, 50%, "a \\"q\\"")')
    expect(toTypst({ type: 'array', items: [{ type: 'int', value: 1 }] })).toBe('(1,)')
    expect(toTypst({ type: 'dict', items: [] })).toBe('(:)')
  })

  it('adds parentheses where precedence needs them', () => {
    const n = (value: number) => ({ type: 'int', value }) as const
    expect(
      toTypst({
        type: 'binary',
        op: '*',
        lhs: { type: 'binary', op: '+', lhs: n(1), rhs: n(2) },
        rhs: n(3),
      }),
    ).toBe('(1 + 2) * 3')
    expect(
      toTypst({
        type: 'binary',
        op: '-',
        lhs: n(1),
        rhs: { type: 'binary', op: '-', lhs: n(2), rhs: n(3) },
      }),
    ).toBe('1 - (2 - 3)')
    expect(
      toTypst({
        type: 'fieldAccess',
        target: { type: 'unary', op: '-', expr: ident('x') },
        field: 'abs',
      }),
    ).toBe('(-x).abs')
  })

  it('writes statements and control flow', () => {
    expect(
      toTypst({
        type: 'letBinding',
        pattern: ident('f'),
        init: { type: 'closure', name: 'f', params: [ident('x')], body: ident('x') },
      }),
    ).toBe('let f(x) = x')
    expect(
      toTypst({
        type: 'showRule',
        selector: { type: 'fieldAccess', target: ident('heading'), field: 'where' },
        transform: { type: 'closure', params: [ident('it')], body: content(text('x')) },
      }),
    ).toBe('show heading.where: it => [x]')
    expect(
      toTypst({
        type: 'moduleImport',
        source: str('@preview/cetz:0.4.0'),
        imports: [
          { type: 'importItem', path: ['canvas'] },
          { type: 'importItem', path: ['draw'], newName: 'd' },
        ],
      }),
    ).toBe('import "@preview/cetz:0.4.0": canvas, draw as d')
    expect(
      toTypst({
        type: 'conditional',
        condition: ident('x'),
        ifBody: { type: 'codeBlock', children: [{ type: 'int', value: 1 }] },
        elseBody: { type: 'int', value: 2 },
      }),
    ).toBe('if x { 1 } else { 2 }')
  })

  it('breaks long argument lists', () => {
    const long = call('f', ...Array.from({ length: 12 }, (_, i) => str(`argument-${i}`)))
    expect(toTypst(long)).toMatch(/^f\(\n {2}"argument-0",\n/)
  })
})

describe.skipIf(!hasTypst)('toTypst output in typst', () => {
  it('compiles and means what the tree says', () => {
    const tree = root(
      {
        type: 'setRule',
        target: ident('heading'),
        args: [{ type: 'named', name: 'numbering', expr: str('1.') }],
      },
      { type: 'heading', depth: 1, children: [text('Methods & *Materials*')] },
      space(),
      { type: 'label', name: 'sec:m' },
      parbreak,
      text('See'),
      space(),
      { type: 'ref', target: 'sec:m' },
      text('. Effects: d = 0.5 [95% CI]; p < .05'),
      call('footnote', content(text('https://osf.io/abc_12/'))),
      text('.'),
      parbreak,
      { type: 'listItem', children: [text('- not a sublist')] },
      space('\n'),
      { type: 'listItem', children: [text('= not a heading')] },
    )
    const source = toTypst(tree)
    expect(() => compile(source)).not.toThrow()
    expect(
      flatten(source)
        .replace(/\s+/g, ' ')
        .replace(/ ?¶ ?/g, '¶'),
    ).toContain(
      'H1{Methods & *Materials*}<sec:m>¶See @sec:m. Effects: d = 0.5 [95% CI]; p < .05footnote{https://osf.io/abc_12/}.¶-{- not a sublist} -{= not a heading}',
    )
  })
})
