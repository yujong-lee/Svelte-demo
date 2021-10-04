module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest-dom/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    context: 'readonly',
    given: 'readonly',
  },
  plugins: [
    'svelte3',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  settings: {
    'svelte3/typescript': true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
};
