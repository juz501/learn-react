module.exports = {
  'env': {
      "browser": true,
      "es6": true,
      "node": true,
      "jest": true
  },
  'extends': [
    'airbnb'
  ],
  'parserOptions': {
      'ecmaFeatures': {
        'jsx': true
      },
      'ecmaVersion': 2018,
      'sourceType': 'module',
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/*.{test,spec,tests}.{js,jsx}'] }]
  },
};