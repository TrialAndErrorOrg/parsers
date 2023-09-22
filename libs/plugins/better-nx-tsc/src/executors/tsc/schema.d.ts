import {
  ExecutorOptions as NrwlExecutorOptions,
  NormalizedExecutorOptions as NrwlNormalizedExecutorOptions,
} from '@nx/js/src/utils/schema'

export interface ExecutorOptions extends NrwlExecutorOptions {
  internal?: string[]
  format?: 'cjs' | 'esm' | ['cjs', 'esm']
}

export interface NormalizedExecutorOptions extends NrwlNormalizedExecutorOptions {
  internal?: string[]
  format?: 'cjs' | 'esm' | ['cjs', 'esm']
}
