import { BuildExecutorSchema } from './schema.js'
import executor from './executor.js'

const options: BuildExecutorSchema = {}

describe('Build Executor', () => {
  it('can run', async () => {
    const output = await executor(options)
    expect(output.success).toBe(true)
  })
})
