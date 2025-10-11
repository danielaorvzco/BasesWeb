import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], 
  plugins: { js }, 
  extends: ["js/recommended"], 
  languageOptions: { globals: globals.node } 
},
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  eslintPluginPrettierRecommended,
]);