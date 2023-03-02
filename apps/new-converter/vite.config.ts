// apps/[app name]/vite.config.ts

import type { UserConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

const config: UserConfig = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      // other libraries which are used by the app need to be declared
      // '@[my-org]/[library name]': resolve(
      //   '../../libs/[library name]/src/index.ts'
      // ),
    },
  },
  server: {
    fs: {
      // Allow access to node_modules (like @svelte/kit)
      allow: ['../../node_modules'],
    },
  },
}

export default config
