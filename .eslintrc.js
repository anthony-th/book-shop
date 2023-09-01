module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": [
    "import",
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": 2
  },
  "settings": {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
}