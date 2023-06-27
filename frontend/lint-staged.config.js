/** @type {import('lint-staged').Config} */
module.exports = {
    "*.{js,jsx,ts,tsx,cjs,css,md,json,json5,html}":
        "prettier --write --loglevel warn",
    "*.{ts,tsx,js,jsx,cjs}":
        "eslint --fix --report-unused-disable-directives --max-warnings 0",
};
