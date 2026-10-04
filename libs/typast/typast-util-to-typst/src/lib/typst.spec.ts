/**
 * These tests run the real `typst` CLI on the serializer's output and check
 * that Typst (a) accepts it and (b) parses it into the content the tree
 * described. They are skipped when `typst` is not on the PATH.
 */
import type { Content, Root } from 'typast'

import { normalizeText, sanitizeLabel } from './escape.js'
import { toTypst } from './to-typst.js'
import {
  a,
  br,
  call,
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
import { compile, flatten, flattenAll, hasTypst, squash } from '../test/typst.js'

/** What `dump.typ` should produce for a sequence of inline nodes. */
function expected(nodes: Content[]): string {
  return nodes
    .map((n): string => {
      switch (n.type) {
        case 'text':
          return normalizeText(n.value)
        case 'strong':
          return `*{${expected(n.children)}}`
        case 'emphasis':
          return `_{${expected(n.children)}}`
        case 'linebreak':
          return '⏎'
        case 'raw':
          return '`' + n.value + '`'
        case 'math':
          return `$[${n.value}]$`
        case 'ref':
          return '@' + sanitizeLabel(n.target) + (n.supplement ? `[${expected(n.supplement)}]` : '')
        case 'comment':
          return ''
        case 'call':
          return `${n.name}{${expected(n.body?.[0] ?? [])}}`
        case 'paragraph':
          return expected(n.children)
        default:
          throw new Error(`no expectation for ${n.type}`)
      }
    })
    .join('')
}

/** Normalise whitespace the way Typst does (spaces collapse, linebreaks eat spaces). */
function norm(s: string): string {
  return squash(s).replace(/ ?⏎ ?/g, '⏎')
}

const HAZARDS = [
  '\\',
  '#',
  '$',
  '*',
  '_',
  '`',
  '@',
  '<',
  '>',
  '[',
  ']',
  '~',
  '=',
  '-',
  '+',
  '/',
  '.',
  ':',
  ';',
  '(',
  ')',
  "'",
  '"',
  '{',
  '}',
  '|',
  '^',
  '%',
  '&',
  '!',
  '?',
  ',',
  'https://x.org/a_b',
  'http://',
  '//',
  '/*',
  '*/',
  '--',
  '---',
  '-?',
  '...',
  '1. ',
  '12.',
  '- ',
  '+ ',
  '/ ',
  '= ',
  '== ',
  '\\u{41}',
  '#emph',
  '#let x = 1',
  '<lbl>',
  '@ref',
  '$x$',
  '`raw`',
  '-1',
  ' -1',
  'a-1',
  'é',
  '你',
  '\u00a0',
  '\n',
  '\n\n',
  '\r\n',
  '\t',
  '\v',
  '\u2028',
  ' ',
  '  ',
  'a',
  'b',
  'Word',
  '1',
  '42',
]

/** Markup contexts to put content in: name, tree builder, expected flattening. */
const CONTEXTS: [string, (c: Content[]) => Root, (s: string) => string][] = [
  ['paragraph', (c) => root(p(...c)), (s) => s],
  ['second paragraph', (c) => root(p(t('x')), p(...c)), (s) => `x¶${s}`],
  ['after linebreak', (c) => root(p(t('x'), br(), ...c)), (s) => `x⏎${s}`],
  ['heading', (c) => root(h(2, c)), (s) => `H2{${s}}`],
  ['list item', (c) => root(ul(li(...c), li(t('z')))), (s) => `-{${s}} -{z}`],
  ['nested list item', (c) => root(ul(li(p(t('y')), ul(li(...c))))), (s) => `-{y -{${s}}}`],
  ['enum item', (c) => root(ol({}, li(...c))), (s) => `+{${s}}`],
  ['term', (c) => root(term(c, t('d'))), (s) => `/{${s}=d}`],
  ['description', (c) => root(term([t('k')], ...c)), (s) => `/{k=${s}}`],
  ['strong', (c) => root(p(t('< '), strong(...c), t(' >'))), (s) => `< *{${s}} >`],
  ['emph', (c) => root(p(t('< '), emph(...c), t(' >'))), (s) => `< _{${s}} >`],
  ['footnote', (c) => root(p(call('footnote', [], c))), (s) => `footnote{${s}}`],
  ['content arg', (c) => root(p(call('box', [a(content(...c))]))), (s) => `box{${s}}`],
  ['block body', (c) => root(call('block', [], [p(t('q')), p(...c)])), (s) => `block{q¶${s}}`],
]

/** Whitespace at the edges of headings/items/terms/blocks is not significant. */
function clean(s: string): string {
  return (
    norm(s)
      .replace(/ ?¶ ?/g, '¶')
      .replace(/\{ /g, '{')
      .replace(/ ([}|=])/g, '$1')
      .replace(/([|=]) /g, '$1')
      // empty paragraphs are dropped
      .replace(/¶+(?=[}|]|$)/g, '')
      .replace(/¶+/g, '¶')
      .trim()
  )
}

