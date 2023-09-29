// export * from './lib/utils-better-check-dependencies.js'
import checkDeps, { RULE_NAME } from './lib/utils-better-check-dependencies.js'

const config = {
  rules: {
    [RULE_NAME]: checkDeps,
  },
} as const

export default config
