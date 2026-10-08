import {
	globalConfig,
	jsConfig,
	tsConfig,
	vueConfig,
	jsonConfig,
} from "@cherepanov.pavel/shareable-config/eslint-config";
import {
	OFF,
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
				projectService: true,
				extraFileExtensions: [
					".astro",
				],
			},
		},
		rules: {
			...tsConfig.rules,
		},
	});
}
override();

export default eslintConfig;
