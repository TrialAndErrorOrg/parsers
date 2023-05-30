import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai'

export async function referenceParserChatgpt(references: string): string {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const referencesArray = references.split('\n')

  const base =
    'turn into biblatex, code only, format key as AuthorXXXX. AuthorXXXXa if AuthorXXXX is already taken. Wrap proper nouns and abbrevs in {} in the title.'

  const firstMessage = `${base} ${referencesArray.slice(0, 2)}`

  const messages: ChatCompletionRequestMessage[] = []

  const chatResponse = await openai.createChatCompletion({
    messages,

    model: 'gpt-3.5-turbo',
  })

  const x = chatResponse.data
}
