module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "react/prop-types": "off",
    "jsx-a11y/href-no-hash": "off",
    "no-unused-vars": [
      "error",
      {
        "args": "after-used",
        "ignoreRestSiblings": false
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "bracketSpacing": false,
        "trailingComma": "es5",
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}