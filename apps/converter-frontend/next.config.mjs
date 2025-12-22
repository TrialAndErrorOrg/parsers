// eslint-disable-next-line @typescript-eslint/no-var-requires
// @ts-check

/**
 * @type {import('@nx/next/plugins/with-nx.js').WithNxOptions}
 **/
const nextConfig = {
	output: "standalone",
	transpilePackages: ["rejour-stringify", "docx-to-vfile", "reoff-cite"],
	experimental: {
		serverComponentsExternalPackages: ["swc", "@swc/wasm", "esbuild"],
	},
	webpack: (config) => {
		config.resolve.extensionAlias = {
			".js": [".ts", ".tsx", ".js"],
		};

		return config;
	},
};

export default nextConfig;
