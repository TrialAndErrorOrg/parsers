import { UpdateReadmeExecutorSchema } from './schema.d.js'
import executor from './executor.js'

const options: UpdateReadmeExecutorSchema = {}

describe('UpdateReadme Executor', () => {
  it('can run', async () => {
    const output = await executor(options)
    expect(output.success).toBe(true)
  })
})
