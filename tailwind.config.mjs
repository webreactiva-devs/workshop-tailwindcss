/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "copper-rust": {
          50: "#FAF6F6",
          100: "#F5ECED",
          200: "#E5D1D2",
          300: "#D5B5B7",
          400: "#B67D82",
          500: "#96454C",
          600: "#873E44",
          700: "#5A292E",
          800: "#441F22",
          900: "#2D1517",
        },
      },
      fontFamily: {
        serif: ["Playwrite GB S", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require('@tailwindcss/forms')],
};
