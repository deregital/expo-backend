import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import unusedImportPlugin from 'eslint-plugin-unused-imports';
import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname });

export default [
  ...compat.extends('plugin:@typescript-eslint/recommended', 'prettier'),
  {
    ignores: ['types/*', 'dist/*', './src/shared/data/arg-cities.json'],
  },
  {
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'unused-imports': unusedImportPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
];
