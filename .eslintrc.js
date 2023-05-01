module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  plugins: ['vue', 'prettier', 'import-helpers'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser',
    },
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      {
        usePrettierrc: true,
      },
    ],
    'no-unused-vars': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^pages/',
          '/^widgets/',
          '/^features/',
          '/^entities/',
          '/^shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'ignore',
          ignoreCase: true,
        },
      },
    ],
  },
};
