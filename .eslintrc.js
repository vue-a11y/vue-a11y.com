module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    'jest/globals': true
  },
  extends: [
    '@vue/standard',
    'plugin:vue/recommended',
    'plugin:vuejs-accessibility/recommended'
  ],
  plugins: [
    'vue',
    'jest',
    'vuejs-accessibility',
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'vuejs-accessibility/anchor-has-content': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^(@vue|vue)/',
          'module',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  }
}
