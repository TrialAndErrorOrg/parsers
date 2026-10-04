// @ts-check

import base from "../../../eslint.config.js";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	...base,
	{
		files: [
			"libs/typast/typast/**/*.ts",
			"libs/typast/typast/**/*.tsx",
			"libs/typast/typast/**/*.js",
			"libs/typast/typast/**/*.jsx",
		],
		rules: {},
	},
	{
		files: ["libs/typast/typast/**/*.ts", "libs/typast/typast/**/*.tsx"],
		rules: {},
	},
	{
		files: ["libs/typast/typast/**/*.js", "libs/typast/typast/**/*.jsx"],
		rules: {},
	},
];
