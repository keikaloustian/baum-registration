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
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        slideUpFade: "fadeIn 1.3s ease-in, slideUp 1.3s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
