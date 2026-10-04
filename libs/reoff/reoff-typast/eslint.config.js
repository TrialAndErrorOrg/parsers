// @ts-check

import base from "../../../eslint.config.js";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	...base,
	{
		files: [
			"libs/reoff/reoff-typast/**/*.ts",
			"libs/reoff/reoff-typast/**/*.tsx",
			"libs/reoff/reoff-typast/**/*.js",
			"libs/reoff/reoff-typast/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/reoff/reoff-typast/**/*.ts",
			"libs/reoff/reoff-typast/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/reoff/reoff-typast/**/*.js",
			"libs/reoff/reoff-typast/**/*.jsx",
		],
		rules: {},
	},
];
