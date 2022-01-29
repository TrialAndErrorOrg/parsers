/**
 * @typedef {import('./types.js').Options} Options
 * @typedef {import('./types.js').Context} Context
 */

import { Options, Context } from './types'

export function configure(base: Context, extension: Options): Context {
  let index = -1
  let key: string

  // First do subextensions.
  if (extension.extensions) {
    while (++index < extension.extensions.length) {
      configure(base, extension.extensions[index])
    }
  }

  for (key in extension) {
    if (key === 'extensions') {
      // Empty.
    } else if (key === 'unsafe' || key === 'join') {
      /* c8 ignore next 2 */
      // @ts-expect-error: hush.
      base[key] = [...(base[key] || []), ...(extension[key] || [])]
    } else if (key === 'handlers') {
      base[key] = Object.assign(base[key], extension[key] || {})
    } else {
      // @ts-expect-error: hush.
      base.options[key] = extension[key]
    }
  }

  return base
}
