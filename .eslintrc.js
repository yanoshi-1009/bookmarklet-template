module.exports = {
  extends: "@cybozu/eslint-config/presets/prettier",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  globals: {
    kintone: false,
    garoon: false
  }
};
