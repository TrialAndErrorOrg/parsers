import {
  ExecutorOptions as NrwlExecutorOptions,
  NormalizedExecutorOptions as NrwlNormalizedExecutorOptions,
} from '@nrwl/js/src/utils/schema';

export interface ExecutorOptions extends NrwlExecutorOptions {
  internal: string[];
}

export interface NormalizedExecutorOptions
  extends NrwlNormalizedExecutorOptions {
  internal: string[];
}
