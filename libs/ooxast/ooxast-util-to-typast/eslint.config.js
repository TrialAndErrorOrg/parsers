// @ts-check

import base from "../../../eslint.config.js";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	...base,
	{
		files: [
			"libs/ooxast/ooxast-util-to-typast/**/*.ts",
			"libs/ooxast/ooxast-util-to-typast/**/*.tsx",
			"libs/ooxast/ooxast-util-to-typast/**/*.js",
			"libs/ooxast/ooxast-util-to-typast/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/ooxast/ooxast-util-to-typast/**/*.ts",
			"libs/ooxast/ooxast-util-to-typast/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/ooxast/ooxast-util-to-typast/**/*.js",
			"libs/ooxast/ooxast-util-to-typast/**/*.jsx",
		],
		rules: {},
	},
];
