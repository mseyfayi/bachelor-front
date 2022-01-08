module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier', 'react-hooks'],
  extends: ['plugin:@typescript-eslint/recommended', 'next', 'next/core-web-vitals', 'airbnb', 'eslint-config-prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    // `js` and `jsx` are common extensions
    // `mjs` is for `universal-router` only, for now
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // Not supporting nested package.json yet
    // https://github.com/benmosher/eslint-plugin-import/issues/458
    'import/no-extraneous-dependencies': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 130,
      },
    ],

    // a11y removed rule, ignore them
    'jsx-a11y/href-no-hash': 'off',

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/308#issuecomment-322954274
    'jsx-a11y/label-has-for': 'warn',

    // Allow js files to use jsx syntax, too
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    // Automatically convert pure class to function by
    // babel-plugin-transform-react-pure-class-to-function
    // https://github.com/kriasoft/react-starter-kit/pull/961
    'react/prefer-stateless-function': 'off',
    'max-len': ['error', { code: 130, tabWidth: 2 }],
    'no-use-before-define': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/button-has-type': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/forbid-prop-types': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'react/no-array-index-key': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-did-update-set-state': 'off',
    'import/no-cycle': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
