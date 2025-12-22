// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import nxEslintPlugin from "@nx/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
// import * as eslintPluginRegexp from "eslint-plugin-regexp";
import * as eslintPluginImport from "eslint-plugin-import";
import js from "@eslint/js";
const { configs } = js;
// import checkDeps from './dist/libs/utils/better-check-dependencies/index.js'

const dirname = new URL(".", import.meta.url).pathname;

const compat = new FlatCompat({
	baseDirectory: dirname,
	recommendedConfig: configs.recommended,
});

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const config = [
	...compat.extends("plugin:regexp/recommended"),
	{
		plugins: {
			"@nx": nxEslintPlugin,
			"eslint-plugin-unicorn": eslintPluginUnicorn,
			import: eslintPluginImport,
		},
	},
	// {
	//   plugins: {
	//     'check-dependencies': checkDeps,
	//   },
	//   files: ['**/package.json'],
	//   rules: {
	//     'check-dependencies/dependency-checks': [
	//       'error',
	//       {
	//         buildTargets: ['build'],
	//         checkMissingDependencies: true,
	//         checkObsoleteDependencies: true,
	//         checkVersionMismatches: true,
	//         ignoredDependencies: ['tslib'],
	//       },
	//     ],
	//   },
	// },
	// ...compat.config({ parser: 'jsonc-eslint-parser' }).map((config) => ({
	//   ...config,
	//   files: ['**/{package,project}.json'],
	//   rules: {
	//     '@nx/dependency-checks': [
	//       'error',
	//       {
	//         buildTargets: ['build'],
	//         checkMissingDependencies: true,
	//         checkObsoleteDependencies: true,
	//         checkVersionMismatches: true,
	//         ignoredDependencies: ['tslib'],
	//       },
	//     ],
	//   },
	// })),
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
		rules: {
			"import/extensions": ["error", "ignorePackages"],
			"@nx/enforce-module-boundaries": [
				"off",
				{
					enforceBuildableLibDependency: true,
					allow: [],
					depConstraints: [
						{
							sourceTag: "*",
							onlyDependOnLibsWithTags: ["*"],
						},
					],
				},
			],
		},
	},
	...compat.config({ extends: ["plugin:@nx/typescript"] }).map((config) => ({
		...config,
		files: ["**/*.ts", "**/*.tsx"],
		rules: { "@typescript-eslint/no-explicit-any": "off" },
	})),
	...compat.config({ extends: ["plugin:@nx/javascript"] }).map((config) => ({
		...config,
		files: ["**/*.js", "**/*.jsx"],
		rules: {},
	})),
	...compat.config({ parser: "jsonc-eslint-parser" }).map((config) => ({
		...config,
		files: ["**/*.json"],
		rules: {},
	})),
	{ ignores: ["docs", "dist"] },
];

export default config;
