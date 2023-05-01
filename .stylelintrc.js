module.exports = {
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-prettier/recommended',
      ],
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: [
        'stylelint-config-standard-scss',
        'stylelint-config-recommended-vue/scss',
      ],
    },
  ],
  rules: {
    'no-empty-first-line': null,
    'no-empty-source': null,
  },
};
