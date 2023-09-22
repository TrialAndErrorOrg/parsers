// @ts-check
/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    require.resolve('prettier-plugin-svelte'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
}
