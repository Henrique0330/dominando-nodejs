import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import airbnb from "eslint-config-airbnb-base";
import prettier from "eslint-plugin-prettier";

export default defineConfig([
  js.configs.recommended,
  airbnb,

  {
    files: ["**/*.js"],
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
        },
      ],

      // Ajustes importantes
      "no-console": "off",
      "no-underscore-dangle": "off",
      "import/no-extraneous-dependencies": "off",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "max-len": "off",
    },
  },
]);