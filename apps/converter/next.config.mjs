/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: [
    'docx-to-vfile',
    'reoff-parse',
    'reoff-clean',
    'reoff-markup-to-style',
    'reoff-unified-latex',
    'unified-latex-stringify',
    'ojs-client',
  ],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js'],
    }
    return config
  },
}

export default nextConfig
