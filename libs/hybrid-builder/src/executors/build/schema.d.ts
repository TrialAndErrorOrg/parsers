import { SwcExecutorOptions } from '@nx/js/src/utils/schema'
export interface BuildExecutorSchema extends SwcExecutorOptions {
  tsConfigESM: string
  tsConfigCJS: string
}
