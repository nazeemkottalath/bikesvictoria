/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        purple: '#6701E6',  // Add custom purple color here
        darkPurple: '#5a01b3 !important', // You can add the hover color too
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
