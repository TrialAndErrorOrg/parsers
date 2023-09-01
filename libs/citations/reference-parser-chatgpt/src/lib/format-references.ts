import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai'
import { createParser } from 'eventsource-parser'

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

  const { apiKey, format, startingPrompt, streamOutput } = currentOptions

  const configuration = new Configuration({
    apiKey: apiKey || process.env.OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration)

  const defaultSystem =
    'You are a helpful assistant that turns academic references into the desired format. Your task is to convert the input references into ${format} format. You only respond with code, you do not respond with any other text.'

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

  for (const chunk of chunkedReferences) {
    const referenceString = chunk.join('\n')
    messages.push({
      role: 'user',
      content: referenceString,
    })

    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      method: 'POST',
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        stream: true,
      }),
    })

    // const chatResponse = await openai.createChatCompletion({
    //   messages,
    //   model: 'gpt-3.5-turbo',
    //   stream: streamOutput,
    // })

    if (streamOutput) {
      const outputPromise = new Promise<string | string[]>((resolve) => {
        const parser = createParser((event) => onParse(event, currentOptions, resolve))

        ;(async () => {
          for await (const value of chatResponse.body?.pipeThrough(new TextDecoderStream())) {
            parser.feed(value)
          }
        })()
      })

      return await outputPromise
    } else {
      const responses = (await chatResponse.json()).choices[0].message.content

      if (format === 'csl') {
        const cslArray = responses.split('\n').map((line) => line.trim())
        return cslArray
      } else {
        return responses
      }
    }
  }
}

function chunkReferences(references: string[], chunkSize: number): string[][] {
  const chunks = []
  for (let i = 0; i < references.length; i += chunkSize) {
    chunks.push(references.slice(i, i + chunkSize))
  }
  return chunks
}

let currentOutput = ''

function onParse(
  event: any,
  options: BibOptions,
  resolve: (output: string | string[]) => void,
): void {
  if (event.type === 'event') {
    if (event.data !== '[DONE]') {
      const content = JSON.parse(event.data).choices[0].delta?.content || ''
      currentOutput += content
      process.stdout.write('\r' + currentOutput) // Update the output on the same line
    } else {
      console.log() // Add a new line when the stream is done
      if (options?.format === 'csl') {
        const cslArray = currentOutput.split('\n').map((line) => line.trim())
        resolve(cslArray)
      } else {
        resolve(currentOutput)
      }
    }
  } else if (event.type === 'reconnect-interval') {
    console.log('We should set reconnect interval to %d milliseconds', event.value)
  }
}
