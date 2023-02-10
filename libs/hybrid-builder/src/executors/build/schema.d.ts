import { SwcExecutorOptions } from "@nrwl/js/src/utils/schema";
export interface BuildExecutorSchema extends SwcExecutorOptions {
  tsConfigESM: string;
  tsConfigCJS: string;
} 
