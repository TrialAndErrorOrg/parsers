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
  return parser.results[0]
}
