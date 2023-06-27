/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    plugins: ["tailwindcss"],
    extends: [
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "plugin:tailwindcss/recommended",
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "prettier",
        "next",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.eslint.json",
    },
    settings: {
        "react": {
            version: "detect",
        },
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json",
            },
        },
        "tailwindcss": {
            callees: ["classNames"],
        },
    },
    rules: {
        "no-unused-vars": "warn",
        "tailwindcss/no-custom-classname": [
            "warn",
            {
                whitelist: [
                    "keen\\-(slider|slider__slide)",
                    "navigation-wrapper",
                ],
            },
        ],
        "no-underscore-dangle": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "variable",
                format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
            },
        ],
        "arrow-body-style": "warn",
        "import/no-extraneous-dependencies": "off",
        "import/prefer-default-export": "off",
        "import/order": [
            "error",
            {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    ["sibling", "parent"],
                    "index",
                    "unknown",
                ],
                "pathGroups": [
                    {
                        pattern: "react",
                        group: "builtin",
                        position: "before",
                    },
                ],
                "newlines-between": "always",
                "alphabetize": {
                    order: "asc",
                    caseInsensitive: true,
                },
                "pathGroupsExcludedImportTypes": ["react"],
            },
        ],

        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "react/function-component-definition": [
            2,
            { namedComponents: "arrow-function" },
        ],

        "jsx-a11y/label-has-associated-control": [
            2,
            {
                labelAttributes: ["label"],
                controlComponents: ["Controller"],
                depth: 3,
            },
        ],
    },
    overrides: [
        {
            files: ["**/*.config.{js,cjs}"],
            rules: {
                "@typescript-eslint/no-var-requires": "off",
            },
        },
    ],
};
