/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7420",
        primaryLight: "#EE8420",
        secondary: "#191A19",
      },
      fontSize: {
        "size-64": "64px",
        "size-34": "34px",
        "size-40": "40px",
        "size-48": "48px",
        "size-20": "20px",
        "size-24": "24px",
        "size-28": "28px",
        "size-18": "18px",
        "size-16": "16px",
        "size-14": "14px",
      },
      fontFamily: {
        comforter: ["Comforter\\ Brush", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        unlock: ["Unlock", "serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
