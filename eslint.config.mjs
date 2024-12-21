import globals from "globals";
import pluginJs from "@eslint/js";
import airbnb from "eslint-config-airbnb-base";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["dist/*", "webpack.config.js"],
  },
  {
    languageOptions: { globals: globals.browser },
    plugins: {
      airbnb,
    },
  },
  pluginJs.configs.recommended,
];
