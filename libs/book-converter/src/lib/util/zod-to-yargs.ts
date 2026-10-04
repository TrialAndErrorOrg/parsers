import { z } from 'zod'
import type { Options } from 'yargs'
import { converterCLIOptionsDefaultSchemaInput } from '../bin/schema.js'

export const zodToYargsOptions = (zodSchema: typeof converterCLIOptionsDefaultSchemaInput) => {
  const shape = zodSchema.shape
  const yargsOptions: Record<string, Options> = {}

  for (const [key, schema] of Object.entries(shape)) {
    let type: Options['type']

    const description = schema.description
    let value: z.ZodType = schema
    if (value instanceof z.ZodDefault) {
      value = value.unwrap() as z.ZodType
    }

    if (value instanceof z.ZodOptional) {
      value = value.unwrap() as z.ZodType
    }

    if (value instanceof z.ZodString) {
      type = 'string'
    } else if (value instanceof z.ZodNumber) {
      type = 'number'
    } else if (value instanceof z.ZodBoolean) {
      type = 'boolean'
    } else if (value instanceof z.ZodEnum) {
      type = 'string'
    }

    yargsOptions[key] = {
      type,
      describe: description ?? value.description ?? `EMPTY DESCRIPTION`,
    }
  }

  return yargsOptions
}
