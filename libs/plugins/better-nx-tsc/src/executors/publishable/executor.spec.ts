import { PublishableExecutorSchema } from './schema'
import executor from './executor'

const options: PublishableExecutorSchema = {}

describe('Publishable Executor', () => {
  it('can run', async () => {
    const output = await executor(options)
    expect(output.success).toBe(true)
  })
})
