import { writeFileSync } from 'fs'
import { converterOptionsSchema } from '../bin/schema'

import { zodToJsonSchema } from 'zod-to-json-schema'

const schema = zodToJsonSchema(converterOptionsSchema)

writeFileSync(
  new URL('./../../public/schema.json', import.meta.url).pathname,
  JSON.stringify(schema, null, 2),
)
