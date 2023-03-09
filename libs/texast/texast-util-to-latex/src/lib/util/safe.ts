import { Context, SafeOptions } from '../types.js'

/**
 * @param {Context} context
 * @param {string|null|undefined} input
 * @param {SafeOptions & {encode?: Array<string>}} config
 * @returns {string}
 */
export function safe(
  context: Context,
  input: string | null | undefined,
  config: SafeOptions & { encode?: Array<string> },
): string {
  return input || ''
}
