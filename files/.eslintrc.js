module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "prettier"],
    "plugins": ["prettier"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        "browser": true
    },
    rules: {
        "no-nested-ternary": "warn",
        "react/jsx-props-no-spreading": "warn",
        "react/jsx-boolean-value": ["warn", "always"],
        "react/prop-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "prettier/prettier": "warn",
    },
    settings: {
        react: {
            version: "detect"
        }
    },
};
