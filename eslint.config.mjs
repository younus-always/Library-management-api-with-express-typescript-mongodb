import tseslint from 'typescript-eslint';

export default [
      {
            files: ['**/*.ts'],
            languageOptions: {
                  parser: tseslint.parser,
                  parserOptions: {
                        project: './tsconfig.json',
                        //! If your ESLint config and tsconfig.json are in the same folder (usually the project root), then you can omit tsconfigRootDir
                        // tsconfigRootDir: process.cwd(),
                        sourceType: 'module',
                  },
            },
            plugins: {
                  '@typescript-eslint': tseslint.plugin,
            },
            rules: {
                  // General TS rules
                  '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
                  '@typescript-eslint/no-explicit-any': 'warn',
                  '@typescript-eslint/explicit-function-return-type': 'off',
                  '@typescript-eslint/no-var-requires': 'error',

                  // Best practices
                  'no-console': 'warn',
                  'no-undef': 'error',
                  'no-unused-vars': 'error',
                  'prefer-const': 'error',
                  // 'eqeqeq': ['error', 'always'],
                  // 'curly': ['error', 'all'],
            },
      },
];
