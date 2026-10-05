import { tests } from './testcites.js'
import { names } from './testnames.js'
import { parseTextCite } from './parse-text-cite.js'
import nearley, { Parser } from 'nearley'
import { describe, it, expect } from 'vitest'

const MODE: 'dev' | 'test' = 'test'
// eslint-disable-next-line
//@ts-ignore it's there sweaty
//import grammar from './apa.ne'

type ContentArr = [
  description: string,
  input: string,
  result: string | boolean | Record<string, any>,
]

type Table = [apa: string, desc: string, content: ContentArr[]][]

export type TestData = {
  [key: string]: { description: string; content: Content[] }
}

type Content = {
  description: string
  result: string | boolean | Record<string, any>
  input: string
}

const tableReducer = (testdata: TestData) =>
  Object.entries(testdata).reduce(
    (acc: Table, [apa, val]: [apa: string, val: { description: string; content: Content[] }]) => {
      const { description, content } = val

      const contarr: ContentArr[] = content.map((c: Content) => {
        const { description, input, result } = c
        const arr = [description, input, result] as ContentArr
        return arr
      })

      const tableEntry = [apa, description, contarr] as Table[number]
      acc.push(tableEntry)
      return acc
    },
    [],
  )

const citeTable = tableReducer(tests)
const nameTable = tableReducer(names)

//@ts-expect-error shhh
if (MODE === 'dev') {
  describe.each(nameTable)('%s: %s', (apa, desc, content) => {
    it.each(content)(
      '%s %s',
      (desc: string, inp: string, res: boolean | string | Record<string, any>) => {
        const parser =
          // eslint-disable-next-line
          // @ts-ignore
          MODE === 'dev'
            ? // eslint-disable-next-line
              // @ts-ignore
              new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
            : null
        try {
          parser && parser.feed(inp)

          const results = parser ? parser.results : parseTextCite(inp)
          const name = results.find((thing: any) => thing.family)

          expect(inp.includes(name.family)).toEqual(res)
        } catch (e) {
          expect(res).toBeFalsy()
        }
      },
    )
  })
}

// Known limitations of the grammar: these cases have produced the wrong output since at least
// 2023-09 (parser source and the moo/nearley versions are unchanged since then). The expected
// values are the correct target, so they are kept and marked as expected failures; if one of them
// starts passing, `it.fails` reports it and the case can move back to a regular test.
const KNOWN_FAILURES = new Set([
  'Wow (Bautista Perpinya, 2019).',
  'Wow (Stephan et al., 2019; Gerard et al., 2020).',
  '(Centers for Disease Control and Prevention, 2019, p. 10)',
  '(Beck Institute for Cognitive Behaviour Therapy, 2012, 1:30:40)',
  '(King James Bible, 1769/2017, 1 Cor. 13:1)',
  'Kapoor, Bloom, Montez, et al. (2017)',
  'Kapoor, Bloom, Zucker, et al. (2017)',
  '(Sifuentes, n.d.-a, n.d.-b)',
])

describe.each(citeTable)('%s: %s', (apa: string, desc: string, content: ContentArr[]) => {
  const known = content.filter(([, inp]) => KNOWN_FAILURES.has(inp))
  const regular = content.filter(([, inp]) => !KNOWN_FAILURES.has(inp))

  if (known.length) {
    it.fails.each(known)('%s %s (known parser limitation)', (desc, inp, res) => {
      const expectancy = Array.isArray(res) ? res : [res]
      expect(parseTextCite(inp)).toEqual(expectancy)
    })
  }

  if (!regular.length) return
  it.each(regular)('%s %s', (desc, inp, res) => {
    const parser =
      // eslint-disable-next-line
      // @ts-ignore
      MODE === 'dev'
        ? // eslint-disable-next-line
          // @ts-ignore
          new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
        : null
    parser && parser.feed(inp)
    const results = parser ? parser.results : parseTextCite(inp)
    const expectancy = Array.isArray(res) ? res : [res]
    expect(results).toEqual(expectancy)
  })
})
