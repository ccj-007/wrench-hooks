module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    "plugin:prettier/recommended"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    "react/no-unescaped-entities": 0,
    "Delete `␍`": 0,
    "eslint-disable-next-line": 0,
    "react/react-in-jsx-scope": 0,
    "prefer-const": 0,
    "no-unused-vars": 0
  }
}
