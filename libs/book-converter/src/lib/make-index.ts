type FinalItem = {
  matcher: string
  label: string
}
export function makeIndex(csvString: string, latexString: string, outputPath?: string) {
  // makeIndex(csvString, latexString)
  // everything to lowercase except for acronyms
  const parsedCSV = csvString
    .replace(/[A-Z][a-z]/g, (match) => match.toLowerCase())
    .split(/\r?\n/)
    .map((row) => row.split(';'))

  const parsed = parsedCSV.map(parseCsvRow).flat()
  console.log(parsed)

  return processLatexString(latexString, parsed)
}

function parseCsvRow(row: string[]) {
  const [matcherLabel, ...aliases] = row[0].split('/')

  const matchers = (aliases?.length ? aliases : [matcherLabel]).flatMap((matcher) =>
    matcher
      .trim()
      ?.replace(')', '')
      .split('(')
      .map((m) => m.trim()),
  )

  if (!row[1]) {
    return matchers.map((matcher) => ({ matcher, label: matcherLabel }))
  }

  const [_, ...sublabels] = row

  return sublabels.flatMap((sublabel) =>
    matchers.flatMap((matcher) => {
      const [subLabel, ...subLabelMatchers] = sublabel.split('/').map((s) => s.trim())
      return (subLabelMatchers || [subLabel]).flatMap((sublabelMatcher) => ({
        matcher: sublabelMatcher.replace(/-/, matcher),
        label: `${matcherLabel}!${subLabel}`,
      }))
    }),
  )
}

function processLatexString(latexString: string, parsed: FinalItem[]) {
  const latexCommands = [
    '\\section',
    '\\chapter',
    '\\part',
    '\\subsection',
    '\\subsubsection',
    '\\href',
  ]
  const latexCommandsRegex = new RegExp(
    // eslint-disable-next-line regexp/no-useless-escape, regexp/strict
    `(${latexCommands.join('|')})({[^}]*)\\index{.*?}(.*?})`,
    'g',
  )

  let totalMatches = 0

  const unmatchedWords = new Map(parsed.map(({ matcher }) => [matcher, true]))

  for (const { matcher, label } of parsed) {
    const regex = new RegExp(`(?<!-|/)\\b${matcher}\\b(?!-|/)`, 'gi')

    latexString = latexString.replace(regex, (match) => {
      totalMatches++
      unmatchedWords.delete(matcher)
      return `${match}\\index{${label}}`
    })
  }

  latexString = latexString.replace(
    /(\\(?:section|subsection|subsubsection|chapter|part|href))(\{.*?)\\index\{.*?\}(.*?\})/g,
    (match, command, content1, content2) => {
      console.log(match, command, content1, content2)
      return `${command}${content1}${content2}`
    },
  )

  // remove nested indexes
  latexString = latexString.replace(
    /(\\index)(\{[^}]*?)\\index\{.*?\}(.*?\})/g,
    (match, command, content1, content2) => {
      console.log(match, command, content1, content2)
      return `${command}${content1}${content2}`
    },
  )
  return { latexString, totalMatches, unmatchedWords } as Output
}

export type Output = {
  latexString: string
  index?: {
    totalMatches: number
    unmatchedWords: Map<string, true>
  }
}
