// eslint-disable-next-line @typescript-eslint/no-var-requires
// @ts-check

import { withNx } from '@nrwl/next/plugins/with-nx.js'
import path from 'path'

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    outputFileTracingRoot: new URL('../../', import.meta.url).pathname,
  },
}

export default withNx(nextConfig)
