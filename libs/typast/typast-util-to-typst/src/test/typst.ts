/**
 * Test helpers that run the real `typst` CLI on serialized output.
 *
 * `flatten` evaluates sources with `typst eval` and returns a compact string
 * of what Typst parsed (see `dump.typ`), so tests can assert both that the
 * output is valid and that it means what the tree meant.
 */
import { execFileSync, spawnSync } from 'node:child_process'
import { copyFileSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

export const hasTypst = (() => {
  try {
    return spawnSync('typst', ['--version'], { encoding: 'utf8' }).status === 0
  } catch {
    return false
  }
})()

function withDir<T>(fn: (dir: string) => T): T {
  const dir = mkdtempSync(join(tmpdir(), 'typast-to-typst-'))
  try {
    copyFileSync(join(here, 'dump.typ'), join(dir, 'dump.typ'))
    writeFileSync(join(dir, 'main.typ'), '')
    return fn(dir)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

function evalIn(dir: string, expr: string): string {
  return execFileSync('typst', ['eval', expr, '--in', join(dir, 'main.typ')], {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    maxBuffer: 64 * 1024 * 1024,
  })
}

export class TypstError extends Error {
  constructor(message: string, public source: string) {
    super(`${message}\n--- source ---\n${source}`)
  }
}

/**
 * Evaluate each source as a Typst file and flatten the resulting content.
 * Runs a single `typst` process for all sources; if that fails, re-runs them
 * one by one to report which source is invalid.
 */
export function flattenAll(sources: string[]): string[] {
  return withDir((dir) => {
    sources.forEach((s, i) => writeFileSync(join(dir, `c${i}.typ`), s))
    const includes = sources.map((_, i) => `include "c${i}.typ"`).join(', ')
    const expr = `{ import "dump.typ": flat; (${includes}${
      sources.length === 1 ? ',' : ''
    }).map(flat) }`
    try {
      return JSON.parse(evalIn(dir, expr)) as string[]
    } catch (e) {
      sources.forEach((s, i) => {
        try {
          evalIn(dir, `{ import "dump.typ": flat; flat(include "c${i}.typ") }`)
        } catch (err) {
          throw new TypstError(String((err as { stderr?: string }).stderr ?? err), s)
        }
      })
      throw e
    }
  })
}

export function flatten(source: string): string {
  return flattenAll([source])[0]
}

/** Compile `source` all the way to a PDF (layout included). Throws on errors. */
export function compile(source: string, files: Record<string, string> = {}): void {
  withDir((dir) => {
    writeFileSync(join(dir, 'main.typ'), source)
    for (const [name, content] of Object.entries(files)) writeFileSync(join(dir, name), content)
    const res = spawnSync('typst', ['compile', join(dir, 'main.typ'), join(dir, 'out.pdf')], {
      encoding: 'utf8',
    })
    if (res.status !== 0) throw new TypstError(res.stderr, source)
  })
}

/** Collapse whitespace like Typst does, for comparing plain text. */
export function squash(s: string): string {
  return s.replace(/\s+/g, ' ').trim()
}
