type FinalItem = {
  matcher: string
  label: string
}
export function makeIndex(csvString: string, latexString: string, outputPath?: string) {
  // makeIndex(csvString, latexString)
  const parsedCSV = csvString
    .toLowerCase()
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
  const latexCommands = ['\\section', '\\chapter', '\\part', '\\subsection', '\\subsubsection']
  const latexCommandsRegex = new RegExp(
    `(${latexCommands.join('|')})({[^}]*)\\index\{.*?\}(.*?})`,
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
    /(\\(?:section|subsection|subsubsection|chapter|part))({.*?)\\index\{.*?\}(.*?})/g,
    (match, command, content1, content2) => {
      console.log(match, command, content1, content2)
      return `${command}${content1}${content2}`
    },
  )
  return { latexString, totalMatches, unmatchedWords } as Output
}

export type Output = {
  latexString: string
  totalMatches: number
  unmatchedWords: Map<string, true>
}
