// eslint.config.mjs

import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import { Linter } from 'eslint';

export default [
    // Base ESLint recommended rules
    {
        files: ['**/*.js', '**/*.jsx'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                process: 'readonly',
                console: 'readonly',
            },
        },
        rules: {
            // ESLint's recommended rules can be manually specified
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'no-empty-function': 'off',
            // Add other base rules as needed
        },
    },

    // Configure TypeScript and Prettier for TypeScript files
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: (await import('@typescript-eslint/parser')).default,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                process: 'readonly',
                console: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            // Extend TypeScript recommended rules
            ...typescriptPlugin.configs.recommended.rules,

            // Integrate Prettier
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    useTabs: false,
                    semi: true,
                    singleQuote: true,
                    trailingComma: 'es5',
                    printWidth: 80,
                    endOfLine: 'lf',
                },
            ],
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            'no-console': 'off',
            'no-empty-function': 'off',
        },
    },
];