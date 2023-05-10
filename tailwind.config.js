/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: "#313b3d",
        dgray: "#2b2d2a",
        mgray: "#58595B",
        lgray: "#d1d3d4",
        vpurple: "#6E00FF",
        dpink: "#FF00FF",
        elime: "#CCFF00",
      },
    },
  },
  plugins: [],
};
