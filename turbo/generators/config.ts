import { existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import type { PlopTypes } from '@turbo/gen'

/**
 * `pnpm turbo gen lib` — scaffold a publishable library at libs/<group>/<name>.
 *
 * Non-interactive: `pnpm turbo gen lib --args <name> <group> "<description>"`
 */
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // config lives in <root>/turbo/generators
  const libs = join(plop.getPlopfilePath(), '..', '..', 'libs')
  const groups = existsSync(libs)
    ? readdirSync(libs, { withFileTypes: true })
        .filter((d) => d.isDirectory() && !existsSync(join(libs, d.name, 'package.json')))
        .map((d) => d.name)
        .sort()
    : []

  plop.setGenerator('lib', {
    description: 'A publishable ESM library in libs/<group>/<name>',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'npm package name (e.g. ooxast-util-foo):',
        validate: (input: string) =>
          /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(input) ||
          'must be a valid npm package name',
      },
      {
        type: 'input',
        name: 'group',
        message: `group directory under libs/ (${groups.join(', ')}, or a new one):`,
        default: (answers: { name: string }) =>
          groups.find((g) => answers.name.replace(/^@[^/]+\//, '').startsWith(`${g}-`)) ?? 'utils',
      },
      {
        type: 'input',
        name: 'description',
        message: 'one-line description:',
      },
    ],
    actions: (answers) => {
      const dir = '{{ turbo.paths.root }}/libs/{{ group }}/{{ folder name }}'
      const files = [
        'package.json',
        'tsconfig.json',
        'tsconfig.lib.json',
        'README.md',
        'LICENSE',
        'src/index.ts',
        'src/index.spec.ts',
      ]
      return [
        ...files.map((file) => ({
          type: 'add' as const,
          path: `${dir}/${file}`,
          templateFile: `templates/lib/${file}${file === 'LICENSE' ? '' : '.hbs'}`,
          abortOnFail: true,
        })),
        () =>
          `created libs/${answers?.group}/${String(answers?.name).replace(/^@[^/]+\//, '')}; run \`pnpm install\`. ` +
          `It starts as "private": true; when it's ready, remove that, add a changeset, and do the ` +
          `first npm publish by hand (see docs/releasing.md)`,
      ]
    },
  })

  // `@scope/foo-bar` -> `foo-bar`
  plop.setHelper('folder', (name: string) => name.replace(/^@[^/]+\//, ''))
  // `@scope/foo-bar` -> `fooBar`
  plop.setHelper('fn', (name: string) =>
    name.replace(/^@[^/]+\//, '').replace(/[-.]+(\w)/g, (_, c: string) => c.toUpperCase()),
  )
}
