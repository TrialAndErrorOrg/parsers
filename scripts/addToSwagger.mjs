import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'
import openapiTS from 'openapi-typescript'
const __dirname = process.cwd()
main()

async function main() {
  const swagger = JSON.parse(
    readFileSync(
      join(
        __dirname,
        'libs',
        'ojs',
        'ojs-client',
        'src',
        'lib',
        'swagger.json'
      ),
      {
        encoding: 'utf-8',
      }
    )
  )

  const defs = swagger.definitions

  const newDefs = Object.entries(defs).reduce((acc, [key, val]) => {
    if (typeof val !== 'string') {
      acc[key] = val
      return acc
    }
    try {
      const betterVal = JSON.parse(
        // readFileSync(join(__dirname, '..', 'schemas', val), {
        readFileSync(
          join(
            __dirname,
            'libs',
            'ojs',
            'ojs-client',
            'src',
            'lib',
            'schemas',
            `${val}.json`
          ),
          {
            encoding: 'utf-8',
          }
        )
      )
      acc[key] = betterVal
      return acc
    } catch (err) {
      console.warn(err)
      acc[key] = val
      return acc
    }
  }, {})

  swagger.definitions = newDefs

  const output = await openapiTS(swagger)

  // writeFileSync(join(__dirname, '..', 'swagger-types.ts'), output)
  writeFileSync(
    join(
      __dirname,
      'libs',
      'ojs',
      'ojs-client',
      'src',
      'lib',
      'swagger-types.ts'
    ),
    output
  )
}
