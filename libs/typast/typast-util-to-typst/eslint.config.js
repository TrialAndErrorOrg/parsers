// @ts-check

import base from "../../../eslint.config.js";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	...base,
	{
		files: [
			"libs/typast/typast-util-to-typst/**/*.ts",
			"libs/typast/typast-util-to-typst/**/*.tsx",
			"libs/typast/typast-util-to-typst/**/*.js",
			"libs/typast/typast-util-to-typst/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/typast/typast-util-to-typst/**/*.ts",
			"libs/typast/typast-util-to-typst/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/typast/typast-util-to-typst/**/*.js",
			"libs/typast/typast-util-to-typst/**/*.jsx",
		],
		rules: {},
	},
];
