// @ts-check

/**
 * @type {import('tailwindcss').Config}
 **/

// // @ts-expect-error shush
// const { tailwindcssOriginSafelist } = require('headlessui-float-react')

module.exports = {
  // safelist: [...tailwindcssOriginSafelist],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
