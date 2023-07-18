import { rgPath } from '@vscode/ripgrep'
import { join } from 'path'
import { exec, spawn } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

const args = process.argv.slice(2)

const root = new URL('..', import.meta.url).pathname

const [lib] = args

const [topLevel, libName] = lib.split('/')

const libPath = join(root, 'dist', 'libs', topLevel, libName, '**/*.d.ts')

console.log(libPath)

// find all import from statements in libpath

const findImports = async (libPath: string) => {
  try {
    const string = `${rgPath} --json --no-line-number --no-heading --no-filename --no-column -g '${libPath}' -e "from '"`
    console.log(string)
    const { stdout, stderr } = await execAsync(string, {
      env: {
        ...process.env,
      },
    })
    console.log({ stderr, stdout })

    const lines = stdout.split('\n')

    const imports = lines
      .map((line) => {
        try {
          const { data } = JSON.parse(line)
          return data
        } catch (e) {
          return null
        }
      })
      .filter(Boolean)

    return imports
  } catch (e) {
    console.log(e)
  }
}

findImports(libPath).then(console.log).catch(console.log)
