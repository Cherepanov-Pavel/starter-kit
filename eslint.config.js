import {
	globalConfig,
	jsConfig,
	tsConfig,
	vueConfig,
	jsonConfig,
} from "@cherepanov.pavel/shareable-config/eslint-config";
import {
	OFF,
	ERROR,
} from "@cherepanov.pavel/shareable-config/eslint-config/constants/severity.js";
import eslintPluginAstro from "eslint-plugin-astro";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import * as astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import stylisticPlugin from "@stylistic/eslint-plugin";

const eslintConfig = [
	...globalConfig,
	jsConfig,
	tsConfig,
	vueConfig,
	...eslintPluginAstro.configs.recommended,
	...jsonConfig,
];

export function override() {
	// you can override some part of config here, by eslintConfig.push()
	// for the example, uncomment this line:
	eslintConfig.push({
		files: [
			"**/*.vue",
		],
		rules: {
			"vue/multi-word-component-names": OFF,
		},
	});


	eslintConfig.push({
		files: [
			"**/*.astro",
		],
		plugins: {
			"@typescript-eslint": tsPlugin,
			"@stylistic": stylisticPlugin,
		},
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				project: true,
				extraFileExtensions: [
					".astro",
				],
			},
		},
		rules: {
			...tsConfig.rules,
			"@stylistic/jsx-first-prop-new-line": [
				ERROR,
				"always",
			],
			"@stylistic/jsx-max-props-per-line": [
				ERROR,
				{
					"maximum": {
						single: 1,
						multi: 1,
					},
				},
			],
			"@stylistic/jsx-closing-bracket-location": [
				ERROR,
				"tag-aligned",
			],
			"arrow-body-style": [
				OFF,
			],
			// buggy
			// "@stylistic/jsx-one-expression-per-line": [
			// 	ERROR,
			// 	{
			// 		"allow": "non-jsx",
			// 	},
			// ],
		},
	});
}
override();

export default eslintConfig;
