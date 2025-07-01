import tseslint from 'typescript-eslint';

export default tseslint.config([
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
                  // Best practices
                  // 'no-console': 'warn',
                  // 'no-undef': 'warn',
                  // 'no-unused-vars': 'warn',
                  'prefer-const': 'error',
                  // 'eqeqeq': ['error', 'always'],
                  // 'curly': ['error', 'all'],
            },
            ignores: ["**/node_modules", "**/dist", "**/.env"]
      }
])
