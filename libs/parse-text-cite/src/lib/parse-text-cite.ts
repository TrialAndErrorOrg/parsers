import nearley from 'nearley'
import grammar from './apa'

interface Options {
  showAll?: boolean
}
export const parseTextCite = (string: string, options?: Options) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  parser.feed(string)

  if (options?.showAll) {
    return parser.results
  }
  return parser.results[0]
}
