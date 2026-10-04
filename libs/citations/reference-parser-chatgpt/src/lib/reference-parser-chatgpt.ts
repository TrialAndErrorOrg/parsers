import { formatReferences, type BibOptions } from './format-references.js'

export type { BibOptions } from './format-references.js'

/**
 * Turns a newline-separated list of references into a bibliography (biblatex by default) using
 * the OpenAI chat API. Needs an API key, either via `options.apiKey` or `OPENAI_API_KEY`.
 */
export async function referenceParserChatgpt(
  references: string,
  options?: BibOptions,
): Promise<string | string[]> {
  return formatReferences(
    references.split('\n').filter((line) => line.trim()),
    options,
  )
}
