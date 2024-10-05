import cybozuEslintConfig from "@cybozu/eslint-config/flat/presets/prettier.js";

export default [
  ...cybozuEslintConfig,
  {
    languageOptions: {
      globals: {
        kintone: "readonly",
        garoon: "readonly",
        KintoneRestAPIClient: "readonly",
        axios: "readonly",
        Papa: "readonly"
      }
    }
  },
  {
    ignores: ["node_modules", "dist", "*.config.js"]
  }
];
