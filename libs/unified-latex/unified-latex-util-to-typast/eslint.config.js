// @ts-check

import base from "../../../eslint.config.js";

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
	...base,
	{
		files: [
			"libs/unified-latex/unified-latex-util-to-typast/**/*.ts",
			"libs/unified-latex/unified-latex-util-to-typast/**/*.tsx",
			"libs/unified-latex/unified-latex-util-to-typast/**/*.js",
			"libs/unified-latex/unified-latex-util-to-typast/**/*.jsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/unified-latex/unified-latex-util-to-typast/**/*.ts",
			"libs/unified-latex/unified-latex-util-to-typast/**/*.tsx",
		],
		rules: {},
	},
	{
		files: [
			"libs/unified-latex/unified-latex-util-to-typast/**/*.js",
			"libs/unified-latex/unified-latex-util-to-typast/**/*.jsx",
		],
		rules: {},
	},
];
