import { PublishableExecutorSchema } from './schema.d'
import executor from './executor.js'

const options: PublishableExecutorSchema = {
  dist: 'dist/apps/citations',
  dryRun: true,
}

describe('Publishable Executor', () => {
  it('can run', async () => {
    const output = await executor(options, {} as any)
    expect(output.success).toBe(true)
  })
})
