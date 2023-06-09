import fs from 'fs'
import csvtojson from 'csvtojson'
import path from 'path'

let indices = new Map<string, string[]>()
let totalMatches = 0
let unmatchedWords: string[] = []
let latexCommands = ['\\section', '\\chapter', '\\part', '\\subsection', '\\subsubsection']
let latexCommandsRegex = new RegExp(`(${latexCommands.join('|')})({[^}]*})`, 'g')

export async function makeIndex(csvString: string, latexString: string, outputPath?: string) {
  const csvData = await csvtojson({ delimiter: ';' }).fromString(csvString)
  csvData.forEach((data) => parseCsvRow(data))
  let latexResult = processLatexString(latexString)

  if (outputPath) {
    fs.writeFileSync(path.resolve(__dirname, outputPath), latexResult)
  } else {
    console.log(latexResult)
    return latexResult
  }

  printMetrics()
}

function parseCsvRow(data: { [key: string]: string }) {
  for (let key in data) {
    let wordArray = data[key].split(';').map((word) => word.trim().toLowerCase())
    wordArray.forEach((word) => {
      if (word.includes('-')) {
        let mainWord = word.split('-')[0].trim()
        let subWords =
          word
            .split('-')[1]
            ?.split(';')
            .map((w) => w.trim()) || []
        indices.set(mainWord, subWords)
      } else {
        indices.set(word, [])
      }
    })
  }
}

function processLatexString(latexString: string): string {
  for (let [word, subwords] of indices) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi')
    let match
    while ((match = regex.exec(latexString)) != null) {
      totalMatches++
      let replacement = `${word}\\index{${word}${
        subwords.length ? '!' + subwords.map((sw) => sw.replace(/-/g, word)).join('!') : ''
      }}`
      latexString =
        latexString.slice(0, match.index) +
        replacement +
        latexString.slice(match.index + match[0].length)
    }
  }
  latexString = latexString.replace(
    latexCommandsRegex,
    (match, command, content) => `${command}[${content.slice(1, -1)}]${content}`,
  )
  return latexString
}

function printMetrics() {
  console.log(`Total matches: ${totalMatches}`)
  console.log(`Unmatched words: ${unmatchedWords.join(', ')}`)
}
