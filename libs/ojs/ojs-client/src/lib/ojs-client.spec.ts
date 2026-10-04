import OJS from './ojs-client.js'
import 'dotenv/config'
import { describe, it, expect } from 'vitest'

const ojs = new OJS({
  endpoint: 'https://journal.trialanderror.org/index.php/jote/api/v1',
  token: process.env.OJS_TOKEN,
})
// Talks to the live JOTE OJS instance: needs network access and an OJS_TOKEN, so it is skipped without one.
describe.skipIf(!process.env.OJS_TOKEN)('ojsClient (needs OJS_TOKEN)', () => {
  it('should pull submissions', async () => {
    const submission = await ojs.submission(27)
    console.log(submission)
    expect(submission).toBeDefined()
  })
  it('should pull publications', async () => {
    const submission = await ojs.publications(27)
    console.log(submission)
    expect(submission).toBeDefined()
  })
  it('should pull specific publication', async () => {
    const submission = await ojs.publication(27, 27)
    console.log(submission)
    expect(submission).toBeDefined()
  })
})
