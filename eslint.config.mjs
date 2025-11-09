import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  // Next.js base configuration
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'plugin:prettier/recommended',
    ],
  }),

  // Custom configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        location: 'readonly',
        history: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        Response: 'readonly',
        Request: 'readonly',
        Headers: 'readonly',
        FormData: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        Image: 'readonly',

        // Node.js globals
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        global: 'readonly',
        Buffer: 'readonly',

        // Timer functions
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',

        // Built-in JavaScript objects
        globalThis: 'readonly',
        Date: 'readonly',
        Math: 'readonly',
        JSON: 'readonly',
        RegExp: 'readonly',
        Error: 'readonly',
        TypeError: 'readonly',
        ReferenceError: 'readonly',
        SyntaxError: 'readonly',
        RangeError: 'readonly',
        EvalError: 'readonly',
        URIError: 'readonly',
        Array: 'readonly',
        ArrayBuffer: 'readonly',
        Boolean: 'readonly',
        DataView: 'readonly',
        Float32Array: 'readonly',
        Float64Array: 'readonly',
        Int8Array: 'readonly',
        Int16Array: 'readonly',
        Int32Array: 'readonly',
        Map: 'readonly',
        Number: 'readonly',
        Object: 'readonly',
        Promise: 'readonly',
        Proxy: 'readonly',
        Reflect: 'readonly',
        Set: 'readonly',
        String: 'readonly',
        Symbol: 'readonly',
        Uint8Array: 'readonly',
        Uint8ClampedArray: 'readonly',
        Uint16Array: 'readonly',
        Uint32Array: 'readonly',
        WeakMap: 'readonly',
        WeakSet: 'readonly',
        Intl: 'readonly',
        WebAssembly: 'readonly',
        BigInt: 'readonly',
        BigInt64Array: 'readonly',
        BigUint64Array: 'readonly',
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        FinalizationRegistry: 'readonly',
        WeakRef: 'readonly',
      },
    },
    rules: {
      // JavaScript/TypeScript core rules
      'new-cap': 'off',
      'no-var': 'error',
      'no-alert': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-undef': 'error',
      'no-shadow': 'error',
      'prefer-arrow-callback': 'error',
      'max-statements-per-line': ['error', { max: 1 }],
      'require-jsdoc': 'off',
      'max-lines-per-function': 'off',

      // Code quality rules
      'max-depth': 'error',
      'max-lines': ['error', { max: 400 }],

      // React rules
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unknown-property': 'off',
      'react-hooks/exhaustive-deps': 'error',

      // Library-specific rules
      'lodash/prefer-lodash-method': 'off',
      'tailwindcss/no-custom-classname': 'off',

      // Prettier integration
      'prettier/prettier': 'warn',
    },
  },
];

export default eslintConfig;
