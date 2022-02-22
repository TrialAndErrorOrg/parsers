import nearley from 'nearley'
import grammar from './apa'

interface Options {
  showAll?: boolean
}

export const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

export const parseTextCite = (string: string, options?: Options) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

  try {
    parser.feed(string)
  } catch (err) {
    console.error(err)
  }

  if (options?.showAll) {
    return parser.results
  }
  // if (parser.results.length > 1) {
  //   let result: any
  //   let maxLength = 0
  //   for (const res of parser.results) {
  //     const stringd = JSON.stringify(res)
  //     const length = stringd.length
  //     stringd.includes('Carraway') && console.dir(res, { depth: null })
  //     if (length > maxLength) {
  //       result = res
  //       maxLength = res
  //     }
  //   }
  //   return result
  // }
  return parser.results[0]
}
