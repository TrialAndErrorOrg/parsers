import OpenAI from 'openai'
import type { ChatCompletionMessageParam } from 'openai/resources/chat/completions'
import type { ChatModel } from 'openai/resources/shared'

export interface BibOptions {
  apiKey?: string
  format?: 'biblatex' | 'bibtex' | 'ris' | 'endnote' | 'csl'
  /**
   * The chat model to use.
   *
   * @default 'gpt-5.4-mini'
   */
  model?: ChatModel | (string & {})
  startingPrompt?: string
  streamOutput?: boolean
}

const defaultOptions: BibOptions = {
  format: 'biblatex',
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-5.4-mini',
  streamOutput: true,
}

export async function formatReferences(
  references: string[],
  options?: BibOptions,
): Promise<string | string[]> {
  const currentOptions = { ...defaultOptions, ...options }

  const { format, startingPrompt, streamOutput } = currentOptions
  const model = currentOptions.model || 'gpt-5.4-mini'
  const client = new OpenAI({ apiKey: currentOptions.apiKey || process.env.OPENAI_API_KEY })

  const defaultSystem = `You are a helpful assistant that turns academic references into the desired format. Your task is to convert the input references into ${format} format. You only respond with code, you do not respond with any other text.`

  const defaultPrompt = `turn incoming references into ${format} bibliography format, the following message will be the start of the references. format key as AuthorYear, add an a, b, c... to AuthorYear if and only if it is already taken. Wrap proper nouns and abbreviations (and only those) in {} in the title.
  Here is an example
  @article{Guy2022,
    author = {Guy, C.},
    year = {2022},
    title = {Open science from a qualitative, feminist perspective: {E}pistemological dogmas and a call for critical examination in {JATS}},
    journal = {Psychology of Women Quarterly},
    volume = {45},
    number = {4},
    pages = {448-456},
    doi = {10.1177/03616843211036460}
}
Respond with code only, do not provide explanations or any other text other than the formatted references.`

  const prompt = startingPrompt || defaultPrompt

  const messages: ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: defaultSystem,
    },
    {
      role: 'user',
      content: prompt,
    },
  ]

  console.log(`The system propmt is: ${defaultSystem}`)

  console.log(`The user prompt is: ${prompt}`)

  console.log('Chunking references...')
  const chunkedReferences = chunkReferences(references, 50) // Adjust the number depending on token limit

  const outputs: string[] = []

  for (const chunk of chunkedReferences) {
    const referenceString = chunk.join('\n')
    messages.push({
      role: 'user',
      content: referenceString,
    })

    const output = streamOutput
      ? await streamCompletion(client, model, messages)
      : ((await client.chat.completions.create({ model, messages })).choices[0]?.message.content ??
        '')

    // Keep the answer in the conversation, so later chunks can avoid reusing keys.
    messages.push({ role: 'assistant', content: output })
    outputs.push(output)
  }

  const combined = outputs.join('\n')

  return format === 'csl' ? combined.split('\n').map((line) => line.trim()) : combined
}

function chunkReferences(references: string[], chunkSize: number): string[][] {
  const chunks: string[][] = []
  for (let i = 0; i < references.length; i += chunkSize) {
    chunks.push(references.slice(i, i + chunkSize))
  }
  return chunks
}

/**
 * Streams a chat completion, echoing it to stdout as it arrives, and resolves with the full text
 * once the stream ends.
 */
async function streamCompletion(
  client: OpenAI,
  model: string,
  messages: ChatCompletionMessageParam[],
): Promise<string> {
  const stream = await client.chat.completions.create({ model, messages, stream: true })

  let output = ''
  for await (const chunk of stream) {
    output += chunk.choices[0]?.delta?.content ?? ''
    process.stdout.write('\r' + output) // Update the output on the same line
  }
  console.log() // Add a new line when the stream is done

  return output
}
