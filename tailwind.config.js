/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'lg': '1080px',
      'xl': '2560px',
      '2xl': '3440px',
    },
    extend: {},
  },
  plugins: [require("@catppuccin/tailwindcss")],
}

