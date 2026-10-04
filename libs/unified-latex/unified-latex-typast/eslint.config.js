// @ts-check

import base from "../../../eslint.config.js";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	...base,
	{
		files: [
			"libs/unified-latex/unified-latex-typast/**/*.ts",
			"libs/unified-latex/unified-latex-typast/**/*.tsx",
			"libs/unified-latex/unified-latex-typast/**/*.js",
			"libs/unified-latex/unified-latex-typast/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/unified-latex/unified-latex-typast/**/*.ts",
			"libs/unified-latex/unified-latex-typast/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/unified-latex/unified-latex-typast/**/*.js",
			"libs/unified-latex/unified-latex-typast/**/*.jsx",
		],
		rules: {},
	},
];
