// eslint-disable-next-line @typescript-eslint/no-var-requires
import withNx from '@nx/next/plugins/with-nx'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  swcMinify: true,
  experimental: {},
}

export default withNx(nextConfig)
