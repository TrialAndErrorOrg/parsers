// eslint-disable-next-line @typescript-eslint/no-var-requires
// @ts-check

import { withNx } from '@nrwl/next/plugins/with-nx.js'
import path from 'path'

/**
 * @type {import('@nrwl/next/plugins/with-nx.js').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js"],
    };

    return config;
  },
  experimental: {
    outputFileTracingRoot: new URL('../../', import.meta.url).pathname,
  },
}

export default withNx(nextConfig)
