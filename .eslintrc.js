// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 0,
    'space-before-function-paren': 0,
    'no-console': 'off',
    //不允许出现多余的分号
    'no-extra-semi': 0,
    'no-multiple-empty-lines': [
      2,
      {
        'max': 4
      }
    ],
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'none',
        'bracketSpacing': false,
        'alwaysParens': 'always',
        'printWidth': '120',
        'jsxBracketSameLine': true,
        'semi': false
      }
    ]
  }
}