describe.skipIf(!hasTypst)('toTypst output in typst', () => {
  it('renders hazardous strings literally, at the start of a paragraph and mid-line', () => {
    const cases = HAZARDS.flatMap((s) => [s, `x ${s}`, `${s} y`, `${s}${s}`, `a${s}b`])
    const sources = cases.map((s) => toTypst(root(p(t(s)))))
    const results = flattenAll(sources)
    results.forEach((r, i) => {
      expect({ input: cases[i], out: norm(r) }).toEqual({
        input: cases[i],
        out: norm(normalizeText(cases[i])),
      })
    })
  })

  it('renders hazardous strings literally in every markup context', () => {
    const cases: { name: string; input: string; source: string; want: string }[] = []
    for (const [name, make, want] of CONTEXTS) {
      for (const s of HAZARDS) {
        const input = `${s} m ${s}`
        cases.push({
          name,
          input,
          source: toTypst(make([t(input)])),
          want: want(normalizeText(input)),
        })
      }
    }
    const results = flattenAll(cases.map((c) => c.source))
    results.forEach((r, i) => {
      const c = cases[i]
      expect({ ...c, out: clean(r) }).toEqual({ ...c, out: clean(c.want) })
    })
  })

  it('round-trips random inline trees in random contexts', () => {
    const { pick, randomInlines } = fuzzer(SEED)
    const cases = Array.from({ length: FUZZ }, () => {
      const nodes = randomInlines(0)
      const [name, make, want] = pick(CONTEXTS)
      return { name, source: toTypst(make(nodes)), want: want(expected(nodes)) }
    })
    const results = flattenAll(cases.map((c) => c.source))
    results.forEach((r, i) => {
      const c = cases[i]
      expect({ ...c, out: clean(r) }).toEqual({ ...c, out: clean(c.want) })
    })
  })

  it('round-trips random block trees', () => {
    const { rand, pick, randomText, randomInlines } = fuzzer(SEED + 1)

    const randomBlock = (depth: number): [Content, string] => {
      const r = rand()
      if (r < 0.4 || depth > 2) {
        const nodes = randomInlines(1)
        // (whitespace-only paragraphs are dropped, which the expectations can't model)
        if (!norm(expected(nodes)).trim()) nodes.push(t('w'))
        return [p(...nodes), expected(nodes)]
      }
      if (r < 0.5) {
        const nodes = randomInlines(1)
        const depthH = 1 + Math.floor(rand() * 3)
        return [
          h(depthH, nodes, rand() < 0.3 ? 'sec:x' : undefined),
          `H${depthH}{${expected(nodes)}}`,
        ]
      }
      if (r < 0.75) {
        const ordered = rand() < 0.4
        const tight = rand() < 0.7
        const start = ordered && rand() < 0.3 ? 3 : undefined
        const items = Array.from({ length: 1 + Math.floor(rand() * 3) }, () => {
          const blocks = Array.from({ length: 1 + Math.floor(rand() * 3) }, () =>
            randomBlock(depth + 1),
          ).filter(([n]) => n.type === 'paragraph' || n.type === 'list')
          const want = blocks
            .map(([n, s], i) => {
              if (i === 0) return s
              const sep = n.type === 'list' || blocks[i - 1][0].type === 'list' ? ' ' : '¶'
              return sep + s
            })
            .join('')
          return [li(...blocks.map(([n]) => n)), want] as const
        })
        const list = {
          type: 'list',
          ordered,
          tight,
          ...(start ? { start } : {}),
          children: items.map(([n]) => n),
        } as const
        const want = items
          .map(([, s], i) => `${ordered ? (i === 0 && start ? start : '+') : '-'}{${s}}`)
          .join(tight ? ' ' : '¶')
        return [list, want]
      }
      if (r < 0.82) {
        const termNodes = randomInlines(1)
        const desc = randomInlines(1)
        return [term(termNodes, ...desc), `/{${expected(termNodes)}=${expected(desc)}}`]
      }
      if (r < 0.9) {
        const value = pick(['code\n  indented\n\n```\nend', '  lead', 'x'])
        return [
          raw(value, { block: true, lang: pick([undefined, 'py', 'c++']) }),
          '`' + value + '`',
        ]
      }
      const blocks = Array.from({ length: 1 + Math.floor(rand() * 3) }, () =>
        randomBlock(depth + 1),
      )
      const name = pick(['block', 'box', 'quote'])
      return [
        call(
          name,
          [],
          blocks.map(([n]) => n),
        ),
        `${name}{${join(blocks, false)}}`,
      ]
    }

    /** How a sequence of blocks flattens, mirroring the serializer's layout rules. */
    const join = (blocks: [Content, string][], atRoot: boolean) => {
      const types = blocks.map(([n]) => n.type)
      const stacked =
        atRoot ||
        types.some((t) => ['paragraph', 'heading', 'list', 'termItem'].includes(t)) ||
        (types.includes('raw') && types.length > 1)
      // a content block holding only calls is one run of inline markup
      if (!stacked) return blocks.map(([, s]) => s).join('')
      return blocks
        .map(([n, s], i) => {
          if (i === 0) return s
          // consecutive term items form one tight term list
          return (n.type === 'termItem' && types[i - 1] === 'termItem' ? ' ' : '¶') + s
        })
        .join('')
    }

    const cases = Array.from({ length: Math.ceil(FUZZ / 3) }, () => {
      const blocks = Array.from({ length: 1 + Math.floor(rand() * 4) }, () => randomBlock(0))
      // a trailing comment must not break anything
      const tree = root(...blocks.map(([n]) => n), { type: 'comment', value: randomText() })
      return { source: toTypst(tree), want: join(blocks, true) }
    })
    const results = flattenAll(cases.map((c) => c.source))
    results.forEach((r, i) => {
      const c = cases[i]
      // only compare structure and text: paragraph breaks and spaces are equivalent here
      const tidy = (s: string) =>
        clean(s)
          .replace(/<sec:x>/g, '')
          .replace(/\s+/g, '')
          .replace(/¶+/g, '¶')
          .replace(/(^|[{|=])¶|¶(?=[}|=]|$)/g, '$1')
      expect({ ...c, out: tidy(r) }).toEqual({ ...c, out: tidy(c.want) })
    })
  })

  it('round-trips arbitrary strings in code', () => {
    const cases = [...HAZARDS, HAZARDS.join(''), '\u0000\u0001\u001f\u007f\u0085', '"\\"\\\\"', '']
    const sources = cases.map((s) =>
      toTypst(
        root(
          {
            type: 'let',
            name: 'd',
            value: { type: 'dict', entries: [{ key: s || 'k', value: str(s) }] },
          },
          p(call('str', [a(str(s))]), t('|'), { type: 'typst', value: '#d.values().first()' }),
        ),
      ),
    )
    flattenAll(sources).forEach((r, i) => {
      // (parbreak after the `#let`, space for the final newline)
      expect({ input: cases[i], out: r }).toEqual({
        input: cases[i],
        out: `¶${cases[i]}|${cases[i]} `,
      })
    })
  })

  it('keeps structure: lists, terms, headings, labels and refs', () => {
    const tree = root(
      h(1, [t('Intro')], 'sec:intro'),
      p(t('See '), ref('sec:intro'), t(' and '), ref('fig:a', [t('Fig.')]), t('.')),
      ul(
        li(p(t('one')), ul(li(t('one.a')), li(t('- one.b')))),
        li(p(t('two')), p(t('two, again'))),
      ),
      ol({ start: 4 }, li(t('four')), li(t('five'))),
      ol({ numbering: 'a)' }, li(t('A')), li(t('B'))),
      term([t('Term: x')], t('Desc')),
      call('figure', [a(content(t('body'))), a(content(t('Caption')), 'caption')]),
      label('fig:a'),
    )
    expect(flatten(toTypst(tree)).trim().replace(/ ?¶ ?/g, '¶')).toBe(
      'H1{Intro}<sec:intro>¶See @sec:intro and @fig:a[Fig.].¶' +
        '-{one -{one.a} -{- one.b}} -{two¶two, again}¶' +
        '4{four} +{five}¶N{+A|+B}¶/{Term: x=Desc}¶figure{body}<fig:a>',
    )
  })

  it('keeps a label after a paragraph that ends in a line comment out of the comment', () => {
    const lineComment = { type: 'comment' as const, value: 'c' }
    const tree = root(
      p(t('a'), lineComment),
      label('lbl'),
      p(ref('lbl')),
      ul(li(t('x'), lineComment)),
      label('lst'),
    )
    const out = toTypst(tree)
    expect(out).toContain('a // c\n<lbl>')
    // (the comment leaves a space behind, which Typst drops at the end of a paragraph)
    expect(
      flatten(out)
        .trim()
        .replace(/\s*¶\s*/g, '¶'),
    ).toBe('a<lbl>¶@lbl¶-{x}<lst>')
  })

  it('preserves raw block content and indentation', () => {
    const code = 'def f():\n    return "`" * 3\n\n```\nend'
    const tree = root(
      raw(code, { block: true, lang: 'py' }),
      ul(li(p(t('item')), raw(code, { block: true }))),
      call('block', [], [p(t('x')), raw(code, { block: true, lang: 'c++' })]),
    )
    const out = flatten(toTypst(tree))
    expect(out.split('`' + code + '`').length).toBe(4)
  })

  it('compiles a realistic document', () => {
    const tree = root(
      { type: 'set', name: 'heading', args: [a({ type: 'string', value: '1.' }, 'numbering')] },
      h(1, [t('Methods & Materials')], 'sec:methods'),
      p(
        t('We used R (v4.3.1) — see '),
        ref('sec:methods'),
        t('. Effects were d = 0.5 [95% CI: 0.1, 0.9]; '),
        emph(t('p')),
        t(' < .05'),
        call('footnote', [], [t('Pre-registered at https://osf.io/abc_12/.')]),
        t('. Contact: me@example.org.'),
      ),
      call('figure', [
        a(call('rect', [a({ type: 'code', value: '2cm' }, 'width')])),
        a(content(t('A *caption* with _underscores_ and #hashes.')), 'caption'),
      ]),
      label('fig:1'),
      p(t('As '), ref('fig:1'), t(' shows: 1. this is not a list.')),
      call('table', [
        a({ type: 'code', value: '2' }, 'columns'),
        a(content(t('a'))),
        a(content(t('b'))),
      ]),
      math('sum_(i=1)^n x_i', true),
      p(
        strong(t('Bold')),
        t(' and '),
        emph(t('it')),
        t('alic '),
        str('x').type === 'string' ? t('end') : t(''),
      ),
    )
    expect(() => compile(toTypst(tree))).not.toThrow()
  })
})

