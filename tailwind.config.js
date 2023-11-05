/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: {
          50: "#F0F2FF",
          100: "#D9E2FF",
          200: "#B7C5FF",
          300: "#95A8FF",
          400: "#739BFF",
          500: "#527CCF", // Your primary color
          600: "#3D63A3",
          700: "#2D4D7E",
          800: "#1F3860",
          900: "#141D88", // Your secondary color
        },
      },
      transitionProperty: {
        transform: "transform",
        // Add more properties as needed
      },
    },
  },
  plugins: [],
}

