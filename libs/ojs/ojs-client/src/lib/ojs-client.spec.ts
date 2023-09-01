import OJS from './ojs-client.js'
import 'dotenv/config'

const ojs = new OJS({
  endpoint: 'https://journal.trialanderror.org/index.php/jote/api/v1',
  token: process.env.OJS_TOKEN,
})
describe('ojsClient', () => {
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
