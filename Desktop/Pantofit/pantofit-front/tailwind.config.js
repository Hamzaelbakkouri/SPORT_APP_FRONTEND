/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      extend: {
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        fontFamily: {
          montserrat: ["Montserrat"],
          lato: ["Lato"],
          garamond: ["Garamond"],
        },
        fontWeight: {
          hairline: 100,
          "extra-light": 100,
          thin: 200,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          "extra-bold": 800,
          black: 900,
        },
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#f5fbfe",
          100: "#eaf6fc",
          200: "#cbe9f8",
          300: "#abdcf4",
          400: "#6cc2eb",
          500: "#28C223",
          600: "#c21e53",
          700: "#227eaa",
          800: "#1b6588",
          900: "#16526f",
        },
        secondary: {
          50: "#feffff",
          100: "#fcfeff",
          200: "#f8fdff",
          300: "#f3fbff",
          400: "#eaf8ff",
          500: "#e1f5ff",
          600: "#cbdde6",
          700: "#a9b8bf",
          800: "#879399",
          900: "#6e787d",
        },
        pfblack: {
          100: "#0e0f10",
          200: "#16191c",
        },
      },

      screens: {
        xs: { max: "360px" },
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
}

