// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  "plugins": ["@typescript-eslint"],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error"
  }
};
