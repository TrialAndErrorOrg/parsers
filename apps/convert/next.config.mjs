//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { withNx } from '@nx/next/plugins/with-nx.js'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
    newNextLinkBehavior: true,
    forceSwcTransforms: true,
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'cote.azureedge.net',
      'res.cloudinary.com',
      'tailwindui.com',
    ],
  },
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
}

export default withNx(nextConfig)
