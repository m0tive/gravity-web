import { configs as tsConfigs } from "@typescript-eslint/eslint-plugin";
//import { configs as reactConfigs } from "eslint-plugin-react";
import { configs as jsConfigs } from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tsConfigs.recommended,
      //react: reactConfigs.recommended,
    },
  },
  jsConfigs.recommended,
];
