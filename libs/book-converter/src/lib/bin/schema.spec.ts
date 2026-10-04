import { expect, it } from 'vitest'
import { z } from 'zod'
import { converterOptionsSchema } from './schema.js'

// `schema.json` (exported as `@trialanderror/converter-cli/schema.json`) describes the config
// file a user writes, so it is the input side of the transform. `vitest -u` regenerates it.
it('schema.json matches the config schema', async () => {
  const schema = z.toJSONSchema(converterOptionsSchema, { io: 'input', target: 'draft-7' })
  await expect(JSON.stringify(schema, null, 2) + '\n').toMatchFileSnapshot('../../../schema.json')
})
