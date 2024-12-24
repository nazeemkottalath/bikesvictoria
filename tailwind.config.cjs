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
        darkPurple: '#5a01b3', // You can add the hover color too
      },
      backgroundImage: {
        'testimonial-gradient': 'radial-gradient(89.8% 46.9% at 50% 56.6%, #6b17a3 0%, rgba(5, 2, 41, 1) 100%)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
