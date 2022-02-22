import { tests } from './testcites'
import { names } from './testnames'
import { parseTextCite } from './parse-text-cite'
import nearley, { Parser } from 'nearley'

const MODE: 'dev' | 'test' = 'test'
// eslint-disable-next-line
//@ts-ignore it's there sweaty
//import grammar from './apa.ne'

type ContentArr = [
  description: string,
  input: string,
  result: string | boolean | Record<string, any>
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
    (
      acc: Table,
      [apa, val]: [
        apa: string,
        val: { description: string; content: Content[] }
      ]
    ) => {
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
    []
  )

const citeTable = tableReducer(tests)
const nameTable = tableReducer(names)

//@ts-ignore
if (MODE === 'dev') {
  describe.each(nameTable)('%s: %s', (apa, desc, content) => {
    it.each(content)(
      '%s %s',
      (
        desc: string,
        inp: string,
        res: boolean | string | Record<string, any>
      ) => {
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
      }
    )
  })
}

describe.each(citeTable)(
  '%s: %s',
  (apa: string, desc: string, content: ContentArr[]) => {
    it.each(content)('%s %s', (desc, inp, res) => {
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
      // console.dir(results, { depth: null })
      const expectancy = Array.isArray(res) ? res : [res]
      expect(results).toEqual(expectancy)
    })
  }
)
