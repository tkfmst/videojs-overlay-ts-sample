// see https://eslint.org/

'use strict'

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'prettier',
        'jest',
        'simple-import-sort',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/no-empty-interface": "off",
        "simple-import-sort/sort": "error",
    },
};
