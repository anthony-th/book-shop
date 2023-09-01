module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": [
      "tsconfig.json"
    ],
  },
  "plugins": [
    "import",
    "@typescript-eslint"
  ],
  "rules": {
    "no-debugger": "off",
    "no-console": 0,
    "class-methods-use-this": "off",
    "@typescript-eslint/no-explicit-any": 2
  },
}