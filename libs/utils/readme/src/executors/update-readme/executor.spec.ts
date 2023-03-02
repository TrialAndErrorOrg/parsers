import { UpdateReadmeExecutorSchema } from './schema'
import executor from './executor'

const options: UpdateReadmeExecutorSchema = {}

describe('UpdateReadme Executor', () => {
  it('can run', async () => {
    const output = await executor(options)
    expect(output.success).toBe(true)
  })
})
