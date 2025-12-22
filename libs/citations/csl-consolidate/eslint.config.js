// @ts-check

import base from "../../../eslint.config.js";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	...base,
	{
		files: [
			"libs/citations/csl-consolidate/**/*.ts",
			"libs/citations/csl-consolidate/**/*.tsx",
			"libs/citations/csl-consolidate/**/*.js",
			"libs/citations/csl-consolidate/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/citations/csl-consolidate/**/*.ts",
			"libs/citations/csl-consolidate/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/citations/csl-consolidate/**/*.js",
			"libs/citations/csl-consolidate/**/*.jsx",
		],
		rules: {},
	},
];
