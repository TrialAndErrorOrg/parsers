import type { ChatCompletionRequestMessage } from 'openai'
import { createParser, type ParseEvent } from 'eventsource-parser'

export interface BibOptions {
  apiKey?: string
  format?: 'biblatex' | 'bibtex' | 'ris' | 'endnote' | 'csl'
  startingPrompt?: string
  streamOutput?: boolean
}

const defaultOptions: BibOptions = {
  format: 'biblatex',
  apiKey: process.env.OPENAI_API_KEY,
  streamOutput: true,
}

export async function formatReferences(
  references: string[],
  options?: BibOptions,
): Promise<string | string[]> {
  const currentOptions = { ...defaultOptions, ...options }

  const { format, startingPrompt, streamOutput } = currentOptions
  const apiKey = currentOptions.apiKey || process.env.OPENAI_API_KEY

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

  const messages: ChatCompletionRequestMessage[] = [
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

    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      method: 'POST',
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        stream: streamOutput,
      }),
    })

    if (!chatResponse.ok) {
      throw new Error(
        `OpenAI request failed: ${chatResponse.status} ${chatResponse.statusText}: ${await chatResponse.text()}`,
      )
    }

    const output = streamOutput
      ? await readStream(chatResponse)
      : ((await chatResponse.json()) as ChatCompletion).choices[0].message.content

    outputs.push(output)
  }

  const combined = outputs.join('\n')

  return format === 'csl' ? combined.split('\n').map((line) => line.trim()) : combined
}

interface ChatCompletion {
  choices: { message: { content: string } }[]
}

interface ChatCompletionChunk {
  choices: { delta?: { content?: string } }[]
}

function chunkReferences(references: string[], chunkSize: number): string[][] {
  const chunks: string[][] = []
  for (let i = 0; i < references.length; i += chunkSize) {
    chunks.push(references.slice(i, i + chunkSize))
  }
  return chunks
}

/**
 * Reads a streamed (server-sent events) chat completion, echoing it to stdout as it arrives,
 * and resolves with the full text once the stream reports `[DONE]` (or ends).
 */
async function readStream(response: Response): Promise<string> {
  let output = ''
  let done = false

  const parser = createParser((event: ParseEvent) => {
    if (event.type === 'reconnect-interval') {
      console.log('We should set reconnect interval to %d milliseconds', event.value)
      return
    }

    if (event.data === '[DONE]') {
      done = true
      console.log() // Add a new line when the stream is done
      return
    }

    const content = (JSON.parse(event.data) as ChatCompletionChunk).choices[0].delta?.content || ''
    output += content
    process.stdout.write('\r' + output) // Update the output on the same line
  })

  if (!response.body) {
    return output
  }

  for await (const value of response.body.pipeThrough(new TextDecoderStream())) {
    parser.feed(value)
    if (done) break
  }

  return output
}
