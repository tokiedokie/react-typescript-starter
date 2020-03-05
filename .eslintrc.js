module.exports = {
    "ignorePatterns": [
        "src/graphql",
        "src/API.ts",
        "src/aws-exports.js",
        "jest.config.js",
        "webpack.config.js",
        "node_modules/"
    ],
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
};