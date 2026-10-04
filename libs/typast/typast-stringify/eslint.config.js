// @ts-check

import base from "../../../eslint.config.js";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	...base,
	{
		files: [
			"libs/typast/typast-stringify/**/*.ts",
			"libs/typast/typast-stringify/**/*.tsx",
			"libs/typast/typast-stringify/**/*.js",
			"libs/typast/typast-stringify/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/typast/typast-stringify/**/*.ts",
			"libs/typast/typast-stringify/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/typast/typast-stringify/**/*.js",
			"libs/typast/typast-stringify/**/*.jsx",
		],
		rules: {},
	},
];
