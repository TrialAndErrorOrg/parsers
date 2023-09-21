import { z } from 'zod'
import { Options } from 'yargs'
import { converterCLIOptionsDefaultSchemaInput } from '../bin/schema.js'

export const zodToYargsOptions = (zodSchema: typeof converterCLIOptionsDefaultSchemaInput) => {
  const shape = zodSchema.shape
  const yargsOptions: Record<string, Options> = {}

  // eslint-disable-next-line prefer-const
  for (let [key, value] of Object.entries(shape)) {
    let type: Options['type']

    const description = value.description
    if (value instanceof z.ZodDefault) {
      // @ts-expect-error aaa
      value = value._def.innerType
    }

    if (value instanceof z.ZodOptional) {
      // @ts-expect-error aaa
      value = value._def.innerType
    }

    if (value instanceof z.ZodString) {
      type = 'string'
    } else if (value instanceof z.ZodNumber) {
      type = 'number'
    } else if (value instanceof z.ZodBoolean) {
      type = 'boolean'
    } else if (value instanceof z.ZodEnum) {
      type = 'string'
    } else {
      //      throw new Error(`Unsupported Zod type for key: ${key}, ${value}`)
    }

    yargsOptions[key] = {
      type,
      describe: description ?? value.description ?? `EMPTY DESCRIPTION`,
    }
  }

  return yargsOptions
}
