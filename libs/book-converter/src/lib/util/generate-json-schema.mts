import { writeFileSync } from 'fs'
import { z } from 'zod'
import { converterOptionsSchema } from '../bin/schema.js'

// The schema describes the config file a user writes, so it is the input side of the transform.
const schema = z.toJSONSchema(converterOptionsSchema, { io: 'input', target: 'draft-7' })

writeFileSync(
  new URL('./../../public/schema.json', import.meta.url).pathname,
  JSON.stringify(schema, null, 2),
)
