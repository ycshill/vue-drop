module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    // 'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'func-names': 0,
    'array-callback-return': 0,
    'arrow-parens': 0,
    'no-unused-vars': 0,
    'arrow-body-style': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'linebreak-style': 0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