// typast_FUZZ=5000 typast_SEED=7 for a longer run
const FUZZ = Number(process.env['typast_FUZZ'] ?? 300)
const SEED = Number(process.env['typast_SEED'] ?? 0xc0ffee)

function fuzzer(seed: number) {
  const rand = mulberry32(seed)
  const pick = <T>(xs: T[]) => xs[Math.floor(rand() * xs.length)]

  const randomText = () => {
    let s = ''
    const n = 1 + Math.floor(rand() * 5)
    for (let i = 0; i < n; i++) s += pick(HAZARDS)
    return s
  }

  const randomInline = (depth: number): Content => {
    const r = rand()
    if (r < 0.55 || depth > 2) return t(randomText())
    if (r < 0.65) return strong(...randomInlines(depth + 1))
    if (r < 0.75) return emph(...randomInlines(depth + 1))
    if (r < 0.78) return br()
    if (r < 0.83)
      return ref(
        pick(['fig:1', 'a', 'tab.2', 'sec-x', 'b_c', 'x.', 'a b']),
        rand() < 0.2 ? [t(randomText())] : undefined,
      )
    if (r < 0.87) return raw(pick(['x', 'a`b', ' sp ', '\\', '#*_', 'two\nlines', '']))
    if (r < 0.9) return math(pick(['x', 'y']))
    if (r < 0.93) return { type: 'comment', value: randomText(), block: true }
    return call(pick(['footnote', 'underline', 'smallcaps']), [], randomInlines(depth + 1))
  }

  const randomInlines = (depth: number): Content[] => {
    const n = 1 + Math.floor(rand() * 4)
    return Array.from({ length: n }, () => randomInline(depth))
  }

  return { rand, pick, randomText, randomInline, randomInlines }
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let x = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}
